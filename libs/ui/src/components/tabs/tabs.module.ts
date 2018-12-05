import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsComponent } from './tabs.component';

import { LabelDirective } from './directives/label.directive';
import { ContentDirective } from './directives/content.directive';
import { TabComponent } from './tab.component';

@NgModule({
  imports: [CommonModule],
  declarations: [TabsComponent, TabComponent, LabelDirective, ContentDirective],

  exports: [TabsComponent, TabComponent, LabelDirective, ContentDirective]
})
export class TabsModule {
}
