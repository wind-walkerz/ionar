import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../core/core.module';
import { FormUiModule } from '../ui/ui.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CoreModule,
    FormUiModule
  ],
  exports: [
    CoreModule,
    FormUiModule
  ]
})
export class IonarFormModule {
}
