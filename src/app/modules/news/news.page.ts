import { ChangeDetectionStrategy, ChangeDetectorRef, Component ,OnInit, NgZone, Injector} from '@angular/core';
import {IonSegment, ModalController, NavController} from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { NewsArtService } from './news-art.service';
import {Article, Weather, ArticleFavoris} from '../../../mocks/article.mocks';
import { NavigationEnd, NavigationExtras, Router } from '@angular/router';
import { Observable, Subject,filter,of } from 'rxjs';
import { GeneralFunctions } from 'src/app/pages/general-functions';
import { PopupMessages } from 'src/mocks/popMessages.mocks';
import { BasePage } from 'src/app/base';
import { Actu } from 'src/model/post';
import { DatePipe } from "@angular/common";


interface ModelActu {
  id: number,
  desc: string,
  createdAt: string | Date,
  name: string,
  roles: any,
  videoUrl: string,
  favorites: any,
  likes: any,
  pictures: any,
  comments: any
}
@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage extends BasePage implements OnInit{


  mapDidacticielArray= [];
  actuDidacticiel= [];
  serviceDidacticiel= [];

  count: number = 0;
  count2: number = 0;
  count3: number = 0;
  firstcount:  number = 0
  isliked: boolean = false
  now: string;
  today= new Date();
  articles: Article[] = [];
  temp: string;
  post: string;
  desc: string;
  weather = null;
  img: string;
  imgItem1: string;
  imgItem2: string;
  imgItem3: string;
  ArrayArt= true;
  imgBoolean=true;
  imgItemBoolean=true;
  iviplaylogo: string;
  favorisHide=false;
  favorisShow= false
  favorisArray: ModelActu[] = [];
  favorisID = []
  colorLiked = ''
  colorFavoris = ''
  commentColor;
  subject = new Subject();
  currentWeather: Weather = {
    city : '',
    temp : 0,
    logo : ''
  };

  isCommentColorActive:boolean=false;
  mapSalleReunion = {
    id:1,
    mapWizeId:'5d8a1922618902a02a7c7053'
  }
  mapBox = {
    id:2,
    mapWizeId:'5d8a1922618902a02a7c704f'
  }
  observer:Observable<any>;
  showDidactiel: boolean;
  choosenColor$: string;
  actus: ModelActu[]=[]


  constructor(private alertController: AlertController,
              private artServices: NewsArtService,
              private cdr: ChangeDetectorRef,
              private navigateController: NavController,
              private PopupMessages: PopupMessages,

              public modalController: ModalController,
              private ngZone: NgZone,
              injector: Injector
  ) {
    super(injector)
    this.now = new Date().toString();

    const myInterval = setInterval(() => {

      if(this.showDidactiel && location.pathname =='/news' && localStorage.getItem('didactic2') ){
        this.count2++;
        console.log(this.count2);

        if(this.count2 == 1){
          this.didacticielNews1()
          localStorage.removeItem('didactic2')


        }
      }

    } , 800)
  }

  getActu(){

    this.apiService.get('/api/v1/news/posts?range=0-15').subscribe((response) =>{
      this.actus = response
     console.log("actuuu",response);
    })
  }

  ngOnInit() {
    //window.location.reload()
 this.getActu()
    this.stateService.selectedInfoUser().subscribe(data =>{
      let host = data.email.split('@')[1]
      this.choosenColor$ = host
      //console.log("host.isUserLogged$", host);
    });

    this.stateService.selectedshowDidactiel().subscribe(didact =>{
      this.showDidactiel = didact
    })
    //didacticiel
    this.mapDidacticielArray = this.PopupMessages.mygetMessagesCartographie();
    this.actuDidacticiel = this.PopupMessages.getMessagesFilDactualite();
    this.serviceDidacticiel = this.PopupMessages.getMessagesServices()

    //=============

    this.articles = this.artServices.getArticles();
    this.articles[1].desc = this.currentWeather.city + ' ' + this.currentWeather.logo;
    //  this.parisWeather();

    this.router.events
      .pipe( filter(event => event instanceof NavigationEnd))
      .subscribe(event => {
        if(location.pathname =='/map' && this.showDidactiel && localStorage.getItem('didactic3')){
          this.count++
          console.log('counttt',this.count);

        }

        if(location.pathname =='/map' && this.showDidactiel && this.count < 2 && localStorage.getItem('didactic3') ){
          this.count = 1
          localStorage.removeItem('didactic3')
          this.mapDidacticielIntro()

        }
        if(this.count > 1){
          localStorage.removeItem('didactic3')

        }


        if(location.pathname =='/news' && this.showDidactiel && localStorage.getItem('didactic2')) {
          this.count2++
          console.log("cette pages est visitée", this.count2);

        }
        if(location.pathname =='/news' && this.showDidactiel && this.count2 < 2 && localStorage.getItem('didactic2')){
          console.log("cette pages est newssss", this.count2);
          this.count2 = 1
          this.didacticielNews1()
          localStorage.removeItem('didactic2')

        }
        if(this.count2 > 1){
          localStorage.removeItem('didactic2')
        }



        if(location.pathname =='/service' && this.showDidactiel && localStorage.getItem('didactic1')){
          //console.log("cette pages est visitée");
          this.count3++
        }
        if(location.pathname =='/service' && this.showDidactiel && this.count3 <2 && localStorage.getItem('didactic1')){

          this.count3 = 1
          localStorage.removeItem('didactic1')
          this.didacticielService()

        }
        if(this.count3 > 1){
          localStorage.removeItem('didactic1')
        }




      } )

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

  redirect(currentMap){
    const map: NavigationExtras = {
      state: {
        id: currentMap.id,
        mapWizeId:currentMap.mapWizeId,
      }
    };
    this.navigateController.navigateForward(['/redirect-to-map'],map)
  }

  articleFav(article){

    if(this.favorisID.includes(article.id)){
      this.favorisArray.splice(this.favorisArray.indexOf(article), 1);
      this.favorisID.splice(this.favorisID.indexOf(article.id), 1);

    }else{
      this.favorisArray.push(article);
      this.favorisID.push(article.id)
    }

    console.log(this.favorisID)
    this.cdr.detectChanges()
  }

  pullOutArticle(article){
    this.favorisArray.splice(this.favorisArray.indexOf(article), 1)
    article.share=''
  }

  articleLike(article){
    if(article.like == ''){
      article.like = GeneralFunctions.dangerColor2
    }else{
      article.like = '';
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

  arrayImg(img: any): any{
    if(img.length < 5){
      this.imgBoolean = true;
      this.imgItemBoolean =false;
      for(let i = 0;i < img.length;i++){
        this.imgItem1 = img[0].images;
        this.imgItem2 = img[1].images;
        this.imgItem3 = img[2].images;
        return this.imgItem1,this.imgItem2,this.imgItem3;
      }
    }else{
      this.imgBoolean = false;
      this.imgItemBoolean =true;
      this.img = img.images;
      return this.img;
    }
  }



  // === didacticiel map

  async mapDidacticielIntro() {

    const alert = await this.alertController.create({
      cssClass: 'my-custom-class-didact',
      backdropDismiss: false,

      //header: 'Message',
      // message: `
      // `
    });

    await alert.present();

    const customAlert = alert.querySelector('.alert-wrapper')

    const alertContent= document.createElement('div');
    alert.querySelector('.alert-head').remove()
    alert.querySelector('.alert-message ').remove()


    alertContent.innerHTML=`
    <div>
     <ion-row style=" align-items: center; padding: 0 16px" >
       <ion-col style="font-size: 35px" size="2" > <ion-icon name="library-outline" > </ion-icon> </ion-col>
       <ion-col size="8" >
        <h2 style="text-align: center;margin-top: 8px;
        color: var(--ion-text-color, #000);
        font-weight: 600;" > Didacticiel</h2>
        </ion-col>
       <ion-col style="font-size: 35px; padding-left: 5%;" size="2" > <ion-icon  class="close-didact"  name="close-outline" > </ion-icon> </ion-col>
     </ion-row>

  <div style="display: inline-block; text-align: left; padding: 5%; font-size: 17px" class="interaction">
    ${ this.mapDidacticielArray[0].text }
  </div>


   </div>

  `

    customAlert.appendChild(alertContent);

    const instPart= alertContent.querySelector(".close-didact");
    instPart.addEventListener('click',() =>{
      alert.dismiss();
      this.mapDidacticiel()

    } )

  }

  async mapDidacticiel() {

    const alert = await this.alertController.create({
      cssClass: 'my-custom-class-didact',
      backdropDismiss: false,

      //header: 'Message',
      // message: `
      // `
    });

    await alert.present();

    const customAlert = alert.querySelector('.alert-wrapper')

    const alertContent= document.createElement('div');
    alert.querySelector('.alert-head').remove()
    alert.querySelector('.alert-message ').remove()


    alertContent.innerHTML=`
    <div>
    <ion-row style=" align-items: center; padding: 0 16px" >
    <ion-col style="font-size: 35px" size="2" > <ion-icon name="library-outline" > </ion-icon> </ion-col>
    <ion-col size="8" >
     <h2 style="text-align: center;margin-top: 8px;
     color: var(--ion-text-color, #000);
     font-weight: 600;" > Didacticiel</h2>
     </ion-col>
    <ion-col style="font-size: 35px; padding-left: 5%;" size="2" > <ion-icon  class="close-didact"  name="close-outline" > </ion-icon> </ion-col>
  </ion-row>
    <ion-slides>
     <ion-slide style="display: inline-block; text-align: left; padding: 5%;" class="localisation">
      ${ this.mapDidacticielArray[1].text}
     </ion-slide>
  <ion-slide style="display: inline-block; text-align: left; padding: 5%;" class="guidage">
      ${ this.mapDidacticielArray[2].text}
  </ion-slide>
  <ion-slide style="display: inline-block; text-align: left; padding: 5%;" class="interaction">
    ${ this.mapDidacticielArray[3].text }
  </ion-slide>


   </div>

  `

    customAlert.appendChild(alertContent);

    const instPart= alertContent.querySelector(".close-didact");
    instPart.addEventListener('click',() =>{
      alert.dismiss();

    } )

  }

// ===  didacticiel actualité

  async didacticielNews1() {

    const alert = await this.alertController.create({
      cssClass: 'my-custom-class-didact',
      backdropDismiss: false,

      //header: 'Message',
      // message: `
      // `
    });

    await alert.present();

    const customAlert = alert.querySelector('.alert-wrapper')

    const alertContent= document.createElement('div');
    alert.querySelector('.alert-head').remove()
    alert.querySelector('.alert-message ').remove()


    alertContent.innerHTML=`
    <div>
     <ion-row style=" align-items: center; padding: 0 16px" >
       <ion-col style="font-size: 35px" size="2" > <ion-icon name="library-outline" > </ion-icon> </ion-col>
       <ion-col size="8" >
        <h2 style="text-align: center;margin-top: 8px;
        color: var(--ion-text-color, #000);
        font-weight: 600;" > Didacticiel</h2>
        </ion-col>
       <ion-col style="font-size: 35px; padding-left: 5%;" size="2" > <ion-icon  class="close-didact"  name="close-outline" > </ion-icon> </ion-col>
     </ion-row>

  <div style="display: inline-block; text-align: left; padding: 5%; font-size: 17px" class="interaction">
    ${ this.actuDidacticiel[0].text }
  </div>


   </div>

  `

    customAlert.appendChild(alertContent);

    const instPart= alertContent.querySelector(".close-didact");
    instPart.addEventListener('click',() =>{
      alert.dismiss();
      this.didacticielNews2()

    } )

  }

  async didacticielNews2() {

    const alert = await this.alertController.create({
      cssClass: 'my-custom-class-didact',
      backdropDismiss: false,

      //header: 'Message',
      // message: `
      // `
    });

    await alert.present();

    const customAlert = alert.querySelector('.alert-wrapper')

    const alertContent= document.createElement('div');
    alert.querySelector('.alert-head').remove()
    alert.querySelector('.alert-message ').remove()


    alertContent.innerHTML=`
    <div>
     <ion-row style=" align-items: center; padding: 0 16px" >
       <ion-col style="font-size: 35px" size="2" > <ion-icon name="library-outline" > </ion-icon> </ion-col>
       <ion-col size="8" >
        <h2 style="text-align: center;margin-top: 8px;
        color: var(--ion-text-color, #000);
        font-weight: 600;" > Didacticiel</h2>
        </ion-col>
       <ion-col style="font-size: 35px; padding-left: 5%;" size="2" > <ion-icon  class="close-didact"  name="close-outline" > </ion-icon> </ion-col>
     </ion-row>

  <div style="display: inline-block; text-align: left; padding: 5%; font-size: 17px" class="interaction">
    ${ this.actuDidacticiel[1].text }
  </div>


   </div>

  `

    customAlert.appendChild(alertContent);

    const instPart= alertContent.querySelector(".close-didact");
    instPart.addEventListener('click',() =>{
      alert.dismiss();
      //this.mapDidacticiel()

    } )

  }

// didacticiel services

  async didacticielService() {

    // console.log("sms==========",this.serviceDidacticiel);


    const alert = await this.alertController.create({
      cssClass: 'my-custom-class-didact',
      backdropDismiss: false,

      //header: 'Message',
      // message: `
      // `
    });

    await alert.present();

    const customAlert = alert.querySelector('.alert-wrapper')

    const alertContent= document.createElement('div');
    alert.querySelector('.alert-head').remove()
    alert.querySelector('.alert-message ').remove()


    alertContent.innerHTML=`
    <div>
     <ion-row style=" align-items: center; padding: 0 16px" >
       <ion-col style="font-size: 35px" size="2" > <ion-icon name="library-outline" > </ion-icon> </ion-col>
       <ion-col size="8" >
        <h2 style="text-align: center;margin-top: 8px;
        color: var(--ion-text-color, #000);
        font-weight: 600;" > Didacticiel</h2>
        </ion-col>
       <ion-col style="font-size: 35px; padding-left: 5%;" size="2" > <ion-icon  class="close-didact"  name="close-outline" > </ion-icon> </ion-col>
     </ion-row>

  <div style="display: inline-block; text-align: left; padding: 5%; font-size: 17px" class="interaction">
    ${ this.serviceDidacticiel[0].text }
  </div>


   </div>

  `

    customAlert.appendChild(alertContent);

    const instPart= alertContent.querySelector(".close-didact");
    instPart.addEventListener('click',() =>{
      alert.dismiss();

    } )

  }


  //  parisWeather(){
  //    this.artServices.parisWeather().subscribe((data) => {
  //      this.weather = data;
  //      this.currentWeather.city = this.weather.name;
  //      this.currentWeather.temp = Math.floor(this.weather.main.temp);
  //      switch(this.weather.weather[0].description ){
  //        case 'overcast clouds':
  //          this.currentWeather.logo = 'cloud-outline';
  //        break;
  //        case 'clear sky' :
  //          this.currentWeather.logo = 'sunny-outline';
  //        break;
  //        case 'few clouds' :
  //          this.currentWeather.logo = 'partly-sunny-outline';
  //          break;
  //        case 'broken clouds' :
  //          this.currentWeather.logo = 'cloud-outline';
  //        break;
  //        case 'shower rain' :
  //          this.currentWeather.logo = 'rainy-outline';
  //        break;
  //        case 'rain' :
  //          this.currentWeather.logo = 'thunderstorm-outline';
  //        break;
  //        case 'thunderstorm' :
  //          this.currentWeather.logo = 'rainy-outline';
  //        break;
  //        case 'snow' :
  //          this.currentWeather.logo = 'snow-outline';
  //        break;
  //        case 'mist' :
  //          this.currentWeather.logo = 'cloud-outline';
  //        break;
  //        default:
  //          this.currentWeather.logo = 'partly-sunny-outline';
  //      }
  //      this.cdr.detectChanges();
  //    });
  //  }

  goTo(page: string) {
    this.router.navigate([page])
  }

  like(item: ModelActu) {
      //item.name = item.name == 'true' ? '' : 'true'
  }

  segmentChange($event: IonSegment) {
    console.log($event.value)
    switch ($event.value) {
      case 'recent': this.favorisShow = false
        break;
      case 'favori': this.favorisShow = true
    }
  }

}



