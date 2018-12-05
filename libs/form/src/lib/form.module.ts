import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputModule } from '../components/input/input.module';
import { CheckboxModule } from '../components/checkbox/checkbox.module';
import { UploadModule } from '../components/upload/upload.module';
import { SelectModule } from '../components/select/select.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    InputModule, CheckboxModule, UploadModule, SelectModule

  ],
  exports: [
    InputModule, CheckboxModule, UploadModule, SelectModule
  ]
})
export class IonarFormModule {
}
