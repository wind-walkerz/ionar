import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InfoComponent } from './info.component';
import { SharedModule } from '../../../../shared/shared.module';
import { RouterModule } from '@angular/router';


@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      { path: '', component: InfoComponent }
    ])
  ],
  declarations: [
    InfoComponent
  ]
})
export class InfoModule {
}
