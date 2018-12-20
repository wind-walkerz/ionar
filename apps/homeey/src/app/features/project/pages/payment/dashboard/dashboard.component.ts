import { Component, OnInit, OnDestroy } from '@angular/core';
import { PaymentService } from '../payment.service';

@Component({
  selector: 'payment-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {
  ///-----------------------------------------------  Variables   -----------------------------------------------///

  invoice_list = [];

  constructor(private _paymentSvs: PaymentService) {
  }

  ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///

  ngOnInit() {
    this._paymentSvs.getInvoiceList().subscribe(res => {
      this.invoice_list = res.data;
    });
  }

  ngOnDestroy(): void {
  }

  ///-----------------------------------------------  Main Functions  -----------------------------------------------///
}
