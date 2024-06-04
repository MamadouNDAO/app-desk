import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReservationBullePage } from './reservation-bulle.page';

const routes: Routes = [
  {
    path: '',
    component: ReservationBullePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReservationBullePageRoutingModule {}
