import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FallDetectionPage } from './fall-detection.page';

const routes: Routes = [
  {
    path: '',
    component: FallDetectionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FallDetectionPageRoutingModule {}
