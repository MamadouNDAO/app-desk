import {Component, Injector, OnInit} from '@angular/core';
import {BasePage} from "../../base";
import {FormBuilder, FormGroup} from "@angular/forms";
import {AlertController, IonInput, NavController} from "@ionic/angular";
import {Reservation, Room} from "../../../model/room";
import {Observable} from "rxjs";
import {createAnimation} from "@ionic/core";
import { ParkingService } from './parking.service';

@Component({
  selector: 'app-parking',
  templateUrl: './parking.page.html',
  styleUrls: ['./parking.page.scss'],
})
export class ParkingPage extends BasePage implements OnInit {
  dateStart!: string;
  dateEnd!: string;
  isCalendar: boolean = false
  isCalendarEnd: boolean = false
  isSelectDu: boolean = false
  isSelectAu: boolean = false
  loaded: boolean = false
  loadedHistory: boolean = false
  filtreDebut!: string
  filtreEnd!: string
  idRoom: string = ""
  isReservation: boolean = false
  constructor(injector: Injector,
              private parkingService: ParkingService,
              private fb: FormBuilder,
              public alertController: AlertController,
              // public router: Router,
              private navigateController: NavController,
              // public generalFunctions: GeneralFunctions
  ) {
    super(injector)
  }

  // ngOnInit() {
  // }


  inputStart: boolean;
  inputEnd: boolean;
  rooms: any[] = [];
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
  currentDate;
  showMap = false;
  showReservationsContent = true;
  notification: Observable<any[]>;
  input: string =''

  public info = {title: 'Réservation de', subTitle: 'salle'};
  isModalOpen = false;

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
  }

  ngOnInit() {
    //this.rooms = this.parkingService.getrooms();
    this.getRooms("&type=parking")
   /* let salles = [{"id":"Accueil E1","color":"#31bd8c","type":"libre","floor":"B1-UL1"},
      {"id":"Accueil Restaurant E2","color":"#1194ff","type":"reserve","floor":"B1-UL2"},
      {"id":"iViPlay","color":"#dd1185","type":"occupe","floor":"B1-UL3"}]
    localStorage.setItem('salles', JSON.stringify(salles));
    this.initializeForm();*/
    // setInterval(() => {
    //   this.generalFunctions.refreshComponent(this.ngAfterViewInit());
    // }, 1000);

  }

  getRooms(filtre: string) {
    this.loaded = false
    this.parkingService.getrooms(filtre).subscribe(
      resp => {
        this.rooms = resp
        this.loaded = true
      }
    )
  }

  chooseDate(date: string) {
    switch (date) {
      case 'debut': this.isSelectDu = true
        break;
      case 'fin': this.isSelectAu = true
        break;
    }
  }

  openReservation(idRoom: string){
    this.idRoom = idRoom
    this.isReservation = true

  }

  closeReservation(){
    this.isReservation = false
  }

  doFiltre(debut: IonInput, fin: IonInput, capacity: IonInput) {

    let filtre = "&type=parking"
    filtre += debut.value != "" && fin.value != "" ? "&start_at="+debut.value :  ""
    filtre += fin.value != "" && debut.value != "" ? "&end_at="+fin.value :  ""
    filtre += capacity.value != 0 ? "&capacity="+capacity.value :  ""

    if(filtre != "") {
      this.getRooms(filtre)
    }
  }

  goToMap(index: number, room: any) {
    localStorage.setItem('roomid', room.id);
    localStorage.setItem('roomfind', '1');
    this.navigateController.navigateForward(['/map'])
  }

  toogleBottomSheet(selectedRoom){

  }

  toggle() {

  }

  openBottomSheet() {
    const animation = createAnimation()
      .addElement(document.querySelector(".bottomSHeet"))
      .easing("ease-in-out")
      .duration(400)
      .direction("alternate")
      .keyframes([
        { height: "0px", transform: "scale(1)", opacity: "1", },
        { height: "15rem", transform: "scale(1)", opacity: "1" },
      ]);
    (<HTMLStyleElement>document.querySelector(".bottomSHeet")).style.display = "block";
    // this.openClose = true;
    animation.play();
  }

  closeBottomSheet() {
    const animation = createAnimation()
      .addElement(document.querySelector(".bottomSHeet"))
      .easing("ease-in-out")
      .duration(300)
      .direction("alternate")
      .keyframes([
        { height: "15rem", },
        { height: "0px", },
      ]);
    // this.openClose = false;
    animation.play();
  }

  goTo(page: string) {
    this.router.navigate([page])
  }

}
