import {ChangeDetectorRef, Component, HostListener, Injector, OnDestroy, OnInit} from '@angular/core';
import {TranspService} from "./transp.service";
import {GeocodingService} from "./geocoding.service";
import {GoogleDirectionService} from "./google-direction.service";
import {BasePage} from "../../base";
import TravelMode = google.maps.TravelMode;

@Component({
  selector: 'app-transport-test',
  templateUrl: './transport-test.page.html',
  styleUrls: ['./transport-test.page.scss'],
})
export class TransportTestPage extends BasePage implements OnInit, OnDestroy {
  TransportArray: any = [];
  GoogleArray: any = [];
  dataArray: any = [];
  long = 2.308617
  lat = 48.895686
  input: any = '';
  inputBoolean: boolean = false;
  showComplete: boolean = false;
  transportListing= [];
  mylat: any;
  mylong: any;
  zoom: number = 8;
  center: any;
  destiCoord: any;
  coordinates: { lat: number; lng: number };
  description: string;
  cityDestination: string;
  isData: boolean = false
  minVelo: number
  minVoiture: number
  markers: any = [
    { latitude: 51.678418, longitude: 7.809007 },
    { latitude: 51.378418, longitude: 7.609007 },
  ];

  autoCompletepredictions: any = [];
  directions: any = [];
  directionsService: any = new google.maps.DirectionsService();
  directionsDisplay: any = new google.maps.DirectionsRenderer();
  polyline = new google.maps.Polyline({
    path: [],
    strokeColor: '#FF0000',
    strokeWeight: 3
  });

  distance: string = '';
  duration: string = '';
  bounds = new google.maps.LatLngBounds();
  currentTraject: any = {};
  title = ""
  isPopup: boolean = false
  isDuration: boolean = false

  constructor(public injector: Injector, private TransportSer: TranspService,
              private geocodingService: GeocodingService,
              private googleDirectionService: GoogleDirectionService,
              private chg: ChangeDetectorRef
  ) { super(injector)}

  @HostListener('keydown', ['$event'])
  InputValue() {
    this.inputBoolean = true;
    this.GoogleArray = this.TransportSer.getDestination(this.input);
    this.GoogleArray.subscribe((transport) => {
      console.log('transporta',transport);
    }) ;
    return this.GoogleArray;
  }


  getPosition() {
    this.center = {lat: this.lat, lng: this.long};
    /*if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((resp) =>{
        this.lat = resp.coords.latitude;
        this.long =  resp.coords.longitude;
        this.center = {lat: this.lat, lng: this.long};
      });
    }*/
  }

  myAutoMapComplete(event: KeyboardEvent) {
    this.input= (event.target as HTMLInputElement).value;

    if(this.input.length > 2) {
      this.showComplete = true;
      this.GoogleArray = this.TransportSer.getDestination(this.input)
        .subscribe(response =>{

          if (response['status'] === 'OK') {
            const location = response['predictions'];
            this.autoCompletepredictions = location;

          }
        });
    }
  }

  reservDescript(completion) {
    this.description = completion.description;
    this.cityDestination = completion.description;
    this.input = this.description;
    this.showComplete = false;
    let geocoder = new google.maps.Geocoder();

    geocoder.geocode({ placeId: completion.place_id }).then(({results}) => {
      this.mylat = results[0].geometry.location.lat();
      this.mylong = results[0].geometry.location.lng();
      this.navitiaApi();
      this.isData = true
      return true;
    }).catch((e) => {
        window.alert('Geocoder failed due to: ' + e);
        return false;
      }
    );
    this.initialize('DRIVING');
    this.chg.detectChanges()
  }

  openMap(travelMode: TravelMode) {
    const mapOptions = {
      zoom: 12,
      center: { lat: this.lat, lng: this.long }
    };

    let map = new google.maps.Map(document.getElementById('map'), mapOptions);
    const directionsDisplay = new google.maps.DirectionsRenderer({map});
    const direction = this.getDirectionByTravelMode(travelMode);

    directionsDisplay.setDirections(direction || this.allDirections[0]);
    if(this.isData){
      this.openBottomSheet();
    }

  }

