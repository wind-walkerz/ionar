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
                template: "<img [src]=\"image\" alt=\"\">\n\n<p>{{name}}</p>\n\n<i class=\"fas fa-times remove-icon\"></i>",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AaW9uYXIvZm9ybS8iLCJzb3VyY2VzIjpbInVpL2NvbXBvbmVudHMvdXBsb2FkL2NvbXBvbmVudHMvZmlsZS9maWxlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGlCQUFpQixFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQW9DLE1BQU0sZUFBZSxDQUFDO0FBT3RHLE1BQU0sT0FBTyxhQUFhOzs7OztJQVF4QixZQUFvQixFQUFxQjtRQUFyQixPQUFFLEdBQUYsRUFBRSxDQUFtQjtRQUh6QyxTQUFJLEdBQUcsRUFBRSxDQUFDO0lBSVYsQ0FBQzs7OztJQUVELFFBQVE7O2NBQ0EsTUFBTSxHQUFlLElBQUksVUFBVSxFQUFFO1FBQzNDLE1BQU0sQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2hDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsR0FBRyxFQUFFO1lBQ25CLElBQUksQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQztZQUUzQixzREFBc0Q7WUFDdEQsSUFBSSxDQUFDLEVBQUUsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUN6QixDQUFDLENBQUM7SUFDSixDQUFDOzs7Ozs7SUFNRCxXQUFXLENBQUMsT0FBc0I7SUFFbEMsQ0FBQztJQUFBLENBQUM7OztZQWpDSCxTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLE1BQU07Z0JBQ2hCLDJHQUFvQzs7YUFFckM7Ozs7WUFOUSxpQkFBaUI7OzttQkFVdkIsS0FBSzs7OztJQUFOLDZCQUFjOztJQUNkLDhCQUFNOztJQUNOLDZCQUFVOzs7OztJQUdFLDJCQUE2QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdG9yUmVmLCBDb21wb25lbnQsIElucHV0LCBPbkNoYW5nZXMsIE9uSW5pdCwgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdmaWxlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2ZpbGUuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9maWxlLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgRmlsZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcbiAgLy8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gIFZhcmlhYmxlcyAgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLy8vXG5cbiAgQElucHV0KCkgZGF0YTtcbiAgaW1hZ2U7XG4gIG5hbWUgPSAnJztcblxuICAvLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAgTGlmZSBDeWNsZSBIb29rICAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0vLy9cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjZDogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGNvbnN0IHJlYWRlcjogRmlsZVJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwodGhpcy5kYXRhKTtcbiAgICByZWFkZXIub25sb2FkID0gKCkgPT4ge1xuICAgICAgdGhpcy5pbWFnZSA9IHJlYWRlci5yZXN1bHQ7XG5cbiAgICAgIC8vIG5lZWQgdG8gcnVuIENEIHNpbmNlIGZpbGUgbG9hZCBydW5zIG91dHNpZGUgb2Ygem9uZVxuICAgICAgdGhpcy5jZC5tYXJrRm9yQ2hlY2soKTtcbiAgICB9O1xuICB9XG5cblxuICAvLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAgTWFpbiBGdW5jdGlvbnMgICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS8vL1xuXG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuXG4gIH07XG5cblxufVxuIl19