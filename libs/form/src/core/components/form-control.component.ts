import {
  AfterViewChecked,
  AfterViewInit,
  ChangeDetectionStrategy,

  Component,
  ContentChild,
  ElementRef, forwardRef,
  Host, HostBinding, Inject,
  Input,
  OnChanges,
  OnDestroy,
  OnInit, Optional, Query, QueryList,
  Renderer2, SimpleChanges, SkipSelf,
  TemplateRef
} from '@angular/core';
import { FormGroup } from '../models/FormGroup';
import { FormControl } from '../models/FormControl';
import { FormService } from '../providers/form.service';

import _ from 'lodash';
import { FormComponent, formProvider } from '../core.component';

import { FieldTemplateDirective } from '../directives/field-template.directive';

import { AbstractControl } from '../models/AbstractControl';
import { NgControl } from '../interfaces/NgControl';
import { ControlContainer } from '../interfaces/ControlContainer';
import { untilDestroyed } from '@ionar/utility';
import { FormArrayComponent } from './form-array.component';
import { FormGroupComponent } from './form-group.component';

export const controlNameBinding: any = {
  provide: NgControl,
  useExisting: forwardRef(() => FormControlComponent)
};


@Component({
  selector: 'form-control',
  template: `
      <!--<form-label *ngIf="show_label"></form-label>-->

      <!--<form-field></form-field>-->

      <!--<form-feedback *ngIf="show_feedback"></form-feedback>-->
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
  // viewProviders: [controlNameBinding],
  changeDetection: ChangeDetectionStrategy.OnPush
})


export class FormControlComponent extends NgControl implements OnInit, AfterViewInit, AfterViewChecked, OnChanges, OnDestroy {
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

  fieldTemplate: TemplateRef<any>;

  show_feedback: Boolean = true;

  show_label: Boolean = true;

  @ContentChild(FieldTemplateDirective) private _fieldTemplateDir;

  @HostBinding('attr.id')
  private get attribute(): string {
    return this.name;
  }

  @HostBinding('class.hidden')
  private get hiddenStyle(): Boolean {
    // return this.control.options && _.get(this.control.options, ['hidden']);
    return null;
  }


  @HostBinding('class.hideLabel')
  private get hideLabelStyle(): Boolean {
    // if (this.control.options && _.get(this.control.options, ['hideLabel'])) {
    //   this.show_label = false;
    //   return true;
    // }
    return false;

  }

  @HostBinding('class.hideFeedback')
  private get hideFeedbackStyle(): Boolean {

    // if (this.control.options && _.get(this.control.options, ['hideFeedback'])) {
    //   this.show_feedback = false;
    //   return true;
    // }
    return false;
  }

  ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///
  constructor(
    // @Inject(forwardRef(() => ControlContainer)) parent: ControlContainer,
    @Optional() @Host() @SkipSelf() parent: ControlContainer,
    @Optional() @Host() @SkipSelf() rootParent: FormComponent,
    // private _elRef: ElementRefm,

  ) {
    super();

    //
    // this._parent = parent || rootParent;
    console.log('parent', parent);

    console.log('root', rootParent);
    // console.log(this._elRef.nativeElement);
    // console.log('group', groupParent);
    // console.log('array', arrayParent);
    // console.log(<FormControl>this._parent.root.get(this.path))
  }

  ngOnInit() {

  }

  ngAfterViewInit(): void {


  }

  ngAfterViewChecked(): void {

  }

  ngOnChanges(changes: SimpleChanges): void {

  }

  ngOnDestroy(): void {
  }


  // private _checkTemplate = () => {
  //
  //   let templateData;
  //
  //   if (this._fieldTemplateDir) templateData = this._fieldTemplateDir;
  //
  //   if (this._parent._fieldTemplateDirList) templateData = _.find(this._parent._fieldTemplateDirList.toArray(), ['name', this.name]);
  //
  //   if (templateData) {
  //
  //     this.fieldTemplate = templateData._tplRef;
  //   }
  // };
}
