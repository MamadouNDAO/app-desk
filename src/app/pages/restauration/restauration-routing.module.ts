import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RestaurationPage } from './restauration.page';

const routes: Routes = [
  {
    path: '',
    component: RestaurationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RestaurationPageRoutingModule {}
