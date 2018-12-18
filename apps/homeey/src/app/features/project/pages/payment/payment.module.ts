import { NgModule } from '@angular/core';

import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../../../shared/shared.module';
import { DetailComponent } from './detail/detail.component';
import { PaymentService } from './payment.service';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent, data: { animation: 'payment/dashboard' } },
      { path: 'detail/:id', component: DetailComponent, data: { animation: 'payment/detail' } }
    ])
  ],
  declarations: [DashboardComponent, DetailComponent],
  providers: [PaymentService]
})
export class PaymentModule {
}
