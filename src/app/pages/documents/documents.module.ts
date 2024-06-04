import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DocumentsPageRoutingModule } from './documents-routing.module';

import { DocumentsPage } from './documents.page';
import {LayoutServiceModule} from "../../components/layout-service/layout-service.module";
// import {LayoutServiceComponent} from "../../components/layout-service/layout-service.component";


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DocumentsPageRoutingModule,
    LayoutServiceModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [DocumentsPage]
})
export class DocumentsPageModule {}
