import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VisiteursPage } from './visiteurs.page';

const routes: Routes = [
  {
    path: '',
    component: VisiteursPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VisiteursPageRoutingModule {}
