"use strict";
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
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
                // if (this._defaultContentComp) {
                //
                //   this._defaultContentComp.template = {
                //     template: this._defaultTemplate,
                //     context: this.context
                //   };
                // }
                // if (isEmptyTemplate(this._elRef) || !this._contentTemplate) {
                _this.template = _this._defaultTemplate;
                // this.cd.detectChanges();
                // }
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
        _contentTemplate: [{ type: core_1.ViewChild, args: ['content_template', { read: core_1.TemplateRef },] }]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSW9BYnN0cmFjdFVJLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGlvbmFyL2Zvcm0vIiwic291cmNlcyI6WyJ1aS9pbnRlcmZhY2VzL0lvQWJzdHJhY3RVSS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUEsc0NBU3VCOzs7O0FBRXZCLCtCQUdDOzs7O0lBRkMsMENBQWlDOztJQUNqQyxxQ0FBaUI7Ozs7O0FBR25CO0lBb0JFLHNCQUNZLEVBQXFCLEVBQ3JCLE1BQWtCO1FBRjlCLGlCQUlDO1FBSFcsT0FBRSxHQUFGLEVBQUUsQ0FBbUI7UUFDckIsV0FBTSxHQUFOLE1BQU0sQ0FBWTtRQW5CckIsYUFBUSxHQUFxQixJQUFJLENBQUM7UUFFM0MsYUFBUSxHQUFZLEtBQUssQ0FBQztRQWtDMUIsZUFBVSxHQUFHLFVBQUMsVUFBa0MsRUFBRSxNQUFvQztZQUNwRixLQUFJLENBQUMsWUFBWSx3QkFDWixLQUFJLENBQUMsWUFBWSxFQUNqQixVQUFVLEVBQ1YsTUFBTSxDQUNWLENBQUM7WUFDRixLQUFJLENBQUMsRUFBRSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3pCLENBQUMsQ0FBQztRQUdGLGtCQUFhLEdBQUc7WUFFZCxJQUFJLENBQUMsS0FBSSxDQUFDLFFBQVEsRUFBRTtnQkFDbEIsS0FBSSxDQUFDLFFBQVEsR0FBRyxLQUFJLENBQUMsZ0JBQWdCLENBQUM7Z0JBRXRDLGtDQUFrQztnQkFDbEMsRUFBRTtnQkFDRiwwQ0FBMEM7Z0JBQzFDLHVDQUF1QztnQkFDdkMsNEJBQTRCO2dCQUM1QixPQUFPO2dCQUNQLElBQUk7Z0JBRUosZ0VBQWdFO2dCQUVoRSxLQUFJLENBQUMsUUFBUSxHQUFHLEtBQUksQ0FBQyxnQkFBZ0IsQ0FBQztnQkFDdEMsMkJBQTJCO2dCQUMzQixJQUFJO2dCQUVKLEtBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO2dCQUNyQixLQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxDQUFDO2FBQ3pCO1lBRUQsS0FBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7WUFDckIsS0FBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUMxQixDQUFDLENBQUM7SUFsREYsQ0FBQztJQWhCRCxzQkFBSSxpQ0FBTzs7OztRQUFYO1lBQ0UsT0FBTztnQkFDTCxjQUFjLEVBQUUsSUFBSSxDQUFDLGdCQUFnQjtnQkFDckMsU0FBUyxFQUFFLElBQUksQ0FBQyxZQUFZO2FBQzdCLENBQUM7UUFDSixDQUFDOzs7T0FBQTs7OztJQWFELCtCQUFROzs7SUFBUjtJQUVBLENBQUM7Ozs7O0lBRUQsa0NBQVc7Ozs7SUFBWCxVQUFZLE9BQXNCO1FBQ2hDLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUNyQixJQUFJLENBQUMsRUFBRSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3pCLENBQUM7Ozs7SUFFRCxrQ0FBVzs7O0lBQVg7SUFDQSxDQUFDOzsyQkFqQ0EsWUFBSzs2QkFZTCxnQkFBUyxTQUFDLFdBQVcsRUFBRSxFQUFFLElBQUksRUFBRSx1QkFBZ0IsRUFBRTttQ0FDakQsZ0JBQVMsU0FBQyxrQkFBa0IsRUFBRSxFQUFFLElBQUksRUFBRSxrQkFBVyxFQUFFO21DQUNuRCxnQkFBUyxTQUFDLGtCQUFrQixFQUFFLEVBQUUsSUFBSSxFQUFFLGtCQUFXLEVBQUU7O0lBMkR0RCxtQkFBQztDQUFBLEFBNUVELElBNEVDO0FBNUVxQixvQ0FBWTs7O0lBR2hDLGdDQUEyQzs7SUFFM0MsZ0NBQTBCOzs7OztJQUMxQixvQ0FBNkI7Ozs7O0lBUzdCLGtDQUEyRjs7Ozs7SUFDM0Ysd0NBQW1HOzs7OztJQUNuRyx3Q0FBbUc7O0lBc0JuRyxrQ0FPRTs7SUFHRixxQ0F5QkU7Ozs7O0lBckRBLDBCQUErQjs7Ozs7SUFDL0IsOEJBQTRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBDaGFuZ2VEZXRlY3RvclJlZiwgQ29udGVudENoaWxkLCBFbGVtZW50UmVmLFxyXG4gIElucHV0LFxyXG4gIE9uQ2hhbmdlcyxcclxuICBPbkRlc3Ryb3ksXHJcbiAgT25Jbml0LFxyXG4gIFNpbXBsZUNoYW5nZXMsXHJcbiAgVGVtcGxhdGVSZWYsXHJcbiAgVmlld0NoaWxkLCBWaWV3Q29udGFpbmVyUmVmXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIENvbXBvbmVudENvbnRleHQge1xyXG4gIGRlZmF1bHRDb250ZW50OiBUZW1wbGF0ZVJlZjxhbnk+LFxyXG4gICRpbXBsaWNpdDogT2JqZWN0XHJcbn1cclxuXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBJb0Fic3RyYWN0VUkgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcclxuXHJcblxyXG4gIEBJbnB1dCgpIHRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+ID0gbnVsbDtcclxuXHJcbiAgdmlld0luaXQ6IEJvb2xlYW4gPSBmYWxzZTtcclxuICBwcml2YXRlIF9jb250ZXh0RGF0YTogT2JqZWN0O1xyXG5cclxuICBnZXQgY29udGV4dCgpOiBDb21wb25lbnRDb250ZXh0IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGRlZmF1bHRDb250ZW50OiB0aGlzLl9kZWZhdWx0VGVtcGxhdGUsXHJcbiAgICAgICRpbXBsaWNpdDogdGhpcy5fY29udGV4dERhdGFcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBAVmlld0NoaWxkKCdjb250YWluZXInLCB7IHJlYWQ6IFZpZXdDb250YWluZXJSZWYgfSkgcHJvdGVjdGVkIF9jb250YWluZXI6IFZpZXdDb250YWluZXJSZWY7XHJcbiAgQFZpZXdDaGlsZCgnZGVmYXVsdF90ZW1wbGF0ZScsIHsgcmVhZDogVGVtcGxhdGVSZWYgfSkgcHJvdGVjdGVkIF9kZWZhdWx0VGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XHJcbiAgQFZpZXdDaGlsZCgnY29udGVudF90ZW1wbGF0ZScsIHsgcmVhZDogVGVtcGxhdGVSZWYgfSkgcHJvdGVjdGVkIF9jb250ZW50VGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XHJcblxyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByb3RlY3RlZCBjZDogQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgICBwcm90ZWN0ZWQgX2VsUmVmOiBFbGVtZW50UmVmXHJcbiAgKSB7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuXHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XHJcbiAgICB0aGlzLnBhcnNlVGVtcGxhdGUoKTtcclxuICAgIHRoaXMuY2QubWFya0ZvckNoZWNrKCk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICB9XHJcblxyXG5cclxuICBzZXRDb250ZXh0ID0gKHByb3BlcnRpZXM6IHsgW2tleTogc3RyaW5nXTogYW55IH0sIGV2ZW50cz86IHsgW2tleTogc3RyaW5nXTogRnVuY3Rpb24gfSkgPT4ge1xyXG4gICAgdGhpcy5fY29udGV4dERhdGEgPSB7XHJcbiAgICAgIC4uLnRoaXMuX2NvbnRleHREYXRhLFxyXG4gICAgICAuLi5wcm9wZXJ0aWVzLFxyXG4gICAgICAuLi5ldmVudHNcclxuICAgIH07XHJcbiAgICB0aGlzLmNkLm1hcmtGb3JDaGVjaygpO1xyXG4gIH07XHJcblxyXG5cclxuICBwYXJzZVRlbXBsYXRlID0gKCkgPT4ge1xyXG5cclxuICAgIGlmICghdGhpcy50ZW1wbGF0ZSkge1xyXG4gICAgICB0aGlzLnRlbXBsYXRlID0gdGhpcy5fY29udGVudFRlbXBsYXRlO1xyXG5cclxuICAgICAgLy8gaWYgKHRoaXMuX2RlZmF1bHRDb250ZW50Q29tcCkge1xyXG4gICAgICAvL1xyXG4gICAgICAvLyAgIHRoaXMuX2RlZmF1bHRDb250ZW50Q29tcC50ZW1wbGF0ZSA9IHtcclxuICAgICAgLy8gICAgIHRlbXBsYXRlOiB0aGlzLl9kZWZhdWx0VGVtcGxhdGUsXHJcbiAgICAgIC8vICAgICBjb250ZXh0OiB0aGlzLmNvbnRleHRcclxuICAgICAgLy8gICB9O1xyXG4gICAgICAvLyB9XHJcblxyXG4gICAgICAvLyBpZiAoaXNFbXB0eVRlbXBsYXRlKHRoaXMuX2VsUmVmKSB8fCAhdGhpcy5fY29udGVudFRlbXBsYXRlKSB7XHJcblxyXG4gICAgICB0aGlzLnRlbXBsYXRlID0gdGhpcy5fZGVmYXVsdFRlbXBsYXRlO1xyXG4gICAgICAvLyB0aGlzLmNkLmRldGVjdENoYW5nZXMoKTtcclxuICAgICAgLy8gfVxyXG5cclxuICAgICAgdGhpcy52aWV3SW5pdCA9IHRydWU7XHJcbiAgICAgIHRoaXMuY2QuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMudmlld0luaXQgPSB0cnVlO1xyXG4gICAgdGhpcy5jZC5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgfTtcclxuXHJcbn1cclxuIl19