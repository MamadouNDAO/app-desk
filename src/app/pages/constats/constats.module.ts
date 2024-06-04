import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {CommonModule, DatePipe} from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConstatsPageRoutingModule } from './constats-routing.module';

import { ConstatsPage } from './constats.page';
// import { ServicePageModule } from 'src/app/modules/service/service.module';
import { SearchPipe } from './search.pipe';
import {LayoutServiceModule} from "../../components/layout-service/layout-service.module";
// import {LayoutServiceComponent} from "../../components/layout-service/layout-service.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConstatsPageRoutingModule,
    LayoutServiceModule,
    // ServicePageModule
  ],
    exports: [

    ],
    declarations: [ConstatsPage, SearchPipe],
    providers: [ DatePipe ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ConstatsPageModule {}
