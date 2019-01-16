"use strict";
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var lodash_1 = tslib_1.__importDefault(require("lodash"));
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
var /**
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
AbstractControl = /** @class */ (function () {
    /**
     * Initialize the AbstractControl instance.
     *
     * @param options
     *
     */
    function AbstractControl(state, _options) {
        var _this = this;
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
        this._getControlSchema = function () {
            return null;
        };
        /**
         * \@internal
         */
        this._updateChildError = function (errors) {
        };
        this._storeInitialOptions = function (options) {
            _this._initialOptions = options;
        };
        /**
         * \@internal
         */
        this._isNotExcluded = function (c) {
            return !lodash_1.default.get(c.options, 'excluded') && !(lodash_1.default.has(_this.options, ['nullExclusion']) && !c.value);
        };
        this._storeInitialOptions(_options);
        this.runAsyncValidator = function () {
        };
    }
    Object.defineProperty(AbstractControl.prototype, "schema", {
        get: /**
         * @return {?}
         */
        function () {
            if (this.parent && this.parent.schema) {
                /** @type {?} */
                var extractChild = lodash_1.default.find(this.parent.schema['_inner'].children, ['key', this.name]);
                return extractChild ? extractChild.schema : null;
            }
            return this._getControlSchema();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControl.prototype, "path", {
        get: /**
         * @return {?}
         */
        function () {
            return this.parent ? tslib_1.__spread(this.parent.path, [this.name]) : [];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControl.prototype, "name", {
        get: /**
         * @return {?}
         */
        function () {
            return this._name;
        },
        set: /**
         * @param {?} name
         * @return {?}
         */
        function (name) {
            this._name = name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControl.prototype, "parent", {
        /**
         * The parent control.
         */
        get: /**
         * The parent control.
         * @return {?}
         */
        function () {
            return this._parent;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControl.prototype, "root", {
        get: /**
         * @return {?}
         */
        function () {
            return this._root;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControl.prototype, "options", {
        get: /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var parentConfig;
            if (this.parent && this.parent.options)
                parentConfig = tslib_1.__assign({}, this.parent.options);
            return tslib_1.__assign({}, parentConfig, this._initialOptions) || null;
        },
        set: /**
         * @param {?} newConfig
         * @return {?}
         */
        function (newConfig) {
            this._options = tslib_1.__assign({}, this._options, newConfig);
            this.updateValueAndValidity({ emitEvent: true });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControl.prototype, "enabled", {
        /**
         * A control is `enabled` as long as its `status` is not `DISABLED`.
         *
         * @see `status`
         *
         * @returns True if the control has any status other than 'DISABLED',
         * false if the status is 'DISABLED'.
         *
         */
        get: /**
         * A control is `enabled` as long as its `status` is not `DISABLED`.
         *
         * @see `status`
         *
         * @return {?} True if the control has any status other than 'DISABLED',
         * false if the status is 'DISABLED'.
         *
         */
        function () {
            return this.status !== exports.DISABLED;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControl.prototype, "disabled", {
        /**
         * A control is `disabled` when its `status` is `DISABLED`.
         *
         * @see `status`
         *
         * Disabled controls are exempt from validation checks and
         * are not included in the aggregate value of their ancestor
         * controls.
         *
         * @returns True if the control is disabled, false otherwise.
         */
        get: /**
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
        function () {
            return this.status === exports.DISABLED;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControl.prototype, "valid", {
        /**
         * A control is `valid` when its `status` is `VALID`.
         *
         * @see `status`
         *
         * @returns True if the control has passed all of its validation tests,
         * false otherwise.
         */
        get: /**
         * A control is `valid` when its `status` is `VALID`.
         *
         * @see `status`
         *
         * @return {?} True if the control has passed all of its validation tests,
         * false otherwise.
         */
        function () {
            return this.status === exports.VALID;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControl.prototype, "invalid", {
        /**
         * A control is `invalid` when its `status` is `INVALID`.
         *
         * @see `status`
         *
         * @returns True if this control has failed one or more of its validation checks,
         * false otherwise.
         */
        get: /**
         * A control is `invalid` when its `status` is `INVALID`.
         *
         * @see `status`
         *
         * @return {?} True if this control has failed one or more of its validation checks,
         * false otherwise.
         */
        function () {
            return this.status === exports.INVALID;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControl.prototype, "pending", {
        /**
         * A control is `pending` when its `status` is `PENDING`.
         *
         * @see `status`
         *
         * @returns True if this control is in the process of conducting a validation check,
         * false otherwise.
         */
        get: /**
         * A control is `pending` when its `status` is `PENDING`.
         *
         * @see `status`
         *
         * @return {?} True if this control is in the process of conducting a validation check,
         * false otherwise.
         */
        function () {
            return this.status === exports.PENDING;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControl.prototype, "dirty", {
        /**
         * A control is `dirty` if the user has changed the value
         * in the UI.
         *
         * @returns True if the user has changed the value of this control in the UI; compare `pristine`.
         * Programmatic changes to a control's value do not mark it dirty.
         */
        get: /**
         * A control is `dirty` if the user has changed the value
         * in the UI.
         *
         * @return {?} True if the user has changed the value of this control in the UI; compare `pristine`.
         * Programmatic changes to a control's value do not mark it dirty.
         */
        function () {
            return !this.pristine;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Marks the control as `touched`. A control is touched by focus and
     * blur events that do not change the value; compare `markAsDirty`;
     *
     *  @param opts options options that determine how the control propagates changes
     * and emits events events after marking is applied.
     * * `onlySelf`: When true, mark only this control. When false or not supplied,
     * marks all direct ancestors. Default is false.
     */
    /**
     * Marks the control as `touched`. A control is touched by focus and
     * blur events that do not change the value; compare `markAsDirty`;
     *
     * @return {?}
     */
    AbstractControl.prototype.markAsTouched = /**
     * Marks the control as `touched`. A control is touched by focus and
     * blur events that do not change the value; compare `markAsDirty`;
     *
     * @return {?}
     */
    function () {
        ((/** @type {?} */ (this))).touched = true;
        this.updateValueAndValidity({ onlySelf: true });
    };
    /**
     * Marks the control as `untouched`.
     *
     * If the control has any children, also marks all children as `untouched`
     * and recalculates the `touched` status of all parent controls.
     *
     *  @param opts options options that determine how the control propagates changes
     * and emits events after the marking is applied.
     * * `onlySelf`: When true, mark only this control. When false or not supplied,
     * marks all direct ancestors. Default is false.
     */
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
    AbstractControl.prototype.markAsUntouched = /**
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
    function (opts) {
        if (opts === void 0) { opts = {}; }
        ((/** @type {?} */ (this))).touched = false;
    };
    /**
     * Marks the control as `dirty`. A control becomes dirty when
     * the control's value is changed through the UI; compare `markAsTouched`.
     *
     *  @param opts options options that determine how the control propagates changes
     * and emits events after marking is applied.
     * * `onlySelf`: When true, mark only this control. When false or not supplied,
     * marks all direct ancestors. Default is false.
     */
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
    AbstractControl.prototype.markAsDirty = /**
     * Marks the control as `dirty`. A control becomes dirty when
     * the control's value is changed through the UI; compare `markAsTouched`.
     *
     * @param {?=} opts options options that determine how the control propagates changes
     * and emits events after marking is applied.
     * * `onlySelf`: When true, mark only this control. When false or not supplied,
     * marks all direct ancestors. Default is false.
     * @return {?}
     */
    function (opts) {
        if (opts === void 0) { opts = {}; }
        ((/** @type {?} */ (this))).pristine = false;
    };
    /**
     * Marks the control as `pristine`.
     *
     * If the control has any children, marks all children as `pristine`,
     * and recalculates the `pristine` status of all parent
     * controls.
     *
     *  @param opts options options that determine how the control emits events after
     * marking is applied.
     * * `onlySelf`: When true, mark only this control. When false or not supplied,
     * marks all direct ancestors. Default is false..
     */
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
    AbstractControl.prototype.markAsPristine = /**
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
    function (opts) {
        if (opts === void 0) { opts = {}; }
        ((/** @type {?} */ (this))).pristine = true;
    };
    /**
     * Sets options on a form control .
     *
     * Calling `setOptions` also updates the validity of the parent control.
     *
     * @usageNotes
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
     */
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
    AbstractControl.prototype.setOptions = /**
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
    function (options, opts) {
        if (opts === void 0) { opts = {}; }
        this._initialOptions = options;
        this._updateControlsOptions(opts.emitEvent !== false);
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
    AbstractControl.prototype.setErrors = /**
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
    //
    /**
     * @param parent Sets the parent of the control
     */
    //
    /**
     * @param {?} parent Sets the parent of the control
     * @return {?}
     */
    AbstractControl.prototype.setParent = 
    //
    /**
     * @param {?} parent Sets the parent of the control
     * @return {?}
     */
    function (parent) {
        this._parent = parent;
    };
    /**
     * @param root Sets the root of the form
     */
    /**
     * @param {?} root Sets the root of the form
     * @return {?}
     */
    AbstractControl.prototype.setRoot = /**
     * @param {?} root Sets the root of the form
     * @return {?}
     */
    function (root) {
        this._root = root;
    };
    /**
     * @param {?} options
     * @param {?=} opts
     * @return {?}
     */
    AbstractControl.prototype.updateOptions = /**
     * @param {?} options
     * @param {?=} opts
     * @return {?}
     */
    function (options, opts) {
        if (opts === void 0) { opts = {}; }
        this._initialOptions = tslib_1.__assign({}, this._initialOptions, options);
        this._updateControlsOptions(opts.emitEvent !== false);
    };
    /**
     * Recalculates the value and validation status of the control.
     *
     * By default, it also updates the value and validity of its ancestors.
     *
     * @param opts options options determine how the control propagates changes and emits events
     * after updates and validity checks are applied.
     * * `onlySelf`: When true, only update this control. When false or not supplied,
     * update all direct ancestors. Default is false..
     * * `emitEvent`: When true or not supplied (the default), emit the `valueChanges` event
     * observables emit events with the latest status and value when the control is updated.
     * When false, no events are emitted.
     */
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
    AbstractControl.prototype.updateValueAndValidity = /**
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
    function (opts) {
        if (opts === void 0) { opts = {}; }
        this._setInitialStatus();
        this._updateValue();
        if (this.enabled) {
            this._cancelExistingSubscription();
            ((/** @type {?} */ (this))).errors = this._runJoiValidation();
            ((/** @type {?} */ (this))).status = this._calculateStatus();
            if (this.status === exports.VALID || this.status === exports.PENDING) {
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
    };
    /** @internal */
    /**
     * \@internal
     * @private
     * @return {?}
     */
    AbstractControl.prototype._calculateStatus = /**
     * \@internal
     * @private
     * @return {?}
     */
    function () {
        if (this._allControlsDisabled())
            return exports.DISABLED;
        if (this.errors)
            return exports.INVALID;
        if (this._anyControlsHaveStatus(exports.INVALID))
            return exports.INVALID;
        if (this._anyControlsHaveStatus(exports.PENDING))
            return exports.PENDING;
        return exports.VALID;
    };
    /** @internal */
    /**
     * \@internal
     * @return {?}
     */
    AbstractControl.prototype._runJoiValidation = /**
     * \@internal
     * @return {?}
     */
    function () {
        return null;
    };
    /**
     * @private
     * @return {?}
     */
    AbstractControl.prototype._cancelExistingSubscription = /**
     * @private
     * @return {?}
     */
    function () {
        if (this._asyncValidationSubscription) {
            this._asyncValidationSubscription.unsubscribe();
        }
    };
    /**
     * @private
     * @return {?}
     */
    AbstractControl.prototype._setInitialStatus = /**
     * @private
     * @return {?}
     */
    function () {
        ((/** @type {?} */ (this))).status = this._allControlsDisabled() ? exports.DISABLED : exports.VALID;
    };
    /** @internal */
    /**
     * \@internal
     * @return {?}
     */
    AbstractControl.prototype._updateValue = /**
     * \@internal
     * @return {?}
     */
    function () {
    };
    /** @internal */
    /**
     * \@internal
     * @return {?}
     */
    AbstractControl.prototype._initObservables = /**
     * \@internal
     * @return {?}
     */
    function () {
        ((/** @type {?} */ (this))).valueChanges = new core_1.EventEmitter();
        ((/** @type {?} */ (this))).statusChanges = new core_1.EventEmitter();
    };
    /** @internal */
    /**
     * \@internal
     * @return {?}
     */
    AbstractControl.prototype._initValidators = /**
     * \@internal
     * @return {?}
     */
    function () {
        var _this = this;
        ((/** @type {?} */ (this))).runAsyncValidator = lodash_1.default.debounce(function (emitEvent) {
            if (_this.asyncValidator) {
                ((/** @type {?} */ (_this))).status = exports.PENDING;
                /** @type {?} */
                var obs = _this.asyncValidator(_this);
                // this._asyncValidationSubscription =
                // obs.subscribe((errors: JoiError[] | null) => {
                //   if ((this.touched || this.dirty) && this.value) {
                //     (this as { status: string }).status = INVALID;
                //     this.setErrors(errors, { emitEvent });
                //   }
                // });
            }
        }, 500);
    };
    /** @internal */
    /**
     * \@internal
     * @param {?} emitEvent
     * @return {?}
     */
    AbstractControl.prototype._updateControlsOptions = /**
     * \@internal
     * @param {?} emitEvent
     * @return {?}
     */
    function (emitEvent) {
        ((/** @type {?} */ (this))).status = this._calculateStatus();
        if (emitEvent) {
            ((/** @type {?} */ (this.statusChanges))).emit(this.status);
        }
    };
    /** @internal */
    /**
     * \@internal
     * @param {?} emitEvent
     * @return {?}
     */
    AbstractControl.prototype._updateControlsErrors = /**
     * \@internal
     * @param {?} emitEvent
     * @return {?}
     */
    function (emitEvent) {
        ((/** @type {?} */ (this))).status = this._calculateStatus();
        if (emitEvent) {
            ((/** @type {?} */ (this.statusChanges))).emit(this.status);
        }
        if (this._parent) {
            this._parent._updateControlsErrors(emitEvent);
        }
    };
    return AbstractControl;
}());
exports.AbstractControl = AbstractControl;
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
exports.VALID = 'VALID';
/**
 * Reports that a FormControl is invalid, meaning that an error exists in the input value.
 *
 * @see `status`
 * @type {?}
 */
exports.INVALID = 'INVALID';
/**
 * Reports that a FormControl is pending, meaning that that async validation is occurring and
 * errors are not yet available for the input value.
 *
 * @see `markAsPending`
 * @see `status`
 * @type {?}
 */
exports.PENDING = 'PENDING';
/**
 * Reports that a FormControl is disabled, meaning that the control is exempt from ancestor
 * calculations of validity or value.
 *
 * @see `markAsDisabled`
 * @see `status`
 * @type {?}
 */
exports.DISABLED = 'DISABLED';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWJzdHJhY3RDb250cm9sLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGlvbmFyL2Zvcm0vIiwic291cmNlcyI6WyJjb3JlL21vZGVscy9BYnN0cmFjdENvbnRyb2wudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBLHNDQUE2QztBQU03QywwREFBdUI7Ozs7Ozs7Ozs7Ozs7QUFzQnZCOzs7Ozs7Ozs7Ozs7O0lBb0dFOzs7OztPQUtHO0lBQ0gseUJBQW1CLEtBQWtDLEVBQVUsUUFBdUM7UUFBdEcsaUJBS0M7UUFMa0IsVUFBSyxHQUFMLEtBQUssQ0FBNkI7UUFBVSxhQUFRLEdBQVIsUUFBUSxDQUErQjs7Ozs7Ozs7Ozs7UUF6RXRGLFlBQU8sR0FBWSxLQUFLLENBQUM7Ozs7Ozs7UUFRekIsYUFBUSxHQUFZLElBQUksQ0FBQzs7OztRQXFGekMsc0JBQWlCLEdBQUc7WUFDbEIsT0FBTyxJQUFJLENBQUM7UUFDZCxDQUFDLENBQUM7Ozs7UUFpVUYsc0JBQWlCLEdBQUcsVUFBQyxNQUFrQjtRQUN2QyxDQUFDLENBQUM7UUFhTSx5QkFBb0IsR0FBRyxVQUFDLE9BQXNDO1lBQ3BFLEtBQUksQ0FBQyxlQUFlLEdBQUcsT0FBTyxDQUFDO1FBQ2pDLENBQUMsQ0FBQzs7OztRQVNGLG1CQUFjLEdBQUcsVUFBQyxDQUFrQjtZQUVsQyxPQUFPLENBQUMsZ0JBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsZ0JBQUMsQ0FBQyxHQUFHLENBQUMsS0FBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLGVBQWUsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFaEcsQ0FBQyxDQUFDO1FBbFhBLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNwQyxJQUFJLENBQUMsaUJBQWlCLEdBQUc7UUFDekIsQ0FBQyxDQUFDO0lBQ0osQ0FBQztJQUVELHNCQUFJ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QyxrQ0FBdUM7Ozs7O0lBRXZDLGdDQUF5Qjs7Ozs7SUFFekIsZ0NBQXNCOzs7OztJQUV0QixnQ0FBd0I7Ozs7O0lBRXhCLDBDQUF1RDs7Ozs7Ozs7SUFTdkQsbUNBQTBEOzs7Ozs7SUFZMUQsdUNBQThDOzs7Ozs7SUFNOUMsd0NBQStDOzs7OztJQTRCL0MsNENBRUU7Ozs7O0lBaVVGLDRDQUNFOzs7OztJQWFGLCtDQUVFOzs7OztJQVNGLHlDQUlFOztJQXBYVSxnQ0FBeUM7Ozs7O0lBQUUsbUNBQStDOzs7Ozs7OztJQXdhdEcsbUVBQXNEOzs7Ozs7OztJQUt0RCxnRUFBb0Q7Ozs7Ozs7SUFLcEQseURBQXVDOzs7Ozs7SUFHdkMsaUVBQXlDOzs7Ozs7O0lBR3pDLHlFQUF3RDs7Ozs7Ozs7QUFTN0MsUUFBQSxLQUFLLEdBQUcsT0FBTzs7Ozs7OztBQU9mLFFBQUEsT0FBTyxHQUFHLFNBQVM7Ozs7Ozs7OztBQVNuQixRQUFBLE9BQU8sR0FBRyxTQUFTOzs7Ozs7Ozs7QUFTbkIsUUFBQSxRQUFRLEdBQUcsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBBc3luY1ZhbGlkYXRvckZuLCBKb2lTY2hlbWEsIEpvaUVycm9yIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9WYWxpZGF0b3InO1xyXG5pbXBvcnQgeyBGb3JtR3JvdXAgfSBmcm9tICcuLi9tb2RlbHMvRm9ybUdyb3VwJztcclxuXHJcblxyXG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xyXG5pbXBvcnQge1xyXG4gIEFic3RyYWN0Q29udHJvbE9wdGlvbnMsXHJcbiAgQWJzdHJhY3RDb250cm9sU3RhdGUsXHJcbiAgRm9ybUFycmF5U3RhdGUsXHJcbiAgRm9ybUNvbnRyb2xTdGF0ZSxcclxuICBGb3JtR3JvdXBTdGF0ZVxyXG59IGZyb20gJy4uL2ludGVyZmFjZXMvRm9ybSc7XHJcblxyXG5pbXBvcnQgeyBGb3JtQXJyYXkgfSBmcm9tICcuL0Zvcm1BcnJheSc7XHJcblxyXG4vKipcclxuICogVGhpcyBpcyB0aGUgYmFzZSBjbGFzcyBmb3IgYEZvcm1Db250cm9sYCwgYEZvcm1Hcm91cC50c2AsIGFuZCBgRm9ybUFycmF5YC5cclxuICpcclxuICogSXQgcHJvdmlkZXMgc29tZSBvZiB0aGUgc2hhcmVkIGJlaGF2aW9yIHRoYXQgYWxsIGNvbnRyb2xzIGFuZCBncm91cHMgb2YgY29udHJvbHMgaGF2ZSwgbGlrZVxyXG4gKiBydW5uaW5nIHZhbGlkYXRvcnMsIGNhbGN1bGF0aW5nIHN0YXR1cywgYW5kIHJlc2V0dGluZyBzdGF0ZS4gSXQgYWxzbyBkZWZpbmVzIHRoZSBwcm9wZXJ0aWVzXHJcbiAqIHRoYXQgYXJlIHNoYXJlZCBiZXR3ZWVuIGFsbCBzdWItY2xhc3NlcywgbGlrZSBgdmFsdWVgLCBgdmFsaWRgLCBhbmQgYGRpcnR5YC4gSXQgc2hvdWxkbid0IGJlXHJcbiAqIGluc3RhbnRpYXRlZCBkaXJlY3RseS5cclxuICpcclxuICpcclxuICogQHB1YmxpY0FwaVxyXG4gKi9cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEFic3RyYWN0Q29udHJvbCB7XHJcblxyXG4gIC8qKiBAaW50ZXJuYWwgKi9cclxuICBwdWJsaWMgcmVhZG9ubHkgcGVuZGluZ1ZhbHVlOiBhbnk7XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoZSBjdXJyZW50IHZhbHVlIG9mIHRoZSBjb250cm9sLlxyXG4gICAqXHJcbiAgICogKiBGb3IgYSBgRm9ybUNvbnRyb2xgLCB0aGUgY3VycmVudCB2YWx1ZS5cclxuICAgKiAqIEZvciBhIGBGb3JtR3JvdXBgLCB0aGUgdmFsdWVzIG9mIGVuYWJsZWQgY29udHJvbHMgYXMgYW4gb2JqZWN0IHdpdGggYSBrZXktdmFsdWUgcGFpciBmb3IgZWFjaCBtZW1iZXIgb2YgdGhlIGdyb3VwLlxyXG4gICAqICogRm9yIGEgYEZvcm1BcnJheWAsIHRoZSB2YWx1ZXMgb2YgZW5hYmxlZCBjb250cm9scyBhcyBhbiBhcnJheS5cclxuICAgKlxyXG4gICAqL1xyXG4gIHB1YmxpYyByZWFkb25seSB2YWx1ZTogYW55O1xyXG5cclxuICAvKipcclxuICAgKiBBbiBvYmplY3QgY29udGFpbmluZyBhbnkgZXJyb3JzIGdlbmVyYXRlZCBieSBmYWlsaW5nIHZhbGlkYXRpb24sXHJcbiAgICogb3IgbnVsbCBpZiB0aGVyZSBhcmUgbm8gZXJyb3JzLlxyXG4gICAqL1xyXG4gIHB1YmxpYyByZWFkb25seSBlcnJvcnM6IEpvaUVycm9yW10gfCBudWxsO1xyXG5cclxuXHJcbiAgLyoqXHJcbiAgICogQSBKb2kgb2JqZWN0IHNjaGVtYVxyXG4gICAqL1xyXG4gIC8vIHB1YmxpYyByZWFkb25seSBzY2hlbWE6IEpvaVNjaGVtYSB8IG51bGw7XHJcblxyXG4gIC8qKlxyXG4gICAqIFRydWUgaWYgdGhlIGNvbnRyb2wgaXMgbWFya2VkIGFzIGB0b3VjaGVkYC5cclxuICAgKlxyXG4gICAqIEEgY29udHJvbCBpcyBtYXJrZWQgYHRvdWNoZWRgIG9uY2UgdGhlIHVzZXIgaGFzIHRyaWdnZXJlZFxyXG4gICAqIGEgYGJsdXJgIGV2ZW50IG9uIGl0LlxyXG4gICAqL1xyXG4gIHB1YmxpYyByZWFkb25seSB0b3VjaGVkOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIC8qKlxyXG4gICAqIEEgY29udHJvbCBpcyBgcHJpc3RpbmVgIGlmIHRoZSB1c2VyIGhhcyBub3QgeWV0IGNoYW5nZWQgdGhlIHZhbHVlIGluIHRoZSBVSS5cclxuICAgKlxyXG4gICAqIEByZXR1cm5zIFRydWUgaWYgdGhlIHVzZXIgaGFzIG5vdCB5ZXQgY2hhbmdlZCB0aGUgdmFsdWUgaW4gdGhlIFVJOyBjb21wYXJlIGBkaXJ0eWAuXHJcbiAgICogUHJvZ3JhbW1hdGljIGNoYW5nZXMgdG8gYSBjb250cm9sJ3MgdmFsdWUgZG8gbm90IG1hcmsgaXQgZGlydHkuXHJcbiAgICovXHJcbiAgcHVibGljIHJlYWRvbmx5IHByaXN0aW5lOiBib29sZWFuID0gdHJ1ZTtcclxuXHJcbiAgLyoqXHJcbiAgICogVGhlIHZhbGlkYXRpb24gc3RhdHVzIG9mIHRoZSBjb250cm9sLiBUaGVyZSBhcmUgZm91ciBwb3NzaWJsZVxyXG4gICAqIHZhbGlkYXRpb24gc3RhdHVzIHZhbHVlczpcclxuICAgKlxyXG4gICAqICogKipWQUxJRCoqOiBUaGlzIGNvbnRyb2wgaGFzIHBhc3NlZCBhbGwgdmFsaWRhdGlvbiBjaGVja3MuXHJcbiAgICogKiAqKklOVkFMSUQqKjogVGhpcyBjb250cm9sIGhhcyBmYWlsZWQgYXQgbGVhc3Qgb25lIHZhbGlkYXRpb24gY2hlY2suXHJcbiAgICogKiAqKlBFTkRJTkcqKjogVGhpcyBjb250cm9sIGlzIGluIHRoZSBtaWRzdCBvZiBjb25kdWN0aW5nIGEgdmFsaWRhdGlvbiBjaGVjay5cclxuICAgKiAqICoqRElTQUJMRUQqKjogVGhpcyBjb250cm9sIGlzIGV4ZW1wdCBmcm9tIHZhbGlkYXRpb24gY2hlY2tzLlxyXG4gICAqXHJcbiAgICogVGhlc2Ugc3RhdHVzIHZhbHVlcyBhcmUgbXV0dWFsbHkgZXhjbHVzaXZlLCBzbyBhIGNvbnRyb2wgY2Fubm90IGJlIGJvdGggdmFsaWQgQU5EIGludmFsaWQgb3IgaW52YWxpZCBBTkQgZGlzYWJsZWQuXHJcbiAgICovXHJcbiAgcHVibGljIHJlYWRvbmx5IHN0YXR1czogc3RyaW5nO1xyXG5cclxuXHJcbiAgcHVibGljIHJlYWRvbmx5IGFzeW5jVmFsaWRhdG9yOiBBc3luY1ZhbGlkYXRvckZuIHwgbnVsbDtcclxuXHJcbiAgcHVibGljIHJ1bkFzeW5jVmFsaWRhdG9yOiBGdW5jdGlvbjtcclxuXHJcbiAgcHVibGljIF9hc3luY1ZhbGlkYXRpb25TdWJzY3JpcHRpb246IGFueTtcclxuXHJcbiAgcHJpdmF0ZSBfcGFyZW50OiBGb3JtR3JvdXAgfCBGb3JtQXJyYXk7XHJcblxyXG4gIHByaXZhdGUgX3Jvb3Q6IEZvcm1Hcm91cDtcclxuXHJcbiAgcHJpdmF0ZSBfbmFtZTogc3RyaW5nO1xyXG5cclxuICBwcml2YXRlIF9wYXRoOiBzdHJpbmdbXTtcclxuXHJcbiAgcHJpdmF0ZSBfaW5pdGlhbE9wdGlvbnM6IEFic3RyYWN0Q29udHJvbE9wdGlvbnMgfCBudWxsO1xyXG5cclxuICAvKipcclxuICAgKlxyXG4gICAqIEBwYXJhbSBjb250cm9scyBBIGNvbGxlY3Rpb24gb2YgY2hpbGQgY29udHJvbHMuIFRoZSBrZXkgZm9yIGVhY2ggY2hpbGQgaXMgdGhlIG5hbWVcclxuICAgKiB1bmRlciB3aGljaCBpdCBpcyByZWdpc3RlcmVkLlxyXG4gICAqXHJcbiAgICovXHJcblxyXG4gIHB1YmxpYyByZWFkb25seSBjb250cm9sczogRm9ybUdyb3VwU3RhdGUgfCBGb3JtQXJyYXlTdGF0ZTtcclxuXHJcbiAgLyoqXHJcbiAgICogQGRlc2NyaXB0aW9uXHJcbiAgICogRW1pdHMgYW4gZXZlbnQgd2hlbiB0aGUgZm9ybSBzdWJtaXNzaW9uIGhhcyBiZWVuIHRyaWdnZXJlZC5cclxuICAgKi9cclxuXHJcblxyXG4gIC8qKlxyXG4gICAqIEEgbXVsdGljYXN0aW5nIG9ic2VydmFibGUgdGhhdCBlbWl0cyBhbiBldmVudCBldmVyeSB0aW1lIHRoZSB2YWx1ZSBvZiB0aGUgY29udHJvbCBjaGFuZ2VzLCBpblxyXG4gICAqIHRoZSBVSSBvciBwcm9ncmFtbWF0aWNhbGx5LlxyXG4gICAqL1xyXG4gIHB1YmxpYyByZWFkb25seSB2YWx1ZUNoYW5nZXM6IE9ic2VydmFibGU8YW55PjtcclxuXHJcbiAgLyoqXHJcbiAgICogQSBtdWx0aWNhc3Rpbmcgb2JzZXJ2YWJsZSB0aGF0IGVtaXRzIGFuIGV2ZW50IGV2ZXJ5IHRpbWUgdGhlIHZhbGlkYXRpb24gYHN0YXR1c2Agb2YgdGhlIGNvbnRyb2xcclxuICAgKiByZWNhbGN1bGF0ZXMuXHJcbiAgICovXHJcbiAgcHVibGljIHJlYWRvbmx5IHN0YXR1c0NoYW5nZXM6IE9ic2VydmFibGU8YW55PjtcclxuXHJcbiAgLyoqXHJcbiAgICogSW5pdGlhbGl6ZSB0aGUgQWJzdHJhY3RDb250cm9sIGluc3RhbmNlLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIG9wdGlvbnNcclxuICAgKlxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBzdGF0ZTogQWJzdHJhY3RDb250cm9sU3RhdGUgfCBudWxsLCBwcml2YXRlIF9vcHRpb25zOiBBYnN0cmFjdENvbnRyb2xPcHRpb25zIHwgbnVsbCkge1xyXG5cclxuICAgIHRoaXMuX3N0b3JlSW5pdGlhbE9wdGlvbnMoX29wdGlvbnMpO1xyXG4gICAgdGhpcy5ydW5Bc3luY1ZhbGlkYXRvciA9ICgpID0+IHtcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBnZXQgc2NoZW1hKCk6IEpvaVNjaGVtYSB8IG51bGwge1xyXG4gICAgaWYgKHRoaXMucGFyZW50ICYmIHRoaXMucGFyZW50LnNjaGVtYSkge1xyXG4gICAgICBjb25zdCBleHRyYWN0Q2hpbGQgPSBfLmZpbmQodGhpcy5wYXJlbnQuc2NoZW1hWydfaW5uZXInXS5jaGlsZHJlbiwgWydrZXknLCB0aGlzLm5hbWVdKTtcclxuXHJcbiAgICAgIHJldHVybiBleHRyYWN0Q2hpbGQgPyBleHRyYWN0Q2hpbGQuc2NoZW1hIDogbnVsbDtcclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIHJldHVybiB0aGlzLl9nZXRDb250cm9sU2NoZW1hKCk7XHJcbiAgfVxyXG5cclxuICAvKiogQGludGVybmFsICovXHJcbiAgX2dldENvbnRyb2xTY2hlbWEgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9O1xyXG5cclxuXHJcbiAgZ2V0IHBhdGgoKTogc3RyaW5nW10ge1xyXG4gICAgcmV0dXJuIHRoaXMucGFyZW50ID8gWy4uLnRoaXMucGFyZW50LnBhdGgsIHRoaXMubmFtZV0gOiBbXTtcclxuICB9XHJcblxyXG4gIGdldCBuYW1lKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5fbmFtZTtcclxuICB9XHJcblxyXG4gIHNldCBuYW1lKG5hbWU6IHN0cmluZykge1xyXG4gICAgdGhpcy5fbmFtZSA9IG5hbWU7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBUaGUgcGFyZW50IGNvbnRyb2wuXHJcbiAgICovXHJcbiAgZ2V0IHBhcmVudCgpOiBGb3JtR3JvdXAgfCBGb3JtQXJyYXkge1xyXG4gICAgcmV0dXJuIHRoaXMuX3BhcmVudDtcclxuICB9XHJcblxyXG4gIGdldCByb290KCk6IEZvcm1Hcm91cCB7XHJcbiAgICByZXR1cm4gdGhpcy5fcm9vdDtcclxuICB9XHJcblxyXG4gIGdldCBvcHRpb25zKCk6IEFic3RyYWN0Q29udHJvbE9wdGlvbnMge1xyXG5cclxuICAgIGxldCBwYXJlbnRDb25maWc7XHJcblxyXG4gICAgaWYgKHRoaXMucGFyZW50ICYmIHRoaXMucGFyZW50Lm9wdGlvbnMpIHBhcmVudENvbmZpZyA9IHtcclxuICAgICAgLi4udGhpcy5wYXJlbnQub3B0aW9uc1xyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAuLi5wYXJlbnRDb25maWcsXHJcbiAgICAgIC4uLnRoaXMuX2luaXRpYWxPcHRpb25zXHJcbiAgICB9IHx8IG51bGw7XHJcbiAgfVxyXG5cclxuICBzZXQgb3B0aW9ucyhuZXdDb25maWc6IEFic3RyYWN0Q29udHJvbE9wdGlvbnMpIHtcclxuXHJcbiAgICB0aGlzLl9vcHRpb25zID0ge1xyXG4gICAgICAuLi50aGlzLl9vcHRpb25zLFxyXG4gICAgICAuLi5uZXdDb25maWdcclxuICAgIH07XHJcblxyXG4gICAgdGhpcy51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KHsgZW1pdEV2ZW50OiB0cnVlIH0pO1xyXG5cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEEgY29udHJvbCBpcyBgZW5hYmxlZGAgYXMgbG9uZyBhcyBpdHMgYHN0YXR1c2AgaXMgbm90IGBESVNBQkxFRGAuXHJcbiAgICpcclxuICAgKiBAc2VlIGBzdGF0dXNgXHJcbiAgICpcclxuICAgKiBAcmV0dXJucyBUcnVlIGlmIHRoZSBjb250cm9sIGhhcyBhbnkgc3RhdHVzIG90aGVyIHRoYW4gJ0RJU0FCTEVEJyxcclxuICAgKiBmYWxzZSBpZiB0aGUgc3RhdHVzIGlzICdESVNBQkxFRCcuXHJcbiAgICpcclxuICAgKi9cclxuICBnZXQgZW5hYmxlZCgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLnN0YXR1cyAhPT0gRElTQUJMRUQ7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBBIGNvbnRyb2wgaXMgYGRpc2FibGVkYCB3aGVuIGl0cyBgc3RhdHVzYCBpcyBgRElTQUJMRURgLlxyXG4gICAqXHJcbiAgICogQHNlZSBgc3RhdHVzYFxyXG4gICAqXHJcbiAgICogRGlzYWJsZWQgY29udHJvbHMgYXJlIGV4ZW1wdCBmcm9tIHZhbGlkYXRpb24gY2hlY2tzIGFuZFxyXG4gICAqIGFyZSBub3QgaW5jbHVkZWQgaW4gdGhlIGFnZ3JlZ2F0ZSB2YWx1ZSBvZiB0aGVpciBhbmNlc3RvclxyXG4gICAqIGNvbnRyb2xzLlxyXG4gICAqXHJcbiAgICogQHJldHVybnMgVHJ1ZSBpZiB0aGUgY29udHJvbCBpcyBkaXNhYmxlZCwgZmFsc2Ugb3RoZXJ3aXNlLlxyXG4gICAqL1xyXG4gIGdldCBkaXNhYmxlZCgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLnN0YXR1cyA9PT0gRElTQUJMRUQ7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBBIGNvbnRyb2wgaXMgYHZhbGlkYCB3aGVuIGl0cyBgc3RhdHVzYCBpcyBgVkFMSURgLlxyXG4gICAqXHJcbiAgICogQHNlZSBgc3RhdHVzYFxyXG4gICAqXHJcbiAgICogQHJldHVybnMgVHJ1ZSBpZiB0aGUgY29udHJvbCBoYXMgcGFzc2VkIGFsbCBvZiBpdHMgdmFsaWRhdGlvbiB0ZXN0cyxcclxuICAgKiBmYWxzZSBvdGhlcndpc2UuXHJcbiAgICovXHJcbiAgZ2V0IHZhbGlkKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuc3RhdHVzID09PSBWQUxJRDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEEgY29udHJvbCBpcyBgaW52YWxpZGAgd2hlbiBpdHMgYHN0YXR1c2AgaXMgYElOVkFMSURgLlxyXG4gICAqXHJcbiAgICogQHNlZSBgc3RhdHVzYFxyXG4gICAqXHJcbiAgICogQHJldHVybnMgVHJ1ZSBpZiB0aGlzIGNvbnRyb2wgaGFzIGZhaWxlZCBvbmUgb3IgbW9yZSBvZiBpdHMgdmFsaWRhdGlvbiBjaGVja3MsXHJcbiAgICogZmFsc2Ugb3RoZXJ3aXNlLlxyXG4gICAqL1xyXG4gIGdldCBpbnZhbGlkKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuc3RhdHVzID09PSBJTlZBTElEO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQSBjb250cm9sIGlzIGBwZW5kaW5nYCB3aGVuIGl0cyBgc3RhdHVzYCBpcyBgUEVORElOR2AuXHJcbiAgICpcclxuICAgKiBAc2VlIGBzdGF0dXNgXHJcbiAgICpcclxuICAgKiBAcmV0dXJucyBUcnVlIGlmIHRoaXMgY29udHJvbCBpcyBpbiB0aGUgcHJvY2VzcyBvZiBjb25kdWN0aW5nIGEgdmFsaWRhdGlvbiBjaGVjayxcclxuICAgKiBmYWxzZSBvdGhlcndpc2UuXHJcbiAgICovXHJcbiAgZ2V0IHBlbmRpbmcoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5zdGF0dXMgPT09IFBFTkRJTkc7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBBIGNvbnRyb2wgaXMgYGRpcnR5YCBpZiB0aGUgdXNlciBoYXMgY2hhbmdlZCB0aGUgdmFsdWVcclxuICAgKiBpbiB0aGUgVUkuXHJcbiAgICpcclxuICAgKiBAcmV0dXJucyBUcnVlIGlmIHRoZSB1c2VyIGhhcyBjaGFuZ2VkIHRoZSB2YWx1ZSBvZiB0aGlzIGNvbnRyb2wgaW4gdGhlIFVJOyBjb21wYXJlIGBwcmlzdGluZWAuXHJcbiAgICogUHJvZ3JhbW1hdGljIGNoYW5nZXMgdG8gYSBjb250cm9sJ3MgdmFsdWUgZG8gbm90IG1hcmsgaXQgZGlydHkuXHJcbiAgICovXHJcbiAgZ2V0IGRpcnR5KCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuICF0aGlzLnByaXN0aW5lO1xyXG4gIH1cclxuXHJcblxyXG4gIC8qKlxyXG4gICAqIE1hcmtzIHRoZSBjb250cm9sIGFzIGB0b3VjaGVkYC4gQSBjb250cm9sIGlzIHRvdWNoZWQgYnkgZm9jdXMgYW5kXHJcbiAgICogYmx1ciBldmVudHMgdGhhdCBkbyBub3QgY2hhbmdlIHRoZSB2YWx1ZTsgY29tcGFyZSBgbWFya0FzRGlydHlgO1xyXG4gICAqXHJcbiAgICogIEBwYXJhbSBvcHRzIG9wdGlvbnMgb3B0aW9ucyB0aGF0IGRldGVybWluZSBob3cgdGhlIGNvbnRyb2wgcHJvcGFnYXRlcyBjaGFuZ2VzXHJcbiAgICogYW5kIGVtaXRzIGV2ZW50cyBldmVudHMgYWZ0ZXIgbWFya2luZyBpcyBhcHBsaWVkLlxyXG4gICAqICogYG9ubHlTZWxmYDogV2hlbiB0cnVlLCBtYXJrIG9ubHkgdGhpcyBjb250cm9sLiBXaGVuIGZhbHNlIG9yIG5vdCBzdXBwbGllZCxcclxuICAgKiBtYXJrcyBhbGwgZGlyZWN0IGFuY2VzdG9ycy4gRGVmYXVsdCBpcyBmYWxzZS5cclxuICAgKi9cclxuICBtYXJrQXNUb3VjaGVkKCk6IHZvaWQge1xyXG4gICAgKHRoaXMgYXMgeyB0b3VjaGVkOiBib29sZWFuIH0pLnRvdWNoZWQgPSB0cnVlO1xyXG5cclxuICAgIHRoaXMudXBkYXRlVmFsdWVBbmRWYWxpZGl0eSh7IG9ubHlTZWxmOiB0cnVlIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogTWFya3MgdGhlIGNvbnRyb2wgYXMgYHVudG91Y2hlZGAuXHJcbiAgICpcclxuICAgKiBJZiB0aGUgY29udHJvbCBoYXMgYW55IGNoaWxkcmVuLCBhbHNvIG1hcmtzIGFsbCBjaGlsZHJlbiBhcyBgdW50b3VjaGVkYFxyXG4gICAqIGFuZCByZWNhbGN1bGF0ZXMgdGhlIGB0b3VjaGVkYCBzdGF0dXMgb2YgYWxsIHBhcmVudCBjb250cm9scy5cclxuICAgKlxyXG4gICAqICBAcGFyYW0gb3B0cyBvcHRpb25zIG9wdGlvbnMgdGhhdCBkZXRlcm1pbmUgaG93IHRoZSBjb250cm9sIHByb3BhZ2F0ZXMgY2hhbmdlc1xyXG4gICAqIGFuZCBlbWl0cyBldmVudHMgYWZ0ZXIgdGhlIG1hcmtpbmcgaXMgYXBwbGllZC5cclxuICAgKiAqIGBvbmx5U2VsZmA6IFdoZW4gdHJ1ZSwgbWFyayBvbmx5IHRoaXMgY29udHJvbC4gV2hlbiBmYWxzZSBvciBub3Qgc3VwcGxpZWQsXHJcbiAgICogbWFya3MgYWxsIGRpcmVjdCBhbmNlc3RvcnMuIERlZmF1bHQgaXMgZmFsc2UuXHJcbiAgICovXHJcbiAgbWFya0FzVW50b3VjaGVkKG9wdHM6IHsgb25seVNlbGY/OiBib29sZWFuIH0gPSB7fSk6IHZvaWQge1xyXG4gICAgKHRoaXMgYXMgeyB0b3VjaGVkOiBib29sZWFuIH0pLnRvdWNoZWQgPSBmYWxzZTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIE1hcmtzIHRoZSBjb250cm9sIGFzIGBkaXJ0eWAuIEEgY29udHJvbCBiZWNvbWVzIGRpcnR5IHdoZW5cclxuICAgKiB0aGUgY29udHJvbCdzIHZhbHVlIGlzIGNoYW5nZWQgdGhyb3VnaCB0aGUgVUk7IGNvbXBhcmUgYG1hcmtBc1RvdWNoZWRgLlxyXG4gICAqXHJcbiAgICogIEBwYXJhbSBvcHRzIG9wdGlvbnMgb3B0aW9ucyB0aGF0IGRldGVybWluZSBob3cgdGhlIGNvbnRyb2wgcHJvcGFnYXRlcyBjaGFuZ2VzXHJcbiAgICogYW5kIGVtaXRzIGV2ZW50cyBhZnRlciBtYXJraW5nIGlzIGFwcGxpZWQuXHJcbiAgICogKiBgb25seVNlbGZgOiBXaGVuIHRydWUsIG1hcmsgb25seSB0aGlzIGNvbnRyb2wuIFdoZW4gZmFsc2Ugb3Igbm90IHN1cHBsaWVkLFxyXG4gICAqIG1hcmtzIGFsbCBkaXJlY3QgYW5jZXN0b3JzLiBEZWZhdWx0IGlzIGZhbHNlLlxyXG4gICAqL1xyXG4gIG1hcmtBc0RpcnR5KG9wdHM6IHsgb25seVNlbGY/OiBib29sZWFuIH0gPSB7fSk6IHZvaWQge1xyXG4gICAgKHRoaXMgYXMgeyBwcmlzdGluZTogYm9vbGVhbiB9KS5wcmlzdGluZSA9IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogTWFya3MgdGhlIGNvbnRyb2wgYXMgYHByaXN0aW5lYC5cclxuICAgKlxyXG4gICAqIElmIHRoZSBjb250cm9sIGhhcyBhbnkgY2hpbGRyZW4sIG1hcmtzIGFsbCBjaGlsZHJlbiBhcyBgcHJpc3RpbmVgLFxyXG4gICAqIGFuZCByZWNhbGN1bGF0ZXMgdGhlIGBwcmlzdGluZWAgc3RhdHVzIG9mIGFsbCBwYXJlbnRcclxuICAgKiBjb250cm9scy5cclxuICAgKlxyXG4gICAqICBAcGFyYW0gb3B0cyBvcHRpb25zIG9wdGlvbnMgdGhhdCBkZXRlcm1pbmUgaG93IHRoZSBjb250cm9sIGVtaXRzIGV2ZW50cyBhZnRlclxyXG4gICAqIG1hcmtpbmcgaXMgYXBwbGllZC5cclxuICAgKiAqIGBvbmx5U2VsZmA6IFdoZW4gdHJ1ZSwgbWFyayBvbmx5IHRoaXMgY29udHJvbC4gV2hlbiBmYWxzZSBvciBub3Qgc3VwcGxpZWQsXHJcbiAgICogbWFya3MgYWxsIGRpcmVjdCBhbmNlc3RvcnMuIERlZmF1bHQgaXMgZmFsc2UuLlxyXG4gICAqL1xyXG4gIG1hcmtBc1ByaXN0aW5lKG9wdHM6IHsgb25seVNlbGY/OiBib29sZWFuIH0gPSB7fSk6IHZvaWQge1xyXG4gICAgKHRoaXMgYXMgeyBwcmlzdGluZTogYm9vbGVhbiB9KS5wcmlzdGluZSA9IHRydWU7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBTZXRzIG9wdGlvbnMgb24gYSBmb3JtIGNvbnRyb2wgLlxyXG4gICAqXHJcbiAgICogQ2FsbGluZyBgc2V0T3B0aW9uc2AgYWxzbyB1cGRhdGVzIHRoZSB2YWxpZGl0eSBvZiB0aGUgcGFyZW50IGNvbnRyb2wuXHJcbiAgICpcclxuICAgKiBAdXNhZ2VOb3Rlc1xyXG4gICAqICMjIyBNYW51YWxseSBzZXQgdGhlIG9wdGlvbnMgZm9yIGEgY29udHJvbFxyXG4gICAqXHJcbiAgICogYGBgXHJcbiAgICogY29uc3QgbG9naW4gPSBuZXcgRm9ybUNvbnRyb2woJ3NvbWVMb2dpbicpO1xyXG4gICAqIGxvZ2luLnNldEVycm9ycyh7XHJcbiAgICogICBub3RVbmlxdWU6IHRydWVcclxuICAgKiB9KTtcclxuICAgKlxyXG4gICAqIGV4cGVjdChsb2dpbi52YWxpZCkudG9FcXVhbChmYWxzZSk7XHJcbiAgICogZXhwZWN0KGxvZ2luLmVycm9ycykudG9FcXVhbCh7IG5vdFVuaXF1ZTogdHJ1ZSB9KTtcclxuICAgKlxyXG4gICAqIGxvZ2luLnNldFZhbHVlKCdzb21lT3RoZXJMb2dpbicpO1xyXG4gICAqXHJcbiAgICogZXhwZWN0KGxvZ2luLnZhbGlkKS50b0VxdWFsKHRydWUpO1xyXG4gICAqIGBgYFxyXG4gICAqL1xyXG4gIHNldE9wdGlvbnMob3B0aW9uczogQWJzdHJhY3RDb250cm9sT3B0aW9ucyB8IG51bGwsIG9wdHM6IHsgZW1pdEV2ZW50PzogYm9vbGVhbiB9ID0ge30pOiB2b2lkIHtcclxuICAgIHRoaXMuX2luaXRpYWxPcHRpb25zID0gb3B0aW9ucztcclxuICAgIHRoaXMuX3VwZGF0ZUNvbnRyb2xzT3B0aW9ucyhvcHRzLmVtaXRFdmVudCAhPT0gZmFsc2UpO1xyXG4gIH1cclxuXHJcblxyXG4gIC8qKlxyXG4gICAqIFNldHMgZXJyb3JzIG9uIGEgZm9ybSBjb250cm9sIHdoZW4gcnVubmluZyB2YWxpZGF0aW9ucyBtYW51YWxseSwgcmF0aGVyIHRoYW4gYXV0b21hdGljYWxseS5cclxuICAgKlxyXG4gICAqIENhbGxpbmcgYHNldEVycm9yc2AgYWxzbyB1cGRhdGVzIHRoZSB2YWxpZGl0eSBvZiB0aGUgcGFyZW50IGNvbnRyb2wuXHJcbiAgICpcclxuICAgKiBAdXNhZ2VOb3Rlc1xyXG4gICAqICMjIyBNYW51YWxseSBzZXQgdGhlIGVycm9ycyBmb3IgYSBjb250cm9sXHJcbiAgICpcclxuICAgKiBgYGBcclxuICAgKiBjb25zdCBsb2dpbiA9IG5ldyBGb3JtQ29udHJvbCgnc29tZUxvZ2luJyk7XHJcbiAgICogbG9naW4uc2V0RXJyb3JzKHtcclxuICAgKiAgIG5vdFVuaXF1ZTogdHJ1ZVxyXG4gICAqIH0pO1xyXG4gICAqXHJcbiAgICogZXhwZWN0KGxvZ2luLnZhbGlkKS50b0VxdWFsKGZhbHNlKTtcclxuICAgKiBleHBlY3QobG9naW4uZXJyb3JzKS50b0VxdWFsKHsgbm90VW5pcXVlOiB0cnVlIH0pO1xyXG4gICAqXHJcbiAgICogbG9naW4uc2V0VmFsdWUoJ3NvbWVPdGhlckxvZ2luJyk7XHJcbiAgICpcclxuICAgKiBleHBlY3QobG9naW4udmFsaWQpLnRvRXF1YWwodHJ1ZSk7XHJcbiAgICogYGBgXHJcbiAgICovXHJcbiAgc2V0RXJyb3JzKGVycm9yczogSm9pRXJyb3JbXSB8IG51bGwsIG9wdHM6IHsgZW1pdEV2ZW50PzogYm9vbGVhbiB9ID0ge30pOiB2b2lkIHtcclxuICAgICh0aGlzIGFzIHsgZXJyb3JzOiBKb2lFcnJvcltdIHwgbnVsbCB9KS5lcnJvcnMgPSBlcnJvcnM7XHJcbiAgICB0aGlzLl91cGRhdGVDb250cm9sc0Vycm9ycyhvcHRzLmVtaXRFdmVudCAhPT0gZmFsc2UpO1xyXG4gIH1cclxuXHJcbiAgLy9cclxuICAvKipcclxuICAgKiBAcGFyYW0gcGFyZW50IFNldHMgdGhlIHBhcmVudCBvZiB0aGUgY29udHJvbFxyXG4gICAqL1xyXG4gIHNldFBhcmVudChwYXJlbnQ6IEZvcm1Hcm91cCB8IEZvcm1BcnJheSk6IHZvaWQge1xyXG4gICAgdGhpcy5fcGFyZW50ID0gcGFyZW50O1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQHBhcmFtIHJvb3QgU2V0cyB0aGUgcm9vdCBvZiB0aGUgZm9ybVxyXG4gICAqL1xyXG4gIHNldFJvb3Qocm9vdDogRm9ybUdyb3VwKTogdm9pZCB7XHJcbiAgICB0aGlzLl9yb290ID0gcm9vdDtcclxuICB9XHJcblxyXG4gIHVwZGF0ZU9wdGlvbnMob3B0aW9uczogQWJzdHJhY3RDb250cm9sT3B0aW9ucyB8IG51bGwsIG9wdHM6IHsgZW1pdEV2ZW50PzogYm9vbGVhbiB9ID0ge30pOiB2b2lkIHtcclxuICAgIHRoaXMuX2luaXRpYWxPcHRpb25zID0ge1xyXG4gICAgICAuLi50aGlzLl9pbml0aWFsT3B0aW9ucyxcclxuICAgICAgLi4ub3B0aW9uc1xyXG4gICAgfTtcclxuICAgIHRoaXMuX3VwZGF0ZUNvbnRyb2xzT3B0aW9ucyhvcHRzLmVtaXRFdmVudCAhPT0gZmFsc2UpO1xyXG4gIH1cclxuXHJcblxyXG4gIC8qKlxyXG4gICAqIFJlY2FsY3VsYXRlcyB0aGUgdmFsdWUgYW5kIHZhbGlkYXRpb24gc3RhdHVzIG9mIHRoZSBjb250cm9sLlxyXG4gICAqXHJcbiAgICogQnkgZGVmYXVsdCwgaXQgYWxzbyB1cGRhdGVzIHRoZSB2YWx1ZSBhbmQgdmFsaWRpdHkgb2YgaXRzIGFuY2VzdG9ycy5cclxuICAgKlxyXG4gICAqIEBwYXJhbSBvcHRzIG9wdGlvbnMgb3B0aW9ucyBkZXRlcm1pbmUgaG93IHRoZSBjb250cm9sIHByb3BhZ2F0ZXMgY2hhbmdlcyBhbmQgZW1pdHMgZXZlbnRzXHJcbiAgICogYWZ0ZXIgdXBkYXRlcyBhbmQgdmFsaWRpdHkgY2hlY2tzIGFyZSBhcHBsaWVkLlxyXG4gICAqICogYG9ubHlTZWxmYDogV2hlbiB0cnVlLCBvbmx5IHVwZGF0ZSB0aGlzIGNvbnRyb2wuIFdoZW4gZmFsc2Ugb3Igbm90IHN1cHBsaWVkLFxyXG4gICAqIHVwZGF0ZSBhbGwgZGlyZWN0IGFuY2VzdG9ycy4gRGVmYXVsdCBpcyBmYWxzZS4uXHJcbiAgICogKiBgZW1pdEV2ZW50YDogV2hlbiB0cnVlIG9yIG5vdCBzdXBwbGllZCAodGhlIGRlZmF1bHQpLCBlbWl0IHRoZSBgdmFsdWVDaGFuZ2VzYCBldmVudFxyXG4gICAqIG9ic2VydmFibGVzIGVtaXQgZXZlbnRzIHdpdGggdGhlIGxhdGVzdCBzdGF0dXMgYW5kIHZhbHVlIHdoZW4gdGhlIGNvbnRyb2wgaXMgdXBkYXRlZC5cclxuICAgKiBXaGVuIGZhbHNlLCBubyBldmVudHMgYXJlIGVtaXR0ZWQuXHJcbiAgICovXHJcbiAgdXBkYXRlVmFsdWVBbmRWYWxpZGl0eShvcHRzOiB7IG9ubHlTZWxmPzogYm9vbGVhbiwgZW1pdEV2ZW50PzogYm9vbGVhbiB9ID0ge30pOiB2b2lkIHtcclxuICAgIHRoaXMuX3NldEluaXRpYWxTdGF0dXMoKTtcclxuICAgIHRoaXMuX3VwZGF0ZVZhbHVlKCk7XHJcbiAgICBpZiAodGhpcy5lbmFibGVkKSB7XHJcbiAgICAgIHRoaXMuX2NhbmNlbEV4aXN0aW5nU3Vic2NyaXB0aW9uKCk7XHJcbiAgICAgICg8eyBlcnJvcnM6IEpvaUVycm9yW10gfCBudWxsIH0+dGhpcykuZXJyb3JzID0gdGhpcy5fcnVuSm9pVmFsaWRhdGlvbigpO1xyXG4gICAgICAoPHsgc3RhdHVzOiBzdHJpbmcgfT50aGlzKS5zdGF0dXMgPSB0aGlzLl9jYWxjdWxhdGVTdGF0dXMoKTtcclxuXHJcbiAgICAgIGlmICh0aGlzLnN0YXR1cyA9PT0gVkFMSUQgfHwgdGhpcy5zdGF0dXMgPT09IFBFTkRJTkcpIHtcclxuICAgICAgICB0aGlzLnJ1bkFzeW5jVmFsaWRhdG9yKG9wdHMuZW1pdEV2ZW50KTtcclxuICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcblxyXG4gICAgaWYgKG9wdHMuZW1pdEV2ZW50ICE9PSBmYWxzZSkge1xyXG4gICAgICAodGhpcy52YWx1ZUNoYW5nZXMgYXMgRXZlbnRFbWl0dGVyPGFueT4pLmVtaXQodGhpcy52YWx1ZSk7XHJcbiAgICAgICh0aGlzLnN0YXR1c0NoYW5nZXMgYXMgRXZlbnRFbWl0dGVyPGFueT4pLmVtaXQodGhpcy5zdGF0dXMpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLl9wYXJlbnQgJiYgIW9wdHMub25seVNlbGYpIHtcclxuICAgICAgdGhpcy5fcGFyZW50LnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkob3B0cyk7XHJcbiAgICB9XHJcblxyXG4gIH1cclxuXHJcblxyXG4gIC8qKiBAaW50ZXJuYWwgKi9cclxuICBwcml2YXRlIF9jYWxjdWxhdGVTdGF0dXMoKTogc3RyaW5nIHtcclxuICAgIGlmICh0aGlzLl9hbGxDb250cm9sc0Rpc2FibGVkKCkpIHJldHVybiBESVNBQkxFRDtcclxuICAgIGlmICh0aGlzLmVycm9ycykgcmV0dXJuIElOVkFMSUQ7XHJcbiAgICBpZiAodGhpcy5fYW55Q29udHJvbHNIYXZlU3RhdHVzKElOVkFMSUQpKSByZXR1cm4gSU5WQUxJRDtcclxuICAgIGlmICh0aGlzLl9hbnlDb250cm9sc0hhdmVTdGF0dXMoUEVORElORykpIHJldHVybiBQRU5ESU5HO1xyXG4gICAgcmV0dXJuIFZBTElEO1xyXG4gIH1cclxuXHJcbiAgLyoqIEBpbnRlcm5hbCAqL1xyXG4gIF9ydW5Kb2lWYWxpZGF0aW9uKCkge1xyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG5cclxuXHJcbiAgLyoqIEBpbnRlcm5hbCAqL1xyXG4gIF91cGRhdGVDaGlsZEVycm9yID0gKGVycm9yczogSm9pRXJyb3JbXSkgPT4ge1xyXG4gIH07XHJcblxyXG5cclxuICBwcml2YXRlIF9jYW5jZWxFeGlzdGluZ1N1YnNjcmlwdGlvbigpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLl9hc3luY1ZhbGlkYXRpb25TdWJzY3JpcHRpb24pIHtcclxuICAgICAgdGhpcy5fYXN5bmNWYWxpZGF0aW9uU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9zZXRJbml0aWFsU3RhdHVzKCkge1xyXG4gICAgKHRoaXMgYXMgeyBzdGF0dXM6IHN0cmluZyB9KS5zdGF0dXMgPSB0aGlzLl9hbGxDb250cm9sc0Rpc2FibGVkKCkgPyBESVNBQkxFRCA6IFZBTElEO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfc3RvcmVJbml0aWFsT3B0aW9ucyA9IChvcHRpb25zOiBBYnN0cmFjdENvbnRyb2xPcHRpb25zIHwgbnVsbCkgPT4ge1xyXG4gICAgdGhpcy5faW5pdGlhbE9wdGlvbnMgPSBvcHRpb25zO1xyXG4gIH07XHJcblxyXG5cclxuICAvKiogQGludGVybmFsICovXHJcbiAgX3VwZGF0ZVZhbHVlKCk6IHZvaWQge1xyXG5cclxuICB9XHJcblxyXG4gIC8qKiBAaW50ZXJuYWwgKi9cclxuICBfaXNOb3RFeGNsdWRlZCA9IChjOiBBYnN0cmFjdENvbnRyb2wpOiBCb29sZWFuID0+IHtcclxuXHJcbiAgICByZXR1cm4gIV8uZ2V0KGMub3B0aW9ucywgJ2V4Y2x1ZGVkJykgJiYgIShfLmhhcyh0aGlzLm9wdGlvbnMsIFsnbnVsbEV4Y2x1c2lvbiddKSAmJiAhYy52YWx1ZSk7XHJcblxyXG4gIH07XHJcblxyXG4gIC8qKiBAaW50ZXJuYWwgKi9cclxuICBfaW5pdE9ic2VydmFibGVzKCkge1xyXG4gICAgKHRoaXMgYXMgeyB2YWx1ZUNoYW5nZXM6IE9ic2VydmFibGU8YW55PiB9KS52YWx1ZUNoYW5nZXMgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgICAodGhpcyBhcyB7IHN0YXR1c0NoYW5nZXM6IE9ic2VydmFibGU8YW55PiB9KS5zdGF0dXNDaGFuZ2VzID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIH1cclxuXHJcbiAgLyoqIEBpbnRlcm5hbCAqL1xyXG4gIF9pbml0VmFsaWRhdG9ycygpIHtcclxuICAgICg8QWJzdHJhY3RDb250cm9sPnRoaXMpLnJ1bkFzeW5jVmFsaWRhdG9yID0gXy5kZWJvdW5jZSgoZW1pdEV2ZW50PzogYm9vbGVhbikgPT4ge1xyXG5cclxuICAgICAgaWYgKHRoaXMuYXN5bmNWYWxpZGF0b3IpIHtcclxuICAgICAgICAodGhpcyBhcyB7IHN0YXR1czogc3RyaW5nIH0pLnN0YXR1cyA9IFBFTkRJTkc7XHJcbiAgICAgICAgY29uc3Qgb2JzID0gdGhpcy5hc3luY1ZhbGlkYXRvcih0aGlzKTtcclxuICAgICAgICAvLyB0aGlzLl9hc3luY1ZhbGlkYXRpb25TdWJzY3JpcHRpb24gPVxyXG4gICAgICAgIC8vIG9icy5zdWJzY3JpYmUoKGVycm9yczogSm9pRXJyb3JbXSB8IG51bGwpID0+IHtcclxuICAgICAgICAvLyAgIGlmICgodGhpcy50b3VjaGVkIHx8IHRoaXMuZGlydHkpICYmIHRoaXMudmFsdWUpIHtcclxuICAgICAgICAvLyAgICAgKHRoaXMgYXMgeyBzdGF0dXM6IHN0cmluZyB9KS5zdGF0dXMgPSBJTlZBTElEO1xyXG4gICAgICAgIC8vICAgICB0aGlzLnNldEVycm9ycyhlcnJvcnMsIHsgZW1pdEV2ZW50IH0pO1xyXG4gICAgICAgIC8vICAgfVxyXG4gICAgICAgIC8vIH0pO1xyXG4gICAgICB9XHJcbiAgICB9LCA1MDApO1xyXG4gIH1cclxuXHJcbiAgLyoqIEBpbnRlcm5hbCAqL1xyXG4gIF91cGRhdGVDb250cm9sc09wdGlvbnMoZW1pdEV2ZW50OiBib29sZWFuKTogdm9pZCB7XHJcbiAgICAodGhpcyBhcyB7IHN0YXR1czogc3RyaW5nIH0pLnN0YXR1cyA9IHRoaXMuX2NhbGN1bGF0ZVN0YXR1cygpO1xyXG5cclxuICAgIGlmIChlbWl0RXZlbnQpIHtcclxuICAgICAgKHRoaXMuc3RhdHVzQ2hhbmdlcyBhcyBFdmVudEVtaXR0ZXI8c3RyaW5nPikuZW1pdCh0aGlzLnN0YXR1cyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKiogQGludGVybmFsICovXHJcbiAgX3VwZGF0ZUNvbnRyb2xzRXJyb3JzKGVtaXRFdmVudDogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgKHRoaXMgYXMgeyBzdGF0dXM6IHN0cmluZyB9KS5zdGF0dXMgPSB0aGlzLl9jYWxjdWxhdGVTdGF0dXMoKTtcclxuXHJcbiAgICBpZiAoZW1pdEV2ZW50KSB7XHJcbiAgICAgICh0aGlzLnN0YXR1c0NoYW5nZXMgYXMgRXZlbnRFbWl0dGVyPHN0cmluZz4pLmVtaXQodGhpcy5zdGF0dXMpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLl9wYXJlbnQpIHtcclxuICAgICAgdGhpcy5fcGFyZW50Ll91cGRhdGVDb250cm9sc0Vycm9ycyhlbWl0RXZlbnQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcblxyXG4gIC8qKlxyXG4gICAqIFNldHMgdGhlIHZhbHVlIG9mIHRoZSBjb250cm9sLiBBYnN0cmFjdCBtZXRob2QgKGltcGxlbWVudGVkIGluIHN1Yi1jbGFzc2VzKS5cclxuICAgKi9cclxuICBhYnN0cmFjdCBzZXRWYWx1ZSh2YWx1ZTogYW55LCBvcHRpb25zPzogT2JqZWN0KTogdm9pZDtcclxuXHJcbiAgLyoqXHJcbiAgICogUmVzZXRzIHRoZSBjb250cm9sLiBBYnN0cmFjdCBtZXRob2QgKGltcGxlbWVudGVkIGluIHN1Yi1jbGFzc2VzKS5cclxuICAgKi9cclxuICBhYnN0cmFjdCByZXNldCh2YWx1ZT86IGFueSwgb3B0aW9ucz86IE9iamVjdCk6IHZvaWQ7XHJcblxyXG4gIC8qKlxyXG4gICAqIENsZWFyIHRoZSBjb250cm9sLiBBYnN0cmFjdCBtZXRob2QgKGltcGxlbWVudGVkIGluIHN1Yi1jbGFzc2VzKS5cclxuICAgKi9cclxuICBhYnN0cmFjdCBjbGVhcihvcHRpb25zPzogT2JqZWN0KTogdm9pZDtcclxuXHJcbiAgLyoqIEBpbnRlcm5hbCAqL1xyXG4gIGFic3RyYWN0IF9hbGxDb250cm9sc0Rpc2FibGVkKCk6IGJvb2xlYW47XHJcblxyXG4gIC8qKiBAaW50ZXJuYWwgKi9cclxuICBhYnN0cmFjdCBfYW55Q29udHJvbHNIYXZlU3RhdHVzKHN0YXR1czogc3RyaW5nKTogYm9vbGVhblxyXG59XHJcblxyXG5cclxuLyoqXHJcbiAqIFJlcG9ydHMgdGhhdCBhIEZvcm1Db250cm9sIGlzIHZhbGlkLCBtZWFuaW5nIHRoYXQgbm8gZXJyb3JzIGV4aXN0IGluIHRoZSBpbnB1dCB2YWx1ZS5cclxuICpcclxuICogQHNlZSBgc3RhdHVzYFxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IFZBTElEID0gJ1ZBTElEJztcclxuXHJcbi8qKlxyXG4gKiBSZXBvcnRzIHRoYXQgYSBGb3JtQ29udHJvbCBpcyBpbnZhbGlkLCBtZWFuaW5nIHRoYXQgYW4gZXJyb3IgZXhpc3RzIGluIHRoZSBpbnB1dCB2YWx1ZS5cclxuICpcclxuICogQHNlZSBgc3RhdHVzYFxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IElOVkFMSUQgPSAnSU5WQUxJRCc7XHJcblxyXG4vKipcclxuICogUmVwb3J0cyB0aGF0IGEgRm9ybUNvbnRyb2wgaXMgcGVuZGluZywgbWVhbmluZyB0aGF0IHRoYXQgYXN5bmMgdmFsaWRhdGlvbiBpcyBvY2N1cnJpbmcgYW5kXHJcbiAqIGVycm9ycyBhcmUgbm90IHlldCBhdmFpbGFibGUgZm9yIHRoZSBpbnB1dCB2YWx1ZS5cclxuICpcclxuICogQHNlZSBgbWFya0FzUGVuZGluZ2BcclxuICogQHNlZSBgc3RhdHVzYFxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IFBFTkRJTkcgPSAnUEVORElORyc7XHJcblxyXG4vKipcclxuICogUmVwb3J0cyB0aGF0IGEgRm9ybUNvbnRyb2wgaXMgZGlzYWJsZWQsIG1lYW5pbmcgdGhhdCB0aGUgY29udHJvbCBpcyBleGVtcHQgZnJvbSBhbmNlc3RvclxyXG4gKiBjYWxjdWxhdGlvbnMgb2YgdmFsaWRpdHkgb3IgdmFsdWUuXHJcbiAqXHJcbiAqIEBzZWUgYG1hcmtBc0Rpc2FibGVkYFxyXG4gKiBAc2VlIGBzdGF0dXNgXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgRElTQUJMRUQgPSAnRElTQUJMRUQnO1xyXG5cclxuZXhwb3J0IHR5cGUgRm9ybUhvb2tzID0gJ2NoYW5nZScgfCAnYmx1cicgfCAnc3VibWl0JztcclxuIl19