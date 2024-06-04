import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BoitIdeePageRoutingModule } from './boit-idee-routing.module';

import { BoitIdeePage } from './boit-idee.page';
// import { ServicePageModule } from 'src/app/modules/service/service.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BoitIdeePageRoutingModule
    // ServicePageModule
  ],
  declarations: [BoitIdeePage]
})
export class BoitIdeePageModule {}
