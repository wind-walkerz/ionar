import { NgModule } from '@angular/core';
import { SelectModule } from './components/select/select.module';
import { UploadModule } from './components/upload/upload.module';

import { InputModule } from './components/input/input.module';
import { CheckboxModule } from './components/checkbox/checkbox.module';


@NgModule({
  declarations: [],
  imports: [
    InputModule, CheckboxModule, UploadModule, SelectModule
  ],
  exports: [
    InputModule, CheckboxModule, UploadModule, SelectModule
  ],

})
export class UIModule {
}
