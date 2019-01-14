import _ from 'lodash';
import { AbstractControl, DISABLED, INVALID, PENDING, VALID } from './AbstractControl';
import { FormControl } from './FormControl';

import { AbstractControlOptions, FormArrayState} from '../interfaces/Form';

/**
 * Tracks the value and validity state of an array of `FormControl`,
 * `FormGroup` or `FormArray` instances.
 *
 * A `FormArray` aggregates the values of each child `FormControl` into an array.
 * It calculates its status by reducing the status values of its children. For example, if one of
 * the controls in a `FormArray` is invalid, the entire array becomes invalid.
 *
 * `FormArray` is one of the three fundamental building blocks used to define forms in Angular,
 * along with `FormControl` and `FormGroup`.
 *
 * @usageNotes
 *
 * ### Create an array of form controls
 *
 * ```
 * const arr = new FormArray([
 *   new FormControl('Nancy', Validators.minLength(2)),
 *   new FormControl('Drew'),
 * ]);
 *
 * console.log(arr.value);   // ['Nancy', 'Drew']
 * console.log(arr.status);  // 'VALID'
 * ```
 *
 * ### Create a form array with array-level validators
 *
 * You include array-level validators and async validators. These come in handy
 * when you want to perform validation that considers the value of more than one child
 * control.
 *
 * The two types of validators are passed in separately as the second and third arg
 * respectively, or together as part of an options object.
 *
 * ```
 * const arr = new FormArray([
 *   new FormControl('Nancy'),
 *   new FormControl('Drew')
 * ], {validators: myValidator, asyncValidators: myAsyncValidator});
 * ```
 *
 * ### Set the updateOn property for all controls in a form array
 *
 * The options object is used to set a default value for each child
 * control's `updateOn` property. If you set `updateOn` to `'blur'` at the
 * array level, all child controls default to 'blur', unless the child
 * has explicitly specified a different `updateOn` value.
 *
 * ```ts
 * const arr = new FormArray([
 *    new FormControl()
 * ], {updateOn: 'blur'});
 * ```
 *
 * ### Adding or removing controls from a form array
 *
 * To change the controls in the array, use the `push`, `insert`, or `removeAt` methods
 * in `FormArray` itself. These methods ensure the controls are properly tracked in the
 * form's hierarchy. Do not modify the array of `AbstractControl`s used to instantiate
 * the `FormArray` directly, as that result in strange and unexpected behavior such
 * as broken change detection.
 *
 * @publicApi
 */
export class FormArray extends AbstractControl {


  /**
   * Creates a new `FormArray` instance.
   *
   * @param controls An array of child controls. Each child control is given an index
   * where it is registered.
   *
   * @param validatorOrOpts A synchronous validator function, or an array of
   * such functions, or an `AbstractControlOptions` object that contains validation functions
   * and a validation trigger.
   *
   * @param asyncValidator A single async validator or array of async validator functions
   *
   */
  constructor(state: FormArrayState, options?: AbstractControlOptions) {
    super(
      null,
      <AbstractControlOptions | null>options
    );
    this._coerceToJoiSchema();
    this._setUpControls(state);
    this._initObservables();
    this.updateValueAndValidity({ onlySelf: true, emitEvent: false });

  }

  /**
   * Get the `AbstractControl` at the given `index` in the array.
   *
   * @param index Index in the array to retrieve the control
   */
  at(index: number): AbstractControl {
    return this.controls[index];
  }

  /**
   * Insert a new `AbstractControl` at the end of the array.
   *
   * @param control Form control to be inserted
   */
  push(control: AbstractControl): void {
    control.setParent(this);
    (<AbstractControl[]>this.controls).push(control);
    this.updateValueAndValidity();
  }

  /**
   * Insert a new `AbstractControl` at the given `index` in the array.
   *
   * @param index Index in the array to insert the control
   * @param control Form control to be inserted
   */
  insert(index: number, control: AbstractControl): void {
    control.setParent(this);
    (<AbstractControl[]>this.controls).splice(index, 0, control);

    this.updateValueAndValidity();
  }

