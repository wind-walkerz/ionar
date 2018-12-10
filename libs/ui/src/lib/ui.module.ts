import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from '../components/button/button.module';
import { TabsModule } from '../components/tabs/tabs.module';
import { ElementModule } from '../elements/element.module';
import { ModalModule } from '../components/modal/modal.module';
import { CollapsibleModule } from '../components/collapsible/collapsible.module';
import { ExpandableModule } from '../components/expandable/expandable.module';

@NgModule({
  imports: [
    ButtonModule, ModalModule, CollapsibleModule, ExpandableModule,

    ElementModule
  ],
  exports: [
    ButtonModule, ModalModule, CollapsibleModule, ExpandableModule,

    ElementModule
  ]
})
export class IonarUI {
}
