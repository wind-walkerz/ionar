import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DropdownComponent } from './dropdown.component';
import { ToggleComponent } from './components/toggle.component';
import { MenuComponent } from './components/menu.component';


@NgModule({
  imports: [

    CommonModule
  ],
  declarations: [
    DropdownComponent,
    ToggleComponent, MenuComponent
  ],
  exports: [DropdownComponent, ToggleComponent, MenuComponent]
})
export class DropdownModule {
}
