import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef, forwardRef,
  Host, HostBinding, Input,
  OnChanges,
  OnDestroy,
  OnInit, Optional,
  Renderer2, SimpleChanges, SkipSelf, ViewContainerRef
} from '@angular/core';

import { FormService } from '../providers/form.service';

import _ from 'lodash';
import { ControlContainer } from '../interfaces/ControlContainer';
import { FormComponent, formProvider } from '../core.component';
import { controlNameBinding } from './form-control.component';
import { FormGroupTestName } from '../directives/form-group';

export const formGroupProvider: any = {
  provide: ControlContainer,
  useClass: forwardRef(() => FormGroupComponent)
};


@Component({
  selector: 'form-group',
  template: `

      <ng-content></ng-content>

  `,

  styles: [`

  `],

  viewProviders: [formGroupProvider],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormGroupComponent implements OnInit, OnChanges, OnDestroy {
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
    // @Optional() @Host() @SkipSelf()  parent: ControlContainer
    // @Optional() @Host() @SkipSelf() rootParent: FormComponent
    private _vcRef: ViewContainerRef
  ) {

  }


  ngOnInit() {

    this._vcRef.clear()
  }

  ngOnChanges(changes: SimpleChanges): void {

  }

  ngOnDestroy(): void {
  }


}

