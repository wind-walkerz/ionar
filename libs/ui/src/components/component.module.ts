import { NgModule } from '@angular/core';
import { ButtonModule } from './button/button.module';
import { ModalModule } from './modal/modal.module';
import { CollapsibleModule } from './collapsible/collapsible.module';
import { ExpandableModule } from './expandable/expandable.module';
import { TabsModule } from './tabs/tabs.module';



@NgModule({
  imports: [
    ButtonModule, ModalModule, CollapsibleModule, ExpandableModule, TabsModule
  ],
  exports: [
    ButtonModule, ModalModule, CollapsibleModule, ExpandableModule, TabsModule
  ]
})
export class ComponentModule {
}
