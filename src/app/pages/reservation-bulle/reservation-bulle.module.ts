import { NgModule } from '@angular/core';
import {CommonModule, DatePipe} from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReservationBullePageRoutingModule } from './reservation-bulle-routing.module';

import { ReservationBullePage } from './reservation-bulle.page';
import {LayoutServiceModule} from "../../components/layout-service/layout-service.module";
import {NgxMaterialTimepickerModule} from "ngx-material-timepicker";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ReservationBullePageRoutingModule,
        LayoutServiceModule,
        NgxMaterialTimepickerModule
    ],
  declarations: [ReservationBullePage],
  providers: [
    DatePipe
  ]
})
export class ReservationBullePageModule {}
