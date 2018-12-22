/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
export class TabContentComponent {
    constructor() {
        this.createView = () => {
            if (this.template) {
                this._vcRef.clear();
                this._vcRef.createEmbeddedView(this.template);
            }
        };
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.createView();
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        this.createView();
    }
}
TabContentComponent.decorators = [
    { type: Component, args: [{
                selector: 'tab-content',
                template: `
      <ng-template #content>
          <ng-content></ng-content>
      </ng-template>
    
    <ng-container #vcRef>
        
    </ng-container>
  `
            }] }
];
/** @nocollapse */
TabContentComponent.ctorParameters = () => [];
TabContentComponent.propDecorators = {
    template: [{ type: Input }],
    _templateRef: [{ type: ViewChild, args: ['content', { read: TemplateRef },] }],
    _vcRef: [{ type: ViewChild, args: ['vcRef', { read: ViewContainerRef },] }]
};
if (false) {
    /** @type {?} */
    TabContentComponent.prototype.template;
    /** @type {?} */
    TabContentComponent.prototype._templateRef;
    /**
     * @type {?}
     * @private
     */
    TabContentComponent.prototype._vcRef;
    /** @type {?} */
    TabContentComponent.prototype.createView;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGVudC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AaW9uYXIvdWkvIiwic291cmNlcyI6WyJjb21wb25lbnRzL3RhYnMvY29tcG9uZW50L2NvbnRlbnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBRUwsU0FBUyxFQUNULEtBQUssRUFHTCxXQUFXLEVBQ1gsU0FBUyxFQUNULGdCQUFnQixFQUNqQixNQUFNLGVBQWUsQ0FBQztBQWN2QixNQUFNLE9BQU8sbUJBQW1CO0lBTTlCO1FBZ0JBLGVBQVUsR0FBRyxHQUFHLEVBQUU7WUFFaEIsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO2dCQUNqQixJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDO2dCQUNwQixJQUFJLENBQUMsTUFBTSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQzthQUMvQztRQUNILENBQUMsQ0FBQztJQXJCRixDQUFDOzs7O0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUNwQixDQUFDOzs7O0lBRUQsZUFBZTtJQUVmLENBQUM7Ozs7O0lBRUQsV0FBVyxDQUFDLE9BQU87UUFDakIsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ3BCLENBQUM7OztZQS9CRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGFBQWE7Z0JBQ3ZCLFFBQVEsRUFBRTs7Ozs7Ozs7R0FRVDthQUNGOzs7Ozt1QkFHRSxLQUFLOzJCQUNMLFNBQVMsU0FBQyxTQUFTLEVBQUUsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFO3FCQUMxQyxTQUFTLFNBQUMsT0FBTyxFQUFFLEVBQUMsSUFBSSxFQUFFLGdCQUFnQixFQUFDOzs7O0lBRjVDLHVDQUFvQzs7SUFDcEMsMkNBQTRFOzs7OztJQUM1RSxxQ0FBOEU7O0lBa0I5RSx5Q0FNRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQWZ0ZXJWaWV3SW5pdCxcclxuICBDb21wb25lbnQsXHJcbiAgSW5wdXQsXHJcbiAgT25DaGFuZ2VzLFxyXG4gIE9uSW5pdCxcclxuICBUZW1wbGF0ZVJlZixcclxuICBWaWV3Q2hpbGQsXHJcbiAgVmlld0NvbnRhaW5lclJlZlxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICd0YWItY29udGVudCcsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgICAgPG5nLXRlbXBsYXRlICNjb250ZW50PlxyXG4gICAgICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxyXG4gICAgICA8L25nLXRlbXBsYXRlPlxyXG4gICAgXHJcbiAgICA8bmctY29udGFpbmVyICN2Y1JlZj5cclxuICAgICAgICBcclxuICAgIDwvbmctY29udGFpbmVyPlxyXG4gIGBcclxufSlcclxuZXhwb3J0IGNsYXNzIFRhYkNvbnRlbnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQsIE9uQ2hhbmdlcyB7XHJcblxyXG4gIEBJbnB1dCgpIHRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xyXG4gIEBWaWV3Q2hpbGQoJ2NvbnRlbnQnLCB7IHJlYWQ6IFRlbXBsYXRlUmVmIH0pIF90ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8YW55PjtcclxuICBAVmlld0NoaWxkKCd2Y1JlZicsIHtyZWFkOiBWaWV3Q29udGFpbmVyUmVmfSkgcHJpdmF0ZSBfdmNSZWY6IFZpZXdDb250YWluZXJSZWZcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuY3JlYXRlVmlldygpO1xyXG4gIH1cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xyXG5cclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXMpOiB2b2lkIHtcclxuICAgIHRoaXMuY3JlYXRlVmlldygpO1xyXG4gIH1cclxuXHJcblxyXG4gIGNyZWF0ZVZpZXcgPSAoKSA9PiB7XHJcblxyXG4gICAgaWYgKHRoaXMudGVtcGxhdGUpIHtcclxuICAgICAgdGhpcy5fdmNSZWYuY2xlYXIoKTtcclxuICAgICAgdGhpcy5fdmNSZWYuY3JlYXRlRW1iZWRkZWRWaWV3KHRoaXMudGVtcGxhdGUpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG59Il19