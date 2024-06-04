import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlanLocauxPage } from './plan-locaux.page';

const routes: Routes = [
  {
    path: '',
    component: PlanLocauxPage
  },
  {
    path: 'plan-map',
    loadChildren: () => import('./plan-map/plan-map.module').then( m => m.PlanMapPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlanLocauxPageRoutingModule {}
