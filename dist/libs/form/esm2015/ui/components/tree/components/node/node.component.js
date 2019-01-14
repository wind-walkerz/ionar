/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter, ChangeDetectorRef, TemplateRef, ElementRef } from '@angular/core';
import { IoFormFieldUI } from '../../../../interfaces/IoFormFieldUI';
export class NodeComponent extends IoFormFieldUI {
    /**
     * @param {?} cd
     * @param {?} el
     */
    constructor(cd, el) {
        super(cd, el);
        this.change = new EventEmitter();
        this.onChange = () => {
            if (!this.data.children) {
                this.setContext({
                    children: this.data.children,
                    label: this.data.label,
                    selected: this.data === this.selected
                });
                this.change.emit(this.data);
                this.cd.markForCheck();
            }
        };
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        super.ngOnInit();
        this.setContext({
            children: this.data.children,
            label: this.data.label,
            selected: this.data === this.selected
        });
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        super.ngOnChanges(changes);
    }
}
NodeComponent.decorators = [
    { type: Component, args: [{
                selector: 'tree-node',
                template: "<ng-container [ioCollapsible]=\"data.children ? '' : null\" *ngIf=\"viewInit\">\r\n    <div\r\n            class=\"node-item\"\r\n            collapseToggle\r\n            (click)=\"onChange()\"\r\n    >\r\n        <ng-container [ngTemplateOutlet]=\"template\" [ngTemplateOutletContext]=\"context\"></ng-container>\r\n    </div>\r\n\r\n    <ng-container *ngIf=\"data?.children\">\r\n        <div\r\n                class=\"node-children\"\r\n                *collapseContent\r\n        >\r\n            <ng-container *ngFor=\"let node of data?.children\">\r\n                <tree-node\r\n                        [data]=\"node\"\r\n                        [selected]=\"selected\"\r\n                        [template]=\"template\"\r\n                        (change)=\"change.emit($event)\"></tree-node>\r\n            </ng-container>\r\n        </div>\r\n    </ng-container>\r\n\r\n</ng-container>\r\n\r\n\r\n<ng-template let-context #default_template>\r\n\r\n    <div class=\"icon\" *ngIf=\"context?.children\">\r\n        <i class=\"fas fa-chevron-right\"></i>\r\n    </div>\r\n    <p [class.active]=\"context?.selected\" class=\"label\">{{context?.label}}</p>\r\n</ng-template>\r\n\r\n<ng-template #content_template>\r\n    <ng-content></ng-content>\r\n</ng-template>\r\n",
                styles: [":host ::ng-deep .node-item{display:flex;align-items:center}:host ::ng-deep .node-item .icon{font-size:1.2rem}:host ::ng-deep .node-item .label{margin-left:2rem}:host ::ng-deep .node-item .label.active{font-weight:700}:host ::ng-deep .node-children{margin-left:2rem}"]
            }] }
];
/** @nocollapse */
NodeComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef }
];
NodeComponent.propDecorators = {
    data: [{ type: Input }],
    selected: [{ type: Input }],
    template: [{ type: Input }],
    change: [{ type: Output }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm9kZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AaW9uYXIvZm9ybS8iLCJzb3VyY2VzIjpbInVpL2NvbXBvbmVudHMvdHJlZS9jb21wb25lbnRzL25vZGUvbm9kZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBRVQsS0FBSyxFQUNMLE1BQU0sRUFDTixZQUFZLEVBQTRCLGlCQUFpQixFQUFFLFdBQVcsRUFBRSxVQUFVLEVBQ25GLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQU9yRSxNQUFNLE9BQU8sYUFBYyxTQUFRLGFBQWE7Ozs7O0lBVTlDLFlBQ0UsRUFBcUIsRUFDckIsRUFBYztRQUVkLEtBQUssQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFQTixXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQXVCdEMsYUFBUSxHQUFHLEdBQUcsRUFBRTtZQUVkLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRTtnQkFDdkIsSUFBSSxDQUFDLFVBQVUsQ0FBQztvQkFDZCxRQUFRLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRO29CQUM1QixLQUFLLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLO29CQUN0QixRQUFRLEVBQUUsSUFBSSxDQUFDLElBQUksS0FBSyxJQUFJLENBQUMsUUFBUTtpQkFDdEMsQ0FBQyxDQUFDO2dCQUNILElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDNUIsSUFBSSxDQUFDLEVBQUUsQ0FBQyxZQUFZLEVBQUUsQ0FBQzthQUN4QjtRQUNILENBQUMsQ0FBQztJQTFCRixDQUFDOzs7O0lBRUQsUUFBUTtRQUNOLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNqQixJQUFJLENBQUMsVUFBVSxDQUFDO1lBQ2QsUUFBUSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUTtZQUM1QixLQUFLLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLO1lBQ3RCLFFBQVEsRUFBRSxJQUFJLENBQUMsSUFBSSxLQUFLLElBQUksQ0FBQyxRQUFRO1NBQ3RDLENBQUMsQ0FBQztJQUNMLENBQUM7Ozs7O0lBRUQsV0FBVyxDQUFDLE9BQXNCO1FBQ2hDLEtBQUssQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDN0IsQ0FBQzs7O1lBakNGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsV0FBVztnQkFDckIsdXdDQUFvQzs7YUFFckM7Ozs7WUFUeUMsaUJBQWlCO1lBQWUsVUFBVTs7O21CQWNqRixLQUFLO3VCQUNMLEtBQUs7dUJBQ0wsS0FBSztxQkFDTCxNQUFNOzs7O0lBSFAsNkJBQXdCOztJQUN4QixpQ0FBNEI7O0lBQzVCLGlDQUFvQzs7SUFDcEMsK0JBQXNDOztJQXVCdEMsaUNBV0UiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIENvbXBvbmVudCxcclxuICBPbkluaXQsXHJcbiAgSW5wdXQsXHJcbiAgT3V0cHV0LFxyXG4gIEV2ZW50RW1pdHRlciwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzLCBDaGFuZ2VEZXRlY3RvclJlZiwgVGVtcGxhdGVSZWYsIEVsZW1lbnRSZWZcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgVHJlZU5vZGUgfSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzL1RyZWVOb2RlJztcclxuaW1wb3J0IHsgSW9Gb3JtRmllbGRVSSB9IGZyb20gJy4uLy4uLy4uLy4uL2ludGVyZmFjZXMvSW9Gb3JtRmllbGRVSSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3RyZWUtbm9kZScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL25vZGUuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL25vZGUuY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTm9kZUNvbXBvbmVudCBleHRlbmRzIElvRm9ybUZpZWxkVUkgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XHJcblxyXG4gIC8vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICBWYXJpYWJsZXMgICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS8vL1xyXG5cclxuICBASW5wdXQoKSBkYXRhOiBUcmVlTm9kZTtcclxuICBASW5wdXQoKSBzZWxlY3RlZDogVHJlZU5vZGU7XHJcbiAgQElucHV0KCkgdGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XHJcbiAgQE91dHB1dCgpIGNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgY2Q6IENoYW5nZURldGVjdG9yUmVmLFxyXG4gICAgZWw6IEVsZW1lbnRSZWZcclxuICApIHtcclxuICAgIHN1cGVyKGNkLCBlbCk7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHN1cGVyLm5nT25Jbml0KCk7XHJcbiAgICB0aGlzLnNldENvbnRleHQoe1xyXG4gICAgICBjaGlsZHJlbjogdGhpcy5kYXRhLmNoaWxkcmVuLFxyXG4gICAgICBsYWJlbDogdGhpcy5kYXRhLmxhYmVsLFxyXG4gICAgICBzZWxlY3RlZDogdGhpcy5kYXRhID09PSB0aGlzLnNlbGVjdGVkXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcclxuICAgIHN1cGVyLm5nT25DaGFuZ2VzKGNoYW5nZXMpO1xyXG4gIH1cclxuXHJcbiAgb25DaGFuZ2UgPSAoKSA9PiB7XHJcblxyXG4gICAgaWYgKCF0aGlzLmRhdGEuY2hpbGRyZW4pIHtcclxuICAgICAgdGhpcy5zZXRDb250ZXh0KHtcclxuICAgICAgICBjaGlsZHJlbjogdGhpcy5kYXRhLmNoaWxkcmVuLFxyXG4gICAgICAgIGxhYmVsOiB0aGlzLmRhdGEubGFiZWwsXHJcbiAgICAgICAgc2VsZWN0ZWQ6IHRoaXMuZGF0YSA9PT0gdGhpcy5zZWxlY3RlZFxyXG4gICAgICB9KTtcclxuICAgICAgdGhpcy5jaGFuZ2UuZW1pdCh0aGlzLmRhdGEpO1xyXG4gICAgICB0aGlzLmNkLm1hcmtGb3JDaGVjaygpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG59XHJcbiJdfQ==