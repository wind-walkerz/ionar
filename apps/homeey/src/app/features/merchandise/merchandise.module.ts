import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


@NgModule({
  imports: [
    RouterModule.forChild([
      { path: '', redirectTo: 'browse', pathMatch: 'full' },
      { path: 'browse', loadChildren: './catalog/catalog.module#CatalogModule' },
      { path: ':id', loadChildren: './product/product.module#ProductModule' }
    ])
  ],
  declarations: []
})
export class MerchandiseModule {
}
