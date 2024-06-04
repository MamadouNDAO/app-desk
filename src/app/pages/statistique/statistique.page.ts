import {Component, Injector, OnInit} from '@angular/core';
import {BasePage} from "../../base";

@Component({
  selector: 'app-statistique',
  templateUrl: './statistique.page.html',
  styleUrls: ['./statistique.page.scss'],
})
export class StatistiquePage extends BasePage implements OnInit {

  constructor(injector: Injector) {
    super(injector)
  }

  ngOnInit() {
  }

  goTo(page: string) {
    this.router.navigate([page])
  }

}
