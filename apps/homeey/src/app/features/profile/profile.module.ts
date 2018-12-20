import { NgModule } from '@angular/core';
import { ProfileComponent } from './profile.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { ProfileService } from './profile.service';


@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([{
      path: '', component: ProfileComponent
    }])
  ],
  declarations: [
    ProfileComponent
  ],
  providers: [
    ProfileService
  ]
})

export class ProfileModule {
}
