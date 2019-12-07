import {Compiler, Injectable, InjectionToken, Injector, NgModuleFactoryLoader, NgModuleRef} from '@angular/core';
import {DynamicModuleResolver} from '../utility/dynamic-module-resolver.helper';

export type LAZY_MODULES = {
  popupElementModule: string;
};

export const lazyMap: LAZY_MODULES = {
  popupElementModule: 'src/app/components/popup-element/popup-element.module#PopupElementModule'
};

export const LAZY_MODULES_MAP = new InjectionToken('LAZY_MODULES_MAP', {
  factory: () => lazyMap
});

@Injectable({
  providedIn: 'root'
})
export class ModuleFactoryLoader {
  constructor(private loader: NgModuleFactoryLoader, private injector: Injector, private compiler: Compiler) {
  }

  private moduleRef: NgModuleRef<any>;

  load(): Promise<any> {
    if (this.moduleRef) {

      return Promise.resolve(this.moduleRef);
    }

    const path = 'src/app/components/popup-element/popup-element.module#PopupElementModule';

    return this
      .loader
      .load(path)
      .then(moduleFactory => {
        this.moduleRef = (moduleFactory.create(this.injector)).instance;
        DynamicModuleResolver.modules.push(this.moduleRef);
        return this.moduleRef;
      })
      .catch(err => {
        console.error('error loading module', err);
        throw new Error('module not loaded')
      });

  }
}
