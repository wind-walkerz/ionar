import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductsService } from '../products.service';
import { FormGroup } from '@ionar/form';

@Component({
  selector: 'catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit, OnDestroy {

  ///-----------------------------------------------  Variables   -----------------------------------------------///

  formGroup: FormGroup



  product_list = [];

  brand_list: ({ id: any, name: any })[] = [];

  constructor(private _productSvs: ProductsService) {
  }

  ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///

  ngOnInit() {
    this._productSvs.getProductList().subscribe(res => {
      this.product_list = res;
    });

    this._productSvs.getBrandList().subscribe(res => {
      this.brand_list = res;
    });
  }

  ngOnDestroy(): void {
  }


  ///-----------------------------------------------  Main Functions  -----------------------------------------------///

}
