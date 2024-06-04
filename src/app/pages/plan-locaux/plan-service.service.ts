import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlanServiceService {

  public static API_BON_PLAN = 'AIzaSyCOX1vdDTHBxEk2hd0RccIhVzBrLPrUKkA';
  public static url= 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?'

  // long = navigator.geolocation.getCurrentPosition(resp => resp.coords.latitude );
  // lat = navigator.geolocation.getCurrentPosition(resp => resp.coords.longitude );
  constructor(private http:HttpClient) { }

  googleInit(type, lat, long) {
    console.log('my position', 'lat:',lat, 'long:',long);

    let params = new HttpParams()
    .set("location", `${lat},${long}`) //'48.8602973,2.3436415'
    .set("radius",'500')
    .set("type",type)
    .set("lang",'fr')
    .set("key",'AIzaSyCOX1vdDTHBxEk2hd0RccIhVzBrLPrUKkA')
    return this.http.get('https://maps.googleapis.com/maps/api/place/nearbysearch/json?',{params})
  }
}
