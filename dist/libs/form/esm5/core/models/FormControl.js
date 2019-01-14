/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { AbstractControl } from './AbstractControl';
import _ from 'lodash';
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
        if (_.has(this.options, ['submitOnChange'])) {
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
        if (_.has(this.options, ['submitOnChange'])) {
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
        if (_.has(this.options, ['submitOnChange'])) {
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
}(AbstractControl));
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
export { FormControl };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRm9ybUNvbnRyb2wuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AaW9uYXIvZm9ybS8iLCJzb3VyY2VzIjpbImNvcmUvbW9kZWxzL0Zvcm1Db250cm9sLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLGVBQWUsRUFBcUMsTUFBTSxtQkFBbUIsQ0FBQztBQUt2RixPQUFPLENBQUMsTUFBTSxRQUFRLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBcUd2Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFBaUMsdUNBQWU7SUFHOUM7Ozs7O09BS0c7SUFDSCxxQkFBWSxLQUF1QjtRQUFuQyxZQUNFLGtCQUNFLG1CQUFrQixLQUFLLEVBQUEsRUFDdkIsbUJBQStCLEtBQUssQ0FBQyxPQUFPLEVBQUEsQ0FDN0MsU0FPRjs7OztRQWlJRCx1QkFBaUIsR0FBRztZQUNsQixJQUFJLENBQUMsbUJBQWtCLEtBQUksQ0FBQyxLQUFLLEVBQUEsQ0FBQyxDQUFDLE1BQU07Z0JBQUUsT0FBTyxDQUFDLG1CQUFrQixLQUFJLENBQUMsS0FBSyxFQUFBLENBQUMsQ0FBQyxNQUFNLENBQUM7UUFHMUYsQ0FBQyxDQUFDOzs7OztRQU9NLHlCQUFtQixHQUFHLFVBQUMsZUFBNkQ7WUFHMUYsNkdBQTZHO1FBQy9HLENBQUMsQ0FBQztRQVNNLHdCQUFrQixHQUFHO1lBQzNCLENBQUMsbUJBQWEsS0FBSSxDQUFDLEtBQUssRUFBQSxDQUFDLEdBQUcsSUFBSSxDQUFDOztnQkFDM0IsVUFBVSxHQUFHLENBQUMsbUJBQWtCLEtBQUksQ0FBQyxLQUFLLEVBQUEsQ0FBQyxDQUFDLEtBQUs7WUFFdkQs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QWxDLHFCQUFBLEVBQUEsU0FBa0M7UUFDdkQsQ0FBQyxtQkFBQSxJQUFJLEVBQWlDLENBQUMsQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3hELElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsU0FBUyxLQUFLLEtBQUssQ0FBQyxDQUFDO0lBQ3ZELENBQUM7SUFxQkQsZ0JBQWdCOzs7OztJQUNoQixrQ0FBWTs7OztJQUFaO0lBRUEsQ0FBQztJQWlCRDs7T0FFRzs7Ozs7SUFDSCwwQ0FBb0I7Ozs7SUFBcEI7UUFDRSxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDdkIsQ0FBQztJQUVELGdCQUFnQjs7Ozs7O0lBQ2hCLDRDQUFzQjs7Ozs7SUFBdEIsVUFBdUIsTUFBYztRQUNuQyxPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7SUFDSCxrQkFBQztBQUFELENBQUMsQUF0TUQsQ0FBaUMsZUFBZSxHQXNNL0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBakRDLHdDQUlFOzs7Ozs7O0lBT0YsMENBSUU7Ozs7O0lBU0YseUNBV0UiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBYnN0cmFjdENvbnRyb2wsIERJU0FCTEVELCBJTlZBTElELCBQRU5ESU5HLCBWQUxJRCB9IGZyb20gJy4vQWJzdHJhY3RDb250cm9sJztcclxuaW1wb3J0IHtcclxuICBBc3luY1ZhbGlkYXRvckZuLFxyXG4gIEpvaUVycm9yXHJcbn0gZnJvbSAnLi4vaW50ZXJmYWNlcy9WYWxpZGF0b3InO1xyXG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xyXG5pbXBvcnQgeyBBYnN0cmFjdENvbnRyb2xPcHRpb25zLCBGb3JtQ29udHJvbFN0YXRlIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9Gb3JtJztcclxuXHJcblxyXG4vKipcclxuICogVHJhY2tzIHRoZSB2YWx1ZSBhbmQgdmFsaWRhdGlvbiBzdGF0dXMgb2YgYW4gaW5kaXZpZHVhbCBmb3JtIGNvbnRyb2wuXHJcbiAqXHJcbiAqIFRoaXMgaXMgb25lIG9mIHRoZSB0aHJlZSBmdW5kYW1lbnRhbCBidWlsZGluZyBibG9ja3Mgb2YgQW5ndWxhciBmb3JtcywgYWxvbmcgd2l0aFxyXG4gKiBgRm9ybUdyb3VwLnRzYCBhbmQgYEZvcm1BcnJheWAuIEl0IGV4dGVuZHMgdGhlIGBJb25hckFic3RyYWN0Q29udHJvbGAgY2xhc3MgdGhhdFxyXG4gKiBpbXBsZW1lbnRzIG1vc3Qgb2YgdGhlIGJhc2UgZnVuY3Rpb25hbGl0eSBmb3IgYWNjZXNzaW5nIHRoZSB2YWx1ZSwgdmFsaWRhdGlvbiBzdGF0dXMsXHJcbiAqIHVzZXIgaW50ZXJhY3Rpb25zIGFuZCBldmVudHMuXHJcbiAqXHJcbiAqIEBzZWUgYElvbmFyQWJzdHJhY3RDb250cm9sYFxyXG4gKiBAc2VlIFtSZWFjdGl2ZSBGb3JtcyBHdWlkZV0oZ3VpZGUvcmVhY3RpdmUtZm9ybXMpXHJcbiAqIEBzZWUgW1VzYWdlIE5vdGVzXSgjdXNhZ2Utbm90ZXMpXHJcbiAqXHJcbiAqIEB1c2FnZU5vdGVzXHJcbiAqXHJcbiAqICMjIyBJbml0aWFsaXppbmcgRm9ybSBDb250cm9sc1xyXG4gKlxyXG4gKiBJbnN0YW50aWF0ZSBhIGBGb3JtQ29udHJvbGAsIHdpdGggYW4gaW5pdGlhbCB2YWx1ZS5cclxuICpcclxuICogYGBgdHNcclxuICogY29uc3QgY29udHJvbCA9IG5ldyBGb3JtQ29udHJvbCgnc29tZSB2YWx1ZScpO1xyXG4gKiBjb25zb2xlLmxvZyhjb250cm9sLnZhbHVlKTsgICAgIC8vICdzb21lIHZhbHVlJ1xyXG4gKmBgYFxyXG4gKlxyXG4gKiBUaGUgZm9sbG93aW5nIGV4YW1wbGUgaW5pdGlhbGl6ZXMgdGhlIGNvbnRyb2wgd2l0aCBhIGZvcm0gc3RhdGUgb2JqZWN0LiBUaGUgYHZhbHVlYFxyXG4gKiBhbmQgYGRpc2FibGVkYCBrZXlzIGFyZSByZXF1aXJlZCBpbiB0aGlzIGNhc2UuXHJcbiAqXHJcbiAqIGBgYHRzXHJcbiAqIGNvbnN0IGNvbnRyb2wgPSBuZXcgRm9ybUNvbnRyb2woeyB2YWx1ZTogJ24vYScsIGRpc2FibGVkOiB0cnVlIH0pO1xyXG4gKiBjb25zb2xlLmxvZyhjb250cm9sLnZhbHVlKTsgICAgIC8vICduL2EnXHJcbiAqIGNvbnNvbGUubG9nKGNvbnRyb2wuc3RhdHVzKTsgICAgLy8gJ0RJU0FCTEVEJ1xyXG4gKiBgYGBcclxuICpcclxuICogVGhlIGZvbGxvd2luZyBleGFtcGxlIGluaXRpYWxpemVzIHRoZSBjb250cm9sIHdpdGggYSBzeW5jIHZhbGlkYXRvci5cclxuICpcclxuICogYGBgdHNcclxuICogY29uc3QgY29udHJvbCA9IG5ldyBGb3JtQ29udHJvbCgnJywgVmFsaWRhdG9ycy5yZXF1aXJlZCk7XHJcbiAqIGNvbnNvbGUubG9nKGNvbnRyb2wudmFsdWUpOyAgICAgIC8vICcnXHJcbiAqIGNvbnNvbGUubG9nKGNvbnRyb2wuc3RhdHVzKTsgICAgIC8vICdJTlZBTElEJ1xyXG4gKiBgYGBcclxuICpcclxuICogVGhlIGZvbGxvd2luZyBleGFtcGxlIGluaXRpYWxpemVzIHRoZSBjb250cm9sIHVzaW5nIGFuIG9wdGlvbnMgb2JqZWN0LlxyXG4gKlxyXG4gKiBgYGB0c1xyXG4gKiBjb25zdCBjb250cm9sID0gbmV3IEZvcm1Db250cm9sKCcnLCB7XHJcbiAqICAgIHZhbGlkYXRvcnM6IFZhbGlkYXRvcnMucmVxdWlyZWQsXHJcbiAqICAgIGFzeW5jVmFsaWRhdG9yczogbXlBc3luY1ZhbGlkYXRvclxyXG4gKiB9KTtcclxuICogYGBgXHJcbiAqXHJcbiAqICMjIyBDb25maWd1cmUgdGhlIGNvbnRyb2wgdG8gdXBkYXRlIG9uIGEgYmx1ciBldmVudFxyXG4gKlxyXG4gKiBTZXQgdGhlIGB1cGRhdGVPbmAgb3B0aW9uIHRvIGAnYmx1cidgIHRvIHVwZGF0ZSBvbiB0aGUgYmx1ciBgZXZlbnRgLlxyXG4gKlxyXG4gKiBgYGB0c1xyXG4gKiBjb25zdCBjb250cm9sID0gbmV3IEZvcm1Db250cm9sKCcnLCB7IHVwZGF0ZU9uOiAnYmx1cicgfSk7XHJcbiAqIGBgYFxyXG4gKlxyXG4gKiAjIyMgQ29uZmlndXJlIHRoZSBjb250cm9sIHRvIHVwZGF0ZSBvbiBhIHN1Ym1pdCBldmVudFxyXG4gKlxyXG4gKiBTZXQgdGhlIGB1cGRhdGVPbmAgb3B0aW9uIHRvIGAnc3VibWl0J2AgdG8gdXBkYXRlIG9uIGEgc3VibWl0IGBldmVudGAuXHJcbiAqXHJcbiAqIGBgYHRzXHJcbiAqIGNvbnN0IGNvbnRyb2wgPSBuZXcgRm9ybUNvbnRyb2woJycsIHsgdXBkYXRlT246ICdzdWJtaXQnIH0pO1xyXG4gKiBgYGBcclxuICpcclxuICogIyMjIFJlc2V0IHRoZSBjb250cm9sIGJhY2sgdG8gYW4gaW5pdGlhbCB2YWx1ZVxyXG4gKlxyXG4gKiBZb3UgcmVzZXQgdG8gYSBzcGVjaWZpYyBmb3JtIHN0YXRlIGJ5IHBhc3NpbmcgdGhyb3VnaCBhIHN0YW5kYWxvbmVcclxuICogdmFsdWUgb3IgYSBmb3JtIHN0YXRlIG9iamVjdCB0aGF0IGNvbnRhaW5zIGJvdGggYSB2YWx1ZSBhbmQgYSBkaXNhYmxlZCBzdGF0ZVxyXG4gKiAodGhlc2UgYXJlIHRoZSBvbmx5IHR3byBwcm9wZXJ0aWVzIHRoYXQgY2Fubm90IGJlIGNhbGN1bGF0ZWQpLlxyXG4gKlxyXG4gKiBgYGB0c1xyXG4gKiBjb25zdCBjb250cm9sID0gbmV3IEZvcm1Db250cm9sKCdOYW5jeScpO1xyXG4gKlxyXG4gKiBjb25zb2xlLmxvZyhjb250cm9sLnZhbHVlKTsgLy8gJ05hbmN5J1xyXG4gKlxyXG4gKiBjb250cm9sLnJlc2V0KCdEcmV3Jyk7XHJcbiAqXHJcbiAqIGNvbnNvbGUubG9nKGNvbnRyb2wudmFsdWUpOyAvLyAnRHJldydcclxuICogYGBgXHJcbiAqXHJcbiAqICMjIyBSZXNldCB0aGUgY29udHJvbCBiYWNrIHRvIGFuIGluaXRpYWwgdmFsdWUgYW5kIGRpc2FibGVkXHJcbiAqXHJcbiAqIGBgYFxyXG4gKiBjb25zdCBjb250cm9sID0gbmV3IEZvcm1Db250cm9sKCdOYW5jeScpO1xyXG4gKlxyXG4gKiBjb25zb2xlLmxvZyhjb250cm9sLnZhbHVlKTsgLy8gJ05hbmN5J1xyXG4gKiBjb25zb2xlLmxvZyhjb250cm9sLnN0YXR1cyk7IC8vICdWQUxJRCdcclxuICpcclxuICogY29udHJvbC5yZXNldCh7IHZhbHVlOiAnRHJldycsIGRpc2FibGVkOiB0cnVlIH0pO1xyXG4gKlxyXG4gKiBjb25zb2xlLmxvZyhjb250cm9sLnZhbHVlKTsgLy8gJ0RyZXcnXHJcbiAqIGNvbnNvbGUubG9nKGNvbnRyb2wuc3RhdHVzKTsgLy8gJ0RJU0FCTEVEJ1xyXG4gKiBgYGBcclxuICpcclxuICogQHB1YmxpY0FwaVxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEZvcm1Db250cm9sIGV4dGVuZHMgQWJzdHJhY3RDb250cm9sIHtcclxuXHJcblxyXG4gIC8qKlxyXG4gICAqIENyZWF0ZXMgYSBuZXcgYEZvcm1Db250cm9sYCBpbnN0YW5jZS5cclxuICAgKlxyXG4gICAqIEBwYXJhbSBjb25maWcgSW5pdGlhbGl6ZXMgdGhlIGNvbnRyb2wgd2l0aCBhbiBvYmplY3QgdGhhdCBkZWZpbmVzIHRoZSBpbml0aWFsIHN0YXRlLlxyXG4gICAqXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3Ioc3RhdGU6IEZvcm1Db250cm9sU3RhdGUpIHtcclxuICAgIHN1cGVyKFxyXG4gICAgICA8Rm9ybUNvbnRyb2xTdGF0ZT5zdGF0ZSxcclxuICAgICAgPEFic3RyYWN0Q29udHJvbE9wdGlvbnMgfCBudWxsPnN0YXRlLm9wdGlvbnNcclxuICAgICk7XHJcbiAgICAvLyB0aGlzLl9jb2VyY2VUb0pvaVNjaGVtYSgpO1xyXG4gICAgdGhpcy5fc2V0QXN5bmNWYWxpZGF0b3JzKHN0YXRlLmFzeW5jVmFsaWRhdG9yKTtcclxuICAgIHRoaXMuX2luaXRPYnNlcnZhYmxlcygpO1xyXG4gICAgdGhpcy5faW5pdFZhbGlkYXRvcnMoKTtcclxuICAgIHRoaXMuX2FwcGx5Q29udHJvbFN0YXRlKCk7XHJcbiAgICB0aGlzLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkoeyBvbmx5U2VsZjogdHJ1ZSwgZW1pdEV2ZW50OiBmYWxzZSB9KTtcclxuICB9XHJcblxyXG5cclxuICAvKipcclxuICAgKiBTZXRzIGEgbmV3IHZhbHVlIGZvciB0aGUgZm9ybSBjb250cm9sLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHZhbHVlIFRoZSBuZXcgdmFsdWUgZm9yIHRoZSBjb250cm9sLlxyXG4gICAqIEBwYXJhbSBvcHRpb25zIG9wdGlvbnMgb3B0aW9ucyB0aGF0IGRldGVybWluZSBob3cgdGhlIGNvbnRyb2wgcHJvb3BhZ2F0ZXMgY2hhbmdlc1xyXG4gICAqIGFuZCBlbWl0cyBldmVudHMgd2hlbiB0aGUgdmFsdWUgY2hhbmdlcy5cclxuICAgKiBUaGUgb3B0aW9ucyBvcHRpb25zIGFyZSBwYXNzZWQgdG8gdGhlIHtAbGluayBJb25hckFic3RyYWN0Q29udHJvbCN1cGRhdGVWYWx1ZUFuZFZhbGlkaXR5XHJcbiAgICogdXBkYXRlVmFsdWVBbmRWYWxpZGl0eX0gbWV0aG9kLlxyXG4gICAqXHJcbiAgICogKiBgb25seVNlbGZgOiBXaGVuIHRydWUsIGVhY2ggY2hhbmdlIG9ubHkgYWZmZWN0cyB0aGlzIGNvbnRyb2wsIGFuZCBub3QgaXRzIHBhcmVudC4gRGVmYXVsdCBpc1xyXG4gICAqIGZhbHNlLlxyXG4gICAqICogYGVtaXRFdmVudGA6IFdoZW4gdHJ1ZSBvciBub3Qgc3VwcGxpZWQgKHRoZSBkZWZhdWx0KSwgYm90aCB0aGUgYHN0YXR1c0NoYW5nZXNgIGFuZFxyXG4gICAqIGB2YWx1ZUNoYW5nZXNgXHJcbiAgICogb2JzZXJ2YWJsZXMgZW1pdCBldmVudHMgd2l0aCB0aGUgbGF0ZXN0IHN0YXR1cyBhbmQgdmFsdWUgd2hlbiB0aGUgY29udHJvbCB2YWx1ZSBpcyB1cGRhdGVkLlxyXG4gICAqIFdoZW4gZmFsc2UsIG5vIGV2ZW50cyBhcmUgZW1pdHRlZC5cclxuICAgKiAqIGBlbWl0TW9kZWxUb1ZpZXdDaGFuZ2VgOiBXaGVuIHRydWUgb3Igbm90IHN1cHBsaWVkICAodGhlIGRlZmF1bHQpLCBlYWNoIGNoYW5nZSB0cmlnZ2VycyBhblxyXG4gICAqIGBvbkNoYW5nZWAgZXZlbnQgdG9cclxuICAgKiB1cGRhdGUgdGhlIHZpZXcuXHJcbiAgICogKiBgZW1pdFZpZXdUb01vZGVsQ2hhbmdlYDogV2hlbiB0cnVlIG9yIG5vdCBzdXBwbGllZCAodGhlIGRlZmF1bHQpLCBlYWNoIGNoYW5nZSB0cmlnZ2VycyBhblxyXG4gICAqIGBuZ01vZGVsQ2hhbmdlYFxyXG4gICAqIGV2ZW50IHRvIHVwZGF0ZSB0aGUgbW9kZWwuXHJcbiAgICpcclxuICAgKi9cclxuICBzZXRWYWx1ZSh2YWx1ZTogYW55LCBvcHRpb25zOiB7XHJcbiAgICBvbmx5U2VsZj86IGJvb2xlYW4sXHJcbiAgICBlbWl0RXZlbnQ/OiBib29sZWFuXHJcbiAgfSA9IHt9KTogdm9pZCB7XHJcbiAgICAodGhpcyBhcyB7IHZhbHVlOiBhbnkgfSkudmFsdWUgPSB2YWx1ZTtcclxuICAgIHRoaXMubWFya0FzRGlydHkoKTtcclxuICAgIHRoaXMudXBkYXRlVmFsdWVBbmRWYWxpZGl0eShvcHRpb25zKTtcclxuXHJcbiAgICBpZiAoXy5oYXModGhpcy5vcHRpb25zLCBbJ3N1Ym1pdE9uQ2hhbmdlJ10pKSB7XHJcblxyXG4gICAgICB0aGlzLnJvb3Quc3VibWl0KHRydWUpO1xyXG4gICAgfVxyXG5cclxuICB9XHJcblxyXG5cclxuICAvKipcclxuICAgKiBSZXNldHMgdGhlIGZvcm0gY29udHJvbCwgbWFya2luZyBpdCBgcHJpc3RpbmVgIGFuZCBgdW50b3VjaGVkYCwgYW5kIHNldHRpbmdcclxuICAgKiB0aGUgdmFsdWUgdG8gbnVsbC5cclxuICAgKlxyXG4gICAqIEBwYXJhbSBmb3JtU3RhdGUgUmVzZXRzIHRoZSBjb250cm9sIHdpdGggYW4gaW5pdGlhbCB2YWx1ZSxcclxuICAgKiBvciBhbiBvYmplY3QgdGhhdCBkZWZpbmVzIHRoZSBpbml0aWFsIHZhbHVlIGFuZCBkaXNhYmxlZCBzdGF0ZS5cclxuICAgKlxyXG4gICAqIEBwYXJhbSBvcHRpb25zIG9wdGlvbnMgb3B0aW9ucyB0aGF0IGRldGVybWluZSBob3cgdGhlIGNvbnRyb2wgcHJvcGFnYXRlcyBjaGFuZ2VzXHJcbiAgICogYW5kIGVtaXRzIGV2ZW50cyBhZnRlciB0aGUgdmFsdWUgY2hhbmdlcy5cclxuICAgKlxyXG4gICAqICogYG9ubHlTZWxmYDogV2hlbiB0cnVlLCBlYWNoIGNoYW5nZSBvbmx5IGFmZmVjdHMgdGhpcyBjb250cm9sLCBhbmQgbm90IGl0cyBwYXJlbnQuIERlZmF1bHQgaXNcclxuICAgKiBmYWxzZS5cclxuICAgKiAqIGBlbWl0RXZlbnRgOiBXaGVuIHRydWUgb3Igbm90IHN1cHBsaWVkICh0aGUgZGVmYXVsdCksIGJvdGggdGhlIGBzdGF0dXNDaGFuZ2VzYCBhbmRcclxuICAgKiBgdmFsdWVDaGFuZ2VzYFxyXG4gICAqIG9ic2VydmFibGVzIGVtaXQgZXZlbnRzIHdpdGggdGhlIGxhdGVzdCBzdGF0dXMgYW5kIHZhbHVlIHdoZW4gdGhlIGNvbnRyb2wgaXMgcmVzZXQuXHJcbiAgICogV2hlbiBmYWxzZSwgbm8gZXZlbnRzIGFyZSBlbWl0dGVkLlxyXG4gICAqXHJcbiAgICovXHJcbiAgcmVzZXQodmFsdWU6IGFueSA9IG51bGwsIG9wdGlvbnM6IHsgb25seVNlbGY/OiBib29sZWFuLCBlbWl0RXZlbnQ/OiBib29sZWFuIH0gPSB7fSk6IHZvaWQge1xyXG4gICAgdGhpcy5tYXJrQXNQcmlzdGluZShvcHRpb25zKTtcclxuICAgIHRoaXMubWFya0FzVW50b3VjaGVkKG9wdGlvbnMpO1xyXG4gICAgdGhpcy5fYXBwbHlDb250cm9sU3RhdGUoKTtcclxuICAgIHRoaXMudXBkYXRlVmFsdWVBbmRWYWxpZGl0eShvcHRpb25zKTtcclxuICAgIGlmIChfLmhhcyh0aGlzLm9wdGlvbnMsIFsnc3VibWl0T25DaGFuZ2UnXSkpIHtcclxuXHJcbiAgICAgIHRoaXMucm9vdC5zdWJtaXQodHJ1ZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZXNldHMgdGhlIGZvcm0gY29udHJvbCwgbWFya2luZyBpdCBgcHJpc3RpbmVgIGFuZCBgdW50b3VjaGVkYCwgYW5kIHNldHRpbmdcclxuICAgKiB0aGUgdmFsdWUgdG8gbnVsbC5cclxuICAgKlxyXG4gICAqIEBwYXJhbSBmb3JtU3RhdGUgUmVzZXRzIHRoZSBjb250cm9sIHdpdGggYW4gaW5pdGlhbCB2YWx1ZSxcclxuICAgKiBvciBhbiBvYmplY3QgdGhhdCBkZWZpbmVzIHRoZSBpbml0aWFsIHZhbHVlIGFuZCBkaXNhYmxlZCBzdGF0ZS5cclxuICAgKlxyXG4gICAqIEBwYXJhbSBvcHRpb25zIG9wdGlvbnMgb3B0aW9ucyB0aGF0IGRldGVybWluZSBob3cgdGhlIGNvbnRyb2wgcHJvcGFnYXRlcyBjaGFuZ2VzXHJcbiAgICogYW5kIGVtaXRzIGV2ZW50cyBhZnRlciB0aGUgdmFsdWUgY2hhbmdlcy5cclxuICAgKlxyXG4gICAqICogYG9ubHlTZWxmYDogV2hlbiB0cnVlLCBlYWNoIGNoYW5nZSBvbmx5IGFmZmVjdHMgdGhpcyBjb250cm9sLCBhbmQgbm90IGl0cyBwYXJlbnQuIERlZmF1bHQgaXNcclxuICAgKiBmYWxzZS5cclxuICAgKiAqIGBlbWl0RXZlbnRgOiBXaGVuIHRydWUgb3Igbm90IHN1cHBsaWVkICh0aGUgZGVmYXVsdCksIGJvdGggdGhlIGBzdGF0dXNDaGFuZ2VzYCBhbmRcclxuICAgKiBgdmFsdWVDaGFuZ2VzYFxyXG4gICAqIG9ic2VydmFibGVzIGVtaXQgZXZlbnRzIHdpdGggdGhlIGxhdGVzdCBzdGF0dXMgYW5kIHZhbHVlIHdoZW4gdGhlIGNvbnRyb2wgaXMgcmVzZXQuXHJcbiAgICogV2hlbiBmYWxzZSwgbm8gZXZlbnRzIGFyZSBlbWl0dGVkLlxyXG4gICAqXHJcbiAgICovXHJcbiAgY2xlYXIob3B0aW9uczogeyBvbmx5U2VsZj86IGJvb2xlYW4sIGVtaXRFdmVudD86IGJvb2xlYW4gfSA9IHt9KTogdm9pZCB7XHJcbiAgICB0aGlzLm1hcmtBc1ByaXN0aW5lKG9wdGlvbnMpO1xyXG4gICAgdGhpcy5tYXJrQXNVbnRvdWNoZWQob3B0aW9ucyk7XHJcbiAgICAodGhpcyBhcyB7IHZhbHVlOiBhbnkgfSkudmFsdWUgPSBudWxsO1xyXG4gICAgdGhpcy51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KG9wdGlvbnMpO1xyXG4gICAgaWYgKF8uaGFzKHRoaXMub3B0aW9ucywgWydzdWJtaXRPbkNoYW5nZSddKSkge1xyXG5cclxuICAgICAgdGhpcy5yb290LnN1Ym1pdCh0cnVlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG5cclxuICAvKipcclxuICAgKiBTZXRzIGVycm9ycyBvbiBhIGZvcm0gY29udHJvbCB3aGVuIHJ1bm5pbmcgdmFsaWRhdGlvbnMgbWFudWFsbHksIHJhdGhlciB0aGFuIGF1dG9tYXRpY2FsbHkuXHJcbiAgICpcclxuICAgKiBDYWxsaW5nIGBzZXRFcnJvcnNgIGFsc28gdXBkYXRlcyB0aGUgdmFsaWRpdHkgb2YgdGhlIHBhcmVudCBjb250cm9sLlxyXG4gICAqXHJcbiAgICogQHVzYWdlTm90ZXNcclxuICAgKiAjIyMgTWFudWFsbHkgc2V0IHRoZSBlcnJvcnMgZm9yIGEgY29udHJvbFxyXG4gICAqXHJcbiAgICogYGBgXHJcbiAgICogY29uc3QgbG9naW4gPSBuZXcgRm9ybUNvbnRyb2woJ3NvbWVMb2dpbicpO1xyXG4gICAqIGxvZ2luLnNldEVycm9ycyh7XHJcbiAgICogICBub3RVbmlxdWU6IHRydWVcclxuICAgKiB9KTtcclxuICAgKlxyXG4gICAqIGV4cGVjdChsb2dpbi52YWxpZCkudG9FcXVhbChmYWxzZSk7XHJcbiAgICogZXhwZWN0KGxvZ2luLmVycm9ycykudG9FcXVhbCh7IG5vdFVuaXF1ZTogdHJ1ZSB9KTtcclxuICAgKlxyXG4gICAqIGxvZ2luLnNldFZhbHVlKCdzb21lT3RoZXJMb2dpbicpO1xyXG4gICAqXHJcbiAgICogZXhwZWN0KGxvZ2luLnZhbGlkKS50b0VxdWFsKHRydWUpO1xyXG4gICAqIGBgYFxyXG4gICAqL1xyXG4gIHNldEVycm9ycyhlcnJvcnM6IGFueSwgb3B0czogeyBlbWl0RXZlbnQ/OiBib29sZWFuIH0gPSB7fSk6IHZvaWQge1xyXG4gICAgKHRoaXMgYXMgeyBlcnJvcnM6IEpvaUVycm9yW10gfCBudWxsIH0pLmVycm9ycyA9IGVycm9ycztcclxuICAgIHRoaXMuX3VwZGF0ZUNvbnRyb2xzRXJyb3JzKG9wdHMuZW1pdEV2ZW50ICE9PSBmYWxzZSk7XHJcbiAgfVxyXG5cclxuICAvKiogQGludGVybmFsICovXHJcbiAgX2dldENvbnRyb2xTY2hlbWEgPSAoKSA9PiB7XHJcbiAgICBpZiAoKDxGb3JtQ29udHJvbFN0YXRlPnRoaXMuc3RhdGUpLnNjaGVtYSkgcmV0dXJuICg8Rm9ybUNvbnRyb2xTdGF0ZT50aGlzLnN0YXRlKS5zY2hlbWE7XHJcblxyXG5cclxuICB9O1xyXG5cclxuXHJcbiAgLyoqXHJcbiAgICogU2V0cyB0aGUgYXN5bmMgdmFsaWRhdG9ycyB0aGF0IGFyZSBhY3RpdmUgb24gdGhpcyBjb250cm9sLiBDYWxsaW5nIHRoaXNcclxuICAgKiBvdmVyd3JpdGVzIGFueSBleGlzdGluZyBhc3luYyB2YWxpZGF0b3JzLlxyXG4gICAqL1xyXG4gIHByaXZhdGUgX3NldEFzeW5jVmFsaWRhdG9ycyA9IChhc3luY1ZhbGlkYXRvcnM6IEFzeW5jVmFsaWRhdG9yRm4gfCBBc3luY1ZhbGlkYXRvckZuW10gfCBudWxsKTogdm9pZCA9PiB7XHJcblxyXG5cclxuICAgIC8vICh0aGlzIGFzIHsgYXN5bmNWYWxpZGF0b3I6IFZhbGlkYXRvckZuIHwgbnVsbCB9KS5hc3luY1ZhbGlkYXRvciA9IGNvZXJjZVRvQXN5bmNWYWxpZGF0b3IoYXN5bmNWYWxpZGF0b3JzKTtcclxuICB9O1xyXG5cclxuXHJcbiAgLyoqIEBpbnRlcm5hbCAqL1xyXG4gIF91cGRhdGVWYWx1ZSgpOiB2b2lkIHtcclxuXHJcbiAgfVxyXG5cclxuXHJcbiAgcHJpdmF0ZSBfYXBwbHlDb250cm9sU3RhdGUgPSAoKSA9PiB7XHJcbiAgICAoPEZvcm1Db250cm9sPnRoaXMudmFsdWUpID0gbnVsbDtcclxuICAgIGNvbnN0IHByb3BlcnRpZXMgPSAoPEZvcm1Db250cm9sU3RhdGU+dGhpcy5zdGF0ZSkucHJvcHM7XHJcblxyXG4gICAgaWYgKHByb3BlcnRpZXMpIHtcclxuICAgICAgKDxGb3JtQ29udHJvbD50aGlzLnZhbHVlKSA9IHByb3BlcnRpZXMudmFsdWU7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8vIHN0YXRlLmRpc2FibGVkID8gdGhpcy5kaXNhYmxlKHtvbmx5U2VsZjogdHJ1ZSwgZW1pdEV2ZW50OiBmYWxzZX0pIDpcclxuICAgIC8vICAgICAgICAgdGhpcy5lbmFibGUoe29ubHlTZWxmOiB0cnVlLCBlbWl0RXZlbnQ6IGZhbHNlfSk7XHJcbiAgfTtcclxuXHJcblxyXG4gIC8qKlxyXG4gICAqIEBpbnRlcm5hbFxyXG4gICAqL1xyXG4gIF9hbGxDb250cm9sc0Rpc2FibGVkKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuZGlzYWJsZWQ7XHJcbiAgfVxyXG5cclxuICAvKiogQGludGVybmFsICovXHJcbiAgX2FueUNvbnRyb2xzSGF2ZVN0YXR1cyhzdGF0dXM6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxufVxyXG5cclxuXHJcbi8vIGZ1bmN0aW9uIGNvZXJjZVRvVmFsaWRhdG9yKHZhbGlkYXRvcnM6IFZhbGlkYXRpb25Db25maWdzKTogVmFsaWRhdG9yRm4gfCBudWxsIHtcclxuLy9cclxuLy8gICByZXR1cm4gVmFsaWRhdG9ycy5jb21wb3NlKGNvbnZlcnRUb1ZhbGlkYXRvckZuKHZhbGlkYXRvcnMpKTtcclxuLy8gfTtcclxuLy9cclxuLy8gZnVuY3Rpb24gY29udmVydFRvVmFsaWRhdG9yRm4odmFsaWRhdG9yczogVmFsaWRhdGlvbkNvbmZpZ3MpOiBWYWxpZGF0b3JGbltdIHtcclxuLy8gICByZXR1cm4gXy5tYXAodmFsaWRhdG9ycywgKHZhbHVlLCBrZXkpID0+IHtcclxuLy8gICAgIGlmICghXy5oYXMoVmFsaWRhdG9ycywga2V5KSkgcmV0dXJuIG51bGw7XHJcbi8vXHJcbi8vICAgICByZXR1cm4gVmFsaWRhdG9yc1trZXldO1xyXG4vLyAgIH0pO1xyXG4vLyB9XHJcbi8vXHJcbi8vIGZ1bmN0aW9uIGNvZXJjZVRvQXN5bmNWYWxpZGF0b3IoYXN5bmNWYWxpZGF0b3JzOiBBc3luY1ZhbGlkYXRvckZuIHwgQXN5bmNWYWxpZGF0b3JGbltdIHwgbnVsbCk6IEFzeW5jVmFsaWRhdG9yRm4gfCBudWxsIHtcclxuLy9cclxuLy8gICByZXR1cm4gXy5pc0FycmF5KGFzeW5jVmFsaWRhdG9ycykgPyBWYWxpZGF0b3JzLmNvbXBvc2VBc3luYyhfLm1hcChhc3luY1ZhbGlkYXRvcnMsICh2YWx1ZTogQXN5bmNWYWxpZGF0b3JGbiwga2V5KTogQXN5bmNWYWxpZGF0b3JGbiB8IG51bGwgPT4gdmFsdWUpKSA6IGFzeW5jVmFsaWRhdG9ycyB8fCBudWxsO1xyXG4vLyB9O1xyXG4iXX0=