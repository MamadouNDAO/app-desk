import { Injectable, OnInit } from "@angular/core";
import { Equipment } from "src/model/equipment";
@Injectable({
    providedIn: 'root'
  })
export class EquipmentsMocks {

    static readonly busyRoomId = '2';
    static readonly occupedRoomId= '3';
    public newStatus: string = "En marche"

     changeStatus() {
      let statuses = ["En marche", "Désactiver",]; // array of possible statuses
      let currentStatusIndex = 0; // index of the current status in the array

      setInterval(() => {
        currentStatusIndex = (currentStatusIndex + 1) % statuses.length; // increment index and wrap around if necessary
         this.newStatus = statuses[currentStatusIndex]; // get the new status from the array
        console.log("New status: " + this.newStatus); // replace this with your own code to actually update the status
      }, 5000); // run every 5 seconds (5000 milliseconds)
    }

    public equipments = <Equipment[]><unknown>[
        {
            id: 1,
            name: 'Poste B32 ',
            mapwizeId:'5d8a1922618902a02a7c7049',
            beginDate: '',
            endDate: '',
            status:'Libre'
        },
        {
            id: 2,
            name: 'Écran mobile',
            mapwizeId:'5d8a1921618902a02a7c7043',
            beginDate: '',
            endDate: '',
            status:'Réservé'
        },
        {
            id: 3,
            name: 'Rétroprojecteur',
            mapwizeId:'5d8a1922618902a02a7c7053',
            beginDate: '',
            endDate: '',
            status:'Occupé'
        },
    ];
    public allEquipments = <Equipment[]><unknown>[
        {
            id: 1,
            name: 'Poste B32 ',
            mapwizeId:'5d8a1922618902a02a7c7049',
            beginDate: '',
            endDate: '',
            status: 'En marche'
        },
        {
            id: 2,
            name: 'Écran mobile',
            mapwizeId:'5d8a1921618902a02a7c7043',
            beginDate: '',
            endDate: '',
            status:'Désactivé'
        },
        {
            id: 3,
            name: 'Rétroprojecteur',
            mapwizeId:'5d8a1922618902a02a7c7053',
            beginDate: '',
            endDate: '',
            status:'En marche'
        },
        {
            id: 4,
            name: 'État du mobilier',
            mapwizeId:'5d8a1922618902a02a7c7053',
            beginDate: '',
            endDate: '',
            status:'Désactivé'
        },
        {
            id: 5,
            name: 'Poste B21',
            mapwizeId:'5d8a1922618902a02a7c7053',
            beginDate: '',
            endDate: '',
            status:'En marche'
        },
        {
            id: 6,
            name: 'Poste B22',
            mapwizeId:'5d8a1922618902a02a7c7053',
            beginDate: '',
            endDate: '',
            status:'Désactivé'
        },
        {
            id: 7,
            name: 'Poste de travail',
            mapwizeId:'5d8a1922618902a02a7c7053',
            beginDate: '',
            endDate: '',
            status:'Désactivé'
        },
    ];

    public getAllEquipments() {
        return this.allEquipments;
    }

    public getEquipments() {
        return this.equipments;
    }

    public realStatus(){
      return this.newStatus
    }
}
