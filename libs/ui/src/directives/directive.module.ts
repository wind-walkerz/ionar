import { NgModule } from '@angular/core';

import { SquareDirective } from './square/square.directive';
import { ScrollDownDirective } from './scroll/scroll-down';
import { SpreadDirective } from './spread/spread.directive';
import { RemoveHostElementDirective } from './removeHostElement/remove-host-element.directive';


@NgModule({
  declarations: [
    SquareDirective, ScrollDownDirective, SpreadDirective, RemoveHostElementDirective
  ],
  exports: [
    SquareDirective, ScrollDownDirective, SpreadDirective, RemoveHostElementDirective
  ]
})
export class DirectiveModule {
}
