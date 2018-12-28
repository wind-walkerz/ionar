import {
  Attribute,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef, forwardRef,
  Host, HostBinding, Input,
  OnChanges,
  OnDestroy,
  OnInit, Optional,
  Renderer2, SimpleChanges, SkipSelf
} from '@angular/core';

import { FormService } from '../providers/form.service';

import _ from 'lodash';
import { ControlContainer } from '../interfaces/ControlContainer';
import { FormComponent } from '../core.component';


export const formArrayProvider: any = {
  provide: ControlContainer,
  useExisting: forwardRef(() => FormArrayComponent)
};

@Component({
  selector: 'form-array',
  template: `
      <ng-content></ng-content>
  `,

  styles: [`

  `],
  providers: [formArrayProvider],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormArrayComponent extends ControlContainer implements OnInit, OnChanges, OnDestroy {
  ///-----------------------------------------------  Variables   -----------------------------------------------///

  /**
   * @description
   * Tracks the name of the `FormArray` bound to the component. The name corresponds
   * to a key in the parent `FormGroup` or `FormArray`.
   */
  @Input() name: any = '';

  @HostBinding('attr.id')
  private get attribute(): string {
    return this.name;
  }

  ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///
  constructor(

    @Optional() @Host() @SkipSelf()  parent: ControlContainer,
    @Optional() @Host() @SkipSelf() rootParent: FormComponent
  ) {
    super();

    this._parent = parent || rootParent;
  }

  ngOnInit() {

  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);

  }

  ngOnDestroy(): void {
  }


}
