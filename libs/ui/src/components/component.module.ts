import { NgModule } from '@angular/core';
import { ModalModule } from './modal/modal.module';
import { CollapsibleModule } from './collapsible/collapsible.module';
import { TabsModule } from './tabs/tabs.module';
import { DropdownModule } from './dropdown/dropdown.module';



@NgModule({
  imports: [
    ModalModule, CollapsibleModule, TabsModule, DropdownModule
  ],
  exports: [
 ModalModule, CollapsibleModule, TabsModule, DropdownModule
  ]
})
export class ComponentModule {
}
