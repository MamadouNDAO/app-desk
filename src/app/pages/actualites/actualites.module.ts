import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActualitesPageRoutingModule } from './actualites-routing.module';

import { ActualitesPage } from './actualites.page';
import {LayoutServiceModule} from "../../components/layout-service/layout-service.module";
// import { ServicePageModule } from 'src/app/modules/service/service.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ActualitesPageRoutingModule,
        LayoutServiceModule,
    ],
  declarations: [ActualitesPage],

})
export class ActualitesPageModule {}
