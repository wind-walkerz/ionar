import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonarUI } from '@ionar/ui';
import { IonarFormModule } from '@ionar/form';

@NgModule({
  imports: [
    IonarUI,
    IonarFormModule
  ],
  exports: [
    IonarUI,
    IonarFormModule
  ]
})
export class IonarModule {
}
