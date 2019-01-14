/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { EventEmitter } from '@angular/core';
import Joi from '@ionar/joi';
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
            return !_.get(c.options, 'excluded') && !(_.has(_this.options, ['nullExclusion']) && !c.value);
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
                var extractChild = _.find(this.parent.schema['_inner'].children, ['key', this.name]);
                return extractChild ? extractChild.schema : null;
            }
            return this._getControlSchema();
        },
        enumerable: true,
        configurable: true
    });
    /** @internal */
    /**
     * \@internal
     * @return {?}
     */
    AbstractControl.prototype._mergeSchema = /**
     * \@internal
     * @return {?}
     */
    function () {
        // const parentSchema = (<FormGroup>this.parent).schema
        // if (parentSchema && this.schema) {
        //   const currentTest = this.schema['_tests']
        //   const parentTest = this.sh
        //   _.each(currentTest, test => {
        //     const index = _.findIndex(testObject1['_tests'], ['name', test.name]);
        //     testObject1['_tests'].splice(index, 1, test);
        //
        //   });
        // }
        // (<AbstractControlOptions>this.options).schema
    };
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
            return this.status !== DISABLED;
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
            return this.status === DISABLED;
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
            return this.status === VALID;
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
            return this.status === INVALID;
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
            return this.status === PENDING;
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
            return DISABLED;
        if (this.errors)
            return INVALID;
        if (this._anyControlsHaveStatus(INVALID))
            return INVALID;
        if (this._anyControlsHaveStatus(PENDING))
            return PENDING;
        return VALID;
    };
    /**
     * @private
     * @return {?}
     */
    AbstractControl.prototype._runJoiValidation = /**
     * @private
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
            var result = Joi.validate(validateObject, validateSchema, {
                abortEarly: false,
                stripUnknown: true
            });
            if (!result.error)
                return null;
            return (/** @type {?} */ (result.error.details));
        }
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
        ((/** @type {?} */ (this))).status = this._allControlsDisabled() ? DISABLED : VALID;
    };
    /** @internal */
    /**
     * \@internal
     * @return {?}
     */
    AbstractControl.prototype._coerceToJoiSchema = /**
     * \@internal
     * @return {?}
     */
    function () {
        ((/** @type {?} */ (this))).schema = ((/** @type {?} */ (this.options))).schema;
    };
    ;
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
        ((/** @type {?} */ (this))).valueChanges = new EventEmitter();
        ((/** @type {?} */ (this))).statusChanges = new EventEmitter();
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
        ((/** @type {?} */ (this))).runAsyncValidator = _.debounce(function (emitEvent) {
            if (_this.asyncValidator) {
                ((/** @type {?} */ (_this))).status = PENDING;
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
export { AbstractControl };
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
    /* Skipping unhandled member: ;*/
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
export var VALID = 'VALID';
/**
 * Reports that a FormControl is invalid, meaning that an error exists in the input value.
 *
 * @see `status`
 * @type {?}
 */
export var INVALID = 'INVALID';
/**
 * Reports that a FormControl is pending, meaning that that async validation is occurring and
 * errors are not yet available for the input value.
 *
 * @see `markAsPending`
 * @see `status`
 * @type {?}
 */
export var PENDING = 'PENDING';
/**
 * Reports that a FormControl is disabled, meaning that the control is exempt from ancestor
 * calculations of validity or value.
 *
 * @see `markAsDisabled`
 * @see `status`
 * @type {?}
 */
export var DISABLED = 'DISABLED';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWJzdHJhY3RDb250cm9sLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGlvbmFyL2Zvcm0vIiwic291cmNlcyI6WyJjb3JlL21vZGVscy9BYnN0cmFjdENvbnRyb2wudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBSTdDLE9BQU8sR0FBRyxNQUFNLFlBQVksQ0FBQztBQUU3QixPQUFPLENBQUMsTUFBTSxRQUFRLENBQUM7Ozs7Ozs7Ozs7Ozs7QUFzQnZCOzs7Ozs7Ozs7Ozs7O0lBb0dFOzs7OztPQUtHO0lBQ0gseUJBQW1CLEtBQWtDLEVBQVUsUUFBdUM7UUFBdEcsaUJBS0M7UUFMa0IsVUFBSyxHQUFMLEtBQUssQ0FBNkI7UUFBVSxhQUFRLEdBQVIsUUFBUSxDQUErQjs7Ozs7Ozs7Ozs7UUF6RXRGLFlBQU8sR0FBWSxLQUFLLENBQUM7Ozs7Ozs7UUFRekIsYUFBUSxHQUFZLElBQUksQ0FBQzs7OztRQW1GekMsc0JBQWlCLEdBQUc7WUFDbEIsT0FBTyxJQUFJLENBQUM7UUFDZCxDQUFDLENBQUM7Ozs7UUFpV0Ysc0JBQWlCLEdBQUcsVUFBQyxNQUFrQjtRQUN2QyxDQUFDLENBQUM7UUFhTSx5QkFBb0IsR0FBRyxVQUFDLE9BQXNDO1lBQ3BFLEtBQUksQ0FBQyxlQUFlLEdBQUcsT0FBTyxDQUFDO1FBQ2pDLENBQUMsQ0FBQzs7OztRQWVGLG1CQUFjLEdBQUcsVUFBQyxDQUFrQjtZQUVsQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEtBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxlQUFlLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRWhHLENBQUMsQ0FBQztRQXRaQSxJQUFJLENBQUMsb0JBQW9CLENBQUMsUUFBUSxD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QUcvQix5Q0FBd0Q7O0lBRXhELDRDQUFtQzs7SUFFbkMsdURBQXlDOzs7OztJQUV6QyxrQ0FBdUM7Ozs7O0lBRXZDLGdDQUF5Qjs7Ozs7SUFFekIsZ0NBQXNCOzs7OztJQUV0QixnQ0FBd0I7Ozs7O0lBRXhCLDBDQUF1RDs7Ozs7Ozs7SUFTdkQsbUNBQTBEOzs7Ozs7SUFZMUQsdUNBQThDOzs7Ozs7SUFNOUMsd0NBQStDOzs7OztJQTBCL0MsNENBRUU7Ozs7O0lBaVdGLDRDQUNFOzs7OztJQWFGLCtDQUVFOzs7OztJQWVGLHlDQUlFOztJQXhaVSxnQ0FBeUM7Ozs7O0lBQUUsbUNBQStDOzs7Ozs7Ozs7SUE0Y3RHLG1FQUFzRDs7Ozs7Ozs7SUFLdEQsZ0VBQW9EOzs7Ozs7O0lBS3BELHlEQUF1Qzs7Ozs7O0lBR3ZDLGlFQUF5Qzs7Ozs7OztJQUd6Qyx5RUFBd0Q7Ozs7Ozs7O0FBUzFELE1BQU0sS0FBTyxLQUFLLEdBQUcsT0FBTzs7Ozs7OztBQU81QixNQUFNLEtBQU8sT0FBTyxHQUFHLFNBQVM7Ozs7Ozs7OztBQVNoQyxNQUFNLEtBQU8sT0FBTyxHQUFHLFNBQVM7Ozs7Ozs7OztBQVNoQyxNQUFNLEtBQU8sUUFBUSxHQUFHLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgQXN5bmNWYWxpZGF0b3JGbiwgSm9pU2NoZW1hLCBKb2lFcnJvciB9IGZyb20gJy4uL2ludGVyZmFjZXMvVmFsaWRhdG9yJztcclxuaW1wb3J0IHsgRm9ybUdyb3VwIH0gZnJvbSAnLi4vbW9kZWxzL0Zvcm1Hcm91cCc7XHJcbmltcG9ydCBKb2kgZnJvbSAnQGlvbmFyL2pvaSc7XHJcblxyXG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xyXG5pbXBvcnQge1xyXG4gIEFic3RyYWN0Q29udHJvbE9wdGlvbnMsXHJcbiAgQWJzdHJhY3RDb250cm9sU3RhdGUsXHJcbiAgRm9ybUFycmF5U3RhdGUsXHJcbiAgRm9ybUNvbnRyb2xTdGF0ZSxcclxuICBGb3JtR3JvdXBTdGF0ZVxyXG59IGZyb20gJy4uL2ludGVyZmFjZXMvRm9ybSc7XHJcblxyXG5pbXBvcnQgeyBGb3JtQXJyYXkgfSBmcm9tICcuL0Zvcm1BcnJheSc7XHJcblxyXG4vKipcclxuICogVGhpcyBpcyB0aGUgYmFzZSBjbGFzcyBmb3IgYEZvcm1Db250cm9sYCwgYEZvcm1Hcm91cC50c2AsIGFuZCBgRm9ybUFycmF5YC5cclxuICpcclxuICogSXQgcHJvdmlkZXMgc29tZSBvZiB0aGUgc2hhcmVkIGJlaGF2aW9yIHRoYXQgYWxsIGNvbnRyb2xzIGFuZCBncm91cHMgb2YgY29udHJvbHMgaGF2ZSwgbGlrZVxyXG4gKiBydW5uaW5nIHZhbGlkYXRvcnMsIGNhbGN1bGF0aW5nIHN0YXR1cywgYW5kIHJlc2V0dGluZyBzdGF0ZS4gSXQgYWxzbyBkZWZpbmVzIHRoZSBwcm9wZXJ0aWVzXHJcbiAqIHRoYXQgYXJlIHNoYXJlZCBiZXR3ZWVuIGFsbCBzdWItY2xhc3NlcywgbGlrZSBgdmFsdWVgLCBgdmFsaWRgLCBhbmQgYGRpcnR5YC4gSXQgc2hvdWxkbid0IGJlXHJcbiAqIGluc3RhbnRpYXRlZCBkaXJlY3RseS5cclxuICpcclxuICpcclxuICogQHB1YmxpY0FwaVxyXG4gKi9cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEFic3RyYWN0Q29udHJvbCB7XHJcblxyXG4gIC8qKiBAaW50ZXJuYWwgKi9cclxuICBwdWJsaWMgcmVhZG9ubHkgcGVuZGluZ1ZhbHVlOiBhbnk7XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoZSBjdXJyZW50IHZhbHVlIG9mIHRoZSBjb250cm9sLlxyXG4gICAqXHJcbiAgICogKiBGb3IgYSBgRm9ybUNvbnRyb2xgLCB0aGUgY3VycmVudCB2YWx1ZS5cclxuICAgKiAqIEZvciBhIGBGb3JtR3JvdXBgLCB0aGUgdmFsdWVzIG9mIGVuYWJsZWQgY29udHJvbHMgYXMgYW4gb2JqZWN0IHdpdGggYSBrZXktdmFsdWUgcGFpciBmb3IgZWFjaCBtZW1iZXIgb2YgdGhlIGdyb3VwLlxyXG4gICAqICogRm9yIGEgYEZvcm1BcnJheWAsIHRoZSB2YWx1ZXMgb2YgZW5hYmxlZCBjb250cm9scyBhcyBhbiBhcnJheS5cclxuICAgKlxyXG4gICAqL1xyXG4gIHB1YmxpYyByZWFkb25seSB2YWx1ZTogYW55O1xyXG5cclxuICAvKipcclxuICAgKiBBbiBvYmplY3QgY29udGFpbmluZyBhbnkgZXJyb3JzIGdlbmVyYXRlZCBieSBmYWlsaW5nIHZhbGlkYXRpb24sXHJcbiAgICogb3IgbnVsbCBpZiB0aGVyZSBhcmUgbm8gZXJyb3JzLlxyXG4gICAqL1xyXG4gIHB1YmxpYyByZWFkb25seSBlcnJvcnM6IEpvaUVycm9yW10gfCBudWxsO1xyXG5cclxuXHJcbiAgLyoqXHJcbiAgICogQSBKb2kgb2JqZWN0IHNjaGVtYVxyXG4gICAqL1xyXG4gIC8vIHB1YmxpYyByZWFkb25seSBzY2hlbWE6IEpvaVNjaGVtYSB8IG51bGw7XHJcblxyXG4gIC8qKlxyXG4gICAqIFRydWUgaWYgdGhlIGNvbnRyb2wgaXMgbWFya2VkIGFzIGB0b3VjaGVkYC5cclxuICAgKlxyXG4gICAqIEEgY29udHJvbCBpcyBtYXJrZWQgYHRvdWNoZWRgIG9uY2UgdGhlIHVzZXIgaGFzIHRyaWdnZXJlZFxyXG4gICAqIGEgYGJsdXJgIGV2ZW50IG9uIGl0LlxyXG4gICAqL1xyXG4gIHB1YmxpYyByZWFkb25seSB0b3VjaGVkOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIC8qKlxyXG4gICAqIEEgY29udHJvbCBpcyBgcHJpc3RpbmVgIGlmIHRoZSB1c2VyIGhhcyBub3QgeWV0IGNoYW5nZWQgdGhlIHZhbHVlIGluIHRoZSBVSS5cclxuICAgKlxyXG4gICAqIEByZXR1cm5zIFRydWUgaWYgdGhlIHVzZXIgaGFzIG5vdCB5ZXQgY2hhbmdlZCB0aGUgdmFsdWUgaW4gdGhlIFVJOyBjb21wYXJlIGBkaXJ0eWAuXHJcbiAgICogUHJvZ3JhbW1hdGljIGNoYW5nZXMgdG8gYSBjb250cm9sJ3MgdmFsdWUgZG8gbm90IG1hcmsgaXQgZGlydHkuXHJcbiAgICovXHJcbiAgcHVibGljIHJlYWRvbmx5IHByaXN0aW5lOiBib29sZWFuID0gdHJ1ZTtcclxuXHJcbiAgLyoqXHJcbiAgICogVGhlIHZhbGlkYXRpb24gc3RhdHVzIG9mIHRoZSBjb250cm9sLiBUaGVyZSBhcmUgZm91ciBwb3NzaWJsZVxyXG4gICAqIHZhbGlkYXRpb24gc3RhdHVzIHZhbHVlczpcclxuICAgKlxyXG4gICAqICogKipWQUxJRCoqOiBUaGlzIGNvbnRyb2wgaGFzIHBhc3NlZCBhbGwgdmFsaWRhdGlvbiBjaGVja3MuXHJcbiAgICogKiAqKklOVkFMSUQqKjogVGhpcyBjb250cm9sIGhhcyBmYWlsZWQgYXQgbGVhc3Qgb25lIHZhbGlkYXRpb24gY2hlY2suXHJcbiAgICogKiAqKlBFTkRJTkcqKjogVGhpcyBjb250cm9sIGlzIGluIHRoZSBtaWRzdCBvZiBjb25kdWN0aW5nIGEgdmFsaWRhdGlvbiBjaGVjay5cclxuICAgKiAqICoqRElTQUJMRUQqKjogVGhpcyBjb250cm9sIGlzIGV4ZW1wdCBmcm9tIHZhbGlkYXRpb24gY2hlY2tzLlxyXG4gICAqXHJcbiAgICogVGhlc2Ugc3RhdHVzIHZhbHVlcyBhcmUgbXV0dWFsbHkgZXhjbHVzaXZlLCBzbyBhIGNvbnRyb2wgY2Fubm90IGJlIGJvdGggdmFsaWQgQU5EIGludmFsaWQgb3IgaW52YWxpZCBBTkQgZGlzYWJsZWQuXHJcbiAgICovXHJcbiAgcHVibGljIHJlYWRvbmx5IHN0YXR1czogc3RyaW5nO1xyXG5cclxuXHJcbiAgcHVibGljIHJlYWRvbmx5IGFzeW5jVmFsaWRhdG9yOiBBc3luY1ZhbGlkYXRvckZuIHwgbnVsbDtcclxuXHJcbiAgcHVibGljIHJ1bkFzeW5jVmFsaWRhdG9yOiBGdW5jdGlvbjtcclxuXHJcbiAgcHVibGljIF9hc3luY1ZhbGlkYXRpb25TdWJzY3JpcHRpb246IGFueTtcclxuXHJcbiAgcHJpdmF0ZSBfcGFyZW50OiBGb3JtR3JvdXAgfCBGb3JtQXJyYXk7XHJcblxyXG4gIHByaXZhdGUgX3Jvb3Q6IEZvcm1Hcm91cDtcclxuXHJcbiAgcHJpdmF0ZSBfbmFtZTogc3RyaW5nO1xyXG5cclxuICBwcml2YXRlIF9wYXRoOiBzdHJpbmdbXTtcclxuXHJcbiAgcHJpdmF0ZSBfaW5pdGlhbE9wdGlvbnM6IEFic3RyYWN0Q29udHJvbE9wdGlvbnMgfCBudWxsO1xyXG5cclxuICAvKipcclxuICAgKlxyXG4gICAqIEBwYXJhbSBjb250cm9scyBBIGNvbGxlY3Rpb24gb2YgY2hpbGQgY29udHJvbHMuIFRoZSBrZXkgZm9yIGVhY2ggY2hpbGQgaXMgdGhlIG5hbWVcclxuICAgKiB1bmRlciB3aGljaCBpdCBpcyByZWdpc3RlcmVkLlxyXG4gICAqXHJcbiAgICovXHJcblxyXG4gIHB1YmxpYyByZWFkb25seSBjb250cm9sczogRm9ybUdyb3VwU3RhdGUgfCBGb3JtQXJyYXlTdGF0ZTtcclxuXHJcbiAgLyoqXHJcbiAgICogQGRlc2NyaXB0aW9uXHJcbiAgICogRW1pdHMgYW4gZXZlbnQgd2hlbiB0aGUgZm9ybSBzdWJtaXNzaW9uIGhhcyBiZWVuIHRyaWdnZXJlZC5cclxuICAgKi9cclxuXHJcblxyXG4gIC8qKlxyXG4gICAqIEEgbXVsdGljYXN0aW5nIG9ic2VydmFibGUgdGhhdCBlbWl0cyBhbiBldmVudCBldmVyeSB0aW1lIHRoZSB2YWx1ZSBvZiB0aGUgY29udHJvbCBjaGFuZ2VzLCBpblxyXG4gICAqIHRoZSBVSSBvciBwcm9ncmFtbWF0aWNhbGx5LlxyXG4gICAqL1xyXG4gIHB1YmxpYyByZWFkb25seSB2YWx1ZUNoYW5nZXM6IE9ic2VydmFibGU8YW55PjtcclxuXHJcbiAgLyoqXHJcbiAgICogQSBtdWx0aWNhc3Rpbmcgb2JzZXJ2YWJsZSB0aGF0IGVtaXRzIGFuIGV2ZW50IGV2ZXJ5IHRpbWUgdGhlIHZhbGlkYXRpb24gYHN0YXR1c2Agb2YgdGhlIGNvbnRyb2xcclxuICAgKiByZWNhbGN1bGF0ZXMuXHJcbiAgICovXHJcbiAgcHVibGljIHJlYWRvbmx5IHN0YXR1c0NoYW5nZXM6IE9ic2VydmFibGU8YW55PjtcclxuXHJcbiAgLyoqXHJcbiAgICogSW5pdGlhbGl6ZSB0aGUgQWJzdHJhY3RDb250cm9sIGluc3RhbmNlLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIG9wdGlvbnNcclxuICAgKlxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBzdGF0ZTogQWJzdHJhY3RDb250cm9sU3RhdGUgfCBudWxsLCBwcml2YXRlIF9vcHRpb25zOiBBYnN0cmFjdENvbnRyb2xPcHRpb25zIHwgbnVsbCkge1xyXG5cclxuICAgIHRoaXMuX3N0b3JlSW5pdGlhbE9wdGlvbnMoX29wdGlvbnMpO1xyXG4gICAgdGhpcy5ydW5Bc3luY1ZhbGlkYXRvciA9ICgpID0+IHtcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBnZXQgc2NoZW1hKCk6IEpvaVNjaGVtYSB8IG51bGwge1xyXG4gICAgaWYgKHRoaXMucGFyZW50ICYmIHRoaXMucGFyZW50LnNjaGVtYSkge1xyXG4gICAgICBjb25zdCBleHRyYWN0Q2hpbGQgPSBfLmZpbmQodGhpcy5wYXJlbnQuc2NoZW1hWydfaW5uZXInXS5jaGlsZHJlbiwgWydrZXknLCB0aGlzLm5hbWVdKTtcclxuXHJcbiAgICAgIHJldHVybiBleHRyYWN0Q2hpbGQgPyBleHRyYWN0Q2hpbGQuc2NoZW1hIDogbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGhpcy5fZ2V0Q29udHJvbFNjaGVtYSgpO1xyXG4gIH1cclxuXHJcbiAgLyoqIEBpbnRlcm5hbCAqL1xyXG4gIF9nZXRDb250cm9sU2NoZW1hID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfTtcclxuXHJcbiAgLyoqIEBpbnRlcm5hbCAqL1xyXG4gIF9tZXJnZVNjaGVtYSgpIHtcclxuICAgIC8vIGNvbnN0IHBhcmVudFNjaGVtYSA9ICg8Rm9ybUdyb3VwPnRoaXMucGFyZW50KS5zY2hlbWFcclxuXHJcbiAgICAvLyBpZiAocGFyZW50U2NoZW1hICYmIHRoaXMuc2NoZW1hKSB7XHJcbiAgICAvLyAgIGNvbnN0IGN1cnJlbnRUZXN0ID0gdGhpcy5zY2hlbWFbJ190ZXN0cyddXHJcbiAgICAvLyAgIGNvbnN0IHBhcmVudFRlc3QgPSB0aGlzLnNoXHJcbiAgICAvLyAgIF8uZWFjaChjdXJyZW50VGVzdCwgdGVzdCA9PiB7XHJcbiAgICAvLyAgICAgY29uc3QgaW5kZXggPSBfLmZpbmRJbmRleCh0ZXN0T2JqZWN0MVsnX3Rlc3RzJ10sIFsnbmFtZScsIHRlc3QubmFtZV0pO1xyXG4gICAgLy8gICAgIHRlc3RPYmplY3QxWydfdGVzdHMnXS5zcGxpY2UoaW5kZXgsIDEsIHRlc3QpO1xyXG4gICAgLy9cclxuICAgIC8vICAgfSk7XHJcblxyXG4gICAgLy8gfVxyXG4gICAgLy8gKDxBYnN0cmFjdENvbnRyb2xPcHRpb25zPnRoaXMub3B0aW9ucykuc2NoZW1hXHJcbiAgfVxyXG5cclxuICBnZXQgcGF0aCgpOiBzdHJpbmdbXSB7XHJcbiAgICByZXR1cm4gdGhpcy5wYXJlbnQgPyBbLi4udGhpcy5wYXJlbnQucGF0aCwgdGhpcy5uYW1lXSA6IFtdO1xyXG4gIH1cclxuXHJcbiAgZ2V0IG5hbWUoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLl9uYW1lO1xyXG4gIH1cclxuXHJcbiAgc2V0IG5hbWUobmFtZTogc3RyaW5nKSB7XHJcbiAgICB0aGlzLl9uYW1lID0gbmFtZTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoZSBwYXJlbnQgY29udHJvbC5cclxuICAgKi9cclxuICBnZXQgcGFyZW50KCk6IEZvcm1Hcm91cCB8IEZvcm1BcnJheSB7XHJcbiAgICByZXR1cm4gdGhpcy5fcGFyZW50O1xyXG4gIH1cclxuXHJcbiAgZ2V0IHJvb3QoKTogRm9ybUdyb3VwIHtcclxuICAgIHJldHVybiB0aGlzLl9yb290O1xyXG4gIH1cclxuXHJcbiAgZ2V0IG9wdGlvbnMoKTogQWJzdHJhY3RDb250cm9sT3B0aW9ucyB7XHJcblxyXG4gICAgbGV0IHBhcmVudENvbmZpZztcclxuXHJcbiAgICBpZiAodGhpcy5wYXJlbnQgJiYgdGhpcy5wYXJlbnQub3B0aW9ucykgcGFyZW50Q29uZmlnID0ge1xyXG4gICAgICAuLi50aGlzLnBhcmVudC5vcHRpb25zXHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIC4uLnBhcmVudENvbmZpZyxcclxuICAgICAgLi4udGhpcy5faW5pdGlhbE9wdGlvbnNcclxuICAgIH0gfHwgbnVsbDtcclxuICB9XHJcblxyXG4gIHNldCBvcHRpb25zKG5ld0NvbmZpZzogQWJzdHJhY3RDb250cm9sT3B0aW9ucykge1xyXG5cclxuICAgIHRoaXMuX29wdGlvbnMgPSB7XHJcbiAgICAgIC4uLnRoaXMuX29wdGlvbnMsXHJcbiAgICAgIC4uLm5ld0NvbmZpZ1xyXG4gICAgfTtcclxuXHJcbiAgICB0aGlzLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkoeyBlbWl0RXZlbnQ6IHRydWUgfSk7XHJcblxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQSBjb250cm9sIGlzIGBlbmFibGVkYCBhcyBsb25nIGFzIGl0cyBgc3RhdHVzYCBpcyBub3QgYERJU0FCTEVEYC5cclxuICAgKlxyXG4gICAqIEBzZWUgYHN0YXR1c2BcclxuICAgKlxyXG4gICAqIEByZXR1cm5zIFRydWUgaWYgdGhlIGNvbnRyb2wgaGFzIGFueSBzdGF0dXMgb3RoZXIgdGhhbiAnRElTQUJMRUQnLFxyXG4gICAqIGZhbHNlIGlmIHRoZSBzdGF0dXMgaXMgJ0RJU0FCTEVEJy5cclxuICAgKlxyXG4gICAqL1xyXG4gIGdldCBlbmFibGVkKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuc3RhdHVzICE9PSBESVNBQkxFRDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEEgY29udHJvbCBpcyBgZGlzYWJsZWRgIHdoZW4gaXRzIGBzdGF0dXNgIGlzIGBESVNBQkxFRGAuXHJcbiAgICpcclxuICAgKiBAc2VlIGBzdGF0dXNgXHJcbiAgICpcclxuICAgKiBEaXNhYmxlZCBjb250cm9scyBhcmUgZXhlbXB0IGZyb20gdmFsaWRhdGlvbiBjaGVja3MgYW5kXHJcbiAgICogYXJlIG5vdCBpbmNsdWRlZCBpbiB0aGUgYWdncmVnYXRlIHZhbHVlIG9mIHRoZWlyIGFuY2VzdG9yXHJcbiAgICogY29udHJvbHMuXHJcbiAgICpcclxuICAgKiBAcmV0dXJucyBUcnVlIGlmIHRoZSBjb250cm9sIGlzIGRpc2FibGVkLCBmYWxzZSBvdGhlcndpc2UuXHJcbiAgICovXHJcbiAgZ2V0IGRpc2FibGVkKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuc3RhdHVzID09PSBESVNBQkxFRDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEEgY29udHJvbCBpcyBgdmFsaWRgIHdoZW4gaXRzIGBzdGF0dXNgIGlzIGBWQUxJRGAuXHJcbiAgICpcclxuICAgKiBAc2VlIGBzdGF0dXNgXHJcbiAgICpcclxuICAgKiBAcmV0dXJucyBUcnVlIGlmIHRoZSBjb250cm9sIGhhcyBwYXNzZWQgYWxsIG9mIGl0cyB2YWxpZGF0aW9uIHRlc3RzLFxyXG4gICAqIGZhbHNlIG90aGVyd2lzZS5cclxuICAgKi9cclxuICBnZXQgdmFsaWQoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5zdGF0dXMgPT09IFZBTElEO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQSBjb250cm9sIGlzIGBpbnZhbGlkYCB3aGVuIGl0cyBgc3RhdHVzYCBpcyBgSU5WQUxJRGAuXHJcbiAgICpcclxuICAgKiBAc2VlIGBzdGF0dXNgXHJcbiAgICpcclxuICAgKiBAcmV0dXJucyBUcnVlIGlmIHRoaXMgY29udHJvbCBoYXMgZmFpbGVkIG9uZSBvciBtb3JlIG9mIGl0cyB2YWxpZGF0aW9uIGNoZWNrcyxcclxuICAgKiBmYWxzZSBvdGhlcndpc2UuXHJcbiAgICovXHJcbiAgZ2V0IGludmFsaWQoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5zdGF0dXMgPT09IElOVkFMSUQ7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBBIGNvbnRyb2wgaXMgYHBlbmRpbmdgIHdoZW4gaXRzIGBzdGF0dXNgIGlzIGBQRU5ESU5HYC5cclxuICAgKlxyXG4gICAqIEBzZWUgYHN0YXR1c2BcclxuICAgKlxyXG4gICAqIEByZXR1cm5zIFRydWUgaWYgdGhpcyBjb250cm9sIGlzIGluIHRoZSBwcm9jZXNzIG9mIGNvbmR1Y3RpbmcgYSB2YWxpZGF0aW9uIGNoZWNrLFxyXG4gICAqIGZhbHNlIG90aGVyd2lzZS5cclxuICAgKi9cclxuICBnZXQgcGVuZGluZygpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLnN0YXR1cyA9PT0gUEVORElORztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEEgY29udHJvbCBpcyBgZGlydHlgIGlmIHRoZSB1c2VyIGhhcyBjaGFuZ2VkIHRoZSB2YWx1ZVxyXG4gICAqIGluIHRoZSBVSS5cclxuICAgKlxyXG4gICAqIEByZXR1cm5zIFRydWUgaWYgdGhlIHVzZXIgaGFzIGNoYW5nZWQgdGhlIHZhbHVlIG9mIHRoaXMgY29udHJvbCBpbiB0aGUgVUk7IGNvbXBhcmUgYHByaXN0aW5lYC5cclxuICAgKiBQcm9ncmFtbWF0aWMgY2hhbmdlcyB0byBhIGNvbnRyb2wncyB2YWx1ZSBkbyBub3QgbWFyayBpdCBkaXJ0eS5cclxuICAgKi9cclxuICBnZXQgZGlydHkoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gIXRoaXMucHJpc3RpbmU7XHJcbiAgfVxyXG5cclxuXHJcbiAgLyoqXHJcbiAgICogTWFya3MgdGhlIGNvbnRyb2wgYXMgYHRvdWNoZWRgLiBBIGNvbnRyb2wgaXMgdG91Y2hlZCBieSBmb2N1cyBhbmRcclxuICAgKiBibHVyIGV2ZW50cyB0aGF0IGRvIG5vdCBjaGFuZ2UgdGhlIHZhbHVlOyBjb21wYXJlIGBtYXJrQXNEaXJ0eWA7XHJcbiAgICpcclxuICAgKiAgQHBhcmFtIG9wdHMgb3B0aW9ucyBvcHRpb25zIHRoYXQgZGV0ZXJtaW5lIGhvdyB0aGUgY29udHJvbCBwcm9wYWdhdGVzIGNoYW5nZXNcclxuICAgKiBhbmQgZW1pdHMgZXZlbnRzIGV2ZW50cyBhZnRlciBtYXJraW5nIGlzIGFwcGxpZWQuXHJcbiAgICogKiBgb25seVNlbGZgOiBXaGVuIHRydWUsIG1hcmsgb25seSB0aGlzIGNvbnRyb2wuIFdoZW4gZmFsc2Ugb3Igbm90IHN1cHBsaWVkLFxyXG4gICAqIG1hcmtzIGFsbCBkaXJlY3QgYW5jZXN0b3JzLiBEZWZhdWx0IGlzIGZhbHNlLlxyXG4gICAqL1xyXG4gIG1hcmtBc1RvdWNoZWQoKTogdm9pZCB7XHJcbiAgICAodGhpcyBhcyB7IHRvdWNoZWQ6IGJvb2xlYW4gfSkudG91Y2hlZCA9IHRydWU7XHJcblxyXG4gICAgdGhpcy51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KHsgb25seVNlbGY6IHRydWUgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBNYXJrcyB0aGUgY29udHJvbCBhcyBgdW50b3VjaGVkYC5cclxuICAgKlxyXG4gICAqIElmIHRoZSBjb250cm9sIGhhcyBhbnkgY2hpbGRyZW4sIGFsc28gbWFya3MgYWxsIGNoaWxkcmVuIGFzIGB1bnRvdWNoZWRgXHJcbiAgICogYW5kIHJlY2FsY3VsYXRlcyB0aGUgYHRvdWNoZWRgIHN0YXR1cyBvZiBhbGwgcGFyZW50IGNvbnRyb2xzLlxyXG4gICAqXHJcbiAgICogIEBwYXJhbSBvcHRzIG9wdGlvbnMgb3B0aW9ucyB0aGF0IGRldGVybWluZSBob3cgdGhlIGNvbnRyb2wgcHJvcGFnYXRlcyBjaGFuZ2VzXHJcbiAgICogYW5kIGVtaXRzIGV2ZW50cyBhZnRlciB0aGUgbWFya2luZyBpcyBhcHBsaWVkLlxyXG4gICAqICogYG9ubHlTZWxmYDogV2hlbiB0cnVlLCBtYXJrIG9ubHkgdGhpcyBjb250cm9sLiBXaGVuIGZhbHNlIG9yIG5vdCBzdXBwbGllZCxcclxuICAgKiBtYXJrcyBhbGwgZGlyZWN0IGFuY2VzdG9ycy4gRGVmYXVsdCBpcyBmYWxzZS5cclxuICAgKi9cclxuICBtYXJrQXNVbnRvdWNoZWQob3B0czogeyBvbmx5U2VsZj86IGJvb2xlYW4gfSA9IHt9KTogdm9pZCB7XHJcbiAgICAodGhpcyBhcyB7IHRvdWNoZWQ6IGJvb2xlYW4gfSkudG91Y2hlZCA9IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogTWFya3MgdGhlIGNvbnRyb2wgYXMgYGRpcnR5YC4gQSBjb250cm9sIGJlY29tZXMgZGlydHkgd2hlblxyXG4gICAqIHRoZSBjb250cm9sJ3MgdmFsdWUgaXMgY2hhbmdlZCB0aHJvdWdoIHRoZSBVSTsgY29tcGFyZSBgbWFya0FzVG91Y2hlZGAuXHJcbiAgICpcclxuICAgKiAgQHBhcmFtIG9wdHMgb3B0aW9ucyBvcHRpb25zIHRoYXQgZGV0ZXJtaW5lIGhvdyB0aGUgY29udHJvbCBwcm9wYWdhdGVzIGNoYW5nZXNcclxuICAgKiBhbmQgZW1pdHMgZXZlbnRzIGFmdGVyIG1hcmtpbmcgaXMgYXBwbGllZC5cclxuICAgKiAqIGBvbmx5U2VsZmA6IFdoZW4gdHJ1ZSwgbWFyayBvbmx5IHRoaXMgY29udHJvbC4gV2hlbiBmYWxzZSBvciBub3Qgc3VwcGxpZWQsXHJcbiAgICogbWFya3MgYWxsIGRpcmVjdCBhbmNlc3RvcnMuIERlZmF1bHQgaXMgZmFsc2UuXHJcbiAgICovXHJcbiAgbWFya0FzRGlydHkob3B0czogeyBvbmx5U2VsZj86IGJvb2xlYW4gfSA9IHt9KTogdm9pZCB7XHJcbiAgICAodGhpcyBhcyB7IHByaXN0aW5lOiBib29sZWFuIH0pLnByaXN0aW5lID0gZmFsc2U7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBNYXJrcyB0aGUgY29udHJvbCBhcyBgcHJpc3RpbmVgLlxyXG4gICAqXHJcbiAgICogSWYgdGhlIGNvbnRyb2wgaGFzIGFueSBjaGlsZHJlbiwgbWFya3MgYWxsIGNoaWxkcmVuIGFzIGBwcmlzdGluZWAsXHJcbiAgICogYW5kIHJlY2FsY3VsYXRlcyB0aGUgYHByaXN0aW5lYCBzdGF0dXMgb2YgYWxsIHBhcmVudFxyXG4gICAqIGNvbnRyb2xzLlxyXG4gICAqXHJcbiAgICogIEBwYXJhbSBvcHRzIG9wdGlvbnMgb3B0aW9ucyB0aGF0IGRldGVybWluZSBob3cgdGhlIGNvbnRyb2wgZW1pdHMgZXZlbnRzIGFmdGVyXHJcbiAgICogbWFya2luZyBpcyBhcHBsaWVkLlxyXG4gICAqICogYG9ubHlTZWxmYDogV2hlbiB0cnVlLCBtYXJrIG9ubHkgdGhpcyBjb250cm9sLiBXaGVuIGZhbHNlIG9yIG5vdCBzdXBwbGllZCxcclxuICAgKiBtYXJrcyBhbGwgZGlyZWN0IGFuY2VzdG9ycy4gRGVmYXVsdCBpcyBmYWxzZS4uXHJcbiAgICovXHJcbiAgbWFya0FzUHJpc3RpbmUob3B0czogeyBvbmx5U2VsZj86IGJvb2xlYW4gfSA9IHt9KTogdm9pZCB7XHJcbiAgICAodGhpcyBhcyB7IHByaXN0aW5lOiBib29sZWFuIH0pLnByaXN0aW5lID0gdHJ1ZTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFNldHMgb3B0aW9ucyBvbiBhIGZvcm0gY29udHJvbCAuXHJcbiAgICpcclxuICAgKiBDYWxsaW5nIGBzZXRPcHRpb25zYCBhbHNvIHVwZGF0ZXMgdGhlIHZhbGlkaXR5IG9mIHRoZSBwYXJlbnQgY29udHJvbC5cclxuICAgKlxyXG4gICAqIEB1c2FnZU5vdGVzXHJcbiAgICogIyMjIE1hbnVhbGx5IHNldCB0aGUgb3B0aW9ucyBmb3IgYSBjb250cm9sXHJcbiAgICpcclxuICAgKiBgYGBcclxuICAgKiBjb25zdCBsb2dpbiA9IG5ldyBGb3JtQ29udHJvbCgnc29tZUxvZ2luJyk7XHJcbiAgICogbG9naW4uc2V0RXJyb3JzKHtcclxuICAgKiAgIG5vdFVuaXF1ZTogdHJ1ZVxyXG4gICAqIH0pO1xyXG4gICAqXHJcbiAgICogZXhwZWN0KGxvZ2luLnZhbGlkKS50b0VxdWFsKGZhbHNlKTtcclxuICAgKiBleHBlY3QobG9naW4uZXJyb3JzKS50b0VxdWFsKHsgbm90VW5pcXVlOiB0cnVlIH0pO1xyXG4gICAqXHJcbiAgICogbG9naW4uc2V0VmFsdWUoJ3NvbWVPdGhlckxvZ2luJyk7XHJcbiAgICpcclxuICAgKiBleHBlY3QobG9naW4udmFsaWQpLnRvRXF1YWwodHJ1ZSk7XHJcbiAgICogYGBgXHJcbiAgICovXHJcbiAgc2V0T3B0aW9ucyhvcHRpb25zOiBBYnN0cmFjdENvbnRyb2xPcHRpb25zIHwgbnVsbCwgb3B0czogeyBlbWl0RXZlbnQ/OiBib29sZWFuIH0gPSB7fSk6IHZvaWQge1xyXG4gICAgdGhpcy5faW5pdGlhbE9wdGlvbnMgPSBvcHRpb25zO1xyXG4gICAgdGhpcy5fdXBkYXRlQ29udHJvbHNPcHRpb25zKG9wdHMuZW1pdEV2ZW50ICE9PSBmYWxzZSk7XHJcbiAgfVxyXG5cclxuXHJcbiAgLyoqXHJcbiAgICogU2V0cyBlcnJvcnMgb24gYSBmb3JtIGNvbnRyb2wgd2hlbiBydW5uaW5nIHZhbGlkYXRpb25zIG1hbnVhbGx5LCByYXRoZXIgdGhhbiBhdXRvbWF0aWNhbGx5LlxyXG4gICAqXHJcbiAgICogQ2FsbGluZyBgc2V0RXJyb3JzYCBhbHNvIHVwZGF0ZXMgdGhlIHZhbGlkaXR5IG9mIHRoZSBwYXJlbnQgY29udHJvbC5cclxuICAgKlxyXG4gICAqIEB1c2FnZU5vdGVzXHJcbiAgICogIyMjIE1hbnVhbGx5IHNldCB0aGUgZXJyb3JzIGZvciBhIGNvbnRyb2xcclxuICAgKlxyXG4gICAqIGBgYFxyXG4gICAqIGNvbnN0IGxvZ2luID0gbmV3IEZvcm1Db250cm9sKCdzb21lTG9naW4nKTtcclxuICAgKiBsb2dpbi5zZXRFcnJvcnMoe1xyXG4gICAqICAgbm90VW5pcXVlOiB0cnVlXHJcbiAgICogfSk7XHJcbiAgICpcclxuICAgKiBleHBlY3QobG9naW4udmFsaWQpLnRvRXF1YWwoZmFsc2UpO1xyXG4gICAqIGV4cGVjdChsb2dpbi5lcnJvcnMpLnRvRXF1YWwoeyBub3RVbmlxdWU6IHRydWUgfSk7XHJcbiAgICpcclxuICAgKiBsb2dpbi5zZXRWYWx1ZSgnc29tZU90aGVyTG9naW4nKTtcclxuICAgKlxyXG4gICAqIGV4cGVjdChsb2dpbi52YWxpZCkudG9FcXVhbCh0cnVlKTtcclxuICAgKiBgYGBcclxuICAgKi9cclxuICBzZXRFcnJvcnMoZXJyb3JzOiBKb2lFcnJvcltdIHwgbnVsbCwgb3B0czogeyBlbWl0RXZlbnQ/OiBib29sZWFuIH0gPSB7fSk6IHZvaWQge1xyXG4gICAgKHRoaXMgYXMgeyBlcnJvcnM6IEpvaUVycm9yW10gfCBudWxsIH0pLmVycm9ycyA9IGVycm9ycztcclxuICAgIHRoaXMuX3VwZGF0ZUNvbnRyb2xzRXJyb3JzKG9wdHMuZW1pdEV2ZW50ICE9PSBmYWxzZSk7XHJcbiAgfVxyXG5cclxuICAvL1xyXG4gIC8qKlxyXG4gICAqIEBwYXJhbSBwYXJlbnQgU2V0cyB0aGUgcGFyZW50IG9mIHRoZSBjb250cm9sXHJcbiAgICovXHJcbiAgc2V0UGFyZW50KHBhcmVudDogRm9ybUdyb3VwIHwgRm9ybUFycmF5KTogdm9pZCB7XHJcbiAgICB0aGlzLl9wYXJlbnQgPSBwYXJlbnQ7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAcGFyYW0gcm9vdCBTZXRzIHRoZSByb290IG9mIHRoZSBmb3JtXHJcbiAgICovXHJcbiAgc2V0Um9vdChyb290OiBGb3JtR3JvdXApOiB2b2lkIHtcclxuICAgIHRoaXMuX3Jvb3QgPSByb290O1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlT3B0aW9ucyhvcHRpb25zOiBBYnN0cmFjdENvbnRyb2xPcHRpb25zIHwgbnVsbCwgb3B0czogeyBlbWl0RXZlbnQ/OiBib29sZWFuIH0gPSB7fSk6IHZvaWQge1xyXG4gICAgdGhpcy5faW5pdGlhbE9wdGlvbnMgPSB7XHJcbiAgICAgIC4uLnRoaXMuX2luaXRpYWxPcHRpb25zLFxyXG4gICAgICAuLi5vcHRpb25zXHJcbiAgICB9O1xyXG4gICAgdGhpcy5fdXBkYXRlQ29udHJvbHNPcHRpb25zKG9wdHMuZW1pdEV2ZW50ICE9PSBmYWxzZSk7XHJcbiAgfVxyXG5cclxuXHJcbiAgLyoqXHJcbiAgICogUmVjYWxjdWxhdGVzIHRoZSB2YWx1ZSBhbmQgdmFsaWRhdGlvbiBzdGF0dXMgb2YgdGhlIGNvbnRyb2wuXHJcbiAgICpcclxuICAgKiBCeSBkZWZhdWx0LCBpdCBhbHNvIHVwZGF0ZXMgdGhlIHZhbHVlIGFuZCB2YWxpZGl0eSBvZiBpdHMgYW5jZXN0b3JzLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIG9wdHMgb3B0aW9ucyBvcHRpb25zIGRldGVybWluZSBob3cgdGhlIGNvbnRyb2wgcHJvcGFnYXRlcyBjaGFuZ2VzIGFuZCBlbWl0cyBldmVudHNcclxuICAgKiBhZnRlciB1cGRhdGVzIGFuZCB2YWxpZGl0eSBjaGVja3MgYXJlIGFwcGxpZWQuXHJcbiAgICogKiBgb25seVNlbGZgOiBXaGVuIHRydWUsIG9ubHkgdXBkYXRlIHRoaXMgY29udHJvbC4gV2hlbiBmYWxzZSBvciBub3Qgc3VwcGxpZWQsXHJcbiAgICogdXBkYXRlIGFsbCBkaXJlY3QgYW5jZXN0b3JzLiBEZWZhdWx0IGlzIGZhbHNlLi5cclxuICAgKiAqIGBlbWl0RXZlbnRgOiBXaGVuIHRydWUgb3Igbm90IHN1cHBsaWVkICh0aGUgZGVmYXVsdCksIGVtaXQgdGhlIGB2YWx1ZUNoYW5nZXNgIGV2ZW50XHJcbiAgICogb2JzZXJ2YWJsZXMgZW1pdCBldmVudHMgd2l0aCB0aGUgbGF0ZXN0IHN0YXR1cyBhbmQgdmFsdWUgd2hlbiB0aGUgY29udHJvbCBpcyB1cGRhdGVkLlxyXG4gICAqIFdoZW4gZmFsc2UsIG5vIGV2ZW50cyBhcmUgZW1pdHRlZC5cclxuICAgKi9cclxuICB1cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KG9wdHM6IHsgb25seVNlbGY/OiBib29sZWFuLCBlbWl0RXZlbnQ/OiBib29sZWFuIH0gPSB7fSk6IHZvaWQge1xyXG4gICAgdGhpcy5fc2V0SW5pdGlhbFN0YXR1cygpO1xyXG4gICAgdGhpcy5fdXBkYXRlVmFsdWUoKTtcclxuICAgIGlmICh0aGlzLmVuYWJsZWQpIHtcclxuICAgICAgdGhpcy5fY2FuY2VsRXhpc3RpbmdTdWJzY3JpcHRpb24oKTtcclxuICAgICAgKDx7IGVycm9yczogSm9pRXJyb3JbXSB8IG51bGwgfT50aGlzKS5lcnJvcnMgPSB0aGlzLl9ydW5Kb2lWYWxpZGF0aW9uKCk7XHJcbiAgICAgICg8eyBzdGF0dXM6IHN0cmluZyB9PnRoaXMpLnN0YXR1cyA9IHRoaXMuX2NhbGN1bGF0ZVN0YXR1cygpO1xyXG5cclxuICAgICAgaWYgKHRoaXMuc3RhdHVzID09PSBWQUxJRCB8fCB0aGlzLnN0YXR1cyA9PT0gUEVORElORykge1xyXG4gICAgICAgIHRoaXMucnVuQXN5bmNWYWxpZGF0b3Iob3B0cy5lbWl0RXZlbnQpO1xyXG4gICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBpZiAob3B0cy5lbWl0RXZlbnQgIT09IGZhbHNlKSB7XHJcbiAgICAgICh0aGlzLnZhbHVlQ2hhbmdlcyBhcyBFdmVudEVtaXR0ZXI8YW55PikuZW1pdCh0aGlzLnZhbHVlKTtcclxuICAgICAgKHRoaXMuc3RhdHVzQ2hhbmdlcyBhcyBFdmVudEVtaXR0ZXI8YW55PikuZW1pdCh0aGlzLnN0YXR1cyk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuX3BhcmVudCAmJiAhb3B0cy5vbmx5U2VsZikge1xyXG4gICAgICB0aGlzLl9wYXJlbnQudXBkYXRlVmFsdWVBbmRWYWxpZGl0eShvcHRzKTtcclxuICAgIH1cclxuXHJcbiAgfVxyXG5cclxuXHJcbiAgLyoqIEBpbnRlcm5hbCAqL1xyXG4gIHByaXZhdGUgX2NhbGN1bGF0ZVN0YXR1cygpOiBzdHJpbmcge1xyXG4gICAgaWYgKHRoaXMuX2FsbENvbnRyb2xzRGlzYWJsZWQoKSkgcmV0dXJuIERJU0FCTEVEO1xyXG4gICAgaWYgKHRoaXMuZXJyb3JzKSByZXR1cm4gSU5WQUxJRDtcclxuICAgIGlmICh0aGlzLl9hbnlDb250cm9sc0hhdmVTdGF0dXMoSU5WQUxJRCkpIHJldHVybiBJTlZBTElEO1xyXG4gICAgaWYgKHRoaXMuX2FueUNvbnRyb2xzSGF2ZVN0YXR1cyhQRU5ESU5HKSkgcmV0dXJuIFBFTkRJTkc7XHJcbiAgICByZXR1cm4gVkFMSUQ7XHJcbiAgfVxyXG5cclxuXHJcbiAgcHJpdmF0ZSBfcnVuSm9pVmFsaWRhdGlvbigpIHtcclxuICAgIGlmICh0aGlzLnNjaGVtYSkge1xyXG5cclxuICAgICAgY29uc3QgdmFsaWRhdGVPYmplY3QgPSAodGhpcy5zY2hlbWFbJ190eXBlJ10gIT09ICdvYmplY3QnKSA/IHsgW3RoaXMubmFtZV06IHRoaXMudmFsdWUgfSA6IHRoaXMudmFsdWU7XHJcbiAgICAgIGNvbnN0IHZhbGlkYXRlU2NoZW1hID0gKHRoaXMuc2NoZW1hWydfdHlwZSddICE9PSAnb2JqZWN0JykgPyB7IFt0aGlzLm5hbWVdOiB0aGlzLnNjaGVtYSB9IDogdGhpcy5zY2hlbWE7XHJcblxyXG4gICAgICBjb25zdCByZXN1bHQgPSBKb2kudmFsaWRhdGUodmFsaWRhdGVPYmplY3QsIHZhbGlkYXRlU2NoZW1hLCB7XHJcbiAgICAgICAgYWJvcnRFYXJseTogZmFsc2UsXHJcbiAgICAgICAgc3RyaXBVbmtub3duOiB0cnVlXHJcbiAgICAgIH0pO1xyXG5cclxuXHJcbiAgICAgIGlmICghcmVzdWx0LmVycm9yKSByZXR1cm4gbnVsbDtcclxuXHJcbiAgICAgIHJldHVybiA8Sm9pRXJyb3JbXT5yZXN1bHQuZXJyb3IuZGV0YWlscztcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcblxyXG5cclxuICAvKiogQGludGVybmFsICovXHJcbiAgX3VwZGF0ZUNoaWxkRXJyb3IgPSAoZXJyb3JzOiBKb2lFcnJvcltdKSA9PiB7XHJcbiAgfTtcclxuXHJcblxyXG4gIHByaXZhdGUgX2NhbmNlbEV4aXN0aW5nU3Vic2NyaXB0aW9uKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuX2FzeW5jVmFsaWRhdGlvblN1YnNjcmlwdGlvbikge1xyXG4gICAgICB0aGlzLl9hc3luY1ZhbGlkYXRpb25TdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgX3NldEluaXRpYWxTdGF0dXMoKSB7XHJcbiAgICAodGhpcyBhcyB7IHN0YXR1czogc3RyaW5nIH0pLnN0YXR1cyA9IHRoaXMuX2FsbENvbnRyb2xzRGlzYWJsZWQoKSA/IERJU0FCTEVEIDogVkFMSUQ7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9zdG9yZUluaXRpYWxPcHRpb25zID0gKG9wdGlvbnM6IEFic3RyYWN0Q29udHJvbE9wdGlvbnMgfCBudWxsKSA9PiB7XHJcbiAgICB0aGlzLl9pbml0aWFsT3B0aW9ucyA9IG9wdGlvbnM7XHJcbiAgfTtcclxuXHJcblxyXG4gIC8qKiBAaW50ZXJuYWwgKi9cclxuICBfY29lcmNlVG9Kb2lTY2hlbWEoKSB7XHJcbiAgICAoPHsgc2NoZW1hOiBKb2lTY2hlbWEgfT50aGlzKS5zY2hlbWEgPSAoPEFic3RyYWN0Q29udHJvbE9wdGlvbnM+dGhpcy5vcHRpb25zKS5zY2hlbWE7XHJcbiAgfTtcclxuXHJcblxyXG4gIC8qKiBAaW50ZXJuYWwgKi9cclxuICBfdXBkYXRlVmFsdWUoKTogdm9pZCB7XHJcblxyXG4gIH1cclxuXHJcbiAgLyoqIEBpbnRlcm5hbCAqL1xyXG4gIF9pc05vdEV4Y2x1ZGVkID0gKGM6IEFic3RyYWN0Q29udHJvbCk6IEJvb2xlYW4gPT4ge1xyXG5cclxuICAgIHJldHVybiAhXy5nZXQoYy5vcHRpb25zLCAnZXhjbHVkZWQnKSAmJiAhKF8uaGFzKHRoaXMub3B0aW9ucywgWydudWxsRXhjbHVzaW9uJ10pICYmICFjLnZhbHVlKTtcclxuXHJcbiAgfTtcclxuXHJcbiAgLyoqIEBpbnRlcm5hbCAqL1xyXG4gIF9pbml0T2JzZXJ2YWJsZXMoKSB7XHJcbiAgICAodGhpcyBhcyB7IHZhbHVlQ2hhbmdlczogT2JzZXJ2YWJsZTxhbnk+IH0pLnZhbHVlQ2hhbmdlcyA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICAgICh0aGlzIGFzIHsgc3RhdHVzQ2hhbmdlczogT2JzZXJ2YWJsZTxhbnk+IH0pLnN0YXR1c0NoYW5nZXMgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgfVxyXG5cclxuICAvKiogQGludGVybmFsICovXHJcbiAgX2luaXRWYWxpZGF0b3JzKCkge1xyXG4gICAgKDxBYnN0cmFjdENvbnRyb2w+dGhpcykucnVuQXN5bmNWYWxpZGF0b3IgPSBfLmRlYm91bmNlKChlbWl0RXZlbnQ/OiBib29sZWFuKSA9PiB7XHJcblxyXG4gICAgICBpZiAodGhpcy5hc3luY1ZhbGlkYXRvcikge1xyXG4gICAgICAgICh0aGlzIGFzIHsgc3RhdHVzOiBzdHJpbmcgfSkuc3RhdHVzID0gUEVORElORztcclxuICAgICAgICBjb25zdCBvYnMgPSB0aGlzLmFzeW5jVmFsaWRhdG9yKHRoaXMpO1xyXG4gICAgICAgIC8vIHRoaXMuX2FzeW5jVmFsaWRhdGlvblN1YnNjcmlwdGlvbiA9XHJcbiAgICAgICAgLy8gb2JzLnN1YnNjcmliZSgoZXJyb3JzOiBKb2lFcnJvcltdIHwgbnVsbCkgPT4ge1xyXG4gICAgICAgIC8vICAgaWYgKCh0aGlzLnRvdWNoZWQgfHwgdGhpcy5kaXJ0eSkgJiYgdGhpcy52YWx1ZSkge1xyXG4gICAgICAgIC8vICAgICAodGhpcyBhcyB7IHN0YXR1czogc3RyaW5nIH0pLnN0YXR1cyA9IElOVkFMSUQ7XHJcbiAgICAgICAgLy8gICAgIHRoaXMuc2V0RXJyb3JzKGVycm9ycywgeyBlbWl0RXZlbnQgfSk7XHJcbiAgICAgICAgLy8gICB9XHJcbiAgICAgICAgLy8gfSk7XHJcbiAgICAgIH1cclxuICAgIH0sIDUwMCk7XHJcbiAgfVxyXG5cclxuICAvKiogQGludGVybmFsICovXHJcbiAgX3VwZGF0ZUNvbnRyb2xzT3B0aW9ucyhlbWl0RXZlbnQ6IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgICh0aGlzIGFzIHsgc3RhdHVzOiBzdHJpbmcgfSkuc3RhdHVzID0gdGhpcy5fY2FsY3VsYXRlU3RhdHVzKCk7XHJcblxyXG4gICAgaWYgKGVtaXRFdmVudCkge1xyXG4gICAgICAodGhpcy5zdGF0dXNDaGFuZ2VzIGFzIEV2ZW50RW1pdHRlcjxzdHJpbmc+KS5lbWl0KHRoaXMuc3RhdHVzKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKiBAaW50ZXJuYWwgKi9cclxuICBfdXBkYXRlQ29udHJvbHNFcnJvcnMoZW1pdEV2ZW50OiBib29sZWFuKTogdm9pZCB7XHJcbiAgICAodGhpcyBhcyB7IHN0YXR1czogc3RyaW5nIH0pLnN0YXR1cyA9IHRoaXMuX2NhbGN1bGF0ZVN0YXR1cygpO1xyXG5cclxuICAgIGlmIChlbWl0RXZlbnQpIHtcclxuICAgICAgKHRoaXMuc3RhdHVzQ2hhbmdlcyBhcyBFdmVudEVtaXR0ZXI8c3RyaW5nPikuZW1pdCh0aGlzLnN0YXR1cyk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuX3BhcmVudCkge1xyXG4gICAgICB0aGlzLl9wYXJlbnQuX3VwZGF0ZUNvbnRyb2xzRXJyb3JzKGVtaXRFdmVudCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuXHJcbiAgLyoqXHJcbiAgICogU2V0cyB0aGUgdmFsdWUgb2YgdGhlIGNvbnRyb2wuIEFic3RyYWN0IG1ldGhvZCAoaW1wbGVtZW50ZWQgaW4gc3ViLWNsYXNzZXMpLlxyXG4gICAqL1xyXG4gIGFic3RyYWN0IHNldFZhbHVlKHZhbHVlOiBhbnksIG9wdGlvbnM/OiBPYmplY3QpOiB2b2lkO1xyXG5cclxuICAvKipcclxuICAgKiBSZXNldHMgdGhlIGNvbnRyb2wuIEFic3RyYWN0IG1ldGhvZCAoaW1wbGVtZW50ZWQgaW4gc3ViLWNsYXNzZXMpLlxyXG4gICAqL1xyXG4gIGFic3RyYWN0IHJlc2V0KHZhbHVlPzogYW55LCBvcHRpb25zPzogT2JqZWN0KTogdm9pZDtcclxuXHJcbiAgLyoqXHJcbiAgICogQ2xlYXIgdGhlIGNvbnRyb2wuIEFic3RyYWN0IG1ldGhvZCAoaW1wbGVtZW50ZWQgaW4gc3ViLWNsYXNzZXMpLlxyXG4gICAqL1xyXG4gIGFic3RyYWN0IGNsZWFyKG9wdGlvbnM/OiBPYmplY3QpOiB2b2lkO1xyXG5cclxuICAvKiogQGludGVybmFsICovXHJcbiAgYWJzdHJhY3QgX2FsbENvbnRyb2xzRGlzYWJsZWQoKTogYm9vbGVhbjtcclxuXHJcbiAgLyoqIEBpbnRlcm5hbCAqL1xyXG4gIGFic3RyYWN0IF9hbnlDb250cm9sc0hhdmVTdGF0dXMoc3RhdHVzOiBzdHJpbmcpOiBib29sZWFuXHJcbn1cclxuXHJcblxyXG4vKipcclxuICogUmVwb3J0cyB0aGF0IGEgRm9ybUNvbnRyb2wgaXMgdmFsaWQsIG1lYW5pbmcgdGhhdCBubyBlcnJvcnMgZXhpc3QgaW4gdGhlIGlucHV0IHZhbHVlLlxyXG4gKlxyXG4gKiBAc2VlIGBzdGF0dXNgXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgVkFMSUQgPSAnVkFMSUQnO1xyXG5cclxuLyoqXHJcbiAqIFJlcG9ydHMgdGhhdCBhIEZvcm1Db250cm9sIGlzIGludmFsaWQsIG1lYW5pbmcgdGhhdCBhbiBlcnJvciBleGlzdHMgaW4gdGhlIGlucHV0IHZhbHVlLlxyXG4gKlxyXG4gKiBAc2VlIGBzdGF0dXNgXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgSU5WQUxJRCA9ICdJTlZBTElEJztcclxuXHJcbi8qKlxyXG4gKiBSZXBvcnRzIHRoYXQgYSBGb3JtQ29udHJvbCBpcyBwZW5kaW5nLCBtZWFuaW5nIHRoYXQgdGhhdCBhc3luYyB2YWxpZGF0aW9uIGlzIG9jY3VycmluZyBhbmRcclxuICogZXJyb3JzIGFyZSBub3QgeWV0IGF2YWlsYWJsZSBmb3IgdGhlIGlucHV0IHZhbHVlLlxyXG4gKlxyXG4gKiBAc2VlIGBtYXJrQXNQZW5kaW5nYFxyXG4gKiBAc2VlIGBzdGF0dXNgXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgUEVORElORyA9ICdQRU5ESU5HJztcclxuXHJcbi8qKlxyXG4gKiBSZXBvcnRzIHRoYXQgYSBGb3JtQ29udHJvbCBpcyBkaXNhYmxlZCwgbWVhbmluZyB0aGF0IHRoZSBjb250cm9sIGlzIGV4ZW1wdCBmcm9tIGFuY2VzdG9yXHJcbiAqIGNhbGN1bGF0aW9ucyBvZiB2YWxpZGl0eSBvciB2YWx1ZS5cclxuICpcclxuICogQHNlZSBgbWFya0FzRGlzYWJsZWRgXHJcbiAqIEBzZWUgYHN0YXR1c2BcclxuICovXHJcbmV4cG9ydCBjb25zdCBESVNBQkxFRCA9ICdESVNBQkxFRCc7XHJcblxyXG5leHBvcnQgdHlwZSBGb3JtSG9va3MgPSAnY2hhbmdlJyB8ICdibHVyJyB8ICdzdWJtaXQnO1xyXG4iXX0=