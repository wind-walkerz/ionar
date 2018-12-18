import { Injectable, OnDestroy } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { untilDestroyed } from '@ionar/utility';
import { map } from 'rxjs/operators';
import { ApiService } from '../../../../core/services';

@Injectable()
export class PaymentService implements OnDestroy {
  constructor(private api: ApiService) {
  }

  public getInvoiceDetail = (id: any = 4410) => {

    const params = new HttpParams().set('invoice_id', id);

    return this.api.get(`/homeey/get-invoice-detail`, params).pipe(
      untilDestroyed(this),
      map(res => {
        if (res.status_code === 200) {
          return res.data;
        } else {
          console.log(res.message);
        }

        return null;
      })
    );
  };

  ngOnDestroy(): void {
  }

}