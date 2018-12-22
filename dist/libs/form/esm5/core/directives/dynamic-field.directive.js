/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ComponentFactoryResolver, Directive, EventEmitter, Input, ViewContainerRef } from '@angular/core';
import _ from 'lodash';
import { untilDestroyed } from '@ionar/utility';
import { InputComponent, MenuComponent, TextareaComponent, UploadComponent } from '../../ui';
var DynamicFieldDirective = /** @class */ (function () {
    function DynamicFieldDirective(_resolver, _vcRef) {
        var _this = this;
        this._resolver = _resolver;
        this._vcRef = _vcRef;
        this.components = {
            input: InputComponent,
            textarea: TextareaComponent,
            // select: AuroraSelectComponent,
            // datepicker: AuroraDatePickerComponent,
            // checkbox: AuroraCheckboxComponent,
            upload: UploadComponent,
            menu: MenuComponent
            // radio: AuroraRadioComponent
        };
        this.createComponent = function () {
            /** @type {?} */
            var component = _this.components[_this._controlConfig.type];
            /** @type {?} */
            var factory = _this._resolver.resolveComponentFactory(component);
            _this._compRef = _this._vcRef.createComponent(factory);
            _this.initContext();
        };
        this.initContext = function () {
            _this.parseContext();
        };
        this.updateContext = function () {
            _this.parseContext('updated');
            if (typeof _this._compRef.instance.ngOnChanges === 'function') {
                _this._compRef.instance.ngOnChanges();
            }
            else {
                throw new Error(_this._compRef.componentType.name + " doesn't implement 'ngOnChanges'");
            }
        };
        this.parseContext = function (status) {
            if (status === void 0) { status = 'initial'; }
            /** @type {?} */
            var context = tslib_1.__assign({ name: _this._controlConfig.name, invalid: _this._invalid }, _this._controlConfig.props, { value: _this._value, options: _this._options, readonly: _this._readonly, template: _this._template });
            _.forOwn(context, function (value, key) {
                if (value !== undefined)
                    _this._compRef.instance[key] = value;
            });
            if (status === 'initial') {
                _.forOwn(_this._events, function (value, key) {
                    if (!_this._compRef.instance[key])
                        _this._compRef.instance[key] = new EventEmitter();
                    _this._compRef.instance[key].pipe(untilDestroyed(_this)).subscribe(function (event) {
                        (value instanceof EventEmitter)
                            ? value.emit(event)
                            : value(event);
                    });
                });
            }
        };
    }
    /**
     * @return {?}
     */
    DynamicFieldDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.createComponent();
    };
    /**
     * @return {?}
     */
    DynamicFieldDirective.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        if (this._compRef) {
            this.updateContext();
        }
    };
    /**
     * @return {?}
     */
    DynamicFieldDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this._compRef)
            this._compRef.destroy();
    };
    DynamicFieldDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[dynamic_field]'
                },] }
    ];
    /** @nocollapse */
    DynamicFieldDirective.ctorParameters = function () { return [
        { type: ComponentFactoryResolver },
        { type: ViewContainerRef }
    ]; };
    DynamicFieldDirective.propDecorators = {
        _readonly: [{ type: Input, args: ['readonly',] }],
        _controlConfig: [{ type: Input, args: ['controlConfig',] }],
        _events: [{ type: Input, args: ['events',] }],
        _invalid: [{ type: Input, args: ['invalid',] }],
        _value: [{ type: Input, args: ['value',] }],
        _options: [{ type: Input, args: ['options',] }],
        _template: [{ type: Input, args: ['template',] }]
    };
    return DynamicFieldDirective;
}());
export { DynamicFieldDirective };
if (false) {
    /**
     * @type {?}
     * @private
     */
    DynamicFieldDirective.prototype._readonly;
    /**
     * @type {?}
     * @private
     */
    DynamicFieldDirective.prototype._controlConfig;
    /**
     * @type {?}
     * @private
     */
    DynamicFieldDirective.prototype._events;
    /**
     * @type {?}
     * @private
     */
    DynamicFieldDirective.prototype._invalid;
    /**
     * @type {?}
     * @private
     */
    DynamicFieldDirective.prototype._value;
    /**
     * @type {?}
     * @private
     */
    DynamicFieldDirective.prototype._options;
    /**
     * @type {?}
     * @private
     */
    DynamicFieldDirective.prototype._template;
    /**
     * @type {?}
     * @private
     */
    DynamicFieldDirective.prototype._compRef;
    /** @type {?} */
    DynamicFieldDirective.prototype.components;
    /** @type {?} */
    DynamicFieldDirective.prototype.createComponent;
    /**
     * @type {?}
     * @private
     */
    DynamicFieldDirective.prototype.initContext;
    /**
     * @type {?}
     * @private
     */
    DynamicFieldDirective.prototype.updateContext;
    /**
     * @type {?}
     * @private
     */
    DynamicFieldDirective.prototype.parseContext;
    /**
     * @type {?}
     * @private
     */
    DynamicFieldDirective.prototype._resolver;
    /**
     * @type {?}
     * @private
     */
    DynamicFieldDirective.prototype._vcRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHluYW1pYy1maWVsZC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AaW9uYXIvZm9ybS8iLCJzb3VyY2VzIjpbImNvcmUvZGlyZWN0aXZlcy9keW5hbWljLWZpZWxkLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFDTCx3QkFBd0IsRUFFeEIsU0FBUyxFQUNULFlBQVksRUFDWixLQUFLLEVBSUwsZ0JBQWdCLEVBQ2pCLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sQ0FBQyxNQUFNLFFBQVEsQ0FBQztBQUd2QixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDaEQsT0FBTyxFQUFFLGNBQWMsRUFBRSxhQUFhLEVBQUUsaUJBQWlCLEVBQUUsZUFBZSxFQUFFLE1BQU0sVUFBVSxDQUFDO0FBRzdGO0lBMkJFLCtCQUNVLFNBQW1DLEVBQ25DLE1BQXdCO1FBRmxDLGlCQUlDO1FBSFMsY0FBUyxHQUFULFNBQVMsQ0FBMEI7UUFDbkMsV0FBTSxHQUFOLE1BQU0sQ0FBa0I7UUFibEMsZUFBVSxHQUFHO1lBQ1gsS0FBSyxFQUFFLGNBQWM7WUFDckIsUUFBUSxFQUFFLGlCQUFpQjs7OztZQUkzQixNQUFNLEVBQUUsZUFBZTtZQUN2QixJQUFJLEVBQUUsYUFBYTtZQUNuQiw4QkFBOEI7U0FDL0IsQ0FBQztRQXVCRixvQkFBZSxHQUFHOztnQkFDVixTQUFTLEdBQUcsS0FBSSxDQUFDLFVBQVUsQ0FBQyxLQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQzs7Z0JBQ3JELE9BQU8sR0FBRyxLQUFJLENBQUMsU0FBUyxDQUFDLHVCQUF1QixDQUFNLFNBQVMsQ0FBQztZQUN0RSxLQUFJLENBQUMsUUFBUSxHQUFHLEtBQUksQ0FBQyxNQUFNLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ3JELEtBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNyQixDQUFDLENBQUM7UUFFTSxnQkFB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NEJBRWYsS0FBSyxTQUFDLFVBQVU7O0lBd0ZuQiw0QkFBQztDQUFBLEFBcEdELElBb0dDO1NBakdZLHFCQUFxQjs7Ozs7O0lBQ2hDLDBDQUE4Qzs7Ozs7SUFDOUMsK0NBQThEOzs7OztJQUM5RCx3Q0FBOEQ7Ozs7O0lBRTlELHlDQUE0Qzs7Ozs7SUFDNUMsdUNBQW9DOzs7OztJQUNwQyx5Q0FBd0M7Ozs7O0lBRXhDLDBDQUE4Qzs7Ozs7SUFFOUMseUNBQW9DOztJQUVwQywyQ0FTRTs7SUF1QkYsZ0RBS0U7Ozs7O0lBRUYsNENBRUU7Ozs7O0lBRUYsOENBUUU7Ozs7O0lBRUYsNkNBOEJFOzs7OztJQXZFQSwwQ0FBMkM7Ozs7O0lBQzNDLHVDQUFnQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxyXG4gIENvbXBvbmVudFJlZixcclxuICBEaXJlY3RpdmUsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIElucHV0LFxyXG4gIE9uQ2hhbmdlcyxcclxuICBPbkRlc3Ryb3ksXHJcbiAgT25Jbml0LFxyXG4gIFZpZXdDb250YWluZXJSZWZcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XHJcbmltcG9ydCB7IENvbnRyb2xDb25maWcgfSBmcm9tICcuLi9tb2RlbHMvQ29udHJvbENvbmZpZyc7XHJcblxyXG5pbXBvcnQgeyB1bnRpbERlc3Ryb3llZCB9IGZyb20gJ0Bpb25hci91dGlsaXR5JztcclxuaW1wb3J0IHsgSW5wdXRDb21wb25lbnQsIE1lbnVDb21wb25lbnQsIFRleHRhcmVhQ29tcG9uZW50LCBVcGxvYWRDb21wb25lbnQgfSBmcm9tICcuLi8uLi91aSc7XHJcblxyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdbZHluYW1pY19maWVsZF0nXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEeW5hbWljRmllbGREaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSwgT25DaGFuZ2VzIHtcclxuICBASW5wdXQoJ3JlYWRvbmx5JykgcHJpdmF0ZSBfcmVhZG9ubHk6IEJvb2xlYW47XHJcbiAgQElucHV0KCdjb250cm9sQ29uZmlnJykgcHJpdmF0ZSBfY29udHJvbENvbmZpZzogQ29udHJvbENvbmZpZztcclxuICBASW5wdXQoJ2V2ZW50cycpIHByaXZhdGUgX2V2ZW50czogeyBba2V5OiBzdHJpbmddOiBGdW5jdGlvbiB9O1xyXG5cclxuICBASW5wdXQoJ2ludmFsaWQnKSBwcml2YXRlIF9pbnZhbGlkOiBCb29sZWFuO1xyXG4gIEBJbnB1dCgndmFsdWUnKSBwcml2YXRlIF92YWx1ZTogYW55O1xyXG4gIEBJbnB1dCgnb3B0aW9ucycpIHByaXZhdGUgX29wdGlvbnM6IGFueTtcclxuXHJcbiAgQElucHV0KCd0ZW1wbGF0ZScpIHByaXZhdGUgX3RlbXBsYXRlOiBCb29sZWFuO1xyXG5cclxuICBwcml2YXRlIF9jb21wUmVmOiBDb21wb25lbnRSZWY8YW55PjtcclxuXHJcbiAgY29tcG9uZW50cyA9IHtcclxuICAgIGlucHV0OiBJbnB1dENvbXBvbmVudCxcclxuICAgIHRleHRhcmVhOiBUZXh0YXJlYUNvbXBvbmVudCxcclxuICAgIC8vIHNlbGVjdDogQXVyb3JhU2VsZWN0Q29tcG9uZW50LFxyXG4gICAgLy8gZGF0ZXBpY2tlcjogQXVyb3JhRGF0ZVBpY2tlckNvbXBvbmVudCxcclxuICAgIC8vIGNoZWNrYm94OiBBdXJvcmFDaGVja2JveENvbXBvbmVudCxcclxuICAgIHVwbG9hZDogVXBsb2FkQ29tcG9uZW50LFxyXG4gICAgbWVudTogTWVudUNvbXBvbmVudFxyXG4gICAgLy8gcmFkaW86IEF1cm9yYVJhZGlvQ29tcG9uZW50XHJcbiAgfTtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIF9yZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxyXG4gICAgcHJpdmF0ZSBfdmNSZWY6IFZpZXdDb250YWluZXJSZWZcclxuICApIHtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTtcclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKCkge1xyXG5cclxuICAgIGlmICh0aGlzLl9jb21wUmVmKSB7XHJcbiAgICAgIHRoaXMudXBkYXRlQ29udGV4dCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICBpZiAodGhpcy5fY29tcFJlZikgdGhpcy5fY29tcFJlZi5kZXN0cm95KCk7XHJcbiAgfVxyXG5cclxuICBjcmVhdGVDb21wb25lbnQgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBjb21wb25lbnQgPSB0aGlzLmNvbXBvbmVudHNbdGhpcy5fY29udHJvbENvbmZpZy50eXBlXTtcclxuICAgIGNvbnN0IGZhY3RvcnkgPSB0aGlzLl9yZXNvbHZlci5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeTxhbnk+KGNvbXBvbmVudCk7XHJcbiAgICB0aGlzLl9jb21wUmVmID0gdGhpcy5fdmNSZWYuY3JlYXRlQ29tcG9uZW50KGZhY3RvcnkpO1xyXG4gICAgdGhpcy5pbml0Q29udGV4dCgpO1xyXG4gIH07XHJcblxyXG4gIHByaXZhdGUgaW5pdENvbnRleHQgPSAoKSA9PiB7XHJcbiAgICB0aGlzLnBhcnNlQ29udGV4dCgpO1xyXG4gIH07XHJcblxyXG4gIHByaXZhdGUgdXBkYXRlQ29udGV4dCA9ICgpID0+IHtcclxuICAgIHRoaXMucGFyc2VDb250ZXh0KCd1cGRhdGVkJyk7XHJcbiAgICBpZiAodHlwZW9mIHRoaXMuX2NvbXBSZWYuaW5zdGFuY2UubmdPbkNoYW5nZXMgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgdGhpcy5fY29tcFJlZi5pbnN0YW5jZS5uZ09uQ2hhbmdlcygpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKGAke3RoaXMuX2NvbXBSZWYuY29tcG9uZW50VHlwZS5uYW1lfSBkb2Vzbid0IGltcGxlbWVudCAnbmdPbkNoYW5nZXMnYCk7XHJcbiAgICB9XHJcblxyXG4gIH07XHJcblxyXG4gIHByaXZhdGUgcGFyc2VDb250ZXh0ID0gKHN0YXR1cyA9ICdpbml0aWFsJykgPT4ge1xyXG4gICAgY29uc3QgY29udGV4dCA9IHtcclxuICAgICAgbmFtZTogdGhpcy5fY29udHJvbENvbmZpZy5uYW1lLFxyXG4gICAgICBpbnZhbGlkOiB0aGlzLl9pbnZhbGlkLFxyXG4gICAgICAuLi50aGlzLl9jb250cm9sQ29uZmlnLnByb3BzLFxyXG4gICAgICB2YWx1ZTogdGhpcy5fdmFsdWUsXHJcbiAgICAgIG9wdGlvbnM6IHRoaXMuX29wdGlvbnMsXHJcbiAgICAgIHJlYWRvbmx5OiB0aGlzLl9yZWFkb25seSxcclxuICAgICAgdGVtcGxhdGU6IHRoaXMuX3RlbXBsYXRlXHJcbiAgICB9O1xyXG5cclxuICAgIF8uZm9yT3duKGNvbnRleHQsICh2YWx1ZSwga2V5KSA9PiB7XHJcbiAgICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkKSB0aGlzLl9jb21wUmVmLmluc3RhbmNlW2tleV0gPSB2YWx1ZTtcclxuICAgIH0pO1xyXG5cclxuICAgIGlmIChzdGF0dXMgPT09ICdpbml0aWFsJykge1xyXG4gICAgICBfLmZvck93bih0aGlzLl9ldmVudHMsICh2YWx1ZSwga2V5KSA9PiB7XHJcblxyXG4gICAgICAgIGlmICghdGhpcy5fY29tcFJlZi5pbnN0YW5jZVtrZXldKVxyXG4gICAgICAgICAgdGhpcy5fY29tcFJlZi5pbnN0YW5jZVtrZXldID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICAgICAgICB0aGlzLl9jb21wUmVmLmluc3RhbmNlW2tleV0ucGlwZSh1bnRpbERlc3Ryb3llZCh0aGlzKSkuc3Vic2NyaWJlKGV2ZW50ID0+IHtcclxuICAgICAgICAgICh2YWx1ZSBpbnN0YW5jZW9mIEV2ZW50RW1pdHRlcilcclxuICAgICAgICAgICAgPyB2YWx1ZS5lbWl0KGV2ZW50KVxyXG4gICAgICAgICAgICA6IHZhbHVlKGV2ZW50KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICB9O1xyXG59XHJcbiJdfQ==