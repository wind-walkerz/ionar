import { Directive, Input, TemplateRef } from '@angular/core';
import { ComponentType } from '@ionar/form';

@Directive({
  selector: '[ioTemplate]'
})
export class IonarTemplateDirective {

  @Input() name: any = '';
  @Input() component: ComponentType;

  constructor(
    public templateRef: TemplateRef<any>
  ) {

  }

}
