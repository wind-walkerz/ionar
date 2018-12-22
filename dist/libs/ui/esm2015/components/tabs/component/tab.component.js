/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ContentChild, Input, TemplateRef, ViewChild } from '@angular/core';
import { TabLabelComponent } from './label.component';
import { TabContentComponent } from './content.component';
export class TabComponent {
    constructor() {
        this.active = false;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (!this.label && !this._labelComp) {
            throw new Error(`Missing Tab's label`);
        }
        if ((this._labelComp && !this._contentComp) || (!this._labelComp && this._contentComp))
            throw new Error(`Missing ${(!this._labelComp && this._contentComp) ? `<tab-label></tab-label>` : `<tab-content></tab-content>`}`);
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
    }
}
TabComponent.decorators = [
    { type: Component, args: [{
                selector: 'tab',
                template: `
      <ng-template #tab>
          <ng-content></ng-content>
      </ng-template>
  `
            }] }
];
/** @nocollapse */
TabComponent.ctorParameters = () => [];
TabComponent.propDecorators = {
    label: [{ type: Input }],
    _tabTemplateRef: [{ type: ViewChild, args: ['tab', { read: TemplateRef },] }],
    _labelComp: [{ type: ContentChild, args: [TabLabelComponent,] }],
    _contentComp: [{ type: ContentChild, args: [TabContentComponent,] }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bpb25hci91aS8iLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvdGFicy9jb21wb25lbnQvdGFiLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUVMLFNBQVMsRUFDVCxZQUFZLEVBQ1osS0FBSyxFQUdMLFdBQVcsRUFDWCxTQUFTLEVBQ1YsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDdEQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFVMUQsTUFBTSxPQUFPLFlBQVk7SUFVdkI7UUFGQSxXQUFNLEdBQVksS0FBSyxDQUFDO0lBR3hCLENBQUM7Ozs7SUFFRCxRQUFRO1FBRU4sSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ25DLE1BQU0sSUFBSSxLQUFLLENBQUMscUJBQXFCLENBQUMsQ0FBQztTQUN4QztRQUVELElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUM7WUFDcEYsTUFBTSxJQUFJLEtBQUssQ0FBQyxXQUFXLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMseUJBQXlCLENBQUMsQ0FBQyxDQUFDLDZCQUE2QixFQUFFLENBQUMsQ0FBQztJQUV0SSxDQUFDOzs7O0lBRUQsZUFBZTtJQUVmLENBQUM7OztZQWxDRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLEtBQUs7Z0JBQ2YsUUFBUSxFQUFFOzs7O0dBSVQ7YUFDRjs7Ozs7b0JBRUUsS0FBSzs4QkFFTCxTQUFTLFNBQUMsS0FBSyxFQUFFLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRTt5QkFDdEMsWUFBWSxTQUFDLGlCQUFpQjsyQkFDOUIsWUFBWSxTQUFDLG1CQUFtQjs7OztJQUpqQyw2QkFBb0I7O0lBRXBCLHVDQUEyRTs7SUFDM0Usa0NBQStEOztJQUMvRCxvQ0FBcUU7O0lBR3JFLDhCQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQWZ0ZXJWaWV3SW5pdCxcclxuICBDb21wb25lbnQsXHJcbiAgQ29udGVudENoaWxkLFxyXG4gIElucHV0LFxyXG4gIE9uSW5pdCxcclxuICBRdWVyeUxpc3QsXHJcbiAgVGVtcGxhdGVSZWYsXHJcbiAgVmlld0NoaWxkXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFRhYkxhYmVsQ29tcG9uZW50IH0gZnJvbSAnLi9sYWJlbC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBUYWJDb250ZW50Q29tcG9uZW50IH0gZnJvbSAnLi9jb250ZW50LmNvbXBvbmVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3RhYicsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgICAgPG5nLXRlbXBsYXRlICN0YWI+XHJcbiAgICAgICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbiAgICAgIDwvbmctdGVtcGxhdGU+XHJcbiAgYFxyXG59KVxyXG5leHBvcnQgY2xhc3MgVGFiQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0IHtcclxuICBASW5wdXQoKSBsYWJlbDogYW55O1xyXG5cclxuICBAVmlld0NoaWxkKCd0YWInLCB7IHJlYWQ6IFRlbXBsYXRlUmVmIH0pIF90YWJUZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8YW55PjtcclxuICBAQ29udGVudENoaWxkKFRhYkxhYmVsQ29tcG9uZW50KSBfbGFiZWxDb21wOiBUYWJMYWJlbENvbXBvbmVudDtcclxuICBAQ29udGVudENoaWxkKFRhYkNvbnRlbnRDb21wb25lbnQpIF9jb250ZW50Q29tcDogVGFiQ29udGVudENvbXBvbmVudDtcclxuXHJcblxyXG4gIGFjdGl2ZTogQm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG5cclxuICAgIGlmICghdGhpcy5sYWJlbCAmJiAhdGhpcy5fbGFiZWxDb21wKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihgTWlzc2luZyBUYWIncyBsYWJlbGApO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICgodGhpcy5fbGFiZWxDb21wICYmICF0aGlzLl9jb250ZW50Q29tcCkgfHwgKCF0aGlzLl9sYWJlbENvbXAgJiYgdGhpcy5fY29udGVudENvbXApKVxyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYE1pc3NpbmcgJHsoIXRoaXMuX2xhYmVsQ29tcCAmJiB0aGlzLl9jb250ZW50Q29tcCkgPyBgPHRhYi1sYWJlbD48L3RhYi1sYWJlbD5gIDogYDx0YWItY29udGVudD48L3RhYi1jb250ZW50PmB9YCk7XHJcblxyXG4gIH1cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xyXG5cclxuICB9XHJcbn0iXX0=