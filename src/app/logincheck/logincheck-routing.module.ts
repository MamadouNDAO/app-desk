import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LogincheckPage } from './logincheck.page';

const routes: Routes = [
  {
    path: '',
    component: LogincheckPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LogincheckPageRoutingModule {}
