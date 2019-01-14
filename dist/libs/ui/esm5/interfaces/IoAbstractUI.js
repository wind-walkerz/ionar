/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ContentChild, Input, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { isEmptyTemplate } from '../utils';
import { DefaultContentComponent } from '../elements/default-content/default-content.component';
/**
 * @record
 */
export function ComponentContext() { }
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
            // this.cd.markForCheck();
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
                if (isEmptyTemplate(_this._elRef) || !_this._contentTemplate) {
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
        template: [{ type: Input }],
        _container: [{ type: ViewChild, args: ['container', { read: ViewContainerRef },] }],
        _defaultTemplate: [{ type: ViewChild, args: ['default_template', { read: TemplateRef },] }],
        _contentTemplate: [{ type: ViewChild, args: ['content_template', { read: TemplateRef },] }],
        _defaultContentComp: [{ type: ContentChild, args: [DefaultContentComponent,] }]
    };
    return IoAbstractUI;
}());
export { IoAbstractUI };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSW9BYnN0cmFjdFVJLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGlvbmFyL3VpLyIsInNvdXJjZXMiOlsiaW50ZXJmYWNlcy9Jb0Fic3RyYWN0VUkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQ2MsWUFBWSxFQUMvQixLQUFLLEVBS0wsV0FBVyxFQUNYLFNBQVMsRUFBRSxnQkFBZ0IsRUFDNUIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSx1REFBdUQsQ0FBQzs7OztBQUVoRyxzQ0FHQzs7O0lBRkMsMENBQWlDOztJQUNqQyxxQ0FBaUI7Ozs7O0FBR25CO0lBcUJFLHNCQUNZLEVBQXFCLEVBQ3JCLE1BQWtCO1FBRjlCLGlCQUlDO1FBSFcsT0FBRSxHQUFGLEVBQUUsQ0FBbUI7UUFDckIsV0FBTSxHQUFOLE1BQU0sQ0FBWTtRQXBCckIsYUFBUSxHQUFxQixJQUFJLENBQUM7UUFFM0MsYUFBUSxHQUFZLEtBQUssQ0FBQztRQW9DMUIsZUFBVSxHQUFHLFVBQUMsVUFBa0MsRUFBRSxNQUFvQztZQUNwRixLQUFJLENBQUMsWUFBWSx3QkFDWixLQUFJLENBQUMsWUFBWSxFQUNqQixVQUFVLEVBQ1YsTUFBTSxDQUNWLENBQUM7WUFDRiwwQkFBMEI7UUFDNUIsQ0FBQyxDQUFDO1FBR0Ysa0JBQWEsR0FBRztZQUVkLElBQUksQ0FBQyxLQUFJLENBQUMsUUFBUSxFQUFFO2dCQUNsQixLQUFJLENBQUMsUUFBUSxHQUFHLEtBQUksQ0FBQyxnQkFBZ0IsQ0FBQztnQkFFdEMsSUFBSSxLQUFJLENBQUMsbUJBQW1CLEVBQUU7b0JBRTVCLEtBQUksQ0FBQyxtQkFBbUIsQ0FBQyxRQUFRLEdBQUc7d0JBQ2xDLFFBQVEsRUFBRSxLQUFJLENBQUMsZ0JBQWdCO3dCQUMvQixPQUFPLEVBQUUsS0FBSSxDQUFDLE9BQU87cUJBQ3RCLENBQUM7aUJBQ0g7Z0JBRUQsSUFBSSxlQUFlLENBQUMsS0FBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLGdCQUFnQixFQUFFO29CQUUxRCxLQUFJLENBQUMsUUFBUSxHQUFHLEtBQUksQ0FBQyxnQkFBZ0IsQ0FBQztvQkFDdEMsS0FBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsQ0FBQztpQkFDekI7Z0JBRUQsS0FBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7Z0JBQ3JCLEtBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLENBQUM7YUFDekI7WUFFRCxLQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztZQUNyQixLQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQzFCLENBQUMsQ0FBQztJQW5ERixDQUFDO0lBakJELHNCQUFJLGlDQUFPOzs7O1FBQVg7WUFDRSxPQUFPO2dCQUNMLGNBQWMsRUFBRSxJQUFJLENBQUMsZ0JBQWdCO2dCQUNyQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFlBQVk7YUFDN0IsQ0FBQztRQUNKLENBQUM7OztPQUFBOzs7O0lBY0QsK0JBQVE7OztJQUFSO0lBRUEsQ0FBQzs7Ozs7SUFFRCxrQ0FBVzs7OztJQUFYLFVBQVksT0FBc0I7UUFDaEMsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBRXJCLElBQUksQ0FBQyxFQUFFLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDekIsQ0FBQzs7OztJQUVELGtDQUFXOzs7SUFBWDtJQUNBLENBQUM7OzJCQW5DQSxLQUFLOzZCQVlMLFNBQVMsU0FBQyxXQUFXLEVBQUUsRUFBRSxJQUFJLEVBQUUsZ0JBQWdCLEVBQUU7bUNBQ2pELFNBQVMsU0FBQyxrQkFBa0IsRUFBRSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUU7bUNBQ25ELFNBQVMsU0FBQyxrQkFBa0IsRUFBRSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUU7c0NBRW5ELFlBQVksU0FBQyx1QkFBdUI7O0lBMkR2QyxtQkFBQztDQUFBLEFBOUVELElBOEVDO1NBOUVxQixZQUFZOzs7SUFHaEMsZ0NBQTJDOztJQUUzQyxnQ0FBMEI7Ozs7O0lBQzFCLG9DQUE2Qjs7Ozs7SUFTN0Isa0NBQTJGOzs7OztJQUMzRix3Q0FBbUc7Ozs7O0lBQ25HLHdDQUFtRzs7Ozs7SUFFbkcsMkNBQThGOztJQXNCOUYsa0NBT0U7O0lBR0YscUNBeUJFOzs7OztJQXREQSwwQkFBK0I7Ozs7O0lBQy9CLDhCQUE0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsIENvbnRlbnRDaGlsZCwgRWxlbWVudFJlZixcclxuICBJbnB1dCxcclxuICBPbkNoYW5nZXMsXHJcbiAgT25EZXN0cm95LFxyXG4gIE9uSW5pdCxcclxuICBTaW1wbGVDaGFuZ2VzLFxyXG4gIFRlbXBsYXRlUmVmLFxyXG4gIFZpZXdDaGlsZCwgVmlld0NvbnRhaW5lclJlZlxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBpc0VtcHR5VGVtcGxhdGUgfSBmcm9tICcuLi91dGlscyc7XHJcbmltcG9ydCB7IERlZmF1bHRDb250ZW50Q29tcG9uZW50IH0gZnJvbSAnLi4vZWxlbWVudHMvZGVmYXVsdC1jb250ZW50L2RlZmF1bHQtY29udGVudC5jb21wb25lbnQnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBDb21wb25lbnRDb250ZXh0IHtcclxuICBkZWZhdWx0Q29udGVudDogVGVtcGxhdGVSZWY8YW55PixcclxuICAkaW1wbGljaXQ6IE9iamVjdFxyXG59XHJcblxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgSW9BYnN0cmFjdFVJIGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XHJcblxyXG5cclxuICBASW5wdXQoKSB0ZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PiA9IG51bGw7XHJcblxyXG4gIHZpZXdJbml0OiBCb29sZWFuID0gZmFsc2U7XHJcbiAgcHJpdmF0ZSBfY29udGV4dERhdGE6IE9iamVjdDtcclxuXHJcbiAgZ2V0IGNvbnRleHQoKTogQ29tcG9uZW50Q29udGV4dCB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBkZWZhdWx0Q29udGVudDogdGhpcy5fZGVmYXVsdFRlbXBsYXRlLFxyXG4gICAgICAkaW1wbGljaXQ6IHRoaXMuX2NvbnRleHREYXRhXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgQFZpZXdDaGlsZCgnY29udGFpbmVyJywgeyByZWFkOiBWaWV3Q29udGFpbmVyUmVmIH0pIHByb3RlY3RlZCBfY29udGFpbmVyOiBWaWV3Q29udGFpbmVyUmVmO1xyXG4gIEBWaWV3Q2hpbGQoJ2RlZmF1bHRfdGVtcGxhdGUnLCB7IHJlYWQ6IFRlbXBsYXRlUmVmIH0pIHByb3RlY3RlZCBfZGVmYXVsdFRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xyXG4gIEBWaWV3Q2hpbGQoJ2NvbnRlbnRfdGVtcGxhdGUnLCB7IHJlYWQ6IFRlbXBsYXRlUmVmIH0pIHByb3RlY3RlZCBfY29udGVudFRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xyXG5cclxuICBAQ29udGVudENoaWxkKERlZmF1bHRDb250ZW50Q29tcG9uZW50KSBwcm90ZWN0ZWQgX2RlZmF1bHRDb250ZW50Q29tcDogRGVmYXVsdENvbnRlbnRDb21wb25lbnQ7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJvdGVjdGVkIGNkOiBDaGFuZ2VEZXRlY3RvclJlZixcclxuICAgIHByb3RlY3RlZCBfZWxSZWY6IEVsZW1lbnRSZWZcclxuICApIHtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG5cclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcclxuICAgIHRoaXMucGFyc2VUZW1wbGF0ZSgpO1xyXG5cclxuICAgIHRoaXMuY2QubWFya0ZvckNoZWNrKCk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICB9XHJcblxyXG5cclxuICBzZXRDb250ZXh0ID0gKHByb3BlcnRpZXM6IHsgW2tleTogc3RyaW5nXTogYW55IH0sIGV2ZW50cz86IHsgW2tleTogc3RyaW5nXTogRnVuY3Rpb24gfSkgPT4ge1xyXG4gICAgdGhpcy5fY29udGV4dERhdGEgPSB7XHJcbiAgICAgIC4uLnRoaXMuX2NvbnRleHREYXRhLFxyXG4gICAgICAuLi5wcm9wZXJ0aWVzLFxyXG4gICAgICAuLi5ldmVudHNcclxuICAgIH07XHJcbiAgICAvLyB0aGlzLmNkLm1hcmtGb3JDaGVjaygpO1xyXG4gIH07XHJcblxyXG5cclxuICBwYXJzZVRlbXBsYXRlID0gKCkgPT4ge1xyXG5cclxuICAgIGlmICghdGhpcy50ZW1wbGF0ZSkge1xyXG4gICAgICB0aGlzLnRlbXBsYXRlID0gdGhpcy5fY29udGVudFRlbXBsYXRlO1xyXG5cclxuICAgICAgaWYgKHRoaXMuX2RlZmF1bHRDb250ZW50Q29tcCkge1xyXG5cclxuICAgICAgICB0aGlzLl9kZWZhdWx0Q29udGVudENvbXAudGVtcGxhdGUgPSB7XHJcbiAgICAgICAgICB0ZW1wbGF0ZTogdGhpcy5fZGVmYXVsdFRlbXBsYXRlLFxyXG4gICAgICAgICAgY29udGV4dDogdGhpcy5jb250ZXh0XHJcbiAgICAgICAgfTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKGlzRW1wdHlUZW1wbGF0ZSh0aGlzLl9lbFJlZikgfHwgIXRoaXMuX2NvbnRlbnRUZW1wbGF0ZSkge1xyXG5cclxuICAgICAgICB0aGlzLnRlbXBsYXRlID0gdGhpcy5fZGVmYXVsdFRlbXBsYXRlO1xyXG4gICAgICAgIHRoaXMuY2QuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLnZpZXdJbml0ID0gdHJ1ZTtcclxuICAgICAgdGhpcy5jZC5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy52aWV3SW5pdCA9IHRydWU7XHJcbiAgICB0aGlzLmNkLmRldGVjdENoYW5nZXMoKTtcclxuICB9O1xyXG5cclxufVxyXG4iXX0=