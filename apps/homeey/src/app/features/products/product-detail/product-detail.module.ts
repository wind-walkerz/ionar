import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { SharedModule } from '../../../shared/shared.module';
import { RouterModule } from '@angular/router';
import { ProductDetailComponent } from './product-detail.component';


@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([{
      path: '', component: ProductDetailComponent
    }])
  ],
  declarations: [
    ProductDetailComponent
  ]
})
export class ProductDetailModule {
}
