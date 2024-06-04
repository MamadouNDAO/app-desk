import {Component, ElementRef, Injector, OnInit} from '@angular/core';
import {BasePage} from "../../base";
import {NavController} from "@ionic/angular";
import {Router} from "@angular/router";
import {ApiService} from "../../serviceApp/api.service";

@Component({
  selector: 'app-map-reservation',
  templateUrl: './map-reservation.page.html',
  styleUrls: ['./map-reservation.page.scss'],
})
export class MapReservationPage extends BasePage implements OnInit {

  constructor(public injector: Injector,
              private elem: ElementRef,
              private navController: NavController,
              public elRef : ElementRef,
              private myRouter: Router,
              private api: ApiService) {  super(injector) }

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

  ngOnInit() {
    this.api.getSalles("").subscribe(
      resp => {
        localStorage.setItem('ListRooms', JSON.stringify(resp))
      }
    )
  }

}
