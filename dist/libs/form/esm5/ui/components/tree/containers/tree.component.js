"use strict";
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var TreeComponent = /** @class */ (function () {
    function TreeComponent(cd) {
        var _this = this;
        this.cd = cd;
        this.name = '';
        this.value = null;
        this.change = new core_1.EventEmitter();
        this.onChange = function (node) {
            _this.selected = node;
            _this.change.emit(node.value);
            _this.cd.detectChanges();
        };
    }
    TreeComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'io-tree',
                    template: "<ng-container *ngFor=\"let node of options; let i = index\">\r\n    <tree-node\r\n            [data]=\"node\"\r\n            [selected]=\"selected\"\r\n            [template]=\"template\"\r\n            (change)=\"onChange($event)\"\r\n    >\r\n        <ng-content></ng-content>\r\n    </tree-node>\r\n</ng-container>\r\n\r\n\r\n",
                    changeDetection: core_1.ChangeDetectionStrategy.OnPush,
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    TreeComponent.ctorParameters = function () { return [
        { type: core_1.ChangeDetectorRef }
    ]; };
    TreeComponent.propDecorators = {
        options: [{ type: core_1.Input }],
        name: [{ type: core_1.Input }],
        value: [{ type: core_1.Input }],
        template: [{ type: core_1.Input }],
        change: [{ type: core_1.Output }]
    };
    return TreeComponent;
}());
exports.TreeComponent = TreeComponent;
if (false) {
    /** @type {?} */
    TreeComponent.prototype.options;
    /** @type {?} */
    TreeComponent.prototype.name;
    /** @type {?} */
    TreeComponent.prototype.value;
    /** @type {?} */
    TreeComponent.prototype.template;
    /** @type {?} */
    TreeComponent.prototype.change;
    /** @type {?} */
    TreeComponent.prototype.selected;
    /** @type {?} */
    TreeComponent.prototype.onChange;
    /**
     * @type {?}
     * @private
     */
    TreeComponent.prototype.cd;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AaW9uYXIvZm9ybS8iLCJzb3VyY2VzIjpbInVpL2NvbXBvbmVudHMvdHJlZS9jb250YWluZXJzL3RyZWUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLHNDQVF1QjtBQUl2QjtJQWtCRSx1QkFDVSxFQUFxQjtRQUQvQixpQkFJQztRQUhTLE9BQUUsR0FBRixFQUFFLENBQW1CO1FBUnRCLFNBQUksR0FBRyxFQUFFLENBQUM7UUFDVixVQUFLLEdBQVEsSUFBSSxDQUFDO1FBRWpCLFdBQU0sR0FBRyxJQUFJLG1CQUFZLEVBQUUsQ0FBQztRQVd0QyxhQUFRLEdBQUcsVUFBQyxJQUFjO1lBRXhCLEtBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1lBQ3JCLEtBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUM3QixLQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQzFCLENBQUMsQ0FBQztJQVJGLENBQUM7O2dCQXRCRixnQkFBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxTQUFTO29CQUNuQixxVkFBb0M7b0JBRXBDLGVBQWUsRUFBRSw4QkFBdUIsQ0FBQyxNQUFNOztpQkFDaEQ7Ozs7Z0JBZkMsd0JBQWlCOzs7MEJBb0JoQixZQUFLO3VCQUNMLFlBQUs7d0JBQ0wsWUFBSzsyQkFDTCxZQUFLO3lCQUNMLGFBQU07O0lBbUJULG9CQUFDO0NBQUEsQUFqQ0QsSUFpQ0M7QUEzQlksc0NBQWE7OztJQUl4QixnQ0FBNkI7O0lBQzdCLDZCQUFtQjs7SUFDbkIsOEJBQTJCOztJQUMzQixpQ0FBb0M7O0lBQ3BDLCtCQUFzQzs7SUFFdEMsaUNBQW1COztJQVNuQixpQ0FLRTs7Ozs7SUFYQSwyQkFBNkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENoYW5nZURldGVjdG9yUmVmLFxyXG4gIENvbXBvbmVudCxcclxuICBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsXHJcbiAgSW5wdXQsIE9uQ2hhbmdlcyxcclxuICBPbkRlc3Ryb3ksXHJcbiAgT25Jbml0LCBPdXRwdXQsIFNpbXBsZUNoYW5nZXMsIFRlbXBsYXRlUmVmXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFRyZWVOb2RlIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9UcmVlTm9kZSc7XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdpby10cmVlJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vdHJlZS5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vdHJlZS5jb21wb25lbnQuc2NzcyddLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUcmVlQ29tcG9uZW50IHtcclxuXHJcbiAgLy8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gIFZhcmlhYmxlcyAgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLy8vXHJcblxyXG4gIEBJbnB1dCgpIG9wdGlvbnM6IFRyZWVOb2RlW107XHJcbiAgQElucHV0KCkgbmFtZSA9ICcnO1xyXG4gIEBJbnB1dCgpIHZhbHVlOiBhbnkgPSBudWxsO1xyXG4gIEBJbnB1dCgpIHRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xyXG4gIEBPdXRwdXQoKSBjaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gIHNlbGVjdGVkOiBUcmVlTm9kZTtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIGNkOiBDaGFuZ2VEZXRlY3RvclJlZlxyXG4gICkge1xyXG5cclxuICB9XHJcblxyXG5cclxuICBvbkNoYW5nZSA9IChub2RlOiBUcmVlTm9kZSkgPT4ge1xyXG5cclxuICAgIHRoaXMuc2VsZWN0ZWQgPSBub2RlO1xyXG4gICAgdGhpcy5jaGFuZ2UuZW1pdChub2RlLnZhbHVlKTtcclxuICAgIHRoaXMuY2QuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gIH07XHJcblxyXG5cclxufVxyXG4iXX0=