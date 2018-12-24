/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, EventEmitter, Input, Output, TemplateRef, ViewChild } from '@angular/core';
import _ from 'lodash';
var UploadComponent = /** @class */ (function () {
    ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///
    function UploadComponent(elRef) {
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
    UploadComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (!this.template) {
            this.template = this._defaultTempRef;
        }
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    UploadComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
    };
    ///-----------------------------------------------  Main Functions   -----------------------------------------------///
    ///-----------------------------------------------  Main Functions   -----------------------------------------------///
    /**
     * @param {?} file_list
     * @return {?}
     */
    UploadComponent.prototype.onFileChanged = 
    ///-----------------------------------------------  Main Functions   -----------------------------------------------///
    /**
     * @param {?} file_list
     * @return {?}
     */
    function (file_list) {
        this.file_list = this.file_list.concat(_.map(file_list));
        this.change.emit(this.multiple ? this.file_list : this.file_list[0]);
    };
    UploadComponent.decorators = [
        { type: Component, args: [{
                    selector: 'io-upload',
                    template: "<ng-container *ngIf=\"type === 'dropzone'\">\r\n    <ng-container *ngTemplateOutlet=\"dropzone\"></ng-container>\r\n</ng-container>\r\n\r\n<ng-container *ngIf=\"type === 'input'\">\r\n    <ng-container *ngTemplateOutlet=\"click\"></ng-container>\r\n</ng-container>\r\n\r\n<ng-template #click>\r\n    <click\r\n            (change)=\"onFileChanged($event)\"\r\n            [template]=\"template\"\r\n            [multiple]=\"multiple\"\r\n    >\r\n    </click>\r\n\r\n</ng-template>\r\n\r\n<ng-template #dropzone>\r\n    <drop\r\n            (change)=\"onFileChanged($event)\"\r\n            [template]=\"template\"\r\n    >\r\n    </drop>\r\n</ng-template>\r\n\r\n\r\n<ng-template #default>\r\n    <ng-content></ng-content>\r\n</ng-template>\r\n",
                    styles: [":host{display:flex;flex-direction:column;align-items:flex-start;width:100%;height:100%}"]
                }] }
    ];
    /** @nocollapse */
    UploadComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    UploadComponent.propDecorators = {
        change: [{ type: Output }],
        invalid: [{ type: Input }],
        type: [{ type: Input }],
        template: [{ type: Input }],
        multiple: [{ type: Input }],
        _defaultTempRef: [{ type: ViewChild, args: ['default',] }]
    };
    return UploadComponent;
}());
export { UploadComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBsb2FkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bpb25hci9mb3JtLyIsInNvdXJjZXMiOlsidWkvY29tcG9uZW50cy91cGxvYWQvY29udGFpbmVycy91cGxvYWQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBRUwsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osS0FBSyxFQUdMLE1BQU0sRUFFTixXQUFXLEVBQUUsU0FBUyxFQUN2QixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLENBQUMsTUFBTSxRQUFRLENBQUM7QUFFdkI7SUFnQkUsd0hBQXdIO0lBQ3hILHlCQUFvQixLQUFpQjtRQUFqQixVQUFLLEdBQUwsS0FBSyxDQUFZOztRQVZyQyxjQUFTLEdBQUcsRUFBRSxDQUFDO1FBQ0wsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDN0IsWUFBTyxHQUFZLEtBQUssQ0FBQztRQUN6QixTQUFJLEdBQVcsT0FBTyxDQUFDO1FBRXZCLGFBQVEsR0FBWSxLQUFLLENBQUM7SUFNbkMsQ0FBQzs7OztJQUVELGtDQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2xCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQztTQUN0QztJQUNILENBQUM7Ozs7O0lBR0QscUNBQVc7Ozs7SUFBWCxVQUFZLE9BQXNCO0lBQ2xDLENBQUM7SUFHRCx1SEFBdUg7Ozs7OztJQUN2SCx1Q0FBYTs7Ozs7O0lBQWIsVUFBYyxTQUFTO1FBQ3JCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO1FBRXpELElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUV2RSxDQUFDOztnQkFyQ0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxXQUFXO29CQUNyQixxdkJBQXNDOztpQkFFdkM7Ozs7Z0JBZkMsVUFBVTs7O3lCQW1CVCxNQUFNOzBCQUNOLEtBQUs7dUJBQ0wsS0FBSzsyQkFDTCxLQUFLOzJCQUNMLEtBQUs7a0NBRUwsU0FBUyxTQUFDLFNBQVM7O0lBeUJ0QixzQkFBQztDQUFBLEFBdkNELElBdUNDO1NBbENZLGVBQWU7OztJQUUxQixvQ0FBZTs7SUFDZixpQ0FBc0M7O0lBQ3RDLGtDQUFrQzs7SUFDbEMsK0JBQWdDOztJQUNoQyxtQ0FBb0M7O0lBQ3BDLG1DQUFtQzs7Ozs7SUFFbkMsMENBQWdFOzs7OztJQUdwRCxnQ0FBeUI7O0FBc0J0QyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQWZ0ZXJWaWV3Q2hlY2tlZCxcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIE9uSW5pdCxcbiAgT3V0cHV0LFxuICBTaW1wbGVDaGFuZ2VzLFxuICBUZW1wbGF0ZVJlZiwgVmlld0NoaWxkXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnaW8tdXBsb2FkJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3VwbG9hZC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3VwbG9hZC5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIFVwbG9hZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcbiAgLy8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gIFZhcmlhYmxlcyAgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLy8vXG4gIGZpbGVfbGlzdCA9IFtdO1xuICBAT3V0cHV0KCkgY2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBASW5wdXQoKSBpbnZhbGlkOiBCb29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIHR5cGU6IHN0cmluZyA9ICdpbnB1dCc7XG4gIEBJbnB1dCgpIHRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuICBASW5wdXQoKSBtdWx0aXBsZTogQm9vbGVhbiA9IGZhbHNlO1xuXG4gIEBWaWV3Q2hpbGQoJ2RlZmF1bHQnKSBwcml2YXRlIF9kZWZhdWx0VGVtcFJlZjogVGVtcGxhdGVSZWY8YW55PjtcblxuICAvLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAgTGlmZSBDeWNsZSBIb29rICAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0vLy9cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbFJlZjogRWxlbWVudFJlZikge1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgaWYgKCF0aGlzLnRlbXBsYXRlKSB7XG4gICAgICB0aGlzLnRlbXBsYXRlID0gdGhpcy5fZGVmYXVsdFRlbXBSZWY7XG4gICAgfVxuICB9XG5cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gIH1cblxuXG4gIC8vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICBNYWluIEZ1bmN0aW9ucyAgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLy8vXG4gIG9uRmlsZUNoYW5nZWQoZmlsZV9saXN0KSB7XG4gICAgdGhpcy5maWxlX2xpc3QgPSB0aGlzLmZpbGVfbGlzdC5jb25jYXQoXy5tYXAoZmlsZV9saXN0KSk7XG5cbiAgICB0aGlzLmNoYW5nZS5lbWl0KHRoaXMubXVsdGlwbGUgPyB0aGlzLmZpbGVfbGlzdCA6IHRoaXMuZmlsZV9saXN0WzBdKTtcblxuICB9XG5cbn07XG4iXX0=