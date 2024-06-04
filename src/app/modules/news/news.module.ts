import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewsPageRoutingModule } from './news-routing.module';

import { NewsPage } from './news.page';
import {LayoutServiceModule} from "../../components/layout-service/layout-service.module";
// import { ServicePageModule } from '../service/service.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        NewsPageRoutingModule,
        LayoutServiceModule,
        // ServicePageModule
    ],
  declarations: [NewsPage]
})
export class NewsPageModule {}
