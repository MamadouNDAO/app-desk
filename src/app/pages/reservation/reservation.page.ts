import {Component, Injector, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {BasePage} from "../../base";
import { Room, Reservation } from 'src/model/room';
import { ReservationService } from './reservation.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import {
  AlertController,
  IonDatetime,
  IonInput,
  IonSegment,
  IonSelect,
  IonTextarea,
  NavController
} from '@ionic/angular';
import { Observable } from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';
import {createAnimation} from "@ionic/core";
import {DatePipe} from "@angular/common";
import {ReservationPageRoutingModule} from "./reservation-routing.module";
import * as moment from 'moment';
import { format } from 'date-fns';
import {TimepickerConfig} from "ngx-material-timepicker/src/app/material-timepicker/models/timepicker-config.interface";
import {NgxMaterialTimepickerTheme} from "ngx-material-timepicker";
import {CustomClock, CustomContainer, CustomDial, CustomTimepickerTheme} from "./model-clock";
import {TranspService} from "../transport-test/transp.service";
import TravelMode = google.maps.TravelMode;
import {GeocodingService} from "../transport-test/geocoding.service";
import {GoogleDirectionService} from "../transport-test/google-direction.service";
// import { GeneralFunctions } from '../../general-functions';

interface FloorModel{
  name: string
}

interface InviteModel{
  email: string
}

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.page.html',
  styleUrls: ['./reservation.page.scss'],
})
export class ReservationPage extends BasePage implements OnInit {
  @ViewChild('minuteDebut', { static: false }) deuxiemeInputRef1: IonInput;
  @ViewChild('minuteDebutF', { static: false }) deuxiemeInputRef1F: IonInput;
  @ViewChild('minuteFin', { static: false }) deuxiemeInputRef2: IonInput;
  @ViewChild('minuteFinF', { static: false }) deuxiemeInputRef2F: IonInput;
  @ViewChild('customCancelButton') customCancelButton: TemplateRef<any>;
  @ViewChild('customOKButton') customOKButton: TemplateRef<any>;
  emailInvalides = []
  isEmailInvalid: boolean = false
  deuxiemeInput: string;
  inputSearch: string = ''
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
  objetResrvation: string = ""
  isUpdate: boolean = false
  isCalendar: boolean = false
  isCalendarEnd: boolean = false
  isSelectDu: boolean = false
  isSelectAu: boolean = false
  idRoom: string = ""
  isSendding: boolean = false
  isReservation: boolean = false
  isHistory: boolean = false
  userEmail:any;
  currentDate: Date = new Date();
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
  isHourInvalid: boolean = false
  floors: FloorModel[] = []
  emails: InviteModel[] = []
  suggestionEmails: InviteModel[] = []
  isAutocomplete: boolean = false
  isPopupMsg: boolean = false
  messageReserv = ""
  iconResrv = ''
  colorIconReserv = ''
  isLoadFav: boolean = false
  googleArray: any
  showComplete: boolean = false
  mylat: any
  mylong: any
  long = 2.308617
  lat = 48.895686
  TransportArray: any = [];
  transportListing= [];
  dataArray: any = [];
  distance: string = '';
  duration: string = '';
  bounds = new google.maps.LatLngBounds();
  currentTraject: any = {};
  isDuration: boolean = false
  travelModes = [
    TravelMode.DRIVING,
    TravelMode.WALKING,
    TravelMode.BICYCLING,
    TravelMode.TRANSIT,
  ];
  typeTrajet: string = ''
  allDirections: google.maps.DirectionsResult[] = [];
  cityDestination: string;
  isData: boolean = false
  directions: any = [];
  directionsService: any = new google.maps.DirectionsService();
  directionsDisplay: any = new google.maps.DirectionsRenderer();
  polyline = new google.maps.Polyline({
    path: [],
    strokeColor: '#FF0000',
    strokeWeight: 3
  });
  isItineraire: boolean = false
  isloaTrajet: boolean = false
  constructor(injector: Injector,
              private ReservationService: ReservationService,
              private fb: FormBuilder,
              public alertController: AlertController,
              public override router: Router,
              private navigateController: NavController,
              private datePipe: DatePipe,
              private route: ActivatedRoute,
              private transportService: TranspService,
              private geocodingService: GeocodingService,
              private googleDirectionService: GoogleDirectionService,
              // public generalFunctions: GeneralFunctions
  ) {
    super(injector)
     // this.timepickerConfig = Object.assign({}, { format: 'HH:mm', minutesInterval: 15 });

  }

