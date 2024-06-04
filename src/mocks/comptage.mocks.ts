import { Injectable } from "@angular/core";
@Injectable({
    providedIn: 'root'
  })
export class ComptageMocks {

    public espaces = [

        {
            id: 1,
            name:'Commercial',
            nbPersonne:4,
            nbPersonnesMax:4,
            mapwizeId:'5d8a1922618902a02a7c704d',
            icon :'people',
        },       {
            id: 2,
            name:'Reception',
            nbPersonne:3,
            nbPersonnesMax:2,
            mapwizeId:'5d8a1922618902a02a7c7057',
            icon :'people',
        },
        {
            id: 3,
            name:'Cuisine',
            nbPersonne:2,
            nbPersonnesMax:10,
            mapwizeId:'5d8a1922618902a02a7c7051',
            icon :'people',
        },
        {
            id: 4,
            name:'Direction',
            nbPersonne:3,
            nbPersonnesMax:4,
            mapwizeId:'5d8a1922618902a02a7c704b',
            icon :'people',
        },
        {
            id: 5,
            name:'Open space',
            nbPersonne:9,
            nbPersonnesMax:6,
            mapwizeId:'5d8a1922618902a02a7c7049',
            icon :'people',
        },
        {
            id: 6,
            name:'Salle de réunion',
            nbPersonne:5,
            nbPersonnesMax:4,
            mapwizeId:'5d8a1922618902a02a7c7053',
            icon :'people',
        },
        {
            id: 7,
            name:'Box',
            nbPersonne:0,
            nbPersonnesMax:2,
            mapwizeId:'5d8a1922618902a02a7c704f',
            icon :'people',
        },
      
      
    ];
    public getAll() {
        return this.espaces;
    }
}