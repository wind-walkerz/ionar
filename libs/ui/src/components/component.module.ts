import { NgModule } from '@angular/core';
import { ModalModule } from './modal/modal.module';
import { CollapsibleModule } from './collapsible/collapsible.module';
import { TabsModule } from './tabs/tabs.module';
import { DropdownModule } from './dropdown/dropdown.module';
import { LoadingModule } from './loading/loading.module';
import { PaginationModule } from './pagination/pagination.module';
import { ToastModule } from './toast/toast.module';


@NgModule({
  imports: [
    ModalModule, CollapsibleModule, TabsModule, DropdownModule, LoadingModule, PaginationModule, ToastModule
  ],
  exports: [
    ModalModule, CollapsibleModule, TabsModule, DropdownModule, LoadingModule, PaginationModule, ToastModule
  ]
})
export class ComponentModule {
}
