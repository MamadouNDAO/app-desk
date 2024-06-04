import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, createAnimation } from '@ionic/angular';
import { CoursMocks } from 'src/mocks/cours.mocks';

@Component({
  selector: 'app-fitness',
  templateUrl: './fitness.component.html',
  styleUrls: ['./fitness.component.scss'],
})
export class FitnessComponent  implements OnInit {

  shoppingStorage:any = [];
  productType:string;
  totalPrice;
  showTotalCard:boolean;
  showeEmptyTotalMessageCard:boolean;
  isBottomSheetOpened:boolean;
  historiqueStorage :any;
  commande:any = [];
  currentDate = new Date();
  // =========================
  showPricipalCard = true;
  showFormCours = false;
  showFormActivity = false;
  showFormCotisation = false;
  cours = [];
  coursFavoris = [];
  currentNameWeek = [];
  today;
  favorisHide=false;
  favorisShow=true;
  currentCourse ={}
  cotisations = [
    {
      id: 1,
      name:'Abonnement Semestriel',
      description: 'Abonnement Semestriel.',
      price: 90,
      buy: false
    },
    {
      id: 2,
      name:'Abonnement Annuel',
      description: 'Abonnement Annuel.',
      price: 150,
      buy: false
    },
  ];


  constructor(

    private router: Router,
    public alertController: AlertController,
    private mocks: CoursMocks,

  ) { }


  dayOfWeekAsString(dayIndex) {
    return ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"][dayIndex] || '';
  }

  openBottomSheet(cours: any){
    this.currentCourse = cours
    console.log(cours);

    (<HTMLStyleElement>document.querySelector("#paymentBottomSheet")).style.display ="block";
    const animation = createAnimation()
      .addElement(document.querySelector("#paymentBottomSheet"))
      .easing("ease-in-out")
      .duration(400)
      .direction("alternate")
      .keyframes([
        { height: "0px", transform: "scale(1)", opacity: "1",},
        { height: "26rem", transform: "scale(1)", opacity: "1" },
      ]);
    animation.play();
  }

  closeBottomSheet(){
    const animation = createAnimation()
    .addElement(document.querySelector("#paymentBottomSheet"))
    .easing("ease-in-out")
    .duration(300)
    .direction("alternate")
    .keyframes([
      { height: "26rem",},
      { height:  "0px", opacity: "0", },
    ]);
    animation.play();
  }

  refreshPage(){
    let currentUrl = this.router.url;
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
      this.router.navigate([currentUrl]);
    });
  }


  async payConfirmation(){
    //this.currentCourse.buy = true;
    console.log("currentCourse",this.currentCourse);

    const alert = await this.alertController.create({
      cssClass: 'my-custom-popup',
      message: 'Paiement validé',
      buttons: [
        {
          text: 'OK',
        },

      ],
    });
    await alert.present();
    (<HTMLStyleElement>document.querySelector(".alert-message")).style.fontSize="17px";
    (<HTMLStyleElement>document.querySelector(".alert-message")).style.fontWeight="normal";
  }

  backToPricipalPage(){
    this.showFormCours = false;
    this.showFormActivity = false;
    this.showFormCotisation = false;
    this.showPricipalCard = true;
  }

  showFormPage(type){
    if(type === 1) {
      this.showFormCours = true;
      this.showPricipalCard = false;
    } else if(type === 2) {
      this.showFormActivity = true;
      this.showPricipalCard = false;
    } else if(type === 3) {
      this.showFormCotisation = true;
      this.showPricipalCard = false;
    }
  }

  showFavoris(){
    this.favorisShow = false;
    this.favorisHide = true;

  }
  showRecents(){
    this.favorisHide = false;
    this.favorisShow = true;
  }

  async reserveCours(cour){
    const alert = await this.alertController.create({
      cssClass: 'my-custom-popup',
      subHeader: '',
      message: 'Voulez-vous réserver ce cours ? ',
      buttons: [
        {
          text: 'Non',
        },
        {
          text: 'Oui',
          handler: () => {
            this.coursFavoris.push(cour);
            console.log(this.coursFavoris);
          }
        }
      ],
    });
    await alert.present();
  }

  async cancelCours(cour, index) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-popup',
      subHeader: '',
      message: 'Voulez-vous annuler ce cours ? ',
      buttons: [
        {
          text: 'Non',
        },
        {
          text: 'Oui',
          handler: () => {
            this.coursFavoris.splice(index, 1);
            console.log(this.coursFavoris);
          }
        }
      ],
    });
    await alert.present();
  }


  ngOnInit() {}

}
