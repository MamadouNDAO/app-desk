import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConciergeriePageRoutingModule } from './conciergerie-routing.module';

import { ConciergeriePage } from './conciergerie.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConciergeriePageRoutingModule
  ],
  declarations: [ConciergeriePage]
})
export class ConciergeriePageModule {}