  // ngOnInit() {
  // }


  inputStart: boolean;
  inputEnd: boolean;
  rooms: any[] = [];
  filteredRooms: any[] = [];
  historiques: any[] = [];
  isBottomSheetOpened = false;
  localstorageReservations: Reservation[] = [];
  registerForm: any;
  bookingForm: FormGroup;
  reservation;
  currentRoom!: Room | null;
  roomName: string;
  roomHistorical = [];
  multiplicateReservation: boolean;
  wrongReservation: boolean;
  convertedDate;
  localISOTime;
  showMap = false;
  showReservationsContent = true;
  notification: Observable<any[]>;
  input: string =''
  loaded: boolean = false
  loadedHistory: boolean = false
  filtreDebut!: string
  filtreEnd!: string
  filtreCapacity: number
  filtreType: string

  public info = {title: 'Réservation de', subTitle: 'salle'};
  isModalOpen = false;
  particpants = []
  openModal(isOpen: boolean) {
    this.isModalOpen = false;
    setTimeout(() => {
      this.isModalOpen = true;
    }, 300)
  }

  closeModal(isOpen: boolean) {
    this.isModalOpen = false;
  }

  //@HostListener('keydown', ['$event'])

  initializeForm(): void {
    this.bookingForm = this.fb.group({
      dateStart: '',
      dateEnd: '',
      references: this.fb.array([this.fb.control('')])
    });
  }

  ngAfterViewInit() {
    // this.generalFunctions.gestionDeReservation(this.rooms, 'reservations', 'historicalReservations');
    this.dateStart = format(new Date(), "yyyy-MM-dd'T'HH:mm:ssXXX")
    this.filtreDebut = this.dateStart


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

  }


  ngOnInit() {

    //this.getFloor()
    this.getInvites()
    const id = this.route.snapshot.queryParams['id'];
    if(id != undefined) {
      let data = JSON.parse(localStorage.getItem('RoomToReserve'))
      this.openReservation(data)

    }


    this.getRooms("", null, null)

    this.title = localStorage.getItem("theme") === "green" ? "Réserver" : "Réservation"
    this.refreshHistorique()
  }

  goToMap(index: number, room: any) {
    this.isLoadFav = true
    localStorage.setItem('roomid', room.zone.mapwizeId);
    localStorage.setItem('roomfind', '1');
    /*let debut = this.filtreDebut.toString().substr(0, 10)+'T'+this.heureDebut+':00'
    let fin = this.filtreDebut.toString().substr(0, 10)+'T'+this.heureFin+':00'
    let filtre = "&start_at="+debut+"&end_at="+fin*/

    /*this.ReservationService.getrooms('&availableonly=no'+filtre).subscribe(
      resp => {
        const nomsEtages = [];
        resp.forEach((salle) => {
          if(salle.floor.name !== "Mezzanine"){
            if (!nomsEtages.includes(salle.floor.name.replace(/[A-Za-z]$/, ''))) {
              nomsEtages.push(salle.floor.name.replace(/[A-Za-z]$/, ''));
            }
          }else{
            if (!nomsEtages.includes(salle.floor.name)) {
              nomsEtages.push(salle.floor.name);
            }
          }


        });
        localStorage.setItem('Etages', JSON.stringify(nomsEtages))
        localStorage.setItem('ListRooms', JSON.stringify(resp))
        localStorage.setItem('modeReservation', String(true))
        localStorage.setItem('finmode', 'ok')
        this.isLoadFav = false
        window.location.replace('/cartographie/mode-reservation')
      },
      error => {
        this.isLoadFav = false
        window.location.replace('/cartographie/mode-reservation')
      }
    )*/
    window.location.replace('/cartographie')
  }

