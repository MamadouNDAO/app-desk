import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VisiteursPageRoutingModule } from './visiteurs-routing.module';

import { VisiteursPage } from './visiteurs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VisiteursPageRoutingModule
  ],
  declarations: [VisiteursPage]
})
export class VisiteursPageModule {}
