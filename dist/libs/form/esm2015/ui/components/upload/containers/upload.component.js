/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, EventEmitter, Input, Output, TemplateRef, ViewChild } from '@angular/core';
import _ from 'lodash';
export class UploadComponent {
    ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///
    /**
     * @param {?} elRef
     */
    constructor(elRef) {
        this.elRef = elRef;
        ///-----------------------------------------------  Variables   -----------------------------------------------///
        this.file_list = [];
        this.change = new EventEmitter();
        this.invalid = false;
        this.type = 'input';
        this.multiple = false;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (!this.template) {
            this.template = this._defaultTempRef;
        }
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
    }
    ///-----------------------------------------------  Main Functions   -----------------------------------------------///
    /**
     * @param {?} file_list
     * @return {?}
     */
    onFileChanged(file_list) {
        this.file_list = this.file_list.concat(_.map(file_list));
        this.change.emit(this.multiple ? this.file_list : this.file_list[0]);
    }
}
UploadComponent.decorators = [
    { type: Component, args: [{
                selector: 'io-upload',
                template: "<ng-container *ngIf=\"type === 'dropzone'\">\r\n    <ng-container *ngTemplateOutlet=\"dropzone\"></ng-container>\r\n</ng-container>\r\n\r\n<ng-container *ngIf=\"type === 'input'\">\r\n    <ng-container *ngTemplateOutlet=\"click\"></ng-container>\r\n</ng-container>\r\n\r\n<ng-template #click>\r\n    <click\r\n            (change)=\"onFileChanged($event)\"\r\n            [template]=\"template\"\r\n            [multiple]=\"multiple\"\r\n    >\r\n    </click>\r\n\r\n</ng-template>\r\n\r\n<ng-template #dropzone>\r\n    <drop\r\n            (change)=\"onFileChanged($event)\"\r\n            [template]=\"template\"\r\n    >\r\n    </drop>\r\n</ng-template>\r\n\r\n\r\n<ng-template #default>\r\n    <ng-content></ng-content>\r\n</ng-template>\r\n",
                styles: [":host{display:flex;flex-direction:column;align-items:flex-start;width:100%;height:100%}"]
            }] }
];
/** @nocollapse */
UploadComponent.ctorParameters = () => [
    { type: ElementRef }
];
UploadComponent.propDecorators = {
    change: [{ type: Output }],
    invalid: [{ type: Input }],
    type: [{ type: Input }],
    template: [{ type: Input }],
    multiple: [{ type: Input }],
    _defaultTempRef: [{ type: ViewChild, args: ['default',] }]
};
if (false) {
    /** @type {?} */
    UploadComponent.prototype.file_list;
    /** @type {?} */
    UploadComponent.prototype.change;
    /** @type {?} */
    UploadComponent.prototype.invalid;
    /** @type {?} */
    UploadComponent.prototype.type;
    /** @type {?} */
    UploadComponent.prototype.template;
    /** @type {?} */
    UploadComponent.prototype.multiple;
    /**
     * @type {?}
     * @private
     */
    UploadComponent.prototype._defaultTempRef;
    /**
     * @type {?}
     * @private
     */
    UploadComponent.prototype.elRef;
}
;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBsb2FkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bpb25hci9mb3JtLyIsInNvdXJjZXMiOlsidWkvY29tcG9uZW50cy91cGxvYWQvY29udGFpbmVycy91cGxvYWQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBRUwsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osS0FBSyxFQUdMLE1BQU0sRUFFTixXQUFXLEVBQUUsU0FBUyxFQUN2QixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLENBQUMsTUFBTSxRQUFRLENBQUM7QUFPdkIsTUFBTSxPQUFPLGVBQWU7Ozs7O0lBWTFCLFlBQW9CLEtBQWlCO1FBQWpCLFVBQUssR0FBTCxLQUFLLENBQVk7O1FBVnJDLGNBQVMsR0FBRyxFQUFFLENBQUM7UUFDTCxXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUM3QixZQUFPLEdBQVksS0FBSyxDQUFDO1FBQ3pCLFNBQUksR0FBVyxPQUFPLENBQUM7UUFFdkIsYUFBUSxHQUFZLEtBQUssQ0FBQztJQU1uQyxDQUFDOzs7O0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2xCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQztTQUN0QztJQUNILENBQUM7Ozs7O0lBR0QsV0FBVyxDQUFDLE9BQXNCO0lBQ2xDLENBQUM7Ozs7OztJQUlELGFBQWEsQ0FBQyxTQUFTO1FBQ3JCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO1FBRXpELElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUV2RSxDQUFDOzs7WUFyQ0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxXQUFXO2dCQUNyQixxdkJBQXNDOzthQUV2Qzs7OztZQWZDLFVBQVU7OztxQkFtQlQsTUFBTTtzQkFDTixLQUFLO21CQUNMLEtBQUs7dUJBQ0wsS0FBSzt1QkFDTCxLQUFLOzhCQUVMLFNBQVMsU0FBQyxTQUFTOzs7O0lBUHBCLG9DQUFlOztJQUNmLGlDQUFzQzs7SUFDdEMsa0NBQWtDOztJQUNsQywrQkFBZ0M7O0lBQ2hDLG1DQUFvQzs7SUFDcEMsbUNBQW1DOzs7OztJQUVuQywwQ0FBZ0U7Ozs7O0lBR3BELGdDQUF5Qjs7QUFzQnRDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBBZnRlclZpZXdDaGVja2VkLFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgT25Jbml0LFxuICBPdXRwdXQsXG4gIFNpbXBsZUNoYW5nZXMsXG4gIFRlbXBsYXRlUmVmLCBWaWV3Q2hpbGRcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdpby11cGxvYWQnLFxuICB0ZW1wbGF0ZVVybDogJy4vdXBsb2FkLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vdXBsb2FkLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgVXBsb2FkQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xuICAvLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAgVmFyaWFibGVzICAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0vLy9cbiAgZmlsZV9saXN0ID0gW107XG4gIEBPdXRwdXQoKSBjaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBJbnB1dCgpIGludmFsaWQ6IEJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KCkgdHlwZTogc3RyaW5nID0gJ2lucHV0JztcbiAgQElucHV0KCkgdGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG4gIEBJbnB1dCgpIG11bHRpcGxlOiBCb29sZWFuID0gZmFsc2U7XG5cbiAgQFZpZXdDaGlsZCgnZGVmYXVsdCcpIHByaXZhdGUgX2RlZmF1bHRUZW1wUmVmOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gIC8vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICBMaWZlIEN5Y2xlIEhvb2sgICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS8vL1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsUmVmOiBFbGVtZW50UmVmKSB7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBpZiAoIXRoaXMudGVtcGxhdGUpIHtcbiAgICAgIHRoaXMudGVtcGxhdGUgPSB0aGlzLl9kZWZhdWx0VGVtcFJlZjtcbiAgICB9XG4gIH1cblxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgfVxuXG5cbiAgLy8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gIE1haW4gRnVuY3Rpb25zICAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0vLy9cbiAgb25GaWxlQ2hhbmdlZChmaWxlX2xpc3QpIHtcbiAgICB0aGlzLmZpbGVfbGlzdCA9IHRoaXMuZmlsZV9saXN0LmNvbmNhdChfLm1hcChmaWxlX2xpc3QpKTtcblxuICAgIHRoaXMuY2hhbmdlLmVtaXQodGhpcy5tdWx0aXBsZSA/IHRoaXMuZmlsZV9saXN0IDogdGhpcy5maWxlX2xpc3RbMF0pO1xuXG4gIH1cblxufTtcbiJdfQ==