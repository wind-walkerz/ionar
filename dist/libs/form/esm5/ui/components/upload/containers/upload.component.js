"use strict";
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var lodash_1 = tslib_1.__importDefault(require("lodash"));
var IoFormFieldUI_1 = require("../../../interfaces/IoFormFieldUI");
var UploadComponent = /** @class */ (function (_super) {
    tslib_1.__extends(UploadComponent, _super);
    ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///
    function UploadComponent(cd, el) {
        var _this = _super.call(this, cd, el) || this;
        ///-----------------------------------------------  Variables   -----------------------------------------------///
        _this.file_list = [];
        _this.change = new core_1.EventEmitter();
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
        this.file_list = this.file_list.concat(lodash_1.default.map(file_list));
        this.change.emit(this.multiple ? this.file_list : this.file_list[0]);
    };
    UploadComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'io-upload',
                    template: "<ng-container *ngIf=\"type === 'dropzone'\">\r\n    <ng-container *ngTemplateOutlet=\"dropzone\"></ng-container>\r\n</ng-container>\r\n\r\n<ng-container *ngIf=\"type === 'input'\">\r\n    <ng-container *ngTemplateOutlet=\"click\"></ng-container>\r\n</ng-container>\r\n\r\n<ng-template #click>\r\n    <click\r\n            (change)=\"onFileChanged($event)\"\r\n            [template]=\"template\"\r\n            [multiple]=\"multiple\"\r\n            [title]=\"title\"\r\n    >\r\n    </click>\r\n\r\n</ng-template>\r\n\r\n<ng-template #dropzone>\r\n    <drop\r\n            (change)=\"onFileChanged($event)\"\r\n            [template]=\"template\"\r\n    >\r\n    </drop>\r\n</ng-template>\r\n\r\n\r\n<ng-template #default_template>\r\n    <ng-content></ng-content>\r\n</ng-template>\r\n",
                    styles: [":host{display:flex;flex-direction:column;align-items:flex-start;width:100%;height:100%}"]
                }] }
    ];
    /** @nocollapse */
    UploadComponent.ctorParameters = function () { return [
        { type: core_1.ChangeDetectorRef },
        { type: core_1.ElementRef }
    ]; };
    UploadComponent.propDecorators = {
        change: [{ type: core_1.Output }],
        invalid: [{ type: core_1.Input }],
        type: [{ type: core_1.Input }],
        template: [{ type: core_1.Input }],
        multiple: [{ type: core_1.Input }],
        title: [{ type: core_1.Input }]
    };
    return UploadComponent;
}(IoFormFieldUI_1.IoFormFieldUI));
exports.UploadComponent = UploadComponent;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBsb2FkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bpb25hci9mb3JtLyIsInNvdXJjZXMiOlsidWkvY29tcG9uZW50cy91cGxvYWQvY29udGFpbmVycy91cGxvYWQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQSxzQ0FXdUI7QUFDdkIsMERBQXVCO0FBQ3ZCLG1FQUFrRTtBQUVsRTtJQUtxQywyQ0FBYTtJQVdoRCx3SEFBd0g7SUFDeEgseUJBQ0UsRUFBcUIsRUFDckIsRUFBYztRQUZoQixZQUlFLGtCQUFNLEVBQUUsRUFBRSxFQUFFLENBQUMsU0FDZDs7UUFmRCxlQUFTLEdBQUcsRUFBRSxDQUFDO1FBQ0wsWUFBTSxHQUFHLElBQUksbUJBQVksRUFBRSxDQUFDO1FBQzdCLGFBQU8sR0FBWSxLQUFLLENBQUM7UUFDekIsVUFBSSxHQUFXLE9BQU8sQ0FBQztRQUV2QixjQUFRLEdBQVksS0FBSyxDQUFDO1FBQzFCLFdBQUssR0FBUSxFQUFFLENBQUM7O0lBU3pCLENBQUM7SUFHRCx1SEFBdUg7Ozs7OztJQUN2SCx1Q0FBYTs7Ozs7O0lBQWIsVUFBYyxTQUFTO1FBQ3JCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsZ0JBQUMsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztRQUV6RCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFFdkUsQ0FBQzs7Z0JBL0JGLGdCQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFdBQVc7b0JBQ3JCLCt4QkFBc0M7O2lCQUV2Qzs7OztnQkFsQm1CLHdCQUFpQjtnQkFFbkMsaUJBQVU7Ozt5QkFvQlQsYUFBTTswQkFDTixZQUFLO3VCQUNMLFlBQUs7MkJBQ0wsWUFBSzsyQkFDTCxZQUFLO3dCQUNMLFlBQUs7O0lBb0JSLHNCQUFDO0NBQUEsQUFqQ0QsQ0FLcUMsNkJBQWEsR0E0QmpEO0FBNUJZLDBDQUFlOzs7SUFFMUIsb0NBQWU7O0lBQ2YsaUNBQXNDOztJQUN0QyxrQ0FBa0M7O0lBQ2xDLCtCQUFnQzs7SUFDaEMsbUNBQW9DOztJQUNwQyxtQ0FBbUM7O0lBQ25DLGdDQUF5Qjs7QUFvQjFCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBBZnRlclZpZXdDaGVja2VkLCBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIE9uSW5pdCxcbiAgT3V0cHV0LFxuICBTaW1wbGVDaGFuZ2VzLFxuICBUZW1wbGF0ZVJlZiwgVmlld0NoaWxkXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcbmltcG9ydCB7IElvRm9ybUZpZWxkVUkgfSBmcm9tICcuLi8uLi8uLi9pbnRlcmZhY2VzL0lvRm9ybUZpZWxkVUknO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdpby11cGxvYWQnLFxuICB0ZW1wbGF0ZVVybDogJy4vdXBsb2FkLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vdXBsb2FkLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgVXBsb2FkQ29tcG9uZW50IGV4dGVuZHMgSW9Gb3JtRmllbGRVSSB7XG4gIC8vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICBWYXJpYWJsZXMgICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS8vL1xuICBmaWxlX2xpc3QgPSBbXTtcbiAgQE91dHB1dCgpIGNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQElucHV0KCkgaW52YWxpZDogQm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSB0eXBlOiBzdHJpbmcgPSAnaW5wdXQnO1xuICBASW5wdXQoKSB0ZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcbiAgQElucHV0KCkgbXVsdGlwbGU6IEJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KCkgdGl0bGU6IGFueSA9ICcnO1xuXG5cbiAgLy8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gIExpZmUgQ3ljbGUgSG9vayAgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLy8vXG4gIGNvbnN0cnVjdG9yKFxuICAgIGNkOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBlbDogRWxlbWVudFJlZlxuICApIHtcbiAgICBzdXBlcihjZCwgZWwpO1xuICB9XG5cblxuICAvLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAgTWFpbiBGdW5jdGlvbnMgICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS8vL1xuICBvbkZpbGVDaGFuZ2VkKGZpbGVfbGlzdCkge1xuICAgIHRoaXMuZmlsZV9saXN0ID0gdGhpcy5maWxlX2xpc3QuY29uY2F0KF8ubWFwKGZpbGVfbGlzdCkpO1xuXG4gICAgdGhpcy5jaGFuZ2UuZW1pdCh0aGlzLm11bHRpcGxlID8gdGhpcy5maWxlX2xpc3QgOiB0aGlzLmZpbGVfbGlzdFswXSk7XG5cbiAgfVxuXG59O1xuIl19