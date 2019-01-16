"use strict";
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var error_examples_1 = require("./error_examples");
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
        throw new Error("formControlName must be used with a parent formGroup directive.  You'll want to add a formGroup\n       directive and pass it an existing FormGroup instance (you can create one in your class).\n\n      Example:\n\n      " + error_examples_1.FormErrorExamples.formControlName);
    };
    /**
     * @return {?}
     */
    ReactiveErrors.ngModelGroupException = /**
     * @return {?}
     */
    function () {
        throw new Error("formControlName cannot be used with an ngModelGroup parent. It is only compatible with parents\n       that also have a \"form\" prefix: formGroupName, formArrayName, or formGroup.\n\n       Option 1:  Update the parent to be formGroupName (reactive form strategy)\n\n        " + error_examples_1.FormErrorExamples.formGroupName + "\n\n        Option 2: Use ngModel instead of formControlName (template-driven strategy)\n\n        " + error_examples_1.FormErrorExamples.ngModelGroup);
    };
    /**
     * @return {?}
     */
    ReactiveErrors.missingFormException = /**
     * @return {?}
     */
    function () {
        throw new Error("formGroup expects a FormGroup instance. Please pass one in.\n\n       Example:\n\n       " + error_examples_1.FormErrorExamples.formControlName);
    };
    /**
     * @return {?}
     */
    ReactiveErrors.groupParentException = /**
     * @return {?}
     */
    function () {
        throw new Error("formGroupName must be used with a parent formGroup directive.  You'll want to add a formGroup\n      directive and pass it an existing FormGroup instance (you can create one in your class).\n\n      Example:\n\n      " + error_examples_1.FormErrorExamples.formGroupName);
    };
    /**
     * @return {?}
     */
    ReactiveErrors.arrayParentException = /**
     * @return {?}
     */
    function () {
        throw new Error("formArrayName must be used with a parent formGroup directive.  You'll want to add a formGroup\n       directive and pass it an existing FormGroup instance (you can create one in your class).\n\n        Example:\n\n        " + error_examples_1.FormErrorExamples.formArrayName);
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
exports.ReactiveErrors = ReactiveErrors;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVhY3RpdmVfZXJyb3JzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGlvbmFyL2Zvcm0vIiwic291cmNlcyI6WyJjb3JlL3V0aWxzL3JlYWN0aXZlX2Vycm9ycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBU0EsbURBQWlFO0FBRWpFO0lBQUE7SUErRUEsQ0FBQzs7OztJQTlFUSxxQ0FBc0I7OztJQUE3QjtRQUNFLE1BQU0sSUFBSSxLQUFLLENBQ2IsaU9BS0Usa0NBQVEsQ0FBQyxlQUFpQixDQUFDLENBQUM7SUFDbEMsQ0FBQzs7OztJQUVNLG9DQUFxQjs7O0lBQTVCO1FBQ0UsTUFBTSxJQUFJLEtBQUssQ0FDYix5UkFLSSxrQ0FBUSxDQUFDLGFBQWEsMkdBSXRCLGtDQUFRLENBQUMsWUFBYyxDQUFDLENBQUM7SUFDakMsQ0FBQzs7OztJQUVNLG1DQUFvQjs7O0lBQTNCO1FBQ0UsTUFBTSxJQUFJLEtBQUssQ0FBQyw4RkFJWCxrQ0FBUSxDQUFDLGVBQWlCLENBQUMsQ0FBQztJQUNuQyxDQUFDOzs7O0lBRU0sbUNBQW9COzs7SUFBM0I7UUFDRSxNQUFNLElBQUksS0FBSyxDQUNiLDhOQUtFLGtDQUFRLENBQUMsYUFBZSxDQUFDLENBQUM7SUFDaEMsQ0FBQzs7OztJQUVNLG1DQUFvQjs7O0lBQTNCO1FBQ0UsTUFBTSxJQUFJLEtBQUssQ0FDYixtT0FLSSxrQ0FBUSxDQUFDLGFBQWUsQ0FBQyxDQUFDO0lBQ2xDLENBQUM7Ozs7SUFFTSxrQ0FBbUI7OztJQUExQjtRQUNFLE9BQU8sQ0FBQyxJQUFJLENBQUMsa2lCQVVaLENBQUMsQ0FBQztJQUNMLENBQUM7Ozs7O0lBRU0sNkJBQWM7Ozs7SUFBckIsVUFBc0IsYUFBcUI7UUFDekMsT0FBTyxDQUFDLElBQUksQ0FBQyx3RUFDa0QsYUFBYSx1U0FNN0MsYUFBYSxLQUFLLGFBQWEsQ0FBQyxDQUFDLENBQUMsc0JBQXNCO1lBQ3JGLENBQUMsQ0FBQyxpQkFBaUIsNkJBQ3BCLENBQUMsQ0FBQztJQUNMLENBQUM7SUFDSCxxQkFBQztBQUFELENBQUMsQUEvRUQsSUErRUM7QUEvRVksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcclxuICovXHJcblxyXG5cclxuaW1wb3J0IHsgRm9ybUVycm9yRXhhbXBsZXMgYXMgRXhhbXBsZXMgfSBmcm9tICcuL2Vycm9yX2V4YW1wbGVzJztcclxuXHJcbmV4cG9ydCBjbGFzcyBSZWFjdGl2ZUVycm9ycyB7XHJcbiAgc3RhdGljIGNvbnRyb2xQYXJlbnRFeGNlcHRpb24oKTogdm9pZCB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoXHJcbiAgICAgIGBmb3JtQ29udHJvbE5hbWUgbXVzdCBiZSB1c2VkIHdpdGggYSBwYXJlbnQgZm9ybUdyb3VwIGRpcmVjdGl2ZS4gIFlvdSdsbCB3YW50IHRvIGFkZCBhIGZvcm1Hcm91cFxyXG4gICAgICAgZGlyZWN0aXZlIGFuZCBwYXNzIGl0IGFuIGV4aXN0aW5nIEZvcm1Hcm91cCBpbnN0YW5jZSAoeW91IGNhbiBjcmVhdGUgb25lIGluIHlvdXIgY2xhc3MpLlxyXG5cclxuICAgICAgRXhhbXBsZTpcclxuXHJcbiAgICAgICR7RXhhbXBsZXMuZm9ybUNvbnRyb2xOYW1lfWApO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIG5nTW9kZWxHcm91cEV4Y2VwdGlvbigpOiB2b2lkIHtcclxuICAgIHRocm93IG5ldyBFcnJvcihcclxuICAgICAgYGZvcm1Db250cm9sTmFtZSBjYW5ub3QgYmUgdXNlZCB3aXRoIGFuIG5nTW9kZWxHcm91cCBwYXJlbnQuIEl0IGlzIG9ubHkgY29tcGF0aWJsZSB3aXRoIHBhcmVudHNcclxuICAgICAgIHRoYXQgYWxzbyBoYXZlIGEgXCJmb3JtXCIgcHJlZml4OiBmb3JtR3JvdXBOYW1lLCBmb3JtQXJyYXlOYW1lLCBvciBmb3JtR3JvdXAuXHJcblxyXG4gICAgICAgT3B0aW9uIDE6ICBVcGRhdGUgdGhlIHBhcmVudCB0byBiZSBmb3JtR3JvdXBOYW1lIChyZWFjdGl2ZSBmb3JtIHN0cmF0ZWd5KVxyXG5cclxuICAgICAgICAke0V4YW1wbGVzLmZvcm1Hcm91cE5hbWV9XHJcblxyXG4gICAgICAgIE9wdGlvbiAyOiBVc2UgbmdNb2RlbCBpbnN0ZWFkIG9mIGZvcm1Db250cm9sTmFtZSAodGVtcGxhdGUtZHJpdmVuIHN0cmF0ZWd5KVxyXG5cclxuICAgICAgICAke0V4YW1wbGVzLm5nTW9kZWxHcm91cH1gKTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBtaXNzaW5nRm9ybUV4Y2VwdGlvbigpOiB2b2lkIHtcclxuICAgIHRocm93IG5ldyBFcnJvcihgZm9ybUdyb3VwIGV4cGVjdHMgYSBGb3JtR3JvdXAgaW5zdGFuY2UuIFBsZWFzZSBwYXNzIG9uZSBpbi5cclxuXHJcbiAgICAgICBFeGFtcGxlOlxyXG5cclxuICAgICAgICR7RXhhbXBsZXMuZm9ybUNvbnRyb2xOYW1lfWApO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGdyb3VwUGFyZW50RXhjZXB0aW9uKCk6IHZvaWQge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKFxyXG4gICAgICBgZm9ybUdyb3VwTmFtZSBtdXN0IGJlIHVzZWQgd2l0aCBhIHBhcmVudCBmb3JtR3JvdXAgZGlyZWN0aXZlLiAgWW91J2xsIHdhbnQgdG8gYWRkIGEgZm9ybUdyb3VwXHJcbiAgICAgIGRpcmVjdGl2ZSBhbmQgcGFzcyBpdCBhbiBleGlzdGluZyBGb3JtR3JvdXAgaW5zdGFuY2UgKHlvdSBjYW4gY3JlYXRlIG9uZSBpbiB5b3VyIGNsYXNzKS5cclxuXHJcbiAgICAgIEV4YW1wbGU6XHJcblxyXG4gICAgICAke0V4YW1wbGVzLmZvcm1Hcm91cE5hbWV9YCk7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgYXJyYXlQYXJlbnRFeGNlcHRpb24oKTogdm9pZCB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoXHJcbiAgICAgIGBmb3JtQXJyYXlOYW1lIG11c3QgYmUgdXNlZCB3aXRoIGEgcGFyZW50IGZvcm1Hcm91cCBkaXJlY3RpdmUuICBZb3UnbGwgd2FudCB0byBhZGQgYSBmb3JtR3JvdXBcclxuICAgICAgIGRpcmVjdGl2ZSBhbmQgcGFzcyBpdCBhbiBleGlzdGluZyBGb3JtR3JvdXAgaW5zdGFuY2UgKHlvdSBjYW4gY3JlYXRlIG9uZSBpbiB5b3VyIGNsYXNzKS5cclxuXHJcbiAgICAgICAgRXhhbXBsZTpcclxuXHJcbiAgICAgICAgJHtFeGFtcGxlcy5mb3JtQXJyYXlOYW1lfWApO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGRpc2FibGVkQXR0cldhcm5pbmcoKTogdm9pZCB7XHJcbiAgICBjb25zb2xlLndhcm4oYFxyXG4gICAgICBJdCBsb29rcyBsaWtlIHlvdSdyZSB1c2luZyB0aGUgZGlzYWJsZWQgYXR0cmlidXRlIHdpdGggYSByZWFjdGl2ZSBmb3JtIGRpcmVjdGl2ZS4gSWYgeW91IHNldCBkaXNhYmxlZCB0byB0cnVlXHJcbiAgICAgIHdoZW4geW91IHNldCB1cCB0aGlzIGNvbnRyb2wgaW4geW91ciBjb21wb25lbnQgY2xhc3MsIHRoZSBkaXNhYmxlZCBhdHRyaWJ1dGUgd2lsbCBhY3R1YWxseSBiZSBzZXQgaW4gdGhlIERPTSBmb3JcclxuICAgICAgeW91LiBXZSByZWNvbW1lbmQgdXNpbmcgdGhpcyBhcHByb2FjaCB0byBhdm9pZCAnY2hhbmdlZCBhZnRlciBjaGVja2VkJyBlcnJvcnMuXHJcbiAgICAgICBcclxuICAgICAgRXhhbXBsZTogXHJcbiAgICAgIGZvcm0gPSBuZXcgRm9ybUdyb3VwKHtcclxuICAgICAgICBmaXJzdDogbmV3IEZvcm1Db250cm9sKHt2YWx1ZTogJ05hbmN5JywgZGlzYWJsZWQ6IHRydWV9LCBWYWxpZGF0b3JzLnJlcXVpcmVkKSxcclxuICAgICAgICBsYXN0OiBuZXcgRm9ybUNvbnRyb2woJ0RyZXcnLCBWYWxpZGF0b3JzLnJlcXVpcmVkKVxyXG4gICAgICB9KTtcclxuICAgIGApO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIG5nTW9kZWxXYXJuaW5nKGRpcmVjdGl2ZU5hbWU6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgY29uc29sZS53YXJuKGBcclxuICAgIEl0IGxvb2tzIGxpa2UgeW91J3JlIHVzaW5nIG5nTW9kZWwgb24gdGhlIHNhbWUgZm9ybSBmaWVsZCBhcyAke2RpcmVjdGl2ZU5hbWV9LiBcclxuICAgIFN1cHBvcnQgZm9yIHVzaW5nIHRoZSBuZ01vZGVsIGlucHV0IHByb3BlcnR5IGFuZCBuZ01vZGVsQ2hhbmdlIGV2ZW50IHdpdGggXHJcbiAgICByZWFjdGl2ZSBmb3JtIGRpcmVjdGl2ZXMgaGFzIGJlZW4gZGVwcmVjYXRlZCBpbiBBbmd1bGFyIHY2IGFuZCB3aWxsIGJlIHJlbW92ZWQgXHJcbiAgICBpbiBBbmd1bGFyIHY3LlxyXG4gICAgXHJcbiAgICBGb3IgbW9yZSBpbmZvcm1hdGlvbiBvbiB0aGlzLCBzZWUgb3VyIEFQSSBkb2NzIGhlcmU6XHJcbiAgICBodHRwczovL2FuZ3VsYXIuaW8vYXBpL2Zvcm1zLyR7ZGlyZWN0aXZlTmFtZSA9PT0gJ2Zvcm1Db250cm9sJyA/ICdGb3JtQ29udHJvbERpcmVjdGl2ZSdcclxuICAgICAgOiAnRm9ybUNvbnRyb2xOYW1lJ30jdXNlLXdpdGgtbmdtb2RlbFxyXG4gICAgYCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==