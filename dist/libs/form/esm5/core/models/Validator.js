/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { forkJoin } from 'rxjs';
import _ from 'lodash';
import { map } from 'rxjs/operators';
/**
 * @record
 */
export function ValidationErrors() { }
/**
 * @record
 */
export function ValidationConfigs() { }
if (false) {
    /** @type {?|undefined} */
    ValidationConfigs.prototype.required;
    /** @type {?|undefined} */
    ValidationConfigs.prototype.email;
    /** @type {?|undefined} */
    ValidationConfigs.prototype.stringLength;
    /** @type {?|undefined} */
    ValidationConfigs.prototype.equalTo;
    /* Skipping unhandled member: [name: string]: ValidatorType*/
}
/**
 * \@publicApi
 * @record
 */
export function ValidatorFn() { }
/**
 * \@publicApi
 * @record
 */
export function AsyncValidatorFn() { }
/**
 * \@description
 * Provides a set of built-in validators that can be used by form controls.
 *
 * A validator is a function that processes a `FormControl` or collection of
 * controls and returns an error map or null. A null map means that validation has passed.
 * \@publicApi
 */
// @dynamic
var Validators = /** @class */ (function () {
    function Validators() {
    }
    /**
     * @description
     * Compose multiple async validators into a single function that returns the union
     * of the individual error objects for the provided control.
     *
     * @returns A validator function that returns an error map with the
     * merged error objects of the async validators if the validation check fails, otherwise `null`.
     */
    /**
     * \@description
     * Compose multiple async validators into a single function that returns the union
     * of the individual error objects for the provided control.
     *
     * @param {?} asyncValidators
     * @return {?} A validator function that returns an error map with the
     * merged error objects of the async validators if the validation check fails, otherwise `null`.
     */
    Validators.composeAsync = /**
     * \@description
     * Compose multiple async validators into a single function that returns the union
     * of the individual error objects for the provided control.
     *
     * @param {?} asyncValidators
     * @return {?} A validator function that returns an error map with the
     * merged error objects of the async validators if the validation check fails, otherwise `null`.
     */
    function (asyncValidators) {
        if (!asyncValidators)
            return null;
        /** @type {?} */
        var presentValidators = (/** @type {?} */ (asyncValidators.filter(isPresent)));
        if (presentValidators.length == 0)
            return null;
        return function (control) {
            /** @type {?} */
            var observables = _executeAsyncValidators(control, presentValidators);
            return forkJoin(observables).pipe(map(_mergeErrors));
        };
    };
    /** @internal */
    /**
     * \@internal
     * @param {?} validator_configs
     * @return {?}
     */
    Validators.prototype._isBoxedValue = /**
     * \@internal
     * @param {?} validator_configs
     * @return {?}
     */
    function (validator_configs) {
        return _.isPlainObject(validator_configs);
    };
    /**
     * \@description
     * Validator that requires the control have a non-empty value.
     *
     * \@usageNotes
     *
     * ### Validate that the field is non-empty
     *
     * ```typescript
     * const control = new FormControl('', Validators.required);
     *
     * console.log(control.errors); // {required: true}
     * ```
     *
     * @return An error map with the `required` property
     * if the validation check fails, otherwise `null`.
     *
     */
    Validators.required = function (c) {
        return isEmptyInputValue(c.value) ? { 'required': true } : null;
    };
    /**
     * \@description
     * Validator that requires the control's value pass an email validation test.
     *
     * \@usageNotes
     *
     * ### Validate that the field matches a valid email pattern
     *
     * ```typescript
     * const control = new FormControl('bad\@', Validators.email);
     *
     * console.log(control.errors); // {email: true}
     * ```
     *
     * @return An error map with the `email` property
     * if the validation check fails, otherwise `null`.
     *
     */
    Validators.email = function (control) {
        if (isEmptyInputValue(control.value)) {
            return null; // don't validate empty values to allow optional controls
        }
        return EMAIL_REGEXP.test(control.value) ? null : { 'email': true };
    };
    /**
     * \@description
     * Validator that requires the length of the control's value to be greater than or equal
     * to the provided minimum length. This validator is also provided by default if you use the
     * the HTML5 `minlength` attribute.
     *
     * \@usageNotes
     *
     * ### Validate that the field has a minimum of 3 characters
     *
     * ```typescript
     * const control = new FormControl('ng', Validators.minLength(3));
     *
     * console.log(control.errors); // {minlength: {requiredLength: 3, actualLength: 2}}
     * ```
     *
     * ```html
     * <input minlength="5">
     * ```
     *
     * @return A validator function that returns an error map with the
     * `minlength` if the validation check fails, otherwise `null`.
     */
    Validators.stringLength = function (control) {
        /** @type {?} */
        var controlConfig = (/** @type {?} */ (control.configuration));
        if (isEmptyInputValue(control.value)) {
            return null; // don't validate empty values to allow optional controls
        }
        if (controlConfig.type !== ('input' || 'textarea')) {
            throw new Error("'stringLength' validator can only be used with control type 'input' or 'textarea'");
        }
        /** @type {?} */
        var min = controlConfig.validators['stringLength'].min;
        /** @type {?} */
        var max = controlConfig.validators['stringLength'].max;
        /** @type {?} */
        var length = control.value ? control.value.length : 0;
        if (length < min) {
            return {
                'stringLength': {
                    'minLength': min,
                    'actualLength': length
                }
            };
        }
        if (length > max) {
            return {
                'stringLength': {
                    'maxLength': max,
                    'actualLength': length
                }
            };
        }
        return null;
    };
    Validators.equalTo = function (control) {
        if (isEmptyInputValue(control.value)) {
            return null; // don't validate empty values to allow optional controls
        }
        /** @type {?} */
        var controlConfig = (/** @type {?} */ (control.configuration));
        /** @type {?} */
        var compareWith = _.isString(controlConfig.validators['equalTo']) ? controlConfig.validators['equalTo'] : controlConfig.validators['equalTo'].compare;
        /** @type {?} */
        var compared_control = control.parent.controls[compareWith];
        return (JSON.stringify(control.value) === JSON.stringify(compared_control.value))
            ? null : { equalTo: controlConfig.validators['equalTo'] };
    };
    /**
     * \@description
     * Compose multiple validators into a single function that returns the union
     * of the individual error maps for the provided control.
     *
     * @return A validator function that returns an error map with the
     * merged error maps of the validators if the validation check fails, otherwise `null`.
     */
    Validators.compose = function (validators) {
        if (!validators)
            return null;
        /** @type {?} */
        var presentValidators = (/** @type {?} */ (validators.filter(isPresent)));
        if (presentValidators.length === 0)
            return null;
        return function (control) {
            return _mergeErrors(_executeValidators(control, presentValidators));
        };
    };
    return Validators;
}());
export { Validators };
if (false) {
    /**
     * \@description
     * Validator that requires the control have a non-empty value.
     *
     * \@usageNotes
     *
     * ### Validate that the field is non-empty
     *
     * ```typescript
     * const control = new FormControl('', Validators.required);
     *
     * console.log(control.errors); // {required: true}
     * ```
     *
     * \@return An error map with the `required` property
     * if the validation check fails, otherwise `null`.
     *
     * @type {?}
     */
    Validators.required;
    /**
     * \@description
     * Validator that requires the control's value pass an email validation test.
     *
     * \@usageNotes
     *
     * ### Validate that the field matches a valid email pattern
     *
     * ```typescript
     * const control = new FormControl('bad\@', Validators.email);
     *
     * console.log(control.errors); // {email: true}
     * ```
     *
     * \@return An error map with the `email` property
     * if the validation check fails, otherwise `null`.
     *
     * @type {?}
     */
    Validators.email;
    /**
     * \@description
     * Validator that requires the length of the control's value to be greater than or equal
     * to the provided minimum length. This validator is also provided by default if you use the
     * the HTML5 `minlength` attribute.
     *
     * \@usageNotes
     *
     * ### Validate that the field has a minimum of 3 characters
     *
     * ```typescript
     * const control = new FormControl('ng', Validators.minLength(3));
     *
     * console.log(control.errors); // {minlength: {requiredLength: 3, actualLength: 2}}
     * ```
     *
     * ```html
     * <input minlength="5">
     * ```
     *
     * \@return A validator function that returns an error map with the
     * `minlength` if the validation check fails, otherwise `null`.
     * @type {?}
     */
    Validators.stringLength;
    /** @type {?} */
    Validators.equalTo;
    /**
     * \@description
     * Compose multiple validators into a single function that returns the union
     * of the individual error maps for the provided control.
     *
     * \@return A validator function that returns an error map with the
     * merged error maps of the validators if the validation check fails, otherwise `null`.
     * @type {?}
     */
    Validators.compose;
}
/** @type {?} */
var EMAIL_REGEXP = /^(?=.{1,254}$)(?=.{1,64}@)[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+(\.[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+)*@[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?(\.[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?)*$/;
/**
 * @param {?} value
 * @return {?}
 */
function isEmptyInputValue(value) {
    // we don't check for string here so it also works with arrays
    return value == null || value.length === 0;
}
/**
 * @param {?} o
 * @return {?}
 */
function isPresent(o) {
    return o != null;
}
/**
 * @param {?} control
 * @param {?} validators
 * @return {?}
 */
function _executeValidators(control, validators) {
    return validators.map(function (v) { return v(control); });
}
/**
 * @param {?} control
 * @param {?} validators
 * @return {?}
 */
function _executeAsyncValidators(control, validators) {
    return validators.map(function (v) { return v(control); });
}
/**
 * @param {?} arrayOfErrors
 * @return {?}
 */
function _mergeErrors(arrayOfErrors) {
    /** @type {?} */
    var errors = _.reduce(arrayOfErrors, function (result, err) {
        return err ? tslib_1.__assign({}, result, err) : result;
    }, {});
    return Object.keys(errors).length === 0 ? null : errors;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVmFsaWRhdG9yLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGlvbmFyL2Zvcm0vIiwic291cmNlcyI6WyJjb3JlL21vZGVscy9WYWxpZGF0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQUUsUUFBUSxFQUFjLE1BQU0sTUFBTSxDQUFDO0FBQzVDLE9BQU8sQ0FBQyxNQUFNLFFBQVEsQ0FBQztBQUV2QixPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7Ozs7QUFHckMsc0NBRUM7Ozs7QUFFRCx1Q0FZQzs7O0lBWEMscUNBQXlCOztJQUN6QixrQ0FBc0I7O0lBQ3RCLHlDQUlFOztJQUVGLG9DQUEwRDs7Ozs7OztBQWU1RCxpQ0FFQzs7Ozs7QUFNRCxzQ0FFQzs7Ozs7Ozs7OztBQVdEO0lBQUE7SUFpTEEsQ0FBQztJQTlCQzs7Ozs7OztPQU9HOzs7Ozs7Ozs7O0lBQ0ksdUJBQVk7Ozs7Ozs7OztJQUFuQixVQUFvQixlQUFtQztRQUNyRCxJQUFJLENBQUMsZUFBZTtZQUFFLE9BQU8sSUFBSSxDQUFDOztZQUM1QixpQkFBaUIsR0FBdUIsbUJBQUEsZUFBZSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsRUFBTztRQUN0RixJQUFJLGlCQUFpQixDQUFDLE1BQU0sSUFBSSxDQUFDO1lBQUUsT0FBTyxJQUFJLENBQUM7UUFFL0MsT0FBTyxVQUFTLE9BQW9COztnQkFDNUIsV0FBVyxHQUFHLHVCQUF1QixDQUFDLE9BQU8sRUFBRSxpQkFBaUIsQ0FBQztZQUV2RSxPQUFPLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQyxJQUFJLENBQy9CLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FDbEIsQ0FBQztRQUVKLENBQUMsQ0FBQztJQUNKLENBQUM7SUFHRCxnQkFBZ0I7Ozs7OztJQUNoQixrQ0FBYTs7Ozs7SUFBYixVQUFjLGlCQUFpRjtRQUM3RixPQUFPLENBQUMsQ0FBQyxhQUFhLENBQUMsaUJBQWlCLENBQUMsQ0FBQztJQUM1QyxD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OEI7SUFDbkYsT0FBTyxVQUFVLENBQUMsR0FBRyxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxFQUFWLENBQVUsQ0FBQyxDQUFDO0FBQ3pDLENBQUM7Ozs7O0FBRUQsU0FBUyxZQUFZLENBQUMsYUFBaUM7O1FBQy9DLE1BQU0sR0FDVixDQUFDLENBQUMsTUFBTSxDQUFDLGFBQWEsRUFBRSxVQUFDLE1BQStCLEVBQUUsR0FBNEI7UUFDcEYsT0FBTyxHQUFHLENBQUMsQ0FBQyxzQkFBTSxNQUFNLEVBQUssR0FBRyxFQUFHLENBQUMsQ0FBQyxNQUFNLENBQUM7SUFDOUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQztJQUVSLE9BQU8sTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQztBQUUxRCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRm9ybUNvbnRyb2wgfSBmcm9tICcuL0Zvcm1Db250cm9sJztcclxuaW1wb3J0IHsgZm9ya0pvaW4sIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcclxuaW1wb3J0IHsgRm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQgeyBDb250cm9sQ29uZmlnIH0gZnJvbSAnLi4vbW9kZWxzL0NvbnRyb2xDb25maWcnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBWYWxpZGF0aW9uRXJyb3JzIHtcclxuICBba2V5OiBzdHJpbmddOiBhbnlcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBWYWxpZGF0aW9uQ29uZmlncyB7XHJcbiAgcmVxdWlyZWQ/OiB0cnVlIHwgU3RyaW5nLFxyXG4gIGVtYWlsPzogdHJ1ZSB8IFN0cmluZyxcclxuICBzdHJpbmdMZW5ndGg/OiB7XHJcbiAgICBtaW4/OiBudW1iZXIsXHJcbiAgICBtYXg/OiBudW1iZXIsXHJcbiAgICBtZXNzYWdlPzogc3RyaW5nXHJcbiAgfSxcclxuXHJcbiAgZXF1YWxUbz86IHsgY29tcGFyZT86IHN0cmluZywgbWVzc2FnZT86IHN0cmluZyB9IHwgc3RyaW5nLFxyXG5cclxuICBbbmFtZTogc3RyaW5nXTogVmFsaWRhdG9yVHlwZVxyXG59XHJcblxyXG5cclxuZXhwb3J0IHR5cGUgVmFsaWRhdG9yVHlwZSA9IHsgbWVzc2FnZT86IGFueSwgW25hbWU6IHN0cmluZ106IGFueSB9XHJcbiAgfCBzdHJpbmdcclxuICB8IHRydWVcclxuICB8IFZhbGlkYXRvckZuXHJcbiAgfCBBc3luY1ZhbGlkYXRvckZuXHJcblxyXG4vKipcclxuICogQHB1YmxpY0FwaVxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBWYWxpZGF0b3JGbiB7XHJcbiAgKGNvbnRyb2w6IEZvcm1Db250cm9sKTogVmFsaWRhdGlvbkVycm9ycyB8IG51bGxcclxufVxyXG5cclxuXHJcbi8qKlxyXG4gKiBAcHVibGljQXBpXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIEFzeW5jVmFsaWRhdG9yRm4ge1xyXG4gIChjb250cm9sOiBGb3JtQ29udHJvbCk6IE9ic2VydmFibGU8VmFsaWRhdGlvbkVycm9ycyB8IG51bGw+O1xyXG59XHJcblxyXG4vKipcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqIFByb3ZpZGVzIGEgc2V0IG9mIGJ1aWx0LWluIHZhbGlkYXRvcnMgdGhhdCBjYW4gYmUgdXNlZCBieSBmb3JtIGNvbnRyb2xzLlxyXG4gKlxyXG4gKiBBIHZhbGlkYXRvciBpcyBhIGZ1bmN0aW9uIHRoYXQgcHJvY2Vzc2VzIGEgYEZvcm1Db250cm9sYCBvciBjb2xsZWN0aW9uIG9mXHJcbiAqIGNvbnRyb2xzIGFuZCByZXR1cm5zIGFuIGVycm9yIG1hcCBvciBudWxsLiBBIG51bGwgbWFwIG1lYW5zIHRoYXQgdmFsaWRhdGlvbiBoYXMgcGFzc2VkLlxyXG4gKiBAcHVibGljQXBpXHJcbiAqL1xyXG4vLyBAZHluYW1pY1xyXG5leHBvcnQgY2xhc3MgVmFsaWRhdG9ycyB7XHJcblxyXG4gIC8qKlxyXG4gICAqIEBkZXNjcmlwdGlvblxyXG4gICAqIFZhbGlkYXRvciB0aGF0IHJlcXVpcmVzIHRoZSBjb250cm9sIGhhdmUgYSBub24tZW1wdHkgdmFsdWUuXHJcbiAgICpcclxuICAgKiBAdXNhZ2VOb3Rlc1xyXG4gICAqXHJcbiAgICogIyMjIFZhbGlkYXRlIHRoYXQgdGhlIGZpZWxkIGlzIG5vbi1lbXB0eVxyXG4gICAqXHJcbiAgICogYGBgdHlwZXNjcmlwdFxyXG4gICAqIGNvbnN0IGNvbnRyb2wgPSBuZXcgRm9ybUNvbnRyb2woJycsIFZhbGlkYXRvcnMucmVxdWlyZWQpO1xyXG4gICAqXHJcbiAgICogY29uc29sZS5sb2coY29udHJvbC5lcnJvcnMpOyAvLyB7cmVxdWlyZWQ6IHRydWV9XHJcbiAgICogYGBgXHJcbiAgICpcclxuICAgKiBAcmV0dXJucyBBbiBlcnJvciBtYXAgd2l0aCB0aGUgYHJlcXVpcmVkYCBwcm9wZXJ0eVxyXG4gICAqIGlmIHRoZSB2YWxpZGF0aW9uIGNoZWNrIGZhaWxzLCBvdGhlcndpc2UgYG51bGxgLlxyXG4gICAqXHJcbiAgICovXHJcbiAgc3RhdGljIHJlcXVpcmVkID0gKGM6IEZvcm1Db250cm9sKTogVmFsaWRhdGlvbkVycm9ycyB8IG51bGwgPT5cclxuICAgIGlzRW1wdHlJbnB1dFZhbHVlKGMudmFsdWUpID8geyAncmVxdWlyZWQnOiB0cnVlIH0gOiBudWxsO1xyXG5cclxuICAvKipcclxuICAgKiBAZGVzY3JpcHRpb25cclxuICAgKiBWYWxpZGF0b3IgdGhhdCByZXF1aXJlcyB0aGUgY29udHJvbCdzIHZhbHVlIHBhc3MgYW4gZW1haWwgdmFsaWRhdGlvbiB0ZXN0LlxyXG4gICAqXHJcbiAgICogQHVzYWdlTm90ZXNcclxuICAgKlxyXG4gICAqICMjIyBWYWxpZGF0ZSB0aGF0IHRoZSBmaWVsZCBtYXRjaGVzIGEgdmFsaWQgZW1haWwgcGF0dGVyblxyXG4gICAqXHJcbiAgICogYGBgdHlwZXNjcmlwdFxyXG4gICAqIGNvbnN0IGNvbnRyb2wgPSBuZXcgRm9ybUNvbnRyb2woJ2JhZEAnLCBWYWxpZGF0b3JzLmVtYWlsKTtcclxuICAgKlxyXG4gICAqIGNvbnNvbGUubG9nKGNvbnRyb2wuZXJyb3JzKTsgLy8ge2VtYWlsOiB0cnVlfVxyXG4gICAqIGBgYFxyXG4gICAqXHJcbiAgICogQHJldHVybnMgQW4gZXJyb3IgbWFwIHdpdGggdGhlIGBlbWFpbGAgcHJvcGVydHlcclxuICAgKiBpZiB0aGUgdmFsaWRhdGlvbiBjaGVjayBmYWlscywgb3RoZXJ3aXNlIGBudWxsYC5cclxuICAgKlxyXG4gICAqL1xyXG4gIHN0YXRpYyBlbWFpbCA9IChjb250cm9sOiBGb3JtQ29udHJvbCk6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsID0+IHtcclxuXHJcbiAgICBpZiAoaXNFbXB0eUlucHV0VmFsdWUoY29udHJvbC52YWx1ZSkpIHtcclxuICAgICAgcmV0dXJuIG51bGw7ICAvLyBkb24ndCB2YWxpZGF0ZSBlbXB0eSB2YWx1ZXMgdG8gYWxsb3cgb3B0aW9uYWwgY29udHJvbHNcclxuICAgIH1cclxuICAgIHJldHVybiBFTUFJTF9SRUdFWFAudGVzdChjb250cm9sLnZhbHVlKSA/IG51bGwgOiB7ICdlbWFpbCc6IHRydWUgfTtcclxuICB9O1xyXG5cclxuXHJcbiAgLyoqXHJcbiAgICogQGRlc2NyaXB0aW9uXHJcbiAgICogVmFsaWRhdG9yIHRoYXQgcmVxdWlyZXMgdGhlIGxlbmd0aCBvZiB0aGUgY29udHJvbCdzIHZhbHVlIHRvIGJlIGdyZWF0ZXIgdGhhbiBvciBlcXVhbFxyXG4gICAqIHRvIHRoZSBwcm92aWRlZCBtaW5pbXVtIGxlbmd0aC4gVGhpcyB2YWxpZGF0b3IgaXMgYWxzbyBwcm92aWRlZCBieSBkZWZhdWx0IGlmIHlvdSB1c2UgdGhlXHJcbiAgICogdGhlIEhUTUw1IGBtaW5sZW5ndGhgIGF0dHJpYnV0ZS5cclxuICAgKlxyXG4gICAqIEB1c2FnZU5vdGVzXHJcbiAgICpcclxuICAgKiAjIyMgVmFsaWRhdGUgdGhhdCB0aGUgZmllbGQgaGFzIGEgbWluaW11bSBvZiAzIGNoYXJhY3RlcnNcclxuICAgKlxyXG4gICAqIGBgYHR5cGVzY3JpcHRcclxuICAgKiBjb25zdCBjb250cm9sID0gbmV3IEZvcm1Db250cm9sKCduZycsIFZhbGlkYXRvcnMubWluTGVuZ3RoKDMpKTtcclxuICAgKlxyXG4gICAqIGNvbnNvbGUubG9nKGNvbnRyb2wuZXJyb3JzKTsgLy8ge21pbmxlbmd0aDoge3JlcXVpcmVkTGVuZ3RoOiAzLCBhY3R1YWxMZW5ndGg6IDJ9fVxyXG4gICAqIGBgYFxyXG4gICAqXHJcbiAgICogYGBgaHRtbFxyXG4gICAqIDxpbnB1dCBtaW5sZW5ndGg9XCI1XCI+XHJcbiAgICogYGBgXHJcbiAgICpcclxuICAgKiBAcmV0dXJucyBBIHZhbGlkYXRvciBmdW5jdGlvbiB0aGF0IHJldHVybnMgYW4gZXJyb3IgbWFwIHdpdGggdGhlXHJcbiAgICogYG1pbmxlbmd0aGAgaWYgdGhlIHZhbGlkYXRpb24gY2hlY2sgZmFpbHMsIG90aGVyd2lzZSBgbnVsbGAuXHJcbiAgICovXHJcbiAgc3RhdGljIHN0cmluZ0xlbmd0aCA9IChjb250cm9sOiBGb3JtQ29udHJvbCk6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsID0+IHtcclxuXHJcbiAgICBjb25zdCBjb250cm9sQ29uZmlnID0gPENvbnRyb2xDb25maWc+Y29udHJvbC5jb25maWd1cmF0aW9uO1xyXG5cclxuICAgIGlmIChpc0VtcHR5SW5wdXRWYWx1ZShjb250cm9sLnZhbHVlKSkge1xyXG4gICAgICByZXR1cm4gbnVsbDsgIC8vIGRvbid0IHZhbGlkYXRlIGVtcHR5IHZhbHVlcyB0byBhbGxvdyBvcHRpb25hbCBjb250cm9sc1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChjb250cm9sQ29uZmlnLnR5cGUgIT09ICgnaW5wdXQnIHx8ICd0ZXh0YXJlYScpKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihgJ3N0cmluZ0xlbmd0aCcgdmFsaWRhdG9yIGNhbiBvbmx5IGJlIHVzZWQgd2l0aCBjb250cm9sIHR5cGUgJ2lucHV0JyBvciAndGV4dGFyZWEnYCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3RcclxuICAgICAgbWluOiBudW1iZXIgPSBjb250cm9sQ29uZmlnLnZhbGlkYXRvcnNbJ3N0cmluZ0xlbmd0aCddLm1pbixcclxuICAgICAgbWF4OiBudW1iZXIgPSBjb250cm9sQ29uZmlnLnZhbGlkYXRvcnNbJ3N0cmluZ0xlbmd0aCddLm1heCxcclxuICAgICAgbGVuZ3RoOiBudW1iZXIgPSBjb250cm9sLnZhbHVlID8gY29udHJvbC52YWx1ZS5sZW5ndGggOiAwO1xyXG5cclxuICAgIGlmIChsZW5ndGggPCBtaW4pIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAnc3RyaW5nTGVuZ3RoJzoge1xyXG4gICAgICAgICAgJ21pbkxlbmd0aCc6IG1pbixcclxuICAgICAgICAgICdhY3R1YWxMZW5ndGgnOiBsZW5ndGhcclxuICAgICAgICB9XHJcbiAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGxlbmd0aCA+IG1heCkge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgICdzdHJpbmdMZW5ndGgnOiB7XHJcbiAgICAgICAgICAnbWF4TGVuZ3RoJzogbWF4LFxyXG4gICAgICAgICAgJ2FjdHVhbExlbmd0aCc6IGxlbmd0aFxyXG4gICAgICAgIH1cclxuICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9O1xyXG5cclxuXHJcbiAgc3RhdGljIGVxdWFsVG8gPSAoY29udHJvbDogRm9ybUNvbnRyb2wpOiBWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbCA9PiB7XHJcblxyXG4gICAgaWYgKGlzRW1wdHlJbnB1dFZhbHVlKGNvbnRyb2wudmFsdWUpKSB7XHJcbiAgICAgIHJldHVybiBudWxsOyAgLy8gZG9uJ3QgdmFsaWRhdGUgZW1wdHkgdmFsdWVzIHRvIGFsbG93IG9wdGlvbmFsIGNvbnRyb2xzXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgY29udHJvbENvbmZpZyA9IDxDb250cm9sQ29uZmlnPmNvbnRyb2wuY29uZmlndXJhdGlvbjtcclxuXHJcbiAgICBjb25zdCBjb21wYXJlV2l0aCA9IF8uaXNTdHJpbmcoY29udHJvbENvbmZpZy52YWxpZGF0b3JzWydlcXVhbFRvJ10pID8gY29udHJvbENvbmZpZy52YWxpZGF0b3JzWydlcXVhbFRvJ10gOiBjb250cm9sQ29uZmlnLnZhbGlkYXRvcnNbJ2VxdWFsVG8nXS5jb21wYXJlO1xyXG5cclxuICAgIGNvbnN0IGNvbXBhcmVkX2NvbnRyb2wgPSBjb250cm9sLnBhcmVudC5jb250cm9sc1tjb21wYXJlV2l0aF07XHJcblxyXG4gICAgcmV0dXJuIChKU09OLnN0cmluZ2lmeShjb250cm9sLnZhbHVlKSA9PT0gSlNPTi5zdHJpbmdpZnkoY29tcGFyZWRfY29udHJvbC52YWx1ZSkpXHJcbiAgICAgID8gbnVsbCA6IHsgZXF1YWxUbzogY29udHJvbENvbmZpZy52YWxpZGF0b3JzWydlcXVhbFRvJ10gfTtcclxuICB9O1xyXG5cclxuXHJcbiAgLyoqXHJcbiAgICogQGRlc2NyaXB0aW9uXHJcbiAgICogQ29tcG9zZSBtdWx0aXBsZSB2YWxpZGF0b3JzIGludG8gYSBzaW5nbGUgZnVuY3Rpb24gdGhhdCByZXR1cm5zIHRoZSB1bmlvblxyXG4gICAqIG9mIHRoZSBpbmRpdmlkdWFsIGVycm9yIG1hcHMgZm9yIHRoZSBwcm92aWRlZCBjb250cm9sLlxyXG4gICAqXHJcbiAgICogQHJldHVybnMgQSB2YWxpZGF0b3IgZnVuY3Rpb24gdGhhdCByZXR1cm5zIGFuIGVycm9yIG1hcCB3aXRoIHRoZVxyXG4gICAqIG1lcmdlZCBlcnJvciBtYXBzIG9mIHRoZSB2YWxpZGF0b3JzIGlmIHRoZSB2YWxpZGF0aW9uIGNoZWNrIGZhaWxzLCBvdGhlcndpc2UgYG51bGxgLlxyXG4gICAqL1xyXG4gIHN0YXRpYyBjb21wb3NlID0gKHZhbGlkYXRvcnM6IChWYWxpZGF0b3JGbiB8IG51bGwgfCB1bmRlZmluZWQpW10gfCBudWxsKTogVmFsaWRhdG9yRm4gfCBudWxsID0+IHtcclxuICAgIGlmICghdmFsaWRhdG9ycykgcmV0dXJuIG51bGw7XHJcbiAgICBjb25zdCBwcmVzZW50VmFsaWRhdG9yczogVmFsaWRhdG9yRm5bXSA9IHZhbGlkYXRvcnMuZmlsdGVyKGlzUHJlc2VudCkgYXMgYW55O1xyXG4gICAgaWYgKHByZXNlbnRWYWxpZGF0b3JzLmxlbmd0aCA9PT0gMCkgcmV0dXJuIG51bGw7XHJcblxyXG4gICAgcmV0dXJuIGZ1bmN0aW9uKGNvbnRyb2w6IEZvcm1Db250cm9sKSB7XHJcbiAgICAgIHJldHVybiBfbWVyZ2VFcnJvcnMoX2V4ZWN1dGVWYWxpZGF0b3JzKGNvbnRyb2wsIHByZXNlbnRWYWxpZGF0b3JzKSk7XHJcbiAgICB9O1xyXG4gIH07XHJcblxyXG4gIC8qKlxyXG4gICAqIEBkZXNjcmlwdGlvblxyXG4gICAqIENvbXBvc2UgbXVsdGlwbGUgYXN5bmMgdmFsaWRhdG9ycyBpbnRvIGEgc2luZ2xlIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyB0aGUgdW5pb25cclxuICAgKiBvZiB0aGUgaW5kaXZpZHVhbCBlcnJvciBvYmplY3RzIGZvciB0aGUgcHJvdmlkZWQgY29udHJvbC5cclxuICAgKlxyXG4gICAqIEByZXR1cm5zIEEgdmFsaWRhdG9yIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyBhbiBlcnJvciBtYXAgd2l0aCB0aGVcclxuICAgKiBtZXJnZWQgZXJyb3Igb2JqZWN0cyBvZiB0aGUgYXN5bmMgdmFsaWRhdG9ycyBpZiB0aGUgdmFsaWRhdGlvbiBjaGVjayBmYWlscywgb3RoZXJ3aXNlIGBudWxsYC5cclxuICAgKi9cclxuICBzdGF0aWMgY29tcG9zZUFzeW5jKGFzeW5jVmFsaWRhdG9yczogQXN5bmNWYWxpZGF0b3JGbltdKTogQXN5bmNWYWxpZGF0b3JGbiB8IG51bGwge1xyXG4gICAgaWYgKCFhc3luY1ZhbGlkYXRvcnMpIHJldHVybiBudWxsO1xyXG4gICAgY29uc3QgcHJlc2VudFZhbGlkYXRvcnM6IEFzeW5jVmFsaWRhdG9yRm5bXSA9IGFzeW5jVmFsaWRhdG9ycy5maWx0ZXIoaXNQcmVzZW50KSBhcyBhbnk7XHJcbiAgICBpZiAocHJlc2VudFZhbGlkYXRvcnMubGVuZ3RoID09IDApIHJldHVybiBudWxsO1xyXG5cclxuICAgIHJldHVybiBmdW5jdGlvbihjb250cm9sOiBGb3JtQ29udHJvbCkge1xyXG4gICAgICBjb25zdCBvYnNlcnZhYmxlcyA9IF9leGVjdXRlQXN5bmNWYWxpZGF0b3JzKGNvbnRyb2wsIHByZXNlbnRWYWxpZGF0b3JzKTtcclxuXHJcbiAgICAgIHJldHVybiBmb3JrSm9pbihvYnNlcnZhYmxlcykucGlwZShcclxuICAgICAgICBtYXAoX21lcmdlRXJyb3JzKVxyXG4gICAgICApO1xyXG5cclxuICAgIH07XHJcbiAgfVxyXG5cclxuXHJcbiAgLyoqIEBpbnRlcm5hbCAqL1xyXG4gIF9pc0JveGVkVmFsdWUodmFsaWRhdG9yX2NvbmZpZ3M6IHsgW2tleTogc3RyaW5nXTogYW55IH0gfCB0cnVlIHwgVmFsaWRhdG9yRm4gfCBBc3luY1ZhbGlkYXRvckZuKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gXy5pc1BsYWluT2JqZWN0KHZhbGlkYXRvcl9jb25maWdzKTtcclxuICB9XHJcblxyXG5cclxufVxyXG5cclxuXHJcbmNvbnN0IEVNQUlMX1JFR0VYUCA9XHJcbiAgL14oPz0uezEsMjU0fSQpKD89LnsxLDY0fUApWy0hIyQlJicqKy8wLTk9P0EtWl5fYGEtent8fX5dKyhcXC5bLSEjJCUmJyorLzAtOT0/QS1aXl9gYS16e3x9fl0rKSpAW0EtWmEtejAtOV0oW0EtWmEtejAtOS1dezAsNjF9W0EtWmEtejAtOV0pPyhcXC5bQS1aYS16MC05XShbQS1aYS16MC05LV17MCw2MX1bQS1aYS16MC05XSk/KSokLztcclxuXHJcblxyXG5mdW5jdGlvbiBpc0VtcHR5SW5wdXRWYWx1ZSh2YWx1ZTogYW55KTogYm9vbGVhbiB7XHJcbiAgLy8gd2UgZG9uJ3QgY2hlY2sgZm9yIHN0cmluZyBoZXJlIHNvIGl0IGFsc28gd29ya3Mgd2l0aCBhcnJheXNcclxuICByZXR1cm4gdmFsdWUgPT0gbnVsbCB8fCB2YWx1ZS5sZW5ndGggPT09IDA7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGlzUHJlc2VudChvOiBhbnkpOiBib29sZWFuIHtcclxuICByZXR1cm4gbyAhPSBudWxsO1xyXG59XHJcblxyXG5mdW5jdGlvbiBfZXhlY3V0ZVZhbGlkYXRvcnMoY29udHJvbDogRm9ybUNvbnRyb2wsIHZhbGlkYXRvcnM6IFZhbGlkYXRvckZuW10pOiBhbnlbXSB7XHJcbiAgcmV0dXJuIHZhbGlkYXRvcnMubWFwKHYgPT4gdihjb250cm9sKSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIF9leGVjdXRlQXN5bmNWYWxpZGF0b3JzKGNvbnRyb2w6IEZvcm1Db250cm9sLCB2YWxpZGF0b3JzOiBBc3luY1ZhbGlkYXRvckZuW10pOiBhbnlbXSB7XHJcbiAgcmV0dXJuIHZhbGlkYXRvcnMubWFwKHYgPT4gdihjb250cm9sKSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIF9tZXJnZUVycm9ycyhhcnJheU9mRXJyb3JzOiBWYWxpZGF0aW9uRXJyb3JzW10pOiBWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbCB7XHJcbiAgY29uc3QgZXJyb3JzOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ID1cclxuICAgIF8ucmVkdWNlKGFycmF5T2ZFcnJvcnMsIChyZXN1bHQ6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsLCBlcnI6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsKSA9PiB7XHJcbiAgICAgIHJldHVybiBlcnIgPyB7IC4uLnJlc3VsdCwgLi4uZXJyIH0gOiByZXN1bHQ7XHJcbiAgICB9LCB7fSk7XHJcblxyXG4gIHJldHVybiBPYmplY3Qua2V5cyhlcnJvcnMpLmxlbmd0aCA9PT0gMCA/IG51bGwgOiBlcnJvcnM7XHJcblxyXG59XHJcbiJdfQ==