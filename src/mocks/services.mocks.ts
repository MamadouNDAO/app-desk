import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class Services {
  public servicesList = [
    {
      id: 'gestion_espace',
      label: 'Gestion des espaces',
      icon: 'home-outline',
      background: [
        '#65B9B5',
        '#92CDB8'
      ],
      order: 1,
      modules: [
        {
          id: 'historique_parcours',
          label: 'Historisation du parcours',
          icon: 'map-outline',
          isActivated: true,
          link: '/historisation-parcours',
          order: 1,
          subModules: []
        },
        {
          id: 'comptage',
          label: 'Comptage',
          icon: 'people-outline',
          link: '/comptage-pzone',
          isActivated: true,
          order: 1,
          subModules: []
        },
        {
          id: 'Gestion des parkings',
          label: 'Gestion des parkings',
          icon: 'car-outline',
          link: '/gestion-parking',
          isActivated: true,
          order: 1,
          subModules: []
        },
        {
          id: 'Gestion de salles',
          label: 'Réserv. espace',
          icon: 'calendar-outline',
          link: '/room-reservation',
          isActivated: true,
          order: 1,
          subModules: []
        },
        {
          id: 'reservation_bureau',
          label: 'Réserv. équipement',
          icon: 'desktop-outline',
          isActivated: true,
          link: '/equipment-reservation',
          order: 1,
          subModules: []
        },
        {
          id: 'gestion_d_equipements_informatiques',
          label: 'Gestion d’équipements informatiques',
          icon: 'desktop-outline',
          isActivated: true,
          link: '',
          order: 1,
          subModules: []
        },
        {
          id: 'pilotage_d_equipements_de_confort',
          label: 'Pilotage d’équipements de confort ',
          icon: 'bulb-outline',
          isActivated: true,
          link: '',
          order: 1,
          subModules: []
        },
        {
          id: 'pilotage_d_equipements_du_batiment',
          label: 'Pilotage d’équipements du bâtiment',
          icon: 'man-outline',
          isActivated: true,
          link: '',
          order: 1,
          subModules: []
        },

      ]
    },
    {
      id: 'travail_collaboratif',
      label: 'Travail collaboratif',
      icon: 'people-outline',
      background: [
        '#3990A0',
        '#6FBDB5'
      ],
      order: 1,
      modules: [
        {
          id: 'partage_position',
          label: 'Partage de position',
          icon: 'paper-plane-outline',
          link: '/position',
          isActivated: true,
          order: 1,
          subModules: []
        },
        {
          id: 'chat',
          label: 'Chat',
          icon: 'chatbubble-ellipses-outline',
          link: '/chat/message',
          isActivated: true,
          order: 1,
          subModules: []
        },
        {
          id: 'boite',
          label: 'Boite à idées',
          icon: 'cube-outline',
          link: '/boite-idee',
          isActivated: true,
          order: 1,
          subModules: []
        },
        {
          id: 'enquetes_de_satisfaction',
          label: 'Enquêtes de satisfaction',
          icon: 'star-outline',
          link: '/feed-back',
          isActivated: true,
          order: 1,
          subModules: []
        }, {
          id: 'planification_devenenements',
          label: 'Planification d’événements',
          icon: 'calendar-number-outline',
          link: '',
          isActivated: true,
          order: 1,
          subModules: []
        }, {
          id: 'partage_dinformations_et_de_documents',
          label: 'Partage d’informations',
          icon: 'document-text-outline',
          link: '',
          isActivated: true,
          order: 1,
          subModules: []
        }
      ]
    },

    {
      id: 'bien_etre',
      label: 'Bien-être',
      icon: 'flower-outline',
      background: [
        '#6BBDB7',
        '#97CEB8'
      ],
      order: 1,
      modules: [
        {
          id: 'restaurations',
          label: 'Restauration',
          icon: 'fast-food-outline',
          isActivated: true,
          link: '/restauration',
          order: 1,
          subModules: [
            {
              id: 'hot',
              label: 'Boissons chaudes',
              icon: '',
              order: 1,
              isActivated: true,
              subModules: []
            },
            {
              id: 'restauration',
              label: 'Restaurant d\'entreprise',
              icon: '',
              isActivated: false,
              order: 1,
              subModules: []
            },
            {
              id: 'cafeteria',
              label: 'Cafétéria',
              icon: '\uf803',
              isActivated: false,
              order: 1,
              subModules: []
            }
          ]
        },
        {
          id: 'conciergerie',
          label: 'Conciergerie',
          icon: 'key-outline',
          link: '/conciergerie',
          isActivated: true,
          order: 1,
          subModules: []
        },

        {
          id: 'gpay',
          label: 'Paiement électronique',
          icon: 'card-outline',
          link: '/paiement-electronique',
          isActivated: true,
          order: 1,
          subModules: []
        },
        {
          id: 'fitness',
          label: 'Fitness',
          icon: 'barbell-outline',
          link: '/fitness2',
          isActivated: true,
          order: 1,
          subModules: []
        },
        {
          id: 'plan_locaux',
          label: 'Bon plans locaux',
          icon: 'search-outline',
          link: '/plans',
          isActivated: true,
          order: 1,
          subModules: []
        },
        {
          id: 'qualite_de_vie_au_travail',
          label: 'Qualité de vie au travail',
          icon: 'star-half-outline',
          link: '',
          isActivated: true,
          order: 1,
          subModules: []
        }
      ]
    },
    //
    {
      id: 'mission',
      label: 'Mission',
      icon: 'refresh-outline',
      background: [
        '#91CCB8',
        '#B9D0B0'
      ],
      order: 1,
      modules: [
        {
          id: 'anomalie',
          label: 'Détection d\'anomalie',
          icon: 'megaphone-outline',
          isActivated: true,
          link: '/anomalie',
          order: 1,
          subModules: [
            {
              id: 'scan_tag',
              label: 'Scanner un tag NFC',
              icon: '',
              isActivated: true,
              order: 1,
              subModules: []
            },
            {
              id: 'lecteur_qr',
              label: 'Flasher un QR Code',
              icon: '',
              isActivated: true,
              order: 1,
              subModules: []
            }
          ]
        },


        {
          id: 'specifications',
          label: 'Spécifications',
          icon: 'library-outline',
          link: '/specifications',
          isActivated: true,
          order: 1,
          subModules: []
        },
        {
          id: 'audit_dequipements',
          label: 'Audit d’équipement',
          icon: 'qr-code-outline',
          link: '/audit-equipement',
          isActivated: true,
          order: 1,
          subModules: []
        },
        {
          id: 'notation',
          label: 'Notation',
          icon: 'thumbs-up-outline',
          link: '',
          isActivated: true,
          order: 1,
          subModules: []
        },
        {
          id: 'planification_des_taches',
          label: 'Planification des tâches',
          icon: 'create-outline',
          isActivated: true,
          link: '',
          order: 1,
          subModules: []
        },
        {
          id: 'suivi_des_travaux',
          label: 'Suivi des travaux',
          icon: 'clipboard-outline',
          link: '',
          isActivated: true,
          order: 1,
          subModules: []
        },
        {
          id: 'gestion_des_equipements',
          label: 'Gestion des équipements',
          icon: 'briefcase-outline',
          link: '',
          isActivated: true,
          order: 1,
          subModules: []
        },
        {
          id: 'gestion_des_outils',
          label: 'Gestion des outils',
          icon: 'build-outline',
          link: '',
          isActivated: true,
          order: 1,
          subModules: []
        }
      ]
    },
    {
      id: 'mobilité',
      label: 'Mobilité',
      icon: 'walk-outline',
      background: [
        '#8CCAB8',
        '#B3D0B1'
      ],
      order: 1,
      modules: [


        {
          id: 'taxi',
          label: 'Taxi',
          icon: 'car-sport-outline',
          link: '/taxi',
          isActivated: true,
          order: 1,
          subModules: []
        },
        {
          id: 'stationnement',
          label: 'Stationnement',
          icon: 'location-outline',
          link: '/stationnement',
          isActivated: true,
          order: 1,
          subModules: []
        },
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
          id: 'co_voiturage',
          label: 'Co-voiturage',
          icon: 'car-outline',
          link: '',
          isActivated: true,
          order: 1,
          subModules: []
        },
        {
          id: 'traffic_en_temps_reel',
          label: 'Traffic en temps réel',
          icon: 'bicycle-outline',
          link: '',
          isActivated: true,
          order: 1,
          subModules: []
        },
        {
          id: 'proximite',
          label: 'Proximité',
          icon: 'trail-sign-outline',
          link: '',
          isActivated: true,
          order: 1,
          subModules: []
        },

      ]
    },
    //
    {
      id: 'informations',
      label: 'Informations',
      icon: 'newspaper-outline',
      background: [
        '#ABD0B5',
        '#DDBD98'
      ],
      order: 1,
      modules: [
        {
          id: 'notifications',
          label: 'Notifications',
          icon: 'notifications-outline',
          link: '/notification',
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
          subModules: [
            {
              id: 'brochure',
              label: 'Brochure commerciale',
              icon: '\uf02d',
              order: 1,
              isActivated: true,
              subModules: []
            },
            {
              id: 'painting',
              label: 'Catalogue peinture',
              icon: '\uf5c3',
              isActivated: true,
              order: 1,
              subModules: []
            },
            {
              id: 'ground',
              label: 'Catalogue sol',
              icon: '\uf5c3',
              isActivated: false,
              order: 1,
              subModules: []
            }
          ]
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
        // {
        //   id: 'contact',
        //   label: 'Contact',
        //   icon: 'phone-portrait-outline',
        //   link: '/position/contact',
        //   isActivated: true,
        //   order: 1,
        //   subModules: []
        // },
        {
          id: 'livret_d_accueil_dematerialise',
          label: 'Livret d’accueil dématérialisé',
          icon: 'book-outline',
          link: '',
          isActivated: true,
          order: 1,
          subModules: []
        },
        {
          id: 'event',
          label: 'Evénements',
          icon: 'calendar-outline',
          link: '',
          isActivated: true,
          order: 1,
          subModules: []
        },

      ]
    },

    {
      id: 'securite',
      label: 'Sécurité',
      icon: 'lock-closed-outline',
      background: [
        '#AED0B3',
        '#E1BA94'
      ],
      order: 1,
      modules: [
        {
          id: 'appel-urgence',
          label: 'Appel d\'urgence',
          icon: 'call-outline',
          link: '/emergency-call',
          isActivated: true,
          order: 1,
          subModules: []
        },
        // {
        //     "id": "historique_parcours",
        //     "label": "Historisation du parcours",
        //     "icon": "map-outline",
        //     "isActivated": true,
        //     "link":"/historisation-parcours",
        //     "order": 1,
        //     "subModules": []
        // },
        {
          id: 'dati',
          label: 'Dispositif d\'alarme du travailleur isolé',
          icon: 'alarm-outline',
          link: '/fall-detection',
          isActivated: true,
          order: 1,
          subModules: []
        },
        {
          id: 'securite_incendie',
          label: 'Sécurité incendie',
          icon: 'flame-outline',
          link: '/security-incendie',
          isActivated: true,
          order: 1,
          subModules: []
        },
        {
          id: 'gestion_des_equipements',
          label: 'Gestion des équipements de protection',
          icon: 'briefcase-outline',
          link: '',
          isActivated: true,
          order: 1,
          subModules: []
        },
        {
          id: 'consignes_et_procedures_de_securite',
          label: 'Procédures de sécurité',
          icon: 'clipboard-outline',
          link: '',
          isActivated: true,
          order: 1,
          subModules: []
        },
      ]
    },
    {
      id: 'stats',
      label: 'Statistiques',
      icon: 'stats-chart-outline',
      background: [
        '#ABD0B5',
        '#DDBD98'
      ],
      order: 1,
      modules: [
        {
          id: 'stats',
          label: 'Fréquentation',
          icon: 'stats-chart-outline',
          link: '/stats',
          isActivated: true,
          order: 1,
          subModules: []
        },
        {
          id: 'tableau_de_bord',
          label: 'Tableau de bord',
          icon: 'speedometer-outline',
          link: '/tableau-de-bord',
          isActivated: true,
          order: 1,
          subModules: []
        },
        {
          id: 'geostatistiques',
          label: 'Données environnementales',
          icon: 'location-outline',
          link: '/geostatistiques',
          isActivated: true,
          order: 1,
          subModules: []
        },
        {
          id: 'donnees_d_audience',
          label: 'Données d’audience',
          icon: 'people-outline',
          link: '',
          isActivated: true,
          order: 1,
          subModules: []
        },
        {
          id: 'donnees_personnelles',
          label: 'Données personnelles',
          icon: 'person-outline',
          link: '',
          isActivated: true,
          order: 1,
          subModules: []
        },

      ]
    },

    {
      id: 'surete',
      label: 'Sûreté',
      icon: 'shield-checkmark-outline',
      link: 'false',
      background: [
        '#ABD0B5',
        '#DDBD98'
      ],
      order: 1,
      modules: [
        //    {
        //         "id": "authentification_forte",
        //         "label": "Authentification forte",
        //         "icon": "finger-print-outline",
        //         "link":"",
        //         "isActivated": true,
        //         "order": 1,
        //         "subModules": []
        //     },
        //     {
        //         "id": "gestion_des_droits_des_usagers",
        //         "label": "Gestion des droits des usagers",
        //         "icon": "people-circle-outline",
        //         "link":"/weather",
        //         "isActivated": true,
        //         "order": 1,
        //         "subModules": []
        //     },
        //     {
        //         "id": "messagerie_instantanee_securisee",
        //         "label": "Messagerie instantanée sécurisée",
        //         "icon": "chatbubbles-outline",
        //         "link":"",
        //         "isActivated": true,
        //         "order": 1,
        //         "subModules": []
        //     },
        //     {
        //         "id": "gestion_des_habilitations_des_participants",
        //         "label": "Gestion des habilitations des participants",
        //         "icon": "ribbon-outline",
        //         "link":"/weather",
        //         "isActivated": true,
        //         "order": 1,
        //         "subModules": []
        //     },
      ]
    },

  ];


  public getAll() {
    return this.servicesList;
  }


}
