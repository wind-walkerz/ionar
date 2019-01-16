"use strict";
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var lodash_1 = tslib_1.__importDefault(require("lodash"));
var utility_1 = require("@ionar/utility");
var ui_1 = require("../../ui");
var FormGroup_1 = require("../models/FormGroup");
var FormControl_1 = require("../models/FormControl");
var DynamicFieldDirective = /** @class */ (function () {
    function DynamicFieldDirective(_resolver, _vcRef) {
        var _this = this;
        this._resolver = _resolver;
        this._vcRef = _vcRef;
        this.components = {
            input: ui_1.InputComponent,
            textarea: ui_1.TextareaComponent,
            // select: AuroraSelectComponent,
            // datepicker: AuroraDatePickerComponent,
            // checkbox: AuroraCheckboxComponent,
            upload: ui_1.UploadComponent,
            menu: ui_1.MenuComponent
            // radio: AuroraRadioComponent
        };
        this.createComponent = function () {
            /** @type {?} */
            var component = _this.components[((/** @type {?} */ (_this._control.state))).component];
            /** @type {?} */
            var factory = _this._resolver.resolveComponentFactory(component);
            _this._compRef = _this._vcRef.createComponent(factory);
            _this._parseContext('initial');
        };
        this._parseContext = function (status) {
            if (status === void 0) { status = null; }
            _this._updateContext();
            if (status === 'initial')
                _this._initObservables();
            if (typeof _this._compRef.instance.ngOnChanges === 'function') {
                _this._compRef.instance.ngOnChanges();
            }
            else {
                throw new Error(_this._compRef.componentType.name + " doesn't implement 'ngOnChanges'");
            }
        };
        this._initObservables = function () {
            lodash_1.default.forOwn(_this._events, function (value, key) {
                if (!_this._compRef.instance[key])
                    _this._compRef.instance[key] = new core_1.EventEmitter();
                _this._compRef.instance[key].pipe(utility_1.untilDestroyed(_this)).subscribe(function (event) {
                    (value instanceof core_1.EventEmitter)
                        ? value.emit(event)
                        : value(event);
                });
            });
            if (typeof _this._compRef.instance.ngOnInit === 'function') {
                _this._compRef.instance.ngOnInit();
            }
            else {
                throw new Error(_this._compRef.componentType.name + " doesn't implement 'ngOnInit'");
            }
        };
        this._updateContext = function () {
            /** @type {?} */
            var state = (/** @type {?} */ (_this._control.state));
            /** @type {?} */
            var options = (/** @type {?} */ (_this._control.options));
            /** @type {?} */
            var context = tslib_1.__assign({ name: _this._name, invalid: _this._control.invalid && (_this._control.dirty || _this._control.touched || _this._root.submitted) }, state.props, { template: _this._template }, options);
            lodash_1.default.forOwn(context, function (value, key) {
                if (value !== undefined)
                    _this._compRef.instance[key] = value;
            });
        };
    }
    /**
     * @return {?}
     */
    DynamicFieldDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.createComponent();
        this._root.statusChanges.pipe(utility_1.untilDestroyed(this)).subscribe(function (status) {
            _this.ngOnChanges();
        });
        this._root.ngSubmit.pipe(utility_1.untilDestroyed(this)).subscribe(function (data) {
            _this.ngOnChanges();
        });
    };
    /**
     * @return {?}
     */
    DynamicFieldDirective.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        if (this._compRef) {
            this._parseContext();
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
        { type: core_1.Directive, args: [{
                    selector: '[dynamic_field]'
                },] }
    ];
    /** @nocollapse */
    DynamicFieldDirective.ctorParameters = function () { return [
        { type: core_1.ComponentFactoryResolver },
        { type: core_1.ViewContainerRef }
    ]; };
    DynamicFieldDirective.propDecorators = {
        _name: [{ type: core_1.Input, args: ['name',] }],
        _root: [{ type: core_1.Input, args: ['root',] }],
        _control: [{ type: core_1.Input, args: ['control',] }],
        _template: [{ type: core_1.Input, args: ['template',] }],
        _events: [{ type: core_1.Input, args: ['events',] }]
    };
    return DynamicFieldDirective;
}());
exports.DynamicFieldDirective = DynamicFieldDirective;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHluYW1pYy1maWVsZC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AaW9uYXIvZm9ybS8iLCJzb3VyY2VzIjpbImNvcmUvZGlyZWN0aXZlcy9keW5hbWljLWZpZWxkLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUEsc0NBVXVCO0FBRXZCLDBEQUF1QjtBQUd2QiwwQ0FBZ0Q7QUFDaEQsK0JBQTZGO0FBQzdGLGlEQUFnRDtBQUNoRCxxREFBb0Q7QUFJcEQ7SUEyQkUsK0JBQ1UsU0FBbUMsRUFDbkMsTUFBd0I7UUFGbEMsaUJBSUM7UUFIUyxjQUFTLEdBQVQsU0FBUyxDQUEwQjtRQUNuQyxXQUFNLEdBQU4sTUFBTSxDQUFrQjtRQWJsQyxlQUFVLEdBQUc7WUFDWCxLQUFLLEVBQUUsbUJBQWM7WUFDckIsUUFBUSxFQUFFLHNCQUFpQjs7OztZQUkzQixNQUFNLEVBQUUsb0JBQWU7WUFDdkIsSUFBSSxFQUFFLGtCQUFhO1lBQ25CLDhCQUE4QjtTQUMvQixDQUFDO1FBOEJGLG9CQUFlLEdBQUc7O2dCQUNWLFNBQVMsR0FBRyxLQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsbUJBQWtCLEtBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFBLENBQUMsQ0FBQyxTQUFTLENBQUM7O2dCQUM5RSxPQUFPLEdBQUcsS0FBSSxDQUFDLFNBQVMsQ0FBQyx1QkFBdUIsQ0FBTSxTQUFTLENBQUM7WUFDdEUsS0FBSSxDQUFDLFFBQVEsR0FBRyxLQUFJLENBQUMsTUFBTSxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUNyRCxLQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ2hDLENBQUMsQ0FBQztRQUVNLGtCQUFhLEdBQUcsVUFBQyxNQUFhO1lBQWIsdUJBQUEsRUFBQSxhQUFhO1lBRXBDLEtBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztZQUV0QixJQUFJLE1BQU0sS0FBSyxTQUFTO2dCQUFFLEtBQUksQ0FB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QUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBQSxJQUFJO1lBQzNELEtBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNyQixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7Ozs7SUFFRCwyQ0FBVzs7O0lBQVg7UUFDRSxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDakIsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1NBQ3RCO0lBQ0gsQ0FBQzs7OztJQUVELDJDQUFXOzs7SUFBWDtRQUNFLElBQUksSUFBSSxDQUFDLFFBQVE7WUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQzdDLENBQUM7O2dCQXJERixnQkFBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxpQkFBaUI7aUJBQzVCOzs7O2dCQXZCQywrQkFBd0I7Z0JBUXhCLHVCQUFnQjs7O3dCQWtCZixZQUFLLFNBQUMsTUFBTTt3QkFDWixZQUFLLFNBQUMsTUFBTTsyQkFDWixZQUFLLFNBQUMsU0FBUzs0QkFFZixZQUFLLFNBQUMsVUFBVTswQkFFaEIsWUFBSyxTQUFDLFFBQVE7O0lBdUdqQiw0QkFBQztDQUFBLEFBbEhELElBa0hDO0FBL0dZLHNEQUFxQjs7Ozs7O0lBRWhDLHNDQUFxQzs7Ozs7SUFDckMsc0NBQXdDOzs7OztJQUN4Qyx5Q0FBZ0Q7Ozs7O0lBRWhELDBDQUF1RDs7Ozs7SUFFdkQsd0NBQThEOzs7OztJQUc5RCx5Q0FBb0M7O0lBRXBDLDJDQVNFOztJQThCRixnREFLRTs7Ozs7SUFFRiw4Q0FhRTs7Ozs7SUFFRixpREFtQkU7Ozs7O0lBRUYsK0NBZUU7Ozs7O0lBckZBLDBDQUEyQzs7Ozs7SUFDM0MsdUNBQWdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXHJcbiAgQ29tcG9uZW50UmVmLFxyXG4gIERpcmVjdGl2ZSxcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgSW5wdXQsXHJcbiAgT25DaGFuZ2VzLFxyXG4gIE9uRGVzdHJveSxcclxuICBPbkluaXQsIFRlbXBsYXRlUmVmLFxyXG4gIFZpZXdDb250YWluZXJSZWZcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XHJcblxyXG5cclxuaW1wb3J0IHsgdW50aWxEZXN0cm95ZWQgfSBmcm9tICdAaW9uYXIvdXRpbGl0eSc7XHJcbmltcG9ydCB7IElucHV0Q29tcG9uZW50LCBNZW51Q29tcG9uZW50LCBUZXh0YXJlYUNvbXBvbmVudCwgVXBsb2FkQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vdWknO1xyXG5pbXBvcnQgeyBGb3JtR3JvdXAgfSBmcm9tICcuLi9tb2RlbHMvRm9ybUdyb3VwJztcclxuaW1wb3J0IHsgRm9ybUNvbnRyb2wgfSBmcm9tICcuLi9tb2RlbHMvRm9ybUNvbnRyb2wnO1xyXG5pbXBvcnQgeyBBYnN0cmFjdENvbnRyb2xPcHRpb25zLCBGb3JtQ29udHJvbFN0YXRlIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9Gb3JtJztcclxuXHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ1tkeW5hbWljX2ZpZWxkXSdcclxufSlcclxuZXhwb3J0IGNsYXNzIER5bmFtaWNGaWVsZERpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95LCBPbkNoYW5nZXMge1xyXG5cclxuICBASW5wdXQoJ25hbWUnKSBwcml2YXRlIF9uYW1lOiBzdHJpbmc7XHJcbiAgQElucHV0KCdyb290JykgcHJpdmF0ZSBfcm9vdDogRm9ybUdyb3VwO1xyXG4gIEBJbnB1dCgnY29udHJvbCcpIHByaXZhdGUgX2NvbnRyb2w6IEZvcm1Db250cm9sO1xyXG5cclxuICBASW5wdXQoJ3RlbXBsYXRlJykgcHJpdmF0ZSBfdGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XHJcblxyXG4gIEBJbnB1dCgnZXZlbnRzJykgcHJpdmF0ZSBfZXZlbnRzOiB7IFtrZXk6IHN0cmluZ106IEZ1bmN0aW9uIH07XHJcblxyXG5cclxuICBwcml2YXRlIF9jb21wUmVmOiBDb21wb25lbnRSZWY8YW55PjtcclxuXHJcbiAgY29tcG9uZW50cyA9IHtcclxuICAgIGlucHV0OiBJbnB1dENvbXBvbmVudCxcclxuICAgIHRleHRhcmVhOiBUZXh0YXJlYUNvbXBvbmVudCxcclxuICAgIC8vIHNlbGVjdDogQXVyb3JhU2VsZWN0Q29tcG9uZW50LFxyXG4gICAgLy8gZGF0ZXBpY2tlcjogQXVyb3JhRGF0ZVBpY2tlckNvbXBvbmVudCxcclxuICAgIC8vIGNoZWNrYm94OiBBdXJvcmFDaGVja2JveENvbXBvbmVudCxcclxuICAgIHVwbG9hZDogVXBsb2FkQ29tcG9uZW50LFxyXG4gICAgbWVudTogTWVudUNvbXBvbmVudFxyXG4gICAgLy8gcmFkaW86IEF1cm9yYVJhZGlvQ29tcG9uZW50XHJcbiAgfTtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIF9yZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxyXG4gICAgcHJpdmF0ZSBfdmNSZWY6IFZpZXdDb250YWluZXJSZWZcclxuICApIHtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5jcmVhdGVDb21wb25lbnQoKTtcclxuXHJcbiAgICB0aGlzLl9yb290LnN0YXR1c0NoYW5nZXMucGlwZSh1bnRpbERlc3Ryb3llZCh0aGlzKSkuc3Vic2NyaWJlKHN0YXR1cyA9PiB7XHJcbiAgICAgIHRoaXMubmdPbkNoYW5nZXMoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuX3Jvb3QubmdTdWJtaXQucGlwZSh1bnRpbERlc3Ryb3llZCh0aGlzKSkuc3Vic2NyaWJlKGRhdGEgPT4ge1xyXG4gICAgICB0aGlzLm5nT25DaGFuZ2VzKCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKCkge1xyXG4gICAgaWYgKHRoaXMuX2NvbXBSZWYpIHtcclxuICAgICAgdGhpcy5fcGFyc2VDb250ZXh0KCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpIHtcclxuICAgIGlmICh0aGlzLl9jb21wUmVmKSB0aGlzLl9jb21wUmVmLmRlc3Ryb3koKTtcclxuICB9XHJcblxyXG4gIGNyZWF0ZUNvbXBvbmVudCA9ICgpID0+IHtcclxuICAgIGNvbnN0IGNvbXBvbmVudCA9IHRoaXMuY29tcG9uZW50c1soPEZvcm1Db250cm9sU3RhdGU+dGhpcy5fY29udHJvbC5zdGF0ZSkuY29tcG9uZW50XTtcclxuICAgIGNvbnN0IGZhY3RvcnkgPSB0aGlzLl9yZXNvbHZlci5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeTxhbnk+KGNvbXBvbmVudCk7XHJcbiAgICB0aGlzLl9jb21wUmVmID0gdGhpcy5fdmNSZWYuY3JlYXRlQ29tcG9uZW50KGZhY3RvcnkpO1xyXG4gICAgdGhpcy5fcGFyc2VDb250ZXh0KCdpbml0aWFsJyk7XHJcbiAgfTtcclxuXHJcbiAgcHJpdmF0ZSBfcGFyc2VDb250ZXh0ID0gKHN0YXR1cyA9IG51bGwpID0+IHtcclxuXHJcbiAgICB0aGlzLl91cGRhdGVDb250ZXh0KCk7XHJcblxyXG4gICAgaWYgKHN0YXR1cyA9PT0gJ2luaXRpYWwnKSB0aGlzLl9pbml0T2JzZXJ2YWJsZXMoKTtcclxuXHJcblxyXG4gICAgaWYgKHR5cGVvZiB0aGlzLl9jb21wUmVmLmluc3RhbmNlLm5nT25DaGFuZ2VzID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgIHRoaXMuX2NvbXBSZWYuaW5zdGFuY2UubmdPbkNoYW5nZXMoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihgJHt0aGlzLl9jb21wUmVmLmNvbXBvbmVudFR5cGUubmFtZX0gZG9lc24ndCBpbXBsZW1lbnQgJ25nT25DaGFuZ2VzJ2ApO1xyXG4gICAgfVxyXG5cclxuICB9O1xyXG5cclxuICBwcml2YXRlIF9pbml0T2JzZXJ2YWJsZXMgPSAoKSA9PiB7XHJcbiAgICBfLmZvck93bih0aGlzLl9ldmVudHMsICh2YWx1ZSwga2V5KSA9PiB7XHJcblxyXG4gICAgICBpZiAoIXRoaXMuX2NvbXBSZWYuaW5zdGFuY2Vba2V5XSlcclxuICAgICAgICB0aGlzLl9jb21wUmVmLmluc3RhbmNlW2tleV0gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gICAgICB0aGlzLl9jb21wUmVmLmluc3RhbmNlW2tleV0ucGlwZSh1bnRpbERlc3Ryb3llZCh0aGlzKSkuc3Vic2NyaWJlKGV2ZW50ID0+IHtcclxuICAgICAgICAodmFsdWUgaW5zdGFuY2VvZiBFdmVudEVtaXR0ZXIpXHJcbiAgICAgICAgICA/IHZhbHVlLmVtaXQoZXZlbnQpXHJcbiAgICAgICAgICA6IHZhbHVlKGV2ZW50KTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKHR5cGVvZiB0aGlzLl9jb21wUmVmLmluc3RhbmNlLm5nT25Jbml0ID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgIHRoaXMuX2NvbXBSZWYuaW5zdGFuY2UubmdPbkluaXQoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihgJHt0aGlzLl9jb21wUmVmLmNvbXBvbmVudFR5cGUubmFtZX0gZG9lc24ndCBpbXBsZW1lbnQgJ25nT25Jbml0J2ApO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHByaXZhdGUgX3VwZGF0ZUNvbnRleHQgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBzdGF0ZSA9IDxGb3JtQ29udHJvbFN0YXRlPnRoaXMuX2NvbnRyb2wuc3RhdGUsXHJcbiAgICAgIG9wdGlvbnMgPSA8QWJzdHJhY3RDb250cm9sT3B0aW9ucz50aGlzLl9jb250cm9sLm9wdGlvbnM7XHJcblxyXG4gICAgY29uc3QgY29udGV4dCA9IHtcclxuICAgICAgbmFtZTogdGhpcy5fbmFtZSxcclxuICAgICAgaW52YWxpZDogdGhpcy5fY29udHJvbC5pbnZhbGlkICYmICh0aGlzLl9jb250cm9sLmRpcnR5IHx8IHRoaXMuX2NvbnRyb2wudG91Y2hlZCB8fCB0aGlzLl9yb290LnN1Ym1pdHRlZCksXHJcbiAgICAgIC4uLnN0YXRlLnByb3BzLFxyXG4gICAgICB0ZW1wbGF0ZTogdGhpcy5fdGVtcGxhdGUsXHJcbiAgICAgIC4uLm9wdGlvbnNcclxuICAgIH07XHJcblxyXG4gICAgXy5mb3JPd24oY29udGV4dCwgKHZhbHVlLCBrZXkpID0+IHtcclxuICAgICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQpIHRoaXMuX2NvbXBSZWYuaW5zdGFuY2Vba2V5XSA9IHZhbHVlO1xyXG4gICAgfSk7XHJcbiAgfTtcclxufVxyXG4iXX0=