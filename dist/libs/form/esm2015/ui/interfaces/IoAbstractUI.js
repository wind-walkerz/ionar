/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ContentChild, Input, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { DefaultContentComponent, isEmptyTemplate } from '@ionar/ui';
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
                if (this._defaultContentComp) {
                    this._defaultContentComp.template = {
                        template: this._defaultTemplate,
                        context: this.context
                    };
                }
                if (isEmptyTemplate(this._elRef) || !this._contentTemplate) {
                    this.template = this._defaultTemplate;
                    this.cd.detectChanges();
                }
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
    _contentTemplate: [{ type: ViewChild, args: ['content_template', { read: TemplateRef },] }],
    _defaultContentComp: [{ type: ContentChild, args: [DefaultContentComponent,] }]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSW9BYnN0cmFjdFVJLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGlvbmFyL2Zvcm0vIiwic291cmNlcyI6WyJ1aS9pbnRlcmZhY2VzL0lvQWJzdHJhY3RVSS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNjLFlBQVksRUFDL0IsS0FBSyxFQUtMLFdBQVcsRUFDWCxTQUFTLEVBQUUsZ0JBQWdCLEVBQzVCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxlQUFlLEVBQUUsTUFBTSxXQUFXLENBQUM7Ozs7QUFHckUsc0NBR0M7OztJQUZDLDBDQUFpQzs7SUFDakMscUNBQWlCOzs7OztBQUduQixNQUFNLE9BQWdCLFlBQVk7Ozs7O0lBcUJoQyxZQUNZLEVBQXFCLEVBQ3JCLE1BQWtCO1FBRGxCLE9BQUUsR0FBRixFQUFFLENBQW1CO1FBQ3JCLFdBQU0sR0FBTixNQUFNLENBQVk7UUFwQnJCLGFBQVEsR0FBcUIsSUFBSSxDQUFDO1FBRTNDLGFBQVEsR0FBWSxLQUFLLENBQUM7UUFtQzFCLGVBQVUsR0FBRyxDQUFDLFVBQWtDLEVBQUUsTUFBb0MsRUFBRSxFQUFFO1lBQ3hGLElBQUksQ0FBQyxZQUFZLHFCQUNaLElBQUksQ0FBQyxZQUFZLEVBQ2pCLFVBQVUsRUFDVixNQUFNLENBQ1YsQ0FBQztZQUNGLElBQUksQ0FBQyxFQUFFLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDekIsQ0FBQyxDQUFDO1FBR0Ysa0JBQWEsR0FBRyxHQUFHLEVBQUU7WUFFbkIsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUU7Z0JBQ2xCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDO2dCQUV0QyxJQUFJLElBQUksQ0FBQyxtQkFBbUIsRUFBRTtvQkFFNUIsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFFBQVEsR0FBRzt3QkFDbEMsUUFBUSxFQUFFLElBQUksQ0FBQyxnQkFBZ0I7d0JBQy9CLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTztxQkFDdEIsQ0FBQztpQkFDSDtnQkFFRCxJQUFJLGVBQWUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLEVBQUU7b0JBRTFELElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDO29CQUN0QyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxDQUFDO2lCQUN6QjtnQkFFRCxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztnQkFDckIsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsQ0FBQzthQUN6QjtZQUVELElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1lBQ3JCLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDMUIsQ0FBQyxDQUFDO0lBbERGLENBQUM7Ozs7SUFqQkQsSUFBSSxPQUFPO1FBQ1QsT0FBTztZQUNMLGNBQWMsRUFBRSxJQUFJLENBQUMsZ0JBQWdCO1lBQ3JDLFNBQVMsRUFBRSxJQUFJLENBQUMsWUFBWTtTQUM3QixDQUFDO0lBQ0osQ0FBQzs7OztJQWNELFFBQVE7SUFFUixDQUFDOzs7OztJQUVELFdBQVcsQ0FBQyxPQUFzQjtRQUNoQyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDckIsSUFBSSxDQUFDLEVBQUUsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN6QixDQUFDOzs7O0lBRUQsV0FBVztJQUNYLENBQUM7Ozt1QkFsQ0EsS0FBSzt5QkFZTCxTQUFTLFNBQUMsV0FBVyxFQUFFLEVBQUUsSUFBSSxFQUFFLGdCQUFnQixFQUFFOytCQUNqRCxTQUFTLFNBQUMsa0JBQWtCLEVBQUUsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFOytCQUNuRCxTQUFTLFNBQUMsa0JBQWtCLEVBQUUsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFO2tDQUVuRCxZQUFZLFNBQUMsdUJBQXVCOzs7O0lBaEJyQyxnQ0FBMkM7O0lBRTNDLGdDQUEwQjs7Ozs7SUFDMUIsb0NBQTZCOzs7OztJQVM3QixrQ0FBMkY7Ozs7O0lBQzNGLHdDQUFtRzs7Ozs7SUFDbkcsd0NBQW1HOzs7OztJQUVuRywyQ0FBOEY7O0lBcUI5RixrQ0FPRTs7SUFHRixxQ0F5QkU7Ozs7O0lBckRBLDBCQUErQjs7Ozs7SUFDL0IsOEJBQTRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBDaGFuZ2VEZXRlY3RvclJlZiwgQ29udGVudENoaWxkLCBFbGVtZW50UmVmLFxyXG4gIElucHV0LFxyXG4gIE9uQ2hhbmdlcyxcclxuICBPbkRlc3Ryb3ksXHJcbiAgT25Jbml0LFxyXG4gIFNpbXBsZUNoYW5nZXMsXHJcbiAgVGVtcGxhdGVSZWYsXHJcbiAgVmlld0NoaWxkLCBWaWV3Q29udGFpbmVyUmVmXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IERlZmF1bHRDb250ZW50Q29tcG9uZW50LCBpc0VtcHR5VGVtcGxhdGUgfSBmcm9tICdAaW9uYXIvdWknO1xyXG5cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQ29tcG9uZW50Q29udGV4dCB7XHJcbiAgZGVmYXVsdENvbnRlbnQ6IFRlbXBsYXRlUmVmPGFueT4sXHJcbiAgJGltcGxpY2l0OiBPYmplY3RcclxufVxyXG5cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIElvQWJzdHJhY3RVSSBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xyXG5cclxuXHJcbiAgQElucHV0KCkgdGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT4gPSBudWxsO1xyXG5cclxuICB2aWV3SW5pdDogQm9vbGVhbiA9IGZhbHNlO1xyXG4gIHByaXZhdGUgX2NvbnRleHREYXRhOiBPYmplY3Q7XHJcblxyXG4gIGdldCBjb250ZXh0KCk6IENvbXBvbmVudENvbnRleHQge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgZGVmYXVsdENvbnRlbnQ6IHRoaXMuX2RlZmF1bHRUZW1wbGF0ZSxcclxuICAgICAgJGltcGxpY2l0OiB0aGlzLl9jb250ZXh0RGF0YVxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIEBWaWV3Q2hpbGQoJ2NvbnRhaW5lcicsIHsgcmVhZDogVmlld0NvbnRhaW5lclJlZiB9KSBwcm90ZWN0ZWQgX2NvbnRhaW5lcjogVmlld0NvbnRhaW5lclJlZjtcclxuICBAVmlld0NoaWxkKCdkZWZhdWx0X3RlbXBsYXRlJywgeyByZWFkOiBUZW1wbGF0ZVJlZiB9KSBwcm90ZWN0ZWQgX2RlZmF1bHRUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcclxuICBAVmlld0NoaWxkKCdjb250ZW50X3RlbXBsYXRlJywgeyByZWFkOiBUZW1wbGF0ZVJlZiB9KSBwcm90ZWN0ZWQgX2NvbnRlbnRUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcclxuXHJcbiAgQENvbnRlbnRDaGlsZChEZWZhdWx0Q29udGVudENvbXBvbmVudCkgcHJvdGVjdGVkIF9kZWZhdWx0Q29udGVudENvbXA6IERlZmF1bHRDb250ZW50Q29tcG9uZW50O1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByb3RlY3RlZCBjZDogQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgICBwcm90ZWN0ZWQgX2VsUmVmOiBFbGVtZW50UmVmXHJcbiAgKSB7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuXHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XHJcbiAgICB0aGlzLnBhcnNlVGVtcGxhdGUoKTtcclxuICAgIHRoaXMuY2QubWFya0ZvckNoZWNrKCk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICB9XHJcblxyXG5cclxuICBzZXRDb250ZXh0ID0gKHByb3BlcnRpZXM6IHsgW2tleTogc3RyaW5nXTogYW55IH0sIGV2ZW50cz86IHsgW2tleTogc3RyaW5nXTogRnVuY3Rpb24gfSkgPT4ge1xyXG4gICAgdGhpcy5fY29udGV4dERhdGEgPSB7XHJcbiAgICAgIC4uLnRoaXMuX2NvbnRleHREYXRhLFxyXG4gICAgICAuLi5wcm9wZXJ0aWVzLFxyXG4gICAgICAuLi5ldmVudHNcclxuICAgIH07XHJcbiAgICB0aGlzLmNkLm1hcmtGb3JDaGVjaygpO1xyXG4gIH07XHJcblxyXG5cclxuICBwYXJzZVRlbXBsYXRlID0gKCkgPT4ge1xyXG5cclxuICAgIGlmICghdGhpcy50ZW1wbGF0ZSkge1xyXG4gICAgICB0aGlzLnRlbXBsYXRlID0gdGhpcy5fY29udGVudFRlbXBsYXRlO1xyXG5cclxuICAgICAgaWYgKHRoaXMuX2RlZmF1bHRDb250ZW50Q29tcCkge1xyXG5cclxuICAgICAgICB0aGlzLl9kZWZhdWx0Q29udGVudENvbXAudGVtcGxhdGUgPSB7XHJcbiAgICAgICAgICB0ZW1wbGF0ZTogdGhpcy5fZGVmYXVsdFRlbXBsYXRlLFxyXG4gICAgICAgICAgY29udGV4dDogdGhpcy5jb250ZXh0XHJcbiAgICAgICAgfTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKGlzRW1wdHlUZW1wbGF0ZSh0aGlzLl9lbFJlZikgfHwgIXRoaXMuX2NvbnRlbnRUZW1wbGF0ZSkge1xyXG5cclxuICAgICAgICB0aGlzLnRlbXBsYXRlID0gdGhpcy5fZGVmYXVsdFRlbXBsYXRlO1xyXG4gICAgICAgIHRoaXMuY2QuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLnZpZXdJbml0ID0gdHJ1ZTtcclxuICAgICAgdGhpcy5jZC5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy52aWV3SW5pdCA9IHRydWU7XHJcbiAgICB0aGlzLmNkLmRldGVjdENoYW5nZXMoKTtcclxuICB9O1xyXG5cclxufVxyXG4iXX0=