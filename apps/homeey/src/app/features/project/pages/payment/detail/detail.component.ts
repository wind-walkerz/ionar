import { Component, OnDestroy, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { PaymentService } from '../payment.service';
import _ from 'lodash';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit, OnDestroy {
  ///-----------------------------------------------  Variables   -----------------------------------------------///

  invoice_data: any;
  invoice_id: number;
  room_subtotal: number = 0;

  constructor(
    public location: Location,
    public _sanitizer: DomSanitizer,
    private _paymentSvs: PaymentService,
    private _route: ActivatedRoute
  ) {

  }

  ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///

  ngOnInit() {

    this.invoice_id = parseInt(this._route.snapshot.paramMap.get('id'));

    this._paymentSvs.getInvoiceDetail(this.invoice_id).subscribe(res => {
      this.invoice_data = res;

      this.room_subtotal = _.sum(_.map(res.invoice_detail, (room: any) => room.total));
    });
  }

  ngOnDestroy(): void {
  }

  ///-----------------------------------------------  Main Functions  -----------------------------------------------///
}
