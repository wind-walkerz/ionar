import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { FormControlState, FormGroup, FormGroupState, IonarFormBuilder } from '@ionar/form';

import _ from 'lodash';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CatalogComponent implements OnInit, OnDestroy {

  ///-----------------------------------------------  Variables   -----------------------------------------------///

  formGroup: FormGroup;
  _formState: FormGroupState;


  product_list = [];

  total_page: number;

  constructor(
    private cd: ChangeDetectorRef,
    private _productSvs: ProductsService,
    private _fb: IonarFormBuilder
  ) {
  }

  ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///

  ngOnInit() {


    const brandList$ = this._productSvs.getBrandList();

    const categoryList$ = this._productSvs.getCategoryList();

    forkJoin(brandList$, categoryList$).subscribe(([brands, categories]) => {

      this._formState = {
        keywords: {
          component: 'input',
          options: {
            hideLabel: true
          }
        },
        base_price: {
          component: 'menu',
          props: {
            options: [
              {
                label: '0 - 300$',
                value: '0,300'
              },
              {
                label: '300$ - 600$',
                value: '300,600'
              },
              {
                label: '> 600$',
                value: '600'
              }
            ]
          },
          options: {
            hideLabel: true
          }
        },
        category_id: {

          component: 'menu',

          props: {
            options: _.map(categories.data, (cate: any) => ({ label: _.startCase(cate.name), value: cate.id }))
          },
          options: {
            hideLabel: true
          }
        },
        brand_name: {

          component: 'menu',

          props: {
            options: _.map(brands.data, (brand: any) => ({ label: _.startCase(brand.name), value: brand.name }))
          },
          options: {
            hideLabel: true
          }
        }
      };

      this.formGroup = this._fb.group(this._formState, {
        nullExclusion: true,
        submitOnChange: true
      });
      this.cd.markForCheck();

      this.getPage(1);

    });


  }

  ngOnDestroy(): void {
  }


  ///-----------------------------------------------  Main Functions  -----------------------------------------------///

  getPage = (page: number, formValue?: any) => {

    this._productSvs.getProductList(page, formValue).subscribe(res => {
      this.product_list = res.data;
      this.total_page = res.paginator.total_pages;
      this.cd.markForCheck();
    });
  };

  onClearFilter = () => {
    this.formGroup.clear();
  };

}
