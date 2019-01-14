/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import _ from 'lodash';
import { AbstractControl } from './AbstractControl';
import { EventEmitter } from '@angular/core';
import { FormControl } from './FormControl';
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
 * \@usageNotes
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
 * \@publicApi
 */
export class FormGroup extends AbstractControl {
    /**
     * Creates a new `FormGroup` instance.
     *
     * @param {?} state A collection of child controls. The key for each child is the name
     * under which it is registered.
     *
     * @param {?=} options
     */
    constructor(state, options) {
        super(null, (/** @type {?} */ (options)));
        /**
         * \@description
         * Reports whether the form submission has been triggered.
         */
        this.submitted = false;
        /**
         * \@internal
         */
        this._getControlSchema = () => {
            if (this.options.schema)
                return this.options.schema;
        };
        this._applyFormState = () => {
            if (!this.parent && !this.root) {
                this.setRoot(this);
            }
        };
        this._applyFormState();
        this._setUpControls(state);
        this._coerceToJoiSchema();
        this._initObservables();
        this.updateValueAndValidity({ onlySelf: true, emitEvent: false });
    }
    /**
     * Registers a control with the group's list of controls.
     *
     * This method does not update the value or validity of the control.
     * Use {\@link FormGroup#addControl addControl} instead.
     *
     * @param {?} name The control name to register in the collection
     * @param {?} control Provides the control for the given name
     * @return {?}
     */
    registerControl(name, control) {
        if (this.controls[name])
            return this.controls[name];
        control.setParent(this);
        this.controls[name] = control;
        return control;
    }
    /**
     * Add a control to this group.
     *
     * This method also updates the value and validity of the control.
     *
     * @param {?} name The control name to add to the collection
     * @param {?} control Provides the control for the given name
     * @return {?}
     */
    addControl(name, control) {
        this.registerControl(name, control);
        this.updateValueAndValidity();
    }
    /**
     * Remove a control from this group.
     *
     * @param {?} name The control name to remove from the collection
     * @return {?}
     */
    removeControl(name) {
        ((/** @type {?} */ (this))).controls = (/** @type {?} */ (_.omit(this.controls, [name])));
        this.updateValueAndValidity();
    }
    /**
     * Replace an existing control.
     *
     * @param {?} name The control name to replace in the collection
     * @param {?} control Provides the control for the given name
     * @return {?}
     */
    setControl(name, control) {
        ((/** @type {?} */ (this))).controls = (/** @type {?} */ (_.omit(this.controls, [name])));
        if (control)
            this.registerControl(name, control);
        this.updateValueAndValidity();
    }
    /**
     * Sets the value of the `FormGroup`. It accepts an object that matches
     * the structure of the group, with control names as keys.
     *
     * \@usageNotes
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
     * @param {?} formValue
     * @param {?=} options options options that determine how the control propagates changes
     * and emits events after the value changes.
     * The options options are passed to the {\@link IonarAbstractControl#updateValueAndValidity
     * updateValueAndValidity} method.
     *
     * * `onlySelf`: When true, each change only affects this control, and not its parent. Default is
     * false.
     * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
     * `valueChanges`
     * observables emit events with the latest status and value when the control value is updated.
     * When false, no events are emitted.
     * @return {?}
     */
    setValue(formValue, options = {}) {
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
     * \@usageNotes
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
     * @param {?=} value
     * @param {?=} options options options that determine how the control propagates changes
     * and emits events when the group is reset.
     * * `onlySelf`: When true, each change only affects this control, and not its parent. Default is
     * false.
     * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
     * `valueChanges`
     * observables emit events with the latest status and value when the control is reset.
     * When false, no events are emitted.
     * The options options are passed to the {\@link AbstractControl#updateValueAndValidity
     * updateValueAndValidity} method.
     *
     * @return {?}
     */
    reset(value = {}, options = {}) {
        _.forOwn(this.controls, (c, name) => {
            c.reset(value[name], { onlySelf: true, emitEvent: options.emitEvent });
        });
        ((/** @type {?} */ (this))).submitted = false;
        this.updateValueAndValidity(options);
        if (_.has(this.options, ['submitOnChange']))
            this.submit(true);
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
     * \@usageNotes
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
     * @param {?=} options options options that determine how the control propagates changes
     * and emits events when the group is reset.
     * * `onlySelf`: When true, each change only affects this control, and not its parent. Default is
     * false.
     * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
     * `valueChanges`
     * observables emit events with the latest status and value when the control is reset.
     * When false, no events are emitted.
     * The options options are passed to the {\@link AbstractControl#updateValueAndValidity
     * updateValueAndValidity} method.
     *
     * @return {?}
     */
    clear(options = {}) {
        _.forOwn(this.controls, (c, name) => {
            c.clear({ onlySelf: true, emitEvent: options.emitEvent });
        });
        ((/** @type {?} */ (this))).submitted = false;
        this.updateValueAndValidity(options);
        if (_.has(this.options, ['submitOnChange']))
            this.submit(true);
    }
    /**
     * Retrieves a child control given the control's name or path.
     *
     * \@usageNotes
     * ### Retrieve a nested control
     *
     * For example, to get a `name` control nested within a `person` sub-group:
     *
     * * `this.form.get('person.name');`
     *
     * -OR-
     *
     * * `this.form.get(['person', 'name']);`
     * @param {?} path A dot-delimited string or array of string/number values that define the path to the
     * control.
     *
     * @return {?}
     */
    get(path) {
        if (!path)
            return null;
        return _.get(this.controls, path) || null;
    }
    /**
     * @param {?=} instant
     * @return {?}
     */
    submit(instant = false) {
        if (this.root === this) {
            ((/** @type {?} */ (this))).submitted = true;
            this.updateValueAndValidity();
            this.updateChildValidity();
            ((/** @type {?} */ (this))).ngSubmit.emit({
                value: this.value, instant
            });
        }
    }
    /**
     * @return {?}
     */
    _coerceToJoiSchema() {
        // (<{ schema: JoiSchema }>this).schema = this._mergeSchema() || Joi.object().keys(this._reduceSchema());
        // (<{ schema: JoiSchema }>this).schema = this.options.schema || Joi.object().keys(this._reduceSchema());
    }
    ;
    /**
     * @return {?}
     */
    updateChildValidity() {
        _.forOwn(this.controls, (c, name) => {
            if (c instanceof FormControl)
                c.updateValueAndValidity();
            if (c instanceof FormGroup)
                c.updateChildValidity();
        });
    }
    /**
     * \@internal
     * @return {?}
     */
    _initObservables() {
        ((/** @type {?} */ (this))).valueChanges = new EventEmitter();
        ((/** @type {?} */ (this))).statusChanges = new EventEmitter();
        ((/** @type {?} */ (this))).ngSubmit = new EventEmitter();
    }
    // /** @internal */
    // _updateChildError = (errors: JoiError[]) => {
    //   _.each(errors, (err: JoiError) => {
    //     const control: AbstractControl = _.get(this.controls, err.path);
    //     if (control instanceof FormControl) {
    //       control.setErrors([err]);
    //     }
    //     if(control instanceof FormGroup) {
    //       control._r()
    //     }
    //   });
    // };
    /**
     * \@internal
     * @return {?}
     */
    _updateValue() {
        ((/** @type {?} */ (this))).value = this._reduceValue();
    }
    /**
     * \@internal
     * @return {?}
     */
    _reduceValue() {
        /** @type {?} */
        const form_value = {};
        _.forOwn(this.controls, (c, name) => {
            if (this._isNotExcluded(c)) {
                form_value[name] = c.value;
            }
        });
        return form_value;
    }
    /**
     * \@internal
     * @private
     * @param {?} controlConfig
     * @return {?}
     */
    _setUpControls(controlConfig) {
        ((/** @type {?} */ (this.controls))) = {};
        _.forOwn(controlConfig, (c, name) => {
            c.setParent(this);
            c.setRoot(this.root);
            c.name = name;
            this.controls[name] = c;
        });
    }
    /**
     * \@internal
     * @param {?} name
     * @return {?}
     */
    _throwIfControlMissing(name) {
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
    /**
     * \@internal
     * @return {?}
     */
    _allControlsDisabled() {
        return _.every(_.values(this.controls), (c) => c.disabled);
    }
    /**
     * \@internal
     * @param {?} status
     * @return {?}
     */
    _anyControlsHaveStatus(status) {
        return !!_.find(_.values(this.controls), ['status', status]);
    }
}
if (false) {
    /** @type {?} */
    FormGroup.prototype.ngSubmit;
    /**
     * \@description
     * Reports whether the form submission has been triggered.
     * @type {?}
     */
    FormGroup.prototype.submitted;
    /**
     * \@internal
     * @type {?}
     */
    FormGroup.prototype._getControlSchema;
    /**
     * @type {?}
     * @private
     */
    FormGroup.prototype._applyFormState;
    /* Skipping unhandled member: ;*/
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRm9ybUdyb3VwLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGlvbmFyL2Zvcm0vIiwic291cmNlcyI6WyJjb3JlL21vZGVscy9Gb3JtR3JvdXAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sQ0FBQyxNQUFNLFFBQVEsQ0FBQztBQUN2QixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFcEQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM3QyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBNkU1QyxNQUFNLE9BQU8sU0FBVSxTQUFRLGVBQWU7Ozs7Ozs7OztJQW1CNUMsWUFBWSxLQUFxQixFQUFFLE9BQWdDO1FBQ2pFLEtBQUssQ0FDSCxJQUFJLEVBQ0osbUJBQStCLE9BQU8sRUFBQSxDQUN2QyxDQUFDOzs7OztRQWRZLGNBQVMsR0FBWSxLQUFLLENBQUM7Ozs7UUFxVjNDLHNCQUFpQixHQUFHLEdBQUcsRUFBRTtZQUN2QixJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTTtnQkFBRSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDO1FBQ3RELENBQUMsQ0FBQztRQUdNLG9CQUFlLEdBQUcsR0FBRyxFQUFFO1lBQzdCLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRTtnQkFDOUIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUNwQjtRQUNILENBQUMsQ0FBQztRQS9VQSxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMzQixJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztRQUMxQixJ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USxDQUFDLEVBQUUsQ0FBQyxDQUFrQixFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDOUUsQ0FBQzs7Ozs7O0lBR0Qsc0JBQXNCLENBQUMsTUFBYztRQUVuQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUM7SUFDL0QsQ0FBQztDQUVGOzs7SUE3WUMsNkJBQTRDOzs7Ozs7SUFPNUMsOEJBQTJDOzs7OztJQXFWM0Msc0NBRUU7Ozs7O0lBR0Ysb0NBSUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xyXG5pbXBvcnQgeyBBYnN0cmFjdENvbnRyb2wgfSBmcm9tICcuL0Fic3RyYWN0Q29udHJvbCc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZvcm1Db250cm9sIH0gZnJvbSAnLi9Gb3JtQ29udHJvbCc7XHJcblxyXG5pbXBvcnQgeyBBYnN0cmFjdENvbnRyb2xPcHRpb25zLCBGb3JtR3JvdXBTdGF0ZSB9IGZyb20gJy4uL2ludGVyZmFjZXMvRm9ybSc7XHJcblxyXG5cclxuLyoqXHJcbiAqIFRyYWNrcyB0aGUgdmFsdWUgYW5kIHZhbGlkaXR5IHN0YXRlIG9mIGEgZ3JvdXAgb2YgYEZvcm1Db250cm9sYCBpbnN0YW5jZXMuXHJcbiAqXHJcbiAqIEEgYEZvcm1Hcm91cGAgYWdncmVnYXRlcyB0aGUgdmFsdWVzIG9mIGVhY2ggY2hpbGQgYEZvcm1Db250cm9sYCBpbnRvIG9uZSBvYmplY3QsXHJcbiAqIHdpdGggZWFjaCBjb250cm9sIG5hbWUgYXMgdGhlIGtleS4gIEl0IGNhbGN1bGF0ZXMgaXRzIHN0YXR1cyBieSByZWR1Y2luZyB0aGUgc3RhdHVzIHZhbHVlc1xyXG4gKiBvZiBpdHMgY2hpbGRyZW4uIEZvciBleGFtcGxlLCBpZiBvbmUgb2YgdGhlIGNvbnRyb2xzIGluIGEgZ3JvdXAgaXMgaW52YWxpZCwgdGhlIGVudGlyZVxyXG4gKiBncm91cCBiZWNvbWVzIGludmFsaWQuXHJcbiAqXHJcbiAqIGBGb3JtR3JvdXBgIGlzIG9uZSBvZiB0aGUgdGhyZWUgZnVuZGFtZW50YWwgYnVpbGRpbmcgYmxvY2tzIHVzZWQgdG8gZGVmaW5lIGZvcm1zIGluIEFuZ3VsYXIsXHJcbiAqIGFsb25nIHdpdGggYEZvcm1Db250cm9sYCBhbmQgYEZvcm1BcnJheWAuXHJcbiAqXHJcbiAqIFdoZW4gaW5zdGFudGlhdGluZyBhIGBGb3JtR3JvdXBgLCBwYXNzIGluIGEgY29sbGVjdGlvbiBvZiBjaGlsZCBjb250cm9scyBhcyB0aGUgZmlyc3RcclxuICogYXJndW1lbnQuIFRoZSBrZXkgZm9yIGVhY2ggY2hpbGQgcmVnaXN0ZXJzIHRoZSBuYW1lIGZvciB0aGUgY29udHJvbC5cclxuICpcclxuICogQHVzYWdlTm90ZXNcclxuICpcclxuICogIyMjIENyZWF0ZSBhIGZvcm0gZ3JvdXAgd2l0aCAyIGNvbnRyb2xzXHJcbiAqXHJcbiAqIGBgYFxyXG4gKiBjb25zdCBmb3JtID0gbmV3IEZvcm1Hcm91cCh7XHJcbiAqICAgZmlyc3Q6IG5ldyBGb3JtQ29udHJvbCgnTmFuY3knLCBWYWxpZGF0b3JzLm1pbkxlbmd0aCgyKSksXHJcbiAqICAgbGFzdDogbmV3IEZvcm1Db250cm9sKCdEcmV3JyksXHJcbiAqIH0pO1xyXG4gKlxyXG4gKiBjb25zb2xlLmxvZyhmb3JtLnZhbHVlKTsgICAvLyB7Zmlyc3Q6ICdOYW5jeScsIGxhc3Q7ICdEcmV3J31cclxuICogY29uc29sZS5sb2coZm9ybS5zdGF0dXMpOyAgLy8gJ1ZBTElEJ1xyXG4gKiBgYGBcclxuICpcclxuICogIyMjIENyZWF0ZSBhIGZvcm0gZ3JvdXAgd2l0aCBhIGdyb3VwLWxldmVsIHZhbGlkYXRvclxyXG4gKlxyXG4gKiBZb3UgaW5jbHVkZSBncm91cC1sZXZlbCB2YWxpZGF0b3JzIGFzIHRoZSBzZWNvbmQgYXJnLCBvciBncm91cC1sZXZlbCBhc3luY1xyXG4gKiB2YWxpZGF0b3JzIGFzIHRoZSB0aGlyZCBhcmcuIFRoZXNlIGNvbWUgaW4gaGFuZHkgd2hlbiB5b3Ugd2FudCB0byBwZXJmb3JtIHZhbGlkYXRpb25cclxuICogdGhhdCBjb25zaWRlcnMgdGhlIHZhbHVlIG9mIG1vcmUgdGhhbiBvbmUgY2hpbGQgY29udHJvbC5cclxuICpcclxuICogYGBgXHJcbiAqIGNvbnN0IGZvcm0gPSBuZXcgRm9ybUdyb3VwKHtcclxuICogICBwYXNzd29yZDogbmV3IEZvcm1Db250cm9sKCcnLCBWYWxpZGF0b3JzLm1pbkxlbmd0aCgyKSksXHJcbiAqICAgcGFzc3dvcmRDb25maXJtOiBuZXcgRm9ybUNvbnRyb2woJycsIFZhbGlkYXRvcnMubWluTGVuZ3RoKDIpKSxcclxuICogfSwgcGFzc3dvcmRNYXRjaFZhbGlkYXRvcik7XHJcbiAqXHJcbiAqXHJcbiAqIGZ1bmN0aW9uIHBhc3N3b3JkTWF0Y2hWYWxpZGF0b3IoZzogRm9ybUdyb3VwKSB7XHJcbiAqICAgIHJldHVybiBnLmdldCgncGFzc3dvcmQnKS52YWx1ZSA9PT0gZy5nZXQoJ3Bhc3N3b3JkQ29uZmlybScpLnZhbHVlXHJcbiAqICAgICAgID8gbnVsbCA6IHsnbWlzbWF0Y2gnOiB0cnVlfTtcclxuICogfVxyXG4gKiBgYGBcclxuICpcclxuICogTGlrZSBgRm9ybUNvbnRyb2xgIGluc3RhbmNlcywgeW91IGNob29zZSB0byBwYXNzIGluXHJcbiAqIHZhbGlkYXRvcnMgYW5kIGFzeW5jIHZhbGlkYXRvcnMgYXMgcGFydCBvZiBhbiBvcHRpb25zIG9iamVjdC5cclxuICpcclxuICogYGBgXHJcbiAqIGNvbnN0IGZvcm0gPSBuZXcgRm9ybUdyb3VwKHtcclxuICogICBwYXNzd29yZDogbmV3IEZvcm1Db250cm9sKCcnKVxyXG4gKiAgIHBhc3N3b3JkQ29uZmlybTogbmV3IEZvcm1Db250cm9sKCcnKVxyXG4gKiB9LCB7IHZhbGlkYXRvcnM6IHBhc3N3b3JkTWF0Y2hWYWxpZGF0b3IsIGFzeW5jVmFsaWRhdG9yczogb3RoZXJWYWxpZGF0b3IgfSk7XHJcbiAqIGBgYFxyXG4gKlxyXG4gKiAjIyMgU2V0IHRoZSB1cGRhdGVPbiBwcm9wZXJ0eSBmb3IgYWxsIGNvbnRyb2xzIGluIGEgZm9ybSBncm91cFxyXG4gKlxyXG4gKiBUaGUgb3B0aW9ucyBvYmplY3QgaXMgdXNlZCB0byBzZXQgYSBkZWZhdWx0IHZhbHVlIGZvciBlYWNoIGNoaWxkXHJcbiAqIGNvbnRyb2wncyBgdXBkYXRlT25gIHByb3BlcnR5LiBJZiB5b3Ugc2V0IGB1cGRhdGVPbmAgdG8gYCdibHVyJ2AgYXQgdGhlXHJcbiAqIGdyb3VwIGxldmVsLCBhbGwgY2hpbGQgY29udHJvbHMgZGVmYXVsdCB0byAnYmx1cicsIHVubGVzcyB0aGUgY2hpbGRcclxuICogaGFzIGV4cGxpY2l0bHkgc3BlY2lmaWVkIGEgZGlmZmVyZW50IGB1cGRhdGVPbmAgdmFsdWUuXHJcbiAqXHJcbiAqIGBgYHRzXHJcbiAqIGNvbnN0IGMgPSBuZXcgRm9ybUdyb3VwKHtcclxuICogICBvbmU6IG5ldyBGb3JtQ29udHJvbCgpXHJcbiAqIH0sIHsgdXBkYXRlT246ICdibHVyJyB9KTtcclxuICogYGBgXHJcbiAqXHJcbiAqIEBwdWJsaWNBcGlcclxuICovXHJcbmV4cG9ydCBjbGFzcyBGb3JtR3JvdXAgZXh0ZW5kcyBBYnN0cmFjdENvbnRyb2wge1xyXG5cclxuICBwdWJsaWMgcmVhZG9ubHkgbmdTdWJtaXQ6IEV2ZW50RW1pdHRlcjxhbnk+O1xyXG5cclxuXHJcbiAgLyoqXHJcbiAgICogQGRlc2NyaXB0aW9uXHJcbiAgICogUmVwb3J0cyB3aGV0aGVyIHRoZSBmb3JtIHN1Ym1pc3Npb24gaGFzIGJlZW4gdHJpZ2dlcmVkLlxyXG4gICAqL1xyXG4gIHB1YmxpYyByZWFkb25seSBzdWJtaXR0ZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcblxyXG4gIC8qKlxyXG4gICAqIENyZWF0ZXMgYSBuZXcgYEZvcm1Hcm91cGAgaW5zdGFuY2UuXHJcbiAgICpcclxuICAgKiBAcGFyYW0gc3RhdGUgQSBjb2xsZWN0aW9uIG9mIGNoaWxkIGNvbnRyb2xzLiBUaGUga2V5IGZvciBlYWNoIGNoaWxkIGlzIHRoZSBuYW1lXHJcbiAgICogdW5kZXIgd2hpY2ggaXQgaXMgcmVnaXN0ZXJlZC5cclxuICAgKlxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKHN0YXRlOiBGb3JtR3JvdXBTdGF0ZSwgb3B0aW9ucz86IEFic3RyYWN0Q29udHJvbE9wdGlvbnMpIHtcclxuICAgIHN1cGVyKFxyXG4gICAgICBudWxsLFxyXG4gICAgICA8QWJzdHJhY3RDb250cm9sT3B0aW9ucyB8IG51bGw+b3B0aW9uc1xyXG4gICAgKTtcclxuICAgIHRoaXMuX2FwcGx5Rm9ybVN0YXRlKCk7XHJcbiAgICB0aGlzLl9zZXRVcENvbnRyb2xzKHN0YXRlKTtcclxuICAgIHRoaXMuX2NvZXJjZVRvSm9pU2NoZW1hKCk7XHJcbiAgICB0aGlzLl9pbml0T2JzZXJ2YWJsZXMoKTtcclxuXHJcbiAgICB0aGlzLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkoeyBvbmx5U2VsZjogdHJ1ZSwgZW1pdEV2ZW50OiBmYWxzZSB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJlZ2lzdGVycyBhIGNvbnRyb2wgd2l0aCB0aGUgZ3JvdXAncyBsaXN0IG9mIGNvbnRyb2xzLlxyXG4gICAqXHJcbiAgICogVGhpcyBtZXRob2QgZG9lcyBub3QgdXBkYXRlIHRoZSB2YWx1ZSBvciB2YWxpZGl0eSBvZiB0aGUgY29udHJvbC5cclxuICAgKiBVc2Uge0BsaW5rIEZvcm1Hcm91cCNhZGRDb250cm9sIGFkZENvbnRyb2x9IGluc3RlYWQuXHJcbiAgICpcclxuICAgKiBAcGFyYW0gbmFtZSBUaGUgY29udHJvbCBuYW1lIHRvIHJlZ2lzdGVyIGluIHRoZSBjb2xsZWN0aW9uXHJcbiAgICogQHBhcmFtIGNvbnRyb2wgUHJvdmlkZXMgdGhlIGNvbnRyb2wgZm9yIHRoZSBnaXZlbiBuYW1lXHJcbiAgICovXHJcbiAgcmVnaXN0ZXJDb250cm9sKG5hbWU6IHN0cmluZywgY29udHJvbDogQWJzdHJhY3RDb250cm9sKTogQWJzdHJhY3RDb250cm9sIHtcclxuICAgIGlmICh0aGlzLmNvbnRyb2xzW25hbWVdKSByZXR1cm4gdGhpcy5jb250cm9sc1tuYW1lXTtcclxuICAgIGNvbnRyb2wuc2V0UGFyZW50KHRoaXMpO1xyXG4gICAgdGhpcy5jb250cm9sc1tuYW1lXSA9IGNvbnRyb2w7XHJcbiAgICByZXR1cm4gY29udHJvbDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEFkZCBhIGNvbnRyb2wgdG8gdGhpcyBncm91cC5cclxuICAgKlxyXG4gICAqIFRoaXMgbWV0aG9kIGFsc28gdXBkYXRlcyB0aGUgdmFsdWUgYW5kIHZhbGlkaXR5IG9mIHRoZSBjb250cm9sLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIG5hbWUgVGhlIGNvbnRyb2wgbmFtZSB0byBhZGQgdG8gdGhlIGNvbGxlY3Rpb25cclxuICAgKiBAcGFyYW0gY29udHJvbCBQcm92aWRlcyB0aGUgY29udHJvbCBmb3IgdGhlIGdpdmVuIG5hbWVcclxuICAgKi9cclxuICBhZGRDb250cm9sKG5hbWU6IHN0cmluZywgY29udHJvbDogQWJzdHJhY3RDb250cm9sKTogdm9pZCB7XHJcbiAgICB0aGlzLnJlZ2lzdGVyQ29udHJvbChuYW1lLCBjb250cm9sKTtcclxuICAgIHRoaXMudXBkYXRlVmFsdWVBbmRWYWxpZGl0eSgpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmVtb3ZlIGEgY29udHJvbCBmcm9tIHRoaXMgZ3JvdXAuXHJcbiAgICpcclxuICAgKiBAcGFyYW0gbmFtZSBUaGUgY29udHJvbCBuYW1lIHRvIHJlbW92ZSBmcm9tIHRoZSBjb2xsZWN0aW9uXHJcbiAgICovXHJcbiAgcmVtb3ZlQ29udHJvbChuYW1lOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICg8eyBjb250cm9sczogRm9ybUdyb3VwU3RhdGUgfT50aGlzKS5jb250cm9scyA9IDxGb3JtR3JvdXBTdGF0ZT5fLm9taXQodGhpcy5jb250cm9scywgW25hbWVdKTtcclxuXHJcbiAgICB0aGlzLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkoKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJlcGxhY2UgYW4gZXhpc3RpbmcgY29udHJvbC5cclxuICAgKlxyXG4gICAqIEBwYXJhbSBuYW1lIFRoZSBjb250cm9sIG5hbWUgdG8gcmVwbGFjZSBpbiB0aGUgY29sbGVjdGlvblxyXG4gICAqIEBwYXJhbSBjb250cm9sIFByb3ZpZGVzIHRoZSBjb250cm9sIGZvciB0aGUgZ2l2ZW4gbmFtZVxyXG4gICAqL1xyXG4gIHNldENvbnRyb2wobmFtZTogc3RyaW5nLCBjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpOiB2b2lkIHtcclxuICAgICg8eyBjb250cm9sczogRm9ybUdyb3VwU3RhdGUgfT50aGlzKS5jb250cm9scyA9IDxGb3JtR3JvdXBTdGF0ZT5fLm9taXQodGhpcy5jb250cm9scywgW25hbWVdKTtcclxuICAgIGlmIChjb250cm9sKSB0aGlzLnJlZ2lzdGVyQ29udHJvbChuYW1lLCBjb250cm9sKTtcclxuICAgIHRoaXMudXBkYXRlVmFsdWVBbmRWYWxpZGl0eSgpO1xyXG5cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFNldHMgdGhlIHZhbHVlIG9mIHRoZSBgRm9ybUdyb3VwYC4gSXQgYWNjZXB0cyBhbiBvYmplY3QgdGhhdCBtYXRjaGVzXHJcbiAgICogdGhlIHN0cnVjdHVyZSBvZiB0aGUgZ3JvdXAsIHdpdGggY29udHJvbCBuYW1lcyBhcyBrZXlzLlxyXG4gICAqXHJcbiAgICogQHVzYWdlTm90ZXNcclxuICAgKiAjIyMgU2V0IHRoZSBjb21wbGV0ZSB2YWx1ZSBmb3IgdGhlIGZvcm0gZ3JvdXBcclxuICAgKlxyXG4gICAqIGBgYFxyXG4gICAqIGNvbnN0IGZvcm0gPSBuZXcgRm9ybUdyb3VwKHtcclxuICAgKiAgIGZpcnN0OiBuZXcgRm9ybUNvbnRyb2woKSxcclxuICAgKiAgIGxhc3Q6IG5ldyBGb3JtQ29udHJvbCgpXHJcbiAgICogfSk7XHJcbiAgICpcclxuICAgKiBjb25zb2xlLmxvZyhmb3JtLnZhbHVlKTsgICAvLyB7Zmlyc3Q6IG51bGwsIGxhc3Q6IG51bGx9XHJcbiAgICpcclxuICAgKiBmb3JtLnNldFZhbHVlKHtmaXJzdDogJ05hbmN5JywgbGFzdDogJ0RyZXcnfSk7XHJcbiAgICogY29uc29sZS5sb2coZm9ybS52YWx1ZSk7ICAgLy8ge2ZpcnN0OiAnTmFuY3knLCBsYXN0OiAnRHJldyd9XHJcbiAgICogYGBgXHJcbiAgICpcclxuICAgKiBAdGhyb3dzIFdoZW4gc3RyaWN0IGNoZWNrcyBmYWlsLCBzdWNoIGFzIHNldHRpbmcgdGhlIHZhbHVlIG9mIGEgY29udHJvbFxyXG4gICAqIHRoYXQgZG9lc24ndCBleGlzdCBvciBpZiB5b3UgZXhjbHVkaW5nIHRoZSB2YWx1ZSBvZiBhIGNvbnRyb2wuXHJcbiAgICpcclxuICAgKiBAcGFyYW0gdmFsdWUgVGhlIG5ldyB2YWx1ZSBmb3IgdGhlIGNvbnRyb2wgdGhhdCBtYXRjaGVzIHRoZSBzdHJ1Y3R1cmUgb2YgdGhlIGdyb3VwLlxyXG4gICAqIEBwYXJhbSBvcHRpb25zIG9wdGlvbnMgb3B0aW9ucyB0aGF0IGRldGVybWluZSBob3cgdGhlIGNvbnRyb2wgcHJvcGFnYXRlcyBjaGFuZ2VzXHJcbiAgICogYW5kIGVtaXRzIGV2ZW50cyBhZnRlciB0aGUgdmFsdWUgY2hhbmdlcy5cclxuICAgKiBUaGUgb3B0aW9ucyBvcHRpb25zIGFyZSBwYXNzZWQgdG8gdGhlIHtAbGluayBJb25hckFic3RyYWN0Q29udHJvbCN1cGRhdGVWYWx1ZUFuZFZhbGlkaXR5XHJcbiAgICogdXBkYXRlVmFsdWVBbmRWYWxpZGl0eX0gbWV0aG9kLlxyXG4gICAqXHJcbiAgICogKiBgb25seVNlbGZgOiBXaGVuIHRydWUsIGVhY2ggY2hhbmdlIG9ubHkgYWZmZWN0cyB0aGlzIGNvbnRyb2wsIGFuZCBub3QgaXRzIHBhcmVudC4gRGVmYXVsdCBpc1xyXG4gICAqIGZhbHNlLlxyXG4gICAqICogYGVtaXRFdmVudGA6IFdoZW4gdHJ1ZSBvciBub3Qgc3VwcGxpZWQgKHRoZSBkZWZhdWx0KSwgYm90aCB0aGUgYHN0YXR1c0NoYW5nZXNgIGFuZFxyXG4gICAqIGB2YWx1ZUNoYW5nZXNgXHJcbiAgICogb2JzZXJ2YWJsZXMgZW1pdCBldmVudHMgd2l0aCB0aGUgbGF0ZXN0IHN0YXR1cyBhbmQgdmFsdWUgd2hlbiB0aGUgY29udHJvbCB2YWx1ZSBpcyB1cGRhdGVkLlxyXG4gICAqIFdoZW4gZmFsc2UsIG5vIGV2ZW50cyBhcmUgZW1pdHRlZC5cclxuICAgKi9cclxuICBzZXRWYWx1ZShmb3JtVmFsdWU6IHsgW2tleTogc3RyaW5nXTogYW55IH0sIG9wdGlvbnM6IHsgb25seVNlbGY/OiBib29sZWFuLCBlbWl0RXZlbnQ/OiBib29sZWFuIH0gPSB7fSk6XHJcbiAgICB2b2lkIHtcclxuXHJcbiAgICBfLmZvck93bihmb3JtVmFsdWUsICh2YWx1ZSwgbmFtZSkgPT4ge1xyXG4gICAgICB0aGlzLl90aHJvd0lmQ29udHJvbE1pc3NpbmcobmFtZSk7XHJcbiAgICAgIHRoaXMuY29udHJvbHNbbmFtZV0uc2V0VmFsdWUodmFsdWUsIHsgb25seVNlbGY6IHRydWUsIGVtaXRFdmVudDogb3B0aW9ucy5lbWl0RXZlbnQgfSk7XHJcbiAgICB9KTtcclxuXHJcblxyXG4gICAgdGhpcy51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KG9wdGlvbnMpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmVzZXRzIHRoZSBgRm9ybUdyb3VwYCwgbWFya3MgYWxsIGRlc2NlbmRhbnRzIGFyZSBtYXJrZWQgYHByaXN0aW5lYCBhbmQgYHVudG91Y2hlZGAsIGFuZFxyXG4gICAqIHRoZSB2YWx1ZSBvZiBhbGwgZGVzY2VuZGFudHMgdG8gbnVsbC5cclxuICAgKlxyXG4gICAqIFlvdSByZXNldCB0byBhIHNwZWNpZmljIGZvcm0gc3RhdGUgYnkgcGFzc2luZyBpbiBhIG1hcCBvZiBzdGF0ZXNcclxuICAgKiB0aGF0IG1hdGNoZXMgdGhlIHN0cnVjdHVyZSBvZiB5b3VyIGZvcm0sIHdpdGggY29udHJvbCBuYW1lcyBhcyBrZXlzLiBUaGUgc3RhdGVcclxuICAgKiBpcyBhIHN0YW5kYWxvbmUgdmFsdWUgb3IgYSBmb3JtIHN0YXRlIG9iamVjdCB3aXRoIGJvdGggYSB2YWx1ZSBhbmQgYSBkaXNhYmxlZFxyXG4gICAqIHN0YXR1cy5cclxuICAgKlxyXG4gICAqIEBwYXJhbSBmb3JtU3RhdGUgUmVzZXRzIHRoZSBjb250cm9sIHdpdGggYW4gaW5pdGlhbCB2YWx1ZSxcclxuICAgKiBvciBhbiBvYmplY3QgdGhhdCBkZWZpbmVzIHRoZSBpbml0aWFsIHZhbHVlIGFuZCBkaXNhYmxlZCBzdGF0ZS5cclxuICAgKlxyXG4gICAqIEBwYXJhbSBvcHRpb25zIG9wdGlvbnMgb3B0aW9ucyB0aGF0IGRldGVybWluZSBob3cgdGhlIGNvbnRyb2wgcHJvcGFnYXRlcyBjaGFuZ2VzXHJcbiAgICogYW5kIGVtaXRzIGV2ZW50cyB3aGVuIHRoZSBncm91cCBpcyByZXNldC5cclxuICAgKiAqIGBvbmx5U2VsZmA6IFdoZW4gdHJ1ZSwgZWFjaCBjaGFuZ2Ugb25seSBhZmZlY3RzIHRoaXMgY29udHJvbCwgYW5kIG5vdCBpdHMgcGFyZW50LiBEZWZhdWx0IGlzXHJcbiAgICogZmFsc2UuXHJcbiAgICogKiBgZW1pdEV2ZW50YDogV2hlbiB0cnVlIG9yIG5vdCBzdXBwbGllZCAodGhlIGRlZmF1bHQpLCBib3RoIHRoZSBgc3RhdHVzQ2hhbmdlc2AgYW5kXHJcbiAgICogYHZhbHVlQ2hhbmdlc2BcclxuICAgKiBvYnNlcnZhYmxlcyBlbWl0IGV2ZW50cyB3aXRoIHRoZSBsYXRlc3Qgc3RhdHVzIGFuZCB2YWx1ZSB3aGVuIHRoZSBjb250cm9sIGlzIHJlc2V0LlxyXG4gICAqIFdoZW4gZmFsc2UsIG5vIGV2ZW50cyBhcmUgZW1pdHRlZC5cclxuICAgKiBUaGUgb3B0aW9ucyBvcHRpb25zIGFyZSBwYXNzZWQgdG8gdGhlIHtAbGluayBBYnN0cmFjdENvbnRyb2wjdXBkYXRlVmFsdWVBbmRWYWxpZGl0eVxyXG4gICAqIHVwZGF0ZVZhbHVlQW5kVmFsaWRpdHl9IG1ldGhvZC5cclxuICAgKlxyXG4gICAqIEB1c2FnZU5vdGVzXHJcbiAgICpcclxuICAgKiAjIyMgUmVzZXQgdGhlIGZvcm0gZ3JvdXAgdmFsdWVzXHJcbiAgICpcclxuICAgKiBgYGB0c1xyXG4gICAqIGNvbnN0IGZvcm0gPSBuZXcgRm9ybUdyb3VwKHtcclxuICAgKiAgIGZpcnN0OiBuZXcgRm9ybUNvbnRyb2woJ2ZpcnN0IG5hbWUnKSxcclxuICAgKiAgIGxhc3Q6IG5ldyBGb3JtQ29udHJvbCgnbGFzdCBuYW1lJylcclxuICAgKiB9KTtcclxuICAgKlxyXG4gICAqIGNvbnNvbGUubG9nKGZvcm0udmFsdWUpOyAgLy8ge2ZpcnN0OiAnZmlyc3QgbmFtZScsIGxhc3Q6ICdsYXN0IG5hbWUnfVxyXG4gICAqXHJcbiAgICogZm9ybS5yZXNldCh7IGZpcnN0OiAnbmFtZScsIGxhc3Q6ICdsYXN0IG5hbWUnIH0pO1xyXG4gICAqXHJcbiAgICogY29uc29sZS5sb2coZm9ybS52YWx1ZSk7ICAvLyB7Zmlyc3Q6ICduYW1lJywgbGFzdDogJ2xhc3QgbmFtZSd9XHJcbiAgICogYGBgXHJcbiAgICpcclxuICAgKiAjIyMgUmVzZXQgdGhlIGZvcm0gZ3JvdXAgdmFsdWVzIGFuZCBkaXNhYmxlZCBzdGF0dXNcclxuICAgKlxyXG4gICAqIGBgYFxyXG4gICAqIGNvbnN0IGZvcm0gPSBuZXcgRm9ybUdyb3VwKHtcclxuICAgKiAgIGZpcnN0OiBuZXcgRm9ybUNvbnRyb2woJ2ZpcnN0IG5hbWUnKSxcclxuICAgKiAgIGxhc3Q6IG5ldyBGb3JtQ29udHJvbCgnbGFzdCBuYW1lJylcclxuICAgKiB9KTtcclxuICAgKlxyXG4gICAqIGZvcm0ucmVzZXQoe1xyXG4gICAqICAgZmlyc3Q6IHt2YWx1ZTogJ25hbWUnLCBkaXNhYmxlZDogdHJ1ZX0sXHJcbiAgICogICBsYXN0OiAnbGFzdCdcclxuICAgKiB9KTtcclxuICAgKlxyXG4gICAqIGNvbnNvbGUubG9nKHRoaXMuZm9ybS52YWx1ZSk7ICAvLyB7Zmlyc3Q6ICduYW1lJywgbGFzdDogJ2xhc3QgbmFtZSd9XHJcbiAgICogY29uc29sZS5sb2codGhpcy5mb3JtLmdldCgnZmlyc3QnKS5zdGF0dXMpOyAgLy8gJ0RJU0FCTEVEJ1xyXG4gICAqIGBgYFxyXG4gICAqL1xyXG4gIHJlc2V0KHZhbHVlOiBhbnkgPSB7fSwgb3B0aW9uczogeyBvbmx5U2VsZj86IGJvb2xlYW4sIGVtaXRFdmVudD86IGJvb2xlYW4gfSA9IHt9KTogdm9pZCB7XHJcbiAgICBfLmZvck93bih0aGlzLmNvbnRyb2xzLCAoYzogQWJzdHJhY3RDb250cm9sLCBuYW1lOiBzdHJpbmcpID0+IHtcclxuICAgICAgYy5yZXNldCh2YWx1ZVtuYW1lXSwgeyBvbmx5U2VsZjogdHJ1ZSwgZW1pdEV2ZW50OiBvcHRpb25zLmVtaXRFdmVudCB9KTtcclxuICAgIH0pO1xyXG4gICAgKHRoaXMgYXMgeyBzdWJtaXR0ZWQ6IEJvb2xlYW4gfSkuc3VibWl0dGVkID0gZmFsc2U7XHJcbiAgICB0aGlzLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkob3B0aW9ucyk7XHJcbiAgICBpZiAoXy5oYXModGhpcy5vcHRpb25zLCBbJ3N1Ym1pdE9uQ2hhbmdlJ10pKSB0aGlzLnN1Ym1pdCh0cnVlKTtcclxuXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDbGVhciB0aGUgYEZvcm1Hcm91cGAsIG1hcmtzIGFsbCBkZXNjZW5kYW50cyBhcmUgbWFya2VkIGBwcmlzdGluZWAgYW5kIGB1bnRvdWNoZWRgLCBhbmRcclxuICAgKiB0aGUgdmFsdWUgb2YgYWxsIGRlc2NlbmRhbnRzIHRvIG51bGwuXHJcbiAgICpcclxuICAgKiBZb3UgcmVzZXQgdG8gYSBzcGVjaWZpYyBmb3JtIHN0YXRlIGJ5IHBhc3NpbmcgaW4gYSBtYXAgb2Ygc3RhdGVzXHJcbiAgICogdGhhdCBtYXRjaGVzIHRoZSBzdHJ1Y3R1cmUgb2YgeW91ciBmb3JtLCB3aXRoIGNvbnRyb2wgbmFtZXMgYXMga2V5cy4gVGhlIHN0YXRlXHJcbiAgICogaXMgYSBzdGFuZGFsb25lIHZhbHVlIG9yIGEgZm9ybSBzdGF0ZSBvYmplY3Qgd2l0aCBib3RoIGEgdmFsdWUgYW5kIGEgZGlzYWJsZWRcclxuICAgKiBzdGF0dXMuXHJcbiAgICpcclxuICAgKiBAcGFyYW0gZm9ybVN0YXRlIFJlc2V0cyB0aGUgY29udHJvbCB3aXRoIGFuIGluaXRpYWwgdmFsdWUsXHJcbiAgICogb3IgYW4gb2JqZWN0IHRoYXQgZGVmaW5lcyB0aGUgaW5pdGlhbCB2YWx1ZSBhbmQgZGlzYWJsZWQgc3RhdGUuXHJcbiAgICpcclxuICAgKiBAcGFyYW0gb3B0aW9ucyBvcHRpb25zIG9wdGlvbnMgdGhhdCBkZXRlcm1pbmUgaG93IHRoZSBjb250cm9sIHByb3BhZ2F0ZXMgY2hhbmdlc1xyXG4gICAqIGFuZCBlbWl0cyBldmVudHMgd2hlbiB0aGUgZ3JvdXAgaXMgcmVzZXQuXHJcbiAgICogKiBgb25seVNlbGZgOiBXaGVuIHRydWUsIGVhY2ggY2hhbmdlIG9ubHkgYWZmZWN0cyB0aGlzIGNvbnRyb2wsIGFuZCBub3QgaXRzIHBhcmVudC4gRGVmYXVsdCBpc1xyXG4gICAqIGZhbHNlLlxyXG4gICAqICogYGVtaXRFdmVudGA6IFdoZW4gdHJ1ZSBvciBub3Qgc3VwcGxpZWQgKHRoZSBkZWZhdWx0KSwgYm90aCB0aGUgYHN0YXR1c0NoYW5nZXNgIGFuZFxyXG4gICAqIGB2YWx1ZUNoYW5nZXNgXHJcbiAgICogb2JzZXJ2YWJsZXMgZW1pdCBldmVudHMgd2l0aCB0aGUgbGF0ZXN0IHN0YXR1cyBhbmQgdmFsdWUgd2hlbiB0aGUgY29udHJvbCBpcyByZXNldC5cclxuICAgKiBXaGVuIGZhbHNlLCBubyBldmVudHMgYXJlIGVtaXR0ZWQuXHJcbiAgICogVGhlIG9wdGlvbnMgb3B0aW9ucyBhcmUgcGFzc2VkIHRvIHRoZSB7QGxpbmsgQWJzdHJhY3RDb250cm9sI3VwZGF0ZVZhbHVlQW5kVmFsaWRpdHlcclxuICAgKiB1cGRhdGVWYWx1ZUFuZFZhbGlkaXR5fSBtZXRob2QuXHJcbiAgICpcclxuICAgKiBAdXNhZ2VOb3Rlc1xyXG4gICAqXHJcbiAgICogIyMjIFJlc2V0IHRoZSBmb3JtIGdyb3VwIHZhbHVlc1xyXG4gICAqXHJcbiAgICogYGBgdHNcclxuICAgKiBjb25zdCBmb3JtID0gbmV3IEZvcm1Hcm91cCh7XHJcbiAgICogICBmaXJzdDogbmV3IEZvcm1Db250cm9sKCdmaXJzdCBuYW1lJyksXHJcbiAgICogICBsYXN0OiBuZXcgRm9ybUNvbnRyb2woJ2xhc3QgbmFtZScpXHJcbiAgICogfSk7XHJcbiAgICpcclxuICAgKiBjb25zb2xlLmxvZyhmb3JtLnZhbHVlKTsgIC8vIHtmaXJzdDogJ2ZpcnN0IG5hbWUnLCBsYXN0OiAnbGFzdCBuYW1lJ31cclxuICAgKlxyXG4gICAqIGZvcm0ucmVzZXQoeyBmaXJzdDogJ25hbWUnLCBsYXN0OiAnbGFzdCBuYW1lJyB9KTtcclxuICAgKlxyXG4gICAqIGNvbnNvbGUubG9nKGZvcm0udmFsdWUpOyAgLy8ge2ZpcnN0OiAnbmFtZScsIGxhc3Q6ICdsYXN0IG5hbWUnfVxyXG4gICAqIGBgYFxyXG4gICAqXHJcbiAgICogIyMjIFJlc2V0IHRoZSBmb3JtIGdyb3VwIHZhbHVlcyBhbmQgZGlzYWJsZWQgc3RhdHVzXHJcbiAgICpcclxuICAgKiBgYGBcclxuICAgKiBjb25zdCBmb3JtID0gbmV3IEZvcm1Hcm91cCh7XHJcbiAgICogICBmaXJzdDogbmV3IEZvcm1Db250cm9sKCdmaXJzdCBuYW1lJyksXHJcbiAgICogICBsYXN0OiBuZXcgRm9ybUNvbnRyb2woJ2xhc3QgbmFtZScpXHJcbiAgICogfSk7XHJcbiAgICpcclxuICAgKiBmb3JtLnJlc2V0KHtcclxuICAgKiAgIGZpcnN0OiB7dmFsdWU6ICduYW1lJywgZGlzYWJsZWQ6IHRydWV9LFxyXG4gICAqICAgbGFzdDogJ2xhc3QnXHJcbiAgICogfSk7XHJcbiAgICpcclxuICAgKiBjb25zb2xlLmxvZyh0aGlzLmZvcm0udmFsdWUpOyAgLy8ge2ZpcnN0OiAnbmFtZScsIGxhc3Q6ICdsYXN0IG5hbWUnfVxyXG4gICAqIGNvbnNvbGUubG9nKHRoaXMuZm9ybS5nZXQoJ2ZpcnN0Jykuc3RhdHVzKTsgIC8vICdESVNBQkxFRCdcclxuICAgKiBgYGBcclxuICAgKi9cclxuICBjbGVhcihvcHRpb25zOiB7IG9ubHlTZWxmPzogYm9vbGVhbiwgZW1pdEV2ZW50PzogYm9vbGVhbiB9ID0ge30pOiB2b2lkIHtcclxuICAgIF8uZm9yT3duKHRoaXMuY29udHJvbHMsIChjOiBBYnN0cmFjdENvbnRyb2wsIG5hbWU6IHN0cmluZykgPT4ge1xyXG4gICAgICBjLmNsZWFyKHsgb25seVNlbGY6IHRydWUsIGVtaXRFdmVudDogb3B0aW9ucy5lbWl0RXZlbnQgfSk7XHJcbiAgICB9KTtcclxuICAgICh0aGlzIGFzIHsgc3VibWl0dGVkOiBCb29sZWFuIH0pLnN1Ym1pdHRlZCA9IGZhbHNlO1xyXG4gICAgdGhpcy51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KG9wdGlvbnMpO1xyXG4gICAgaWYgKF8uaGFzKHRoaXMub3B0aW9ucywgWydzdWJtaXRPbkNoYW5nZSddKSkgdGhpcy5zdWJtaXQodHJ1ZSk7XHJcbiAgfVxyXG5cclxuXHJcbiAgLyoqXHJcbiAgICogUmV0cmlldmVzIGEgY2hpbGQgY29udHJvbCBnaXZlbiB0aGUgY29udHJvbCdzIG5hbWUgb3IgcGF0aC5cclxuICAgKlxyXG4gICAqIEBwYXJhbSBwYXRoIEEgZG90LWRlbGltaXRlZCBzdHJpbmcgb3IgYXJyYXkgb2Ygc3RyaW5nL251bWJlciB2YWx1ZXMgdGhhdCBkZWZpbmUgdGhlIHBhdGggdG8gdGhlXHJcbiAgICogY29udHJvbC5cclxuICAgKlxyXG4gICAqIEB1c2FnZU5vdGVzXHJcbiAgICogIyMjIFJldHJpZXZlIGEgbmVzdGVkIGNvbnRyb2xcclxuICAgKlxyXG4gICAqIEZvciBleGFtcGxlLCB0byBnZXQgYSBgbmFtZWAgY29udHJvbCBuZXN0ZWQgd2l0aGluIGEgYHBlcnNvbmAgc3ViLWdyb3VwOlxyXG4gICAqXHJcbiAgICogKiBgdGhpcy5mb3JtLmdldCgncGVyc29uLm5hbWUnKTtgXHJcbiAgICpcclxuICAgKiAtT1ItXHJcbiAgICpcclxuICAgKiAqIGB0aGlzLmZvcm0uZ2V0KFsncGVyc29uJywgJ25hbWUnXSk7YFxyXG4gICAqL1xyXG4gIGdldChwYXRoOiBzdHJpbmdbXSB8IHN0cmluZyB8IG51bGwpOiB7IFtuYW1lOiBzdHJpbmddOiBBYnN0cmFjdENvbnRyb2wgfSB8IEFic3RyYWN0Q29udHJvbFtdIHwgQWJzdHJhY3RDb250cm9sIHwgbnVsbCB7XHJcbiAgICBpZiAoIXBhdGgpIHJldHVybiBudWxsO1xyXG4gICAgcmV0dXJuIF8uZ2V0KHRoaXMuY29udHJvbHMsIHBhdGgpIHx8IG51bGw7XHJcbiAgfVxyXG5cclxuICBzdWJtaXQoaW5zdGFudDogYm9vbGVhbiA9IGZhbHNlKTogdm9pZCB7XHJcblxyXG4gICAgaWYgKHRoaXMucm9vdCA9PT0gdGhpcykge1xyXG4gICAgICAodGhpcyBhcyB7IHN1Ym1pdHRlZDogQm9vbGVhbiB9KS5zdWJtaXR0ZWQgPSB0cnVlO1xyXG4gICAgICB0aGlzLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkoKTtcclxuICAgICAgdGhpcy51cGRhdGVDaGlsZFZhbGlkaXR5KCk7XHJcbiAgICAgICh0aGlzIGFzIHsgbmdTdWJtaXQ6IEV2ZW50RW1pdHRlcjxhbnk+IH0pLm5nU3VibWl0LmVtaXQoe1xyXG4gICAgICAgIHZhbHVlOiB0aGlzLnZhbHVlLCBpbnN0YW50XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgX2NvZXJjZVRvSm9pU2NoZW1hKCkge1xyXG4gICAgLy8gKDx7IHNjaGVtYTogSm9pU2NoZW1hIH0+dGhpcykuc2NoZW1hID0gdGhpcy5fbWVyZ2VTY2hlbWEoKSB8fCBKb2kub2JqZWN0KCkua2V5cyh0aGlzLl9yZWR1Y2VTY2hlbWEoKSk7XHJcbiAgICAvLyAoPHsgc2NoZW1hOiBKb2lTY2hlbWEgfT50aGlzKS5zY2hlbWEgPSB0aGlzLm9wdGlvbnMuc2NoZW1hIHx8IEpvaS5vYmplY3QoKS5rZXlzKHRoaXMuX3JlZHVjZVNjaGVtYSgpKTtcclxuICB9O1xyXG5cclxuXHJcbiAgdXBkYXRlQ2hpbGRWYWxpZGl0eSgpIHtcclxuICAgIF8uZm9yT3duKHRoaXMuY29udHJvbHMsIChjOiBBYnN0cmFjdENvbnRyb2wsIG5hbWU6IHN0cmluZykgPT4ge1xyXG4gICAgICBpZiAoYyBpbnN0YW5jZW9mIEZvcm1Db250cm9sKSBjLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkoKTtcclxuICAgICAgaWYgKGMgaW5zdGFuY2VvZiBGb3JtR3JvdXApIGMudXBkYXRlQ2hpbGRWYWxpZGl0eSgpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKiogQGludGVybmFsICovXHJcbiAgX2luaXRPYnNlcnZhYmxlcygpIHtcclxuICAgICh0aGlzIGFzIHsgdmFsdWVDaGFuZ2VzOiBPYnNlcnZhYmxlPGFueT4gfSkudmFsdWVDaGFuZ2VzID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gICAgKHRoaXMgYXMgeyBzdGF0dXNDaGFuZ2VzOiBPYnNlcnZhYmxlPGFueT4gfSkuc3RhdHVzQ2hhbmdlcyA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICAgICh0aGlzIGFzIHsgbmdTdWJtaXQ6IE9ic2VydmFibGU8YW55PiB9KS5uZ1N1Ym1pdCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICB9XHJcblxyXG4gIC8vIC8qKiBAaW50ZXJuYWwgKi9cclxuICAvLyBfdXBkYXRlQ2hpbGRFcnJvciA9IChlcnJvcnM6IEpvaUVycm9yW10pID0+IHtcclxuICAvLyAgIF8uZWFjaChlcnJvcnMsIChlcnI6IEpvaUVycm9yKSA9PiB7XHJcbiAgLy8gICAgIGNvbnN0IGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCA9IF8uZ2V0KHRoaXMuY29udHJvbHMsIGVyci5wYXRoKTtcclxuICAvLyAgICAgaWYgKGNvbnRyb2wgaW5zdGFuY2VvZiBGb3JtQ29udHJvbCkge1xyXG4gIC8vICAgICAgIGNvbnRyb2wuc2V0RXJyb3JzKFtlcnJdKTtcclxuICAvLyAgICAgfVxyXG4gIC8vICAgICBpZihjb250cm9sIGluc3RhbmNlb2YgRm9ybUdyb3VwKSB7XHJcbiAgLy8gICAgICAgY29udHJvbC5fcigpXHJcbiAgLy8gICAgIH1cclxuICAvLyAgIH0pO1xyXG4gIC8vIH07XHJcblxyXG4gIC8qKiBAaW50ZXJuYWwgKi9cclxuICBfdXBkYXRlVmFsdWUoKTogdm9pZCB7XHJcbiAgICAodGhpcyBhcyB7IHZhbHVlOiBhbnkgfSkudmFsdWUgPSB0aGlzLl9yZWR1Y2VWYWx1ZSgpO1xyXG4gIH1cclxuXHJcbiAgLyoqIEBpbnRlcm5hbCAqL1xyXG4gIF9yZWR1Y2VWYWx1ZSgpIHtcclxuICAgIGNvbnN0IGZvcm1fdmFsdWU6IHsgW2s6IHN0cmluZ106IEFic3RyYWN0Q29udHJvbCB9ID0ge307XHJcbiAgICBfLmZvck93bih0aGlzLmNvbnRyb2xzLCAoYzogQWJzdHJhY3RDb250cm9sLCBuYW1lOiBzdHJpbmcpID0+IHtcclxuICAgICAgaWYgKHRoaXMuX2lzTm90RXhjbHVkZWQoYykpIHtcclxuICAgICAgICBmb3JtX3ZhbHVlW25hbWVdID0gYy52YWx1ZTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gZm9ybV92YWx1ZTtcclxuICB9XHJcblxyXG4gIC8qKiBAaW50ZXJuYWwgKi9cclxuICBfZ2V0Q29udHJvbFNjaGVtYSA9ICgpID0+IHtcclxuICAgIGlmICh0aGlzLm9wdGlvbnMuc2NoZW1hKSByZXR1cm4gdGhpcy5vcHRpb25zLnNjaGVtYTtcclxuICB9O1xyXG5cclxuXHJcbiAgcHJpdmF0ZSBfYXBwbHlGb3JtU3RhdGUgPSAoKSA9PiB7XHJcbiAgICBpZiAoIXRoaXMucGFyZW50ICYmICF0aGlzLnJvb3QpIHtcclxuICAgICAgdGhpcy5zZXRSb290KHRoaXMpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG5cclxuICAvKiogQGludGVybmFsICovXHJcbiAgcHJpdmF0ZSBfc2V0VXBDb250cm9scyhjb250cm9sQ29uZmlnOiBGb3JtR3JvdXBTdGF0ZSk6IHZvaWQge1xyXG4gICAgKDxGb3JtR3JvdXBTdGF0ZT50aGlzLmNvbnRyb2xzKSA9IHt9O1xyXG4gICAgXy5mb3JPd24oY29udHJvbENvbmZpZywgKGM6IEFic3RyYWN0Q29udHJvbCwgbmFtZTogc3RyaW5nKSA9PiB7XHJcbiAgICAgIGMuc2V0UGFyZW50KHRoaXMpO1xyXG4gICAgICBjLnNldFJvb3QodGhpcy5yb290KTtcclxuICAgICAgYy5uYW1lID0gbmFtZTtcclxuICAgICAgdGhpcy5jb250cm9sc1tuYW1lXSA9IGM7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG5cclxuICAvKiogQGludGVybmFsICovXHJcbiAgX3Rocm93SWZDb250cm9sTWlzc2luZyhuYW1lOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIGlmICghXy5rZXlzKHRoaXMuY29udHJvbHMpLmxlbmd0aCkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFxyXG4gICAgICAgIFRoZXJlIGFyZSBubyBmb3JtIGNvbnRyb2xzIHJlZ2lzdGVyZWQgd2l0aCB0aGlzIGdyb3VwIHlldC4gIElmIHlvdSdyZSB1c2luZyBuZ01vZGVsLFxyXG4gICAgICAgIHlvdSBtYXkgd2FudCB0byBjaGVjayBuZXh0IHRpY2sgKGUuZy4gdXNlIHNldFRpbWVvdXQpLlxyXG4gICAgICBgKTtcclxuICAgIH1cclxuICAgIGlmICghdGhpcy5jb250cm9sc1tuYW1lXSkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYENhbm5vdCBmaW5kIGZvcm0gY29udHJvbCB3aXRoIG5hbWU6ICR7bmFtZX0uYCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuXHJcbiAgLyoqIEBpbnRlcm5hbCAqL1xyXG4gIF9hbGxDb250cm9sc0Rpc2FibGVkKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIF8uZXZlcnkoXy52YWx1ZXModGhpcy5jb250cm9scyksIChjOiBBYnN0cmFjdENvbnRyb2wpID0+IGMuZGlzYWJsZWQpO1xyXG4gIH1cclxuXHJcbiAgLyoqIEBpbnRlcm5hbCAqL1xyXG4gIF9hbnlDb250cm9sc0hhdmVTdGF0dXMoc3RhdHVzOiBzdHJpbmcpOiBib29sZWFuIHtcclxuXHJcbiAgICByZXR1cm4gISFfLmZpbmQoXy52YWx1ZXModGhpcy5jb250cm9scyksIFsnc3RhdHVzJywgc3RhdHVzXSk7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuIl19