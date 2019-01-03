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
import { FormControl } from '../models/FormControl';
import { AbstractControlOptions, FormControlState } from '../interfaces/Form';


@Directive({
  selector: '[dynamic_field]'
})
export class DynamicFieldDirective implements OnInit, OnDestroy, OnChanges {

  @Input('name') private _name: string;
  @Input('root') private _root: FormGroup;
  @Input('control') private _control: FormControl;

  @Input('template') private _template: TemplateRef<any>;

  @Input('events') private _events: { [key: string]: Function };


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

    this._root.statusChanges.pipe(untilDestroyed(this)).subscribe(status => {
      this.ngOnChanges();
    });

    this._root.ngSubmit.pipe(untilDestroyed(this)).subscribe(data => {
      this.ngOnChanges();
    });
  }

  ngOnChanges() {
    if (this._compRef) {
      this._parseContext();
    }
  }

  ngOnDestroy() {
    if (this._compRef) this._compRef.destroy();
  }

  createComponent = () => {
    const component = this.components[(<FormControlState>this._control.state).component];
    const factory = this._resolver.resolveComponentFactory<any>(component);
    this._compRef = this._vcRef.createComponent(factory);
    this._parseContext('initial');
  };

  private _parseContext = (status = null) => {

    this._updateContext();

    if (status === 'initial') this._initObservables();


    if (typeof this._compRef.instance.ngOnChanges === 'function') {
      this._compRef.instance.ngOnChanges();
    } else {
      throw new Error(`${this._compRef.componentType.name} doesn't implement 'ngOnChanges'`);
    }

  };

  private _initObservables = () => {
    _.forOwn(this._events, (value, key) => {

      if (!this._compRef.instance[key])
        this._compRef.instance[key] = new EventEmitter();

      this._compRef.instance[key].pipe(untilDestroyed(this)).subscribe(event => {
        (value instanceof EventEmitter)
          ? value.emit(event)
          : value(event);
      });

    });

    if (typeof this._compRef.instance.ngOnInit === 'function') {
      this._compRef.instance.ngOnInit();
    } else {
      throw new Error(`${this._compRef.componentType.name} doesn't implement 'ngOnInit'`);
    }
  };

  private _updateContext = () => {
    const state = <FormControlState>this._control.state,
      options = <AbstractControlOptions>this._control.options;

    const context = {
      name: this._name,
      invalid: this._control.invalid && (this._control.dirty || this._control.touched || this._root.submitted),
      ...state.props,
      template: this._template,
      ...options
    };

    _.forOwn(context, (value, key) => {
      if (value !== undefined) this._compRef.instance[key] = value;
    });
  };
}
