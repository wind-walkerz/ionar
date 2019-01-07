import { NgModule } from '@angular/core';

import { SquareDirective } from './square/square.directive';
import { ScrollDownDirective } from './scroll/scroll-down';
import { SpreadDirective } from './spread/spread.directive';
import { RemoveHostElementDirective } from './removeHostElement/remove-host-element.directive';
import { IonarTemplateDirective } from './template/template.directive';


@NgModule({
  declarations: [
    SquareDirective, ScrollDownDirective, SpreadDirective, RemoveHostElementDirective, IonarTemplateDirective
  ],
  exports: [
    SquareDirective, ScrollDownDirective, SpreadDirective, RemoveHostElementDirective, IonarTemplateDirective
  ]
})
export class DirectiveModule {
}
