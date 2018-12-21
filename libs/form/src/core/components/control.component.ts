import {
  AfterViewChecked,
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component, ContentChild, ContentChildren,
  ElementRef, Host,
  HostBinding,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Renderer2, TemplateRef
} from '@angular/core';
import { FormGroup } from '../models/FormGroup';
import { FormControl } from '../models/FormControl';
import { FormService } from '../providers/form.service';

import _ from 'lodash';
import { FormComponent } from '../core.component';
import { ControlConfig } from '../models/ControlConfig';
import { FieldTemplateDirective } from '../directives/field-template.directive';

@Component({
  selector: 'form-control',
  template: `

      <ng-container *ngIf="formGroup">
          <form-label
                  [name]="name"
                  [formGroup]="formGroup"
                  *ngIf="show_label"
          ></form-label>

          <form-field
                  [name]="name"
                  [formGroup]="formGroup"
                  [template]="field_template"
          ></form-field>

          <form-feedback
                  [name]="name"
                  [formGroup]="formGroup"
                  *ngIf="show_feedback"
          ></form-feedback>
      </ng-container>

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
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ControlComponent implements OnInit, AfterViewInit, AfterViewChecked, OnChanges, OnDestroy {
  ///-----------------------------------------------  Variables   -----------------------------------------------///
  @Input() name: any = '';

  @Input() formGroup: FormGroup;
  _control: FormControl;

  field_template: TemplateRef<any>;

  show_feedback: Boolean = true;

  show_label: Boolean = true;

  @ContentChild(FieldTemplateDirective) private _fieldTemplateDir;


  ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///
  constructor(
    private _formSvs: FormService,
    public cd: ChangeDetectorRef,
    private _renderer: Renderer2,
    private _elRef: ElementRef,
    @Host() private _parent: FormComponent
  ) {
  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {

  }

  ngAfterViewChecked(): void {
    if (this._parent.formGroup) {
      this.formGroup = this._parent.formGroup;
      this.parseContext();
    }
  }

  ngOnChanges(): void {

  }

  ngOnDestroy(): void {
  }

  parseContext = () => {

    this._checkTemplate();

    this._control = this.formGroup.get(this.name);


    this._renderer.setAttribute(this._elRef.nativeElement, 'id', this.name);

    const props = (<ControlConfig>this._control.configuration).props;
    if (_.has(props, ['hidden'])) {

      this._renderer.addClass(this._elRef.nativeElement, 'hidden');
    }

    if (_.has(props, ['hideLabel'])) {
      this.show_label = false;
      this._renderer.addClass(this._elRef.nativeElement, 'hide-label');
    }


    if (_.has(props, ['hideFeedback'])) {
      this.show_feedback = false;
      this._renderer.addClass(this._elRef.nativeElement, 'hide-feedback');
    }
    this.cd.detectChanges();
  };


  private _checkTemplate = () => {

    const templateData = this._fieldTemplateDir ? this._fieldTemplateDir : _.find(this._parent._fieldTemplateDirList.toArray(), ['name', this.name]);

    if (templateData) {

      this.field_template = templateData._tplRef;
    }
  };
}
