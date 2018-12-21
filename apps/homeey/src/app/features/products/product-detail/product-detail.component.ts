import { Component, OnInit, OnDestroy } from '@angular/core';
import { Location } from '@angular/common';
import { ProductsService } from '../products.service';
import { ActivatedRoute } from '@angular/router';

import _ from 'lodash';

@Component({
  selector: 'product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit, OnDestroy {

  ///-----------------------------------------------  Variables   -----------------------------------------------///

  product;

  constructor(
    public location: Location,
    private _productSvs: ProductsService,
    private _route: ActivatedRoute
  ) {
  }

  ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///

  ngOnInit() {
    this.product = _.find(this._productSvs.product_list, ['id', parseInt(this._route.snapshot.paramMap.get('id'))]);
  }

  ngOnDestroy(): void {
  }


  ///-----------------------------------------------  Main Functions  -----------------------------------------------///

}
