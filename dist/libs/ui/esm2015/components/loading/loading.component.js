/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { IonarLoadingService } from './loading.service';
import { untilDestroyed } from '@ionar/utility';
export class LoadingComponent {
    /**
     * @param {?} _loadingSvs
     * @param {?} cd
     */
    constructor(_loadingSvs, cd) {
        this._loadingSvs = _loadingSvs;
        this.cd = cd;
        ///-----------------------------------------------  Variables   -----------------------------------------------///
        this.visible = false;
    }
    ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @return {?}
     */
    ngAfterViewChecked() {
        if (this._subscription)
            this._subscription.unsubscribe();
        this._subscription = this._loadingSvs.visibilityChange$.pipe(untilDestroyed(this)).subscribe((visible) => {
            this.visible = visible;
            this.cd.markForCheck();
        });
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
    }
}
LoadingComponent.decorators = [
    { type: Component, args: [{
                selector: 'io-loading',
                template: "<div class=\"content\" *ngIf=\"visible\">\r\n    <sk-circle></sk-circle>\r\n</div>",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [":host .content{background-color:rgba(51,51,51,.8);display:flex;align-items:center;justify-content:center;position:fixed;top:0;left:0;right:0;bottom:0;z-index:100!important}"]
            }] }
];
/** @nocollapse */
LoadingComponent.ctorParameters = () => [
    { type: IonarLoadingService },
    { type: ChangeDetectorRef }
];
if (false) {
    /** @type {?} */
    LoadingComponent.prototype.visible;
    /**
     * @type {?}
     * @private
     */
    LoadingComponent.prototype._subscription;
    /**
     * @type {?}
     * @private
     */
    LoadingComponent.prototype._loadingSvs;
    /**
     * @type {?}
     * @private
     */
    LoadingComponent.prototype.cd;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGluZy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AaW9uYXIvdWkvIiwic291cmNlcyI6WyJjb21wb25lbnRzL2xvYWRpbmcvbG9hZGluZy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFFTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFHVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUN4RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFVaEQsTUFBTSxPQUFPLGdCQUFnQjs7Ozs7SUFRM0IsWUFBb0IsV0FBZ0MsRUFBVyxFQUFxQjtRQUFoRSxnQkFBVyxHQUFYLFdBQVcsQ0FBcUI7UUFBVyxPQUFFLEdBQUYsRUFBRSxDQUFtQjs7UUFKcEYsWUFBTyxHQUFZLEtBQUssQ0FBQztJQUt6QixDQUFDOzs7OztJQUlELFFBQVE7SUFFUixDQUFDOzs7O0lBRUQsa0JBQWtCO1FBQ2hCLElBQUksSUFBSSxDQUFDLGFBQWE7WUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBRXpELElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsT0FBZ0IsRUFBRSxFQUFFO1lBQ2hILElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxFQUFFLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDekIsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDOzs7O0lBRUQsV0FBVztJQUNYLENBQUM7OztZQWxDRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFlBQVk7Z0JBQ3RCLDhGQUF1QztnQkFFdkMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07O2FBRWhEOzs7O1lBVlEsbUJBQW1CO1lBTDFCLGlCQUFpQjs7OztJQW9CakIsbUNBQXlCOzs7OztJQUV6Qix5Q0FBb0M7Ozs7O0lBRXhCLHVDQUF3Qzs7Ozs7SUFBRSw4QkFBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBBZnRlclZpZXdDaGVja2VkLFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgT25EZXN0cm95LFxuICBPbkluaXRcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJb25hckxvYWRpbmdTZXJ2aWNlIH0gZnJvbSAnLi9sb2FkaW5nLnNlcnZpY2UnO1xuaW1wb3J0IHsgdW50aWxEZXN0cm95ZWQgfSBmcm9tICdAaW9uYXIvdXRpbGl0eSc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnaW8tbG9hZGluZycsXG4gIHRlbXBsYXRlVXJsOiAnLi9sb2FkaW5nLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vbG9hZGluZy5jb21wb25lbnQuc2NzcyddLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcblxufSlcbmV4cG9ydCBjbGFzcyBMb2FkaW5nQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdDaGVja2VkLCBPbkRlc3Ryb3kge1xuXG4gIC8vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICBWYXJpYWJsZXMgICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS8vL1xuXG4gIHZpc2libGU6IEJvb2xlYW4gPSBmYWxzZTtcblxuICBwcml2YXRlIF9zdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9sb2FkaW5nU3ZzOiBJb25hckxvYWRpbmdTZXJ2aWNlLCBwcml2YXRlICBjZDogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcbiAgfVxuXG4gIC8vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICBMaWZlIEN5Y2xlIEhvb2sgICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS8vL1xuXG4gIG5nT25Jbml0KCkge1xuXG4gIH1cblxuICBuZ0FmdGVyVmlld0NoZWNrZWQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX3N1YnNjcmlwdGlvbikgdGhpcy5fc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG5cbiAgICB0aGlzLl9zdWJzY3JpcHRpb24gPSB0aGlzLl9sb2FkaW5nU3ZzLnZpc2liaWxpdHlDaGFuZ2UkLnBpcGUodW50aWxEZXN0cm95ZWQodGhpcykpLnN1YnNjcmliZSgodmlzaWJsZTogQm9vbGVhbikgPT4ge1xuICAgICAgdGhpcy52aXNpYmxlID0gdmlzaWJsZTtcbiAgICAgIHRoaXMuY2QubWFya0ZvckNoZWNrKCk7XG4gICAgfSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgfVxuXG5cbiAgLy8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gIE1haW4gRnVuY3Rpb25zICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS8vL1xuXG59XG4iXX0=