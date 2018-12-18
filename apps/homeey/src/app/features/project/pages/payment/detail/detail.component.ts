import { Component, OnDestroy, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { PaymentService } from '../payment.service';

@Component({
  selector: 'detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit, OnDestroy {
  ///-----------------------------------------------  Variables   -----------------------------------------------///

  invoice: any;

  constructor(
    public location: Location,
    private _paymenSvs: PaymentService
  ) {

  }

  ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///

  ngOnInit() {
    this._paymenSvs.getInvoiceDetail().subscribe(res => {
      this.invoice = res;
    });
  }

  ngOnDestroy(): void {
  }

  ///-----------------------------------------------  Main Functions  -----------------------------------------------///
}
