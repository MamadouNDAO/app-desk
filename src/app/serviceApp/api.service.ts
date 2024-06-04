import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import { CreateUser } from "../../model/user";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apisHost = "https://api-themis.cloud.iviflo.com/api/v1"
 // apisHost = "https://dev-api-themis.cloud.iviflo.com/api/v1"

  token: string = localStorage.getItem('userToken')
  paramToken: string = '?token='+this.token
  constructor(private http: HttpClient) { }

  private getHeaders(): HttpHeaders {
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('userToken')
    });
  }

  inscription(data: CreateUser): Observable<any>{
    return this.http.post(this.apisHost+'/user/register/mobile/', data)
  }

  login(data: any): Observable<any>{
    return this.http.post(this.apisHost+'/security/login', data)
  }

  desinscription(): Observable<any>{
    return this.http.post(this.apisHost+'/user/unsubscribe', null)
  }

  listService(): Observable<any> {
    return this.http.get(this.apisHost+'/service')
  }

  getUrlSSO(data: any) : Observable<string> {
    return this.http.post(this.apisHost+'/anonym/organization/getsso', data, { responseType: 'text' })
  }

  infoUser(tokenId: string): Observable<any> {
    return this.http.get(this.apisHost+'/security/token/'+tokenId)
  }

  getSalles(filtre: string): Observable<any> {
    return this.http.get(this.apisHost+'/room?select=reservationStatus'+filtre)
  }

  sendReservation(data: any, idRoom: string): Observable<any> {
    return this.http.post(this.apisHost+'/room/'+idRoom+'/reservation', data)
  }

  updateReservation(data: any, idReservation: number): Observable<any> {
    return this.http.post(this.apisHost+'/room/reservation/'+idReservation, data)
  }

  getHistoriqueReservation(): Observable<any> {
    return this.http.get(this.apisHost+'/reservation/user')
  }

  getActualite(): Observable<any> {
    return this.http.get(this.apisHost+'/news/posts?range=0-15')
  }

  libererSalle(idR: number) : Observable<any> {
    return this.http.delete(this.apisHost+'/reservation/'+idR)
  }

  getCategories() :Observable<any> {
    return this.http.get(this.apisHost+'/category_ticket')
  }

  getHistoryConstat(iduser: any) : Observable<any> {
    return this.http.get(this.apisHost+'/ticket/?opener='+iduser)
  }

  setFavoris(idPost: any) : Observable<any> {
    return this.http.post(this.apisHost+'/news/posts/'+idPost+'/favorite', '')
  }

  getEtage() : Observable<any> {
    return this.http.get(this.apisHost+'/floor')
  }

  getUsers() : Observable<any> {
    return this.http.get(this.apisHost+'/user/')
  }

  enabledNotif(data: any) : Observable<any> {
    return this.http.post(this.apisHost+'/user/service-enabled', data)
  }

  setTrajetResrvation(data: any,idReserv) : Observable<any> {
    return this.http.post(this.apisHost+'/reservation/'+idReserv+'/transport', data)
  }

  setTokenNotif(data: any) : Observable<any> {
    return this.http.post(this.apisHost+'/parameters/', data)
  }

  getSallesObscure() : Observable<any> {
    return this.http.get(this.apisHost+'/room/norooms')
  }
}

