import {Injectable, NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HeaderComponent} from './components/header/header.component';

const routes: Routes = [
  {path: '',
  component: HeaderComponent
  },
  { path: 'platform', loadChildren: () => import('./container/container.module').then(m => m.ContainerModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
