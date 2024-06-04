// import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RestaurantMocks } from 'src/mocks/restauration.mocks';

@Injectable({
  providedIn: 'root'
})
export class RestaurationService {

  urlApi ="https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=48.8588443,2.2943506&radius=500&type=restaurant&key=AIzaSyB8EAwtn4Xo1mWWyQmmlPyOYvHre6NeRgE"

  constructor(private RestaurantMocks : RestaurantMocks, ) { }

  getRestaurantProducts(){
    return this.RestaurantMocks.getAll();
  }

  getRestaurants() {

    return null
    //  this.http.get(this.urlApi, {

    //   headers: new HttpHeaders({
    //     'Accept': 'application/xml'
    //   }),
    //   responseType: 'text'
    // })
  }

}



