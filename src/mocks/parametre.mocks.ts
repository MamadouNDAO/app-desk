import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
  })

export class ParametreMocks {

    public parametre = [
        {
            id:'1',
            name:'Bien être',
        },
        {
          id:'2',
          name:'Missions',
        },
        {
          id:'3',
          name:'Gestion des espaces',
        },
        {
          id:'4',
          name:'sécurité',
        },
        {
          id:'5',
          name:'Sureté',
        },
        {
          id:'6',
          name:'Information',
        },
        {
          id:'7',
          name:'Mobilité',
        },
    ];


    public getparametre() {
        return this.parametre;
    }
}
