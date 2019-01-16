"use strict";
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var IoFormFieldUI_1 = require("../../interfaces/IoFormFieldUI");
var TextareaComponent = /** @class */ (function (_super) {
    tslib_1.__extends(TextareaComponent, _super);
    ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///
    function TextareaComponent(cd, el) {
        var _this = _super.call(this, cd, el) || this;
        ///-----------------------------------------------  Variables   -----------------------------------------------///
        _this.name = '';
        _this.value = '';
        _this.placeholder = '';
        return _this;
    }
    /**
     * @return {?}
     */
    TextareaComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        _super.prototype.ngOnInit.call(this);
        this.setContext({
            name: this.name,
            value: this.value,
            placeholder: this.placeholder
        });
    };
    TextareaComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'io-textarea',
                    template: "<textarea\r\n        [name]=\"name\"\r\n        [value]=\"value\"\r\n        [class.invalid]=\"invalid\"\r\n        cols=\"1\" rows=\"1\"\r\n        [placeholder]=\"placeholder\"\r\n\r\n        (change)=\"$event.stopPropagation(); change.emit($event.target.value);\"\r\n        (blur)=\"blur.emit()\"\r\n></textarea>\r\n",
                    styles: [":host{display:flex;flex:1}textarea{border:none;font-size:1.5rem;padding:1rem;width:100%;max-width:100%;overflow-y:scroll}"]
                }] }
    ];
    /** @nocollapse */
    TextareaComponent.ctorParameters = function () { return [
        { type: core_1.ChangeDetectorRef },
        { type: core_1.ElementRef }
    ]; };
    TextareaComponent.propDecorators = {
        name: [{ type: core_1.Input }],
        value: [{ type: core_1.Input }],
        placeholder: [{ type: core_1.Input }]
    };
    return TextareaComponent;
}(IoFormFieldUI_1.IoFormFieldUI));
exports.TextareaComponent = TextareaComponent;
if (false) {
    /** @type {?} */
    TextareaComponent.prototype.name;
    /** @type {?} */
    TextareaComponent.prototype.value;
    /** @type {?} */
    TextareaComponent.prototype.placeholder;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dGFyZWEuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGlvbmFyL2Zvcm0vIiwic291cmNlcyI6WyJ1aS9jb21wb25lbnRzL3RleHRhcmVhL3RleHRhcmVhLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUEsc0NBU3VCO0FBQ3ZCLGdFQUErRDtBQUUvRDtJQUt1Qyw2Q0FBYTtJQU9sRCx3SEFBd0g7SUFDeEgsMkJBQ0UsRUFBcUIsRUFDckIsRUFBYztRQUZoQixZQUlFLGtCQUFNLEVBQUUsRUFBRSxFQUFFLENBQUMsU0FDZDs7UUFYUSxVQUFJLEdBQVcsRUFBRSxDQUFDO1FBQ2xCLFdBQUssR0FBUSxFQUFFLENBQUM7UUFDaEIsaUJBQVcsR0FBUSxFQUFFLENBQUM7O0lBUy9CLENBQUM7Ozs7SUFFRCxvQ0FBUTs7O0lBQVI7UUFDRSxpQkFBTSxRQUFRLFdBQUUsQ0FBQztRQUNqQixJQUFJLENBQUMsVUFBVSxDQUFDO1lBQ2QsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJO1lBQ2YsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLO1lBQ2pCLFdBQVcsRUFBRSxJQUFJLENBQUMsV0FBVztTQUM5QixDQUFDLENBQUM7SUFDTCxDQUFDOztnQkEzQkYsZ0JBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsYUFBYTtvQkFDdkIsNFVBQXdDOztpQkFFekM7Ozs7Z0JBZkMsd0JBQWlCO2dCQUNOLGlCQUFVOzs7dUJBaUJwQixZQUFLO3dCQUNMLFlBQUs7OEJBQ0wsWUFBSzs7SUFzQlIsd0JBQUM7Q0FBQSxBQS9CRCxDQUt1Qyw2QkFBYSxHQTBCbkQ7QUExQlksOENBQWlCOzs7SUFFNUIsaUNBQTJCOztJQUMzQixrQ0FBeUI7O0lBQ3pCLHdDQUErQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgT25Jbml0LFxuICBPdXRwdXQsXG4gIFNpbXBsZUNoYW5nZXNcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJb0Zvcm1GaWVsZFVJIH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcy9Jb0Zvcm1GaWVsZFVJJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnaW8tdGV4dGFyZWEnLFxuICB0ZW1wbGF0ZVVybDogYC4vdGV4dGFyZWEuY29tcG9uZW50Lmh0bWxgLFxuICBzdHlsZVVybHM6IFsnLi90ZXh0YXJlYS5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIFRleHRhcmVhQ29tcG9uZW50IGV4dGVuZHMgSW9Gb3JtRmllbGRVSSB7XG4gIC8vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICBWYXJpYWJsZXMgICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS8vL1xuICBASW5wdXQoKSBuYW1lOiBzdHJpbmcgPSAnJztcbiAgQElucHV0KCkgdmFsdWU6IGFueSA9ICcnO1xuICBASW5wdXQoKSBwbGFjZWhvbGRlcjogYW55ID0gJyc7XG5cblxuICAvLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAgTGlmZSBDeWNsZSBIb29rICAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0vLy9cbiAgY29uc3RydWN0b3IoXG4gICAgY2Q6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIGVsOiBFbGVtZW50UmVmXG4gICkge1xuICAgIHN1cGVyKGNkLCBlbCk7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBzdXBlci5uZ09uSW5pdCgpO1xuICAgIHRoaXMuc2V0Q29udGV4dCh7XG4gICAgICBuYW1lOiB0aGlzLm5hbWUsXG4gICAgICB2YWx1ZTogdGhpcy52YWx1ZSxcbiAgICAgIHBsYWNlaG9sZGVyOiB0aGlzLnBsYWNlaG9sZGVyXG4gICAgfSk7XG4gIH1cblxuICAvLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAgTWFpbiBGdW5jdGlvbnMgICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS8vL1xuXG59XG4iXX0=