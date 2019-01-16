import joi from '@ionar/joi';
import utility from '@ionar/utility';
import operators from 'rxjs/operators';
import common from '@angular/common';
import ui from '@ionar/ui';
import tslib from 'tslib';
import core from '@angular/core';
import lodash from 'lodash';

function unwrapExports (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x.default : x;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var IoAbstractUI_1 = createCommonjsModule(function (module, exports) {
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
Object.defineProperty(exports, "__esModule", { value: true });


/**
 * @record
 */
function ComponentContext() { }
exports.ComponentContext = ComponentContext;
/**
 * @abstract
 */
var IoAbstractUI = /** @class */ (function () {
    function IoAbstractUI(cd, _elRef) {
        var _this = this;
        this.cd = cd;
        this._elRef = _elRef;
        this.template = null;
        this.viewInit = false;
        this.setContext = function (properties, events) {
            _this._contextData = tslib.__assign({}, _this._contextData, properties, events);
            _this.cd.markForCheck();
        };
        this.parseTemplate = function () {
            if (!_this.template) {
                _this.template = _this._contentTemplate;
                // if (this._defaultContentComp) {
                //
                //   this._defaultContentComp.template = {
                //     template: this._defaultTemplate,
                //     context: this.context
                //   };
                // }
                // if (isEmptyTemplate(this._elRef) || !this._contentTemplate) {
                _this.template = _this._defaultTemplate;
                // this.cd.detectChanges();
                // }
                _this.viewInit = true;
                _this.cd.detectChanges();
            }
            _this.viewInit = true;
            _this.cd.detectChanges();
        };
    }
    Object.defineProperty(IoAbstractUI.prototype, "context", {
        get: /**
         * @return {?}
         */
        function () {
            return {
                defaultContent: this._defaultTemplate,
                $implicit: this._contextData
            };
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    IoAbstractUI.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    IoAbstractUI.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        this.parseTemplate();
        this.cd.markForCheck();
    };
    /**
     * @return {?}
     */
    IoAbstractUI.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
    };
    IoAbstractUI.propDecorators = {
        template: [{ type: core.Input }],
        _container: [{ type: core.ViewChild, args: ['container', { read: core.ViewContainerRef },] }],
        _defaultTemplate: [{ type: core.ViewChild, args: ['default_template', { read: core.TemplateRef },] }],
        _contentTemplate: [{ type: core.ViewChild, args: ['content_template', { read: core.TemplateRef },] }]
    };
    return IoAbstractUI;
}());
exports.IoAbstractUI = IoAbstractUI;

});

unwrapExports(IoAbstractUI_1);
var IoAbstractUI_2 = IoAbstractUI_1.ComponentContext;
var IoAbstractUI_3 = IoAbstractUI_1.IoAbstractUI;

var IoFormFieldUI_1 = createCommonjsModule(function (module, exports) {
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
Object.defineProperty(exports, "__esModule", { value: true });



/**
 * @abstract
 */
var IoFormFieldUI = /** @class */ (function (_super) {
    tslib.__extends(IoFormFieldUI, _super);
    function IoFormFieldUI() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.invalid = false;
        _this.disabled = false;
        _this.focused = false;
        _this.readonly = false;
        _this.change = new core.EventEmitter();
        _this.blur = new core.EventEmitter();
        _this.enter = new core.EventEmitter();
        return _this;
    }
    Object.defineProperty(IoFormFieldUI.prototype, "_isFocused", {
        get: /**
         * @return {?}
         */
        function () {
            return this.focused;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IoFormFieldUI.prototype, "_isInvalid", {
        get: /**
         * @return {?}
         */
        function () {
            return this.invalid;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IoFormFieldUI.prototype, "_isDisabled", {
        get: /**
         * @return {?}
         */
        function () {
            return this.disabled;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IoFormFieldUI.prototype, "_isReadonly", {
        get: /**
         * @return {?}
         */
        function () {
            return this.readonly;
        },
        enumerable: true,
        configurable: true
    });
    IoFormFieldUI.propDecorators = {
        invalid: [{ type: core.Input }],
        disabled: [{ type: core.Input }],
        focused: [{ type: core.Input }],
        readonly: [{ type: core.Input }],
        change: [{ type: core.Output }],
        blur: [{ type: core.Output }],
        enter: [{ type: core.Output }],
        _isFocused: [{ type: core.HostBinding, args: ['class.focus',] }],
        _isInvalid: [{ type: core.HostBinding, args: ['class.invalid',] }],
        _isDisabled: [{ type: core.HostBinding, args: ['class.disabled',] }],
        _isReadonly: [{ type: core.HostBinding, args: ['class.readonly',] }]
    };
    return IoFormFieldUI;
}(IoAbstractUI_1.IoAbstractUI));
exports.IoFormFieldUI = IoFormFieldUI;

});

unwrapExports(IoFormFieldUI_1);
var IoFormFieldUI_2 = IoFormFieldUI_1.IoFormFieldUI;

var input_component = createCommonjsModule(function (module, exports) {
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
Object.defineProperty(exports, "__esModule", { value: true });


var lodash_1 = tslib.__importDefault(lodash);

var InputComponent = /** @class */ (function (_super) {
    tslib.__extends(InputComponent, _super);
    function InputComponent(cd, _elRef) {
        var _this = _super.call(this, cd, _elRef) || this;
        ///-----------------------------------------------  Variables   -----------------------------------------------///
        _this.type = '';
        _this.name = '';
        _this.placeholder = '';
        _this.value = '';
        _this.range = [];
        ///-----------------------------------------------  Main Functions   -----------------------------------------------///
        _this.onFocus = function () {
            // this.focused = true;
        };
        _this.onBlur = function () {
            _this.blur.emit();
            _this.focused = false;
            _this.cd.markForCheck();
        };
        _this.onChange = lodash_1.default.debounce(function (e) {
            e.stopPropagation();
            /** @type {?} */
            var value = e.target.value;
            /** @type {?} */
            var min = parseInt(_this.range[0], 10);
            /** @type {?} */
            var max = parseInt(_this.range[1], 10);
            if (_this.range && _this.type === 'number' && !(min <= value && value <= max)) {
                value = e.target.value = _this.range[1];
            }
            _this.change.emit(value);
        }, 500);
        //  Keyboard & Clipboard Event  //
        _this.onKeyPress = function (e) {
            if (e.keyCode === 13)
                _this.enter.emit();
        };
        _this.onKeyDown = function (e) {
            return (_this.type === 'number')
                ? _this.onNumberKeyDown(e)
                : (_this.type === 'phone')
                    ? _this.onPhoneKeyDown(e)
                    : null;
        };
        _this.onPaste = function (e) {
            return (_this.type === 'number')
                ? _this.onNumberPaste(e)
                : (_this.type === 'phone')
                    ? _this.onPhonePaste(e)
                    : null;
        };
        // Ensure that it is a number from [0-9] no decimal_point
        _this.onPhoneKeyDown = function (e) {
            // Allow
            if (e.keyCode === 8 || // backspace
                e.keyCode === 9 || // Tab
                e.keyCode === 13 || // enter
                (e.keyCode === 65 && (e.ctrlKey || e.metaKey)) || //  Ctrl + A
                (e.keyCode === 67 && (e.ctrlKey || e.metaKey)) || //  Ctrl + C
                (e.keyCode === 88 && (e.ctrlKey || e.metaKey)) || //  Ctrl + X
                (e.keyCode === 86 && (e.ctrlKey || e.metaKey)) || //  Ctrl + V
                (e.keyCode >= 35 && e.keyCode <= 39) // home, end, left, right
            ) {
                return;
            }
            // Reject if not a number or numpad
            if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && // not number
                (e.keyCode < 96 || e.keyCode > 105) // not numpad
            ) {
                e.preventDefault();
            }
        };
        // Ensure that pasted value is a number or string of number
        _this.onPhonePaste = function (e) {
            if (!/^\d+$/.test(e.clipboardData.getData('Text'))) {
                e.preventDefault();
            }
        };
        // Ensure that it is a  number: integer || decimal
        _this.onNumberKeyDown = function (e) {
            // Allow
            if (e.keyCode === 8 || // backspace
                e.keyCode === 9 || // Tab
                e.keyCode === 13 || // enter
                e.keyCode === 188 || // comma(",")
                e.keyCode === 110 || //   numpad decimal point
                e.keyCode === 190 || // period(".")
                (e.keyCode === 65 && (e.ctrlKey || e.metaKey)) || //  Ctrl + A
                (e.keyCode === 67 && (e.ctrlKey || e.metaKey)) || //  Ctrl + C
                (e.keyCode === 88 && (e.ctrlKey || e.metaKey)) || //  Ctrl + X
                (e.keyCode === 86 && (e.ctrlKey || e.metaKey)) || //  Ctrl + V
                (e.keyCode >= 35 && e.keyCode <= 39) // home, end, left, right
            ) {
                return;
            }
            // Reject if not a number or numpad
            if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && // not number
                (e.keyCode < 96 || e.keyCode > 105) // not numpad
            ) {
                e.preventDefault();
            }
        };
        // Ensure that pasted value is a string of number: integer || decimal
        _this.onNumberPaste = function (e) {
            if (!/^\d.+$/.test(e.clipboardData.getData('Text'))) {
                e.preventDefault();
            }
        };
        return _this;
    }
    ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///
    ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///
    /**
     * @return {?}
     */
    InputComponent.prototype.ngOnInit = 
    ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///
    /**
     * @return {?}
     */
    function () {
        _super.prototype.ngOnInit.call(this);
        this.setContext({
            type: this.type,
            name: this.name,
            value: this.value,
            placeholder: this.placeholder
        }, {
            input: this.onChange,
            blur: this.onBlur,
            focus: this.onFocus,
            keydown: this.onKeyDown,
            paste: this.onPaste,
            keypress: this.onKeyPress
        });
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    InputComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        _super.prototype.ngOnChanges.call(this, changes);
        console.log(IoFormFieldUI_1.IoFormFieldUI);
    };
    InputComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'io-input',
                    template: "<ng-container [ngTemplateOutlet]=\"template\" [ngTemplateOutletContext]=\"context\"></ng-container>\r\n\r\n<ng-template #default_template let-context>\r\n    <input\r\n            [spread]=\"context\"\r\n            *ngIf=\"!(context?.readonly || context?.disabled)\"\r\n    >\r\n\r\n    <span *ngIf=\"context?.readonly || context?.disabled\">\r\n          {{value}}\r\n      </span>\r\n</ng-template>\r\n\r\n<ng-template #content_template>\r\n    <ng-content></ng-content>\r\n</ng-template>\r\n",
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                    styles: [":host{background-color:transparent;border:1px solid #d9d9d9;border-radius:.4rem;color:#363636;display:flex;align-items:center;justify-content:flex-start;font-size:1.5rem;outline:0;overflow:hidden;padding:0 1rem;position:relative;transition:.3s cubic-bezier(.645,.045,.355,1);width:100%;height:auto;min-height:2.25em;max-height:5rem;max-width:100%}:host.focus{border-color:#40a9ff;outline:0;box-shadow:0 0 0 2px rgba(24,144,255,.2);border-right-width:1px!important}:host:hover{border-color:#40a9ff}:host.invalid{border-color:#f5222d}:host.invalid.focus{border-color:#ff4d4f;outline:0;box-shadow:0 0 0 2px rgba(245,34,45,.2)}:host ::ng-deep input{border:none;color:inherit;display:flex;flex:1px;font-size:inherit;font-weight:inherit;text-transform:inherit;text-decoration:inherit;outline:0;height:100%;max-width:100%;z-index:1}:host .loading_icon{width:10%}:host-context(.readonly){border:0}:host-context(.disabled){border:0}"]
                }] }
    ];
    /** @nocollapse */
    InputComponent.ctorParameters = function () { return [
        { type: core.ChangeDetectorRef },
        { type: core.ElementRef }
    ]; };
    InputComponent.propDecorators = {
        type: [{ type: core.Input }],
        name: [{ type: core.Input }],
        placeholder: [{ type: core.Input }],
        value: [{ type: core.Input }],
        range: [{ type: core.Input }]
    };
    return InputComponent;
}(IoFormFieldUI_1.IoFormFieldUI));
exports.InputComponent = InputComponent;

});

unwrapExports(input_component);
var input_component_1 = input_component.InputComponent;

var textarea_component = createCommonjsModule(function (module, exports) {
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
Object.defineProperty(exports, "__esModule", { value: true });



var TextareaComponent = /** @class */ (function (_super) {
    tslib.__extends(TextareaComponent, _super);
    ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///
    function TextareaComponent(cd, el) {
        var _this = _super.call(this, cd, el) || this;
        ///-----------------------------------------------  Variables   -----------------------------------------------///
        _this.name = '';
        _this.value = '';
        _this.placeholder = '';
        return _this;
    }
    /**
     * @return {?}
     */
    TextareaComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        _super.prototype.ngOnInit.call(this);
        this.setContext({
            name: this.name,
            value: this.value,
            placeholder: this.placeholder
        });
    };
    TextareaComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'io-textarea',
                    template: "<textarea\r\n        [name]=\"name\"\r\n        [value]=\"value\"\r\n        [class.invalid]=\"invalid\"\r\n        cols=\"1\" rows=\"1\"\r\n        [placeholder]=\"placeholder\"\r\n\r\n        (change)=\"$event.stopPropagation(); change.emit($event.target.value);\"\r\n        (blur)=\"blur.emit()\"\r\n></textarea>\r\n",
                    styles: [":host{display:flex;flex:1}textarea{border:none;font-size:1.5rem;padding:1rem;width:100%;max-width:100%;overflow-y:scroll}"]
                }] }
    ];
    /** @nocollapse */
    TextareaComponent.ctorParameters = function () { return [
        { type: core.ChangeDetectorRef },
        { type: core.ElementRef }
    ]; };
    TextareaComponent.propDecorators = {
        name: [{ type: core.Input }],
        value: [{ type: core.Input }],
        placeholder: [{ type: core.Input }]
    };
    return TextareaComponent;
}(IoFormFieldUI_1.IoFormFieldUI));
exports.TextareaComponent = TextareaComponent;

});

unwrapExports(textarea_component);
var textarea_component_1 = textarea_component.TextareaComponent;

var upload_component = createCommonjsModule(function (module, exports) {
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
Object.defineProperty(exports, "__esModule", { value: true });


var lodash_1 = tslib.__importDefault(lodash);

var UploadComponent = /** @class */ (function (_super) {
    tslib.__extends(UploadComponent, _super);
    ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///
    function UploadComponent(cd, el) {
        var _this = _super.call(this, cd, el) || this;
        ///-----------------------------------------------  Variables   -----------------------------------------------///
        _this.file_list = [];
        _this.change = new core.EventEmitter();
        _this.invalid = false;
        _this.type = 'input';
        _this.multiple = false;
        _this.title = '';
        return _this;
    }
    ///-----------------------------------------------  Main Functions   -----------------------------------------------///
    ///-----------------------------------------------  Main Functions   -----------------------------------------------///
    /**
     * @param {?} file_list
     * @return {?}
     */
    UploadComponent.prototype.onFileChanged = 
    ///-----------------------------------------------  Main Functions   -----------------------------------------------///
    /**
     * @param {?} file_list
     * @return {?}
     */
    function (file_list) {
        this.file_list = this.file_list.concat(lodash_1.default.map(file_list));
        this.change.emit(this.multiple ? this.file_list : this.file_list[0]);
    };
    UploadComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'io-upload',
                    template: "<ng-container *ngIf=\"type === 'dropzone'\">\r\n    <ng-container *ngTemplateOutlet=\"dropzone\"></ng-container>\r\n</ng-container>\r\n\r\n<ng-container *ngIf=\"type === 'input'\">\r\n    <ng-container *ngTemplateOutlet=\"click\"></ng-container>\r\n</ng-container>\r\n\r\n<ng-template #click>\r\n    <click\r\n            (change)=\"onFileChanged($event)\"\r\n            [template]=\"template\"\r\n            [multiple]=\"multiple\"\r\n            [title]=\"title\"\r\n    >\r\n    </click>\r\n\r\n</ng-template>\r\n\r\n<ng-template #dropzone>\r\n    <drop\r\n            (change)=\"onFileChanged($event)\"\r\n            [template]=\"template\"\r\n    >\r\n    </drop>\r\n</ng-template>\r\n\r\n\r\n<ng-template #default_template>\r\n    <ng-content></ng-content>\r\n</ng-template>\r\n",
                    styles: [":host{display:flex;flex-direction:column;align-items:flex-start;width:100%;height:100%}"]
                }] }
    ];
    /** @nocollapse */
    UploadComponent.ctorParameters = function () { return [
        { type: core.ChangeDetectorRef },
        { type: core.ElementRef }
    ]; };
    UploadComponent.propDecorators = {
        change: [{ type: core.Output }],
        invalid: [{ type: core.Input }],
        type: [{ type: core.Input }],
        template: [{ type: core.Input }],
        multiple: [{ type: core.Input }],
        title: [{ type: core.Input }]
    };
    return UploadComponent;
}(IoFormFieldUI_1.IoFormFieldUI));
exports.UploadComponent = UploadComponent;

});

unwrapExports(upload_component);
var upload_component_1 = upload_component.UploadComponent;

var menu_component = createCommonjsModule(function (module, exports) {
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
Object.defineProperty(exports, "__esModule", { value: true });

var MenuComponent = /** @class */ (function () {
    function MenuComponent() {
        var _this = this;
        this.options = [];
        this.name = '';
        this.value = null;
        this.change = new core.EventEmitter();
        this.blur = new core.EventEmitter();
        this.enter = new core.EventEmitter();
        this.invalid = false;
        this.onSelectOption = function (option) {
            _this.change.emit(option.value);
            _this.blur.emit();
        };
    }
    /**
     * @return {?}
     */
    MenuComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    MenuComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
    };
    MenuComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'io-menu',
                    template: "\n      <ng-container *ngFor=\"let option of options\">\n          <div\n                  class=\"option\"\n                  [class.active]=\"option.value === value\"\n                  (click)=\"onSelectOption(option)\"\n          >\n              {{option.label}}\n          </div>\n      </ng-container>\n  ",
                    styles: [":host{display:flex;flex-direction:column;width:100%}:host .option{border:0;cursor:pointer;font-size:1.6rem;margin:.5rem 0}:host .option.active,:host .option:hover{font-weight:700}"]
                }] }
    ];
    /** @nocollapse */
    MenuComponent.ctorParameters = function () { return []; };
    MenuComponent.propDecorators = {
        options: [{ type: core.Input }],
        name: [{ type: core.Input }],
        value: [{ type: core.Input }],
        change: [{ type: core.Output }],
        blur: [{ type: core.Output }],
        enter: [{ type: core.Output }],
        invalid: [{ type: core.Input }]
    };
    return MenuComponent;
}());
exports.MenuComponent = MenuComponent;

});

unwrapExports(menu_component);
var menu_component_1 = menu_component.MenuComponent;

var ui$1 = createCommonjsModule(function (module, exports) {
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
Object.defineProperty(exports, "__esModule", { value: true });

exports.InputComponent = input_component.InputComponent;

exports.TextareaComponent = textarea_component.TextareaComponent;

exports.UploadComponent = upload_component.UploadComponent;

exports.MenuComponent = menu_component.MenuComponent;

});

unwrapExports(ui$1);
var ui_1 = ui$1.InputComponent;
var ui_2 = ui$1.TextareaComponent;
var ui_3 = ui$1.UploadComponent;
var ui_4 = ui$1.MenuComponent;

