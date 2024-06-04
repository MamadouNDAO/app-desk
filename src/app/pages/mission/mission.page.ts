import {Component, Injector, OnInit} from '@angular/core';
import {BasePage} from "../../base";



@Component({
  selector: 'app-mission',
  templateUrl: './mission.page.html',
  styleUrls: ['./mission.page.scss'],
})
export class MissionPage extends BasePage  implements OnInit {
  isNotif: boolean = true
  isEnquete: boolean = false

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
  constructor(injector: Injector) { super(injector); }

  ngOnInit() {
  }

  selectNote(index: number, qst: any) {
    console.log(index)
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
}
