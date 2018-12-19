import {
  AfterViewChecked,
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  HostBinding,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Renderer2
} from '@angular/core';
import { FormGroup } from '../models/FormGroup';
import { FormControl } from '../models/FormControl';
import { FormService } from '../providers/form.service';

import _ from 'lodash';

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
          z-index: 99999999;
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

  show_feedback: Boolean = true;

  show_label: Boolean = true;

  ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///
  constructor(
    private _formSvs: FormService,
    public cd: ChangeDetectorRef,
    private _renderer: Renderer2,
    private _elRef: ElementRef
  ) {
  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {

  }

  ngAfterViewChecked(): void {

    if (this.formGroup) this.parseContext(this.formGroup);

  }

  ngOnChanges(): void {

  }

  ngOnDestroy(): void {
  }

  parseContext = formGroup => {
    this._control = formGroup.get(this.name);


    const props = this._control.configuration.props;
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

}
