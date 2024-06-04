import { Check } from './check';
import { RoomType } from './roomType';

export interface Equipment {
    id?: string;
    name: string;
    beginDate:string,
    endDate:string,
    status:string,
    mapwizeId:string

}

export interface CreateEquipment {
    name: string;
}

export interface EditEquipment {
    id?: string;
    name: string;
    checks: Object[];
}