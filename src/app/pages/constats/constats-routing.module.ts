import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConstatsPage } from './constats.page';

const routes: Routes = [
  {
    path: '',
    component: ConstatsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConstatsPageRoutingModule {}
