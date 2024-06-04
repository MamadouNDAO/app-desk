import { Building } from "./building";

export interface Floor {
    id?: string,
    name: string,
    building?: Building
}

export interface CreateFloor {
    name: string,
    building: string,
}

export interface EditFloor {
    id?: string,
    name: string,
    building: string,
}