"use strict";
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var AbstractControl_1 = require("./AbstractControl");
var lodash_1 = tslib_1.__importDefault(require("lodash"));
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
 * \@usageNotes
 *
 * ### Initializing Form Controls
 *
 * Instantiate a `FormControl`, with an initial value.
 *
 * ```ts
 * const control = new FormControl('some value');
 * console.log(control.value);     // 'some value'
 * ```
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
 * \@publicApi
 */
var /**
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
 * \@usageNotes
 *
 * ### Initializing Form Controls
 *
 * Instantiate a `FormControl`, with an initial value.
 *
 * ```ts
 * const control = new FormControl('some value');
 * console.log(control.value);     // 'some value'
 * ```
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
 * \@publicApi
 */
FormControl = /** @class */ (function (_super) {
    tslib_1.__extends(FormControl, _super);
    /**
     * Creates a new `FormControl` instance.
     *
     * @param config Initializes the control with an object that defines the initial state.
     *
     */
    function FormControl(state) {
        var _this = _super.call(this, (/** @type {?} */ (state)), (/** @type {?} */ (state.options))) || this;
        /**
         * \@internal
         */
        _this._getControlSchema = function () {
            if (((/** @type {?} */ (_this.state))).schema)
                return ((/** @type {?} */ (_this.state))).schema;
        };
        /**
         * Sets the async validators that are active on this control. Calling this
         * overwrites any existing async validators.
         */
        _this._setAsyncValidators = function (asyncValidators) {
            // (this as { asyncValidator: ValidatorFn | null }).asyncValidator = coerceToAsyncValidator(asyncValidators);
        };
        _this._applyControlState = function () {
            ((/** @type {?} */ (_this.value))) = null;
            /** @type {?} */
            var properties = ((/** @type {?} */ (_this.state))).props;
            if (properties) {
                ((/** @type {?} */ (_this.value))) = properties.value;
            }
            // state.disabled ? this.disable({onlySelf: true, emitEvent: false}) :
            //         this.enable({onlySelf: true, emitEvent: false});
        };
        // this._coerceToJoiSchema();
        _this._setAsyncValidators(state.asyncValidator);
        _this._initObservables();
        _this._initValidators();
        _this._applyControlState();
        _this.updateValueAndValidity({ onlySelf: true, emitEvent: false });
        return _this;
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
    /**
     * Sets a new value for the form control.
     *
     * @param {?} value The new value for the control.
     * @param {?=} options options options that determine how the control proopagates changes
     * and emits events when the value changes.
     * The options options are passed to the {\@link IonarAbstractControl#updateValueAndValidity
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
     * @return {?}
     */
    FormControl.prototype.setValue = /**
     * Sets a new value for the form control.
     *
     * @param {?} value The new value for the control.
     * @param {?=} options options options that determine how the control proopagates changes
     * and emits events when the value changes.
     * The options options are passed to the {\@link IonarAbstractControl#updateValueAndValidity
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
     * @return {?}
     */
    function (value, options) {
        if (options === void 0) { options = {}; }
        ((/** @type {?} */ (this))).value = value;
        this.markAsDirty();
        this.updateValueAndValidity(options);
        if (lodash_1.default.has(this.options, ['submitOnChange'])) {
            this.root.submit(true);
        }
    };
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
    /**
     * Resets the form control, marking it `pristine` and `untouched`, and setting
     * the value to null.
     *
     * @param {?=} value
     * @param {?=} options options options that determine how the control propagates changes
     * and emits events after the value changes.
     *
     * * `onlySelf`: When true, each change only affects this control, and not its parent. Default is
     * false.
     * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
     * `valueChanges`
     * observables emit events with the latest status and value when the control is reset.
     * When false, no events are emitted.
     *
     * @return {?}
     */
    FormControl.prototype.reset = /**
     * Resets the form control, marking it `pristine` and `untouched`, and setting
     * the value to null.
     *
     * @param {?=} value
     * @param {?=} options options options that determine how the control propagates changes
     * and emits events after the value changes.
     *
     * * `onlySelf`: When true, each change only affects this control, and not its parent. Default is
     * false.
     * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
     * `valueChanges`
     * observables emit events with the latest status and value when the control is reset.
     * When false, no events are emitted.
     *
     * @return {?}
     */
    function (value, options) {
        if (value === void 0) { value = null; }
        if (options === void 0) { options = {}; }
        this.markAsPristine(options);
        this.markAsUntouched(options);
        this._applyControlState();
        this.updateValueAndValidity(options);
        if (lodash_1.default.has(this.options, ['submitOnChange'])) {
            this.root.submit(true);
        }
    };
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
    /**
     * Resets the form control, marking it `pristine` and `untouched`, and setting
     * the value to null.
     *
     * @param {?=} options options options that determine how the control propagates changes
     * and emits events after the value changes.
     *
     * * `onlySelf`: When true, each change only affects this control, and not its parent. Default is
     * false.
     * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
     * `valueChanges`
     * observables emit events with the latest status and value when the control is reset.
     * When false, no events are emitted.
     *
     * @return {?}
     */
    FormControl.prototype.clear = /**
     * Resets the form control, marking it `pristine` and `untouched`, and setting
     * the value to null.
     *
     * @param {?=} options options options that determine how the control propagates changes
     * and emits events after the value changes.
     *
     * * `onlySelf`: When true, each change only affects this control, and not its parent. Default is
     * false.
     * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
     * `valueChanges`
     * observables emit events with the latest status and value when the control is reset.
     * When false, no events are emitted.
     *
     * @return {?}
     */
    function (options) {
        if (options === void 0) { options = {}; }
        this.markAsPristine(options);
        this.markAsUntouched(options);
        ((/** @type {?} */ (this))).value = null;
        this.updateValueAndValidity(options);
        if (lodash_1.default.has(this.options, ['submitOnChange'])) {
            this.root.submit(true);
        }
    };
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
    /**
     * Sets errors on a form control when running validations manually, rather than automatically.
     *
     * Calling `setErrors` also updates the validity of the parent control.
     *
     * \@usageNotes
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
     * @param {?} errors
     * @param {?=} opts
     * @return {?}
     */
    FormControl.prototype.setErrors = /**
     * Sets errors on a form control when running validations manually, rather than automatically.
     *
     * Calling `setErrors` also updates the validity of the parent control.
     *
     * \@usageNotes
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
     * @param {?} errors
     * @param {?=} opts
     * @return {?}
     */
    function (errors, opts) {
        if (opts === void 0) { opts = {}; }
        ((/** @type {?} */ (this))).errors = errors;
        this._updateControlsErrors(opts.emitEvent !== false);
    };
    /** @internal */
    /**
     * \@internal
     * @return {?}
     */
    FormControl.prototype._updateValue = /**
     * \@internal
     * @return {?}
     */
    function () {
    };
    /**
     * @internal
     */
    /**
     * \@internal
     * @return {?}
     */
    FormControl.prototype._allControlsDisabled = /**
     * \@internal
     * @return {?}
     */
    function () {
        return this.disabled;
    };
    /** @internal */
    /**
     * \@internal
     * @param {?} status
     * @return {?}
     */
    FormControl.prototype._anyControlsHaveStatus = /**
     * \@internal
     * @param {?} status
     * @return {?}
     */
    function (status) {
        return false;
    };
    return FormControl;
}(AbstractControl_1.AbstractControl));
exports.FormControl = FormControl;
if (false) {
    /**
     * \@internal
     * @type {?}
     */
    FormControl.prototype._getControlSchema;
    /**
     * Sets the async validators that are active on this control. Calling this
     * overwrites any existing async validators.
     * @type {?}
     * @private
     */
    FormControl.prototype._setAsyncValidators;
    /**
     * @type {?}
     * @private
     */
    FormControl.prototype._applyControlState;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRm9ybUNvbnRyb2wuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AaW9uYXIvZm9ybS8iLCJzb3VyY2VzIjpbImNvcmUvbW9kZWxzL0Zvcm1Db250cm9sLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQSxxREFBdUY7QUFLdkYsMERBQXVCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXFHdkI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBQWlDLHVDQUFlO0lBRzlDOzs7OztPQUtHO0lBQ0gscUJBQVksS0FBdUI7UUFBbkMsWUFDRSxrQkFDRSxtQkFBa0IsS0FBSyxFQUFBLEVBQ3ZCLG1CQUErQixLQUFLLENBQUMsT0FBTyxFQUFBLENBQzdDLFNBT0Y7Ozs7UUFpSUQsdUJBQWlCLEdBQUc7WUFDbEIsSUFBSSxDQUFDLG1CQUFrQixLQUFJLENBQUMsS0FBSyxFQUFBLENBQUMsQ0FBQyxNQUFNO2dCQUFFLE9BQU8sQ0FBQyxtQkFBa0IsS0FBSSxDQUFDLEtBQUssRUFBQSxDQUFDLENBQUMsTUFBTSxDQUFDO1FBRzFGLENBQUMsQ0FBQzs7Ozs7UUFPTSx5QkFBbUIsR0FBRyxVQUFDLGVBQTZEO1lBRzFGLDZHQUE2RztRQUMvRyxDQUFDLENBQUM7UUFTTSx3QkFBa0IsR0FBRztZQUMzQixDQUFDLG1CQUFhLEtBQUksQ0FBQyxLQUFLLEVBQUEsQ0FBQyxHQUFHLElBQUksQ0FBQzs7Z0JBQzNCLFVBQVUsR0FBRyxDQUFDLG1CQUFrQixLQUFJLENBQUMsS0FBSyxFQUFBLENBQUMsQ0FBQyxLQUFLO1lBRXZELElBQUksVUFBVSxFQUFFO2dCQUNkLENBQUMsbUJBQWEsS0FBSSxDQUFDLEtBQUss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QUFpQyxDQUFDLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUN4RCxJQUFJLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLFNBQVMsS0FBSyxLQUFLLENBQUMsQ0FBQztJQUN2RCxDQUFDO0lBcUJELGdCQUFnQjs7Ozs7SUFDaEIsa0NBQVk7Ozs7SUFBWjtJQUVBLENBQUM7SUFpQkQ7O09BRUc7Ozs7O0lBQ0gsMENBQW9COzs7O0lBQXBCO1FBQ0UsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3ZCLENBQUM7SUFFRCxnQkFBZ0I7Ozs7OztJQUNoQiw0Q0FBc0I7Ozs7O0lBQXRCLFVBQXVCLE1BQWM7UUFDbkMsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDO0lBQ0gsa0JBQUM7QUFBRCxDQUFDLEFBdE1ELENBQWlDLGlDQUFlLEdBc00vQztBQXRNWSxrQ0FBVzs7Ozs7O0lBcUp0Qix3Q0FJRTs7Ozs7OztJQU9GLDBDQUlFOzs7OztJQVNGLHlDQVdFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWJzdHJhY3RDb250cm9sLCBESVNBQkxFRCwgSU5WQUxJRCwgUEVORElORywgVkFMSUQgfSBmcm9tICcuL0Fic3RyYWN0Q29udHJvbCc7XHJcbmltcG9ydCB7XHJcbiAgQXN5bmNWYWxpZGF0b3JGbixcclxuICBKb2lFcnJvclxyXG59IGZyb20gJy4uL2ludGVyZmFjZXMvVmFsaWRhdG9yJztcclxuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcclxuaW1wb3J0IHsgQWJzdHJhY3RDb250cm9sT3B0aW9ucywgRm9ybUNvbnRyb2xTdGF0ZSB9IGZyb20gJy4uL2ludGVyZmFjZXMvRm9ybSc7XHJcblxyXG5cclxuLyoqXHJcbiAqIFRyYWNrcyB0aGUgdmFsdWUgYW5kIHZhbGlkYXRpb24gc3RhdHVzIG9mIGFuIGluZGl2aWR1YWwgZm9ybSBjb250cm9sLlxyXG4gKlxyXG4gKiBUaGlzIGlzIG9uZSBvZiB0aGUgdGhyZWUgZnVuZGFtZW50YWwgYnVpbGRpbmcgYmxvY2tzIG9mIEFuZ3VsYXIgZm9ybXMsIGFsb25nIHdpdGhcclxuICogYEZvcm1Hcm91cC50c2AgYW5kIGBGb3JtQXJyYXlgLiBJdCBleHRlbmRzIHRoZSBgSW9uYXJBYnN0cmFjdENvbnRyb2xgIGNsYXNzIHRoYXRcclxuICogaW1wbGVtZW50cyBtb3N0IG9mIHRoZSBiYXNlIGZ1bmN0aW9uYWxpdHkgZm9yIGFjY2Vzc2luZyB0aGUgdmFsdWUsIHZhbGlkYXRpb24gc3RhdHVzLFxyXG4gKiB1c2VyIGludGVyYWN0aW9ucyBhbmQgZXZlbnRzLlxyXG4gKlxyXG4gKiBAc2VlIGBJb25hckFic3RyYWN0Q29udHJvbGBcclxuICogQHNlZSBbUmVhY3RpdmUgRm9ybXMgR3VpZGVdKGd1aWRlL3JlYWN0aXZlLWZvcm1zKVxyXG4gKiBAc2VlIFtVc2FnZSBOb3Rlc10oI3VzYWdlLW5vdGVzKVxyXG4gKlxyXG4gKiBAdXNhZ2VOb3Rlc1xyXG4gKlxyXG4gKiAjIyMgSW5pdGlhbGl6aW5nIEZvcm0gQ29udHJvbHNcclxuICpcclxuICogSW5zdGFudGlhdGUgYSBgRm9ybUNvbnRyb2xgLCB3aXRoIGFuIGluaXRpYWwgdmFsdWUuXHJcbiAqXHJcbiAqIGBgYHRzXHJcbiAqIGNvbnN0IGNvbnRyb2wgPSBuZXcgRm9ybUNvbnRyb2woJ3NvbWUgdmFsdWUnKTtcclxuICogY29uc29sZS5sb2coY29udHJvbC52YWx1ZSk7ICAgICAvLyAnc29tZSB2YWx1ZSdcclxuICpgYGBcclxuICpcclxuICogVGhlIGZvbGxvd2luZyBleGFtcGxlIGluaXRpYWxpemVzIHRoZSBjb250cm9sIHdpdGggYSBmb3JtIHN0YXRlIG9iamVjdC4gVGhlIGB2YWx1ZWBcclxuICogYW5kIGBkaXNhYmxlZGAga2V5cyBhcmUgcmVxdWlyZWQgaW4gdGhpcyBjYXNlLlxyXG4gKlxyXG4gKiBgYGB0c1xyXG4gKiBjb25zdCBjb250cm9sID0gbmV3IEZvcm1Db250cm9sKHsgdmFsdWU6ICduL2EnLCBkaXNhYmxlZDogdHJ1ZSB9KTtcclxuICogY29uc29sZS5sb2coY29udHJvbC52YWx1ZSk7ICAgICAvLyAnbi9hJ1xyXG4gKiBjb25zb2xlLmxvZyhjb250cm9sLnN0YXR1cyk7ICAgIC8vICdESVNBQkxFRCdcclxuICogYGBgXHJcbiAqXHJcbiAqIFRoZSBmb2xsb3dpbmcgZXhhbXBsZSBpbml0aWFsaXplcyB0aGUgY29udHJvbCB3aXRoIGEgc3luYyB2YWxpZGF0b3IuXHJcbiAqXHJcbiAqIGBgYHRzXHJcbiAqIGNvbnN0IGNvbnRyb2wgPSBuZXcgRm9ybUNvbnRyb2woJycsIFZhbGlkYXRvcnMucmVxdWlyZWQpO1xyXG4gKiBjb25zb2xlLmxvZyhjb250cm9sLnZhbHVlKTsgICAgICAvLyAnJ1xyXG4gKiBjb25zb2xlLmxvZyhjb250cm9sLnN0YXR1cyk7ICAgICAvLyAnSU5WQUxJRCdcclxuICogYGBgXHJcbiAqXHJcbiAqIFRoZSBmb2xsb3dpbmcgZXhhbXBsZSBpbml0aWFsaXplcyB0aGUgY29udHJvbCB1c2luZyBhbiBvcHRpb25zIG9iamVjdC5cclxuICpcclxuICogYGBgdHNcclxuICogY29uc3QgY29udHJvbCA9IG5ldyBGb3JtQ29udHJvbCgnJywge1xyXG4gKiAgICB2YWxpZGF0b3JzOiBWYWxpZGF0b3JzLnJlcXVpcmVkLFxyXG4gKiAgICBhc3luY1ZhbGlkYXRvcnM6IG15QXN5bmNWYWxpZGF0b3JcclxuICogfSk7XHJcbiAqIGBgYFxyXG4gKlxyXG4gKiAjIyMgQ29uZmlndXJlIHRoZSBjb250cm9sIHRvIHVwZGF0ZSBvbiBhIGJsdXIgZXZlbnRcclxuICpcclxuICogU2V0IHRoZSBgdXBkYXRlT25gIG9wdGlvbiB0byBgJ2JsdXInYCB0byB1cGRhdGUgb24gdGhlIGJsdXIgYGV2ZW50YC5cclxuICpcclxuICogYGBgdHNcclxuICogY29uc3QgY29udHJvbCA9IG5ldyBGb3JtQ29udHJvbCgnJywgeyB1cGRhdGVPbjogJ2JsdXInIH0pO1xyXG4gKiBgYGBcclxuICpcclxuICogIyMjIENvbmZpZ3VyZSB0aGUgY29udHJvbCB0byB1cGRhdGUgb24gYSBzdWJtaXQgZXZlbnRcclxuICpcclxuICogU2V0IHRoZSBgdXBkYXRlT25gIG9wdGlvbiB0byBgJ3N1Ym1pdCdgIHRvIHVwZGF0ZSBvbiBhIHN1Ym1pdCBgZXZlbnRgLlxyXG4gKlxyXG4gKiBgYGB0c1xyXG4gKiBjb25zdCBjb250cm9sID0gbmV3IEZvcm1Db250cm9sKCcnLCB7IHVwZGF0ZU9uOiAnc3VibWl0JyB9KTtcclxuICogYGBgXHJcbiAqXHJcbiAqICMjIyBSZXNldCB0aGUgY29udHJvbCBiYWNrIHRvIGFuIGluaXRpYWwgdmFsdWVcclxuICpcclxuICogWW91IHJlc2V0IHRvIGEgc3BlY2lmaWMgZm9ybSBzdGF0ZSBieSBwYXNzaW5nIHRocm91Z2ggYSBzdGFuZGFsb25lXHJcbiAqIHZhbHVlIG9yIGEgZm9ybSBzdGF0ZSBvYmplY3QgdGhhdCBjb250YWlucyBib3RoIGEgdmFsdWUgYW5kIGEgZGlzYWJsZWQgc3RhdGVcclxuICogKHRoZXNlIGFyZSB0aGUgb25seSB0d28gcHJvcGVydGllcyB0aGF0IGNhbm5vdCBiZSBjYWxjdWxhdGVkKS5cclxuICpcclxuICogYGBgdHNcclxuICogY29uc3QgY29udHJvbCA9IG5ldyBGb3JtQ29udHJvbCgnTmFuY3knKTtcclxuICpcclxuICogY29uc29sZS5sb2coY29udHJvbC52YWx1ZSk7IC8vICdOYW5jeSdcclxuICpcclxuICogY29udHJvbC5yZXNldCgnRHJldycpO1xyXG4gKlxyXG4gKiBjb25zb2xlLmxvZyhjb250cm9sLnZhbHVlKTsgLy8gJ0RyZXcnXHJcbiAqIGBgYFxyXG4gKlxyXG4gKiAjIyMgUmVzZXQgdGhlIGNvbnRyb2wgYmFjayB0byBhbiBpbml0aWFsIHZhbHVlIGFuZCBkaXNhYmxlZFxyXG4gKlxyXG4gKiBgYGBcclxuICogY29uc3QgY29udHJvbCA9IG5ldyBGb3JtQ29udHJvbCgnTmFuY3knKTtcclxuICpcclxuICogY29uc29sZS5sb2coY29udHJvbC52YWx1ZSk7IC8vICdOYW5jeSdcclxuICogY29uc29sZS5sb2coY29udHJvbC5zdGF0dXMpOyAvLyAnVkFMSUQnXHJcbiAqXHJcbiAqIGNvbnRyb2wucmVzZXQoeyB2YWx1ZTogJ0RyZXcnLCBkaXNhYmxlZDogdHJ1ZSB9KTtcclxuICpcclxuICogY29uc29sZS5sb2coY29udHJvbC52YWx1ZSk7IC8vICdEcmV3J1xyXG4gKiBjb25zb2xlLmxvZyhjb250cm9sLnN0YXR1cyk7IC8vICdESVNBQkxFRCdcclxuICogYGBgXHJcbiAqXHJcbiAqIEBwdWJsaWNBcGlcclxuICovXHJcbmV4cG9ydCBjbGFzcyBGb3JtQ29udHJvbCBleHRlbmRzIEFic3RyYWN0Q29udHJvbCB7XHJcblxyXG5cclxuICAvKipcclxuICAgKiBDcmVhdGVzIGEgbmV3IGBGb3JtQ29udHJvbGAgaW5zdGFuY2UuXHJcbiAgICpcclxuICAgKiBAcGFyYW0gY29uZmlnIEluaXRpYWxpemVzIHRoZSBjb250cm9sIHdpdGggYW4gb2JqZWN0IHRoYXQgZGVmaW5lcyB0aGUgaW5pdGlhbCBzdGF0ZS5cclxuICAgKlxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKHN0YXRlOiBGb3JtQ29udHJvbFN0YXRlKSB7XHJcbiAgICBzdXBlcihcclxuICAgICAgPEZvcm1Db250cm9sU3RhdGU+c3RhdGUsXHJcbiAgICAgIDxBYnN0cmFjdENvbnRyb2xPcHRpb25zIHwgbnVsbD5zdGF0ZS5vcHRpb25zXHJcbiAgICApO1xyXG4gICAgLy8gdGhpcy5fY29lcmNlVG9Kb2lTY2hlbWEoKTtcclxuICAgIHRoaXMuX3NldEFzeW5jVmFsaWRhdG9ycyhzdGF0ZS5hc3luY1ZhbGlkYXRvcik7XHJcbiAgICB0aGlzLl9pbml0T2JzZXJ2YWJsZXMoKTtcclxuICAgIHRoaXMuX2luaXRWYWxpZGF0b3JzKCk7XHJcbiAgICB0aGlzLl9hcHBseUNvbnRyb2xTdGF0ZSgpO1xyXG4gICAgdGhpcy51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KHsgb25seVNlbGY6IHRydWUsIGVtaXRFdmVudDogZmFsc2UgfSk7XHJcbiAgfVxyXG5cclxuXHJcbiAgLyoqXHJcbiAgICogU2V0cyBhIG5ldyB2YWx1ZSBmb3IgdGhlIGZvcm0gY29udHJvbC5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB2YWx1ZSBUaGUgbmV3IHZhbHVlIGZvciB0aGUgY29udHJvbC5cclxuICAgKiBAcGFyYW0gb3B0aW9ucyBvcHRpb25zIG9wdGlvbnMgdGhhdCBkZXRlcm1pbmUgaG93IHRoZSBjb250cm9sIHByb29wYWdhdGVzIGNoYW5nZXNcclxuICAgKiBhbmQgZW1pdHMgZXZlbnRzIHdoZW4gdGhlIHZhbHVlIGNoYW5nZXMuXHJcbiAgICogVGhlIG9wdGlvbnMgb3B0aW9ucyBhcmUgcGFzc2VkIHRvIHRoZSB7QGxpbmsgSW9uYXJBYnN0cmFjdENvbnRyb2wjdXBkYXRlVmFsdWVBbmRWYWxpZGl0eVxyXG4gICAqIHVwZGF0ZVZhbHVlQW5kVmFsaWRpdHl9IG1ldGhvZC5cclxuICAgKlxyXG4gICAqICogYG9ubHlTZWxmYDogV2hlbiB0cnVlLCBlYWNoIGNoYW5nZSBvbmx5IGFmZmVjdHMgdGhpcyBjb250cm9sLCBhbmQgbm90IGl0cyBwYXJlbnQuIERlZmF1bHQgaXNcclxuICAgKiBmYWxzZS5cclxuICAgKiAqIGBlbWl0RXZlbnRgOiBXaGVuIHRydWUgb3Igbm90IHN1cHBsaWVkICh0aGUgZGVmYXVsdCksIGJvdGggdGhlIGBzdGF0dXNDaGFuZ2VzYCBhbmRcclxuICAgKiBgdmFsdWVDaGFuZ2VzYFxyXG4gICAqIG9ic2VydmFibGVzIGVtaXQgZXZlbnRzIHdpdGggdGhlIGxhdGVzdCBzdGF0dXMgYW5kIHZhbHVlIHdoZW4gdGhlIGNvbnRyb2wgdmFsdWUgaXMgdXBkYXRlZC5cclxuICAgKiBXaGVuIGZhbHNlLCBubyBldmVudHMgYXJlIGVtaXR0ZWQuXHJcbiAgICogKiBgZW1pdE1vZGVsVG9WaWV3Q2hhbmdlYDogV2hlbiB0cnVlIG9yIG5vdCBzdXBwbGllZCAgKHRoZSBkZWZhdWx0KSwgZWFjaCBjaGFuZ2UgdHJpZ2dlcnMgYW5cclxuICAgKiBgb25DaGFuZ2VgIGV2ZW50IHRvXHJcbiAgICogdXBkYXRlIHRoZSB2aWV3LlxyXG4gICAqICogYGVtaXRWaWV3VG9Nb2RlbENoYW5nZWA6IFdoZW4gdHJ1ZSBvciBub3Qgc3VwcGxpZWQgKHRoZSBkZWZhdWx0KSwgZWFjaCBjaGFuZ2UgdHJpZ2dlcnMgYW5cclxuICAgKiBgbmdNb2RlbENoYW5nZWBcclxuICAgKiBldmVudCB0byB1cGRhdGUgdGhlIG1vZGVsLlxyXG4gICAqXHJcbiAgICovXHJcbiAgc2V0VmFsdWUodmFsdWU6IGFueSwgb3B0aW9uczoge1xyXG4gICAgb25seVNlbGY/OiBib29sZWFuLFxyXG4gICAgZW1pdEV2ZW50PzogYm9vbGVhblxyXG4gIH0gPSB7fSk6IHZvaWQge1xyXG4gICAgKHRoaXMgYXMgeyB2YWx1ZTogYW55IH0pLnZhbHVlID0gdmFsdWU7XHJcbiAgICB0aGlzLm1hcmtBc0RpcnR5KCk7XHJcbiAgICB0aGlzLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkob3B0aW9ucyk7XHJcblxyXG4gICAgaWYgKF8uaGFzKHRoaXMub3B0aW9ucywgWydzdWJtaXRPbkNoYW5nZSddKSkge1xyXG5cclxuICAgICAgdGhpcy5yb290LnN1Ym1pdCh0cnVlKTtcclxuICAgIH1cclxuXHJcbiAgfVxyXG5cclxuXHJcbiAgLyoqXHJcbiAgICogUmVzZXRzIHRoZSBmb3JtIGNvbnRyb2wsIG1hcmtpbmcgaXQgYHByaXN0aW5lYCBhbmQgYHVudG91Y2hlZGAsIGFuZCBzZXR0aW5nXHJcbiAgICogdGhlIHZhbHVlIHRvIG51bGwuXHJcbiAgICpcclxuICAgKiBAcGFyYW0gZm9ybVN0YXRlIFJlc2V0cyB0aGUgY29udHJvbCB3aXRoIGFuIGluaXRpYWwgdmFsdWUsXHJcbiAgICogb3IgYW4gb2JqZWN0IHRoYXQgZGVmaW5lcyB0aGUgaW5pdGlhbCB2YWx1ZSBhbmQgZGlzYWJsZWQgc3RhdGUuXHJcbiAgICpcclxuICAgKiBAcGFyYW0gb3B0aW9ucyBvcHRpb25zIG9wdGlvbnMgdGhhdCBkZXRlcm1pbmUgaG93IHRoZSBjb250cm9sIHByb3BhZ2F0ZXMgY2hhbmdlc1xyXG4gICAqIGFuZCBlbWl0cyBldmVudHMgYWZ0ZXIgdGhlIHZhbHVlIGNoYW5nZXMuXHJcbiAgICpcclxuICAgKiAqIGBvbmx5U2VsZmA6IFdoZW4gdHJ1ZSwgZWFjaCBjaGFuZ2Ugb25seSBhZmZlY3RzIHRoaXMgY29udHJvbCwgYW5kIG5vdCBpdHMgcGFyZW50LiBEZWZhdWx0IGlzXHJcbiAgICogZmFsc2UuXHJcbiAgICogKiBgZW1pdEV2ZW50YDogV2hlbiB0cnVlIG9yIG5vdCBzdXBwbGllZCAodGhlIGRlZmF1bHQpLCBib3RoIHRoZSBgc3RhdHVzQ2hhbmdlc2AgYW5kXHJcbiAgICogYHZhbHVlQ2hhbmdlc2BcclxuICAgKiBvYnNlcnZhYmxlcyBlbWl0IGV2ZW50cyB3aXRoIHRoZSBsYXRlc3Qgc3RhdHVzIGFuZCB2YWx1ZSB3aGVuIHRoZSBjb250cm9sIGlzIHJlc2V0LlxyXG4gICAqIFdoZW4gZmFsc2UsIG5vIGV2ZW50cyBhcmUgZW1pdHRlZC5cclxuICAgKlxyXG4gICAqL1xyXG4gIHJlc2V0KHZhbHVlOiBhbnkgPSBudWxsLCBvcHRpb25zOiB7IG9ubHlTZWxmPzogYm9vbGVhbiwgZW1pdEV2ZW50PzogYm9vbGVhbiB9ID0ge30pOiB2b2lkIHtcclxuICAgIHRoaXMubWFya0FzUHJpc3RpbmUob3B0aW9ucyk7XHJcbiAgICB0aGlzLm1hcmtBc1VudG91Y2hlZChvcHRpb25zKTtcclxuICAgIHRoaXMuX2FwcGx5Q29udHJvbFN0YXRlKCk7XHJcbiAgICB0aGlzLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkob3B0aW9ucyk7XHJcbiAgICBpZiAoXy5oYXModGhpcy5vcHRpb25zLCBbJ3N1Ym1pdE9uQ2hhbmdlJ10pKSB7XHJcblxyXG4gICAgICB0aGlzLnJvb3Quc3VibWl0KHRydWUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmVzZXRzIHRoZSBmb3JtIGNvbnRyb2wsIG1hcmtpbmcgaXQgYHByaXN0aW5lYCBhbmQgYHVudG91Y2hlZGAsIGFuZCBzZXR0aW5nXHJcbiAgICogdGhlIHZhbHVlIHRvIG51bGwuXHJcbiAgICpcclxuICAgKiBAcGFyYW0gZm9ybVN0YXRlIFJlc2V0cyB0aGUgY29udHJvbCB3aXRoIGFuIGluaXRpYWwgdmFsdWUsXHJcbiAgICogb3IgYW4gb2JqZWN0IHRoYXQgZGVmaW5lcyB0aGUgaW5pdGlhbCB2YWx1ZSBhbmQgZGlzYWJsZWQgc3RhdGUuXHJcbiAgICpcclxuICAgKiBAcGFyYW0gb3B0aW9ucyBvcHRpb25zIG9wdGlvbnMgdGhhdCBkZXRlcm1pbmUgaG93IHRoZSBjb250cm9sIHByb3BhZ2F0ZXMgY2hhbmdlc1xyXG4gICAqIGFuZCBlbWl0cyBldmVudHMgYWZ0ZXIgdGhlIHZhbHVlIGNoYW5nZXMuXHJcbiAgICpcclxuICAgKiAqIGBvbmx5U2VsZmA6IFdoZW4gdHJ1ZSwgZWFjaCBjaGFuZ2Ugb25seSBhZmZlY3RzIHRoaXMgY29udHJvbCwgYW5kIG5vdCBpdHMgcGFyZW50LiBEZWZhdWx0IGlzXHJcbiAgICogZmFsc2UuXHJcbiAgICogKiBgZW1pdEV2ZW50YDogV2hlbiB0cnVlIG9yIG5vdCBzdXBwbGllZCAodGhlIGRlZmF1bHQpLCBib3RoIHRoZSBgc3RhdHVzQ2hhbmdlc2AgYW5kXHJcbiAgICogYHZhbHVlQ2hhbmdlc2BcclxuICAgKiBvYnNlcnZhYmxlcyBlbWl0IGV2ZW50cyB3aXRoIHRoZSBsYXRlc3Qgc3RhdHVzIGFuZCB2YWx1ZSB3aGVuIHRoZSBjb250cm9sIGlzIHJlc2V0LlxyXG4gICAqIFdoZW4gZmFsc2UsIG5vIGV2ZW50cyBhcmUgZW1pdHRlZC5cclxuICAgKlxyXG4gICAqL1xyXG4gIGNsZWFyKG9wdGlvbnM6IHsgb25seVNlbGY/OiBib29sZWFuLCBlbWl0RXZlbnQ/OiBib29sZWFuIH0gPSB7fSk6IHZvaWQge1xyXG4gICAgdGhpcy5tYXJrQXNQcmlzdGluZShvcHRpb25zKTtcclxuICAgIHRoaXMubWFya0FzVW50b3VjaGVkKG9wdGlvbnMpO1xyXG4gICAgKHRoaXMgYXMgeyB2YWx1ZTogYW55IH0pLnZhbHVlID0gbnVsbDtcclxuICAgIHRoaXMudXBkYXRlVmFsdWVBbmRWYWxpZGl0eShvcHRpb25zKTtcclxuICAgIGlmIChfLmhhcyh0aGlzLm9wdGlvbnMsIFsnc3VibWl0T25DaGFuZ2UnXSkpIHtcclxuXHJcbiAgICAgIHRoaXMucm9vdC5zdWJtaXQodHJ1ZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuXHJcbiAgLyoqXHJcbiAgICogU2V0cyBlcnJvcnMgb24gYSBmb3JtIGNvbnRyb2wgd2hlbiBydW5uaW5nIHZhbGlkYXRpb25zIG1hbnVhbGx5LCByYXRoZXIgdGhhbiBhdXRvbWF0aWNhbGx5LlxyXG4gICAqXHJcbiAgICogQ2FsbGluZyBgc2V0RXJyb3JzYCBhbHNvIHVwZGF0ZXMgdGhlIHZhbGlkaXR5IG9mIHRoZSBwYXJlbnQgY29udHJvbC5cclxuICAgKlxyXG4gICAqIEB1c2FnZU5vdGVzXHJcbiAgICogIyMjIE1hbnVhbGx5IHNldCB0aGUgZXJyb3JzIGZvciBhIGNvbnRyb2xcclxuICAgKlxyXG4gICAqIGBgYFxyXG4gICAqIGNvbnN0IGxvZ2luID0gbmV3IEZvcm1Db250cm9sKCdzb21lTG9naW4nKTtcclxuICAgKiBsb2dpbi5zZXRFcnJvcnMoe1xyXG4gICAqICAgbm90VW5pcXVlOiB0cnVlXHJcbiAgICogfSk7XHJcbiAgICpcclxuICAgKiBleHBlY3QobG9naW4udmFsaWQpLnRvRXF1YWwoZmFsc2UpO1xyXG4gICAqIGV4cGVjdChsb2dpbi5lcnJvcnMpLnRvRXF1YWwoeyBub3RVbmlxdWU6IHRydWUgfSk7XHJcbiAgICpcclxuICAgKiBsb2dpbi5zZXRWYWx1ZSgnc29tZU90aGVyTG9naW4nKTtcclxuICAgKlxyXG4gICAqIGV4cGVjdChsb2dpbi52YWxpZCkudG9FcXVhbCh0cnVlKTtcclxuICAgKiBgYGBcclxuICAgKi9cclxuICBzZXRFcnJvcnMoZXJyb3JzOiBhbnksIG9wdHM6IHsgZW1pdEV2ZW50PzogYm9vbGVhbiB9ID0ge30pOiB2b2lkIHtcclxuICAgICh0aGlzIGFzIHsgZXJyb3JzOiBKb2lFcnJvcltdIHwgbnVsbCB9KS5lcnJvcnMgPSBlcnJvcnM7XHJcbiAgICB0aGlzLl91cGRhdGVDb250cm9sc0Vycm9ycyhvcHRzLmVtaXRFdmVudCAhPT0gZmFsc2UpO1xyXG4gIH1cclxuXHJcbiAgLyoqIEBpbnRlcm5hbCAqL1xyXG4gIF9nZXRDb250cm9sU2NoZW1hID0gKCkgPT4ge1xyXG4gICAgaWYgKCg8Rm9ybUNvbnRyb2xTdGF0ZT50aGlzLnN0YXRlKS5zY2hlbWEpIHJldHVybiAoPEZvcm1Db250cm9sU3RhdGU+dGhpcy5zdGF0ZSkuc2NoZW1hO1xyXG5cclxuXHJcbiAgfTtcclxuXHJcblxyXG4gIC8qKlxyXG4gICAqIFNldHMgdGhlIGFzeW5jIHZhbGlkYXRvcnMgdGhhdCBhcmUgYWN0aXZlIG9uIHRoaXMgY29udHJvbC4gQ2FsbGluZyB0aGlzXHJcbiAgICogb3ZlcndyaXRlcyBhbnkgZXhpc3RpbmcgYXN5bmMgdmFsaWRhdG9ycy5cclxuICAgKi9cclxuICBwcml2YXRlIF9zZXRBc3luY1ZhbGlkYXRvcnMgPSAoYXN5bmNWYWxpZGF0b3JzOiBBc3luY1ZhbGlkYXRvckZuIHwgQXN5bmNWYWxpZGF0b3JGbltdIHwgbnVsbCk6IHZvaWQgPT4ge1xyXG5cclxuXHJcbiAgICAvLyAodGhpcyBhcyB7IGFzeW5jVmFsaWRhdG9yOiBWYWxpZGF0b3JGbiB8IG51bGwgfSkuYXN5bmNWYWxpZGF0b3IgPSBjb2VyY2VUb0FzeW5jVmFsaWRhdG9yKGFzeW5jVmFsaWRhdG9ycyk7XHJcbiAgfTtcclxuXHJcblxyXG4gIC8qKiBAaW50ZXJuYWwgKi9cclxuICBfdXBkYXRlVmFsdWUoKTogdm9pZCB7XHJcblxyXG4gIH1cclxuXHJcblxyXG4gIHByaXZhdGUgX2FwcGx5Q29udHJvbFN0YXRlID0gKCkgPT4ge1xyXG4gICAgKDxGb3JtQ29udHJvbD50aGlzLnZhbHVlKSA9IG51bGw7XHJcbiAgICBjb25zdCBwcm9wZXJ0aWVzID0gKDxGb3JtQ29udHJvbFN0YXRlPnRoaXMuc3RhdGUpLnByb3BzO1xyXG5cclxuICAgIGlmIChwcm9wZXJ0aWVzKSB7XHJcbiAgICAgICg8Rm9ybUNvbnRyb2w+dGhpcy52YWx1ZSkgPSBwcm9wZXJ0aWVzLnZhbHVlO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvLyBzdGF0ZS5kaXNhYmxlZCA/IHRoaXMuZGlzYWJsZSh7b25seVNlbGY6IHRydWUsIGVtaXRFdmVudDogZmFsc2V9KSA6XHJcbiAgICAvLyAgICAgICAgIHRoaXMuZW5hYmxlKHtvbmx5U2VsZjogdHJ1ZSwgZW1pdEV2ZW50OiBmYWxzZX0pO1xyXG4gIH07XHJcblxyXG5cclxuICAvKipcclxuICAgKiBAaW50ZXJuYWxcclxuICAgKi9cclxuICBfYWxsQ29udHJvbHNEaXNhYmxlZCgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLmRpc2FibGVkO1xyXG4gIH1cclxuXHJcbiAgLyoqIEBpbnRlcm5hbCAqL1xyXG4gIF9hbnlDb250cm9sc0hhdmVTdGF0dXMoc3RhdHVzOiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcbn1cclxuXHJcblxyXG4vLyBmdW5jdGlvbiBjb2VyY2VUb1ZhbGlkYXRvcih2YWxpZGF0b3JzOiBWYWxpZGF0aW9uQ29uZmlncyk6IFZhbGlkYXRvckZuIHwgbnVsbCB7XHJcbi8vXHJcbi8vICAgcmV0dXJuIFZhbGlkYXRvcnMuY29tcG9zZShjb252ZXJ0VG9WYWxpZGF0b3JGbih2YWxpZGF0b3JzKSk7XHJcbi8vIH07XHJcbi8vXHJcbi8vIGZ1bmN0aW9uIGNvbnZlcnRUb1ZhbGlkYXRvckZuKHZhbGlkYXRvcnM6IFZhbGlkYXRpb25Db25maWdzKTogVmFsaWRhdG9yRm5bXSB7XHJcbi8vICAgcmV0dXJuIF8ubWFwKHZhbGlkYXRvcnMsICh2YWx1ZSwga2V5KSA9PiB7XHJcbi8vICAgICBpZiAoIV8uaGFzKFZhbGlkYXRvcnMsIGtleSkpIHJldHVybiBudWxsO1xyXG4vL1xyXG4vLyAgICAgcmV0dXJuIFZhbGlkYXRvcnNba2V5XTtcclxuLy8gICB9KTtcclxuLy8gfVxyXG4vL1xyXG4vLyBmdW5jdGlvbiBjb2VyY2VUb0FzeW5jVmFsaWRhdG9yKGFzeW5jVmFsaWRhdG9yczogQXN5bmNWYWxpZGF0b3JGbiB8IEFzeW5jVmFsaWRhdG9yRm5bXSB8IG51bGwpOiBBc3luY1ZhbGlkYXRvckZuIHwgbnVsbCB7XHJcbi8vXHJcbi8vICAgcmV0dXJuIF8uaXNBcnJheShhc3luY1ZhbGlkYXRvcnMpID8gVmFsaWRhdG9ycy5jb21wb3NlQXN5bmMoXy5tYXAoYXN5bmNWYWxpZGF0b3JzLCAodmFsdWU6IEFzeW5jVmFsaWRhdG9yRm4sIGtleSk6IEFzeW5jVmFsaWRhdG9yRm4gfCBudWxsID0+IHZhbHVlKSkgOiBhc3luY1ZhbGlkYXRvcnMgfHwgbnVsbDtcclxuLy8gfTtcclxuIl19