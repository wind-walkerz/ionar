/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { FormGroup } from '../models/FormGroup';
import { FormControl } from '../models/FormControl';
import { FormArray } from '../models/FormArray';
import _ from 'lodash';
import * as i0 from "@angular/core";
export class IonarFormBuilder {
    constructor() {
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
        this.group = (state, options) => {
            /** @type {?} */
            const controls = (/** @type {?} */ (this._reduceControls(state)));
            return new FormGroup(controls, options);
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
        this.array = (state, options) => {
            /** @type {?} */
            const controls = (/** @type {?} */ (this._reduceControls(state)));
            return new FormArray(controls, options);
        };
    }
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
    control(state) {
        return new FormControl(state);
    }
    /**
     * \@internal
     * @param {?} controlsConfig
     * @return {?}
     */
    _reduceControls(controlsConfig) {
        /** @type {?} */
        let controls;
        if (_.isPlainObject(controlsConfig)) {
            controls = {};
            _.forOwn(controlsConfig, (c, name) => {
                ((/** @type {?} */ (controls)))[name] = this._createControl(c);
            });
        }
        else {
            controls = [];
            _.each(controlsConfig, (c) => {
                ((/** @type {?} */ (controls))).push((/** @type {?} */ (this._createControl(c))));
            });
        }
        return controls;
    }
    /**
     * \@internal
     * @param {?} controlConfig
     * @return {?}
     */
    _createControl(controlConfig) {
        if (controlConfig instanceof FormControl || controlConfig instanceof FormGroup ||
            controlConfig instanceof FormArray) {
            return controlConfig;
        }
        else {
            return this.control(controlConfig);
        }
    }
}
IonarFormBuilder.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */ IonarFormBuilder.ngInjectableDef = i0.defineInjectable({ factory: function IonarFormBuilder_Factory() { return new IonarFormBuilder(); }, token: IonarFormBuilder, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybV9idWlsZGVyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AaW9uYXIvZm9ybS8iLCJzb3VyY2VzIjpbImNvcmUvcHJvdmlkZXJzL2Zvcm1fYnVpbGRlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNoRCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDcEQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBRWhELE9BQU8sQ0FBQyxNQUFNLFFBQVEsQ0FBQzs7QUFPdkIsTUFBTSxPQUFPLGdCQUFnQjtJQUo3Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztRQTJCRSxVQUFLLEdBQUcsQ0FBQyxLQUFxQixFQUFFLE9BQXVDLEVBQWEsRUFBRTs7a0JBQzlFLFFBQVEsR0FBRyxtQkFBZ0IsSUFBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsRUFBQTtZQUM1RCxPQUFPLElBQUksU0FBUyxDQUFDLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQztRQUMxQyxDQUFDLENBQUM7Ozs7Ozs7Ozs7Ozs7OztRQXlDRixVQUFLLEdBQUcsQ0FDTixLQUEwQyxFQUFFLE9BQXVDLEVBQ3hFLEVBQUU7O2tCQUVQLFFBQVEsR0FBRyxtQkFBZ0IsSUFBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsRUFBQTtZQUM1RCxPQUFPLElBQUksU0FBUyxDQUFDLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQztRQUMxQyxDQUFDLENBQUM7S0FnQ0g7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUF4REMsT0FBTyxDQUFDLEtBQXVCO1FBQzdCLE9BQU8sSUFBSSxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDaEMsQ0FBQzs7Ozs7O0lBeUJELGVBQWUsQ0FBQyxjQUFvRTs7WUFDOUUsUUFBeUM7UUFFN0MsSUFBSSxDQUFDLENBQUMsYUFBYSxDQUFDLGNBQWMsQ0FBQyxFQUFFO1lBQ25DLFFBQVEsR0FBRyxFQUFFLENBQUM7WUFDZCxDQUFDLENBQUMsTUFBTSxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQXFDLEVBQUUsSUFBWSxFQUFFLEVBQUU7Z0JBQy9FLENBQUMsbUJBQWdCLFFBQVEsRUFBQSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM1RCxDQUFDLENBQUMsQ0FBQztTQUNKO2FBQU07WUFDTCxRQUFRLEdBQUcsRUFBRSxDQUFDO1lBQ2QsQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFxQyxFQUFFLEVBQUU7Z0JBQy9ELENBQUMsbUJBQWdCLFFBQVEsRUFBQSxDQUFDLENBQUMsSUFBSSxDQUFDLG1CQUFpQixJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxFQUFBLENBQUMsQ0FBQztZQUMzRSxDQUFDLENBQUMsQ0FBQztTQUNKO1FBQ0QsT0FBTyxRQUFRLENBQUM7SUFDbEIsQ0FBQzs7Ozs7O0lBR0QsY0FBYyxDQUFDLGFBQWtCO1FBQy9CLElBQUksYUFBYSxZQUFZLFdBQVcsSUFBSSxhQUFhLFlBQVksU0FBUztZQUM1RSxhQUFhLFlBQVksU0FBUyxFQUFFO1lBQ3BDLE9BQU8sYUFBYSxDQUFDO1NBRXRCO2FBQU07WUFFTCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUM7U0FDcEM7SUFDSCxDQUFDOzs7WUEzR0YsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQXlCQyxpQ0FHRTs7Ozs7Ozs7Ozs7Ozs7OztJQXlDRixpQ0FNRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQWJzdHJhY3RDb250cm9sT3B0aW9ucywgRm9ybUFycmF5U3RhdGUsIEZvcm1Db250cm9sU3RhdGUsIEZvcm1Hcm91cFN0YXRlIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9Gb3JtJztcclxuaW1wb3J0IHsgRm9ybUdyb3VwIH0gZnJvbSAnLi4vbW9kZWxzL0Zvcm1Hcm91cCc7XHJcbmltcG9ydCB7IEZvcm1Db250cm9sIH0gZnJvbSAnLi4vbW9kZWxzL0Zvcm1Db250cm9sJztcclxuaW1wb3J0IHsgRm9ybUFycmF5IH0gZnJvbSAnLi4vbW9kZWxzL0Zvcm1BcnJheSc7XHJcbmltcG9ydCB7IEFic3RyYWN0Q29udHJvbCB9IGZyb20gJy4uL21vZGVscy9BYnN0cmFjdENvbnRyb2wnO1xyXG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xyXG5cclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBJb25hckZvcm1CdWlsZGVyIHtcclxuXHJcbiAgLyoqXHJcbiAgICogQGRlc2NyaXB0aW9uXHJcbiAgICogQ29uc3RydWN0IGEgbmV3IGBGb3JtR3JvdXBgIGluc3RhbmNlLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHN0YXRlIEEgY29sbGVjdGlvbiBvZiBjaGlsZCBjb250cm9scy4gVGhlIGtleSBmb3IgZWFjaCBjaGlsZCBpcyB0aGUgbmFtZVxyXG4gICAqIHVuZGVyIHdoaWNoIGl0IGlzIHJlZ2lzdGVyZWQuXHJcbiAgICpcclxuICAgKiBAcGFyYW0gb3B0aW9ucyBvcHRpb25zIG9wdGlvbnMgb2JqZWN0IGZvciB0aGUgYEZvcm1Hcm91cGAuIFRoZSBvYmplY3QgY2FuXHJcbiAgICogaGF2ZSB0d28gc2hhcGVzOlxyXG4gICAqXHJcbiAgICogMSkgYEFic3RyYWN0Q29udHJvbE9wdGlvbnNgIG9iamVjdCAocHJlZmVycmVkKSwgd2hpY2ggY29uc2lzdHMgb2Y6XHJcbiAgICogKiBgdmFsaWRhdG9yc2A6IEEgc3luY2hyb25vdXMgdmFsaWRhdG9yIGZ1bmN0aW9uLCBvciBhbiBhcnJheSBvZiB2YWxpZGF0b3IgZnVuY3Rpb25zXHJcbiAgICogKiBgYXN5bmNWYWxpZGF0b3JzYDogQSBzaW5nbGUgYXN5bmMgdmFsaWRhdG9yIG9yIGFycmF5IG9mIGFzeW5jIHZhbGlkYXRvciBmdW5jdGlvbnNcclxuICAgKiAqIGB1cGRhdGVPbmA6IFRoZSBldmVudCB1cG9uIHdoaWNoIHRoZSBjb250cm9sIHNob3VsZCBiZSB1cGRhdGVkIChvcHRpb25zOiAnY2hhbmdlJyB8ICdibHVyJyB8XHJcbiAgICogc3VibWl0JylcclxuICAgKlxyXG4gICAqIDIpIExlZ2FjeSBvcHRpb25zIG9iamVjdCwgd2hpY2ggY29uc2lzdHMgb2Y6XHJcbiAgICogKiBgdmFsaWRhdG9yYDogQSBzeW5jaHJvbm91cyB2YWxpZGF0b3IgZnVuY3Rpb24sIG9yIGFuIGFycmF5IG9mIHZhbGlkYXRvciBmdW5jdGlvbnNcclxuICAgKiAqIGBhc3luY1ZhbGlkYXRvcmA6IEEgc2luZ2xlIGFzeW5jIHZhbGlkYXRvciBvciBhcnJheSBvZiBhc3luYyB2YWxpZGF0b3IgZnVuY3Rpb25zXHJcbiAgICpcclxuICAgKi9cclxuICBncm91cCA9IChzdGF0ZTogRm9ybUdyb3VwU3RhdGUsIG9wdGlvbnM/OiBBYnN0cmFjdENvbnRyb2xPcHRpb25zIHwgbnVsbCk6IEZvcm1Hcm91cCA9PiB7XHJcbiAgICBjb25zdCBjb250cm9scyA9IDxGb3JtR3JvdXBTdGF0ZT50aGlzLl9yZWR1Y2VDb250cm9scyhzdGF0ZSk7XHJcbiAgICByZXR1cm4gbmV3IEZvcm1Hcm91cChjb250cm9scywgb3B0aW9ucyk7XHJcbiAgfTtcclxuXHJcbiAgLyoqXHJcbiAgICogQGRlc2NyaXB0aW9uXHJcbiAgICogQ29uc3RydWN0IGEgbmV3IGBGb3JtQ29udHJvbGAgd2l0aCB0aGUgZ2l2ZW4gc3RhdGUsIHZhbGlkYXRvcnMgYW5kIG9wdGlvbnMuXHJcbiAgICpcclxuICAgKiBAcGFyYW0gc3RhdGUgQSBjb2xsZWN0aW9uIG9mIGNoaWxkIGNvbnRyb2xzLiBUaGUga2V5IGZvciBlYWNoIGNoaWxkIGlzIHRoZSBuYW1lXHJcbiAgICogdW5kZXIgd2hpY2ggaXQgaXMgcmVnaXN0ZXJlZC5cclxuICAgKlxyXG4gICAqIEBwYXJhbSBvcHRpb25zIG9wdGlvbnMgb3B0aW9ucyBvYmplY3QgZm9yIHRoZSBgRm9ybUdyb3VwYC4gVGhlIG9iamVjdCBjYW5cclxuICAgKiBoYXZlIHR3byBzaGFwZXM6XHJcbiAgICpcclxuICAgKlxyXG4gICAqIEB1c2FnZU5vdGVzXHJcbiAgICpcclxuICAgKiAjIyMgSW5pdGlhbGl6ZSBhIGNvbnRyb2wgYXMgZGlzYWJsZWRcclxuICAgKlxyXG4gICAqIFRoZSBmb2xsb3dpbmcgZXhhbXBsZSByZXR1cm5zIGEgY29udHJvbCB3aXRoIGFuIGluaXRpYWwgdmFsdWUgaW4gYSBkaXNhYmxlZCBzdGF0ZS5cclxuICAgKlxyXG4gICAqIDxjb2RlLWV4YW1wbGUgcGF0aD1cImZvcm1zL3RzL2Zvcm1CdWlsZGVyL2Zvcm1fYnVpbGRlcl9leGFtcGxlLnRzXCJcclxuICAgKiAgIGxpbmVudW1zPVwiZmFsc2VcIiByZWdpb249XCJkaXNhYmxlZC1jb250cm9sXCI+XHJcbiAgICogPC9jb2RlLWV4YW1wbGU+XHJcbiAgICovXHJcbiAgY29udHJvbChzdGF0ZTogRm9ybUNvbnRyb2xTdGF0ZSk6IEZvcm1Db250cm9sIHtcclxuICAgIHJldHVybiBuZXcgRm9ybUNvbnRyb2woc3RhdGUpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ29uc3RydWN0cyBhIG5ldyBgRm9ybUFycmF5YCBmcm9tIHRoZSBnaXZlbiBhcnJheSBvZiBjb25maWd1cmF0aW9ucyxcclxuICAgKiB2YWxpZGF0b3JzIGFuZCBvcHRpb25zLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIGNvbnRyb2xzQ29uZmlnIEFuIGFycmF5IG9mIGNoaWxkIGNvbnRyb2xzIG9yIGNvbnRyb2wgY29uZmlncy4gRWFjaFxyXG4gICAqIGNoaWxkIGNvbnRyb2wgaXMgZ2l2ZW4gYW4gaW5kZXggd2hlbiBpdCBpcyByZWdpc3RlcmVkLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHZhbGlkYXRvck9yT3B0cyBBIHN5bmNocm9ub3VzIHZhbGlkYXRvciBmdW5jdGlvbiwgb3IgYW4gYXJyYXkgb2ZcclxuICAgKiBzdWNoIGZ1bmN0aW9ucywgb3IgYW4gYEFic3RyYWN0Q29udHJvbE9wdGlvbnNgIG9iamVjdCB0aGF0IGNvbnRhaW5zXHJcbiAgICogdmFsaWRhdGlvbiBmdW5jdGlvbnMgYW5kIGEgdmFsaWRhdGlvbiB0cmlnZ2VyLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIGFzeW5jVmFsaWRhdG9yIEEgc2luZ2xlIGFzeW5jIHZhbGlkYXRvciBvciBhcnJheSBvZiBhc3luYyB2YWxpZGF0b3JcclxuICAgKiBmdW5jdGlvbnMuXHJcbiAgICovXHJcbiAgYXJyYXkgPSAoXHJcbiAgICBzdGF0ZTogRm9ybUFycmF5U3RhdGUgfCBGb3JtQ29udHJvbFN0YXRlW10sIG9wdGlvbnM/OiBBYnN0cmFjdENvbnRyb2xPcHRpb25zIHwgbnVsbFxyXG4gICk6IEZvcm1BcnJheSA9PiB7XHJcblxyXG4gICAgY29uc3QgY29udHJvbHMgPSA8Rm9ybUFycmF5U3RhdGU+dGhpcy5fcmVkdWNlQ29udHJvbHMoc3RhdGUpO1xyXG4gICAgcmV0dXJuIG5ldyBGb3JtQXJyYXkoY29udHJvbHMsIG9wdGlvbnMpO1xyXG4gIH07XHJcblxyXG4gIC8qKiBAaW50ZXJuYWwgKi9cclxuICBfcmVkdWNlQ29udHJvbHMoY29udHJvbHNDb25maWc6IEZvcm1Hcm91cFN0YXRlIHwgRm9ybUFycmF5U3RhdGUgfCBGb3JtQ29udHJvbFN0YXRlW10pOiBGb3JtR3JvdXBTdGF0ZSB8IEZvcm1BcnJheVN0YXRlIHtcclxuICAgIGxldCBjb250cm9sczogRm9ybUdyb3VwU3RhdGUgfCBGb3JtQXJyYXlTdGF0ZTtcclxuXHJcbiAgICBpZiAoXy5pc1BsYWluT2JqZWN0KGNvbnRyb2xzQ29uZmlnKSkge1xyXG4gICAgICBjb250cm9scyA9IHt9O1xyXG4gICAgICBfLmZvck93bihjb250cm9sc0NvbmZpZywgKGM6IEFic3RyYWN0Q29udHJvbCB8IEZvcm1Db250cm9sU3RhdGUsIG5hbWU6IHN0cmluZykgPT4ge1xyXG4gICAgICAgICg8Rm9ybUdyb3VwU3RhdGU+Y29udHJvbHMpW25hbWVdID0gdGhpcy5fY3JlYXRlQ29udHJvbChjKTtcclxuICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb250cm9scyA9IFtdO1xyXG4gICAgICBfLmVhY2goY29udHJvbHNDb25maWcsIChjOiBBYnN0cmFjdENvbnRyb2wgfCBGb3JtQ29udHJvbFN0YXRlKSA9PiB7XHJcbiAgICAgICAgKDxGb3JtQXJyYXlTdGF0ZT5jb250cm9scykucHVzaCg8QWJzdHJhY3RDb250cm9sPnRoaXMuX2NyZWF0ZUNvbnRyb2woYykpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIHJldHVybiBjb250cm9scztcclxuICB9XHJcblxyXG4gIC8qKiBAaW50ZXJuYWwgKi9cclxuICBfY3JlYXRlQ29udHJvbChjb250cm9sQ29uZmlnOiBhbnkpOiBBYnN0cmFjdENvbnRyb2wge1xyXG4gICAgaWYgKGNvbnRyb2xDb25maWcgaW5zdGFuY2VvZiBGb3JtQ29udHJvbCB8fCBjb250cm9sQ29uZmlnIGluc3RhbmNlb2YgRm9ybUdyb3VwIHx8XHJcbiAgICAgIGNvbnRyb2xDb25maWcgaW5zdGFuY2VvZiBGb3JtQXJyYXkpIHtcclxuICAgICAgcmV0dXJuIGNvbnRyb2xDb25maWc7XHJcblxyXG4gICAgfSBlbHNlIHtcclxuXHJcbiAgICAgIHJldHVybiB0aGlzLmNvbnRyb2woY29udHJvbENvbmZpZyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxufVxyXG5cclxuXHJcbiJdfQ==