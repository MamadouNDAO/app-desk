import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {AngularFireMessaging} from "@angular/fire/compat/messaging";
import {ApiService} from "./api.service";
//import firebase from "firebase/compat";

@Injectable({
  providedIn: 'root'
})
export class MessagingService {
  currentMessage = new BehaviorSubject(null)
  constructor(private angularFireMessaging: AngularFireMessaging, private api: ApiService) {

   /* this.angularFireMessaging.messages.subscribe(
      (_messaging: any) => {
        _messaging.onMessage = _messaging.onMessage.bind(_messaging);
        _messaging.onTokenRefresh = _messaging.onTokenRefresh.bind(_messaging);
      }
    )*/


  }

  requestPermission() {
    this.angularFireMessaging.requestToken.subscribe(
      (token) => {
        //console.log(token);
       const intVals = setInterval(() => {
         if(token && localStorage.getItem("userToken")){
           let data = {
             applicationVersion: 'v0.0.1',
             deviceModel: 'desk',
             deviceOsVersion: 'browser',
             reservationAlertDelay: 0,
             macAddress: "0",
             fcmToken: token
           }
           this.api.setTokenNotif(data).subscribe(
             resp => {
               //console.log(resp)
             }
           )
           clearInterval(intVals)
         }
       }, 2000)

      },
      (err) => {
        console.error('Unable to get permission to notify.', err);
      }
    );
  }


  receiveMessage() {
    this.angularFireMessaging.messages.subscribe(
      (payload) => {
        //console.log("new message received. ", payload.notification.body);
        this.currentMessage.next(payload);
      })
  }
}
