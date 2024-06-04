import { Component, } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {

  module2 =[
    {
      id: 'transport',
      label: 'Transport',
      icon: 'train-outline',
      link: '/transport',
      isActivated: true,
      order: 1,
      subModules: []
    },
    {
      id: 'actualites',
      label: 'Journaux',
      icon: 'newspaper-outline',
      link: '/actualites',
      isActivated: true,
      order: 1,
      subModules: []
    },
    {
      id: 'meteo',
      label: 'Météo',
      icon: 'thunderstorm-outline',
      link: '/meteo',
      isActivated: true,
      order: 1,
      subModules: []
    },
    {
      id: 'source',
      label: 'Sources documentaires',
      icon: 'document-text-outline',
      link: '/documents',
      isActivated: true,
      order: 1,

    },
    // {
    //   id: 'Gestion de salles',
    //   label: 'Réserv. espace',
    //   icon: 'calendar-outline',
    //   link: '/reservation',
    //   isActivated: true,
    //   order: 1,
    //   subModules: []
    // },
  ]

  module1 =[
    {
      id: 'enquete',
      label: 'Enquête de satisfaction',
      icon: 'star-outline',
      link:'/enquete-satisfaction',
      isActivated: false,
      order: 1,
      subModules: []
    },
    {
      id: 'messagerie',
      label: 'Messagerie sécurisée',
      icon: 'chatbubbles-outline',
      link: '/chat/messagerie',
      isActivated: true,
      order: 1,
      subModules: []
    },
    {
      id: 'idee',
      label: 'Boîte à idée',
      icon: 'cube-outline',
      link: '/boit-idee',
      isActivated: true,
      order: 1,
      subModules: []
    },
    // {
    //   id: 'conciergerie',
    //   label: 'Conciergerie',
    //   icon: 'key-outline',
    //   link: '/conciergerie',
    //   isActivated: true,
    //   order: 1,
    //   subModules: []
    // },
    {
      id: 'dispositif',
      label: "Dispositif d’alarme du travailleur isolé",
      icon: 'chatbubble-ellipses-outline',
      link: '/fall-detection',
      isActivated: true,
      order: 1,
      subModules: []
    },
    {
      id: 'constats',
      label: 'Rédaction des constats',
      icon: 'megaphone-outline',
      link: '/constats',
      isActivated: true,
      order: 1,
      subModules: []
    },
    {
      id: 'accueil',
      label: 'Accueil des visiteurs',
      icon: 'hand-right-outline',
      link: '/liens',
      isActivated: true,
      order: 1,
      subModules: []
    },
    {
      id: 'plan_locaux',
      label: 'Bon plans locaux',
      icon: 'search-outline',
      link: '/plan-locaux',
      isActivated: true,
      order: 1,
      subModules: []
    },
    ...this.module2
  ]

  constructor() { }

  showService(id: string){

    // if(id === 'fitness'){
    //   this.isFitness = true;
    //   this.isConciergerie = false;
    //   this.isConstat = false
    // }
    // if(id === 'conciergerie'){
    //   this.isFitness = false;
    //   this.isConciergerie = true;
    //   this.isConstat = false

    // }
    // if(id === 'constat'){
    //   this.isConstat = true
    //   this.isFitness = false;
    //   this.isConciergerie = false;

    // }
  }

  ngOnInit() {}

}
