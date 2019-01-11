import { AbstractControl } from '../models/AbstractControl';
import { forkJoin, Observable } from 'rxjs';
import _ from 'lodash';

import { map } from 'rxjs/operators';
import { AbstractControlState, FormControlState } from './Form';


export interface JoiError {
  /**string with a description of the error*/
  message: string,

  /** ordered array where each element is the accessor to the value where the error happened */
  path: (string | number | symbol)[],

  /** type of the error */
  type: string,

  /**
   *  Object providing context of the error containing at least:
   *  key - key of the value that errored, equivalent to the last element of details.path.
   *label - label of the value that errored, or the key if any, or the default language.root.
   *
   * */
  context: {}
}

export type JoiSchema = { isJoi: true }


/**
 * @publicApi
 */
export interface AsyncValidatorFn {
  (control: AbstractControl): Observable<JoiError | null>;
}

// /**
//  * @description
//  * Provides a set of built-in validators that can be used by form controls.
//  *
//  * A validator is a function that processes a `AbstractControl` or collection of
//  * controls and returns an error map or null. A null map means that validation has passed.
//  * @publicApi
//  */
// // @dynamic
// export class Validators {
//
//   /**
//    * @description
//    * Validator that requires the control have a non-empty value.
//    *
//    * @usageNotes
//    *
//    * ### Validate that the field is non-empty
//    *
//    * ```typescript
//    * const control = new AbstractControl('', Validators.required);
//    *
//    * console.log(control.errors); // {required: true}
//    * ```
//    *
//    * @returns An error map with the `required` property
//    * if the validation check fails, otherwise `null`.
//    *
//    */
//   static required = (c: AbstractControl): ValidationErrors | null =>
//     isEmptyInputValue(c.value) ? { 'required': true } : null;
//
//   /**
//    * @description
//    * Validator that requires the control's value pass an email validation test.
//    *
//    * @usageNotes
//    *
//    * ### Validate that the field matches a valid email pattern
//    *
//    * ```typescript
//    * const control = new AbstractControl('bad@', Validators.email);
//    *
//    * console.log(control.errors); // {email: true}
//    * ```
//    *
//    * @returns An error map with the `email` property
//    * if the validation check fails, otherwise `null`.
//    *
//    */
//   static email = (control: AbstractControl): ValidationErrors | null => {
//
//     if (isEmptyInputValue(control.value)) {
//       return null;  // don't validate empty values to allow optional controls
//     }
//     return EMAIL_REGEXP.test(control.value) ? null : { 'email': true };
//   };
//
//
//   /**
//    * @description
//    * Validator that requires the length of the control's value to be greater than or equal
//    * to the provided minimum length. This validator is also provided by default if you use the
//    * the HTML5 `minlength` attribute.
//    *
//    * @usageNotes
//    *
//    * ### Validate that the field has a minimum of 3 characters
//    *
//    * ```typescript
//    * const control = new AbstractControl('ng', Validators.minLength(3));
//    *
//    * console.log(control.errors); // {minlength: {requiredLength: 3, actualLength: 2}}
//    * ```
//    *
//    * ```html
//    * <input minlength="5">
//    * ```
//    *
//    * @returns A validator function that returns an error map with the
//    * `minlength` if the validation check fails, otherwise `null`.
//    */
//   static stringLength = (control: AbstractControl): ValidationErrors | null => {
//     const state = <FormControlState>control.state;
//
//     if (isEmptyInputValue(control.value)) {
//       return null;  // don't validate empty values to allow optional controls
//     }
//
//     if (state.component !== ('input' || 'textarea')) {
//       throw new Error(`'stringLength' validator can only be used with control type 'input' or 'textarea'`);
//     }
//
//     const
//       min: number = state.validators['stringLength'].min,
//       max: number = state.validators['stringLength'].max,
//       length: number = control.value ? control.value.length : 0;
//
//     if (length < min) {
//       return {
//         'stringLength': {
//           'minLength': min,
//           'actualLength': length
//         }
//       };
//     }
//
//     if (length > max) {
//       return {
//         'stringLength': {
//           'maxLength': max,
//           'actualLength': length
//         }
//       };
//     }
//
//     return null;
//   };
//
//
//   static equalTo = (control: AbstractControl): ValidationErrors | null => {
//
//     if (isEmptyInputValue(control.value)) {
//       return null;  // don't validate empty values to allow optional controls
//     }
//
//     const state = <FormControlState>control.state;
//
//     const compareWith = _.isString(state.validators['equalTo']) ? state.validators['equalTo'] : state.validators['equalTo'].compare;
//
//     const compared_control = control.parent.controls[compareWith];
//
//     return (JSON.stringify(control.value) === JSON.stringify(compared_control.value))
//       ? null : { equalTo: state.validators['equalTo'] };
//   };
//
//
//   /**
//    * @description
//    * Compose multiple validators into a single function that returns the union
//    * of the individual error maps for the provided control.
//    *
//    * @returns A validator function that returns an error map with the
//    * merged error maps of the validators if the validation check fails, otherwise `null`.
//    */
//   static compose = (validators: (ValidatorFn | null | undefined)[] | null): ValidatorFn | null => {
//     if (!validators) return null;
//     const presentValidators: ValidatorFn[] = validators.filter(isPresent) as any;
//     if (presentValidators.length === 0) return null;
//
//     return function(control: AbstractControl) {
//       return _mergeErrors(_executeValidators(control, presentValidators));
//     };
//   };
//
//   /**
//    * @description
//    * Compose multiple async validators into a single function that returns the union
//    * of the individual error objects for the provided control.
//    *
//    * @returns A validator function that returns an error map with the
//    * merged error objects of the async validators if the validation check fails, otherwise `null`.
//    */
//   static composeAsync(asyncValidators: AsyncValidatorFn[]): AsyncValidatorFn | null {
//     if (!asyncValidators) return null;
//     const presentValidators: AsyncValidatorFn[] = asyncValidators.filter(isPresent) as any;
//     if (presentValidators.length === 0) return null;
//
//     return function(control: AbstractControl) {
//       const observables = _executeAsyncValidators(control, presentValidators);
//
//       return forkJoin(observables).pipe(
//         map(_mergeErrors)
//       );
//
//     };
//   }
//
//
//   /** @internal */
//   _isBoxedValue(validator_configs: { [key: string]: any } | true | ValidatorFn | AsyncValidatorFn): boolean {
//     return _.isPlainObject(validator_configs);
//   }
//
//
// }

//
// const EMAIL_REGEXP =
//   /^(?=.{1,254}$)(?=.{1,64}@)[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+(\.[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+)*@[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?(\.[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?)*$/;


// function isEmptyInputValue(value: any): boolean {
//   // we don't check for string here so it also works with arrays
//   return value == null || value.length === 0;
// }
//
// function isPresent(o: any): boolean {
//   return o != null;
// }
//
// function _executeValidators(control: AbstractControl, validators: ValidatorFn[]): any[] {
//   return validators.map(v => v(control));
// }
//
// function _executeAsyncValidators(control: AbstractControl, validators: AsyncValidatorFn[]): any[] {
//   return validators.map(v => v(control));
// }
//
// function _mergeErrors(arrayOfErrors: ValidationErrors[]): ValidationErrors | null {
//   const errors: { [key: string]: any } =
//     _.reduce(arrayOfErrors, (result: ValidationErrors | null, err: ValidationErrors | null) => {
//       return err ? { ...result, ...err } : result;
//     }, {});
//
//   return Object.keys(errors).length === 0 ? null : errors;
//
// }
