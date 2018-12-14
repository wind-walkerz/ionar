import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../../../shared/shared.module';
import { DetailComponent } from './detail/detail.component';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'product-detail/:id', component: DetailComponent }
    ])
  ],
  declarations: [DashboardComponent, DetailComponent]
})
export class PaymentModule {}
