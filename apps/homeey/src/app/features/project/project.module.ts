import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectComponent } from './containers/project.component';
import { RouterModule } from '@angular/router';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '', component: ProjectComponent, children: [
          { path: '', redirectTo: 'feed', pathMatch: 'full' },
          { path: 'feed', loadChildren: './pages/feed/feed.module#FeedModule' },
          { path: 'payment', loadChildren: './pages/payment/payment.module#PaymentModule' }
        ]
      }

    ])
  ],
  declarations: [
    ProjectComponent
  ]
})
export class ProjectModule {
}
