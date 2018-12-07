import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UIModule } from '../ui/ui.module';
import { CoreModule } from '../core/core.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CoreModule,
    UIModule
  ],
  exports: [
    CoreModule,
    UIModule
  ]
})
export class IonarFormModule {
}
