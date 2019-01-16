"use strict";
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var collapsible_directive_1 = require("./collapsible.directive");
var ToggleDirective = /** @class */ (function () {
    function ToggleDirective(parent, cd) {
        this.cd = cd;
        this._parent = parent;
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    ToggleDirective.prototype.onClick = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        this._parent.change$.next(!this._parent.collapsed);
    };
    /**
     * @return {?}
     */
    ToggleDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this._parent.customToggler = true;
    };
    ToggleDirective.decorators = [
        { type: core_1.Directive, args: [{
                    selector: '[collapseToggle]'
                },] }
    ];
    /** @nocollapse */
    ToggleDirective.ctorParameters = function () { return [
        { type: collapsible_directive_1.CollapsibleDirective, decorators: [{ type: core_1.Optional }, { type: core_1.Host }, { type: core_1.SkipSelf }] },
        { type: core_1.ChangeDetectorRef }
    ]; };
    ToggleDirective.propDecorators = {
        onClick: [{ type: core_1.HostListener, args: ['click', ['$event'],] }]
    };
    return ToggleDirective;
}());
exports.ToggleDirective = ToggleDirective;
if (false) {
    /**
     * @type {?}
     * @private
     */
    ToggleDirective.prototype._parent;
    /**
     * @type {?}
     * @private
     */
    ToggleDirective.prototype.cd;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9nZ2xlLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bpb25hci91aS8iLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvY29sbGFwc2libGUvZGlyZWN0aXZlcy90b2dnbGUuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLHNDQVV1QjtBQUN2QixpRUFBK0Q7QUFHL0Q7SUFZRSx5QkFDa0MsTUFBNEIsRUFDcEQsRUFBcUI7UUFBckIsT0FBRSxHQUFGLEVBQUUsQ0FBbUI7UUFFN0IsSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7SUFDeEIsQ0FBQzs7Ozs7SUFURCxpQ0FBTzs7OztJQURQLFVBQ1EsTUFBTTtRQUNaLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDckQsQ0FBQzs7OztJQVNELGtDQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQztJQUNwQyxDQUFDOztnQkFyQkYsZ0JBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsa0JBQWtCO2lCQUM3Qjs7OztnQkFMUSw0Q0FBb0IsdUJBZ0J4QixlQUFRLFlBQUksV0FBSSxZQUFJLGVBQVE7Z0JBMUIvQix3QkFBaUI7OzswQkFvQmhCLG1CQUFZLFNBQUMsT0FBTyxFQUFFLENBQUMsUUFBUSxDQUFDOztJQWVuQyxzQkFBQztDQUFBLEFBdEJELElBc0JDO0FBbkJZLDBDQUFlOzs7Ozs7SUFFMUIsa0NBQXNDOzs7OztJQVNwQyw2QkFBNkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgRGlyZWN0aXZlLFxuICBFdmVudEVtaXR0ZXIsXG4gIEhvc3QsXG4gIEhvc3RMaXN0ZW5lcixcbiAgT25Jbml0LFxuICBPcHRpb25hbCxcbiAgT3V0cHV0LFxuICBTa2lwU2VsZiwgVGVtcGxhdGVSZWZcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb2xsYXBzaWJsZURpcmVjdGl2ZSB9IGZyb20gJy4vY29sbGFwc2libGUuZGlyZWN0aXZlJztcblxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbY29sbGFwc2VUb2dnbGVdJ1xufSlcbmV4cG9ydCBjbGFzcyBUb2dnbGVEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIHByaXZhdGUgX3BhcmVudDogQ29sbGFwc2libGVEaXJlY3RpdmU7XG5cbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snLCBbJyRldmVudCddKVxuICBvbkNsaWNrKCRldmVudCkge1xuICAgIHRoaXMuX3BhcmVudC5jaGFuZ2UkLm5leHQoIXRoaXMuX3BhcmVudC5jb2xsYXBzZWQpO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgQE9wdGlvbmFsKCkgQEhvc3QoKSBAU2tpcFNlbGYoKSBwYXJlbnQ6IENvbGxhcHNpYmxlRGlyZWN0aXZlLFxuICAgIHByaXZhdGUgY2Q6IENoYW5nZURldGVjdG9yUmVmLFxuICApIHtcbiAgICB0aGlzLl9wYXJlbnQgPSBwYXJlbnQ7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLl9wYXJlbnQuY3VzdG9tVG9nZ2xlciA9IHRydWU7XG4gIH1cbn1cbiJdfQ==