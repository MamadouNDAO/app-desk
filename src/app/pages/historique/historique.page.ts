import {Component, Injector, OnInit} from '@angular/core';
import {BasePage} from "../../base";
import {Location} from "@angular/common";

@Component({
  selector: 'app-historique',
  templateUrl: './historique.page.html',
  styleUrls: ['./historique.page.scss'],
})
export class HistoriquePage extends BasePage  implements OnInit {

  constructor(injector: Injector, private location: Location) { super(injector); }

  ngOnInit() {
  }

  goBack() {
    this.location.back()
  }

}
