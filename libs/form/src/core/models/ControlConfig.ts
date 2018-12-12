import { TemplateRef } from '@angular/core';

import { ValidationConfigs } from './Validator';

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
  asyncValidator?: ValidationConfigs,
  icons?: {
    valid?: any,
    invalid?: any,
    validating?: any
  }
}

export type ControlType = 'input' | 'select' | 'textarea' | 'radio'

export interface ControlState {
  disable?: Boolean,
  hidden?: Boolean,
  template?: TemplateRef<any>,
  exclude?: Boolean
}


export interface ControlProperties {
  label?: string,
  value?: any,
  options?: Array<{ value: any, label: any, [property: string]: any }>,
  placeholder?: string,

  [key: string]: any
}
