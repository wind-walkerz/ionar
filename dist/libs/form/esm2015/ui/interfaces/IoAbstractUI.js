/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Input, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
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
export class IoAbstractUI {
    /**
     * @param {?} cd
     * @param {?} _elRef
     */
    constructor(cd, _elRef) {
        this.cd = cd;
        this._elRef = _elRef;
        this.template = null;
        this.viewInit = false;
        this.setContext = (properties, events) => {
            this._contextData = Object.assign({}, this._contextData, properties, events);
            this.cd.markForCheck();
        };
        this.parseTemplate = () => {
            if (!this.template) {
                this.template = this._contentTemplate;
                // if (this._defaultContentComp) {
                //
                //   this._defaultContentComp.template = {
                //     template: this._defaultTemplate,
                //     context: this.context
                //   };
                // }
                // if (isEmptyTemplate(this._elRef) || !this._contentTemplate) {
                this.template = this._defaultTemplate;
                // this.cd.detectChanges();
                // }
                this.viewInit = true;
                this.cd.detectChanges();
            }
            this.viewInit = true;
            this.cd.detectChanges();
        };
    }
    /**
     * @return {?}
     */
    get context() {
        return {
            defaultContent: this._defaultTemplate,
            $implicit: this._contextData
        };
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        this.parseTemplate();
        this.cd.markForCheck();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
    }
}
IoAbstractUI.propDecorators = {
    template: [{ type: Input }],
    _container: [{ type: ViewChild, args: ['container', { read: ViewContainerRef },] }],
    _defaultTemplate: [{ type: ViewChild, args: ['default_template', { read: TemplateRef },] }],
    _contentTemplate: [{ type: ViewChild, args: ['content_template', { read: TemplateRef },] }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSW9BYnN0cmFjdFVJLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGlvbmFyL2Zvcm0vIiwic291cmNlcyI6WyJ1aS9pbnRlcmZhY2VzL0lvQWJzdHJhY3RVSS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUVMLEtBQUssRUFLTCxXQUFXLEVBQ1gsU0FBUyxFQUFFLGdCQUFnQixFQUM1QixNQUFNLGVBQWUsQ0FBQzs7OztBQUV2QixzQ0FHQzs7O0lBRkMsMENBQWlDOztJQUNqQyxxQ0FBaUI7Ozs7O0FBR25CLE1BQU0sT0FBZ0IsWUFBWTs7Ozs7SUFvQmhDLFlBQ1ksRUFBcUIsRUFDckIsTUFBa0I7UUFEbEIsT0FBRSxHQUFGLEVBQUUsQ0FBbUI7UUFDckIsV0FBTSxHQUFOLE1BQU0sQ0FBWTtRQW5CckIsYUFBUSxHQUFxQixJQUFJLENBQUM7UUFFM0MsYUFBUSxHQUFZLEtBQUssQ0FBQztRQWtDMUIsZUFBVSxHQUFHLENBQUMsVUFBa0MsRUFBRSxNQUFvQyxFQUFFLEVBQUU7WUFDeEYsSUFBSSxDQUFDLFlBQVkscUJBQ1osSUFBSSxDQUFDLFlBQVksRUFDakIsVUFBVSxFQUNWLE1BQU0sQ0FDVixDQUFDO1lBQ0YsSUFBSSxDQUFDLEVBQUUsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUN6QixDQUFDLENBQUM7UUFHRixrQkFBYSxHQUFHLEdBQUcsRUFBRTtZQUVuQixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRTtnQkFDbEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7Z0JBRXRDLGtDQUFrQztnQkFDbEMsRUFBRTtnQkFDRiwwQ0FBMEM7Z0JBQzFDLHVDQUF1QztnQkFDdkMsNEJBQTRCO2dCQUM1QixPQUFPO2dCQUNQLElBQUk7Z0JBRUosZ0VBQWdFO2dCQUVoRSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztnQkFDdEMsMkJBQTJCO2dCQUMzQixJQUFJO2dCQUVKLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO2dCQUNyQixJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxDQUFDO2FBQ3pCO1lBRUQsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7WUFDckIsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUMxQixDQUFDLENBQUM7SUFsREYsQ0FBQzs7OztJQWhCRCxJQUFJLE9BQU87UUFDVCxPQUFPO1lBQ0wsY0FBYyxFQUFFLElBQUksQ0FBQyxnQkFBZ0I7WUFDckMsU0FBUyxFQUFFLElBQUksQ0FBQyxZQUFZO1NBQzdCLENBQUM7SUFDSixDQUFDOzs7O0lBYUQsUUFBUTtJQUVSLENBQUM7Ozs7O0lBRUQsV0FBVyxDQUFDLE9BQXNCO1FBQ2hDLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUNyQixJQUFJLENBQUMsRUFBRSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3pCLENBQUM7Ozs7SUFFRCxXQUFXO0lBQ1gsQ0FBQzs7O3VCQWpDQSxLQUFLO3lCQVlMLFNBQVMsU0FBQyxXQUFXLEVBQUUsRUFBRSxJQUFJLEVBQUUsZ0JBQWdCLEVBQUU7K0JBQ2pELFNBQVMsU0FBQyxrQkFBa0IsRUFBRSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUU7K0JBQ25ELFNBQVMsU0FBQyxrQkFBa0IsRUFBRSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUU7Ozs7SUFkcEQsZ0NBQTJDOztJQUUzQyxnQ0FBMEI7Ozs7O0lBQzFCLG9DQUE2Qjs7Ozs7SUFTN0Isa0NBQTJGOzs7OztJQUMzRix3Q0FBbUc7Ozs7O0lBQ25HLHdDQUFtRzs7SUFzQm5HLGtDQU9FOztJQUdGLHFDQXlCRTs7Ozs7SUFyREEsMEJBQStCOzs7OztJQUMvQiw4QkFBNEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIENoYW5nZURldGVjdG9yUmVmLCBDb250ZW50Q2hpbGQsIEVsZW1lbnRSZWYsXHJcbiAgSW5wdXQsXHJcbiAgT25DaGFuZ2VzLFxyXG4gIE9uRGVzdHJveSxcclxuICBPbkluaXQsXHJcbiAgU2ltcGxlQ2hhbmdlcyxcclxuICBUZW1wbGF0ZVJlZixcclxuICBWaWV3Q2hpbGQsIFZpZXdDb250YWluZXJSZWZcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQ29tcG9uZW50Q29udGV4dCB7XHJcbiAgZGVmYXVsdENvbnRlbnQ6IFRlbXBsYXRlUmVmPGFueT4sXHJcbiAgJGltcGxpY2l0OiBPYmplY3RcclxufVxyXG5cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIElvQWJzdHJhY3RVSSBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xyXG5cclxuXHJcbiAgQElucHV0KCkgdGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT4gPSBudWxsO1xyXG5cclxuICB2aWV3SW5pdDogQm9vbGVhbiA9IGZhbHNlO1xyXG4gIHByaXZhdGUgX2NvbnRleHREYXRhOiBPYmplY3Q7XHJcblxyXG4gIGdldCBjb250ZXh0KCk6IENvbXBvbmVudENvbnRleHQge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgZGVmYXVsdENvbnRlbnQ6IHRoaXMuX2RlZmF1bHRUZW1wbGF0ZSxcclxuICAgICAgJGltcGxpY2l0OiB0aGlzLl9jb250ZXh0RGF0YVxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIEBWaWV3Q2hpbGQoJ2NvbnRhaW5lcicsIHsgcmVhZDogVmlld0NvbnRhaW5lclJlZiB9KSBwcm90ZWN0ZWQgX2NvbnRhaW5lcjogVmlld0NvbnRhaW5lclJlZjtcclxuICBAVmlld0NoaWxkKCdkZWZhdWx0X3RlbXBsYXRlJywgeyByZWFkOiBUZW1wbGF0ZVJlZiB9KSBwcm90ZWN0ZWQgX2RlZmF1bHRUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcclxuICBAVmlld0NoaWxkKCdjb250ZW50X3RlbXBsYXRlJywgeyByZWFkOiBUZW1wbGF0ZVJlZiB9KSBwcm90ZWN0ZWQgX2NvbnRlbnRUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcclxuXHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJvdGVjdGVkIGNkOiBDaGFuZ2VEZXRlY3RvclJlZixcclxuICAgIHByb3RlY3RlZCBfZWxSZWY6IEVsZW1lbnRSZWZcclxuICApIHtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG5cclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcclxuICAgIHRoaXMucGFyc2VUZW1wbGF0ZSgpO1xyXG4gICAgdGhpcy5jZC5tYXJrRm9yQ2hlY2soKTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gIH1cclxuXHJcblxyXG4gIHNldENvbnRleHQgPSAocHJvcGVydGllczogeyBba2V5OiBzdHJpbmddOiBhbnkgfSwgZXZlbnRzPzogeyBba2V5OiBzdHJpbmddOiBGdW5jdGlvbiB9KSA9PiB7XHJcbiAgICB0aGlzLl9jb250ZXh0RGF0YSA9IHtcclxuICAgICAgLi4udGhpcy5fY29udGV4dERhdGEsXHJcbiAgICAgIC4uLnByb3BlcnRpZXMsXHJcbiAgICAgIC4uLmV2ZW50c1xyXG4gICAgfTtcclxuICAgIHRoaXMuY2QubWFya0ZvckNoZWNrKCk7XHJcbiAgfTtcclxuXHJcblxyXG4gIHBhcnNlVGVtcGxhdGUgPSAoKSA9PiB7XHJcblxyXG4gICAgaWYgKCF0aGlzLnRlbXBsYXRlKSB7XHJcbiAgICAgIHRoaXMudGVtcGxhdGUgPSB0aGlzLl9jb250ZW50VGVtcGxhdGU7XHJcblxyXG4gICAgICAvLyBpZiAodGhpcy5fZGVmYXVsdENvbnRlbnRDb21wKSB7XHJcbiAgICAgIC8vXHJcbiAgICAgIC8vICAgdGhpcy5fZGVmYXVsdENvbnRlbnRDb21wLnRlbXBsYXRlID0ge1xyXG4gICAgICAvLyAgICAgdGVtcGxhdGU6IHRoaXMuX2RlZmF1bHRUZW1wbGF0ZSxcclxuICAgICAgLy8gICAgIGNvbnRleHQ6IHRoaXMuY29udGV4dFxyXG4gICAgICAvLyAgIH07XHJcbiAgICAgIC8vIH1cclxuXHJcbiAgICAgIC8vIGlmIChpc0VtcHR5VGVtcGxhdGUodGhpcy5fZWxSZWYpIHx8ICF0aGlzLl9jb250ZW50VGVtcGxhdGUpIHtcclxuXHJcbiAgICAgIHRoaXMudGVtcGxhdGUgPSB0aGlzLl9kZWZhdWx0VGVtcGxhdGU7XHJcbiAgICAgIC8vIHRoaXMuY2QuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgICAvLyB9XHJcblxyXG4gICAgICB0aGlzLnZpZXdJbml0ID0gdHJ1ZTtcclxuICAgICAgdGhpcy5jZC5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy52aWV3SW5pdCA9IHRydWU7XHJcbiAgICB0aGlzLmNkLmRldGVjdENoYW5nZXMoKTtcclxuICB9O1xyXG5cclxufVxyXG4iXX0=