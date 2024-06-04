import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MeteoAppPageRoutingModule } from './meteo-app-routing.module';

import { MeteoAppPage } from './meteo-app.page';
import {LayoutServiceModule} from "../../components/layout-service/layout-service.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        MeteoAppPageRoutingModule,
        LayoutServiceModule
    ],
  declarations: [MeteoAppPage]
})
export class MeteoAppPageModule {}
