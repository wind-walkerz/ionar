import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsComponent } from './containers/tabs.component';
import { TabComponent } from './component/tab.component';
import { TabLabelComponent } from './component/label.component';
import { TabContentComponent } from './component/content.component';

@NgModule({
  imports: [CommonModule],
  declarations: [TabsComponent, TabComponent, TabLabelComponent, TabContentComponent
  ],

  exports: [TabsComponent, TabComponent, TabLabelComponent, TabContentComponent
  ]
})
export class TabsModule {
}
