import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MeteoPageRoutingModule } from './meteo-routing.module';

import { MeteoPage } from './meteo.page';
import {LayoutServiceModule} from "../../components/layout-service/layout-service.module";


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        MeteoPageRoutingModule,
        LayoutServiceModule
    ],
  declarations: [MeteoPage]
})
export class MeteoPageModule {}
