import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ControleAccesPage } from './controle-acces.page';

const routes: Routes = [
  {
    path: '',
    component: ControleAccesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ControleAccesPageRoutingModule {}
