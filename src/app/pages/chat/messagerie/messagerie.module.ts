import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MessageriePageRoutingModule } from './messagerie-routing.module';

import { MessageriePage } from './messagerie.page';
// import { ServicePageModule } from 'src/app/modules/service/service.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MessageriePageRoutingModule,
    // ServicePageModule
  ],
  declarations: [MessageriePage]
})
export class MessageriePageModule {}
