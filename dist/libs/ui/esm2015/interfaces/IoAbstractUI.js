/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
        console.log(this._defaultContentComp);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSW9BYnN0cmFjdFVJLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGlvbmFyL3VpLyIsInNvdXJjZXMiOlsiaW50ZXJmYWNlcy9Jb0Fic3RyYWN0VUkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDYyxZQUFZLEVBQy9CLEtBQUssRUFLTCxXQUFXLEVBQ1gsU0FBUyxFQUFFLGdCQUFnQixFQUM1QixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sVUFBVSxDQUFDO0FBQzNDLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHVEQUF1RCxDQUFDOzs7O0FBRWhHLHNDQUdDOzs7SUFGQywwQ0FBaUM7O0lBQ2pDLHFDQUFpQjs7Ozs7QUFHbkIsTUFBTSxPQUFnQixZQUFZOzs7OztJQXFCaEMsWUFDWSxFQUFxQixFQUNyQixNQUFrQjtRQURsQixPQUFFLEdBQUYsRUFBRSxDQUFtQjtRQUNyQixXQUFNLEdBQU4sTUFBTSxDQUFZO1FBcEJyQixhQUFRLEdBQXFCLElBQUksQ0FBQztRQUUzQyxhQUFRLEdBQVksS0FBSyxDQUFDO1FBb0MxQixlQUFVLEdBQUcsQ0FBQyxVQUFrQyxFQUFFLE1BQW9DLEVBQUUsRUFBRTtZQUN4RixJQUFJLENBQUMsWUFBWSxxQkFDWixJQUFJLENBQUMsWUFBWSxFQUNqQixVQUFVLEVBQ1YsTUFBTSxDQUNWLENBQUM7WUFDRixJQUFJLENBQUMsRUFBRSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3pCLENBQUMsQ0FBQztRQUdGLGtCQUFhLEdBQUcsR0FBRyxFQUFFO1lBRW5CLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFO2dCQUNsQixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztnQkFFdEMsSUFBSSxJQUFJLENBQUMsbUJBQW1CLEVBQUU7b0JBRTVCLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxRQUFRLEdBQUc7d0JBQ2xDLFFBQVEsRUFBRSxJQUFJLENBQUMsZ0JBQWdCO3dCQUMvQixPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU87cUJBQ3RCLENBQUM7aUJBQ0g7Z0JBRUQsSUFBSSxlQUFlLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQixFQUFFO29CQUUxRCxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztvQkFDdEMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsQ0FBQztpQkFDekI7Z0JBRUQsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7Z0JBQ3JCLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLENBQUM7YUFDekI7WUFFRCxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztZQUNyQixJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQzFCLENBQUMsQ0FBQztJQW5ERixDQUFDOzs7O0lBakJELElBQUksT0FBTztRQUNULE9BQU87WUFDTCxjQUFjLEVBQUUsSUFBSSxDQUFDLGdCQUFnQjtZQUNyQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFlBQVk7U0FDN0IsQ0FBQztJQUNKLENBQUM7Ozs7SUFjRCxRQUFRO0lBRVIsQ0FBQzs7Ozs7SUFFRCxXQUFXLENBQUMsT0FBc0I7UUFDaEMsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3JCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLENBQUM7UUFDdEMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN6QixDQUFDOzs7O0lBRUQsV0FBVztJQUNYLENBQUM7Ozt1QkFuQ0EsS0FBSzt5QkFZTCxTQUFTLFNBQUMsV0FBVyxFQUFFLEVBQUUsSUFBSSxFQUFFLGdCQUFnQixFQUFFOytCQUNqRCxTQUFTLFNBQUMsa0JBQWtCLEVBQUUsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFOytCQUNuRCxTQUFTLFNBQUMsa0JBQWtCLEVBQUUsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFO2tDQUVuRCxZQUFZLFNBQUMsdUJBQXVCOzs7O0lBaEJyQyxnQ0FBMkM7O0lBRTNDLGdDQUEwQjs7Ozs7SUFDMUIsb0NBQTZCOzs7OztJQVM3QixrQ0FBMkY7Ozs7O0lBQzNGLHdDQUFtRzs7Ozs7SUFDbkcsd0NBQW1HOzs7OztJQUVuRywyQ0FBOEY7O0lBc0I5RixrQ0FPRTs7SUFHRixxQ0F5QkU7Ozs7O0lBdERBLDBCQUErQjs7Ozs7SUFDL0IsOEJBQTRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBDaGFuZ2VEZXRlY3RvclJlZiwgQ29udGVudENoaWxkLCBFbGVtZW50UmVmLFxyXG4gIElucHV0LFxyXG4gIE9uQ2hhbmdlcyxcclxuICBPbkRlc3Ryb3ksXHJcbiAgT25Jbml0LFxyXG4gIFNpbXBsZUNoYW5nZXMsXHJcbiAgVGVtcGxhdGVSZWYsXHJcbiAgVmlld0NoaWxkLCBWaWV3Q29udGFpbmVyUmVmXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IGlzRW1wdHlUZW1wbGF0ZSB9IGZyb20gJy4uL3V0aWxzJztcclxuaW1wb3J0IHsgRGVmYXVsdENvbnRlbnRDb21wb25lbnQgfSBmcm9tICcuLi9lbGVtZW50cy9kZWZhdWx0LWNvbnRlbnQvZGVmYXVsdC1jb250ZW50LmNvbXBvbmVudCc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIENvbXBvbmVudENvbnRleHQge1xyXG4gIGRlZmF1bHRDb250ZW50OiBUZW1wbGF0ZVJlZjxhbnk+LFxyXG4gICRpbXBsaWNpdDogT2JqZWN0XHJcbn1cclxuXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBJb0Fic3RyYWN0VUkgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcclxuXHJcblxyXG4gIEBJbnB1dCgpIHRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+ID0gbnVsbDtcclxuXHJcbiAgdmlld0luaXQ6IEJvb2xlYW4gPSBmYWxzZTtcclxuICBwcml2YXRlIF9jb250ZXh0RGF0YTogT2JqZWN0O1xyXG5cclxuICBnZXQgY29udGV4dCgpOiBDb21wb25lbnRDb250ZXh0IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGRlZmF1bHRDb250ZW50OiB0aGlzLl9kZWZhdWx0VGVtcGxhdGUsXHJcbiAgICAgICRpbXBsaWNpdDogdGhpcy5fY29udGV4dERhdGFcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBAVmlld0NoaWxkKCdjb250YWluZXInLCB7IHJlYWQ6IFZpZXdDb250YWluZXJSZWYgfSkgcHJvdGVjdGVkIF9jb250YWluZXI6IFZpZXdDb250YWluZXJSZWY7XHJcbiAgQFZpZXdDaGlsZCgnZGVmYXVsdF90ZW1wbGF0ZScsIHsgcmVhZDogVGVtcGxhdGVSZWYgfSkgcHJvdGVjdGVkIF9kZWZhdWx0VGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XHJcbiAgQFZpZXdDaGlsZCgnY29udGVudF90ZW1wbGF0ZScsIHsgcmVhZDogVGVtcGxhdGVSZWYgfSkgcHJvdGVjdGVkIF9jb250ZW50VGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XHJcblxyXG4gIEBDb250ZW50Q2hpbGQoRGVmYXVsdENvbnRlbnRDb21wb25lbnQpIHByb3RlY3RlZCBfZGVmYXVsdENvbnRlbnRDb21wOiBEZWZhdWx0Q29udGVudENvbXBvbmVudDtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcm90ZWN0ZWQgY2Q6IENoYW5nZURldGVjdG9yUmVmLFxyXG4gICAgcHJvdGVjdGVkIF9lbFJlZjogRWxlbWVudFJlZlxyXG4gICkge1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcblxyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xyXG4gICAgdGhpcy5wYXJzZVRlbXBsYXRlKCk7XHJcbiAgICBjb25zb2xlLmxvZyh0aGlzLl9kZWZhdWx0Q29udGVudENvbXApO1xyXG4gICAgdGhpcy5jZC5tYXJrRm9yQ2hlY2soKTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gIH1cclxuXHJcblxyXG4gIHNldENvbnRleHQgPSAocHJvcGVydGllczogeyBba2V5OiBzdHJpbmddOiBhbnkgfSwgZXZlbnRzPzogeyBba2V5OiBzdHJpbmddOiBGdW5jdGlvbiB9KSA9PiB7XHJcbiAgICB0aGlzLl9jb250ZXh0RGF0YSA9IHtcclxuICAgICAgLi4udGhpcy5fY29udGV4dERhdGEsXHJcbiAgICAgIC4uLnByb3BlcnRpZXMsXHJcbiAgICAgIC4uLmV2ZW50c1xyXG4gICAgfTtcclxuICAgIHRoaXMuY2QubWFya0ZvckNoZWNrKCk7XHJcbiAgfTtcclxuXHJcblxyXG4gIHBhcnNlVGVtcGxhdGUgPSAoKSA9PiB7XHJcblxyXG4gICAgaWYgKCF0aGlzLnRlbXBsYXRlKSB7XHJcbiAgICAgIHRoaXMudGVtcGxhdGUgPSB0aGlzLl9jb250ZW50VGVtcGxhdGU7XHJcblxyXG4gICAgICBpZiAodGhpcy5fZGVmYXVsdENvbnRlbnRDb21wKSB7XHJcblxyXG4gICAgICAgIHRoaXMuX2RlZmF1bHRDb250ZW50Q29tcC50ZW1wbGF0ZSA9IHtcclxuICAgICAgICAgIHRlbXBsYXRlOiB0aGlzLl9kZWZhdWx0VGVtcGxhdGUsXHJcbiAgICAgICAgICBjb250ZXh0OiB0aGlzLmNvbnRleHRcclxuICAgICAgICB9O1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoaXNFbXB0eVRlbXBsYXRlKHRoaXMuX2VsUmVmKSB8fCAhdGhpcy5fY29udGVudFRlbXBsYXRlKSB7XHJcblxyXG4gICAgICAgIHRoaXMudGVtcGxhdGUgPSB0aGlzLl9kZWZhdWx0VGVtcGxhdGU7XHJcbiAgICAgICAgdGhpcy5jZC5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMudmlld0luaXQgPSB0cnVlO1xyXG4gICAgICB0aGlzLmNkLmRldGVjdENoYW5nZXMoKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnZpZXdJbml0ID0gdHJ1ZTtcclxuICAgIHRoaXMuY2QuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gIH07XHJcblxyXG59XHJcbiJdfQ==