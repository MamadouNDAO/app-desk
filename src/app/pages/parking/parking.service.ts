import { Injectable } from '@angular/core';
import {ApiService} from "../../serviceApp/api.service";

@Injectable({
  providedIn: 'root'
})
export class ParkingService {

  public rooms = <any[]><unknown>[
    {
      id: 'Coworking',
      technicalId: 1,
      reservationId: 1,
      mapwizeId: '5d8a1922618902a02a7c7053',
      name: 'Parking 1',
      floor: 37,
      site: 'site.com',
      building: 'iviflo',
      type: 'salle de reunion',
      zone: 'Zone1',
      status: 'Libre',
      dateFin: '',
      dateDebut: '',
      personne: 1,
    },
    {
      id: 'Agora',
      technicalId: 2,
      reservationId: 2,
      mapwizeId: '5d8a1922618902a02a7c704f',
      name: 'Parking 2',
      floor: 37,
      site: 'site.com',
      building: 'iviflo',
      type: 'Box',
      zone: 'Zone2',
      status: 'Réservé',
      dateFin: '',
      dateDebut: '',
      personne: 5,
    },
    {
      id: "Salle de réunion",
      technicalId: 3,
      reservationId: 3,
      mapwizeId: '5d8a1922618902a02a7c704d',
      name: 'Parking 3',
      floor: 37,
      site: 'site.com',
      building: 'iviflo',
      type: 'Commercial',


      zone: 'Zone3',
      status: 'Occupé',
      dateFin: '',
      dateDebut: '',
      personne: 4,
    },
    {
      id: "Table de réunion",
      technicalId: 3,
      reservationId: 3,
      mapwizeId: '5d8a1922618902a02a7c704d',
      name: 'Parking 4',
      floor: 37,
      site: 'site.com',
      building: 'iviflo',
      type: 'Commercial',
      zone: 'Zone3',
      status: 'Libre',
      dateFin: '',
      dateDebut: '',
      personne: 2,
    },
    {
      id: "Terrasse",
      technicalId: 3,
      reservationId: 3,
      mapwizeId: '5d8a1922618902a02a7c704d',
      name: 'Parking 5',
      floor: 37,
      site: 'site.com',
      building: 'iviflo',
      type: 'Commercial',
      zone: 'Libre',
      status: 'Libre',
      dateFin: '',
      dateDebut: '',
      personne: 1,
    }
  ];
  constructor(private api: ApiService) { }

  getrooms(filtre){
    //return this.rooms;
    return this.api.getSalles(filtre)
  }

  sendReservation(data: any, idRoom: string){
    return this.api.sendReservation(data, idRoom)
  }

  historiqueReservation() {
    return this.api.getHistoriqueReservation()
  }
}
