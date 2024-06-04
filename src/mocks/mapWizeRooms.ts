import { Injectable } from "@angular/core";
import { MapWizeRoom } from "src/model/roomType";
@Injectable({
    providedIn: 'root'
  })
export class MapWizeRooms {
 
    public mapWizeRooms = <MapWizeRoom []>[
            { 
              id:1,
              roomMapId:'5d8a1922618902a02a7c7053',  
            },
            { 
              id:2,
              roomMapId:'5d8a1922618902a02a7c704f',  
            },
            {
              id:3,
              roomMapId:'5d8a1922618902a02a7c704d', 
            },
    ];
    public getmapWizeRooms() {
        return this.mapWizeRooms;
    }
}