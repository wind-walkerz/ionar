import {
  AfterViewInit,
  ChangeDetectionStrategy, ChangeDetectorRef,
  Component, ContentChildren, HostBinding,
  Input, OnChanges,
  OnDestroy,
  OnInit, QueryList, TemplateRef,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import { FormControl, FormGroup } from '@ionar/form';
import { FormService } from '../providers/form.service';

import _ from 'lodash';

@Component({
  selector: 'form-control',
  template: `
      <ng-container *ngIf="_formGr">
          <form-label [name]="name" *ngIf="!hide_label"></form-label>

          <form-field [name]="name"></form-field>

          <form-feedback [name]="name" *ngIf="show_feedback"></form-feedback>
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

      :host-context(.hide_label) {
          grid-template-areas: "field" "feedback";
          grid-template-columns: 1fr;
      }

      :host-context(.hidden) {
          display: none;
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
export class ControlComponent implements OnInit, AfterViewInit, OnChanges, OnDestroy {
  ///-----------------------------------------------  Variables   -----------------------------------------------///
  @Input() name: string = '';

  public _formGr: FormGroup;
  _control: FormControl;

  show_feedback: Boolean = true;

  @HostBinding('class.hidden') hidden: Boolean = false;
  @HostBinding('class.hide_label') private hide_label: Boolean = false;

  ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///
  constructor(private _formSvs: FormService, private cd: ChangeDetectorRef) {
  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
  }

  ngOnChanges(): void {

  }

  ngOnDestroy(): void {
  }

  parseContext = () => {
    this._formGr = this._formSvs.getFormGroup();
    this._control = this._formGr.get(this.name);

    if (this._control.configuration.state) {
      this.hidden = this._control.configuration.state === 'hidden';
    }

    const props = this._control.configuration.props;


    this.hide_label = !_.has(props, ['label']);


    if (_.has(props, ['feedback']) && !(_.get(props, ['feedback']))) {
      this.show_feedback = false;
    }

    this.cd.detectChanges();
  };

}
