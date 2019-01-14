/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, Output, TemplateRef } from '@angular/core';
import _ from 'lodash';
import { IoFormFieldUI } from '../../../interfaces/IoFormFieldUI';
var UploadComponent = /** @class */ (function (_super) {
    tslib_1.__extends(UploadComponent, _super);
    ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///
    function UploadComponent(cd, el) {
        var _this = _super.call(this, cd, el) || this;
        ///-----------------------------------------------  Variables   -----------------------------------------------///
        _this.file_list = [];
        _this.change = new EventEmitter();
        _this.invalid = false;
        _this.type = 'input';
        _this.multiple = false;
        _this.title = '';
        return _this;
    }
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
                    template: "<ng-container *ngIf=\"type === 'dropzone'\">\r\n    <ng-container *ngTemplateOutlet=\"dropzone\"></ng-container>\r\n</ng-container>\r\n\r\n<ng-container *ngIf=\"type === 'input'\">\r\n    <ng-container *ngTemplateOutlet=\"click\"></ng-container>\r\n</ng-container>\r\n\r\n<ng-template #click>\r\n    <click\r\n            (change)=\"onFileChanged($event)\"\r\n            [template]=\"template\"\r\n            [multiple]=\"multiple\"\r\n            [title]=\"title\"\r\n    >\r\n    </click>\r\n\r\n</ng-template>\r\n\r\n<ng-template #dropzone>\r\n    <drop\r\n            (change)=\"onFileChanged($event)\"\r\n            [template]=\"template\"\r\n    >\r\n    </drop>\r\n</ng-template>\r\n\r\n\r\n<ng-template #default_template>\r\n    <ng-content></ng-content>\r\n</ng-template>\r\n",
                    styles: [":host{display:flex;flex-direction:column;align-items:flex-start;width:100%;height:100%}"]
                }] }
    ];
    /** @nocollapse */
    UploadComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef }
    ]; };
    UploadComponent.propDecorators = {
        change: [{ type: Output }],
        invalid: [{ type: Input }],
        type: [{ type: Input }],
        template: [{ type: Input }],
        multiple: [{ type: Input }],
        title: [{ type: Input }]
    };
    return UploadComponent;
}(IoFormFieldUI));
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
    /** @type {?} */
    UploadComponent.prototype.title;
}
;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBsb2FkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bpb25hci9mb3JtLyIsInNvdXJjZXMiOlsidWkvY29tcG9uZW50cy91cGxvYWQvY29udGFpbmVycy91cGxvYWQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUNhLGlCQUFpQixFQUNuQyxTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixLQUFLLEVBR0wsTUFBTSxFQUVOLFdBQVcsRUFDWixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLENBQUMsTUFBTSxRQUFRLENBQUM7QUFDdkIsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBRWxFO0lBS3FDLDJDQUFhO0lBV2hELHdIQUF3SDtJQUN4SCx5QkFDRSxFQUFxQixFQUNyQixFQUFjO1FBRmhCLFlBSUUsa0JBQU0sRUFBRSxFQUFFLEVBQUUsQ0FBQyxTQUNkOztRQWZELGVBQVMsR0FBRyxFQUFFLENBQUM7UUFDTCxZQUFNLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUM3QixhQUFPLEdBQVksS0FBSyxDQUFDO1FBQ3pCLFVBQUksR0FBVyxPQUFPLENBQUM7UUFFdkIsY0FBUSxHQUFZLEtBQUssQ0FBQztRQUMxQixXQUFLLEdBQVEsRUFBRSxDQUFDOztJQVN6QixDQUFDO0lBR0QsdUhBQXVIOzs7Ozs7SUFDdkgsdUNBQWE7Ozs7OztJQUFiLFVBQWMsU0FBUztRQUNyQixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztRQUV6RCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFFdkUsQ0FBQzs7Z0JBL0JGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsV0FBVztvQkFDckIsK3hCQUFzQzs7aUJBRXZDOzs7O2dCQWxCbUIsaUJBQWlCO2dCQUVuQyxVQUFVOzs7eUJBb0JULE1BQU07MEJBQ04sS0FBSzt1QkFDTCxLQUFLOzJCQUNMLEtBQUs7MkJBQ0wsS0FBSzt3QkFDTCxLQUFLOztJQW9CUixzQkFBQztDQUFBLEFBakNELENBS3FDLGFBQWEsR0E0QmpEO1NBNUJZLGVBQWU7OztJQUUxQixvQ0FBZTs7SUFDZixpQ0FBc0M7O0lBQ3RDLGtDQUFrQzs7SUFDbEMsK0JBQWdDOztJQUNoQyxtQ0FBb0M7O0lBQ3BDLG1DQUFtQzs7SUFDbkMsZ0NBQXlCOztBQW9CMUIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEFmdGVyVmlld0NoZWNrZWQsIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgT25Jbml0LFxuICBPdXRwdXQsXG4gIFNpbXBsZUNoYW5nZXMsXG4gIFRlbXBsYXRlUmVmLCBWaWV3Q2hpbGRcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IHsgSW9Gb3JtRmllbGRVSSB9IGZyb20gJy4uLy4uLy4uL2ludGVyZmFjZXMvSW9Gb3JtRmllbGRVSSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2lvLXVwbG9hZCcsXG4gIHRlbXBsYXRlVXJsOiAnLi91cGxvYWQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi91cGxvYWQuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBVcGxvYWRDb21wb25lbnQgZXh0ZW5kcyBJb0Zvcm1GaWVsZFVJIHtcbiAgLy8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gIFZhcmlhYmxlcyAgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLy8vXG4gIGZpbGVfbGlzdCA9IFtdO1xuICBAT3V0cHV0KCkgY2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBASW5wdXQoKSBpbnZhbGlkOiBCb29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIHR5cGU6IHN0cmluZyA9ICdpbnB1dCc7XG4gIEBJbnB1dCgpIHRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuICBASW5wdXQoKSBtdWx0aXBsZTogQm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSB0aXRsZTogYW55ID0gJyc7XG5cblxuICAvLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAgTGlmZSBDeWNsZSBIb29rICAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0vLy9cbiAgY29uc3RydWN0b3IoXG4gICAgY2Q6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIGVsOiBFbGVtZW50UmVmXG4gICkge1xuICAgIHN1cGVyKGNkLCBlbCk7XG4gIH1cblxuXG4gIC8vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICBNYWluIEZ1bmN0aW9ucyAgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLy8vXG4gIG9uRmlsZUNoYW5nZWQoZmlsZV9saXN0KSB7XG4gICAgdGhpcy5maWxlX2xpc3QgPSB0aGlzLmZpbGVfbGlzdC5jb25jYXQoXy5tYXAoZmlsZV9saXN0KSk7XG5cbiAgICB0aGlzLmNoYW5nZS5lbWl0KHRoaXMubXVsdGlwbGUgPyB0aGlzLmZpbGVfbGlzdCA6IHRoaXMuZmlsZV9saXN0WzBdKTtcblxuICB9XG5cbn07XG4iXX0=