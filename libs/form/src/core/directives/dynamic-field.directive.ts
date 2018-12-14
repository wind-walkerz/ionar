import {
  ComponentFactoryResolver,
  ComponentRef,
  Directive,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  ViewContainerRef
} from '@angular/core';

import _ from 'lodash';
import { ControlConfig } from '../models/ControlConfig';

import { untilDestroyed } from '@ionar/utility';
import { InputComponent, MenuComponent, TextareaComponent, UploadComponent } from '../../ui';


@Directive({
  selector: '[dynamic_field]'
})
export class DynamicFieldDirective implements OnInit, OnDestroy, OnChanges {
  @Input('controlConfig') private _controlConfig: ControlConfig;
  @Input('events') private _events: { [key: string]: Function };

  @Input() private invalid: Boolean;

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
    const component = this.components[this._controlConfig.type];
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
    const context = {
      name: this._controlConfig.name,
      invalid: this.invalid,
      ...this._controlConfig.props
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
