import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class GoogleDirectionService {
  constructor(private http: HttpClient) {}

  getCoordinates(input: string) {
    const API_KEY = "AIzaSyDeha0SPOYrlNSFVpPaKoeFyscLAf5ifhU"; //"AIzaSyB8EAwtn4Xo1mWWyQmmlPyOYvHre6NeRgE";
    const API_URL = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
       input
    )}&key=${API_KEY}`;
    //const API_URL= `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${input}&types=(cities)&language=pt_BR&key=${API_KEY}`

    return this.http.get(API_URL).toPromise().then(
      (data) => {
        console.log("dggggg",data);

        if (data["status"] === "OK") {
          const location = data["results"][0]["geometry"]["location"];
          return { lat: location["lat"], lng: location["lng"] };
        } else {
          throw new Error("Unable to retrieve coordinates.");
        }
      },
      (error) => {
        throw error;
      }
    );
  }
}
