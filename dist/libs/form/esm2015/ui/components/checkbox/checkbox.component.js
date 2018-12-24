/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';
export class CheckboxComponent {
    constructor() {
        this.title = '';
        this.value = false;
        this.change = new EventEmitter();
        this.blur = new EventEmitter();
        this.invalid = false;
        this.onClick = () => {
            this.value = !this.value;
            this.change.emit(this.value);
        };
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
CheckboxComponent.decorators = [
    { type: Component, args: [{
                selector: 'io-checkbox',
                template: "<div class=\"checkbox\" [class.active]=\"value\">\n    <i class=\"fas fa-check icon\"></i>\n</div>\n<p class=\"label\">{{label}}</p>\n\n\n",
                styles: [":host{display:flex;align-items:center}:host .checkbox{background-color:#fff;border-radius:.3em;box-sizing:border-box;border:1px solid #d9d9d9;display:flex;align-items:center;justify-content:center;margin-right:.3em;padding:0;touch-action:manipulation;transition:.3s;width:1.8em;height:1.8em}:host .checkbox:hover{border-color:#1890ff}:host .checkbox.active{background-color:#1890ff;border-color:#1890ff}:host .icon{color:#fff}"]
            }] }
];
/** @nocollapse */
CheckboxComponent.ctorParameters = () => [];
CheckboxComponent.propDecorators = {
    label: [{ type: Input }],
    title: [{ type: Input }],
    value: [{ type: Input }],
    change: [{ type: Output }],
    blur: [{ type: Output }],
    invalid: [{ type: Input }],
    onClick: [{ type: HostListener, args: ['click',] }]
};
if (false) {
    /** @type {?} */
    CheckboxComponent.prototype.label;
    /** @type {?} */
    CheckboxComponent.prototype.title;
    /** @type {?} */
    CheckboxComponent.prototype.value;
    /** @type {?} */
    CheckboxComponent.prototype.change;
    /** @type {?} */
    CheckboxComponent.prototype.blur;
    /** @type {?} */
    CheckboxComponent.prototype.invalid;
    /** @type {?} */
    CheckboxComponent.prototype.onClick;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tib3guY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGlvbmFyL2Zvcm0vIiwic291cmNlcyI6WyJ1aS9jb21wb25lbnRzL2NoZWNrYm94L2NoZWNrYm94LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBVSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFPN0YsTUFBTSxPQUFPLGlCQUFpQjtJQWdCNUI7UUFiUyxVQUFLLEdBQVEsRUFBRSxDQUFDO1FBQ2hCLFVBQUssR0FBWSxLQUFLLENBQUM7UUFDdEIsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDNUIsU0FBSSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDM0IsWUFBTyxHQUFZLEtBQUssQ0FBQztRQUlsQyxZQUFPLEdBQUcsR0FBRyxFQUFFO1lBQ2IsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7WUFDekIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQy9CLENBQUMsQ0FBQztJQUdGLENBQUM7Ozs7SUFFRCxRQUFRO0lBQ1IsQ0FBQzs7O1lBekJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsYUFBYTtnQkFDdkIsc0pBQXdDOzthQUV6Qzs7Ozs7b0JBR0UsS0FBSztvQkFDTCxLQUFLO29CQUNMLEtBQUs7cUJBQ0wsTUFBTTttQkFDTixNQUFNO3NCQUNOLEtBQUs7c0JBR0wsWUFBWSxTQUFDLE9BQU87Ozs7SUFSckIsa0NBQXVCOztJQUN2QixrQ0FBeUI7O0lBQ3pCLGtDQUFnQzs7SUFDaEMsbUNBQXNDOztJQUN0QyxpQ0FBb0M7O0lBQ3BDLG9DQUFrQzs7SUFHbEMsb0NBSUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSG9zdExpc3RlbmVyLCBJbnB1dCwgT25Jbml0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnaW8tY2hlY2tib3gnLFxuICB0ZW1wbGF0ZVVybDogJy4vY2hlY2tib3guY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9jaGVja2JveC5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIENoZWNrYm94Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBASW5wdXQoKSBsYWJlbDogc3RyaW5nO1xuICBASW5wdXQoKSB0aXRsZTogYW55ID0gJyc7XG4gIEBJbnB1dCgpIHZhbHVlOiBCb29sZWFuID0gZmFsc2U7XG4gIEBPdXRwdXQoKSBjaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBibHVyID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBASW5wdXQoKSBpbnZhbGlkOiBCb29sZWFuID0gZmFsc2U7XG5cblxuICBASG9zdExpc3RlbmVyKCdjbGljaycpXG4gIG9uQ2xpY2sgPSAoKSA9PiB7XG4gICAgdGhpcy52YWx1ZSA9ICF0aGlzLnZhbHVlO1xuICAgIHRoaXMuY2hhbmdlLmVtaXQodGhpcy52YWx1ZSk7XG4gIH07XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxufVxuIl19