import { Injectable } from "@angular/core";
@Injectable({
    providedIn: 'root'
  })
export class HistorisationMocks {
 
    public espaces = [
        {
            id: 1,
            name:'Commercial',
            duree:'34min20s',
            date:'',
            heure:'09:53:04',
            reserve:'',
        },      
        {
            id: 2,
            name:'Technique',
            duree:'3min36s',
            date:'',
            heure:'10:36:33',
            reserve:'',

        },
        {
            id: 3,
            name:'Réception',
            duree:'10s',
            date:'',
            heure:'10:23:23',
            reserve:'',

        },
        {
            id: 4,
            name:'Cuisine',
            duree:'4min54s',
            date:'',
            heure:'11:36:00',
            reserve:'',

        },
        {
            id: 5,
            name:'Salle de réunion',
            duree:'En cours',
            date:'',
            heure:'12:23:11',
            reserve:'',

        },
    ];
    public getAll() {
        return this.espaces;
    }
}