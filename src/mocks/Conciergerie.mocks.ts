/* eslint-disable max-len */
import { Injectable } from '@angular/core';
import { Consiergerie } from 'src/model/conciergerie';
@Injectable({
    providedIn: 'root'
  })
export class ConsiergerieMocks {
    public conciergerie  = [
        {
            id: '1',
            name: 'Famille et maison',
            icon: 'home',
            modules:[
                {
                    id:'1',
                    name: 'Entretien de la Maison',
                    icon: 'home',
                    modules:[
                        {
                            id:'1',
                            name: 'Entretien de votre jardin',
                            icon: 'flower',
                        },
                        {
                            id:'2',
                            name: 'Bricolage & Dépannage',
                            icon: 'construct',
                        },
                        {
                            id:'1',
                            name: 'Ménage et repassage',
                            icon: 'woman',
                        },
                    ]
                },
                {
                    id:'2',
                    name: 'Aide à la personne',
                    icon: 'help-buoy',
                    modules:[
                        {
                            id:'1',
                            name: 'Demande de crèche',
                            icon: 'people-circle',
                        },
                        {
                            id:'2',
                            name: 'Demande de garde d\'enfant',
                            icon: 'hand-right',
                        },
                        {
                            id:'1',
                            name: 'Auxiliaire de vie',
                            icon: 'medkit',
                        },
                    ]
                },
            ]
        },
        {
            id: '2',
            name: 'Shopping Minute',
            icon: 'cart',
            modules:[
                {
                    id:'1',
                    name: 'Courses de proximité',
                    icon: 'bag-handle',
                    modules:[
                        {
                            id:'1',
                            name: 'Courses de proximité',
                            icon: 'bag-handle',
                            price:'0.00'
                        },

                    ]
                },
                {
                    id:'2',
                    name: 'constract',
                    icon: 'construct',
                    modules:[
                        {
                            id:'1',
                            name: 'Boîte de pansements',
                            icon: 'medkit',
                            price:'5.10'
                        },
                        {
                            id:'2',
                            name: 'Coupe ongle',
                            icon: 'cut',
                            price:'3.15'
                        },
                        {
                            id:'3',
                            name: 'Déodorant femme',
                            icon: 'rose',
                            price:'3.10'
                        },
                    ]
                },
                {
                    id:'3',
                    name: 'La Poste',
                    icon: 'mail',
                    modules:[
                        {
                            id:'1',
                            name: 'enveloppes 1KG option BAL',
                            package:'CHRONOPOST - 13',
                            icon: 'mail-unread',
                            price:'29.00'
                        },
                        {
                            id:'2',
                            name: 'pochettes matelassées 2KG',
                            package:'CHRONOPOST - 13',
                            icon: 'key',
                            price:'31.00'
                        },
                        {
                            id:'3',
                            name: 'Boîte emballage non affranchir',
                            package:'COLIS',
                            icon: 'cube',
                            price:'2.35'
                        },
                        {
                            id:'4',
                            name: 'Emballage à affranchir - Boite 1 Bouteille',
                            package:'COLISSIMO',
                            icon: 'key',
                            price:'2.00'
                        },
                    ]
                },
            ]
        },
        {
            id: '3',
            name: 'Evénements',
            icon: 'calendar-clear',
            modules:[
                {
                    id:'1',
                    name: 'Services',
                    icon: 'man',
                    modules:[
                        {
                            id:'1',
                            name: 'Organisation de vos fêtes et événements',
                            description:'Vous souhaitez organiser un évènement ? Confiez-nous votre besoin. Votre concierge prend en compte votre demande et vous trouvera la meilleure solution.',
                            icon: 'calendar-clear',
                        },
                    ]
                },
            ]
        },
        {
            id: '4',
            name: 'Loisirs et Voyages',
            icon: 'airplane',
            modules:[
                {
                    id:'1',
                    name: 'Hébergement',
                    icon: 'cloudy',
                    modules:[
                        {
                            id:'1',
                            name: 'Réservation d\'hôtel',
                            icon: 'bed',
                        },
                    ]
                },
            ]
        },
        {
            id: '5',
            name: 'Mobilité',
            icon: 'accessibility',
            modules:[
                {
                    id:'1',
                    name: 'Solutions de déplacement',
                    icon: 'walk',
                    modules:[
                        {
                            id:'1',
                            name: 'Location de véhicule',
                            icon: 'car',
                        },
                    ]
                },
            ]
        },
    ];
    public getAll() {
        return this.conciergerie;
    }
}
