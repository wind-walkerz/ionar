import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu.component';

@NgModule({
  declarations: [
    MenuComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MenuComponent
  ],
  entryComponents: [MenuComponent]
})
export class MenuModule {
}
