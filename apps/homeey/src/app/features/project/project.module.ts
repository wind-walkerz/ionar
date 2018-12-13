import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectComponent } from './containers/project.component';
import { RouterModule } from '@angular/router';
import { ProjectService } from './providers/project.service';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '', component: ProjectComponent, children: [
          { path: '', redirectTo: 'feed', pathMatch: 'full' },
          { path: 'feed', loadChildren: './pages/feed/feed.module#FeedModule' },
          { path: 'payment', loadChildren: './pages/payment/payment.module#PaymentModule' },
          { path: 'order', loadChildren: './pages/order/order.module#OrderModule' },
          { path: 'info', loadChildren: './pages/info/info.module#InfoModule' },
          { path: 'image-board', loadChildren: './pages/image-board/image-board.module#ImageBoardModule' }
        ]
      }

    ])
  ],
  declarations: [
    ProjectComponent
  ],
  providers: [ProjectService]
})
export class ProjectModule {
}
