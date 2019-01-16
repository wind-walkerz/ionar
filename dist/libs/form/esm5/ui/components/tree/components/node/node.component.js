"use strict";
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var IoFormFieldUI_1 = require("../../../../interfaces/IoFormFieldUI");
var NodeComponent = /** @class */ (function (_super) {
    tslib_1.__extends(NodeComponent, _super);
    function NodeComponent(cd, el) {
        var _this = _super.call(this, cd, el) || this;
        _this.change = new core_1.EventEmitter();
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
        { type: core_1.Component, args: [{
                    selector: 'tree-node',
                    template: "<ng-container [ioCollapsible]=\"data.children ? '' : null\" *ngIf=\"viewInit\">\r\n    <div\r\n            class=\"node-item\"\r\n            collapseToggle\r\n            (click)=\"onChange()\"\r\n    >\r\n        <ng-container [ngTemplateOutlet]=\"template\" [ngTemplateOutletContext]=\"context\"></ng-container>\r\n    </div>\r\n\r\n    <ng-container *ngIf=\"data?.children\">\r\n        <div\r\n                class=\"node-children\"\r\n                *collapseContent\r\n        >\r\n            <ng-container *ngFor=\"let node of data?.children\">\r\n                <tree-node\r\n                        [data]=\"node\"\r\n                        [selected]=\"selected\"\r\n                        [template]=\"template\"\r\n                        (change)=\"change.emit($event)\"></tree-node>\r\n            </ng-container>\r\n        </div>\r\n    </ng-container>\r\n\r\n</ng-container>\r\n\r\n\r\n<ng-template let-context #default_template>\r\n\r\n    <div class=\"icon\" *ngIf=\"context?.children\">\r\n        <i class=\"fas fa-chevron-right\"></i>\r\n    </div>\r\n    <p [class.active]=\"context?.selected\" class=\"label\">{{context?.label}}</p>\r\n</ng-template>\r\n\r\n<ng-template #content_template>\r\n    <ng-content></ng-content>\r\n</ng-template>\r\n",
                    styles: [":host ::ng-deep .node-item{display:flex;align-items:center}:host ::ng-deep .node-item .icon{font-size:1.2rem}:host ::ng-deep .node-item .label{margin-left:2rem}:host ::ng-deep .node-item .label.active{font-weight:700}:host ::ng-deep .node-children{margin-left:2rem}"]
                }] }
    ];
    /** @nocollapse */
    NodeComponent.ctorParameters = function () { return [
        { type: core_1.ChangeDetectorRef },
        { type: core_1.ElementRef }
    ]; };
    NodeComponent.propDecorators = {
        data: [{ type: core_1.Input }],
        selected: [{ type: core_1.Input }],
        template: [{ type: core_1.Input }],
        change: [{ type: core_1.Output }]
    };
    return NodeComponent;
}(IoFormFieldUI_1.IoFormFieldUI));
exports.NodeComponent = NodeComponent;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm9kZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AaW9uYXIvZm9ybS8iLCJzb3VyY2VzIjpbInVpL2NvbXBvbmVudHMvdHJlZS9jb21wb25lbnRzL25vZGUvbm9kZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBLHNDQU11QjtBQUV2QixzRUFBcUU7QUFFckU7SUFLbUMseUNBQWE7SUFVOUMsdUJBQ0UsRUFBcUIsRUFDckIsRUFBYztRQUZoQixZQUlFLGtCQUFNLEVBQUUsRUFBRSxFQUFFLENBQUMsU0FDZDtRQVJTLFlBQU0sR0FBRyxJQUFJLG1CQUFZLEVBQUUsQ0FBQztRQXVCdEMsY0FBUSxHQUFHO1lBRVQsSUFBSSxDQUFDLEtBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFO2dCQUN2QixLQUFJLENBQUMsVUFBVSxDQUFDO29CQUNkLFFBQVEsRUFBRSxLQUFJLENBQUMsSUFBSSxDQUFDLFFBQVE7b0JBQzVCLEtBQUssRUFBRSxLQUFJLENBQUMsSUFBSSxDQUFDLEtBQUs7b0JBQ3RCLFFBQVEsRUFBRSxLQUFJLENBQUMsSUFBSSxLQUFLLEtBQUksQ0FBQyxRQUFRO2lCQUN0QyxDQUFDLENBQUM7Z0JBQ0gsS0FBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUM1QixLQUFJLENBQUMsRUFBRSxDQUFDLFlBQVksRUFBRSxDQUFDO2FBQ3hCO1FBQ0gsQ0FBQyxDQUFDOztJQTFCRixDQUFDOzs7O0lBRUQsZ0NBQVE7OztJQUFSO1FBQ0UsaUJBQU0sUUFBUSxXQUFFLENBQUM7UUFDakIsSUFBSSxDQUFDLFVBQVUsQ0FBQztZQUNkLFFBQVEsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVE7WUFDNUIsS0FBSyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSztZQUN0QixRQUFRLEVBQUUsSUFBSSxDQUFDLElBQUksS0FBSyxJQUFJLENBQUMsUUFBUTtTQUN0QyxDQUFDLENBQUM7SUFDTCxDQUFDOzs7OztJQUVELG1DQUFXOzs7O0lBQVgsVUFBWSxPQUFzQjtRQUNoQyxpQkFBTSxXQUFXLFlBQUMsT0FBTyxDQUFDLENBQUM7SUFDN0IsQ0FBQzs7Z0JBakNGLGdCQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFdBQVc7b0JBQ3JCLHV3Q0FBb0M7O2lCQUVyQzs7OztnQkFUeUMsd0JBQWlCO2dCQUFlLGlCQUFVOzs7dUJBY2pGLFlBQUs7MkJBQ0wsWUFBSzsyQkFDTCxZQUFLO3lCQUNMLGFBQU07O0lBb0NULG9CQUFDO0NBQUEsQUFoREQsQ0FLbUMsNkJBQWEsR0EyQy9DO0FBM0NZLHNDQUFhOzs7SUFJeEIsNkJBQXdCOztJQUN4QixpQ0FBNEI7O0lBQzVCLGlDQUFvQzs7SUFDcEMsK0JBQXNDOztJQXVCdEMsaUNBV0UiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIENvbXBvbmVudCxcclxuICBPbkluaXQsXHJcbiAgSW5wdXQsXHJcbiAgT3V0cHV0LFxyXG4gIEV2ZW50RW1pdHRlciwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzLCBDaGFuZ2VEZXRlY3RvclJlZiwgVGVtcGxhdGVSZWYsIEVsZW1lbnRSZWZcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgVHJlZU5vZGUgfSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzL1RyZWVOb2RlJztcclxuaW1wb3J0IHsgSW9Gb3JtRmllbGRVSSB9IGZyb20gJy4uLy4uLy4uLy4uL2ludGVyZmFjZXMvSW9Gb3JtRmllbGRVSSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3RyZWUtbm9kZScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL25vZGUuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL25vZGUuY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTm9kZUNvbXBvbmVudCBleHRlbmRzIElvRm9ybUZpZWxkVUkgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XHJcblxyXG4gIC8vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICBWYXJpYWJsZXMgICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS8vL1xyXG5cclxuICBASW5wdXQoKSBkYXRhOiBUcmVlTm9kZTtcclxuICBASW5wdXQoKSBzZWxlY3RlZDogVHJlZU5vZGU7XHJcbiAgQElucHV0KCkgdGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XHJcbiAgQE91dHB1dCgpIGNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgY2Q6IENoYW5nZURldGVjdG9yUmVmLFxyXG4gICAgZWw6IEVsZW1lbnRSZWZcclxuICApIHtcclxuICAgIHN1cGVyKGNkLCBlbCk7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHN1cGVyLm5nT25Jbml0KCk7XHJcbiAgICB0aGlzLnNldENvbnRleHQoe1xyXG4gICAgICBjaGlsZHJlbjogdGhpcy5kYXRhLmNoaWxkcmVuLFxyXG4gICAgICBsYWJlbDogdGhpcy5kYXRhLmxhYmVsLFxyXG4gICAgICBzZWxlY3RlZDogdGhpcy5kYXRhID09PSB0aGlzLnNlbGVjdGVkXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcclxuICAgIHN1cGVyLm5nT25DaGFuZ2VzKGNoYW5nZXMpO1xyXG4gIH1cclxuXHJcbiAgb25DaGFuZ2UgPSAoKSA9PiB7XHJcblxyXG4gICAgaWYgKCF0aGlzLmRhdGEuY2hpbGRyZW4pIHtcclxuICAgICAgdGhpcy5zZXRDb250ZXh0KHtcclxuICAgICAgICBjaGlsZHJlbjogdGhpcy5kYXRhLmNoaWxkcmVuLFxyXG4gICAgICAgIGxhYmVsOiB0aGlzLmRhdGEubGFiZWwsXHJcbiAgICAgICAgc2VsZWN0ZWQ6IHRoaXMuZGF0YSA9PT0gdGhpcy5zZWxlY3RlZFxyXG4gICAgICB9KTtcclxuICAgICAgdGhpcy5jaGFuZ2UuZW1pdCh0aGlzLmRhdGEpO1xyXG4gICAgICB0aGlzLmNkLm1hcmtGb3JDaGVjaygpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG59XHJcbiJdfQ==