import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { ControlConfig, FormGroup, IonarFormBuilder } from '@ionar/form';

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
  _formState: ControlConfig[] = [];


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

      this._formState = [
        {
          name: 'keywords',
          type: 'input',
          props: {
            hideLabel: true
          }
        },
        {
          name: 'base_price',
          type: 'menu',
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
          ],
          props: {
            hideLabel: true
          }
        },
        {
          name: 'category_id',
          type: 'menu',
          options: _.map(categories.data, (cate: any) => ({ label: _.startCase(cate.name), value: cate.id })),
          props: {
            hideLabel: true
          }
        },
        {
          name: 'brand_name',
          type: 'menu',
          options: _.map(brands.data, (brand: any) => ({ label: _.startCase(brand.name), value: brand.name })),
          props: {
            hideLabel: true
          }
        }
      ];
      this.formGroup = this._fb.group(this._formState, {
        nullExclusion: true
      });
      this.cd.markForCheck();

      this.getPage(1);

    });



  }

  ngOnDestroy(): void {
  }


  ///-----------------------------------------------  Main Functions  -----------------------------------------------///

  getPage = (page: number) => {
    this._productSvs.getProductList(page).subscribe(res => {
      this.product_list = res.data;
      this.total_page = res.paginator.total_pages;
      this.cd.markForCheck();
    });
  };

}