  goToMap2(index: number, room: any) {

    this.isLoadFav = true
    let theRoom = this.rooms.filter(e =>
      e.id.includes(room.room.id)
    );

    if(theRoom[0]){
      localStorage.setItem('roomid', theRoom[0].zone.mapwizeId);
      localStorage.setItem('roomfind', '1');
      window.location.replace('/cartographie')
    }else{

      this.isLoadFav = false
    }


   /* let debut = room.dateStart.toString().split("+")[0];
    let fin = room.dateEnd.toString().split("+")[0];
    let filtre = "&start_at="+debut+"&end_at="+fin*/

   /* this.ReservationService.getrooms('&availableonly=no'+filtre).subscribe(
      resp => {
        const nomsEtages = [];
        resp.forEach((salle) => {
          if(salle.floor.name !== "Mezzanine"){
            if (!nomsEtages.includes(salle.floor.name.replace(/[A-Za-z]$/, ''))) {
              nomsEtages.push(salle.floor.name.replace(/[A-Za-z]$/, ''));
            }
          }else{
            if (!nomsEtages.includes(salle.floor.name)) {
              nomsEtages.push(salle.floor.name);
            }
          }

        });
        localStorage.setItem('Etages', JSON.stringify(nomsEtages))
        localStorage.setItem('ListRooms', JSON.stringify(resp))
        localStorage.setItem('modeReservation', String(true))
        localStorage.setItem('finmode', 'ok')
        this.isLoadFav = false
        window.location.replace('/cartographie/mode-reservation')
      },
      error => {
        this.isLoadFav = false
        window.location.replace('/cartographie/mode-reservation')
      }
    )*/

  }

  toogleBottomSheet(selectedRoom){

  }

  toggle() {

  }

  openBottomSheet() {

  }

  closeBottomSheet() {

  }

  goTo(page: string) {
    this.router.navigate([page])
  }

  getRooms(filtre: string, etage: HTMLSelectElement | null, salle: IonInput | null) {
    this.loaded = false
    this.rooms = []
    this.ReservationService.getrooms(filtre).subscribe(
      resp => {
        console.log(resp[4].reservationStatus.message)
        this.rooms = resp
        this.filteredRooms = resp
        resp.forEach((salle) => {
          if(salle.floor.name !== "Mezzanine"){
            if (!this.floors.includes(salle.floor.name.replace(/[A-Za-z]$/, ''))) {
              this.floors.push(salle.floor.name.replace(/[A-Za-z]$/, ''));
            }
          }else{
            if (!this.floors.includes(salle.floor.name)) {
              this.floors.push(salle.floor.name);
            }
          }

        });
        this.floors.sort()
        //this.floors.sort((a,b) => a.name.localeCompare(b.name))

        if(etage != null || salle != null){
          this.frontFiltre(etage, salle)
        }
        this.loaded = true
      }
    )
  }

  confirmeDate(datetime: IonDatetime) {
    datetime.confirm()
    this.isCalendar = false
  }

  confirmeDateEnd(datetime: IonDatetime) {
    datetime.confirm()
    this.isCalendarEnd = false
  }

  annulerDate(){
    this.isCalendarEnd = false
    this.isCalendar = false
    this.isSelectDu = false
    this.isSelectAu = false
  }

