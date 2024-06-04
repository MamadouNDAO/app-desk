import { Floor } from "./floor";
import { Equipment } from "./equipment";
import { User } from "./user";
import { RoomType } from "./roomType";
import {Zone} from './zone';

export interface PlacesStyle {
    strokeColor: string;
    strokeOpacity: number;
    strokeWidth: number;
    fillColor: string;
    fillOpacity: number;
}


export interface PlacesStyles {
    [k: string]: PlacesStyle;
}
export interface Reservation {
    reservationId : string,
    beginDate : string;
    endDate : string;
}
export interface EquipmentReservation {
    reservationId : string,
    beginDate : string;
    endDate : string;
}
export interface Room {
    id?: string;
    technicalId?: string;
    reservationId?: string;
    mapwizeId? : string;
    name?: string;
    floor?: Floor;
    site?: any;
    building?: any;
    type?: RoomType;
    equipments?: Equipment[];
    maintainers?: User[];
    zone?: Zone;
    status?: string;
    dateFin?: string;
    dateDebut?: string;
    personne? : BigInteger;
}

export interface CreateRoom {
    name: string;
    technicalId?: string;
    floor: string;
    type: string;
    equipments: string[];
    maintainers?: string[];
    zone: Zone;
}

export interface EditRoom {
    id?: string;
    technicalId?: string;
    reservationId?: string;
    name: string;
    floor: string;
    type: string;
    equipments: string[];
    zone: Zone;
}
export interface RoomWithoutZone {
    id?: string;
    technicalId?: string;
    reservationId?: string;
    name: string;
    floor: string;
    type: string;
    equipments: string[];
}

export interface IprodRoom {
  building:string,
 floor: string,
 id:string,
 name:  string,
 reservationId:  string,
 site: string,
 technicalId:  string,
 type: any
}

export interface IprodDoc {
id_number: number,
label: string,
organization: any,
url: string
}
