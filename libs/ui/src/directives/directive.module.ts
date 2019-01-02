import { NgModule } from '@angular/core';

import { SquareDirective } from './square/square.directive';
import { ScrollDownDirective } from './scroll/scroll-down';
import { SpreadDirective } from './spread/spread.directive';



@NgModule({
  declarations: [
    SquareDirective, ScrollDownDirective, SpreadDirective
  ],
  exports: [
    SquareDirective, ScrollDownDirective, SpreadDirective
  ]
})
export class DirectiveModule {
}
