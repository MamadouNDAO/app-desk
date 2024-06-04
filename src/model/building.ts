import { Site } from "./site";

export interface Building {
    id?: string,
    name: string,
    site?: Site,
    value: string
}

export interface CreateBuilding {
    name: string,
    site: number,
}

export interface EditBuilding {
    id?: string,
    name: string,
    site: string,
}
