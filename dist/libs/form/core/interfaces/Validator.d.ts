import { AbstractControl } from '../models/AbstractControl';
import { Observable } from 'rxjs';
export interface JoiError {
    /**string with a description of the error*/
    message: string;
    /** ordered array where each element is the accessor to the value where the error happened */
    path: (string | number | symbol)[];
    /** type of the error */
    type: string;
    /**
     *  Object providing context of the error containing at least:
     *  key - key of the value that errored, equivalent to the last element of details.path.
     *label - label of the value that errored, or the key if any, or the default language.root.
     *
     * */
    context: {};
}
export declare type JoiSchema = {
    isJoi: true;
};
/**
 * @publicApi
 */
export interface AsyncValidatorFn {
    (control: AbstractControl): Observable<JoiError | null>;
}
