import {Component, Injector, OnInit} from '@angular/core';
import {BasePage} from "../../base";
import {Router} from "@angular/router";
import {ApiService} from "../../serviceApp/api.service";
import {IonToggle} from "@ionic/angular";

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage extends BasePage implements OnInit {
  services = []
  constructor(injector: Injector,
              public override router: Router,
              private api: ApiService
              ) {
    super(injector);
  }

  ngOnInit() {
    this.getService()
  }

  getService(){
    this.api.listService().subscribe(
      resp => {
        //console.log(resp)
        this.services = resp
      }
    )
  }

  enableNotif(check: IonToggle, key: string){

    let data = {
      service: key,
      enabled: check.checked
    }

    //console.log(data)
    this.api.enabledNotif(data).subscribe(
      resp => {
        //console.log(resp)
      }
    )
  }

}
