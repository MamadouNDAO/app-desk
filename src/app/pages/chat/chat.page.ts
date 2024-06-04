import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {IonContent} from "@ionic/angular";


@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {

  @ViewChild('IonContent', { static: true }) content: IonContent
  paramData: any;
  msgList: any;
  userName: any;
  user_input: string = "";
  User: string = "Me";
  toUser: string = "HealthBot";
  start_typing: any;
  loader: boolean;


  constructor(public activRoute: ActivatedRoute) {
    this.activRoute.params.subscribe((params) => {
      this.paramData = params;
      this.userName = params['name'];
    });
    this.msgList = [
      {
        userId: "HealthBot",
        userName: "HealthBot",
        userAvatar: "../../assets/chat/chat4.jpg",
        time: "12:00",
        message: "Bonjour bienvenue sur le chat",
        id: 0
      },
      {
        userId: "Me",
        userName: "Me",
        userAvatar: "../../assets/chat/chat5.jpg",
        time: "12:03",
        message: "Bonjour et bienvenue",
        id: 1,
      },
    ];
  }

  ngOnInit() {
  }

  sendMsg() {
    if (this.user_input !== '') {
      this.msgList.push({
        userId: this.toUser,
        userName: this.toUser,
        userAvatar: this.paramData.image ? this.paramData.image : "../../assets/chat/chat4.jpg",
        time: '12:01',
        message: this.user_input,
        id: this.msgList.length + 1
      });
      this.user_input = '';
      this.scrollDown();
      setTimeout(() => {
        this.senderSends();
      }, 500);

    }
  }
  senderSends() {
    this.loader = true;
    setTimeout(() => {
      this.msgList.push({
        userId: this.User,
        userName: this.User,
        userAvatar: "../../assets/chat/chat5.jpg",
        time: "12:01",
        message: "Je ne suis pas disponible pour l'instant"
      });
      this.loader = false;
      this.scrollDown()
    }, 2000)
    this.scrollDown()
  }
  scrollDown() {
    setTimeout(() => {
      this.content.scrollToBottom(50)
    }, 50);
  }

  userTyping(event: any) {
    // console.log(event);
    this.start_typing = event.target.value;
    this.scrollDown()
  }
}


