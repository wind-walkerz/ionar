import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExpandableComponent } from './expandable.component';
import { ExpandToggleDirective } from './expand-toggle.directive';
import { ContentComponent } from './content.component';


@NgModule({
  imports: [

    CommonModule
  ],
  declarations: [
    ExpandableComponent,
    ExpandToggleDirective,
    ContentComponent
  ],
  exports: [
    ExpandableComponent,
    ContentComponent,
    ExpandToggleDirective
  ],
  entryComponents: [
    ExpandableComponent,
    ContentComponent
  ]
})
export class ExpandableModule {
}
