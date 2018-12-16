import { NgModule } from '@angular/core';
import { ModalModule } from './modal/modal.module';
import { CollapsibleModule } from './collapsible/collapsible.module';
import { TabsModule } from './tabs/tabs.module';



@NgModule({
  imports: [
    ModalModule, CollapsibleModule, TabsModule
  ],
  exports: [
 ModalModule, CollapsibleModule, TabsModule
  ]
})
export class ComponentModule {
}
