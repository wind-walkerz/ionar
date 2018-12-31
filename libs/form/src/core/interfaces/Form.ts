import { TemplateRef } from '@angular/core';
import { AbstractControl } from '../models/AbstractControl';

import { AsyncValidatorFn, ValidationConfigs } from './Validator';

export interface FormGroupState {
  [name: string]: AbstractControl | FormControlState
}


export type FormArrayState = AbstractControl[]

/**
 * Interface for configs provided to an `AbstractControl`.
 *
 * @publicApi
 */

export interface FormControlState {
  component: ComponentType,
  props?: ControlProperties,
  validators?: ValidationConfigs,
  asyncValidator?: AsyncValidatorFn | AsyncValidatorFn[] | null
  icons?: {
    valid?: any,
    invalid?: any,
    validating?: any
  },
  options?: AbstractControlOptions
}


export type ComponentType = 'input' | 'select' | 'textarea' | 'radio' | 'upload' | 'menu'


export interface ControlProperties {
  placeholder?: string,
  className?: string,
  id?: string,
  label?: string,
  value?: any,
  options?: Array<{ value: any, label: any, [property: string]: any }>,

  [key: string]: any
}

export type AbstractControlState = FormGroupState | FormControlState | FormArrayState

export interface AbstractControlOptions {
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