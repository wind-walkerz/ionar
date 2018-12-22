/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ContentChild, Input, TemplateRef, ViewChild } from '@angular/core';
import { TabLabelComponent } from './label.component';
import { TabContentComponent } from './content.component';
var TabComponent = /** @class */ (function () {
    function TabComponent() {
        this.active = false;
    }
    /**
     * @return {?}
     */
    TabComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (!this.label && !this._labelComp) {
            throw new Error("Missing Tab's label");
        }
        if ((this._labelComp && !this._contentComp) || (!this._labelComp && this._contentComp))
            throw new Error("Missing " + ((!this._labelComp && this._contentComp) ? "<tab-label></tab-label>" : "<tab-content></tab-content>"));
    };
    /**
     * @return {?}
     */
    TabComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
    };
    TabComponent.decorators = [
        { type: Component, args: [{
                    selector: 'tab',
                    template: "\n      <ng-template #tab>\n          <ng-content></ng-content>\n      </ng-template>\n  "
                }] }
    ];
    /** @nocollapse */
    TabComponent.ctorParameters = function () { return []; };
    TabComponent.propDecorators = {
        label: [{ type: Input }],
        _tabTemplateRef: [{ type: ViewChild, args: ['tab', { read: TemplateRef },] }],
        _labelComp: [{ type: ContentChild, args: [TabLabelComponent,] }],
        _contentComp: [{ type: ContentChild, args: [TabContentComponent,] }]
    };
    return TabComponent;
}());
export { TabComponent };
if (false) {
    /** @type {?} */
    TabComponent.prototype.label;
    /** @type {?} */
    TabComponent.prototype._tabTemplateRef;
    /** @type {?} */
    TabComponent.prototype._labelComp;
    /** @type {?} */
    TabComponent.prototype._contentComp;
    /** @type {?} */
    TabComponent.prototype.active;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bpb25hci91aS8iLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvdGFicy9jb21wb25lbnQvdGFiLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUVMLFNBQVMsRUFDVCxZQUFZLEVBQ1osS0FBSyxFQUdMLFdBQVcsRUFDWCxTQUFTLEVBQ1YsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDdEQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFFMUQ7SUFrQkU7UUFGQSxXQUFNLEdBQVksS0FBSyxDQUFDO0lBR3hCLENBQUM7Ozs7SUFFRCwrQkFBUTs7O0lBQVI7UUFFRSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDbkMsTUFBTSxJQUFJLEtBQUssQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1NBQ3hDO1FBRUQsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQztZQUNwRixNQUFNLElBQUksS0FBSyxDQUFDLGNBQVcsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDLENBQUMsNkJBQTZCLENBQUUsQ0FBQyxDQUFDO0lBRXRJLENBQUM7Ozs7SUFFRCxzQ0FBZTs7O0lBQWY7SUFFQSxDQUFDOztnQkFsQ0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxLQUFLO29CQUNmLFFBQVEsRUFBRSwyRkFJVDtpQkFDRjs7Ozs7d0JBRUUsS0FBSztrQ0FFTCxTQUFTLFNBQUMsS0FBSyxFQUFFLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRTs2QkFDdEMsWUFBWSxTQUFDLGlCQUFpQjsrQkFDOUIsWUFBWSxTQUFDLG1CQUFtQjs7SUFzQm5DLG1CQUFDO0NBQUEsQUFuQ0QsSUFtQ0M7U0EzQlksWUFBWTs7O0lBQ3ZCLDZCQUFvQjs7SUFFcEIsdUNBQTJFOztJQUMzRSxrQ0FBK0Q7O0lBQy9ELG9DQUFxRTs7SUFHckUsOEJBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBBZnRlclZpZXdJbml0LFxyXG4gIENvbXBvbmVudCxcclxuICBDb250ZW50Q2hpbGQsXHJcbiAgSW5wdXQsXHJcbiAgT25Jbml0LFxyXG4gIFF1ZXJ5TGlzdCxcclxuICBUZW1wbGF0ZVJlZixcclxuICBWaWV3Q2hpbGRcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgVGFiTGFiZWxDb21wb25lbnQgfSBmcm9tICcuL2xhYmVsLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFRhYkNvbnRlbnRDb21wb25lbnQgfSBmcm9tICcuL2NvbnRlbnQuY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAndGFiJyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgICA8bmctdGVtcGxhdGUgI3RhYj5cclxuICAgICAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cclxuICAgICAgPC9uZy10ZW1wbGF0ZT5cclxuICBgXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUYWJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQge1xyXG4gIEBJbnB1dCgpIGxhYmVsOiBhbnk7XHJcblxyXG4gIEBWaWV3Q2hpbGQoJ3RhYicsIHsgcmVhZDogVGVtcGxhdGVSZWYgfSkgX3RhYlRlbXBsYXRlUmVmOiBUZW1wbGF0ZVJlZjxhbnk+O1xyXG4gIEBDb250ZW50Q2hpbGQoVGFiTGFiZWxDb21wb25lbnQpIF9sYWJlbENvbXA6IFRhYkxhYmVsQ29tcG9uZW50O1xyXG4gIEBDb250ZW50Q2hpbGQoVGFiQ29udGVudENvbXBvbmVudCkgX2NvbnRlbnRDb21wOiBUYWJDb250ZW50Q29tcG9uZW50O1xyXG5cclxuXHJcbiAgYWN0aXZlOiBCb29sZWFuID0gZmFsc2U7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcblxyXG4gICAgaWYgKCF0aGlzLmxhYmVsICYmICF0aGlzLl9sYWJlbENvbXApIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKGBNaXNzaW5nIFRhYidzIGxhYmVsYCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCh0aGlzLl9sYWJlbENvbXAgJiYgIXRoaXMuX2NvbnRlbnRDb21wKSB8fCAoIXRoaXMuX2xhYmVsQ29tcCAmJiB0aGlzLl9jb250ZW50Q29tcCkpXHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihgTWlzc2luZyAkeyghdGhpcy5fbGFiZWxDb21wICYmIHRoaXMuX2NvbnRlbnRDb21wKSA/IGA8dGFiLWxhYmVsPjwvdGFiLWxhYmVsPmAgOiBgPHRhYi1jb250ZW50PjwvdGFiLWNvbnRlbnQ+YH1gKTtcclxuXHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XHJcblxyXG4gIH1cclxufSJdfQ==