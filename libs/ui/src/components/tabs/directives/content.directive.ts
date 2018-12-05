import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[content]'
})
export class ContentDirective {
  constructor(public tpl: TemplateRef<any>) {}
}
