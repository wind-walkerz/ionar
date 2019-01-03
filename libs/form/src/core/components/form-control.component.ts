import {
  ChangeDetectionStrategy, ChangeDetectorRef,
  Component, ContentChild,
  ElementRef, forwardRef,
  Host, HostBinding,
  Input,
  OnChanges,
  OnInit, Optional, SkipSelf
} from '@angular/core';

import { FormControl } from '../models/FormControl';

import _ from 'lodash';
import { FormComponent } from '../core.component';
import { IoControl } from '../interfaces/IoControl';
import { ControlContainer } from '../interfaces/ControlContainer';
import { FormControlState } from '../interfaces/Form';
import { ControlTemplateDirective } from '../directives/control-template.directive';

export const controlNameBinding: any = {
  provide: IoControl,
  useExisting: forwardRef(() => FormControlComponent)
};


@Component({
  selector: 'form-control',
  template: `
      <ng-container
              [ngTemplateOutlet]="template"
              [ngTemplateOutletContext]="context"
      ></ng-container>

      <ng-template #default_template let-context>
          <form-label *ngIf="!context?.hideLabel"></form-label>

          <form-field></form-field>

          <form-feedback *ngIf="!context?.hideFeedback"></form-feedback>
      </ng-template>
      <ng-template #content_template>
          <ng-content></ng-content>
      </ng-template>
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


export class FormControlComponent extends IoControl implements OnInit, OnChanges {
  ///-----------------------------------------------  Variables   -----------------------------------------------///

  /**
   * @description
   * Tracks the name of the `FormControl` bound to the directive. The name corresponds
   * to a key in the parent `FormGroup` or `FormArray`.
   */
  @Input() name: any = '';

  /**
   * @description
   * Tracks the `FormControl` instance bound to the directive.
   */
  public get control(): FormControl {
    return <FormControl>this._parent.root.get(this.path);

  };

  get controlTemplateDir(): ControlTemplateDirective {
    const parent = <FormComponent>this._parent,
      state = <FormControlState>this.control.state;

    if (this._controlTemplateDir) return this._controlTemplateDir;

    if (parent.controlTemplateDirList)
      return _.find(parent.controlTemplateDirList.toArray(), ['name', this.name])
        || _.find(parent.controlTemplateDirList.toArray(), ['component', state.component]);

  };

  @ContentChild(ControlTemplateDirective) private _controlTemplateDir;

  @HostBinding('attr.id')
  private get attribute(): string {
    return this.name;
  }

  @HostBinding('class.hidden')
  private get hiddenStyle(): Boolean {
    return _.get(this.control.options, ['hidden']);
  }


  @HostBinding('class.hideLabel')
  private get _isHideLabel(): Boolean {
    const hideLabel = _.get(this.control.options, ['hideLabel']);

    this.setContext({
      hideLabel: hideLabel
    });

    return hideLabel;
  }

  @HostBinding('class.hideFeedback')
  private get _isHideFeedback(): Boolean {
    const hideFeedback = _.get(this.control.options, ['hideFeedback']);

    this.setContext({
      hideFeedback: hideFeedback
    });

    return hideFeedback;
  }

  ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///
  constructor(
    @Optional() @Host() @SkipSelf() parent: ControlContainer,
    @Optional() @Host() @SkipSelf() rootParent: FormComponent,
    cd: ChangeDetectorRef,
    el: ElementRef
  ) {
    super(cd, el);

    this._parent = parent || rootParent;
  }


}
