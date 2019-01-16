"use strict";
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var lodash_1 = tslib_1.__importDefault(require("lodash"));
var SelectComponent = /** @class */ (function () {
    ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///
    function SelectComponent(eRef) {
        var _this = this;
        this.eRef = eRef;
        ///-----------------------------------------------  Variables   -----------------------------------------------///
        this.show_menu = false;
        this.selected_option = null;
        this.options = null;
        this.value = null;
        this.change = new core_1.EventEmitter();
        this.blur = new core_1.EventEmitter();
        this.invalid = false;
        ///-----------------------------------------------  General Functions   -----------------------------------------------///
        this.onToggleMenu = function () {
            _this.show_menu = !_this.show_menu;
        };
        this.onChange = function (option) {
            _this.options = lodash_1.default.map(_this.options, function (item) {
                item.selected = lodash_1.default.isEqual(item, option);
                _this.selected_option = item;
                return item;
            });
            _this.show_menu = false;
            _this.change.emit(_this.selected_option.value);
        };
    }
    /**
     * @return {?}
     */
    SelectComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (this.value) {
            this.selected_option = lodash_1.default.find(this.options, ['value', this.value.toString()]);
        }
    };
    ///-----------------------------------------------  Host   -----------------------------------------------///
    ///-----------------------------------------------  Host   -----------------------------------------------///
    /**
     * @param {?} event
     * @return {?}
     */
    SelectComponent.prototype.clickout = 
    ///-----------------------------------------------  Host   -----------------------------------------------///
    /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (!this.eRef.nativeElement.contains(event.target)) {
            this.show_menu = false;
        }
    };
    SelectComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'io-select',
                    template: "<control\n        [label]=\"selected_option?.label\"\n        [show_menu]=\"show_menu\"\n        (click)=\"onToggleMenu()\"\n></control>\n\n<menu\n        [options]=\"options\"\n        (onSelectOption)=\"onChange($event)\"\n        *ngIf=\"show_menu\"\n></menu>",
                    styles: [":host{display:flex;position:relative;flex:1}"]
                }] }
    ];
    /** @nocollapse */
    SelectComponent.ctorParameters = function () { return [
        { type: core_1.ElementRef }
    ]; };
    SelectComponent.propDecorators = {
        options: [{ type: core_1.Input }],
        value: [{ type: core_1.Input }],
        change: [{ type: core_1.Output }],
        blur: [{ type: core_1.Output }],
        invalid: [{ type: core_1.Input }],
        clickout: [{ type: core_1.HostListener, args: ['document:click', ['$event'],] }]
    };
    return SelectComponent;
}());
exports.SelectComponent = SelectComponent;
if (false) {
    /** @type {?} */
    SelectComponent.prototype.show_menu;
    /** @type {?} */
    SelectComponent.prototype.selected_option;
    /** @type {?} */
    SelectComponent.prototype.options;
    /** @type {?} */
    SelectComponent.prototype.value;
    /** @type {?} */
    SelectComponent.prototype.change;
    /** @type {?} */
    SelectComponent.prototype.blur;
    /** @type {?} */
    SelectComponent.prototype.invalid;
    /** @type {?} */
    SelectComponent.prototype.onToggleMenu;
    /** @type {?} */
    SelectComponent.prototype.onChange;
    /**
     * @type {?}
     * @private
     */
    SelectComponent.prototype.eRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bpb25hci9mb3JtLyIsInNvdXJjZXMiOlsidWkvY29tcG9uZW50cy9zZWxlY3QvY29udGFpbmVyL3NlbGVjdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBLHNDQUF5RztBQUN6RywwREFBdUI7QUFHdkI7SUFrQkUsd0hBQXdIO0lBRXhILHlCQUFvQixJQUFnQjtRQUFwQyxpQkFDQztRQURtQixTQUFJLEdBQUosSUFBSSxDQUFZOztRQVhwQyxjQUFTLEdBQVksS0FBSyxDQUFDO1FBQzNCLG9CQUFlLEdBQVEsSUFBSSxDQUFDO1FBQ25CLFlBQU8sR0FBUSxJQUFJLENBQUM7UUFDcEIsVUFBSyxHQUFHLElBQUksQ0FBQztRQUNaLFdBQU0sR0FBRyxJQUFJLG1CQUFZLEVBQUUsQ0FBQztRQUM1QixTQUFJLEdBQUcsSUFBSSxtQkFBWSxFQUFFLENBQUM7UUFDM0IsWUFBTyxHQUFZLEtBQUssQ0FBQzs7UUFpQmxDLGlCQUFZLEdBQUc7WUFDYixLQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsS0FBSSxDQUFDLFNBQVMsQ0FBQztRQUNuQyxDQUFDLENBQUM7UUFHRixhQUFRLEdBQUcsVUFBQSxNQUFNO1lBRWYsS0FBSSxDQUFDLE9BQU8sR0FBRyxnQkFBQyxDQUFDLEdBQUcsQ0FBQyxLQUFJLENBQUMsT0FBTyxFQUFFLFVBQUMsSUFBbUQ7Z0JBQ3JGLElBQUksQ0FBQyxRQUFRLEdBQUcsZ0JBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDO2dCQUN4QyxLQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztnQkFDNUIsT0FBTyxJQUFJLENBQUM7WUFDZCxDQUFDLENBQUMsQ0FBQztZQUNILEtBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1lBRXZCLEtBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFL0MsQ0FBQyxDQUFDO0lBM0JGLENBQUM7Ozs7SUFFRCxrQ0FBUTs7O0lBQVI7UUFDRSxJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDZCxJQUFJLENBQUMsZUFBZSxHQUFHLGdCQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUM7U0FDL0U7SUFDSCxDQUFDO0lBdUJELDZHQUE2Rzs7Ozs7O0lBRzdHLGtDQUFROzs7Ozs7SUFEUixVQUNTLEtBQUs7UUFDWixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUNuRCxJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztTQUN4QjtJQUNILENBQUM7O2dCQXpERixnQkFBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxXQUFXO29CQUNyQixrUkFBc0M7O2lCQUV2Qzs7OztnQkFSbUIsaUJBQVU7OzswQkFlM0IsWUFBSzt3QkFDTCxZQUFLO3lCQUNMLGFBQU07dUJBQ04sYUFBTTswQkFDTixZQUFLOzJCQXFDTCxtQkFBWSxTQUFDLGdCQUFnQixFQUFFLENBQUMsUUFBUSxDQUFDOztJQVE1QyxzQkFBQztDQUFBLEFBNURELElBNERDO0FBdERZLDBDQUFlOzs7SUFHMUIsb0NBQTJCOztJQUMzQiwwQ0FBNEI7O0lBQzVCLGtDQUE2Qjs7SUFDN0IsZ0NBQXNCOztJQUN0QixpQ0FBc0M7O0lBQ3RDLCtCQUFvQzs7SUFDcEMsa0NBQWtDOztJQWlCbEMsdUNBRUU7O0lBR0YsbUNBV0U7Ozs7O0lBNUJVLCtCQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBIb3N0TGlzdGVuZXIsIElucHV0LCBPbkluaXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnaW8tc2VsZWN0JyxcclxuICB0ZW1wbGF0ZVVybDogJy4vc2VsZWN0LmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9zZWxlY3QuY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFNlbGVjdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIC8vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICBWYXJpYWJsZXMgICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS8vL1xyXG4gIHNob3dfbWVudTogQm9vbGVhbiA9IGZhbHNlO1xyXG4gIHNlbGVjdGVkX29wdGlvbjogYW55ID0gbnVsbDtcclxuICBASW5wdXQoKSBvcHRpb25zOiBhbnkgPSBudWxsO1xyXG4gIEBJbnB1dCgpIHZhbHVlID0gbnVsbDtcclxuICBAT3V0cHV0KCkgY2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSBibHVyID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBJbnB1dCgpIGludmFsaWQ6IEJvb2xlYW4gPSBmYWxzZTtcclxuXHJcblxyXG4gIC8vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICBMaWZlIEN5Y2xlIEhvb2sgICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS8vL1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVSZWY6IEVsZW1lbnRSZWYpIHtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgaWYgKHRoaXMudmFsdWUpIHtcclxuICAgICAgdGhpcy5zZWxlY3RlZF9vcHRpb24gPSBfLmZpbmQodGhpcy5vcHRpb25zLCBbJ3ZhbHVlJywgdGhpcy52YWx1ZS50b1N0cmluZygpXSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAgR2VuZXJhbCBGdW5jdGlvbnMgICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS8vL1xyXG5cclxuXHJcbiAgb25Ub2dnbGVNZW51ID0gKCkgPT4ge1xyXG4gICAgdGhpcy5zaG93X21lbnUgPSAhdGhpcy5zaG93X21lbnU7XHJcbiAgfTtcclxuXHJcblxyXG4gIG9uQ2hhbmdlID0gb3B0aW9uID0+IHtcclxuXHJcbiAgICB0aGlzLm9wdGlvbnMgPSBfLm1hcCh0aGlzLm9wdGlvbnMsIChpdGVtOiB7IHZhbHVlOiBhbnksIGxhYmVsOiBhbnksIHNlbGVjdGVkOiBCb29sZWFuIH0pID0+IHtcclxuICAgICAgaXRlbS5zZWxlY3RlZCA9IF8uaXNFcXVhbChpdGVtLCBvcHRpb24pO1xyXG4gICAgICB0aGlzLnNlbGVjdGVkX29wdGlvbiA9IGl0ZW07XHJcbiAgICAgIHJldHVybiBpdGVtO1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLnNob3dfbWVudSA9IGZhbHNlO1xyXG5cclxuICAgIHRoaXMuY2hhbmdlLmVtaXQodGhpcy5zZWxlY3RlZF9vcHRpb24udmFsdWUpO1xyXG5cclxuICB9O1xyXG5cclxuICAvLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAgSG9zdCAgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLy8vXHJcblxyXG4gIEBIb3N0TGlzdGVuZXIoJ2RvY3VtZW50OmNsaWNrJywgWyckZXZlbnQnXSlcclxuICBjbGlja291dChldmVudCkge1xyXG4gICAgaWYgKCF0aGlzLmVSZWYubmF0aXZlRWxlbWVudC5jb250YWlucyhldmVudC50YXJnZXQpKSB7XHJcbiAgICAgIHRoaXMuc2hvd19tZW51ID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuXHJcbn1cclxuIl19