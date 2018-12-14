import { NgModule } from '@angular/core';
import {TextareaComponent } from './textarea.component';


@NgModule({
  declarations: [
    TextareaComponent
  ],
  exports: [TextareaComponent],
  entryComponents: [TextareaComponent]
})
export class TextareaModule {
}
