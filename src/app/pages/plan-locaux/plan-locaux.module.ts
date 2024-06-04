import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlanLocauxPageRoutingModule } from './plan-locaux-routing.module';

import { PlanLocauxPage } from './plan-locaux.page';
// import { ServicePageModule } from 'src/app/modules/service/service.module';
import {GoogleMapsModule} from "@angular/google-maps";


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlanLocauxPageRoutingModule,
    // ServicePageModule,
    GoogleMapsModule
  ],
  declarations: [PlanLocauxPage]
})
export class PlanLocauxPageModule {}
