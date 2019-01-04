import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CollapsibleDirective } from './directives/collapsible.directive';


import { ContentDirective } from './directives/content.directive';

import { ToggleDirective } from './directives/toggle.directive';



@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CollapsibleDirective,
    ContentDirective,
    ToggleDirective
  ],
  exports: [
    CollapsibleDirective,
    ContentDirective,
    ToggleDirective
  ]
})
export class CollapsibleModule {
}
