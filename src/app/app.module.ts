import { BrowserModule } from '@angular/platform-browser';
import {NgModule, SystemJsNgModuleLoader, NgModuleFactoryLoader, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA, Compiler} from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import {AppRoutingModule} from './app-routing.module';
import { LoadModuleDirective } from './directives/load-module.directive';
import {ModuleFactoryLoader} from './services/module-provider.service';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {DynamicModuleResolver} from './utility/dynamic-module-resolver.helper';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoadModuleDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  exports: [
    LoadModuleDirective
  ],
  providers: [{ provide: NgModuleFactoryLoader, useClass: SystemJsNgModuleLoader }, ModuleFactoryLoader, HttpClient],
  bootstrap: [AppComponent],
  entryComponents: [],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule {
    constructor(private moduleFactory: ModuleFactoryLoader) {
      this.moduleFactory.load().then(r => {
          DynamicModuleResolver.modules.push(r);
      }).catch(e => console.error(e));
    }

  ngDoBootstrap() {
  }
}
