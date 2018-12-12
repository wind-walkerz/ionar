import { AbstractControl, DISABLED, INVALID, PENDING, VALID } from './AbstractControl';
import { ControlConfig } from './ControlConfig';
import { AsyncValidatorFn, ValidationConfigs, ValidationErrors, ValidatorFn, Validators } from './Validator';
import _ from 'lodash';
import { FormGroup } from '@ionar/form';
import { EventEmitter } from '@angular/core';
import { debounce } from 'rxjs/operators';
import { timer } from 'rxjs';


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

  public readonly configuration: ControlConfig;

  private _parent: FormGroup;


  /**
   * Creates a new `FormControl` instance.
   *
   * @param configs Initializes the control with an object that defines the initial state.
   *
   */
  constructor(configs: ControlConfig) {
    super();

    this._storeControlConfig(configs as ControlConfig);
    this._setValidators(configs.validators);
    this._setAsyncValidators(configs.asyncValidator);
    this._initObservables();
    this._applyControlState(configs.props);
    this.updateValueAndValidity({ onlySelf: true, emitEvent: false });
  }


  /**
   * The parent control.
   */
  get parent(): FormGroup {
    return this._parent;
  }


  /**
   * Sets a new value for the form control.
   *
   * @param value The new value for the control.
   * @param options Configuration options that determine how the control proopagates changes
   * and emits events when the value changes.
   * The configuration options are passed to the {@link IonarAbstractControl#updateValueAndValidity
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
  }


  /**
   * Resets the form control, marking it `pristine` and `untouched`, and setting
   * the value to null.
   *
   * @param formState Resets the control with an initial value,
   * or an object that defines the initial value and disabled state.
   *
   * @param options Configuration options that determine how the control propagates changes
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
  reset(formState: any = null, options: { onlySelf?: boolean, emitEvent?: boolean } = {}): void {
    // this._applyFormState(formState);
    // this.markAsPristine(options);
    // this.markAsUntouched(options);
    // this.setValue(this.value, options);
    // this._pendingChange = false;
  }

  /**
   * @param parent Sets the parent of the control
   */
  setParent(parent: FormGroup): void {
    this._parent = parent;
  }


  /**
   * Recalculates the value and validation status of the control.
   *
   * By default, it also updates the value and validity of its ancestors.
   *
   * @param opts Configuration options determine how the control propagates changes and emits events
   * after updates and validity checks are applied.
   * * `onlySelf`: When true, only update this control. When false or not supplied,
   * update all direct ancestors. Default is false..
   * * `emitEvent`: When true or not supplied (the default), emit the `valueChanges` event
   * observables emit events with the latest status and value when the control is updated.
   * When false, no events are emitted.
   */
  updateValueAndValidity(opts: { onlySelf?: boolean, emitEvent?: boolean } = {}): void {
    if (this.enabled) {
      this._cancelExistingSubscription();
      (this as { errors: ValidationErrors | null }).errors = this._runValidator();
      (this as { status: string }).status = this._calculateStatus();

      if (this.status === VALID || this.status === PENDING) {
        this._runAsyncValidator(opts.emitEvent);

      }

      this._updateValue();
    }

    if (opts.emitEvent !== false) {
      (this.valueChanges as EventEmitter<any>).emit(this.value);
      (this.statusChanges as EventEmitter<any>).emit(this.status);
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


  _runValidator(): ValidationErrors | null {
    return this.validator ? this.validator(this) : null;
  }


  _runAsyncValidator(emitEvent?: boolean): void {

    if (this.asyncValidator) {
      (this as { status: string }).status = PENDING;
      const obs = this.asyncValidator(this);
      this._asyncValidationSubscription =
        obs.pipe(     debounce(() => timer(10000)),).subscribe((errors: ValidationErrors | null) => {
          if ((this.touched || this.dirty) && this.value) {
            console.log('11');
            this.setErrors(errors, { emitEvent });
          }
        });
    }
  }

  _cancelExistingSubscription(): void {
    if (this._asyncValidationSubscription) {
      this._asyncValidationSubscription.unsubscribe();
    }
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
  private _setAsyncValidators = (asyncValidators: ValidationConfigs | null): void => {
    (this as { asyncValidator: ValidatorFn | null }).asyncValidator = coerceToAsyncValidator(asyncValidators);
  };


  /** @internal */
  _calculateStatus(): string {

    // if (this.disabled) return DISABLED;
    if (this.errors) return INVALID;
    // if (this.pending) return PENDING;

    return VALID;
  }

  /** @internal */
  _updateValue(): void {
    if (this.valid) {


      // (this as { value: any }).value = this.pendingValue;
    }
  }


  private _applyControlState = (state: any) => {

    (this as { value: any }).value = (this as { pendingValue: string }).pendingValue = state.value;
    // state.disabled ? this.disable({onlySelf: true, emitEvent: false}) :
    //         this.enable({onlySelf: true, emitEvent: false});
  };

  private _storeControlConfig = (config: ControlConfig) => {
    (this as { configuration: ControlConfig }).configuration = config;
  };

  /**
   * @internal
   */
  _allControlsDisabled(): boolean {
    return this.disabled;
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

function coerceToAsyncValidator(asyncValidators: ValidationConfigs): AsyncValidatorFn | null {

  return Validators.composeAsync(_.map(asyncValidators, (value: AsyncValidatorFn, key): AsyncValidatorFn => value));
};
