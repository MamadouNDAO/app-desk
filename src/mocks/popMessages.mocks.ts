import { Injectable } from "@angular/core";
@Injectable({
  providedIn: 'root'
})
export class PopupMessages {

  public popupMessagesFilDactualites = [
    {
      id: 1,
      text: `Bienvenue sur l’application de <br>  démonstration iViPlay !<br><br> Vous pouvez dès maintenant<br>
                choisir votre type d’interface:<br> <br>
                <strong>• Servicielle <ion-icon style="float: right; font-size: 28px ;margin-top: 3%;" class="icon"  name="book-outline"></ion-icon></strong><br>
                Votre catalogue de services<br> <br>
                <strong>• Fil d’actualité <ion-icon style="float: right; font-size: 28px ;margin-top: 3%;"  class="icon1" name="calendar-clear-outline"></ion-icon></strong> <br>
                Vos informations en temps réel<br> <br>
                <strong>• Cartographie <ion-icon style="float: right; font-size: 28px ;margin-top: 3%;" class="icon2"  name="map-outline"></ion-icon></strong> <br>
                Vos services en proximité<br> <br>
                Par défaut le fil d’actualité
                s’affiche.`
    },
    {
      id: 2,
      text: `Le <b> fil d’actualité </b>regroupe en
                temps réel les informations qui
                vous concernent.
                <ul>
                <li> Planning du jour</li>
                <li> Actualités</li>
                <li> Météo</li>
                <li> Documentations</li>
                <li> Livret d’accueil</li>
                <li> Evénements</li>
                <li> Promotions</li>
                <li> Likez, commentez, partagez, et<br>
                mettez en favoris les publications<br>
                qui vous sont proposées.</li>
                </ul>`
    },

  ];
  public popupMessagesServiciel = [

    {
      id: 1,
      text: `Le mode <b> serviciel </b>intègre vos
                services classés par domaines:
                <ul>
                <li>Enquête de satisfaction</li>
                <li> Messagerie sécurisée</li>
                <li> Boîte à idée </li>
                <li> Dispositif d'alarme </li>
                <li> Rédation des anomalies </li>
                <li> Acceuil des visiteurs </li>
                <li> Bon plans locaux </li>
                <li> Transport </li>
                <li> Journaux </li>
                <li> Météo </li>
                <li> Source </li>
                </ul>`
    },
    {
      id: 2,
      text: `<strong>Le travail collaboratif</strong> <br><br>
                Favoriser la collaboration, c’est
                favoriser l’engagement.<br><br>
                Les bons outils pour travailler en
                équipe.<br><br>
                L’opportunité de gagner en
                compétence.`
    },
    {
      id: 3,
      text: `<strong>La gestion des espaces</strong> <br><br>
                Optimisez le taux d’occupation
                de vos espaces.<br><br>
                Les réservations deviennent un
                jeu d’enfant pour vos usagers.<br><br>
                Contribuez à l’amélioration de la
                qualité de service dans tous vos
                espaces.`
    },
    {
      id: 4,
      text: `<strong>Le bien-être</strong> <br><br>
                Offrez le confort d’un
                environnement optimisé.<br><br>
                Pour des usagers plus engagés et
                plus productifs.<br><br>
                Réenchantez le quotidien
                professionnel des usagers en
                prouvant que vous travaillez à
                leur bien-être.`
    },
    {
      id: 5,
      text: `<strong>La sécurité</strong> <br><br>
                Protéger vos usagers, réduire au
                maximum les risques et accidents
                sont vos priorités.<br><br>
                Parce qu’en sécurité comme en
                santé, il vaut mieux prévenir que
                guérir.`
    },
    {
      id: 6,
      text: `<strong>Les informations</strong> <br><br>
                Créer du lien en animant une
                communauté d’usagers, pour
                promouvoir la culture et les
                valeurs de l’entreprise.<br><br>
                L’entreprise est par essence un
                groupement social. Offrez-lui son
                réseau.`
    },
    {
      id: 7,
      text: `<strong>Les statistiques</strong> <br><br>
                Performances, consommations,
                utilisations…<br><br>
                Les indicateurs qui vous
                permettent de prendre les
                bonnes décisions au bon
                moment.`
    },
    {
      id: 8,
      text: `<strong>La mobilité</strong> <br><br>
                Optimiser les temps et les modes
                de transports, c’est bon pour vos
                usagers et pour la planète.<br><br>
                C’est moins de stress et plus de
                temps pour se concentrer sur
                l’essentiel. `
    },
    {
      id: 9,
      text: `<strong>Les missions</strong> <br><br>
                Entretenir les lieux, c’est
                entretenir les liens.<br><br>
                Rendez plus réactives et plus
                fiables les interventions.<br><br>
                Impliquez vos usagers dans la vie
                de leurs espaces. `
    },
  ];
  public popupMessagesCartographie = [
    {
      id: 1,
      text: `La <b> cartographie </b>permet de
                localiser vos services en
                proximité.
                Vous pouvez chercher et
                localiser :
                <ul>
                <li> Des personnes</li>
                <li> Des équipements</li>
                <li> Des espaces</li>
                <li> Des services</li>
                </ul>
                Et interagir avec !
                `
    },
    {
      id: 2,
      text: `<strong>La localisation   1/3</strong>  <br><br>
                Identifiez des personnes,
                équipements, espaces ou
                services à proximité.<br><br>
                Via une liste <ion-icon class="icon1"  name="clipboard-outline"></ion-icon><br><br>
                Via la cartographie <ion-icon class="icon2"  name="map-outline"></ion-icon>`
    },
    {
      id: 3,
      text: `<strong>Le guidage 2/3</strong>  <br><br>
                Visualisez votre itinéraire
                directement en mode
                cartographique.<br><br>
                Choisissez une destination,
                puis cliquez sur l’icone<br>
                de guidage <ion-icon class="icon3"  name="arrow-undo-outline"></ion-icon>`
    },
    {
      id: 4,
      text: `<strong>L’interaction 3/3</strong>  <br><br>
                Cliquez sur les zones ou les points
                d’intérêts pour voir apparaître les
                services disponibles dans
                l’espace concerné avec les
                détails nécessaires.<br><br>
                Via la cartographie<ion-icon class="icon4" name="map-outline"></ion-icon>`
    },
  ];

