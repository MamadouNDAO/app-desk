export interface Room    {
    id?: string;
    technicalId?: string;
    reservationId?: string;
    name: string;
    floor?: string;
    site?: any;
    building?: any;
    status: string;
    dateFin:any,
    dateDebut:any,
    personne:any,
}


export interface Parking    {
    id?: string;
    technicalId?: string;
    reservationId?: string;
    mapwizeId? : string;
    name: string;
    floor?: string;
    site?: any;
    building?: any;
    status: string;
    dateFin:any,
    dateDebut:any,
}

export interface ParkingReservation    {
    reservationId : string,
    beginDate : string;
    endDate : string;
}