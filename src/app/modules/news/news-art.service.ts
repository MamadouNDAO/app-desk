import { Injectable } from '@angular/core';
import { ArticleMocks } from 'src/mocks/article.mocks';
import { HttpClient, HttpParams } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class NewsArtService {

  url ='https://api.openweathermap.org/data/2.5/weather?&units=metric';
  apiKey= '3c6d3826d4a217da0f05730829c10e12';

  constructor(private artMocks: ArticleMocks,private http: HttpClient) { }

  getArticles(){
    return this.artMocks.getAll();
  }

  parisWeather(){
    const params = new HttpParams()
    .set('q','paris')
    .set('units','imperial')
    .set('appid',this.apiKey);
    return this.http.get(this.url,{ params });
  }
}
