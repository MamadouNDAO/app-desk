import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ControleAccesPageRoutingModule } from './controle-acces-routing.module';

import { ControleAccesPage } from './controle-acces.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ControleAccesPageRoutingModule
  ],
  declarations: [ControleAccesPage]
})
export class ControleAccesPageModule {}
