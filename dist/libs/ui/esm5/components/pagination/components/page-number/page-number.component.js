"use strict";
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var PageNumberComponent = /** @class */ (function () {
    function PageNumberComponent() {
        var _this = this;
        this.number = 0;
        this.currentPage = 0;
        this.change = new core_1.EventEmitter();
        this.onClick = function (e) {
            _this.change.emit(_this.number);
        };
        this.onMouseDown = function (e) {
            _this._focusStyle = true;
        };
        this.onMouseUp = function (e) {
            setTimeout(function () {
                _this._focusStyle = false;
            }, 300);
        };
        this._activeStyle = false;
        this._focusStyle = false;
    }
    /**
     * @return {?}
     */
    PageNumberComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    PageNumberComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        this._activeStyle = this.number === this.currentPage;
    };
    PageNumberComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'page-number',
                    template: "\n      {{number}}\n  ",
                    styles: [":host{background-color:#fff;border:1px solid #dee2e6;color:#007bff;cursor:pointer;display:flex;justify-content:center;align-items:center;margin-left:-1px;padding:1rem;transition:.3s;z-index:1}:host:hover{background-color:#e9ecef;color:#0056b3}:host.active{background-color:#007bff;border-color:#007bff;color:#fff}:host.focus{outline:0;box-shadow:0 0 0 .2rem rgba(0,123,255,.25);z-index:3}"]
                }] }
    ];
    PageNumberComponent.propDecorators = {
        number: [{ type: core_1.Input }],
        currentPage: [{ type: core_1.Input }],
        change: [{ type: core_1.Output }],
        onClick: [{ type: core_1.HostListener, args: ['click', ['$event'],] }],
        onMouseDown: [{ type: core_1.HostListener, args: ['mousedown', ['$event'],] }],
        onMouseUp: [{ type: core_1.HostListener, args: ['mouseup', ['$event'],] }],
        _activeStyle: [{ type: core_1.HostBinding, args: ['class.active',] }],
        _focusStyle: [{ type: core_1.HostBinding, args: ['class.focus',] }]
    };
    return PageNumberComponent;
}());
exports.PageNumberComponent = PageNumberComponent;
if (false) {
    /** @type {?} */
    PageNumberComponent.prototype.number;
    /** @type {?} */
    PageNumberComponent.prototype.currentPage;
    /** @type {?} */
    PageNumberComponent.prototype.change;
    /** @type {?} */
    PageNumberComponent.prototype.onClick;
    /** @type {?} */
    PageNumberComponent.prototype.onMouseDown;
    /** @type {?} */
    PageNumberComponent.prototype.onMouseUp;
    /** @type {?} */
    PageNumberComponent.prototype._activeStyle;
    /** @type {?} */
    PageNumberComponent.prototype._focusStyle;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS1udW1iZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGlvbmFyL3VpLyIsInNvdXJjZXMiOlsiY29tcG9uZW50cy9wYWdpbmF0aW9uL2NvbXBvbmVudHMvcGFnZS1udW1iZXIvcGFnZS1udW1iZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLHNDQVV1QjtBQUl2QjtJQUFBO1FBQUEsaUJBMkNDO1FBbENVLFdBQU0sR0FBVyxDQUFDLENBQUM7UUFDbkIsZ0JBQVcsR0FBVyxDQUFDLENBQUM7UUFFdkIsV0FBTSxHQUFHLElBQUksbUJBQVksRUFBRSxDQUFDO1FBR3RDLFlBQU8sR0FBRyxVQUFBLENBQUM7WUFDVCxLQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDaEMsQ0FBQyxDQUFDO1FBR0YsZ0JBQVcsR0FBRyxVQUFBLENBQUM7WUFDYixLQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztRQUMxQixDQUFDLENBQUM7UUFHRixjQUFTLEdBQUcsVUFBQSxDQUFDO1lBQ1gsVUFBVSxDQUFDO2dCQUNULEtBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO1lBQzNCLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUNWLENBQUMsQ0FBQztRQUcyQixpQkFBWSxHQUFZLEtBQUssQ0FBQztRQUMvQixnQkFBVyxHQUFZLEtBQUssQ0FBQztJQVUzRCxDQUFDOzs7O0lBUkMsc0NBQVE7OztJQUFSO0lBRUEsQ0FBQzs7Ozs7SUFFRCx5Q0FBVzs7OztJQUFYLFVBQVksT0FBc0I7UUFDaEMsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsTUFBTSxLQUFLLElBQUksQ0FBQyxXQUFXLENBQUM7SUFDdkQsQ0FBQzs7Z0JBekNGLGdCQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGFBQWE7b0JBQ3ZCLFFBQVEsRUFBRSx3QkFFVDs7aUJBRUY7Ozt5QkFHRSxZQUFLOzhCQUNMLFlBQUs7eUJBRUwsYUFBTTswQkFFTixtQkFBWSxTQUFDLE9BQU8sRUFBRSxDQUFDLFFBQVEsQ0FBQzs4QkFLaEMsbUJBQVksU0FBQyxXQUFXLEVBQUUsQ0FBQyxRQUFRLENBQUM7NEJBS3BDLG1CQUFZLFNBQUMsU0FBUyxFQUFFLENBQUMsUUFBUSxDQUFDOytCQVFsQyxrQkFBVyxTQUFDLGNBQWM7OEJBQzFCLGtCQUFXLFNBQUMsYUFBYTs7SUFVNUIsMEJBQUM7Q0FBQSxBQTNDRCxJQTJDQztBQXBDWSxrREFBbUI7OztJQUU5QixxQ0FBNEI7O0lBQzVCLDBDQUFpQzs7SUFFakMscUNBQXNDOztJQUV0QyxzQ0FHRTs7SUFFRiwwQ0FHRTs7SUFFRix3Q0FLRTs7SUFHRiwyQ0FBMkQ7O0lBQzNELDBDQUF5RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgT25Jbml0LFxuICBPbkRlc3Ryb3ksXG4gIElucHV0LFxuICBPdXRwdXQsXG4gIEV2ZW50RW1pdHRlcixcbiAgT25DaGFuZ2VzLFxuICBTaW1wbGVDaGFuZ2VzLFxuICBIb3N0TGlzdGVuZXIsIEhvc3RCaW5kaW5nXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcbmltcG9ydCB7IE9ic2VydmFibGUsIHRpbWVyIH0gZnJvbSAncnhqcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3BhZ2UtbnVtYmVyJyxcbiAgdGVtcGxhdGU6IGBcbiAgICAgIHt7bnVtYmVyfX1cbiAgYCxcbiAgc3R5bGVVcmxzOiBbYC4vcGFnZS1udW1iZXIuY29tcG9uZW50LnNjc3NgXVxufSlcbmV4cG9ydCBjbGFzcyBQYWdlTnVtYmVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xuXG4gIEBJbnB1dCgpIG51bWJlcjogbnVtYmVyID0gMDtcbiAgQElucHV0KCkgY3VycmVudFBhZ2U6IG51bWJlciA9IDA7XG5cbiAgQE91dHB1dCgpIGNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBASG9zdExpc3RlbmVyKCdjbGljaycsIFsnJGV2ZW50J10pXG4gIG9uQ2xpY2sgPSBlID0+IHtcbiAgICB0aGlzLmNoYW5nZS5lbWl0KHRoaXMubnVtYmVyKTtcbiAgfTtcblxuICBASG9zdExpc3RlbmVyKCdtb3VzZWRvd24nLCBbJyRldmVudCddKVxuICBvbk1vdXNlRG93biA9IGUgPT4ge1xuICAgIHRoaXMuX2ZvY3VzU3R5bGUgPSB0cnVlO1xuICB9O1xuXG4gIEBIb3N0TGlzdGVuZXIoJ21vdXNldXAnLCBbJyRldmVudCddKVxuICBvbk1vdXNlVXAgPSBlID0+IHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuX2ZvY3VzU3R5bGUgPSBmYWxzZTtcbiAgICB9LCAzMDApO1xuICB9O1xuXG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5hY3RpdmUnKSBfYWN0aXZlU3R5bGU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5mb2N1cycpIF9mb2N1c1N0eWxlOiBib29sZWFuID0gZmFsc2U7XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG5cbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICB0aGlzLl9hY3RpdmVTdHlsZSA9IHRoaXMubnVtYmVyID09PSB0aGlzLmN1cnJlbnRQYWdlO1xuICB9XG5cbn1cbiJdfQ==