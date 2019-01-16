"use strict";
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var MenuComponent = /** @class */ (function () {
    function MenuComponent() {
        this.options = [];
        this.onSelectOption = new core_1.EventEmitter();
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
        { type: core_1.Component, args: [{
                    selector: 'menu',
                    template: "\n      <ng-container *ngFor=\"let option of options\">\n          <select-option\n                  [data]=\"option\"\n                  (click)=\"this.onSelectOption.emit(option)\"\n          ></select-option>\n      </ng-container>\n  ",
                    styles: ["\n      :host {\n          background-color: white;\n          border-radius: 5px;\n          box-sizing: border-box;\n          border: 1px solid rgb(196, 202, 212);\n          overflow-y: scroll;\n          padding: 0 10px;\n          position: absolute;\n          top: 100%;\n          z-index: 9999;\n          width: 100%;\n          max-height: 20rem;\n      }\n  "]
                }] }
    ];
    /** @nocollapse */
    MenuComponent.ctorParameters = function () { return []; };
    MenuComponent.propDecorators = {
        options: [{ type: core_1.Input }],
        onSelectOption: [{ type: core_1.Output }]
    };
    return MenuComponent;
}());
exports.MenuComponent = MenuComponent;
if (false) {
    /** @type {?} */
    MenuComponent.prototype.options;
    /** @type {?} */
    MenuComponent.prototype.onSelectOption;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AaW9uYXIvZm9ybS8iLCJzb3VyY2VzIjpbInVpL2NvbXBvbmVudHMvc2VsZWN0L2NvbXBvbmVudHMvbWVudS9tZW51LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxzQ0FBK0U7QUFFL0U7SUE4QkU7UUFIUyxZQUFPLEdBQUcsRUFBRSxDQUFDO1FBQ1osbUJBQWMsR0FBRyxJQUFJLG1CQUFZLEVBQU8sQ0FBQztJQUduRCxDQUFDOzs7O0lBRUQsZ0NBQVE7OztJQUFSO0lBQ0EsQ0FBQzs7Z0JBbENGLGdCQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLE1BQU07b0JBQ2hCLFFBQVEsRUFBRSxnUEFPVDs2QkFDUSxxWEFjUjtpQkFDRjs7Ozs7MEJBRUUsWUFBSztpQ0FDTCxhQUFNOztJQVFULG9CQUFDO0NBQUEsQUFwQ0QsSUFvQ0M7QUFWWSxzQ0FBYTs7O0lBQ3hCLGdDQUFzQjs7SUFDdEIsdUNBQW1EIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkluaXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtZW51JyxcbiAgdGVtcGxhdGU6IGBcbiAgICAgIDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IG9wdGlvbiBvZiBvcHRpb25zXCI+XG4gICAgICAgICAgPHNlbGVjdC1vcHRpb25cbiAgICAgICAgICAgICAgICAgIFtkYXRhXT1cIm9wdGlvblwiXG4gICAgICAgICAgICAgICAgICAoY2xpY2spPVwidGhpcy5vblNlbGVjdE9wdGlvbi5lbWl0KG9wdGlvbilcIlxuICAgICAgICAgID48L3NlbGVjdC1vcHRpb24+XG4gICAgICA8L25nLWNvbnRhaW5lcj5cbiAgYCxcbiAgc3R5bGVzOiBbYFxuICAgICAgOmhvc3Qge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYigxOTYsIDIwMiwgMjEyKTtcbiAgICAgICAgICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gICAgICAgICAgcGFkZGluZzogMCAxMHB4O1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICB0b3A6IDEwMCU7XG4gICAgICAgICAgei1pbmRleDogOTk5OTtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBtYXgtaGVpZ2h0OiAyMHJlbTtcbiAgICAgIH1cbiAgYF1cbn0pXG5leHBvcnQgY2xhc3MgTWVudUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIG9wdGlvbnMgPSBbXTtcbiAgQE91dHB1dCgpIG9uU2VsZWN0T3B0aW9uID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG59XG4iXX0=