  ouvreCalendar(input: string) {
    switch (input) {
      case 'start':
        this.isCalendar = true
        this.isCalendarEnd = false
        break;
      case 'end':
        this.isCalendarEnd = true
        this.isCalendar = false
        break;
    }

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

    if(
      this.dateStart == '' || this.dateStart == null
      || this.heureDebut == '' || this.heureDebut == null
      || this.heureFin == '' || this.heureFin == null
      || subject.value == '' || subject.value == null){
      this.isInvalid = true
    }else if(this.heureFin < this.heureDebut ) {
      this.isHourInvalid = true
    }else{
        this.isInvalid = false
        let debut = this.dateStart.substr(0, 10)+'T'+this.heureDebut+':00'+moment().format('Z');
        let fin = this.dateStart.substr(0, 10)+'T'+this.heureFin+':00'+moment().format('Z');
        let data = {
          start: debut,
          end: fin,
          subject: subject.value,
          invites: emailString,
          token: localStorage.getItem("userToken")
        }

        this.isSendding = true

        if(!this.isUpdate) {
          this.ReservationService.sendReservation(data, this.idRoom).subscribe(
            resp => {
              this.isSendding = false

              this.isReservation = false
              this.particpants = []
              subject.value = ''
              this.messageReserv = "Réservation faite avec succès!"
              this.iconResrv = 'chevron-down-circle'
              this.colorIconReserv = 'succes'
              this.isPopupMsg = true
              //this.presentAlert("Réservation faite avec succès!")
              this.initFiltre()
              this.isHourInvalid = false
              this.isInvalid = false
            },
            error => {
              this.isSendding = false
              if(error.status == 408) {
                this.messageReserv = "La réservation a échoué! La salle est déjà réservée dans ce créneau horaire!"
                this.iconResrv = 'close-circle'
                this.colorIconReserv = 'echec'
                this.isPopupMsg = true
                //this.presentAlert("La réservation a échoué!"+ `<br><br>` +"La salle est déjà réservée dans ce créneau horaire!")
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

              subject.value = ''
              this.messageReserv = "Réservation modifiée avec succès!"
              this.iconResrv = 'chevron-down-circle'
              this.colorIconReserv = 'succes'
              this.isPopupMsg = true
              //this.presentAlert("Réservation modifiée avec succès!")
              this.getHistory()
              this.initFiltre()
            },
            error => {

              if(error.status == 408) {
                this.messageReserv = "La réservation a échoué! La salle est déjà réservée dans ce créneau horaire!"
                this.iconResrv = 'close-circle'
                this.colorIconReserv = 'echec'
                this.isPopupMsg = true
                //this.presentAlert("La réservation a échoué!"+ `<br><br>` +"La salle est déjà réservée dans ce créneau horaire!")
              }else {
                this.messageReserv = "La réservation a échoué!"
                this.iconResrv = 'close-circle'
                this.colorIconReserv = 'echec'
                this.isPopupMsg = true
                //this.presentAlert("La réservation a échoué!")
              }
              this.particpants = []
              this.isSendding = false
              this.isReservation = false
              subject.value = ''
              //this.presentAlert("La réservation a échoué!")
            }
          )
        }

      }
    }





  makeUpdateReservation(Reservation: any) {

    let debut = new Date(Reservation.dateStart.toString())

    const heures = debut.getHours();
    const minutes = debut.getMinutes();
    this.heureDebut = `${heures.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;

    let fin = new Date(Reservation.dateEnd.toString())
    const heuresFin = fin.getHours();
    const minutesFin = fin.getMinutes();
    this.heureFin = `${heuresFin.toString().padStart(2, '0')}:${minutesFin.toString().padStart(2, '0')}`;


    this.dateStart = Reservation.dateStart
    this.dateEnd = Reservation.dateEnd
    this.objetResrvation = Reservation.subject
    this.particpants = Reservation.invites ? Reservation.invites.split(",") : [] ;
    this.nameRoomToReserve = Reservation.room.name
    this.isUpdate = true
    this.idReservation = Reservation.id
    this.isReservation = true

  }

  openReservation(TheRoom: Room | any){
    this.idRoom = TheRoom.id
    this.nameRoomToReserve = TheRoom.name
    this.isReservation = true

  }

  closeReservation(){
    this.isReservation = false
  }

  doFiltre(datedebut: IonInput, heureDebut: any, heureFin: any, capacity: IonInput, etage: HTMLSelectElement, salle: IonInput) {
    let filtre = '&availableonly=yes'
    this.isFiltre = true

    if(this.filtreDebut != null && heureDebut.value != null  && heureFin.value != null  ) {
      let debut = this.filtreDebut.toString().substr(0, 10)+'T'+heureDebut.value+':00'//+moment().format('Z')
      let fin = this.filtreDebut.toString().substr(0, 10)+'T'+heureFin.value+':00'//+moment().format('Z')
      filtre += "&start_at="+debut+"&end_at="+fin
    }

    filtre += capacity.value != 0 ? "&capacity="+capacity.value :  ""

    this.dateStart = this.filtreDebut

    if(filtre != "") {
      this.getRooms(filtre, etage, salle)
      //this.frontFiltre(etage, salle)
    }
  }

  initFiltre() {
    this.getRooms('', null, null)
    this.isFiltre = false
  }

  chooseDate(date: string) {
    switch (date) {
      case 'debut': this.isSelectDu = true
        break;
      case 'fin': this.isSelectAu = true
        break;
    }
  }

  confirmSelection(datetime: IonDatetime) {
    datetime.confirm()
    this.isSelectDu = false
    this.isSelectAu = false

  }

  showHistory() {
    this.isHistory = !this.isHistory
    this.getHistory()
  }

  getHistory() {
    this.loadedHistory = false
    this.ReservationService.historiqueReservation().subscribe(
      resp => {

        this.historiques = resp
        this.loadedHistory = true
      },
      error => {
        this.loadedHistory = true

      }
    )
  }

  doSomething(email){
    if(this.doValidate(email)) {
      this.particpants.push(email);
      this.userEmail = '';

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
      alert("Adresse email invalide");
      return false;
    }
    return true
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

  ouvreLiberation(id: number) {
    this.idReservation = id
    this.isLiberationSalle = true

  }

  MakeLiberer(action: string) {
    switch (action) {
      case 'cancel': this.isLiberationSalle = false
        break;
      case 'ok':
        this.ReservationService.libererSalle(this.idReservation).subscribe(
          resp => {

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

  showEtatRoom(reservationStatus: any) {
    let message = ''
    if(reservationStatus.message.includes('{{date}}')){
      const dateActuelle = new Date();
      const dateFournie = new Date(reservationStatus.changeDate);
      let mydate
      if (this.isAujourdhui(dateFournie, dateActuelle)) {
        // C'est aujourd'hui, affichez l'heure
        mydate = this.formatHeure(dateFournie);
      } else {
        // Ce n'est pas aujourd'hui, affichez la date et l'heure
        mydate = this.formatDateHeure(dateFournie);
      }
      message = 'Libre à partir de '+mydate
    }else{
      message = reservationStatus.message
    }

    return message

  }

  isAujourdhui(dateFournie: Date, dateActuelle: Date) {
    return (
      dateFournie.getDate() === dateActuelle.getDate() &&
      dateFournie.getMonth() === dateActuelle.getMonth() &&
      dateFournie.getFullYear() === dateActuelle.getFullYear()
    );
  }

  formatHeure(date: Date) {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  }

  formatDateHeure(date: Date) {
    return date.toLocaleString();
  }

  statusRerv(reservationStatus: any) {
    let message: string;

// Vérifier la valeur de reservationStatus.state
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



    return message
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

  saisiTimeMinute(minute: IonInput){
    //const regex = /^[0-9]+$/;
    const regex = /^(0?[0-9]|1[0-9]|2[0-9]|3[0-9]|4[0-9]|5[0-9])$/
    if(!regex.test(minute.value.toString())) {
      minute.value = ''
    }
  }

  frontFiltre(etage: HTMLSelectElement, salle: IonInput){

    if(etage.value == 'all'){
      this.filteredRooms = this.rooms.filter(r =>
        r.name.toLowerCase().includes(salle.value.toString().toLowerCase())
      );
    }else if(salle.value.toString().length > 0){
      this.filteredRooms = this.rooms.filter(r =>
        r.floor.name.toLowerCase().includes(etage.value.toLowerCase()) && r.name.toLowerCase().includes(salle.value.toString().toLowerCase())
      );
    }else{
      this.filteredRooms = this.rooms.filter(r =>
        r.floor.name.toLowerCase().includes(etage.value.toLowerCase())
      );
    }

  }

  /*getFloor(){
    this.ReservationService.getFloor().subscribe(
      resp => {
        this.floors = resp
        this.floors.sort((a,b) => a.name.localeCompare(b.name))
      }
    )
  }*/

  getInvites(){
    this.ReservationService.getInvites().subscribe(
      resp => {

        this.emails = resp
        this.suggestionEmails = this.emails
      }
    )
  }

  filtreEmail(email: IonInput){
    if(email.value.toString().length > 2){

      this.suggestionEmails = this.emails.filter(e =>
        e.email.toLowerCase().includes(email.value.toString().toLowerCase())
      );
      if(this.suggestionEmails.length > 0){
        this.isAutocomplete = true
      }
    }else{
      this.isAutocomplete = false
    }

  }


  addToParticipants(mail: string, Invites: IonInput){
    this.particpants.push(mail)
    Invites.value = ''
    this.suggestionEmails = []
    this.isAutocomplete = false
  }

  closePopupMsg(){
    this.isPopupMsg = false
    if(this.colorIconReserv == 'succes') {
      this.showHistory()
    }
  }

  enSaisieTrajet(search: IonInput){
    if(search.value.toString().length > 2){
      this.showComplete = true
       this.transportService.getDestination(search.value).subscribe(
        resp => {
          if(resp['status'] === 'OK'){

            this.googleArray = resp['predictions']
          }
        }

      )
    }

  }

  reservDescript(completion) {
    this.inputSearch = completion.description;
    this.cityDestination = completion.description
    this.showComplete = false;
    let geocoder = new google.maps.Geocoder();

    geocoder.geocode({ placeId: completion.place_id }).then(({results}) => {
      this.mylat = results[0].geometry.location.lat();
      this.mylong = results[0].geometry.location.lng();
      this.navitiaApi();
      this.isData = true
      return true;
    }).catch((e) => {
        window.alert('Geocoder failed due to: ' + e);
        return false;
      }
    );
    this.initialize('DRIVING');

  }

  navitiaApi() {
    const destinationCoords = {lat: this.mylat, lng: this.mylong};
    this.TransportArray = this.transportService.getData(this.lat, this.long, destinationCoords);
    if (this.inputSearch) {
      this.googleArray = this.transportService.getDestination(destinationCoords)
        .subscribe(response =>{

        });
    }
    if (this.TransportArray) {
      this.TransportArray
        .subscribe(arg => {

          this.transportListing.push(arg.journeys[0].sections);
          this.dataArray.push(arg);
          this.currentTraject = arg.journeys[0];

        });

    }
  }

  initialize(travelmode= 'DRIVING') {
    const mapOptions = {
      zoom: 12,
      center: { lat: this.lat, lng: this.long }
    };

    let map = new google.maps.Map(document.getElementById('map'), mapOptions);
    const directionsService = new google.maps.DirectionsService();
    const directionsDisplay = new google.maps.DirectionsRenderer({map});

    let promises = this.travelModes.map(travelMode => {
      return directionsService.route({
        origin: new google.maps.LatLng(this.lat, this.long),
        destination: this.cityDestination,
        travelMode
      })
    });

    Promise.all([
      promises[0].catch(_ => null),
      promises[1].catch(_ => null),
      promises[2].catch(_ => null),
    ]).then(results => {
      this.allDirections = results;
    }).catch(error => alert('Une erreur est survenue'));

    directionsService.route({
      origin: new google.maps.LatLng(this.lat, this.long),
      destination: this.cityDestination,
      travelMode: google.maps.TravelMode.WALKING
    }, (response, status) => {

      this.duration = response.routes[0].legs[0].duration.text;
      this.distance = response.routes[0].legs[0].distance.text;
      this.isDuration = true;

      if (status === google.maps.DirectionsStatus.OK) {
        directionsDisplay.setDirections(response);
      } else {
        //console.error('Directions request failed due to ' + status);
      }


    })

  }

  getDirectionByTravelMode(mode: TravelMode) {
    // @ts-ignore
    return this.allDirections.find(direction => direction.request.travelMode == mode.valueOf());
  }

  getDuration(mode: TravelMode): string {
    const direction = this.getDirectionByTravelMode(mode);
    return direction ? direction.routes[0].legs[0].duration.text: '';
  }
  getDistance(mode: TravelMode): string {
    const direction = this.getDirectionByTravelMode(mode);
    return direction ? direction.routes[0].legs[0].distance.text: '';
  }

  reinitData(){
    this.isData = false
    this.inputSearch = ''
  }

  openMap(travelMode: TravelMode) {
    const mapOptions = {
      zoom: 12,
      center: { lat: this.lat, lng: this.long }
    };

    let map = new google.maps.Map(document.getElementById('map'), mapOptions);
    const directionsDisplay = new google.maps.DirectionsRenderer({map});
    const direction = this.getDirectionByTravelMode(travelMode);

    directionsDisplay.setDirections(direction || this.allDirections[0]);
    if(this.isData){
      this.openBottomSheet();
    }

  }

  setTrajetReservation(){
    this.isloaTrajet = true
    let data = {
      type: this.typeTrajet,
      long: this.mylat,
      lat: this.mylong
    }

    this.ReservationService.setItineraire(data, this.idReservation).subscribe(
      resp => {

        this.isloaTrajet = false
      }
    )
  }

  showItineraire(r: any){
    this.isItineraire = true
    this.idReservation = r.id
  }

  closeTrajet(){
    this.isItineraire = false
  }

  refreshHistorique() {
    const intvHistorique = setInterval(() => {
      if(this.isHistory) {
        this.ReservationService.historiqueReservation().subscribe(
          resp => {
            this.historiques = resp
          }
        )
      }

    }, 7000)
  }

  protected readonly TravelMode = TravelMode;
}

