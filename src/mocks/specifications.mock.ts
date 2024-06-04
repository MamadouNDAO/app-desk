import { Injectable } from "@angular/core";
@Injectable({
    providedIn: 'root'
  })
export class SpecificationsMocks {


    public specifications = [
        {
            id: 1,
            name: 'Tableau des surfaces et capacitaire',
            url:'assets/pdf/alto-cahier-technique-1.pdf',

        },
        {
            id: 2,
            name: 'Une palette de services variée et innovante',
            url:'assets/pdf/alto-cahier-technique-2.pdf',

        },
        {
            id: 3,
            name: 'Carthographies',
            url:'assets/pdf/alto-cahier-technique-3.pdf',
        },

    ];
    public getSpecifications() {
        return this.specifications;
    }
}