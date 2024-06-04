import { Equipment } from "./equipment";

export interface RoomType {
    id?: string;
    name?: string;
    equipments: Equipment[];
}

export interface EditRoomType {
    name: string;
    equipments: string[];
}

export interface CreateRoomType {
    name: string;
    equipments: string[];
}
export interface MapWizeRoom {
    id:number,
    roomMapId:string, 
    strokeColor:string,
    strokeOpacity: number,
    strokeWidth: number,
    fillColor: string,
    fillOpacity: number,
    markerVisible: boolean,
    polygonVisible: boolean
}
