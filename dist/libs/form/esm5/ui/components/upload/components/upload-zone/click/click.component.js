"use strict";
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ClickComponent = /** @class */ (function () {
    ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///
    function ClickComponent() {
        ///-----------------------------------------------  Variables   -----------------------------------------------///
        this.change = new core_1.EventEmitter();
        this.multiple = false;
        this.title = '';
    }
    /**
     * @return {?}
     */
    ClickComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    ClickComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
    };
    ClickComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'click',
                    template: "<ng-container *ngTemplateOutlet=\"template\"></ng-container>\n<ng-container *ngIf=\"title\">\n    <p>{{title}}</p>\n</ng-container>\n\n<input\n        type=\"file\"\n        [multiple]=\"multiple\"\n        (change)=\"$event.stopPropagation();change.emit($event.target.files)\"\n>\n",
                    styles: [":host{background-color:#fff;border:1px solid #d9d9d9;border-radius:.4rem;color:rgba(0,0,0,.65);cursor:pointer;display:flex;align-items:center;justify-content:center;outline:0;position:relative;transition:.3s cubic-bezier(.645,.045,.355,1);width:100%;height:4rem;max-width:20rem;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}:host:focus{border-color:#40a9ff;outline:0;box-shadow:0 0 0 2px rgba(24,144,255,.2);border-right-width:1px!important}:host:hover{border-color:#40a9ff;color:#40a9ff}:host.invalid{border-color:#f5222d}:host.invalid:focus{border-color:#ff4d4f;outline:0;box-shadow:0 0 0 2px rgba(245,34,45,.2)}input{display:flex;outline:0;opacity:0;position:absolute;width:100%;height:100%;z-index:1}"]
                }] }
    ];
    /** @nocollapse */
    ClickComponent.ctorParameters = function () { return []; };
    ClickComponent.propDecorators = {
        change: [{ type: core_1.Output }],
        template: [{ type: core_1.Input }],
        multiple: [{ type: core_1.Input }],
        title: [{ type: core_1.Input }]
    };
    return ClickComponent;
}());
exports.ClickComponent = ClickComponent;
if (false) {
    /** @type {?} */
    ClickComponent.prototype.change;
    /** @type {?} */
    ClickComponent.prototype.template;
    /** @type {?} */
    ClickComponent.prototype.multiple;
    /** @type {?} */
    ClickComponent.prototype.title;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpY2suY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGlvbmFyL2Zvcm0vIiwic291cmNlcyI6WyJ1aS9jb21wb25lbnRzL3VwbG9hZC9jb21wb25lbnRzL3VwbG9hZC16b25lL2NsaWNrL2NsaWNrLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxzQ0FVdUI7QUFHdkI7SUFjRSx3SEFBd0g7SUFDeEg7O1FBUlUsV0FBTSxHQUFHLElBQUksbUJBQVksRUFBRSxDQUFDO1FBRzdCLGFBQVEsR0FBWSxLQUFLLENBQUM7UUFDMUIsVUFBSyxHQUFRLEVBQUUsQ0FBQTtJQUt4QixDQUFDOzs7O0lBRUQsaUNBQVE7OztJQUFSO0lBQ0EsQ0FBQzs7Ozs7SUFHRCxvQ0FBVzs7OztJQUFYLFVBQVksT0FBTztJQUNuQixDQUFDOztnQkF2QkYsZ0JBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsT0FBTztvQkFDakIsc1NBQXFDOztpQkFFdEM7Ozs7O3lCQUdFLGFBQU07MkJBRU4sWUFBSzsyQkFDTCxZQUFLO3dCQUNMLFlBQUs7O0lBaUJSLHFCQUFDO0NBQUEsQUE1QkQsSUE0QkM7QUF2Qlksd0NBQWM7OztJQUV6QixnQ0FBc0M7O0lBRXRDLGtDQUFvQzs7SUFDcEMsa0NBQW1DOztJQUNuQywrQkFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBBZnRlclZpZXdJbml0LFxuICBDb21wb25lbnQsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsIE9uQ2hhbmdlcyxcbiAgT25Jbml0LFxuICBPdXRwdXQsXG4gIFRlbXBsYXRlUmVmLFxuICBWaWV3Q2hpbGQsXG4gIFZpZXdDb250YWluZXJSZWZcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBlbCB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXIvdGVzdGluZy9zcmMvYnJvd3Nlcl91dGlsJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY2xpY2snLFxuICB0ZW1wbGF0ZVVybDogJy4vY2xpY2suY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9jbGljay5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIENsaWNrQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xuICAvLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAgVmFyaWFibGVzICAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0vLy9cbiAgQE91dHB1dCgpIGNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBASW5wdXQoKSB0ZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcbiAgQElucHV0KCkgbXVsdGlwbGU6IEJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KCkgdGl0bGU6IGFueSA9ICcnXG5cblxuICAvLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAgTGlmZSBDeWNsZSBIb29rICAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0vLy9cbiAgY29uc3RydWN0b3IoKSB7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlcyk6IHZvaWQge1xuICB9XG5cblxuICAvLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAgTWFpbiBGdW5jdGlvbnMgICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS8vL1xuXG59XG4iXX0=