import {NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContainerComponent } from './container.component';
import {PopupWrapperComponent} from './popup-wrapper/popup-wrapper.component';

const routes: Routes = [{
  path: '',
  component: ContainerComponent,
  children: [{
    path: 'dalje',
    component: PopupWrapperComponent
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContainerRoutingModule {
}
