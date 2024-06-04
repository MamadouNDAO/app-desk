import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MapReservationPage } from './map-reservation.page';

const routes: Routes = [
  {
    path: '',
    component: MapReservationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MapReservationPageRoutingModule {}
