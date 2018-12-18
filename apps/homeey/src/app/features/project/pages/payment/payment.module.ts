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
      { path: 'dashboard', component: DashboardComponent },
      { path: 'detail/:id', component: DetailComponent }
    ])
  ],
  declarations: [DashboardComponent, DetailComponent],
  providers: [PaymentService]
})
export class PaymentModule {
}
