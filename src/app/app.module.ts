import {NgModule, CUSTOM_ELEMENTS_SCHEMA, LOCALE_ID} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { MenuComponent } from './components/menu/menu.component';
// import { ServicePageModule } from './modules/service/service.module';
import { LayoutServiceModule } from './components/layout-service/layout-service.module';
import { NgSimpleStateModule } from 'ng-simple-state';
import { StateService } from './service/state-service.service';
import {authInterceptorProviders} from "./serviceApp/interceptor.service";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
//import firebase from "firebase/compat";
//import initializeApp = firebase.initializeApp;
//import { initializeApp } from "firebase/app";
import {environment} from "../environments/environment";
import {AngularFireModule} from "@angular/fire/compat";
import {AngularFireAuthModule} from "@angular/fire/compat/auth";
import {MessagingService} from "./serviceApp/messaging.service";
import {AsyncPipe} from "@angular/common";
import {AngularFireMessagingModule} from "@angular/fire/compat/messaging";
//initializeApp(environment.firebase)

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    LayoutServiceModule,
    // ServicePageModule,
    HttpClientModule,
    NgSimpleStateModule.forRoot({
      enableDevTool: true, // Enable Redux DevTools only in development mode
      enableLocalStorage: true,// Local storage state persistence is globally disabled
      persistentStorage: 'local', // Local storage state persistence is globally disabled
    }),
    BrowserAnimationsModule,
    AngularFireAuthModule,
    AngularFireMessagingModule,
    AngularFireModule.initializeApp(environment.firebase),
  ],
  providers: [
    MessagingService, AsyncPipe,
    authInterceptorProviders,
    {provide: RouteReuseStrategy, useClass: IonicRouteStrategy},
    StateService,
    {provide: LOCALE_ID, useValue: 'fr' },
  ],
  bootstrap: [AppComponent],
  exports: [
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
