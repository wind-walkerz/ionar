"use strict";
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var ui_1 = require("@ionar/ui");
/**
 * @record
 */
function ComponentContext() { }
exports.ComponentContext = ComponentContext;
if (false) {
    /** @type {?} */
    ComponentContext.prototype.defaultContent;
    /** @type {?} */
    ComponentContext.prototype.$implicit;
}
/**
 * @abstract
 */
var IoAbstractUI = /** @class */ (function () {
    function IoAbstractUI(cd, _elRef) {
        var _this = this;
        this.cd = cd;
        this._elRef = _elRef;
        this.template = null;
        this.viewInit = false;
        this.setContext = function (properties, events) {
            _this._contextData = tslib_1.__assign({}, _this._contextData, properties, events);
            _this.cd.markForCheck();
        };
        this.parseTemplate = function () {
            if (!_this.template) {
                _this.template = _this._contentTemplate;
                if (_this._defaultContentComp) {
                    _this._defaultContentComp.template = {
                        template: _this._defaultTemplate,
                        context: _this.context
                    };
                }
                if (ui_1.isEmptyTemplate(_this._elRef) || !_this._contentTemplate) {
                    _this.template = _this._defaultTemplate;
                    _this.cd.detectChanges();
                }
                _this.viewInit = true;
                _this.cd.detectChanges();
            }
            _this.viewInit = true;
            _this.cd.detectChanges();
        };
    }
    Object.defineProperty(IoAbstractUI.prototype, "context", {
        get: /**
         * @return {?}
         */
        function () {
            return {
                defaultContent: this._defaultTemplate,
                $implicit: this._contextData
            };
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    IoAbstractUI.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    IoAbstractUI.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        this.parseTemplate();
        this.cd.markForCheck();
    };
    /**
     * @return {?}
     */
    IoAbstractUI.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
    };
    IoAbstractUI.propDecorators = {
        template: [{ type: core_1.Input }],
        _container: [{ type: core_1.ViewChild, args: ['container', { read: core_1.ViewContainerRef },] }],
        _defaultTemplate: [{ type: core_1.ViewChild, args: ['default_template', { read: core_1.TemplateRef },] }],
        _contentTemplate: [{ type: core_1.ViewChild, args: ['content_template', { read: core_1.TemplateRef },] }],
        _defaultContentComp: [{ type: core_1.ContentChild, args: [ui_1.DefaultContentComponent,] }]
    };
    return IoAbstractUI;
}());
exports.IoAbstractUI = IoAbstractUI;
if (false) {
    /** @type {?} */
    IoAbstractUI.prototype.template;
    /** @type {?} */
    IoAbstractUI.prototype.viewInit;
    /**
     * @type {?}
     * @private
     */
    IoAbstractUI.prototype._contextData;
    /**
     * @type {?}
     * @protected
     */
    IoAbstractUI.prototype._container;
    /**
     * @type {?}
     * @protected
     */
    IoAbstractUI.prototype._defaultTemplate;
    /**
     * @type {?}
     * @protected
     */
    IoAbstractUI.prototype._contentTemplate;
    /**
     * @type {?}
     * @protected
     */
    IoAbstractUI.prototype._defaultContentComp;
    /** @type {?} */
    IoAbstractUI.prototype.setContext;
    /** @type {?} */
    IoAbstractUI.prototype.parseTemplate;
    /**
     * @type {?}
     * @protected
     */
    IoAbstractUI.prototype.cd;
    /**
     * @type {?}
     * @protected
     */
    IoAbstractUI.prototype._elRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSW9BYnN0cmFjdFVJLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGlvbmFyL2Zvcm0vIiwic291cmNlcyI6WyJ1aS9pbnRlcmZhY2VzL0lvQWJzdHJhY3RVSS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUEsc0NBU3VCO0FBQ3ZCLGdDQUFxRTs7OztBQUdyRSwrQkFHQzs7OztJQUZDLDBDQUFpQzs7SUFDakMscUNBQWlCOzs7OztBQUduQjtJQXFCRSxzQkFDWSxFQUFxQixFQUNyQixNQUFrQjtRQUY5QixpQkFJQztRQUhXLE9BQUUsR0FBRixFQUFFLENBQW1CO1FBQ3JCLFdBQU0sR0FBTixNQUFNLENBQVk7UUFwQnJCLGFBQVEsR0FBcUIsSUFBSSxDQUFDO1FBRTNDLGFBQVEsR0FBWSxLQUFLLENBQUM7UUFtQzFCLGVBQVUsR0FBRyxVQUFDLFVBQWtDLEVBQUUsTUFBb0M7WUFDcEYsS0FBSSxDQUFDLFlBQVksd0JBQ1osS0FBSSxDQUFDLFlBQVksRUFDakIsVUFBVSxFQUNWLE1BQU0sQ0FDVixDQUFDO1lBQ0YsS0FBSSxDQUFDLEVBQUUsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUN6QixDQUFDLENBQUM7UUFHRixrQkFBYSxHQUFHO1lBRWQsSUFBSSxDQUFDLEtBQUksQ0FBQyxRQUFRLEVBQUU7Z0JBQ2xCLEtBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSSxDQUFDLGdCQUFnQixDQUFDO2dCQUV0QyxJQUFJLEtBQUksQ0FBQyxtQkFBbUIsRUFBRTtvQkFFNUIsS0FBSSxDQUFDLG1CQUFtQixDQUFDLFFBQVEsR0FBRzt3QkFDbEMsUUFBUSxFQUFFLEtBQUksQ0FBQyxnQkFBZ0I7d0JBQy9CLE9BQU8sRUFBRSxLQUFJLENBQUMsT0FBTztxQkFDdEIsQ0FBQztpQkFDSDtnQkFFRCxJQUFJLG9CQUFlLENBQUMsS0FBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLGdCQUFnQixFQUFFO29CQUUxRCxLQUFJLENBQUMsUUFBUSxHQUFHLEtBQUksQ0FBQyxnQkFBZ0IsQ0FBQztvQkFDdEMsS0FBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsQ0FBQztpQkFDekI7Z0JBRUQsS0FBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7Z0JBQ3JCLEtBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLENBQUM7YUFDekI7WUFFRCxLQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztZQUNyQixLQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQzFCLENBQUMsQ0FBQztJQWxERixDQUFDO0lBakJELHNCQUFJLGlDQUFPOzs7O1FBQVg7WUFDRSxPQUFPO2dCQUNMLGNBQWMsRUFBRSxJQUFJLENBQUMsZ0JBQWdCO2dCQUNyQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFlBQVk7YUFDN0IsQ0FBQztRQUNKLENBQUM7OztPQUFBOzs7O0lBY0QsK0JBQVE7OztJQUFSO0lBRUEsQ0FBQzs7Ozs7SUFFRCxrQ0FBVzs7OztJQUFYLFVBQVksT0FBc0I7UUFDaEMsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxFQUFFLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDekIsQ0FBQzs7OztJQUVELGtDQUFXOzs7SUFBWDtJQUNBLENBQUM7OzJCQWxDQSxZQUFLOzZCQVlMLGdCQUFTLFNBQUMsV0FBVyxFQUFFLEVBQUUsSUFBSSxFQUFFLHVCQUFnQixFQUFFO21DQUNqRCxnQkFBUyxTQUFDLGtCQUFrQixFQUFFLEVBQUUsSUFBSSxFQUFFLGtCQUFXLEVBQUU7bUNBQ25ELGdCQUFTLFNBQUMsa0JBQWtCLEVBQUUsRUFBRSxJQUFJLEVBQUUsa0JBQVcsRUFBRTtzQ0FFbkQsbUJBQVksU0FBQyw0QkFBdUI7O0lBMER2QyxtQkFBQztDQUFBLEFBN0VELElBNkVDO0FBN0VxQixvQ0FBWTs7O0lBR2hDLGdDQUEyQzs7SUFFM0MsZ0NBQTBCOzs7OztJQUMxQixvQ0FBNkI7Ozs7O0lBUzdCLGtDQUEyRjs7Ozs7SUFDM0Ysd0NBQW1HOzs7OztJQUNuRyx3Q0FBbUc7Ozs7O0lBRW5HLDJDQUE4Rjs7SUFxQjlGLGtDQU9FOztJQUdGLHFDQXlCRTs7Ozs7SUFyREEsMEJBQStCOzs7OztJQUMvQiw4QkFBNEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIENoYW5nZURldGVjdG9yUmVmLCBDb250ZW50Q2hpbGQsIEVsZW1lbnRSZWYsXHJcbiAgSW5wdXQsXHJcbiAgT25DaGFuZ2VzLFxyXG4gIE9uRGVzdHJveSxcclxuICBPbkluaXQsXHJcbiAgU2ltcGxlQ2hhbmdlcyxcclxuICBUZW1wbGF0ZVJlZixcclxuICBWaWV3Q2hpbGQsIFZpZXdDb250YWluZXJSZWZcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRGVmYXVsdENvbnRlbnRDb21wb25lbnQsIGlzRW1wdHlUZW1wbGF0ZSB9IGZyb20gJ0Bpb25hci91aSc7XHJcblxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBDb21wb25lbnRDb250ZXh0IHtcclxuICBkZWZhdWx0Q29udGVudDogVGVtcGxhdGVSZWY8YW55PixcclxuICAkaW1wbGljaXQ6IE9iamVjdFxyXG59XHJcblxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgSW9BYnN0cmFjdFVJIGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XHJcblxyXG5cclxuICBASW5wdXQoKSB0ZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PiA9IG51bGw7XHJcblxyXG4gIHZpZXdJbml0OiBCb29sZWFuID0gZmFsc2U7XHJcbiAgcHJpdmF0ZSBfY29udGV4dERhdGE6IE9iamVjdDtcclxuXHJcbiAgZ2V0IGNvbnRleHQoKTogQ29tcG9uZW50Q29udGV4dCB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBkZWZhdWx0Q29udGVudDogdGhpcy5fZGVmYXVsdFRlbXBsYXRlLFxyXG4gICAgICAkaW1wbGljaXQ6IHRoaXMuX2NvbnRleHREYXRhXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgQFZpZXdDaGlsZCgnY29udGFpbmVyJywgeyByZWFkOiBWaWV3Q29udGFpbmVyUmVmIH0pIHByb3RlY3RlZCBfY29udGFpbmVyOiBWaWV3Q29udGFpbmVyUmVmO1xyXG4gIEBWaWV3Q2hpbGQoJ2RlZmF1bHRfdGVtcGxhdGUnLCB7IHJlYWQ6IFRlbXBsYXRlUmVmIH0pIHByb3RlY3RlZCBfZGVmYXVsdFRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xyXG4gIEBWaWV3Q2hpbGQoJ2NvbnRlbnRfdGVtcGxhdGUnLCB7IHJlYWQ6IFRlbXBsYXRlUmVmIH0pIHByb3RlY3RlZCBfY29udGVudFRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xyXG5cclxuICBAQ29udGVudENoaWxkKERlZmF1bHRDb250ZW50Q29tcG9uZW50KSBwcm90ZWN0ZWQgX2RlZmF1bHRDb250ZW50Q29tcDogRGVmYXVsdENvbnRlbnRDb21wb25lbnQ7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJvdGVjdGVkIGNkOiBDaGFuZ2VEZXRlY3RvclJlZixcclxuICAgIHByb3RlY3RlZCBfZWxSZWY6IEVsZW1lbnRSZWZcclxuICApIHtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG5cclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcclxuICAgIHRoaXMucGFyc2VUZW1wbGF0ZSgpO1xyXG4gICAgdGhpcy5jZC5tYXJrRm9yQ2hlY2soKTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gIH1cclxuXHJcblxyXG4gIHNldENvbnRleHQgPSAocHJvcGVydGllczogeyBba2V5OiBzdHJpbmddOiBhbnkgfSwgZXZlbnRzPzogeyBba2V5OiBzdHJpbmddOiBGdW5jdGlvbiB9KSA9PiB7XHJcbiAgICB0aGlzLl9jb250ZXh0RGF0YSA9IHtcclxuICAgICAgLi4udGhpcy5fY29udGV4dERhdGEsXHJcbiAgICAgIC4uLnByb3BlcnRpZXMsXHJcbiAgICAgIC4uLmV2ZW50c1xyXG4gICAgfTtcclxuICAgIHRoaXMuY2QubWFya0ZvckNoZWNrKCk7XHJcbiAgfTtcclxuXHJcblxyXG4gIHBhcnNlVGVtcGxhdGUgPSAoKSA9PiB7XHJcblxyXG4gICAgaWYgKCF0aGlzLnRlbXBsYXRlKSB7XHJcbiAgICAgIHRoaXMudGVtcGxhdGUgPSB0aGlzLl9jb250ZW50VGVtcGxhdGU7XHJcblxyXG4gICAgICBpZiAodGhpcy5fZGVmYXVsdENvbnRlbnRDb21wKSB7XHJcblxyXG4gICAgICAgIHRoaXMuX2RlZmF1bHRDb250ZW50Q29tcC50ZW1wbGF0ZSA9IHtcclxuICAgICAgICAgIHRlbXBsYXRlOiB0aGlzLl9kZWZhdWx0VGVtcGxhdGUsXHJcbiAgICAgICAgICBjb250ZXh0OiB0aGlzLmNvbnRleHRcclxuICAgICAgICB9O1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoaXNFbXB0eVRlbXBsYXRlKHRoaXMuX2VsUmVmKSB8fCAhdGhpcy5fY29udGVudFRlbXBsYXRlKSB7XHJcblxyXG4gICAgICAgIHRoaXMudGVtcGxhdGUgPSB0aGlzLl9kZWZhdWx0VGVtcGxhdGU7XHJcbiAgICAgICAgdGhpcy5jZC5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMudmlld0luaXQgPSB0cnVlO1xyXG4gICAgICB0aGlzLmNkLmRldGVjdENoYW5nZXMoKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnZpZXdJbml0ID0gdHJ1ZTtcclxuICAgIHRoaXMuY2QuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gIH07XHJcblxyXG59XHJcbiJdfQ==