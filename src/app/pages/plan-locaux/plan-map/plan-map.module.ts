import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlanMapPageRoutingModule } from './plan-map-routing.module';

import { PlanMapPage } from './plan-map.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlanMapPageRoutingModule
  ],
  declarations: [PlanMapPage]
})
export class PlanMapPageModule {}
