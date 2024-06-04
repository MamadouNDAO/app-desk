import { NgModule } from '@angular/core';
import {CommonModule, DatePipe} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReservationPageRoutingModule } from './reservation-routing.module';

import { ReservationPage } from './reservation.page';
import {LayoutServiceModule} from "../../components/layout-service/layout-service.module";
import {NgxMaterialTimepickerModule} from "ngx-material-timepicker";
import {locale} from "moment";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ReservationPageRoutingModule,
        LayoutServiceModule,
        ReactiveFormsModule,
        NgxMaterialTimepickerModule
    ],
  declarations: [ReservationPage],
  providers: [
    DatePipe
  ]
})
export class ReservationPageModule {}
