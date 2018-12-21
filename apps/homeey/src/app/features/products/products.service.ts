import { Injectable, OnDestroy } from '@angular/core';
import { ApiService } from '../../core/services';
import { HttpParams } from '@angular/common/http';
import _ from 'lodash';
import { untilDestroyed } from '@ionar/utility';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable()

export class ProductsService implements OnDestroy {

  private _productList;

  get product_list() {
    return this._productList;
  }

  set product_list(data: any) {
    this._productList = data;
  }

  constructor(private _apiSvs: ApiService) {
  }

  getProductList = (page: number, filter_params?: { [key: string]: any }): Observable<any> => {
    const params_data = {
      limit: 10,
      page: page,
      sort_by: 'name',
      sort_order: 'DESC'
    };

    if (filter_params) {
      _.assign(params_data, {}, filter_params);
    }

    let params = new HttpParams();

    _.forOwn(params_data, (value, key) => {
      params = params.append(key, value.toString());
    });


    return this._apiSvs.get('/homeey/list-products', params).pipe(map(res => {
      this.product_list = res.data;
      return res;
    }));
  };

  getBrandList = (): Observable<any> => {
    return this._apiSvs.get('/homeey/list-brand');
  };

  getCategoryList = (): Observable<any> => {
    return this._apiSvs.get('/homeey/list-categories');
  };

  ngOnDestroy(): void {
  }
}