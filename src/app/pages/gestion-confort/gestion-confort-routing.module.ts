import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GestionConfortPage } from './gestion-confort.page';

const routes: Routes = [
  {
    path: '',
    component: GestionConfortPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GestionConfortPageRoutingModule {}
