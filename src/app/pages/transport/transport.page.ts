import {Component, OnInit, AfterContentInit, HostListener, Injector,NgZone, ElementRef, ViewChild } from '@angular/core';
import { TranspService } from './transp.service';
import { createAnimation, NavController } from '@ionic/angular';
import { Geolocation } from '@capacitor/geolocation';
import { GeocodingService } from './transport.service';
import { GoogleDirectionService } from './google-direction.service';
import {BasePage} from "../../base";

declare var google: any;
var geocoder: any;
var map: any;

@Component({
  selector: 'app-transport',
  templateUrl: './transport.page.html',
  styleUrls: ['./transport.page.scss'],
})
export class TransportPage extends BasePage implements OnInit, AfterContentInit  {
  @ViewChild('search')
  public searchElementRef!: ElementRef;
  TransportArray: any = [];
  GoogleArray: any = [];
  dataArray: any = [];
  long;
  lat;
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
  markers: any = [
    { latitude: 51.678418, longitude: 7.809007 },
    { latitude: 51.378418, longitude: 7.609007 },
  ];

  favoris: string[] = []

  autoCompletepredictions: any[] = [];
  directions: any = [];
  directionsService: any = new google.maps.DirectionsService();
  directionsDisplay: any = new google.maps.DirectionsRenderer();
  polyline = new google.maps.Polyline({
    path: [],
    strokeColor: '#FF0000',
    strokeWeight: 3
  });
  title = ""
  distance: string = '';
  duration: string = '';
  bounds = new google.maps.LatLngBounds();
  currentTraject: any = {};
  latitude!: any;
  longitude!: any;

  constructor(public injector: Injector,
              private TransportSer: TranspService,
              private geocodingService: GeocodingService,
              private ngZone: NgZone,
              private googleDirectionService: GoogleDirectionService) {
    super(injector)
  }

  @HostListener('keydown', ['$event'])

  InputValue() {
    console.log("here", this.input)
    this.inputBoolean = true;
    console.log("search", this.searchElementRef.nativeElement)
    let autocomplete = new google.maps.places.Autocomplete(
      this.searchElementRef.nativeElement
    );
    console.log("autocomplete",autocomplete);
    // this.map.controls[google.maps.ControlPosition.TOP_CENTER].push(
    //   this.searchElementRef.nativeElement
    // );
    autocomplete.addListener('place_changed', () => {
      this.ngZone.run(() => {
        //get the place result
        let place: google.maps.places.PlaceResult = autocomplete.getPlace();

        //verify result
        if (place.geometry === undefined || place.geometry === null) {
          return;
        }

        console.log({ place }, place.geometry.location?.lat(), place.geometry.location?.lng());

        //set latitude, longitude and zoom
        this.latitude = place.geometry.location?.lat();
        this.longitude = place.geometry.location?.lng();
        // this.center = {
        //   lat: this.latitude,
        //   lng: this.longitude,
        // };
        this.mylat = this.latitude;
        this.mylong = this.longitude;
        this.navitiaApi();
      });
    });
    // console.log("here", this.input)
    // this.GoogleArray = this.TransportSer.getDestination(this.input,this.lat,this.long);
    this.GoogleArray = this.TransportSer.changeCoordinate(this.input);
    this.GoogleArray.subscribe((transport) => {
      console.log('transporta',transport);
    }) ;
    return this.GoogleArray;
  }


