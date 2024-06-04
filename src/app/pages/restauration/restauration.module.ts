import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RestaurationPageRoutingModule } from './restauration-routing.module';

import { RestaurationPage } from './restauration.page';
import {LayoutServiceModule} from "../../components/layout-service/layout-service.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RestaurationPageRoutingModule,
        LayoutServiceModule
    ],
  declarations: [RestaurationPage]
})
export class RestaurationPageModule {}
