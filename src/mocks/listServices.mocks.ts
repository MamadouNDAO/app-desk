/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable @typescript-eslint/naming-convention */
import { Injectable } from "@angular/core";
@Injectable({
  providedIn: 'root'
})
export class listMenu {

  public Menu = [

    {
      id: 1,
      name: 'Gestion des espaces',
      icon: 'home-outline',
    },
    {
      id: 2,
      name: 'Travail collaboratif',
      icon: 'people-outline',
    },
    {
      id: 3,
      name: 'Bien être',
      icon: 'rose-outline',
    },
    {
      id: 4,
      name: 'Missions',
      icon: 'podium-outline',
    },
    {
      id: 5,
      name: 'Mobilité',
      icon: 'walk-outline',
    },
    {
      id: 6,
      name: 'Informations',
      icon: 'newspaper-outline',
    },
    {
      id: 7,
      name: 'Sécurité',
      icon: 'lock-closed-outline',
    },
    {
      id: 8,
      name: 'Sûreté',
      icon: 'key-outline',
    },


  ];
  public getAll() {
    return this.Menu;
  }
  public GestionDesEspaces = [
    {
      id: 1,
      name: 'Comptage en zone ',
      icon: 'people-outline',
      link: '/comptage-pzone'
    },
    {
      id: 2,
      name: 'Présentiel en zone ',
      icon: 'locate-outline',
      link: '/presentiel-zone'
    },
    {
      id: 3,
      name: 'Reservation d\'espace',
      icon: 'bookmarks-outline',
      link: ''
    },
    {
      id: 4,
      name: 'Historique de parcours',
      icon: 'map-outline',
      link: '/historisation-parcours'
    },
    {
      id: 5,
      name: 'Gestion des parkings',
      icon: 'car-outline',
      link: '/gestion-parking'
    },
    {
      id: 6,
      name: 'Gestion de salles ',
      icon: 'calendar-outline',
      link: '/room-reservation'
    },
  ];
  public getGestionDesEspaces() {
    return this.GestionDesEspaces;
  }


  public TravailCollaboratif = [

    {
      id: 1,
      name: 'partage de position',
      icon: 'paper-plane-outline',
      link: '/position'
    },
  ];
  public getTravailCollaboratif() {
    return this.TravailCollaboratif;
  }



  public BienEtre = [
    {
      id: 1,
      name: 'Bon plans locaux',
      icon: 'search-outline',
      link: '/plans'
    },
    {
      id: 2,
      name: 'Restauration',
      icon: 'fast-food-outline',
      link: ''
    },
  ];
  public getBienEtre() {
    return this.BienEtre;
  }


  public Missions = [
    {
      id: 1,
      name: 'Messagerie',
      icon: 'chatbox-outline',
      link: ''
    },
    {
      id: 2,
      name: 'Statistiques',
      icon: 'stats-chart-outline',
      link: ''
    },
  ];
  public getMissions() {
    return this.Missions;
  }




  public Mobilite = [

    {
      id: 1,
      name: 'Transport',
      icon: 'train-outline',
      link: '/transport'
    },
    {
      id: 2,
      name: 'Cartographie',
      icon: 'navigate-circle-outline',
    },
    {
      id: 3,
      name: 'Proximité',
      icon: 'location-outline',
    },


  ];
  public getMobilite() {
    return this.Mobilite;
  }
  public Informations = [

    {
      id: 1,
      name: 'Météo',
      icon: 'thunderstorm-outline',
      link: '/weather'

    },
    {
      id: 2,
      name: 'Journaux',
      icon: 'newspaper-outline',
      link: '/journaux'
    },
    {
      id: 3,
      name: 'Documents',
      icon: 'document-text-outline',
    },
    {
      id: 4,
      name: 'Evénements',
      icon: 'calendar-number-outline',
    },
    // {
    //   id: 5,
    //   name: 'Contact',
    //   icon: 'call-outline',
    //   link: '/journaux',
    // },




  ];
  public getInformations() {
    return this.Informations;
  }

  public Securite = [

    {
      id: 1,
      name: 'Securité incendie ',
      icon: 'flame-outline',
    },
    {
      id: 2,
      name: 'Détection d\'anomalie',
      icon: 'alert-outline',
      link: '/anomaly-detection'
    },
  ];
  public getSecurite() {
    return this.Securite;
  }



  public Surete = [

    {
      id: 1,
      name: 'Dispositif d\'alarme',
      icon: 'alarm-outline',
      link: '/fall-detection'
    },

  ];
  public getSurete() {
    return this.Surete;
  }
}
