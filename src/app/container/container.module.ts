import {CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContainerRoutingModule } from './container-routing.module';
import { ContainerComponent } from './container.component';
import { PopupWrapperComponent } from './popup-wrapper/popup-wrapper.component';

@NgModule({
  declarations: [ContainerComponent, PopupWrapperComponent],
  imports: [
    CommonModule,
    ContainerRoutingModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ]
})
export class ContainerModule {
}
