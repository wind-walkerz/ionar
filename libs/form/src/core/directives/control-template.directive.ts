import {
  AfterViewInit, Directive, Host, Input,
  OnInit, Optional, SkipSelf, TemplateRef, ViewContainerRef
} from '@angular/core';
import { ComponentType } from '../interfaces/Form';

import { IoControl } from '../interfaces/IoControl';


@Directive({
  selector: '[controlTemplate]'
})
export class ControlTemplateDirective implements OnInit {

  @Input('name') private _name: any = '';
  @Input() component: ComponentType;

  get name(): string {
    return this._parent ? this._parent.name : this._name;
  }

  /**
   * @description
   * The parent  for the directive
   *
   * @internal
   */
  _parent: IoControl | null = null;

  constructor(
    private _vcRef: ViewContainerRef,
    public templateRef: TemplateRef<any>,
    @Optional() @Host() @SkipSelf()  parent: IoControl
  ) {
    this._parent = parent;
  }

  ngOnInit(): void {

  }

}
