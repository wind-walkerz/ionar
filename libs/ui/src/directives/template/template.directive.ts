import { Directive, Input, TemplateRef } from '@angular/core';


@Directive({
  selector: '[ioTemplate]'
})
export class IonarTemplateDirective {

  @Input() name: any = '';
  @Input() component: 'input' | 'select' | 'textarea' | 'radio' | 'upload' | 'menu';

  constructor(
    public templateRef: TemplateRef<any>
  ) {

  }

}
