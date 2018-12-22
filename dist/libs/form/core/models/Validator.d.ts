import { FormControl } from './FormControl';
import { Observable } from 'rxjs';
export interface ValidationErrors {
    [key: string]: any;
}
export interface ValidationConfigs {
    required?: true | String;
    email?: true | String;
    stringLength?: {
        min?: number;
        max?: number;
        message?: string;
    };
    equalTo?: {
        compare?: string;
        message?: string;
    } | string;
    [name: string]: ValidatorType;
}
export declare type ValidatorType = {
    message?: any;
    [name: string]: any;
} | string | true | ValidatorFn | AsyncValidatorFn;
/**
 * @publicApi
 */
export interface ValidatorFn {
    (control: FormControl): ValidationErrors | null;
}
/**
 * @publicApi
 */
export interface AsyncValidatorFn {
    (control: FormControl): Observable<ValidationErrors | null>;
}
/**
 * @description
 * Provides a set of built-in validators that can be used by form controls.
 *
 * A validator is a function that processes a `FormControl` or collection of
 * controls and returns an error map or null. A null map means that validation has passed.
 * @publicApi
 */
export declare class Validators {
    /**
     * @description
     * Validator that requires the control have a non-empty value.
     *
     * @usageNotes
     *
     * ### Validate that the field is non-empty
     *
     * ```typescript
     * const control = new FormControl('', Validators.required);
     *
     * console.log(control.errors); // {required: true}
     * ```
     *
     * @returns An error map with the `required` property
     * if the validation check fails, otherwise `null`.
     *
     */
    static required: (c: FormControl) => ValidationErrors;
    /**
     * @description
     * Validator that requires the control's value pass an email validation test.
     *
     * @usageNotes
     *
     * ### Validate that the field matches a valid email pattern
     *
     * ```typescript
     * const control = new FormControl('bad@', Validators.email);
     *
     * console.log(control.errors); // {email: true}
     * ```
     *
     * @returns An error map with the `email` property
     * if the validation check fails, otherwise `null`.
     *
     */
    static email: (control: FormControl) => ValidationErrors;
    /**
     * @description
     * Validator that requires the length of the control's value to be greater than or equal
     * to the provided minimum length. This validator is also provided by default if you use the
     * the HTML5 `minlength` attribute.
     *
     * @usageNotes
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
     * @returns A validator function that returns an error map with the
     * `minlength` if the validation check fails, otherwise `null`.
     */
    static stringLength: (control: FormControl) => ValidationErrors;
    static equalTo: (control: FormControl) => ValidationErrors;
    /**
     * @description
     * Compose multiple validators into a single function that returns the union
     * of the individual error maps for the provided control.
     *
     * @returns A validator function that returns an error map with the
     * merged error maps of the validators if the validation check fails, otherwise `null`.
     */
    static compose: (validators: ValidatorFn[]) => ValidatorFn;
    /**
     * @description
     * Compose multiple async validators into a single function that returns the union
     * of the individual error objects for the provided control.
     *
     * @returns A validator function that returns an error map with the
     * merged error objects of the async validators if the validation check fails, otherwise `null`.
     */
    static composeAsync(asyncValidators: AsyncValidatorFn[]): AsyncValidatorFn | null;
    /** @internal */
    _isBoxedValue(validator_configs: {
        [key: string]: any;
    } | true | ValidatorFn | AsyncValidatorFn): boolean;
}
