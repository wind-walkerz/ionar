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
  template?: TemplateRef<any>,
  className?: string,
  id?: string,
  disabled?: true,
  hidden?: true,
  exclude?: true,
  hideFeedback?: true,
  hideLabel?: true
  submitOnChange?: true,
  [key: string]: any
}


export interface FormConfigs {
  nullExclusion?: true,
  readonly?: true,
  disabled?: true,
  submitOnChange?: true
}