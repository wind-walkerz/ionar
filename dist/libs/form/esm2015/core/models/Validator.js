/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
export class Validators {
    /**
     * \@description
     * Compose multiple async validators into a single function that returns the union
     * of the individual error objects for the provided control.
     *
     * @param {?} asyncValidators
     * @return {?} A validator function that returns an error map with the
     * merged error objects of the async validators if the validation check fails, otherwise `null`.
     */
    static composeAsync(asyncValidators) {
        if (!asyncValidators)
            return null;
        /** @type {?} */
        const presentValidators = (/** @type {?} */ (asyncValidators.filter(isPresent)));
        if (presentValidators.length == 0)
            return null;
        return function (control) {
            /** @type {?} */
            const observables = _executeAsyncValidators(control, presentValidators);
            return forkJoin(observables).pipe(map(_mergeErrors));
        };
    }
    /**
     * \@internal
     * @param {?} validator_configs
     * @return {?}
     */
    _isBoxedValue(validator_configs) {
        return _.isPlainObject(validator_configs);
    }
}
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
Validators.required = (c) => isEmptyInputValue(c.value) ? { 'required': true } : null;
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
Validators.email = (control) => {
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
Validators.stringLength = (control) => {
    /** @type {?} */
    const controlConfig = (/** @type {?} */ (control.configuration));
    if (isEmptyInputValue(control.value)) {
        return null; // don't validate empty values to allow optional controls
    }
    if (controlConfig.type !== ('input' || 'textarea')) {
        throw new Error(`'stringLength' validator can only be used with control type 'input' or 'textarea'`);
    }
    /** @type {?} */
    const min = controlConfig.validators['stringLength'].min;
    /** @type {?} */
    const max = controlConfig.validators['stringLength'].max;
    /** @type {?} */
    const length = control.value ? control.value.length : 0;
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
Validators.equalTo = (control) => {
    if (isEmptyInputValue(control.value)) {
        return null; // don't validate empty values to allow optional controls
    }
    /** @type {?} */
    const controlConfig = (/** @type {?} */ (control.configuration));
    /** @type {?} */
    const compareWith = _.isString(controlConfig.validators['equalTo']) ? controlConfig.validators['equalTo'] : controlConfig.validators['equalTo'].compare;
    /** @type {?} */
    const compared_control = control.parent.controls[compareWith];
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
Validators.compose = (validators) => {
    if (!validators)
        return null;
    /** @type {?} */
    const presentValidators = (/** @type {?} */ (validators.filter(isPresent)));
    if (presentValidators.length === 0)
        return null;
    return function (control) {
        return _mergeErrors(_executeValidators(control, presentValidators));
    };
};
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
const EMAIL_REGEXP = /^(?=.{1,254}$)(?=.{1,64}@)[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+(\.[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+)*@[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?(\.[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?)*$/;
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
    return validators.map(v => v(control));
}
/**
 * @param {?} control
 * @param {?} validators
 * @return {?}
 */
function _executeAsyncValidators(control, validators) {
    return validators.map(v => v(control));
}
/**
 * @param {?} arrayOfErrors
 * @return {?}
 */
function _mergeErrors(arrayOfErrors) {
    /** @type {?} */
    const errors = _.reduce(arrayOfErrors, (result, err) => {
        return err ? Object.assign({}, result, err) : result;
    }, {});
    return Object.keys(errors).length === 0 ? null : errors;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVmFsaWRhdG9yLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGlvbmFyL2Zvcm0vIiwic291cmNlcyI6WyJjb3JlL21vZGVscy9WYWxpZGF0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBRSxRQUFRLEVBQWMsTUFBTSxNQUFNLENBQUM7QUFDNUMsT0FBTyxDQUFDLE1BQU0sUUFBUSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7OztBQUdyQyxzQ0FFQzs7OztBQUVELHVDQVlDOzs7SUFYQyxxQ0FBeUI7O0lBQ3pCLGtDQUFzQjs7SUFDdEIseUNBSUU7O0lBRUYsb0NBQTBEOzs7Ozs7O0FBZTVELGlDQUVDOzs7OztBQU1ELHNDQUVDOzs7Ozs7Ozs7O0FBV0QsTUFBTSxPQUFPLFVBQVU7Ozs7Ozs7Ozs7SUEySnJCLE1BQU0sQ0FBQyxZQUFZLENBQUMsZUFBbUM7UUFDckQsSUFBSSxDQUFDLGVBQWU7WUFBRSxPQUFPLElBQUksQ0FBQzs7Y0FDNUIsaUJBQWlCLEdBQXVCLG1CQUFBLGVBQWUsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLEVBQU87UUFDdEYsSUFBSSxpQkFBaUIsQ0FBQyxNQUFNLElBQUksQ0FBQztZQUFFLE9BQU8sSUFBSSxDQUFDO1FBRS9DLE9BQU8sVUFBUyxPQUFvQjs7a0JBQzVCLFdBQVcsR0FBRyx1QkFBdUIsQ0FBQyxPQUFPLEVBQUUsaUJBQWlCLENBQUM7WUFFdkUsT0FBTyxRQUFRLENBQUMsV0FBVyxDQUFDLENBQUMsSUFBSSxDQUMvQixHQUFHLENBQUMsWUFBWSxDQUFDLENBQ2xCLENBQUM7UUFFSixDQUFDLENBQUM7SUFDSixDQUFDOzs7Ozs7SUFJRCxhQUFhLENBQUMsaUJBQWlGO1FBQzdGLE9BQU8sQ0FBQyxDQUFDLGFBQWEsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0lBQzVDLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBMUpNLG1CQUFRLEdBQUcsQ0FBQyxD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QyxPQUFPLENBQUMsQ0FBQyxDQUFDO0FBQ3pDLENBQUM7Ozs7O0FBRUQsU0FBUyxZQUFZLENBQUMsYUFBaUM7O1VBQy9DLE1BQU0sR0FDVixDQUFDLENBQUMsTUFBTSxDQUFDLGFBQWEsRUFBRSxDQUFDLE1BQStCLEVBQUUsR0FBNEIsRUFBRSxFQUFFO1FBQ3hGLE9BQU8sR0FBRyxDQUFDLENBQUMsbUJBQU0sTUFBTSxFQUFLLEdBQUcsRUFBRyxDQUFDLENBQUMsTUFBTSxDQUFDO0lBQzlDLENBQUMsRUFBRSxFQUFFLENBQUM7SUFFUixPQUFPLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUM7QUFFMUQsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZvcm1Db250cm9sIH0gZnJvbSAnLi9Gb3JtQ29udHJvbCc7XHJcbmltcG9ydCB7IGZvcmtKb2luLCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XHJcbmltcG9ydCB7IEZvcm0gfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgQ29udHJvbENvbmZpZyB9IGZyb20gJy4uL21vZGVscy9Db250cm9sQ29uZmlnJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgVmFsaWRhdGlvbkVycm9ycyB7XHJcbiAgW2tleTogc3RyaW5nXTogYW55XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgVmFsaWRhdGlvbkNvbmZpZ3Mge1xyXG4gIHJlcXVpcmVkPzogdHJ1ZSB8IFN0cmluZyxcclxuICBlbWFpbD86IHRydWUgfCBTdHJpbmcsXHJcbiAgc3RyaW5nTGVuZ3RoPzoge1xyXG4gICAgbWluPzogbnVtYmVyLFxyXG4gICAgbWF4PzogbnVtYmVyLFxyXG4gICAgbWVzc2FnZT86IHN0cmluZ1xyXG4gIH0sXHJcblxyXG4gIGVxdWFsVG8/OiB7IGNvbXBhcmU/OiBzdHJpbmcsIG1lc3NhZ2U/OiBzdHJpbmcgfSB8IHN0cmluZyxcclxuXHJcbiAgW25hbWU6IHN0cmluZ106IFZhbGlkYXRvclR5cGVcclxufVxyXG5cclxuXHJcbmV4cG9ydCB0eXBlIFZhbGlkYXRvclR5cGUgPSB7IG1lc3NhZ2U/OiBhbnksIFtuYW1lOiBzdHJpbmddOiBhbnkgfVxyXG4gIHwgc3RyaW5nXHJcbiAgfCB0cnVlXHJcbiAgfCBWYWxpZGF0b3JGblxyXG4gIHwgQXN5bmNWYWxpZGF0b3JGblxyXG5cclxuLyoqXHJcbiAqIEBwdWJsaWNBcGlcclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgVmFsaWRhdG9yRm4ge1xyXG4gIChjb250cm9sOiBGb3JtQ29udHJvbCk6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsXHJcbn1cclxuXHJcblxyXG4vKipcclxuICogQHB1YmxpY0FwaVxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBBc3luY1ZhbGlkYXRvckZuIHtcclxuICAoY29udHJvbDogRm9ybUNvbnRyb2wpOiBPYnNlcnZhYmxlPFZhbGlkYXRpb25FcnJvcnMgfCBudWxsPjtcclxufVxyXG5cclxuLyoqXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiBQcm92aWRlcyBhIHNldCBvZiBidWlsdC1pbiB2YWxpZGF0b3JzIHRoYXQgY2FuIGJlIHVzZWQgYnkgZm9ybSBjb250cm9scy5cclxuICpcclxuICogQSB2YWxpZGF0b3IgaXMgYSBmdW5jdGlvbiB0aGF0IHByb2Nlc3NlcyBhIGBGb3JtQ29udHJvbGAgb3IgY29sbGVjdGlvbiBvZlxyXG4gKiBjb250cm9scyBhbmQgcmV0dXJucyBhbiBlcnJvciBtYXAgb3IgbnVsbC4gQSBudWxsIG1hcCBtZWFucyB0aGF0IHZhbGlkYXRpb24gaGFzIHBhc3NlZC5cclxuICogQHB1YmxpY0FwaVxyXG4gKi9cclxuLy8gQGR5bmFtaWNcclxuZXhwb3J0IGNsYXNzIFZhbGlkYXRvcnMge1xyXG5cclxuICAvKipcclxuICAgKiBAZGVzY3JpcHRpb25cclxuICAgKiBWYWxpZGF0b3IgdGhhdCByZXF1aXJlcyB0aGUgY29udHJvbCBoYXZlIGEgbm9uLWVtcHR5IHZhbHVlLlxyXG4gICAqXHJcbiAgICogQHVzYWdlTm90ZXNcclxuICAgKlxyXG4gICAqICMjIyBWYWxpZGF0ZSB0aGF0IHRoZSBmaWVsZCBpcyBub24tZW1wdHlcclxuICAgKlxyXG4gICAqIGBgYHR5cGVzY3JpcHRcclxuICAgKiBjb25zdCBjb250cm9sID0gbmV3IEZvcm1Db250cm9sKCcnLCBWYWxpZGF0b3JzLnJlcXVpcmVkKTtcclxuICAgKlxyXG4gICAqIGNvbnNvbGUubG9nKGNvbnRyb2wuZXJyb3JzKTsgLy8ge3JlcXVpcmVkOiB0cnVlfVxyXG4gICAqIGBgYFxyXG4gICAqXHJcbiAgICogQHJldHVybnMgQW4gZXJyb3IgbWFwIHdpdGggdGhlIGByZXF1aXJlZGAgcHJvcGVydHlcclxuICAgKiBpZiB0aGUgdmFsaWRhdGlvbiBjaGVjayBmYWlscywgb3RoZXJ3aXNlIGBudWxsYC5cclxuICAgKlxyXG4gICAqL1xyXG4gIHN0YXRpYyByZXF1aXJlZCA9IChjOiBGb3JtQ29udHJvbCk6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsID0+XHJcbiAgICBpc0VtcHR5SW5wdXRWYWx1ZShjLnZhbHVlKSA/IHsgJ3JlcXVpcmVkJzogdHJ1ZSB9IDogbnVsbDtcclxuXHJcbiAgLyoqXHJcbiAgICogQGRlc2NyaXB0aW9uXHJcbiAgICogVmFsaWRhdG9yIHRoYXQgcmVxdWlyZXMgdGhlIGNvbnRyb2wncyB2YWx1ZSBwYXNzIGFuIGVtYWlsIHZhbGlkYXRpb24gdGVzdC5cclxuICAgKlxyXG4gICAqIEB1c2FnZU5vdGVzXHJcbiAgICpcclxuICAgKiAjIyMgVmFsaWRhdGUgdGhhdCB0aGUgZmllbGQgbWF0Y2hlcyBhIHZhbGlkIGVtYWlsIHBhdHRlcm5cclxuICAgKlxyXG4gICAqIGBgYHR5cGVzY3JpcHRcclxuICAgKiBjb25zdCBjb250cm9sID0gbmV3IEZvcm1Db250cm9sKCdiYWRAJywgVmFsaWRhdG9ycy5lbWFpbCk7XHJcbiAgICpcclxuICAgKiBjb25zb2xlLmxvZyhjb250cm9sLmVycm9ycyk7IC8vIHtlbWFpbDogdHJ1ZX1cclxuICAgKiBgYGBcclxuICAgKlxyXG4gICAqIEByZXR1cm5zIEFuIGVycm9yIG1hcCB3aXRoIHRoZSBgZW1haWxgIHByb3BlcnR5XHJcbiAgICogaWYgdGhlIHZhbGlkYXRpb24gY2hlY2sgZmFpbHMsIG90aGVyd2lzZSBgbnVsbGAuXHJcbiAgICpcclxuICAgKi9cclxuICBzdGF0aWMgZW1haWwgPSAoY29udHJvbDogRm9ybUNvbnRyb2wpOiBWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbCA9PiB7XHJcblxyXG4gICAgaWYgKGlzRW1wdHlJbnB1dFZhbHVlKGNvbnRyb2wudmFsdWUpKSB7XHJcbiAgICAgIHJldHVybiBudWxsOyAgLy8gZG9uJ3QgdmFsaWRhdGUgZW1wdHkgdmFsdWVzIHRvIGFsbG93IG9wdGlvbmFsIGNvbnRyb2xzXHJcbiAgICB9XHJcbiAgICByZXR1cm4gRU1BSUxfUkVHRVhQLnRlc3QoY29udHJvbC52YWx1ZSkgPyBudWxsIDogeyAnZW1haWwnOiB0cnVlIH07XHJcbiAgfTtcclxuXHJcblxyXG4gIC8qKlxyXG4gICAqIEBkZXNjcmlwdGlvblxyXG4gICAqIFZhbGlkYXRvciB0aGF0IHJlcXVpcmVzIHRoZSBsZW5ndGggb2YgdGhlIGNvbnRyb2wncyB2YWx1ZSB0byBiZSBncmVhdGVyIHRoYW4gb3IgZXF1YWxcclxuICAgKiB0byB0aGUgcHJvdmlkZWQgbWluaW11bSBsZW5ndGguIFRoaXMgdmFsaWRhdG9yIGlzIGFsc28gcHJvdmlkZWQgYnkgZGVmYXVsdCBpZiB5b3UgdXNlIHRoZVxyXG4gICAqIHRoZSBIVE1MNSBgbWlubGVuZ3RoYCBhdHRyaWJ1dGUuXHJcbiAgICpcclxuICAgKiBAdXNhZ2VOb3Rlc1xyXG4gICAqXHJcbiAgICogIyMjIFZhbGlkYXRlIHRoYXQgdGhlIGZpZWxkIGhhcyBhIG1pbmltdW0gb2YgMyBjaGFyYWN0ZXJzXHJcbiAgICpcclxuICAgKiBgYGB0eXBlc2NyaXB0XHJcbiAgICogY29uc3QgY29udHJvbCA9IG5ldyBGb3JtQ29udHJvbCgnbmcnLCBWYWxpZGF0b3JzLm1pbkxlbmd0aCgzKSk7XHJcbiAgICpcclxuICAgKiBjb25zb2xlLmxvZyhjb250cm9sLmVycm9ycyk7IC8vIHttaW5sZW5ndGg6IHtyZXF1aXJlZExlbmd0aDogMywgYWN0dWFsTGVuZ3RoOiAyfX1cclxuICAgKiBgYGBcclxuICAgKlxyXG4gICAqIGBgYGh0bWxcclxuICAgKiA8aW5wdXQgbWlubGVuZ3RoPVwiNVwiPlxyXG4gICAqIGBgYFxyXG4gICAqXHJcbiAgICogQHJldHVybnMgQSB2YWxpZGF0b3IgZnVuY3Rpb24gdGhhdCByZXR1cm5zIGFuIGVycm9yIG1hcCB3aXRoIHRoZVxyXG4gICAqIGBtaW5sZW5ndGhgIGlmIHRoZSB2YWxpZGF0aW9uIGNoZWNrIGZhaWxzLCBvdGhlcndpc2UgYG51bGxgLlxyXG4gICAqL1xyXG4gIHN0YXRpYyBzdHJpbmdMZW5ndGggPSAoY29udHJvbDogRm9ybUNvbnRyb2wpOiBWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbCA9PiB7XHJcblxyXG4gICAgY29uc3QgY29udHJvbENvbmZpZyA9IDxDb250cm9sQ29uZmlnPmNvbnRyb2wuY29uZmlndXJhdGlvbjtcclxuXHJcbiAgICBpZiAoaXNFbXB0eUlucHV0VmFsdWUoY29udHJvbC52YWx1ZSkpIHtcclxuICAgICAgcmV0dXJuIG51bGw7ICAvLyBkb24ndCB2YWxpZGF0ZSBlbXB0eSB2YWx1ZXMgdG8gYWxsb3cgb3B0aW9uYWwgY29udHJvbHNcclxuICAgIH1cclxuXHJcbiAgICBpZiAoY29udHJvbENvbmZpZy50eXBlICE9PSAoJ2lucHV0JyB8fCAndGV4dGFyZWEnKSkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYCdzdHJpbmdMZW5ndGgnIHZhbGlkYXRvciBjYW4gb25seSBiZSB1c2VkIHdpdGggY29udHJvbCB0eXBlICdpbnB1dCcgb3IgJ3RleHRhcmVhJ2ApO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0XHJcbiAgICAgIG1pbjogbnVtYmVyID0gY29udHJvbENvbmZpZy52YWxpZGF0b3JzWydzdHJpbmdMZW5ndGgnXS5taW4sXHJcbiAgICAgIG1heDogbnVtYmVyID0gY29udHJvbENvbmZpZy52YWxpZGF0b3JzWydzdHJpbmdMZW5ndGgnXS5tYXgsXHJcbiAgICAgIGxlbmd0aDogbnVtYmVyID0gY29udHJvbC52YWx1ZSA/IGNvbnRyb2wudmFsdWUubGVuZ3RoIDogMDtcclxuXHJcbiAgICBpZiAobGVuZ3RoIDwgbWluKSB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgJ3N0cmluZ0xlbmd0aCc6IHtcclxuICAgICAgICAgICdtaW5MZW5ndGgnOiBtaW4sXHJcbiAgICAgICAgICAnYWN0dWFsTGVuZ3RoJzogbGVuZ3RoXHJcbiAgICAgICAgfVxyXG4gICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChsZW5ndGggPiBtYXgpIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAnc3RyaW5nTGVuZ3RoJzoge1xyXG4gICAgICAgICAgJ21heExlbmd0aCc6IG1heCxcclxuICAgICAgICAgICdhY3R1YWxMZW5ndGgnOiBsZW5ndGhcclxuICAgICAgICB9XHJcbiAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfTtcclxuXHJcblxyXG4gIHN0YXRpYyBlcXVhbFRvID0gKGNvbnRyb2w6IEZvcm1Db250cm9sKTogVmFsaWRhdGlvbkVycm9ycyB8IG51bGwgPT4ge1xyXG5cclxuICAgIGlmIChpc0VtcHR5SW5wdXRWYWx1ZShjb250cm9sLnZhbHVlKSkge1xyXG4gICAgICByZXR1cm4gbnVsbDsgIC8vIGRvbid0IHZhbGlkYXRlIGVtcHR5IHZhbHVlcyB0byBhbGxvdyBvcHRpb25hbCBjb250cm9sc1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGNvbnRyb2xDb25maWcgPSA8Q29udHJvbENvbmZpZz5jb250cm9sLmNvbmZpZ3VyYXRpb247XHJcblxyXG4gICAgY29uc3QgY29tcGFyZVdpdGggPSBfLmlzU3RyaW5nKGNvbnRyb2xDb25maWcudmFsaWRhdG9yc1snZXF1YWxUbyddKSA/IGNvbnRyb2xDb25maWcudmFsaWRhdG9yc1snZXF1YWxUbyddIDogY29udHJvbENvbmZpZy52YWxpZGF0b3JzWydlcXVhbFRvJ10uY29tcGFyZTtcclxuXHJcbiAgICBjb25zdCBjb21wYXJlZF9jb250cm9sID0gY29udHJvbC5wYXJlbnQuY29udHJvbHNbY29tcGFyZVdpdGhdO1xyXG5cclxuICAgIHJldHVybiAoSlNPTi5zdHJpbmdpZnkoY29udHJvbC52YWx1ZSkgPT09IEpTT04uc3RyaW5naWZ5KGNvbXBhcmVkX2NvbnRyb2wudmFsdWUpKVxyXG4gICAgICA/IG51bGwgOiB7IGVxdWFsVG86IGNvbnRyb2xDb25maWcudmFsaWRhdG9yc1snZXF1YWxUbyddIH07XHJcbiAgfTtcclxuXHJcblxyXG4gIC8qKlxyXG4gICAqIEBkZXNjcmlwdGlvblxyXG4gICAqIENvbXBvc2UgbXVsdGlwbGUgdmFsaWRhdG9ycyBpbnRvIGEgc2luZ2xlIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyB0aGUgdW5pb25cclxuICAgKiBvZiB0aGUgaW5kaXZpZHVhbCBlcnJvciBtYXBzIGZvciB0aGUgcHJvdmlkZWQgY29udHJvbC5cclxuICAgKlxyXG4gICAqIEByZXR1cm5zIEEgdmFsaWRhdG9yIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyBhbiBlcnJvciBtYXAgd2l0aCB0aGVcclxuICAgKiBtZXJnZWQgZXJyb3IgbWFwcyBvZiB0aGUgdmFsaWRhdG9ycyBpZiB0aGUgdmFsaWRhdGlvbiBjaGVjayBmYWlscywgb3RoZXJ3aXNlIGBudWxsYC5cclxuICAgKi9cclxuICBzdGF0aWMgY29tcG9zZSA9ICh2YWxpZGF0b3JzOiAoVmFsaWRhdG9yRm4gfCBudWxsIHwgdW5kZWZpbmVkKVtdIHwgbnVsbCk6IFZhbGlkYXRvckZuIHwgbnVsbCA9PiB7XHJcbiAgICBpZiAoIXZhbGlkYXRvcnMpIHJldHVybiBudWxsO1xyXG4gICAgY29uc3QgcHJlc2VudFZhbGlkYXRvcnM6IFZhbGlkYXRvckZuW10gPSB2YWxpZGF0b3JzLmZpbHRlcihpc1ByZXNlbnQpIGFzIGFueTtcclxuICAgIGlmIChwcmVzZW50VmFsaWRhdG9ycy5sZW5ndGggPT09IDApIHJldHVybiBudWxsO1xyXG5cclxuICAgIHJldHVybiBmdW5jdGlvbihjb250cm9sOiBGb3JtQ29udHJvbCkge1xyXG4gICAgICByZXR1cm4gX21lcmdlRXJyb3JzKF9leGVjdXRlVmFsaWRhdG9ycyhjb250cm9sLCBwcmVzZW50VmFsaWRhdG9ycykpO1xyXG4gICAgfTtcclxuICB9O1xyXG5cclxuICAvKipcclxuICAgKiBAZGVzY3JpcHRpb25cclxuICAgKiBDb21wb3NlIG11bHRpcGxlIGFzeW5jIHZhbGlkYXRvcnMgaW50byBhIHNpbmdsZSBmdW5jdGlvbiB0aGF0IHJldHVybnMgdGhlIHVuaW9uXHJcbiAgICogb2YgdGhlIGluZGl2aWR1YWwgZXJyb3Igb2JqZWN0cyBmb3IgdGhlIHByb3ZpZGVkIGNvbnRyb2wuXHJcbiAgICpcclxuICAgKiBAcmV0dXJucyBBIHZhbGlkYXRvciBmdW5jdGlvbiB0aGF0IHJldHVybnMgYW4gZXJyb3IgbWFwIHdpdGggdGhlXHJcbiAgICogbWVyZ2VkIGVycm9yIG9iamVjdHMgb2YgdGhlIGFzeW5jIHZhbGlkYXRvcnMgaWYgdGhlIHZhbGlkYXRpb24gY2hlY2sgZmFpbHMsIG90aGVyd2lzZSBgbnVsbGAuXHJcbiAgICovXHJcbiAgc3RhdGljIGNvbXBvc2VBc3luYyhhc3luY1ZhbGlkYXRvcnM6IEFzeW5jVmFsaWRhdG9yRm5bXSk6IEFzeW5jVmFsaWRhdG9yRm4gfCBudWxsIHtcclxuICAgIGlmICghYXN5bmNWYWxpZGF0b3JzKSByZXR1cm4gbnVsbDtcclxuICAgIGNvbnN0IHByZXNlbnRWYWxpZGF0b3JzOiBBc3luY1ZhbGlkYXRvckZuW10gPSBhc3luY1ZhbGlkYXRvcnMuZmlsdGVyKGlzUHJlc2VudCkgYXMgYW55O1xyXG4gICAgaWYgKHByZXNlbnRWYWxpZGF0b3JzLmxlbmd0aCA9PSAwKSByZXR1cm4gbnVsbDtcclxuXHJcbiAgICByZXR1cm4gZnVuY3Rpb24oY29udHJvbDogRm9ybUNvbnRyb2wpIHtcclxuICAgICAgY29uc3Qgb2JzZXJ2YWJsZXMgPSBfZXhlY3V0ZUFzeW5jVmFsaWRhdG9ycyhjb250cm9sLCBwcmVzZW50VmFsaWRhdG9ycyk7XHJcblxyXG4gICAgICByZXR1cm4gZm9ya0pvaW4ob2JzZXJ2YWJsZXMpLnBpcGUoXHJcbiAgICAgICAgbWFwKF9tZXJnZUVycm9ycylcclxuICAgICAgKTtcclxuXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcblxyXG4gIC8qKiBAaW50ZXJuYWwgKi9cclxuICBfaXNCb3hlZFZhbHVlKHZhbGlkYXRvcl9jb25maWdzOiB7IFtrZXk6IHN0cmluZ106IGFueSB9IHwgdHJ1ZSB8IFZhbGlkYXRvckZuIHwgQXN5bmNWYWxpZGF0b3JGbik6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIF8uaXNQbGFpbk9iamVjdCh2YWxpZGF0b3JfY29uZmlncyk7XHJcbiAgfVxyXG5cclxuXHJcbn1cclxuXHJcblxyXG5jb25zdCBFTUFJTF9SRUdFWFAgPVxyXG4gIC9eKD89LnsxLDI1NH0kKSg/PS57MSw2NH1AKVstISMkJSYnKisvMC05PT9BLVpeX2BhLXp7fH1+XSsoXFwuWy0hIyQlJicqKy8wLTk9P0EtWl5fYGEtent8fX5dKykqQFtBLVphLXowLTldKFtBLVphLXowLTktXXswLDYxfVtBLVphLXowLTldKT8oXFwuW0EtWmEtejAtOV0oW0EtWmEtejAtOS1dezAsNjF9W0EtWmEtejAtOV0pPykqJC87XHJcblxyXG5cclxuZnVuY3Rpb24gaXNFbXB0eUlucHV0VmFsdWUodmFsdWU6IGFueSk6IGJvb2xlYW4ge1xyXG4gIC8vIHdlIGRvbid0IGNoZWNrIGZvciBzdHJpbmcgaGVyZSBzbyBpdCBhbHNvIHdvcmtzIHdpdGggYXJyYXlzXHJcbiAgcmV0dXJuIHZhbHVlID09IG51bGwgfHwgdmFsdWUubGVuZ3RoID09PSAwO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpc1ByZXNlbnQobzogYW55KTogYm9vbGVhbiB7XHJcbiAgcmV0dXJuIG8gIT0gbnVsbDtcclxufVxyXG5cclxuZnVuY3Rpb24gX2V4ZWN1dGVWYWxpZGF0b3JzKGNvbnRyb2w6IEZvcm1Db250cm9sLCB2YWxpZGF0b3JzOiBWYWxpZGF0b3JGbltdKTogYW55W10ge1xyXG4gIHJldHVybiB2YWxpZGF0b3JzLm1hcCh2ID0+IHYoY29udHJvbCkpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBfZXhlY3V0ZUFzeW5jVmFsaWRhdG9ycyhjb250cm9sOiBGb3JtQ29udHJvbCwgdmFsaWRhdG9yczogQXN5bmNWYWxpZGF0b3JGbltdKTogYW55W10ge1xyXG4gIHJldHVybiB2YWxpZGF0b3JzLm1hcCh2ID0+IHYoY29udHJvbCkpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBfbWVyZ2VFcnJvcnMoYXJyYXlPZkVycm9yczogVmFsaWRhdGlvbkVycm9yc1tdKTogVmFsaWRhdGlvbkVycm9ycyB8IG51bGwge1xyXG4gIGNvbnN0IGVycm9yczogeyBba2V5OiBzdHJpbmddOiBhbnkgfSA9XHJcbiAgICBfLnJlZHVjZShhcnJheU9mRXJyb3JzLCAocmVzdWx0OiBWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbCwgZXJyOiBWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbCkgPT4ge1xyXG4gICAgICByZXR1cm4gZXJyID8geyAuLi5yZXN1bHQsIC4uLmVyciB9IDogcmVzdWx0O1xyXG4gICAgfSwge30pO1xyXG5cclxuICByZXR1cm4gT2JqZWN0LmtleXMoZXJyb3JzKS5sZW5ndGggPT09IDAgPyBudWxsIDogZXJyb3JzO1xyXG5cclxufVxyXG4iXX0=