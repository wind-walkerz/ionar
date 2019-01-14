/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectorRef, Component, ElementRef, Input } from '@angular/core';
import { IoFormFieldUI } from '../../interfaces/IoFormFieldUI';
export class TextareaComponent extends IoFormFieldUI {
    ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///
    /**
     * @param {?} cd
     * @param {?} el
     */
    constructor(cd, el) {
        super(cd, el);
        ///-----------------------------------------------  Variables   -----------------------------------------------///
        this.name = '';
        this.value = '';
        this.placeholder = '';
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        super.ngOnInit();
        this.setContext({
            name: this.name,
            value: this.value,
            placeholder: this.placeholder
        });
    }
}
TextareaComponent.decorators = [
    { type: Component, args: [{
                selector: 'io-textarea',
                template: "<textarea\r\n        [name]=\"name\"\r\n        [value]=\"value\"\r\n        [class.invalid]=\"invalid\"\r\n        cols=\"1\" rows=\"1\"\r\n        [placeholder]=\"placeholder\"\r\n\r\n        (change)=\"$event.stopPropagation(); change.emit($event.target.value);\"\r\n        (blur)=\"blur.emit()\"\r\n></textarea>\r\n",
                styles: [":host{display:flex;flex:1}textarea{border:none;font-size:1.5rem;padding:1rem;width:100%;max-width:100%;overflow-y:scroll}"]
            }] }
];
/** @nocollapse */
TextareaComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef }
];
TextareaComponent.propDecorators = {
    name: [{ type: Input }],
    value: [{ type: Input }],
    placeholder: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    TextareaComponent.prototype.name;
    /** @type {?} */
    TextareaComponent.prototype.value;
    /** @type {?} */
    TextareaComponent.prototype.placeholder;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dGFyZWEuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGlvbmFyL2Zvcm0vIiwic291cmNlcyI6WyJ1aS9jb21wb25lbnRzL3RleHRhcmVhL3RleHRhcmVhLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLGlCQUFpQixFQUNqQixTQUFTLEVBQUUsVUFBVSxFQUVyQixLQUFLLEVBS04sTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBTy9ELE1BQU0sT0FBTyxpQkFBa0IsU0FBUSxhQUFhOzs7Ozs7SUFRbEQsWUFDRSxFQUFxQixFQUNyQixFQUFjO1FBRWQsS0FBSyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQzs7UUFWUCxTQUFJLEdBQVcsRUFBRSxDQUFDO1FBQ2xCLFVBQUssR0FBUSxFQUFFLENBQUM7UUFDaEIsZ0JBQVcsR0FBUSxFQUFFLENBQUM7SUFTL0IsQ0FBQzs7OztJQUVELFFBQVE7UUFDTixLQUFLLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDakIsSUFBSSxDQUFDLFVBQVUsQ0FBQztZQUNkLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtZQUNmLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSztZQUNqQixXQUFXLEVBQUUsSUFBSSxDQUFDLFdBQVc7U0FDOUIsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7O1lBM0JGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsYUFBYTtnQkFDdkIsNFVBQXdDOzthQUV6Qzs7OztZQWZDLGlCQUFpQjtZQUNOLFVBQVU7OzttQkFpQnBCLEtBQUs7b0JBQ0wsS0FBSzswQkFDTCxLQUFLOzs7O0lBRk4saUNBQTJCOztJQUMzQixrQ0FBeUI7O0lBQ3pCLHdDQUErQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgT25Jbml0LFxuICBPdXRwdXQsXG4gIFNpbXBsZUNoYW5nZXNcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJb0Zvcm1GaWVsZFVJIH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcy9Jb0Zvcm1GaWVsZFVJJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnaW8tdGV4dGFyZWEnLFxuICB0ZW1wbGF0ZVVybDogYC4vdGV4dGFyZWEuY29tcG9uZW50Lmh0bWxgLFxuICBzdHlsZVVybHM6IFsnLi90ZXh0YXJlYS5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIFRleHRhcmVhQ29tcG9uZW50IGV4dGVuZHMgSW9Gb3JtRmllbGRVSSB7XG4gIC8vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICBWYXJpYWJsZXMgICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS8vL1xuICBASW5wdXQoKSBuYW1lOiBzdHJpbmcgPSAnJztcbiAgQElucHV0KCkgdmFsdWU6IGFueSA9ICcnO1xuICBASW5wdXQoKSBwbGFjZWhvbGRlcjogYW55ID0gJyc7XG5cblxuICAvLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAgTGlmZSBDeWNsZSBIb29rICAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0vLy9cbiAgY29uc3RydWN0b3IoXG4gICAgY2Q6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIGVsOiBFbGVtZW50UmVmXG4gICkge1xuICAgIHN1cGVyKGNkLCBlbCk7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBzdXBlci5uZ09uSW5pdCgpO1xuICAgIHRoaXMuc2V0Q29udGV4dCh7XG4gICAgICBuYW1lOiB0aGlzLm5hbWUsXG4gICAgICB2YWx1ZTogdGhpcy52YWx1ZSxcbiAgICAgIHBsYWNlaG9sZGVyOiB0aGlzLnBsYWNlaG9sZGVyXG4gICAgfSk7XG4gIH1cblxuICAvLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAgTWFpbiBGdW5jdGlvbnMgICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS8vL1xuXG59XG4iXX0=