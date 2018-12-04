import { NgModule } from '@angular/core';
import { InputComponent } from './input.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    InputComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    InputComponent
  ],
  entryComponents: [InputComponent]
})
export class InputModule {
}