  getPosition() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((resp) =>{
        //console.log("coordinate", resp);
        this.lat = resp.coords.latitude;
        this.long =  resp.coords.longitude;
        this.center = {lat: this.lat, lng: this.long};
      });
    }
    // Geolocation.getCurrentPosition().then((position) => {
    //   this.lat = position.coords.latitude;
    //     this.long = position.coords.longitude;
    //     this.center = {lat: this.lat, lng: this.long};
    //  }).catch((error) => {
    //    console.log('Error getting location', error);
    //  });
  }

  // getCoordinates(adress) {
  //   this.input = '';
  //   this.geocodingService.getCoordinates(adress).then(
  //     (coordinates) => {
  //       this.coordinates = coordinates;
  //       this.openBottomSheet();
  //     },
  //     (error) => {
  //       console.error(error);
  //     }
  //   );
  // }

  myAutoMapComplete(event: KeyboardEvent) {
           this.input= (event.target as HTMLInputElement).value;

    if(this.input.length > 2) {
      this.showComplete = true;
          // console.log('GoogleArray this.input', this.input);
          // this.autoCompletepredictions = transport;
          // console.log("auto",this.autoCompletepredictions)
      this.GoogleArray = this.TransportSer.changeCoordinate(this.input)
        .subscribe((response : any[])=>{
           console.log('GoogleArray', response);
           this.autoCompletepredictions = response;
          // if (response['status'] === 'OK') {
          //   const location = response['predictions'];

          //   // console.log(this.autoCompletepredictions);
          // }
        });
    }
  }

  reservDescript(completion) {
    console.log(completion);
    this.description = completion.display_name;
    this.cityDestination = completion.display_name;
    this.input = this.description;
    this.showComplete = false;
    this.mylat = completion.lat;
    this.mylong = completion.lon;
    this.navitiaApi();
    return true;
    // geocoder = new google.maps.Geocoder();
    // // console.log(geocoder);
    // geocoder.geocode({ placeId: completion.place_id }).then(({results}) => {

    // }).catch((e) => {
    //     window.alert('Geocoder failed due to: ' + e);
    //     return false;
    //   }
    // );
  }

  openMap(travelmode='DRIVING') {
    this.initialize(travelmode);
    this.openBottomSheet();
  }

  getMinutes(s: number) {
    const res = s / 60;
    return Math.floor(res) + ' minutes';
  }

  initialize(travelmode= 'DRIVING') {
    // BICYCLING = 'BICYCLING',
    //   DRIVING = 'DRIVING',
    //   TRANSIT = 'TRANSIT',
    //   TWO_WHEELER = 'TWO_WHEELER',
    //   WALKING = 'WALKING',
    const mapOptions = {
      zoom: 12,
      center: { lat: this.lat, lng: this.long }
    };
    map = new google.maps.Map(document.getElementById('map'), mapOptions);
    const directionsService = new google.maps.DirectionsService();
    const directionsDisplay = new google.maps.DirectionsRenderer({map});

    directionsService.route({
      origin: new google.maps.LatLng(this.lat, this.long),
      destination: this.cityDestination,
      travelMode: google.maps.TravelMode[travelmode]
    }, (response, status) => {
      console.log(response);
      this.duration = response.routes[0].legs[0].duration.text;
      this.distance = response.routes[0].legs[0].distance.text;
      if (status === google.maps.DirectionsStatus.OK) {
        directionsDisplay.setDirections(response);
      } else {
        console.error('Directions request failed due to ' + status);
      }
    });

  }

  navitiaApi() {
    const destinationCoords = {lat: this.mylat, lng: this.mylong};
    this.TransportArray = this.TransportSer.getData(this.lat, this.long, destinationCoords);
    // if (this.InputValue()) {
    //   this.GoogleArray = this.TransportSer.getDestination(destinationCoords, this.lat, this.long)
    //     .subscribe(response =>{
    //       console.log('GoogleArray', response);
    //     });
    // }
    if (this.TransportArray) {
      this.TransportArray
        .subscribe(arg => {
          console.log("arg====>",arg)
          // this.transportListing.push(arg.journeys[0].sections);
          // console.log('===============transportListing', this.transportListing);
          // this.dataArray.push(arg);
          this.transportListing.push(arg.journeys[0].sections);
          console.log('===============transportListing', this.transportListing);
          this.dataArray.push(arg);
          this.currentTraject = arg.journeys[0];
          console.log("current transport",this.currentTraject);
          console.log(arg.journeys[0].durations);
        });
    }
  }

  openBottomSheet() {
    (<HTMLStyleElement>document.querySelector("#cartoTransportBottomSheet")).style.display ="block";
    const animation = createAnimation()
      .addElement(document.querySelector("#cartoTransportBottomSheet"))
      .easing("ease-in-out")
      .duration(400)
      .direction("alternate")
      .keyframes([
        { height: "0px", transform: "scale(1)", opacity: "1",},
        { height: "26rem", transform: "scale(1)", opacity: "1" },
      ]);
    animation.play();
  }

  closeBottomSheet(){
    const animation = createAnimation()
      .addElement(document.querySelector("#cartoTransportBottomSheet"))
      .easing("ease-in-out")
      .duration(300)
      .direction("alternate")
      .keyframes([
        { height: "26rem",},
        { height:  "0px", opacity: "0", },
      ]);
    animation.play();
  }


  ngOnInit() {
    this.getPosition();
    this.title = localStorage.getItem("theme") === "green" ? "Se déplacer" : "Transport"
  }

  ngAfterContentInit() {
     //this.initialize();
  }
  goTo(page: string) {
    this.router.navigate([page])
  }

  makeFavorite(fav: string) {
    if (this.favoris.includes(fav)) {
      const index = this.favoris.indexOf(fav);
      if (index !== -1) {
        this.favoris.splice(index, 1);
      }
    }else {
      this.favoris.push(fav);
    }

  }

  isFavorite(word: string): boolean {
    return this.favoris.includes(word);
  }
}
