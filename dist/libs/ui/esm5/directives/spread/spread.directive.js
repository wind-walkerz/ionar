"use strict";
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var lodash_1 = tslib_1.__importDefault(require("lodash"));
var SpreadDirective = /** @class */ (function () {
    function SpreadDirective(_vcRef, _renderer, _elRef) {
        this._vcRef = _vcRef;
        this._renderer = _renderer;
        this._elRef = _elRef;
    }
    /**
     * @return {?}
     */
    SpreadDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    SpreadDirective.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        var _this = this;
        if (!this._vcRef['_data'].componentView) {
            lodash_1.default.forOwn(this._context, function (value, key) {
                if (!_this._elRef.nativeElement[key] || key === 'type')
                    (value instanceof Function)
                        ? _this._renderer.listen(_this._elRef.nativeElement, key, value)
                        : _this._renderer.setAttribute(_this._elRef.nativeElement, key, value);
            });
        }
    };
    SpreadDirective.decorators = [
        { type: core_1.Directive, args: [{
                    selector: '[spread]'
                },] }
    ];
    /** @nocollapse */
    SpreadDirective.ctorParameters = function () { return [
        { type: core_1.ViewContainerRef },
        { type: core_1.Renderer2 },
        { type: core_1.ElementRef }
    ]; };
    SpreadDirective.propDecorators = {
        _context: [{ type: core_1.Input, args: ['spread',] }]
    };
    return SpreadDirective;
}());
exports.SpreadDirective = SpreadDirective;
if (false) {
    /**
     * @type {?}
     * @private
     */
    SpreadDirective.prototype._context;
    /**
     * @type {?}
     * @private
     */
    SpreadDirective.prototype._vcRef;
    /**
     * @type {?}
     * @private
     */
    SpreadDirective.prototype._renderer;
    /**
     * @type {?}
     * @private
     */
    SpreadDirective.prototype._elRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3ByZWFkLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bpb25hci91aS8iLCJzb3VyY2VzIjpbImRpcmVjdGl2ZXMvc3ByZWFkL3NwcmVhZC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBLHNDQVF1QjtBQUN2QiwwREFBdUI7QUFHdkI7SUFPRSx5QkFDVSxNQUF3QixFQUN4QixTQUFvQixFQUNwQixNQUFrQjtRQUZsQixXQUFNLEdBQU4sTUFBTSxDQUFrQjtRQUN4QixjQUFTLEdBQVQsU0FBUyxDQUFXO1FBQ3BCLFdBQU0sR0FBTixNQUFNLENBQVk7SUFFNUIsQ0FBQzs7OztJQUVELGtDQUFROzs7SUFBUjtJQUVBLENBQUM7Ozs7O0lBRUQscUNBQVc7Ozs7SUFBWCxVQUFZLE9BQXNCO1FBQWxDLGlCQWFDO1FBWkMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsYUFBYSxFQUFFO1lBQ3ZDLGdCQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsVUFBQyxLQUFVLEVBQUUsR0FBVztnQkFFOUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEdBQUcsS0FBSSxNQUFNO29CQUVsRCxDQUFDLEtBQUssWUFBWSxRQUFRLENBQUM7d0JBQ3pCLENBQUMsQ0FBQyxLQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxLQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsRUFBRSxHQUFHLEVBQUUsS0FBSyxDQUFDO3dCQUM5RCxDQUFDLENBQUMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsS0FBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLEVBQUUsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFDO1lBQzNFLENBQUMsQ0FBQyxDQUFDO1NBRUo7SUFFSCxDQUFDOztnQkEvQkYsZ0JBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsVUFBVTtpQkFDckI7Ozs7Z0JBUEMsdUJBQWdCO2dCQUZoQixnQkFBUztnQkFKRSxpQkFBVTs7OzJCQWdCcEIsWUFBSyxTQUFDLFFBQVE7O0lBNEJqQixzQkFBQztDQUFBLEFBakNELElBaUNDO0FBOUJZLDBDQUFlOzs7Ozs7SUFFMUIsbUNBQTBDOzs7OztJQUd4QyxpQ0FBZ0M7Ozs7O0lBQ2hDLG9DQUE0Qjs7Ozs7SUFDNUIsaUNBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsXHJcbiAgSW5wdXQsXHJcbiAgT25DaGFuZ2VzLFxyXG4gIE9uSW5pdCxcclxuICBSZW5kZXJlcjIsXHJcbiAgU2ltcGxlQ2hhbmdlcyxcclxuICBWaWV3Q29udGFpbmVyUmVmXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XHJcblxyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdbc3ByZWFkXSdcclxufSlcclxuZXhwb3J0IGNsYXNzIFNwcmVhZERpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcclxuXHJcbiAgQElucHV0KCdzcHJlYWQnKSBwcml2YXRlIF9jb250ZXh0OiBPYmplY3Q7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBfdmNSZWY6IFZpZXdDb250YWluZXJSZWYsXHJcbiAgICBwcml2YXRlIF9yZW5kZXJlcjogUmVuZGVyZXIyLFxyXG4gICAgcHJpdmF0ZSBfZWxSZWY6IEVsZW1lbnRSZWZcclxuICApIHtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG5cclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcclxuICAgIGlmICghdGhpcy5fdmNSZWZbJ19kYXRhJ10uY29tcG9uZW50Vmlldykge1xyXG4gICAgICBfLmZvck93bih0aGlzLl9jb250ZXh0LCAodmFsdWU6IGFueSwga2V5OiBzdHJpbmcpID0+IHtcclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLl9lbFJlZi5uYXRpdmVFbGVtZW50W2tleV0gfHwga2V5PT09ICd0eXBlJylcclxuXHJcbiAgICAgICAgICAodmFsdWUgaW5zdGFuY2VvZiBGdW5jdGlvbilcclxuICAgICAgICAgICAgPyB0aGlzLl9yZW5kZXJlci5saXN0ZW4odGhpcy5fZWxSZWYubmF0aXZlRWxlbWVudCwga2V5LCB2YWx1ZSlcclxuICAgICAgICAgICAgOiB0aGlzLl9yZW5kZXJlci5zZXRBdHRyaWJ1dGUodGhpcy5fZWxSZWYubmF0aXZlRWxlbWVudCwga2V5LCB2YWx1ZSk7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgIH1cclxuXHJcbiAgfVxyXG5cclxufVxyXG4iXX0=