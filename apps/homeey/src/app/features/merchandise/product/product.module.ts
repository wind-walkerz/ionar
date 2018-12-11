import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductComponent } from './containers/product.component';
import { SharedModule } from '../../../shared/shared.module';
import { RouterModule } from '@angular/router';


@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([{
      path: '', component: ProductComponent
    }])
  ],
  declarations: [
    ProductComponent
  ]
})
export class ProductModule {
}
