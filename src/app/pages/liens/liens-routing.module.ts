import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LiensPage } from './liens.page';

const routes: Routes = [
  {
    path: '',
    component: LiensPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LiensPageRoutingModule {}
