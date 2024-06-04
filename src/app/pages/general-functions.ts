import { Injectable, NgZone } from "@angular/core";
import { AlertController, NavController } from "@ionic/angular";
import { createAnimation } from "@ionic/core";
//import { Store } from '@ngrx/store';
// import { Notification } from 'src/app/store/models/notification';
// import { TodoAdd } from './../store//actions/notification-action';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NavigationExtras, Router } from "@angular/router";
import { PlacesStyles, Reservation } from "src/model/room";
import { Observable } from "rxjs";



@Injectable({
    providedIn: 'root'
  })
export class GeneralFunctions {

  static readonly primaryColor= '#514e4c';
  static readonly ligthColor= '#fff';
  static readonly darkColor= '#000';
  static readonly dangerColor= '#eb445a';
  static readonly dangerColor2= 'danger';

  isBottomSheetOpened = false;
  currentDate;
  wrongReservation:boolean;
  currentReservation:any
  isFormValidated : boolean =false;
  localstorageReservations: Reservation[] = [];
  convertedDate ;
  bookingForm:FormGroup;
  observer:Observable<any>;
  isUniverseOpened:boolean=false;
  currentParkingPlace:any;

  constructor(private navController: NavController,
    private ngZone: NgZone,
   // private store : Store<{notification: Notification[]}>,
    public  fb : FormBuilder,
    public alertController: AlertController ,
    private navigateController: NavController,
    private router : Router,
    ){}

  changeUniverseIndoorBackground(map){

    var exterieur = map._container.parentElement.children[1].shadowRoot.children[1].childNodes[1].childNodes[0].childNodes[0].childNodes[1].childNodes[1];
    var interieur = map._container.parentElement.children[1].shadowRoot.children[1].childNodes[1].childNodes[0].childNodes[0].childNodes[1].childNodes[0];
    exterieur.addEventListener('click',()=>{
      this.isUniverseOpened = true;
    })
    interieur.addEventListener('click',()=>{
      this.isUniverseOpened = false;
    })
    if(this.isUniverseOpened){
      exterieur.setAttribute('style','background-color:'+GeneralFunctions.primaryColor+';color:'+GeneralFunctions.ligthColor);
      interieur.setAttribute('style','background-color:');
    }else{
      interieur.setAttribute('style','background-color:'+GeneralFunctions.primaryColor+';color:'+GeneralFunctions.ligthColor);
      exterieur.setAttribute('style','background-color:');
    }
  }

  mapCss(map,link){
    const leftContainer = map._container.parentElement.children[1].shadowRoot.children[1].childNodes[1].childNodes[1].children[1].children;
    this.observer = new Observable((observer)=>{
      setInterval(() => {
        observer.next(
          leftContainer.forEach(element => {
            if(element.classList.length > 1){
              element.style.backgroundColor=GeneralFunctions.primaryColor
            }else{
              element.style.backgroundColor=GeneralFunctions.ligthColor
            }
          })
        )
      }, 100);
    });
    this.observer.subscribe((result)=>{});
    var universeContainer = map._container.parentElement.children[1].shadowRoot.children[1].childNodes[1].childNodes[0].childNodes[0];
    universeContainer.addEventListener('click',()=>{
      this.changeUniverseIndoorBackground(map)
    })
    setTimeout(() => {
      let searchBar = map._container.parentElement.children[1].shadowRoot.children[1].childNodes[0].childNodes[0].childNodes[1];
      var searchBarContainer = map._container.parentElement.children[1].shadowRoot.children[1].childNodes[0];
      //ajouter l'icon chevron
      searchBarContainer.insertAdjacentHTML('afterbegin', '<a routerLink="/tabs/tab1"><ion-icon class="icon" name="chevron-back-outline"></ion-icon></a>');
      //supprimerla searchBar
      var chevronBackIcon = searchBarContainer.childNodes[0];
      //ajouter le titre et le label du plan
      searchBar.style.paddingLeft='1rem';
      searchBarContainer.style.display="flex";
      searchBarContainer.style.flexDirection="column";
      searchBarContainer.style.height="4rem";
      searchBarContainer.style.width = '100%';
      chevronBackIcon.style.display="flex";
      chevronBackIcon.style.justifyContent="center";
      chevronBackIcon.style.alignItems="center";
      chevronBackIcon.style.marginTop="0.5rem";
      chevronBackIcon.style.width="10%";
      chevronBackIcon.style.fontSize="35px";
      chevronBackIcon.addEventListener("click",(e)=>{
        this.navController.navigateForward(link);
      });
    }, 10);
  }

