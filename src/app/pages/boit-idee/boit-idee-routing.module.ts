import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BoitIdeePage } from './boit-idee.page';

const routes: Routes = [
  {
    path: '',
    component: BoitIdeePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BoitIdeePageRoutingModule {}
