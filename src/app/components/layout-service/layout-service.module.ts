import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutServiceComponent} from './layout-service.component';
import {IonicModule} from "@ionic/angular";
import {RouterLink, RouterLinkActive} from "@angular/router";

@NgModule({
  declarations: [LayoutServiceComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
    LayoutServiceComponent
  ],
    imports: [
        CommonModule,
        IonicModule,
        RouterLink,
        RouterLinkActive
    ]
})
export class LayoutServiceModule { }
