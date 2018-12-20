import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaginationComponent } from './containers/pagination.component';
import { PageNumberComponent } from './containers/page-number.component';


@NgModule({
  imports: [

    CommonModule
  ],
  declarations: [
    PaginationComponent,
    PageNumberComponent
  ],
  exports: [PaginationComponent]
})
export class PaginationModule {
}
