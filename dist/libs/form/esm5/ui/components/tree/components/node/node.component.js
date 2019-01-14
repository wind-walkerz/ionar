/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Input, Output, EventEmitter, ChangeDetectorRef, TemplateRef, ElementRef } from '@angular/core';
import { IoFormFieldUI } from '../../../../interfaces/IoFormFieldUI';
var NodeComponent = /** @class */ (function (_super) {
    tslib_1.__extends(NodeComponent, _super);
    function NodeComponent(cd, el) {
        var _this = _super.call(this, cd, el) || this;
        _this.change = new EventEmitter();
        _this.onChange = function () {
            if (!_this.data.children) {
                _this.setContext({
                    children: _this.data.children,
                    label: _this.data.label,
                    selected: _this.data === _this.selected
                });
                _this.change.emit(_this.data);
                _this.cd.markForCheck();
            }
        };
        return _this;
    }
    /**
     * @return {?}
     */
    NodeComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        _super.prototype.ngOnInit.call(this);
        this.setContext({
            children: this.data.children,
            label: this.data.label,
            selected: this.data === this.selected
        });
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    NodeComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        _super.prototype.ngOnChanges.call(this, changes);
    };
    NodeComponent.decorators = [
        { type: Component, args: [{
                    selector: 'tree-node',
                    template: "<ng-container [ioCollapsible]=\"data.children ? '' : null\" *ngIf=\"viewInit\">\r\n    <div\r\n            class=\"node-item\"\r\n            collapseToggle\r\n            (click)=\"onChange()\"\r\n    >\r\n        <ng-container [ngTemplateOutlet]=\"template\" [ngTemplateOutletContext]=\"context\"></ng-container>\r\n    </div>\r\n\r\n    <ng-container *ngIf=\"data?.children\">\r\n        <div\r\n                class=\"node-children\"\r\n                *collapseContent\r\n        >\r\n            <ng-container *ngFor=\"let node of data?.children\">\r\n                <tree-node\r\n                        [data]=\"node\"\r\n                        [selected]=\"selected\"\r\n                        [template]=\"template\"\r\n                        (change)=\"change.emit($event)\"></tree-node>\r\n            </ng-container>\r\n        </div>\r\n    </ng-container>\r\n\r\n</ng-container>\r\n\r\n\r\n<ng-template let-context #default_template>\r\n\r\n    <div class=\"icon\" *ngIf=\"context?.children\">\r\n        <i class=\"fas fa-chevron-right\"></i>\r\n    </div>\r\n    <p [class.active]=\"context?.selected\" class=\"label\">{{context?.label}}</p>\r\n</ng-template>\r\n\r\n<ng-template #content_template>\r\n    <ng-content></ng-content>\r\n</ng-template>\r\n",
                    styles: [":host ::ng-deep .node-item{display:flex;align-items:center}:host ::ng-deep .node-item .icon{font-size:1.2rem}:host ::ng-deep .node-item .label{margin-left:2rem}:host ::ng-deep .node-item .label.active{font-weight:700}:host ::ng-deep .node-children{margin-left:2rem}"]
                }] }
    ];
    /** @nocollapse */
    NodeComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef }
    ]; };
    NodeComponent.propDecorators = {
        data: [{ type: Input }],
        selected: [{ type: Input }],
        template: [{ type: Input }],
        change: [{ type: Output }]
    };
    return NodeComponent;
}(IoFormFieldUI));
export { NodeComponent };
if (false) {
    /** @type {?} */
    NodeComponent.prototype.data;
    /** @type {?} */
    NodeComponent.prototype.selected;
    /** @type {?} */
    NodeComponent.prototype.template;
    /** @type {?} */
    NodeComponent.prototype.change;
    /** @type {?} */
    NodeComponent.prototype.onChange;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm9kZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AaW9uYXIvZm9ybS8iLCJzb3VyY2VzIjpbInVpL2NvbXBvbmVudHMvdHJlZS9jb21wb25lbnRzL25vZGUvbm9kZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUVULEtBQUssRUFDTCxNQUFNLEVBQ04sWUFBWSxFQUE0QixpQkFBaUIsRUFBRSxXQUFXLEVBQUUsVUFBVSxFQUNuRixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFFckU7SUFLbUMseUNBQWE7SUFVOUMsdUJBQ0UsRUFBcUIsRUFDckIsRUFBYztRQUZoQixZQUlFLGtCQUFNLEVBQUUsRUFBRSxFQUFFLENBQUMsU0FDZDtRQVJTLFlBQU0sR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBdUJ0QyxjQUFRLEdBQUc7WUFFVCxJQUFJLENBQUMsS0FBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUU7Z0JBQ3ZCLEtBQUksQ0FBQyxVQUFVLENBQUM7b0JBQ2QsUUFBUSxFQUFFLEtBQUksQ0FBQyxJQUFJLENBQUMsUUFBUTtvQkFDNUIsS0FBSyxFQUFFLEtBQUksQ0FBQyxJQUFJLENBQUMsS0FBSztvQkFDdEIsUUFBUSxFQUFFLEtBQUksQ0FBQyxJQUFJLEtBQUssS0FBSSxDQUFDLFFBQVE7aUJBQ3RDLENBQUMsQ0FBQztnQkFDSCxLQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQzVCLEtBQUksQ0FBQyxFQUFFLENBQUMsWUFBWSxFQUFFLENBQUM7YUFDeEI7UUFDSCxDQUFDLENBQUM7O0lBMUJGLENBQUM7Ozs7SUFFRCxnQ0FBUTs7O0lBQVI7UUFDRSxpQkFBTSxRQUFRLFdBQUUsQ0FBQztRQUNqQixJQUFJLENBQUMsVUFBVSxDQUFDO1lBQ2QsUUFBUSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUTtZQUM1QixLQUFLLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLO1lBQ3RCLFFBQVEsRUFBRSxJQUFJLENBQUMsSUFBSSxLQUFLLElBQUksQ0FBQyxRQUFRO1NBQ3RDLENBQUMsQ0FBQztJQUNMLENBQUM7Ozs7O0lBRUQsbUNBQVc7Ozs7SUFBWCxVQUFZLE9BQXNCO1FBQ2hDLGlCQUFNLFdBQVcsWUFBQyxPQUFPLENBQUMsQ0FBQztJQUM3QixDQUFDOztnQkFqQ0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxXQUFXO29CQUNyQix1d0NBQW9DOztpQkFFckM7Ozs7Z0JBVHlDLGlCQUFpQjtnQkFBZSxVQUFVOzs7dUJBY2pGLEtBQUs7MkJBQ0wsS0FBSzsyQkFDTCxLQUFLO3lCQUNMLE1BQU07O0lBb0NULG9CQUFDO0NBQUEsQUFoREQsQ0FLbUMsYUFBYSxHQTJDL0M7U0EzQ1ksYUFBYTs7O0lBSXhCLDZCQUF3Qjs7SUFDeEIsaUNBQTRCOztJQUM1QixpQ0FBb0M7O0lBQ3BDLCtCQUFzQzs7SUF1QnRDLGlDQVdFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBDb21wb25lbnQsXHJcbiAgT25Jbml0LFxyXG4gIElucHV0LFxyXG4gIE91dHB1dCxcclxuICBFdmVudEVtaXR0ZXIsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcywgQ2hhbmdlRGV0ZWN0b3JSZWYsIFRlbXBsYXRlUmVmLCBFbGVtZW50UmVmXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFRyZWVOb2RlIH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcy9UcmVlTm9kZSc7XHJcbmltcG9ydCB7IElvRm9ybUZpZWxkVUkgfSBmcm9tICcuLi8uLi8uLi8uLi9pbnRlcmZhY2VzL0lvRm9ybUZpZWxkVUknO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICd0cmVlLW5vZGUnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9ub2RlLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9ub2RlLmNvbXBvbmVudC5zY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIE5vZGVDb21wb25lbnQgZXh0ZW5kcyBJb0Zvcm1GaWVsZFVJIGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xyXG5cclxuICAvLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAgVmFyaWFibGVzICAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0vLy9cclxuXHJcbiAgQElucHV0KCkgZGF0YTogVHJlZU5vZGU7XHJcbiAgQElucHV0KCkgc2VsZWN0ZWQ6IFRyZWVOb2RlO1xyXG4gIEBJbnB1dCgpIHRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xyXG4gIEBPdXRwdXQoKSBjaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIGNkOiBDaGFuZ2VEZXRlY3RvclJlZixcclxuICAgIGVsOiBFbGVtZW50UmVmXHJcbiAgKSB7XHJcbiAgICBzdXBlcihjZCwgZWwpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICBzdXBlci5uZ09uSW5pdCgpO1xyXG4gICAgdGhpcy5zZXRDb250ZXh0KHtcclxuICAgICAgY2hpbGRyZW46IHRoaXMuZGF0YS5jaGlsZHJlbixcclxuICAgICAgbGFiZWw6IHRoaXMuZGF0YS5sYWJlbCxcclxuICAgICAgc2VsZWN0ZWQ6IHRoaXMuZGF0YSA9PT0gdGhpcy5zZWxlY3RlZFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XHJcbiAgICBzdXBlci5uZ09uQ2hhbmdlcyhjaGFuZ2VzKTtcclxuICB9XHJcblxyXG4gIG9uQ2hhbmdlID0gKCkgPT4ge1xyXG5cclxuICAgIGlmICghdGhpcy5kYXRhLmNoaWxkcmVuKSB7XHJcbiAgICAgIHRoaXMuc2V0Q29udGV4dCh7XHJcbiAgICAgICAgY2hpbGRyZW46IHRoaXMuZGF0YS5jaGlsZHJlbixcclxuICAgICAgICBsYWJlbDogdGhpcy5kYXRhLmxhYmVsLFxyXG4gICAgICAgIHNlbGVjdGVkOiB0aGlzLmRhdGEgPT09IHRoaXMuc2VsZWN0ZWRcclxuICAgICAgfSk7XHJcbiAgICAgIHRoaXMuY2hhbmdlLmVtaXQodGhpcy5kYXRhKTtcclxuICAgICAgdGhpcy5jZC5tYXJrRm9yQ2hlY2soKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxufVxyXG4iXX0=