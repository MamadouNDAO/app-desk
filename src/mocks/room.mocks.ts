import { Injectable } from "@angular/core";
import { Room } from "src/model/room";
@Injectable({
    providedIn: 'root'
  })
export class RoomMocks {

    static readonly busyRoomId = '2';
    static readonly occupedRoomId= '3';
    //TOdo créer toutes les salles

    public User =[ 
        {
        id: 1,
        firstname: 'firstname1',
        lastname: 'lastname1',
        society: 'society1',
        phone: '021365422',
        email: 'firstname.lastname1@email.com',
        role: 'admin',
        qr : 'Qr1',
        sites: 'Site.com',
        assignments: 'assignments1',
        role_description: 'role_description1',
        plainPassword: '1234',
        },
        {
        id: 2,
        firstname: 'firstname2',
        lastname: 'lastname2',
        society: 'society2',
        phone: '021365422',
        email: 'firstname.lastname2@email.com',
        role: 'admin',
        qr : 'Qr2',
        sites: 'Site.com',
        assignments: 'assignments2',
        role_description: 'role_description2',
        plainPassword: '1234',
        },
    ];



    public Check =[
        {id: 1,description: 'description1',checked: 25,equipments:''},
        {id: 2,description: 'description2',checked: 30,equipments:''},
        {id: 3,description: 'description3',checked: 35,equipments:''} 
    ] ;
        

    public Equipment =[
        { id: 1,name: 'Equipment1',checks: this.Check[0],roomTypes: 'room1' },
        { id: 2,name: 'Equipment2',checks: this.Check[1],roomTypes: 'room2'},
        { id: 3,name: 'Equipment3',checks: this.Check[2],roomTypes: 'room3'},
    ];


    public rooms = <Room[]><unknown>[
        {
            id: 1,
            technicalId: 1,
            reservationId: 1,
            mapwizeId: '5d8a1922618902a02a7c7053',
            name: 'Salle de réunion',
            floor: 1,
            site: 'site.com',
            building: 'iviflo',
            type: 'salle de reunion',
            equipments: this.Equipment[1],
            maintainers: this.User[1],
            zone: 'Zone1',
            status: 'Libre',
            dateFin: '',
            dateDebut: '',
            personne: 1,
        },
        {
            id: 2,
            technicalId: 2,
            reservationId: 2,
            mapwizeId: '5d8a1922618902a02a7c704f',
            name: 'Box',
            floor: 2,
            site: 'site.com',
            building: 'iviflo',
            type: 'Box',
            equipments: this.Equipment[0],
            maintainers: this.User[0],
            zone: 'Zone2',
            status: 'Réservé',
            dateFin: '',
            dateDebut: '',
            personne: 5,
        },
        {
            id: 3,
            technicalId: 3,
            reservationId: 3,
            mapwizeId: '5d8a1922618902a02a7c704d',
            name: 'Commercial',
            floor: 3,
            site: 'site.com',
            building: 'iviflo',
            type: 'Commercial',
            equipments: this.Equipment[2],
            maintainers: this.User[1],
            zone: 'Zone3',
            status: 'Occupé',
            dateFin: '',
            dateDebut: '',
            personne: 4,
        },
    ];
    public getAll() {
        return this.rooms;
    }
}