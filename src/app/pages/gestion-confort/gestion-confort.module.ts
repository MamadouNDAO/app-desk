import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GestionConfortPageRoutingModule } from './gestion-confort-routing.module';

import { GestionConfortPage } from './gestion-confort.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GestionConfortPageRoutingModule
  ],
  declarations: [GestionConfortPage]
})
export class GestionConfortPageModule {}
