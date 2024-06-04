import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StatistiquePageRoutingModule } from './statistique-routing.module';

import { StatistiquePage } from './statistique.page';
import {LayoutServiceModule} from "../../components/layout-service/layout-service.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        StatistiquePageRoutingModule,
        LayoutServiceModule
    ],
  declarations: [StatistiquePage]
})
export class StatistiquePageModule {}
