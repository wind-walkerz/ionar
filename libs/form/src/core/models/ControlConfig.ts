import { TemplateRef } from '@angular/core';

import { ValidationConfigs } from './Validator';

/**
 * Interface for configs provided to an `AbstractControl`.
 *
 * @publicApi
 */
export interface ControlConfig {
  type: ControlType,
  props?: ControlProperties,
  state?: ControlState,
  validators?: ValidationConfigs,
  async_validator?: ValidationConfigs,
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
