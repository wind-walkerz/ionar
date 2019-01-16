/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import _ from 'lodash';
import Joi from '@ionar/joi';
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
        this._updateChildError = (errors) => {
            _.each(errors, (err) => {
                /** @type {?} */
                const control = _.get(this.controls, err.path);
                if (control instanceof FormControl) {
                    control.setErrors([err]);
                }
            });
        };
        /**
         * \@internal
         */
        this._getControlSchema = () => {
            return this.options.schema || Joi.object().keys(this._reduceSchema());
        };
        this._applyFormState = () => {
            if (!this.parent && !this.root) {
                this.setRoot(this);
            }
        };
        this._applyFormState();
        this._setUpControls(state);
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
     * @return {?}
     */
    _reduceSchema() {
        return _.reduce(this.controls, (result, c, name) => {
            if (c instanceof FormControl && ((/** @type {?} */ (c.state))).schema) {
                result[name] = ((/** @type {?} */ (c.state))).schema;
            }
            return result;
        }, {});
    }
    /**
     * \@internal
     * @return {?}
     */
    _runJoiValidation() {
        if (this.schema) {
            /** @type {?} */
            const validateObject = (this.schema['_type'] !== 'object') ? { [this.name]: this.value } : this.value;
            /** @type {?} */
            const validateSchema = (this.schema['_type'] !== 'object') ? { [this.name]: this.schema } : this.schema;
            /** @type {?} */
            const result = Joi.validate(validateObject, validateSchema, {
                abortEarly: false,
                stripUnknown: true
            });
            if (!result.error)
                return null;
            this._updateChildError((/** @type {?} */ (result.error.details)));
            return (/** @type {?} */ (result.error.details));
        }
        return null;
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
    FormGroup.prototype._updateChildError;
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
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRm9ybUdyb3VwLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGlvbmFyL2Zvcm0vIiwic291cmNlcyI6WyJjb3JlL21vZGVscy9Gb3JtR3JvdXAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sQ0FBQyxNQUFNLFFBQVEsQ0FBQztBQUN2QixPQUFPLEdBQUcsTUFBTSxZQUFZLENBQUM7QUFDN0IsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRXBELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDN0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQThFNUMsTUFBTSxPQUFPLFNBQVUsU0FBUSxlQUFlOzs7Ozs7Ozs7SUFtQjVDLFlBQVksS0FBcUIsRUFBRSxPQUFnQztRQUNqRSxLQUFLLENBQ0gsSUFBSSxFQUNKLG1CQUErQixPQUFPLEVBQUEsQ0FDdkMsQ0FBQzs7Ozs7UUFkWSxjQUFTLEdBQVksS0FBSyxDQUFDOzs7O1FBaVQzQyxzQkFBaUIsR0FBRyxDQUFDLE1BQWtCLEVBQUUsRUFBRTtZQUN6QyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLEdBQWEsRUFBRSxFQUFFOztzQkFDekIsT0FBTyxHQUFvQixDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQztnQkFDL0QsSUFBSSxPQUFPLFlBQVksV0FBVyxFQUFFO29CQUNsQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztpQkFDMUI7WUFDSCxDQUFDLENBQUMsQ0FBQztRQUNMLENBQUMsQ0FBQzs7OztRQTZCRixzQkFBaUIsR0FBRyxHQUFHLEVBQUU7WUFDdkIsT0FBTyxJQUFJLENBQUMs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LElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUMxQixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7Ozs7OztJQUlELHNCQUFzQixDQUFDLElBQVk7UUFDakMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLE1BQU0sRUFBRTtZQUNqQyxNQUFNLElBQUksS0FBSyxDQUFDOzs7T0FHZixDQUFDLENBQUM7U0FDSjtRQUNELElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ3hCLE1BQU0sSUFBSSxLQUFLLENBQUMsdUNBQXVDLElBQUksR0FBRyxDQUFDLENBQUM7U0FDakU7SUFDSCxDQUFDOzs7OztJQUlELG9CQUFvQjtRQUNsQixPQUFPLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFrQixFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDOUUsQ0FBQzs7Ozs7O0lBR0Qsc0JBQXNCLENBQUMsTUFBYztRQUVuQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUM7SUFDL0QsQ0FBQztDQUVGOzs7SUFwYUMsNkJBQTRDOzs7Ozs7SUFPNUMsOEJBQTJDOzs7OztJQWlUM0Msc0NBT0U7Ozs7O0lBNkJGLHNDQUVFOzs7OztJQTBCRixvQ0FJRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XHJcbmltcG9ydCBKb2kgZnJvbSAnQGlvbmFyL2pvaSc7XHJcbmltcG9ydCB7IEFic3RyYWN0Q29udHJvbCB9IGZyb20gJy4vQWJzdHJhY3RDb250cm9sJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRm9ybUNvbnRyb2wgfSBmcm9tICcuL0Zvcm1Db250cm9sJztcclxuXHJcbmltcG9ydCB7IEFic3RyYWN0Q29udHJvbE9wdGlvbnMsIEZvcm1Db250cm9sU3RhdGUsIEZvcm1Hcm91cFN0YXRlIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9Gb3JtJztcclxuaW1wb3J0IHsgSm9pRXJyb3IsIEpvaVNjaGVtYSB9IGZyb20gJy4uL2ludGVyZmFjZXMvVmFsaWRhdG9yJztcclxuXHJcblxyXG4vKipcclxuICogVHJhY2tzIHRoZSB2YWx1ZSBhbmQgdmFsaWRpdHkgc3RhdGUgb2YgYSBncm91cCBvZiBgRm9ybUNvbnRyb2xgIGluc3RhbmNlcy5cclxuICpcclxuICogQSBgRm9ybUdyb3VwYCBhZ2dyZWdhdGVzIHRoZSB2YWx1ZXMgb2YgZWFjaCBjaGlsZCBgRm9ybUNvbnRyb2xgIGludG8gb25lIG9iamVjdCxcclxuICogd2l0aCBlYWNoIGNvbnRyb2wgbmFtZSBhcyB0aGUga2V5LiAgSXQgY2FsY3VsYXRlcyBpdHMgc3RhdHVzIGJ5IHJlZHVjaW5nIHRoZSBzdGF0dXMgdmFsdWVzXHJcbiAqIG9mIGl0cyBjaGlsZHJlbi4gRm9yIGV4YW1wbGUsIGlmIG9uZSBvZiB0aGUgY29udHJvbHMgaW4gYSBncm91cCBpcyBpbnZhbGlkLCB0aGUgZW50aXJlXHJcbiAqIGdyb3VwIGJlY29tZXMgaW52YWxpZC5cclxuICpcclxuICogYEZvcm1Hcm91cGAgaXMgb25lIG9mIHRoZSB0aHJlZSBmdW5kYW1lbnRhbCBidWlsZGluZyBibG9ja3MgdXNlZCB0byBkZWZpbmUgZm9ybXMgaW4gQW5ndWxhcixcclxuICogYWxvbmcgd2l0aCBgRm9ybUNvbnRyb2xgIGFuZCBgRm9ybUFycmF5YC5cclxuICpcclxuICogV2hlbiBpbnN0YW50aWF0aW5nIGEgYEZvcm1Hcm91cGAsIHBhc3MgaW4gYSBjb2xsZWN0aW9uIG9mIGNoaWxkIGNvbnRyb2xzIGFzIHRoZSBmaXJzdFxyXG4gKiBhcmd1bWVudC4gVGhlIGtleSBmb3IgZWFjaCBjaGlsZCByZWdpc3RlcnMgdGhlIG5hbWUgZm9yIHRoZSBjb250cm9sLlxyXG4gKlxyXG4gKiBAdXNhZ2VOb3Rlc1xyXG4gKlxyXG4gKiAjIyMgQ3JlYXRlIGEgZm9ybSBncm91cCB3aXRoIDIgY29udHJvbHNcclxuICpcclxuICogYGBgXHJcbiAqIGNvbnN0IGZvcm0gPSBuZXcgRm9ybUdyb3VwKHtcclxuICogICBmaXJzdDogbmV3IEZvcm1Db250cm9sKCdOYW5jeScsIFZhbGlkYXRvcnMubWluTGVuZ3RoKDIpKSxcclxuICogICBsYXN0OiBuZXcgRm9ybUNvbnRyb2woJ0RyZXcnKSxcclxuICogfSk7XHJcbiAqXHJcbiAqIGNvbnNvbGUubG9nKGZvcm0udmFsdWUpOyAgIC8vIHtmaXJzdDogJ05hbmN5JywgbGFzdDsgJ0RyZXcnfVxyXG4gKiBjb25zb2xlLmxvZyhmb3JtLnN0YXR1cyk7ICAvLyAnVkFMSUQnXHJcbiAqIGBgYFxyXG4gKlxyXG4gKiAjIyMgQ3JlYXRlIGEgZm9ybSBncm91cCB3aXRoIGEgZ3JvdXAtbGV2ZWwgdmFsaWRhdG9yXHJcbiAqXHJcbiAqIFlvdSBpbmNsdWRlIGdyb3VwLWxldmVsIHZhbGlkYXRvcnMgYXMgdGhlIHNlY29uZCBhcmcsIG9yIGdyb3VwLWxldmVsIGFzeW5jXHJcbiAqIHZhbGlkYXRvcnMgYXMgdGhlIHRoaXJkIGFyZy4gVGhlc2UgY29tZSBpbiBoYW5keSB3aGVuIHlvdSB3YW50IHRvIHBlcmZvcm0gdmFsaWRhdGlvblxyXG4gKiB0aGF0IGNvbnNpZGVycyB0aGUgdmFsdWUgb2YgbW9yZSB0aGFuIG9uZSBjaGlsZCBjb250cm9sLlxyXG4gKlxyXG4gKiBgYGBcclxuICogY29uc3QgZm9ybSA9IG5ldyBGb3JtR3JvdXAoe1xyXG4gKiAgIHBhc3N3b3JkOiBuZXcgRm9ybUNvbnRyb2woJycsIFZhbGlkYXRvcnMubWluTGVuZ3RoKDIpKSxcclxuICogICBwYXNzd29yZENvbmZpcm06IG5ldyBGb3JtQ29udHJvbCgnJywgVmFsaWRhdG9ycy5taW5MZW5ndGgoMikpLFxyXG4gKiB9LCBwYXNzd29yZE1hdGNoVmFsaWRhdG9yKTtcclxuICpcclxuICpcclxuICogZnVuY3Rpb24gcGFzc3dvcmRNYXRjaFZhbGlkYXRvcihnOiBGb3JtR3JvdXApIHtcclxuICogICAgcmV0dXJuIGcuZ2V0KCdwYXNzd29yZCcpLnZhbHVlID09PSBnLmdldCgncGFzc3dvcmRDb25maXJtJykudmFsdWVcclxuICogICAgICAgPyBudWxsIDogeydtaXNtYXRjaCc6IHRydWV9O1xyXG4gKiB9XHJcbiAqIGBgYFxyXG4gKlxyXG4gKiBMaWtlIGBGb3JtQ29udHJvbGAgaW5zdGFuY2VzLCB5b3UgY2hvb3NlIHRvIHBhc3MgaW5cclxuICogdmFsaWRhdG9ycyBhbmQgYXN5bmMgdmFsaWRhdG9ycyBhcyBwYXJ0IG9mIGFuIG9wdGlvbnMgb2JqZWN0LlxyXG4gKlxyXG4gKiBgYGBcclxuICogY29uc3QgZm9ybSA9IG5ldyBGb3JtR3JvdXAoe1xyXG4gKiAgIHBhc3N3b3JkOiBuZXcgRm9ybUNvbnRyb2woJycpXHJcbiAqICAgcGFzc3dvcmRDb25maXJtOiBuZXcgRm9ybUNvbnRyb2woJycpXHJcbiAqIH0sIHsgdmFsaWRhdG9yczogcGFzc3dvcmRNYXRjaFZhbGlkYXRvciwgYXN5bmNWYWxpZGF0b3JzOiBvdGhlclZhbGlkYXRvciB9KTtcclxuICogYGBgXHJcbiAqXHJcbiAqICMjIyBTZXQgdGhlIHVwZGF0ZU9uIHByb3BlcnR5IGZvciBhbGwgY29udHJvbHMgaW4gYSBmb3JtIGdyb3VwXHJcbiAqXHJcbiAqIFRoZSBvcHRpb25zIG9iamVjdCBpcyB1c2VkIHRvIHNldCBhIGRlZmF1bHQgdmFsdWUgZm9yIGVhY2ggY2hpbGRcclxuICogY29udHJvbCdzIGB1cGRhdGVPbmAgcHJvcGVydHkuIElmIHlvdSBzZXQgYHVwZGF0ZU9uYCB0byBgJ2JsdXInYCBhdCB0aGVcclxuICogZ3JvdXAgbGV2ZWwsIGFsbCBjaGlsZCBjb250cm9scyBkZWZhdWx0IHRvICdibHVyJywgdW5sZXNzIHRoZSBjaGlsZFxyXG4gKiBoYXMgZXhwbGljaXRseSBzcGVjaWZpZWQgYSBkaWZmZXJlbnQgYHVwZGF0ZU9uYCB2YWx1ZS5cclxuICpcclxuICogYGBgdHNcclxuICogY29uc3QgYyA9IG5ldyBGb3JtR3JvdXAoe1xyXG4gKiAgIG9uZTogbmV3IEZvcm1Db250cm9sKClcclxuICogfSwgeyB1cGRhdGVPbjogJ2JsdXInIH0pO1xyXG4gKiBgYGBcclxuICpcclxuICogQHB1YmxpY0FwaVxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEZvcm1Hcm91cCBleHRlbmRzIEFic3RyYWN0Q29udHJvbCB7XHJcblxyXG4gIHB1YmxpYyByZWFkb25seSBuZ1N1Ym1pdDogRXZlbnRFbWl0dGVyPGFueT47XHJcblxyXG5cclxuICAvKipcclxuICAgKiBAZGVzY3JpcHRpb25cclxuICAgKiBSZXBvcnRzIHdoZXRoZXIgdGhlIGZvcm0gc3VibWlzc2lvbiBoYXMgYmVlbiB0cmlnZ2VyZWQuXHJcbiAgICovXHJcbiAgcHVibGljIHJlYWRvbmx5IHN1Ym1pdHRlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuXHJcbiAgLyoqXHJcbiAgICogQ3JlYXRlcyBhIG5ldyBgRm9ybUdyb3VwYCBpbnN0YW5jZS5cclxuICAgKlxyXG4gICAqIEBwYXJhbSBzdGF0ZSBBIGNvbGxlY3Rpb24gb2YgY2hpbGQgY29udHJvbHMuIFRoZSBrZXkgZm9yIGVhY2ggY2hpbGQgaXMgdGhlIG5hbWVcclxuICAgKiB1bmRlciB3aGljaCBpdCBpcyByZWdpc3RlcmVkLlxyXG4gICAqXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3Ioc3RhdGU6IEZvcm1Hcm91cFN0YXRlLCBvcHRpb25zPzogQWJzdHJhY3RDb250cm9sT3B0aW9ucykge1xyXG4gICAgc3VwZXIoXHJcbiAgICAgIG51bGwsXHJcbiAgICAgIDxBYnN0cmFjdENvbnRyb2xPcHRpb25zIHwgbnVsbD5vcHRpb25zXHJcbiAgICApO1xyXG4gICAgdGhpcy5fYXBwbHlGb3JtU3RhdGUoKTtcclxuICAgIHRoaXMuX3NldFVwQ29udHJvbHMoc3RhdGUpO1xyXG4gICAgdGhpcy5faW5pdE9ic2VydmFibGVzKCk7XHJcblxyXG4gICAgdGhpcy51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KHsgb25seVNlbGY6IHRydWUsIGVtaXRFdmVudDogZmFsc2UgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZWdpc3RlcnMgYSBjb250cm9sIHdpdGggdGhlIGdyb3VwJ3MgbGlzdCBvZiBjb250cm9scy5cclxuICAgKlxyXG4gICAqIFRoaXMgbWV0aG9kIGRvZXMgbm90IHVwZGF0ZSB0aGUgdmFsdWUgb3IgdmFsaWRpdHkgb2YgdGhlIGNvbnRyb2wuXHJcbiAgICogVXNlIHtAbGluayBGb3JtR3JvdXAjYWRkQ29udHJvbCBhZGRDb250cm9sfSBpbnN0ZWFkLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIG5hbWUgVGhlIGNvbnRyb2wgbmFtZSB0byByZWdpc3RlciBpbiB0aGUgY29sbGVjdGlvblxyXG4gICAqIEBwYXJhbSBjb250cm9sIFByb3ZpZGVzIHRoZSBjb250cm9sIGZvciB0aGUgZ2l2ZW4gbmFtZVxyXG4gICAqL1xyXG4gIHJlZ2lzdGVyQ29udHJvbChuYW1lOiBzdHJpbmcsIGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCk6IEFic3RyYWN0Q29udHJvbCB7XHJcbiAgICBpZiAodGhpcy5jb250cm9sc1tuYW1lXSkgcmV0dXJuIHRoaXMuY29udHJvbHNbbmFtZV07XHJcbiAgICBjb250cm9sLnNldFBhcmVudCh0aGlzKTtcclxuICAgIHRoaXMuY29udHJvbHNbbmFtZV0gPSBjb250cm9sO1xyXG4gICAgcmV0dXJuIGNvbnRyb2w7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBBZGQgYSBjb250cm9sIHRvIHRoaXMgZ3JvdXAuXHJcbiAgICpcclxuICAgKiBUaGlzIG1ldGhvZCBhbHNvIHVwZGF0ZXMgdGhlIHZhbHVlIGFuZCB2YWxpZGl0eSBvZiB0aGUgY29udHJvbC5cclxuICAgKlxyXG4gICAqIEBwYXJhbSBuYW1lIFRoZSBjb250cm9sIG5hbWUgdG8gYWRkIHRvIHRoZSBjb2xsZWN0aW9uXHJcbiAgICogQHBhcmFtIGNvbnRyb2wgUHJvdmlkZXMgdGhlIGNvbnRyb2wgZm9yIHRoZSBnaXZlbiBuYW1lXHJcbiAgICovXHJcbiAgYWRkQ29udHJvbChuYW1lOiBzdHJpbmcsIGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCk6IHZvaWQge1xyXG4gICAgdGhpcy5yZWdpc3RlckNvbnRyb2wobmFtZSwgY29udHJvbCk7XHJcbiAgICB0aGlzLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkoKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJlbW92ZSBhIGNvbnRyb2wgZnJvbSB0aGlzIGdyb3VwLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIG5hbWUgVGhlIGNvbnRyb2wgbmFtZSB0byByZW1vdmUgZnJvbSB0aGUgY29sbGVjdGlvblxyXG4gICAqL1xyXG4gIHJlbW92ZUNvbnRyb2wobmFtZTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAoPHsgY29udHJvbHM6IEZvcm1Hcm91cFN0YXRlIH0+dGhpcykuY29udHJvbHMgPSA8Rm9ybUdyb3VwU3RhdGU+Xy5vbWl0KHRoaXMuY29udHJvbHMsIFtuYW1lXSk7XHJcblxyXG4gICAgdGhpcy51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZXBsYWNlIGFuIGV4aXN0aW5nIGNvbnRyb2wuXHJcbiAgICpcclxuICAgKiBAcGFyYW0gbmFtZSBUaGUgY29udHJvbCBuYW1lIHRvIHJlcGxhY2UgaW4gdGhlIGNvbGxlY3Rpb25cclxuICAgKiBAcGFyYW0gY29udHJvbCBQcm92aWRlcyB0aGUgY29udHJvbCBmb3IgdGhlIGdpdmVuIG5hbWVcclxuICAgKi9cclxuICBzZXRDb250cm9sKG5hbWU6IHN0cmluZywgY29udHJvbDogQWJzdHJhY3RDb250cm9sKTogdm9pZCB7XHJcbiAgICAoPHsgY29udHJvbHM6IEZvcm1Hcm91cFN0YXRlIH0+dGhpcykuY29udHJvbHMgPSA8Rm9ybUdyb3VwU3RhdGU+Xy5vbWl0KHRoaXMuY29udHJvbHMsIFtuYW1lXSk7XHJcbiAgICBpZiAoY29udHJvbCkgdGhpcy5yZWdpc3RlckNvbnRyb2wobmFtZSwgY29udHJvbCk7XHJcbiAgICB0aGlzLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkoKTtcclxuXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBTZXRzIHRoZSB2YWx1ZSBvZiB0aGUgYEZvcm1Hcm91cGAuIEl0IGFjY2VwdHMgYW4gb2JqZWN0IHRoYXQgbWF0Y2hlc1xyXG4gICAqIHRoZSBzdHJ1Y3R1cmUgb2YgdGhlIGdyb3VwLCB3aXRoIGNvbnRyb2wgbmFtZXMgYXMga2V5cy5cclxuICAgKlxyXG4gICAqIEB1c2FnZU5vdGVzXHJcbiAgICogIyMjIFNldCB0aGUgY29tcGxldGUgdmFsdWUgZm9yIHRoZSBmb3JtIGdyb3VwXHJcbiAgICpcclxuICAgKiBgYGBcclxuICAgKiBjb25zdCBmb3JtID0gbmV3IEZvcm1Hcm91cCh7XHJcbiAgICogICBmaXJzdDogbmV3IEZvcm1Db250cm9sKCksXHJcbiAgICogICBsYXN0OiBuZXcgRm9ybUNvbnRyb2woKVxyXG4gICAqIH0pO1xyXG4gICAqXHJcbiAgICogY29uc29sZS5sb2coZm9ybS52YWx1ZSk7ICAgLy8ge2ZpcnN0OiBudWxsLCBsYXN0OiBudWxsfVxyXG4gICAqXHJcbiAgICogZm9ybS5zZXRWYWx1ZSh7Zmlyc3Q6ICdOYW5jeScsIGxhc3Q6ICdEcmV3J30pO1xyXG4gICAqIGNvbnNvbGUubG9nKGZvcm0udmFsdWUpOyAgIC8vIHtmaXJzdDogJ05hbmN5JywgbGFzdDogJ0RyZXcnfVxyXG4gICAqIGBgYFxyXG4gICAqXHJcbiAgICogQHRocm93cyBXaGVuIHN0cmljdCBjaGVja3MgZmFpbCwgc3VjaCBhcyBzZXR0aW5nIHRoZSB2YWx1ZSBvZiBhIGNvbnRyb2xcclxuICAgKiB0aGF0IGRvZXNuJ3QgZXhpc3Qgb3IgaWYgeW91IGV4Y2x1ZGluZyB0aGUgdmFsdWUgb2YgYSBjb250cm9sLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHZhbHVlIFRoZSBuZXcgdmFsdWUgZm9yIHRoZSBjb250cm9sIHRoYXQgbWF0Y2hlcyB0aGUgc3RydWN0dXJlIG9mIHRoZSBncm91cC5cclxuICAgKiBAcGFyYW0gb3B0aW9ucyBvcHRpb25zIG9wdGlvbnMgdGhhdCBkZXRlcm1pbmUgaG93IHRoZSBjb250cm9sIHByb3BhZ2F0ZXMgY2hhbmdlc1xyXG4gICAqIGFuZCBlbWl0cyBldmVudHMgYWZ0ZXIgdGhlIHZhbHVlIGNoYW5nZXMuXHJcbiAgICogVGhlIG9wdGlvbnMgb3B0aW9ucyBhcmUgcGFzc2VkIHRvIHRoZSB7QGxpbmsgSW9uYXJBYnN0cmFjdENvbnRyb2wjdXBkYXRlVmFsdWVBbmRWYWxpZGl0eVxyXG4gICAqIHVwZGF0ZVZhbHVlQW5kVmFsaWRpdHl9IG1ldGhvZC5cclxuICAgKlxyXG4gICAqICogYG9ubHlTZWxmYDogV2hlbiB0cnVlLCBlYWNoIGNoYW5nZSBvbmx5IGFmZmVjdHMgdGhpcyBjb250cm9sLCBhbmQgbm90IGl0cyBwYXJlbnQuIERlZmF1bHQgaXNcclxuICAgKiBmYWxzZS5cclxuICAgKiAqIGBlbWl0RXZlbnRgOiBXaGVuIHRydWUgb3Igbm90IHN1cHBsaWVkICh0aGUgZGVmYXVsdCksIGJvdGggdGhlIGBzdGF0dXNDaGFuZ2VzYCBhbmRcclxuICAgKiBgdmFsdWVDaGFuZ2VzYFxyXG4gICAqIG9ic2VydmFibGVzIGVtaXQgZXZlbnRzIHdpdGggdGhlIGxhdGVzdCBzdGF0dXMgYW5kIHZhbHVlIHdoZW4gdGhlIGNvbnRyb2wgdmFsdWUgaXMgdXBkYXRlZC5cclxuICAgKiBXaGVuIGZhbHNlLCBubyBldmVudHMgYXJlIGVtaXR0ZWQuXHJcbiAgICovXHJcbiAgc2V0VmFsdWUoZm9ybVZhbHVlOiB7IFtrZXk6IHN0cmluZ106IGFueSB9LCBvcHRpb25zOiB7IG9ubHlTZWxmPzogYm9vbGVhbiwgZW1pdEV2ZW50PzogYm9vbGVhbiB9ID0ge30pOlxyXG4gICAgdm9pZCB7XHJcblxyXG4gICAgXy5mb3JPd24oZm9ybVZhbHVlLCAodmFsdWUsIG5hbWUpID0+IHtcclxuICAgICAgdGhpcy5fdGhyb3dJZkNvbnRyb2xNaXNzaW5nKG5hbWUpO1xyXG4gICAgICB0aGlzLmNvbnRyb2xzW25hbWVdLnNldFZhbHVlKHZhbHVlLCB7IG9ubHlTZWxmOiB0cnVlLCBlbWl0RXZlbnQ6IG9wdGlvbnMuZW1pdEV2ZW50IH0pO1xyXG4gICAgfSk7XHJcblxyXG5cclxuICAgIHRoaXMudXBkYXRlVmFsdWVBbmRWYWxpZGl0eShvcHRpb25zKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJlc2V0cyB0aGUgYEZvcm1Hcm91cGAsIG1hcmtzIGFsbCBkZXNjZW5kYW50cyBhcmUgbWFya2VkIGBwcmlzdGluZWAgYW5kIGB1bnRvdWNoZWRgLCBhbmRcclxuICAgKiB0aGUgdmFsdWUgb2YgYWxsIGRlc2NlbmRhbnRzIHRvIG51bGwuXHJcbiAgICpcclxuICAgKiBZb3UgcmVzZXQgdG8gYSBzcGVjaWZpYyBmb3JtIHN0YXRlIGJ5IHBhc3NpbmcgaW4gYSBtYXAgb2Ygc3RhdGVzXHJcbiAgICogdGhhdCBtYXRjaGVzIHRoZSBzdHJ1Y3R1cmUgb2YgeW91ciBmb3JtLCB3aXRoIGNvbnRyb2wgbmFtZXMgYXMga2V5cy4gVGhlIHN0YXRlXHJcbiAgICogaXMgYSBzdGFuZGFsb25lIHZhbHVlIG9yIGEgZm9ybSBzdGF0ZSBvYmplY3Qgd2l0aCBib3RoIGEgdmFsdWUgYW5kIGEgZGlzYWJsZWRcclxuICAgKiBzdGF0dXMuXHJcbiAgICpcclxuICAgKiBAcGFyYW0gZm9ybVN0YXRlIFJlc2V0cyB0aGUgY29udHJvbCB3aXRoIGFuIGluaXRpYWwgdmFsdWUsXHJcbiAgICogb3IgYW4gb2JqZWN0IHRoYXQgZGVmaW5lcyB0aGUgaW5pdGlhbCB2YWx1ZSBhbmQgZGlzYWJsZWQgc3RhdGUuXHJcbiAgICpcclxuICAgKiBAcGFyYW0gb3B0aW9ucyBvcHRpb25zIG9wdGlvbnMgdGhhdCBkZXRlcm1pbmUgaG93IHRoZSBjb250cm9sIHByb3BhZ2F0ZXMgY2hhbmdlc1xyXG4gICAqIGFuZCBlbWl0cyBldmVudHMgd2hlbiB0aGUgZ3JvdXAgaXMgcmVzZXQuXHJcbiAgICogKiBgb25seVNlbGZgOiBXaGVuIHRydWUsIGVhY2ggY2hhbmdlIG9ubHkgYWZmZWN0cyB0aGlzIGNvbnRyb2wsIGFuZCBub3QgaXRzIHBhcmVudC4gRGVmYXVsdCBpc1xyXG4gICAqIGZhbHNlLlxyXG4gICAqICogYGVtaXRFdmVudGA6IFdoZW4gdHJ1ZSBvciBub3Qgc3VwcGxpZWQgKHRoZSBkZWZhdWx0KSwgYm90aCB0aGUgYHN0YXR1c0NoYW5nZXNgIGFuZFxyXG4gICAqIGB2YWx1ZUNoYW5nZXNgXHJcbiAgICogb2JzZXJ2YWJsZXMgZW1pdCBldmVudHMgd2l0aCB0aGUgbGF0ZXN0IHN0YXR1cyBhbmQgdmFsdWUgd2hlbiB0aGUgY29udHJvbCBpcyByZXNldC5cclxuICAgKiBXaGVuIGZhbHNlLCBubyBldmVudHMgYXJlIGVtaXR0ZWQuXHJcbiAgICogVGhlIG9wdGlvbnMgb3B0aW9ucyBhcmUgcGFzc2VkIHRvIHRoZSB7QGxpbmsgQWJzdHJhY3RDb250cm9sI3VwZGF0ZVZhbHVlQW5kVmFsaWRpdHlcclxuICAgKiB1cGRhdGVWYWx1ZUFuZFZhbGlkaXR5fSBtZXRob2QuXHJcbiAgICpcclxuICAgKiBAdXNhZ2VOb3Rlc1xyXG4gICAqXHJcbiAgICogIyMjIFJlc2V0IHRoZSBmb3JtIGdyb3VwIHZhbHVlc1xyXG4gICAqXHJcbiAgICogYGBgdHNcclxuICAgKiBjb25zdCBmb3JtID0gbmV3IEZvcm1Hcm91cCh7XHJcbiAgICogICBmaXJzdDogbmV3IEZvcm1Db250cm9sKCdmaXJzdCBuYW1lJyksXHJcbiAgICogICBsYXN0OiBuZXcgRm9ybUNvbnRyb2woJ2xhc3QgbmFtZScpXHJcbiAgICogfSk7XHJcbiAgICpcclxuICAgKiBjb25zb2xlLmxvZyhmb3JtLnZhbHVlKTsgIC8vIHtmaXJzdDogJ2ZpcnN0IG5hbWUnLCBsYXN0OiAnbGFzdCBuYW1lJ31cclxuICAgKlxyXG4gICAqIGZvcm0ucmVzZXQoeyBmaXJzdDogJ25hbWUnLCBsYXN0OiAnbGFzdCBuYW1lJyB9KTtcclxuICAgKlxyXG4gICAqIGNvbnNvbGUubG9nKGZvcm0udmFsdWUpOyAgLy8ge2ZpcnN0OiAnbmFtZScsIGxhc3Q6ICdsYXN0IG5hbWUnfVxyXG4gICAqIGBgYFxyXG4gICAqXHJcbiAgICogIyMjIFJlc2V0IHRoZSBmb3JtIGdyb3VwIHZhbHVlcyBhbmQgZGlzYWJsZWQgc3RhdHVzXHJcbiAgICpcclxuICAgKiBgYGBcclxuICAgKiBjb25zdCBmb3JtID0gbmV3IEZvcm1Hcm91cCh7XHJcbiAgICogICBmaXJzdDogbmV3IEZvcm1Db250cm9sKCdmaXJzdCBuYW1lJyksXHJcbiAgICogICBsYXN0OiBuZXcgRm9ybUNvbnRyb2woJ2xhc3QgbmFtZScpXHJcbiAgICogfSk7XHJcbiAgICpcclxuICAgKiBmb3JtLnJlc2V0KHtcclxuICAgKiAgIGZpcnN0OiB7dmFsdWU6ICduYW1lJywgZGlzYWJsZWQ6IHRydWV9LFxyXG4gICAqICAgbGFzdDogJ2xhc3QnXHJcbiAgICogfSk7XHJcbiAgICpcclxuICAgKiBjb25zb2xlLmxvZyh0aGlzLmZvcm0udmFsdWUpOyAgLy8ge2ZpcnN0OiAnbmFtZScsIGxhc3Q6ICdsYXN0IG5hbWUnfVxyXG4gICAqIGNvbnNvbGUubG9nKHRoaXMuZm9ybS5nZXQoJ2ZpcnN0Jykuc3RhdHVzKTsgIC8vICdESVNBQkxFRCdcclxuICAgKiBgYGBcclxuICAgKi9cclxuICByZXNldCh2YWx1ZTogYW55ID0ge30sIG9wdGlvbnM6IHsgb25seVNlbGY/OiBib29sZWFuLCBlbWl0RXZlbnQ/OiBib29sZWFuIH0gPSB7fSk6IHZvaWQge1xyXG4gICAgXy5mb3JPd24odGhpcy5jb250cm9scywgKGM6IEFic3RyYWN0Q29udHJvbCwgbmFtZTogc3RyaW5nKSA9PiB7XHJcbiAgICAgIGMucmVzZXQodmFsdWVbbmFtZV0sIHsgb25seVNlbGY6IHRydWUsIGVtaXRFdmVudDogb3B0aW9ucy5lbWl0RXZlbnQgfSk7XHJcbiAgICB9KTtcclxuICAgICh0aGlzIGFzIHsgc3VibWl0dGVkOiBCb29sZWFuIH0pLnN1Ym1pdHRlZCA9IGZhbHNlO1xyXG4gICAgdGhpcy51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KG9wdGlvbnMpO1xyXG4gICAgaWYgKF8uaGFzKHRoaXMub3B0aW9ucywgWydzdWJtaXRPbkNoYW5nZSddKSkgdGhpcy5zdWJtaXQodHJ1ZSk7XHJcblxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ2xlYXIgdGhlIGBGb3JtR3JvdXBgLCBtYXJrcyBhbGwgZGVzY2VuZGFudHMgYXJlIG1hcmtlZCBgcHJpc3RpbmVgIGFuZCBgdW50b3VjaGVkYCwgYW5kXHJcbiAgICogdGhlIHZhbHVlIG9mIGFsbCBkZXNjZW5kYW50cyB0byBudWxsLlxyXG4gICAqXHJcbiAgICogWW91IHJlc2V0IHRvIGEgc3BlY2lmaWMgZm9ybSBzdGF0ZSBieSBwYXNzaW5nIGluIGEgbWFwIG9mIHN0YXRlc1xyXG4gICAqIHRoYXQgbWF0Y2hlcyB0aGUgc3RydWN0dXJlIG9mIHlvdXIgZm9ybSwgd2l0aCBjb250cm9sIG5hbWVzIGFzIGtleXMuIFRoZSBzdGF0ZVxyXG4gICAqIGlzIGEgc3RhbmRhbG9uZSB2YWx1ZSBvciBhIGZvcm0gc3RhdGUgb2JqZWN0IHdpdGggYm90aCBhIHZhbHVlIGFuZCBhIGRpc2FibGVkXHJcbiAgICogc3RhdHVzLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIGZvcm1TdGF0ZSBSZXNldHMgdGhlIGNvbnRyb2wgd2l0aCBhbiBpbml0aWFsIHZhbHVlLFxyXG4gICAqIG9yIGFuIG9iamVjdCB0aGF0IGRlZmluZXMgdGhlIGluaXRpYWwgdmFsdWUgYW5kIGRpc2FibGVkIHN0YXRlLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIG9wdGlvbnMgb3B0aW9ucyBvcHRpb25zIHRoYXQgZGV0ZXJtaW5lIGhvdyB0aGUgY29udHJvbCBwcm9wYWdhdGVzIGNoYW5nZXNcclxuICAgKiBhbmQgZW1pdHMgZXZlbnRzIHdoZW4gdGhlIGdyb3VwIGlzIHJlc2V0LlxyXG4gICAqICogYG9ubHlTZWxmYDogV2hlbiB0cnVlLCBlYWNoIGNoYW5nZSBvbmx5IGFmZmVjdHMgdGhpcyBjb250cm9sLCBhbmQgbm90IGl0cyBwYXJlbnQuIERlZmF1bHQgaXNcclxuICAgKiBmYWxzZS5cclxuICAgKiAqIGBlbWl0RXZlbnRgOiBXaGVuIHRydWUgb3Igbm90IHN1cHBsaWVkICh0aGUgZGVmYXVsdCksIGJvdGggdGhlIGBzdGF0dXNDaGFuZ2VzYCBhbmRcclxuICAgKiBgdmFsdWVDaGFuZ2VzYFxyXG4gICAqIG9ic2VydmFibGVzIGVtaXQgZXZlbnRzIHdpdGggdGhlIGxhdGVzdCBzdGF0dXMgYW5kIHZhbHVlIHdoZW4gdGhlIGNvbnRyb2wgaXMgcmVzZXQuXHJcbiAgICogV2hlbiBmYWxzZSwgbm8gZXZlbnRzIGFyZSBlbWl0dGVkLlxyXG4gICAqIFRoZSBvcHRpb25zIG9wdGlvbnMgYXJlIHBhc3NlZCB0byB0aGUge0BsaW5rIEFic3RyYWN0Q29udHJvbCN1cGRhdGVWYWx1ZUFuZFZhbGlkaXR5XHJcbiAgICogdXBkYXRlVmFsdWVBbmRWYWxpZGl0eX0gbWV0aG9kLlxyXG4gICAqXHJcbiAgICogQHVzYWdlTm90ZXNcclxuICAgKlxyXG4gICAqICMjIyBSZXNldCB0aGUgZm9ybSBncm91cCB2YWx1ZXNcclxuICAgKlxyXG4gICAqIGBgYHRzXHJcbiAgICogY29uc3QgZm9ybSA9IG5ldyBGb3JtR3JvdXAoe1xyXG4gICAqICAgZmlyc3Q6IG5ldyBGb3JtQ29udHJvbCgnZmlyc3QgbmFtZScpLFxyXG4gICAqICAgbGFzdDogbmV3IEZvcm1Db250cm9sKCdsYXN0IG5hbWUnKVxyXG4gICAqIH0pO1xyXG4gICAqXHJcbiAgICogY29uc29sZS5sb2coZm9ybS52YWx1ZSk7ICAvLyB7Zmlyc3Q6ICdmaXJzdCBuYW1lJywgbGFzdDogJ2xhc3QgbmFtZSd9XHJcbiAgICpcclxuICAgKiBmb3JtLnJlc2V0KHsgZmlyc3Q6ICduYW1lJywgbGFzdDogJ2xhc3QgbmFtZScgfSk7XHJcbiAgICpcclxuICAgKiBjb25zb2xlLmxvZyhmb3JtLnZhbHVlKTsgIC8vIHtmaXJzdDogJ25hbWUnLCBsYXN0OiAnbGFzdCBuYW1lJ31cclxuICAgKiBgYGBcclxuICAgKlxyXG4gICAqICMjIyBSZXNldCB0aGUgZm9ybSBncm91cCB2YWx1ZXMgYW5kIGRpc2FibGVkIHN0YXR1c1xyXG4gICAqXHJcbiAgICogYGBgXHJcbiAgICogY29uc3QgZm9ybSA9IG5ldyBGb3JtR3JvdXAoe1xyXG4gICAqICAgZmlyc3Q6IG5ldyBGb3JtQ29udHJvbCgnZmlyc3QgbmFtZScpLFxyXG4gICAqICAgbGFzdDogbmV3IEZvcm1Db250cm9sKCdsYXN0IG5hbWUnKVxyXG4gICAqIH0pO1xyXG4gICAqXHJcbiAgICogZm9ybS5yZXNldCh7XHJcbiAgICogICBmaXJzdDoge3ZhbHVlOiAnbmFtZScsIGRpc2FibGVkOiB0cnVlfSxcclxuICAgKiAgIGxhc3Q6ICdsYXN0J1xyXG4gICAqIH0pO1xyXG4gICAqXHJcbiAgICogY29uc29sZS5sb2codGhpcy5mb3JtLnZhbHVlKTsgIC8vIHtmaXJzdDogJ25hbWUnLCBsYXN0OiAnbGFzdCBuYW1lJ31cclxuICAgKiBjb25zb2xlLmxvZyh0aGlzLmZvcm0uZ2V0KCdmaXJzdCcpLnN0YXR1cyk7ICAvLyAnRElTQUJMRUQnXHJcbiAgICogYGBgXHJcbiAgICovXHJcbiAgY2xlYXIob3B0aW9uczogeyBvbmx5U2VsZj86IGJvb2xlYW4sIGVtaXRFdmVudD86IGJvb2xlYW4gfSA9IHt9KTogdm9pZCB7XHJcbiAgICBfLmZvck93bih0aGlzLmNvbnRyb2xzLCAoYzogQWJzdHJhY3RDb250cm9sLCBuYW1lOiBzdHJpbmcpID0+IHtcclxuICAgICAgYy5jbGVhcih7IG9ubHlTZWxmOiB0cnVlLCBlbWl0RXZlbnQ6IG9wdGlvbnMuZW1pdEV2ZW50IH0pO1xyXG4gICAgfSk7XHJcbiAgICAodGhpcyBhcyB7IHN1Ym1pdHRlZDogQm9vbGVhbiB9KS5zdWJtaXR0ZWQgPSBmYWxzZTtcclxuICAgIHRoaXMudXBkYXRlVmFsdWVBbmRWYWxpZGl0eShvcHRpb25zKTtcclxuICAgIGlmIChfLmhhcyh0aGlzLm9wdGlvbnMsIFsnc3VibWl0T25DaGFuZ2UnXSkpIHRoaXMuc3VibWl0KHRydWUpO1xyXG4gIH1cclxuXHJcblxyXG4gIC8qKlxyXG4gICAqIFJldHJpZXZlcyBhIGNoaWxkIGNvbnRyb2wgZ2l2ZW4gdGhlIGNvbnRyb2wncyBuYW1lIG9yIHBhdGguXHJcbiAgICpcclxuICAgKiBAcGFyYW0gcGF0aCBBIGRvdC1kZWxpbWl0ZWQgc3RyaW5nIG9yIGFycmF5IG9mIHN0cmluZy9udW1iZXIgdmFsdWVzIHRoYXQgZGVmaW5lIHRoZSBwYXRoIHRvIHRoZVxyXG4gICAqIGNvbnRyb2wuXHJcbiAgICpcclxuICAgKiBAdXNhZ2VOb3Rlc1xyXG4gICAqICMjIyBSZXRyaWV2ZSBhIG5lc3RlZCBjb250cm9sXHJcbiAgICpcclxuICAgKiBGb3IgZXhhbXBsZSwgdG8gZ2V0IGEgYG5hbWVgIGNvbnRyb2wgbmVzdGVkIHdpdGhpbiBhIGBwZXJzb25gIHN1Yi1ncm91cDpcclxuICAgKlxyXG4gICAqICogYHRoaXMuZm9ybS5nZXQoJ3BlcnNvbi5uYW1lJyk7YFxyXG4gICAqXHJcbiAgICogLU9SLVxyXG4gICAqXHJcbiAgICogKiBgdGhpcy5mb3JtLmdldChbJ3BlcnNvbicsICduYW1lJ10pO2BcclxuICAgKi9cclxuICBnZXQocGF0aDogc3RyaW5nW10gfCBzdHJpbmcgfCBudWxsKTogeyBbbmFtZTogc3RyaW5nXTogQWJzdHJhY3RDb250cm9sIH0gfCBBYnN0cmFjdENvbnRyb2xbXSB8IEFic3RyYWN0Q29udHJvbCB8IG51bGwge1xyXG4gICAgaWYgKCFwYXRoKSByZXR1cm4gbnVsbDtcclxuICAgIHJldHVybiBfLmdldCh0aGlzLmNvbnRyb2xzLCBwYXRoKSB8fCBudWxsO1xyXG4gIH1cclxuXHJcbiAgc3VibWl0KGluc3RhbnQ6IGJvb2xlYW4gPSBmYWxzZSk6IHZvaWQge1xyXG5cclxuICAgIGlmICh0aGlzLnJvb3QgPT09IHRoaXMpIHtcclxuICAgICAgKHRoaXMgYXMgeyBzdWJtaXR0ZWQ6IEJvb2xlYW4gfSkuc3VibWl0dGVkID0gdHJ1ZTtcclxuICAgICAgdGhpcy51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KCk7XHJcbiAgICAgIHRoaXMudXBkYXRlQ2hpbGRWYWxpZGl0eSgpO1xyXG4gICAgICAodGhpcyBhcyB7IG5nU3VibWl0OiBFdmVudEVtaXR0ZXI8YW55PiB9KS5uZ1N1Ym1pdC5lbWl0KHtcclxuICAgICAgICB2YWx1ZTogdGhpcy52YWx1ZSwgaW5zdGFudFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHVwZGF0ZUNoaWxkVmFsaWRpdHkoKSB7XHJcbiAgICBfLmZvck93bih0aGlzLmNvbnRyb2xzLCAoYzogQWJzdHJhY3RDb250cm9sLCBuYW1lOiBzdHJpbmcpID0+IHtcclxuICAgICAgaWYgKGMgaW5zdGFuY2VvZiBGb3JtQ29udHJvbCkgYy51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KCk7XHJcbiAgICAgIGlmIChjIGluc3RhbmNlb2YgRm9ybUdyb3VwKSBjLnVwZGF0ZUNoaWxkVmFsaWRpdHkoKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqIEBpbnRlcm5hbCAqL1xyXG4gIF9pbml0T2JzZXJ2YWJsZXMoKSB7XHJcbiAgICAodGhpcyBhcyB7IHZhbHVlQ2hhbmdlczogT2JzZXJ2YWJsZTxhbnk+IH0pLnZhbHVlQ2hhbmdlcyA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICAgICh0aGlzIGFzIHsgc3RhdHVzQ2hhbmdlczogT2JzZXJ2YWJsZTxhbnk+IH0pLnN0YXR1c0NoYW5nZXMgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgICAodGhpcyBhcyB7IG5nU3VibWl0OiBPYnNlcnZhYmxlPGFueT4gfSkubmdTdWJtaXQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgfVxyXG5cclxuICAvKiogQGludGVybmFsICovXHJcbiAgX3VwZGF0ZUNoaWxkRXJyb3IgPSAoZXJyb3JzOiBKb2lFcnJvcltdKSA9PiB7XHJcbiAgICBfLmVhY2goZXJyb3JzLCAoZXJyOiBKb2lFcnJvcikgPT4ge1xyXG4gICAgICBjb25zdCBjb250cm9sOiBBYnN0cmFjdENvbnRyb2wgPSBfLmdldCh0aGlzLmNvbnRyb2xzLCBlcnIucGF0aCk7XHJcbiAgICAgIGlmIChjb250cm9sIGluc3RhbmNlb2YgRm9ybUNvbnRyb2wpIHtcclxuICAgICAgICBjb250cm9sLnNldEVycm9ycyhbZXJyXSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIC8qKiBAaW50ZXJuYWwgKi9cclxuICBfdXBkYXRlVmFsdWUoKTogdm9pZCB7XHJcbiAgICAodGhpcyBhcyB7IHZhbHVlOiBhbnkgfSkudmFsdWUgPSB0aGlzLl9yZWR1Y2VWYWx1ZSgpO1xyXG4gIH1cclxuXHJcbiAgLyoqIEBpbnRlcm5hbCAqL1xyXG4gIF9yZWR1Y2VWYWx1ZSgpIHtcclxuICAgIGNvbnN0IGZvcm1fdmFsdWU6IHsgW2s6IHN0cmluZ106IEFic3RyYWN0Q29udHJvbCB9ID0ge307XHJcbiAgICBfLmZvck93bih0aGlzLmNvbnRyb2xzLCAoYzogQWJzdHJhY3RDb250cm9sLCBuYW1lOiBzdHJpbmcpID0+IHtcclxuICAgICAgaWYgKHRoaXMuX2lzTm90RXhjbHVkZWQoYykpIHtcclxuICAgICAgICBmb3JtX3ZhbHVlW25hbWVdID0gYy52YWx1ZTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gZm9ybV92YWx1ZTtcclxuICB9XHJcblxyXG4gIC8qKiBAaW50ZXJuYWwgKi9cclxuICBfcmVkdWNlU2NoZW1hKCkge1xyXG4gICAgcmV0dXJuIF8ucmVkdWNlKHRoaXMuY29udHJvbHMsIChyZXN1bHQ6IHsgW25hbWU6IHN0cmluZ106IEpvaVNjaGVtYSB9LCBjOiBBYnN0cmFjdENvbnRyb2wsIG5hbWU6IHN0cmluZykgPT4ge1xyXG4gICAgICBpZiAoYyBpbnN0YW5jZW9mIEZvcm1Db250cm9sICYmICg8Rm9ybUNvbnRyb2xTdGF0ZT5jLnN0YXRlKS5zY2hlbWEpIHtcclxuICAgICAgICByZXN1bHRbbmFtZV0gPSAoPEZvcm1Db250cm9sU3RhdGU+Yy5zdGF0ZSkuc2NoZW1hO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9LCB7fSk7XHJcbiAgfVxyXG5cclxuICAvKiogQGludGVybmFsICovXHJcbiAgX2dldENvbnRyb2xTY2hlbWEgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gdGhpcy5vcHRpb25zLnNjaGVtYSB8fCBKb2kub2JqZWN0KCkua2V5cyh0aGlzLl9yZWR1Y2VTY2hlbWEoKSk7XHJcbiAgfTtcclxuXHJcbiAgLyoqIEBpbnRlcm5hbCAqL1xyXG4gIF9ydW5Kb2lWYWxpZGF0aW9uKCkge1xyXG4gICAgaWYgKHRoaXMuc2NoZW1hKSB7XHJcblxyXG4gICAgICBjb25zdCB2YWxpZGF0ZU9iamVjdCA9ICh0aGlzLnNjaGVtYVsnX3R5cGUnXSAhPT0gJ29iamVjdCcpID8geyBbdGhpcy5uYW1lXTogdGhpcy52YWx1ZSB9IDogdGhpcy52YWx1ZTtcclxuICAgICAgY29uc3QgdmFsaWRhdGVTY2hlbWEgPSAodGhpcy5zY2hlbWFbJ190eXBlJ10gIT09ICdvYmplY3QnKSA/IHsgW3RoaXMubmFtZV06IHRoaXMuc2NoZW1hIH0gOiB0aGlzLnNjaGVtYTtcclxuXHJcblxyXG4gICAgICBjb25zdCByZXN1bHQgPSBKb2kudmFsaWRhdGUodmFsaWRhdGVPYmplY3QsIHZhbGlkYXRlU2NoZW1hLCB7XHJcbiAgICAgICAgYWJvcnRFYXJseTogZmFsc2UsXHJcbiAgICAgICAgc3RyaXBVbmtub3duOiB0cnVlXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgaWYgKCFyZXN1bHQuZXJyb3IpIHJldHVybiBudWxsO1xyXG5cclxuICAgICAgdGhpcy5fdXBkYXRlQ2hpbGRFcnJvcig8Sm9pRXJyb3JbXT5yZXN1bHQuZXJyb3IuZGV0YWlscyk7XHJcblxyXG4gICAgICByZXR1cm4gPEpvaUVycm9yW10+cmVzdWx0LmVycm9yLmRldGFpbHM7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG5cclxuXHJcbiAgcHJpdmF0ZSBfYXBwbHlGb3JtU3RhdGUgPSAoKSA9PiB7XHJcbiAgICBpZiAoIXRoaXMucGFyZW50ICYmICF0aGlzLnJvb3QpIHtcclxuICAgICAgdGhpcy5zZXRSb290KHRoaXMpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG5cclxuICAvKiogQGludGVybmFsICovXHJcbiAgcHJpdmF0ZSBfc2V0VXBDb250cm9scyhjb250cm9sQ29uZmlnOiBGb3JtR3JvdXBTdGF0ZSk6IHZvaWQge1xyXG4gICAgKDxGb3JtR3JvdXBTdGF0ZT50aGlzLmNvbnRyb2xzKSA9IHt9O1xyXG4gICAgXy5mb3JPd24oY29udHJvbENvbmZpZywgKGM6IEFic3RyYWN0Q29udHJvbCwgbmFtZTogc3RyaW5nKSA9PiB7XHJcbiAgICAgIGMuc2V0UGFyZW50KHRoaXMpO1xyXG4gICAgICBjLnNldFJvb3QodGhpcy5yb290KTtcclxuICAgICAgYy5uYW1lID0gbmFtZTtcclxuICAgICAgdGhpcy5jb250cm9sc1tuYW1lXSA9IGM7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG5cclxuICAvKiogQGludGVybmFsICovXHJcbiAgX3Rocm93SWZDb250cm9sTWlzc2luZyhuYW1lOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIGlmICghXy5rZXlzKHRoaXMuY29udHJvbHMpLmxlbmd0aCkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFxyXG4gICAgICAgIFRoZXJlIGFyZSBubyBmb3JtIGNvbnRyb2xzIHJlZ2lzdGVyZWQgd2l0aCB0aGlzIGdyb3VwIHlldC4gIElmIHlvdSdyZSB1c2luZyBuZ01vZGVsLFxyXG4gICAgICAgIHlvdSBtYXkgd2FudCB0byBjaGVjayBuZXh0IHRpY2sgKGUuZy4gdXNlIHNldFRpbWVvdXQpLlxyXG4gICAgICBgKTtcclxuICAgIH1cclxuICAgIGlmICghdGhpcy5jb250cm9sc1tuYW1lXSkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYENhbm5vdCBmaW5kIGZvcm0gY29udHJvbCB3aXRoIG5hbWU6ICR7bmFtZX0uYCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuXHJcbiAgLyoqIEBpbnRlcm5hbCAqL1xyXG4gIF9hbGxDb250cm9sc0Rpc2FibGVkKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIF8uZXZlcnkoXy52YWx1ZXModGhpcy5jb250cm9scyksIChjOiBBYnN0cmFjdENvbnRyb2wpID0+IGMuZGlzYWJsZWQpO1xyXG4gIH1cclxuXHJcbiAgLyoqIEBpbnRlcm5hbCAqL1xyXG4gIF9hbnlDb250cm9sc0hhdmVTdGF0dXMoc3RhdHVzOiBzdHJpbmcpOiBib29sZWFuIHtcclxuXHJcbiAgICByZXR1cm4gISFfLmZpbmQoXy52YWx1ZXModGhpcy5jb250cm9scyksIFsnc3RhdHVzJywgc3RhdHVzXSk7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuIl19