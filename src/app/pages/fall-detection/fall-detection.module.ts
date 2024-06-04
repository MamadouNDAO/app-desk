import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FallDetectionPageRoutingModule } from './fall-detection-routing.module';

import { FallDetectionPage } from './fall-detection.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FallDetectionPageRoutingModule
  ],
  declarations: [FallDetectionPage]
})
export class FallDetectionPageModule {}
