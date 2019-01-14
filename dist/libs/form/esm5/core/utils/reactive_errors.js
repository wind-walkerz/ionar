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
var ReactiveErrors = /** @class */ (function () {
    function ReactiveErrors() {
    }
    /**
     * @return {?}
     */
    ReactiveErrors.controlParentException = /**
     * @return {?}
     */
    function () {
        throw new Error("formControlName must be used with a parent formGroup directive.  You'll want to add a formGroup\n       directive and pass it an existing FormGroup instance (you can create one in your class).\n\n      Example:\n\n      " + Examples.formControlName);
    };
    /**
     * @return {?}
     */
    ReactiveErrors.ngModelGroupException = /**
     * @return {?}
     */
    function () {
        throw new Error("formControlName cannot be used with an ngModelGroup parent. It is only compatible with parents\n       that also have a \"form\" prefix: formGroupName, formArrayName, or formGroup.\n\n       Option 1:  Update the parent to be formGroupName (reactive form strategy)\n\n        " + Examples.formGroupName + "\n\n        Option 2: Use ngModel instead of formControlName (template-driven strategy)\n\n        " + Examples.ngModelGroup);
    };
    /**
     * @return {?}
     */
    ReactiveErrors.missingFormException = /**
     * @return {?}
     */
    function () {
        throw new Error("formGroup expects a FormGroup instance. Please pass one in.\n\n       Example:\n\n       " + Examples.formControlName);
    };
    /**
     * @return {?}
     */
    ReactiveErrors.groupParentException = /**
     * @return {?}
     */
    function () {
        throw new Error("formGroupName must be used with a parent formGroup directive.  You'll want to add a formGroup\n      directive and pass it an existing FormGroup instance (you can create one in your class).\n\n      Example:\n\n      " + Examples.formGroupName);
    };
    /**
     * @return {?}
     */
    ReactiveErrors.arrayParentException = /**
     * @return {?}
     */
    function () {
        throw new Error("formArrayName must be used with a parent formGroup directive.  You'll want to add a formGroup\n       directive and pass it an existing FormGroup instance (you can create one in your class).\n\n        Example:\n\n        " + Examples.formArrayName);
    };
    /**
     * @return {?}
     */
    ReactiveErrors.disabledAttrWarning = /**
     * @return {?}
     */
    function () {
        console.warn("\n      It looks like you're using the disabled attribute with a reactive form directive. If you set disabled to true\n      when you set up this control in your component class, the disabled attribute will actually be set in the DOM for\n      you. We recommend using this approach to avoid 'changed after checked' errors.\n       \n      Example: \n      form = new FormGroup({\n        first: new FormControl({value: 'Nancy', disabled: true}, Validators.required),\n        last: new FormControl('Drew', Validators.required)\n      });\n    ");
    };
    /**
     * @param {?} directiveName
     * @return {?}
     */
    ReactiveErrors.ngModelWarning = /**
     * @param {?} directiveName
     * @return {?}
     */
    function (directiveName) {
        console.warn("\n    It looks like you're using ngModel on the same form field as " + directiveName + ". \n    Support for using the ngModel input property and ngModelChange event with \n    reactive form directives has been deprecated in Angular v6 and will be removed \n    in Angular v7.\n    \n    For more information on this, see our API docs here:\n    https://angular.io/api/forms/" + (directiveName === 'formControl' ? 'FormControlDirective'
            : 'FormControlName') + "#use-with-ngmodel\n    ");
    };
    return ReactiveErrors;
}());
export { ReactiveErrors };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVhY3RpdmVfZXJyb3JzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGlvbmFyL2Zvcm0vIiwic291cmNlcyI6WyJjb3JlL3V0aWxzL3JlYWN0aXZlX2Vycm9ycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQVNBLE9BQU8sRUFBRSxpQkFBaUIsSUFBSSxRQUFRLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUVqRTtJQUFBO0lBK0VBLENBQUM7Ozs7SUE5RVEscUNBQXNCOzs7SUFBN0I7UUFDRSxNQUFNLElBQUksS0FBSyxDQUNiLGlPQUtFLFFBQVEsQ0FBQyxlQUFpQixDQUFDLENBQUM7SUFDbEMsQ0FBQzs7OztJQUVNLG9DQUFxQjs7O0lBQTVCO1FBQ0UsTUFBTSxJQUFJLEtBQUssQ0FDYix5UkFLSSxRQUFRLENBQUMsYUFBYSwyR0FJdEIsUUFBUSxDQUFDLFlBQWMsQ0FBQyxDQUFDO0lBQ2pDLENBQUM7Ozs7SUFFTSxtQ0FBb0I7OztJQUEzQjtRQUNFLE1BQU0sSUFBSSxLQUFLLENBQUMsOEZBSVgsUUFBUSxDQUFDLGVBQWlCLENBQUMsQ0FBQztJQUNuQyxDQUFDOzs7O0lBRU0sbUNBQW9COzs7SUFBM0I7UUFDRSxNQUFNLElBQUksS0FBSyxDQUNiLDhOQUtFLFFBQVEsQ0FBQyxhQUFlLENBQUMsQ0FBQztJQUNoQyxDQUFDOzs7O0lBRU0sbUNBQW9COzs7SUFBM0I7UUFDRSxNQUFNLElBQUksS0FBSyxDQUNiLG1PQUtJLFFBQVEsQ0FBQyxhQUFlLENBQUMsQ0FBQztJQUNsQyxDQUFDOzs7O0lBRU0sa0NBQW1COzs7SUFBMUI7UUFDRSxPQUFPLENBQUMsSUFBSSxDQUFDLGtpQkFVWixDQUFDLENBQUM7SUFDTCxDQUFDOzs7OztJQUVNLDZCQUFjOzs7O0lBQXJCLFVBQXNCLGFBQXFCO1FBQ3pDLE9BQU8sQ0FBQyxJQUFJLENBQUMsd0VBQ2tELGFBQWEsdVNBTTdDLGFBQWEsS0FBSyxhQUFhLENBQUMsQ0FBQyxDQUFDLHNCQUFzQjtZQUNyRixDQUFDLENBQUMsaUJBQWlCLDZCQUNwQixDQUFDLENBQUM7SUFDTCxDQUFDO0lBQ0gscUJBQUM7QUFBRCxDQUFDLEFBL0VELElBK0VDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXHJcbiAqL1xyXG5cclxuXHJcbmltcG9ydCB7IEZvcm1FcnJvckV4YW1wbGVzIGFzIEV4YW1wbGVzIH0gZnJvbSAnLi9lcnJvcl9leGFtcGxlcyc7XHJcblxyXG5leHBvcnQgY2xhc3MgUmVhY3RpdmVFcnJvcnMge1xyXG4gIHN0YXRpYyBjb250cm9sUGFyZW50RXhjZXB0aW9uKCk6IHZvaWQge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKFxyXG4gICAgICBgZm9ybUNvbnRyb2xOYW1lIG11c3QgYmUgdXNlZCB3aXRoIGEgcGFyZW50IGZvcm1Hcm91cCBkaXJlY3RpdmUuICBZb3UnbGwgd2FudCB0byBhZGQgYSBmb3JtR3JvdXBcclxuICAgICAgIGRpcmVjdGl2ZSBhbmQgcGFzcyBpdCBhbiBleGlzdGluZyBGb3JtR3JvdXAgaW5zdGFuY2UgKHlvdSBjYW4gY3JlYXRlIG9uZSBpbiB5b3VyIGNsYXNzKS5cclxuXHJcbiAgICAgIEV4YW1wbGU6XHJcblxyXG4gICAgICAke0V4YW1wbGVzLmZvcm1Db250cm9sTmFtZX1gKTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBuZ01vZGVsR3JvdXBFeGNlcHRpb24oKTogdm9pZCB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoXHJcbiAgICAgIGBmb3JtQ29udHJvbE5hbWUgY2Fubm90IGJlIHVzZWQgd2l0aCBhbiBuZ01vZGVsR3JvdXAgcGFyZW50LiBJdCBpcyBvbmx5IGNvbXBhdGlibGUgd2l0aCBwYXJlbnRzXHJcbiAgICAgICB0aGF0IGFsc28gaGF2ZSBhIFwiZm9ybVwiIHByZWZpeDogZm9ybUdyb3VwTmFtZSwgZm9ybUFycmF5TmFtZSwgb3IgZm9ybUdyb3VwLlxyXG5cclxuICAgICAgIE9wdGlvbiAxOiAgVXBkYXRlIHRoZSBwYXJlbnQgdG8gYmUgZm9ybUdyb3VwTmFtZSAocmVhY3RpdmUgZm9ybSBzdHJhdGVneSlcclxuXHJcbiAgICAgICAgJHtFeGFtcGxlcy5mb3JtR3JvdXBOYW1lfVxyXG5cclxuICAgICAgICBPcHRpb24gMjogVXNlIG5nTW9kZWwgaW5zdGVhZCBvZiBmb3JtQ29udHJvbE5hbWUgKHRlbXBsYXRlLWRyaXZlbiBzdHJhdGVneSlcclxuXHJcbiAgICAgICAgJHtFeGFtcGxlcy5uZ01vZGVsR3JvdXB9YCk7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgbWlzc2luZ0Zvcm1FeGNlcHRpb24oKTogdm9pZCB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoYGZvcm1Hcm91cCBleHBlY3RzIGEgRm9ybUdyb3VwIGluc3RhbmNlLiBQbGVhc2UgcGFzcyBvbmUgaW4uXHJcblxyXG4gICAgICAgRXhhbXBsZTpcclxuXHJcbiAgICAgICAke0V4YW1wbGVzLmZvcm1Db250cm9sTmFtZX1gKTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBncm91cFBhcmVudEV4Y2VwdGlvbigpOiB2b2lkIHtcclxuICAgIHRocm93IG5ldyBFcnJvcihcclxuICAgICAgYGZvcm1Hcm91cE5hbWUgbXVzdCBiZSB1c2VkIHdpdGggYSBwYXJlbnQgZm9ybUdyb3VwIGRpcmVjdGl2ZS4gIFlvdSdsbCB3YW50IHRvIGFkZCBhIGZvcm1Hcm91cFxyXG4gICAgICBkaXJlY3RpdmUgYW5kIHBhc3MgaXQgYW4gZXhpc3RpbmcgRm9ybUdyb3VwIGluc3RhbmNlICh5b3UgY2FuIGNyZWF0ZSBvbmUgaW4geW91ciBjbGFzcykuXHJcblxyXG4gICAgICBFeGFtcGxlOlxyXG5cclxuICAgICAgJHtFeGFtcGxlcy5mb3JtR3JvdXBOYW1lfWApO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGFycmF5UGFyZW50RXhjZXB0aW9uKCk6IHZvaWQge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKFxyXG4gICAgICBgZm9ybUFycmF5TmFtZSBtdXN0IGJlIHVzZWQgd2l0aCBhIHBhcmVudCBmb3JtR3JvdXAgZGlyZWN0aXZlLiAgWW91J2xsIHdhbnQgdG8gYWRkIGEgZm9ybUdyb3VwXHJcbiAgICAgICBkaXJlY3RpdmUgYW5kIHBhc3MgaXQgYW4gZXhpc3RpbmcgRm9ybUdyb3VwIGluc3RhbmNlICh5b3UgY2FuIGNyZWF0ZSBvbmUgaW4geW91ciBjbGFzcykuXHJcblxyXG4gICAgICAgIEV4YW1wbGU6XHJcblxyXG4gICAgICAgICR7RXhhbXBsZXMuZm9ybUFycmF5TmFtZX1gKTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBkaXNhYmxlZEF0dHJXYXJuaW5nKCk6IHZvaWQge1xyXG4gICAgY29uc29sZS53YXJuKGBcclxuICAgICAgSXQgbG9va3MgbGlrZSB5b3UncmUgdXNpbmcgdGhlIGRpc2FibGVkIGF0dHJpYnV0ZSB3aXRoIGEgcmVhY3RpdmUgZm9ybSBkaXJlY3RpdmUuIElmIHlvdSBzZXQgZGlzYWJsZWQgdG8gdHJ1ZVxyXG4gICAgICB3aGVuIHlvdSBzZXQgdXAgdGhpcyBjb250cm9sIGluIHlvdXIgY29tcG9uZW50IGNsYXNzLCB0aGUgZGlzYWJsZWQgYXR0cmlidXRlIHdpbGwgYWN0dWFsbHkgYmUgc2V0IGluIHRoZSBET00gZm9yXHJcbiAgICAgIHlvdS4gV2UgcmVjb21tZW5kIHVzaW5nIHRoaXMgYXBwcm9hY2ggdG8gYXZvaWQgJ2NoYW5nZWQgYWZ0ZXIgY2hlY2tlZCcgZXJyb3JzLlxyXG4gICAgICAgXHJcbiAgICAgIEV4YW1wbGU6IFxyXG4gICAgICBmb3JtID0gbmV3IEZvcm1Hcm91cCh7XHJcbiAgICAgICAgZmlyc3Q6IG5ldyBGb3JtQ29udHJvbCh7dmFsdWU6ICdOYW5jeScsIGRpc2FibGVkOiB0cnVlfSwgVmFsaWRhdG9ycy5yZXF1aXJlZCksXHJcbiAgICAgICAgbGFzdDogbmV3IEZvcm1Db250cm9sKCdEcmV3JywgVmFsaWRhdG9ycy5yZXF1aXJlZClcclxuICAgICAgfSk7XHJcbiAgICBgKTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBuZ01vZGVsV2FybmluZyhkaXJlY3RpdmVOYW1lOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIGNvbnNvbGUud2FybihgXHJcbiAgICBJdCBsb29rcyBsaWtlIHlvdSdyZSB1c2luZyBuZ01vZGVsIG9uIHRoZSBzYW1lIGZvcm0gZmllbGQgYXMgJHtkaXJlY3RpdmVOYW1lfS4gXHJcbiAgICBTdXBwb3J0IGZvciB1c2luZyB0aGUgbmdNb2RlbCBpbnB1dCBwcm9wZXJ0eSBhbmQgbmdNb2RlbENoYW5nZSBldmVudCB3aXRoIFxyXG4gICAgcmVhY3RpdmUgZm9ybSBkaXJlY3RpdmVzIGhhcyBiZWVuIGRlcHJlY2F0ZWQgaW4gQW5ndWxhciB2NiBhbmQgd2lsbCBiZSByZW1vdmVkIFxyXG4gICAgaW4gQW5ndWxhciB2Ny5cclxuICAgIFxyXG4gICAgRm9yIG1vcmUgaW5mb3JtYXRpb24gb24gdGhpcywgc2VlIG91ciBBUEkgZG9jcyBoZXJlOlxyXG4gICAgaHR0cHM6Ly9hbmd1bGFyLmlvL2FwaS9mb3Jtcy8ke2RpcmVjdGl2ZU5hbWUgPT09ICdmb3JtQ29udHJvbCcgPyAnRm9ybUNvbnRyb2xEaXJlY3RpdmUnXHJcbiAgICAgIDogJ0Zvcm1Db250cm9sTmFtZSd9I3VzZS13aXRoLW5nbW9kZWxcclxuICAgIGApO1xyXG4gIH1cclxufVxyXG4iXX0=