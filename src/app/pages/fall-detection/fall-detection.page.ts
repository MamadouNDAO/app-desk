import { Component, Injector, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
// import { Notification } from 'src/app/store/models/notification';
// import { TodoAdd } from '../../../store//actions/notification-action';
// import { Store,select } from '@ngrx/store'
import { GeneralFunctions } from '../../pages/general-functions';
import { BasePage } from 'src/app/base';
@Component({
  selector: 'app-fall-detection',
  templateUrl: './fall-detection.page.html',
  styleUrls: ['./fall-detection.page.scss'],
})
export class FallDetectionPage  extends BasePage implements OnInit {

  value:any;
  progress = 30;
  htmlParagraphe:any
  progressBar = 100
  timer;
  audio = new Audio();
  allFallDetections:any=[];
  currentDate = new Date();
  convertedDate;
  isDatiModeChecked:boolean=false;
  datiModeStatus:any='Désactivé';
  isNotificationChecked:boolean=false;
  choosenColor$: string;


  constructor(injector: Injector, public alertController: AlertController,) {
    super(injector);
    this.value = 1.0;
   }

  onChange(event: any) {
    this.value = event.detail.value;
  }

  async sumulationAlert() {
    this.progress = 30;
    this.progressBar = 100;
    const alert = await this.alertController.create({
      header: 'DÉTECTION DE CHUTE',
      subHeader: '',
      backdropDismiss: false ,
    });

      await alert.present();
      if((<HTMLStyleElement>document.querySelector(".alert-head"))){
        var alertBlock = (<HTMLStyleElement>document.querySelector(".sc-ion-alert-ios-h"));
        var alertHead = (<HTMLStyleElement>document.querySelector(".alert-message"));
        this.timer = setInterval(()=>{
          if(alertHead.children.length >1){
            alertHead.children[0].parentElement.removeChild(alertHead.children[0]);
            alertHead.children[0].parentElement.removeChild(alertHead.children[0]);
            if(this.progress < 1){
              clearInterval(this.timer);
              this.removeAlert();
            }
          }
          if(this.progress != 0){
            alertHead.insertAdjacentHTML('beforeend','<ion-progress-bar class="progress" color="dark" value="'+ (this.progressBar  = this.progressBar - 3) /100 +'"></ion-progress-bar>');
            var progressBar = (<HTMLStyleElement>document.querySelector(".progress"));
            progressBar.insertAdjacentHTML('beforebegin','<p class="countDownParagraphe" >Sans action de votre part, une demande d\'intervention sera envoyée automatiquement dans '+  this.progress--+' sec</p>')
            var countdownParagraphe = (<HTMLStyleElement>document.querySelector(".countDownParagraphe"));
            countdownParagraphe.style.fontSize='14px';
          }
        },1000)
        this.playAudio();
        alertHead.insertAdjacentHTML('afterend','<div class="buttons"><button class="annuler">Annuler</button> <button class="alerter">Alerter</button></div>');
        var alertButtons =  (<HTMLStyleElement>document.querySelector(".buttons"));
        var alertButton =(<HTMLStyleElement>document.querySelector(".alerter"));
        var deleteButton =(<HTMLStyleElement>document.querySelector(".annuler"));
        alertButtons.insertAdjacentHTML('afterend',
        '<ion-grid><ion-row>'+
        '<ion-col size="2"><ion-icon class="iconPosition" name="locate-outline"></ion-icon></ion-col>'+
        '<ion-col><p>Votre position sera partagée automatiquement avec nos équipes pendant la durée de l\'intervention</p></ion-col>'+
        '</ion-row></ion-grid>');
        var icon =(<HTMLStyleElement>document.querySelector(".iconPosition"));
        alertButtons.style.marginBottom="0%";
        alertButtons.style.textAlign="center";
        icon.style.fontSize="25px";
        icon.style.marginTop="80%";
        alertButton.style.width="45%";
        alertButton.style.backgroundColor=GeneralFunctions.primaryColor;
        alertButton.style.padding="2%";
        alertButton.style.borderRadius="35px";
        alertButton.style.color=GeneralFunctions.ligthColor;
        alertButton.style.fontSize="17px";
        deleteButton.style.width="45%";
        deleteButton.style.backgroundColor=GeneralFunctions.primaryColor;
        deleteButton.style.padding="2%";
        deleteButton.style.borderRadius="35px";
        deleteButton.style.color=GeneralFunctions.ligthColor;
        deleteButton.style.fontSize="17px";
        deleteButton.addEventListener('click',()=>{
          clearInterval(this.timer);
          alertBlock.parentElement.removeChild(alertBlock)
          this.audio.pause()
          this.audio.currentTime = 0;
        });
        alertButton.addEventListener('click',()=>{
          clearInterval(this.timer);
          this.removeAlert();
          this.audio.pause()
          this.audio.currentTime = 0;
          setTimeout(() => {
            this.checkBoAlert();
          }, 100);
        });
      }
  }

  async checkBoAlert() {
    const alert = await this.alertController.create({
      header: 'UNE ÉQUIPE EST EN ROUTE',
      message:'<p class="checkBoxParagraphe">Vous pouvez nous préciser le type de problème afin de préparer au mieux notre intervention</p>',
      backdropDismiss: false ,
      inputs: [
        {
          name: 'checkbox1',
          type: 'checkbox',
          label: 'Trouble de la vision',
          value: 'value1',
          checked: true
        },
        {
          name: 'checkbox2',
          type: 'checkbox',
          label: 'Maux de tête',
          value: 'value2'
        },
        {
          name: 'checkbox3',
          type: 'checkbox',
          label: 'Perte d\'équilibre',
          value: 'value3'
        },
        {
          name: 'checkbox2',
          type: 'checkbox',
          label: 'Douleur articulaire',
          value: 'value2'
        },
        {
          name: 'checkbox3',
          type: 'checkbox',
          label: 'Plaie ouverte',
          value: 'value3'
        }
      ],

    });
    var sendButton =(<HTMLStyleElement>document.querySelector(".alerter"));
    var checkboxContainer =(<HTMLStyleElement>document.querySelector(".alert-checkbox-group"));
    checkboxContainer.insertAdjacentHTML('afterend','<div class="sendContainer"><button class="sendButton">Envoyer</button></div>');
    var sendButton = (<HTMLStyleElement>document.querySelector(".sendButton"));
    var sendContainer = (<HTMLStyleElement>document.querySelector(".sendContainer"));
    var alertCard = (<HTMLStyleElement>document.querySelector(".alert-wrapper"));
    var checkBoxParagraphe = (<HTMLStyleElement>document.querySelector(".checkBoxParagraphe"));
    alertCard.style.backgroundColor=GeneralFunctions.ligthColor;
    checkBoxParagraphe.style.fontSize="14px";
    sendContainer.style.marginBottom="0%";
    sendContainer.style.textAlign="center";
    sendContainer.style.padding="5%";
    sendButton.style.width="45%";
    sendButton.style.backgroundColor=GeneralFunctions.primaryColor;
    sendButton.style.padding="2%";
    sendButton.style.borderRadius="35px";
    sendButton.style.color=GeneralFunctions.ligthColor;
    sendButton.style.fontSize="17px";
    sendButton.addEventListener('click',()=>{
      this.removeAlert();
      this.interventionAlert();
    })
    await alert.present();
  }

  async interventionAlert() {
    const alert = await this.alertController.create({
      header: 'INTERVENTION',
      message:'<p class="intercentionParagraphe">L\'équipe d\'intervention vient à votre rencontre. Veuillez affectuer le moins de mouvement possible.</p>',
      backdropDismiss: false ,

    })
    await alert.present();
    var intercentionParagraphe = (<HTMLStyleElement>document.querySelector(".intercentionParagraphe"));
    intercentionParagraphe.style.fontSize="14px";
    var messageContainer = (<HTMLStyleElement>document.querySelector(".alert-message"));
    messageContainer.insertAdjacentHTML('afterend','<div class="interventionContainer"><button class="interventionButton">OK</button></div>');
    var interventionButton = (<HTMLStyleElement>document.querySelector(".interventionButton"));
    var interventionContainer = (<HTMLStyleElement>document.querySelector(".interventionContainer"));
    interventionContainer.style.marginTop="-6%";
    interventionContainer.style.textAlign="center";
    interventionContainer.style.padding="5%";
    interventionButton.style.width="45%";
    interventionButton.style.backgroundColor=GeneralFunctions.primaryColor;
    interventionButton.style.padding="2%";
    interventionButton.style.borderRadius="35px";
    interventionButton.style.color=GeneralFunctions.ligthColor;
    interventionButton.style.fontSize="17px";
    interventionButton.addEventListener('click',()=>{
      interventionButton.parentElement.removeChild(interventionButton);
      this.removeAlert();
      let newFallDetection = {
          title:'5.01G',
          date:this.currentDate
      }
      this.allFallDetections.push(newFallDetection);
      localStorage.setItem('chute', JSON.stringify(this.allFallDetections));
    })
  }

  removeAlert(){
    var alertBlock = (<HTMLStyleElement>document.querySelector(".sc-ion-alert-ios-h"));
    alertBlock.parentElement.removeChild(alertBlock);
  }

  playAudio(){
    this.audio.src = "../assets/audio/dati.mp3";
    this.audio.addEventListener('ended', function() {
      this.currentTime = 0;
      this.play();
  }, false);
    this.audio.load();
    this.audio.play();
  }

  toggleToTrue(event){
    console.log(event.detail.checked)
    if(!this.isDatiModeChecked){
      this.datiModeStatus = 'Activé';
    }else{
      this.datiModeStatus = 'Désactivé';
    }
    this.isDatiModeChecked = event.detail.checked;
  }
  addNotification(emergencyCall ){
    // const newNotification = new Notification();
    // newNotification.notification = emergencyCall;
    // this.store.dispatch(new TodoAdd(newNotification))
  }

  sendNotification(event){
    console.log(event.detail.checked)
    this.isNotificationChecked = event.detail.checked;
    let notification = {
      name:'Détection de chuteN°'+ (this.allFallDetections.length + 1),
      message :'La détection de chute a été déclanché ',
      service:'Détection de chute ',
    }
    if(this.isNotificationChecked){
      this.addNotification(notification)
    }

  }

  ngOnInit() {

    this.stateService.selectedInfoUser().subscribe(data =>{
      let host = data.email.split('@')[1]
      this.choosenColor$ = host
    // console.log("host.isUserLogged$", host);
    });


    this.convertedDate = (new Date()).getTimezoneOffset() * 60000;
      let localISOTimeBox = (new Date(Date.now() - this.convertedDate));
      let firstDetection = new Date(localISOTimeBox.setHours( localISOTimeBox.getHours() -2 )).toISOString().slice(0,-1);
      let secondDetection = new Date(localISOTimeBox.setHours( localISOTimeBox.getHours() +1 )).toISOString().slice(0,-1);

    this.allFallDetections = [
        {
            title:'8.01G',
            date: firstDetection
        },
        {
            title:'6.03G',
            date: secondDetection
        }
    ]
    if(!JSON.parse(localStorage.getItem('chute'))){
        localStorage.setItem('chute',JSON.stringify(this.allFallDetections))
      }
    this.allFallDetections = JSON.parse(localStorage.getItem('chute'))
    document.addEventListener('click',()=>{
      this.audio.pause();
    })


  }
}
