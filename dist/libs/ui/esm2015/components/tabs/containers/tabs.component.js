/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectorRef, Component, ContentChildren, QueryList } from '@angular/core';
import _ from 'lodash';
import { TabComponent } from '../component/tab.component';
export class TabsComponent {
    /**
     * @param {?} cd
     */
    constructor(cd) {
        this.cd = cd;
        this.selectTab = selected_index => {
            _.each(this.contentList.toArray(), (tab, i) => {
                tab.active = i === selected_index;
            });
            this.activeTab = _.find(this.contentList.toArray(), ['active', true]);
        };
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.activeTab = this.contentList.toArray()[0];
        this.contentList.toArray()[0].active = true;
        this.cd.detectChanges();
    }
}
TabsComponent.decorators = [
    { type: Component, args: [{
                selector: 'io-tabs',
                template: `
      <ng-template>
          <ng-content></ng-content>
      </ng-template>

      <div class="label_container">
          <ng-container *ngFor="let tab of contentList; let i =index">
              <tab-label
                      [ngClass]="tab.active && 'active'"
                      (click)="selectTab(i)"
                      [text]="tab.label"
                      [template]="tab._labelComp?._templateRef"
              >
              </tab-label>
          </ng-container>
      </div>
      
      <tab-content
              *ngIf="activeTab"
              [template]="activeTab._contentComp ? activeTab._contentComp._templateRef : activeTab._tabTemplateRef"
      >
      </tab-content>
    

  `,
                styles: [":host{display:flex;flex-direction:column;position:relative}:host ::ng-deep .label_container{display:flex}:host ::ng-deep .label_container tab-label{cursor:pointer}"]
            }] }
];
/** @nocollapse */
TabsComponent.ctorParameters = () => [
    { type: ChangeDetectorRef }
];
TabsComponent.propDecorators = {
    contentList: [{ type: ContentChildren, args: [TabComponent,] }]
};
if (false) {
    /** @type {?} */
    TabsComponent.prototype.contentList;
    /** @type {?} */
    TabsComponent.prototype.activeTab;
    /** @type {?} */
    TabsComponent.prototype.selectTab;
    /**
     * @type {?}
     * @private
     */
    TabsComponent.prototype.cd;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFicy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AaW9uYXIvdWkvIiwic291cmNlcyI6WyJjb21wb25lbnRzL3RhYnMvY29udGFpbmVycy90YWJzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUVMLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsZUFBZSxFQUVmLFNBQVMsRUFDVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLENBQUMsTUFBTSxRQUFRLENBQUM7QUFDdkIsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBK0IxRCxNQUFNLE9BQU8sYUFBYTs7OztJQUt4QixZQUFvQixFQUFxQjtRQUFyQixPQUFFLEdBQUYsRUFBRSxDQUFtQjtRQVl6QyxjQUFTLEdBQUcsY0FBYyxDQUFDLEVBQUU7WUFDM0IsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxFQUFFO2dCQUM1QyxHQUFHLENBQUMsTUFBTSxHQUFHLENBQUMsS0FBSyxjQUFjLENBQUM7WUFDcEMsQ0FBQyxDQUFDLENBQUM7WUFDSCxJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLEVBQUUsRUFBRSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ3hFLENBQUMsQ0FBQztJQWhCRixDQUFDOzs7O0lBRUQsUUFBUTtJQUNSLENBQUM7Ozs7SUFFRCxlQUFlO1FBQ2IsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQy9DLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUM1QyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQzFCLENBQUM7OztZQTVDRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFNBQVM7Z0JBQ25CLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBd0JUOzthQUVGOzs7O1lBckNDLGlCQUFpQjs7OzBCQXVDaEIsZUFBZSxTQUFDLFlBQVk7Ozs7SUFBN0Isb0NBQW9FOztJQUVwRSxrQ0FBd0I7O0lBY3hCLGtDQUtFOzs7OztJQWpCVSwyQkFBNkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIEFmdGVyVmlld0luaXQsXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQ29tcG9uZW50LFxyXG4gIENvbnRlbnRDaGlsZHJlbixcclxuICBPbkluaXQsXHJcbiAgUXVlcnlMaXN0XHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XHJcbmltcG9ydCB7IFRhYkNvbXBvbmVudCB9IGZyb20gJy4uL2NvbXBvbmVudC90YWIuY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnaW8tdGFicycsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgICAgPG5nLXRlbXBsYXRlPlxyXG4gICAgICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxyXG4gICAgICA8L25nLXRlbXBsYXRlPlxyXG5cclxuICAgICAgPGRpdiBjbGFzcz1cImxhYmVsX2NvbnRhaW5lclwiPlxyXG4gICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgdGFiIG9mIGNvbnRlbnRMaXN0OyBsZXQgaSA9aW5kZXhcIj5cclxuICAgICAgICAgICAgICA8dGFiLWxhYmVsXHJcbiAgICAgICAgICAgICAgICAgICAgICBbbmdDbGFzc109XCJ0YWIuYWN0aXZlICYmICdhY3RpdmUnXCJcclxuICAgICAgICAgICAgICAgICAgICAgIChjbGljayk9XCJzZWxlY3RUYWIoaSlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgW3RleHRdPVwidGFiLmxhYmVsXCJcclxuICAgICAgICAgICAgICAgICAgICAgIFt0ZW1wbGF0ZV09XCJ0YWIuX2xhYmVsQ29tcD8uX3RlbXBsYXRlUmVmXCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPC90YWItbGFiZWw+XHJcbiAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIFxyXG4gICAgICA8dGFiLWNvbnRlbnRcclxuICAgICAgICAgICAgICAqbmdJZj1cImFjdGl2ZVRhYlwiXHJcbiAgICAgICAgICAgICAgW3RlbXBsYXRlXT1cImFjdGl2ZVRhYi5fY29udGVudENvbXAgPyBhY3RpdmVUYWIuX2NvbnRlbnRDb21wLl90ZW1wbGF0ZVJlZiA6IGFjdGl2ZVRhYi5fdGFiVGVtcGxhdGVSZWZcIlxyXG4gICAgICA+XHJcbiAgICAgIDwvdGFiLWNvbnRlbnQ+XHJcbiAgICBcclxuXHJcbiAgYCxcclxuICBzdHlsZVVybHM6IFsnLi90YWJzLmNvbXBvbmVudC5zY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIFRhYnNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQge1xyXG4gIEBDb250ZW50Q2hpbGRyZW4oVGFiQ29tcG9uZW50KSBjb250ZW50TGlzdDogUXVlcnlMaXN0PFRhYkNvbXBvbmVudD47XHJcblxyXG4gIGFjdGl2ZVRhYjogVGFiQ29tcG9uZW50O1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNkOiBDaGFuZ2VEZXRlY3RvclJlZikge1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLmFjdGl2ZVRhYiA9IHRoaXMuY29udGVudExpc3QudG9BcnJheSgpWzBdO1xyXG4gICAgdGhpcy5jb250ZW50TGlzdC50b0FycmF5KClbMF0uYWN0aXZlID0gdHJ1ZTtcclxuICAgIHRoaXMuY2QuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gIH1cclxuXHJcbiAgc2VsZWN0VGFiID0gc2VsZWN0ZWRfaW5kZXggPT4ge1xyXG4gICAgXy5lYWNoKHRoaXMuY29udGVudExpc3QudG9BcnJheSgpLCAodGFiLCBpKSA9PiB7XHJcbiAgICAgIHRhYi5hY3RpdmUgPSBpID09PSBzZWxlY3RlZF9pbmRleDtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5hY3RpdmVUYWIgPSBfLmZpbmQodGhpcy5jb250ZW50TGlzdC50b0FycmF5KCksIFsnYWN0aXZlJywgdHJ1ZV0pO1xyXG4gIH07XHJcbn1cclxuIl19