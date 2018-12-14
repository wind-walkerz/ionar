import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { ProductsService } from './products.service';


@NgModule({
  imports: [
    RouterModule.forChild([
      { path: '', redirectTo: 'browse', pathMatch: 'full' },
      { path: 'browse', loadChildren: './catalog/catalog.module#ProductCatalogModule' },
      { path: ':id', loadChildren: './product-detail/product-detail.module#ProductDetailModule' }
    ])
  ],
  declarations: [],
  providers: [ProductsService]
})
export class ProductsModule {
}
