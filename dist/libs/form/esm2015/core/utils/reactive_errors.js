/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { FormErrorExamples as Examples } from './error_examples';
export class ReactiveErrors {
    /**
     * @return {?}
     */
    static controlParentException() {
        throw new Error(`formControlName must be used with a parent formGroup directive.  You'll want to add a formGroup
       directive and pass it an existing FormGroup instance (you can create one in your class).

      Example:

      ${Examples.formControlName}`);
    }
    /**
     * @return {?}
     */
    static ngModelGroupException() {
        throw new Error(`formControlName cannot be used with an ngModelGroup parent. It is only compatible with parents
       that also have a "form" prefix: formGroupName, formArrayName, or formGroup.

       Option 1:  Update the parent to be formGroupName (reactive form strategy)

        ${Examples.formGroupName}

        Option 2: Use ngModel instead of formControlName (template-driven strategy)

        ${Examples.ngModelGroup}`);
    }
    /**
     * @return {?}
     */
    static missingFormException() {
        throw new Error(`formGroup expects a FormGroup instance. Please pass one in.

       Example:

       ${Examples.formControlName}`);
    }
    /**
     * @return {?}
     */
    static groupParentException() {
        throw new Error(`formGroupName must be used with a parent formGroup directive.  You'll want to add a formGroup
      directive and pass it an existing FormGroup instance (you can create one in your class).

      Example:

      ${Examples.formGroupName}`);
    }
    /**
     * @return {?}
     */
    static arrayParentException() {
        throw new Error(`formArrayName must be used with a parent formGroup directive.  You'll want to add a formGroup
       directive and pass it an existing FormGroup instance (you can create one in your class).

        Example:

        ${Examples.formArrayName}`);
    }
    /**
     * @return {?}
     */
    static disabledAttrWarning() {
        console.warn(`
      It looks like you're using the disabled attribute with a reactive form directive. If you set disabled to true
      when you set up this control in your component class, the disabled attribute will actually be set in the DOM for
      you. We recommend using this approach to avoid 'changed after checked' errors.
       
      Example: 
      form = new FormGroup({
        first: new FormControl({value: 'Nancy', disabled: true}, Validators.required),
        last: new FormControl('Drew', Validators.required)
      });
    `);
    }
    /**
     * @param {?} directiveName
     * @return {?}
     */
    static ngModelWarning(directiveName) {
        console.warn(`
    It looks like you're using ngModel on the same form field as ${directiveName}. 
    Support for using the ngModel input property and ngModelChange event with 
    reactive form directives has been deprecated in Angular v6 and will be removed 
    in Angular v7.
    
    For more information on this, see our API docs here:
    https://angular.io/api/forms/${directiveName === 'formControl' ? 'FormControlDirective'
            : 'FormControlName'}#use-with-ngmodel
    `);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVhY3RpdmVfZXJyb3JzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGlvbmFyL2Zvcm0vIiwic291cmNlcyI6WyJjb3JlL3V0aWxzL3JlYWN0aXZlX2Vycm9ycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQVNBLE9BQU8sRUFBRSxpQkFBaUIsSUFBSSxRQUFRLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUVqRSxNQUFNLE9BQU8sY0FBYzs7OztJQUN6QixNQUFNLENBQUMsc0JBQXNCO1FBQzNCLE1BQU0sSUFBSSxLQUFLLENBQ2I7Ozs7O1FBS0UsUUFBUSxDQUFDLGVBQWUsRUFBRSxDQUFDLENBQUM7SUFDbEMsQ0FBQzs7OztJQUVELE1BQU0sQ0FBQyxxQkFBcUI7UUFDMUIsTUFBTSxJQUFJLEtBQUssQ0FDYjs7Ozs7VUFLSSxRQUFRLENBQUMsYUFBYTs7OztVQUl0QixRQUFRLENBQUMsWUFBWSxFQUFFLENBQUMsQ0FBQztJQUNqQyxDQUFDOzs7O0lBRUQsTUFBTSxDQUFDLG9CQUFvQjtRQUN6QixNQUFNLElBQUksS0FBSyxDQUFDOzs7O1NBSVgsUUFBUSxDQUFDLGVBQWUsRUFBRSxDQUFDLENBQUM7SUFDbkMsQ0FBQzs7OztJQUVELE1BQU0sQ0FBQyxvQkFBb0I7UUFDekIsTUFBTSxJQUFJLEtBQUssQ0FDYjs7Ozs7UUFLRSxRQUFRLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQztJQUNoQyxDQUFDOzs7O0lBRUQsTUFBTSxDQUFDLG9CQUFvQjtRQUN6QixNQUFNLElBQUksS0FBSyxDQUNiOzs7OztVQUtJLFFBQVEsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDO0lBQ2xDLENBQUM7Ozs7SUFFRCxNQUFNLENBQUMsbUJBQW1CO1FBQ3hCLE9BQU8sQ0FBQyxJQUFJLENBQUM7Ozs7Ozs7Ozs7S0FVWixDQUFDLENBQUM7SUFDTCxDQUFDOzs7OztJQUVELE1BQU0sQ0FBQyxjQUFjLENBQUMsYUFBcUI7UUFDekMsT0FBTyxDQUFDLElBQUksQ0FBQzttRUFDa0QsYUFBYTs7Ozs7O21DQU03QyxhQUFhLEtBQUssYUFBYSxDQUFDLENBQUMsQ0FBQyxzQkFBc0I7WUFDckYsQ0FBQyxDQUFDLGlCQUFpQjtLQUNwQixDQUFDLENBQUM7SUFDTCxDQUFDO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcclxuICovXHJcblxyXG5cclxuaW1wb3J0IHsgRm9ybUVycm9yRXhhbXBsZXMgYXMgRXhhbXBsZXMgfSBmcm9tICcuL2Vycm9yX2V4YW1wbGVzJztcclxuXHJcbmV4cG9ydCBjbGFzcyBSZWFjdGl2ZUVycm9ycyB7XHJcbiAgc3RhdGljIGNvbnRyb2xQYXJlbnRFeGNlcHRpb24oKTogdm9pZCB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoXHJcbiAgICAgIGBmb3JtQ29udHJvbE5hbWUgbXVzdCBiZSB1c2VkIHdpdGggYSBwYXJlbnQgZm9ybUdyb3VwIGRpcmVjdGl2ZS4gIFlvdSdsbCB3YW50IHRvIGFkZCBhIGZvcm1Hcm91cFxyXG4gICAgICAgZGlyZWN0aXZlIGFuZCBwYXNzIGl0IGFuIGV4aXN0aW5nIEZvcm1Hcm91cCBpbnN0YW5jZSAoeW91IGNhbiBjcmVhdGUgb25lIGluIHlvdXIgY2xhc3MpLlxyXG5cclxuICAgICAgRXhhbXBsZTpcclxuXHJcbiAgICAgICR7RXhhbXBsZXMuZm9ybUNvbnRyb2xOYW1lfWApO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIG5nTW9kZWxHcm91cEV4Y2VwdGlvbigpOiB2b2lkIHtcclxuICAgIHRocm93IG5ldyBFcnJvcihcclxuICAgICAgYGZvcm1Db250cm9sTmFtZSBjYW5ub3QgYmUgdXNlZCB3aXRoIGFuIG5nTW9kZWxHcm91cCBwYXJlbnQuIEl0IGlzIG9ubHkgY29tcGF0aWJsZSB3aXRoIHBhcmVudHNcclxuICAgICAgIHRoYXQgYWxzbyBoYXZlIGEgXCJmb3JtXCIgcHJlZml4OiBmb3JtR3JvdXBOYW1lLCBmb3JtQXJyYXlOYW1lLCBvciBmb3JtR3JvdXAuXHJcblxyXG4gICAgICAgT3B0aW9uIDE6ICBVcGRhdGUgdGhlIHBhcmVudCB0byBiZSBmb3JtR3JvdXBOYW1lIChyZWFjdGl2ZSBmb3JtIHN0cmF0ZWd5KVxyXG5cclxuICAgICAgICAke0V4YW1wbGVzLmZvcm1Hcm91cE5hbWV9XHJcblxyXG4gICAgICAgIE9wdGlvbiAyOiBVc2UgbmdNb2RlbCBpbnN0ZWFkIG9mIGZvcm1Db250cm9sTmFtZSAodGVtcGxhdGUtZHJpdmVuIHN0cmF0ZWd5KVxyXG5cclxuICAgICAgICAke0V4YW1wbGVzLm5nTW9kZWxHcm91cH1gKTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBtaXNzaW5nRm9ybUV4Y2VwdGlvbigpOiB2b2lkIHtcclxuICAgIHRocm93IG5ldyBFcnJvcihgZm9ybUdyb3VwIGV4cGVjdHMgYSBGb3JtR3JvdXAgaW5zdGFuY2UuIFBsZWFzZSBwYXNzIG9uZSBpbi5cclxuXHJcbiAgICAgICBFeGFtcGxlOlxyXG5cclxuICAgICAgICR7RXhhbXBsZXMuZm9ybUNvbnRyb2xOYW1lfWApO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGdyb3VwUGFyZW50RXhjZXB0aW9uKCk6IHZvaWQge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKFxyXG4gICAgICBgZm9ybUdyb3VwTmFtZSBtdXN0IGJlIHVzZWQgd2l0aCBhIHBhcmVudCBmb3JtR3JvdXAgZGlyZWN0aXZlLiAgWW91J2xsIHdhbnQgdG8gYWRkIGEgZm9ybUdyb3VwXHJcbiAgICAgIGRpcmVjdGl2ZSBhbmQgcGFzcyBpdCBhbiBleGlzdGluZyBGb3JtR3JvdXAgaW5zdGFuY2UgKHlvdSBjYW4gY3JlYXRlIG9uZSBpbiB5b3VyIGNsYXNzKS5cclxuXHJcbiAgICAgIEV4YW1wbGU6XHJcblxyXG4gICAgICAke0V4YW1wbGVzLmZvcm1Hcm91cE5hbWV9YCk7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgYXJyYXlQYXJlbnRFeGNlcHRpb24oKTogdm9pZCB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoXHJcbiAgICAgIGBmb3JtQXJyYXlOYW1lIG11c3QgYmUgdXNlZCB3aXRoIGEgcGFyZW50IGZvcm1Hcm91cCBkaXJlY3RpdmUuICBZb3UnbGwgd2FudCB0byBhZGQgYSBmb3JtR3JvdXBcclxuICAgICAgIGRpcmVjdGl2ZSBhbmQgcGFzcyBpdCBhbiBleGlzdGluZyBGb3JtR3JvdXAgaW5zdGFuY2UgKHlvdSBjYW4gY3JlYXRlIG9uZSBpbiB5b3VyIGNsYXNzKS5cclxuXHJcbiAgICAgICAgRXhhbXBsZTpcclxuXHJcbiAgICAgICAgJHtFeGFtcGxlcy5mb3JtQXJyYXlOYW1lfWApO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGRpc2FibGVkQXR0cldhcm5pbmcoKTogdm9pZCB7XHJcbiAgICBjb25zb2xlLndhcm4oYFxyXG4gICAgICBJdCBsb29rcyBsaWtlIHlvdSdyZSB1c2luZyB0aGUgZGlzYWJsZWQgYXR0cmlidXRlIHdpdGggYSByZWFjdGl2ZSBmb3JtIGRpcmVjdGl2ZS4gSWYgeW91IHNldCBkaXNhYmxlZCB0byB0cnVlXHJcbiAgICAgIHdoZW4geW91IHNldCB1cCB0aGlzIGNvbnRyb2wgaW4geW91ciBjb21wb25lbnQgY2xhc3MsIHRoZSBkaXNhYmxlZCBhdHRyaWJ1dGUgd2lsbCBhY3R1YWxseSBiZSBzZXQgaW4gdGhlIERPTSBmb3JcclxuICAgICAgeW91LiBXZSByZWNvbW1lbmQgdXNpbmcgdGhpcyBhcHByb2FjaCB0byBhdm9pZCAnY2hhbmdlZCBhZnRlciBjaGVja2VkJyBlcnJvcnMuXHJcbiAgICAgICBcclxuICAgICAgRXhhbXBsZTogXHJcbiAgICAgIGZvcm0gPSBuZXcgRm9ybUdyb3VwKHtcclxuICAgICAgICBmaXJzdDogbmV3IEZvcm1Db250cm9sKHt2YWx1ZTogJ05hbmN5JywgZGlzYWJsZWQ6IHRydWV9LCBWYWxpZGF0b3JzLnJlcXVpcmVkKSxcclxuICAgICAgICBsYXN0OiBuZXcgRm9ybUNvbnRyb2woJ0RyZXcnLCBWYWxpZGF0b3JzLnJlcXVpcmVkKVxyXG4gICAgICB9KTtcclxuICAgIGApO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIG5nTW9kZWxXYXJuaW5nKGRpcmVjdGl2ZU5hbWU6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgY29uc29sZS53YXJuKGBcclxuICAgIEl0IGxvb2tzIGxpa2UgeW91J3JlIHVzaW5nIG5nTW9kZWwgb24gdGhlIHNhbWUgZm9ybSBmaWVsZCBhcyAke2RpcmVjdGl2ZU5hbWV9LiBcclxuICAgIFN1cHBvcnQgZm9yIHVzaW5nIHRoZSBuZ01vZGVsIGlucHV0IHByb3BlcnR5IGFuZCBuZ01vZGVsQ2hhbmdlIGV2ZW50IHdpdGggXHJcbiAgICByZWFjdGl2ZSBmb3JtIGRpcmVjdGl2ZXMgaGFzIGJlZW4gZGVwcmVjYXRlZCBpbiBBbmd1bGFyIHY2IGFuZCB3aWxsIGJlIHJlbW92ZWQgXHJcbiAgICBpbiBBbmd1bGFyIHY3LlxyXG4gICAgXHJcbiAgICBGb3IgbW9yZSBpbmZvcm1hdGlvbiBvbiB0aGlzLCBzZWUgb3VyIEFQSSBkb2NzIGhlcmU6XHJcbiAgICBodHRwczovL2FuZ3VsYXIuaW8vYXBpL2Zvcm1zLyR7ZGlyZWN0aXZlTmFtZSA9PT0gJ2Zvcm1Db250cm9sJyA/ICdGb3JtQ29udHJvbERpcmVjdGl2ZSdcclxuICAgICAgOiAnRm9ybUNvbnRyb2xOYW1lJ30jdXNlLXdpdGgtbmdtb2RlbFxyXG4gICAgYCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==