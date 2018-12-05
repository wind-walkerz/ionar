import { NgModule } from '@angular/core';
import { CheckboxComponent } from './checkbox.component';


@NgModule({
  declarations: [
    CheckboxComponent
  ],
  exports: [
    CheckboxComponent
  ],
  entryComponents: [CheckboxComponent]
})
export class CheckboxModule {
}
