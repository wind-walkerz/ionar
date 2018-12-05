import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[label]'
})
export class LabelDirective {
  constructor(public tpl: TemplateRef<any>) {}
}
