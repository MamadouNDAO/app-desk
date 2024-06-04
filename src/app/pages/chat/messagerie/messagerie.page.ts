import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-messagerie',
  templateUrl: './messagerie.page.html',
  styleUrls: ['./messagerie.page.scss'],
})
export class MessageriePage implements OnInit {

  // ========= mgs======
  segmentTab: any;
  chatData: ({ "name": string; "image": string; "description": string; "count": string; "status": string; "time": string; }
    | { "name": string; "status": string; "image": string; "description": string; "time": string; "count"?: undefined; })[];

  constructor(public route: Router) {
    this.chatData = [{
      "name": 'Jovenica ',
      "image": '../../assets/chat/chat1.jpg',
      "description": ' Bonjour, bienvenue sur la messagerie comment puis je vous aider ?',
      "count": '2',
      "time": '12:17',
      "status": "ofline"
    },
    {
      "name": 'camille',
      "image": ' ../../assets/chat/chat2.jpg',
      "description": ' Bonjour, bienvenue sur la messagerie comment puis je vous aider ?',
      "time": '12:17',
      "status": "online"
    },
    {
      "name": 'Emma',
      "image": ' ../../assets/chat/chat5.jpg',
      "description": ' Bonjour, bienvenue sur la messagerie comment puis je vous aider ?',
      "status": "online",
      "time": '11:15'
    },
    {
      "name": 'Celia',
      "image": ' ../../assets/chat/chat8.jpg',
      "description": ' Bonjour, bienvenue sur la messagerie comment puis je vous aider ?',
      "count": '6',
      "status": "ofline",
      "time": '07:00'
    },

    {
      "name": 'Anais',
      "image": ' ../../assets/chat/chat3.jpg',
      "description": ' Bonjour, bienvenue sur la messagerie comment puis je vous aider ?',
      "count": '2',
      "time": 'Hier',
      "status": "online"
    },
    {
      "name": 'Alba',
      "image": ' ../../assets/chat/chat6.jpg',
      "description": ' Bonjour, bienvenue sur la messagerie comment puis je vous aider ?',
      "count": '1',
      "status": "online",
      "time": 'Hier'
    },
    {
      "name": 'Eva',
      "image": ' ../../assets/chat/chat1.jpg',
      "description": ' Bonjour, bienvenue sur la messagerie comment puis je vous aider ?',
      "status": "online",
      "time": 'Hier',
    }, {
      "name": 'Clemence',
      "image": ' ../../assets/chat/chat2.jpg',
      "description": ' Bonjour, bienvenue sur la messagerie comment puis je vous aider ?',
      "status": "online",
      "time": 'Hier',
    },
    {
      "name": 'Charlotte',
      "image": ' ../../assets/chat/chat7.jpg',
      "description": ' Bonjour, bienvenue sur la messagerie comment puis je vous aider ?',
      "status": "ofline",
      "time": 'Lundi',
    },
    {
      "name": 'Clara',
      "image": ' ../../assets/chat/chat4.jpg',
      "description": ' Bonjour, bienvenue sur la messagerie comment puis je vous aider ?',
      "status": "ofline",
      "time": 'Dimanche',
    },
    ]
  }

  ngOnInit() {
    // if((<HTMLStyleElement>document.querySelector(".ion-padding")) || (<HTMLStyleElement>document.querySelector(".chatDiv"))){
    //   console.log(document.getElementsByClassName('.ion-padding'))

    // }
    console.log((<HTMLStyleElement>document.querySelector(".item-native")))
      document.querySelector('ion-list').addEventListener('click',()=>{
        console.log(location.pathname)
      })
    }
  segmentChanged(event: any) {
    this.segmentTab = event.detail.value;
    console.log(this.segmentTab);
    console.log((<HTMLStyleElement>document.querySelector(".item-native")))

  }
  goforChat(chat) {
    this.route.navigate(['chat', chat]);
    // setTimeout(() => {
    //   if(document.getElementsByTagName('ion-list')[2]){
    //     console.log(document.getElementsByTagName('ion-list ion-row '));
    //     // document.getElementsByTagName('ion-list')[2].style.fontSize='18px';
    //     for(var i =0;i<document.getElementsByTagName('ion-list')[2].children.length;i++){
    //       console.log(document.getElementsByTagName('ion-list')[2].children[i].children[0].children[0].children[0].children[0])
    //     }
    //   }
    // }, 1000);
  }
}
