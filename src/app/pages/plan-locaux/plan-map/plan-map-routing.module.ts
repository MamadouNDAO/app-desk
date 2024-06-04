import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlanMapPage } from './plan-map.page';

const routes: Routes = [
  {
    path: '',
    component: PlanMapPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlanMapPageRoutingModule {}
