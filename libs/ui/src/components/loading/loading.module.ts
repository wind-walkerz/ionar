import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoadingComponent } from './loading.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { CircleComponent } from './spinner/circle.component';


@NgModule({
  imports: [

    CommonModule
  ],
  declarations: [
    LoadingComponent,
    SpinnerComponent,
    CircleComponent
  ],
  exports: [LoadingComponent]
})
export class LoadingModule {
}
