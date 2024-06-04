import { Component, Injector, OnInit } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';
import { BasePage } from 'src/app/base';
import { IprodRoom } from 'src/model/room';
import { RoomStatement } from 'src/model/statement';
import {ApiService} from "../../serviceApp/api.service";
import {error} from "@angular/compiler-cli/src/transformers/util";
import {DatePipe} from "@angular/common";
import {ActivatedRoute} from "@angular/router";
import {MessagingService} from "../../serviceApp/messaging.service";
import {IonInput} from "@ionic/angular";

interface CategoriModel {
  id: string,
  name: string,
  description: string
}

@Component({
  selector: 'app-constats',
  templateUrl: './constats.page.html',
  styleUrls: ['./constats.page.scss'],
})
export class ConstatsPage extends BasePage implements OnInit {

  input: string = ""
  rooms:IprodRoom[]=[]
  categories: CategoriModel[] = []
  userId:string = localStorage.getItem('userId')
  salleId: string
  categorieId: string
  titleConstat: string = ''
  seletedImg: any
  fileName: string
  inputValue: string;
  desc: string = '';
  historiques:RoomStatement[]=[]
  title = ""
  isLoading: boolean = false
  isPopup: boolean = false
  msgPopup = 'Constat envoyé avec succès!'

  isNotif: boolean = true
  isEnquete: boolean = false
  showNotif: boolean = false
  hArea: string = 'h135'


  qst1 = [
    {note: 1,name: 'star-outline' },
    {note: 2,name: 'star-outline' },
    {note: 3,name: 'star-outline' },
    {note: 4,name: 'star-outline' },
    {note: 5,name: 'star-outline' },
  ]
  qst2 = [
    {note: 1,name: 'star-outline' },
    {note: 2,name: 'star-outline' },
    {note: 3,name: 'star-outline' },
    {note: 4,name: 'star-outline' },
    {note: 5,name: 'star-outline' },
  ]
  qst3 = [
    {note: 1,name: 'star-outline' },
    {note: 2,name: 'star-outline' },
    {note: 3,name: 'star-outline' },
    {note: 4,name: 'star-outline' },
    {note: 5,name: 'star-outline' },
  ]
  qst4 = [
    {note: 1,name: 'star-outline' },
    {note: 2,name: 'star-outline' },
    {note: 3,name: 'star-outline' },
    {note: 4,name: 'star-outline' },
    {note: 5,name: 'star-outline' },
  ]
  message;
  isGrised: boolean = false
  constructor(
    injector: Injector,
    private apis: ApiService,
    private datePipe: DatePipe,
    private route: ActivatedRoute,
    private messagingService: MessagingService
    ) {  super(injector)}

  ngOnInit(): void {

    this.isGrised = (this.desc == '' || this.desc == undefined) || (this.titleConstat == '' || this.titleConstat == undefined)

    this.message = this.messagingService.currentMessage
    this.getCategorie()
    this.getRooms()
    this.getUserConstHistorique()
    this.hArea = localStorage.getItem("theme") === "green" ? "h135" : "h84"

    const id = this.route.snapshot.queryParams['id'];
    if(id != undefined) {
      this.salleId = id
      //localStorage.removeItem('IdSalleCartoConstat')
      //let data = JSON.parse(localStorage.getItem('RoomToConstat'))
      //this.openReservation(data)
    }
  }

  verifGrised(titreConst: IonInput, descConst: HTMLTextAreaElement) {

    this.isGrised = descConst.value == ''  || titreConst.value == ''
  }

  getRooms(){
    this.apiService.get('/api/v1/room/').subscribe((response) =>{
      this.rooms = response

    })
  }
  getUserConstHistorique(){
    this.apis.getHistoryConstat(this.userId).subscribe(
      resp => {
        this.historiques = resp
      }
    )
    /*this.apiService.get(`/api/v1/ticket/?opener=${this.userId}`).subscribe((response) =>{
      this.historiques = response

    })*/
  }

  actionToConstat(){
    //this.loadingService.present("En cours d'envoie")
    if(this.titleConstat == '' || this.titleConstat == undefined){
      this.msgPopup = 'Constat non envoyé! Veuillez ajouter un titre.'
      this.isPopup = true
    }else if(this.desc == '' || this.desc == undefined){
      this.msgPopup = 'Constat non envoyé! Veuillez ajouter une description.'
      this.isPopup = true
    }else{
      this.isLoading = true
      const currentDate = new Date();
      const formattedDate = this.datePipe.transform(currentDate, 'yyyyMMdd-HHmmss');

      let dataSCI = {
        image: this.seletedImg,
        description: this.desc,
        title: this.titleConstat,
        label: "Themis-" + formattedDate
      }

      let dataPMU = {
        image: this.seletedImg,
        description: this.desc,
        title: this.titleConstat,
        label: "Themis-" + formattedDate,
        category_id: this.categorieId
      }

      let data = localStorage.getItem("theme") === "green" ? dataPMU : dataSCI

      this.apiService.post(`/api/v1/room/${this.salleId}/statement`, data).subscribe(
        response => {
          //this.loadingService.dismiss()
          this.isLoading = false
          if (response) {
            this.msgPopup = 'Constat envoyé avec succès!'
            this.isPopup = true

            this.salleId = '';
            this.seletedImg = '';
            this.desc = ''
            this.categorieId = ''
            this.titleConstat = ''
            setTimeout(() => {
              this.getUserConstHistorique()

            }, 1000);

          }


        },
        error1 => {
          this.msgPopup = 'Constat non envoyé!'
          this.isPopup = true
        }
      )
    }
  }

  converTobase64(file: File){
    const observable = new Observable((subscriber: Subscriber<any>) =>{
      this.readFile(file,subscriber)
    })

    observable.subscribe(d =>{
      this.seletedImg = d

    })
  }

  readFile(file: File, subscribe: Subscriber<any>){
    const fileReader = new FileReader();

    fileReader.readAsDataURL(file)

    fileReader.onload = () =>{
      subscribe.next(fileReader.result)
      subscribe.complete()
    }

    fileReader.onerror = () =>{
      subscribe.error()
      subscribe.complete()

    }
  }

  displayFileName(event: any): void {

    const fileInput = event.target.files[0];
    this.seletedImg = fileInput;
    this.converTobase64(fileInput)
  }

  goTo(page: string) {
    //this.router.navigate([page])
    this.addView = false
    this.historyView = true
  }

  returnPage() {
    this.addView = true
    this.historyView = false
  }

  getCategorie() {
    this.apis.getCategories().subscribe(
      resp => {

        this.categories = resp
      },
      error => {

      }
    )
  }

  closePopup() {
    this.isPopup = false
  }

  selectNote(index: number, qst: any) {

    for(let n = 0; n<=4; n++){

      qst[n].name = 'star-outline'
    }
    for(let i = 0; i<=index; i++){
      qst[i].name = 'star'
    }
  }

  showEnquete(){
    this.isNotif = !this.isNotif
    this.isEnquete = !this.isEnquete
  }

  openNotification(){
    this.addView = false
    this.showNotif = true
  }

  closeNotification(){
    this.addView = true
    this.showNotif = false
  }
}











