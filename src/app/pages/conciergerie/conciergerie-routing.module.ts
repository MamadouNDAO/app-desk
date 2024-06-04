import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConciergeriePage } from './conciergerie.page';

const routes: Routes = [
  {
    path: '',
    component: ConciergeriePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConciergeriePageRoutingModule {}
