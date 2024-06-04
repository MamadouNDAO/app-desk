import {Component, Injector, OnInit} from '@angular/core';
import { JournauxService } from './journaux.service';
import { xml2js, xml2json } from 'xml-js';
//import { element } from 'protractor';
import * as Xml2js from 'xml2js';
// @ts-ignore
import _ from 'lodash';
import {AlertController, createAnimation, IonSegment, ModalController, NavController} from '@ionic/angular';
import {BasePage} from "../../base";
import {Article} from "../../../mocks/article.mocks";
import {ApiService} from "../../serviceApp/api.service";

interface ModelActu {
  id: number,
  desc: string,
  createdAt: string | Date,
  name: string,
  roles: any,
  videoUrl: string,
  pictures: any,
  favorites: any,
  likes: any,
  profile: any
}

@Component({
  selector: 'app-actualites',
  templateUrl: './actualites.page.html',
  styleUrls: ['./actualites.page.scss'],
})


export class ActualitesPage extends BasePage implements OnInit {
  Journaux: any = [
  ];
  showMenu: boolean = true
  widthVal = 'width60'
  userRole: number
  userID: string
  journalItems: any;
  valueSubmenu: boolean = false
  showFrame: false;
  link: '';
  eventPmu: boolean
  title = ""
  bgPmu: string
  actu: ModelActu[] = []
  jrnx: any =[

  ];
  favorisShow: boolean = false
  isLoadFav: boolean = false
  loading: boolean = false
  // constructor(private JournauxService: JournauxService) { }
  constructor(injector: Injector,
              private JournauxService: JournauxService,
              private alertController: AlertController,
              public modalController: ModalController,
              private api: ApiService
              ) {
    super(injector);
    let theme = localStorage.getItem('theme')

    this.valueSubmenu = theme === 'green'

  }

  // openJournalIframe(link){
  //  this.showJournal= false;
  //  this.journalLink = this.sanitizer.bypassSecurityTrustResourceUrl(link);

  // }

  segmentChange($event: IonSegment) {
    console.log($event.value)
    switch ($event.value) {
      case 'recent': this.favorisShow = false
        break;
      case 'favori': this.favorisShow = true
    }
  }

