"use strict";
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var MenuComponent = /** @class */ (function () {
    function MenuComponent() {
        var _this = this;
        this.options = [];
        this.name = '';
        this.value = null;
        this.change = new core_1.EventEmitter();
        this.blur = new core_1.EventEmitter();
        this.enter = new core_1.EventEmitter();
        this.invalid = false;
        this.onSelectOption = function (option) {
            _this.change.emit(option.value);
            _this.blur.emit();
        };
    }
    /**
     * @return {?}
     */
    MenuComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    MenuComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
    };
    MenuComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'io-menu',
                    template: "\n      <ng-container *ngFor=\"let option of options\">\n          <div\n                  class=\"option\"\n                  [class.active]=\"option.value === value\"\n                  (click)=\"onSelectOption(option)\"\n          >\n              {{option.label}}\n          </div>\n      </ng-container>\n  ",
                    styles: [":host{display:flex;flex-direction:column;width:100%}:host .option{border:0;cursor:pointer;font-size:1.6rem;margin:.5rem 0}:host .option.active,:host .option:hover{font-weight:700}"]
                }] }
    ];
    /** @nocollapse */
    MenuComponent.ctorParameters = function () { return []; };
    MenuComponent.propDecorators = {
        options: [{ type: core_1.Input }],
        name: [{ type: core_1.Input }],
        value: [{ type: core_1.Input }],
        change: [{ type: core_1.Output }],
        blur: [{ type: core_1.Output }],
        enter: [{ type: core_1.Output }],
        invalid: [{ type: core_1.Input }]
    };
    return MenuComponent;
}());
exports.MenuComponent = MenuComponent;
if (false) {
    /** @type {?} */
    MenuComponent.prototype.options;
    /** @type {?} */
    MenuComponent.prototype.name;
    /** @type {?} */
    MenuComponent.prototype.value;
    /** @type {?} */
    MenuComponent.prototype.change;
    /** @type {?} */
    MenuComponent.prototype.blur;
    /** @type {?} */
    MenuComponent.prototype.enter;
    /** @type {?} */
    MenuComponent.prototype.invalid;
    /** @type {?} */
    MenuComponent.prototype.onSelectOption;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AaW9uYXIvZm9ybS8iLCJzb3VyY2VzIjpbInVpL2NvbXBvbmVudHMvbWVudS9tZW51LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxzQ0FBeUc7QUFFekc7SUF3QkU7UUFBQSxpQkFDQztRQVRRLFlBQU8sR0FBc0QsRUFBRSxDQUFDO1FBQ2hFLFNBQUksR0FBRyxFQUFFLENBQUM7UUFDVixVQUFLLEdBQVEsSUFBSSxDQUFDO1FBQ2pCLFdBQU0sR0FBRyxJQUFJLG1CQUFZLEVBQUUsQ0FBQztRQUM1QixTQUFJLEdBQUcsSUFBSSxtQkFBWSxFQUFFLENBQUM7UUFDMUIsVUFBSyxHQUFHLElBQUksbUJBQVksRUFBRSxDQUFDO1FBQzVCLFlBQU8sR0FBWSxLQUFLLENBQUM7UUFXbEMsbUJBQWMsR0FBRyxVQUFBLE1BQU07WUFDckIsS0FBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQy9CLEtBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDbkIsQ0FBQyxDQUFDO0lBWEYsQ0FBQzs7OztJQUVELGdDQUFROzs7SUFBUjtJQUNBLENBQUM7Ozs7O0lBRUQsbUNBQVc7Ozs7SUFBWCxVQUFZLE9BQXNCO0lBQ2xDLENBQUM7O2dCQS9CRixnQkFBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxTQUFTO29CQUNuQixRQUFRLEVBQUUsMFRBVVQ7O2lCQUVGOzs7OzswQkFFRSxZQUFLO3VCQUNMLFlBQUs7d0JBQ0wsWUFBSzt5QkFDTCxhQUFNO3VCQUNOLGFBQU07d0JBQ04sYUFBTTswQkFDTixZQUFLOztJQWdCUixvQkFBQztDQUFBLEFBdENELElBc0NDO0FBdkJZLHNDQUFhOzs7SUFDeEIsZ0NBQXlFOztJQUN6RSw2QkFBbUI7O0lBQ25CLDhCQUEyQjs7SUFDM0IsK0JBQXNDOztJQUN0Qyw2QkFBb0M7O0lBQ3BDLDhCQUFxQzs7SUFDckMsZ0NBQWtDOztJQVdsQyx1Q0FHRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25DaGFuZ2VzLCBPbkluaXQsIE91dHB1dCwgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdpby1tZW51JyxcbiAgdGVtcGxhdGU6IGBcbiAgICAgIDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IG9wdGlvbiBvZiBvcHRpb25zXCI+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgY2xhc3M9XCJvcHRpb25cIlxuICAgICAgICAgICAgICAgICAgW2NsYXNzLmFjdGl2ZV09XCJvcHRpb24udmFsdWUgPT09IHZhbHVlXCJcbiAgICAgICAgICAgICAgICAgIChjbGljayk9XCJvblNlbGVjdE9wdGlvbihvcHRpb24pXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICAgIHt7b3B0aW9uLmxhYmVsfX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgIDwvbmctY29udGFpbmVyPlxuICBgLFxuICBzdHlsZVVybHM6IFtgLi9tZW51LmNvbXBvbmVudC5zY3NzYF1cbn0pXG5leHBvcnQgY2xhc3MgTWVudUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcbiAgQElucHV0KCkgb3B0aW9uczogKHsgbGFiZWw6IGFueSwgdmFsdWU6IGFueSwgZGlzYWJsZT86IGJvb2xlYW4gfSlbXSA9IFtdO1xuICBASW5wdXQoKSBuYW1lID0gJyc7XG4gIEBJbnB1dCgpIHZhbHVlOiBhbnkgPSBudWxsO1xuICBAT3V0cHV0KCkgY2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgYmx1ciA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIGVudGVyID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBASW5wdXQoKSBpbnZhbGlkOiBCb29sZWFuID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgfVxuXG4gIG9uU2VsZWN0T3B0aW9uID0gb3B0aW9uID0+IHtcbiAgICB0aGlzLmNoYW5nZS5lbWl0KG9wdGlvbi52YWx1ZSk7XG4gICAgdGhpcy5ibHVyLmVtaXQoKTtcbiAgfTtcblxufVxuIl19