import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxSpinnerModule } from 'ngx-spinner';
import { IonarModule } from '@ionar/core';
import { SharedComponentModule } from './components/component.module';
import { AngularDraggableModule } from 'angular2-draggable';


@NgModule({
  imports: [
    SharedComponentModule,
    CommonModule,
    NgxSpinnerModule,
    IonarModule,
    AngularDraggableModule
  ],
  exports: [
    SharedComponentModule,
    CommonModule,
    NgxSpinnerModule,
    IonarModule,
    AngularDraggableModule
  ]
})
export class SharedModule {
}
