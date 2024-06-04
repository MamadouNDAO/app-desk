import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LiensPageRoutingModule } from './liens-routing.module';

import { LiensPage } from './liens.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LiensPageRoutingModule,
  ],
  declarations: [LiensPage]
})
export class LiensPageModule {}
