import _ from 'lodash';
import Joi from '@ionar/joi';
import { AbstractControl } from './AbstractControl';
import { Observable } from 'rxjs';
import { EventEmitter } from '@angular/core';
import { FormControl } from './FormControl';

import { AbstractControlOptions, FormControlState, FormGroupState } from '../interfaces/Form';
import { JoiError, JoiSchema } from '../interfaces/Validator';


/**
 * Tracks the value and validity state of a group of `FormControl` instances.
 *
 * A `FormGroup` aggregates the values of each child `FormControl` into one object,
 * with each control name as the key.  It calculates its status by reducing the status values
 * of its children. For example, if one of the controls in a group is invalid, the entire
 * group becomes invalid.
 *
 * `FormGroup` is one of the three fundamental building blocks used to define forms in Angular,
 * along with `FormControl` and `FormArray`.
 *
 * When instantiating a `FormGroup`, pass in a collection of child controls as the first
 * argument. The key for each child registers the name for the control.
 *
 * @usageNotes
 *
 * ### Create a form group with 2 controls
 *
 * ```
 * const form = new FormGroup({
 *   first: new FormControl('Nancy', Validators.minLength(2)),
 *   last: new FormControl('Drew'),
 * });
 *
 * console.log(form.value);   // {first: 'Nancy', last; 'Drew'}
 * console.log(form.status);  // 'VALID'
 * ```
 *
 * ### Create a form group with a group-level validator
 *
 * You include group-level validators as the second arg, or group-level async
 * validators as the third arg. These come in handy when you want to perform validation
 * that considers the value of more than one child control.
 *
 * ```
 * const form = new FormGroup({
 *   password: new FormControl('', Validators.minLength(2)),
 *   passwordConfirm: new FormControl('', Validators.minLength(2)),
 * }, passwordMatchValidator);
 *
 *
 * function passwordMatchValidator(g: FormGroup) {
 *    return g.get('password').value === g.get('passwordConfirm').value
 *       ? null : {'mismatch': true};
 * }
 * ```
 *
 * Like `FormControl` instances, you choose to pass in
 * validators and async validators as part of an options object.
 *
 * ```
 * const form = new FormGroup({
 *   password: new FormControl('')
 *   passwordConfirm: new FormControl('')
 * }, { validators: passwordMatchValidator, asyncValidators: otherValidator });
 * ```
 *
 * ### Set the updateOn property for all controls in a form group
 *
 * The options object is used to set a default value for each child
 * control's `updateOn` property. If you set `updateOn` to `'blur'` at the
 * group level, all child controls default to 'blur', unless the child
 * has explicitly specified a different `updateOn` value.
 *
 * ```ts
 * const c = new FormGroup({
 *   one: new FormControl()
 * }, { updateOn: 'blur' });
 * ```
 *
 * @publicApi
 */
export class FormGroup extends AbstractControl {

  public readonly ngSubmit: EventEmitter<any>;


  /**
   * @description
   * Reports whether the form submission has been triggered.
   */
  public readonly submitted: boolean = false;


  /**
   * Creates a new `FormGroup` instance.
   *
   * @param state A collection of child controls. The key for each child is the name
   * under which it is registered.
   *
   */
  constructor(state: FormGroupState, options?: AbstractControlOptions) {
    super(
      null,
      <AbstractControlOptions | null>options
    );
    this._applyFormState();
    this._setUpControls(state);
    this._initObservables();

    this.updateValueAndValidity({ onlySelf: true, emitEvent: false });
  }

  /**
   * Registers a control with the group's list of controls.
   *
   * This method does not update the value or validity of the control.
   * Use {@link FormGroup#addControl addControl} instead.
   *
   * @param name The control name to register in the collection
   * @param control Provides the control for the given name
   */
  registerControl(name: string, control: AbstractControl): AbstractControl {
    if (this.controls[name]) return this.controls[name];
    control.setParent(this);
    this.controls[name] = control;
    return control;
  }

  /**
   * Add a control to this group.
   *
   * This method also updates the value and validity of the control.
   *
   * @param name The control name to add to the collection
   * @param control Provides the control for the given name
   */
  addControl(name: string, control: AbstractControl): void {
    this.registerControl(name, control);
    this.updateValueAndValidity();
  }

  /**
   * Remove a control from this group.
   *
   * @param name The control name to remove from the collection
   */
  removeControl(name: string): void {
    (<{ controls: FormGroupState }>this).controls = <FormGroupState>_.omit(this.controls, [name]);

    this.updateValueAndValidity();
  }

  /**
   * Replace an existing control.
   *
   * @param name The control name to replace in the collection
   * @param control Provides the control for the given name
   */
  setControl(name: string, control: AbstractControl): void {
    (<{ controls: FormGroupState }>this).controls = <FormGroupState>_.omit(this.controls, [name]);
    if (control) this.registerControl(name, control);
    this.updateValueAndValidity();

  }

  /**
   * Sets the value of the `FormGroup`. It accepts an object that matches
   * the structure of the group, with control names as keys.
   *
   * @usageNotes
   * ### Set the complete value for the form group
   *
   * ```
   * const form = new FormGroup({
   *   first: new FormControl(),
   *   last: new FormControl()
   * });
   *
   * console.log(form.value);   // {first: null, last: null}
   *
   * form.setValue({first: 'Nancy', last: 'Drew'});
   * console.log(form.value);   // {first: 'Nancy', last: 'Drew'}
   * ```
   *
   * @throws When strict checks fail, such as setting the value of a control
   * that doesn't exist or if you excluding the value of a control.
   *
   * @param value The new value for the control that matches the structure of the group.
   * @param options options options that determine how the control propagates changes
   * and emits events after the value changes.
   * The options options are passed to the {@link IonarAbstractControl#updateValueAndValidity
   * updateValueAndValidity} method.
   *
   * * `onlySelf`: When true, each change only affects this control, and not its parent. Default is
   * false.
   * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
   * `valueChanges`
   * observables emit events with the latest status and value when the control value is updated.
   * When false, no events are emitted.
   */
  setValue(formValue: { [key: string]: any }, options: { onlySelf?: boolean, emitEvent?: boolean } = {}):
    void {

    _.forOwn(formValue, (value, name) => {
      this._throwIfControlMissing(name);
      this.controls[name].setValue(value, { onlySelf: true, emitEvent: options.emitEvent });
    });


    this.updateValueAndValidity(options);
  }

