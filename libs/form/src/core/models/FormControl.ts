import { AbstractControl, DISABLED, INVALID, PENDING, VALID } from './AbstractControl';
import {
  AsyncValidatorFn,
  ValidationConfigs,
  ValidationErrors,
  ValidatorFn,
  Validators
} from '../interfaces/Validator';
import _ from 'lodash';

import { AbstractControlOptions, FormControlState, FormGroupState } from '../interfaces/Form';


/**
 * Tracks the value and validation status of an individual form control.
 *
 * This is one of the three fundamental building blocks of Angular forms, along with
 * `FormGroup.ts` and `FormArray`. It extends the `IonarAbstractControl` class that
 * implements most of the base functionality for accessing the value, validation status,
 * user interactions and events.
 *
 * @see `IonarAbstractControl`
 * @see [Reactive Forms Guide](guide/reactive-forms)
 * @see [Usage Notes](#usage-notes)
 *
 * @usageNotes
 *
 * ### Initializing Form Controls
 *
 * Instantiate a `FormControl`, with an initial value.
 *
 * ```ts
 * const control = new FormControl('some value');
 * console.log(control.value);     // 'some value'
 *```
 *
 * The following example initializes the control with a form state object. The `value`
 * and `disabled` keys are required in this case.
 *
 * ```ts
 * const control = new FormControl({ value: 'n/a', disabled: true });
 * console.log(control.value);     // 'n/a'
 * console.log(control.status);    // 'DISABLED'
 * ```
 *
 * The following example initializes the control with a sync validator.
 *
 * ```ts
 * const control = new FormControl('', Validators.required);
 * console.log(control.value);      // ''
 * console.log(control.status);     // 'INVALID'
 * ```
 *
 * The following example initializes the control using an options object.
 *
 * ```ts
 * const control = new FormControl('', {
 *    validators: Validators.required,
 *    asyncValidators: myAsyncValidator
 * });
 * ```
 *
 * ### Configure the control to update on a blur event
 *
 * Set the `updateOn` option to `'blur'` to update on the blur `event`.
 *
 * ```ts
 * const control = new FormControl('', { updateOn: 'blur' });
 * ```
 *
 * ### Configure the control to update on a submit event
 *
 * Set the `updateOn` option to `'submit'` to update on a submit `event`.
 *
 * ```ts
 * const control = new FormControl('', { updateOn: 'submit' });
 * ```
 *
 * ### Reset the control back to an initial value
 *
 * You reset to a specific form state by passing through a standalone
 * value or a form state object that contains both a value and a disabled state
 * (these are the only two properties that cannot be calculated).
 *
 * ```ts
 * const control = new FormControl('Nancy');
 *
 * console.log(control.value); // 'Nancy'
 *
 * control.reset('Drew');
 *
 * console.log(control.value); // 'Drew'
 * ```
 *
 * ### Reset the control back to an initial value and disabled
 *
 * ```
 * const control = new FormControl('Nancy');
 *
 * console.log(control.value); // 'Nancy'
 * console.log(control.status); // 'VALID'
 *
 * control.reset({ value: 'Drew', disabled: true });
 *
 * console.log(control.value); // 'Drew'
 * console.log(control.status); // 'DISABLED'
 * ```
 *
 * @publicApi
 */
export class FormControl extends AbstractControl {


  /**
   * Creates a new `FormControl` instance.
   *
   * @param config Initializes the control with an object that defines the initial state.
   *
   */
  constructor(state: FormControlState) {
    super(
      <FormControlState>state,
      <AbstractControlOptions | null>state.options
    );

    this._setValidators(state.validators);
    this._setAsyncValidators(state.asyncValidator);
    this._initObservables();
    this._initValidators();
    this._applyControlState();
    this.updateValueAndValidity({ onlySelf: true, emitEvent: false });
  }


  /**
   * Sets a new value for the form control.
   *
   * @param value The new value for the control.
   * @param options options options that determine how the control proopagates changes
   * and emits events when the value changes.
   * The options options are passed to the {@link IonarAbstractControl#updateValueAndValidity
   * updateValueAndValidity} method.
   *
   * * `onlySelf`: When true, each change only affects this control, and not its parent. Default is
   * false.
   * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
   * `valueChanges`
   * observables emit events with the latest status and value when the control value is updated.
   * When false, no events are emitted.
   * * `emitModelToViewChange`: When true or not supplied  (the default), each change triggers an
   * `onChange` event to
   * update the view.
   * * `emitViewToModelChange`: When true or not supplied (the default), each change triggers an
   * `ngModelChange`
   * event to update the model.
   *
   */
  setValue(value: any, options: {
    onlySelf?: boolean,
    emitEvent?: boolean
  } = {}): void {
    (this as { value: any }).value = value;
    this.markAsDirty();
    this.updateValueAndValidity(options);

    if (_.has(this.options, ['submitOnChange'])) {

      this.root.submit(true);
    }

  }


