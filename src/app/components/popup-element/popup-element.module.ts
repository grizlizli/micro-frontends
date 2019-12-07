import {CUSTOM_ELEMENTS_SCHEMA, Injector, NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {PopupElementComponent} from './popup-element.component';
import {CommonModule} from '@angular/common';
// @ts-ignore
import * as MyPopup from 'dist/popup-element/popup-element';

// import {createCustomElement} from '@angular/elements';

@NgModule({
  declarations: [PopupElementComponent],
  bootstrap: [PopupElementComponent],
  entryComponents: [PopupElementComponent],
  imports: [CommonModule],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ]
})
export class PopupElementModule {
  static rootComponent = PopupElementComponent;
  static element = MyPopup;

  constructor(injector: Injector) {
    // const popupElement = createCustomElement(PopupElementComponent, {injector});
    // customElements.define('zli-popup', popupElement);
  }

  ngDoBootstrap() {}
}
