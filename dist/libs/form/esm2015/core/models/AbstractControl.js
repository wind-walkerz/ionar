/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { EventEmitter } from '@angular/core';
import _ from 'lodash';
/**
 * This is the base class for `FormControl`, `FormGroup.ts`, and `FormArray`.
 *
 * It provides some of the shared behavior that all controls and groups of controls have, like
 * running validators, calculating status, and resetting state. It also defines the properties
 * that are shared between all sub-classes, like `value`, `valid`, and `dirty`. It shouldn't be
 * instantiated directly.
 *
 *
 * \@publicApi
 * @abstract
 */
export class AbstractControl {
    /**
     * Initialize the AbstractControl instance.
     *
     * @param {?} state
     * @param {?} _options
     */
    constructor(state, _options) {
        this.state = state;
        this._options = _options;
        /**
           * A Joi object schema
           */
        // public readonly schema: JoiSchema | null;
        /**
         * True if the control is marked as `touched`.
         *
         * A control is marked `touched` once the user has triggered
         * a `blur` event on it.
         */
        this.touched = false;
        /**
         * A control is `pristine` if the user has not yet changed the value in the UI.
         *
         * @return True if the user has not yet changed the value in the UI; compare `dirty`.
         * Programmatic changes to a control's value do not mark it dirty.
         */
        this.pristine = true;
        /**
         * \@internal
         */
        this._getControlSchema = () => {
            return null;
        };
        /**
         * \@internal
         */
        this._updateChildError = (errors) => {
        };
        this._storeInitialOptions = (options) => {
            this._initialOptions = options;
        };
        /**
         * \@internal
         */
        this._isNotExcluded = (c) => {
            return !_.get(c.options, 'excluded') && !(_.has(this.options, ['nullExclusion']) && !c.value);
        };
        this._storeInitialOptions(_options);
        this.runAsyncValidator = () => {
        };
    }
    /**
     * @return {?}
     */
    get schema() {
        if (this.parent && this.parent.schema) {
            /** @type {?} */
            const extractChild = _.find(this.parent.schema['_inner'].children, ['key', this.name]);
            return extractChild ? extractChild.schema : null;
        }
        return this._getControlSchema();
    }
    /**
     * @return {?}
     */
    get path() {
        return this.parent ? [...this.parent.path, this.name] : [];
    }
    /**
     * @return {?}
     */
    get name() {
        return this._name;
    }
    /**
     * @param {?} name
     * @return {?}
     */
    set name(name) {
        this._name = name;
    }
    /**
     * The parent control.
     * @return {?}
     */
    get parent() {
        return this._parent;
    }
    /**
     * @return {?}
     */
    get root() {
        return this._root;
    }
    /**
     * @return {?}
     */
    get options() {
        /** @type {?} */
        let parentConfig;
        if (this.parent && this.parent.options)
            parentConfig = Object.assign({}, this.parent.options);
        return Object.assign({}, parentConfig, this._initialOptions) || null;
    }
    /**
     * @param {?} newConfig
     * @return {?}
     */
    set options(newConfig) {
        this._options = Object.assign({}, this._options, newConfig);
        this.updateValueAndValidity({ emitEvent: true });
    }
    /**
     * A control is `enabled` as long as its `status` is not `DISABLED`.
     *
     * @see `status`
     *
     * @return {?} True if the control has any status other than 'DISABLED',
     * false if the status is 'DISABLED'.
     *
     */
    get enabled() {
        return this.status !== DISABLED;
    }
    /**
     * A control is `disabled` when its `status` is `DISABLED`.
     *
     * @see `status`
     *
     * Disabled controls are exempt from validation checks and
     * are not included in the aggregate value of their ancestor
     * controls.
     *
     * @return {?} True if the control is disabled, false otherwise.
     */
    get disabled() {
        return this.status === DISABLED;
    }
    /**
     * A control is `valid` when its `status` is `VALID`.
     *
     * @see `status`
     *
     * @return {?} True if the control has passed all of its validation tests,
     * false otherwise.
     */
    get valid() {
        return this.status === VALID;
    }
    /**
     * A control is `invalid` when its `status` is `INVALID`.
     *
     * @see `status`
     *
     * @return {?} True if this control has failed one or more of its validation checks,
     * false otherwise.
     */
    get invalid() {
        return this.status === INVALID;
    }
    /**
     * A control is `pending` when its `status` is `PENDING`.
     *
     * @see `status`
     *
     * @return {?} True if this control is in the process of conducting a validation check,
     * false otherwise.
     */
    get pending() {
        return this.status === PENDING;
    }
    /**
     * A control is `dirty` if the user has changed the value
     * in the UI.
     *
     * @return {?} True if the user has changed the value of this control in the UI; compare `pristine`.
     * Programmatic changes to a control's value do not mark it dirty.
     */
    get dirty() {
        return !this.pristine;
    }
    /**
     * Marks the control as `touched`. A control is touched by focus and
     * blur events that do not change the value; compare `markAsDirty`;
     *
     * @return {?}
     */
    markAsTouched() {
        ((/** @type {?} */ (this))).touched = true;
        this.updateValueAndValidity({ onlySelf: true });
    }
    /**
     * Marks the control as `untouched`.
     *
     * If the control has any children, also marks all children as `untouched`
     * and recalculates the `touched` status of all parent controls.
     *
     * @param {?=} opts options options that determine how the control propagates changes
     * and emits events after the marking is applied.
     * * `onlySelf`: When true, mark only this control. When false or not supplied,
     * marks all direct ancestors. Default is false.
     * @return {?}
     */
    markAsUntouched(opts = {}) {
        ((/** @type {?} */ (this))).touched = false;
    }
    /**
     * Marks the control as `dirty`. A control becomes dirty when
     * the control's value is changed through the UI; compare `markAsTouched`.
     *
     * @param {?=} opts options options that determine how the control propagates changes
     * and emits events after marking is applied.
     * * `onlySelf`: When true, mark only this control. When false or not supplied,
     * marks all direct ancestors. Default is false.
     * @return {?}
     */
    markAsDirty(opts = {}) {
        ((/** @type {?} */ (this))).pristine = false;
    }
    /**
     * Marks the control as `pristine`.
     *
     * If the control has any children, marks all children as `pristine`,
     * and recalculates the `pristine` status of all parent
     * controls.
     *
     * @param {?=} opts options options that determine how the control emits events after
     * marking is applied.
     * * `onlySelf`: When true, mark only this control. When false or not supplied,
     * marks all direct ancestors. Default is false..
     * @return {?}
     */
    markAsPristine(opts = {}) {
        ((/** @type {?} */ (this))).pristine = true;
    }
    /**
     * Sets options on a form control .
     *
     * Calling `setOptions` also updates the validity of the parent control.
     *
     * \@usageNotes
     * ### Manually set the options for a control
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
     * @param {?} options
     * @param {?=} opts
     * @return {?}
     */
    setOptions(options, opts = {}) {
        this._initialOptions = options;
        this._updateControlsOptions(opts.emitEvent !== false);
    }
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
    setErrors(errors, opts = {}) {
        ((/** @type {?} */ (this))).errors = errors;
        this._updateControlsErrors(opts.emitEvent !== false);
    }
    //
    /**
     * @param {?} parent Sets the parent of the control
     * @return {?}
     */
    setParent(parent) {
        this._parent = parent;
    }
    /**
     * @param {?} root Sets the root of the form
     * @return {?}
     */
    setRoot(root) {
        this._root = root;
    }
    /**
     * @param {?} options
     * @param {?=} opts
     * @return {?}
     */
    updateOptions(options, opts = {}) {
        this._initialOptions = Object.assign({}, this._initialOptions, options);
        this._updateControlsOptions(opts.emitEvent !== false);
    }
    /**
     * Recalculates the value and validation status of the control.
     *
     * By default, it also updates the value and validity of its ancestors.
     *
     * @param {?=} opts options options determine how the control propagates changes and emits events
     * after updates and validity checks are applied.
     * * `onlySelf`: When true, only update this control. When false or not supplied,
     * update all direct ancestors. Default is false..
     * * `emitEvent`: When true or not supplied (the default), emit the `valueChanges` event
     * observables emit events with the latest status and value when the control is updated.
     * When false, no events are emitted.
     * @return {?}
     */
    updateValueAndValidity(opts = {}) {
        this._setInitialStatus();
        this._updateValue();
        if (this.enabled) {
            this._cancelExistingSubscription();
            ((/** @type {?} */ (this))).errors = this._runJoiValidation();
            ((/** @type {?} */ (this))).status = this._calculateStatus();
            if (this.status === VALID || this.status === PENDING) {
                this.runAsyncValidator(opts.emitEvent);
            }
        }
        if (opts.emitEvent !== false) {
            ((/** @type {?} */ (this.valueChanges))).emit(this.value);
            ((/** @type {?} */ (this.statusChanges))).emit(this.status);
        }
        if (this._parent && !opts.onlySelf) {
            this._parent.updateValueAndValidity(opts);
        }
    }
    /**
     * \@internal
     * @private
     * @return {?}
     */
    _calculateStatus() {
        if (this._allControlsDisabled())
            return DISABLED;
        if (this.errors)
            return INVALID;
        if (this._anyControlsHaveStatus(INVALID))
            return INVALID;
        if (this._anyControlsHaveStatus(PENDING))
            return PENDING;
        return VALID;
    }
    /**
     * \@internal
     * @return {?}
     */
    _runJoiValidation() {
        return null;
    }
    /**
     * @private
     * @return {?}
     */
    _cancelExistingSubscription() {
        if (this._asyncValidationSubscription) {
            this._asyncValidationSubscription.unsubscribe();
        }
    }
    /**
     * @private
     * @return {?}
     */
    _setInitialStatus() {
        ((/** @type {?} */ (this))).status = this._allControlsDisabled() ? DISABLED : VALID;
    }
    /**
     * \@internal
     * @return {?}
     */
    _updateValue() {
    }
    /**
     * \@internal
     * @return {?}
     */
    _initObservables() {
        ((/** @type {?} */ (this))).valueChanges = new EventEmitter();
        ((/** @type {?} */ (this))).statusChanges = new EventEmitter();
    }
    /**
     * \@internal
     * @return {?}
     */
    _initValidators() {
        ((/** @type {?} */ (this))).runAsyncValidator = _.debounce((emitEvent) => {
            if (this.asyncValidator) {
                ((/** @type {?} */ (this))).status = PENDING;
                /** @type {?} */
                const obs = this.asyncValidator(this);
                // this._asyncValidationSubscription =
                // obs.subscribe((errors: JoiError[] | null) => {
                //   if ((this.touched || this.dirty) && this.value) {
                //     (this as { status: string }).status = INVALID;
                //     this.setErrors(errors, { emitEvent });
                //   }
                // });
            }
        }, 500);
    }
    /**
     * \@internal
     * @param {?} emitEvent
     * @return {?}
     */
    _updateControlsOptions(emitEvent) {
        ((/** @type {?} */ (this))).status = this._calculateStatus();
        if (emitEvent) {
            ((/** @type {?} */ (this.statusChanges))).emit(this.status);
        }
    }
    /**
     * \@internal
     * @param {?} emitEvent
     * @return {?}
     */
    _updateControlsErrors(emitEvent) {
        ((/** @type {?} */ (this))).status = this._calculateStatus();
        if (emitEvent) {
            ((/** @type {?} */ (this.statusChanges))).emit(this.status);
        }
        if (this._parent) {
            this._parent._updateControlsErrors(emitEvent);
        }
    }
}
if (false) {
    /**
     * \@internal
     * @type {?}
     */
    AbstractControl.prototype.pendingValue;
    /**
     * The current value of the control.
     *
     * * For a `FormControl`, the current value.
     * * For a `FormGroup`, the values of enabled controls as an object with a key-value pair for each member of the group.
     * * For a `FormArray`, the values of enabled controls as an array.
     *
     * @type {?}
     */
    AbstractControl.prototype.value;
    /**
     * An object containing any errors generated by failing validation,
     * or null if there are no errors.
     * @type {?}
     */
    AbstractControl.prototype.errors;
    /**
     * True if the control is marked as `touched`.
     *
     * A control is marked `touched` once the user has triggered
     * a `blur` event on it.
     * @type {?}
     */
    AbstractControl.prototype.touched;
    /**
     * A control is `pristine` if the user has not yet changed the value in the UI.
     *
     * \@return True if the user has not yet changed the value in the UI; compare `dirty`.
     * Programmatic changes to a control's value do not mark it dirty.
     * @type {?}
     */
    AbstractControl.prototype.pristine;
    /**
     * The validation status of the control. There are four possible
     * validation status values:
     *
     * * **VALID**: This control has passed all validation checks.
     * * **INVALID**: This control has failed at least one validation check.
     * * **PENDING**: This control is in the midst of conducting a validation check.
     * * **DISABLED**: This control is exempt from validation checks.
     *
     * These status values are mutually exclusive, so a control cannot be both valid AND invalid or invalid AND disabled.
     * @type {?}
     */
    AbstractControl.prototype.status;
    /** @type {?} */
    AbstractControl.prototype.asyncValidator;
    /** @type {?} */
    AbstractControl.prototype.runAsyncValidator;
    /** @type {?} */
    AbstractControl.prototype._asyncValidationSubscription;
    /**
     * @type {?}
     * @private
     */
    AbstractControl.prototype._parent;
    /**
     * @type {?}
     * @private
     */
    AbstractControl.prototype._root;
    /**
     * @type {?}
     * @private
     */
    AbstractControl.prototype._name;
    /**
     * @type {?}
     * @private
     */
    AbstractControl.prototype._path;
    /**
     * @type {?}
     * @private
     */
    AbstractControl.prototype._initialOptions;
    /**
     *
     * \@param controls A collection of child controls. The key for each child is the name
     * under which it is registered.
     *
     * @type {?}
     */
    AbstractControl.prototype.controls;
    /**
     * A multicasting observable that emits an event every time the value of the control changes, in
     * the UI or programmatically.
     * @type {?}
     */
    AbstractControl.prototype.valueChanges;
    /**
     * A multicasting observable that emits an event every time the validation `status` of the control
     * recalculates.
     * @type {?}
     */
    AbstractControl.prototype.statusChanges;
    /**
     * \@internal
     * @type {?}
     */
    AbstractControl.prototype._getControlSchema;
    /**
     * \@internal
     * @type {?}
     */
    AbstractControl.prototype._updateChildError;
    /**
     * @type {?}
     * @private
     */
    AbstractControl.prototype._storeInitialOptions;
    /**
     * \@internal
     * @type {?}
     */
    AbstractControl.prototype._isNotExcluded;
    /** @type {?} */
    AbstractControl.prototype.state;
    /**
     * @type {?}
     * @private
     */
    AbstractControl.prototype._options;
    /**
     * Sets the value of the control. Abstract method (implemented in sub-classes).
     * @abstract
     * @param {?} value
     * @param {?=} options
     * @return {?}
     */
    AbstractControl.prototype.setValue = function (value, options) { };
    /**
     * Resets the control. Abstract method (implemented in sub-classes).
     * @abstract
     * @param {?=} value
     * @param {?=} options
     * @return {?}
     */
    AbstractControl.prototype.reset = function (value, options) { };
    /**
     * Clear the control. Abstract method (implemented in sub-classes).
     * @abstract
     * @param {?=} options
     * @return {?}
     */
    AbstractControl.prototype.clear = function (options) { };
    /**
     * \@internal
     * @abstract
     * @return {?}
     */
    AbstractControl.prototype._allControlsDisabled = function () { };
    /**
     * \@internal
     * @abstract
     * @param {?} status
     * @return {?}
     */
    AbstractControl.prototype._anyControlsHaveStatus = function (status) { };
}
/**
 * Reports that a FormControl is valid, meaning that no errors exist in the input value.
 *
 * @see `status`
 * @type {?}
 */
