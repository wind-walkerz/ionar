import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxSpinnerModule } from 'ngx-spinner';
import { IonarModule } from '@ionar/core';
import { SharedComponentModule } from './components/component.module';


@NgModule({
  imports: [
    SharedComponentModule,
    CommonModule,
    NgxSpinnerModule,
    IonarModule
  ],
  exports: [
    SharedComponentModule,
    CommonModule,
    NgxSpinnerModule,
    IonarModule
  ]
})
export class SharedModule {
}
