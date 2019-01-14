import { NgModule } from '@angular/core';

import { FlexElement } from './flex/flex.element';
import { ButtonModule } from './button/button.module';
import { DefaultContentModule } from './default-content/default-content.module';


@NgModule({
  declarations: [
    FlexElement
  ],
  imports: [
    ButtonModule,
  ],
  exports: [
    FlexElement,
    ButtonModule
  ]
})
export class ElementModule {
}
