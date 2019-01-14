/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, Output, TemplateRef } from '@angular/core';
var TreeComponent = /** @class */ (function () {
    function TreeComponent(cd) {
        var _this = this;
        this.cd = cd;
        this.name = '';
        this.value = null;
        this.change = new EventEmitter();
        this.onChange = function (node) {
            _this.selected = node;
            _this.change.emit(node.value);
            _this.cd.detectChanges();
        };
    }
    TreeComponent.decorators = [
        { type: Component, args: [{
                    selector: 'io-tree',
                    template: "<ng-container *ngFor=\"let node of options; let i = index\">\r\n    <tree-node\r\n            [data]=\"node\"\r\n            [selected]=\"selected\"\r\n            [template]=\"template\"\r\n            (change)=\"onChange($event)\"\r\n    >\r\n        <ng-content></ng-content>\r\n    </tree-node>\r\n</ng-container>\r\n\r\n\r\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    TreeComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef }
    ]; };
    TreeComponent.propDecorators = {
        options: [{ type: Input }],
        name: [{ type: Input }],
        value: [{ type: Input }],
        template: [{ type: Input }],
        change: [{ type: Output }]
    };
    return TreeComponent;
}());
export { TreeComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AaW9uYXIvZm9ybS8iLCJzb3VyY2VzIjpbInVpL2NvbXBvbmVudHMvdHJlZS9jb250YWluZXJzL3RyZWUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ0csWUFBWSxFQUN4QixLQUFLLEVBRUcsTUFBTSxFQUFpQixXQUFXLEVBQzNDLE1BQU0sZUFBZSxDQUFDO0FBSXZCO0lBa0JFLHVCQUNVLEVBQXFCO1FBRC9CLGlCQUlDO1FBSFMsT0FBRSxHQUFGLEVBQUUsQ0FBbUI7UUFSdEIsU0FBSSxHQUFHLEVBQUUsQ0FBQztRQUNWLFVBQUssR0FBUSxJQUFJLENBQUM7UUFFakIsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFXdEMsYUFBUSxHQUFHLFVBQUMsSUFBYztZQUV4QixLQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztZQUNyQixLQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDN0IsS0FBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUMxQixDQUFDLENBQUM7SUFSRixDQUFDOztnQkF0QkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxTQUFTO29CQUNuQixxVkFBb0M7b0JBRXBDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNOztpQkFDaEQ7Ozs7Z0JBZkMsaUJBQWlCOzs7MEJBb0JoQixLQUFLO3VCQUNMLEtBQUs7d0JBQ0wsS0FBSzsyQkFDTCxLQUFLO3lCQUNMLE1BQU07O0lBbUJULG9CQUFDO0NBQUEsQUFqQ0QsSUFpQ0M7U0EzQlksYUFBYTs7O0lBSXhCLGdDQUE2Qjs7SUFDN0IsNkJBQW1COztJQUNuQiw4QkFBMkI7O0lBQzNCLGlDQUFvQzs7SUFDcEMsK0JBQXNDOztJQUV0QyxpQ0FBbUI7O0lBU25CLGlDQUtFOzs7OztJQVhBLDJCQUE2QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQ29tcG9uZW50LFxyXG4gIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlcixcclxuICBJbnB1dCwgT25DaGFuZ2VzLFxyXG4gIE9uRGVzdHJveSxcclxuICBPbkluaXQsIE91dHB1dCwgU2ltcGxlQ2hhbmdlcywgVGVtcGxhdGVSZWZcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgVHJlZU5vZGUgfSBmcm9tICcuLi9pbnRlcmZhY2VzL1RyZWVOb2RlJztcclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2lvLXRyZWUnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi90cmVlLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi90cmVlLmNvbXBvbmVudC5zY3NzJ10sXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcclxufSlcclxuZXhwb3J0IGNsYXNzIFRyZWVDb21wb25lbnQge1xyXG5cclxuICAvLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAgVmFyaWFibGVzICAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0vLy9cclxuXHJcbiAgQElucHV0KCkgb3B0aW9uczogVHJlZU5vZGVbXTtcclxuICBASW5wdXQoKSBuYW1lID0gJyc7XHJcbiAgQElucHV0KCkgdmFsdWU6IGFueSA9IG51bGw7XHJcbiAgQElucHV0KCkgdGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XHJcbiAgQE91dHB1dCgpIGNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgc2VsZWN0ZWQ6IFRyZWVOb2RlO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgY2Q6IENoYW5nZURldGVjdG9yUmVmXHJcbiAgKSB7XHJcblxyXG4gIH1cclxuXHJcblxyXG4gIG9uQ2hhbmdlID0gKG5vZGU6IFRyZWVOb2RlKSA9PiB7XHJcblxyXG4gICAgdGhpcy5zZWxlY3RlZCA9IG5vZGU7XHJcbiAgICB0aGlzLmNoYW5nZS5lbWl0KG5vZGUudmFsdWUpO1xyXG4gICAgdGhpcy5jZC5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgfTtcclxuXHJcblxyXG59XHJcbiJdfQ==