"use strict";
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ToggleComponent = /** @class */ (function () {
    function ToggleComponent() {
        ///-----------------------------------------------  Variables   -----------------------------------------------///
        this.change = new core_1.EventEmitter();
    }
    /**
     * @param {?} e
     * @return {?}
     */
    ToggleComponent.prototype.onClick = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        this.change.emit();
    };
    ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///
    ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///
    /**
     * @return {?}
     */
    ToggleComponent.prototype.ngOnInit = 
    ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///
    /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    ToggleComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
    };
    ToggleComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'dropdown-toggle',
                    template: "\n      <ng-content></ng-content>",
                    styles: ["\n      :host {\n          display: flex;\n          flex-shrink: 0;\n      }\n  "]
                }] }
    ];
    /** @nocollapse */
    ToggleComponent.ctorParameters = function () { return []; };
    ToggleComponent.propDecorators = {
        change: [{ type: core_1.Output }],
        onClick: [{ type: core_1.HostListener, args: ['click', ['$event'],] }]
    };
    return ToggleComponent;
}());
exports.ToggleComponent = ToggleComponent;
if (false) {
    /** @type {?} */
    ToggleComponent.prototype.change;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9nZ2xlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bpb25hci91aS8iLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZHJvcGRvd24vY29tcG9uZW50cy90b2dnbGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLHNDQUFpRztBQUVqRztJQXNCRTs7UUFQVSxXQUFNLEdBQUcsSUFBSSxtQkFBWSxFQUFFLENBQUM7SUFRdEMsQ0FBQzs7Ozs7SUFMRCxpQ0FBTzs7OztJQURQLFVBQ1EsQ0FBUTtRQUNkLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDckIsQ0FBQztJQU1ELHdIQUF3SDs7Ozs7SUFHeEgsa0NBQVE7Ozs7O0lBQVI7SUFFQSxDQUFDOzs7O0lBRUQscUNBQVc7OztJQUFYO0lBQ0EsQ0FBQzs7Z0JBbENGLGdCQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjtvQkFDM0IsUUFBUSxFQUFFLG1DQUNvQjs2QkFDckIsbUZBS1I7aUJBQ0Y7Ozs7O3lCQUtFLGFBQU07MEJBRU4sbUJBQVksU0FBQyxPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUM7O0lBc0JuQyxzQkFBQztDQUFBLEFBdkNELElBdUNDO0FBNUJZLDBDQUFlOzs7SUFJMUIsaUNBQXNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIEhvc3RMaXN0ZW5lciwgT25EZXN0cm95LCBPbkluaXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdkcm9wZG93bi10b2dnbGUnLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5gLFxyXG4gIHN0eWxlczogW2BcclxuICAgICAgOmhvc3Qge1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGZsZXgtc2hyaW5rOiAwO1xyXG4gICAgICB9XHJcbiAgYF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFRvZ2dsZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcclxuXHJcbiAgLy8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gIFZhcmlhYmxlcyAgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLy8vXHJcblxyXG4gIEBPdXRwdXQoKSBjaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJywgWyckZXZlbnQnXSlcclxuICBvbkNsaWNrKGU6IEV2ZW50KSB7XHJcbiAgICB0aGlzLmNoYW5nZS5lbWl0KCk7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICB9XHJcblxyXG5cclxuICAvLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAgTGlmZSBDeWNsZSBIb29rICAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0vLy9cclxuXHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG5cclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gIH1cclxuXHJcblxyXG4gIC8vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICBNYWluIEZ1bmN0aW9ucyAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0vLy9cclxuXHJcbn1cclxuIl19