import { NgModule } from '@angular/core';
import { ModalModule } from './modal/modal.module';
import { CollapsibleModule } from './collapsible/collapsible.module';
import { TabsModule } from './tabs/tabs.module';
import { DropdownModule } from './dropdown/dropdown.module';
import { LoadingModule } from './loading/loading.module';
import { PaginationModule } from './pagination/pagination.module';


@NgModule({
  imports: [
    ModalModule, CollapsibleModule, TabsModule, DropdownModule, LoadingModule, PaginationModule
  ],
  exports: [
    ModalModule, CollapsibleModule, TabsModule, DropdownModule, LoadingModule, PaginationModule
  ]
})
export class ComponentModule {
}
