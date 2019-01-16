"use strict";
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var utils_1 = require("../utils");
var default_content_component_1 = require("../elements/default-content/default-content.component");
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
                if (utils_1.isEmptyTemplate(_this._elRef) || !_this._contentTemplate) {
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
        console.log(this._defaultContentComp);
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
        _defaultContentComp: [{ type: core_1.ContentChild, args: [default_content_component_1.DefaultContentComponent,] }]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSW9BYnN0cmFjdFVJLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGlvbmFyL3VpLyIsInNvdXJjZXMiOlsiaW50ZXJmYWNlcy9Jb0Fic3RyYWN0VUkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBLHNDQVN1QjtBQUN2QixrQ0FBMkM7QUFDM0MsbUdBQWdHOzs7O0FBRWhHLCtCQUdDOzs7O0lBRkMsMENBQWlDOztJQUNqQyxxQ0FBaUI7Ozs7O0FBR25CO0lBcUJFLHNCQUNZLEVBQXFCLEVBQ3JCLE1BQWtCO1FBRjlCLGlCQUlDO1FBSFcsT0FBRSxHQUFGLEVBQUUsQ0FBbUI7UUFDckIsV0FBTSxHQUFOLE1BQU0sQ0FBWTtRQXBCckIsYUFBUSxHQUFxQixJQUFJLENBQUM7UUFFM0MsYUFBUSxHQUFZLEtBQUssQ0FBQztRQW9DMUIsZUFBVSxHQUFHLFVBQUMsVUFBa0MsRUFBRSxNQUFvQztZQUNwRixLQUFJLENBQUMsWUFBWSx3QkFDWixLQUFJLENBQUMsWUFBWSxFQUNqQixVQUFVLEVBQ1YsTUFBTSxDQUNWLENBQUM7WUFDRixLQUFJLENBQUMsRUFBRSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3pCLENBQUMsQ0FBQztRQUdGLGtCQUFhLEdBQUc7WUFFZCxJQUFJLENBQUMsS0FBSSxDQUFDLFFBQVEsRUFBRTtnQkFDbEIsS0FBSSxDQUFDLFFBQVEsR0FBRyxLQUFJLENBQUMsZ0JBQWdCLENBQUM7Z0JBRXRDLElBQUksS0FBSSxDQUFDLG1CQUFtQixFQUFFO29CQUU1QixLQUFJLENBQUMsbUJBQW1CLENBQUMsUUFBUSxHQUFHO3dCQUNsQyxRQUFRLEVBQUUsS0FBSSxDQUFDLGdCQUFnQjt3QkFDL0IsT0FBTyxFQUFFLEtBQUksQ0FBQyxPQUFPO3FCQUN0QixDQUFDO2lCQUNIO2dCQUVELElBQUksdUJBQWUsQ0FBQyxLQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsZ0JBQWdCLEVBQUU7b0JBRTFELEtBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSSxDQUFDLGdCQUFnQixDQUFDO29CQUN0QyxLQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxDQUFDO2lCQUN6QjtnQkFFRCxLQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztnQkFDckIsS0FBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsQ0FBQzthQUN6QjtZQUVELEtBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1lBQ3JCLEtBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDMUIsQ0FBQyxDQUFDO0lBbkRGLENBQUM7SUFqQkQsc0JBQUksaUNBQU87Ozs7UUFBWDtZQUNFLE9BQU87Z0JBQ0wsY0FBYyxFQUFFLElBQUksQ0FBQyxnQkFBZ0I7Z0JBQ3JDLFNBQVMsRUFBRSxJQUFJLENBQUMsWUFBWTthQUM3QixDQUFDO1FBQ0osQ0FBQzs7O09BQUE7Ozs7SUFjRCwrQkFBUTs7O0lBQVI7SUFFQSxDQUFDOzs7OztJQUVELGtDQUFXOzs7O0lBQVgsVUFBWSxPQUFzQjtRQUNoQyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDckIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsQ0FBQztRQUN0QyxJQUFJLENBQUMsRUFBRSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3pCLENBQUM7Ozs7SUFFRCxrQ0FBVzs7O0lBQVg7SUFDQSxDQUFDOzsyQkFuQ0EsWUFBSzs2QkFZTCxnQkFBUyxTQUFDLFdBQVcsRUFBRSxFQUFFLElBQUksRUFBRSx1QkFBZ0IsRUFBRTttQ0FDakQsZ0JBQVMsU0FBQyxrQkFBa0IsRUFBRSxFQUFFLElBQUksRUFBRSxrQkFBVyxFQUFFO21DQUNuRCxnQkFBUyxTQUFDLGtCQUFrQixFQUFFLEVBQUUsSUFBSSxFQUFFLGtCQUFXLEVBQUU7c0NBRW5ELG1CQUFZLFNBQUMsbURBQXVCOztJQTJEdkMsbUJBQUM7Q0FBQSxBQTlFRCxJQThFQztBQTlFcUIsb0NBQVk7OztJQUdoQyxnQ0FBMkM7O0lBRTNDLGdDQUEwQjs7Ozs7SUFDMUIsb0NBQTZCOzs7OztJQVM3QixrQ0FBMkY7Ozs7O0lBQzNGLHdDQUFtRzs7Ozs7SUFDbkcsd0NBQW1HOzs7OztJQUVuRywyQ0FBOEY7O0lBc0I5RixrQ0FPRTs7SUFHRixxQ0F5QkU7Ozs7O0lBdERBLDBCQUErQjs7Ozs7SUFDL0IsOEJBQTRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBDaGFuZ2VEZXRlY3RvclJlZiwgQ29udGVudENoaWxkLCBFbGVtZW50UmVmLFxyXG4gIElucHV0LFxyXG4gIE9uQ2hhbmdlcyxcclxuICBPbkRlc3Ryb3ksXHJcbiAgT25Jbml0LFxyXG4gIFNpbXBsZUNoYW5nZXMsXHJcbiAgVGVtcGxhdGVSZWYsXHJcbiAgVmlld0NoaWxkLCBWaWV3Q29udGFpbmVyUmVmXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IGlzRW1wdHlUZW1wbGF0ZSB9IGZyb20gJy4uL3V0aWxzJztcclxuaW1wb3J0IHsgRGVmYXVsdENvbnRlbnRDb21wb25lbnQgfSBmcm9tICcuLi9lbGVtZW50cy9kZWZhdWx0LWNvbnRlbnQvZGVmYXVsdC1jb250ZW50LmNvbXBvbmVudCc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIENvbXBvbmVudENvbnRleHQge1xyXG4gIGRlZmF1bHRDb250ZW50OiBUZW1wbGF0ZVJlZjxhbnk+LFxyXG4gICRpbXBsaWNpdDogT2JqZWN0XHJcbn1cclxuXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBJb0Fic3RyYWN0VUkgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcclxuXHJcblxyXG4gIEBJbnB1dCgpIHRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+ID0gbnVsbDtcclxuXHJcbiAgdmlld0luaXQ6IEJvb2xlYW4gPSBmYWxzZTtcclxuICBwcml2YXRlIF9jb250ZXh0RGF0YTogT2JqZWN0O1xyXG5cclxuICBnZXQgY29udGV4dCgpOiBDb21wb25lbnRDb250ZXh0IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGRlZmF1bHRDb250ZW50OiB0aGlzLl9kZWZhdWx0VGVtcGxhdGUsXHJcbiAgICAgICRpbXBsaWNpdDogdGhpcy5fY29udGV4dERhdGFcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBAVmlld0NoaWxkKCdjb250YWluZXInLCB7IHJlYWQ6IFZpZXdDb250YWluZXJSZWYgfSkgcHJvdGVjdGVkIF9jb250YWluZXI6IFZpZXdDb250YWluZXJSZWY7XHJcbiAgQFZpZXdDaGlsZCgnZGVmYXVsdF90ZW1wbGF0ZScsIHsgcmVhZDogVGVtcGxhdGVSZWYgfSkgcHJvdGVjdGVkIF9kZWZhdWx0VGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XHJcbiAgQFZpZXdDaGlsZCgnY29udGVudF90ZW1wbGF0ZScsIHsgcmVhZDogVGVtcGxhdGVSZWYgfSkgcHJvdGVjdGVkIF9jb250ZW50VGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XHJcblxyXG4gIEBDb250ZW50Q2hpbGQoRGVmYXVsdENvbnRlbnRDb21wb25lbnQpIHByb3RlY3RlZCBfZGVmYXVsdENvbnRlbnRDb21wOiBEZWZhdWx0Q29udGVudENvbXBvbmVudDtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcm90ZWN0ZWQgY2Q6IENoYW5nZURldGVjdG9yUmVmLFxyXG4gICAgcHJvdGVjdGVkIF9lbFJlZjogRWxlbWVudFJlZlxyXG4gICkge1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcblxyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xyXG4gICAgdGhpcy5wYXJzZVRlbXBsYXRlKCk7XHJcbiAgICBjb25zb2xlLmxvZyh0aGlzLl9kZWZhdWx0Q29udGVudENvbXApO1xyXG4gICAgdGhpcy5jZC5tYXJrRm9yQ2hlY2soKTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gIH1cclxuXHJcblxyXG4gIHNldENvbnRleHQgPSAocHJvcGVydGllczogeyBba2V5OiBzdHJpbmddOiBhbnkgfSwgZXZlbnRzPzogeyBba2V5OiBzdHJpbmddOiBGdW5jdGlvbiB9KSA9PiB7XHJcbiAgICB0aGlzLl9jb250ZXh0RGF0YSA9IHtcclxuICAgICAgLi4udGhpcy5fY29udGV4dERhdGEsXHJcbiAgICAgIC4uLnByb3BlcnRpZXMsXHJcbiAgICAgIC4uLmV2ZW50c1xyXG4gICAgfTtcclxuICAgIHRoaXMuY2QubWFya0ZvckNoZWNrKCk7XHJcbiAgfTtcclxuXHJcblxyXG4gIHBhcnNlVGVtcGxhdGUgPSAoKSA9PiB7XHJcblxyXG4gICAgaWYgKCF0aGlzLnRlbXBsYXRlKSB7XHJcbiAgICAgIHRoaXMudGVtcGxhdGUgPSB0aGlzLl9jb250ZW50VGVtcGxhdGU7XHJcblxyXG4gICAgICBpZiAodGhpcy5fZGVmYXVsdENvbnRlbnRDb21wKSB7XHJcblxyXG4gICAgICAgIHRoaXMuX2RlZmF1bHRDb250ZW50Q29tcC50ZW1wbGF0ZSA9IHtcclxuICAgICAgICAgIHRlbXBsYXRlOiB0aGlzLl9kZWZhdWx0VGVtcGxhdGUsXHJcbiAgICAgICAgICBjb250ZXh0OiB0aGlzLmNvbnRleHRcclxuICAgICAgICB9O1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoaXNFbXB0eVRlbXBsYXRlKHRoaXMuX2VsUmVmKSB8fCAhdGhpcy5fY29udGVudFRlbXBsYXRlKSB7XHJcblxyXG4gICAgICAgIHRoaXMudGVtcGxhdGUgPSB0aGlzLl9kZWZhdWx0VGVtcGxhdGU7XHJcbiAgICAgICAgdGhpcy5jZC5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMudmlld0luaXQgPSB0cnVlO1xyXG4gICAgICB0aGlzLmNkLmRldGVjdENoYW5nZXMoKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnZpZXdJbml0ID0gdHJ1ZTtcclxuICAgIHRoaXMuY2QuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gIH07XHJcblxyXG59XHJcbiJdfQ==