"use strict";
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var FormGroup_1 = require("../models/FormGroup");
var FormControl_1 = require("../models/FormControl");
var FormArray_1 = require("../models/FormArray");
var lodash_1 = tslib_1.__importDefault(require("lodash"));
var i0 = tslib_1.__importStar(require("@angular/core"));
var IonarFormBuilder = /** @class */ (function () {
    function IonarFormBuilder() {
        var _this = this;
        /**
         * \@description
         * Construct a new `FormGroup` instance.
         *
         * @param state A collection of child controls. The key for each child is the name
         * under which it is registered.
         *
         * @param options options options object for the `FormGroup`. The object can
         * have two shapes:
         *
         * 1) `AbstractControlOptions` object (preferred), which consists of:
         * * `validators`: A synchronous validator function, or an array of validator functions
         * * `asyncValidators`: A single async validator or array of async validator functions
         * * `updateOn`: The event upon which the control should be updated (options: 'change' | 'blur' |
         * submit')
         *
         * 2) Legacy options object, which consists of:
         * * `validator`: A synchronous validator function, or an array of validator functions
         * * `asyncValidator`: A single async validator or array of async validator functions
         *
         */
        this.group = function (state, options) {
            /** @type {?} */
            var controls = (/** @type {?} */ (_this._reduceControls(state)));
            return new FormGroup_1.FormGroup(controls, options);
        };
        /**
         * Constructs a new `FormArray` from the given array of configurations,
         * validators and options.
         *
         * @param controlsConfig An array of child controls or control configs. Each
         * child control is given an index when it is registered.
         *
         * @param validatorOrOpts A synchronous validator function, or an array of
         * such functions, or an `AbstractControlOptions` object that contains
         * validation functions and a validation trigger.
         *
         * @param asyncValidator A single async validator or array of async validator
         * functions.
         */
        this.array = function (state, options) {
            /** @type {?} */
            var controls = (/** @type {?} */ (_this._reduceControls(state)));
            return new FormArray_1.FormArray(controls, options);
        };
    }
    /**
     * @description
     * Construct a new `FormControl` with the given state, validators and options.
     *
     * @param state A collection of child controls. The key for each child is the name
     * under which it is registered.
     *
     * @param options options options object for the `FormGroup`. The object can
     * have two shapes:
     *
     *
     * @usageNotes
     *
     * ### Initialize a control as disabled
     *
     * The following example returns a control with an initial value in a disabled state.
     *
     * <code-example path="forms/ts/formBuilder/form_builder_example.ts"
     *   linenums="false" region="disabled-control">
     * </code-example>
     */
    /**
     * \@description
     * Construct a new `FormControl` with the given state, validators and options.
     *
     * \@usageNotes
     *
     * ### Initialize a control as disabled
     *
     * The following example returns a control with an initial value in a disabled state.
     *
     * <code-example path="forms/ts/formBuilder/form_builder_example.ts"
     *   linenums="false" region="disabled-control">
     * </code-example>
     * @param {?} state A collection of child controls. The key for each child is the name
     * under which it is registered.
     *
     * @return {?}
     */
    IonarFormBuilder.prototype.control = /**
     * \@description
     * Construct a new `FormControl` with the given state, validators and options.
     *
     * \@usageNotes
     *
     * ### Initialize a control as disabled
     *
     * The following example returns a control with an initial value in a disabled state.
     *
     * <code-example path="forms/ts/formBuilder/form_builder_example.ts"
     *   linenums="false" region="disabled-control">
     * </code-example>
     * @param {?} state A collection of child controls. The key for each child is the name
     * under which it is registered.
     *
     * @return {?}
     */
    function (state) {
        return new FormControl_1.FormControl(state);
    };
    /** @internal */
    /**
     * \@internal
     * @param {?} controlsConfig
     * @return {?}
     */
    IonarFormBuilder.prototype._reduceControls = /**
     * \@internal
     * @param {?} controlsConfig
     * @return {?}
     */
    function (controlsConfig) {
        var _this = this;
        /** @type {?} */
        var controls;
        if (lodash_1.default.isPlainObject(controlsConfig)) {
            controls = {};
            lodash_1.default.forOwn(controlsConfig, function (c, name) {
                ((/** @type {?} */ (controls)))[name] = _this._createControl(c);
            });
        }
        else {
            controls = [];
            lodash_1.default.each(controlsConfig, function (c) {
                ((/** @type {?} */ (controls))).push((/** @type {?} */ (_this._createControl(c))));
            });
        }
        return controls;
    };
    /** @internal */
    /**
     * \@internal
     * @param {?} controlConfig
     * @return {?}
     */
    IonarFormBuilder.prototype._createControl = /**
     * \@internal
     * @param {?} controlConfig
     * @return {?}
     */
    function (controlConfig) {
        if (controlConfig instanceof FormControl_1.FormControl || controlConfig instanceof FormGroup_1.FormGroup ||
            controlConfig instanceof FormArray_1.FormArray) {
            return controlConfig;
        }
        else {
            return this.control(controlConfig);
        }
    };
    IonarFormBuilder.decorators = [
        { type: core_1.Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */ IonarFormBuilder.ngInjectableDef = i0.defineInjectable({ factory: function IonarFormBuilder_Factory() { return new IonarFormBuilder(); }, token: IonarFormBuilder, providedIn: "root" });
    return IonarFormBuilder;
}());
exports.IonarFormBuilder = IonarFormBuilder;
if (false) {
    /**
     * \@description
     * Construct a new `FormGroup` instance.
     *
     * \@param state A collection of child controls. The key for each child is the name
     * under which it is registered.
     *
     * \@param options options options object for the `FormGroup`. The object can
     * have two shapes:
     *
     * 1) `AbstractControlOptions` object (preferred), which consists of:
     * * `validators`: A synchronous validator function, or an array of validator functions
     * * `asyncValidators`: A single async validator or array of async validator functions
     * * `updateOn`: The event upon which the control should be updated (options: 'change' | 'blur' |
     * submit')
     *
     * 2) Legacy options object, which consists of:
     * * `validator`: A synchronous validator function, or an array of validator functions
     * * `asyncValidator`: A single async validator or array of async validator functions
     *
     * @type {?}
     */
    IonarFormBuilder.prototype.group;
    /**
     * Constructs a new `FormArray` from the given array of configurations,
     * validators and options.
     *
     * \@param controlsConfig An array of child controls or control configs. Each
     * child control is given an index when it is registered.
     *
     * \@param validatorOrOpts A synchronous validator function, or an array of
     * such functions, or an `AbstractControlOptions` object that contains
     * validation functions and a validation trigger.
     *
     * \@param asyncValidator A single async validator or array of async validator
     * functions.
     * @type {?}
     */
    IonarFormBuilder.prototype.array;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybV9idWlsZGVyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AaW9uYXIvZm9ybS8iLCJzb3VyY2VzIjpbImNvcmUvcHJvdmlkZXJzL2Zvcm1fYnVpbGRlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQSxzQ0FBMkM7QUFFM0MsaURBQWdEO0FBQ2hELHFEQUFvRDtBQUNwRCxpREFBZ0Q7QUFFaEQsMERBQXVCOztBQUd2QjtJQUFBO1FBQUEsaUJBNkdDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1FBbEZDLFVBQUssR0FBRyxVQUFDLEtBQXFCLEVBQUUsT0FBdUM7O2dCQUMvRCxRQUFRLEdBQUcsbUJBQWdCLEtBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLEVBQUE7WUFDNUQsT0FBTyxJQUFJLHFCQUFTLENBQUMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQzFDLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7O1FBeUNGLFVBQUssR0FBRyxVQUNOLEtBQTBDLEVBQUUsT0FBdUM7O2dCQUc3RSxRQUFRLEdBQUcsbUJBQWdCLEtBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLEVBQUE7WUFDNUQsT0FBTyxJQUFJLHFCQUFTLENBQUMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQzFDLENBQUMsQ0FBQztLQWdDSDtJQTdFQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7T0FvQkc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFDSCxrQ0FBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBQVAsVUFBUSxLQUF1QjtRQUM3QixPQUFPLElBQUkseUJBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBd0JELGdCQUFnQjs7Ozs7O0lBQ2hCLDBDQUFlOzs7OztJQUFmLFVBQWdCLGNBQW9FO1FBQXBGLGlCQWVDOztZQWRLLFFBQXlDO1FBRTdDLElBQUksZ0JBQUMsQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUFDLEVBQUU7WUFDbkMsUUFBUSxHQUFHLEVBQUUsQ0FBQztZQUNkLGdCQUFDLENBQUMsTUFBTSxDQUFDLGNBQWMsRUFBRSxVQUFDLENBQXFDLEVBQUUsSUFBWTtnQkFDM0UsQ0FBQyxtQkFBZ0IsUUFBUSxFQUFBLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxLQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzVELENBQUMsQ0FBQyxDQUFDO1NBQ0o7YUFBTTtZQUNMLFFBQVEsR0FBRyxFQUFFLENBQUM7WUFDZCxnQkFBQyxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsVUFBQyxDQUFxQztnQkFDM0QsQ0FBQyxtQkFBZ0IsUUFBUSxFQUFBLENBQUMsQ0FBQyxJQUFJLENBQUMsbUJBQWlCLEtBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLEVBQUEsQ0FBQyxDQUFDO1lBQzNFLENBQUMsQ0FBQyxDQUFDO1NBQ0o7UUFDRCxPQUFPLFFBQVEsQ0FBQztJQUNsQixDQUFDO0lBRUQsZ0JBQWdCOzs7Ozs7SUFDaEIseUNBQWM7Ozs7O0lBQWQsVUFBZSxhQUFrQjtRQUMvQixJQUFJLGFBQWEsWUFBWSx5QkFBVyxJQUFJLGFBQWEsWUFBWSxxQkFBUztZQUM1RSxhQUFhLFlBQVkscUJBQVMsRUFBRTtZQUNwQyxPQUFPLGFBQWEsQ0FBQztTQUV0QjthQUFNO1lBRUwsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1NBQ3BDO0lBQ0gsQ0FBQzs7Z0JBM0dGLGlCQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7MkJBWEQ7Q0FzSEMsQUE3R0QsSUE2R0M7QUF6R1ksNENBQWdCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUF1QjNCLGlDQUdFOzs7Ozs7Ozs7Ozs7Ozs7O0lBeUNGLGlDQU1FIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBBYnN0cmFjdENvbnRyb2xPcHRpb25zLCBGb3JtQXJyYXlTdGF0ZSwgRm9ybUNvbnRyb2xTdGF0ZSwgRm9ybUdyb3VwU3RhdGUgfSBmcm9tICcuLi9pbnRlcmZhY2VzL0Zvcm0nO1xyXG5pbXBvcnQgeyBGb3JtR3JvdXAgfSBmcm9tICcuLi9tb2RlbHMvRm9ybUdyb3VwJztcclxuaW1wb3J0IHsgRm9ybUNvbnRyb2wgfSBmcm9tICcuLi9tb2RlbHMvRm9ybUNvbnRyb2wnO1xyXG5pbXBvcnQgeyBGb3JtQXJyYXkgfSBmcm9tICcuLi9tb2RlbHMvRm9ybUFycmF5JztcclxuaW1wb3J0IHsgQWJzdHJhY3RDb250cm9sIH0gZnJvbSAnLi4vbW9kZWxzL0Fic3RyYWN0Q29udHJvbCc7XHJcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XHJcblxyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIElvbmFyRm9ybUJ1aWxkZXIge1xyXG5cclxuICAvKipcclxuICAgKiBAZGVzY3JpcHRpb25cclxuICAgKiBDb25zdHJ1Y3QgYSBuZXcgYEZvcm1Hcm91cGAgaW5zdGFuY2UuXHJcbiAgICpcclxuICAgKiBAcGFyYW0gc3RhdGUgQSBjb2xsZWN0aW9uIG9mIGNoaWxkIGNvbnRyb2xzLiBUaGUga2V5IGZvciBlYWNoIGNoaWxkIGlzIHRoZSBuYW1lXHJcbiAgICogdW5kZXIgd2hpY2ggaXQgaXMgcmVnaXN0ZXJlZC5cclxuICAgKlxyXG4gICAqIEBwYXJhbSBvcHRpb25zIG9wdGlvbnMgb3B0aW9ucyBvYmplY3QgZm9yIHRoZSBgRm9ybUdyb3VwYC4gVGhlIG9iamVjdCBjYW5cclxuICAgKiBoYXZlIHR3byBzaGFwZXM6XHJcbiAgICpcclxuICAgKiAxKSBgQWJzdHJhY3RDb250cm9sT3B0aW9uc2Agb2JqZWN0IChwcmVmZXJyZWQpLCB3aGljaCBjb25zaXN0cyBvZjpcclxuICAgKiAqIGB2YWxpZGF0b3JzYDogQSBzeW5jaHJvbm91cyB2YWxpZGF0b3IgZnVuY3Rpb24sIG9yIGFuIGFycmF5IG9mIHZhbGlkYXRvciBmdW5jdGlvbnNcclxuICAgKiAqIGBhc3luY1ZhbGlkYXRvcnNgOiBBIHNpbmdsZSBhc3luYyB2YWxpZGF0b3Igb3IgYXJyYXkgb2YgYXN5bmMgdmFsaWRhdG9yIGZ1bmN0aW9uc1xyXG4gICAqICogYHVwZGF0ZU9uYDogVGhlIGV2ZW50IHVwb24gd2hpY2ggdGhlIGNvbnRyb2wgc2hvdWxkIGJlIHVwZGF0ZWQgKG9wdGlvbnM6ICdjaGFuZ2UnIHwgJ2JsdXInIHxcclxuICAgKiBzdWJtaXQnKVxyXG4gICAqXHJcbiAgICogMikgTGVnYWN5IG9wdGlvbnMgb2JqZWN0LCB3aGljaCBjb25zaXN0cyBvZjpcclxuICAgKiAqIGB2YWxpZGF0b3JgOiBBIHN5bmNocm9ub3VzIHZhbGlkYXRvciBmdW5jdGlvbiwgb3IgYW4gYXJyYXkgb2YgdmFsaWRhdG9yIGZ1bmN0aW9uc1xyXG4gICAqICogYGFzeW5jVmFsaWRhdG9yYDogQSBzaW5nbGUgYXN5bmMgdmFsaWRhdG9yIG9yIGFycmF5IG9mIGFzeW5jIHZhbGlkYXRvciBmdW5jdGlvbnNcclxuICAgKlxyXG4gICAqL1xyXG4gIGdyb3VwID0gKHN0YXRlOiBGb3JtR3JvdXBTdGF0ZSwgb3B0aW9ucz86IEFic3RyYWN0Q29udHJvbE9wdGlvbnMgfCBudWxsKTogRm9ybUdyb3VwID0+IHtcclxuICAgIGNvbnN0IGNvbnRyb2xzID0gPEZvcm1Hcm91cFN0YXRlPnRoaXMuX3JlZHVjZUNvbnRyb2xzKHN0YXRlKTtcclxuICAgIHJldHVybiBuZXcgRm9ybUdyb3VwKGNvbnRyb2xzLCBvcHRpb25zKTtcclxuICB9O1xyXG5cclxuICAvKipcclxuICAgKiBAZGVzY3JpcHRpb25cclxuICAgKiBDb25zdHJ1Y3QgYSBuZXcgYEZvcm1Db250cm9sYCB3aXRoIHRoZSBnaXZlbiBzdGF0ZSwgdmFsaWRhdG9ycyBhbmQgb3B0aW9ucy5cclxuICAgKlxyXG4gICAqIEBwYXJhbSBzdGF0ZSBBIGNvbGxlY3Rpb24gb2YgY2hpbGQgY29udHJvbHMuIFRoZSBrZXkgZm9yIGVhY2ggY2hpbGQgaXMgdGhlIG5hbWVcclxuICAgKiB1bmRlciB3aGljaCBpdCBpcyByZWdpc3RlcmVkLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIG9wdGlvbnMgb3B0aW9ucyBvcHRpb25zIG9iamVjdCBmb3IgdGhlIGBGb3JtR3JvdXBgLiBUaGUgb2JqZWN0IGNhblxyXG4gICAqIGhhdmUgdHdvIHNoYXBlczpcclxuICAgKlxyXG4gICAqXHJcbiAgICogQHVzYWdlTm90ZXNcclxuICAgKlxyXG4gICAqICMjIyBJbml0aWFsaXplIGEgY29udHJvbCBhcyBkaXNhYmxlZFxyXG4gICAqXHJcbiAgICogVGhlIGZvbGxvd2luZyBleGFtcGxlIHJldHVybnMgYSBjb250cm9sIHdpdGggYW4gaW5pdGlhbCB2YWx1ZSBpbiBhIGRpc2FibGVkIHN0YXRlLlxyXG4gICAqXHJcbiAgICogPGNvZGUtZXhhbXBsZSBwYXRoPVwiZm9ybXMvdHMvZm9ybUJ1aWxkZXIvZm9ybV9idWlsZGVyX2V4YW1wbGUudHNcIlxyXG4gICAqICAgbGluZW51bXM9XCJmYWxzZVwiIHJlZ2lvbj1cImRpc2FibGVkLWNvbnRyb2xcIj5cclxuICAgKiA8L2NvZGUtZXhhbXBsZT5cclxuICAgKi9cclxuICBjb250cm9sKHN0YXRlOiBGb3JtQ29udHJvbFN0YXRlKTogRm9ybUNvbnRyb2wge1xyXG4gICAgcmV0dXJuIG5ldyBGb3JtQ29udHJvbChzdGF0ZSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDb25zdHJ1Y3RzIGEgbmV3IGBGb3JtQXJyYXlgIGZyb20gdGhlIGdpdmVuIGFycmF5IG9mIGNvbmZpZ3VyYXRpb25zLFxyXG4gICAqIHZhbGlkYXRvcnMgYW5kIG9wdGlvbnMuXHJcbiAgICpcclxuICAgKiBAcGFyYW0gY29udHJvbHNDb25maWcgQW4gYXJyYXkgb2YgY2hpbGQgY29udHJvbHMgb3IgY29udHJvbCBjb25maWdzLiBFYWNoXHJcbiAgICogY2hpbGQgY29udHJvbCBpcyBnaXZlbiBhbiBpbmRleCB3aGVuIGl0IGlzIHJlZ2lzdGVyZWQuXHJcbiAgICpcclxuICAgKiBAcGFyYW0gdmFsaWRhdG9yT3JPcHRzIEEgc3luY2hyb25vdXMgdmFsaWRhdG9yIGZ1bmN0aW9uLCBvciBhbiBhcnJheSBvZlxyXG4gICAqIHN1Y2ggZnVuY3Rpb25zLCBvciBhbiBgQWJzdHJhY3RDb250cm9sT3B0aW9uc2Agb2JqZWN0IHRoYXQgY29udGFpbnNcclxuICAgKiB2YWxpZGF0aW9uIGZ1bmN0aW9ucyBhbmQgYSB2YWxpZGF0aW9uIHRyaWdnZXIuXHJcbiAgICpcclxuICAgKiBAcGFyYW0gYXN5bmNWYWxpZGF0b3IgQSBzaW5nbGUgYXN5bmMgdmFsaWRhdG9yIG9yIGFycmF5IG9mIGFzeW5jIHZhbGlkYXRvclxyXG4gICAqIGZ1bmN0aW9ucy5cclxuICAgKi9cclxuICBhcnJheSA9IChcclxuICAgIHN0YXRlOiBGb3JtQXJyYXlTdGF0ZSB8IEZvcm1Db250cm9sU3RhdGVbXSwgb3B0aW9ucz86IEFic3RyYWN0Q29udHJvbE9wdGlvbnMgfCBudWxsXHJcbiAgKTogRm9ybUFycmF5ID0+IHtcclxuXHJcbiAgICBjb25zdCBjb250cm9scyA9IDxGb3JtQXJyYXlTdGF0ZT50aGlzLl9yZWR1Y2VDb250cm9scyhzdGF0ZSk7XHJcbiAgICByZXR1cm4gbmV3IEZvcm1BcnJheShjb250cm9scywgb3B0aW9ucyk7XHJcbiAgfTtcclxuXHJcbiAgLyoqIEBpbnRlcm5hbCAqL1xyXG4gIF9yZWR1Y2VDb250cm9scyhjb250cm9sc0NvbmZpZzogRm9ybUdyb3VwU3RhdGUgfCBGb3JtQXJyYXlTdGF0ZSB8IEZvcm1Db250cm9sU3RhdGVbXSk6IEZvcm1Hcm91cFN0YXRlIHwgRm9ybUFycmF5U3RhdGUge1xyXG4gICAgbGV0IGNvbnRyb2xzOiBGb3JtR3JvdXBTdGF0ZSB8IEZvcm1BcnJheVN0YXRlO1xyXG5cclxuICAgIGlmIChfLmlzUGxhaW5PYmplY3QoY29udHJvbHNDb25maWcpKSB7XHJcbiAgICAgIGNvbnRyb2xzID0ge307XHJcbiAgICAgIF8uZm9yT3duKGNvbnRyb2xzQ29uZmlnLCAoYzogQWJzdHJhY3RDb250cm9sIHwgRm9ybUNvbnRyb2xTdGF0ZSwgbmFtZTogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgKDxGb3JtR3JvdXBTdGF0ZT5jb250cm9scylbbmFtZV0gPSB0aGlzLl9jcmVhdGVDb250cm9sKGMpO1xyXG4gICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnRyb2xzID0gW107XHJcbiAgICAgIF8uZWFjaChjb250cm9sc0NvbmZpZywgKGM6IEFic3RyYWN0Q29udHJvbCB8IEZvcm1Db250cm9sU3RhdGUpID0+IHtcclxuICAgICAgICAoPEZvcm1BcnJheVN0YXRlPmNvbnRyb2xzKS5wdXNoKDxBYnN0cmFjdENvbnRyb2w+dGhpcy5fY3JlYXRlQ29udHJvbChjKSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGNvbnRyb2xzO1xyXG4gIH1cclxuXHJcbiAgLyoqIEBpbnRlcm5hbCAqL1xyXG4gIF9jcmVhdGVDb250cm9sKGNvbnRyb2xDb25maWc6IGFueSk6IEFic3RyYWN0Q29udHJvbCB7XHJcbiAgICBpZiAoY29udHJvbENvbmZpZyBpbnN0YW5jZW9mIEZvcm1Db250cm9sIHx8IGNvbnRyb2xDb25maWcgaW5zdGFuY2VvZiBGb3JtR3JvdXAgfHxcclxuICAgICAgY29udHJvbENvbmZpZyBpbnN0YW5jZW9mIEZvcm1BcnJheSkge1xyXG4gICAgICByZXR1cm4gY29udHJvbENvbmZpZztcclxuXHJcbiAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgcmV0dXJuIHRoaXMuY29udHJvbChjb250cm9sQ29uZmlnKTtcclxuICAgIH1cclxuICB9XHJcblxyXG59XHJcblxyXG5cclxuIl19