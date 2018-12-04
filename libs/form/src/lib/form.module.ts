import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputModule } from '../components/input/input.module';
import { FormComponent } from '../containers/form.component';
import { SubmitDirective } from '../directives/submit.directive';

@NgModule({
  declarations: [FormComponent, SubmitDirective],
  imports: [InputModule, CommonModule],
  exports: [InputModule, FormComponent, SubmitDirective]
})
export class FormModule {}
