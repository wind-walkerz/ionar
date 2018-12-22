/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectorRef, Component, Input } from '@angular/core';
export class FileComponent {
    ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///
    /**
     * @param {?} cd
     */
    constructor(cd) {
        this.cd = cd;
        this.name = '';
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        /** @type {?} */
        const reader = new FileReader();
        reader.readAsDataURL(this.data);
        reader.onload = () => {
            this.image = reader.result;
            // need to run CD since file load runs outside of zone
            this.cd.markForCheck();
        };
    }
    ///-----------------------------------------------  Main Functions   -----------------------------------------------///
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
    }
    ;
}
FileComponent.decorators = [
    { type: Component, args: [{
                selector: 'file',
                template: "<img [src]=\"image\" alt=\"\">\r\n\r\n<p>{{name}}</p>\r\n\r\n<i class=\"fas fa-times remove-icon\"></i>",
                styles: [":host{border:1px dashed #d9d9d9;border-radius:.4rem;display:flex;margin-top:1rem;padding:.8rem;width:100%;height:6.6rem}:host img{width:5rem;height:5rem}:host p{margin-left:2rem}:host .remove-icon{color:#f5222d;font-size:1.2rem;margin-left:auto}"]
            }] }
];
/** @nocollapse */
FileComponent.ctorParameters = () => [
    { type: ChangeDetectorRef }
];
FileComponent.propDecorators = {
    data: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    FileComponent.prototype.data;
    /** @type {?} */
    FileComponent.prototype.image;
    /** @type {?} */
    FileComponent.prototype.name;
    /**
     * @type {?}
     * @private
     */
    FileComponent.prototype.cd;
    /* Skipping unhandled member: ;*/
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AaW9uYXIvZm9ybS8iLCJzb3VyY2VzIjpbInVpL2NvbXBvbmVudHMvdXBsb2FkL2NvbXBvbmVudHMvZmlsZS9maWxlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGlCQUFpQixFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQW9DLE1BQU0sZUFBZSxDQUFDO0FBT3RHLE1BQU0sT0FBTyxhQUFhOzs7OztJQVF4QixZQUFvQixFQUFxQjtRQUFyQixPQUFFLEdBQUYsRUFBRSxDQUFtQjtRQUh6QyxTQUFJLEdBQUcsRUFBRSxDQUFDO0lBSVYsQ0FBQzs7OztJQUVELFFBQVE7O2NBQ0EsTUFBTSxHQUFlLElBQUksVUFBVSxFQUFFO1FBQzNDLE1BQU0sQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2hDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsR0FBRyxFQUFFO1lBQ25CLElBQUksQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQztZQUUzQixzREFBc0Q7WUFDdEQsSUFBSSxDQUFDLEVBQUUsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUN6QixDQUFDLENBQUM7SUFDSixDQUFDOzs7Ozs7SUFNRCxXQUFXLENBQUMsT0FBc0I7SUFFbEMsQ0FBQztJQUFBLENBQUM7OztZQWpDSCxTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLE1BQU07Z0JBQ2hCLG1IQUFvQzs7YUFFckM7Ozs7WUFOUSxpQkFBaUI7OzttQkFVdkIsS0FBSzs7OztJQUFOLDZCQUFjOztJQUNkLDhCQUFNOztJQUNOLDZCQUFVOzs7OztJQUdFLDJCQUE2QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdG9yUmVmLCBDb21wb25lbnQsIElucHV0LCBPbkNoYW5nZXMsIE9uSW5pdCwgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdmaWxlJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vZmlsZS5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vZmlsZS5jb21wb25lbnQuc2NzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGaWxlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xyXG4gIC8vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICBWYXJpYWJsZXMgICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS8vL1xyXG5cclxuICBASW5wdXQoKSBkYXRhO1xyXG4gIGltYWdlO1xyXG4gIG5hbWUgPSAnJztcclxuXHJcbiAgLy8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gIExpZmUgQ3ljbGUgSG9vayAgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLy8vXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjZDogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgY29uc3QgcmVhZGVyOiBGaWxlUmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcclxuICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKHRoaXMuZGF0YSk7XHJcbiAgICByZWFkZXIub25sb2FkID0gKCkgPT4ge1xyXG4gICAgICB0aGlzLmltYWdlID0gcmVhZGVyLnJlc3VsdDtcclxuXHJcbiAgICAgIC8vIG5lZWQgdG8gcnVuIENEIHNpbmNlIGZpbGUgbG9hZCBydW5zIG91dHNpZGUgb2Ygem9uZVxyXG4gICAgICB0aGlzLmNkLm1hcmtGb3JDaGVjaygpO1xyXG4gICAgfTtcclxuICB9XHJcblxyXG5cclxuICAvLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAgTWFpbiBGdW5jdGlvbnMgICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS8vL1xyXG5cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xyXG5cclxuICB9O1xyXG5cclxuXHJcbn1cclxuIl19