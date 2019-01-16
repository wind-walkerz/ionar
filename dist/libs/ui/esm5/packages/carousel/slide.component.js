"use strict";
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var SlideComponent = /** @class */ (function () {
    function SlideComponent(el, cd) {
        this.el = el;
        this.cd = cd;
    }
    /**
     * @return {?}
     */
    SlideComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.cd.detectChanges();
    };
    SlideComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'slide',
                    template: "\n      <ng-container *ngTemplateOutlet=\"template\"></ng-container>\n  ",
                    styles: ["\n      :host {\n          display: flex;\n          position: absolute;\n          flex: 1;\n          width: 100%;\n          height: 100%;\n\n      }\n  "]
                }] }
    ];
    /** @nocollapse */
    SlideComponent.ctorParameters = function () { return [
        { type: core_1.ElementRef },
        { type: core_1.ChangeDetectorRef }
    ]; };
    SlideComponent.propDecorators = {
        template: [{ type: core_1.Input }]
    };
    return SlideComponent;
}());
exports.SlideComponent = SlideComponent;
if (false) {
    /** @type {?} */
    SlideComponent.prototype.template;
    /** @type {?} */
    SlideComponent.prototype.el;
    /**
     * @type {?}
     * @private
     */
    SlideComponent.prototype.cd;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2xpZGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGlvbmFyL3VpLyIsInNvdXJjZXMiOlsicGFja2FnZXMvY2Fyb3VzZWwvc2xpZGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLHNDQUFxRztBQUdyRztJQXFCRSx3QkFDUyxFQUFjLEVBQ2IsRUFBcUI7UUFEdEIsT0FBRSxHQUFGLEVBQUUsQ0FBWTtRQUNiLE9BQUUsR0FBRixFQUFFLENBQW1CO0lBRS9CLENBQUM7Ozs7SUFFRCxpQ0FBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQzFCLENBQUM7O2dCQTdCRixnQkFBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxPQUFPO29CQUNqQixRQUFRLEVBQUUsMEVBRVQ7NkJBQ1EsOEpBU1I7aUJBQ0Y7Ozs7Z0JBbEJzQyxpQkFBVTtnQkFBeEMsd0JBQWlCOzs7MkJBcUJ2QixZQUFLOztJQWFSLHFCQUFDO0NBQUEsQUEvQkQsSUErQkM7QUFmWSx3Q0FBYzs7O0lBRXpCLGtDQUFvQzs7SUFJbEMsNEJBQXFCOzs7OztJQUNyQiw0QkFBNkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBJbnB1dCwgT25Jbml0LCBUZW1wbGF0ZVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnc2xpZGUnLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJ0ZW1wbGF0ZVwiPjwvbmctY29udGFpbmVyPlxyXG4gIGAsXHJcbiAgc3R5bGVzOiBbYFxyXG4gICAgICA6aG9zdCB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgZmxleDogMTtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG5cclxuICAgICAgfVxyXG4gIGBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTbGlkZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIEBJbnB1dCgpIHRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xyXG5cclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwdWJsaWMgZWw6IEVsZW1lbnRSZWYsXHJcbiAgICBwcml2YXRlIGNkOiBDaGFuZ2VEZXRlY3RvclJlZlxyXG4gICkge1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLmNkLmRldGVjdENoYW5nZXMoKTtcclxuICB9XHJcblxyXG59XHJcbiJdfQ==