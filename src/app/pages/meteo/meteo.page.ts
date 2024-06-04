import {Component, HostListener, Injector, OnInit} from '@angular/core';
import { MeteoServiceService } from './meteo-service.service';
import { createAnimation } from "@ionic/core";
import { ModalController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
//import { Button } from 'selenium-webdriver';
import { HttpClient } from '@angular/common/http';
import { TranspService } from '../transport/transp.service';
import {BasePage} from "../../base";
import {Observable} from "rxjs";

@Component({
  selector: 'app-meteo',
  templateUrl: './meteo.page.html',
  styleUrls: ['./meteo.page.scss'],
})
export class MeteoPage extends BasePage implements OnInit {

  openClose = false;
  lat: any;
  lon: any;
  weather: any;
  icon: any;
  iconSearch: any;
  searchWeather: any;
  today = new Date();
  jstoday = '';
  now: string;
  GoogleArray: any = [];

  showComplete: boolean = false;
  autoCompletepredictions: any = [];
  input: string
  CitysArray: any[] = [];


  // constructor(private MeteoServiceService: MeteoServiceService,
  //   public alertController: AlertController,
  //   private http: HttpClient,
  //   private TransportSer: TranspService) {
  //     setInterval(() => {
  //       this.now = new Date().toString().split(' ')[4];
  //     }, 1);
  //   }
  constructor(injector: Injector,
              private MeteoServiceService: MeteoServiceService,
              public alertController: AlertController,
              private http: HttpClient,
              private TransportSer: TranspService
  ) {
    super(injector);
  }



  @HostListener('keydown', ['$event'])

  getPosition() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((resp) =>{
        this.lat = resp.coords.latitude;
        this.lon =  resp.coords.longitude;
      });
    }
  }

  toogleBottomSheet(selectedRoom){

  }

  openBottomSheet() {
    const animation = createAnimation()
      .addElement(document.querySelector(".bottomSHeet"))
      .easing("ease-in-out")
      .duration(400)
      .direction("alternate")
      .keyframes([
        { height: "0px", transform: "scale(1)", opacity: "1", },
        { height: "15rem", transform: "scale(1)", opacity: "1" },
      ]);
    (<HTMLStyleElement>document.querySelector(".bottomSHeet")).style.display = "block";
    this.openClose = true;
    animation.play();
  }

  closeBottomSheet() {
    const animation = createAnimation()
      .addElement(document.querySelector(".bottomSHeet"))
      .easing("ease-in-out")
      .duration(300)
      .direction("alternate")
      .keyframes([
        { height: "15rem", },
        { height: "0px", },
      ]);
    this.openClose = false;
    animation.play();
  }

  bottomShet() {
    if (this.openClose) {
      this.closeBottomSheet();
    } else {
      this.openBottomSheet();
    }
  }

  myAutoMapComplete(event: KeyboardEvent) {
    this.input= (event.target as HTMLInputElement).value;
    if(this.input.length > 2) {
      this.showComplete = true;
      this.GoogleArray = this.TransportSer.getDestination(this.input,this.lat,this.lon)
        .subscribe(response =>{
          if (response['status'] === 'OK') {
            const location = response['predictions'];
            this.autoCompletepredictions = location;
            console.log(this.autoCompletepredictions);
          }
        });
    }else{
      this.showComplete = false;

    }
  }


  async introuvableAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: '',
      subHeader: '',
      message: 'Entrez une ville',
      buttons: [
        {
          text: 'Ok',
        }
      ]
    });
    await alert.present();
  }


  async notFoundAlert(city) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: '',
      subHeader: '',
      message: city + ' : ' + 'Ville introuvable',
      buttons: [
        {
          text: 'Ok',

        }
      ]
    })
  }

  addCity(city: any) {
    switch (city.weather[0].description) {
      case 'overcast clouds':
        city.weather[0].description = "cloud-outline";
        break;
      case 'clear sky':
        city.weather[0].description = "sunny-outline";
        break;
      case 'few clouds':
        city.weather[0].description = "partly-sunny-outline";
        break;
      case 'broken clouds':
        city.weather[0].description = "cloud-outline";
        break;
      case 'shower rain':
        city.weather[0].description = "rainy-outline";
        break;
      case 'rain':
        city.weather[0].description = "thunderstorm-outline";
        break;
      case 'thunderstorm':
        city.weather[0].description = "rainy-outline";
        break;
      case 'snow':
        city.weather[0].description = "snow-outline";
        break;
      case 'mist':
        city.weather[0].description = "cloud-outline";
        console.log("mist")
        break;
      default:
        city.weather[0].description = "partly-sunny-outline";
    }
    this.CitysArray.push(city);
  }


  handleError(error, city) {
    if (error.status == 404) {
      this.notFoundAlert(city);
    }
  }


  getCity(city) {
    console.log("my city",city);

    if (city.value !== '') {
      this.MeteoServiceService.getWeatherDataByCityName(city).subscribe(data => {
        this.searchWeather = data;
        this.addCity(this.searchWeather);
        this.showComplete= false;
        this.input= ""
      }, (error) => this.handleError(error, city.value))
    } else {
      this.introuvableAlert();
    }
  }

  ParisWeather() {
    this.MeteoServiceService.parisWeather().subscribe(data => {
      this.weather = data;
      switch (this.weather.weather[0].description) {
        case 'overcast clouds':
          this.icon = "cloud-outline";
          break;
        case 'clear sky':
          this.icon = "sunny-outline";
          break;
        case 'few clouds':
          this.icon = "partly-sunny-outline";
          break;
        case 'broken clouds':
          this.icon = "cloud-outline";
          break;
        case 'shower rain':
          this.icon = "rainy-outline";
          break;
        case 'rain':
          this.icon = "thunderstorm-outline";
          break;
        case 'thunderstorm':
          this.icon = "rainy-outline";
          break;
        case 'snow':
          this.icon = "snow-outline";
          break;
        case 'mist':
          this.icon = "cloud-outline";
          break;
        default:
          this.icon = "partly-sunny-outline";
      }
    });
  }

  ngOnInit() {


    (<HTMLStyleElement>document.querySelector(".bottomSHeet")).style.display = "none";
    this.ParisWeather()

    console.log(this.router.url)

    console.log(this.stateService.getToken())


  }

  goTo(notifications: string) {
    
  }
}

