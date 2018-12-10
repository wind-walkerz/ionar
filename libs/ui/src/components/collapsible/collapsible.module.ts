import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CollapsibleComponent } from './collapsible.component';
import { HeaderComponent } from './components/header.component';

import { ContentComponent } from './components/content.component';
import { PanelComponent } from './components/panel.component';
import { CollapseToggleDirective } from './directives/collapse-toggle.directive';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CollapsibleComponent,
    HeaderComponent,
    ContentComponent,
    PanelComponent,
    CollapseToggleDirective
  ],
  exports: [
    CollapsibleComponent,
    HeaderComponent,
    ContentComponent,
    PanelComponent,

    CollapseToggleDirective
  ],

  entryComponents: [
    CollapsibleComponent,
    HeaderComponent,
    ContentComponent,
    PanelComponent

  ]
})
export class CollapsibleModule {
}
