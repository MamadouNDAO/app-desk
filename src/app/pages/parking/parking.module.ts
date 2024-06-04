import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ParkingPageRoutingModule } from './parking-routing.module';

import { ParkingPage } from './parking.page';
import {LayoutServiceModule} from "../../components/layout-service/layout-service.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ParkingPageRoutingModule,
        LayoutServiceModule,
        ReactiveFormsModule
    ],
  declarations: [ParkingPage]
})
export class ParkingPageModule {}
