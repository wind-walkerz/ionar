import { Injectable, OnDestroy } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { untilDestroyed } from '@ionar/utility';
import { map } from 'rxjs/operators';
import { ApiService } from '../../../../core/services';

@Injectable()
export class PaymentService implements OnDestroy {
  constructor(private api: ApiService) {
  }

  public getInvoiceList = (project_id: number = 8) => {
    const params = new HttpParams().set('project_id', project_id.toString());

    return this.api.get(`/homeey/get-invoice-list`, params);
  };

  public getInvoiceDetail = (id: number) => {

    const params = new HttpParams().set('invoice_id', id.toString());

    return this.api.get(`/homeey/get-invoice-detail`, params);

  };

  ngOnDestroy(): void {
  }

}