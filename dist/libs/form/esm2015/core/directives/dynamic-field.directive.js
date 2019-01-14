/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ComponentFactoryResolver, Directive, EventEmitter, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import _ from 'lodash';
import { untilDestroyed } from '@ionar/utility';
import { InputComponent, MenuComponent, TextareaComponent, UploadComponent } from '../../ui';
import { FormGroup } from '../models/FormGroup';
import { FormControl } from '../models/FormControl';
export class DynamicFieldDirective {
    /**
     * @param {?} _resolver
     * @param {?} _vcRef
     */
    constructor(_resolver, _vcRef) {
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
        this.createComponent = () => {
            /** @type {?} */
            const component = this.components[((/** @type {?} */ (this._control.state))).component];
            /** @type {?} */
            const factory = this._resolver.resolveComponentFactory(component);
            this._compRef = this._vcRef.createComponent(factory);
            this._parseContext('initial');
        };
        this._parseContext = (status = null) => {
            this._updateContext();
            if (status === 'initial')
                this._initObservables();
            if (typeof this._compRef.instance.ngOnChanges === 'function') {
                this._compRef.instance.ngOnChanges();
            }
            else {
                throw new Error(`${this._compRef.componentType.name} doesn't implement 'ngOnChanges'`);
            }
        };
        this._initObservables = () => {
            _.forOwn(this._events, (value, key) => {
                if (!this._compRef.instance[key])
                    this._compRef.instance[key] = new EventEmitter();
                this._compRef.instance[key].pipe(untilDestroyed(this)).subscribe(event => {
                    (value instanceof EventEmitter)
                        ? value.emit(event)
                        : value(event);
                });
            });
            if (typeof this._compRef.instance.ngOnInit === 'function') {
                this._compRef.instance.ngOnInit();
            }
            else {
                throw new Error(`${this._compRef.componentType.name} doesn't implement 'ngOnInit'`);
            }
        };
        this._updateContext = () => {
            /** @type {?} */
            const state = (/** @type {?} */ (this._control.state));
            /** @type {?} */
            const options = (/** @type {?} */ (this._control.options));
            /** @type {?} */
            const context = Object.assign({ name: this._name, invalid: this._control.invalid && (this._control.dirty || this._control.touched || this._root.submitted) }, state.props, { template: this._template }, options);
            _.forOwn(context, (value, key) => {
                if (value !== undefined)
                    this._compRef.instance[key] = value;
            });
        };
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.createComponent();
        this._root.statusChanges.pipe(untilDestroyed(this)).subscribe(status => {
            this.ngOnChanges();
        });
        this._root.ngSubmit.pipe(untilDestroyed(this)).subscribe(data => {
            this.ngOnChanges();
        });
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        if (this._compRef) {
            this._parseContext();
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this._compRef)
            this._compRef.destroy();
    }
}
DynamicFieldDirective.decorators = [
    { type: Directive, args: [{
                selector: '[dynamic_field]'
            },] }
];
/** @nocollapse */
DynamicFieldDirective.ctorParameters = () => [
    { type: ComponentFactoryResolver },
    { type: ViewContainerRef }
];
DynamicFieldDirective.propDecorators = {
    _name: [{ type: Input, args: ['name',] }],
    _root: [{ type: Input, args: ['root',] }],
    _control: [{ type: Input, args: ['control',] }],
    _template: [{ type: Input, args: ['template',] }],
    _events: [{ type: Input, args: ['events',] }]
};
if (false) {
    /**
     * @type {?}
     * @private
     */
    DynamicFieldDirective.prototype._name;
    /**
     * @type {?}
     * @private
     */
    DynamicFieldDirective.prototype._root;
    /**
     * @type {?}
     * @private
     */
    DynamicFieldDirective.prototype._control;
    /**
     * @type {?}
     * @private
     */
    DynamicFieldDirective.prototype._template;
    /**
     * @type {?}
     * @private
     */
    DynamicFieldDirective.prototype._events;
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
    DynamicFieldDirective.prototype._parseContext;
    /**
     * @type {?}
     * @private
     */
    DynamicFieldDirective.prototype._initObservables;
    /**
     * @type {?}
     * @private
     */
    DynamicFieldDirective.prototype._updateContext;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHluYW1pYy1maWVsZC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AaW9uYXIvZm9ybS8iLCJzb3VyY2VzIjpbImNvcmUvZGlyZWN0aXZlcy9keW5hbWljLWZpZWxkLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLHdCQUF3QixFQUV4QixTQUFTLEVBQ1QsWUFBWSxFQUNaLEtBQUssRUFHRyxXQUFXLEVBQ25CLGdCQUFnQixFQUNqQixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLENBQUMsTUFBTSxRQUFRLENBQUM7QUFHdkIsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2hELE9BQU8sRUFBRSxjQUFjLEVBQUUsYUFBYSxFQUFFLGlCQUFpQixFQUFFLGVBQWUsRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUM3RixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDaEQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBT3BELE1BQU0sT0FBTyxxQkFBcUI7Ozs7O0lBd0JoQyxZQUNVLFNBQW1DLEVBQ25DLE1BQXdCO1FBRHhCLGNBQVMsR0FBVCxTQUFTLENBQTBCO1FBQ25DLFdBQU0sR0FBTixNQUFNLENBQWtCO1FBYmxDLGVBQVUsR0FBRztZQUNYLEtBQUssRUFBRSxjQUFjO1lBQ3JCLFFBQVEsRUFBRSxpQkFBaUI7Ozs7WUFJM0IsTUFBTSxFQUFFLGVBQWU7WUFDdkIsSUFBSSxFQUFFLGFBQWE7WUFDbkIsOEJBQThCO1NBQy9CLENBQUM7UUE4QkYsb0JBQWUsR0FBRyxHQUFHLEVBQUU7O2tCQUNmLFNBQVMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsbUJBQWtCLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFBLENBQUMsQ0FBQyxTQUFTLENBQUM7O2tCQUM5RSxPQUFPLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyx1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S0U7Ozs7O0lBRUYsOENBYUU7Ozs7O0lBRUYsaURBbUJFOzs7OztJQUVGLCtDQWVFOzs7OztJQXJGQSwwQ0FBMkM7Ozs7O0lBQzNDLHVDQUFnQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxyXG4gIENvbXBvbmVudFJlZixcclxuICBEaXJlY3RpdmUsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIElucHV0LFxyXG4gIE9uQ2hhbmdlcyxcclxuICBPbkRlc3Ryb3ksXHJcbiAgT25Jbml0LCBUZW1wbGF0ZVJlZixcclxuICBWaWV3Q29udGFpbmVyUmVmXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xyXG5cclxuXHJcbmltcG9ydCB7IHVudGlsRGVzdHJveWVkIH0gZnJvbSAnQGlvbmFyL3V0aWxpdHknO1xyXG5pbXBvcnQgeyBJbnB1dENvbXBvbmVudCwgTWVudUNvbXBvbmVudCwgVGV4dGFyZWFDb21wb25lbnQsIFVwbG9hZENvbXBvbmVudCB9IGZyb20gJy4uLy4uL3VpJztcclxuaW1wb3J0IHsgRm9ybUdyb3VwIH0gZnJvbSAnLi4vbW9kZWxzL0Zvcm1Hcm91cCc7XHJcbmltcG9ydCB7IEZvcm1Db250cm9sIH0gZnJvbSAnLi4vbW9kZWxzL0Zvcm1Db250cm9sJztcclxuaW1wb3J0IHsgQWJzdHJhY3RDb250cm9sT3B0aW9ucywgRm9ybUNvbnRyb2xTdGF0ZSB9IGZyb20gJy4uL2ludGVyZmFjZXMvRm9ybSc7XHJcblxyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdbZHluYW1pY19maWVsZF0nXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEeW5hbWljRmllbGREaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSwgT25DaGFuZ2VzIHtcclxuXHJcbiAgQElucHV0KCduYW1lJykgcHJpdmF0ZSBfbmFtZTogc3RyaW5nO1xyXG4gIEBJbnB1dCgncm9vdCcpIHByaXZhdGUgX3Jvb3Q6IEZvcm1Hcm91cDtcclxuICBASW5wdXQoJ2NvbnRyb2wnKSBwcml2YXRlIF9jb250cm9sOiBGb3JtQ29udHJvbDtcclxuXHJcbiAgQElucHV0KCd0ZW1wbGF0ZScpIHByaXZhdGUgX3RlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xyXG5cclxuICBASW5wdXQoJ2V2ZW50cycpIHByaXZhdGUgX2V2ZW50czogeyBba2V5OiBzdHJpbmddOiBGdW5jdGlvbiB9O1xyXG5cclxuXHJcbiAgcHJpdmF0ZSBfY29tcFJlZjogQ29tcG9uZW50UmVmPGFueT47XHJcblxyXG4gIGNvbXBvbmVudHMgPSB7XHJcbiAgICBpbnB1dDogSW5wdXRDb21wb25lbnQsXHJcbiAgICB0ZXh0YXJlYTogVGV4dGFyZWFDb21wb25lbnQsXHJcbiAgICAvLyBzZWxlY3Q6IEF1cm9yYVNlbGVjdENvbXBvbmVudCxcclxuICAgIC8vIGRhdGVwaWNrZXI6IEF1cm9yYURhdGVQaWNrZXJDb21wb25lbnQsXHJcbiAgICAvLyBjaGVja2JveDogQXVyb3JhQ2hlY2tib3hDb21wb25lbnQsXHJcbiAgICB1cGxvYWQ6IFVwbG9hZENvbXBvbmVudCxcclxuICAgIG1lbnU6IE1lbnVDb21wb25lbnRcclxuICAgIC8vIHJhZGlvOiBBdXJvcmFSYWRpb0NvbXBvbmVudFxyXG4gIH07XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBfcmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcclxuICAgIHByaXZhdGUgX3ZjUmVmOiBWaWV3Q29udGFpbmVyUmVmXHJcbiAgKSB7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50KCk7XHJcblxyXG4gICAgdGhpcy5fcm9vdC5zdGF0dXNDaGFuZ2VzLnBpcGUodW50aWxEZXN0cm95ZWQodGhpcykpLnN1YnNjcmliZShzdGF0dXMgPT4ge1xyXG4gICAgICB0aGlzLm5nT25DaGFuZ2VzKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLl9yb290Lm5nU3VibWl0LnBpcGUodW50aWxEZXN0cm95ZWQodGhpcykpLnN1YnNjcmliZShkYXRhID0+IHtcclxuICAgICAgdGhpcy5uZ09uQ2hhbmdlcygpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcygpIHtcclxuICAgIGlmICh0aGlzLl9jb21wUmVmKSB7XHJcbiAgICAgIHRoaXMuX3BhcnNlQ29udGV4dCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICBpZiAodGhpcy5fY29tcFJlZikgdGhpcy5fY29tcFJlZi5kZXN0cm95KCk7XHJcbiAgfVxyXG5cclxuICBjcmVhdGVDb21wb25lbnQgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBjb21wb25lbnQgPSB0aGlzLmNvbXBvbmVudHNbKDxGb3JtQ29udHJvbFN0YXRlPnRoaXMuX2NvbnRyb2wuc3RhdGUpLmNvbXBvbmVudF07XHJcbiAgICBjb25zdCBmYWN0b3J5ID0gdGhpcy5fcmVzb2x2ZXIucmVzb2x2ZUNvbXBvbmVudEZhY3Rvcnk8YW55Pihjb21wb25lbnQpO1xyXG4gICAgdGhpcy5fY29tcFJlZiA9IHRoaXMuX3ZjUmVmLmNyZWF0ZUNvbXBvbmVudChmYWN0b3J5KTtcclxuICAgIHRoaXMuX3BhcnNlQ29udGV4dCgnaW5pdGlhbCcpO1xyXG4gIH07XHJcblxyXG4gIHByaXZhdGUgX3BhcnNlQ29udGV4dCA9IChzdGF0dXMgPSBudWxsKSA9PiB7XHJcblxyXG4gICAgdGhpcy5fdXBkYXRlQ29udGV4dCgpO1xyXG5cclxuICAgIGlmIChzdGF0dXMgPT09ICdpbml0aWFsJykgdGhpcy5faW5pdE9ic2VydmFibGVzKCk7XHJcblxyXG5cclxuICAgIGlmICh0eXBlb2YgdGhpcy5fY29tcFJlZi5pbnN0YW5jZS5uZ09uQ2hhbmdlcyA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICB0aGlzLl9jb21wUmVmLmluc3RhbmNlLm5nT25DaGFuZ2VzKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYCR7dGhpcy5fY29tcFJlZi5jb21wb25lbnRUeXBlLm5hbWV9IGRvZXNuJ3QgaW1wbGVtZW50ICduZ09uQ2hhbmdlcydgKTtcclxuICAgIH1cclxuXHJcbiAgfTtcclxuXHJcbiAgcHJpdmF0ZSBfaW5pdE9ic2VydmFibGVzID0gKCkgPT4ge1xyXG4gICAgXy5mb3JPd24odGhpcy5fZXZlbnRzLCAodmFsdWUsIGtleSkgPT4ge1xyXG5cclxuICAgICAgaWYgKCF0aGlzLl9jb21wUmVmLmluc3RhbmNlW2tleV0pXHJcbiAgICAgICAgdGhpcy5fY29tcFJlZi5pbnN0YW5jZVtrZXldID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICAgICAgdGhpcy5fY29tcFJlZi5pbnN0YW5jZVtrZXldLnBpcGUodW50aWxEZXN0cm95ZWQodGhpcykpLnN1YnNjcmliZShldmVudCA9PiB7XHJcbiAgICAgICAgKHZhbHVlIGluc3RhbmNlb2YgRXZlbnRFbWl0dGVyKVxyXG4gICAgICAgICAgPyB2YWx1ZS5lbWl0KGV2ZW50KVxyXG4gICAgICAgICAgOiB2YWx1ZShldmVudCk7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgIH0pO1xyXG5cclxuICAgIGlmICh0eXBlb2YgdGhpcy5fY29tcFJlZi5pbnN0YW5jZS5uZ09uSW5pdCA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICB0aGlzLl9jb21wUmVmLmluc3RhbmNlLm5nT25Jbml0KCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYCR7dGhpcy5fY29tcFJlZi5jb21wb25lbnRUeXBlLm5hbWV9IGRvZXNuJ3QgaW1wbGVtZW50ICduZ09uSW5pdCdgKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBwcml2YXRlIF91cGRhdGVDb250ZXh0ID0gKCkgPT4ge1xyXG4gICAgY29uc3Qgc3RhdGUgPSA8Rm9ybUNvbnRyb2xTdGF0ZT50aGlzLl9jb250cm9sLnN0YXRlLFxyXG4gICAgICBvcHRpb25zID0gPEFic3RyYWN0Q29udHJvbE9wdGlvbnM+dGhpcy5fY29udHJvbC5vcHRpb25zO1xyXG5cclxuICAgIGNvbnN0IGNvbnRleHQgPSB7XHJcbiAgICAgIG5hbWU6IHRoaXMuX25hbWUsXHJcbiAgICAgIGludmFsaWQ6IHRoaXMuX2NvbnRyb2wuaW52YWxpZCAmJiAodGhpcy5fY29udHJvbC5kaXJ0eSB8fCB0aGlzLl9jb250cm9sLnRvdWNoZWQgfHwgdGhpcy5fcm9vdC5zdWJtaXR0ZWQpLFxyXG4gICAgICAuLi5zdGF0ZS5wcm9wcyxcclxuICAgICAgdGVtcGxhdGU6IHRoaXMuX3RlbXBsYXRlLFxyXG4gICAgICAuLi5vcHRpb25zXHJcbiAgICB9O1xyXG5cclxuICAgIF8uZm9yT3duKGNvbnRleHQsICh2YWx1ZSwga2V5KSA9PiB7XHJcbiAgICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkKSB0aGlzLl9jb21wUmVmLmluc3RhbmNlW2tleV0gPSB2YWx1ZTtcclxuICAgIH0pO1xyXG4gIH07XHJcbn1cclxuIl19