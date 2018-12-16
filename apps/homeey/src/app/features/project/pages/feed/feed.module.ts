import { NgModule } from '@angular/core';
import { FeedComponent } from './feed.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../../../shared/shared.module';
import { FeedService } from './feed.service';


@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([{
      path: '', component: FeedComponent
    }])
  ],
  providers: [FeedService],
  declarations: [

    FeedComponent
  ]
})
export class FeedModule {
}
