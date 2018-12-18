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
                  *ngIf="!hide_label"
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
export class ControlComponent implements OnInit, AfterViewInit, AfterViewChecked, OnChanges, OnDestroy {
  ///-----------------------------------------------  Variables   -----------------------------------------------///
  @Input() name: string = '';

  @Input() formGroup: FormGroup;
  _control: FormControl;

  show_feedback: Boolean = true;

  // @HostBinding('class.hide_label') get hide_label(): Boolean {
  //   return false;
  // }

  @HostBinding('class.hidden') hidden: Boolean = false;


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

    if (this._control.configuration.props) {
      this.hidden = !!this._control.configuration.props.hidden;
    }

    const props = this._control.configuration.props;


    if (!_.has(props, ['label'])) {
      this._renderer.addClass(this._elRef.nativeElement, 'hide_label');
    }

    if (_.has(props, ['feedback']) && !(_.get(props, ['feedback']))) {
      this.show_feedback = false;
    }
    this.cd.detectChanges();
  };

}
