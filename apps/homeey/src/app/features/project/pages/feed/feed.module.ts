import { NgModule } from '@angular/core';
import { FeedComponent } from './feed.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../../../shared/shared.module';


@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([{
      path: '', component: FeedComponent
    }])
  ],
  declarations: [

    FeedComponent
  ]
})
export class FeedModule {
}