  /**
   * Resets the `FormGroup`, marks all descendants are marked `pristine` and `untouched`, and
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
  reset(value: any = {}, options: { onlySelf?: boolean, emitEvent?: boolean } = {}): void {
    _.forOwn(this.controls, (c: AbstractControl, name: string) => {
      c.reset(value[name], { onlySelf: true, emitEvent: options.emitEvent });
    });
    (this as { submitted: Boolean }).submitted = false;
    this.updateValueAndValidity(options);
    if (_.has(this.options, ['submitOnChange'])) this.submit(true);

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
    _.forOwn(this.controls, (c: AbstractControl, name: string) => {
      c.clear({ onlySelf: true, emitEvent: options.emitEvent });
    });
    (this as { submitted: Boolean }).submitted = false;
    this.updateValueAndValidity(options);
    if (_.has(this.options, ['submitOnChange'])) this.submit(true);
  }


  /**
   * Retrieves a child control given the control's name or path.
   *
   * @param path A dot-delimited string or array of string/number values that define the path to the
   * control.
   *
   * @usageNotes
   * ### Retrieve a nested control
   *
   * For example, to get a `name` control nested within a `person` sub-group:
   *
   * * `this.form.get('person.name');`
   *
   * -OR-
   *
   * * `this.form.get(['person', 'name']);`
   */
  get(path: string[] | string | null): { [name: string]: AbstractControl } | AbstractControl[] | AbstractControl | null {
    if (!path) return null;
    return _.get(this.controls, path) || null;
  }

  submit(instant: boolean = false): void {

    if (this.root === this) {
      (this as { submitted: Boolean }).submitted = true;
      this.updateValueAndValidity();
      this.updateChildValidity();
      (this as { ngSubmit: EventEmitter<any> }).ngSubmit.emit({
        value: this.value, instant
      });
    }
  }

  updateChildValidity() {
    _.forOwn(this.controls, (c: AbstractControl, name: string) => {
      if (c instanceof FormControl) c.updateValueAndValidity();
      if (c instanceof FormGroup) c.updateChildValidity();
    });
  }

  /** @internal */
  _initObservables() {
    (this as { valueChanges: Observable<any> }).valueChanges = new EventEmitter();
    (this as { statusChanges: Observable<any> }).statusChanges = new EventEmitter();
    (this as { ngSubmit: Observable<any> }).ngSubmit = new EventEmitter();
  }

  /** @internal */
  _updateChildError = (errors: JoiError[]) => {
    _.each(errors, (err: JoiError) => {
      const control: AbstractControl = _.get(this.controls, err.path);
      if (control instanceof FormControl) {
        control.setErrors([err]);
      }
    });
  };

  /** @internal */
  _updateValue(): void {
    (this as { value: any }).value = this._reduceValue();
  }

  /** @internal */
  _reduceValue() {
    const form_value: { [k: string]: AbstractControl } = {};
    _.forOwn(this.controls, (c: AbstractControl, name: string) => {
      if (this._isNotExcluded(c)) {
        form_value[name] = c.value;
      }
    });
    return form_value;
  }

  /** @internal */
  _reduceSchema() {
    return _.reduce(this.controls, (result: { [name: string]: JoiSchema }, c: AbstractControl, name: string) => {
      if (c instanceof FormControl && (<FormControlState>c.state).schema) {
        result[name] = (<FormControlState>c.state).schema;
      }
      return result;
    }, {});
  }

  /** @internal */
  _getControlSchema = () => {
    return this.options.schema || Joi.object().keys(this._reduceSchema());
  };

  /** @internal */
  _runJoiValidation() {
    if (this.schema) {

      const validateObject = (this.schema['_type'] !== 'object') ? { [this.name]: this.value } : this.value;
      const validateSchema = (this.schema['_type'] !== 'object') ? { [this.name]: this.schema } : this.schema;


      const result = Joi.validate(validateObject, validateSchema, {
        abortEarly: false,
        stripUnknown: true
      });

      if (!result.error) return null;

      this._updateChildError(<JoiError[]>result.error.details);

      return <JoiError[]>result.error.details;
    }

    return null;
  }


  private _applyFormState = () => {
    if (!this.parent && !this.root) {
      this.setRoot(this);
    }
  };


  /** @internal */
  private _setUpControls(controlConfig: FormGroupState): void {
    (<FormGroupState>this.controls) = {};
    _.forOwn(controlConfig, (c: AbstractControl, name: string) => {
      c.setParent(this);
      c.setRoot(this.root);
      c.name = name;
      this.controls[name] = c;
    });
  }


  /** @internal */
  _throwIfControlMissing(name: string): void {
    if (!_.keys(this.controls).length) {
      throw new Error(`
        There are no form controls registered with this group yet.  If you're using ngModel,
        you may want to check next tick (e.g. use setTimeout).
      `);
    }
    if (!this.controls[name]) {
      throw new Error(`Cannot find form control with name: ${name}.`);
    }
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

