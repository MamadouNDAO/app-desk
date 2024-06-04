import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TransportPageRoutingModule } from './transport-routing.module';
import { Geolocation } from '@capacitor/geolocation';

import { TransportPage } from './transport.page';
import {LayoutServiceModule} from "../../components/layout-service/layout-service.module";
// import { ServicePageModule } from 'src/app/modules/service/service.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TransportPageRoutingModule,
    LayoutServiceModule,
    // ServicePageModule
  ],
  declarations: [TransportPage],
})
export class TransportPageModule {}
