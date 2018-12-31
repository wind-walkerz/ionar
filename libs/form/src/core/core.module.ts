import { forwardRef, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicFieldDirective } from './directives/dynamic-field.directive';

import { FieldComponent } from './components/control/field.component';

import { SubmitDirective } from './directives/submit.directive';


import { controlNameBinding, FormControlComponent } from './components/form-control.component';
import { LabelComponent } from './components/control/label.component';
import { FeedbackComponent } from './components/control/feedback.component';
import { FormComponent } from './core.component';
import { FormTemplateDirective } from './directives/form-template.directive';
import { FormArrayComponent } from './components/form-array.component';
import { FormGroupComponent } from './components/form-group.component';
import { ControlContainer } from './interfaces/ControlContainer';




@NgModule({
  declarations: [
    FormComponent,
    FieldComponent, FormControlComponent, LabelComponent, FeedbackComponent,
    FormArrayComponent,
    FormGroupComponent,

    FormTemplateDirective,
    DynamicFieldDirective, SubmitDirective
  ],

  imports: [CommonModule],
  exports: [
    FormComponent,
    FieldComponent,

    FormControlComponent,
    FormArrayComponent,
    FormGroupComponent,
    LabelComponent, FeedbackComponent,

    SubmitDirective,
    FormTemplateDirective
  ]
})
export class CoreModule {
}
