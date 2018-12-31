import { NgModule } from '@angular/core';
import { InputComponent } from './input.component';
import { CommonModule } from '@angular/common';
import { IonarUI } from '@ionar/ui';

@NgModule({
  declarations: [
    InputComponent
  ],
  imports: [
    CommonModule,
    IonarUI
  ],
  exports: [
    InputComponent
  ],
  entryComponents: [InputComponent]
})
export class InputModule {
}
