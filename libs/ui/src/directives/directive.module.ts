import { NgModule } from '@angular/core';

import { SquareDirective } from './square/square.directive';
import { ScrollDownDirective } from './scroll/scroll-down';


@NgModule({
  declarations: [
    SquareDirective, ScrollDownDirective
  ],
  exports: [
    SquareDirective, ScrollDownDirective
  ]
})
export class DirectiveModule {
}
