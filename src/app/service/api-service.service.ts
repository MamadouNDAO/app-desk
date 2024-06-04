// import { Injectable } from '@angular/core';
//
// @Injectable({
//   providedIn: 'root'
// })
// export class ApiServiceService {
//
//   constructor() { }
// }

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrl = 'https://api-themis.cloud.iviflo.com';

  constructor(private http: HttpClient) { }

  private getHeaders(): HttpHeaders {
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('userToken')
    });
  }

  public get(url: string): Observable<any> {
    return this.http.get(this.baseUrl + url, { headers: this.getHeaders() })
      .pipe(
        catchError((error: any) => Observable.call(error.json()))
      );
  }

  public post(url: string, data: any): Observable<any> {
    return this.http.post(this.baseUrl + url, JSON.stringify(data), { headers: this.getHeaders() })
      .pipe(
        catchError((error: any) => Observable.call(error.json()))
      );
  }

  public put(url: string, data: any): Observable<any> {
    return this.http.put(this.baseUrl + url, JSON.stringify(data), { headers: this.getHeaders() })
      .pipe(
        catchError((error: any) => Observable.call(error.json()))
      );
  }

  public delete(url: string): Observable<any> {
    return this.http.delete(this.baseUrl + url, { headers: this.getHeaders() })
      .pipe(
        catchError((error: any) => Observable.call(error.json()))
      );
  }
}
