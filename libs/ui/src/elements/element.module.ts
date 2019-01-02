import { NgModule } from '@angular/core';

import { FlexElement } from './flex/flex.element';
import { ButtonModule } from './button/button.module';
import { DefaultContentComponent } from './default-content/default-content.component';



@NgModule({
  declarations: [
    FlexElement,
    DefaultContentComponent
  ],
  imports: [
    ButtonModule
  ],
  exports: [
    FlexElement,
    DefaultContentComponent,
    ButtonModule
  ]
})
export class ElementModule {
}