  public mypopupMessagesCartographie = [
    {
        id:1,
        text:`La <b> cartographie </b>permet de
            localiser vos services en
            proximité.
            Vous pouvez chercher et
            localiser :
            <ul>
            <li> Des personnes</li>
            <li> Des équipements</li>
            <li> Des espaces</li>
            <li> Des services</li>
            </ul>
            Et interagir avec !
            `
    },
    {
        id:2,
        text:`<strong>La localisation   1/3</strong>  <ion-icon class="icon-direc"  name="arrow-redo-outline"></ion-icon><br><br>

            Identifiez des personnes,
            équipements, espaces ou
            services à proximité.<br><br>
            Via une liste <ion-icon class="didact-icon2"  name="clipboard-outline"></ion-icon><br><br>
            Via la cartographie <ion-icon class="didact-icon2"  name="map-outline"></ion-icon>`
    },
    {
        id:3,
        text:`<strong>Le guidage 2/3</strong> <ion-icon class="icon-direc"  name="arrow-redo-outline"></ion-icon>  <br><br>
            Visualisez votre itinéraire
            directement en mode
            cartographique.<br><br>
            Choisissez une destination,
            puis cliquez sur l’icone<br>
            de guidage `
    },
    {
        id:4,
        text:`<strong>L’interaction 3/3</strong>  <ion-icon class="icon-direc"  name="arrow-undo-outline"></ion-icon> <br><br>
            Cliquez sur les zones ou les points
            d’intérêts pour voir apparaître les
            services disponibles dans
            l’espace concerné avec les
            détails nécessaires.<br><br>
            Via la cartographie<ion-icon class="didact-icon2" name="map-outline"></ion-icon>`
    },
];


  public getMessagesFilDactualite() {
    return this.popupMessagesFilDactualites;
  }
  public getMessagesServices() {
    return this.popupMessagesServiciel;
  }
  public getMessagesCartographie() {
    return this.popupMessagesCartographie;
  }

  public mygetMessagesCartographie() {
    return this.mypopupMessagesCartographie;
}
}
