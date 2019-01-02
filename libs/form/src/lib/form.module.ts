import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormUiModule } from '../ui/ui.module';
import { CoreModule } from '../core/core.module';

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
