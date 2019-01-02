import { NgModule } from '@angular/core';
import { SelectModule } from './components/select/select.module';
import { UploadModule } from './components/upload/upload.module';

import { InputModule } from './components/input/input.module';
import { CheckboxModule } from './components/checkbox/checkbox.module';
import { TextareaModule } from './components/textarea/textarea.module';
import { MenuModule } from './components/menu/menu.module';


@NgModule({
  declarations: [],
  imports: [
    InputModule, CheckboxModule, UploadModule, SelectModule, TextareaModule, MenuModule
  ],
  exports: [
    InputModule, CheckboxModule, UploadModule, SelectModule, TextareaModule, MenuModule
  ],

})
export class FormUiModule {
}
