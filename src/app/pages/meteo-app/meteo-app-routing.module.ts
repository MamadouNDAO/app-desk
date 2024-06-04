import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MeteoAppPage } from './meteo-app.page';

const routes: Routes = [
  {
    path: '',
    component: MeteoAppPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MeteoAppPageRoutingModule {}
