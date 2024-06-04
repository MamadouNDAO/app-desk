import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CartographiePageRoutingModule } from './cartographie-routing.module';

import { CartographiePage } from './cartographie.page';
import {MapPage} from "../../modules/map/map.page";
import {MapPageModule} from "../../modules/map/map.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CartographiePageRoutingModule
  ],
  declarations: [CartographiePage]
})
export class CartographiePageModule {}
