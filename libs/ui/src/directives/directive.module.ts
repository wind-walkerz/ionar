import { NgModule } from '@angular/core';

import { SquareDirective } from './square/square.directive';


@NgModule({
  declarations: [
    SquareDirective
  ],
  exports: [
    SquareDirective
  ]
})
export class DirectiveModule {
}
