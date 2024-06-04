import {Component, Injector, OnInit} from '@angular/core';
import {BasePage} from "../../base";
import {Location} from "@angular/common";

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.page.html',
  styleUrls: ['./notifications.page.scss'],
})
export class NotificationsPage extends BasePage implements OnInit {

  constructor(injector: Injector, private location: Location) {
    super(injector);
  }

  ngOnInit() {
  }

  goBack() {
    this.location.back()
  }

}