export const VALID = 'VALID';
/**
 * Reports that a FormControl is invalid, meaning that an error exists in the input value.
 *
 * @see `status`
 * @type {?}
 */
export const INVALID = 'INVALID';
/**
 * Reports that a FormControl is pending, meaning that that async validation is occurring and
 * errors are not yet available for the input value.
 *
 * @see `markAsPending`
 * @see `status`
 * @type {?}
 */
export const PENDING = 'PENDING';
/**
 * Reports that a FormControl is disabled, meaning that the control is exempt from ancestor
 * calculations of validity or value.
 *
 * @see `markAsDisabled`
 * @see `status`
 * @type {?}
 */
export const DISABLED = 'DISABLED';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWJzdHJhY3RDb250cm9sLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGlvbmFyL2Zvcm0vIiwic291cmNlcyI6WyJjb3JlL21vZGVscy9BYnN0cmFjdENvbnRyb2wudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFNN0MsT0FBTyxDQUFDLE1BQU0sUUFBUSxDQUFDOzs7Ozs7Ozs7Ozs7O0FBc0J2QixNQUFNLE9BQWdCLGVBQWU7Ozs7Ozs7SUEwR25DLFlBQW1CLEtBQWtDLEVBQVUsUUFBdUM7UUFBbkYsVUFBSyxHQUFMLEtBQUssQ0FBNkI7UUFBVSxhQUFRLEdBQVIsUUFBUSxDQUErQjs7Ozs7Ozs7Ozs7UUF6RXRGLFlBQU8sR0FBWSxLQUFLLENBQUM7Ozs7Ozs7UUFRekIsYUFBUSxHQUFZLElBQUksQ0FBQzs7OztRQXFGekMsc0JBQWlCLEdBQUcsR0FBRyxFQUFFO1lBQ3ZCLE9BQU8sSUFBSSxDQUFDO1FBQ2QsQ0FBQyxDQUFDOzs7O1FBaVVGLHNCQUFpQixHQUFHLENBQUMsTUFBa0IsRUFBRSxFQUFFO1FBQzNDLENBQUMsQ0FBQztRQWFNLHlCQUFvQixHQUFHLENBQUMsT0FBc0MsRUFBRSxFQUFFO1lBQ3hFLElBQUksQ0FBQyxlQUFlLEdBQUcsT0FBTyxDQUFDO1FBQ2pDLENBQUMsQ0FBQzs7OztRQVNGLG1CQUFjLEdBQUcsQ0FBQyxDQUFrQixFQUFXLEVBQUU7WUFFL0MsT0FBTyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsZUFBZSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUVoRyxDQUFDLENBQUM7UUFsWEEsSUFBSSxDQUFDLG9CQUFvQixDQUFDLFFBQVEsQ0FBQyxDQUFD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RW5DLHVEQUF5Qzs7Ozs7SUFFekMsa0NBQXVDOzs7OztJQUV2QyxnQ0FBeUI7Ozs7O0lBRXpCLGdDQUFzQjs7Ozs7SUFFdEIsZ0NBQXdCOzs7OztJQUV4QiwwQ0FBdUQ7Ozs7Ozs7O0lBU3ZELG1DQUEwRDs7Ozs7O0lBWTFELHVDQUE4Qzs7Ozs7O0lBTTlDLHdDQUErQzs7Ozs7SUE0Qi9DLDRDQUVFOzs7OztJQWlVRiw0Q0FDRTs7Ozs7SUFhRiwrQ0FFRTs7Ozs7SUFTRix5Q0FJRTs7SUFwWFUsZ0NBQXlDOzs7OztJQUFFLG1DQUErQzs7Ozs7Ozs7SUF3YXRHLG1FQUFzRDs7Ozs7Ozs7SUFLdEQsZ0VBQW9EOzs7Ozs7O0lBS3BELHlEQUF1Qzs7Ozs7O0lBR3ZDLGlFQUF5Qzs7Ozs7OztJQUd6Qyx5RUFBd0Q7Ozs7Ozs7O0FBUzFELE1BQU0sT0FBTyxLQUFLLEdBQUcsT0FBTzs7Ozs7OztBQU81QixNQUFNLE9BQU8sT0FBTyxHQUFHLFNBQVM7Ozs7Ozs7OztBQVNoQyxNQUFNLE9BQU8sT0FBTyxHQUFHLFNBQVM7Ozs7Ozs7OztBQVNoQyxNQUFNLE9BQU8sUUFBUSxHQUFHLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgQXN5bmNWYWxpZGF0b3JGbiwgSm9pU2NoZW1hLCBKb2lFcnJvciB9IGZyb20gJy4uL2ludGVyZmFjZXMvVmFsaWRhdG9yJztcclxuaW1wb3J0IHsgRm9ybUdyb3VwIH0gZnJvbSAnLi4vbW9kZWxzL0Zvcm1Hcm91cCc7XHJcblxyXG5cclxuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcclxuaW1wb3J0IHtcclxuICBBYnN0cmFjdENvbnRyb2xPcHRpb25zLFxyXG4gIEFic3RyYWN0Q29udHJvbFN0YXRlLFxyXG4gIEZvcm1BcnJheVN0YXRlLFxyXG4gIEZvcm1Db250cm9sU3RhdGUsXHJcbiAgRm9ybUdyb3VwU3RhdGVcclxufSBmcm9tICcuLi9pbnRlcmZhY2VzL0Zvcm0nO1xyXG5cclxuaW1wb3J0IHsgRm9ybUFycmF5IH0gZnJvbSAnLi9Gb3JtQXJyYXknO1xyXG5cclxuLyoqXHJcbiAqIFRoaXMgaXMgdGhlIGJhc2UgY2xhc3MgZm9yIGBGb3JtQ29udHJvbGAsIGBGb3JtR3JvdXAudHNgLCBhbmQgYEZvcm1BcnJheWAuXHJcbiAqXHJcbiAqIEl0IHByb3ZpZGVzIHNvbWUgb2YgdGhlIHNoYXJlZCBiZWhhdmlvciB0aGF0IGFsbCBjb250cm9scyBhbmQgZ3JvdXBzIG9mIGNvbnRyb2xzIGhhdmUsIGxpa2VcclxuICogcnVubmluZyB2YWxpZGF0b3JzLCBjYWxjdWxhdGluZyBzdGF0dXMsIGFuZCByZXNldHRpbmcgc3RhdGUuIEl0IGFsc28gZGVmaW5lcyB0aGUgcHJvcGVydGllc1xyXG4gKiB0aGF0IGFyZSBzaGFyZWQgYmV0d2VlbiBhbGwgc3ViLWNsYXNzZXMsIGxpa2UgYHZhbHVlYCwgYHZhbGlkYCwgYW5kIGBkaXJ0eWAuIEl0IHNob3VsZG4ndCBiZVxyXG4gKiBpbnN0YW50aWF0ZWQgZGlyZWN0bHkuXHJcbiAqXHJcbiAqXHJcbiAqIEBwdWJsaWNBcGlcclxuICovXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBBYnN0cmFjdENvbnRyb2wge1xyXG5cclxuICAvKiogQGludGVybmFsICovXHJcbiAgcHVibGljIHJlYWRvbmx5IHBlbmRpbmdWYWx1ZTogYW55O1xyXG5cclxuICAvKipcclxuICAgKiBUaGUgY3VycmVudCB2YWx1ZSBvZiB0aGUgY29udHJvbC5cclxuICAgKlxyXG4gICAqICogRm9yIGEgYEZvcm1Db250cm9sYCwgdGhlIGN1cnJlbnQgdmFsdWUuXHJcbiAgICogKiBGb3IgYSBgRm9ybUdyb3VwYCwgdGhlIHZhbHVlcyBvZiBlbmFibGVkIGNvbnRyb2xzIGFzIGFuIG9iamVjdCB3aXRoIGEga2V5LXZhbHVlIHBhaXIgZm9yIGVhY2ggbWVtYmVyIG9mIHRoZSBncm91cC5cclxuICAgKiAqIEZvciBhIGBGb3JtQXJyYXlgLCB0aGUgdmFsdWVzIG9mIGVuYWJsZWQgY29udHJvbHMgYXMgYW4gYXJyYXkuXHJcbiAgICpcclxuICAgKi9cclxuICBwdWJsaWMgcmVhZG9ubHkgdmFsdWU6IGFueTtcclxuXHJcbiAgLyoqXHJcbiAgICogQW4gb2JqZWN0IGNvbnRhaW5pbmcgYW55IGVycm9ycyBnZW5lcmF0ZWQgYnkgZmFpbGluZyB2YWxpZGF0aW9uLFxyXG4gICAqIG9yIG51bGwgaWYgdGhlcmUgYXJlIG5vIGVycm9ycy5cclxuICAgKi9cclxuICBwdWJsaWMgcmVhZG9ubHkgZXJyb3JzOiBKb2lFcnJvcltdIHwgbnVsbDtcclxuXHJcblxyXG4gIC8qKlxyXG4gICAqIEEgSm9pIG9iamVjdCBzY2hlbWFcclxuICAgKi9cclxuICAvLyBwdWJsaWMgcmVhZG9ubHkgc2NoZW1hOiBKb2lTY2hlbWEgfCBudWxsO1xyXG5cclxuICAvKipcclxuICAgKiBUcnVlIGlmIHRoZSBjb250cm9sIGlzIG1hcmtlZCBhcyBgdG91Y2hlZGAuXHJcbiAgICpcclxuICAgKiBBIGNvbnRyb2wgaXMgbWFya2VkIGB0b3VjaGVkYCBvbmNlIHRoZSB1c2VyIGhhcyB0cmlnZ2VyZWRcclxuICAgKiBhIGBibHVyYCBldmVudCBvbiBpdC5cclxuICAgKi9cclxuICBwdWJsaWMgcmVhZG9ubHkgdG91Y2hlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAvKipcclxuICAgKiBBIGNvbnRyb2wgaXMgYHByaXN0aW5lYCBpZiB0aGUgdXNlciBoYXMgbm90IHlldCBjaGFuZ2VkIHRoZSB2YWx1ZSBpbiB0aGUgVUkuXHJcbiAgICpcclxuICAgKiBAcmV0dXJucyBUcnVlIGlmIHRoZSB1c2VyIGhhcyBub3QgeWV0IGNoYW5nZWQgdGhlIHZhbHVlIGluIHRoZSBVSTsgY29tcGFyZSBgZGlydHlgLlxyXG4gICAqIFByb2dyYW1tYXRpYyBjaGFuZ2VzIHRvIGEgY29udHJvbCdzIHZhbHVlIGRvIG5vdCBtYXJrIGl0IGRpcnR5LlxyXG4gICAqL1xyXG4gIHB1YmxpYyByZWFkb25seSBwcmlzdGluZTogYm9vbGVhbiA9IHRydWU7XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoZSB2YWxpZGF0aW9uIHN0YXR1cyBvZiB0aGUgY29udHJvbC4gVGhlcmUgYXJlIGZvdXIgcG9zc2libGVcclxuICAgKiB2YWxpZGF0aW9uIHN0YXR1cyB2YWx1ZXM6XHJcbiAgICpcclxuICAgKiAqICoqVkFMSUQqKjogVGhpcyBjb250cm9sIGhhcyBwYXNzZWQgYWxsIHZhbGlkYXRpb24gY2hlY2tzLlxyXG4gICAqICogKipJTlZBTElEKio6IFRoaXMgY29udHJvbCBoYXMgZmFpbGVkIGF0IGxlYXN0IG9uZSB2YWxpZGF0aW9uIGNoZWNrLlxyXG4gICAqICogKipQRU5ESU5HKio6IFRoaXMgY29udHJvbCBpcyBpbiB0aGUgbWlkc3Qgb2YgY29uZHVjdGluZyBhIHZhbGlkYXRpb24gY2hlY2suXHJcbiAgICogKiAqKkRJU0FCTEVEKio6IFRoaXMgY29udHJvbCBpcyBleGVtcHQgZnJvbSB2YWxpZGF0aW9uIGNoZWNrcy5cclxuICAgKlxyXG4gICAqIFRoZXNlIHN0YXR1cyB2YWx1ZXMgYXJlIG11dHVhbGx5IGV4Y2x1c2l2ZSwgc28gYSBjb250cm9sIGNhbm5vdCBiZSBib3RoIHZhbGlkIEFORCBpbnZhbGlkIG9yIGludmFsaWQgQU5EIGRpc2FibGVkLlxyXG4gICAqL1xyXG4gIHB1YmxpYyByZWFkb25seSBzdGF0dXM6IHN0cmluZztcclxuXHJcblxyXG4gIHB1YmxpYyByZWFkb25seSBhc3luY1ZhbGlkYXRvcjogQXN5bmNWYWxpZGF0b3JGbiB8IG51bGw7XHJcblxyXG4gIHB1YmxpYyBydW5Bc3luY1ZhbGlkYXRvcjogRnVuY3Rpb247XHJcblxyXG4gIHB1YmxpYyBfYXN5bmNWYWxpZGF0aW9uU3Vic2NyaXB0aW9uOiBhbnk7XHJcblxyXG4gIHByaXZhdGUgX3BhcmVudDogRm9ybUdyb3VwIHwgRm9ybUFycmF5O1xyXG5cclxuICBwcml2YXRlIF9yb290OiBGb3JtR3JvdXA7XHJcblxyXG4gIHByaXZhdGUgX25hbWU6IHN0cmluZztcclxuXHJcbiAgcHJpdmF0ZSBfcGF0aDogc3RyaW5nW107XHJcblxyXG4gIHByaXZhdGUgX2luaXRpYWxPcHRpb25zOiBBYnN0cmFjdENvbnRyb2xPcHRpb25zIHwgbnVsbDtcclxuXHJcbiAgLyoqXHJcbiAgICpcclxuICAgKiBAcGFyYW0gY29udHJvbHMgQSBjb2xsZWN0aW9uIG9mIGNoaWxkIGNvbnRyb2xzLiBUaGUga2V5IGZvciBlYWNoIGNoaWxkIGlzIHRoZSBuYW1lXHJcbiAgICogdW5kZXIgd2hpY2ggaXQgaXMgcmVnaXN0ZXJlZC5cclxuICAgKlxyXG4gICAqL1xyXG5cclxuICBwdWJsaWMgcmVhZG9ubHkgY29udHJvbHM6IEZvcm1Hcm91cFN0YXRlIHwgRm9ybUFycmF5U3RhdGU7XHJcblxyXG4gIC8qKlxyXG4gICAqIEBkZXNjcmlwdGlvblxyXG4gICAqIEVtaXRzIGFuIGV2ZW50IHdoZW4gdGhlIGZvcm0gc3VibWlzc2lvbiBoYXMgYmVlbiB0cmlnZ2VyZWQuXHJcbiAgICovXHJcblxyXG5cclxuICAvKipcclxuICAgKiBBIG11bHRpY2FzdGluZyBvYnNlcnZhYmxlIHRoYXQgZW1pdHMgYW4gZXZlbnQgZXZlcnkgdGltZSB0aGUgdmFsdWUgb2YgdGhlIGNvbnRyb2wgY2hhbmdlcywgaW5cclxuICAgKiB0aGUgVUkgb3IgcHJvZ3JhbW1hdGljYWxseS5cclxuICAgKi9cclxuICBwdWJsaWMgcmVhZG9ubHkgdmFsdWVDaGFuZ2VzOiBPYnNlcnZhYmxlPGFueT47XHJcblxyXG4gIC8qKlxyXG4gICAqIEEgbXVsdGljYXN0aW5nIG9ic2VydmFibGUgdGhhdCBlbWl0cyBhbiBldmVudCBldmVyeSB0aW1lIHRoZSB2YWxpZGF0aW9uIGBzdGF0dXNgIG9mIHRoZSBjb250cm9sXHJcbiAgICogcmVjYWxjdWxhdGVzLlxyXG4gICAqL1xyXG4gIHB1YmxpYyByZWFkb25seSBzdGF0dXNDaGFuZ2VzOiBPYnNlcnZhYmxlPGFueT47XHJcblxyXG4gIC8qKlxyXG4gICAqIEluaXRpYWxpemUgdGhlIEFic3RyYWN0Q29udHJvbCBpbnN0YW5jZS5cclxuICAgKlxyXG4gICAqIEBwYXJhbSBvcHRpb25zXHJcbiAgICpcclxuICAgKi9cclxuICBjb25zdHJ1Y3RvcihwdWJsaWMgc3RhdGU6IEFic3RyYWN0Q29udHJvbFN0YXRlIHwgbnVsbCwgcHJpdmF0ZSBfb3B0aW9uczogQWJzdHJhY3RDb250cm9sT3B0aW9ucyB8IG51bGwpIHtcclxuXHJcbiAgICB0aGlzLl9zdG9yZUluaXRpYWxPcHRpb25zKF9vcHRpb25zKTtcclxuICAgIHRoaXMucnVuQXN5bmNWYWxpZGF0b3IgPSAoKSA9PiB7XHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgZ2V0IHNjaGVtYSgpOiBKb2lTY2hlbWEgfCBudWxsIHtcclxuICAgIGlmICh0aGlzLnBhcmVudCAmJiB0aGlzLnBhcmVudC5zY2hlbWEpIHtcclxuICAgICAgY29uc3QgZXh0cmFjdENoaWxkID0gXy5maW5kKHRoaXMucGFyZW50LnNjaGVtYVsnX2lubmVyJ10uY2hpbGRyZW4sIFsna2V5JywgdGhpcy5uYW1lXSk7XHJcblxyXG4gICAgICByZXR1cm4gZXh0cmFjdENoaWxkID8gZXh0cmFjdENoaWxkLnNjaGVtYSA6IG51bGw7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICByZXR1cm4gdGhpcy5fZ2V0Q29udHJvbFNjaGVtYSgpO1xyXG4gIH1cclxuXHJcbiAgLyoqIEBpbnRlcm5hbCAqL1xyXG4gIF9nZXRDb250cm9sU2NoZW1hID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfTtcclxuXHJcblxyXG4gIGdldCBwYXRoKCk6IHN0cmluZ1tdIHtcclxuICAgIHJldHVybiB0aGlzLnBhcmVudCA/IFsuLi50aGlzLnBhcmVudC5wYXRoLCB0aGlzLm5hbWVdIDogW107XHJcbiAgfVxyXG5cclxuICBnZXQgbmFtZSgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMuX25hbWU7XHJcbiAgfVxyXG5cclxuICBzZXQgbmFtZShuYW1lOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuX25hbWUgPSBuYW1lO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogVGhlIHBhcmVudCBjb250cm9sLlxyXG4gICAqL1xyXG4gIGdldCBwYXJlbnQoKTogRm9ybUdyb3VwIHwgRm9ybUFycmF5IHtcclxuICAgIHJldHVybiB0aGlzLl9wYXJlbnQ7XHJcbiAgfVxyXG5cclxuICBnZXQgcm9vdCgpOiBGb3JtR3JvdXAge1xyXG4gICAgcmV0dXJuIHRoaXMuX3Jvb3Q7XHJcbiAgfVxyXG5cclxuICBnZXQgb3B0aW9ucygpOiBBYnN0cmFjdENvbnRyb2xPcHRpb25zIHtcclxuXHJcbiAgICBsZXQgcGFyZW50Q29uZmlnO1xyXG5cclxuICAgIGlmICh0aGlzLnBhcmVudCAmJiB0aGlzLnBhcmVudC5vcHRpb25zKSBwYXJlbnRDb25maWcgPSB7XHJcbiAgICAgIC4uLnRoaXMucGFyZW50Lm9wdGlvbnNcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgLi4ucGFyZW50Q29uZmlnLFxyXG4gICAgICAuLi50aGlzLl9pbml0aWFsT3B0aW9uc1xyXG4gICAgfSB8fCBudWxsO1xyXG4gIH1cclxuXHJcbiAgc2V0IG9wdGlvbnMobmV3Q29uZmlnOiBBYnN0cmFjdENvbnRyb2xPcHRpb25zKSB7XHJcblxyXG4gICAgdGhpcy5fb3B0aW9ucyA9IHtcclxuICAgICAgLi4udGhpcy5fb3B0aW9ucyxcclxuICAgICAgLi4ubmV3Q29uZmlnXHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMudXBkYXRlVmFsdWVBbmRWYWxpZGl0eSh7IGVtaXRFdmVudDogdHJ1ZSB9KTtcclxuXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBBIGNvbnRyb2wgaXMgYGVuYWJsZWRgIGFzIGxvbmcgYXMgaXRzIGBzdGF0dXNgIGlzIG5vdCBgRElTQUJMRURgLlxyXG4gICAqXHJcbiAgICogQHNlZSBgc3RhdHVzYFxyXG4gICAqXHJcbiAgICogQHJldHVybnMgVHJ1ZSBpZiB0aGUgY29udHJvbCBoYXMgYW55IHN0YXR1cyBvdGhlciB0aGFuICdESVNBQkxFRCcsXHJcbiAgICogZmFsc2UgaWYgdGhlIHN0YXR1cyBpcyAnRElTQUJMRUQnLlxyXG4gICAqXHJcbiAgICovXHJcbiAgZ2V0IGVuYWJsZWQoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5zdGF0dXMgIT09IERJU0FCTEVEO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQSBjb250cm9sIGlzIGBkaXNhYmxlZGAgd2hlbiBpdHMgYHN0YXR1c2AgaXMgYERJU0FCTEVEYC5cclxuICAgKlxyXG4gICAqIEBzZWUgYHN0YXR1c2BcclxuICAgKlxyXG4gICAqIERpc2FibGVkIGNvbnRyb2xzIGFyZSBleGVtcHQgZnJvbSB2YWxpZGF0aW9uIGNoZWNrcyBhbmRcclxuICAgKiBhcmUgbm90IGluY2x1ZGVkIGluIHRoZSBhZ2dyZWdhdGUgdmFsdWUgb2YgdGhlaXIgYW5jZXN0b3JcclxuICAgKiBjb250cm9scy5cclxuICAgKlxyXG4gICAqIEByZXR1cm5zIFRydWUgaWYgdGhlIGNvbnRyb2wgaXMgZGlzYWJsZWQsIGZhbHNlIG90aGVyd2lzZS5cclxuICAgKi9cclxuICBnZXQgZGlzYWJsZWQoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5zdGF0dXMgPT09IERJU0FCTEVEO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQSBjb250cm9sIGlzIGB2YWxpZGAgd2hlbiBpdHMgYHN0YXR1c2AgaXMgYFZBTElEYC5cclxuICAgKlxyXG4gICAqIEBzZWUgYHN0YXR1c2BcclxuICAgKlxyXG4gICAqIEByZXR1cm5zIFRydWUgaWYgdGhlIGNvbnRyb2wgaGFzIHBhc3NlZCBhbGwgb2YgaXRzIHZhbGlkYXRpb24gdGVzdHMsXHJcbiAgICogZmFsc2Ugb3RoZXJ3aXNlLlxyXG4gICAqL1xyXG4gIGdldCB2YWxpZCgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLnN0YXR1cyA9PT0gVkFMSUQ7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBBIGNvbnRyb2wgaXMgYGludmFsaWRgIHdoZW4gaXRzIGBzdGF0dXNgIGlzIGBJTlZBTElEYC5cclxuICAgKlxyXG4gICAqIEBzZWUgYHN0YXR1c2BcclxuICAgKlxyXG4gICAqIEByZXR1cm5zIFRydWUgaWYgdGhpcyBjb250cm9sIGhhcyBmYWlsZWQgb25lIG9yIG1vcmUgb2YgaXRzIHZhbGlkYXRpb24gY2hlY2tzLFxyXG4gICAqIGZhbHNlIG90aGVyd2lzZS5cclxuICAgKi9cclxuICBnZXQgaW52YWxpZCgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLnN0YXR1cyA9PT0gSU5WQUxJRDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEEgY29udHJvbCBpcyBgcGVuZGluZ2Agd2hlbiBpdHMgYHN0YXR1c2AgaXMgYFBFTkRJTkdgLlxyXG4gICAqXHJcbiAgICogQHNlZSBgc3RhdHVzYFxyXG4gICAqXHJcbiAgICogQHJldHVybnMgVHJ1ZSBpZiB0aGlzIGNvbnRyb2wgaXMgaW4gdGhlIHByb2Nlc3Mgb2YgY29uZHVjdGluZyBhIHZhbGlkYXRpb24gY2hlY2ssXHJcbiAgICogZmFsc2Ugb3RoZXJ3aXNlLlxyXG4gICAqL1xyXG4gIGdldCBwZW5kaW5nKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuc3RhdHVzID09PSBQRU5ESU5HO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQSBjb250cm9sIGlzIGBkaXJ0eWAgaWYgdGhlIHVzZXIgaGFzIGNoYW5nZWQgdGhlIHZhbHVlXHJcbiAgICogaW4gdGhlIFVJLlxyXG4gICAqXHJcbiAgICogQHJldHVybnMgVHJ1ZSBpZiB0aGUgdXNlciBoYXMgY2hhbmdlZCB0aGUgdmFsdWUgb2YgdGhpcyBjb250cm9sIGluIHRoZSBVSTsgY29tcGFyZSBgcHJpc3RpbmVgLlxyXG4gICAqIFByb2dyYW1tYXRpYyBjaGFuZ2VzIHRvIGEgY29udHJvbCdzIHZhbHVlIGRvIG5vdCBtYXJrIGl0IGRpcnR5LlxyXG4gICAqL1xyXG4gIGdldCBkaXJ0eSgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiAhdGhpcy5wcmlzdGluZTtcclxuICB9XHJcblxyXG5cclxuICAvKipcclxuICAgKiBNYXJrcyB0aGUgY29udHJvbCBhcyBgdG91Y2hlZGAuIEEgY29udHJvbCBpcyB0b3VjaGVkIGJ5IGZvY3VzIGFuZFxyXG4gICAqIGJsdXIgZXZlbnRzIHRoYXQgZG8gbm90IGNoYW5nZSB0aGUgdmFsdWU7IGNvbXBhcmUgYG1hcmtBc0RpcnR5YDtcclxuICAgKlxyXG4gICAqICBAcGFyYW0gb3B0cyBvcHRpb25zIG9wdGlvbnMgdGhhdCBkZXRlcm1pbmUgaG93IHRoZSBjb250cm9sIHByb3BhZ2F0ZXMgY2hhbmdlc1xyXG4gICAqIGFuZCBlbWl0cyBldmVudHMgZXZlbnRzIGFmdGVyIG1hcmtpbmcgaXMgYXBwbGllZC5cclxuICAgKiAqIGBvbmx5U2VsZmA6IFdoZW4gdHJ1ZSwgbWFyayBvbmx5IHRoaXMgY29udHJvbC4gV2hlbiBmYWxzZSBvciBub3Qgc3VwcGxpZWQsXHJcbiAgICogbWFya3MgYWxsIGRpcmVjdCBhbmNlc3RvcnMuIERlZmF1bHQgaXMgZmFsc2UuXHJcbiAgICovXHJcbiAgbWFya0FzVG91Y2hlZCgpOiB2b2lkIHtcclxuICAgICh0aGlzIGFzIHsgdG91Y2hlZDogYm9vbGVhbiB9KS50b3VjaGVkID0gdHJ1ZTtcclxuXHJcbiAgICB0aGlzLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkoeyBvbmx5U2VsZjogdHJ1ZSB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIE1hcmtzIHRoZSBjb250cm9sIGFzIGB1bnRvdWNoZWRgLlxyXG4gICAqXHJcbiAgICogSWYgdGhlIGNvbnRyb2wgaGFzIGFueSBjaGlsZHJlbiwgYWxzbyBtYXJrcyBhbGwgY2hpbGRyZW4gYXMgYHVudG91Y2hlZGBcclxuICAgKiBhbmQgcmVjYWxjdWxhdGVzIHRoZSBgdG91Y2hlZGAgc3RhdHVzIG9mIGFsbCBwYXJlbnQgY29udHJvbHMuXHJcbiAgICpcclxuICAgKiAgQHBhcmFtIG9wdHMgb3B0aW9ucyBvcHRpb25zIHRoYXQgZGV0ZXJtaW5lIGhvdyB0aGUgY29udHJvbCBwcm9wYWdhdGVzIGNoYW5nZXNcclxuICAgKiBhbmQgZW1pdHMgZXZlbnRzIGFmdGVyIHRoZSBtYXJraW5nIGlzIGFwcGxpZWQuXHJcbiAgICogKiBgb25seVNlbGZgOiBXaGVuIHRydWUsIG1hcmsgb25seSB0aGlzIGNvbnRyb2wuIFdoZW4gZmFsc2Ugb3Igbm90IHN1cHBsaWVkLFxyXG4gICAqIG1hcmtzIGFsbCBkaXJlY3QgYW5jZXN0b3JzLiBEZWZhdWx0IGlzIGZhbHNlLlxyXG4gICAqL1xyXG4gIG1hcmtBc1VudG91Y2hlZChvcHRzOiB7IG9ubHlTZWxmPzogYm9vbGVhbiB9ID0ge30pOiB2b2lkIHtcclxuICAgICh0aGlzIGFzIHsgdG91Y2hlZDogYm9vbGVhbiB9KS50b3VjaGVkID0gZmFsc2U7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBNYXJrcyB0aGUgY29udHJvbCBhcyBgZGlydHlgLiBBIGNvbnRyb2wgYmVjb21lcyBkaXJ0eSB3aGVuXHJcbiAgICogdGhlIGNvbnRyb2wncyB2YWx1ZSBpcyBjaGFuZ2VkIHRocm91Z2ggdGhlIFVJOyBjb21wYXJlIGBtYXJrQXNUb3VjaGVkYC5cclxuICAgKlxyXG4gICAqICBAcGFyYW0gb3B0cyBvcHRpb25zIG9wdGlvbnMgdGhhdCBkZXRlcm1pbmUgaG93IHRoZSBjb250cm9sIHByb3BhZ2F0ZXMgY2hhbmdlc1xyXG4gICAqIGFuZCBlbWl0cyBldmVudHMgYWZ0ZXIgbWFya2luZyBpcyBhcHBsaWVkLlxyXG4gICAqICogYG9ubHlTZWxmYDogV2hlbiB0cnVlLCBtYXJrIG9ubHkgdGhpcyBjb250cm9sLiBXaGVuIGZhbHNlIG9yIG5vdCBzdXBwbGllZCxcclxuICAgKiBtYXJrcyBhbGwgZGlyZWN0IGFuY2VzdG9ycy4gRGVmYXVsdCBpcyBmYWxzZS5cclxuICAgKi9cclxuICBtYXJrQXNEaXJ0eShvcHRzOiB7IG9ubHlTZWxmPzogYm9vbGVhbiB9ID0ge30pOiB2b2lkIHtcclxuICAgICh0aGlzIGFzIHsgcHJpc3RpbmU6IGJvb2xlYW4gfSkucHJpc3RpbmUgPSBmYWxzZTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIE1hcmtzIHRoZSBjb250cm9sIGFzIGBwcmlzdGluZWAuXHJcbiAgICpcclxuICAgKiBJZiB0aGUgY29udHJvbCBoYXMgYW55IGNoaWxkcmVuLCBtYXJrcyBhbGwgY2hpbGRyZW4gYXMgYHByaXN0aW5lYCxcclxuICAgKiBhbmQgcmVjYWxjdWxhdGVzIHRoZSBgcHJpc3RpbmVgIHN0YXR1cyBvZiBhbGwgcGFyZW50XHJcbiAgICogY29udHJvbHMuXHJcbiAgICpcclxuICAgKiAgQHBhcmFtIG9wdHMgb3B0aW9ucyBvcHRpb25zIHRoYXQgZGV0ZXJtaW5lIGhvdyB0aGUgY29udHJvbCBlbWl0cyBldmVudHMgYWZ0ZXJcclxuICAgKiBtYXJraW5nIGlzIGFwcGxpZWQuXHJcbiAgICogKiBgb25seVNlbGZgOiBXaGVuIHRydWUsIG1hcmsgb25seSB0aGlzIGNvbnRyb2wuIFdoZW4gZmFsc2Ugb3Igbm90IHN1cHBsaWVkLFxyXG4gICAqIG1hcmtzIGFsbCBkaXJlY3QgYW5jZXN0b3JzLiBEZWZhdWx0IGlzIGZhbHNlLi5cclxuICAgKi9cclxuICBtYXJrQXNQcmlzdGluZShvcHRzOiB7IG9ubHlTZWxmPzogYm9vbGVhbiB9ID0ge30pOiB2b2lkIHtcclxuICAgICh0aGlzIGFzIHsgcHJpc3RpbmU6IGJvb2xlYW4gfSkucHJpc3RpbmUgPSB0cnVlO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogU2V0cyBvcHRpb25zIG9uIGEgZm9ybSBjb250cm9sIC5cclxuICAgKlxyXG4gICAqIENhbGxpbmcgYHNldE9wdGlvbnNgIGFsc28gdXBkYXRlcyB0aGUgdmFsaWRpdHkgb2YgdGhlIHBhcmVudCBjb250cm9sLlxyXG4gICAqXHJcbiAgICogQHVzYWdlTm90ZXNcclxuICAgKiAjIyMgTWFudWFsbHkgc2V0IHRoZSBvcHRpb25zIGZvciBhIGNvbnRyb2xcclxuICAgKlxyXG4gICAqIGBgYFxyXG4gICAqIGNvbnN0IGxvZ2luID0gbmV3IEZvcm1Db250cm9sKCdzb21lTG9naW4nKTtcclxuICAgKiBsb2dpbi5zZXRFcnJvcnMoe1xyXG4gICAqICAgbm90VW5pcXVlOiB0cnVlXHJcbiAgICogfSk7XHJcbiAgICpcclxuICAgKiBleHBlY3QobG9naW4udmFsaWQpLnRvRXF1YWwoZmFsc2UpO1xyXG4gICAqIGV4cGVjdChsb2dpbi5lcnJvcnMpLnRvRXF1YWwoeyBub3RVbmlxdWU6IHRydWUgfSk7XHJcbiAgICpcclxuICAgKiBsb2dpbi5zZXRWYWx1ZSgnc29tZU90aGVyTG9naW4nKTtcclxuICAgKlxyXG4gICAqIGV4cGVjdChsb2dpbi52YWxpZCkudG9FcXVhbCh0cnVlKTtcclxuICAgKiBgYGBcclxuICAgKi9cclxuICBzZXRPcHRpb25zKG9wdGlvbnM6IEFic3RyYWN0Q29udHJvbE9wdGlvbnMgfCBudWxsLCBvcHRzOiB7IGVtaXRFdmVudD86IGJvb2xlYW4gfSA9IHt9KTogdm9pZCB7XHJcbiAgICB0aGlzLl9pbml0aWFsT3B0aW9ucyA9IG9wdGlvbnM7XHJcbiAgICB0aGlzLl91cGRhdGVDb250cm9sc09wdGlvbnMob3B0cy5lbWl0RXZlbnQgIT09IGZhbHNlKTtcclxuICB9XHJcblxyXG5cclxuICAvKipcclxuICAgKiBTZXRzIGVycm9ycyBvbiBhIGZvcm0gY29udHJvbCB3aGVuIHJ1bm5pbmcgdmFsaWRhdGlvbnMgbWFudWFsbHksIHJhdGhlciB0aGFuIGF1dG9tYXRpY2FsbHkuXHJcbiAgICpcclxuICAgKiBDYWxsaW5nIGBzZXRFcnJvcnNgIGFsc28gdXBkYXRlcyB0aGUgdmFsaWRpdHkgb2YgdGhlIHBhcmVudCBjb250cm9sLlxyXG4gICAqXHJcbiAgICogQHVzYWdlTm90ZXNcclxuICAgKiAjIyMgTWFudWFsbHkgc2V0IHRoZSBlcnJvcnMgZm9yIGEgY29udHJvbFxyXG4gICAqXHJcbiAgICogYGBgXHJcbiAgICogY29uc3QgbG9naW4gPSBuZXcgRm9ybUNvbnRyb2woJ3NvbWVMb2dpbicpO1xyXG4gICAqIGxvZ2luLnNldEVycm9ycyh7XHJcbiAgICogICBub3RVbmlxdWU6IHRydWVcclxuICAgKiB9KTtcclxuICAgKlxyXG4gICAqIGV4cGVjdChsb2dpbi52YWxpZCkudG9FcXVhbChmYWxzZSk7XHJcbiAgICogZXhwZWN0KGxvZ2luLmVycm9ycykudG9FcXVhbCh7IG5vdFVuaXF1ZTogdHJ1ZSB9KTtcclxuICAgKlxyXG4gICAqIGxvZ2luLnNldFZhbHVlKCdzb21lT3RoZXJMb2dpbicpO1xyXG4gICAqXHJcbiAgICogZXhwZWN0KGxvZ2luLnZhbGlkKS50b0VxdWFsKHRydWUpO1xyXG4gICAqIGBgYFxyXG4gICAqL1xyXG4gIHNldEVycm9ycyhlcnJvcnM6IEpvaUVycm9yW10gfCBudWxsLCBvcHRzOiB7IGVtaXRFdmVudD86IGJvb2xlYW4gfSA9IHt9KTogdm9pZCB7XHJcbiAgICAodGhpcyBhcyB7IGVycm9yczogSm9pRXJyb3JbXSB8IG51bGwgfSkuZXJyb3JzID0gZXJyb3JzO1xyXG4gICAgdGhpcy5fdXBkYXRlQ29udHJvbHNFcnJvcnMob3B0cy5lbWl0RXZlbnQgIT09IGZhbHNlKTtcclxuICB9XHJcblxyXG4gIC8vXHJcbiAgLyoqXHJcbiAgICogQHBhcmFtIHBhcmVudCBTZXRzIHRoZSBwYXJlbnQgb2YgdGhlIGNvbnRyb2xcclxuICAgKi9cclxuICBzZXRQYXJlbnQocGFyZW50OiBGb3JtR3JvdXAgfCBGb3JtQXJyYXkpOiB2b2lkIHtcclxuICAgIHRoaXMuX3BhcmVudCA9IHBhcmVudDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBwYXJhbSByb290IFNldHMgdGhlIHJvb3Qgb2YgdGhlIGZvcm1cclxuICAgKi9cclxuICBzZXRSb290KHJvb3Q6IEZvcm1Hcm91cCk6IHZvaWQge1xyXG4gICAgdGhpcy5fcm9vdCA9IHJvb3Q7XHJcbiAgfVxyXG5cclxuICB1cGRhdGVPcHRpb25zKG9wdGlvbnM6IEFic3RyYWN0Q29udHJvbE9wdGlvbnMgfCBudWxsLCBvcHRzOiB7IGVtaXRFdmVudD86IGJvb2xlYW4gfSA9IHt9KTogdm9pZCB7XHJcbiAgICB0aGlzLl9pbml0aWFsT3B0aW9ucyA9IHtcclxuICAgICAgLi4udGhpcy5faW5pdGlhbE9wdGlvbnMsXHJcbiAgICAgIC4uLm9wdGlvbnNcclxuICAgIH07XHJcbiAgICB0aGlzLl91cGRhdGVDb250cm9sc09wdGlvbnMob3B0cy5lbWl0RXZlbnQgIT09IGZhbHNlKTtcclxuICB9XHJcblxyXG5cclxuICAvKipcclxuICAgKiBSZWNhbGN1bGF0ZXMgdGhlIHZhbHVlIGFuZCB2YWxpZGF0aW9uIHN0YXR1cyBvZiB0aGUgY29udHJvbC5cclxuICAgKlxyXG4gICAqIEJ5IGRlZmF1bHQsIGl0IGFsc28gdXBkYXRlcyB0aGUgdmFsdWUgYW5kIHZhbGlkaXR5IG9mIGl0cyBhbmNlc3RvcnMuXHJcbiAgICpcclxuICAgKiBAcGFyYW0gb3B0cyBvcHRpb25zIG9wdGlvbnMgZGV0ZXJtaW5lIGhvdyB0aGUgY29udHJvbCBwcm9wYWdhdGVzIGNoYW5nZXMgYW5kIGVtaXRzIGV2ZW50c1xyXG4gICAqIGFmdGVyIHVwZGF0ZXMgYW5kIHZhbGlkaXR5IGNoZWNrcyBhcmUgYXBwbGllZC5cclxuICAgKiAqIGBvbmx5U2VsZmA6IFdoZW4gdHJ1ZSwgb25seSB1cGRhdGUgdGhpcyBjb250cm9sLiBXaGVuIGZhbHNlIG9yIG5vdCBzdXBwbGllZCxcclxuICAgKiB1cGRhdGUgYWxsIGRpcmVjdCBhbmNlc3RvcnMuIERlZmF1bHQgaXMgZmFsc2UuLlxyXG4gICAqICogYGVtaXRFdmVudGA6IFdoZW4gdHJ1ZSBvciBub3Qgc3VwcGxpZWQgKHRoZSBkZWZhdWx0KSwgZW1pdCB0aGUgYHZhbHVlQ2hhbmdlc2AgZXZlbnRcclxuICAgKiBvYnNlcnZhYmxlcyBlbWl0IGV2ZW50cyB3aXRoIHRoZSBsYXRlc3Qgc3RhdHVzIGFuZCB2YWx1ZSB3aGVuIHRoZSBjb250cm9sIGlzIHVwZGF0ZWQuXHJcbiAgICogV2hlbiBmYWxzZSwgbm8gZXZlbnRzIGFyZSBlbWl0dGVkLlxyXG4gICAqL1xyXG4gIHVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkob3B0czogeyBvbmx5U2VsZj86IGJvb2xlYW4sIGVtaXRFdmVudD86IGJvb2xlYW4gfSA9IHt9KTogdm9pZCB7XHJcbiAgICB0aGlzLl9zZXRJbml0aWFsU3RhdHVzKCk7XHJcbiAgICB0aGlzLl91cGRhdGVWYWx1ZSgpO1xyXG4gICAgaWYgKHRoaXMuZW5hYmxlZCkge1xyXG4gICAgICB0aGlzLl9jYW5jZWxFeGlzdGluZ1N1YnNjcmlwdGlvbigpO1xyXG4gICAgICAoPHsgZXJyb3JzOiBKb2lFcnJvcltdIHwgbnVsbCB9PnRoaXMpLmVycm9ycyA9IHRoaXMuX3J1bkpvaVZhbGlkYXRpb24oKTtcclxuICAgICAgKDx7IHN0YXR1czogc3RyaW5nIH0+dGhpcykuc3RhdHVzID0gdGhpcy5fY2FsY3VsYXRlU3RhdHVzKCk7XHJcblxyXG4gICAgICBpZiAodGhpcy5zdGF0dXMgPT09IFZBTElEIHx8IHRoaXMuc3RhdHVzID09PSBQRU5ESU5HKSB7XHJcbiAgICAgICAgdGhpcy5ydW5Bc3luY1ZhbGlkYXRvcihvcHRzLmVtaXRFdmVudCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG5cclxuICAgIGlmIChvcHRzLmVtaXRFdmVudCAhPT0gZmFsc2UpIHtcclxuICAgICAgKHRoaXMudmFsdWVDaGFuZ2VzIGFzIEV2ZW50RW1pdHRlcjxhbnk+KS5lbWl0KHRoaXMudmFsdWUpO1xyXG4gICAgICAodGhpcy5zdGF0dXNDaGFuZ2VzIGFzIEV2ZW50RW1pdHRlcjxhbnk+KS5lbWl0KHRoaXMuc3RhdHVzKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5fcGFyZW50ICYmICFvcHRzLm9ubHlTZWxmKSB7XHJcbiAgICAgIHRoaXMuX3BhcmVudC51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KG9wdHMpO1xyXG4gICAgfVxyXG5cclxuICB9XHJcblxyXG5cclxuICAvKiogQGludGVybmFsICovXHJcbiAgcHJpdmF0ZSBfY2FsY3VsYXRlU3RhdHVzKCk6IHN0cmluZyB7XHJcbiAgICBpZiAodGhpcy5fYWxsQ29udHJvbHNEaXNhYmxlZCgpKSByZXR1cm4gRElTQUJMRUQ7XHJcbiAgICBpZiAodGhpcy5lcnJvcnMpIHJldHVybiBJTlZBTElEO1xyXG4gICAgaWYgKHRoaXMuX2FueUNvbnRyb2xzSGF2ZVN0YXR1cyhJTlZBTElEKSkgcmV0dXJuIElOVkFMSUQ7XHJcbiAgICBpZiAodGhpcy5fYW55Q29udHJvbHNIYXZlU3RhdHVzKFBFTkRJTkcpKSByZXR1cm4gUEVORElORztcclxuICAgIHJldHVybiBWQUxJRDtcclxuICB9XHJcblxyXG4gIC8qKiBAaW50ZXJuYWwgKi9cclxuICBfcnVuSm9pVmFsaWRhdGlvbigpIHtcclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxuXHJcblxyXG4gIC8qKiBAaW50ZXJuYWwgKi9cclxuICBfdXBkYXRlQ2hpbGRFcnJvciA9IChlcnJvcnM6IEpvaUVycm9yW10pID0+IHtcclxuICB9O1xyXG5cclxuXHJcbiAgcHJpdmF0ZSBfY2FuY2VsRXhpc3RpbmdTdWJzY3JpcHRpb24oKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5fYXN5bmNWYWxpZGF0aW9uU3Vic2NyaXB0aW9uKSB7XHJcbiAgICAgIHRoaXMuX2FzeW5jVmFsaWRhdGlvblN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfc2V0SW5pdGlhbFN0YXR1cygpIHtcclxuICAgICh0aGlzIGFzIHsgc3RhdHVzOiBzdHJpbmcgfSkuc3RhdHVzID0gdGhpcy5fYWxsQ29udHJvbHNEaXNhYmxlZCgpID8gRElTQUJMRUQgOiBWQUxJRDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgX3N0b3JlSW5pdGlhbE9wdGlvbnMgPSAob3B0aW9uczogQWJzdHJhY3RDb250cm9sT3B0aW9ucyB8IG51bGwpID0+IHtcclxuICAgIHRoaXMuX2luaXRpYWxPcHRpb25zID0gb3B0aW9ucztcclxuICB9O1xyXG5cclxuXHJcbiAgLyoqIEBpbnRlcm5hbCAqL1xyXG4gIF91cGRhdGVWYWx1ZSgpOiB2b2lkIHtcclxuXHJcbiAgfVxyXG5cclxuICAvKiogQGludGVybmFsICovXHJcbiAgX2lzTm90RXhjbHVkZWQgPSAoYzogQWJzdHJhY3RDb250cm9sKTogQm9vbGVhbiA9PiB7XHJcblxyXG4gICAgcmV0dXJuICFfLmdldChjLm9wdGlvbnMsICdleGNsdWRlZCcpICYmICEoXy5oYXModGhpcy5vcHRpb25zLCBbJ251bGxFeGNsdXNpb24nXSkgJiYgIWMudmFsdWUpO1xyXG5cclxuICB9O1xyXG5cclxuICAvKiogQGludGVybmFsICovXHJcbiAgX2luaXRPYnNlcnZhYmxlcygpIHtcclxuICAgICh0aGlzIGFzIHsgdmFsdWVDaGFuZ2VzOiBPYnNlcnZhYmxlPGFueT4gfSkudmFsdWVDaGFuZ2VzID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gICAgKHRoaXMgYXMgeyBzdGF0dXNDaGFuZ2VzOiBPYnNlcnZhYmxlPGFueT4gfSkuc3RhdHVzQ2hhbmdlcyA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICB9XHJcblxyXG4gIC8qKiBAaW50ZXJuYWwgKi9cclxuICBfaW5pdFZhbGlkYXRvcnMoKSB7XHJcbiAgICAoPEFic3RyYWN0Q29udHJvbD50aGlzKS5ydW5Bc3luY1ZhbGlkYXRvciA9IF8uZGVib3VuY2UoKGVtaXRFdmVudD86IGJvb2xlYW4pID0+IHtcclxuXHJcbiAgICAgIGlmICh0aGlzLmFzeW5jVmFsaWRhdG9yKSB7XHJcbiAgICAgICAgKHRoaXMgYXMgeyBzdGF0dXM6IHN0cmluZyB9KS5zdGF0dXMgPSBQRU5ESU5HO1xyXG4gICAgICAgIGNvbnN0IG9icyA9IHRoaXMuYXN5bmNWYWxpZGF0b3IodGhpcyk7XHJcbiAgICAgICAgLy8gdGhpcy5fYXN5bmNWYWxpZGF0aW9uU3Vic2NyaXB0aW9uID1cclxuICAgICAgICAvLyBvYnMuc3Vic2NyaWJlKChlcnJvcnM6IEpvaUVycm9yW10gfCBudWxsKSA9PiB7XHJcbiAgICAgICAgLy8gICBpZiAoKHRoaXMudG91Y2hlZCB8fCB0aGlzLmRpcnR5KSAmJiB0aGlzLnZhbHVlKSB7XHJcbiAgICAgICAgLy8gICAgICh0aGlzIGFzIHsgc3RhdHVzOiBzdHJpbmcgfSkuc3RhdHVzID0gSU5WQUxJRDtcclxuICAgICAgICAvLyAgICAgdGhpcy5zZXRFcnJvcnMoZXJyb3JzLCB7IGVtaXRFdmVudCB9KTtcclxuICAgICAgICAvLyAgIH1cclxuICAgICAgICAvLyB9KTtcclxuICAgICAgfVxyXG4gICAgfSwgNTAwKTtcclxuICB9XHJcblxyXG4gIC8qKiBAaW50ZXJuYWwgKi9cclxuICBfdXBkYXRlQ29udHJvbHNPcHRpb25zKGVtaXRFdmVudDogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgKHRoaXMgYXMgeyBzdGF0dXM6IHN0cmluZyB9KS5zdGF0dXMgPSB0aGlzLl9jYWxjdWxhdGVTdGF0dXMoKTtcclxuXHJcbiAgICBpZiAoZW1pdEV2ZW50KSB7XHJcbiAgICAgICh0aGlzLnN0YXR1c0NoYW5nZXMgYXMgRXZlbnRFbWl0dGVyPHN0cmluZz4pLmVtaXQodGhpcy5zdGF0dXMpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqIEBpbnRlcm5hbCAqL1xyXG4gIF91cGRhdGVDb250cm9sc0Vycm9ycyhlbWl0RXZlbnQ6IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgICh0aGlzIGFzIHsgc3RhdHVzOiBzdHJpbmcgfSkuc3RhdHVzID0gdGhpcy5fY2FsY3VsYXRlU3RhdHVzKCk7XHJcblxyXG4gICAgaWYgKGVtaXRFdmVudCkge1xyXG4gICAgICAodGhpcy5zdGF0dXNDaGFuZ2VzIGFzIEV2ZW50RW1pdHRlcjxzdHJpbmc+KS5lbWl0KHRoaXMuc3RhdHVzKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5fcGFyZW50KSB7XHJcbiAgICAgIHRoaXMuX3BhcmVudC5fdXBkYXRlQ29udHJvbHNFcnJvcnMoZW1pdEV2ZW50KTtcclxuICAgIH1cclxuICB9XHJcblxyXG5cclxuICAvKipcclxuICAgKiBTZXRzIHRoZSB2YWx1ZSBvZiB0aGUgY29udHJvbC4gQWJzdHJhY3QgbWV0aG9kIChpbXBsZW1lbnRlZCBpbiBzdWItY2xhc3NlcykuXHJcbiAgICovXHJcbiAgYWJzdHJhY3Qgc2V0VmFsdWUodmFsdWU6IGFueSwgb3B0aW9ucz86IE9iamVjdCk6IHZvaWQ7XHJcblxyXG4gIC8qKlxyXG4gICAqIFJlc2V0cyB0aGUgY29udHJvbC4gQWJzdHJhY3QgbWV0aG9kIChpbXBsZW1lbnRlZCBpbiBzdWItY2xhc3NlcykuXHJcbiAgICovXHJcbiAgYWJzdHJhY3QgcmVzZXQodmFsdWU/OiBhbnksIG9wdGlvbnM/OiBPYmplY3QpOiB2b2lkO1xyXG5cclxuICAvKipcclxuICAgKiBDbGVhciB0aGUgY29udHJvbC4gQWJzdHJhY3QgbWV0aG9kIChpbXBsZW1lbnRlZCBpbiBzdWItY2xhc3NlcykuXHJcbiAgICovXHJcbiAgYWJzdHJhY3QgY2xlYXIob3B0aW9ucz86IE9iamVjdCk6IHZvaWQ7XHJcblxyXG4gIC8qKiBAaW50ZXJuYWwgKi9cclxuICBhYnN0cmFjdCBfYWxsQ29udHJvbHNEaXNhYmxlZCgpOiBib29sZWFuO1xyXG5cclxuICAvKiogQGludGVybmFsICovXHJcbiAgYWJzdHJhY3QgX2FueUNvbnRyb2xzSGF2ZVN0YXR1cyhzdGF0dXM6IHN0cmluZyk6IGJvb2xlYW5cclxufVxyXG5cclxuXHJcbi8qKlxyXG4gKiBSZXBvcnRzIHRoYXQgYSBGb3JtQ29udHJvbCBpcyB2YWxpZCwgbWVhbmluZyB0aGF0IG5vIGVycm9ycyBleGlzdCBpbiB0aGUgaW5wdXQgdmFsdWUuXHJcbiAqXHJcbiAqIEBzZWUgYHN0YXR1c2BcclxuICovXHJcbmV4cG9ydCBjb25zdCBWQUxJRCA9ICdWQUxJRCc7XHJcblxyXG4vKipcclxuICogUmVwb3J0cyB0aGF0IGEgRm9ybUNvbnRyb2wgaXMgaW52YWxpZCwgbWVhbmluZyB0aGF0IGFuIGVycm9yIGV4aXN0cyBpbiB0aGUgaW5wdXQgdmFsdWUuXHJcbiAqXHJcbiAqIEBzZWUgYHN0YXR1c2BcclxuICovXHJcbmV4cG9ydCBjb25zdCBJTlZBTElEID0gJ0lOVkFMSUQnO1xyXG5cclxuLyoqXHJcbiAqIFJlcG9ydHMgdGhhdCBhIEZvcm1Db250cm9sIGlzIHBlbmRpbmcsIG1lYW5pbmcgdGhhdCB0aGF0IGFzeW5jIHZhbGlkYXRpb24gaXMgb2NjdXJyaW5nIGFuZFxyXG4gKiBlcnJvcnMgYXJlIG5vdCB5ZXQgYXZhaWxhYmxlIGZvciB0aGUgaW5wdXQgdmFsdWUuXHJcbiAqXHJcbiAqIEBzZWUgYG1hcmtBc1BlbmRpbmdgXHJcbiAqIEBzZWUgYHN0YXR1c2BcclxuICovXHJcbmV4cG9ydCBjb25zdCBQRU5ESU5HID0gJ1BFTkRJTkcnO1xyXG5cclxuLyoqXHJcbiAqIFJlcG9ydHMgdGhhdCBhIEZvcm1Db250cm9sIGlzIGRpc2FibGVkLCBtZWFuaW5nIHRoYXQgdGhlIGNvbnRyb2wgaXMgZXhlbXB0IGZyb20gYW5jZXN0b3JcclxuICogY2FsY3VsYXRpb25zIG9mIHZhbGlkaXR5IG9yIHZhbHVlLlxyXG4gKlxyXG4gKiBAc2VlIGBtYXJrQXNEaXNhYmxlZGBcclxuICogQHNlZSBgc3RhdHVzYFxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IERJU0FCTEVEID0gJ0RJU0FCTEVEJztcclxuXHJcbmV4cG9ydCB0eXBlIEZvcm1Ib29rcyA9ICdjaGFuZ2UnIHwgJ2JsdXInIHwgJ3N1Ym1pdCc7XHJcbiJdfQ==