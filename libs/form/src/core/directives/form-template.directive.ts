import {
  AfterViewInit, Directive, Input,
  OnInit, TemplateRef, ViewContainerRef
} from '@angular/core';
import { ComponentType } from '../interfaces/Form';


@Directive({
  selector: '[formTemplate]'
})
export class FormTemplateDirective implements OnInit {

  @Input() name: any = '';
  @Input() component: ComponentType


  constructor(
    private _vcRef: ViewContainerRef,
    public templateRef: TemplateRef<any>
  ) {
  }

  ngOnInit(): void {

  }

}
