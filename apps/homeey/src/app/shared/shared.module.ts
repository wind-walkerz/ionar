import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuroraUiModule } from '@aurora-ngx/ui';
import { AuroraFormsModule } from '@aurora-ngx/forms';
import { NgxSpinnerModule } from 'ngx-spinner';
import { IonarModule } from '@ionar/core';


@NgModule({
  imports: [
    CommonModule,
    AuroraUiModule,
    AuroraFormsModule,
    NgxSpinnerModule,
    IonarModule
  ],
  exports: [
    CommonModule,
    AuroraUiModule,
    AuroraFormsModule,
    NgxSpinnerModule,
    IonarModule
  ]
})
export class SharedModule {
}
