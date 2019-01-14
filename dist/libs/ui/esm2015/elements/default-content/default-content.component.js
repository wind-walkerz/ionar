/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, ViewContainerRef, ChangeDetectorRef, Input } from '@angular/core';
import { removeHost } from '../../utils';
export class DefaultContentComponent {
    /**
     * @param {?} _elRef
     * @param {?} _vcRef
     * @param {?} cd
     */
    constructor(_elRef, _vcRef, cd) {
        this._elRef = _elRef;
        this._vcRef = _vcRef;
        this.cd = cd;
        this.isHostRemoved = false;
    }
    /**
     * @param {?} view
     * @return {?}
     */
    set template(view) {
        this._vcRef.clear();
        this._vcRef.createEmbeddedView(view.template, view.context);
    }
    ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///
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
        if (this.context) {
            this.template = {
                template: this._vcRef['_view'].context.defaultContent,
                context: { $implicit: this.context }
            };
            if (!this.isHostRemoved) {
                removeHost(this._elRef);
            }
            this.isHostRemoved = true;
            this.cd.detectChanges();
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
    }
}
DefaultContentComponent.decorators = [
    { type: Component, args: [{
                selector: 'default-content',
                template: ``
            }] }
];
/** @nocollapse */
DefaultContentComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: ViewContainerRef },
    { type: ChangeDetectorRef }
];
DefaultContentComponent.propDecorators = {
    context: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    DefaultContentComponent.prototype.context;
    /** @type {?} */
    DefaultContentComponent.prototype.isHostRemoved;
    /**
     * @type {?}
     * @private
     */
    DefaultContentComponent.prototype._elRef;
    /**
     * @type {?}
     * @private
     */
    DefaultContentComponent.prototype._vcRef;
    /**
     * @type {?}
     * @private
     */
    DefaultContentComponent.prototype.cd;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmYXVsdC1jb250ZW50LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bpb25hci91aS8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL2RlZmF1bHQtY29udGVudC9kZWZhdWx0LWNvbnRlbnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUdULFVBQVUsRUFDVixnQkFBZ0IsRUFFaEIsaUJBQWlCLEVBQ2pCLEtBQUssRUFHTixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBUXpDLE1BQU0sT0FBTyx1QkFBdUI7Ozs7OztJQWdCbEMsWUFDVSxNQUFrQixFQUNsQixNQUF3QixFQUN4QixFQUFxQjtRQUZyQixXQUFNLEdBQU4sTUFBTSxDQUFZO1FBQ2xCLFdBQU0sR0FBTixNQUFNLENBQWtCO1FBQ3hCLE9BQUUsR0FBRixFQUFFLENBQW1CO1FBYi9CLGtCQUFhLEdBQVksS0FBSyxDQUFDO0lBZS9CLENBQUM7Ozs7O0lBYkQsSUFBSSxRQUFRLENBQUMsSUFFWjtRQUNDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDcEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUM5RCxDQUFDOzs7OztJQWFELFFBQVE7SUFHUixDQUFDOzs7OztJQUVELFdBQVcsQ0FBQyxPQUFzQjtRQUNoQyxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDaEIsSUFBSSxDQUFDLFFBQVEsR0FBRztnQkFDZCxRQUFRLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxPQUFPLENBQUMsY0FBYztnQkFDckQsT0FBTyxFQUFFLEVBQUUsU0FBUyxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUU7YUFDckMsQ0FBQztZQUdGLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFO2dCQUN2QixVQUFVLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2FBQ3pCO1lBQ0QsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7WUFDMUIsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsQ0FBQztTQUN6QjtJQUVILENBQUM7Ozs7SUFHRCxXQUFXO0lBQ1gsQ0FBQzs7O1lBdERGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsaUJBQWlCO2dCQUMzQixRQUFRLEVBQUUsRUFBRTthQUNiOzs7O1lBZkMsVUFBVTtZQUNWLGdCQUFnQjtZQUVoQixpQkFBaUI7OztzQkFpQmhCLEtBQUs7Ozs7SUFBTiwwQ0FBbUM7O0lBRW5DLGdEQUErQjs7Ozs7SUFXN0IseUNBQTBCOzs7OztJQUMxQix5Q0FBZ0M7Ozs7O0lBQ2hDLHFDQUE2QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQ29tcG9uZW50LFxyXG4gIE9uSW5pdCxcclxuICBPbkRlc3Ryb3ksXHJcbiAgRWxlbWVudFJlZixcclxuICBWaWV3Q29udGFpbmVyUmVmLFxyXG4gIFRlbXBsYXRlUmVmLFxyXG4gIENoYW5nZURldGVjdG9yUmVmLFxyXG4gIElucHV0LFxyXG4gIE9uQ2hhbmdlcyxcclxuICBTaW1wbGVDaGFuZ2VzXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IHJlbW92ZUhvc3QgfSBmcm9tICcuLi8uLi91dGlscyc7XHJcbmltcG9ydCB7IENvbXBvbmVudENvbnRleHQgfSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzL0lvQWJzdHJhY3RVSSc7XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdkZWZhdWx0LWNvbnRlbnQnLFxyXG4gIHRlbXBsYXRlOiBgYFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRGVmYXVsdENvbnRlbnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcclxuXHJcbiAgLy8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gIFZhcmlhYmxlcyAgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLy8vXHJcblxyXG4gIEBJbnB1dCgpIGNvbnRleHQ6IENvbXBvbmVudENvbnRleHQ7XHJcblxyXG4gIGlzSG9zdFJlbW92ZWQ6IEJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgc2V0IHRlbXBsYXRlKHZpZXc6IHtcclxuICAgIHRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+LCBjb250ZXh0PzogYW55XHJcbiAgfSkge1xyXG4gICAgdGhpcy5fdmNSZWYuY2xlYXIoKTtcclxuICAgIHRoaXMuX3ZjUmVmLmNyZWF0ZUVtYmVkZGVkVmlldyh2aWV3LnRlbXBsYXRlLCB2aWV3LmNvbnRleHQpO1xyXG4gIH1cclxuXHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBfZWxSZWY6IEVsZW1lbnRSZWYsXHJcbiAgICBwcml2YXRlIF92Y1JlZjogVmlld0NvbnRhaW5lclJlZixcclxuICAgIHByaXZhdGUgY2Q6IENoYW5nZURldGVjdG9yUmVmXHJcbiAgKSB7XHJcbiAgfVxyXG5cclxuXHJcbiAgLy8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gIExpZmUgQ3ljbGUgSG9vayAgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLy8vXHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG5cclxuXHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5jb250ZXh0KSB7XHJcbiAgICAgIHRoaXMudGVtcGxhdGUgPSB7XHJcbiAgICAgICAgdGVtcGxhdGU6IHRoaXMuX3ZjUmVmWydfdmlldyddLmNvbnRleHQuZGVmYXVsdENvbnRlbnQsXHJcbiAgICAgICAgY29udGV4dDogeyAkaW1wbGljaXQ6IHRoaXMuY29udGV4dCB9XHJcbiAgICAgIH07XHJcblxyXG5cclxuICAgICAgaWYgKCF0aGlzLmlzSG9zdFJlbW92ZWQpIHtcclxuICAgICAgICByZW1vdmVIb3N0KHRoaXMuX2VsUmVmKTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLmlzSG9zdFJlbW92ZWQgPSB0cnVlO1xyXG4gICAgICB0aGlzLmNkLmRldGVjdENoYW5nZXMoKTtcclxuICAgIH1cclxuXHJcbiAgfVxyXG5cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgfVxyXG5cclxuXHJcbiAgLy8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gIE1haW4gRnVuY3Rpb25zICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS8vL1xyXG5cclxufVxyXG4iXX0=