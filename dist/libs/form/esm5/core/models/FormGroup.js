"use strict";
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var lodash_1 = tslib_1.__importDefault(require("lodash"));
var joi_1 = tslib_1.__importDefault(require("@ionar/joi"));
var AbstractControl_1 = require("./AbstractControl");
var core_1 = require("@angular/core");
var FormControl_1 = require("./FormControl");
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
var /**
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
FormGroup = /** @class */ (function (_super) {
    tslib_1.__extends(FormGroup, _super);
    /**
     * Creates a new `FormGroup` instance.
     *
     * @param state A collection of child controls. The key for each child is the name
     * under which it is registered.
     *
     */
    function FormGroup(state, options) {
        var _this = _super.call(this, null, (/** @type {?} */ (options))) || this;
        /**
         * \@description
         * Reports whether the form submission has been triggered.
         */
        _this.submitted = false;
        /**
         * \@internal
         */
        _this._updateChildError = function (errors) {
            lodash_1.default.each(errors, function (err) {
                /** @type {?} */
                var control = lodash_1.default.get(_this.controls, err.path);
                if (control instanceof FormControl_1.FormControl) {
                    control.setErrors([err]);
                }
            });
        };
        /**
         * \@internal
         */
        _this._getControlSchema = function () {
            return _this.options.schema || joi_1.default.object().keys(_this._reduceSchema());
        };
        _this._applyFormState = function () {
            if (!_this.parent && !_this.root) {
                _this.setRoot(_this);
            }
        };
        _this._applyFormState();
        _this._setUpControls(state);
        _this._initObservables();
        _this.updateValueAndValidity({ onlySelf: true, emitEvent: false });
        return _this;
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
    FormGroup.prototype.registerControl = /**
     * Registers a control with the group's list of controls.
     *
     * This method does not update the value or validity of the control.
     * Use {\@link FormGroup#addControl addControl} instead.
     *
     * @param {?} name The control name to register in the collection
     * @param {?} control Provides the control for the given name
     * @return {?}
     */
    function (name, control) {
        if (this.controls[name])
            return this.controls[name];
        control.setParent(this);
        this.controls[name] = control;
        return control;
    };
    /**
     * Add a control to this group.
     *
     * This method also updates the value and validity of the control.
     *
     * @param name The control name to add to the collection
     * @param control Provides the control for the given name
     */
    /**
     * Add a control to this group.
     *
     * This method also updates the value and validity of the control.
     *
     * @param {?} name The control name to add to the collection
     * @param {?} control Provides the control for the given name
     * @return {?}
     */
    FormGroup.prototype.addControl = /**
     * Add a control to this group.
     *
     * This method also updates the value and validity of the control.
     *
     * @param {?} name The control name to add to the collection
     * @param {?} control Provides the control for the given name
     * @return {?}
     */
    function (name, control) {
        this.registerControl(name, control);
        this.updateValueAndValidity();
    };
    /**
     * Remove a control from this group.
     *
     * @param name The control name to remove from the collection
     */
    /**
     * Remove a control from this group.
     *
     * @param {?} name The control name to remove from the collection
     * @return {?}
     */
    FormGroup.prototype.removeControl = /**
     * Remove a control from this group.
     *
     * @param {?} name The control name to remove from the collection
     * @return {?}
     */
    function (name) {
        ((/** @type {?} */ (this))).controls = (/** @type {?} */ (lodash_1.default.omit(this.controls, [name])));
        this.updateValueAndValidity();
    };
    /**
     * Replace an existing control.
     *
     * @param name The control name to replace in the collection
     * @param control Provides the control for the given name
     */
    /**
     * Replace an existing control.
     *
     * @param {?} name The control name to replace in the collection
     * @param {?} control Provides the control for the given name
     * @return {?}
     */
    FormGroup.prototype.setControl = /**
     * Replace an existing control.
     *
     * @param {?} name The control name to replace in the collection
     * @param {?} control Provides the control for the given name
     * @return {?}
     */
    function (name, control) {
        ((/** @type {?} */ (this))).controls = (/** @type {?} */ (lodash_1.default.omit(this.controls, [name])));
        if (control)
            this.registerControl(name, control);
        this.updateValueAndValidity();
    };
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
    FormGroup.prototype.setValue = /**
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
    function (formValue, options) {
        var _this = this;
        if (options === void 0) { options = {}; }
        lodash_1.default.forOwn(formValue, function (value, name) {
            _this._throwIfControlMissing(name);
            _this.controls[name].setValue(value, { onlySelf: true, emitEvent: options.emitEvent });
        });
        this.updateValueAndValidity(options);
    };
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
    FormGroup.prototype.reset = /**
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
    function (value, options) {
        if (value === void 0) { value = {}; }
        if (options === void 0) { options = {}; }
        lodash_1.default.forOwn(this.controls, function (c, name) {
            c.reset(value[name], { onlySelf: true, emitEvent: options.emitEvent });
        });
        ((/** @type {?} */ (this))).submitted = false;
        this.updateValueAndValidity(options);
        if (lodash_1.default.has(this.options, ['submitOnChange']))
            this.submit(true);
    };
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
    FormGroup.prototype.clear = /**
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
    function (options) {
        if (options === void 0) { options = {}; }
        lodash_1.default.forOwn(this.controls, function (c, name) {
            c.clear({ onlySelf: true, emitEvent: options.emitEvent });
        });
        ((/** @type {?} */ (this))).submitted = false;
        this.updateValueAndValidity(options);
        if (lodash_1.default.has(this.options, ['submitOnChange']))
            this.submit(true);
    };
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
    FormGroup.prototype.get = /**
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
    function (path) {
        if (!path)
            return null;
        return lodash_1.default.get(this.controls, path) || null;
    };
    /**
     * @param {?=} instant
     * @return {?}
     */
    FormGroup.prototype.submit = /**
     * @param {?=} instant
     * @return {?}
     */
    function (instant) {
        if (instant === void 0) { instant = false; }
        if (this.root === this) {
            ((/** @type {?} */ (this))).submitted = true;
            this.updateValueAndValidity();
            this.updateChildValidity();
            ((/** @type {?} */ (this))).ngSubmit.emit({
                value: this.value, instant: instant
            });
        }
    };
    /**
     * @return {?}
     */
    FormGroup.prototype.updateChildValidity = /**
     * @return {?}
     */
    function () {
        lodash_1.default.forOwn(this.controls, function (c, name) {
            if (c instanceof FormControl_1.FormControl)
                c.updateValueAndValidity();
            if (c instanceof FormGroup)
                c.updateChildValidity();
        });
    };
    /** @internal */
    /**
     * \@internal
     * @return {?}
     */
    FormGroup.prototype._initObservables = /**
     * \@internal
     * @return {?}
     */
    function () {
        ((/** @type {?} */ (this))).valueChanges = new core_1.EventEmitter();
        ((/** @type {?} */ (this))).statusChanges = new core_1.EventEmitter();
        ((/** @type {?} */ (this))).ngSubmit = new core_1.EventEmitter();
    };
    /** @internal */
    /**
     * \@internal
     * @return {?}
     */
    FormGroup.prototype._updateValue = /**
     * \@internal
     * @return {?}
     */
    function () {
        ((/** @type {?} */ (this))).value = this._reduceValue();
    };
    /** @internal */
    /**
     * \@internal
     * @return {?}
     */
    FormGroup.prototype._reduceValue = /**
     * \@internal
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var form_value = {};
        lodash_1.default.forOwn(this.controls, function (c, name) {
            if (_this._isNotExcluded(c)) {
                form_value[name] = c.value;
            }
        });
        return form_value;
    };
    /** @internal */
    /**
     * \@internal
     * @return {?}
     */
    FormGroup.prototype._reduceSchema = /**
     * \@internal
     * @return {?}
     */
    function () {
        return lodash_1.default.reduce(this.controls, function (result, c, name) {
            if (c instanceof FormControl_1.FormControl && ((/** @type {?} */ (c.state))).schema) {
                result[name] = ((/** @type {?} */ (c.state))).schema;
            }
            return result;
        }, {});
    };
    /** @internal */
    /**
     * \@internal
     * @return {?}
     */
    FormGroup.prototype._runJoiValidation = /**
     * \@internal
     * @return {?}
     */
    function () {
        var _a, _b;
        if (this.schema) {
            /** @type {?} */
            var validateObject = (this.schema['_type'] !== 'object') ? (_a = {}, _a[this.name] = this.value, _a) : this.value;
            /** @type {?} */
            var validateSchema = (this.schema['_type'] !== 'object') ? (_b = {}, _b[this.name] = this.schema, _b) : this.schema;
            /** @type {?} */
            var result = joi_1.default.validate(validateObject, validateSchema, {
                abortEarly: false,
                stripUnknown: true
            });
            if (!result.error)
                return null;
            this._updateChildError((/** @type {?} */ (result.error.details)));
            return (/** @type {?} */ (result.error.details));
        }
        return null;
    };
    /** @internal */
    /**
     * \@internal
     * @private
     * @param {?} controlConfig
     * @return {?}
     */
    FormGroup.prototype._setUpControls = /**
     * \@internal
     * @private
     * @param {?} controlConfig
     * @return {?}
     */
    function (controlConfig) {
        var _this = this;
        ((/** @type {?} */ (this.controls))) = {};
        lodash_1.default.forOwn(controlConfig, function (c, name) {
            c.setParent(_this);
            c.setRoot(_this.root);
            c.name = name;
            _this.controls[name] = c;
        });
    };
    /** @internal */
    /**
     * \@internal
     * @param {?} name
     * @return {?}
     */
    FormGroup.prototype._throwIfControlMissing = /**
     * \@internal
     * @param {?} name
     * @return {?}
     */
    function (name) {
        if (!lodash_1.default.keys(this.controls).length) {
            throw new Error("\n        There are no form controls registered with this group yet.  If you're using ngModel,\n        you may want to check next tick (e.g. use setTimeout).\n      ");
        }
        if (!this.controls[name]) {
            throw new Error("Cannot find form control with name: " + name + ".");
        }
    };
    /** @internal */
    /**
     * \@internal
     * @return {?}
     */
    FormGroup.prototype._allControlsDisabled = /**
     * \@internal
     * @return {?}
     */
    function () {
        return lodash_1.default.every(lodash_1.default.values(this.controls), function (c) { return c.disabled; });
    };
    /** @internal */
    /**
     * \@internal
     * @param {?} status
     * @return {?}
     */
    FormGroup.prototype._anyControlsHaveStatus = /**
     * \@internal
     * @param {?} status
     * @return {?}
     */
    function (status) {
        return !!lodash_1.default.find(lodash_1.default.values(this.controls), ['status', status]);
    };
    return FormGroup;
}(AbstractControl_1.AbstractControl));
exports.FormGroup = FormGroup;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRm9ybUdyb3VwLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGlvbmFyL2Zvcm0vIiwic291cmNlcyI6WyJjb3JlL21vZGVscy9Gb3JtR3JvdXAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBLDBEQUF1QjtBQUN2QiwyREFBNkI7QUFDN0IscURBQW9EO0FBRXBELHNDQUE2QztBQUM3Qyw2Q0FBNEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE4RTVDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBQStCLHFDQUFlO0lBWTVDOzs7Ozs7T0FNRztJQUNILG1CQUFZLEtBQXFCLEVBQUUsT0FBZ0M7UUFBbkUsWUFDRSxrQkFDRSxJQUFJLEVBQ0osbUJBQStCLE9BQU8sRUFBQSxDQUN2QyxTQU1GOzs7OztRQXBCZSxlQUFTLEdBQVksS0FBSyxDQUFDOzs7O1FBaVQzQyx1QkFBaUIsR0FBRyxVQUFDLE1BQWtCO1lBQ3JDLGdCQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxVQUFDLEdBQWE7O29CQUNyQixPQUFPLEdBQW9CLGdCQUFDLENBQUMsR0FBRyxDQUFDLEtBQUksQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQztnQkFDL0QsSUFBSSxPQUFPLFlBQVkseUJBQVcsRUFBRTtvQkFDbEMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7aUJBQzFCO1lBQ0gsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDLENBQUM7Ozs7UUE2QkYsdUJBQWlCLEdBQUc7WUFDbEIsT0FBTyxLQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sSUFBSSxhQUFHLENBQUMsTUFBTSxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxhQUFhLEVBQUUsQ0FB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QUssQ0FBQyx5Q0FBdUMsSUFBSSxNQUFHLENBQUMsQ0FBQztTQUNqRTtJQUNILENBQUM7SUFHRCxnQkFBZ0I7Ozs7O0lBQ2hCLHdDQUFvQjs7OztJQUFwQjtRQUNFLE9BQU8sZ0JBQUMsQ0FBQyxLQUFLLENBQUMsZ0JBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLFVBQUMsQ0FBa0IsSUFBSyxPQUFBLENBQUMsQ0FBQyxRQUFRLEVBQVYsQ0FBVSxDQUFDLENBQUM7SUFDOUUsQ0FBQztJQUVELGdCQUFnQjs7Ozs7O0lBQ2hCLDBDQUFzQjs7Ozs7SUFBdEIsVUFBdUIsTUFBYztRQUVuQyxPQUFPLENBQUMsQ0FBQyxnQkFBQyxDQUFDLElBQUksQ0FBQyxnQkFBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUMvRCxDQUFDO0lBRUgsZ0JBQUM7QUFBRCxDQUFDLEFBdGFELENBQStCLGlDQUFlLEdBc2E3QztBQXRhWSw4QkFBUzs7O0lBRXBCLDZCQUE0Qzs7Ozs7O0lBTzVDLDhCQUEyQzs7Ozs7SUFpVDNDLHNDQU9FOzs7OztJQTZCRixzQ0FFRTs7Ozs7SUEwQkYsb0NBSUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xyXG5pbXBvcnQgSm9pIGZyb20gJ0Bpb25hci9qb2knO1xyXG5pbXBvcnQgeyBBYnN0cmFjdENvbnRyb2wgfSBmcm9tICcuL0Fic3RyYWN0Q29udHJvbCc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZvcm1Db250cm9sIH0gZnJvbSAnLi9Gb3JtQ29udHJvbCc7XHJcblxyXG5pbXBvcnQgeyBBYnN0cmFjdENvbnRyb2xPcHRpb25zLCBGb3JtQ29udHJvbFN0YXRlLCBGb3JtR3JvdXBTdGF0ZSB9IGZyb20gJy4uL2ludGVyZmFjZXMvRm9ybSc7XHJcbmltcG9ydCB7IEpvaUVycm9yLCBKb2lTY2hlbWEgfSBmcm9tICcuLi9pbnRlcmZhY2VzL1ZhbGlkYXRvcic7XHJcblxyXG5cclxuLyoqXHJcbiAqIFRyYWNrcyB0aGUgdmFsdWUgYW5kIHZhbGlkaXR5IHN0YXRlIG9mIGEgZ3JvdXAgb2YgYEZvcm1Db250cm9sYCBpbnN0YW5jZXMuXHJcbiAqXHJcbiAqIEEgYEZvcm1Hcm91cGAgYWdncmVnYXRlcyB0aGUgdmFsdWVzIG9mIGVhY2ggY2hpbGQgYEZvcm1Db250cm9sYCBpbnRvIG9uZSBvYmplY3QsXHJcbiAqIHdpdGggZWFjaCBjb250cm9sIG5hbWUgYXMgdGhlIGtleS4gIEl0IGNhbGN1bGF0ZXMgaXRzIHN0YXR1cyBieSByZWR1Y2luZyB0aGUgc3RhdHVzIHZhbHVlc1xyXG4gKiBvZiBpdHMgY2hpbGRyZW4uIEZvciBleGFtcGxlLCBpZiBvbmUgb2YgdGhlIGNvbnRyb2xzIGluIGEgZ3JvdXAgaXMgaW52YWxpZCwgdGhlIGVudGlyZVxyXG4gKiBncm91cCBiZWNvbWVzIGludmFsaWQuXHJcbiAqXHJcbiAqIGBGb3JtR3JvdXBgIGlzIG9uZSBvZiB0aGUgdGhyZWUgZnVuZGFtZW50YWwgYnVpbGRpbmcgYmxvY2tzIHVzZWQgdG8gZGVmaW5lIGZvcm1zIGluIEFuZ3VsYXIsXHJcbiAqIGFsb25nIHdpdGggYEZvcm1Db250cm9sYCBhbmQgYEZvcm1BcnJheWAuXHJcbiAqXHJcbiAqIFdoZW4gaW5zdGFudGlhdGluZyBhIGBGb3JtR3JvdXBgLCBwYXNzIGluIGEgY29sbGVjdGlvbiBvZiBjaGlsZCBjb250cm9scyBhcyB0aGUgZmlyc3RcclxuICogYXJndW1lbnQuIFRoZSBrZXkgZm9yIGVhY2ggY2hpbGQgcmVnaXN0ZXJzIHRoZSBuYW1lIGZvciB0aGUgY29udHJvbC5cclxuICpcclxuICogQHVzYWdlTm90ZXNcclxuICpcclxuICogIyMjIENyZWF0ZSBhIGZvcm0gZ3JvdXAgd2l0aCAyIGNvbnRyb2xzXHJcbiAqXHJcbiAqIGBgYFxyXG4gKiBjb25zdCBmb3JtID0gbmV3IEZvcm1Hcm91cCh7XHJcbiAqICAgZmlyc3Q6IG5ldyBGb3JtQ29udHJvbCgnTmFuY3knLCBWYWxpZGF0b3JzLm1pbkxlbmd0aCgyKSksXHJcbiAqICAgbGFzdDogbmV3IEZvcm1Db250cm9sKCdEcmV3JyksXHJcbiAqIH0pO1xyXG4gKlxyXG4gKiBjb25zb2xlLmxvZyhmb3JtLnZhbHVlKTsgICAvLyB7Zmlyc3Q6ICdOYW5jeScsIGxhc3Q7ICdEcmV3J31cclxuICogY29uc29sZS5sb2coZm9ybS5zdGF0dXMpOyAgLy8gJ1ZBTElEJ1xyXG4gKiBgYGBcclxuICpcclxuICogIyMjIENyZWF0ZSBhIGZvcm0gZ3JvdXAgd2l0aCBhIGdyb3VwLWxldmVsIHZhbGlkYXRvclxyXG4gKlxyXG4gKiBZb3UgaW5jbHVkZSBncm91cC1sZXZlbCB2YWxpZGF0b3JzIGFzIHRoZSBzZWNvbmQgYXJnLCBvciBncm91cC1sZXZlbCBhc3luY1xyXG4gKiB2YWxpZGF0b3JzIGFzIHRoZSB0aGlyZCBhcmcuIFRoZXNlIGNvbWUgaW4gaGFuZHkgd2hlbiB5b3Ugd2FudCB0byBwZXJmb3JtIHZhbGlkYXRpb25cclxuICogdGhhdCBjb25zaWRlcnMgdGhlIHZhbHVlIG9mIG1vcmUgdGhhbiBvbmUgY2hpbGQgY29udHJvbC5cclxuICpcclxuICogYGBgXHJcbiAqIGNvbnN0IGZvcm0gPSBuZXcgRm9ybUdyb3VwKHtcclxuICogICBwYXNzd29yZDogbmV3IEZvcm1Db250cm9sKCcnLCBWYWxpZGF0b3JzLm1pbkxlbmd0aCgyKSksXHJcbiAqICAgcGFzc3dvcmRDb25maXJtOiBuZXcgRm9ybUNvbnRyb2woJycsIFZhbGlkYXRvcnMubWluTGVuZ3RoKDIpKSxcclxuICogfSwgcGFzc3dvcmRNYXRjaFZhbGlkYXRvcik7XHJcbiAqXHJcbiAqXHJcbiAqIGZ1bmN0aW9uIHBhc3N3b3JkTWF0Y2hWYWxpZGF0b3IoZzogRm9ybUdyb3VwKSB7XHJcbiAqICAgIHJldHVybiBnLmdldCgncGFzc3dvcmQnKS52YWx1ZSA9PT0gZy5nZXQoJ3Bhc3N3b3JkQ29uZmlybScpLnZhbHVlXHJcbiAqICAgICAgID8gbnVsbCA6IHsnbWlzbWF0Y2gnOiB0cnVlfTtcclxuICogfVxyXG4gKiBgYGBcclxuICpcclxuICogTGlrZSBgRm9ybUNvbnRyb2xgIGluc3RhbmNlcywgeW91IGNob29zZSB0byBwYXNzIGluXHJcbiAqIHZhbGlkYXRvcnMgYW5kIGFzeW5jIHZhbGlkYXRvcnMgYXMgcGFydCBvZiBhbiBvcHRpb25zIG9iamVjdC5cclxuICpcclxuICogYGBgXHJcbiAqIGNvbnN0IGZvcm0gPSBuZXcgRm9ybUdyb3VwKHtcclxuICogICBwYXNzd29yZDogbmV3IEZvcm1Db250cm9sKCcnKVxyXG4gKiAgIHBhc3N3b3JkQ29uZmlybTogbmV3IEZvcm1Db250cm9sKCcnKVxyXG4gKiB9LCB7IHZhbGlkYXRvcnM6IHBhc3N3b3JkTWF0Y2hWYWxpZGF0b3IsIGFzeW5jVmFsaWRhdG9yczogb3RoZXJWYWxpZGF0b3IgfSk7XHJcbiAqIGBgYFxyXG4gKlxyXG4gKiAjIyMgU2V0IHRoZSB1cGRhdGVPbiBwcm9wZXJ0eSBmb3IgYWxsIGNvbnRyb2xzIGluIGEgZm9ybSBncm91cFxyXG4gKlxyXG4gKiBUaGUgb3B0aW9ucyBvYmplY3QgaXMgdXNlZCB0byBzZXQgYSBkZWZhdWx0IHZhbHVlIGZvciBlYWNoIGNoaWxkXHJcbiAqIGNvbnRyb2wncyBgdXBkYXRlT25gIHByb3BlcnR5LiBJZiB5b3Ugc2V0IGB1cGRhdGVPbmAgdG8gYCdibHVyJ2AgYXQgdGhlXHJcbiAqIGdyb3VwIGxldmVsLCBhbGwgY2hpbGQgY29udHJvbHMgZGVmYXVsdCB0byAnYmx1cicsIHVubGVzcyB0aGUgY2hpbGRcclxuICogaGFzIGV4cGxpY2l0bHkgc3BlY2lmaWVkIGEgZGlmZmVyZW50IGB1cGRhdGVPbmAgdmFsdWUuXHJcbiAqXHJcbiAqIGBgYHRzXHJcbiAqIGNvbnN0IGMgPSBuZXcgRm9ybUdyb3VwKHtcclxuICogICBvbmU6IG5ldyBGb3JtQ29udHJvbCgpXHJcbiAqIH0sIHsgdXBkYXRlT246ICdibHVyJyB9KTtcclxuICogYGBgXHJcbiAqXHJcbiAqIEBwdWJsaWNBcGlcclxuICovXHJcbmV4cG9ydCBjbGFzcyBGb3JtR3JvdXAgZXh0ZW5kcyBBYnN0cmFjdENvbnRyb2wge1xyXG5cclxuICBwdWJsaWMgcmVhZG9ubHkgbmdTdWJtaXQ6IEV2ZW50RW1pdHRlcjxhbnk+O1xyXG5cclxuXHJcbiAgLyoqXHJcbiAgICogQGRlc2NyaXB0aW9uXHJcbiAgICogUmVwb3J0cyB3aGV0aGVyIHRoZSBmb3JtIHN1Ym1pc3Npb24gaGFzIGJlZW4gdHJpZ2dlcmVkLlxyXG4gICAqL1xyXG4gIHB1YmxpYyByZWFkb25seSBzdWJtaXR0ZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcblxyXG4gIC8qKlxyXG4gICAqIENyZWF0ZXMgYSBuZXcgYEZvcm1Hcm91cGAgaW5zdGFuY2UuXHJcbiAgICpcclxuICAgKiBAcGFyYW0gc3RhdGUgQSBjb2xsZWN0aW9uIG9mIGNoaWxkIGNvbnRyb2xzLiBUaGUga2V5IGZvciBlYWNoIGNoaWxkIGlzIHRoZSBuYW1lXHJcbiAgICogdW5kZXIgd2hpY2ggaXQgaXMgcmVnaXN0ZXJlZC5cclxuICAgKlxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKHN0YXRlOiBGb3JtR3JvdXBTdGF0ZSwgb3B0aW9ucz86IEFic3RyYWN0Q29udHJvbE9wdGlvbnMpIHtcclxuICAgIHN1cGVyKFxyXG4gICAgICBudWxsLFxyXG4gICAgICA8QWJzdHJhY3RDb250cm9sT3B0aW9ucyB8IG51bGw+b3B0aW9uc1xyXG4gICAgKTtcclxuICAgIHRoaXMuX2FwcGx5Rm9ybVN0YXRlKCk7XHJcbiAgICB0aGlzLl9zZXRVcENvbnRyb2xzKHN0YXRlKTtcclxuICAgIHRoaXMuX2luaXRPYnNlcnZhYmxlcygpO1xyXG5cclxuICAgIHRoaXMudXBkYXRlVmFsdWVBbmRWYWxpZGl0eSh7IG9ubHlTZWxmOiB0cnVlLCBlbWl0RXZlbnQ6IGZhbHNlIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmVnaXN0ZXJzIGEgY29udHJvbCB3aXRoIHRoZSBncm91cCdzIGxpc3Qgb2YgY29udHJvbHMuXHJcbiAgICpcclxuICAgKiBUaGlzIG1ldGhvZCBkb2VzIG5vdCB1cGRhdGUgdGhlIHZhbHVlIG9yIHZhbGlkaXR5IG9mIHRoZSBjb250cm9sLlxyXG4gICAqIFVzZSB7QGxpbmsgRm9ybUdyb3VwI2FkZENvbnRyb2wgYWRkQ29udHJvbH0gaW5zdGVhZC5cclxuICAgKlxyXG4gICAqIEBwYXJhbSBuYW1lIFRoZSBjb250cm9sIG5hbWUgdG8gcmVnaXN0ZXIgaW4gdGhlIGNvbGxlY3Rpb25cclxuICAgKiBAcGFyYW0gY29udHJvbCBQcm92aWRlcyB0aGUgY29udHJvbCBmb3IgdGhlIGdpdmVuIG5hbWVcclxuICAgKi9cclxuICByZWdpc3RlckNvbnRyb2wobmFtZTogc3RyaW5nLCBjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpOiBBYnN0cmFjdENvbnRyb2wge1xyXG4gICAgaWYgKHRoaXMuY29udHJvbHNbbmFtZV0pIHJldHVybiB0aGlzLmNvbnRyb2xzW25hbWVdO1xyXG4gICAgY29udHJvbC5zZXRQYXJlbnQodGhpcyk7XHJcbiAgICB0aGlzLmNvbnRyb2xzW25hbWVdID0gY29udHJvbDtcclxuICAgIHJldHVybiBjb250cm9sO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQWRkIGEgY29udHJvbCB0byB0aGlzIGdyb3VwLlxyXG4gICAqXHJcbiAgICogVGhpcyBtZXRob2QgYWxzbyB1cGRhdGVzIHRoZSB2YWx1ZSBhbmQgdmFsaWRpdHkgb2YgdGhlIGNvbnRyb2wuXHJcbiAgICpcclxuICAgKiBAcGFyYW0gbmFtZSBUaGUgY29udHJvbCBuYW1lIHRvIGFkZCB0byB0aGUgY29sbGVjdGlvblxyXG4gICAqIEBwYXJhbSBjb250cm9sIFByb3ZpZGVzIHRoZSBjb250cm9sIGZvciB0aGUgZ2l2ZW4gbmFtZVxyXG4gICAqL1xyXG4gIGFkZENvbnRyb2wobmFtZTogc3RyaW5nLCBjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpOiB2b2lkIHtcclxuICAgIHRoaXMucmVnaXN0ZXJDb250cm9sKG5hbWUsIGNvbnRyb2wpO1xyXG4gICAgdGhpcy51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZW1vdmUgYSBjb250cm9sIGZyb20gdGhpcyBncm91cC5cclxuICAgKlxyXG4gICAqIEBwYXJhbSBuYW1lIFRoZSBjb250cm9sIG5hbWUgdG8gcmVtb3ZlIGZyb20gdGhlIGNvbGxlY3Rpb25cclxuICAgKi9cclxuICByZW1vdmVDb250cm9sKG5hbWU6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgKDx7IGNvbnRyb2xzOiBGb3JtR3JvdXBTdGF0ZSB9PnRoaXMpLmNvbnRyb2xzID0gPEZvcm1Hcm91cFN0YXRlPl8ub21pdCh0aGlzLmNvbnRyb2xzLCBbbmFtZV0pO1xyXG5cclxuICAgIHRoaXMudXBkYXRlVmFsdWVBbmRWYWxpZGl0eSgpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmVwbGFjZSBhbiBleGlzdGluZyBjb250cm9sLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIG5hbWUgVGhlIGNvbnRyb2wgbmFtZSB0byByZXBsYWNlIGluIHRoZSBjb2xsZWN0aW9uXHJcbiAgICogQHBhcmFtIGNvbnRyb2wgUHJvdmlkZXMgdGhlIGNvbnRyb2wgZm9yIHRoZSBnaXZlbiBuYW1lXHJcbiAgICovXHJcbiAgc2V0Q29udHJvbChuYW1lOiBzdHJpbmcsIGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCk6IHZvaWQge1xyXG4gICAgKDx7IGNvbnRyb2xzOiBGb3JtR3JvdXBTdGF0ZSB9PnRoaXMpLmNvbnRyb2xzID0gPEZvcm1Hcm91cFN0YXRlPl8ub21pdCh0aGlzLmNvbnRyb2xzLCBbbmFtZV0pO1xyXG4gICAgaWYgKGNvbnRyb2wpIHRoaXMucmVnaXN0ZXJDb250cm9sKG5hbWUsIGNvbnRyb2wpO1xyXG4gICAgdGhpcy51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KCk7XHJcblxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogU2V0cyB0aGUgdmFsdWUgb2YgdGhlIGBGb3JtR3JvdXBgLiBJdCBhY2NlcHRzIGFuIG9iamVjdCB0aGF0IG1hdGNoZXNcclxuICAgKiB0aGUgc3RydWN0dXJlIG9mIHRoZSBncm91cCwgd2l0aCBjb250cm9sIG5hbWVzIGFzIGtleXMuXHJcbiAgICpcclxuICAgKiBAdXNhZ2VOb3Rlc1xyXG4gICAqICMjIyBTZXQgdGhlIGNvbXBsZXRlIHZhbHVlIGZvciB0aGUgZm9ybSBncm91cFxyXG4gICAqXHJcbiAgICogYGBgXHJcbiAgICogY29uc3QgZm9ybSA9IG5ldyBGb3JtR3JvdXAoe1xyXG4gICAqICAgZmlyc3Q6IG5ldyBGb3JtQ29udHJvbCgpLFxyXG4gICAqICAgbGFzdDogbmV3IEZvcm1Db250cm9sKClcclxuICAgKiB9KTtcclxuICAgKlxyXG4gICAqIGNvbnNvbGUubG9nKGZvcm0udmFsdWUpOyAgIC8vIHtmaXJzdDogbnVsbCwgbGFzdDogbnVsbH1cclxuICAgKlxyXG4gICAqIGZvcm0uc2V0VmFsdWUoe2ZpcnN0OiAnTmFuY3knLCBsYXN0OiAnRHJldyd9KTtcclxuICAgKiBjb25zb2xlLmxvZyhmb3JtLnZhbHVlKTsgICAvLyB7Zmlyc3Q6ICdOYW5jeScsIGxhc3Q6ICdEcmV3J31cclxuICAgKiBgYGBcclxuICAgKlxyXG4gICAqIEB0aHJvd3MgV2hlbiBzdHJpY3QgY2hlY2tzIGZhaWwsIHN1Y2ggYXMgc2V0dGluZyB0aGUgdmFsdWUgb2YgYSBjb250cm9sXHJcbiAgICogdGhhdCBkb2Vzbid0IGV4aXN0IG9yIGlmIHlvdSBleGNsdWRpbmcgdGhlIHZhbHVlIG9mIGEgY29udHJvbC5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB2YWx1ZSBUaGUgbmV3IHZhbHVlIGZvciB0aGUgY29udHJvbCB0aGF0IG1hdGNoZXMgdGhlIHN0cnVjdHVyZSBvZiB0aGUgZ3JvdXAuXHJcbiAgICogQHBhcmFtIG9wdGlvbnMgb3B0aW9ucyBvcHRpb25zIHRoYXQgZGV0ZXJtaW5lIGhvdyB0aGUgY29udHJvbCBwcm9wYWdhdGVzIGNoYW5nZXNcclxuICAgKiBhbmQgZW1pdHMgZXZlbnRzIGFmdGVyIHRoZSB2YWx1ZSBjaGFuZ2VzLlxyXG4gICAqIFRoZSBvcHRpb25zIG9wdGlvbnMgYXJlIHBhc3NlZCB0byB0aGUge0BsaW5rIElvbmFyQWJzdHJhY3RDb250cm9sI3VwZGF0ZVZhbHVlQW5kVmFsaWRpdHlcclxuICAgKiB1cGRhdGVWYWx1ZUFuZFZhbGlkaXR5fSBtZXRob2QuXHJcbiAgICpcclxuICAgKiAqIGBvbmx5U2VsZmA6IFdoZW4gdHJ1ZSwgZWFjaCBjaGFuZ2Ugb25seSBhZmZlY3RzIHRoaXMgY29udHJvbCwgYW5kIG5vdCBpdHMgcGFyZW50LiBEZWZhdWx0IGlzXHJcbiAgICogZmFsc2UuXHJcbiAgICogKiBgZW1pdEV2ZW50YDogV2hlbiB0cnVlIG9yIG5vdCBzdXBwbGllZCAodGhlIGRlZmF1bHQpLCBib3RoIHRoZSBgc3RhdHVzQ2hhbmdlc2AgYW5kXHJcbiAgICogYHZhbHVlQ2hhbmdlc2BcclxuICAgKiBvYnNlcnZhYmxlcyBlbWl0IGV2ZW50cyB3aXRoIHRoZSBsYXRlc3Qgc3RhdHVzIGFuZCB2YWx1ZSB3aGVuIHRoZSBjb250cm9sIHZhbHVlIGlzIHVwZGF0ZWQuXHJcbiAgICogV2hlbiBmYWxzZSwgbm8gZXZlbnRzIGFyZSBlbWl0dGVkLlxyXG4gICAqL1xyXG4gIHNldFZhbHVlKGZvcm1WYWx1ZTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSwgb3B0aW9uczogeyBvbmx5U2VsZj86IGJvb2xlYW4sIGVtaXRFdmVudD86IGJvb2xlYW4gfSA9IHt9KTpcclxuICAgIHZvaWQge1xyXG5cclxuICAgIF8uZm9yT3duKGZvcm1WYWx1ZSwgKHZhbHVlLCBuYW1lKSA9PiB7XHJcbiAgICAgIHRoaXMuX3Rocm93SWZDb250cm9sTWlzc2luZyhuYW1lKTtcclxuICAgICAgdGhpcy5jb250cm9sc1tuYW1lXS5zZXRWYWx1ZSh2YWx1ZSwgeyBvbmx5U2VsZjogdHJ1ZSwgZW1pdEV2ZW50OiBvcHRpb25zLmVtaXRFdmVudCB9KTtcclxuICAgIH0pO1xyXG5cclxuXHJcbiAgICB0aGlzLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkob3B0aW9ucyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZXNldHMgdGhlIGBGb3JtR3JvdXBgLCBtYXJrcyBhbGwgZGVzY2VuZGFudHMgYXJlIG1hcmtlZCBgcHJpc3RpbmVgIGFuZCBgdW50b3VjaGVkYCwgYW5kXHJcbiAgICogdGhlIHZhbHVlIG9mIGFsbCBkZXNjZW5kYW50cyB0byBudWxsLlxyXG4gICAqXHJcbiAgICogWW91IHJlc2V0IHRvIGEgc3BlY2lmaWMgZm9ybSBzdGF0ZSBieSBwYXNzaW5nIGluIGEgbWFwIG9mIHN0YXRlc1xyXG4gICAqIHRoYXQgbWF0Y2hlcyB0aGUgc3RydWN0dXJlIG9mIHlvdXIgZm9ybSwgd2l0aCBjb250cm9sIG5hbWVzIGFzIGtleXMuIFRoZSBzdGF0ZVxyXG4gICAqIGlzIGEgc3RhbmRhbG9uZSB2YWx1ZSBvciBhIGZvcm0gc3RhdGUgb2JqZWN0IHdpdGggYm90aCBhIHZhbHVlIGFuZCBhIGRpc2FibGVkXHJcbiAgICogc3RhdHVzLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIGZvcm1TdGF0ZSBSZXNldHMgdGhlIGNvbnRyb2wgd2l0aCBhbiBpbml0aWFsIHZhbHVlLFxyXG4gICAqIG9yIGFuIG9iamVjdCB0aGF0IGRlZmluZXMgdGhlIGluaXRpYWwgdmFsdWUgYW5kIGRpc2FibGVkIHN0YXRlLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIG9wdGlvbnMgb3B0aW9ucyBvcHRpb25zIHRoYXQgZGV0ZXJtaW5lIGhvdyB0aGUgY29udHJvbCBwcm9wYWdhdGVzIGNoYW5nZXNcclxuICAgKiBhbmQgZW1pdHMgZXZlbnRzIHdoZW4gdGhlIGdyb3VwIGlzIHJlc2V0LlxyXG4gICAqICogYG9ubHlTZWxmYDogV2hlbiB0cnVlLCBlYWNoIGNoYW5nZSBvbmx5IGFmZmVjdHMgdGhpcyBjb250cm9sLCBhbmQgbm90IGl0cyBwYXJlbnQuIERlZmF1bHQgaXNcclxuICAgKiBmYWxzZS5cclxuICAgKiAqIGBlbWl0RXZlbnRgOiBXaGVuIHRydWUgb3Igbm90IHN1cHBsaWVkICh0aGUgZGVmYXVsdCksIGJvdGggdGhlIGBzdGF0dXNDaGFuZ2VzYCBhbmRcclxuICAgKiBgdmFsdWVDaGFuZ2VzYFxyXG4gICAqIG9ic2VydmFibGVzIGVtaXQgZXZlbnRzIHdpdGggdGhlIGxhdGVzdCBzdGF0dXMgYW5kIHZhbHVlIHdoZW4gdGhlIGNvbnRyb2wgaXMgcmVzZXQuXHJcbiAgICogV2hlbiBmYWxzZSwgbm8gZXZlbnRzIGFyZSBlbWl0dGVkLlxyXG4gICAqIFRoZSBvcHRpb25zIG9wdGlvbnMgYXJlIHBhc3NlZCB0byB0aGUge0BsaW5rIEFic3RyYWN0Q29udHJvbCN1cGRhdGVWYWx1ZUFuZFZhbGlkaXR5XHJcbiAgICogdXBkYXRlVmFsdWVBbmRWYWxpZGl0eX0gbWV0aG9kLlxyXG4gICAqXHJcbiAgICogQHVzYWdlTm90ZXNcclxuICAgKlxyXG4gICAqICMjIyBSZXNldCB0aGUgZm9ybSBncm91cCB2YWx1ZXNcclxuICAgKlxyXG4gICAqIGBgYHRzXHJcbiAgICogY29uc3QgZm9ybSA9IG5ldyBGb3JtR3JvdXAoe1xyXG4gICAqICAgZmlyc3Q6IG5ldyBGb3JtQ29udHJvbCgnZmlyc3QgbmFtZScpLFxyXG4gICAqICAgbGFzdDogbmV3IEZvcm1Db250cm9sKCdsYXN0IG5hbWUnKVxyXG4gICAqIH0pO1xyXG4gICAqXHJcbiAgICogY29uc29sZS5sb2coZm9ybS52YWx1ZSk7ICAvLyB7Zmlyc3Q6ICdmaXJzdCBuYW1lJywgbGFzdDogJ2xhc3QgbmFtZSd9XHJcbiAgICpcclxuICAgKiBmb3JtLnJlc2V0KHsgZmlyc3Q6ICduYW1lJywgbGFzdDogJ2xhc3QgbmFtZScgfSk7XHJcbiAgICpcclxuICAgKiBjb25zb2xlLmxvZyhmb3JtLnZhbHVlKTsgIC8vIHtmaXJzdDogJ25hbWUnLCBsYXN0OiAnbGFzdCBuYW1lJ31cclxuICAgKiBgYGBcclxuICAgKlxyXG4gICAqICMjIyBSZXNldCB0aGUgZm9ybSBncm91cCB2YWx1ZXMgYW5kIGRpc2FibGVkIHN0YXR1c1xyXG4gICAqXHJcbiAgICogYGBgXHJcbiAgICogY29uc3QgZm9ybSA9IG5ldyBGb3JtR3JvdXAoe1xyXG4gICAqICAgZmlyc3Q6IG5ldyBGb3JtQ29udHJvbCgnZmlyc3QgbmFtZScpLFxyXG4gICAqICAgbGFzdDogbmV3IEZvcm1Db250cm9sKCdsYXN0IG5hbWUnKVxyXG4gICAqIH0pO1xyXG4gICAqXHJcbiAgICogZm9ybS5yZXNldCh7XHJcbiAgICogICBmaXJzdDoge3ZhbHVlOiAnbmFtZScsIGRpc2FibGVkOiB0cnVlfSxcclxuICAgKiAgIGxhc3Q6ICdsYXN0J1xyXG4gICAqIH0pO1xyXG4gICAqXHJcbiAgICogY29uc29sZS5sb2codGhpcy5mb3JtLnZhbHVlKTsgIC8vIHtmaXJzdDogJ25hbWUnLCBsYXN0OiAnbGFzdCBuYW1lJ31cclxuICAgKiBjb25zb2xlLmxvZyh0aGlzLmZvcm0uZ2V0KCdmaXJzdCcpLnN0YXR1cyk7ICAvLyAnRElTQUJMRUQnXHJcbiAgICogYGBgXHJcbiAgICovXHJcbiAgcmVzZXQodmFsdWU6IGFueSA9IHt9LCBvcHRpb25zOiB7IG9ubHlTZWxmPzogYm9vbGVhbiwgZW1pdEV2ZW50PzogYm9vbGVhbiB9ID0ge30pOiB2b2lkIHtcclxuICAgIF8uZm9yT3duKHRoaXMuY29udHJvbHMsIChjOiBBYnN0cmFjdENvbnRyb2wsIG5hbWU6IHN0cmluZykgPT4ge1xyXG4gICAgICBjLnJlc2V0KHZhbHVlW25hbWVdLCB7IG9ubHlTZWxmOiB0cnVlLCBlbWl0RXZlbnQ6IG9wdGlvbnMuZW1pdEV2ZW50IH0pO1xyXG4gICAgfSk7XHJcbiAgICAodGhpcyBhcyB7IHN1Ym1pdHRlZDogQm9vbGVhbiB9KS5zdWJtaXR0ZWQgPSBmYWxzZTtcclxuICAgIHRoaXMudXBkYXRlVmFsdWVBbmRWYWxpZGl0eShvcHRpb25zKTtcclxuICAgIGlmIChfLmhhcyh0aGlzLm9wdGlvbnMsIFsnc3VibWl0T25DaGFuZ2UnXSkpIHRoaXMuc3VibWl0KHRydWUpO1xyXG5cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENsZWFyIHRoZSBgRm9ybUdyb3VwYCwgbWFya3MgYWxsIGRlc2NlbmRhbnRzIGFyZSBtYXJrZWQgYHByaXN0aW5lYCBhbmQgYHVudG91Y2hlZGAsIGFuZFxyXG4gICAqIHRoZSB2YWx1ZSBvZiBhbGwgZGVzY2VuZGFudHMgdG8gbnVsbC5cclxuICAgKlxyXG4gICAqIFlvdSByZXNldCB0byBhIHNwZWNpZmljIGZvcm0gc3RhdGUgYnkgcGFzc2luZyBpbiBhIG1hcCBvZiBzdGF0ZXNcclxuICAgKiB0aGF0IG1hdGNoZXMgdGhlIHN0cnVjdHVyZSBvZiB5b3VyIGZvcm0sIHdpdGggY29udHJvbCBuYW1lcyBhcyBrZXlzLiBUaGUgc3RhdGVcclxuICAgKiBpcyBhIHN0YW5kYWxvbmUgdmFsdWUgb3IgYSBmb3JtIHN0YXRlIG9iamVjdCB3aXRoIGJvdGggYSB2YWx1ZSBhbmQgYSBkaXNhYmxlZFxyXG4gICAqIHN0YXR1cy5cclxuICAgKlxyXG4gICAqIEBwYXJhbSBmb3JtU3RhdGUgUmVzZXRzIHRoZSBjb250cm9sIHdpdGggYW4gaW5pdGlhbCB2YWx1ZSxcclxuICAgKiBvciBhbiBvYmplY3QgdGhhdCBkZWZpbmVzIHRoZSBpbml0aWFsIHZhbHVlIGFuZCBkaXNhYmxlZCBzdGF0ZS5cclxuICAgKlxyXG4gICAqIEBwYXJhbSBvcHRpb25zIG9wdGlvbnMgb3B0aW9ucyB0aGF0IGRldGVybWluZSBob3cgdGhlIGNvbnRyb2wgcHJvcGFnYXRlcyBjaGFuZ2VzXHJcbiAgICogYW5kIGVtaXRzIGV2ZW50cyB3aGVuIHRoZSBncm91cCBpcyByZXNldC5cclxuICAgKiAqIGBvbmx5U2VsZmA6IFdoZW4gdHJ1ZSwgZWFjaCBjaGFuZ2Ugb25seSBhZmZlY3RzIHRoaXMgY29udHJvbCwgYW5kIG5vdCBpdHMgcGFyZW50LiBEZWZhdWx0IGlzXHJcbiAgICogZmFsc2UuXHJcbiAgICogKiBgZW1pdEV2ZW50YDogV2hlbiB0cnVlIG9yIG5vdCBzdXBwbGllZCAodGhlIGRlZmF1bHQpLCBib3RoIHRoZSBgc3RhdHVzQ2hhbmdlc2AgYW5kXHJcbiAgICogYHZhbHVlQ2hhbmdlc2BcclxuICAgKiBvYnNlcnZhYmxlcyBlbWl0IGV2ZW50cyB3aXRoIHRoZSBsYXRlc3Qgc3RhdHVzIGFuZCB2YWx1ZSB3aGVuIHRoZSBjb250cm9sIGlzIHJlc2V0LlxyXG4gICAqIFdoZW4gZmFsc2UsIG5vIGV2ZW50cyBhcmUgZW1pdHRlZC5cclxuICAgKiBUaGUgb3B0aW9ucyBvcHRpb25zIGFyZSBwYXNzZWQgdG8gdGhlIHtAbGluayBBYnN0cmFjdENvbnRyb2wjdXBkYXRlVmFsdWVBbmRWYWxpZGl0eVxyXG4gICAqIHVwZGF0ZVZhbHVlQW5kVmFsaWRpdHl9IG1ldGhvZC5cclxuICAgKlxyXG4gICAqIEB1c2FnZU5vdGVzXHJcbiAgICpcclxuICAgKiAjIyMgUmVzZXQgdGhlIGZvcm0gZ3JvdXAgdmFsdWVzXHJcbiAgICpcclxuICAgKiBgYGB0c1xyXG4gICAqIGNvbnN0IGZvcm0gPSBuZXcgRm9ybUdyb3VwKHtcclxuICAgKiAgIGZpcnN0OiBuZXcgRm9ybUNvbnRyb2woJ2ZpcnN0IG5hbWUnKSxcclxuICAgKiAgIGxhc3Q6IG5ldyBGb3JtQ29udHJvbCgnbGFzdCBuYW1lJylcclxuICAgKiB9KTtcclxuICAgKlxyXG4gICAqIGNvbnNvbGUubG9nKGZvcm0udmFsdWUpOyAgLy8ge2ZpcnN0OiAnZmlyc3QgbmFtZScsIGxhc3Q6ICdsYXN0IG5hbWUnfVxyXG4gICAqXHJcbiAgICogZm9ybS5yZXNldCh7IGZpcnN0OiAnbmFtZScsIGxhc3Q6ICdsYXN0IG5hbWUnIH0pO1xyXG4gICAqXHJcbiAgICogY29uc29sZS5sb2coZm9ybS52YWx1ZSk7ICAvLyB7Zmlyc3Q6ICduYW1lJywgbGFzdDogJ2xhc3QgbmFtZSd9XHJcbiAgICogYGBgXHJcbiAgICpcclxuICAgKiAjIyMgUmVzZXQgdGhlIGZvcm0gZ3JvdXAgdmFsdWVzIGFuZCBkaXNhYmxlZCBzdGF0dXNcclxuICAgKlxyXG4gICAqIGBgYFxyXG4gICAqIGNvbnN0IGZvcm0gPSBuZXcgRm9ybUdyb3VwKHtcclxuICAgKiAgIGZpcnN0OiBuZXcgRm9ybUNvbnRyb2woJ2ZpcnN0IG5hbWUnKSxcclxuICAgKiAgIGxhc3Q6IG5ldyBGb3JtQ29udHJvbCgnbGFzdCBuYW1lJylcclxuICAgKiB9KTtcclxuICAgKlxyXG4gICAqIGZvcm0ucmVzZXQoe1xyXG4gICAqICAgZmlyc3Q6IHt2YWx1ZTogJ25hbWUnLCBkaXNhYmxlZDogdHJ1ZX0sXHJcbiAgICogICBsYXN0OiAnbGFzdCdcclxuICAgKiB9KTtcclxuICAgKlxyXG4gICAqIGNvbnNvbGUubG9nKHRoaXMuZm9ybS52YWx1ZSk7ICAvLyB7Zmlyc3Q6ICduYW1lJywgbGFzdDogJ2xhc3QgbmFtZSd9XHJcbiAgICogY29uc29sZS5sb2codGhpcy5mb3JtLmdldCgnZmlyc3QnKS5zdGF0dXMpOyAgLy8gJ0RJU0FCTEVEJ1xyXG4gICAqIGBgYFxyXG4gICAqL1xyXG4gIGNsZWFyKG9wdGlvbnM6IHsgb25seVNlbGY/OiBib29sZWFuLCBlbWl0RXZlbnQ/OiBib29sZWFuIH0gPSB7fSk6IHZvaWQge1xyXG4gICAgXy5mb3JPd24odGhpcy5jb250cm9scywgKGM6IEFic3RyYWN0Q29udHJvbCwgbmFtZTogc3RyaW5nKSA9PiB7XHJcbiAgICAgIGMuY2xlYXIoeyBvbmx5U2VsZjogdHJ1ZSwgZW1pdEV2ZW50OiBvcHRpb25zLmVtaXRFdmVudCB9KTtcclxuICAgIH0pO1xyXG4gICAgKHRoaXMgYXMgeyBzdWJtaXR0ZWQ6IEJvb2xlYW4gfSkuc3VibWl0dGVkID0gZmFsc2U7XHJcbiAgICB0aGlzLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkob3B0aW9ucyk7XHJcbiAgICBpZiAoXy5oYXModGhpcy5vcHRpb25zLCBbJ3N1Ym1pdE9uQ2hhbmdlJ10pKSB0aGlzLnN1Ym1pdCh0cnVlKTtcclxuICB9XHJcblxyXG5cclxuICAvKipcclxuICAgKiBSZXRyaWV2ZXMgYSBjaGlsZCBjb250cm9sIGdpdmVuIHRoZSBjb250cm9sJ3MgbmFtZSBvciBwYXRoLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHBhdGggQSBkb3QtZGVsaW1pdGVkIHN0cmluZyBvciBhcnJheSBvZiBzdHJpbmcvbnVtYmVyIHZhbHVlcyB0aGF0IGRlZmluZSB0aGUgcGF0aCB0byB0aGVcclxuICAgKiBjb250cm9sLlxyXG4gICAqXHJcbiAgICogQHVzYWdlTm90ZXNcclxuICAgKiAjIyMgUmV0cmlldmUgYSBuZXN0ZWQgY29udHJvbFxyXG4gICAqXHJcbiAgICogRm9yIGV4YW1wbGUsIHRvIGdldCBhIGBuYW1lYCBjb250cm9sIG5lc3RlZCB3aXRoaW4gYSBgcGVyc29uYCBzdWItZ3JvdXA6XHJcbiAgICpcclxuICAgKiAqIGB0aGlzLmZvcm0uZ2V0KCdwZXJzb24ubmFtZScpO2BcclxuICAgKlxyXG4gICAqIC1PUi1cclxuICAgKlxyXG4gICAqICogYHRoaXMuZm9ybS5nZXQoWydwZXJzb24nLCAnbmFtZSddKTtgXHJcbiAgICovXHJcbiAgZ2V0KHBhdGg6IHN0cmluZ1tdIHwgc3RyaW5nIHwgbnVsbCk6IHsgW25hbWU6IHN0cmluZ106IEFic3RyYWN0Q29udHJvbCB9IHwgQWJzdHJhY3RDb250cm9sW10gfCBBYnN0cmFjdENvbnRyb2wgfCBudWxsIHtcclxuICAgIGlmICghcGF0aCkgcmV0dXJuIG51bGw7XHJcbiAgICByZXR1cm4gXy5nZXQodGhpcy5jb250cm9scywgcGF0aCkgfHwgbnVsbDtcclxuICB9XHJcblxyXG4gIHN1Ym1pdChpbnN0YW50OiBib29sZWFuID0gZmFsc2UpOiB2b2lkIHtcclxuXHJcbiAgICBpZiAodGhpcy5yb290ID09PSB0aGlzKSB7XHJcbiAgICAgICh0aGlzIGFzIHsgc3VibWl0dGVkOiBCb29sZWFuIH0pLnN1Ym1pdHRlZCA9IHRydWU7XHJcbiAgICAgIHRoaXMudXBkYXRlVmFsdWVBbmRWYWxpZGl0eSgpO1xyXG4gICAgICB0aGlzLnVwZGF0ZUNoaWxkVmFsaWRpdHkoKTtcclxuICAgICAgKHRoaXMgYXMgeyBuZ1N1Ym1pdDogRXZlbnRFbWl0dGVyPGFueT4gfSkubmdTdWJtaXQuZW1pdCh7XHJcbiAgICAgICAgdmFsdWU6IHRoaXMudmFsdWUsIGluc3RhbnRcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB1cGRhdGVDaGlsZFZhbGlkaXR5KCkge1xyXG4gICAgXy5mb3JPd24odGhpcy5jb250cm9scywgKGM6IEFic3RyYWN0Q29udHJvbCwgbmFtZTogc3RyaW5nKSA9PiB7XHJcbiAgICAgIGlmIChjIGluc3RhbmNlb2YgRm9ybUNvbnRyb2wpIGMudXBkYXRlVmFsdWVBbmRWYWxpZGl0eSgpO1xyXG4gICAgICBpZiAoYyBpbnN0YW5jZW9mIEZvcm1Hcm91cCkgYy51cGRhdGVDaGlsZFZhbGlkaXR5KCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKiBAaW50ZXJuYWwgKi9cclxuICBfaW5pdE9ic2VydmFibGVzKCkge1xyXG4gICAgKHRoaXMgYXMgeyB2YWx1ZUNoYW5nZXM6IE9ic2VydmFibGU8YW55PiB9KS52YWx1ZUNoYW5nZXMgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgICAodGhpcyBhcyB7IHN0YXR1c0NoYW5nZXM6IE9ic2VydmFibGU8YW55PiB9KS5zdGF0dXNDaGFuZ2VzID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gICAgKHRoaXMgYXMgeyBuZ1N1Ym1pdDogT2JzZXJ2YWJsZTxhbnk+IH0pLm5nU3VibWl0ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIH1cclxuXHJcbiAgLyoqIEBpbnRlcm5hbCAqL1xyXG4gIF91cGRhdGVDaGlsZEVycm9yID0gKGVycm9yczogSm9pRXJyb3JbXSkgPT4ge1xyXG4gICAgXy5lYWNoKGVycm9ycywgKGVycjogSm9pRXJyb3IpID0+IHtcclxuICAgICAgY29uc3QgY29udHJvbDogQWJzdHJhY3RDb250cm9sID0gXy5nZXQodGhpcy5jb250cm9scywgZXJyLnBhdGgpO1xyXG4gICAgICBpZiAoY29udHJvbCBpbnN0YW5jZW9mIEZvcm1Db250cm9sKSB7XHJcbiAgICAgICAgY29udHJvbC5zZXRFcnJvcnMoW2Vycl0pO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICAvKiogQGludGVybmFsICovXHJcbiAgX3VwZGF0ZVZhbHVlKCk6IHZvaWQge1xyXG4gICAgKHRoaXMgYXMgeyB2YWx1ZTogYW55IH0pLnZhbHVlID0gdGhpcy5fcmVkdWNlVmFsdWUoKTtcclxuICB9XHJcblxyXG4gIC8qKiBAaW50ZXJuYWwgKi9cclxuICBfcmVkdWNlVmFsdWUoKSB7XHJcbiAgICBjb25zdCBmb3JtX3ZhbHVlOiB7IFtrOiBzdHJpbmddOiBBYnN0cmFjdENvbnRyb2wgfSA9IHt9O1xyXG4gICAgXy5mb3JPd24odGhpcy5jb250cm9scywgKGM6IEFic3RyYWN0Q29udHJvbCwgbmFtZTogc3RyaW5nKSA9PiB7XHJcbiAgICAgIGlmICh0aGlzLl9pc05vdEV4Y2x1ZGVkKGMpKSB7XHJcbiAgICAgICAgZm9ybV92YWx1ZVtuYW1lXSA9IGMudmFsdWU7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIGZvcm1fdmFsdWU7XHJcbiAgfVxyXG5cclxuICAvKiogQGludGVybmFsICovXHJcbiAgX3JlZHVjZVNjaGVtYSgpIHtcclxuICAgIHJldHVybiBfLnJlZHVjZSh0aGlzLmNvbnRyb2xzLCAocmVzdWx0OiB7IFtuYW1lOiBzdHJpbmddOiBKb2lTY2hlbWEgfSwgYzogQWJzdHJhY3RDb250cm9sLCBuYW1lOiBzdHJpbmcpID0+IHtcclxuICAgICAgaWYgKGMgaW5zdGFuY2VvZiBGb3JtQ29udHJvbCAmJiAoPEZvcm1Db250cm9sU3RhdGU+Yy5zdGF0ZSkuc2NoZW1hKSB7XHJcbiAgICAgICAgcmVzdWx0W25hbWVdID0gKDxGb3JtQ29udHJvbFN0YXRlPmMuc3RhdGUpLnNjaGVtYTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfSwge30pO1xyXG4gIH1cclxuXHJcbiAgLyoqIEBpbnRlcm5hbCAqL1xyXG4gIF9nZXRDb250cm9sU2NoZW1hID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIHRoaXMub3B0aW9ucy5zY2hlbWEgfHwgSm9pLm9iamVjdCgpLmtleXModGhpcy5fcmVkdWNlU2NoZW1hKCkpO1xyXG4gIH07XHJcblxyXG4gIC8qKiBAaW50ZXJuYWwgKi9cclxuICBfcnVuSm9pVmFsaWRhdGlvbigpIHtcclxuICAgIGlmICh0aGlzLnNjaGVtYSkge1xyXG5cclxuICAgICAgY29uc3QgdmFsaWRhdGVPYmplY3QgPSAodGhpcy5zY2hlbWFbJ190eXBlJ10gIT09ICdvYmplY3QnKSA/IHsgW3RoaXMubmFtZV06IHRoaXMudmFsdWUgfSA6IHRoaXMudmFsdWU7XHJcbiAgICAgIGNvbnN0IHZhbGlkYXRlU2NoZW1hID0gKHRoaXMuc2NoZW1hWydfdHlwZSddICE9PSAnb2JqZWN0JykgPyB7IFt0aGlzLm5hbWVdOiB0aGlzLnNjaGVtYSB9IDogdGhpcy5zY2hlbWE7XHJcblxyXG5cclxuICAgICAgY29uc3QgcmVzdWx0ID0gSm9pLnZhbGlkYXRlKHZhbGlkYXRlT2JqZWN0LCB2YWxpZGF0ZVNjaGVtYSwge1xyXG4gICAgICAgIGFib3J0RWFybHk6IGZhbHNlLFxyXG4gICAgICAgIHN0cmlwVW5rbm93bjogdHJ1ZVxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGlmICghcmVzdWx0LmVycm9yKSByZXR1cm4gbnVsbDtcclxuXHJcbiAgICAgIHRoaXMuX3VwZGF0ZUNoaWxkRXJyb3IoPEpvaUVycm9yW10+cmVzdWx0LmVycm9yLmRldGFpbHMpO1xyXG5cclxuICAgICAgcmV0dXJuIDxKb2lFcnJvcltdPnJlc3VsdC5lcnJvci5kZXRhaWxzO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxuXHJcblxyXG4gIHByaXZhdGUgX2FwcGx5Rm9ybVN0YXRlID0gKCkgPT4ge1xyXG4gICAgaWYgKCF0aGlzLnBhcmVudCAmJiAhdGhpcy5yb290KSB7XHJcbiAgICAgIHRoaXMuc2V0Um9vdCh0aGlzKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuXHJcbiAgLyoqIEBpbnRlcm5hbCAqL1xyXG4gIHByaXZhdGUgX3NldFVwQ29udHJvbHMoY29udHJvbENvbmZpZzogRm9ybUdyb3VwU3RhdGUpOiB2b2lkIHtcclxuICAgICg8Rm9ybUdyb3VwU3RhdGU+dGhpcy5jb250cm9scykgPSB7fTtcclxuICAgIF8uZm9yT3duKGNvbnRyb2xDb25maWcsIChjOiBBYnN0cmFjdENvbnRyb2wsIG5hbWU6IHN0cmluZykgPT4ge1xyXG4gICAgICBjLnNldFBhcmVudCh0aGlzKTtcclxuICAgICAgYy5zZXRSb290KHRoaXMucm9vdCk7XHJcbiAgICAgIGMubmFtZSA9IG5hbWU7XHJcbiAgICAgIHRoaXMuY29udHJvbHNbbmFtZV0gPSBjO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuXHJcbiAgLyoqIEBpbnRlcm5hbCAqL1xyXG4gIF90aHJvd0lmQ29udHJvbE1pc3NpbmcobmFtZTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICBpZiAoIV8ua2V5cyh0aGlzLmNvbnRyb2xzKS5sZW5ndGgpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKGBcclxuICAgICAgICBUaGVyZSBhcmUgbm8gZm9ybSBjb250cm9scyByZWdpc3RlcmVkIHdpdGggdGhpcyBncm91cCB5ZXQuICBJZiB5b3UncmUgdXNpbmcgbmdNb2RlbCxcclxuICAgICAgICB5b3UgbWF5IHdhbnQgdG8gY2hlY2sgbmV4dCB0aWNrIChlLmcuIHVzZSBzZXRUaW1lb3V0KS5cclxuICAgICAgYCk7XHJcbiAgICB9XHJcbiAgICBpZiAoIXRoaXMuY29udHJvbHNbbmFtZV0pIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKGBDYW5ub3QgZmluZCBmb3JtIGNvbnRyb2wgd2l0aCBuYW1lOiAke25hbWV9LmApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcblxyXG4gIC8qKiBAaW50ZXJuYWwgKi9cclxuICBfYWxsQ29udHJvbHNEaXNhYmxlZCgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiBfLmV2ZXJ5KF8udmFsdWVzKHRoaXMuY29udHJvbHMpLCAoYzogQWJzdHJhY3RDb250cm9sKSA9PiBjLmRpc2FibGVkKTtcclxuICB9XHJcblxyXG4gIC8qKiBAaW50ZXJuYWwgKi9cclxuICBfYW55Q29udHJvbHNIYXZlU3RhdHVzKHN0YXR1czogc3RyaW5nKTogYm9vbGVhbiB7XHJcblxyXG4gICAgcmV0dXJuICEhXy5maW5kKF8udmFsdWVzKHRoaXMuY29udHJvbHMpLCBbJ3N0YXR1cycsIHN0YXR1c10pO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbiJdfQ==