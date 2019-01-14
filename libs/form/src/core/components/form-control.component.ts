import {
  AfterViewChecked,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChild,
  forwardRef,
  Host,
  HostBinding,
  OnChanges,
  OnInit,
  Optional,
  SimpleChanges,
  SkipSelf
} from '@angular/core';


import _ from 'lodash';
import { FormComponent } from '../core.component';
import { IoControl } from '../interfaces/IoControl';
import { ControlContainer } from '../interfaces/ControlContainer';
import { FormControlState } from '../interfaces/Form';

import { IonarTemplateDirective } from '@ionar/ui';

export const controlNameBinding: any = {
  provide: IoControl,
  useExisting: forwardRef(() => FormControlComponent)
};


@Component({
  selector: 'form-control',
  template: `
      <form-label *ngIf="!isHideLabel"></form-label>

      <form-field></form-field>

      <form-feedback *ngIf="!isHideFeedback"></form-feedback>
  `,

  styles: [`
      :host {
          display: grid;
          grid-template-areas: "label   field" ". feedback";
          grid-template-columns: 3fr 7fr;
          grid-template-rows: 1fr auto;
          margin-bottom: 1rem;
          height: auto;
          visibility: visible;
          z-index: 50;
      }

      :host-context(.hide-label) {
          grid-template-areas: "field" "feedback";
          grid-template-columns: 1fr;
      }

      :host-context(.hide-feedback) {
          grid-template-areas: "label   field";
          grid-template-columns: 3fr 7fr;
      }

      :host-context(.hide-label.hide-feedback) {
          grid-template-areas: "field";
      }

      :host-context(.hidden) {
          display: none !important;
      }

      form-label {
          grid-area: label;
      }

      form-field {
          grid-area: field;
      }

      form-feedback {
          grid-area: feedback;
      }
  `],
  providers: [controlNameBinding],
  changeDetection: ChangeDetectionStrategy.OnPush
})


export class FormControlComponent extends IoControl implements OnInit, OnChanges, AfterViewChecked {
  ///-----------------------------------------------  Variables   -----------------------------------------------///


  get controlTemplateDir(): IonarTemplateDirective {

    const parent = <FormComponent>this.parent,
      state = <FormControlState>this.control.state;

    if (this._ioTemplateDir) return this._ioTemplateDir;

    if (parent.ioTemplateDirList)
      return _.find(parent.ioTemplateDirList.toArray(), ['name', this.name])
        || _.find(parent.ioTemplateDirList.toArray(), ['component', state.component]);

  };

  @ContentChild(IonarTemplateDirective) private _ioTemplateDir;


  @HostBinding('attr.id')
  get attribute(): string {
    return this.name;
  }

  @HostBinding('class.hidden')
  get hiddenStyle(): Boolean {

    return _.get(this.control.options, ['hidden']);
  }


  @HostBinding('class.hideLabel')
  get isHideLabel(): Boolean {
    return _.get(this.control.options, ['hideLabel']);
  }

  @HostBinding('class.hideFeedback')
  get isHideFeedback(): Boolean {
    return _.get(this.control.options, ['hideFeedback']);
  }

  ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///
  constructor(
    @Optional() @Host() @SkipSelf()  parent: ControlContainer,
    cd: ChangeDetectorRef
  ) {
    super(cd);
    this.parent = parent;
  }

  ngOnInit(): void {

  }

  ngOnChanges(changes: SimpleChanges): void {
    super.ngOnChanges(changes);
  }

  ngAfterViewChecked(): void {

  }

}
