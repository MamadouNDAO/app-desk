import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import {environment} from "../../../environments/environment";
// const corsUrl = 'https://cors-anywhere.herokuapp.com/';
const corsUrl = environment.corsUrl4;

@Injectable({
  providedIn: 'root'
})
export class JournauxService {
  $
  urlApi = corsUrl+'https://rss.smart.iviflo.com/i/?a=rss&get=c_2&hours=168';  // URL de l'API

  constructor(private http: HttpClient) {}

  getData () {

    return this.http.get(this.urlApi, {

      headers: new HttpHeaders({
        'Accept': 'application/xml'
      }),
      responseType: 'text'
    })
  }




}
