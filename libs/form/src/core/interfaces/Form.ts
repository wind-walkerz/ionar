import { TemplateRef } from '@angular/core';
import { AbstractControl } from '../models/AbstractControl';

import { AsyncValidatorFn, ValidationConfigs } from './Validator';

export interface FormGroupState {
  [name: string]: AbstractControl
}


export interface FormArrayState {
  [name: string]: AbstractControl
}


/**
 * Interface for configs provided to an `AbstractControl`.
 *
 * @publicApi
 */

export interface FormControlState {
  type: ControlType,
  label?: string,
  value?: any,
  options?: Array<{ value: any, label: any, [property: string]: any }>,
  props?: ControlProperties,
  validators?: ValidationConfigs,
  asyncValidator?: AsyncValidatorFn | AsyncValidatorFn[] | null
  icons?: {
    valid?: any,
    invalid?: any,
    validating?: any
  }
}


export type ControlType = 'input' | 'select' | 'textarea' | 'radio' | 'upload' | 'menu'


export interface ControlProperties {
  placeholder?: string,
  className?: string,
  id?: string,

  [key: string]: any
}

export type AbstractControlState = FormGroupState | FormControlState | FormArrayState

export interface AbstractControlConfig {
  nullExclusion?: Boolean,
  readonly?: Boolean,
  disabled?: Boolean,
  hidden?: Boolean,
  excluded?: Boolean,
  submitOnChange?: Boolean,
  hideFeedback?: Boolean,
  hideLabel?: Boolean,
  template?: TemplateRef<any>,
}