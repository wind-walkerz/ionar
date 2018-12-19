import { NgModule } from '@angular/core';
import { ModalModule } from './modal/modal.module';
import { CollapsibleModule } from './collapsible/collapsible.module';
import { TabsModule } from './tabs/tabs.module';
import { DropdownModule } from './dropdown/dropdown.module';
import { LoadingModule } from './loading/loading.module';


@NgModule({
  imports: [
    ModalModule, CollapsibleModule, TabsModule, DropdownModule, LoadingModule
  ],
  exports: [
    ModalModule, CollapsibleModule, TabsModule, DropdownModule, LoadingModule
  ]
})
export class ComponentModule {
}