  /**
   * Resets the form control, marking it `pristine` and `untouched`, and setting
   * the value to null.
   *
   * @param formState Resets the control with an initial value,
   * or an object that defines the initial value and disabled state.
   *
   * @param options options options that determine how the control propagates changes
   * and emits events after the value changes.
   *
   * * `onlySelf`: When true, each change only affects this control, and not its parent. Default is
   * false.
   * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
   * `valueChanges`
   * observables emit events with the latest status and value when the control is reset.
   * When false, no events are emitted.
   *
   */
  reset(value: any = null, options: { onlySelf?: boolean, emitEvent?: boolean } = {}): void {
    this.markAsPristine(options);
    this.markAsUntouched(options);
    this._applyControlState();
    this.updateValueAndValidity(options);
    if (_.has(this.options, ['submitOnChange'])) {

      this.root.submit(true);
    }
  }

  /**
   * Resets the form control, marking it `pristine` and `untouched`, and setting
   * the value to null.
   *
   * @param formState Resets the control with an initial value,
   * or an object that defines the initial value and disabled state.
   *
   * @param options options options that determine how the control propagates changes
   * and emits events after the value changes.
   *
   * * `onlySelf`: When true, each change only affects this control, and not its parent. Default is
   * false.
   * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
   * `valueChanges`
   * observables emit events with the latest status and value when the control is reset.
   * When false, no events are emitted.
   *
   */
  clear(options: { onlySelf?: boolean, emitEvent?: boolean } = {}): void {
    this.markAsPristine(options);
    this.markAsUntouched(options);
    (this as { value: any }).value = null;
    this.updateValueAndValidity(options);
    if (_.has(this.options, ['submitOnChange'])) {

      this.root.submit(true);
    }
  }


  /**
   * Sets errors on a form control when running validations manually, rather than automatically.
   *
   * Calling `setErrors` also updates the validity of the parent control.
   *
   * @usageNotes
   * ### Manually set the errors for a control
   *
   * ```
   * const login = new FormControl('someLogin');
   * login.setErrors({
   *   notUnique: true
   * });
   *
   * expect(login.valid).toEqual(false);
   * expect(login.errors).toEqual({ notUnique: true });
   *
   * login.setValue('someOtherLogin');
   *
   * expect(login.valid).toEqual(true);
   * ```
   */
  setErrors(errors: ValidationErrors | null, opts: { emitEvent?: boolean } = {}): void {
    (this as { errors: ValidationErrors | null }).errors = errors;
    this._updateControlsErrors(opts.emitEvent !== false);
  }


  /**
   * Sets the synchronous validators that are active on this control.  Calling
   * this overwrites any existing sync validators.
   */
  private _setValidators = (validators: ValidationConfigs | null) => {

    (this as { validator: ValidatorFn | null }).validator = coerceToValidator(validators);

  };

  /**
   * Sets the async validators that are active on this control. Calling this
   * overwrites any existing async validators.
   */
  private _setAsyncValidators = (asyncValidators: AsyncValidatorFn | AsyncValidatorFn[] | null): void => {


    (this as { asyncValidator: ValidatorFn | null }).asyncValidator = coerceToAsyncValidator(asyncValidators);
  };


  /** @internal */
  _updateValue(): void {

  }


  private _applyControlState = () => {
    (<FormControl>this.value) = null;
    const properties = (<FormControlState>this.state).props;

    if (properties) {
      (<FormControl>this.value) = properties.value;
    }


    // state.disabled ? this.disable({onlySelf: true, emitEvent: false}) :
    //         this.enable({onlySelf: true, emitEvent: false});
  };


  /**
   * @internal
   */
  _allControlsDisabled(): boolean {
    return this.disabled;
  }

  /** @internal */
  _anyControlsHaveStatus(status: string): boolean {
    return false;
  }
}


function coerceToValidator(validators: ValidationConfigs): ValidatorFn | null {

  return Validators.compose(convertToValidatorFn(validators));
};

function convertToValidatorFn(validators: ValidationConfigs): ValidatorFn[] {
  return _.map(validators, (value, key) => {
    if (!_.has(Validators, key)) return null;

    return Validators[key];
  });
}

function coerceToAsyncValidator(asyncValidators: AsyncValidatorFn | AsyncValidatorFn[] | null): AsyncValidatorFn | null {

  return _.isArray(asyncValidators) ? Validators.composeAsync(_.map(asyncValidators, (value: AsyncValidatorFn, key): AsyncValidatorFn | null => value)) : asyncValidators || null;
};
