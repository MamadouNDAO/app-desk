import { Injectable } from "@angular/core";
import { Equipment } from "src/model/equipment";

@Injectable({
    providedIn: 'root'
  })

export class TaxiMocks {

    public taxi = [
        {
            id:'1',
            name:'Taxi',
            price:'10',
            icon:'car-sport',
        },
        {
            id:'2',
            name:'Chauffeur privé',
            price:'12',
            icon:'man',
        },
        {
            id:'1',
            name:'Taxi-Moto',
            price:'9',
            icon:'bicycle',
        }
    ];
    
    public getTaxi() {
        return this.taxi;
    }
}