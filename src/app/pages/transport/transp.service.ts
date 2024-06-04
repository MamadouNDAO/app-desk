import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import {environment} from "../../../environments/environment";
const corsUrl = '';
// const corsUrl = environment.corsUrl;
@Injectable({
  providedIn: 'root'
})


export class TranspService {
  urlApi = 'https://api.navitia.io/v1/journeys?';
  key = '5f67dc75-7cc8-44ca-86ba-7f0f3b1d5ca2:';
  base64Key = 'NWY2N2RjNzUtN2NjOC00NGNhLTg2YmEtN2YwZjNiMWQ1Y2EyOg==';
  googleUrl = corsUrl+'https://maps.googleapis.com/maps/api/place/autocomplete/json?';
  googleKey = /*"AIzaSyDeha0SPOYrlNSFVpPaKoeFyscLAf5ifhU"*/ environment.googleKey;

  request;
  coords = [];
  url: any;

  constructor(private http: HttpClient) { }

  changeCoordinate(input){
    return this.http.get(`https://nominatim.openstreetmap.org/search?format=json&q='${input} france`)
    // .subscribe(
    //   (data: any[]) => {
    //     this.displayAdresse = true;
    //     this.adresseByLoc = data;
    //     console.log(data);
    //   },
    //   (error) => {
    //     console.log('Erreur ! : ' + error);
    //   }
    // );;
  }
  getDestination(input, lat, long) {
    console.log('my input:', input, 'my latitude:', lat, 'my longitude:', long );
    //return this.http.get(this.googleUrl+"address="+encodeURIComponent(input)+"&key="+this.googleKey)
    return this.http.get(this.googleUrl+'input='+input+'&'+'types=establishment|geocode&location:'+lat+','+long+'@&radius=500&language=en&key='+this.googleKey);
  }
  getData(lat, long, coordinates) {
    const maxDuration = 2000000;
    // console.log("coordinates", coordinates);
    this.url = this.urlApi+`from=${long};${lat}&to=${coordinates.lng};${coordinates.lat}`+'&max_duration='+maxDuration;
    //this.url = this.urlApi+`from=2.3749036%3B48.8467927&to=2.2922926%3B48.8583736&`+'&max_duration='+maxDuration;
    //this.url = this.urlApi+`from=2.3435486;48.8603313&to=${coordinates.lng};${coordinates.lat}`+'&max_duration='+maxDuration;
    return this.http.get(this.url, {
      headers: new HttpHeaders({
        'Authorization': 'Basic ' + btoa(this.key),
      }),
      responseType: 'json',
    });
  }
}

