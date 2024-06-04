import {ChangeDetectorRef, Component, Injector, OnInit} from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import {Observable, filter, Subject} from 'rxjs';
import { BasePage } from './base';
import themegreen from "./themegreen";
import themered from "./themered";
import {registerLocaleData} from "@angular/common";
import localeFr from '@angular/common/locales/fr';
import {getMessaging, onMessage} from "@angular/fire/messaging";
import {getToken} from "@angular/fire/app-check";
import { environment } from "../environments/environment";
//import firebase from "firebase/compat";
import {MessagingService} from "./serviceApp/messaging.service";
import {AngularFireMessaging} from "@angular/fire/compat/messaging";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent extends BasePage implements OnInit {
  title = 'af-notification';
  message:any = null;
  vapidKeys: "BHINeA_gsgdW8VCYD8JnIquyoDkNs7qK9qyOASjNrwv2dn10pFchXwa9I8pG-SRrojSzAc9uKNASfEsc-c2NkLY"


  public isUserLogged$: boolean;
  public currentRoot$: string;
  typeMenu = "/sci/service"
  menuPMU = [
    {title:'Service', url: '/actualites', icon: 'book' },
  ];
  iss =false
  typeService = ""
  menu = []
  isLogged: boolean = false
  showNotif: boolean = false
  public appPages = [
    {title:'Service', url: '/actualites', icon: 'book' },
    {title:'News', url: '/news', icon: 'calendar-clear' },
    {title:'Map' ,url: '/map', icon: 'map' },
  ];


  ngOnInit() {
    this.messagingService.requestPermission()
    this.messagingService.receiveMessage()
    this.receiveMessage()
    registerLocaleData(localeFr, 'fr');
    let currentUrl = this.route.url
    //console.log('current '+currentUrl)
   // this.isLogged = currentUrl != '/'

    if(this.theme.color == 'ivi-red'){
      this.menu = this.appPages
    }else{
      this.menu = this.menuPMU
    }


  }

  constructor(private route: Router, injector: Injector, private chg: ChangeDetectorRef, private messagingService: MessagingService, private angularFireMessaging: AngularFireMessaging) {

    super(injector);

    this.route.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        this.stateService.setCurrentRoot(event.url)
      })


    /*this.stateService.selectIslogged().forEach(data =>{
      this.isUserLogged$ = data;
      console.log('mama:'+this.isUserLogged$)
    });
    this.stateService.selectedCurrentRoot().subscribe(data =>{
      this.currentRoot$ = data;

    });*/

   // setTimeout(() => {
       //console.log("this.isUserLogged$",this.currentRoot$)
    //  if(this.isUserLogged$){
   //     this.route.navigate([/*'/actualites'*/`${this.currentRoot$}`])
    //  }else{
   //     this.route.navigate([`/login`])
   //   }
  //  }, 1000);
  }

  // isRouteActive(route) {
  //   if(this.router.url === route) return 'isActive'
  //   else return null
  // }

  logout(){
    this.stateService.userLogger(false)
    this.route.navigate([`/login`])
    localStorage.clear()

  }

  changeTheme(color) {
    //localStorage.setItem('theme', color)
    this.typeService = color
    switch (color){
      case 'green': this.theme = themegreen
        break;
      case 'red': this.theme = themered
        break
    }
    console.log("theme changé: "+color)
    this.chg.detectChanges()
    //window.location.reload()
  }


  receiveMessage() {
    this.angularFireMessaging.messages.subscribe(
      (payload) => {
        console.log("new message received. ", payload.notification.body);
        //this.currentMessage.next(payload);
        this.showNotif = true
      })
  }

  gotoNotif(){
    this.showNotif = false
  }
}
