import {
  ComponentFactoryResolver,
  ComponentRef,
  Directive,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit, TemplateRef,
  ViewContainerRef
} from '@angular/core';

import _ from 'lodash';


import { untilDestroyed } from '@ionar/utility';
import { InputComponent, MenuComponent, TextareaComponent, UploadComponent } from '../../ui';
import { FormGroup } from '../models/FormGroup';
import { AbstractControl } from '../models/AbstractControl';
import { AbstractControlConfig, FormControlState } from '../interfaces/Form';


@Directive({
  selector: '[dynamic_field]'
})
export class DynamicFieldDirective implements OnInit, OnDestroy, OnChanges {
  @Input('formGroup') private _formGroup: FormGroup;
  @Input('control') private _control: AbstractControl;

  @Input('value') private _value;
  @Input('invalid') private _invalid: Boolean;
  @Input('readonly') private _readonly: Boolean;
  @Input('template') private _template: TemplateRef<any>;

  @Input('events') private _events: { [key: string]: Function };

  @Input('name') private _name: string;

  private _compRef: ComponentRef<any>;

  components = {
    input: InputComponent,
    textarea: TextareaComponent,
    // select: AuroraSelectComponent,
    // datepicker: AuroraDatePickerComponent,
    // checkbox: AuroraCheckboxComponent,
    upload: UploadComponent,
    menu: MenuComponent
    // radio: AuroraRadioComponent
  };

  constructor(
    private _resolver: ComponentFactoryResolver,
    private _vcRef: ViewContainerRef
  ) {
  }

  ngOnInit(): void {
    this.createComponent();
  }

  ngOnChanges() {

    if (this._compRef) {
      this.updateContext();
    }
  }

  ngOnDestroy() {
    if (this._compRef) this._compRef.destroy();
  }

  createComponent = () => {
    const component = this.components[(<FormControlState>this._control.state).type];
    const factory = this._resolver.resolveComponentFactory<any>(component);
    this._compRef = this._vcRef.createComponent(factory);
    this.initContext();
  };

  private initContext = () => {
    this.parseContext();
  };

  private updateContext = () => {
    this.parseContext('updated');
    if (typeof this._compRef.instance.ngOnChanges === 'function') {
      this._compRef.instance.ngOnChanges();
    } else {
      throw new Error(`${this._compRef.componentType.name} doesn't implement 'ngOnChanges'`);
    }

  };

  private parseContext = (status = 'initial') => {
    const state = <FormControlState>this._control.state,
      controlConfig = <AbstractControlConfig>this._control.configuration;

    const context = {
      name: this._name,
      invalid: this._invalid,
      ...state.props,
      value: this._value,
      options: state.value,
      readonly: this._readonly,
      template: this._template
    };

    _.forOwn(context, (value, key) => {
      if (value !== undefined) this._compRef.instance[key] = value;
    });

    if (status === 'initial') {
      _.forOwn(this._events, (value, key) => {

        if (!this._compRef.instance[key])
          this._compRef.instance[key] = new EventEmitter();

        this._compRef.instance[key].pipe(untilDestroyed(this)).subscribe(event => {
          (value instanceof EventEmitter)
            ? value.emit(event)
            : value(event);
        });

      });
    }

  };
}
