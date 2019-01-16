"use strict";
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var CheckboxComponent = /** @class */ (function () {
    function CheckboxComponent() {
        var _this = this;
        this.title = '';
        this.value = false;
        this.change = new core_1.EventEmitter();
        this.blur = new core_1.EventEmitter();
        this.invalid = false;
        this.onClick = function () {
            _this.value = !_this.value;
            _this.change.emit(_this.value);
        };
    }
    /**
     * @return {?}
     */
    CheckboxComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    CheckboxComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'io-checkbox',
                    template: "<div class=\"checkbox\" [class.active]=\"value\">\n    <i class=\"fas fa-check icon\"></i>\n</div>\n<p class=\"label\">{{label}}</p>\n\n\n",
                    styles: [":host{display:flex;align-items:center}:host .checkbox{background-color:#fff;border-radius:.3em;box-sizing:border-box;border:1px solid #d9d9d9;display:flex;align-items:center;justify-content:center;margin-right:.3em;padding:0;touch-action:manipulation;transition:.3s;width:1.8em;height:1.8em}:host .checkbox:hover{border-color:#1890ff}:host .checkbox.active{background-color:#1890ff;border-color:#1890ff}:host .icon{color:#fff}"]
                }] }
    ];
    /** @nocollapse */
    CheckboxComponent.ctorParameters = function () { return []; };
    CheckboxComponent.propDecorators = {
        label: [{ type: core_1.Input }],
        title: [{ type: core_1.Input }],
        value: [{ type: core_1.Input }],
        change: [{ type: core_1.Output }],
        blur: [{ type: core_1.Output }],
        invalid: [{ type: core_1.Input }],
        onClick: [{ type: core_1.HostListener, args: ['click',] }]
    };
    return CheckboxComponent;
}());
exports.CheckboxComponent = CheckboxComponent;
if (false) {
    /** @type {?} */
    CheckboxComponent.prototype.label;
    /** @type {?} */
    CheckboxComponent.prototype.title;
    /** @type {?} */
    CheckboxComponent.prototype.value;
    /** @type {?} */
    CheckboxComponent.prototype.change;
    /** @type {?} */
    CheckboxComponent.prototype.blur;
    /** @type {?} */
    CheckboxComponent.prototype.invalid;
    /** @type {?} */
    CheckboxComponent.prototype.onClick;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tib3guY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGlvbmFyL2Zvcm0vIiwic291cmNlcyI6WyJ1aS9jb21wb25lbnRzL2NoZWNrYm94L2NoZWNrYm94LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxzQ0FBNkY7QUFFN0Y7SUFxQkU7UUFBQSxpQkFDQztRQWRRLFVBQUssR0FBUSxFQUFFLENBQUM7UUFDaEIsVUFBSyxHQUFZLEtBQUssQ0FBQztRQUN0QixXQUFNLEdBQUcsSUFBSSxtQkFBWSxFQUFFLENBQUM7UUFDNUIsU0FBSSxHQUFHLElBQUksbUJBQVksRUFBRSxDQUFDO1FBQzNCLFlBQU8sR0FBWSxLQUFLLENBQUM7UUFJbEMsWUFBTyxHQUFHO1lBQ1IsS0FBSSxDQUFDLEtBQUssR0FBRyxDQUFDLEtBQUksQ0FBQyxLQUFLLENBQUM7WUFDekIsS0FBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQy9CLENBQUMsQ0FBQztJQUdGLENBQUM7Ozs7SUFFRCxvQ0FBUTs7O0lBQVI7SUFDQSxDQUFDOztnQkF6QkYsZ0JBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsYUFBYTtvQkFDdkIsc0pBQXdDOztpQkFFekM7Ozs7O3dCQUdFLFlBQUs7d0JBQ0wsWUFBSzt3QkFDTCxZQUFLO3lCQUNMLGFBQU07dUJBQ04sYUFBTTswQkFDTixZQUFLOzBCQUdMLG1CQUFZLFNBQUMsT0FBTzs7SUFXdkIsd0JBQUM7Q0FBQSxBQTFCRCxJQTBCQztBQXJCWSw4Q0FBaUI7OztJQUU1QixrQ0FBdUI7O0lBQ3ZCLGtDQUF5Qjs7SUFDekIsa0NBQWdDOztJQUNoQyxtQ0FBc0M7O0lBQ3RDLGlDQUFvQzs7SUFDcEMsb0NBQWtDOztJQUdsQyxvQ0FJRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBIb3N0TGlzdGVuZXIsIElucHV0LCBPbkluaXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdpby1jaGVja2JveCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9jaGVja2JveC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2NoZWNrYm94LmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgQ2hlY2tib3hDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIEBJbnB1dCgpIGxhYmVsOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHRpdGxlOiBhbnkgPSAnJztcbiAgQElucHV0KCkgdmFsdWU6IEJvb2xlYW4gPSBmYWxzZTtcbiAgQE91dHB1dCgpIGNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIGJsdXIgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBJbnB1dCgpIGludmFsaWQ6IEJvb2xlYW4gPSBmYWxzZTtcblxuXG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJylcbiAgb25DbGljayA9ICgpID0+IHtcbiAgICB0aGlzLnZhbHVlID0gIXRoaXMudmFsdWU7XG4gICAgdGhpcy5jaGFuZ2UuZW1pdCh0aGlzLnZhbHVlKTtcbiAgfTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG59XG4iXX0=