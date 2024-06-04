import { Injectable } from "@angular/core";
import { Product, RestorationProduct } from "src/model/restauration";
@Injectable({
    providedIn: 'root'
  })
export class RestaurantMocks {

    public products = <RestorationProduct []>[
            {
                id:'1',
                name:'Boissons chaudes',
                icon:'cafe',
                products:<Product []>[
                    {
                        id:'1',
                        name:'Café',
                        icon:'cafe',
                        price:4.30,
                        description:'Profitez d\'une expérience café authentique avec une large gamme de grand crus ayant chacun leur propre caractère et arôme.',
                    },
                    {
                        id:'2',
                        name:'Cappuccino',
                        icon:'cafe',
                        price:6.20,
                        description:'Maîtrisez l\'art du Cappuccino et succombez à la gourmandise ultime du mariage entre l\'onctuosité de la mousse de lait et le caractère des grands cafés.',
                    },
                    {
                        id:'3',
                        name:'Chocolat',
                        icon:'color-fill',
                        price:5.00,
                        description:'Notre caco intense, offre une dose de nostalgie rassérénante et exaltante. Délicieuse en fin de repas, à la place d\'un café.',
                    },
                ]
            },
            {
                id:'2',
                name:'Restaurant d\'entreprises',
                icon:'restaurant',
                products:[]
            },
            {
                id:'3',
                name:'Cafétéria',
                icon:'fast-food',
                products:[]
            },
    ];
    public getAll() {
        return this.products;
    }
}