import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaginationComponent } from './pagination.component';
import { PageNumberComponent } from './components/page-number/page-number.component';
import { PageLinkComponent } from './components/page-link/page-link.component';


@NgModule({
  imports: [

    CommonModule
  ],
  declarations: [
    PaginationComponent,
    PageNumberComponent,
    PageLinkComponent
  ],
  exports: [PaginationComponent, PageLinkComponent]
})
export class PaginationModule {
}
