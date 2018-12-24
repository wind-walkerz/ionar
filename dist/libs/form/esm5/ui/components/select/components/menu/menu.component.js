/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, EventEmitter, Input, Output } from '@angular/core';
var MenuComponent = /** @class */ (function () {
    function MenuComponent() {
        this.options = [];
        this.onSelectOption = new EventEmitter();
    }
    /**
     * @return {?}
     */
    MenuComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    MenuComponent.decorators = [
        { type: Component, args: [{
                    selector: 'menu',
                    template: "\n      <ng-container *ngFor=\"let option of options\">\n          <select-option\n                  [data]=\"option\"\n                  (click)=\"this.onSelectOption.emit(option)\"\n          ></select-option>\n      </ng-container>\n  ",
                    styles: ["\n      :host {\n          background-color: white;\n          border-radius: 5px;\n          box-sizing: border-box;\n          border: 1px solid rgb(196, 202, 212);\n          overflow-y: scroll;\n          padding: 0 10px;\n          position: absolute;\n          top: 100%;\n          z-index: 9999;\n          width: 100%;\n          max-height: 20rem;\n      }\n  "]
                }] }
    ];
    /** @nocollapse */
    MenuComponent.ctorParameters = function () { return []; };
    MenuComponent.propDecorators = {
        options: [{ type: Input }],
        onSelectOption: [{ type: Output }]
    };
    return MenuComponent;
}());
export { MenuComponent };
if (false) {
    /** @type {?} */
    MenuComponent.prototype.options;
    /** @type {?} */
    MenuComponent.prototype.onSelectOption;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AaW9uYXIvZm9ybS8iLCJzb3VyY2VzIjpbInVpL2NvbXBvbmVudHMvc2VsZWN0L2NvbXBvbmVudHMvbWVudS9tZW51LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUvRTtJQThCRTtRQUhTLFlBQU8sR0FBRyxFQUFFLENBQUM7UUFDWixtQkFBYyxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7SUFHbkQsQ0FBQzs7OztJQUVELGdDQUFROzs7SUFBUjtJQUNBLENBQUM7O2dCQWxDRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLE1BQU07b0JBQ2hCLFFBQVEsRUFBRSxnUEFPVDs2QkFDUSxxWEFjUjtpQkFDRjs7Ozs7MEJBRUUsS0FBSztpQ0FDTCxNQUFNOztJQVFULG9CQUFDO0NBQUEsQUFwQ0QsSUFvQ0M7U0FWWSxhQUFhOzs7SUFDeEIsZ0NBQXNCOztJQUN0Qix1Q0FBbUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uSW5pdCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ21lbnUnLFxuICB0ZW1wbGF0ZTogYFxuICAgICAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgb3B0aW9uIG9mIG9wdGlvbnNcIj5cbiAgICAgICAgICA8c2VsZWN0LW9wdGlvblxuICAgICAgICAgICAgICAgICAgW2RhdGFdPVwib3B0aW9uXCJcbiAgICAgICAgICAgICAgICAgIChjbGljayk9XCJ0aGlzLm9uU2VsZWN0T3B0aW9uLmVtaXQob3B0aW9uKVwiXG4gICAgICAgICAgPjwvc2VsZWN0LW9wdGlvbj5cbiAgICAgIDwvbmctY29udGFpbmVyPlxuICBgLFxuICBzdHlsZXM6IFtgXG4gICAgICA6aG9zdCB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDE5NiwgMjAyLCAyMTIpO1xuICAgICAgICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgICAgICAgICBwYWRkaW5nOiAwIDEwcHg7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIHRvcDogMTAwJTtcbiAgICAgICAgICB6LWluZGV4OiA5OTk5O1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIG1heC1oZWlnaHQ6IDIwcmVtO1xuICAgICAgfVxuICBgXVxufSlcbmV4cG9ydCBjbGFzcyBNZW51Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgb3B0aW9ucyA9IFtdO1xuICBAT3V0cHV0KCkgb25TZWxlY3RPcHRpb24gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbn1cbiJdfQ==