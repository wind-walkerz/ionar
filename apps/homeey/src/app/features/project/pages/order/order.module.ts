import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderComponent } from './order.component';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from '../payment/dashboard/dashboard.component';
import { DetailComponent } from '../payment/detail/detail.component';
import { SharedModule } from '../../../../shared/shared.module';


@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      { path: '', component: OrderComponent }
    ])
  ],
  declarations: [
    OrderComponent
  ]
})
export class OrderModule {
}
