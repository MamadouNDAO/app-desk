import {Room} from './room';

export interface Zone {
    id: string;
    geofenceId: string;
    mapwizeId: string;
    maximumCapacity: string;
    isActivated: boolean;
    label: string;
    room: Room;
}
