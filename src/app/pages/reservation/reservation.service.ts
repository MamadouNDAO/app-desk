import { Injectable } from '@angular/core';
import {ApiService} from "../../serviceApp/api.service";

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  public rooms = <any[]><unknown>[
    {
      id: 'Coworking',
      technicalId: 1,
      reservationId: 1,
      mapwizeId: '5d8a1922618902a02a7c7053',
      name: 'Coworking',
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
      name: 'Agora',
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
      name: 'Salle de réunion',
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
      name: 'Table de réunion',
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
      name: 'Terrasse',
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
    ,{
      id: "Quiet Zone 3",
      technicalId: 3,
      reservationId: 3,
      mapwizeId: '5d8a1922618902a02a7c704d',
      name: 'Quiet Zone 3',
      floor: 37,
      site: 'site.com',
      building: 'iviflo',
      type: 'Commercial',


      zone: 'Zone3',
      status: 'Réservé',
      dateFin: '',
      dateDebut: '',
      personne: 3,
    },
    {
      id: "Information",
      technicalId: 3,
      reservationId: 3,
      mapwizeId: '5d8a1922618902a02a7c704d',
      name: 'Information',
      floor: 37,
      site: 'site.com',
      building: 'iviflo',
      type: 'Commercial',


      zone: 'Zone3',
      status: 'Occupé',
      dateFin: '',
      dateDebut: '',
      personne: 2,
    }
    ,{
      id: "Bureaux",
      technicalId: 3,
      reservationId: 3,
      mapwizeId: '5d8a1922618902a02a7c704d',
      name: 'Bureaux',
      floor: 37,
      site: 'site.com',
      building: 'iviflo',
      type: 'Commercial',


      zone: 'Zone3',
      status: 'Libre',
      dateFin: '',
      dateDebut: '',
      personne: 1,
    },
    {
      id: "Accueil",
      technicalId: 3,
      reservationId: 3,
      mapwizeId: '5d8a1922618902a02a7c704d',
      name: 'Accueil',
      floor: 37,
      site: 'site.com',
      building: 'iviflo',
      type: 'Commercial',


      zone: 'Zone3',
      status: 'Libre',
      dateFin: '',
      dateDebut: '',
      personne: 2,
    }
    ,{
      id: "Restauration",
      technicalId: 3,
      reservationId: 3,
      mapwizeId: '5d8a1922618902a02a7c704d',
      name: 'Restauration',
      floor: 37,
      site: 'site.com',
      building: 'iviflo',
      type: 'Commercial',


      zone: 'Zone3',
      status: 'Libre',
      dateFin: '',
      dateDebut: '',
      personne: 1,
    }
    ,{
      id: "Cafétéria marketing suite",
      technicalId: 3,
      reservationId: 3,
      mapwizeId: '5d8a1922618902a02a7c704d',
      name: 'Cafétéria marketing suite',
      floor: 37,
      site: 'site.com',
      building: 'iviflo',
      type: 'Commercial',


      zone: 'Zone3',
      status: 'Occupé',
      dateFin: '',
      dateDebut: '',
      personne: 1,
    },
    {
      id: "Quiet Zone 1",
      technicalId: 3,
      reservationId: 3,
      mapwizeId: '5d8a1922618902a02a7c704d',
      name: 'Quiet Zone 1',
      floor: 37,
      site: 'site.com',
      building: 'iviflo',
      type: 'Commercial',


      zone: 'Zone3',
      status: 'Libre',
      dateFin: '',
      dateDebut: '',
      personne: 1,
    },
    {
      id: "Desk 1",
      technicalId: 3,
      reservationId: 3,
      mapwizeId: '5d8a1922618902a02a7c704d',
      name: 'Desk 1',
      floor: 37,
      site: 'site.com',
      building: 'iviflo',
      type: 'Commercial',


      zone: 'Zone3',
      status: 'Libre',
      dateFin: '',
      dateDebut: '',
      personne: 1,
    },
    {
      id: "Desk 2",
      technicalId: 3,
      reservationId: 3,
      mapwizeId: '5d8a1922618902a02a7c704d',
      name: 'Desk 2',
      floor: 37,
      site: 'site.com',
      building: 'iviflo',
      type: 'Commercial',


      zone: 'Zone3',
      status: 'Occupé',
      dateFin: '',
      dateDebut: '',
      personne: 1,
    },
    {
      id: "Desk 3",
      technicalId: 3,
      reservationId: 3,
      mapwizeId: '5d8a1922618902a02a7c704d',
      name: 'Desk 3',
      floor: 37,
      site: 'site.com',
      building: 'iviflo',
      type: 'Commercial',


      zone: 'Zone3',
      status: 'Libre',
      dateFin: '',
      dateDebut: '',
      personne: 3,
    },
    {
      id: "Desk 3",
      technicalId: 3,
      reservationId: 3,
      mapwizeId: '5d8a1922618902a02a7c704d',
      name: 'Desk 3',
      floor: 37,
      site: 'site.com',
      building: 'iviflo',
      type: 'Commercial',


      zone: 'Zone3',
      status: 'Occupé',
      dateFin: '',
      dateDebut: '',
      personne: 1,
    },
    {
      id: "Banc",
      technicalId: 3,
      reservationId: 3,
      mapwizeId: '5d8a1922618902a02a7c704d',
      name: 'Banc',
      floor: 37,
      site: 'site.com',
      building: 'iviflo',
      type: 'Commercial',


      zone: 'Zone3',
      status: 'Occupé',
      dateFin: '',
      dateDebut: '',
      personne: 1,
    },
    {
      id: "Desk 5",
      technicalId: 3,
      reservationId: 3,
      mapwizeId: '5d8a1922618902a02a7c704d',
      name: 'Desk 5',
      floor: 37,
      site: 'site.com',
      building: 'iviflo',
      type: 'Commercial',


      zone: 'Zone3',
      status: 'Occupé',
      dateFin: '',
      dateDebut: '',
      personne: 1,
    },
    {
      id: "Desk 6",
      technicalId: 3,
      reservationId: 3,
      mapwizeId: '5d8a1922618902a02a7c704d',
      name: 'Desk 6',
      floor: 37,
      site: 'site.com',
      building: 'iviflo',
      type: 'Commercial',


      zone: 'Zone3',
      status: 'Occupé',
      dateFin: '',
      dateDebut: '',
      personne: 1,
    },
    {
      id: "Table Digitale",
      technicalId: 3,
      reservationId: 3,
      mapwizeId: '5d8a1922618902a02a7c704d',
      name: 'Table Digitale',
      floor: 37,
      site: 'site.com',
      building: 'iviflo',
      type: 'Commercial',


      zone: 'Zone3',
      status: 'Libre',
      dateFin: '',
      dateDebut: '',
      personne: 1,
    },
    {
      id: "Table basse",
      technicalId: 3,
      reservationId: 3,
      mapwizeId: '5d8a1922618902a02a7c704d',
      name: 'Table basse',
      floor: 37,
      site: 'site.com',
      building: 'iviflo',
      type: 'Commercial',


      zone: 'Zone3',
      status: 'Occupé',
      dateFin: '',
      dateDebut: '',
      personne: 1,
    },
    {
      id: "Desk 8",
      technicalId: 3,
      reservationId: 3,
      mapwizeId: '5d8a1922618902a02a7c704d',
      name: 'Desk 8',
      floor: 37,
      site: 'site.com',
      building: 'iviflo',
      type: 'Commercial',


      zone: 'Zone3',
      status: 'Occupé',
      dateFin: '',
      dateDebut: '',
      personne: 1,
    },
    {
      id: "Desk 7",
      technicalId: 3,
      reservationId: 3,
      mapwizeId: '5d8a1922618902a02a7c704d',
      name: 'Desk 7',
      floor: 37,
      site: 'site.com',
      building: 'iviflo',
      type: 'Commercial',


      zone: 'Zone3',
      status: 'Libre',
      dateFin: '',
      dateDebut: '',
      personne: 1,
    },
    {
      id: "Comptoir",
      technicalId: 3,
      reservationId: 3,
      mapwizeId: '5d8a1922618902a02a7c704d',
      name: 'Comptoir',
      floor: 37,
      site: 'site.com',
      building: 'iviflo',
      type: 'Commercial',


      zone: 'Zone3',
      status: 'Libre',
      dateFin: '',
      dateDebut: '',
      personne: 1,
    },
    {
      id: "Studio",
      technicalId: 3,
      reservationId: 3,
      mapwizeId: '5d8a1922618902a02a7c704d',
      name: 'Studio',
      floor: 37,
      site: 'site.com',
      building: 'iviflo',
      type: 'Commercial',


      zone: 'Zone3',
      status: 'Libre',
      dateFin: '',
      dateDebut: '',
      personne: 1,
    },
    {
      id: "Asc B",
      technicalId: 3,
      reservationId: 3,
      mapwizeId: '5d8a1922618902a02a7c704d',
      name: 'Asc B',
      floor: 37,
      site: 'site.com',
      building: 'iviflo',
      type: 'Commercial',


      zone: 'Zone3',
      status: 'Occupé',
      dateFin: '',
      dateDebut: '',
      personne: 1,
    },
    {
      id: "Asc D",
      technicalId: 3,
      reservationId: 3,
      mapwizeId: '5d8a1922618902a02a7c704d',
      name: 'Asc D',
      floor: 37,
      site: 'site.com',
      building: 'iviflo',
      type: 'Commercial',


      zone: 'Zone3',
      status: 'Libre',
      dateFin: '',
      dateDebut: '',
      personne: 1,
    },
    {
      id: "Asc F",
      technicalId: 3,
      reservationId: 3,
      mapwizeId: '5d8a1922618902a02a7c704d',
      name: 'Asc F',
      floor: 37,
      site: 'site.com',
      building: 'iviflo',
      type: 'Commercial',


      zone: 'Zone3',
      status: 'Occupé',
      dateFin: '',
      dateDebut: '',
      personne: 1,
    },
    {
      id: "Asc H",
      technicalId: 3,
      reservationId: 3,
      mapwizeId: '5d8a1922618902a02a7c704d',
      name: 'Asc H',
      floor: 37,
      site: 'site.com',
      building: 'iviflo',
      type: 'Commercial',


      zone: 'Zone3',
      status: 'Libre',
      dateFin: '',
      dateDebut: '',
      personne: 1,
    },
    {
      id: "Asc A",
      technicalId: 3,
      reservationId: 3,
      mapwizeId: '5d8a1922618902a02a7c704d',
      name: 'Asc A',
      floor: 37,
      site: 'site.com',
      building: 'iviflo',
      type: 'Commercial',


      zone: 'Zone3',
      status: 'Occupé',
      dateFin: '',
      dateDebut: '',
      personne: 1,
    },
    {
      id: "Asc C",
      technicalId: 3,
      reservationId: 3,
      mapwizeId: '5d8a1922618902a02a7c704d',
      name: 'Asc C',
      floor: 37,
      site: 'site.com',
      building: 'iviflo',
      type: 'Commercial',


      zone: 'Zone3',
      status: 'Libre',
      dateFin: '',
      dateDebut: '',
      personne: 1,
    },
    {
      id: "Asc C",
      technicalId: 3,
      reservationId: 3,
      mapwizeId: '5d8a1922618902a02a7c704d',
      name: 'Asc C',
      floor: 37,
      site: 'site.com',
      building: 'iviflo',
      type: 'Commercial',


      zone: 'Zone3',
      status: 'Occupé',
      dateFin: '',
      dateDebut: '',
      personne: 1,
    },
    {
      id: "Asc G",
      technicalId: 3,
      reservationId: 3,
      mapwizeId: '5d8a1922618902a02a7c704d',
      name: 'Asc G',
      floor: 37,
      site: 'site.com',
      building: 'iviflo',
      type: 'Commercial',


      zone: 'Zone3',
      status: 'Libre',
      dateFin: '',
      dateDebut: '',
      personne: 1,
    },
    {
      id: "Escaliers",
      technicalId: 3,
      reservationId: 3,
      mapwizeId: '5d8a1922618902a02a7c704d',
      name: 'Escaliers',
      floor: 37,
      site: 'site.com',
      building: 'iviflo',
      type: 'Commercial',


      zone: 'Zone3',
      stat:'Libre',
      dateFin: '',
      dateDebut: '',
      personne: 1,
    },
  ];
  constructor(private api: ApiService) { }

  getrooms(filtre: string){
    return this.api.getSalles(filtre)
  }

  getBulles(filtre: string){
    return this.api.getSalles(filtre)
  }

  getroomsFiltered(filtre: string){
    return this.api.getSalles(filtre)
  }

  sendReservation(data: any, idRoom: string){
    return this.api.sendReservation(data, idRoom)
  }

  updateReservation(data: any, idReservation: number){
    return this.api.updateReservation(data, idReservation)
  }

  historiqueReservation() {
    return this.api.getHistoriqueReservation()
  }

  libererSalle(id: number) {
    return this.api.libererSalle(id)
  }

  getFloor(){
    return this.api.getEtage()
  }

  getInvites(){
    return this.api.getUsers()
  }

  setItineraire(data: any, idR: number) {
    return this.api.setTrajetResrvation(data, idR)
  }
}
