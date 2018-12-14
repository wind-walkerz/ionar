import { TemplateRef } from '@angular/core';

import { AsyncValidatorFn, ValidationConfigs } from './Validator';

/**
 * Interface for configs provided to an `AbstractControl`.
 *
 * @publicApi
 */
export interface ControlConfig {
  name: string,
  type: ControlType,
  props?: ControlProperties,
  state?: ControlState,
  validators?: ValidationConfigs,
  asyncValidator?: AsyncValidatorFn | AsyncValidatorFn[] | null
  icons?: {
    valid?: any,
    invalid?: any,
    validating?: any
  }
}

export type ControlType = 'input' | 'select' | 'textarea' | 'radio' | 'upload'

export type ControlState = 'disable' | 'hidden' | 'exclude'


export interface ControlProperties {
  label?: string,
  value?: any,
  options?: Array<{ value: any, label: any, [property: string]: any }>,
  placeholder?: string,
  template?: TemplateRef<any>,
  className?: string,
  id?: string,
  [key: string]: any
}
