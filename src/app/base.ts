import {Component, Injector, OnDestroy, OnInit} from '@angular/core';
import { ToastService } from './service/toast-service.service';
import { LoadingService } from './service/loading-service.service';
import { DateService } from './service/date-service.service';
import { StateService } from './service/state-service.service';
import { UtilServiceService } from './service/util-service.service';
import {ApiService} from "./service/api-service.service";
import {Router} from "@angular/router";
import themered from "./themered";
import themegreen from "./themegreen";
import themegrey from "./themegrey";
import themewhite from "./themewhite";
import {Observable, Subject} from "rxjs";

@Component({
  template: ''
})
export abstract class BasePage{
  refreshSource = new Subject<void>();
  refresh$ = this.refreshSource.asObservable();
  protected toastService: ToastService;
  protected loadingService: LoadingService;
  protected dateService: DateService;
  protected stateService: StateService;
  protected utilService: UtilServiceService;
  protected apiService: ApiService;
  protected router: Router;

  protected addView: boolean = true;
  protected historyView: boolean = false;
  protected theme: any;
  // protected primary: string = '#9f5e4a';
  // protected primary2: string = '#247645';
  public counter$: Observable<number>;

  constructor(injector: Injector) {
    this.toastService = injector.get(ToastService);
    this.loadingService = injector.get(LoadingService);
    this.dateService = injector.get(DateService);
    this.stateService = injector.get(StateService);
    this.utilService = injector.get(UtilServiceService);
    this.apiService = injector.get(ApiService);
    this.router = injector.get(Router);
    // this.theme = localStorage.getItem('theme') === 'red' ? themegreen : themered;
    // this.theme = localStorage.getItem('theme') === 'red' ? themered : themegreen;
    if(localStorage.getItem('theme') === 'red') this.theme = themered;
    else if(localStorage.getItem('theme') === 'green') this.theme = themegreen;
    else if(localStorage.getItem('theme') === 'grey') this.theme = themegrey;
    else this.theme = themewhite;
    this.counter$ = this.stateService.selectCount();
  }

  // bg(): string {
  //   return 'ivi-bg-red'
  // }
  // color() {
  //   return 'ivi-red'
  // }
  //
  // title() {
  //   return 'ivi-title-red'
  // }

  isActive (path, current) : string {
    return 'ivi-color'
  }

  isRouteActive(route) {
    if(this.router.url === route) return 'isActive'
    else return null
    // return null
  }

  switchAddView() {
    this.addView = false;
    this.historyView = true;
  }

  switchHistoryView() {
    this.addView = true;
    this.historyView = false;
  }

  refresh() {
    this.refreshSource.next();
  }



}