  /**
   * Remove the control at the given `index` in the array.
   *
   * @param index Index in the array to remove the control
   */
  removeAt(index: number): void {

    (<AbstractControl[]>this.controls).splice(index, 1);
    this.updateValueAndValidity();
  }

  /**
   * Replace an existing control.
   *
   * @param index Index in the array to replace the control
   * @param control The `AbstractControl` control to replace the existing control
   */
  setControl(index: number, control: AbstractControl): void {

    (<AbstractControl[]>this.controls).splice(index, 1);

    if (control) {
      control.setParent(this);
      (<AbstractControl[]>this.controls).splice(index, 0, control);
    }

    this.updateValueAndValidity();

  }

  /**
   * Length of the control array.
   */
  get length(): number {
    return (<AbstractControl[]>this.controls).length;
  }

  /**
   * Sets the value of the `FormArray`. It accepts an array that matches
   * the structure of the control.
   *
   * This method performs strict checks, and throws an error if you try
   * to set the value of a control that doesn't exist or if you exclude the
   * value of a control.
   *
   * @usageNotes
   * ### Set the values for the controls in the form array
   *
   * ```
   * const arr = new FormArray([
   *   new FormControl(),
   *   new FormControl()
   * ]);
   * console.log(arr.value);   // [null, null]
   *
   * arr.setValue(['Nancy', 'Drew']);
   * console.log(arr.value);   // ['Nancy', 'Drew']
   * ```
   *
   * @param value Array of values for the controls
   * @param options Configure options that determine how the control propagates changes and
   * emits events after the value changes
   *
   * * `onlySelf`: When true, each change only affects this control, and not its parent. Default
   * is false.
   * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
   * `valueChanges`
   * observables emit events with the latest status and value when the control value is updated.
   * When false, no events are emitted.
   * The options options are passed to the {@link AbstractControl#updateValueAndValidity
   * updateValueAndValidity} method.
   */
  setValue(value: any[], options: { onlySelf?: boolean, emitEvent?: boolean } = {}): void {
    this._checkAllValuesPresent(value);
    value.forEach((newValue: any, index: number) => {
      this._throwIfControlMissing(index);
      this.at(index).setValue(newValue, { onlySelf: true, emitEvent: options.emitEvent });
    });
    this.updateValueAndValidity(options);
  }


  /**
   * Resets the `FormArray` and all descendants are marked `pristine` and `untouched`, and the
   * value of all descendants to null or null maps.
   *
   * You reset to a specific form state by passing in an array of states
   * that matches the structure of the control. The state is a standalone value
   * or a form state object with both a value and a disabled status.
   *
   * @usageNotes
   * ### Reset the values in a form array
   *
   * ```ts
   * const arr = new FormArray([
   *    new FormControl(),
   *    new FormControl()
   * ]);
   * arr.reset(['name', 'last name']);
   *
   * console.log(this.arr.value);  // ['name', 'last name']
   * ```
   *
   * ### Reset the values in a form array and the disabled status for the first control
   *
   * ```
   * this.arr.reset([
   *   {value: 'name', disabled: true},
   *   'last'
   * ]);
   *
   * console.log(this.arr.value);  // ['name', 'last name']
   * console.log(this.arr.get(0).status);  // 'DISABLED'
   * ```
   *
   * @param value Array of values for the controls
   * @param options Configure options that determine how the control propagates changes and
   * emits events after the value changes
   *
   * * `onlySelf`: When true, each change only affects this control, and not its parent. Default
   * is false.
   * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
   * `valueChanges`
   * observables emit events with the latest status and value when the control is reset.
   * When false, no events are emitted.
   * The options options are passed to the {@link AbstractControl#updateValueAndValidity
   * updateValueAndValidity} method.
   */
  reset(value: any = [], options: { onlySelf?: boolean, emitEvent?: boolean } = {}): void {
    // this._forEachChild((control: AbstractControl, index: number) => {
    //   control.reset(value[index], { onlySelf: true, emitEvent: options.emitEvent });
    // });
    // this.updateValueAndValidity(options);
    // this._updatePristine(options);
    // this._updateTouched(options);
    if (_.has(this.options, ['submitOnChange'])) {

      this.root.submit(true);
    }
  }

