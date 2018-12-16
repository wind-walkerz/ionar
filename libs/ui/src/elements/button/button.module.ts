import { NgModule } from '@angular/core';

import { ButtonComponent } from './button.component';


@NgModule({
  declarations: [
    ButtonComponent
  ],
  exports: [
    ButtonComponent
  ],
  entryComponents: [ButtonComponent]
})
export class ButtonModule {
}
