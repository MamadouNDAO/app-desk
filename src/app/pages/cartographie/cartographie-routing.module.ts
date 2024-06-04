import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CartographiePage } from './cartographie.page';

const routes: Routes = [
  {
    path: '',
    component: CartographiePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CartographiePageRoutingModule {}