  openBottomSheet(){
    (<HTMLStyleElement>document.querySelector("#reservationBottomSheet")).style.display ="block";
    const animation = createAnimation()
      .addElement(document.querySelector("#reservationBottomSheet"))
      .easing("ease-in-out")
      .duration(400)
      .direction("alternate")
      .keyframes([
        { height: "0px", transform: "scale(1)", opacity: "1",},
        { height: "18rem", transform: "scale(1)", opacity: "1" },
      ]);
    animation.play();
  }

  closeBottomSheet(){
    const animation = createAnimation()
    .addElement(document.querySelector("#reservationBottomSheet"))
    .easing("ease-in-out")
    .duration(100)
    .direction("alternate")
    .keyframes([
      { height: "18rem",},
      { height:  "0px", },
    ]);
    animation.play();
  }

  storeReservations( reservations ,link ){
    localStorage.setItem(link,JSON.stringify(reservations));
  }

  addNotification(currentReservation ){
    // const newNotification = new Notification();
    // newNotification.notification = currentReservation;
    // this.store.dispatch(new TodoAdd(newNotification))
  }

  async reservationAlert(message,service?) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Information',
      subHeader: '',
      message: message,
      backdropDismiss: false ,
      buttons: [
        {
          text: 'Ok',
          handler: (alertData) => {
            service

           }
        }
      ]
    });
    await alert.present();
  }

  redirect(link,currentReservation?){
    const reservation: NavigationExtras = {
      state: {
        id: currentReservation.id,
        mapwizeId: currentReservation.mapwizeId,
        name: currentReservation.name,
        status: currentReservation.status,
        dateFin: currentReservation.dateFin,
        dateDebut: currentReservation.dateDebut,
      }
    };
    this.navigateController.navigateForward([link],reservation)
  }


  toogle(){
    if(!this.isBottomSheetOpened){
      this.isBottomSheetOpened = true;
      this.openBottomSheet();
    }else{
      this.isBottomSheetOpened = false;
      this.closeBottomSheet();
    }
  }

  sendDataToStorage(reservation,localstorageData,message,storageName){
    this.currentReservation.status='Réservé'
    console.log("le currentreserv", this.currentReservation);

    localstorageData.push(reservation);
    this.storeReservations(localstorageData,storageName );
    this.reservationAlert(message);
    this.isFormValidated = true;
  }

  // ==========

  toogleBottomSheet(selectedRoom){
    this.currentReservation = selectedRoom;
    console.log(this.currentReservation )

    if(!this.isBottomSheetOpened){
      this.isBottomSheetOpened = true;
      this.openBottomSheet();
    }else{
      this.isBottomSheetOpened = false;
      this.closeBottomSheet();
    }
  }

  sendReservationForm(localstorageReservations,bookingForm,storageName,serviceName): void{
    let reservation = {
      beginDate : bookingForm.value.dateStart,
      endDate : bookingForm.value.dateEnd,
      reservationId : this.currentReservation.id
    }
    let notification = {
      name:this.currentReservation.name,
      beginDate:bookingForm.value.dateStart,
      endDate:bookingForm.value.dateEnd,
      message :'réservation reussite',
      service:'Réservation de ' +serviceName,
    }

    let currentParkingEndDate = new Date(this.currentReservation.dateFin)
    let currentParkingbeginDate = new Date(this.currentReservation.dateDebut)
    let bookingEndDate = new Date(bookingForm.value.dateEnd )
    let bookingBeginDate = new Date(bookingForm.value.dateStart )

    if(this.currentReservation.dateFin == '' && this.currentReservation.status=='Libre'){
      if(bookingBeginDate < this.currentDate || bookingEndDate < this.currentDate  ){
        this.reservationAlert('Le créneau sélectionné est passé.');
      }else if(bookingEndDate < bookingBeginDate ){
        this.reservationAlert('Le créneau selectionné n\'est pas valide ');
      }else{
        this.sendDataToStorage(reservation,localstorageReservations,'Réservation validée',storageName);
        this.addNotification(notification)

      }
    }else{
      if( currentParkingEndDate > bookingEndDate && currentParkingEndDate > this.currentDate && currentParkingbeginDate <= this.currentDate ){
        this.reservationAlert('Réservation impossible. La salle est occupé sur le créneau choisi');
      }else if(currentParkingbeginDate > bookingEndDate  && currentParkingEndDate > this.currentDate && currentParkingbeginDate <= this.currentDate ) {
        this.reservationAlert('Réservation impossible. La salle est occupé sur le créneau choisi');
      }else if(bookingBeginDate > currentParkingEndDate &&  bookingEndDate <= bookingBeginDate ){
        this.reservationAlert('Le créneau selectionné n\'est pas valide');
      }else if(bookingBeginDate > bookingEndDate ){
        this.reservationAlert('Le créneau selectionné n\'est pas valide');
      }else if(bookingBeginDate < this.currentDate || bookingBeginDate < this.currentDate){
        this.reservationAlert('Le créneau sélectionné est passé.');
      }else{
        localstorageReservations.map((reservations,index)=>{
          let beginReservationDate = new Date (reservations.beginDate);
          let endReservationDate = new Date (reservations.endDate);
          if(beginReservationDate.getTime() === bookingBeginDate.getTime() || endReservationDate.getTime() === bookingEndDate.getTime() ){
            this.wrongReservation = true
          }else if (beginReservationDate.getTime()  < bookingBeginDate.getTime()  && endReservationDate.getTime()  >= bookingEndDate.getTime() ){
            this.wrongReservation = true
          }else if(bookingBeginDate.getTime() < beginReservationDate.getTime() && bookingEndDate.getTime() > endReservationDate.getTime() ){
            this.wrongReservation = true
          }else{
            let strogebeginDate = new Date(localstorageReservations[index].beginDate)
            let strogeEndDate = new Date(localstorageReservations[index].endDate)
            if(bookingBeginDate.getTime() < strogebeginDate.getTime() && bookingEndDate.getTime() < strogeEndDate.getTime() && bookingEndDate.getTime() > strogebeginDate.getTime() ){
              this.wrongReservation = true
            }
          }
        })
        if(this.wrongReservation ){
          this.reservationAlert('Réservation impossible. La salle est occupé sur le créneau choisi');
        }else{
          this.sendDataToStorage(
            reservation,
            localstorageReservations,
            'Réservation validée',
            storageName,
            );
          this.addNotification(notification)

        }
      }
    }
  }

  gestionDeReservation(serviceArray,storageName, storageHistorical){
    this.currentDate = new Date()
    if( localStorage.getItem(storageName) ){
      this.localstorageReservations = <Reservation[]> JSON.parse(localStorage.getItem(storageName));
      if( this.localstorageReservations ) {
        this.localstorageReservations.map((reservation, index) => {
        let beginReservationDate = new Date (reservation.beginDate);
        let endReservationDate = new Date (reservation.endDate);
        if (endReservationDate < this.currentDate) {
          this.localstorageReservations.splice(index, 1);
          localStorage.setItem(storageName,JSON.stringify(this.localstorageReservations));
          localStorage.setItem(storageHistorical,JSON.stringify(reservation));
        }
          serviceArray.map((room, index) => {
            if(beginReservationDate  > this.currentDate && room.id == reservation.reservationId && room.status == 'Libre' ){
              let reservations = JSON.parse(localStorage.getItem(storageName));
              const earliestDate = reservations.reduce((r, o) => o.beginDate < r.beginDate ? o : r);
                serviceArray[index].status = 'Libre';
                serviceArray[index].dateFin = earliestDate.beginDate
                serviceArray[index].dateDebut = earliestDate.beginDate
            }else if ( room.id == reservation.reservationId ) {
              if ( beginReservationDate <= this.currentDate && endReservationDate> this.currentDate){
                serviceArray[index].dateDebut = beginReservationDate ;
                serviceArray[index].dateFin = endReservationDate;
                serviceArray[index].status = 'Réservé';
              }
            }
          })
        })
      }
    }
    serviceArray.map( (room, index) => {
      this.convertedDate = (new Date()).getTimezoneOffset() * 60000;
      if(room.id == 2 ){
        let localISOTimeBox = (new Date(Date.now() - this.convertedDate));
        let newDateBox = new Date(localISOTimeBox.setHours( localISOTimeBox.getHours() +1 )).toISOString().slice(0,-1);
        room.dateDebut = newDateBox
        room.dateFin = newDateBox
      }
      if(room.id == 3){
        let localISOTimeCommercial = (new Date(Date.now() - this.convertedDate));
        let newCommercialDate = new Date(localISOTimeCommercial.setHours( localISOTimeCommercial.getHours() +2 )).toISOString().slice(0,-1);
        room.dateDebut = newCommercialDate
        room.dateFin = newCommercialDate
      }
    });
  }

  refreshComponent(service){
    if(this.isFormValidated){
       service
     }
  }

  deleteAlert(){
    (<HTMLStyleElement>document.querySelector(".alert-head span")).addEventListener ("click",(e)=>{
      var popUp = (<HTMLStyleElement>document.querySelector(".sc-ion-alert-ios-h"));
      popUp.parentElement.removeChild(popUp);
    })
  }

  popupCss(){
    var alertHead = (<HTMLStyleElement>document.querySelector(".alert-head"));
    alertHead.insertAdjacentHTML('afterbegin', '<ion-icon style="font-size:30px;justify-content:start;margin-top:2%" name="library-outline"></ion-icon>');
    alertHead.insertAdjacentHTML('beforeend', '<span><ion-icon style="font-size:35px;justify-content:end;margin-top:1%" name="close-outline"></ion-icon></span>');
    (<HTMLStyleElement>document.querySelector(".alert-head")).style.display="flex";
    (<HTMLStyleElement>document.querySelector(".alert-head")).style.justifyContent="space-between";
    (<HTMLStyleElement>document.querySelector(".alert-head h2")).style.justifyContent="center";
    (<HTMLStyleElement>document.querySelector(".alert-wrapper")).style.width="300px";
    (<HTMLStyleElement>document.querySelector(".alert-wrapper")).style.fontFamily="century gothic";
    (<HTMLStyleElement>document.querySelector(".alert-wrapper")).style.minWidth="200px";
    (<HTMLStyleElement>document.querySelector(".alert-wrapper")).style.maxWidth="400px";
    (<HTMLStyleElement>document.querySelector(".alert-message")).style.maxHeight="500px";
    (<HTMLStyleElement>document.querySelector(".alert-message")).style.minHeight="70px";
    (<HTMLStyleElement>document.querySelector(".alert-message")).style.padding="5%";
    (<HTMLStyleElement>document.querySelector(".alert-message")).style.fontSize='17px';
    (<HTMLStyleElement>document.querySelector(".alert-message")).style.textAlign="start";
    (<HTMLStyleElement>document.querySelector(".alert-title")).style.fontSize="19px";
    if((<HTMLStyleElement>document.querySelector(".alert-message .paraphPopup"))){
      (<HTMLStyleElement>document.querySelector(".alert-message .paraphPopup")).style.textAlign='center'
    }else if((<HTMLStyleElement>document.querySelector(".icon"))){
      this.popupMessageCss();
    }
    if(location.pathname === "/tabs/tab1" ){
      this.deleteAlert()
    }
  }

  popupMessageCss(){
    (<HTMLStyleElement>document.querySelector(".icon")).style.float="right";
    (<HTMLStyleElement>document.querySelector(".icon")).style.fontSize="28px";
    (<HTMLStyleElement>document.querySelector(".icon")).style.marginTop="3%";
    (<HTMLStyleElement>document.querySelector("strong .icon1")).style.float="right";
    (<HTMLStyleElement>document.querySelector("strong .icon1")).style.fontSize="28px";
    (<HTMLStyleElement>document.querySelector("strong .icon1")).style.marginTop="3%";
    (<HTMLStyleElement>document.querySelector("strong .icon2")).style.float="right";
    (<HTMLStyleElement>document.querySelector("strong .icon2")).style.fontSize="28px";
    (<HTMLStyleElement>document.querySelector("strong .icon2")).style.marginTop="3%";
  }

  popUpCartographieCss(){
    if((<HTMLStyleElement>document.querySelector(".alert-message .localisation"))){
      (<HTMLStyleElement>document.querySelector(".alert-message .localisation")).style.display='inline-block';
      (<HTMLStyleElement>document.querySelector(".alert-message .guidage")).style.display='block';
      (<HTMLStyleElement>document.querySelector(".alert-message .interaction")).style.display='block';
      (<HTMLStyleElement>document.querySelector(".alert-message .localisation")).style.textAlign='start';
      (<HTMLStyleElement>document.querySelector(".alert-message .guidage")).style.textAlign='start';
      (<HTMLStyleElement>document.querySelector(".alert-message .interaction")).style.textAlign='start';
      (<HTMLStyleElement>document.querySelector(".alert-message .icon1")).style.fontSize='25px';
      (<HTMLStyleElement>document.querySelector(".alert-message .icon2")).style.fontSize='25px';
      (<HTMLStyleElement>document.querySelector(".alert-message .icon1")).style.float='right';
      (<HTMLStyleElement>document.querySelector(".alert-message .icon2")).style.float='right';
      (<HTMLStyleElement>document.querySelector(".alert-message .icon3")).style.fontSize='25px';
      (<HTMLStyleElement>document.querySelector(".alert-message .icon3")).style.float='right';
      (<HTMLStyleElement>document.querySelector(".alert-message .icon3")).style.marginTop='-3%';
      (<HTMLStyleElement>document.querySelector(".alert-message .icon4")).style.fontSize='25px';
      (<HTMLStyleElement>document.querySelector(".alert-message .icon4")).style.float='right';
    }
  }
}
