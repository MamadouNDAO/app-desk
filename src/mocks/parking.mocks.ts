import { Injectable } from "@angular/core";
@Injectable({
    providedIn: 'root'
  })
export class ParkingMocks {
    
    static readonly busyRoomId = '2';
    static readonly occupedRoomId= '3';

    public parking = [

        {
            id: 1,
            technicalId: 1,
            reservationId: 1,
            name: 'Parking 1',
            mapwizeId:'5d8a1922618902a02a7c7057',
            floor: -1,
            site: 'site.com',
            building: 'iviflo',
            status: 'Libre',
            dateFin:'',
            dateDebut:'',
            personne:1,
        },
        {
            id: 2,
            technicalId: 2,
            reservationId: 2,
            name: 'Parking 2',
            mapwizeId:'60005f243781c50016f1e778',
            floor: -1,
            site: 'site.com',
            building: 'iviflo',
            status: 'Réservé',
            dateFin:'',
            dateDebut:'',
            personne:1,
        },
        {
            id: 3,
            technicalId: 3,
            reservationId: 3,
            name: 'Parking 3',
            mapwizeId:'6006ac00cfdbb200169e1312',
            floor: -1,
            site: 'site.com',
            building: 'iviflo',
            status: 'Réservé',
            dateFin:'',
            dateDebut:'',
            personne:1,
        },
       
      
    ];
    public getAll() {
        return this.parking;
    }
}