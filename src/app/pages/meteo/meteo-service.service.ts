import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class   MeteoServiceService{

  url ='https://api.openweathermap.org/data/2.5/weather?units=metric';
  apiKey= '3c6d3826d4a217da0f05730829c10e12';
  //apiKey= 'd82150c34a61baf9dd8869ba5eaedce6';

  constructor(private http:HttpClient) { }


  getWeatherDataByCoords(lat,lon){
    let params = new HttpParams()
    .set('lat',lat)
    .set('lon',lon)
    .set('units','imperial')
    .set('appid',this.apiKey)
    return this.http.get(this.url,{ params })
  }
  getWeatherDataByCityName(city:string){
    let params = new HttpParams()
    .set('q',city)
    .set('units','imperial')
    .set('appid',this.apiKey)
    return this.http.get(this.url,{ params })
  }
  parisWeather(){
    let params = new HttpParams()
    .set('q','paris')
    .set('units','imperial')
    .set('appid',this.apiKey)
    return this.http.get(this.url,{ params })
  }



}
