import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TransportTestPageRoutingModule } from './transport-test-routing.module';

import { TransportTestPage } from './transport-test.page';
import {LayoutServiceModule} from "../../components/layout-service/layout-service.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        TransportTestPageRoutingModule,
        LayoutServiceModule
    ],
  declarations: [TransportTestPage]
})
export class TransportTestPageModule {}
