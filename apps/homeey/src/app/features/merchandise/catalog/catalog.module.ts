import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatalogComponent } from './catalog.component';
import { SharedModule } from '../../../shared/shared.module';
import { RouterModule } from '@angular/router';


@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([{
      path: '', component: CatalogComponent
    }])
  ],
  declarations: [
    CatalogComponent
  ]
})
export class CatalogModule {
}
