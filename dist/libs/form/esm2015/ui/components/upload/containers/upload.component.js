/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, Output, TemplateRef } from '@angular/core';
import _ from 'lodash';
import { IoFormFieldUI } from '../../../interfaces/IoFormFieldUI';
export class UploadComponent extends IoFormFieldUI {
    ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///
    /**
     * @param {?} cd
     * @param {?} el
     */
    constructor(cd, el) {
        super(cd, el);
        ///-----------------------------------------------  Variables   -----------------------------------------------///
        this.file_list = [];
        this.change = new EventEmitter();
        this.invalid = false;
        this.type = 'input';
        this.multiple = false;
        this.title = '';
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
                template: "<ng-container *ngIf=\"type === 'dropzone'\">\r\n    <ng-container *ngTemplateOutlet=\"dropzone\"></ng-container>\r\n</ng-container>\r\n\r\n<ng-container *ngIf=\"type === 'input'\">\r\n    <ng-container *ngTemplateOutlet=\"click\"></ng-container>\r\n</ng-container>\r\n\r\n<ng-template #click>\r\n    <click\r\n            (change)=\"onFileChanged($event)\"\r\n            [template]=\"template\"\r\n            [multiple]=\"multiple\"\r\n            [title]=\"title\"\r\n    >\r\n    </click>\r\n\r\n</ng-template>\r\n\r\n<ng-template #dropzone>\r\n    <drop\r\n            (change)=\"onFileChanged($event)\"\r\n            [template]=\"template\"\r\n    >\r\n    </drop>\r\n</ng-template>\r\n\r\n\r\n<ng-template #default_template>\r\n    <ng-content></ng-content>\r\n</ng-template>\r\n",
                styles: [":host{display:flex;flex-direction:column;align-items:flex-start;width:100%;height:100%}"]
            }] }
];
/** @nocollapse */
UploadComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef }
];
UploadComponent.propDecorators = {
    change: [{ type: Output }],
    invalid: [{ type: Input }],
    type: [{ type: Input }],
    template: [{ type: Input }],
    multiple: [{ type: Input }],
    title: [{ type: Input }]
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
    /** @type {?} */
    UploadComponent.prototype.title;
}
;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBsb2FkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bpb25hci9mb3JtLyIsInNvdXJjZXMiOlsidWkvY29tcG9uZW50cy91cGxvYWQvY29udGFpbmVycy91cGxvYWQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ2EsaUJBQWlCLEVBQ25DLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLEtBQUssRUFHTCxNQUFNLEVBRU4sV0FBVyxFQUNaLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sQ0FBQyxNQUFNLFFBQVEsQ0FBQztBQUN2QixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFPbEUsTUFBTSxPQUFPLGVBQWdCLFNBQVEsYUFBYTs7Ozs7O0lBWWhELFlBQ0UsRUFBcUIsRUFDckIsRUFBYztRQUVkLEtBQUssQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7O1FBZGhCLGNBQVMsR0FBRyxFQUFFLENBQUM7UUFDTCxXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUM3QixZQUFPLEdBQVksS0FBSyxDQUFDO1FBQ3pCLFNBQUksR0FBVyxPQUFPLENBQUM7UUFFdkIsYUFBUSxHQUFZLEtBQUssQ0FBQztRQUMxQixVQUFLLEdBQVEsRUFBRSxDQUFDO0lBU3pCLENBQUM7Ozs7OztJQUlELGFBQWEsQ0FBQyxTQUFTO1FBQ3JCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO1FBRXpELElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUV2RSxDQUFDOzs7WUEvQkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxXQUFXO2dCQUNyQiwreEJBQXNDOzthQUV2Qzs7OztZQWxCbUIsaUJBQWlCO1lBRW5DLFVBQVU7OztxQkFvQlQsTUFBTTtzQkFDTixLQUFLO21CQUNMLEtBQUs7dUJBQ0wsS0FBSzt1QkFDTCxLQUFLO29CQUNMLEtBQUs7Ozs7SUFOTixvQ0FBZTs7SUFDZixpQ0FBc0M7O0lBQ3RDLGtDQUFrQzs7SUFDbEMsK0JBQWdDOztJQUNoQyxtQ0FBb0M7O0lBQ3BDLG1DQUFtQzs7SUFDbkMsZ0NBQXlCOztBQW9CMUIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEFmdGVyVmlld0NoZWNrZWQsIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgT25Jbml0LFxuICBPdXRwdXQsXG4gIFNpbXBsZUNoYW5nZXMsXG4gIFRlbXBsYXRlUmVmLCBWaWV3Q2hpbGRcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IHsgSW9Gb3JtRmllbGRVSSB9IGZyb20gJy4uLy4uLy4uL2ludGVyZmFjZXMvSW9Gb3JtRmllbGRVSSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2lvLXVwbG9hZCcsXG4gIHRlbXBsYXRlVXJsOiAnLi91cGxvYWQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi91cGxvYWQuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBVcGxvYWRDb21wb25lbnQgZXh0ZW5kcyBJb0Zvcm1GaWVsZFVJIHtcbiAgLy8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gIFZhcmlhYmxlcyAgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLy8vXG4gIGZpbGVfbGlzdCA9IFtdO1xuICBAT3V0cHV0KCkgY2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBASW5wdXQoKSBpbnZhbGlkOiBCb29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIHR5cGU6IHN0cmluZyA9ICdpbnB1dCc7XG4gIEBJbnB1dCgpIHRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuICBASW5wdXQoKSBtdWx0aXBsZTogQm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSB0aXRsZTogYW55ID0gJyc7XG5cblxuICAvLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAgTGlmZSBDeWNsZSBIb29rICAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0vLy9cbiAgY29uc3RydWN0b3IoXG4gICAgY2Q6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIGVsOiBFbGVtZW50UmVmXG4gICkge1xuICAgIHN1cGVyKGNkLCBlbCk7XG4gIH1cblxuXG4gIC8vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICBNYWluIEZ1bmN0aW9ucyAgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLy8vXG4gIG9uRmlsZUNoYW5nZWQoZmlsZV9saXN0KSB7XG4gICAgdGhpcy5maWxlX2xpc3QgPSB0aGlzLmZpbGVfbGlzdC5jb25jYXQoXy5tYXAoZmlsZV9saXN0KSk7XG5cbiAgICB0aGlzLmNoYW5nZS5lbWl0KHRoaXMubXVsdGlwbGUgPyB0aGlzLmZpbGVfbGlzdCA6IHRoaXMuZmlsZV9saXN0WzBdKTtcblxuICB9XG5cbn07XG4iXX0=