var AbstractControl_1 = createCommonjsModule(function (module, exports) {
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
Object.defineProperty(exports, "__esModule", { value: true });


var lodash_1 = tslib.__importDefault(lodash);
/**
 * This is the base class for `FormControl`, `FormGroup.ts`, and `FormArray`.
 *
 * It provides some of the shared behavior that all controls and groups of controls have, like
 * running validators, calculating status, and resetting state. It also defines the properties
 * that are shared between all sub-classes, like `value`, `valid`, and `dirty`. It shouldn't be
 * instantiated directly.
 *
 *
 * \@publicApi
 * @abstract
 */
var /**
 * This is the base class for `FormControl`, `FormGroup.ts`, and `FormArray`.
 *
 * It provides some of the shared behavior that all controls and groups of controls have, like
 * running validators, calculating status, and resetting state. It also defines the properties
 * that are shared between all sub-classes, like `value`, `valid`, and `dirty`. It shouldn't be
 * instantiated directly.
 *
 *
 * \@publicApi
 * @abstract
 */
AbstractControl = /** @class */ (function () {
    /**
     * Initialize the AbstractControl instance.
     *
     * @param options
     *
     */
    function AbstractControl(state, _options) {
        var _this = this;
        this.state = state;
        this._options = _options;
        /**
           * A Joi object schema
           */
        // public readonly schema: JoiSchema | null;
        /**
         * True if the control is marked as `touched`.
         *
         * A control is marked `touched` once the user has triggered
         * a `blur` event on it.
         */
        this.touched = false;
        /**
         * A control is `pristine` if the user has not yet changed the value in the UI.
         *
         * @return True if the user has not yet changed the value in the UI; compare `dirty`.
         * Programmatic changes to a control's value do not mark it dirty.
         */
        this.pristine = true;
        /**
         * \@internal
         */
        this._getControlSchema = function () {
            return null;
        };
        /**
         * \@internal
         */
        this._updateChildError = function (errors) {
        };
        this._storeInitialOptions = function (options) {
            _this._initialOptions = options;
        };
        /**
         * \@internal
         */
        this._isNotExcluded = function (c) {
            return !lodash_1.default.get(c.options, 'excluded') && !(lodash_1.default.has(_this.options, ['nullExclusion']) && !c.value);
        };
        this._storeInitialOptions(_options);
        this.runAsyncValidator = function () {
        };
    }
    Object.defineProperty(AbstractControl.prototype, "schema", {
        get: /**
         * @return {?}
         */
        function () {
            if (this.parent && this.parent.schema) {
                /** @type {?} */
                var extractChild = lodash_1.default.find(this.parent.schema['_inner'].children, ['key', this.name]);
                return extractChild ? extractChild.schema : null;
            }
            return this._getControlSchema();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControl.prototype, "path", {
        get: /**
         * @return {?}
         */
        function () {
            return this.parent ? tslib.__spread(this.parent.path, [this.name]) : [];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControl.prototype, "name", {
        get: /**
         * @return {?}
         */
        function () {
            return this._name;
        },
        set: /**
         * @param {?} name
         * @return {?}
         */
        function (name) {
            this._name = name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControl.prototype, "parent", {
        /**
         * The parent control.
         */
        get: /**
         * The parent control.
         * @return {?}
         */
        function () {
            return this._parent;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControl.prototype, "root", {
        get: /**
         * @return {?}
         */
        function () {
            return this._root;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControl.prototype, "options", {
        get: /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var parentConfig;
            if (this.parent && this.parent.options)
                parentConfig = tslib.__assign({}, this.parent.options);
            return tslib.__assign({}, parentConfig, this._initialOptions) || null;
        },
        set: /**
         * @param {?} newConfig
         * @return {?}
         */
        function (newConfig) {
            this._options = tslib.__assign({}, this._options, newConfig);
            this.updateValueAndValidity({ emitEvent: true });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControl.prototype, "enabled", {
        /**
         * A control is `enabled` as long as its `status` is not `DISABLED`.
         *
         * @see `status`
         *
         * @returns True if the control has any status other than 'DISABLED',
         * false if the status is 'DISABLED'.
         *
         */
        get: /**
         * A control is `enabled` as long as its `status` is not `DISABLED`.
         *
         * @see `status`
         *
         * @return {?} True if the control has any status other than 'DISABLED',
         * false if the status is 'DISABLED'.
         *
         */
        function () {
            return this.status !== exports.DISABLED;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControl.prototype, "disabled", {
        /**
         * A control is `disabled` when its `status` is `DISABLED`.
         *
         * @see `status`
         *
         * Disabled controls are exempt from validation checks and
         * are not included in the aggregate value of their ancestor
         * controls.
         *
         * @returns True if the control is disabled, false otherwise.
         */
        get: /**
         * A control is `disabled` when its `status` is `DISABLED`.
         *
         * @see `status`
         *
         * Disabled controls are exempt from validation checks and
         * are not included in the aggregate value of their ancestor
         * controls.
         *
         * @return {?} True if the control is disabled, false otherwise.
         */
        function () {
            return this.status === exports.DISABLED;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControl.prototype, "valid", {
        /**
         * A control is `valid` when its `status` is `VALID`.
         *
         * @see `status`
         *
         * @returns True if the control has passed all of its validation tests,
         * false otherwise.
         */
        get: /**
         * A control is `valid` when its `status` is `VALID`.
         *
         * @see `status`
         *
         * @return {?} True if the control has passed all of its validation tests,
         * false otherwise.
         */
        function () {
            return this.status === exports.VALID;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControl.prototype, "invalid", {
        /**
         * A control is `invalid` when its `status` is `INVALID`.
         *
         * @see `status`
         *
         * @returns True if this control has failed one or more of its validation checks,
         * false otherwise.
         */
        get: /**
         * A control is `invalid` when its `status` is `INVALID`.
         *
         * @see `status`
         *
         * @return {?} True if this control has failed one or more of its validation checks,
         * false otherwise.
         */
        function () {
            return this.status === exports.INVALID;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControl.prototype, "pending", {
        /**
         * A control is `pending` when its `status` is `PENDING`.
         *
         * @see `status`
         *
         * @returns True if this control is in the process of conducting a validation check,
         * false otherwise.
         */
        get: /**
         * A control is `pending` when its `status` is `PENDING`.
         *
         * @see `status`
         *
         * @return {?} True if this control is in the process of conducting a validation check,
         * false otherwise.
         */
        function () {
            return this.status === exports.PENDING;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControl.prototype, "dirty", {
        /**
         * A control is `dirty` if the user has changed the value
         * in the UI.
         *
         * @returns True if the user has changed the value of this control in the UI; compare `pristine`.
         * Programmatic changes to a control's value do not mark it dirty.
         */
        get: /**
         * A control is `dirty` if the user has changed the value
         * in the UI.
         *
         * @return {?} True if the user has changed the value of this control in the UI; compare `pristine`.
         * Programmatic changes to a control's value do not mark it dirty.
         */
        function () {
            return !this.pristine;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Marks the control as `touched`. A control is touched by focus and
     * blur events that do not change the value; compare `markAsDirty`;
     *
     *  @param opts options options that determine how the control propagates changes
     * and emits events events after marking is applied.
     * * `onlySelf`: When true, mark only this control. When false or not supplied,
     * marks all direct ancestors. Default is false.
     */
    /**
     * Marks the control as `touched`. A control is touched by focus and
     * blur events that do not change the value; compare `markAsDirty`;
     *
     * @return {?}
     */
    AbstractControl.prototype.markAsTouched = /**
     * Marks the control as `touched`. A control is touched by focus and
     * blur events that do not change the value; compare `markAsDirty`;
     *
     * @return {?}
     */
    function () {
        ((/** @type {?} */ (this))).touched = true;
        this.updateValueAndValidity({ onlySelf: true });
    };
    /**
     * Marks the control as `untouched`.
     *
     * If the control has any children, also marks all children as `untouched`
     * and recalculates the `touched` status of all parent controls.
     *
     *  @param opts options options that determine how the control propagates changes
     * and emits events after the marking is applied.
     * * `onlySelf`: When true, mark only this control. When false or not supplied,
     * marks all direct ancestors. Default is false.
     */
    /**
     * Marks the control as `untouched`.
     *
     * If the control has any children, also marks all children as `untouched`
     * and recalculates the `touched` status of all parent controls.
     *
     * @param {?=} opts options options that determine how the control propagates changes
     * and emits events after the marking is applied.
     * * `onlySelf`: When true, mark only this control. When false or not supplied,
     * marks all direct ancestors. Default is false.
     * @return {?}
     */
    AbstractControl.prototype.markAsUntouched = /**
     * Marks the control as `untouched`.
     *
     * If the control has any children, also marks all children as `untouched`
     * and recalculates the `touched` status of all parent controls.
     *
     * @param {?=} opts options options that determine how the control propagates changes
     * and emits events after the marking is applied.
     * * `onlySelf`: When true, mark only this control. When false or not supplied,
     * marks all direct ancestors. Default is false.
     * @return {?}
     */
    function (opts) {
        if (opts === void 0) { opts = {}; }
        ((/** @type {?} */ (this))).touched = false;
    };
    /**
     * Marks the control as `dirty`. A control becomes dirty when
     * the control's value is changed through the UI; compare `markAsTouched`.
     *
     *  @param opts options options that determine how the control propagates changes
     * and emits events after marking is applied.
     * * `onlySelf`: When true, mark only this control. When false or not supplied,
     * marks all direct ancestors. Default is false.
     */
    /**
     * Marks the control as `dirty`. A control becomes dirty when
     * the control's value is changed through the UI; compare `markAsTouched`.
     *
     * @param {?=} opts options options that determine how the control propagates changes
     * and emits events after marking is applied.
     * * `onlySelf`: When true, mark only this control. When false or not supplied,
     * marks all direct ancestors. Default is false.
     * @return {?}
     */
    AbstractControl.prototype.markAsDirty = /**
     * Marks the control as `dirty`. A control becomes dirty when
     * the control's value is changed through the UI; compare `markAsTouched`.
     *
     * @param {?=} opts options options that determine how the control propagates changes
     * and emits events after marking is applied.
     * * `onlySelf`: When true, mark only this control. When false or not supplied,
     * marks all direct ancestors. Default is false.
     * @return {?}
     */
    function (opts) {
        if (opts === void 0) { opts = {}; }
        ((/** @type {?} */ (this))).pristine = false;
    };
    /**
     * Marks the control as `pristine`.
     *
     * If the control has any children, marks all children as `pristine`,
     * and recalculates the `pristine` status of all parent
     * controls.
     *
     *  @param opts options options that determine how the control emits events after
     * marking is applied.
     * * `onlySelf`: When true, mark only this control. When false or not supplied,
     * marks all direct ancestors. Default is false..
     */
    /**
     * Marks the control as `pristine`.
     *
     * If the control has any children, marks all children as `pristine`,
     * and recalculates the `pristine` status of all parent
     * controls.
     *
     * @param {?=} opts options options that determine how the control emits events after
     * marking is applied.
     * * `onlySelf`: When true, mark only this control. When false or not supplied,
     * marks all direct ancestors. Default is false..
     * @return {?}
     */
    AbstractControl.prototype.markAsPristine = /**
     * Marks the control as `pristine`.
     *
     * If the control has any children, marks all children as `pristine`,
     * and recalculates the `pristine` status of all parent
     * controls.
     *
     * @param {?=} opts options options that determine how the control emits events after
     * marking is applied.
     * * `onlySelf`: When true, mark only this control. When false or not supplied,
     * marks all direct ancestors. Default is false..
     * @return {?}
     */
    function (opts) {
        if (opts === void 0) { opts = {}; }
        ((/** @type {?} */ (this))).pristine = true;
    };
    /**
     * Sets options on a form control .
     *
     * Calling `setOptions` also updates the validity of the parent control.
     *
     * @usageNotes
     * ### Manually set the options for a control
     *
     * ```
     * const login = new FormControl('someLogin');
     * login.setErrors({
     *   notUnique: true
     * });
     *
     * expect(login.valid).toEqual(false);
     * expect(login.errors).toEqual({ notUnique: true });
     *
     * login.setValue('someOtherLogin');
     *
     * expect(login.valid).toEqual(true);
     * ```
     */
    /**
     * Sets options on a form control .
     *
     * Calling `setOptions` also updates the validity of the parent control.
     *
     * \@usageNotes
     * ### Manually set the options for a control
     *
     * ```
     * const login = new FormControl('someLogin');
     * login.setErrors({
     *   notUnique: true
     * });
     *
     * expect(login.valid).toEqual(false);
     * expect(login.errors).toEqual({ notUnique: true });
     *
     * login.setValue('someOtherLogin');
     *
     * expect(login.valid).toEqual(true);
     * ```
     * @param {?} options
     * @param {?=} opts
     * @return {?}
     */
    AbstractControl.prototype.setOptions = /**
     * Sets options on a form control .
     *
     * Calling `setOptions` also updates the validity of the parent control.
     *
     * \@usageNotes
     * ### Manually set the options for a control
     *
     * ```
     * const login = new FormControl('someLogin');
     * login.setErrors({
     *   notUnique: true
     * });
     *
     * expect(login.valid).toEqual(false);
     * expect(login.errors).toEqual({ notUnique: true });
     *
     * login.setValue('someOtherLogin');
     *
     * expect(login.valid).toEqual(true);
     * ```
     * @param {?} options
     * @param {?=} opts
     * @return {?}
     */
    function (options, opts) {
        if (opts === void 0) { opts = {}; }
        this._initialOptions = options;
        this._updateControlsOptions(opts.emitEvent !== false);
    };
    /**
     * Sets errors on a form control when running validations manually, rather than automatically.
     *
     * Calling `setErrors` also updates the validity of the parent control.
     *
     * @usageNotes
     * ### Manually set the errors for a control
     *
     * ```
     * const login = new FormControl('someLogin');
     * login.setErrors({
     *   notUnique: true
     * });
     *
     * expect(login.valid).toEqual(false);
     * expect(login.errors).toEqual({ notUnique: true });
     *
     * login.setValue('someOtherLogin');
     *
     * expect(login.valid).toEqual(true);
     * ```
     */
    /**
     * Sets errors on a form control when running validations manually, rather than automatically.
     *
     * Calling `setErrors` also updates the validity of the parent control.
     *
     * \@usageNotes
     * ### Manually set the errors for a control
     *
     * ```
     * const login = new FormControl('someLogin');
     * login.setErrors({
     *   notUnique: true
     * });
     *
     * expect(login.valid).toEqual(false);
     * expect(login.errors).toEqual({ notUnique: true });
     *
     * login.setValue('someOtherLogin');
     *
     * expect(login.valid).toEqual(true);
     * ```
     * @param {?} errors
     * @param {?=} opts
     * @return {?}
     */
    AbstractControl.prototype.setErrors = /**
     * Sets errors on a form control when running validations manually, rather than automatically.
     *
     * Calling `setErrors` also updates the validity of the parent control.
     *
     * \@usageNotes
     * ### Manually set the errors for a control
     *
     * ```
     * const login = new FormControl('someLogin');
     * login.setErrors({
     *   notUnique: true
     * });
     *
     * expect(login.valid).toEqual(false);
     * expect(login.errors).toEqual({ notUnique: true });
     *
     * login.setValue('someOtherLogin');
     *
     * expect(login.valid).toEqual(true);
     * ```
     * @param {?} errors
     * @param {?=} opts
     * @return {?}
     */
    function (errors, opts) {
        if (opts === void 0) { opts = {}; }
        ((/** @type {?} */ (this))).errors = errors;
        this._updateControlsErrors(opts.emitEvent !== false);
    };
    //
    /**
     * @param parent Sets the parent of the control
     */
    //
    /**
     * @param {?} parent Sets the parent of the control
     * @return {?}
     */
    AbstractControl.prototype.setParent = 
    //
    /**
     * @param {?} parent Sets the parent of the control
     * @return {?}
     */
    function (parent) {
        this._parent = parent;
    };
    /**
     * @param root Sets the root of the form
     */
    /**
     * @param {?} root Sets the root of the form
     * @return {?}
     */
    AbstractControl.prototype.setRoot = /**
     * @param {?} root Sets the root of the form
     * @return {?}
     */
    function (root) {
        this._root = root;
    };
    /**
     * @param {?} options
     * @param {?=} opts
     * @return {?}
     */
    AbstractControl.prototype.updateOptions = /**
     * @param {?} options
     * @param {?=} opts
     * @return {?}
     */
    function (options, opts) {
        if (opts === void 0) { opts = {}; }
        this._initialOptions = tslib.__assign({}, this._initialOptions, options);
        this._updateControlsOptions(opts.emitEvent !== false);
    };
    /**
     * Recalculates the value and validation status of the control.
     *
     * By default, it also updates the value and validity of its ancestors.
     *
     * @param opts options options determine how the control propagates changes and emits events
     * after updates and validity checks are applied.
     * * `onlySelf`: When true, only update this control. When false or not supplied,
     * update all direct ancestors. Default is false..
     * * `emitEvent`: When true or not supplied (the default), emit the `valueChanges` event
     * observables emit events with the latest status and value when the control is updated.
     * When false, no events are emitted.
     */
    /**
     * Recalculates the value and validation status of the control.
     *
     * By default, it also updates the value and validity of its ancestors.
     *
     * @param {?=} opts options options determine how the control propagates changes and emits events
     * after updates and validity checks are applied.
     * * `onlySelf`: When true, only update this control. When false or not supplied,
     * update all direct ancestors. Default is false..
     * * `emitEvent`: When true or not supplied (the default), emit the `valueChanges` event
     * observables emit events with the latest status and value when the control is updated.
     * When false, no events are emitted.
     * @return {?}
     */
    AbstractControl.prototype.updateValueAndValidity = /**
     * Recalculates the value and validation status of the control.
     *
     * By default, it also updates the value and validity of its ancestors.
     *
     * @param {?=} opts options options determine how the control propagates changes and emits events
     * after updates and validity checks are applied.
     * * `onlySelf`: When true, only update this control. When false or not supplied,
     * update all direct ancestors. Default is false..
     * * `emitEvent`: When true or not supplied (the default), emit the `valueChanges` event
     * observables emit events with the latest status and value when the control is updated.
     * When false, no events are emitted.
     * @return {?}
     */
    function (opts) {
        if (opts === void 0) { opts = {}; }
        this._setInitialStatus();
        this._updateValue();
        if (this.enabled) {
            this._cancelExistingSubscription();
            ((/** @type {?} */ (this))).errors = this._runJoiValidation();
            ((/** @type {?} */ (this))).status = this._calculateStatus();
            if (this.status === exports.VALID || this.status === exports.PENDING) {
                this.runAsyncValidator(opts.emitEvent);
            }
        }
        if (opts.emitEvent !== false) {
            ((/** @type {?} */ (this.valueChanges))).emit(this.value);
            ((/** @type {?} */ (this.statusChanges))).emit(this.status);
        }
        if (this._parent && !opts.onlySelf) {
            this._parent.updateValueAndValidity(opts);
        }
    };
    /** @internal */
    /**
     * \@internal
     * @private
     * @return {?}
     */
    AbstractControl.prototype._calculateStatus = /**
     * \@internal
     * @private
     * @return {?}
     */
    function () {
        if (this._allControlsDisabled())
            return exports.DISABLED;
        if (this.errors)
            return exports.INVALID;
        if (this._anyControlsHaveStatus(exports.INVALID))
            return exports.INVALID;
        if (this._anyControlsHaveStatus(exports.PENDING))
            return exports.PENDING;
        return exports.VALID;
    };
    /** @internal */
    /**
     * \@internal
     * @return {?}
     */
    AbstractControl.prototype._runJoiValidation = /**
     * \@internal
     * @return {?}
     */
    function () {
        return null;
    };
    /**
     * @private
     * @return {?}
     */
    AbstractControl.prototype._cancelExistingSubscription = /**
     * @private
     * @return {?}
     */
    function () {
        if (this._asyncValidationSubscription) {
            this._asyncValidationSubscription.unsubscribe();
        }
    };
    /**
     * @private
     * @return {?}
     */
    AbstractControl.prototype._setInitialStatus = /**
     * @private
     * @return {?}
     */
    function () {
        ((/** @type {?} */ (this))).status = this._allControlsDisabled() ? exports.DISABLED : exports.VALID;
    };
    /** @internal */
    /**
     * \@internal
     * @return {?}
     */
    AbstractControl.prototype._updateValue = /**
     * \@internal
     * @return {?}
     */
    function () {
    };
    /** @internal */
    /**
     * \@internal
     * @return {?}
     */
    AbstractControl.prototype._initObservables = /**
     * \@internal
     * @return {?}
     */
    function () {
        ((/** @type {?} */ (this))).valueChanges = new core.EventEmitter();
        ((/** @type {?} */ (this))).statusChanges = new core.EventEmitter();
    };
    /** @internal */
    /**
     * \@internal
     * @return {?}
     */
    AbstractControl.prototype._initValidators = /**
     * \@internal
     * @return {?}
     */
    function () {
        var _this = this;
        ((/** @type {?} */ (this))).runAsyncValidator = lodash_1.default.debounce(function (emitEvent) {
            if (_this.asyncValidator) {
                ((/** @type {?} */ (_this))).status = exports.PENDING;
                /** @type {?} */
                var obs = _this.asyncValidator(_this);
                // this._asyncValidationSubscription =
                // obs.subscribe((errors: JoiError[] | null) => {
                //   if ((this.touched || this.dirty) && this.value) {
                //     (this as { status: string }).status = INVALID;
                //     this.setErrors(errors, { emitEvent });
                //   }
                // });
            }
        }, 500);
    };
    /** @internal */
    /**
     * \@internal
     * @param {?} emitEvent
     * @return {?}
     */
    AbstractControl.prototype._updateControlsOptions = /**
     * \@internal
     * @param {?} emitEvent
     * @return {?}
     */
    function (emitEvent) {
        ((/** @type {?} */ (this))).status = this._calculateStatus();
        if (emitEvent) {
            ((/** @type {?} */ (this.statusChanges))).emit(this.status);
        }
    };
    /** @internal */
    /**
     * \@internal
     * @param {?} emitEvent
     * @return {?}
     */
    AbstractControl.prototype._updateControlsErrors = /**
     * \@internal
     * @param {?} emitEvent
     * @return {?}
     */
    function (emitEvent) {
        ((/** @type {?} */ (this))).status = this._calculateStatus();
        if (emitEvent) {
            ((/** @type {?} */ (this.statusChanges))).emit(this.status);
        }
        if (this._parent) {
            this._parent._updateControlsErrors(emitEvent);
        }
    };
    return AbstractControl;
}());
exports.AbstractControl = AbstractControl;
/**
 * Reports that a FormControl is valid, meaning that no errors exist in the input value.
 *
 * @see `status`
 * @type {?}
 */
exports.VALID = 'VALID';
/**
 * Reports that a FormControl is invalid, meaning that an error exists in the input value.
 *
 * @see `status`
 * @type {?}
 */
exports.INVALID = 'INVALID';
/**
 * Reports that a FormControl is pending, meaning that that async validation is occurring and
 * errors are not yet available for the input value.
 *
 * @see `markAsPending`
 * @see `status`
 * @type {?}
 */
exports.PENDING = 'PENDING';
/**
 * Reports that a FormControl is disabled, meaning that the control is exempt from ancestor
 * calculations of validity or value.
 *
 * @see `markAsDisabled`
 * @see `status`
 * @type {?}
 */
exports.DISABLED = 'DISABLED';

});

unwrapExports(AbstractControl_1);
var AbstractControl_2 = AbstractControl_1.AbstractControl;
var AbstractControl_3 = AbstractControl_1.VALID;
var AbstractControl_4 = AbstractControl_1.INVALID;
var AbstractControl_5 = AbstractControl_1.PENDING;
var AbstractControl_6 = AbstractControl_1.DISABLED;

var FormControl_1 = createCommonjsModule(function (module, exports) {
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
Object.defineProperty(exports, "__esModule", { value: true });


var lodash_1 = tslib.__importDefault(lodash);
/**
 * Tracks the value and validation status of an individual form control.
 *
 * This is one of the three fundamental building blocks of Angular forms, along with
 * `FormGroup.ts` and `FormArray`. It extends the `IonarAbstractControl` class that
 * implements most of the base functionality for accessing the value, validation status,
 * user interactions and events.
 *
 * @see `IonarAbstractControl`
 * @see [Reactive Forms Guide](guide/reactive-forms)
 * @see [Usage Notes](#usage-notes)
 *
 * \@usageNotes
 *
 * ### Initializing Form Controls
 *
 * Instantiate a `FormControl`, with an initial value.
 *
 * ```ts
 * const control = new FormControl('some value');
 * console.log(control.value);     // 'some value'
 * ```
 *
 * The following example initializes the control with a form state object. The `value`
 * and `disabled` keys are required in this case.
 *
 * ```ts
 * const control = new FormControl({ value: 'n/a', disabled: true });
 * console.log(control.value);     // 'n/a'
 * console.log(control.status);    // 'DISABLED'
 * ```
 *
 * The following example initializes the control with a sync validator.
 *
 * ```ts
 * const control = new FormControl('', Validators.required);
 * console.log(control.value);      // ''
 * console.log(control.status);     // 'INVALID'
 * ```
 *
 * The following example initializes the control using an options object.
 *
 * ```ts
 * const control = new FormControl('', {
 *    validators: Validators.required,
 *    asyncValidators: myAsyncValidator
 * });
 * ```
 *
 * ### Configure the control to update on a blur event
 *
 * Set the `updateOn` option to `'blur'` to update on the blur `event`.
 *
 * ```ts
 * const control = new FormControl('', { updateOn: 'blur' });
 * ```
 *
 * ### Configure the control to update on a submit event
 *
 * Set the `updateOn` option to `'submit'` to update on a submit `event`.
 *
 * ```ts
 * const control = new FormControl('', { updateOn: 'submit' });
 * ```
 *
 * ### Reset the control back to an initial value
 *
 * You reset to a specific form state by passing through a standalone
 * value or a form state object that contains both a value and a disabled state
 * (these are the only two properties that cannot be calculated).
 *
 * ```ts
 * const control = new FormControl('Nancy');
 *
 * console.log(control.value); // 'Nancy'
 *
 * control.reset('Drew');
 *
 * console.log(control.value); // 'Drew'
 * ```
 *
 * ### Reset the control back to an initial value and disabled
 *
 * ```
 * const control = new FormControl('Nancy');
 *
 * console.log(control.value); // 'Nancy'
 * console.log(control.status); // 'VALID'
 *
 * control.reset({ value: 'Drew', disabled: true });
 *
 * console.log(control.value); // 'Drew'
 * console.log(control.status); // 'DISABLED'
 * ```
 *
 * \@publicApi
 */
var /**
 * Tracks the value and validation status of an individual form control.
 *
 * This is one of the three fundamental building blocks of Angular forms, along with
 * `FormGroup.ts` and `FormArray`. It extends the `IonarAbstractControl` class that
 * implements most of the base functionality for accessing the value, validation status,
 * user interactions and events.
 *
 * @see `IonarAbstractControl`
 * @see [Reactive Forms Guide](guide/reactive-forms)
 * @see [Usage Notes](#usage-notes)
 *
 * \@usageNotes
 *
 * ### Initializing Form Controls
 *
 * Instantiate a `FormControl`, with an initial value.
 *
 * ```ts
 * const control = new FormControl('some value');
 * console.log(control.value);     // 'some value'
 * ```
 *
 * The following example initializes the control with a form state object. The `value`
 * and `disabled` keys are required in this case.
 *
 * ```ts
 * const control = new FormControl({ value: 'n/a', disabled: true });
 * console.log(control.value);     // 'n/a'
 * console.log(control.status);    // 'DISABLED'
 * ```
 *
 * The following example initializes the control with a sync validator.
 *
 * ```ts
 * const control = new FormControl('', Validators.required);
 * console.log(control.value);      // ''
 * console.log(control.status);     // 'INVALID'
 * ```
 *
 * The following example initializes the control using an options object.
 *
 * ```ts
 * const control = new FormControl('', {
 *    validators: Validators.required,
 *    asyncValidators: myAsyncValidator
 * });
 * ```
 *
 * ### Configure the control to update on a blur event
 *
 * Set the `updateOn` option to `'blur'` to update on the blur `event`.
 *
 * ```ts
 * const control = new FormControl('', { updateOn: 'blur' });
 * ```
 *
 * ### Configure the control to update on a submit event
 *
 * Set the `updateOn` option to `'submit'` to update on a submit `event`.
 *
 * ```ts
 * const control = new FormControl('', { updateOn: 'submit' });
 * ```
 *
 * ### Reset the control back to an initial value
 *
 * You reset to a specific form state by passing through a standalone
 * value or a form state object that contains both a value and a disabled state
 * (these are the only two properties that cannot be calculated).
 *
 * ```ts
 * const control = new FormControl('Nancy');
 *
 * console.log(control.value); // 'Nancy'
 *
 * control.reset('Drew');
 *
 * console.log(control.value); // 'Drew'
 * ```
 *
 * ### Reset the control back to an initial value and disabled
 *
 * ```
 * const control = new FormControl('Nancy');
 *
 * console.log(control.value); // 'Nancy'
 * console.log(control.status); // 'VALID'
 *
 * control.reset({ value: 'Drew', disabled: true });
 *
 * console.log(control.value); // 'Drew'
 * console.log(control.status); // 'DISABLED'
 * ```
 *
 * \@publicApi
 */
FormControl = /** @class */ (function (_super) {
    tslib.__extends(FormControl, _super);
    /**
     * Creates a new `FormControl` instance.
     *
     * @param config Initializes the control with an object that defines the initial state.
     *
     */
    function FormControl(state) {
        var _this = _super.call(this, (/** @type {?} */ (state)), (/** @type {?} */ (state.options))) || this;
        /**
         * \@internal
         */
        _this._getControlSchema = function () {
            if (((/** @type {?} */ (_this.state))).schema)
                return ((/** @type {?} */ (_this.state))).schema;
        };
        /**
         * Sets the async validators that are active on this control. Calling this
         * overwrites any existing async validators.
         */
        _this._setAsyncValidators = function (asyncValidators) {
            // (this as { asyncValidator: ValidatorFn | null }).asyncValidator = coerceToAsyncValidator(asyncValidators);
        };
        _this._applyControlState = function () {
            ((/** @type {?} */ (_this.value))) = null;
            /** @type {?} */
            var properties = ((/** @type {?} */ (_this.state))).props;
            if (properties) {
                ((/** @type {?} */ (_this.value))) = properties.value;
            }
            // state.disabled ? this.disable({onlySelf: true, emitEvent: false}) :
            //         this.enable({onlySelf: true, emitEvent: false});
        };
        // this._coerceToJoiSchema();
        _this._setAsyncValidators(state.asyncValidator);
        _this._initObservables();
        _this._initValidators();
        _this._applyControlState();
        _this.updateValueAndValidity({ onlySelf: true, emitEvent: false });
        return _this;
    }
    /**
     * Sets a new value for the form control.
     *
     * @param value The new value for the control.
     * @param options options options that determine how the control proopagates changes
     * and emits events when the value changes.
     * The options options are passed to the {@link IonarAbstractControl#updateValueAndValidity
     * updateValueAndValidity} method.
     *
     * * `onlySelf`: When true, each change only affects this control, and not its parent. Default is
     * false.
     * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
     * `valueChanges`
     * observables emit events with the latest status and value when the control value is updated.
     * When false, no events are emitted.
     * * `emitModelToViewChange`: When true or not supplied  (the default), each change triggers an
     * `onChange` event to
     * update the view.
     * * `emitViewToModelChange`: When true or not supplied (the default), each change triggers an
     * `ngModelChange`
     * event to update the model.
     *
     */
    /**
     * Sets a new value for the form control.
     *
     * @param {?} value The new value for the control.
     * @param {?=} options options options that determine how the control proopagates changes
     * and emits events when the value changes.
     * The options options are passed to the {\@link IonarAbstractControl#updateValueAndValidity
     * updateValueAndValidity} method.
     *
     * * `onlySelf`: When true, each change only affects this control, and not its parent. Default is
     * false.
     * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
     * `valueChanges`
     * observables emit events with the latest status and value when the control value is updated.
     * When false, no events are emitted.
     * * `emitModelToViewChange`: When true or not supplied  (the default), each change triggers an
     * `onChange` event to
     * update the view.
     * * `emitViewToModelChange`: When true or not supplied (the default), each change triggers an
     * `ngModelChange`
     * event to update the model.
     *
     * @return {?}
     */
    FormControl.prototype.setValue = /**
     * Sets a new value for the form control.
     *
     * @param {?} value The new value for the control.
     * @param {?=} options options options that determine how the control proopagates changes
     * and emits events when the value changes.
     * The options options are passed to the {\@link IonarAbstractControl#updateValueAndValidity
     * updateValueAndValidity} method.
     *
     * * `onlySelf`: When true, each change only affects this control, and not its parent. Default is
     * false.
     * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
     * `valueChanges`
     * observables emit events with the latest status and value when the control value is updated.
     * When false, no events are emitted.
     * * `emitModelToViewChange`: When true or not supplied  (the default), each change triggers an
     * `onChange` event to
     * update the view.
     * * `emitViewToModelChange`: When true or not supplied (the default), each change triggers an
     * `ngModelChange`
     * event to update the model.
     *
     * @return {?}
     */
    function (value, options) {
        if (options === void 0) { options = {}; }
        ((/** @type {?} */ (this))).value = value;
        this.markAsDirty();
        this.updateValueAndValidity(options);
        if (lodash_1.default.has(this.options, ['submitOnChange'])) {
            this.root.submit(true);
        }
    };
    /**
     * Resets the form control, marking it `pristine` and `untouched`, and setting
     * the value to null.
     *
     * @param formState Resets the control with an initial value,
     * or an object that defines the initial value and disabled state.
     *
     * @param options options options that determine how the control propagates changes
     * and emits events after the value changes.
     *
     * * `onlySelf`: When true, each change only affects this control, and not its parent. Default is
     * false.
     * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
     * `valueChanges`
     * observables emit events with the latest status and value when the control is reset.
     * When false, no events are emitted.
     *
     */
    /**
     * Resets the form control, marking it `pristine` and `untouched`, and setting
     * the value to null.
     *
     * @param {?=} value
     * @param {?=} options options options that determine how the control propagates changes
     * and emits events after the value changes.
     *
     * * `onlySelf`: When true, each change only affects this control, and not its parent. Default is
     * false.
     * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
     * `valueChanges`
     * observables emit events with the latest status and value when the control is reset.
     * When false, no events are emitted.
     *
     * @return {?}
     */
    FormControl.prototype.reset = /**
     * Resets the form control, marking it `pristine` and `untouched`, and setting
     * the value to null.
     *
     * @param {?=} value
     * @param {?=} options options options that determine how the control propagates changes
     * and emits events after the value changes.
     *
     * * `onlySelf`: When true, each change only affects this control, and not its parent. Default is
     * false.
     * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
     * `valueChanges`
     * observables emit events with the latest status and value when the control is reset.
     * When false, no events are emitted.
     *
     * @return {?}
     */
    function (value, options) {
        if (value === void 0) { value = null; }
        if (options === void 0) { options = {}; }
        this.markAsPristine(options);
        this.markAsUntouched(options);
        this._applyControlState();
        this.updateValueAndValidity(options);
        if (lodash_1.default.has(this.options, ['submitOnChange'])) {
            this.root.submit(true);
        }
    };
    /**
     * Resets the form control, marking it `pristine` and `untouched`, and setting
     * the value to null.
     *
     * @param formState Resets the control with an initial value,
     * or an object that defines the initial value and disabled state.
     *
     * @param options options options that determine how the control propagates changes
     * and emits events after the value changes.
     *
     * * `onlySelf`: When true, each change only affects this control, and not its parent. Default is
     * false.
     * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
     * `valueChanges`
     * observables emit events with the latest status and value when the control is reset.
     * When false, no events are emitted.
     *
     */
    /**
     * Resets the form control, marking it `pristine` and `untouched`, and setting
     * the value to null.
     *
     * @param {?=} options options options that determine how the control propagates changes
     * and emits events after the value changes.
     *
     * * `onlySelf`: When true, each change only affects this control, and not its parent. Default is
     * false.
     * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
     * `valueChanges`
     * observables emit events with the latest status and value when the control is reset.
     * When false, no events are emitted.
     *
     * @return {?}
     */
    FormControl.prototype.clear = /**
     * Resets the form control, marking it `pristine` and `untouched`, and setting
     * the value to null.
     *
     * @param {?=} options options options that determine how the control propagates changes
     * and emits events after the value changes.
     *
     * * `onlySelf`: When true, each change only affects this control, and not its parent. Default is
     * false.
     * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
     * `valueChanges`
     * observables emit events with the latest status and value when the control is reset.
     * When false, no events are emitted.
     *
     * @return {?}
     */
    function (options) {
        if (options === void 0) { options = {}; }
        this.markAsPristine(options);
        this.markAsUntouched(options);
        ((/** @type {?} */ (this))).value = null;
        this.updateValueAndValidity(options);
        if (lodash_1.default.has(this.options, ['submitOnChange'])) {
            this.root.submit(true);
        }
    };
    /**
     * Sets errors on a form control when running validations manually, rather than automatically.
     *
     * Calling `setErrors` also updates the validity of the parent control.
     *
     * @usageNotes
     * ### Manually set the errors for a control
     *
     * ```
     * const login = new FormControl('someLogin');
     * login.setErrors({
     *   notUnique: true
     * });
     *
     * expect(login.valid).toEqual(false);
     * expect(login.errors).toEqual({ notUnique: true });
     *
     * login.setValue('someOtherLogin');
     *
     * expect(login.valid).toEqual(true);
     * ```
     */
    /**
     * Sets errors on a form control when running validations manually, rather than automatically.
     *
     * Calling `setErrors` also updates the validity of the parent control.
     *
     * \@usageNotes
     * ### Manually set the errors for a control
     *
     * ```
     * const login = new FormControl('someLogin');
     * login.setErrors({
     *   notUnique: true
     * });
     *
     * expect(login.valid).toEqual(false);
     * expect(login.errors).toEqual({ notUnique: true });
     *
     * login.setValue('someOtherLogin');
     *
     * expect(login.valid).toEqual(true);
     * ```
     * @param {?} errors
     * @param {?=} opts
     * @return {?}
     */
    FormControl.prototype.setErrors = /**
     * Sets errors on a form control when running validations manually, rather than automatically.
     *
     * Calling `setErrors` also updates the validity of the parent control.
     *
     * \@usageNotes
     * ### Manually set the errors for a control
     *
     * ```
     * const login = new FormControl('someLogin');
     * login.setErrors({
     *   notUnique: true
     * });
     *
     * expect(login.valid).toEqual(false);
     * expect(login.errors).toEqual({ notUnique: true });
     *
     * login.setValue('someOtherLogin');
     *
     * expect(login.valid).toEqual(true);
     * ```
     * @param {?} errors
     * @param {?=} opts
     * @return {?}
     */
    function (errors, opts) {
        if (opts === void 0) { opts = {}; }
        ((/** @type {?} */ (this))).errors = errors;
        this._updateControlsErrors(opts.emitEvent !== false);
    };
    /** @internal */
    /**
     * \@internal
     * @return {?}
     */
    FormControl.prototype._updateValue = /**
     * \@internal
     * @return {?}
     */
    function () {
    };
    /**
     * @internal
     */
    /**
     * \@internal
     * @return {?}
     */
    FormControl.prototype._allControlsDisabled = /**
     * \@internal
     * @return {?}
     */
    function () {
        return this.disabled;
    };
    /** @internal */
    /**
     * \@internal
     * @param {?} status
     * @return {?}
     */
    FormControl.prototype._anyControlsHaveStatus = /**
     * \@internal
     * @param {?} status
     * @return {?}
     */
    function (status) {
        return false;
    };
    return FormControl;
}(AbstractControl_1.AbstractControl));
exports.FormControl = FormControl;

});

unwrapExports(FormControl_1);
var FormControl_2 = FormControl_1.FormControl;

var FormGroup_1 = createCommonjsModule(function (module, exports) {
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
Object.defineProperty(exports, "__esModule", { value: true });

var lodash_1 = tslib.__importDefault(lodash);
var joi_1 = tslib.__importDefault(joi);



/**
 * Tracks the value and validity state of a group of `FormControl` instances.
 *
 * A `FormGroup` aggregates the values of each child `FormControl` into one object,
 * with each control name as the key.  It calculates its status by reducing the status values
 * of its children. For example, if one of the controls in a group is invalid, the entire
 * group becomes invalid.
 *
 * `FormGroup` is one of the three fundamental building blocks used to define forms in Angular,
 * along with `FormControl` and `FormArray`.
 *
 * When instantiating a `FormGroup`, pass in a collection of child controls as the first
 * argument. The key for each child registers the name for the control.
 *
 * \@usageNotes
 *
 * ### Create a form group with 2 controls
 *
 * ```
 * const form = new FormGroup({
 *   first: new FormControl('Nancy', Validators.minLength(2)),
 *   last: new FormControl('Drew'),
 * });
 *
 * console.log(form.value);   // {first: 'Nancy', last; 'Drew'}
 * console.log(form.status);  // 'VALID'
 * ```
 *
 * ### Create a form group with a group-level validator
 *
 * You include group-level validators as the second arg, or group-level async
 * validators as the third arg. These come in handy when you want to perform validation
 * that considers the value of more than one child control.
 *
 * ```
 * const form = new FormGroup({
 *   password: new FormControl('', Validators.minLength(2)),
 *   passwordConfirm: new FormControl('', Validators.minLength(2)),
 * }, passwordMatchValidator);
 *
 *
 * function passwordMatchValidator(g: FormGroup) {
 *    return g.get('password').value === g.get('passwordConfirm').value
 *       ? null : {'mismatch': true};
 * }
 * ```
 *
 * Like `FormControl` instances, you choose to pass in
 * validators and async validators as part of an options object.
 *
 * ```
 * const form = new FormGroup({
 *   password: new FormControl('')
 *   passwordConfirm: new FormControl('')
 * }, { validators: passwordMatchValidator, asyncValidators: otherValidator });
 * ```
 *
 * ### Set the updateOn property for all controls in a form group
 *
 * The options object is used to set a default value for each child
 * control's `updateOn` property. If you set `updateOn` to `'blur'` at the
 * group level, all child controls default to 'blur', unless the child
 * has explicitly specified a different `updateOn` value.
 *
 * ```ts
 * const c = new FormGroup({
 *   one: new FormControl()
 * }, { updateOn: 'blur' });
 * ```
 *
 * \@publicApi
 */
var /**
 * Tracks the value and validity state of a group of `FormControl` instances.
 *
 * A `FormGroup` aggregates the values of each child `FormControl` into one object,
 * with each control name as the key.  It calculates its status by reducing the status values
 * of its children. For example, if one of the controls in a group is invalid, the entire
 * group becomes invalid.
 *
 * `FormGroup` is one of the three fundamental building blocks used to define forms in Angular,
 * along with `FormControl` and `FormArray`.
 *
 * When instantiating a `FormGroup`, pass in a collection of child controls as the first
 * argument. The key for each child registers the name for the control.
 *
 * \@usageNotes
 *
 * ### Create a form group with 2 controls
 *
 * ```
 * const form = new FormGroup({
 *   first: new FormControl('Nancy', Validators.minLength(2)),
 *   last: new FormControl('Drew'),
 * });
 *
 * console.log(form.value);   // {first: 'Nancy', last; 'Drew'}
 * console.log(form.status);  // 'VALID'
 * ```
 *
 * ### Create a form group with a group-level validator
 *
 * You include group-level validators as the second arg, or group-level async
 * validators as the third arg. These come in handy when you want to perform validation
 * that considers the value of more than one child control.
 *
 * ```
 * const form = new FormGroup({
 *   password: new FormControl('', Validators.minLength(2)),
 *   passwordConfirm: new FormControl('', Validators.minLength(2)),
 * }, passwordMatchValidator);
 *
 *
 * function passwordMatchValidator(g: FormGroup) {
 *    return g.get('password').value === g.get('passwordConfirm').value
 *       ? null : {'mismatch': true};
 * }
 * ```
 *
 * Like `FormControl` instances, you choose to pass in
 * validators and async validators as part of an options object.
 *
 * ```
 * const form = new FormGroup({
 *   password: new FormControl('')
 *   passwordConfirm: new FormControl('')
 * }, { validators: passwordMatchValidator, asyncValidators: otherValidator });
 * ```
 *
 * ### Set the updateOn property for all controls in a form group
 *
 * The options object is used to set a default value for each child
 * control's `updateOn` property. If you set `updateOn` to `'blur'` at the
 * group level, all child controls default to 'blur', unless the child
 * has explicitly specified a different `updateOn` value.
 *
 * ```ts
 * const c = new FormGroup({
 *   one: new FormControl()
 * }, { updateOn: 'blur' });
 * ```
 *
 * \@publicApi
 */
FormGroup = /** @class */ (function (_super) {
    tslib.__extends(FormGroup, _super);
    /**
     * Creates a new `FormGroup` instance.
     *
     * @param state A collection of child controls. The key for each child is the name
     * under which it is registered.
     *
     */
    function FormGroup(state, options) {
        var _this = _super.call(this, null, (/** @type {?} */ (options))) || this;
        /**
         * \@description
         * Reports whether the form submission has been triggered.
         */
        _this.submitted = false;
        /**
         * \@internal
         */
        _this._updateChildError = function (errors) {
            lodash_1.default.each(errors, function (err) {
                /** @type {?} */
                var control = lodash_1.default.get(_this.controls, err.path);
                if (control instanceof FormControl_1.FormControl) {
                    control.setErrors([err]);
                }
            });
        };
        /**
         * \@internal
         */
        _this._getControlSchema = function () {
            return _this.options.schema || joi_1.default.object().keys(_this._reduceSchema());
        };
        _this._applyFormState = function () {
            if (!_this.parent && !_this.root) {
                _this.setRoot(_this);
            }
        };
        _this._applyFormState();
        _this._setUpControls(state);
        _this._initObservables();
        _this.updateValueAndValidity({ onlySelf: true, emitEvent: false });
        return _this;
    }
    /**
     * Registers a control with the group's list of controls.
     *
     * This method does not update the value or validity of the control.
     * Use {@link FormGroup#addControl addControl} instead.
     *
     * @param name The control name to register in the collection
     * @param control Provides the control for the given name
     */
    /**
     * Registers a control with the group's list of controls.
     *
     * This method does not update the value or validity of the control.
     * Use {\@link FormGroup#addControl addControl} instead.
     *
     * @param {?} name The control name to register in the collection
     * @param {?} control Provides the control for the given name
     * @return {?}
     */
    FormGroup.prototype.registerControl = /**
     * Registers a control with the group's list of controls.
     *
     * This method does not update the value or validity of the control.
     * Use {\@link FormGroup#addControl addControl} instead.
     *
     * @param {?} name The control name to register in the collection
     * @param {?} control Provides the control for the given name
     * @return {?}
     */
    function (name, control) {
        if (this.controls[name])
            return this.controls[name];
        control.setParent(this);
        this.controls[name] = control;
        return control;
    };
    /**
     * Add a control to this group.
     *
     * This method also updates the value and validity of the control.
     *
     * @param name The control name to add to the collection
     * @param control Provides the control for the given name
     */
    /**
     * Add a control to this group.
     *
     * This method also updates the value and validity of the control.
     *
     * @param {?} name The control name to add to the collection
     * @param {?} control Provides the control for the given name
     * @return {?}
     */
    FormGroup.prototype.addControl = /**
     * Add a control to this group.
     *
     * This method also updates the value and validity of the control.
     *
     * @param {?} name The control name to add to the collection
     * @param {?} control Provides the control for the given name
     * @return {?}
     */
    function (name, control) {
        this.registerControl(name, control);
        this.updateValueAndValidity();
    };
    /**
     * Remove a control from this group.
     *
     * @param name The control name to remove from the collection
     */
    /**
     * Remove a control from this group.
     *
     * @param {?} name The control name to remove from the collection
     * @return {?}
     */
    FormGroup.prototype.removeControl = /**
     * Remove a control from this group.
     *
     * @param {?} name The control name to remove from the collection
     * @return {?}
     */
    function (name) {
        ((/** @type {?} */ (this))).controls = (/** @type {?} */ (lodash_1.default.omit(this.controls, [name])));
        this.updateValueAndValidity();
    };
    /**
     * Replace an existing control.
     *
     * @param name The control name to replace in the collection
     * @param control Provides the control for the given name
     */
    /**
     * Replace an existing control.
     *
     * @param {?} name The control name to replace in the collection
     * @param {?} control Provides the control for the given name
     * @return {?}
     */
    FormGroup.prototype.setControl = /**
     * Replace an existing control.
     *
     * @param {?} name The control name to replace in the collection
     * @param {?} control Provides the control for the given name
     * @return {?}
     */
    function (name, control) {
        ((/** @type {?} */ (this))).controls = (/** @type {?} */ (lodash_1.default.omit(this.controls, [name])));
        if (control)
            this.registerControl(name, control);
        this.updateValueAndValidity();
    };
    /**
     * Sets the value of the `FormGroup`. It accepts an object that matches
     * the structure of the group, with control names as keys.
     *
     * @usageNotes
     * ### Set the complete value for the form group
     *
     * ```
     * const form = new FormGroup({
     *   first: new FormControl(),
     *   last: new FormControl()
     * });
     *
     * console.log(form.value);   // {first: null, last: null}
     *
     * form.setValue({first: 'Nancy', last: 'Drew'});
     * console.log(form.value);   // {first: 'Nancy', last: 'Drew'}
     * ```
     *
     * @throws When strict checks fail, such as setting the value of a control
     * that doesn't exist or if you excluding the value of a control.
     *
     * @param value The new value for the control that matches the structure of the group.
     * @param options options options that determine how the control propagates changes
     * and emits events after the value changes.
     * The options options are passed to the {@link IonarAbstractControl#updateValueAndValidity
     * updateValueAndValidity} method.
     *
     * * `onlySelf`: When true, each change only affects this control, and not its parent. Default is
     * false.
     * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
     * `valueChanges`
     * observables emit events with the latest status and value when the control value is updated.
     * When false, no events are emitted.
     */
    /**
     * Sets the value of the `FormGroup`. It accepts an object that matches
     * the structure of the group, with control names as keys.
     *
     * \@usageNotes
     * ### Set the complete value for the form group
     *
     * ```
     * const form = new FormGroup({
     *   first: new FormControl(),
     *   last: new FormControl()
     * });
     *
     * console.log(form.value);   // {first: null, last: null}
     *
     * form.setValue({first: 'Nancy', last: 'Drew'});
     * console.log(form.value);   // {first: 'Nancy', last: 'Drew'}
     * ```
     *
     * @throws When strict checks fail, such as setting the value of a control
     * that doesn't exist or if you excluding the value of a control.
     *
     * @param {?} formValue
     * @param {?=} options options options that determine how the control propagates changes
     * and emits events after the value changes.
     * The options options are passed to the {\@link IonarAbstractControl#updateValueAndValidity
     * updateValueAndValidity} method.
     *
     * * `onlySelf`: When true, each change only affects this control, and not its parent. Default is
     * false.
     * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
     * `valueChanges`
     * observables emit events with the latest status and value when the control value is updated.
     * When false, no events are emitted.
     * @return {?}
     */
    FormGroup.prototype.setValue = /**
     * Sets the value of the `FormGroup`. It accepts an object that matches
     * the structure of the group, with control names as keys.
     *
     * \@usageNotes
     * ### Set the complete value for the form group
     *
     * ```
     * const form = new FormGroup({
     *   first: new FormControl(),
     *   last: new FormControl()
     * });
     *
     * console.log(form.value);   // {first: null, last: null}
     *
     * form.setValue({first: 'Nancy', last: 'Drew'});
     * console.log(form.value);   // {first: 'Nancy', last: 'Drew'}
     * ```
     *
     * @throws When strict checks fail, such as setting the value of a control
     * that doesn't exist or if you excluding the value of a control.
     *
     * @param {?} formValue
     * @param {?=} options options options that determine how the control propagates changes
     * and emits events after the value changes.
     * The options options are passed to the {\@link IonarAbstractControl#updateValueAndValidity
     * updateValueAndValidity} method.
     *
     * * `onlySelf`: When true, each change only affects this control, and not its parent. Default is
     * false.
     * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
     * `valueChanges`
     * observables emit events with the latest status and value when the control value is updated.
     * When false, no events are emitted.
     * @return {?}
     */
    function (formValue, options) {
        var _this = this;
        if (options === void 0) { options = {}; }
        lodash_1.default.forOwn(formValue, function (value, name) {
            _this._throwIfControlMissing(name);
            _this.controls[name].setValue(value, { onlySelf: true, emitEvent: options.emitEvent });
        });
        this.updateValueAndValidity(options);
    };
    /**
     * Resets the `FormGroup`, marks all descendants are marked `pristine` and `untouched`, and
     * the value of all descendants to null.
     *
     * You reset to a specific form state by passing in a map of states
     * that matches the structure of your form, with control names as keys. The state
     * is a standalone value or a form state object with both a value and a disabled
     * status.
     *
     * @param formState Resets the control with an initial value,
     * or an object that defines the initial value and disabled state.
     *
     * @param options options options that determine how the control propagates changes
     * and emits events when the group is reset.
     * * `onlySelf`: When true, each change only affects this control, and not its parent. Default is
     * false.
     * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
     * `valueChanges`
     * observables emit events with the latest status and value when the control is reset.
     * When false, no events are emitted.
     * The options options are passed to the {@link AbstractControl#updateValueAndValidity
     * updateValueAndValidity} method.
     *
     * @usageNotes
     *
     * ### Reset the form group values
     *
     * ```ts
     * const form = new FormGroup({
     *   first: new FormControl('first name'),
     *   last: new FormControl('last name')
     * });
     *
     * console.log(form.value);  // {first: 'first name', last: 'last name'}
     *
     * form.reset({ first: 'name', last: 'last name' });
     *
     * console.log(form.value);  // {first: 'name', last: 'last name'}
     * ```
     *
     * ### Reset the form group values and disabled status
     *
     * ```
     * const form = new FormGroup({
     *   first: new FormControl('first name'),
     *   last: new FormControl('last name')
     * });
     *
     * form.reset({
     *   first: {value: 'name', disabled: true},
     *   last: 'last'
     * });
     *
     * console.log(this.form.value);  // {first: 'name', last: 'last name'}
     * console.log(this.form.get('first').status);  // 'DISABLED'
     * ```
     */
    /**
     * Resets the `FormGroup`, marks all descendants are marked `pristine` and `untouched`, and
     * the value of all descendants to null.
     *
     * You reset to a specific form state by passing in a map of states
     * that matches the structure of your form, with control names as keys. The state
     * is a standalone value or a form state object with both a value and a disabled
     * status.
     *
     * \@usageNotes
     *
     * ### Reset the form group values
     *
     * ```ts
     * const form = new FormGroup({
     *   first: new FormControl('first name'),
     *   last: new FormControl('last name')
     * });
     *
     * console.log(form.value);  // {first: 'first name', last: 'last name'}
     *
     * form.reset({ first: 'name', last: 'last name' });
     *
     * console.log(form.value);  // {first: 'name', last: 'last name'}
     * ```
     *
     * ### Reset the form group values and disabled status
     *
     * ```
     * const form = new FormGroup({
     *   first: new FormControl('first name'),
     *   last: new FormControl('last name')
     * });
     *
     * form.reset({
     *   first: {value: 'name', disabled: true},
     *   last: 'last'
     * });
     *
     * console.log(this.form.value);  // {first: 'name', last: 'last name'}
     * console.log(this.form.get('first').status);  // 'DISABLED'
     * ```
     * @param {?=} value
     * @param {?=} options options options that determine how the control propagates changes
     * and emits events when the group is reset.
     * * `onlySelf`: When true, each change only affects this control, and not its parent. Default is
     * false.
     * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
     * `valueChanges`
     * observables emit events with the latest status and value when the control is reset.
     * When false, no events are emitted.
     * The options options are passed to the {\@link AbstractControl#updateValueAndValidity
     * updateValueAndValidity} method.
     *
     * @return {?}
     */
    FormGroup.prototype.reset = /**
     * Resets the `FormGroup`, marks all descendants are marked `pristine` and `untouched`, and
     * the value of all descendants to null.
     *
     * You reset to a specific form state by passing in a map of states
     * that matches the structure of your form, with control names as keys. The state
     * is a standalone value or a form state object with both a value and a disabled
     * status.
     *
     * \@usageNotes
     *
     * ### Reset the form group values
     *
     * ```ts
     * const form = new FormGroup({
     *   first: new FormControl('first name'),
     *   last: new FormControl('last name')
     * });
     *
     * console.log(form.value);  // {first: 'first name', last: 'last name'}
     *
     * form.reset({ first: 'name', last: 'last name' });
     *
     * console.log(form.value);  // {first: 'name', last: 'last name'}
     * ```
     *
     * ### Reset the form group values and disabled status
     *
     * ```
     * const form = new FormGroup({
     *   first: new FormControl('first name'),
     *   last: new FormControl('last name')
     * });
     *
     * form.reset({
     *   first: {value: 'name', disabled: true},
     *   last: 'last'
     * });
     *
     * console.log(this.form.value);  // {first: 'name', last: 'last name'}
     * console.log(this.form.get('first').status);  // 'DISABLED'
     * ```
     * @param {?=} value
     * @param {?=} options options options that determine how the control propagates changes
     * and emits events when the group is reset.
     * * `onlySelf`: When true, each change only affects this control, and not its parent. Default is
     * false.
     * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
     * `valueChanges`
     * observables emit events with the latest status and value when the control is reset.
     * When false, no events are emitted.
     * The options options are passed to the {\@link AbstractControl#updateValueAndValidity
     * updateValueAndValidity} method.
     *
     * @return {?}
     */
    function (value, options) {
        if (value === void 0) { value = {}; }
        if (options === void 0) { options = {}; }
        lodash_1.default.forOwn(this.controls, function (c, name) {
            c.reset(value[name], { onlySelf: true, emitEvent: options.emitEvent });
        });
        ((/** @type {?} */ (this))).submitted = false;
        this.updateValueAndValidity(options);
        if (lodash_1.default.has(this.options, ['submitOnChange']))
            this.submit(true);
    };
    /**
     * Clear the `FormGroup`, marks all descendants are marked `pristine` and `untouched`, and
     * the value of all descendants to null.
     *
     * You reset to a specific form state by passing in a map of states
     * that matches the structure of your form, with control names as keys. The state
     * is a standalone value or a form state object with both a value and a disabled
     * status.
     *
     * @param formState Resets the control with an initial value,
     * or an object that defines the initial value and disabled state.
     *
     * @param options options options that determine how the control propagates changes
     * and emits events when the group is reset.
     * * `onlySelf`: When true, each change only affects this control, and not its parent. Default is
     * false.
     * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
     * `valueChanges`
     * observables emit events with the latest status and value when the control is reset.
     * When false, no events are emitted.
     * The options options are passed to the {@link AbstractControl#updateValueAndValidity
     * updateValueAndValidity} method.
     *
     * @usageNotes
     *
     * ### Reset the form group values
     *
     * ```ts
     * const form = new FormGroup({
     *   first: new FormControl('first name'),
     *   last: new FormControl('last name')
     * });
     *
     * console.log(form.value);  // {first: 'first name', last: 'last name'}
     *
     * form.reset({ first: 'name', last: 'last name' });
     *
     * console.log(form.value);  // {first: 'name', last: 'last name'}
     * ```
     *
     * ### Reset the form group values and disabled status
     *
     * ```
     * const form = new FormGroup({
     *   first: new FormControl('first name'),
     *   last: new FormControl('last name')
     * });
     *
     * form.reset({
     *   first: {value: 'name', disabled: true},
     *   last: 'last'
     * });
     *
     * console.log(this.form.value);  // {first: 'name', last: 'last name'}
     * console.log(this.form.get('first').status);  // 'DISABLED'
     * ```
     */
    /**
     * Clear the `FormGroup`, marks all descendants are marked `pristine` and `untouched`, and
     * the value of all descendants to null.
     *
     * You reset to a specific form state by passing in a map of states
     * that matches the structure of your form, with control names as keys. The state
     * is a standalone value or a form state object with both a value and a disabled
     * status.
     *
     * \@usageNotes
     *
     * ### Reset the form group values
     *
     * ```ts
     * const form = new FormGroup({
     *   first: new FormControl('first name'),
     *   last: new FormControl('last name')
     * });
     *
     * console.log(form.value);  // {first: 'first name', last: 'last name'}
     *
     * form.reset({ first: 'name', last: 'last name' });
     *
     * console.log(form.value);  // {first: 'name', last: 'last name'}
     * ```
     *
     * ### Reset the form group values and disabled status
     *
     * ```
     * const form = new FormGroup({
     *   first: new FormControl('first name'),
     *   last: new FormControl('last name')
     * });
     *
     * form.reset({
     *   first: {value: 'name', disabled: true},
     *   last: 'last'
     * });
     *
     * console.log(this.form.value);  // {first: 'name', last: 'last name'}
     * console.log(this.form.get('first').status);  // 'DISABLED'
     * ```
     * @param {?=} options options options that determine how the control propagates changes
     * and emits events when the group is reset.
     * * `onlySelf`: When true, each change only affects this control, and not its parent. Default is
     * false.
     * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
     * `valueChanges`
     * observables emit events with the latest status and value when the control is reset.
     * When false, no events are emitted.
     * The options options are passed to the {\@link AbstractControl#updateValueAndValidity
     * updateValueAndValidity} method.
     *
     * @return {?}
     */
    FormGroup.prototype.clear = /**
     * Clear the `FormGroup`, marks all descendants are marked `pristine` and `untouched`, and
     * the value of all descendants to null.
     *
     * You reset to a specific form state by passing in a map of states
     * that matches the structure of your form, with control names as keys. The state
     * is a standalone value or a form state object with both a value and a disabled
     * status.
     *
     * \@usageNotes
     *
     * ### Reset the form group values
     *
     * ```ts
     * const form = new FormGroup({
     *   first: new FormControl('first name'),
     *   last: new FormControl('last name')
     * });
     *
     * console.log(form.value);  // {first: 'first name', last: 'last name'}
     *
     * form.reset({ first: 'name', last: 'last name' });
     *
     * console.log(form.value);  // {first: 'name', last: 'last name'}
     * ```
     *
     * ### Reset the form group values and disabled status
     *
     * ```
     * const form = new FormGroup({
     *   first: new FormControl('first name'),
     *   last: new FormControl('last name')
     * });
     *
     * form.reset({
     *   first: {value: 'name', disabled: true},
     *   last: 'last'
     * });
     *
     * console.log(this.form.value);  // {first: 'name', last: 'last name'}
     * console.log(this.form.get('first').status);  // 'DISABLED'
     * ```
     * @param {?=} options options options that determine how the control propagates changes
     * and emits events when the group is reset.
     * * `onlySelf`: When true, each change only affects this control, and not its parent. Default is
     * false.
     * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
     * `valueChanges`
     * observables emit events with the latest status and value when the control is reset.
     * When false, no events are emitted.
     * The options options are passed to the {\@link AbstractControl#updateValueAndValidity
     * updateValueAndValidity} method.
     *
     * @return {?}
     */
    function (options) {
        if (options === void 0) { options = {}; }
        lodash_1.default.forOwn(this.controls, function (c, name) {
            c.clear({ onlySelf: true, emitEvent: options.emitEvent });
        });
        ((/** @type {?} */ (this))).submitted = false;
        this.updateValueAndValidity(options);
        if (lodash_1.default.has(this.options, ['submitOnChange']))
            this.submit(true);
    };
    /**
     * Retrieves a child control given the control's name or path.
     *
     * @param path A dot-delimited string or array of string/number values that define the path to the
     * control.
     *
     * @usageNotes
     * ### Retrieve a nested control
     *
     * For example, to get a `name` control nested within a `person` sub-group:
     *
     * * `this.form.get('person.name');`
     *
     * -OR-
     *
     * * `this.form.get(['person', 'name']);`
     */
    /**
     * Retrieves a child control given the control's name or path.
     *
     * \@usageNotes
     * ### Retrieve a nested control
     *
     * For example, to get a `name` control nested within a `person` sub-group:
     *
     * * `this.form.get('person.name');`
     *
     * -OR-
     *
     * * `this.form.get(['person', 'name']);`
     * @param {?} path A dot-delimited string or array of string/number values that define the path to the
     * control.
     *
     * @return {?}
     */
    FormGroup.prototype.get = /**
     * Retrieves a child control given the control's name or path.
     *
     * \@usageNotes
     * ### Retrieve a nested control
     *
     * For example, to get a `name` control nested within a `person` sub-group:
     *
     * * `this.form.get('person.name');`
     *
     * -OR-
     *
     * * `this.form.get(['person', 'name']);`
     * @param {?} path A dot-delimited string or array of string/number values that define the path to the
     * control.
     *
     * @return {?}
     */
    function (path) {
        if (!path)
            return null;
        return lodash_1.default.get(this.controls, path) || null;
    };
    /**
     * @param {?=} instant
     * @return {?}
     */
    FormGroup.prototype.submit = /**
     * @param {?=} instant
     * @return {?}
     */
    function (instant) {
        if (instant === void 0) { instant = false; }
        if (this.root === this) {
            ((/** @type {?} */ (this))).submitted = true;
            this.updateValueAndValidity();
            this.updateChildValidity();
            ((/** @type {?} */ (this))).ngSubmit.emit({
                value: this.value, instant: instant
            });
        }
    };
    /**
     * @return {?}
     */
    FormGroup.prototype.updateChildValidity = /**
     * @return {?}
     */
    function () {
        lodash_1.default.forOwn(this.controls, function (c, name) {
            if (c instanceof FormControl_1.FormControl)
                c.updateValueAndValidity();
            if (c instanceof FormGroup)
                c.updateChildValidity();
        });
    };
    /** @internal */
    /**
     * \@internal
     * @return {?}
     */
    FormGroup.prototype._initObservables = /**
     * \@internal
     * @return {?}
     */
    function () {
        ((/** @type {?} */ (this))).valueChanges = new core.EventEmitter();
        ((/** @type {?} */ (this))).statusChanges = new core.EventEmitter();
        ((/** @type {?} */ (this))).ngSubmit = new core.EventEmitter();
    };
    /** @internal */
    /**
     * \@internal
     * @return {?}
     */
    FormGroup.prototype._updateValue = /**
     * \@internal
     * @return {?}
     */
    function () {
        ((/** @type {?} */ (this))).value = this._reduceValue();
    };
    /** @internal */
    /**
     * \@internal
     * @return {?}
     */
    FormGroup.prototype._reduceValue = /**
     * \@internal
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var form_value = {};
        lodash_1.default.forOwn(this.controls, function (c, name) {
            if (_this._isNotExcluded(c)) {
                form_value[name] = c.value;
            }
        });
        return form_value;
    };
    /** @internal */
    /**
     * \@internal
     * @return {?}
     */
    FormGroup.prototype._reduceSchema = /**
     * \@internal
     * @return {?}
     */
    function () {
        return lodash_1.default.reduce(this.controls, function (result, c, name) {
            if (c instanceof FormControl_1.FormControl && ((/** @type {?} */ (c.state))).schema) {
                result[name] = ((/** @type {?} */ (c.state))).schema;
            }
            return result;
        }, {});
    };
    /** @internal */
    /**
     * \@internal
     * @return {?}
     */
    FormGroup.prototype._runJoiValidation = /**
     * \@internal
     * @return {?}
     */
    function () {
        var _a, _b;
        if (this.schema) {
            /** @type {?} */
            var validateObject = (this.schema['_type'] !== 'object') ? (_a = {}, _a[this.name] = this.value, _a) : this.value;
            /** @type {?} */
            var validateSchema = (this.schema['_type'] !== 'object') ? (_b = {}, _b[this.name] = this.schema, _b) : this.schema;
            /** @type {?} */
            var result = joi_1.default.validate(validateObject, validateSchema, {
                abortEarly: false,
                stripUnknown: true
            });
            if (!result.error)
                return null;
            this._updateChildError((/** @type {?} */ (result.error.details)));
            return (/** @type {?} */ (result.error.details));
        }
        return null;
    };
    /** @internal */
    /**
     * \@internal
     * @private
     * @param {?} controlConfig
     * @return {?}
     */
    FormGroup.prototype._setUpControls = /**
     * \@internal
     * @private
     * @param {?} controlConfig
     * @return {?}
     */
    function (controlConfig) {
        var _this = this;
        ((/** @type {?} */ (this.controls))) = {};
        lodash_1.default.forOwn(controlConfig, function (c, name) {
            c.setParent(_this);
            c.setRoot(_this.root);
            c.name = name;
            _this.controls[name] = c;
        });
    };
    /** @internal */
    /**
     * \@internal
     * @param {?} name
     * @return {?}
     */
    FormGroup.prototype._throwIfControlMissing = /**
     * \@internal
     * @param {?} name
     * @return {?}
     */
    function (name) {
        if (!lodash_1.default.keys(this.controls).length) {
            throw new Error("\n        There are no form controls registered with this group yet.  If you're using ngModel,\n        you may want to check next tick (e.g. use setTimeout).\n      ");
        }
        if (!this.controls[name]) {
            throw new Error("Cannot find form control with name: " + name + ".");
        }
    };
    /** @internal */
    /**
     * \@internal
     * @return {?}
     */
    FormGroup.prototype._allControlsDisabled = /**
     * \@internal
     * @return {?}
     */
    function () {
        return lodash_1.default.every(lodash_1.default.values(this.controls), function (c) { return c.disabled; });
    };
    /** @internal */
    /**
     * \@internal
     * @param {?} status
     * @return {?}
     */
    FormGroup.prototype._anyControlsHaveStatus = /**
     * \@internal
     * @param {?} status
     * @return {?}
     */
    function (status) {
        return !!lodash_1.default.find(lodash_1.default.values(this.controls), ['status', status]);
    };
    return FormGroup;
}(AbstractControl_1.AbstractControl));
exports.FormGroup = FormGroup;

});

unwrapExports(FormGroup_1);
var FormGroup_2 = FormGroup_1.FormGroup;

var dynamicField_directive = createCommonjsModule(function (module, exports) {
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
Object.defineProperty(exports, "__esModule", { value: true });


var lodash_1 = tslib.__importDefault(lodash);




var DynamicFieldDirective = /** @class */ (function () {
    function DynamicFieldDirective(_resolver, _vcRef) {
        var _this = this;
        this._resolver = _resolver;
        this._vcRef = _vcRef;
        this.components = {
            input: ui$1.InputComponent,
            textarea: ui$1.TextareaComponent,
            // select: AuroraSelectComponent,
            // datepicker: AuroraDatePickerComponent,
            // checkbox: AuroraCheckboxComponent,
            upload: ui$1.UploadComponent,
            menu: ui$1.MenuComponent
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
                    _this._compRef.instance[key] = new core.EventEmitter();
                _this._compRef.instance[key].pipe(utility.untilDestroyed(_this)).subscribe(function (event) {
                    (value instanceof core.EventEmitter)
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
            var context = tslib.__assign({ name: _this._name, invalid: _this._control.invalid && (_this._control.dirty || _this._control.touched || _this._root.submitted) }, state.props, { template: _this._template }, options);
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
        this._root.statusChanges.pipe(utility.untilDestroyed(this)).subscribe(function (status) {
            _this.ngOnChanges();
        });
        this._root.ngSubmit.pipe(utility.untilDestroyed(this)).subscribe(function (data) {
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
        { type: core.Directive, args: [{
                    selector: '[dynamic_field]'
                },] }
    ];
    /** @nocollapse */
    DynamicFieldDirective.ctorParameters = function () { return [
        { type: core.ComponentFactoryResolver },
        { type: core.ViewContainerRef }
    ]; };
    DynamicFieldDirective.propDecorators = {
        _name: [{ type: core.Input, args: ['name',] }],
        _root: [{ type: core.Input, args: ['root',] }],
        _control: [{ type: core.Input, args: ['control',] }],
        _template: [{ type: core.Input, args: ['template',] }],
        _events: [{ type: core.Input, args: ['events',] }]
    };
    return DynamicFieldDirective;
}());
exports.DynamicFieldDirective = DynamicFieldDirective;

});

unwrapExports(dynamicField_directive);
var dynamicField_directive_1 = dynamicField_directive.DynamicFieldDirective;

var ControlContainer_1 = createCommonjsModule(function (module, exports) {
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
Object.defineProperty(exports, "__esModule", { value: true });

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


/**
 * \@description
 * A base class for directives that contain multiple registered instances of `IoControl`.
 * Only used by the forms module.
 *
 * \@publicApi
 * @abstract
 */
var ControlContainer = /** @class */ (function () {
    function ControlContainer(cd) {
        this.cd = cd;
        /**
         * \@description
         * The parent form for the control.
         *
         * \@internal
         */
        this._parent = null;
        /**
         * \@description
         * Tracks the name of the Control bound to the components. The name corresponds
         * to a key in the parent `FormGroup` or `FormArray`.
         */
        this._name = null;
    }
    Object.defineProperty(ControlContainer.prototype, "parent", {
        get: /**
         * @return {?}
         */
        function () {
            return this._parent;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value instanceof ControlContainer)
                this._parent = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ControlContainer.prototype, "name", {
        get: /**
         * @return {?}
         */
        function () {
            return this._name;
        },
        set: /**
         * @param {?} name
         * @return {?}
         */
        function (name) {
            this._name = lodash.trim(name);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ControlContainer.prototype, "root", {
        /**
         * @description
         * The top-level FormGroup for this group if present, otherwise null.
         */
        get: /**
         * \@description
         * The top-level FormGroup for this group if present, otherwise null.
         * @return {?}
         */
        function () {
            return this.parent ? this.parent.root : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ControlContainer.prototype, "path", {
        /**
         * @description
         * Returns an array that represents the path from the top-level form to this control.
         * Each index is the string name of the control on that level.
         */
        get: /**
         * \@description
         * Returns an array that represents the path from the top-level form to this control.
         * Each index is the string name of the control on that level.
         * @return {?}
         */
        function () {
            return this.parent ? tslib.__spread(this.parent.path, [this.name, 'controls']) : [this.name, 'controls'];
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    ControlContainer.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    ControlContainer.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
    };
    /**
     * @return {?}
     */
    ControlContainer.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
    };
    ControlContainer.propDecorators = {
        parent: [{ type: core.Input, args: ['parent',] }],
        name: [{ type: core.Input }]
    };
    return ControlContainer;
}());
exports.ControlContainer = ControlContainer;

});

unwrapExports(ControlContainer_1);
var ControlContainer_2 = ControlContainer_1.ControlContainer;

var IoControl_1 = createCommonjsModule(function (module, exports) {
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
Object.defineProperty(exports, "__esModule", { value: true });

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * \@description
 * A base class that all control `FormControl`-based directives extend. It binds a `FormControl`
 * object to a DOM element.
 *
 * \@publicApi
 * @abstract
 */
var /**
 * \@description
 * A base class that all control `FormControl`-based directives extend. It binds a `FormControl`
 * object to a DOM element.
 *
 * \@publicApi
 * @abstract
 */
IoControl = /** @class */ (function (_super) {
    tslib.__extends(IoControl, _super);
    function IoControl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(IoControl.prototype, "control", {
        /**
         * @description
         * Tracks the `FormControl` instance bound to the directive.
         */
        get: /**
         * \@description
         * Tracks the `FormControl` instance bound to the directive.
         * @return {?}
         */
        function () {
            return (/** @type {?} */ (this.root.get(this.path)));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IoControl.prototype, "path", {
        /**
         * @description
         * Returns an array that represents the path from the top-level form to this control.
         * Each index is the string name of the control on that level.
         */
        get: /**
         * \@description
         * Returns an array that represents the path from the top-level form to this control.
         * Each index is the string name of the control on that level.
         * @return {?}
         */
        function () {
            return this.parent ? tslib.__spread(this.parent.path, [this.name]) : [];
        },
        enumerable: true,
        configurable: true
    });
    return IoControl;
}(ControlContainer_1.ControlContainer));
exports.IoControl = IoControl;

});

unwrapExports(IoControl_1);
var IoControl_2 = IoControl_1.IoControl;

var formControl_component = createCommonjsModule(function (module, exports) {
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
Object.defineProperty(exports, "__esModule", { value: true });


var lodash_1 = tslib.__importDefault(lodash);



/** @type {?} */
exports.controlNameBinding = {
    provide: IoControl_1.IoControl,
    useExisting: core.forwardRef(function () { return FormControlComponent; })
};
var FormControlComponent = /** @class */ (function (_super) {
    tslib.__extends(FormControlComponent, _super);
    ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///
    function FormControlComponent(parent, cd) {
        var _this = _super.call(this, cd) || this;
        _this.parent = parent;
        return _this;
    }
    Object.defineProperty(FormControlComponent.prototype, "controlTemplateDir", {
        ///-----------------------------------------------  Variables   -----------------------------------------------///
        get: 
        ///-----------------------------------------------  Variables   -----------------------------------------------///
        /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var parent = (/** @type {?} */ (this.parent));
            /** @type {?} */
            var state = (/** @type {?} */ (this.control.state));
            if (this._ioTemplateDir)
                return this._ioTemplateDir;
            if (parent.ioTemplateDirList)
                return lodash_1.default.find(parent.ioTemplateDirList.toArray(), ['name', this.name])
                    || lodash_1.default.find(parent.ioTemplateDirList.toArray(), ['component', state.component]);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormControlComponent.prototype, "attribute", {
        get: /**
         * @return {?}
         */
        function () {
            return this.name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormControlComponent.prototype, "hiddenStyle", {
        get: /**
         * @return {?}
         */
        function () {
            return lodash_1.default.get(this.control.options, ['hidden']);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormControlComponent.prototype, "isHideLabel", {
        get: /**
         * @return {?}
         */
        function () {
            return lodash_1.default.get(this.control.options, ['hideLabel']);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormControlComponent.prototype, "isHideFeedback", {
        get: /**
         * @return {?}
         */
        function () {
            return lodash_1.default.get(this.control.options, ['hideFeedback']);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    FormControlComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    FormControlComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        _super.prototype.ngOnChanges.call(this, changes);
    };
    /**
     * @return {?}
     */
    FormControlComponent.prototype.ngAfterViewChecked = /**
     * @return {?}
     */
    function () {
    };
    FormControlComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'form-control',
                    template: "\n      <form-label *ngIf=\"!isHideLabel\"></form-label>\n\n      <form-field></form-field>\n\n      <form-feedback *ngIf=\"!isHideFeedback\"></form-feedback>\n  ",
                    providers: [exports.controlNameBinding],
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                    styles: ["\n      :host {\n          display: grid;\n          grid-template-areas: \"label   field\" \". feedback\";\n          grid-template-columns: 3fr 7fr;\n          grid-template-rows: 1fr auto;\n          margin-bottom: 1rem;\n          height: auto;\n          visibility: visible;\n          z-index: 50;\n      }\n\n      :host-context(.hide-label) {\n          grid-template-areas: \"field\" \"feedback\";\n          grid-template-columns: 1fr;\n      }\n\n      :host-context(.hide-feedback) {\n          grid-template-areas: \"label   field\";\n          grid-template-columns: 3fr 7fr;\n      }\n\n      :host-context(.hide-label.hide-feedback) {\n          grid-template-areas: \"field\";\n      }\n\n      :host-context(.hidden) {\n          display: none !important;\n      }\n\n      form-label {\n          grid-area: label;\n      }\n\n      form-field {\n          grid-area: field;\n      }\n\n      form-feedback {\n          grid-area: feedback;\n      }\n  "]
                }] }
    ];
    /** @nocollapse */
    FormControlComponent.ctorParameters = function () { return [
        { type: ControlContainer_1.ControlContainer, decorators: [{ type: core.Optional }, { type: core.Host }, { type: core.SkipSelf }] },
        { type: core.ChangeDetectorRef }
    ]; };
    FormControlComponent.propDecorators = {
        _ioTemplateDir: [{ type: core.ContentChild, args: [ui.IonarTemplateDirective,] }],
        attribute: [{ type: core.HostBinding, args: ['attr.id',] }],
        hiddenStyle: [{ type: core.HostBinding, args: ['class.hidden',] }],
        isHideLabel: [{ type: core.HostBinding, args: ['class.hideLabel',] }],
        isHideFeedback: [{ type: core.HostBinding, args: ['class.hideFeedback',] }]
    };
    return FormControlComponent;
}(IoControl_1.IoControl));
exports.FormControlComponent = FormControlComponent;

});

unwrapExports(formControl_component);
var formControl_component_1 = formControl_component.controlNameBinding;
var formControl_component_2 = formControl_component.FormControlComponent;

var field_component = createCommonjsModule(function (module, exports) {
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
Object.defineProperty(exports, "__esModule", { value: true });


var FieldComponent = /** @class */ (function () {
    ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///
    function FieldComponent(cd, parent) {
        var _this = this;
        this.cd = cd;
        ///-----------------------------------------------  Variables   -----------------------------------------------///
        /**
         * \@description
         * The parent  for the components
         *
         * \@internal
         */
        this._parent = null;
        ///-----------------------------------------------  Main Functions   -----------------------------------------------///
        this.onChanged = function (e) {
            _this._parent.control.setValue(e);
        };
        this.onTouched = function () {
            _this._parent.control.markAsTouched();
        };
        this.onEntered = function () {
            // this.formSvs._onEntered()
            // if (this.name === 'password') this.focus = true;
        };
        this._parent = parent;
    }
    Object.defineProperty(FieldComponent.prototype, "template", {
        get: /**
         * @return {?}
         */
        function () {
            return this._parent.controlTemplateDir && this._parent.controlTemplateDir.templateRef;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    FieldComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    FieldComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
    };
    FieldComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'form-field',
                    template: "\n      <ng-container *ngIf=\"_parent.control\">\n          <ng-container\n                  dynamic_field\n                  [name]=\"_parent.name\"\n                  [control]=\"_parent.control\"\n                  [root]=\"_parent.root\"\n                  [events]=\"{\n                    change: onChanged,\n                    blur: onTouched,\n                    enter: onEntered\n              }\"\n                  [template]=\"template\"\n          >\n          </ng-container>\n      </ng-container>\n\n  ",
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                    styles: ["\n      :host {\n          display: flex;\n          width: 100%;\n          height: 100%;\n      }\n  "]
                }] }
    ];
    /** @nocollapse */
    FieldComponent.ctorParameters = function () { return [
        { type: core.ChangeDetectorRef },
        { type: formControl_component.FormControlComponent, decorators: [{ type: core.Optional }, { type: core.Host }, { type: core.SkipSelf }] }
    ]; };
    return FieldComponent;
}());
exports.FieldComponent = FieldComponent;

});

unwrapExports(field_component);
var field_component_1 = field_component.FieldComponent;

var submit_directive = createCommonjsModule(function (module, exports) {
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
Object.defineProperty(exports, "__esModule", { value: true });


var SubmitDirective = /** @class */ (function () {
    function SubmitDirective(_elRef) {
        var _this = this;
        this._elRef = _elRef;
        this.disabled = false;
        this.onClick = function (e) {
            if (!_this.disabled) {
                _this._formGr.submit();
            }
        };
    }
    /**
     * @return {?}
     */
    SubmitDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        // console.log(this._formGr)
    };
    /**
     * @return {?}
     */
    SubmitDirective.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        // console.log(this._formGr)
    };
    /**
     * @return {?}
     */
    SubmitDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
    };
    SubmitDirective.decorators = [
        { type: core.Directive, args: [{
                    selector: '[submitForm]'
                },] }
    ];
    /** @nocollapse */
    SubmitDirective.ctorParameters = function () { return [
        { type: core.ElementRef }
    ]; };
    SubmitDirective.propDecorators = {
        _formGr: [{ type: core.Input, args: ['submitForm',] }],
        disabled: [{ type: core.Input }],
        onClick: [{ type: core.HostListener, args: ['click', ['$event'],] }]
    };
    return SubmitDirective;
}());
exports.SubmitDirective = SubmitDirective;

});

unwrapExports(submit_directive);
var submit_directive_1 = submit_directive.SubmitDirective;

var label_component = createCommonjsModule(function (module, exports) {
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
Object.defineProperty(exports, "__esModule", { value: true });


var lodash_1 = tslib.__importDefault(lodash);

var LabelComponent = /** @class */ (function () {
    function LabelComponent(cd, parent) {
        this.cd = cd;
        /**
         * \@description
         * The parent  for the components
         *
         * \@internal
         */
        this._parent = null;
        this._parent = parent;
    }
    Object.defineProperty(LabelComponent.prototype, "label", {
        get: /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var props = ((/** @type {?} */ (this._control.state))).props;
            return (props && props.label) ? props.label : lodash_1.default.startCase(this._parent.name);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LabelComponent.prototype, "_control", {
        get: /**
         * @private
         * @return {?}
         */
        function () {
            return this._parent.control;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    LabelComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.cd.detach();
    };
    LabelComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'form-label',
                    template: "\n      {{ label}}\n  ",
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                    styles: ["\n      :host {\n          display: flex;\n          align-items: center;\n          color: rgba(0, 0, 0, 0.85);\n          font-size: 1.6rem;\n          font-weight: 700;\n          position: relative\n      }\n  "]
                }] }
    ];
    /** @nocollapse */
    LabelComponent.ctorParameters = function () { return [
        { type: core.ChangeDetectorRef },
        { type: formControl_component.FormControlComponent, decorators: [{ type: core.Optional }, { type: core.Host }, { type: core.SkipSelf }] }
    ]; };
    return LabelComponent;
}());
exports.LabelComponent = LabelComponent;

});

unwrapExports(label_component);
var label_component_1 = label_component.LabelComponent;

var feedback_component = createCommonjsModule(function (module, exports) {
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
Object.defineProperty(exports, "__esModule", { value: true });



var FeedbackComponent = /** @class */ (function () {
    ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///
    function FeedbackComponent(cd, parent) {
        this.cd = cd;
        ///-----------------------------------------------  Variables   -----------------------------------------------///
        /**
         * \@description
         * The parent  for the components
         *
         * \@internal
         */
        this._parent = null;
        this._parent = parent;
    }
    Object.defineProperty(FeedbackComponent.prototype, "control", {
        get: /**
         * @return {?}
         */
        function () {
            return this._parent.control;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FeedbackComponent.prototype, "invalid", {
        get: /**
         * @return {?}
         */
        function () {
            return this.control.invalid && (this.control.dirty || this.control.touched || this._parent.root.submitted);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    FeedbackComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this._parent.root.statusChanges.pipe(utility.untilDestroyed(this)).subscribe(function (status) {
            _this.cd.markForCheck();
        });
        this._parent.root.ngSubmit.pipe(utility.untilDestroyed(this)).subscribe(function (data) {
            _this.cd.markForCheck();
        });
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    FeedbackComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
    };
    /**
     * @return {?}
     */
    FeedbackComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
    };
    FeedbackComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'form-feedback',
                    template: "\n\n      <ng-container *ngIf=\"invalid\">\n          <ng-container *ngFor=\"let err of control.errors\">\n              <div class=\"feedback\">{{err.message}}</div>\n          </ng-container>\n\n      </ng-container>\n\n  ",
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                    styles: ["\n      :host {\n          display: flex;\n          flex-direction: column;\n          justify-content: flex-start;\n          width: 100%;\n          color: #f5222d;\n          font-size: 1.2rem;\n          margin-top: 0.5rem;\n      }\n  "]
                }] }
    ];
    /** @nocollapse */
    FeedbackComponent.ctorParameters = function () { return [
        { type: core.ChangeDetectorRef },
        { type: formControl_component.FormControlComponent, decorators: [{ type: core.Optional }, { type: core.Host }, { type: core.SkipSelf }] }
    ]; };
    return FeedbackComponent;
}());
exports.FeedbackComponent = FeedbackComponent;

});

unwrapExports(feedback_component);
var feedback_component_1 = feedback_component.FeedbackComponent;

var FormArray_1 = createCommonjsModule(function (module, exports) {
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
Object.defineProperty(exports, "__esModule", { value: true });

var lodash_1 = tslib.__importDefault(lodash);


/**
 * Tracks the value and validity state of an array of `FormControl`,
 * `FormGroup` or `FormArray` instances.
 *
 * A `FormArray` aggregates the values of each child `FormControl` into an array.
 * It calculates its status by reducing the status values of its children. For example, if one of
 * the controls in a `FormArray` is invalid, the entire array becomes invalid.
 *
 * `FormArray` is one of the three fundamental building blocks used to define forms in Angular,
 * along with `FormControl` and `FormGroup`.
 *
 * \@usageNotes
 *
 * ### Create an array of form controls
 *
 * ```
 * const arr = new FormArray([
 *   new FormControl('Nancy', Validators.minLength(2)),
 *   new FormControl('Drew'),
 * ]);
 *
 * console.log(arr.value);   // ['Nancy', 'Drew']
 * console.log(arr.status);  // 'VALID'
 * ```
 *
 * ### Create a form array with array-level validators
 *
 * You include array-level validators and async validators. These come in handy
 * when you want to perform validation that considers the value of more than one child
 * control.
 *
 * The two types of validators are passed in separately as the second and third arg
 * respectively, or together as part of an options object.
 *
 * ```
 * const arr = new FormArray([
 *   new FormControl('Nancy'),
 *   new FormControl('Drew')
 * ], {validators: myValidator, asyncValidators: myAsyncValidator});
 * ```
 *
 * ### Set the updateOn property for all controls in a form array
 *
 * The options object is used to set a default value for each child
 * control's `updateOn` property. If you set `updateOn` to `'blur'` at the
 * array level, all child controls default to 'blur', unless the child
 * has explicitly specified a different `updateOn` value.
 *
 * ```ts
 * const arr = new FormArray([
 *    new FormControl()
 * ], {updateOn: 'blur'});
 * ```
 *
 * ### Adding or removing controls from a form array
 *
 * To change the controls in the array, use the `push`, `insert`, or `removeAt` methods
 * in `FormArray` itself. These methods ensure the controls are properly tracked in the
 * form's hierarchy. Do not modify the array of `AbstractControl`s used to instantiate
 * the `FormArray` directly, as that result in strange and unexpected behavior such
 * as broken change detection.
 *
 * \@publicApi
 */
var /**
 * Tracks the value and validity state of an array of `FormControl`,
 * `FormGroup` or `FormArray` instances.
 *
 * A `FormArray` aggregates the values of each child `FormControl` into an array.
 * It calculates its status by reducing the status values of its children. For example, if one of
 * the controls in a `FormArray` is invalid, the entire array becomes invalid.
 *
 * `FormArray` is one of the three fundamental building blocks used to define forms in Angular,
 * along with `FormControl` and `FormGroup`.
 *
 * \@usageNotes
 *
 * ### Create an array of form controls
 *
 * ```
 * const arr = new FormArray([
 *   new FormControl('Nancy', Validators.minLength(2)),
 *   new FormControl('Drew'),
 * ]);
 *
 * console.log(arr.value);   // ['Nancy', 'Drew']
 * console.log(arr.status);  // 'VALID'
 * ```
 *
 * ### Create a form array with array-level validators
 *
 * You include array-level validators and async validators. These come in handy
 * when you want to perform validation that considers the value of more than one child
 * control.
 *
 * The two types of validators are passed in separately as the second and third arg
 * respectively, or together as part of an options object.
 *
 * ```
 * const arr = new FormArray([
 *   new FormControl('Nancy'),
 *   new FormControl('Drew')
 * ], {validators: myValidator, asyncValidators: myAsyncValidator});
 * ```
 *
 * ### Set the updateOn property for all controls in a form array
 *
 * The options object is used to set a default value for each child
 * control's `updateOn` property. If you set `updateOn` to `'blur'` at the
 * array level, all child controls default to 'blur', unless the child
 * has explicitly specified a different `updateOn` value.
 *
 * ```ts
 * const arr = new FormArray([
 *    new FormControl()
 * ], {updateOn: 'blur'});
 * ```
 *
 * ### Adding or removing controls from a form array
 *
 * To change the controls in the array, use the `push`, `insert`, or `removeAt` methods
 * in `FormArray` itself. These methods ensure the controls are properly tracked in the
 * form's hierarchy. Do not modify the array of `AbstractControl`s used to instantiate
 * the `FormArray` directly, as that result in strange and unexpected behavior such
 * as broken change detection.
 *
 * \@publicApi
 */
FormArray = /** @class */ (function (_super) {
    tslib.__extends(FormArray, _super);
    /**
     * Creates a new `FormArray` instance.
     *
     * @param controls An array of child controls. Each child control is given an index
     * where it is registered.
     *
     * @param validatorOrOpts A synchronous validator function, or an array of
     * such functions, or an `AbstractControlOptions` object that contains validation functions
     * and a validation trigger.
     *
     * @param asyncValidator A single async validator or array of async validator functions
     *
     */
    function FormArray(state, options) {
        var _this = _super.call(this, null, (/** @type {?} */ (options))) || this;
        _this._setUpControls(state);
        _this._initObservables();
        _this.updateValueAndValidity({ onlySelf: true, emitEvent: false });
        return _this;
    }
    /**
     * Get the `AbstractControl` at the given `index` in the array.
     *
     * @param index Index in the array to retrieve the control
     */
    /**
     * Get the `AbstractControl` at the given `index` in the array.
     *
     * @param {?} index Index in the array to retrieve the control
     * @return {?}
     */
    FormArray.prototype.at = /**
     * Get the `AbstractControl` at the given `index` in the array.
     *
     * @param {?} index Index in the array to retrieve the control
     * @return {?}
     */
    function (index) {
        return this.controls[index];
    };
    /**
     * Insert a new `AbstractControl` at the end of the array.
     *
     * @param control Form control to be inserted
     */
    /**
     * Insert a new `AbstractControl` at the end of the array.
     *
     * @param {?} control Form control to be inserted
     * @return {?}
     */
    FormArray.prototype.push = /**
     * Insert a new `AbstractControl` at the end of the array.
     *
     * @param {?} control Form control to be inserted
     * @return {?}
     */
    function (control) {
        control.setParent(this);
        ((/** @type {?} */ (this.controls))).push(control);
        this.updateValueAndValidity();
    };
    /**
     * Insert a new `AbstractControl` at the given `index` in the array.
     *
     * @param index Index in the array to insert the control
     * @param control Form control to be inserted
     */
    /**
     * Insert a new `AbstractControl` at the given `index` in the array.
     *
     * @param {?} index Index in the array to insert the control
     * @param {?} control Form control to be inserted
     * @return {?}
     */
    FormArray.prototype.insert = /**
     * Insert a new `AbstractControl` at the given `index` in the array.
     *
     * @param {?} index Index in the array to insert the control
     * @param {?} control Form control to be inserted
     * @return {?}
     */
    function (index, control) {
        control.setParent(this);
        ((/** @type {?} */ (this.controls))).splice(index, 0, control);
        this.updateValueAndValidity();
    };
    /**
     * Remove the control at the given `index` in the array.
     *
     * @param index Index in the array to remove the control
     */
    /**
     * Remove the control at the given `index` in the array.
     *
     * @param {?} index Index in the array to remove the control
     * @return {?}
     */
    FormArray.prototype.removeAt = /**
     * Remove the control at the given `index` in the array.
     *
     * @param {?} index Index in the array to remove the control
     * @return {?}
     */
    function (index) {
        ((/** @type {?} */ (this.controls))).splice(index, 1);
        this.updateValueAndValidity();
    };
    /**
     * Replace an existing control.
     *
     * @param index Index in the array to replace the control
     * @param control The `AbstractControl` control to replace the existing control
     */
    /**
     * Replace an existing control.
     *
     * @param {?} index Index in the array to replace the control
     * @param {?} control The `AbstractControl` control to replace the existing control
     * @return {?}
     */
    FormArray.prototype.setControl = /**
     * Replace an existing control.
     *
     * @param {?} index Index in the array to replace the control
     * @param {?} control The `AbstractControl` control to replace the existing control
     * @return {?}
     */
    function (index, control) {
        ((/** @type {?} */ (this.controls))).splice(index, 1);
        if (control) {
            control.setParent(this);
            ((/** @type {?} */ (this.controls))).splice(index, 0, control);
        }
        this.updateValueAndValidity();
    };
    Object.defineProperty(FormArray.prototype, "length", {
        /**
         * Length of the control array.
         */
        get: /**
         * Length of the control array.
         * @return {?}
         */
        function () {
            return ((/** @type {?} */ (this.controls))).length;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Sets the value of the `FormArray`. It accepts an array that matches
     * the structure of the control.
     *
     * This method performs strict checks, and throws an error if you try
     * to set the value of a control that doesn't exist or if you exclude the
     * value of a control.
     *
     * @usageNotes
     * ### Set the values for the controls in the form array
     *
     * ```
     * const arr = new FormArray([
     *   new FormControl(),
     *   new FormControl()
     * ]);
     * console.log(arr.value);   // [null, null]
     *
     * arr.setValue(['Nancy', 'Drew']);
     * console.log(arr.value);   // ['Nancy', 'Drew']
     * ```
     *
     * @param value Array of values for the controls
     * @param options Configure options that determine how the control propagates changes and
     * emits events after the value changes
     *
     * * `onlySelf`: When true, each change only affects this control, and not its parent. Default
     * is false.
     * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
     * `valueChanges`
     * observables emit events with the latest status and value when the control value is updated.
     * When false, no events are emitted.
     * The options options are passed to the {@link AbstractControl#updateValueAndValidity
     * updateValueAndValidity} method.
     */
    /**
     * Sets the value of the `FormArray`. It accepts an array that matches
     * the structure of the control.
     *
     * This method performs strict checks, and throws an error if you try
     * to set the value of a control that doesn't exist or if you exclude the
     * value of a control.
     *
     * \@usageNotes
     * ### Set the values for the controls in the form array
     *
     * ```
     * const arr = new FormArray([
     *   new FormControl(),
     *   new FormControl()
     * ]);
     * console.log(arr.value);   // [null, null]
     *
     * arr.setValue(['Nancy', 'Drew']);
     * console.log(arr.value);   // ['Nancy', 'Drew']
     * ```
     *
     * @param {?} value Array of values for the controls
     * @param {?=} options Configure options that determine how the control propagates changes and
     * emits events after the value changes
     *
     * * `onlySelf`: When true, each change only affects this control, and not its parent. Default
     * is false.
     * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
     * `valueChanges`
     * observables emit events with the latest status and value when the control value is updated.
     * When false, no events are emitted.
     * The options options are passed to the {\@link AbstractControl#updateValueAndValidity
     * updateValueAndValidity} method.
     * @return {?}
     */
    FormArray.prototype.setValue = /**
     * Sets the value of the `FormArray`. It accepts an array that matches
     * the structure of the control.
     *
     * This method performs strict checks, and throws an error if you try
     * to set the value of a control that doesn't exist or if you exclude the
     * value of a control.
     *
     * \@usageNotes
     * ### Set the values for the controls in the form array
     *
     * ```
     * const arr = new FormArray([
     *   new FormControl(),
     *   new FormControl()
     * ]);
     * console.log(arr.value);   // [null, null]
     *
     * arr.setValue(['Nancy', 'Drew']);
     * console.log(arr.value);   // ['Nancy', 'Drew']
     * ```
     *
     * @param {?} value Array of values for the controls
     * @param {?=} options Configure options that determine how the control propagates changes and
     * emits events after the value changes
     *
     * * `onlySelf`: When true, each change only affects this control, and not its parent. Default
     * is false.
     * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
     * `valueChanges`
     * observables emit events with the latest status and value when the control value is updated.
     * When false, no events are emitted.
     * The options options are passed to the {\@link AbstractControl#updateValueAndValidity
     * updateValueAndValidity} method.
     * @return {?}
     */
    function (value, options) {
        var _this = this;
        if (options === void 0) { options = {}; }
        this._checkAllValuesPresent(value);
        value.forEach(function (newValue, index) {
            _this._throwIfControlMissing(index);
            _this.at(index).setValue(newValue, { onlySelf: true, emitEvent: options.emitEvent });
        });
        this.updateValueAndValidity(options);
    };
    /**
     * Resets the `FormArray` and all descendants are marked `pristine` and `untouched`, and the
     * value of all descendants to null or null maps.
     *
     * You reset to a specific form state by passing in an array of states
     * that matches the structure of the control. The state is a standalone value
     * or a form state object with both a value and a disabled status.
     *
     * @usageNotes
     * ### Reset the values in a form array
     *
     * ```ts
     * const arr = new FormArray([
     *    new FormControl(),
     *    new FormControl()
     * ]);
     * arr.reset(['name', 'last name']);
     *
     * console.log(this.arr.value);  // ['name', 'last name']
     * ```
     *
     * ### Reset the values in a form array and the disabled status for the first control
     *
     * ```
     * this.arr.reset([
     *   {value: 'name', disabled: true},
     *   'last'
     * ]);
     *
     * console.log(this.arr.value);  // ['name', 'last name']
     * console.log(this.arr.get(0).status);  // 'DISABLED'
     * ```
     *
     * @param value Array of values for the controls
     * @param options Configure options that determine how the control propagates changes and
     * emits events after the value changes
     *
     * * `onlySelf`: When true, each change only affects this control, and not its parent. Default
     * is false.
     * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
     * `valueChanges`
     * observables emit events with the latest status and value when the control is reset.
     * When false, no events are emitted.
     * The options options are passed to the {@link AbstractControl#updateValueAndValidity
     * updateValueAndValidity} method.
     */
    /**
     * Resets the `FormArray` and all descendants are marked `pristine` and `untouched`, and the
     * value of all descendants to null or null maps.
     *
     * You reset to a specific form state by passing in an array of states
     * that matches the structure of the control. The state is a standalone value
     * or a form state object with both a value and a disabled status.
     *
     * \@usageNotes
     * ### Reset the values in a form array
     *
     * ```ts
     * const arr = new FormArray([
     *    new FormControl(),
     *    new FormControl()
     * ]);
     * arr.reset(['name', 'last name']);
     *
     * console.log(this.arr.value);  // ['name', 'last name']
     * ```
     *
     * ### Reset the values in a form array and the disabled status for the first control
     *
     * ```
     * this.arr.reset([
     *   {value: 'name', disabled: true},
     *   'last'
     * ]);
     *
     * console.log(this.arr.value);  // ['name', 'last name']
     * console.log(this.arr.get(0).status);  // 'DISABLED'
     * ```
     *
     * @param {?=} value Array of values for the controls
     * @param {?=} options Configure options that determine how the control propagates changes and
     * emits events after the value changes
     *
     * * `onlySelf`: When true, each change only affects this control, and not its parent. Default
     * is false.
     * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
     * `valueChanges`
     * observables emit events with the latest status and value when the control is reset.
     * When false, no events are emitted.
     * The options options are passed to the {\@link AbstractControl#updateValueAndValidity
     * updateValueAndValidity} method.
     * @return {?}
     */
    FormArray.prototype.reset = /**
     * Resets the `FormArray` and all descendants are marked `pristine` and `untouched`, and the
     * value of all descendants to null or null maps.
     *
     * You reset to a specific form state by passing in an array of states
     * that matches the structure of the control. The state is a standalone value
     * or a form state object with both a value and a disabled status.
     *
     * \@usageNotes
     * ### Reset the values in a form array
     *
     * ```ts
     * const arr = new FormArray([
     *    new FormControl(),
     *    new FormControl()
     * ]);
     * arr.reset(['name', 'last name']);
     *
     * console.log(this.arr.value);  // ['name', 'last name']
     * ```
     *
     * ### Reset the values in a form array and the disabled status for the first control
     *
     * ```
     * this.arr.reset([
     *   {value: 'name', disabled: true},
     *   'last'
     * ]);
     *
     * console.log(this.arr.value);  // ['name', 'last name']
     * console.log(this.arr.get(0).status);  // 'DISABLED'
     * ```
     *
     * @param {?=} value Array of values for the controls
     * @param {?=} options Configure options that determine how the control propagates changes and
     * emits events after the value changes
     *
     * * `onlySelf`: When true, each change only affects this control, and not its parent. Default
     * is false.
     * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
     * `valueChanges`
     * observables emit events with the latest status and value when the control is reset.
     * When false, no events are emitted.
     * The options options are passed to the {\@link AbstractControl#updateValueAndValidity
     * updateValueAndValidity} method.
     * @return {?}
     */
    function (value, options) {
        if (value === void 0) { value = []; }
        if (options === void 0) { options = {}; }
        // this._forEachChild((control: AbstractControl, index: number) => {
        //   control.reset(value[index], { onlySelf: true, emitEvent: options.emitEvent });
        // });
        // this.updateValueAndValidity(options);
        // this._updatePristine(options);
        // this._updateTouched(options);
        if (lodash_1.default.has(this.options, ['submitOnChange'])) {
            this.root.submit(true);
        }
    };
    /**
     * Clear the `FormGroup`, marks all descendants are marked `pristine` and `untouched`, and
     * the value of all descendants to null.
     *
     * You reset to a specific form state by passing in a map of states
     * that matches the structure of your form, with control names as keys. The state
     * is a standalone value or a form state object with both a value and a disabled
     * status.
     *
     * @param formState Resets the control with an initial value,
     * or an object that defines the initial value and disabled state.
     *
     * @param options options options that determine how the control propagates changes
     * and emits events when the group is reset.
     * * `onlySelf`: When true, each change only affects this control, and not its parent. Default is
     * false.
     * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
     * `valueChanges`
     * observables emit events with the latest status and value when the control is reset.
     * When false, no events are emitted.
     * The options options are passed to the {@link AbstractControl#updateValueAndValidity
     * updateValueAndValidity} method.
     *
     * @usageNotes
     *
     * ### Reset the form group values
     *
     * ```ts
     * const form = new FormGroup({
     *   first: new FormControl('first name'),
     *   last: new FormControl('last name')
     * });
     *
     * console.log(form.value);  // {first: 'first name', last: 'last name'}
     *
     * form.reset({ first: 'name', last: 'last name' });
     *
     * console.log(form.value);  // {first: 'name', last: 'last name'}
     * ```
     *
     * ### Reset the form group values and disabled status
     *
     * ```
     * const form = new FormGroup({
     *   first: new FormControl('first name'),
     *   last: new FormControl('last name')
     * });
     *
     * form.reset({
     *   first: {value: 'name', disabled: true},
     *   last: 'last'
     * });
     *
     * console.log(this.form.value);  // {first: 'name', last: 'last name'}
     * console.log(this.form.get('first').status);  // 'DISABLED'
     * ```
     */
    /**
     * Clear the `FormGroup`, marks all descendants are marked `pristine` and `untouched`, and
     * the value of all descendants to null.
     *
     * You reset to a specific form state by passing in a map of states
     * that matches the structure of your form, with control names as keys. The state
     * is a standalone value or a form state object with both a value and a disabled
     * status.
     *
     * \@usageNotes
     *
     * ### Reset the form group values
     *
     * ```ts
     * const form = new FormGroup({
     *   first: new FormControl('first name'),
     *   last: new FormControl('last name')
     * });
     *
     * console.log(form.value);  // {first: 'first name', last: 'last name'}
     *
     * form.reset({ first: 'name', last: 'last name' });
     *
     * console.log(form.value);  // {first: 'name', last: 'last name'}
     * ```
     *
     * ### Reset the form group values and disabled status
     *
     * ```
     * const form = new FormGroup({
     *   first: new FormControl('first name'),
     *   last: new FormControl('last name')
     * });
     *
     * form.reset({
     *   first: {value: 'name', disabled: true},
     *   last: 'last'
     * });
     *
     * console.log(this.form.value);  // {first: 'name', last: 'last name'}
     * console.log(this.form.get('first').status);  // 'DISABLED'
     * ```
     * @param {?=} options options options that determine how the control propagates changes
     * and emits events when the group is reset.
     * * `onlySelf`: When true, each change only affects this control, and not its parent. Default is
     * false.
     * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
     * `valueChanges`
     * observables emit events with the latest status and value when the control is reset.
     * When false, no events are emitted.
     * The options options are passed to the {\@link AbstractControl#updateValueAndValidity
     * updateValueAndValidity} method.
     *
     * @return {?}
     */
    FormArray.prototype.clear = /**
     * Clear the `FormGroup`, marks all descendants are marked `pristine` and `untouched`, and
     * the value of all descendants to null.
     *
     * You reset to a specific form state by passing in a map of states
     * that matches the structure of your form, with control names as keys. The state
     * is a standalone value or a form state object with both a value and a disabled
     * status.
     *
     * \@usageNotes
     *
     * ### Reset the form group values
     *
     * ```ts
     * const form = new FormGroup({
     *   first: new FormControl('first name'),
     *   last: new FormControl('last name')
     * });
     *
     * console.log(form.value);  // {first: 'first name', last: 'last name'}
     *
     * form.reset({ first: 'name', last: 'last name' });
     *
     * console.log(form.value);  // {first: 'name', last: 'last name'}
     * ```
     *
     * ### Reset the form group values and disabled status
     *
     * ```
     * const form = new FormGroup({
     *   first: new FormControl('first name'),
     *   last: new FormControl('last name')
     * });
     *
     * form.reset({
     *   first: {value: 'name', disabled: true},
     *   last: 'last'
     * });
     *
     * console.log(this.form.value);  // {first: 'name', last: 'last name'}
     * console.log(this.form.get('first').status);  // 'DISABLED'
     * ```
     * @param {?=} options options options that determine how the control propagates changes
     * and emits events when the group is reset.
     * * `onlySelf`: When true, each change only affects this control, and not its parent. Default is
     * false.
     * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
     * `valueChanges`
     * observables emit events with the latest status and value when the control is reset.
     * When false, no events are emitted.
     * The options options are passed to the {\@link AbstractControl#updateValueAndValidity
     * updateValueAndValidity} method.
     *
     * @return {?}
     */
    function (options) {
        if (options === void 0) { options = {}; }
        lodash_1.default.each(this.controls, function (c) {
            c.clear({ onlySelf: true, emitEvent: options.emitEvent });
        });
        this.updateValueAndValidity(options);
        if (lodash_1.default.has(this.options, ['submitOnChange'])) {
            this.root.submit(true);
        }
    };
    /**
     * The aggregate value of the array, including any disabled controls.
     *
     * Reports all values regardless of disabled status.
     * For enabled controls only, the `value` property is the best way to get the value of the array.
     */
    /**
     * The aggregate value of the array, including any disabled controls.
     *
     * Reports all values regardless of disabled status.
     * For enabled controls only, the `value` property is the best way to get the value of the array.
     * @return {?}
     */
    FormArray.prototype.getRawValue = /**
     * The aggregate value of the array, including any disabled controls.
     *
     * Reports all values regardless of disabled status.
     * For enabled controls only, the `value` property is the best way to get the value of the array.
     * @return {?}
     */
    function () {
        return ((/** @type {?} */ (this.controls))).map(function (control) {
            return control instanceof FormControl_1.FormControl ? control.value : ((/** @type {?} */ (control))).getRawValue();
        });
    };
    /** @internal */
    /**
     * \@internal
     * @param {?} controlConfig
     * @return {?}
     */
    FormArray.prototype._setUpControls = /**
     * \@internal
     * @param {?} controlConfig
     * @return {?}
     */
    function (controlConfig) {
        var _this = this;
        ((/** @type {?} */ (this.controls))) = [];
        lodash_1.default.each(controlConfig, function (c, index) {
            c.setParent(_this);
            ((/** @type {?} */ (_this.controls))).push(c);
        });
    };
    /** @internal */
    /**
     * \@internal
     * @param {?} index
     * @return {?}
     */
    FormArray.prototype._throwIfControlMissing = /**
     * \@internal
     * @param {?} index
     * @return {?}
     */
    function (index) {
        if (!this.controls.length) {
            throw new Error("\n        There are no form controls registered with this array yet.  If you're using ngModel,\n        you may want to check next tick (e.g. use setTimeout).\n      ");
        }
        if (!this.at(index)) {
            throw new Error("Cannot find form control at index " + index);
        }
    };
    /** @internal */
    /**
     * \@internal
     * @return {?}
     */
    FormArray.prototype._updateValue = /**
     * \@internal
     * @return {?}
     */
    function () {
        var _this = this;
        ((/** @type {?} */ (this))).value =
            // .filter((control) => control.enabled || this.disabled)
            //   .map((control) => control.value);
            lodash_1.default(((/** @type {?} */ (this.controls))))
                .filter(function (control) { return control.enabled || _this.disabled; })
                .map(function (control) { return control.value; })
                .compact()
                .value();
    };
    /** @internal */
    /**
     * \@internal
     * @param {?} value
     * @return {?}
     */
    FormArray.prototype._checkAllValuesPresent = /**
     * \@internal
     * @param {?} value
     * @return {?}
     */
    function (value) {
        // this._forEachChild((control: AbstractControl, i: number) => {
        //   if (value[i] === undefined) {
        //     throw new Error(`Must supply a value for form control at index: ${i}.`);
        //   }
        // });
    };
    /** @internal */
    /**
     * \@internal
     * @return {?}
     */
    FormArray.prototype._allControlsDisabled = /**
     * \@internal
     * @return {?}
     */
    function () {
        return lodash_1.default.every(lodash_1.default.values(this.controls), function (c) { return c.disabled; });
    };
    /** @internal */
    /**
     * \@internal
     * @param {?} status
     * @return {?}
     */
    FormArray.prototype._anyControlsHaveStatus = /**
     * \@internal
     * @param {?} status
     * @return {?}
     */
    function (status) {
        return !!lodash_1.default.find(lodash_1.default.values(this.controls), ['status', status]);
    };
    return FormArray;
}(AbstractControl_1.AbstractControl));
exports.FormArray = FormArray;

});

unwrapExports(FormArray_1);
var FormArray_2 = FormArray_1.FormArray;

var form_service = createCommonjsModule(function (module, exports) {
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
Object.defineProperty(exports, "__esModule", { value: true });




var lodash_1 = tslib.__importDefault(lodash);

var FormService = /** @class */ (function () {
    function FormService() {
        var _this = this;
        this.mergeControls = function (controls, parent_name) {
            if (parent_name === void 0) { parent_name = null; }
            /** @type {?} */
            var result = [];
            //
            if (lodash_1.default.isPlainObject(controls)) {
                lodash_1.default.forOwn(controls, function (c, name) {
                    /** @type {?} */
                    var control_name = parent_name ? parent_name + "[" + name + "]" : name;
                    if (c instanceof FormControl_1.FormControl)
                        result.push(control_name);
                    if (c instanceof FormGroup_1.FormGroup)
                        result = result.concat(_this.mergeControls(c.controls, control_name));
                    if (c instanceof FormArray_1.FormArray)
                        result = result.concat(_this.mergeControls(c.controls, control_name));
                });
            }
            if (lodash_1.default.isArray(controls)) {
                lodash_1.default.each(controls, function (c, index) {
                    if (c instanceof FormControl_1.FormControl)
                        result.push(parent_name + "[" + index + "]");
                    if (c instanceof FormGroup_1.FormGroup)
                        result = result.concat(_this.mergeControls(c.controls, parent_name + "[" + index + "]"));
                    if (c instanceof FormArray_1.FormArray)
                        result = result.concat(_this.mergeControls(c.controls, parent_name + "[" + index + "]"));
                });
            }
            return result;
        };
        this.convertToFormData = function (data) {
            /** @type {?} */
            var form = new FormData();
            lodash_1.default.forOwn(data, function (value, key) {
                if (lodash_1.default.isArray(value)) {
                    lodash_1.default.each(value, function (file) { return form.append(key + "[]", file, file.name); });
                }
                else
                    form.append(key, value);
            });
            return form;
        };
        this.convertToMediaType = function (value, media_type) {
            if (media_type) {
                switch (media_type.toLowerCase()) {
                    case 'json':
                        return JSON.stringify(value);
                    case 'form-data':
                        return _this.convertToFormData(value);
                    default:
                        return value;
                }
            }
            return value;
        };
    }
    /**
     * @return {?}
     */
    FormService.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    FormService.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
    };
    /**
     * @return {?}
     */
    FormService.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    FormService.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    FormService.decorators = [
        { type: core.Injectable }
    ];
    return FormService;
}());
exports.FormService = FormService;

});

unwrapExports(form_service);
var form_service_1 = form_service.FormService;

var error_examples = createCommonjsModule(function (module, exports) {
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** @type {?} */
exports.FormErrorExamples = {
    formControlName: "\n    <io-form [formGroup]=\"myGroup\">\n      <form-control [name]=\" 'firstName' \"></form-control>\n    </io-form>\n\n    In your class:\n\n    constructor( private _fb: IonarFormBuilder){}\n\n    this.myGroup = this._fb.group({\n        firstName: {\n            component: 'input',\n            props: {\n                value: 'YourName'\n            },\n            validators: {\n                required: true\n            }\n        }\n    });",
    formGroupName: "\n    <div [formGroup]=\"myGroup\">\n       <div formGroupName=\"person\">\n          <input formControlName=\"firstName\">\n       </div>\n    </div>\n\n    In your class:\n\n    this.myGroup = new FormGroup({\n       person: new FormGroup({ firstName: new FormControl() })\n    });",
    formArrayName: "\n    <div [formGroup]=\"myGroup\">\n      <div formArrayName=\"cities\">\n        <div *ngFor=\"let city of cityArray.controls; index as i\">\n          <input [formControlName]=\"i\">\n        </div>\n      </div>\n    </div>\n\n    In your class:\n\n    this.cityArray = new FormArray([new FormControl('SF')]);\n    this.myGroup = new FormGroup({\n      cities: this.cityArray\n    });",
    ngModelGroup: "\n    <form>\n       <div ngModelGroup=\"person\">\n          <input [(ngModel)]=\"person.name\" name=\"firstName\">\n       </div>\n    </form>",
    ngModelWithFormGroup: "\n    <div [formGroup]=\"myGroup\">\n       <input formControlName=\"firstName\">\n       <input [(ngModel)]=\"showMoreControls\" [ngModelOptions]=\"{standalone: true}\">\n    </div>\n  "
};

});

unwrapExports(error_examples);
var error_examples_1 = error_examples.FormErrorExamples;

var reactive_errors = createCommonjsModule(function (module, exports) {
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

var ReactiveErrors = /** @class */ (function () {
    function ReactiveErrors() {
    }
    /**
     * @return {?}
     */
    ReactiveErrors.controlParentException = /**
     * @return {?}
     */
    function () {
        throw new Error("formControlName must be used with a parent formGroup directive.  You'll want to add a formGroup\n       directive and pass it an existing FormGroup instance (you can create one in your class).\n\n      Example:\n\n      " + error_examples.FormErrorExamples.formControlName);
    };
    /**
     * @return {?}
     */
    ReactiveErrors.ngModelGroupException = /**
     * @return {?}
     */
    function () {
        throw new Error("formControlName cannot be used with an ngModelGroup parent. It is only compatible with parents\n       that also have a \"form\" prefix: formGroupName, formArrayName, or formGroup.\n\n       Option 1:  Update the parent to be formGroupName (reactive form strategy)\n\n        " + error_examples.FormErrorExamples.formGroupName + "\n\n        Option 2: Use ngModel instead of formControlName (template-driven strategy)\n\n        " + error_examples.FormErrorExamples.ngModelGroup);
    };
    /**
     * @return {?}
     */
    ReactiveErrors.missingFormException = /**
     * @return {?}
     */
    function () {
        throw new Error("formGroup expects a FormGroup instance. Please pass one in.\n\n       Example:\n\n       " + error_examples.FormErrorExamples.formControlName);
    };
    /**
     * @return {?}
     */
    ReactiveErrors.groupParentException = /**
     * @return {?}
     */
    function () {
        throw new Error("formGroupName must be used with a parent formGroup directive.  You'll want to add a formGroup\n      directive and pass it an existing FormGroup instance (you can create one in your class).\n\n      Example:\n\n      " + error_examples.FormErrorExamples.formGroupName);
    };
    /**
     * @return {?}
     */
    ReactiveErrors.arrayParentException = /**
     * @return {?}
     */
    function () {
        throw new Error("formArrayName must be used with a parent formGroup directive.  You'll want to add a formGroup\n       directive and pass it an existing FormGroup instance (you can create one in your class).\n\n        Example:\n\n        " + error_examples.FormErrorExamples.formArrayName);
    };
    /**
     * @return {?}
     */
    ReactiveErrors.disabledAttrWarning = /**
     * @return {?}
     */
    function () {
        console.warn("\n      It looks like you're using the disabled attribute with a reactive form directive. If you set disabled to true\n      when you set up this control in your component class, the disabled attribute will actually be set in the DOM for\n      you. We recommend using this approach to avoid 'changed after checked' errors.\n       \n      Example: \n      form = new FormGroup({\n        first: new FormControl({value: 'Nancy', disabled: true}, Validators.required),\n        last: new FormControl('Drew', Validators.required)\n      });\n    ");
    };
    /**
     * @param {?} directiveName
     * @return {?}
     */
    ReactiveErrors.ngModelWarning = /**
     * @param {?} directiveName
     * @return {?}
     */
    function (directiveName) {
        console.warn("\n    It looks like you're using ngModel on the same form field as " + directiveName + ". \n    Support for using the ngModel input property and ngModelChange event with \n    reactive form directives has been deprecated in Angular v6 and will be removed \n    in Angular v7.\n    \n    For more information on this, see our API docs here:\n    https://angular.io/api/forms/" + (directiveName === 'formControl' ? 'FormControlDirective'
            : 'FormControlName') + "#use-with-ngmodel\n    ");
    };
    return ReactiveErrors;
}());
exports.ReactiveErrors = ReactiveErrors;

});

unwrapExports(reactive_errors);
var reactive_errors_1 = reactive_errors.ReactiveErrors;

var helpers = createCommonjsModule(function (module, exports) {
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
Object.defineProperty(exports, "__esModule", { value: true });



/** @type {?} */
exports.isFormControl = function (c) {
    return c instanceof FormControl_1.FormControl;
};
/** @type {?} */
exports.isFormGroup = function (c) {
    return c instanceof FormGroup_1.FormGroup;
};
/** @type {?} */
exports.isFormArray = function (c) {
    return c instanceof FormArray_1.FormArray;
};

});

unwrapExports(helpers);
var helpers_1 = helpers.isFormControl;
var helpers_2 = helpers.isFormGroup;
var helpers_3 = helpers.isFormArray;

var core_component = createCommonjsModule(function (module, exports) {
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
Object.defineProperty(exports, "__esModule", { value: true });










/** @type {?} */
exports.formProvider = {
    provide: ControlContainer_1.ControlContainer,
    useExisting: core.forwardRef(function () { return FormComponent; })
};
var FormComponent = /** @class */ (function (_super) {
    tslib.__extends(FormComponent, _super);
    function FormComponent(_formSvs, _elRef, cd) {
        var _this = _super.call(this, cd) || this;
        _this._formSvs = _formSvs;
        _this._elRef = _elRef;
        /**
         * \@description
         * Tracks the `FormGroup` bound to this components.
         */
        _this.form = null;
        /**
         * \@description
         * Emits an event when the form submission has been triggered.
         */
        _this.submit = new core.EventEmitter();
        _this.isFormControl = helpers.isFormControl;
        _this.isFormGroup = helpers.isFormGroup;
        _this.isFormArray = helpers.isFormArray;
        return _this;
    }
    /**
     * @return {?}
     */
    FormComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        _super.prototype.ngOnInit.call(this);
        this._checkFormPresent();
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    FormComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        var _this = this;
        _super.prototype.ngOnChanges.call(this, changes);
        this._checkFormPresent();
        if (!changes.form.previousValue && changes.form.currentValue) {
            this.form.ngSubmit
                .pipe(utility.untilDestroyed(this), operators.distinctUntilChanged())
                .subscribe(function (data) {
                if (_this.form.valid || data.instant) {
                    _this.submit.emit(_this._formSvs.convertToMediaType(data.value, _this.mediaType));
                }
            });
        }
    };
    /**
     * @return {?}
     */
    FormComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        _super.prototype.ngAfterViewInit.call(this);
        this.default_template = ui.isEmptyTemplate(this._elRef);
        this.cd.detectChanges();
    };
    /**
     * @return {?}
     */
    FormComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
    };
    Object.defineProperty(FormComponent.prototype, "root", {
        /**
         * @description
         * Returns the `FormGroup` bound to whole module.
         */
        get: /**
         * \@description
         * Returns the `FormGroup` bound to whole module.
         * @return {?}
         */
        function () {
            return this.form;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormComponent.prototype, "path", {
        /**
         * @description
         * Returns an array representing the path to this group. Because this components
         * always lives at the top level of a form, it always an empty array.
         */
        get: /**
         * \@description
         * Returns an array representing the path to this group. Because this components
         * always lives at the top level of a form, it always an empty array.
         * @return {?}
         */
        function () {
            return [];
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @private
     * @return {?}
     */
    FormComponent.prototype._checkFormPresent = /**
     * @private
     * @return {?}
     */
    function () {
        if (!this.form) {
            reactive_errors.ReactiveErrors.missingFormException();
        }
    };
    FormComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'io-form',
                    template: "\n      <ng-container>\n\n          <ng-container *ngIf=\"!default_template\">\n              <ng-content></ng-content>\n          </ng-container>\n\n\n          <ng-container *ngIf=\"default_template\">\n              <ng-container\n                      *ngFor=\"let item of form.controls | keyvalue\"\n                      [ngTemplateOutlet]=\"controlTemplate\"\n                      [ngTemplateOutletContext]=\"{$implicit: item, parent: this}\"\n              ></ng-container>\n          </ng-container>\n\n          <ng-template #controlTemplate let-data let-parent=\"parent\">\n              <ng-container *ngIf=\"isFormControl(data.value)\">\n                  <form-control [parent]=\"parent\" [name]=\"data.key\"></form-control>\n              </ng-container>\n\n              <ng-container *ngIf=\"isFormArray(data.value)\">\n                  <form-array\n                          [name]=\"data.key\"\n                          [parent]=\"parent\"\n                  >\n\n                  </form-array>\n              </ng-container>\n\n              <ng-container *ngIf=\"isFormGroup(data.value)\">\n                  <form-group\n                          [name]=\"data.key\"\n                          [parent]=\"parent\"\n                  >\n                  </form-group>\n              </ng-container>\n          </ng-template>\n\n      </ng-container>\n  ",
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                    providers: [form_service.FormService, exports.formProvider],
                    styles: ["\n\n  "]
                }] }
    ];
    /** @nocollapse */
    FormComponent.ctorParameters = function () { return [
        { type: form_service.FormService },
        { type: core.ElementRef },
        { type: core.ChangeDetectorRef }
    ]; };
    FormComponent.propDecorators = {
        form: [{ type: core.Input, args: ['formGroup',] }],
        mediaType: [{ type: core.Input }],
        submit: [{ type: core.Output }],
        _contentVcRef: [{ type: core.ViewChild, args: ['contentVc', { read: core.ViewContainerRef },] }],
        controlTemplate: [{ type: core.ViewChild, args: ['controlTemplate',] }],
        ioTemplateDirList: [{ type: core.ContentChildren, args: [ui.IonarTemplateDirective,] }]
    };
    return FormComponent;
}(ControlContainer_1.ControlContainer));
exports.FormComponent = FormComponent;

});

unwrapExports(core_component);
var core_component_1 = core_component.formProvider;
var core_component_2 = core_component.FormComponent;

var formArray_component = createCommonjsModule(function (module, exports) {
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
Object.defineProperty(exports, "__esModule", { value: true });




/** @type {?} */
exports.formArrayProvider = {
    provide: ControlContainer_1.ControlContainer,
    useExisting: core.forwardRef(function () { return FormArrayComponent; })
};
var FormArrayComponent = /** @class */ (function (_super) {
    tslib.__extends(FormArrayComponent, _super);
    ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///
    function FormArrayComponent(parent, _elRef, cd) {
        var _this = _super.call(this, cd) || this;
        _this._elRef = _elRef;
        _this.parent = parent;
        return _this;
    }
    Object.defineProperty(FormArrayComponent.prototype, "controlTemplate", {
        get: /**
         * @return {?}
         */
        function () {
            return ((/** @type {?} */ (this.parent))).controlTemplate;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormArrayComponent.prototype, "attribute", {
        get: /**
         * @return {?}
         */
        function () {
            return this.name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormArrayComponent.prototype, "control", {
        get: /**
         * @return {?}
         */
        function () {
            return (/** @type {?} */ (this.root.get(this.path)));
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    FormArrayComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        _super.prototype.ngAfterViewInit.call(this);
        this.isDefaultTemplate = ui.isEmptyTemplate(this._elRef);
        this.cd.detectChanges();
    };
    FormArrayComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'form-array',
                    exportAs: 'form-array',
                    template: "\n      <ng-container *ngIf=\"isDefaultTemplate\">\n          <ng-container\n                  *ngFor=\"let item of control | keyvalue\"\n                  [ngTemplateOutlet]=\"controlTemplate\"\n                  [ngTemplateOutletContext]=\"{$implicit: item, parent: this}\"\n          ></ng-container>\n      </ng-container>\n      <ng-container *ngIf=\"!isDefaultTemplate\">\n          <ng-content></ng-content>\n      </ng-container>\n  ",
                    providers: [exports.formArrayProvider],
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                    styles: ["\n\n  "]
                }] }
    ];
    /** @nocollapse */
    FormArrayComponent.ctorParameters = function () { return [
        { type: ControlContainer_1.ControlContainer, decorators: [{ type: core.Optional }, { type: core.Host }, { type: core.SkipSelf }] },
        { type: core.ElementRef },
        { type: core.ChangeDetectorRef }
    ]; };
    FormArrayComponent.propDecorators = {
        attribute: [{ type: core.HostBinding, args: ['attr.id',] }],
        _controlContainers: [{ type: core.ContentChildren, args: [ControlContainer_1.ControlContainer,] }]
    };
    return FormArrayComponent;
}(ControlContainer_1.ControlContainer));
exports.FormArrayComponent = FormArrayComponent;

});

unwrapExports(formArray_component);
var formArray_component_1 = formArray_component.formArrayProvider;
var formArray_component_2 = formArray_component.FormArrayComponent;

var formGroup_component = createCommonjsModule(function (module, exports) {
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
Object.defineProperty(exports, "__esModule", { value: true });





/** @type {?} */
exports.formGroupProvider = {
    provide: ControlContainer_1.ControlContainer,
    useExisting: core.forwardRef(function () { return FormGroupComponent; })
};
var FormGroupComponent = /** @class */ (function (_super) {
    tslib.__extends(FormGroupComponent, _super);
    ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///
    function FormGroupComponent(parent, _vcRef, _elRef, cd) {
        var _this = _super.call(this, cd) || this;
        _this._vcRef = _vcRef;
        _this._elRef = _elRef;
        _this.parent = parent;
        return _this;
    }
    Object.defineProperty(FormGroupComponent.prototype, "controlTemplate", {
        get: /**
         * @return {?}
         */
        function () {
            return ((/** @type {?} */ (this.parent))).controlTemplate;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormGroupComponent.prototype, "attribute", {
        get: /**
         * @return {?}
         */
        function () {
            return this.name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormGroupComponent.prototype, "control", {
        get: /**
         * @return {?}
         */
        function () {
            return (/** @type {?} */ (this.root.get(this.path)));
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    FormGroupComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        _super.prototype.ngOnInit.call(this);
    };
    /**
     * @return {?}
     */
    FormGroupComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        _super.prototype.ngAfterViewInit.call(this);
        this.isDefaultTemplate = ui.isEmptyTemplate(this._elRef);
        this.cd.detectChanges();
    };
    /**
     * @return {?}
     */
    FormGroupComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
    };
    FormGroupComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'form-group',
                    exportAs: 'form-group',
                    template: "\n      <ng-container *ngIf=\"isDefaultTemplate\">\n          <ng-container\n                  *ngFor=\"let item of control | keyvalue\"\n                  [ngTemplateOutlet]=\"controlTemplate\"\n                  [ngTemplateOutletContext]=\"{$implicit: item, parent: this}\"\n          ></ng-container>\n      </ng-container>\n      <ng-container *ngIf=\"!isDefaultTemplate\">\n          <ng-content></ng-content>\n      </ng-container>\n  ",
                    providers: [exports.formGroupProvider],
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                    styles: ["\n\n  "]
                }] }
    ];
    /** @nocollapse */
    FormGroupComponent.ctorParameters = function () { return [
        { type: ControlContainer_1.ControlContainer, decorators: [{ type: core.Optional }, { type: core.Host }, { type: core.SkipSelf }] },
        { type: core.ViewContainerRef },
        { type: core.ElementRef },
        { type: core.ChangeDetectorRef }
    ]; };
    FormGroupComponent.propDecorators = {
        attribute: [{ type: core.HostBinding, args: ['attr.id',] }],
        _controlContainerList: [{ type: core.ContentChildren, args: [ControlContainer_1.ControlContainer,] }],
        _ioControlList: [{ type: core.ContentChildren, args: [IoControl_1.IoControl,] }]
    };
    return FormGroupComponent;
}(ControlContainer_1.ControlContainer));
exports.FormGroupComponent = FormGroupComponent;

});

unwrapExports(formGroup_component);
var formGroup_component_1 = formGroup_component.formGroupProvider;
var formGroup_component_2 = formGroup_component.FormGroupComponent;

var core_module = createCommonjsModule(function (module, exports) {
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
Object.defineProperty(exports, "__esModule", { value: true });











var CoreModule = /** @class */ (function () {
    function CoreModule() {
    }
    CoreModule.decorators = [
        { type: core.NgModule, args: [{
                    declarations: [
                        core_component.FormComponent,
                        field_component.FieldComponent, formControl_component.FormControlComponent, label_component.LabelComponent, feedback_component.FeedbackComponent,
                        formArray_component.FormArrayComponent,
                        formGroup_component.FormGroupComponent,
                        dynamicField_directive.DynamicFieldDirective, submit_directive.SubmitDirective
                    ],
                    imports: [common.CommonModule],
                    exports: [
                        core_component.FormComponent,
                        field_component.FieldComponent,
                        formControl_component.FormControlComponent,
                        formArray_component.FormArrayComponent,
                        formGroup_component.FormGroupComponent,
                        label_component.LabelComponent, feedback_component.FeedbackComponent,
                        submit_directive.SubmitDirective
                    ]
                },] }
    ];
    return CoreModule;
}());
exports.CoreModule = CoreModule;

});

unwrapExports(core_module);
var core_module_1 = core_module.CoreModule;

var select_component = createCommonjsModule(function (module, exports) {
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
Object.defineProperty(exports, "__esModule", { value: true });


var lodash_1 = tslib.__importDefault(lodash);
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
        this.change = new core.EventEmitter();
        this.blur = new core.EventEmitter();
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
        { type: core.Component, args: [{
                    selector: 'io-select',
                    template: "<control\n        [label]=\"selected_option?.label\"\n        [show_menu]=\"show_menu\"\n        (click)=\"onToggleMenu()\"\n></control>\n\n<menu\n        [options]=\"options\"\n        (onSelectOption)=\"onChange($event)\"\n        *ngIf=\"show_menu\"\n></menu>",
                    styles: [":host{display:flex;position:relative;flex:1}"]
                }] }
    ];
    /** @nocollapse */
    SelectComponent.ctorParameters = function () { return [
        { type: core.ElementRef }
    ]; };
    SelectComponent.propDecorators = {
        options: [{ type: core.Input }],
        value: [{ type: core.Input }],
        change: [{ type: core.Output }],
        blur: [{ type: core.Output }],
        invalid: [{ type: core.Input }],
        clickout: [{ type: core.HostListener, args: ['document:click', ['$event'],] }]
    };
    return SelectComponent;
}());
exports.SelectComponent = SelectComponent;

});

unwrapExports(select_component);
var select_component_1 = select_component.SelectComponent;

var control_component = createCommonjsModule(function (module, exports) {
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
Object.defineProperty(exports, "__esModule", { value: true });

var ControlComponent = /** @class */ (function () {
    function ControlComponent(eRef) {
        this.eRef = eRef;
        this.show_menu = false;
        this.label = null;
        this.tabindex = 0;
    }
    /**
     * @return {?}
     */
    ControlComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.eRef.nativeElement.focus();
    };
    ControlComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'control',
                    template: "<div id=\"value\">\n    <span *ngIf=\"!label\">Please select</span>\n    <span *ngIf=\"label\">{{label}}</span>\n</div>\n\n<div id=\"icon\">\n    <i class=\"fas fa-angle-right\"></i>\n</div>\n",
                    styles: [":host{background-color:#fff;border-radius:5px;box-sizing:border-box;border:1px solid #d9d9d9;cursor:pointer;display:flex;align-items:center;justify-content:space-between;font-size:1.5rem;outline:0;padding:0 1rem;transition:.3s cubic-bezier(.645,.045,.355,1);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;width:100%;height:40px;z-index:1}:host:focus{border-color:#40a9ff;outline:0;box-shadow:0 0 0 2px rgba(24,144,255,.2);border-right-width:1px!important}:host:hover{border-color:#40a9ff}:host .fa-angle-right{font-size:2rem}"]
                }] }
    ];
    /** @nocollapse */
    ControlComponent.ctorParameters = function () { return [
        { type: core.ElementRef }
    ]; };
    ControlComponent.propDecorators = {
        show_menu: [{ type: core.Input }],
        label: [{ type: core.Input }],
        tabindex: [{ type: core.HostBinding }]
    };
    return ControlComponent;
}());
exports.ControlComponent = ControlComponent;

});

unwrapExports(control_component);
var control_component_1 = control_component.ControlComponent;

var menu_component$2 = createCommonjsModule(function (module, exports) {
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
Object.defineProperty(exports, "__esModule", { value: true });

var MenuComponent = /** @class */ (function () {
    function MenuComponent() {
        this.options = [];
        this.onSelectOption = new core.EventEmitter();
    }
    /**
     * @return {?}
     */
    MenuComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    MenuComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'menu',
                    template: "\n      <ng-container *ngFor=\"let option of options\">\n          <select-option\n                  [data]=\"option\"\n                  (click)=\"this.onSelectOption.emit(option)\"\n          ></select-option>\n      </ng-container>\n  ",
                    styles: ["\n      :host {\n          background-color: white;\n          border-radius: 5px;\n          box-sizing: border-box;\n          border: 1px solid rgb(196, 202, 212);\n          overflow-y: scroll;\n          padding: 0 10px;\n          position: absolute;\n          top: 100%;\n          z-index: 9999;\n          width: 100%;\n          max-height: 20rem;\n      }\n  "]
                }] }
    ];
    /** @nocollapse */
    MenuComponent.ctorParameters = function () { return []; };
    MenuComponent.propDecorators = {
        options: [{ type: core.Input }],
        onSelectOption: [{ type: core.Output }]
    };
    return MenuComponent;
}());
exports.MenuComponent = MenuComponent;

});

unwrapExports(menu_component$2);
var menu_component_1$1 = menu_component$2.MenuComponent;

var option_component = createCommonjsModule(function (module, exports) {
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
Object.defineProperty(exports, "__esModule", { value: true });

var OptionComponent = /** @class */ (function () {
    function OptionComponent() {
        this.data = null;
        this.selected = false;
        this.disabled = false;
    }
    /**
     * @return {?}
     */
    OptionComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.selected = this.data.selected;
        this.disabled = this.data.disabled;
    };
    /**
     * @param {?} btn
     * @return {?}
     */
    OptionComponent.prototype.onClick = /**
     * @param {?} btn
     * @return {?}
     */
    function (btn) {
    };
    OptionComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'select-option',
                    template: "\n      <p>\n          {{data.label}}\n      </p>",
                    styles: [":host{color:rgba(0,0,0,.65);cursor:pointer;display:flex;justify-content:flex-start;font-weight:400;line-height:22px;overflow:hidden;padding:5px 12px;position:relative;text-overflow:ellipsis;transition:background .3s;white-space:nowrap;width:100%}:host:hover{background-color:#e6f7ff}:host.selected{background-color:#fafafa;font-weight:600;color:rgba(0,0,0,.65)}:host.disabled{color:rgba(0,0,0,.25);cursor:not-allowed;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}:host.disabled:hover{background-color:transparent}"]
                }] }
    ];
    /** @nocollapse */
    OptionComponent.ctorParameters = function () { return []; };
    OptionComponent.propDecorators = {
        data: [{ type: core.Input }],
        selected: [{ type: core.HostBinding, args: ['class.selected',] }],
        disabled: [{ type: core.HostBinding, args: ['class.disabled',] }],
        onClick: [{ type: core.HostListener, args: ['click', ['$event.target'],] }]
    };
    return OptionComponent;
}());
exports.OptionComponent = OptionComponent;

});

unwrapExports(option_component);
var option_component_1 = option_component.OptionComponent;

var select_module = createCommonjsModule(function (module, exports) {
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
Object.defineProperty(exports, "__esModule", { value: true });






var SelectModule = /** @class */ (function () {
    function SelectModule() {
    }
    SelectModule.decorators = [
        { type: core.NgModule, args: [{
                    declarations: [
                        select_component.SelectComponent,
                        control_component.ControlComponent,
                        menu_component$2.MenuComponent,
                        option_component.OptionComponent
                    ],
                    imports: [
                        common.CommonModule
                    ],
                    exports: [
                        select_component.SelectComponent
                    ],
                    entryComponents: [select_component.SelectComponent]
                },] }
    ];
    return SelectModule;
}());
exports.SelectModule = SelectModule;

});

unwrapExports(select_module);
var select_module_1 = select_module.SelectModule;

var click_component = createCommonjsModule(function (module, exports) {
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
Object.defineProperty(exports, "__esModule", { value: true });

var ClickComponent = /** @class */ (function () {
    ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///
    function ClickComponent() {
        ///-----------------------------------------------  Variables   -----------------------------------------------///
        this.change = new core.EventEmitter();
        this.multiple = false;
        this.title = '';
    }
    /**
     * @return {?}
     */
    ClickComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    ClickComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
    };
    ClickComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'click',
                    template: "<ng-container *ngTemplateOutlet=\"template\"></ng-container>\n<ng-container *ngIf=\"title\">\n    <p>{{title}}</p>\n</ng-container>\n\n<input\n        type=\"file\"\n        [multiple]=\"multiple\"\n        (change)=\"$event.stopPropagation();change.emit($event.target.files)\"\n>\n",
                    styles: [":host{background-color:#fff;border:1px solid #d9d9d9;border-radius:.4rem;color:rgba(0,0,0,.65);cursor:pointer;display:flex;align-items:center;justify-content:center;outline:0;position:relative;transition:.3s cubic-bezier(.645,.045,.355,1);width:100%;height:4rem;max-width:20rem;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}:host:focus{border-color:#40a9ff;outline:0;box-shadow:0 0 0 2px rgba(24,144,255,.2);border-right-width:1px!important}:host:hover{border-color:#40a9ff;color:#40a9ff}:host.invalid{border-color:#f5222d}:host.invalid:focus{border-color:#ff4d4f;outline:0;box-shadow:0 0 0 2px rgba(245,34,45,.2)}input{display:flex;outline:0;opacity:0;position:absolute;width:100%;height:100%;z-index:1}"]
                }] }
    ];
    /** @nocollapse */
    ClickComponent.ctorParameters = function () { return []; };
    ClickComponent.propDecorators = {
        change: [{ type: core.Output }],
        template: [{ type: core.Input }],
        multiple: [{ type: core.Input }],
        title: [{ type: core.Input }]
    };
    return ClickComponent;
}());
exports.ClickComponent = ClickComponent;

});

unwrapExports(click_component);
var click_component_1 = click_component.ClickComponent;

var drop_component = createCommonjsModule(function (module, exports) {
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
Object.defineProperty(exports, "__esModule", { value: true });

var DropComponent = /** @class */ (function () {
    ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///
    function DropComponent() {
        var _this = this;
        ///-----------------------------------------------  Variables   -----------------------------------------------///
        this.change = new core.EventEmitter();
        this.multiple = false;
        this.drop_hover = false;
        this.onDrop = function ($event) {
            event.preventDefault();
            _this.change.emit($event.dataTransfer.files);
            _this.drop_hover = false;
        };
        this.onDragOver = function ($event) {
            event.preventDefault();
            _this.drop_hover = true;
        };
        this.onDragLeave = function ($event) {
            event.preventDefault();
            _this.drop_hover = false;
        };
    }
    /**
     * @return {?}
     */
    DropComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    DropComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'drop',
                    template: "<ng-container *ngTemplateOutlet=\"template\"></ng-container>\r\n\r\n\r\n<input\r\n        type=\"file\"\r\n        [multiple]=\"multiple\"\r\n        (change)=\"$event.stopPropagation();change.emit($event.target.files)\"\r\n>",
                    styles: [":host{background-color:#fff;border:1px dashed #d9d9d9;border-radius:.4rem;color:rgba(0,0,0,.65);display:flex;align-items:center;justify-content:center;outline:0;position:relative;transition:.3s;width:100%;height:100%;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}:host.drop_hover{border:2px dashed #40a9ff;color:#40a9ff}:host.drop_hover p{color:#40a9ff}:host p{transition:.3s cubic-bezier(.645,.045,.355,1)}:host:focus{border-color:#40a9ff;outline:0;box-shadow:0 0 0 2px rgba(24,144,255,.2);border-right-width:1px!important}:host:hover{border-color:#40a9ff;color:#40a9ff}:host:hover p{color:#40a9ff}:host.invalid{border-color:#f5222d}:host.invalid:focus{border-color:#ff4d4f;outline:0;box-shadow:0 0 0 2px rgba(245,34,45,.2)}input{border:1px solid red;display:flex;outline:0;opacity:0;position:absolute;width:100%;height:100%;z-index:1}"]
                }] }
    ];
    /** @nocollapse */
    DropComponent.ctorParameters = function () { return []; };
    DropComponent.propDecorators = {
        change: [{ type: core.Output }],
        multiple: [{ type: core.Input }],
        template: [{ type: core.Input }],
        drop_hover: [{ type: core.HostBinding, args: ['class.drop_hover',] }],
        onDrop: [{ type: core.HostListener, args: ['drop', ['$event'],] }],
        onDragOver: [{ type: core.HostListener, args: ['dragover', ['$event'],] }],
        onDragLeave: [{ type: core.HostListener, args: ['dragleave', ['$event'],] }]
    };
    return DropComponent;
}());
exports.DropComponent = DropComponent;

});

unwrapExports(drop_component);
var drop_component_1 = drop_component.DropComponent;

var upload_module = createCommonjsModule(function (module, exports) {
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
Object.defineProperty(exports, "__esModule", { value: true });





var UploadModule = /** @class */ (function () {
    function UploadModule() {
    }
    UploadModule.decorators = [
        { type: core.NgModule, args: [{
                    declarations: [
                        upload_component.UploadComponent,
                        click_component.ClickComponent,
                        drop_component.DropComponent,
                    ],
                    imports: [common.CommonModule],
                    exports: [upload_component.UploadComponent],
                    entryComponents: [upload_component.UploadComponent]
                },] }
    ];
    return UploadModule;
}());
exports.UploadModule = UploadModule;

});

unwrapExports(upload_module);
var upload_module_1 = upload_module.UploadModule;

var input_module = createCommonjsModule(function (module, exports) {
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
Object.defineProperty(exports, "__esModule", { value: true });




var InputModule = /** @class */ (function () {
    function InputModule() {
    }
    InputModule.decorators = [
        { type: core.NgModule, args: [{
                    declarations: [
                        input_component.InputComponent
                    ],
                    imports: [
                        common.CommonModule,
                        ui.IonarUI
                    ],
                    exports: [
                        input_component.InputComponent
                    ],
                    entryComponents: [input_component.InputComponent]
                },] }
    ];
    return InputModule;
}());
exports.InputModule = InputModule;

});

unwrapExports(input_module);
var input_module_1 = input_module.InputModule;

var checkbox_component = createCommonjsModule(function (module, exports) {
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
Object.defineProperty(exports, "__esModule", { value: true });

var CheckboxComponent = /** @class */ (function () {
    function CheckboxComponent() {
        var _this = this;
        this.title = '';
        this.value = false;
        this.change = new core.EventEmitter();
        this.blur = new core.EventEmitter();
        this.invalid = false;
        this.onClick = function () {
            _this.value = !_this.value;
            _this.change.emit(_this.value);
        };
    }
    /**
     * @return {?}
     */
    CheckboxComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    CheckboxComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'io-checkbox',
                    template: "<div class=\"checkbox\" [class.active]=\"value\">\n    <i class=\"fas fa-check icon\"></i>\n</div>\n<p class=\"label\">{{label}}</p>\n\n\n",
                    styles: [":host{display:flex;align-items:center}:host .checkbox{background-color:#fff;border-radius:.3em;box-sizing:border-box;border:1px solid #d9d9d9;display:flex;align-items:center;justify-content:center;margin-right:.3em;padding:0;touch-action:manipulation;transition:.3s;width:1.8em;height:1.8em}:host .checkbox:hover{border-color:#1890ff}:host .checkbox.active{background-color:#1890ff;border-color:#1890ff}:host .icon{color:#fff}"]
                }] }
    ];
    /** @nocollapse */
    CheckboxComponent.ctorParameters = function () { return []; };
    CheckboxComponent.propDecorators = {
        label: [{ type: core.Input }],
        title: [{ type: core.Input }],
        value: [{ type: core.Input }],
        change: [{ type: core.Output }],
        blur: [{ type: core.Output }],
        invalid: [{ type: core.Input }],
        onClick: [{ type: core.HostListener, args: ['click',] }]
    };
    return CheckboxComponent;
}());
exports.CheckboxComponent = CheckboxComponent;

});

unwrapExports(checkbox_component);
var checkbox_component_1 = checkbox_component.CheckboxComponent;

var checkbox_module = createCommonjsModule(function (module, exports) {
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
Object.defineProperty(exports, "__esModule", { value: true });


var CheckboxModule = /** @class */ (function () {
    function CheckboxModule() {
    }
    CheckboxModule.decorators = [
        { type: core.NgModule, args: [{
                    declarations: [
                        checkbox_component.CheckboxComponent
                    ],
                    exports: [
                        checkbox_component.CheckboxComponent
                    ],
                    entryComponents: [checkbox_component.CheckboxComponent]
                },] }
    ];
    return CheckboxModule;
}());
exports.CheckboxModule = CheckboxModule;

});

unwrapExports(checkbox_module);
var checkbox_module_1 = checkbox_module.CheckboxModule;

var textarea_module = createCommonjsModule(function (module, exports) {
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
Object.defineProperty(exports, "__esModule", { value: true });


var TextareaModule = /** @class */ (function () {
    function TextareaModule() {
    }
    TextareaModule.decorators = [
        { type: core.NgModule, args: [{
                    declarations: [
                        textarea_component.TextareaComponent
                    ],
                    exports: [textarea_component.TextareaComponent],
                    entryComponents: [textarea_component.TextareaComponent]
                },] }
    ];
    return TextareaModule;
}());
exports.TextareaModule = TextareaModule;

});

unwrapExports(textarea_module);
var textarea_module_1 = textarea_module.TextareaModule;

var menu_module = createCommonjsModule(function (module, exports) {
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
Object.defineProperty(exports, "__esModule", { value: true });



var MenuModule = /** @class */ (function () {
    function MenuModule() {
    }
    MenuModule.decorators = [
        { type: core.NgModule, args: [{
                    declarations: [
                        menu_component.MenuComponent
                    ],
                    imports: [
                        common.CommonModule
                    ],
                    exports: [
                        menu_component.MenuComponent
                    ],
                    entryComponents: [menu_component.MenuComponent]
                },] }
    ];
    return MenuModule;
}());
exports.MenuModule = MenuModule;

});

unwrapExports(menu_module);
var menu_module_1 = menu_module.MenuModule;

var tree_component = createCommonjsModule(function (module, exports) {
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
Object.defineProperty(exports, "__esModule", { value: true });

var TreeComponent = /** @class */ (function () {
    function TreeComponent(cd) {
        var _this = this;
        this.cd = cd;
        this.name = '';
        this.value = null;
        this.change = new core.EventEmitter();
        this.onChange = function (node) {
            _this.selected = node;
            _this.change.emit(node.value);
            _this.cd.detectChanges();
        };
    }
    TreeComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'io-tree',
                    template: "<ng-container *ngFor=\"let node of options; let i = index\">\r\n    <tree-node\r\n            [data]=\"node\"\r\n            [selected]=\"selected\"\r\n            [template]=\"template\"\r\n            (change)=\"onChange($event)\"\r\n    >\r\n        <ng-content></ng-content>\r\n    </tree-node>\r\n</ng-container>\r\n\r\n\r\n",
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    TreeComponent.ctorParameters = function () { return [
        { type: core.ChangeDetectorRef }
    ]; };
    TreeComponent.propDecorators = {
        options: [{ type: core.Input }],
        name: [{ type: core.Input }],
        value: [{ type: core.Input }],
        template: [{ type: core.Input }],
        change: [{ type: core.Output }]
    };
    return TreeComponent;
}());
exports.TreeComponent = TreeComponent;

});

unwrapExports(tree_component);
var tree_component_1 = tree_component.TreeComponent;

var node_component = createCommonjsModule(function (module, exports) {
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
Object.defineProperty(exports, "__esModule", { value: true });



var NodeComponent = /** @class */ (function (_super) {
    tslib.__extends(NodeComponent, _super);
    function NodeComponent(cd, el) {
        var _this = _super.call(this, cd, el) || this;
        _this.change = new core.EventEmitter();
        _this.onChange = function () {
            if (!_this.data.children) {
                _this.setContext({
                    children: _this.data.children,
                    label: _this.data.label,
                    selected: _this.data === _this.selected
                });
                _this.change.emit(_this.data);
                _this.cd.markForCheck();
            }
        };
        return _this;
    }
    /**
     * @return {?}
     */
    NodeComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        _super.prototype.ngOnInit.call(this);
        this.setContext({
            children: this.data.children,
            label: this.data.label,
            selected: this.data === this.selected
        });
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    NodeComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        _super.prototype.ngOnChanges.call(this, changes);
    };
    NodeComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'tree-node',
                    template: "<ng-container [ioCollapsible]=\"data.children ? '' : null\" *ngIf=\"viewInit\">\r\n    <div\r\n            class=\"node-item\"\r\n            collapseToggle\r\n            (click)=\"onChange()\"\r\n    >\r\n        <ng-container [ngTemplateOutlet]=\"template\" [ngTemplateOutletContext]=\"context\"></ng-container>\r\n    </div>\r\n\r\n    <ng-container *ngIf=\"data?.children\">\r\n        <div\r\n                class=\"node-children\"\r\n                *collapseContent\r\n        >\r\n            <ng-container *ngFor=\"let node of data?.children\">\r\n                <tree-node\r\n                        [data]=\"node\"\r\n                        [selected]=\"selected\"\r\n                        [template]=\"template\"\r\n                        (change)=\"change.emit($event)\"></tree-node>\r\n            </ng-container>\r\n        </div>\r\n    </ng-container>\r\n\r\n</ng-container>\r\n\r\n\r\n<ng-template let-context #default_template>\r\n\r\n    <div class=\"icon\" *ngIf=\"context?.children\">\r\n        <i class=\"fas fa-chevron-right\"></i>\r\n    </div>\r\n    <p [class.active]=\"context?.selected\" class=\"label\">{{context?.label}}</p>\r\n</ng-template>\r\n\r\n<ng-template #content_template>\r\n    <ng-content></ng-content>\r\n</ng-template>\r\n",
                    styles: [":host ::ng-deep .node-item{display:flex;align-items:center}:host ::ng-deep .node-item .icon{font-size:1.2rem}:host ::ng-deep .node-item .label{margin-left:2rem}:host ::ng-deep .node-item .label.active{font-weight:700}:host ::ng-deep .node-children{margin-left:2rem}"]
                }] }
    ];
    /** @nocollapse */
    NodeComponent.ctorParameters = function () { return [
        { type: core.ChangeDetectorRef },
        { type: core.ElementRef }
    ]; };
    NodeComponent.propDecorators = {
        data: [{ type: core.Input }],
        selected: [{ type: core.Input }],
        template: [{ type: core.Input }],
        change: [{ type: core.Output }]
    };
    return NodeComponent;
}(IoFormFieldUI_1.IoFormFieldUI));
exports.NodeComponent = NodeComponent;

});

unwrapExports(node_component);
var node_component_1 = node_component.NodeComponent;

var tree_module = createCommonjsModule(function (module, exports) {
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
Object.defineProperty(exports, "__esModule", { value: true });





var TreeModule = /** @class */ (function () {
    function TreeModule() {
    }
    TreeModule.decorators = [
        { type: core.NgModule, args: [{
                    imports: [
                        ui.IonarUI,
                        common.CommonModule
                    ],
                    declarations: [
                        tree_component.TreeComponent,
                        node_component.NodeComponent
                    ],
                    exports: [
                        tree_component.TreeComponent
                    ]
                },] }
    ];
    return TreeModule;
}());
exports.TreeModule = TreeModule;

});

unwrapExports(tree_module);
var tree_module_1 = tree_module.TreeModule;

var ui_module = createCommonjsModule(function (module, exports) {
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
Object.defineProperty(exports, "__esModule", { value: true });








var FormUiModule = /** @class */ (function () {
    function FormUiModule() {
    }
    FormUiModule.decorators = [
        { type: core.NgModule, args: [{
                    declarations: [],
                    imports: [
                        input_module.InputModule, checkbox_module.CheckboxModule, upload_module.UploadModule, select_module.SelectModule, textarea_module.TextareaModule, menu_module.MenuModule, tree_module.TreeModule
                    ],
                    exports: [
                        input_module.InputModule, checkbox_module.CheckboxModule, upload_module.UploadModule, select_module.SelectModule, textarea_module.TextareaModule, menu_module.MenuModule, tree_module.TreeModule
                    ],
                },] }
    ];
    return FormUiModule;
}());
exports.FormUiModule = FormUiModule;

});

unwrapExports(ui_module);
var ui_module_1 = ui_module.FormUiModule;

var form_module = createCommonjsModule(function (module, exports) {
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
Object.defineProperty(exports, "__esModule", { value: true });




var IonarFormModule = /** @class */ (function () {
    function IonarFormModule() {
    }
    IonarFormModule.decorators = [
        { type: core.NgModule, args: [{
                    declarations: [],
                    imports: [
                        common.CommonModule,
                        core_module.CoreModule,
                        ui_module.FormUiModule
                    ],
                    exports: [
                        core_module.CoreModule,
                        ui_module.FormUiModule
                    ]
                },] }
    ];
    return IonarFormModule;
}());
exports.IonarFormModule = IonarFormModule;

});

unwrapExports(form_module);
var form_module_1 = form_module.IonarFormModule;

var Validator = createCommonjsModule(function (module, exports) {
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @record
 */
function JoiError() { }
exports.JoiError = JoiError;
/**
 * \@publicApi
 * @record
 */
function AsyncValidatorFn() { }
exports.AsyncValidatorFn = AsyncValidatorFn;

});

unwrapExports(Validator);
var Validator_1 = Validator.JoiError;
var Validator_2 = Validator.AsyncValidatorFn;

var Form = createCommonjsModule(function (module, exports) {
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @record
 */
function FormGroupState() { }
exports.FormGroupState = FormGroupState;
/**
 * Interface for configs provided to an `AbstractControl`.
 *
 * \@publicApi
 * @record
 */
function FormControlState() { }
exports.FormControlState = FormControlState;
/**
 * @record
 */
function ControlProperties() { }
exports.ControlProperties = ControlProperties;
/**
 * @record
 */
function AbstractControlOptions() { }
exports.AbstractControlOptions = AbstractControlOptions;

});

unwrapExports(Form);
var Form_1 = Form.FormGroupState;
var Form_2 = Form.FormControlState;
var Form_3 = Form.ControlProperties;
var Form_4 = Form.AbstractControlOptions;

var form_builder_service = createCommonjsModule(function (module, exports) {
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
Object.defineProperty(exports, "__esModule", { value: true });





var lodash_1 = tslib.__importDefault(lodash);
var i0 = tslib.__importStar(core);
var IonarFormBuilder = /** @class */ (function () {
    function IonarFormBuilder() {
        var _this = this;
        /**
         * \@description
         * Construct a new `FormGroup` instance.
         *
         * @param state A collection of child controls. The key for each child is the name
         * under which it is registered.
         *
         * @param options options options object for the `FormGroup`. The object can
         * have two shapes:
         *
         * 1) `AbstractControlOptions` object (preferred), which consists of:
         * * `validators`: A synchronous validator function, or an array of validator functions
         * * `asyncValidators`: A single async validator or array of async validator functions
         * * `updateOn`: The event upon which the control should be updated (options: 'change' | 'blur' |
         * submit')
         *
         * 2) Legacy options object, which consists of:
         * * `validator`: A synchronous validator function, or an array of validator functions
         * * `asyncValidator`: A single async validator or array of async validator functions
         *
         */
        this.group = function (state, options) {
            /** @type {?} */
            var controls = (/** @type {?} */ (_this._reduceControls(state)));
            return new FormGroup_1.FormGroup(controls, options);
        };
        /**
         * Constructs a new `FormArray` from the given array of configurations,
         * validators and options.
         *
         * @param controlsConfig An array of child controls or control configs. Each
         * child control is given an index when it is registered.
         *
         * @param validatorOrOpts A synchronous validator function, or an array of
         * such functions, or an `AbstractControlOptions` object that contains
         * validation functions and a validation trigger.
         *
         * @param asyncValidator A single async validator or array of async validator
         * functions.
         */
        this.array = function (state, options) {
            /** @type {?} */
            var controls = (/** @type {?} */ (_this._reduceControls(state)));
            return new FormArray_1.FormArray(controls, options);
        };
    }
    /**
     * @description
     * Construct a new `FormControl` with the given state, validators and options.
     *
     * @param state A collection of child controls. The key for each child is the name
     * under which it is registered.
     *
     * @param options options options object for the `FormGroup`. The object can
     * have two shapes:
     *
     *
     * @usageNotes
     *
     * ### Initialize a control as disabled
     *
     * The following example returns a control with an initial value in a disabled state.
     *
     * <code-example path="forms/ts/formBuilder/form_builder_example.ts"
     *   linenums="false" region="disabled-control">
     * </code-example>
     */
    /**
     * \@description
     * Construct a new `FormControl` with the given state, validators and options.
     *
     * \@usageNotes
     *
     * ### Initialize a control as disabled
     *
     * The following example returns a control with an initial value in a disabled state.
     *
     * <code-example path="forms/ts/formBuilder/form_builder_example.ts"
     *   linenums="false" region="disabled-control">
     * </code-example>
     * @param {?} state A collection of child controls. The key for each child is the name
     * under which it is registered.
     *
     * @return {?}
     */
    IonarFormBuilder.prototype.control = /**
     * \@description
     * Construct a new `FormControl` with the given state, validators and options.
     *
     * \@usageNotes
     *
     * ### Initialize a control as disabled
     *
     * The following example returns a control with an initial value in a disabled state.
     *
     * <code-example path="forms/ts/formBuilder/form_builder_example.ts"
     *   linenums="false" region="disabled-control">
     * </code-example>
     * @param {?} state A collection of child controls. The key for each child is the name
     * under which it is registered.
     *
     * @return {?}
     */
    function (state) {
        return new FormControl_1.FormControl(state);
    };
    /** @internal */
    /**
     * \@internal
     * @param {?} controlsConfig
     * @return {?}
     */
    IonarFormBuilder.prototype._reduceControls = /**
     * \@internal
     * @param {?} controlsConfig
     * @return {?}
     */
    function (controlsConfig) {
        var _this = this;
        /** @type {?} */
        var controls;
        if (lodash_1.default.isPlainObject(controlsConfig)) {
            controls = {};
            lodash_1.default.forOwn(controlsConfig, function (c, name) {
                ((/** @type {?} */ (controls)))[name] = _this._createControl(c);
            });
        }
        else {
            controls = [];
            lodash_1.default.each(controlsConfig, function (c) {
                ((/** @type {?} */ (controls))).push((/** @type {?} */ (_this._createControl(c))));
            });
        }
        return controls;
    };
    /** @internal */
    /**
     * \@internal
     * @param {?} controlConfig
     * @return {?}
     */
    IonarFormBuilder.prototype._createControl = /**
     * \@internal
     * @param {?} controlConfig
     * @return {?}
     */
    function (controlConfig) {
        if (controlConfig instanceof FormControl_1.FormControl || controlConfig instanceof FormGroup_1.FormGroup ||
            controlConfig instanceof FormArray_1.FormArray) {
            return controlConfig;
        }
        else {
            return this.control(controlConfig);
        }
    };
    IonarFormBuilder.decorators = [
        { type: core.Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */ IonarFormBuilder.ngInjectableDef = i0.defineInjectable({ factory: function IonarFormBuilder_Factory() { return new IonarFormBuilder(); }, token: IonarFormBuilder, providedIn: "root" });
    return IonarFormBuilder;
}());
exports.IonarFormBuilder = IonarFormBuilder;

});

unwrapExports(form_builder_service);
var form_builder_service_1 = form_builder_service.IonarFormBuilder;

var esm5 = createCommonjsModule(function (module, exports) {
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
Object.defineProperty(exports, "__esModule", { value: true });

exports.IonarFormModule = form_module.IonarFormModule;

exports.FormControl = FormControl_1.FormControl;

exports.FormGroup = FormGroup_1.FormGroup;

exports.FormArray = FormArray_1.FormArray;

exports.AbstractControl = AbstractControl_1.AbstractControl;



exports.IonarFormBuilder = form_builder_service.IonarFormBuilder;

});

unwrapExports(esm5);
var esm5_1 = esm5.IonarFormModule;
var esm5_2 = esm5.FormControl;
var esm5_3 = esm5.FormGroup;
var esm5_4 = esm5.FormArray;
var esm5_5 = esm5.AbstractControl;
var esm5_6 = esm5.IonarFormBuilder;

var ionarForm = createCommonjsModule(function (module, exports) {
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Generated bundle index. Do not edit.
 */

exports.FormControl = esm5.FormControl;
exports.FormGroup = esm5.FormGroup;
exports.FormArray = esm5.FormArray;
exports.AbstractControl = esm5.AbstractControl;
exports.IonarFormBuilder = esm5.IonarFormBuilder;
exports.IonarFormModule = esm5.IonarFormModule;

exports.ɵk = feedback_component.FeedbackComponent;

exports.ɵf = field_component.FieldComponent;

exports.ɵj = label_component.LabelComponent;

exports.ɵm = formArray_component.FormArrayComponent;
exports.ɵl = formArray_component.formArrayProvider;

exports.ɵh = formControl_component.FormControlComponent;
exports.ɵg = formControl_component.controlNameBinding;

exports.ɵo = formGroup_component.FormGroupComponent;
exports.ɵn = formGroup_component.formGroupProvider;

exports.ɵc = core_component.FormComponent;
exports.ɵb = core_component.formProvider;

exports.ɵa = core_module.CoreModule;

exports.ɵp = dynamicField_directive.DynamicFieldDirective;

exports.ɵq = submit_directive.SubmitDirective;

exports.ɵd = ControlContainer_1.ControlContainer;

exports.ɵi = IoControl_1.IoControl;

exports.ɵe = form_service.FormService;

exports.ɵx = checkbox_component.CheckboxComponent;

exports.ɵw = checkbox_module.CheckboxModule;

exports.ɵt = input_component.InputComponent;

exports.ɵs = input_module.InputModule;

exports.ɵbk = menu_component.MenuComponent;

exports.ɵbj = menu_module.MenuModule;

exports.ɵbe = control_component.ControlComponent;

exports.ɵbf = menu_component$2.MenuComponent;

exports.ɵbg = option_component.OptionComponent;

exports.ɵbd = select_component.SelectComponent;

exports.ɵbc = select_module.SelectModule;

exports.ɵbi = textarea_component.TextareaComponent;

exports.ɵbh = textarea_module.TextareaModule;

exports.ɵbn = node_component.NodeComponent;

exports.ɵbm = tree_component.TreeComponent;

exports.ɵbl = tree_module.TreeModule;

exports.ɵba = click_component.ClickComponent;

exports.ɵbb = drop_component.DropComponent;

exports.ɵz = upload_component.UploadComponent;

exports.ɵy = upload_module.UploadModule;

exports.ɵv = IoAbstractUI_1.IoAbstractUI;

exports.ɵu = IoFormFieldUI_1.IoFormFieldUI;

exports.ɵr = ui_module.FormUiModule;

});

var ionarForm$1 = unwrapExports(ionarForm);
var ionarForm_1 = ionarForm.FormControl;
var ionarForm_2 = ionarForm.FormGroup;
var ionarForm_3 = ionarForm.FormArray;
var ionarForm_4 = ionarForm.AbstractControl;
var ionarForm_5 = ionarForm.IonarFormBuilder;
var ionarForm_6 = ionarForm.IonarFormModule;

export default ionarForm$1;
export { ionarForm_1 as FormControl, ionarForm_2 as FormGroup, ionarForm_3 as FormArray, ionarForm_4 as AbstractControl, ionarForm_5 as IonarFormBuilder, ionarForm_6 as IonarFormModule };

//# sourceMappingURL=ionar-form.js.map