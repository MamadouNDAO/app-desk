export interface Site {
    id?: number;
    name: string;
    address: string;
    city: string;
    zipcode: string;
}

export interface CreateSite {
    name: string;
}
