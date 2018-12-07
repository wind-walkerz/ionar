import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicFieldDirective } from './directives/dynamic-field.directive';

import { FieldComponent } from './components/field.component';

import { SubmitDirective } from './directives/submit.directive';

import { FormService } from './providers/form.service';
import { ControlComponent } from './components/control.component';
import { LabelComponent } from './components/label.component';
import { FeedbackComponent } from './components/feedback.component';
import { FormComponent } from './core.component';
import { IonarFormBuilder } from './providers/form_builder';


@NgModule({
  declarations: [
    FormComponent,
    FieldComponent, ControlComponent, LabelComponent, FeedbackComponent,
    DynamicFieldDirective, SubmitDirective
  ],
  providers: [FormService, IonarFormBuilder],
  imports: [CommonModule],
  exports: [
    FormComponent,
    FieldComponent,
    SubmitDirective,
    ControlComponent,
    LabelComponent, FeedbackComponent
  ]
})
export class CoreModule {
}
