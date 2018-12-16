import { NgModule } from '@angular/core';

import { ElementModule } from './elements/element.module';
import { ComponentModule } from './components/component.module';
import { DirectiveModule } from './directives/directive.module';
import { PackagesModule } from './packages/packages.module';

@NgModule({
  imports: [
    ComponentModule,
    ElementModule,
    PackagesModule,

    DirectiveModule
  ],
  exports: [
    ComponentModule,
    ElementModule,
    PackagesModule,

    DirectiveModule
  ]
})
export class IonarUI {
}
