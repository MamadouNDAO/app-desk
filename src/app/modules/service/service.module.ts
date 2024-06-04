import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ServicePageRoutingModule } from './service-routing.module';

import { ServicePage } from './service.page';
import { NavComponent } from 'src/app/components/nav/nav.component';
import { FitnessComponent } from 'src/app/components/fitness/fitness.component';
import { RestaurationComponent } from 'src/app/components/restauration/restauration.component';
import { ConciergerieComponent } from 'src/app/components/conciergerie/conciergerie.component';
import { ConstatComponent } from 'src/app/components/constat/constat.component';
import { MenuComponent } from 'src/app/components/menu/menu.component';
import { ListItemComponent } from 'src/app/components/list-item/list-item.component';
import {LayoutServiceModule} from "../../components/layout-service/layout-service.module";
// import { LayoutServiceComponent } from 'src/app/components/layout-service/layout-service.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ServicePageRoutingModule,
        LayoutServiceModule,
        // ConstatsPageModule,
    ],
  declarations: [
    ServicePage,NavComponent,FitnessComponent,RestaurationComponent,ConciergerieComponent,
    ConstatComponent,MenuComponent,ListItemComponent
  ],
  exports:[ MenuComponent,NavComponent, ListItemComponent]
})
export class ServicePageModule {}
