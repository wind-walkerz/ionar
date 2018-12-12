import { FormControl } from './FormControl';
import { Observable } from 'rxjs';
import _ from 'lodash';

export interface ValidationErrors {
  [key: string]: any
}

export interface ValidationConfigs {

  stringLength?: {
    min?: number,
    max?: number
  },

  equalTo?: string

  [name: string]: { [key: string]: any } | string | true | ValidatorFn | AsyncValidatorFn
}


/**
 * @publicApi
 */
export interface ValidatorFn {
  (control: FormControl): ValidationErrors | null
}


/**
 * @publicApi
 */
export interface AsyncValidatorFn {
  (control: FormControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null>;
}

/**
 * @description
 * Provides a set of built-in validators that can be used by form controls.
 *
 * A validator is a function that processes a `FormControl` or collection of
 * controls and returns an error map or null. A null map means that validation has passed.
 * @publicApi
 */
// @dynamic
export class Validators {

  /**
   * @description
   * Validator that requires the control have a non-empty value.
   *
   * @usageNotes
   *
   * ### Validate that the field is non-empty
   *
   * ```typescript
   * const control = new FormControl('', Validators.required);
   *
   * console.log(control.errors); // {required: true}
   * ```
   *
   * @returns An error map with the `required` property
   * if the validation check fails, otherwise `null`.
   *
   */
  static required = (c: FormControl): ValidationErrors | null =>
    isEmptyInputValue(c.value) ? { 'required': true } : null;

  /**
   * @description
   * Validator that requires the control's value pass an email validation test.
   *
   * @usageNotes
   *
   * ### Validate that the field matches a valid email pattern
   *
   * ```typescript
   * const control = new FormControl('bad@', Validators.email);
   *
   * console.log(control.errors); // {email: true}
   * ```
   *
   * @returns An error map with the `email` property
   * if the validation check fails, otherwise `null`.
   *
   */
  static email = (control: FormControl): ValidationErrors | null => {

    if (isEmptyInputValue(control.value)) {
      return null;  // don't validate empty values to allow optional controls
    }
    return EMAIL_REGEXP.test(control.value) ? null : { 'email': true };
  };


  /**
   * @description
   * Validator that requires the length of the control's value to be greater than or equal
   * to the provided minimum length. This validator is also provided by default if you use the
   * the HTML5 `minlength` attribute.
   *
   * @usageNotes
   *
   * ### Validate that the field has a minimum of 3 characters
   *
   * ```typescript
   * const control = new FormControl('ng', Validators.minLength(3));
   *
   * console.log(control.errors); // {minlength: {requiredLength: 3, actualLength: 2}}
   * ```
   *
   * ```html
   * <input minlength="5">
   * ```
   *
   * @returns A validator function that returns an error map with the
   * `minlength` if the validation check fails, otherwise `null`.
   */
  static stringLength = (control: FormControl): ValidationErrors | null => {

    const controlConfig = control.configuration;

    if (isEmptyInputValue(control.value)) {
      return null;  // don't validate empty values to allow optional controls
    }

    if (controlConfig.type !== ('input' || 'textarea')) {
      throw new Error(`'stringLength' validator can only be used with control type 'input' or 'textarea'`);
    }

    const
      min: number = control.configuration.validators['stringLength'].min,
      max: number = control.configuration.validators['stringLength'].max,
      length: number = control.value ? control.value.length : 0;

    if (length < min) {
      return {
        'stringLength': {
          'minLength': min,
          'actualLength': length
        }
      };
    }

    if (length > max) {
      return {
        'stringLength': {
          'maxLength': max,
          'actualLength': length
        }
      };
    }

    return null;
  };


  static equalTo = (control: FormControl): ValidationErrors | null => {

    if (isEmptyInputValue(control.value)) {
      return null;  // don't validate empty values to allow optional controls
    }


    const compared_control = control.parent.controls[control.configuration.validators['equalTo']];

    return (JSON.stringify(control.value) === JSON.stringify(compared_control.value))
      ? null : { equalTo: control.configuration.validators['equalTo'] };
  };


  /**
   * @description
   * Compose multiple validators into a single function that returns the union
   * of the individual error maps for the provided control.
   *
   * @returns A validator function that returns an error map with the
   * merged error maps of the validators if the validation check fails, otherwise `null`.
   */
  static compose = (validators: (ValidatorFn | null | undefined)[] | null): ValidatorFn | null => {
    if (!validators) return null;
    const presentValidators: ValidatorFn[] = validators.filter(isPresent) as any;
    if (presentValidators.length === 0) return null;

    return function(control: FormControl) {
      return _mergeErrors(_executeValidators(control, presentValidators));
    };
  };


  /** @internal */
  _isBoxedValue(validator_configs: { [key: string]: any } | true | ValidatorFn | AsyncValidatorFn): boolean {
    return _.isPlainObject(validator_configs);
  }


}


const EMAIL_REGEXP =
  /^(?=.{1,254}$)(?=.{1,64}@)[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+(\.[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+)*@[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?(\.[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?)*$/;


function isEmptyInputValue(value: any): boolean {
  // we don't check for string here so it also works with arrays
  return value == null || value.length === 0;
}

function isPresent(o: any): boolean {
  return o != null;
}

function _executeValidators(control: FormControl, validators: ValidatorFn[]): any[] {
  return validators.map(v => v(control));
}

function _mergeErrors(arrayOfErrors: ValidationErrors[]): ValidationErrors | null {
  const errors: { [key: string]: any } =
    _.reduce(arrayOfErrors, (result: ValidationErrors | null, err: ValidationErrors | null) => {
      return err ? { ...result, ...err } : result;
    }, {});

  return Object.keys(errors).length === 0 ? null : errors;

}