  getMinutes(s: number) {
    const res = s / 60;
    return Math.floor(res) + ' minutes';
  }

  travelModes = [
    TravelMode.DRIVING,
    TravelMode.WALKING,
    TravelMode.BICYCLING,
    TravelMode.TRANSIT,
  ];

  allDirections: google.maps.DirectionsResult[] = [];

  initialize(travelmode= 'DRIVING') {
    const mapOptions = {
      zoom: 12,
      center: { lat: this.lat, lng: this.long }
    };

    let map = new google.maps.Map(document.getElementById('map'), mapOptions);
    const directionsService = new google.maps.DirectionsService();
    const directionsDisplay = new google.maps.DirectionsRenderer({map});

    let promises = this.travelModes.map(travelMode => {
      return directionsService.route({
        origin: new google.maps.LatLng(this.lat, this.long),
        destination: this.cityDestination,
        travelMode
      })
    });

    Promise.all([
      promises[0].catch(_ => null),
      promises[1].catch(_ => null),
      promises[2].catch(_ => null),
    ]).then(results => {
      this.allDirections = results;
    }).catch(error => alert('Une erreur est survenue'));

    directionsService.route({
      origin: new google.maps.LatLng(this.lat, this.long),
      destination: this.cityDestination,
      travelMode: google.maps.TravelMode.WALKING
    }, (response, status) => {
      console.log(response);
      this.duration = response.routes[0].legs[0].duration.text;
      this.distance = response.routes[0].legs[0].distance.text;
      this.isDuration = true;

      if (status === google.maps.DirectionsStatus.OK) {
        directionsDisplay.setDirections(response);
      } else {
        console.error('Directions request failed due to ' + status);
      }

      this.chg.detectChanges()
    }).then(r => console.log(r));

  }

  navitiaApi() {
    const destinationCoords = {lat: this.mylat, lng: this.mylong};
    this.TransportArray = this.TransportSer.getData(this.lat, this.long, destinationCoords);
    if (this.InputValue()) {
      this.GoogleArray = this.TransportSer.getDestination(destinationCoords)
        .subscribe(response =>{
          //console.log('GoogleArray', response);
        });
    }
    if (this.TransportArray) {
      this.TransportArray
        .subscribe(arg => {
          console.log(arg)
          this.transportListing.push(arg.journeys[0].sections);
          //console.log('===============transportListing', this.transportListing);
          this.dataArray.push(arg);
          this.currentTraject = arg.journeys[0];
          //console.log(this.currentTraject);
         // console.log(arg.journeys[0].sections);
        });
      this.chg.detectChanges()
    }
  }

  openBottomSheet() {
    this.isPopup = true
  }

  closeBottomSheet(){
    this.isPopup = false
  }

  ngOnInit() {
    if(!localStorage.getItem("reload-transport")){
      localStorage.setItem("reload-transport", 'yes')
      window.location.reload()
    }
    this.getPosition();
    this.title = "Transport"
  }

  clearSearch() {
    this.showComplete = false
    this.duration = null
  }

  getDirectionByTravelMode(mode: TravelMode) {
    // @ts-ignore
    return this.allDirections.find(direction => direction.request.travelMode == mode.valueOf());
  }

  getDuration(mode: TravelMode): string {
    const direction = this.getDirectionByTravelMode(mode);
    return direction ? direction.routes[0].legs[0].duration.text: '';
  }
  getDistance(mode: TravelMode): string {
    const direction = this.getDirectionByTravelMode(mode);
    return direction ? direction.routes[0].legs[0].distance.text: '';
  }

  reinitData(){
    this.isData = false
    this.input = ''
    window.location.reload()
  }

  protected readonly TravelMode = TravelMode;

  ngOnDestroy(): void {
    localStorage.removeItem("reload-transport")
  }
}
