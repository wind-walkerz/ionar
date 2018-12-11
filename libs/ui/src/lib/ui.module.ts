import { NgModule } from '@angular/core';

import { ElementModule } from '../elements/element.module';
import { ComponentModule } from '../components/component.module';
import { DirectiveModule } from '../directives/directive.module';

@NgModule({
  imports: [
    ComponentModule,
    ElementModule,
    DirectiveModule
  ],
  exports: [
    ComponentModule,
    ElementModule,
    DirectiveModule
  ]
})
export class IonarUI {
}
