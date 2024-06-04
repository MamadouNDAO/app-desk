import {Component, OnInit, HostListener, Injector} from '@angular/core';
import {MeteoService} from "./meteo.service";
import { createAnimation } from "@ionic/core";
import {AlertController} from "@ionic/angular";
import {HttpClient} from "@angular/common/http";
import {TranspService} from "../transport-test/transp.service";
import {BasePage} from "../../base";
import {lockClosed} from "ionicons/icons";

@Component({
  selector: 'app-meteo-app',
  templateUrl: './meteo-app.page.html',
  styleUrls: ['./meteo-app.page.scss'],
})
export class MeteoAppPage extends BasePage implements OnInit {
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
  typeAnimate = 'animate__backInUp'
  constructor(injector: Injector,
    private MeteoServiceService: MeteoService,
    public alertController: AlertController,
    private http: HttpClient,
    private TransportSer: TranspService
  ) { super(injector);
    setInterval(() => {
     this.now = new Date().toString().split(' ')[4];
    }, 1);
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

  openBottomSheet() {
    this.typeAnimate = 'animate__backInUp'
    this.openClose = true;
  }

  closeBottomSheet() {
    this.typeAnimate = 'animate__bounceOutDown'
    this.openClose = false;
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
      this.GoogleArray = this.TransportSer.getDestination(this.input)
        .subscribe(response =>{
          if (response['status'] === 'OK') {
            const location = response['predictions'];
            this.autoCompletepredictions = location;


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

    if(city.name != 'Clichy'){
      city.meteoIcon = this.getIcon(city.weather[0].description);
      this.CitysArray.push(city);
      this.CitysArray = this.supprimerDoublonsParNom(this.CitysArray)

      localStorage.setItem("citys", JSON.stringify(this.CitysArray))
      this.openClose = false
    }else{
      this.openClose = false
    }

  }

 supprimerDoublonsParNom(tableau) {
    const nomsUniques = new Set();
    return tableau.filter((objet) => {
      // Si le nom de l'objet n'est pas déjà dans l'ensemble, l'ajouter et le conserver
      if (!nomsUniques.has(objet.name)) {
        nomsUniques.add(objet.name);
        return true; // Conserver l'objet dans le tableau résultant
      }
      return false; // Éliminer les doublons
    });
  }

  getTimeHoraire(timezone: any) {
    const currentDate = new Date();
    const utcOffsetMilliseconds = currentDate.getTimezoneOffset() * 60 * 1000;
    const dateUtc = new Date(currentDate.getTime() + utcOffsetMilliseconds)
    return new Date(dateUtc.getTime() + timezone * 1000);
  }


  handleError(error, city) {
    if (error.status == 404) {
      this.notFoundAlert(city);
    }
  }


  getCity(city) {


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
      this.icon = this.getIcon(this.weather.weather[0].description);
    });
  }

  private getIcon(description: string): string {
    let icon: string;

    switch (description) {
      case 'overcast clouds':
        icon = "cloud-outline";
        break;
      case 'clear sky':
        icon = "sunny-outline";
        break;
      case 'few clouds':
        icon = "cloud-outline";
        break;
      case 'broken clouds':
        icon = "cloud-outline";
        break;
      case 'shower rain':
        icon = "rainy-outline";
        break;
      case 'rain':
        icon = "thunderstorm-outline";
        break;
      case 'thunderstorm':
        icon = "rainy-outline";
        break;
      case 'snow':
        icon = "snow-outline";
        break;
      case 'mist':
        icon = "cloud-outline";
        break;
      default:
        icon = "partly-sunny-outline";
    }

    return icon;
  }

  removeVille(ville: any) {
    let indexASupprimer = this.CitysArray.findIndex(objet => objet.name === ville.name);

    if (indexASupprimer !== -1) {
      this.CitysArray.splice(indexASupprimer, 1);
      localStorage.setItem("citys", JSON.stringify(this.CitysArray))
    }
  }

  ngOnInit() {
    //(<HTMLStyleElement>document.querySelector(".bottomSHeet")).style.display = "none";
    this.ParisWeather()
    if(localStorage.getItem("citys")){
      this.CitysArray = JSON.parse(localStorage.getItem("citys"))

    }

  }

}