  openBottomSheet(){
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


  ngOnInit() {
    if(!localStorage.getItem("reload-actualite")){
      localStorage.setItem("reload-actualite", 'yes')
      window.location.reload()
    }
    this.userID = localStorage.getItem('userId')
    //this.title = localStorage.getItem("theme") === "green" ? "Fil d\'actualité" : "Evénements"
    this.eventPmu = localStorage.getItem("theme") === "green"
    this.bgPmu = localStorage.getItem("theme") === "green" ? 'background: none;' : 'background: #fff;'
    this.widthVal = localStorage.getItem("theme") === "green" ? 'width70' : 'width60'
    this.showMenu = localStorage.getItem("theme") == "green"
    this.getActualite()
    /*this.Journaux = this.JournauxService.getData().subscribe(response => {

      var result1 = xml2js(response);

      var tableau = [];
      tableau.push(result1);
      const tableaupreliminaire = tableau[0]["elements"][0]['elements'][0]['elements'];

      let tableau2 = [];
      tableaupreliminaire.forEach(element2 => {

        if (element2.name === 'item') {
          var object = {};
          // console.log(element2)
          for (var i = 0; i < element2.elements.length; i++) {
            if (element2.elements[i].name === 'title') {
              object['titre'] = element2.elements[i]['elements'][0]['text'];
            }
            if (element2.elements[i].name === 'link' && element2.elements[i]['elements']) {
              object['link'] = element2.elements[i]['elements'][0]['text'];
            }
            if (element2.elements[i].name === 'pubDate') {
              object['date'] = element2.elements[i]['elements'][0]['text'];
            }
            if (element2.elements[i].name === 'dc:creator') {
              object['site'] = element2.elements[i]['elements'][0]['text'];
            }
            if (element2.elements[i].name === 'description' && element2.elements[i]['elements']) {
              if (element2.elements[i]['elements'][0]['cdata'].match(/[^\s"]+\.jpg/i) != null) {
                object['img'] = element2.elements[i]['elements'][0]['cdata'].match(/[^\s"]+\.jpg/i)
              }
            }
            tableau2.push(object);
          }
        }
      });
      tableau2 = _.uniqBy(tableau2, 'titre');
      this.journalItems = tableau2.slice(0, 30);
      // console.log(this.journalItems);
    });*/
  }
  goTo(page: string) {
    this.router.navigate([page])
  }

  like(item: ModelActu) {
    //item.like = item.like == 'true' ? '' : 'true'
  }

  async presentAlertMultipleButtons(article) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Message',
      inputs:[{
        name:'message',
        placeholder:'Saisir votre commentaire',
      }],
      buttons: [{
        text: 'Commenter',
        cssClass: 'btn-comment',
        handler: (inputs: { message: string }) => {
          if (inputs.message == "" ) {
            return false;
          }else{
            article.comments="true"
            this.ngOnInit()
            return null
          }
        }
      },
        {
          text: 'Annuler',
          cssClass: 'btn-comment',
          role: 'cancel',
          /*handler: ( () => {
            alert.dismiss()
    })*/
        }
      ],

    });
    await alert.present();
  }


  async shareAction() {

    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
    });

    await alert.present();

    const customAlert = alert.querySelector('.alert-wrapper')

    const alertContent= document.createElement('div');
    alert.querySelector('.alert-head').remove()
    alert.querySelector('.alert-message ').remove()


    alertContent.innerHTML=`
    <ion-card  class="inst-part" rezo="instagram" onclick="closeMyalert()">
    <div class="social-bx" >
      <div class="icon-bx"  size="2">
       <ion-icon class="insta" name="logo-instagram"></ion-icon>
      </div>
     <div class="txt-bx" size="10">
       <p class="`+this.theme.family+` list-app">Instagram</p>
     </div>
    </div>
   </ion-card>
   <ion-card class="inst-part" rezo="facebook" >
    <div class="social-bx">
      <div class="icon-bx" size="2">
        <ion-icon  class="face" name="logo-facebook"></ion-icon>
      </div>
     <div class="txt-bx" size="10">
       <p class="`+this.theme.family+` list-app">Facebook</p>
     </div>
    </div>
   </ion-card>
   <ion-card class="inst-part" rezo="youtube" >
     <div class="social-bx">
      <div class="icon-bx"size="2">
        <ion-icon class="yout" name="logo-youtube"></ion-icon>
      </div>
     <div class="txt-bx" size="10">
       <p class="`+this.theme.family+` list-app">Youtube</p>
     </div>
    </div>
   </ion-card>
   <ion-card class="inst-part" rezo="whatsapp" >
    <div class="social-bx">
      <div class="icon-bx" size="2">
        <ion-icon class="what" name="logo-whatsapp"></ion-icon>
      </div>
     <div class="txt-bx" size="10">
       <p class="`+this.theme.family+` list-app">Whatsapp</p>
     </div>
    </div>
   </ion-card>

    `

    customAlert.appendChild(alertContent);

    const instPart= alertContent.querySelectorAll(".inst-part");
    for(let i = 0; i < instPart.length; i++ ){
      let btn = instPart[i];
      let rezo = btn.getAttribute('rezo')
      btn.addEventListener('click',() =>{
        alert.dismiss();
        this.dimissModal(rezo)

      } )

    }

  }

  async dimissModal(social: string) {

    const alert = await this.alertController.create({
      //cssClass: 'my-custom-class',
      header: 'Message',
      message:` Partagé sur ${social}`,
      buttons: [{
        text: 'Fermer',
        cssClass: 'btn-comment',
        handler: () => {
          this.modalController.dismiss()

        }
      }],
    });
    await alert.present();
  }


  articleFav(article){
    if(article.share == ''){
      article.share = 'true'
      //this.favorisArray.push(article);
    }else{
      article.share = '';
      //this.favorisArray.splice(this.favorisArray.indexOf(article), 1);
    }
  }

  getActualite() {
    this.loading = true
    this.api.getActualite().subscribe(
      resp => {
        //console.log(resp)
        this.actu = resp
        this.loading = false
        this.isLoadFav = false
      },
      error => {
        this.loading = false
        this.isLoadFav = false
      }
    )
  }

  addToFavori(idPost: number){
    this.isLoadFav = true
    this.api.setFavoris(idPost).subscribe(
      resp => {
        //console.log(resp)
        this.getActualite()
      },
      error => {
        console.log(error)
      }
    )
  }

  protected readonly Object = Object;
  protected readonly Object2 = Object;
}

