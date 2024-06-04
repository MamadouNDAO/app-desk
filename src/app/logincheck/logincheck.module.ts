import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LogincheckPageRoutingModule } from './logincheck-routing.module';

import { LogincheckPage } from './logincheck.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LogincheckPageRoutingModule
  ],
  declarations: [LogincheckPage]
})
export class LogincheckPageModule {}
