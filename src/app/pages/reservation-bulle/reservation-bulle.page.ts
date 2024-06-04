import {Component, Injector, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {BasePage} from "../../base";
import {AlertController, IonDatetime, IonInput, IonSegment, IonTextarea} from "@ionic/angular";
import {format} from "date-fns";
import {DatePipe} from "@angular/common";
import {Room} from "../../../model/room";
import { ReservationService } from '../reservation/reservation.service';
import * as moment from "moment/moment";
import {CustomClock, CustomContainer, CustomDial, CustomTimepickerTheme} from "../reservation/model-clock";

@Component({
  selector: 'app-reservation-bulle',
  templateUrl: './reservation-bulle.page.html',
  styleUrls: ['./reservation-bulle.page.scss'],
})
export class ReservationBullePage extends BasePage implements OnInit {
  @ViewChild('minuteDebut', { static: false }) deuxiemeInputRef1: IonInput;
  @ViewChild('minuteDebutF', { static: false }) deuxiemeInputRef1F: IonInput;
  @ViewChild('minuteFin', { static: false }) deuxiemeInputRef2: IonInput;
  @ViewChild('minuteFinF', { static: false }) deuxiemeInputRef2F: IonInput;
  @ViewChild('customCancelButton') customCancelButton: TemplateRef<any>;
  @ViewChild('customOKButton') customOKButton: TemplateRef<any>;
  emailInvalides = []
  isEmailInvalid: boolean = false
  colorBg = this.theme.color == 'ivi-green' ? 'rgb(1, 62, 23)' : 'rgb(171, 49, 13)'
  mycustomcontainer: CustomContainer = {
    bodyBackgroundColor: 'white',
    primaryFontFamily: '',
    buttonColor: ''
  }
  myCustomDial: CustomDial = {
    dialBackgroundColor: this.colorBg,
    dialEditableBackgroundColor: 'green'
  }

  myCustomface: CustomClock = {
    clockFaceTimeActiveColor: 'white',
    clockHandColor: this.colorBg
  }

  customTheme: CustomTimepickerTheme = {
    container: this.mycustomcontainer,
    dial: this.myCustomDial,
    clockFcae: this.myCustomface
  };

  title = ""
  dateStart: string = "";
  dateEnd: string = "";
  userEmail: string = ''
  objetResrvation: string = ""
  isUpdate: boolean = false
  isCalendar: boolean = false
  isSelectDu: boolean = false
  idRoom: string = ""
  isSendding: boolean = false
  isReservation: boolean = false
  isHistory: boolean = false
  isEncours: boolean = true
  isInvalid: boolean = false
  isLiberationSalle: boolean = false
  idReservation: number
  nameRoomToReserve: string
  isFiltre: boolean = false
  heureDebut: string | any
  minsDebut: string | any = "00"
  heureFin: string | any
  minsFin: string | any = "00"
  rooms: any[] = [];
  historiques: any[] = [];
  loaded: boolean = false
  loadedHistory: boolean = false
  filtreDebut!: string
  particpants = []
  currentDate: Date = new Date();
  isInvalidFiltre: boolean = false
  isHourInvalidFiltre: boolean = false
  isHourInvalid: boolean = false
  isOuvreFiltre: boolean = false
  capacity: number = 1
  constructor(
    injector: Injector,
    private datePipe: DatePipe,
    private ReservationService: ReservationService,
    public alertController: AlertController
  ) {  super(injector) }

  ngOnInit() {
    this.dateStart = format(new Date(), "yyyy-MM-dd'T'HH:mm:ssXXX")
    this.filtreDebut = this.dateStart
    /*const heures = new Date().getHours();
    const minutes = new Date().getMinutes();
    this.heureDebut = heures.toString().padStart(2, '0')
    this.minsDebut = minutes.toString().padStart(2, '0')*/
    const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

    const now = new Date();
    const myminutes = now.getMinutes();
    const roundedMinutes = Math.ceil(myminutes / 15) * 15;
    now.setMinutes(roundedMinutes);

    const startHour = now.getHours();
    const startMinute = now.getMinutes();

    const endHour = (startHour + 1) % 24;
    const endMinute = startMinute;

    const startTime = new Date();
    startTime.setHours(startHour, startMinute);

    const endTime = new Date();
    endTime.setHours(endHour, endMinute);

    this.heureDebut = startTime.toLocaleTimeString('fr-FR', { timeZone: userTimeZone, hour12: false, hour: '2-digit', minute: '2-digit' });
    this.heureFin = endTime.toLocaleTimeString('fr-FR', { timeZone: userTimeZone, hour12: false, hour: '2-digit', minute: '2-digit' });


    this.getRooms('&type=bulle')
  }

  showHistory() {
    this.isHistory = !this.isHistory
    this.getHistory()
  }

  getHistory() {
    this.loadedHistory = false
    this.ReservationService.historiqueReservation().subscribe(
      resp => {
        console.log(resp)
        this.historiques = resp
        this.loadedHistory = true
      },
      error => {
        this.loadedHistory = true
        console.log("il y a erreur")
      }
    )
  }

  chooseDate() {
    this.isSelectDu = true
  }

  confirmSelection(datetime: IonDatetime) {
    datetime.confirm()
    this.isSelectDu = false

  }

  saisiTimeHeure(hourDebut: IonInput, typ: string) {
    const regex = /^(0?[0-9]|1[0-9]|2[0-3])$/
    if (!regex.test(hourDebut.value.toString())) {
      hourDebut.value = ''
    }

    if (hourDebut.value.toString().length === 2) {
      switch (typ) {
        case 'debut':
          if (this.deuxiemeInputRef1) {
            this.deuxiemeInputRef1.setFocus();
          }
          if (this.deuxiemeInputRef1F) {
            this.deuxiemeInputRef1F.setFocus();
          }
          break;
        case 'fin' :
          if (this.deuxiemeInputRef2) {
            this.deuxiemeInputRef2.setFocus();
          }
          if (this.deuxiemeInputRef2F) {
            this.deuxiemeInputRef2F.setFocus();
          }
      }

    }
  }

  doFiltre(datedebut: IonInput, heureDebut: any, heureFin: any, capacity: IonInput) {

    this.isFiltre = true
    let filtre = "&type=bulle"
    if(this.filtreDebut != null && heureDebut.value != null  && heureFin.value != null  ) {
      let debut = this.filtreDebut.toString().substr(0, 10)+'T'+heureDebut.value+':00'//+moment().format('Z')
      let fin = this.filtreDebut.toString().substr(0, 10)+'T'+heureFin.value+':00'//+moment().format('Z')
      filtre += "&start_at="+debut+"&end_at="+fin
    }
    console.log(filtre)
    filtre += capacity.value != 0 ? "&capacity="+capacity.value :  ""

    this.dateStart = this.filtreDebut

    if(filtre != "") {
      this.getRooms(filtre)

    }
  }

  /*doFiltre(datedebut: IonInput, heureDebut: IonInput, minsDebut: IonInput, heureFin: IonInput, minutesFin: IonInput, capacity: IonInput) {


    this.isFiltre = true
    let filtre = "&type=bulle"
    minsDebut.value = minsDebut.value == '' ? '00' : minsDebut.value
    if(this.filtreDebut != null && heureDebut.value != null && minsDebut.value != null && heureFin.value != null && minutesFin.value != null ) {
      let debut = this.filtreDebut.toString().substr(0, 10)+'T'+heureDebut.value+':'+minsDebut.value+':00'//+moment().format('Z')
      let fin = this.filtreDebut.toString().substr(0, 10)+'T'+heureFin.value+':'+minutesFin.value+':00'//+moment().format('Z')
      filtre += "&start_at="+debut+"&end_at="+fin
    }
    console.log(filtre)
    filtre += capacity.value != 0 ? "&capacity="+capacity.value :  ""
    //console.log(filtre)
    this.dateStart = this.filtreDebut
    //this.dateEnd = this.filtreEnd
    if(filtre != "") {
      this.getRooms(filtre)

    }

  }*/

  initFiltre() {
    //this.filtreDebut = ''

    this.getRooms('&type=bulle')
    this.isFiltre = false
  }

  getRooms(filtre: string) {
    this.loaded = false
    this.rooms = []
    this.ReservationService.getBulles(filtre).subscribe(
      resp => {
        console.log(resp)
        this.rooms = resp
        this.loaded = true
      }
    )
  }

  statusRerv(reservationStatus: any) {
    /*let now = new Date()
    now.setHours(0, 0, 0, 0);

    if(reservationStatus.state == 'available') {
      if(reservationStatus.changeDate != null) {
        let date = reservationStatus.changeDate.toString()
        date = date.substr(0, 10);
        date = new Date(date)
        date.setHours(0, 0, 0, 0)

        if (now === date){
          return "Libre jusqu'à la fin de la journée"
        }else if(date > now ) {
          return "Libre jusqu'à "+this.datePipe.transform(date, 'E dd MMMM')
        }
        return "Libre jusqu'à "+this.datePipe.transform(date, 'E dd MMMM')
      }

    }else if(reservationStatus.state == 'unavailable'){
      if(reservationStatus.changeDate != null) {
        let date = reservationStatus.changeDate.toString()
        date = date.substr(0, 10);
        date = new Date(date)
        return  "libre le "+this.datePipe.transform(date, 'E dd MMMM')
      }else {
        return "Réservé"
      }
    }else if(reservationStatus.state == 'busy') {
      if(reservationStatus.changeDate != null) {
        let date = reservationStatus.changeDate.toString()
        date = date.substr(0, 10);
        date = new Date(date)
        date.setHours(0, 0, 0, 0)
        return  "libre le "+this.datePipe.transform(date, 'E dd MMMM')
      }else {
        return "Occupé"
      }
    }

    return "Cet espace n’est pas ouvert à la réservation"*/
    let message: string;
    switch (reservationStatus.state) {
      case 'available':
        if (reservationStatus.changeDate !== null) {
          const currentDate = new Date();
          const changeDate = new Date(reservationStatus.changeDate);

          if (changeDate.toDateString() === currentDate.toDateString()) {
            // La changeDate est aujourd'hui
            message = `Libre jusqu'à ${changeDate.toLocaleTimeString()}`;
          } else {
            // La changeDate n'est pas aujourd'hui, donc jusqu'à la fin de la journée
            message = `Libre jusqu'à la fin de la journée`;
          }
        } else {
          // Les dates sont null, donc simplement "Libre"
          message = 'Libre';
        }
        break;

      case 'unavailable':
        if (reservationStatus.changeDate !== null) {
          const changeDate = new Date(reservationStatus.changeDate);
          message = `Libre à ${changeDate.toLocaleTimeString()}`;
        } else {
          message = 'Réservé';
        }
        break;

      case 'busy':
        if (reservationStatus.changeDate !== null) {
          const changeDate = new Date(reservationStatus.changeDate);
          message = `Libre à ${changeDate.toLocaleTimeString()}`;
        } else {
          message = 'Occupé';
        }
        break;

      default:
        message = 'Cet espace n’est pas ouvert à la réservation';
        break;
    }

// Maintenant, vous pouvez utiliser la variable 'message' pour afficher le résultat où vous le souhaitez.
    //console.log(message);

    return message

  }

  goToMap(index: number, room: any) {
    localStorage.setItem('roomid', room.zone.mapwizeId);
    localStorage.setItem('roomfind', '1');
    window.location.replace('/cartographie')
  }

  openReservation(TheRoom: Room | any){
    this.idRoom = TheRoom.id
    this.nameRoomToReserve = TheRoom.name
    this.isReservation = true

  }
  segmentChange(ionseg: IonSegment) {
    switch (ionseg.value) {
      case 'encours': this.isEncours = true
        break;
      case 'termine': this.isEncours = false
        break;
    }
  }

  convertToDate(dateString: string): Date {
    return new Date(dateString);
  }

  submitReservation(subject: IonTextarea) {
    this.emailInvalides = []
    this.isEmailInvalid = false
    this.isHourInvalid = false
    this.isInvalid = false

    let emailString = ""
    if(this.particpants.length > 1){
      emailString = this.particpants.join(',');
    }else{
      emailString = this.particpants.length == 1 ? this.particpants[0] : ""
    }

    this.minsDebut = this.minsDebut == '' ? '00' : this.minsDebut
    this.minsFin = this.minsFin == '' ? '00' : this.minsFin

    if(
      this.dateStart == '' || this.dateStart == null
      || this.heureDebut == '' || this.heureDebut == null
      || this.heureFin == '' || this.heureFin == null
      || subject.value == '' || subject.value == null){
      this.isInvalid = true
    }else if((this.heureFin < this.heureDebut) || ((this.heureFin == this.heureDebut) && (this.minsDebut > this.minsFin))) {
      this.isHourInvalid = true
    }else{
      this.isInvalid = false
      let debut = this.dateStart.substr(0, 10)+'T'+this.heureDebut+':'+':00'+moment().format('Z');
      let fin = this.dateStart.substr(0, 10)+'T'+this.heureFin+':'+':00'+moment().format('Z');
      let data = {
        start: debut,
        end: fin,
        subject: subject.value,
        invites: emailString
      }

      this.isSendding = true

      if(!this.isUpdate) {
        this.ReservationService.sendReservation(data, this.idRoom).subscribe(
          resp => {
            this.isSendding = false
            console.log(resp)
            this.isReservation = false
            this.particpants = []

            subject.value = ''
            this.presentAlert("Réservation faite avec succès!")
            this.isHourInvalid = false
            this.isInvalid = false
          },
          error => {
            this.isSendding = false
            if(error.status == 408) {
              this.presentAlert("La réservation a échoué!"+ `<br><br>` +"La salle est déjà réservée dans ce créneau horaire!")
            }else if(error.status == 200){
              this.emailInvalides = error.error.text.split(',');
              this.isEmailInvalid = true
            }

          }
        )
      }else{
        this.ReservationService.updateReservation(data, this.idReservation).subscribe(
          resp => {
            this.isSendding = false
            this.isReservation = false
            this.particpants = []
            this.dateStart = ''
            this.heureDebut = ''
            this.minsDebut = ''
            this.heureFin = ''
            this.minsFin = ''
            subject.value = ''
            this.presentAlert("Réservation modifiée avec succès!")
            this.getHistory()
          },
          error => {
            this.isSendding = false
            if(error.status == 408) {
              this.presentAlert("La réservation a échoué!"+ `<br><br>` +"La salle est déjà réservée dans ce créneau horaire!")
            }else if(error.status == 200){
              this.emailInvalides = error.error.text.split(',');
              this.isEmailInvalid = true
            }
            this.isSendding = false
            this.isReservation = false
          }
        )
      }

    }
  }


  makeUpdateReservation(Reservation: any) {
    console.log(Reservation)
    let debut = new Date(Reservation.dateStart.toString())
    console.log(debut.getTime())
    const heures = debut.getHours();
    const minutes = debut.getMinutes();
    this.heureDebut = heures.toString().padStart(2, '0')
    this.minsDebut = minutes.toString().padStart(2, '0')

    let fin = new Date(Reservation.dateEnd.toString())
    const heuresFin = fin.getHours();
    const minutesFin = fin.getMinutes();
    this.heureFin = heuresFin.toString().padStart(2, '0')
    this.minsFin = minutesFin.toString().padStart(2, '0')

    this.dateStart = Reservation.dateStart
    this.dateEnd = Reservation.dateEnd
    this.objetResrvation = Reservation.subject
    this.particpants = Reservation.invites ? Reservation.invites.split(",") : [] ;
    this.nameRoomToReserve = Reservation.room.name
    this.isUpdate = true
    this.idReservation = Reservation.id
    this.isReservation = true

  }

  ouvreLiberation(id: number) {
    this.idReservation = id
    this.isLiberationSalle = true
    console.log(this.idReservation)
  }

  MakeLiberer(action: string) {
    switch (action) {
      case 'cancel': this.isLiberationSalle = false
        break;
      case 'ok':
        this.ReservationService.libererSalle(this.idReservation).subscribe(
          resp => {
            console.log(resp)
            this.isLiberationSalle = false
            this.getHistory()
          },
          error => {
            this.isLiberationSalle = false
            this.getHistory()
            this.presentAlert("Erreur lors de l'annulation de la réservation!")

          }
        )
        break;
    }

  }

  closeReservation(){
    this.isReservation = false
  }

  ouvreCalendar() {
    this.isCalendar = true
  }

  async presentAlert(msg: string) {
    const alert = await this.alertController.create({
      header: '',
      subHeader: '',
      message: msg,
      buttons: ['OK'],
    });

    await alert.present();
  }

  saisiTimeMinute(minute: IonInput){
    //const regex = /^[0-9]+$/;
    const regex = /^(0?[0-9]|1[0-9]|2[0-9]|3[0-9]|4[0-9]|5[0-9])$/
    if(!regex.test(minute.value.toString())) {
      minute.value = ''
    }
  }

  doSomething(email){
    if(this.doValidate(email)) {
      this.particpants.push(email);
      this.userEmail = '';
      console.log(this.particpants)
    }
  }

  removeItem(i){
    this.particpants.splice(i, 1)
  }

  validateEmail(email) { //Validates the email address
    var emailRegex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return emailRegex.test(email);
  }



  doValidate(email) {
    if (!this.validateEmail(email)) {
      alert("Invalid Email");
      return false;
    }
    return true
  }

  annulerDate(){
    this.isCalendar = false
    this.isSelectDu = false
  }

  async confirmeDate(datetime: IonDatetime) {
    await datetime.confirm()
    this.isCalendar = false
  }

  ouvreFiltre(){
    this.isOuvreFiltre = !this.isOuvreFiltre
  }

}