  /**
   * Clear the `FormGroup`, marks all descendants are marked `pristine` and `untouched`, and
   * the value of all descendants to null.
   *
   * You reset to a specific form state by passing in a map of states
   * that matches the structure of your form, with control names as keys. The state
   * is a standalone value or a form state object with both a value and a disabled
   * status.
   *
   * @param formState Resets the control with an initial value,
   * or an object that defines the initial value and disabled state.
   *
   * @param options options options that determine how the control propagates changes
   * and emits events when the group is reset.
   * * `onlySelf`: When true, each change only affects this control, and not its parent. Default is
   * false.
   * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
   * `valueChanges`
   * observables emit events with the latest status and value when the control is reset.
   * When false, no events are emitted.
   * The options options are passed to the {@link AbstractControl#updateValueAndValidity
   * updateValueAndValidity} method.
   *
   * @usageNotes
   *
   * ### Reset the form group values
   *
   * ```ts
   * const form = new FormGroup({
   *   first: new FormControl('first name'),
   *   last: new FormControl('last name')
   * });
   *
   * console.log(form.value);  // {first: 'first name', last: 'last name'}
   *
   * form.reset({ first: 'name', last: 'last name' });
   *
   * console.log(form.value);  // {first: 'name', last: 'last name'}
   * ```
   *
   * ### Reset the form group values and disabled status
   *
   * ```
   * const form = new FormGroup({
   *   first: new FormControl('first name'),
   *   last: new FormControl('last name')
   * });
   *
   * form.reset({
   *   first: {value: 'name', disabled: true},
   *   last: 'last'
   * });
   *
   * console.log(this.form.value);  // {first: 'name', last: 'last name'}
   * console.log(this.form.get('first').status);  // 'DISABLED'
   * ```
   */
  clear(options: { onlySelf?: boolean, emitEvent?: boolean } = {}): void {
    _.each(this.controls, (c: AbstractControl) => {
      c.clear({ onlySelf: true, emitEvent: options.emitEvent });
    });

    this.updateValueAndValidity(options);
    if (_.has(this.options, ['submitOnChange'])) {

      this.root.submit(true);
    }
  }

  /**
   * The aggregate value of the array, including any disabled controls.
   *
   * Reports all values regardless of disabled status.
   * For enabled controls only, the `value` property is the best way to get the value of the array.
   */
  getRawValue(): any[] {
    return (<AbstractControl[]>this.controls).map((control: AbstractControl) => {
      return control instanceof FormControl ? control.value : (<any>control).getRawValue();
    });
  }

  /** @internal */
  _setUpControls(controlConfig: FormArrayState): void {
    (<FormArrayState>this.controls) = [];
    _.each(controlConfig, (c: AbstractControl, index) => {

      c.setParent(this);
      (<FormArrayState>this.controls).push(c);
    });
  }


  /** @internal */
  _throwIfControlMissing(index: number): void {
    if (!this.controls.length) {
      throw new Error(`
        There are no form controls registered with this array yet.  If you're using ngModel,
        you may want to check next tick (e.g. use setTimeout).
      `);
    }
    if (!this.at(index)) {
      throw new Error(`Cannot find form control at index ${index}`);
    }
  }


  /** @internal */
  _updateValue(): void {
    (this as { value: any }).value =
      // .filter((control) => control.enabled || this.disabled)
      //   .map((control) => control.value);

      _((<FormArrayState>this.controls))
        .filter((control: AbstractControl) => control.enabled || this.disabled)
        .map(control => control.value)
        .compact()
        .value();
  }


  /** @internal */
  _checkAllValuesPresent(value: any): void {
    // this._forEachChild((control: AbstractControl, i: number) => {
    //   if (value[i] === undefined) {
    //     throw new Error(`Must supply a value for form control at index: ${i}.`);
    //   }
    // });
  }

  /** @internal */
  _allControlsDisabled(): boolean {
    return _.every(_.values(this.controls), (c: AbstractControl) => c.disabled);
  }

  /** @internal */
  _anyControlsHaveStatus(status: string): boolean {

    return !!_.find(_.values(this.controls), ['status', status]);
  }

}
