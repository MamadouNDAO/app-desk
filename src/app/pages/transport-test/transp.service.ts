import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})


export class TranspService {
  urlApi = 'https://api.navitia.io/v1/journeys?';
  key = '5f67dc75-7cc8-44ca-86ba-7f0f3b1d5ca2:';
  googleUrl = 'https://maps.googleapis.com/maps/api/place/autocomplete/json?';
  googleKey = 'AIzaSyDeha0SPOYrlNSFVpPaKoeFyscLAf5ifhU';

  request;
  coords = [];
  url: any;

  constructor(private http: HttpClient) { }

  getDestination(input) {
    //return this.http.get(this.googleUrl+"address="+encodeURIComponent(input)+"&key="+this.googleKey)
    //return this.http.get(this.googleUrl+'input='+input+'&'+'types=establishment|geocode&location:'+lat+','+long+'@&radius=500&language=en&key='+this.googleKey);
    //return this.http.get('https://preprod.bo-technatt.com/api/google/autocompletion/'+input);
    return this.http.get('https://api-themis.cloud.iviflo.com/api/v1/transport/google/autocompletion/'+input);
  }
  getData(lat, long, coordinates) {
    const maxDuration = 2000000;
    // console.log("coordinates", coordinates);
    this.url = this.urlApi+`from=${coordinates.lng};${coordinates.lat}&to=${long};${lat}`+'&max_duration='+maxDuration;
    return this.http.get(this.url, {
      headers: new HttpHeaders({
        authorization: 'Basic ' + btoa(this.key),
      }),
      responseType: 'json',
    });
  }
}


