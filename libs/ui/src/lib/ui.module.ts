import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from '../components/button/button.module';
import { TabsModule } from '../components/tabs/tabs.module';
import { ElementModule } from '../elements/element.module';
import { ModalModule } from '../components/modal/modal.module';

@NgModule({
  imports: [
    ButtonModule, TabsModule, ModalModule,

    ElementModule
  ],
  exports: [
    ButtonModule, TabsModule, ModalModule,

    ElementModule
  ]
})
export class IonarUI {
}
