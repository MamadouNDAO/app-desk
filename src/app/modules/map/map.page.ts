import {Component, ElementRef, Injector, OnDestroy,} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { NavController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { GeneralFunctions } from '../../pages/general-functions';
import {BasePage} from "../../base";
import {ApiService} from "../../serviceApp/api.service";



@Component({
  selector: 'app-map',
  templateUrl: 'map.page.html',
  styleUrls: ['map.page.scss']
})

export class MapPage  extends BasePage implements OnDestroy{

  class: any;
  isMapBottomSheetOpened: boolean = false;
  observer: Observable<any>;
  isUniverseOpened:boolean=false;
  isCarto!: boolean
  title: any;
  isLoader: boolean = false
  intUp:any
  constructor(
    public injector: Injector,
    private elem: ElementRef,
    private navController: NavController,
    public elRef : ElementRef,
    private myRouter: Router,
    private api: ApiService,
    public generalFunctions: GeneralFunctions){
    super(injector)
  }
 /* ngOnDestroy(): void {
    clearInterval(this.intUp)
    throw new Error('Method not implemented.');

  }*/

  onIframeLoad() {
    const iframeElement: HTMLIFrameElement = document.querySelector('iframe');

    if (iframeElement) {

      const buttonElement = iframeElement.contentDocument.getElementById('btnReserver');
      const buttonConstat = iframeElement.contentDocument.getElementById('btnConstat');

      if (buttonElement) {
        buttonElement.addEventListener('click', this.handleButtonClick);
      }

      if (buttonConstat) {
        buttonConstat.addEventListener('click', this.goToConstat);
      }

    }
  }

  handleButtonClick() {
    const interval = setInterval(() => {
      let id = localStorage.getItem('IdSalleCarto')

      if(id != null){
        window.location.replace('/reservation_espace?id='+id)
      }
    }, 200)
  }

  goToConstat() {
    const interval = setInterval(() => {
      let id = localStorage.getItem('IdSalleCartoConstat')
      if(id != null){
        window.location.replace('/constat?id='+id)
      }

    }, 200)

  }

  ngOnInit(){
    this.isLoader = true
    //this.isCarto = true
    this.isCarto = localStorage.getItem("theme") == "green"

    if(this.router.url === '/cartographie/mode-reservation') {
      localStorage.setItem('mode', 'reservation')
      this.getSallesObscure()
      const myInt = setInterval(() => {
        if(localStorage.getItem("ObscuresRooms")){
          this.isLoader = false
          clearInterval(myInt)
        }

      }, 1000)

    }else{

      localStorage.removeItem('mode')
      this.updateSalle()
      this.getSallesObscure()
      this.intUp = setInterval(()=> {
        if(localStorage.getItem("userToken")){
          this.updateSalle()
        }

      },4000)
    }



  }

  updateSalle(){
    this.api.getSalles("&availableonly=no").subscribe(
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
        localStorage.setItem('finmode', 'ok')
        if(localStorage.getItem("Etages") && localStorage.getItem("ListRooms")){
          this.isLoader = false

        }

      }
    )
  }


  getSallesObscure(){
    this.api.getSallesObscure().subscribe(
      resp => {
        const salleObscures = []

        resp.forEach((i) => {
          salleObscures.push(i.zone.mapwizeId)
        })
        localStorage.setItem("ObscuresRooms", JSON.stringify(salleObscures))

      }
    )
  }

  ngOnDestroy(): void {
    clearInterval(this.intUp)
  }


}
