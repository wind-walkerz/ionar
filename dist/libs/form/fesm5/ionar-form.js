import { CommonModule } from '@angular/common';
import { __assign, __extends } from 'tslib';
import { Subject, forkJoin } from 'rxjs';
import { map, distinctUntilChanged } from 'rxjs/operators';
import _ from 'lodash';
import { untilDestroyed } from '@ionar/utility';
import { Component, ElementRef, EventEmitter, HostListener, Input, Output, HostBinding, NgModule, TemplateRef, ViewChild, ChangeDetectorRef, ChangeDetectionStrategy, ComponentFactoryResolver, Directive, ViewContainerRef, Injectable, ContentChildren, ContentChild, Host, Renderer2, defineInjectable } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
        this.change = new EventEmitter();
        this.blur = new EventEmitter();
        this.invalid = false;
        ///-----------------------------------------------  General Functions   -----------------------------------------------///
        this.onToggleMenu = function () {
            _this.show_menu = !_this.show_menu;
        };
        this.onChange = function (option) {
            _this.options = _.map(_this.options, function (item) {
                item.selected = _.isEqual(item, option);
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
            this.selected_option = _.find(this.options, ['value', this.value.toString()]);
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
        { type: Component, args: [{
                    selector: 'io-select',
                    template: "<control\n        [label]=\"selected_option?.label\"\n        [show_menu]=\"show_menu\"\n        (click)=\"onToggleMenu()\"\n></control>\n\n<menu\n        [options]=\"options\"\n        (onSelectOption)=\"onChange($event)\"\n        *ngIf=\"show_menu\"\n></menu>",
                    styles: [":host{display:flex;position:relative;flex:1}"]
                }] }
    ];
    /** @nocollapse */
    SelectComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    SelectComponent.propDecorators = {
        options: [{ type: Input }],
        value: [{ type: Input }],
        change: [{ type: Output }],
        blur: [{ type: Output }],
        invalid: [{ type: Input }],
        clickout: [{ type: HostListener, args: ['document:click', ['$event'],] }]
    };
    return SelectComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
        { type: Component, args: [{
                    selector: 'control',
                    template: "<div id=\"value\">\n    <span *ngIf=\"!label\">Please select</span>\n    <span *ngIf=\"label\">{{label}}</span>\n</div>\n\n<div id=\"icon\">\n    <i class=\"fas fa-angle-right\"></i>\n</div>\n",
                    styles: [":host{background-color:#fff;border-radius:5px;box-sizing:border-box;border:1px solid #d9d9d9;cursor:pointer;display:flex;align-items:center;justify-content:space-between;font-size:1.5rem;outline:0;padding:0 1rem;transition:.3s cubic-bezier(.645,.045,.355,1);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;width:100%;height:40px;z-index:1}:host:focus{border-color:#40a9ff;outline:0;box-shadow:0 0 0 2px rgba(24,144,255,.2);border-right-width:1px!important}:host:hover{border-color:#40a9ff}:host .fa-angle-right{font-size:2rem}"]
                }] }
    ];
    /** @nocollapse */
    ControlComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    ControlComponent.propDecorators = {
        show_menu: [{ type: Input }],
        label: [{ type: Input }],
        tabindex: [{ type: HostBinding }]
    };
    return ControlComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var MenuComponent = /** @class */ (function () {
    function MenuComponent() {
        this.options = [];
        this.onSelectOption = new EventEmitter();
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
        { type: Component, args: [{
                    selector: 'menu',
                    template: "\n      <ng-container *ngFor=\"let option of options\">\n          <select-option\n                  [data]=\"option\"\n                  (click)=\"this.onSelectOption.emit(option)\"\n          ></select-option>\n      </ng-container>\n  ",
                    styles: ["\n      :host {\n          background-color: white;\n          border-radius: 5px;\n          box-sizing: border-box;\n          border: 1px solid rgb(196, 202, 212);\n          overflow-y: scroll;\n          padding: 0 10px;\n          position: absolute;\n          top: 100%;\n          z-index: 9999;\n          width: 100%;\n          max-height: 20rem;\n      }\n  "]
                }] }
    ];
    /** @nocollapse */
    MenuComponent.ctorParameters = function () { return []; };
    MenuComponent.propDecorators = {
        options: [{ type: Input }],
        onSelectOption: [{ type: Output }]
    };
    return MenuComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
        { type: Component, args: [{
                    selector: 'select-option',
                    template: "\n      <p>\n          {{data.label}}\n      </p>",
                    styles: [":host{color:rgba(0,0,0,.65);cursor:pointer;display:flex;justify-content:flex-start;font-weight:400;line-height:22px;overflow:hidden;padding:5px 12px;position:relative;text-overflow:ellipsis;transition:background .3s;white-space:nowrap;width:100%}:host:hover{background-color:#e6f7ff}:host.selected{background-color:#fafafa;font-weight:600;color:rgba(0,0,0,.65)}:host.disabled{color:rgba(0,0,0,.25);cursor:not-allowed;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}:host.disabled:hover{background-color:transparent}"]
                }] }
    ];
    /** @nocollapse */
    OptionComponent.ctorParameters = function () { return []; };
    OptionComponent.propDecorators = {
        data: [{ type: Input }],
        selected: [{ type: HostBinding, args: ['class.selected',] }],
        disabled: [{ type: HostBinding, args: ['class.disabled',] }],
        onClick: [{ type: HostListener, args: ['click', ['$event.target'],] }]
    };
    return OptionComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SelectModule = /** @class */ (function () {
    function SelectModule() {
    }
    SelectModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        SelectComponent,
                        ControlComponent,
                        MenuComponent,
                        OptionComponent
                    ],
                    imports: [
                        CommonModule
                    ],
                    exports: [
                        SelectComponent
                    ],
                    entryComponents: [SelectComponent]
                },] }
    ];
    return SelectModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var UploadComponent = /** @class */ (function () {
    ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///
    function UploadComponent(elRef) {
        this.elRef = elRef;
        ///-----------------------------------------------  Variables   -----------------------------------------------///
        this.file_list = [];
        this.change = new EventEmitter();
        this.invalid = false;
        this.type = 'input';
        this.multiple = false;
    }
    /**
     * @return {?}
     */
    UploadComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (!this.template) {
            this.template = this._defaultTempRef;
        }
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    UploadComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
    };
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
        this.file_list = this.file_list.concat(_.map(file_list));
        this.change.emit(this.multiple ? this.file_list : this.file_list[0]);
    };
    UploadComponent.decorators = [
        { type: Component, args: [{
                    selector: 'io-upload',
                    template: "<ng-container *ngIf=\"type === 'dropzone'\">\r\n    <ng-container *ngTemplateOutlet=\"dropzone\"></ng-container>\r\n</ng-container>\r\n\r\n<ng-container *ngIf=\"type === 'input'\">\r\n    <ng-container *ngTemplateOutlet=\"click\"></ng-container>\r\n</ng-container>\r\n\r\n<ng-template #click>\r\n    <click\r\n            (change)=\"onFileChanged($event)\"\r\n            [template]=\"template\"\r\n            [multiple]=\"multiple\"\r\n    >\r\n    </click>\r\n\r\n</ng-template>\r\n\r\n<ng-template #dropzone>\r\n    <drop\r\n            (change)=\"onFileChanged($event)\"\r\n            [template]=\"template\"\r\n    >\r\n    </drop>\r\n</ng-template>\r\n\r\n\r\n<ng-template #default>\r\n    <ng-content></ng-content>\r\n</ng-template>\r\n",
                    styles: [":host{display:flex;flex-direction:column;align-items:flex-start;width:100%;height:100%}"]
                }] }
    ];
    /** @nocollapse */
    UploadComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    UploadComponent.propDecorators = {
        change: [{ type: Output }],
        invalid: [{ type: Input }],
        type: [{ type: Input }],
        template: [{ type: Input }],
        multiple: [{ type: Input }],
        _defaultTempRef: [{ type: ViewChild, args: ['default',] }]
    };
    return UploadComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ClickComponent = /** @class */ (function () {
    ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///
    function ClickComponent() {
        ///-----------------------------------------------  Variables   -----------------------------------------------///
        this.change = new EventEmitter();
        this.multiple = false;
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
        { type: Component, args: [{
                    selector: 'click',
                    template: "<ng-container *ngTemplateOutlet=\"template\"></ng-container>\n\n\n<input\n        type=\"file\"\n        [multiple]=\"multiple\"\n        (change)=\"$event.stopPropagation();change.emit($event.target.files)\"\n>",
                    styles: [":host{background-color:#fff;border-radius:.4rem;color:rgba(0,0,0,.65);cursor:pointer;display:flex;align-items:center;justify-content:center;outline:0;position:relative;transition:.3s cubic-bezier(.645,.045,.355,1);width:100%;height:4rem;max-width:20rem;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}:host:focus{border-color:#40a9ff;outline:0;box-shadow:0 0 0 2px rgba(24,144,255,.2);border-right-width:1px!important}:host:hover{border-color:#40a9ff;color:#40a9ff}:host.invalid{border-color:#f5222d}:host.invalid:focus{border-color:#ff4d4f;outline:0;box-shadow:0 0 0 2px rgba(245,34,45,.2)}input{display:flex;outline:0;opacity:0;position:absolute;width:100%;height:100%;z-index:1}"]
                }] }
    ];
    /** @nocollapse */
    ClickComponent.ctorParameters = function () { return []; };
    ClickComponent.propDecorators = {
        change: [{ type: Output }],
        template: [{ type: Input }],
        multiple: [{ type: Input }]
    };
    return ClickComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DropComponent = /** @class */ (function () {
    ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///
    function DropComponent() {
        var _this = this;
        ///-----------------------------------------------  Variables   -----------------------------------------------///
        this.change = new EventEmitter();
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
        { type: Component, args: [{
                    selector: 'drop',
                    template: "<ng-container *ngTemplateOutlet=\"template\"></ng-container>\r\n\r\n\r\n<input\r\n        type=\"file\"\r\n        [multiple]=\"multiple\"\r\n        (change)=\"$event.stopPropagation();change.emit($event.target.files)\"\r\n>",
                    styles: [":host{background-color:#fff;border:1px dashed #d9d9d9;border-radius:.4rem;color:rgba(0,0,0,.65);display:flex;align-items:center;justify-content:center;outline:0;position:relative;transition:.3s;width:100%;height:100%;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}:host.drop_hover{border:2px dashed #40a9ff;color:#40a9ff}:host.drop_hover p{color:#40a9ff}:host p{transition:.3s cubic-bezier(.645,.045,.355,1)}:host:focus{border-color:#40a9ff;outline:0;box-shadow:0 0 0 2px rgba(24,144,255,.2);border-right-width:1px!important}:host:hover{border-color:#40a9ff;color:#40a9ff}:host:hover p{color:#40a9ff}:host.invalid{border-color:#f5222d}:host.invalid:focus{border-color:#ff4d4f;outline:0;box-shadow:0 0 0 2px rgba(245,34,45,.2)}input{border:1px solid red;display:flex;outline:0;opacity:0;position:absolute;width:100%;height:100%;z-index:1}"]
                }] }
    ];
    /** @nocollapse */
    DropComponent.ctorParameters = function () { return []; };
    DropComponent.propDecorators = {
        change: [{ type: Output }],
        multiple: [{ type: Input }],
        template: [{ type: Input }],
        drop_hover: [{ type: HostBinding, args: ['class.drop_hover',] }],
        onDrop: [{ type: HostListener, args: ['drop', ['$event'],] }],
        onDragOver: [{ type: HostListener, args: ['dragover', ['$event'],] }],
        onDragLeave: [{ type: HostListener, args: ['dragleave', ['$event'],] }]
    };
    return DropComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FileComponent = /** @class */ (function () {
    ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///
    function FileComponent(cd) {
        this.cd = cd;
        this.name = '';
    }
    /**
     * @return {?}
     */
    FileComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var reader = new FileReader();
        reader.readAsDataURL(this.data);
        reader.onload = function () {
            _this.image = reader.result;
            // need to run CD since file load runs outside of zone
            _this.cd.markForCheck();
        };
    };
    ///-----------------------------------------------  Main Functions   -----------------------------------------------///
    ///-----------------------------------------------  Main Functions   -----------------------------------------------///
    /**
     * @param {?} changes
     * @return {?}
     */
    FileComponent.prototype.ngOnChanges = 
    ///-----------------------------------------------  Main Functions   -----------------------------------------------///
    /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
    };
    FileComponent.decorators = [
        { type: Component, args: [{
                    selector: 'file',
                    template: "<img [src]=\"image\" alt=\"\">\n\n<p>{{name}}</p>\n\n<i class=\"fas fa-times remove-icon\"></i>",
                    styles: [":host{border:1px dashed #d9d9d9;border-radius:.4rem;display:flex;margin-top:1rem;padding:.8rem;width:100%;height:6.6rem}:host img{width:5rem;height:5rem}:host p{margin-left:2rem}:host .remove-icon{color:#f5222d;font-size:1.2rem;margin-left:auto}"]
                }] }
    ];
    /** @nocollapse */
    FileComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef }
    ]; };
    FileComponent.propDecorators = {
        data: [{ type: Input }]
    };
    return FileComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var UploadModule = /** @class */ (function () {
    function UploadModule() {
    }
    UploadModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        UploadComponent,
                        ClickComponent,
                        DropComponent,
                        FileComponent
                    ],
                    imports: [CommonModule],
                    exports: [UploadComponent],
                    entryComponents: [UploadComponent]
                },] }
    ];
    return UploadModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var InputComponent = /** @class */ (function () {
    function InputComponent(cd) {
        var _this = this;
        this.cd = cd;
        ///-----------------------------------------------  Variables   -----------------------------------------------///
        this.type = '';
        this.name = '';
        this.placeholder = '';
        this.value = null;
        this.invalid = false;
        this.disabled = false;
        this.range = [];
        this.readonly = false;
        this.change = new EventEmitter();
        this.blur = new EventEmitter();
        this.enter = new EventEmitter();
        this.host_focus = false;
        this.host_invalid = false;
        ///-----------------------------------------------  Main Functions   -----------------------------------------------///
        this.onFocus = function () {
            _this.host_focus = true;
        };
        this.onBlur = function () {
            _this.blur.emit();
            _this.host_focus = false;
            _this.cd.markForCheck();
        };
        this.onChange = _.debounce(function (e) {
            e.stopPropagation();
            console.log(e.target.value);
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
        this.onKeyPress = function (e) {
            if (e.keyCode === 13)
                _this.enter.emit();
        };
        this.onKeyDown = function (e) {
            return (_this.type === 'number')
                ? _this.onNumberKeyDown(e)
                : (_this.type === 'phone')
                    ? _this.onPhoneKeyDown(e)
                    : null;
        };
        this.onPaste = function (e) {
            return (_this.type === 'number')
                ? _this.onNumberPaste(e)
                : (_this.type === 'phone')
                    ? _this.onPhonePaste(e)
                    : null;
        };
        // Ensure that it is a number from [0-9] no decimal_point
        this.onPhoneKeyDown = function (e) {
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
        this.onPhonePaste = function (e) {
            if (!/^\d+$/.test(e.clipboardData.getData('Text'))) {
                e.preventDefault();
            }
        };
        // Ensure that it is a  number: integer || decimal
        this.onNumberKeyDown = function (e) {
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
        this.onNumberPaste = function (e) {
            if (!/^\d.+$/.test(e.clipboardData.getData('Text'))) {
                e.preventDefault();
            }
        };
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
        this.templateContext = {
            props: {
                value: this.value,
                type: this.type,
                name: this.name,
                placeholder: this.placeholder,
                invalid: this.invalid,
                disabled: this.disabled,
                range: this.range,
                readonly: this.readonly
            },
            events: {
                change: this.change,
                blur: this.blur,
                enter: this.enter,
                keydown: this.onKeyDown,
                keypress: this.onKeyPress,
                paste: this.onPaste
            }
        };
        this.host_invalid = this.invalid;
        this.cd.markForCheck();
    };
    /**
     * @return {?}
     */
    InputComponent.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        this.host_invalid = this.invalid;
        this.cd.markForCheck();
    };
    /**
     * @return {?}
     */
    InputComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
    };
    InputComponent.decorators = [
        { type: Component, args: [{
                    selector: 'io-input',
                    template: "<ng-container *ngIf=\"!template\">\r\n    <input\r\n            [type]=\"type\"\r\n            [name]=\"name\"\r\n            [placeholder]=\"placeholder\"\r\n            [value]=\"value\"\r\n            (input)=\"onChange($event)\"\r\n            (blur)=\"onBlur()\"\r\n            (focus)=\"onFocus()\"\r\n            (keydown)=\"onKeyDown($event)\"\r\n            (paste)=\"onPaste($event)\"\r\n            (keypress)=\"onKeyPress($event)\"\r\n\r\n            *ngIf=\"!(readonly || disabled)\"\r\n    >\r\n\r\n</ng-container>\r\n\r\n\r\n<ng-container *ngIf=\"template\">\r\n    <ng-container *ngTemplateOutlet=\"template; context:templateContext\"></ng-container>\r\n</ng-container>\r\n\r\n<span *ngIf=\"readonly || disabled\">\r\n          {{value}}\r\n      </span>\r\n<!--<ng-container-->\r\n<!--*ngIf=\"properties?.loading\"-->\r\n<!--&gt;-->\r\n<!--<svg version=\"1.1\"-->\r\n\r\n<!--class=\"loading_icon\"-->\r\n<!--xmlns=\"http://www.w3.org/2000/svg\"-->\r\n<!--x=\"0px\"-->\r\n<!--y=\"0px\"-->\r\n<!--viewBox=\"0 0 80 80\"-->\r\n<!--xml:space=\"preserve\"-->\r\n<!--&gt;-->\r\n<!--<path-->\r\n<!--fill=\"#D43B11\"-->\r\n<!--d=\"M10,40c0,0,0-0.4,0-1.1c0-0.3,0-0.8,0-1.3c0-0.3,0-0.5,0-0.8c0-0.3,0.1-0.6,0.1-0.9c0.1-0.6,0.1-1.4,0.2-2.1-->\r\n<!--c0.2-0.8,0.3-1.6,0.5-2.5c0.2-0.9,0.6-1.8,0.8-2.8c0.3-1,0.8-1.9,1.2-3c0.5-1,1.1-2,1.7-3.1c0.7-1,1.4-2.1,2.2-3.1-->\r\n<!--c1.6-2.1,3.7-3.9,6-5.6c2.3-1.7,5-3,7.9-4.1c0.7-0.2,1.5-0.4,2.2-0.7c0.7-0.3,1.5-0.3,2.3-0.5c0.8-0.2,1.5-0.3,2.3-0.4l1.2-0.1-->\r\n<!--l0.6-0.1l0.3,0l0.1,0l0.1,0l0,0c0.1,0-0.1,0,0.1,0c1.5,0,2.9-0.1,4.5,0.2c0.8,0.1,1.6,0.1,2.4,0.3c0.8,0.2,1.5,0.3,2.3,0.5-->\r\n<!--c3,0.8,5.9,2,8.5,3.6c2.6,1.6,4.9,3.4,6.8,5.4c1,1,1.8,2.1,2.7,3.1c0.8,1.1,1.5,2.1,2.1,3.2c0.6,1.1,1.2,2.1,1.6,3.1-->\r\n<!--c0.4,1,0.9,2,1.2,3c0.3,1,0.6,1.9,0.8,2.7c0.2,0.9,0.3,1.6,0.5,2.4c0.1,0.4,0.1,0.7,0.2,1c0,0.3,0.1,0.6,0.1,0.9-->\r\n<!--c0.1,0.6,0.1,1,0.1,1.4C74,39.6,74,40,74,40c0.2,2.2-1.5,4.1-3.7,4.3s-4.1-1.5-4.3-3.7c0-0.1,0-0.2,0-0.3l0-0.4c0,0,0-0.3,0-0.9-->\r\n<!--c0-0.3,0-0.7,0-1.1c0-0.2,0-0.5,0-0.7c0-0.2-0.1-0.5-0.1-0.8c-0.1-0.6-0.1-1.2-0.2-1.9c-0.1-0.7-0.3-1.4-0.4-2.2-->\r\n<!--c-0.2-0.8-0.5-1.6-0.7-2.4c-0.3-0.8-0.7-1.7-1.1-2.6c-0.5-0.9-0.9-1.8-1.5-2.7c-0.6-0.9-1.2-1.8-1.9-2.7c-1.4-1.8-3.2-3.4-5.2-4.9-->\r\n<!--c-2-1.5-4.4-2.7-6.9-3.6c-0.6-0.2-1.3-0.4-1.9-0.6c-0.7-0.2-1.3-0.3-1.9-0.4c-1.2-0.3-2.8-0.4-4.2-0.5l-2,0c-0.7,0-1.4,0.1-2.1,0.1-->\r\n<!--c-0.7,0.1-1.4,0.1-2,0.3c-0.7,0.1-1.3,0.3-2,0.4c-2.6,0.7-5.2,1.7-7.5,3.1c-2.2,1.4-4.3,2.9-6,4.7c-0.9,0.8-1.6,1.8-2.4,2.7-->\r\n<!--c-0.7,0.9-1.3,1.9-1.9,2.8c-0.5,1-1,1.9-1.4,2.8c-0.4,0.9-0.8,1.8-1,2.6c-0.3,0.9-0.5,1.6-0.7,2.4c-0.2,0.7-0.3,1.4-0.4,2.1-->\r\n<!--c-0.1,0.3-0.1,0.6-0.2,0.9c0,0.3-0.1,0.6-0.1,0.8c0,0.5-0.1,0.9-0.1,1.3C10,39.6,10,40,10,40z\"-->\r\n<!--&gt;-->\r\n<!--<animateTransform-->\r\n<!--attributeType=\"xml\"-->\r\n<!--attributeName=\"transform\"-->\r\n<!--type=\"rotate\"-->\r\n<!--from=\"0 40 40\"-->\r\n<!--to=\"360 40 40\"-->\r\n<!--dur=\"0.8s\"-->\r\n<!--repeatCount=\"indefinite\"-->\r\n<!--/>-->\r\n<!--</path>-->\r\n<!--<path-->\r\n<!--fill=\"#D43B11\"-->\r\n<!--d=\"M62,40.1c0,0,0,0.2-0.1,0.7c0,0.2,0,0.5-0.1,0.8c0,0.2,0,0.3,0,0.5c0,0.2-0.1,0.4-0.1,0.7-->\r\n<!--c-0.1,0.5-0.2,1-0.3,1.6c-0.2,0.5-0.3,1.1-0.5,1.8c-0.2,0.6-0.5,1.3-0.7,1.9c-0.3,0.7-0.7,1.3-1,2.1c-0.4,0.7-0.9,1.4-1.4,2.1-->\r\n<!--c-0.5,0.7-1.1,1.4-1.7,2c-1.2,1.3-2.7,2.5-4.4,3.6c-1.7,1-3.6,1.8-5.5,2.4c-2,0.5-4,0.7-6.2,0.7c-1.9-0.1-4.1-0.4-6-1.1-->\r\n<!--c-1.9-0.7-3.7-1.5-5.2-2.6c-1.5-1.1-2.9-2.3-4-3.7c-0.6-0.6-1-1.4-1.5-2c-0.4-0.7-0.8-1.4-1.2-2c-0.3-0.7-0.6-1.3-0.8-2-->\r\n<!--c-0.2-0.6-0.4-1.2-0.6-1.8c-0.1-0.6-0.3-1.1-0.4-1.6c-0.1-0.5-0.1-1-0.2-1.4c-0.1-0.9-0.1-1.5-0.1-2c0-0.5,0-0.7,0-0.7-->\r\n<!--s0,0.2,0.1,0.7c0.1,0.5,0,1.1,0.2,2c0.1,0.4,0.2,0.9,0.3,1.4c0.1,0.5,0.3,1,0.5,1.6c0.2,0.6,0.4,1.1,0.7,1.8-->\r\n<!--c0.3,0.6,0.6,1.2,0.9,1.9c0.4,0.6,0.8,1.3,1.2,1.9c0.5,0.6,1,1.3,1.6,1.8c1.1,1.2,2.5,2.3,4,3.2c1.5,0.9,3.2,1.6,5,2.1-->\r\n<!--c1.8,0.5,3.6,0.6,5.6,0.6c1.8-0.1,3.7-0.4,5.4-1c1.7-0.6,3.3-1.4,4.7-2.4c1.4-1,2.6-2.1,3.6-3.3c0.5-0.6,0.9-1.2,1.3-1.8-->\r\n<!--c0.4-0.6,0.7-1.2,1-1.8c0.3-0.6,0.6-1.2,0.8-1.8c0.2-0.6,0.4-1.1,0.5-1.7c0.1-0.5,0.2-1,0.3-1.5c0.1-0.4,0.1-0.8,0.1-1.2-->\r\n<!--c0-0.2,0-0.4,0.1-0.5c0-0.2,0-0.4,0-0.5c0-0.3,0-0.6,0-0.8c0-0.5,0-0.7,0-0.7c0-1.1,0.9-2,2-2s2,0.9,2,2C62,40,62,40.1,62,40.1z\"-->\r\n<!--&gt;-->\r\n<!--<animateTransform-->\r\n<!--attributeType=\"xml\"-->\r\n<!--attributeName=\"transform\"-->\r\n<!--type=\"rotate\"-->\r\n<!--from=\"0 40 40\"-->\r\n<!--to=\"-360 40 40\"-->\r\n<!--dur=\"0.6s\"-->\r\n<!--repeatCount=\"indefinite\"-->\r\n<!--/>-->\r\n<!--</path>-->\r\n<!--</svg>-->\r\n<!--</ng-container>-->",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    host: {
                        '[class.disabled]': 'disabled',
                        '[class.readonly]': 'readonly'
                    },
                    styles: [":host{background-color:transparent;border:1px solid #d9d9d9;border-radius:.4rem;color:#363636;display:flex;align-items:center;justify-content:flex-start;font-size:1.5rem;outline:0;overflow:hidden;padding:0 1rem;position:relative;transition:.3s cubic-bezier(.645,.045,.355,1);width:100%;height:auto;min-height:2.25em;max-height:5rem;max-width:100%}:host.focus{border-color:#40a9ff;outline:0;box-shadow:0 0 0 2px rgba(24,144,255,.2);border-right-width:1px!important}:host:hover{border-color:#40a9ff}:host.invalid{border-color:#f5222d}:host.invalid.focus{border-color:#ff4d4f;outline:0;box-shadow:0 0 0 2px rgba(245,34,45,.2)}:host input{border:none;color:inherit;display:flex;flex:1px;font-size:inherit;font-weight:inherit;text-transform:inherit;text-decoration:inherit;outline:0;height:100%;max-width:100%;z-index:1}:host .loading_icon{width:10%}:host-context(.readonly){border:0}:host-context(.disabled){border:0}"]
                }] }
    ];
    /** @nocollapse */
    InputComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef }
    ]; };
    InputComponent.propDecorators = {
        type: [{ type: Input }],
        name: [{ type: Input }],
        placeholder: [{ type: Input }],
        value: [{ type: Input }],
        invalid: [{ type: Input }],
        disabled: [{ type: Input }],
        range: [{ type: Input }],
        readonly: [{ type: Input }],
        change: [{ type: Output }],
        blur: [{ type: Output }],
        enter: [{ type: Output }],
        template: [{ type: Input }],
        host_focus: [{ type: HostBinding, args: ['class.focus',] }],
        host_invalid: [{ type: HostBinding, args: ['class.invalid',] }]
    };
    return InputComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var InputModule = /** @class */ (function () {
    function InputModule() {
    }
    InputModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        InputComponent
                    ],
                    imports: [
                        CommonModule
                    ],
                    exports: [
                        InputComponent
                    ],
                    entryComponents: [InputComponent]
                },] }
    ];
    return InputModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CheckboxComponent = /** @class */ (function () {
    function CheckboxComponent() {
        var _this = this;
        this.title = '';
        this.value = false;
        this.change = new EventEmitter();
        this.blur = new EventEmitter();
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
        { type: Component, args: [{
                    selector: 'io-checkbox',
                    template: "<div class=\"checkbox\" [class.active]=\"value\">\n    <i class=\"fas fa-check icon\"></i>\n</div>\n<p class=\"label\">{{label}}</p>\n\n\n",
                    styles: [":host{display:flex;align-items:center}:host .checkbox{background-color:#fff;border-radius:.3em;box-sizing:border-box;border:1px solid #d9d9d9;display:flex;align-items:center;justify-content:center;margin-right:.3em;padding:0;touch-action:manipulation;transition:.3s;width:1.8em;height:1.8em}:host .checkbox:hover{border-color:#1890ff}:host .checkbox.active{background-color:#1890ff;border-color:#1890ff}:host .icon{color:#fff}"]
                }] }
    ];
    /** @nocollapse */
    CheckboxComponent.ctorParameters = function () { return []; };
    CheckboxComponent.propDecorators = {
        label: [{ type: Input }],
        title: [{ type: Input }],
        value: [{ type: Input }],
        change: [{ type: Output }],
        blur: [{ type: Output }],
        invalid: [{ type: Input }],
        onClick: [{ type: HostListener, args: ['click',] }]
    };
    return CheckboxComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CheckboxModule = /** @class */ (function () {
    function CheckboxModule() {
    }
    CheckboxModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        CheckboxComponent
                    ],
                    exports: [
                        CheckboxComponent
                    ],
                    entryComponents: [CheckboxComponent]
                },] }
    ];
    return CheckboxModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var TextareaComponent = /** @class */ (function () {
    ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///
    function TextareaComponent() {
        ///-----------------------------------------------  Variables   -----------------------------------------------///
        this.name = '';
        this.value = '';
        this.placeholder = '';
        this.change = new EventEmitter();
        this.blur = new EventEmitter();
        this.invalid = false;
    }
    /**
     * @return {?}
     */
    TextareaComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    TextareaComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
    };
    TextareaComponent.decorators = [
        { type: Component, args: [{
                    selector: 'io-textarea',
                    template: "\n      <textarea\n              [name]=\"name\"\n              [value]=\"value\"\n              [class.invalid]=\"invalid\"\n              cols=\"1\" rows=\"1\"\n              [placeholder]=\"placeholder\"\n              \n              (change)=\"$event.stopPropagation(); change.emit($event.target.value);\"\n              (blur)=\"blur.emit()\"\n      ></textarea>\n  ",
                    styles: ["\n      :host {\n          display: flex;\n          flex: 1;\n      }\n\n      textarea {\n          border: none;\n          font-size: 1.5rem;\n          padding: 1rem;\n          width: 100%;\n          max-width: 100%;\n          overflow-y: scroll;\n      }\n  "]
                }] }
    ];
    /** @nocollapse */
    TextareaComponent.ctorParameters = function () { return []; };
    TextareaComponent.propDecorators = {
        name: [{ type: Input }],
        value: [{ type: Input }],
        placeholder: [{ type: Input }],
        change: [{ type: Output }],
        blur: [{ type: Output }],
        invalid: [{ type: Input }]
    };
    return TextareaComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var TextareaModule = /** @class */ (function () {
    function TextareaModule() {
    }
    TextareaModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        TextareaComponent
                    ],
                    exports: [TextareaComponent],
                    entryComponents: [TextareaComponent]
                },] }
    ];
    return TextareaModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var MenuComponent$1 = /** @class */ (function () {
    function MenuComponent() {
        var _this = this;
        this.options = [];
        this.name = '';
        this.value = null;
        this.change = new EventEmitter();
        this.blur = new EventEmitter();
        this.enter = new EventEmitter();
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
        { type: Component, args: [{
                    selector: 'io-menu',
                    template: "\n      <ng-container *ngFor=\"let option of options\">\n          <div\n                  class=\"option\"\n                  [class.active]=\"option.value === value\"\n                  (click)=\"onSelectOption(option)\"\n          >\n              {{option.label}}\n          </div>\n      </ng-container>\n  ",
                    styles: [":host{display:flex;flex-direction:column;width:100%}:host .option{border:0;cursor:pointer;font-size:1.6rem;margin:.5rem 0}:host .option.active,:host .option:hover{font-weight:700}"]
                }] }
    ];
    /** @nocollapse */
    MenuComponent.ctorParameters = function () { return []; };
    MenuComponent.propDecorators = {
        options: [{ type: Input }],
        name: [{ type: Input }],
        value: [{ type: Input }],
        change: [{ type: Output }],
        blur: [{ type: Output }],
        enter: [{ type: Output }],
        invalid: [{ type: Input }]
    };
    return MenuComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var MenuModule = /** @class */ (function () {
    function MenuModule() {
    }
    MenuModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        MenuComponent$1
                    ],
                    imports: [
                        CommonModule
                    ],
                    exports: [
                        MenuComponent$1
                    ],
                    entryComponents: [MenuComponent$1]
                },] }
    ];
    return MenuModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var UIModule = /** @class */ (function () {
    function UIModule() {
    }
    UIModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [],
                    imports: [
                        InputModule, CheckboxModule, UploadModule, SelectModule, TextareaModule, MenuModule
                    ],
                    exports: [
                        InputModule, CheckboxModule, UploadModule, SelectModule, TextareaModule, MenuModule
                    ],
                },] }
    ];
    return UIModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
            menu: MenuComponent$1
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
            var context = __assign({ name: _this._controlConfig.name, invalid: _this._invalid }, _this._controlConfig.props, { value: _this._value, options: _this._options, readonly: _this._readonly, template: _this._template });
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FormService = /** @class */ (function () {
    function FormService() {
        var _this = this;
        this.$initialize = new Subject();
        this.initialize = function (formGroup) {
            _this.formGroup = formGroup;
            _this.$initialize.next(formGroup);
        };
        this.getFormGroup = function () { return _this.formGroup; };
        this.getControl = function (name) { return _this.formGroup.get(name); };
        this.convertToFormData = function (data) {
            /** @type {?} */
            var form = new FormData();
            _.forOwn(data, function (value, key) {
                if (_.isArray(value)) {
                    _.each(value, function (file) { return form.append(key + "[]", file, file.name); });
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
        { type: Injectable }
    ];
    return FormService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
var  /**
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
    function AbstractControl() {
        var _this = this;
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
        this.storeConfig = function (config) {
            ((/** @type {?} */ (_this))).configuration = config;
        };
    }
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
            return this.status !== DISABLED;
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
            return this.status === DISABLED;
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
            return this.status === VALID;
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
            return this.status === INVALID;
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
            return this.status === PENDING;
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
    /**
     * Marks the control as `touched`. A control is touched by focus and
     * blur events that do not change the value; compare `markAsDirty`;
     *
     *  @param opts Configuration options that determine how the control propagates changes
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
     *  @param opts Configuration options that determine how the control propagates changes
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
     * @param {?=} opts Configuration options that determine how the control propagates changes
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
     * @param {?=} opts Configuration options that determine how the control propagates changes
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
     *  @param opts Configuration options that determine how the control propagates changes
     * and emits events after marking is applied.
     * * `onlySelf`: When true, mark only this control. When false or not supplied,
     * marks all direct ancestors. Default is false.
     */
    /**
     * Marks the control as `dirty`. A control becomes dirty when
     * the control's value is changed through the UI; compare `markAsTouched`.
     *
     * @param {?=} opts Configuration options that determine how the control propagates changes
     * and emits events after marking is applied.
     * * `onlySelf`: When true, mark only this control. When false or not supplied,
     * marks all direct ancestors. Default is false.
     * @return {?}
     */
    AbstractControl.prototype.markAsDirty = /**
     * Marks the control as `dirty`. A control becomes dirty when
     * the control's value is changed through the UI; compare `markAsTouched`.
     *
     * @param {?=} opts Configuration options that determine how the control propagates changes
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
     *  @param opts Configuration options that determine how the control emits events after
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
     * @param {?=} opts Configuration options that determine how the control emits events after
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
     * @param {?=} opts Configuration options that determine how the control emits events after
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
    /**
     * @param parent Sets the parent of the control
     */
    /**
     * @param {?} parent Sets the parent of the control
     * @return {?}
     */
    AbstractControl.prototype.setParent = /**
     * @param {?} parent Sets the parent of the control
     * @return {?}
     */
    function (parent) {
        this._parent = parent;
    };
    /**
     * Recalculates the value and validation status of the control.
     *
     * By default, it also updates the value and validity of its ancestors.
     *
     * @param opts Configuration options determine how the control propagates changes and emits events
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
     * @param {?=} opts Configuration options determine how the control propagates changes and emits events
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
     * @param {?=} opts Configuration options determine how the control propagates changes and emits events
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
            this._updateValidity(opts);
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
     * @return {?}
     */
    AbstractControl.prototype._initObservables = /**
     * \@internal
     * @return {?}
     */
    function () {
        ((/** @type {?} */ (this))).valueChanges = new EventEmitter();
        ((/** @type {?} */ (this))).statusChanges = new EventEmitter();
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
        ((/** @type {?} */ (this))).status = this._allControlsDisabled() ? DISABLED : VALID;
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
     * @param {?=} opts
     * @return {?}
     */
    AbstractControl.prototype._updateValidity = /**
     * \@internal
     * @param {?=} opts
     * @return {?}
     */
    function (opts) {
        if (opts === void 0) { opts = {}; }
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
    };
    return AbstractControl;
}());
/**
 * Reports that a FormControl is valid, meaning that no errors exist in the input value.
 *
 * @see `status`
 * @type {?}
 */
var VALID = 'VALID';
/**
 * Reports that a FormControl is invalid, meaning that an error exists in the input value.
 *
 * @see `status`
 * @type {?}
 */
var INVALID = 'INVALID';
/**
 * Reports that a FormControl is pending, meaning that that async validation is occurring and
 * errors are not yet available for the input value.
 *
 * @see `markAsPending`
 * @see `status`
 * @type {?}
 */
var PENDING = 'PENDING';
/**
 * Reports that a FormControl is disabled, meaning that the control is exempt from ancestor
 * calculations of validity or value.
 *
 * @see `markAsDisabled`
 * @see `status`
 * @type {?}
 */
var DISABLED = 'DISABLED';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@description
 * Provides a set of built-in validators that can be used by form controls.
 *
 * A validator is a function that processes a `FormControl` or collection of
 * controls and returns an error map or null. A null map means that validation has passed.
 * \@publicApi
 */
// @dynamic
var Validators = /** @class */ (function () {
    function Validators() {
    }
    /**
     * @description
     * Compose multiple async validators into a single function that returns the union
     * of the individual error objects for the provided control.
     *
     * @returns A validator function that returns an error map with the
     * merged error objects of the async validators if the validation check fails, otherwise `null`.
     */
    /**
     * \@description
     * Compose multiple async validators into a single function that returns the union
     * of the individual error objects for the provided control.
     *
     * @param {?} asyncValidators
     * @return {?} A validator function that returns an error map with the
     * merged error objects of the async validators if the validation check fails, otherwise `null`.
     */
    Validators.composeAsync = /**
     * \@description
     * Compose multiple async validators into a single function that returns the union
     * of the individual error objects for the provided control.
     *
     * @param {?} asyncValidators
     * @return {?} A validator function that returns an error map with the
     * merged error objects of the async validators if the validation check fails, otherwise `null`.
     */
    function (asyncValidators) {
        if (!asyncValidators)
            return null;
        /** @type {?} */
        var presentValidators = (/** @type {?} */ (asyncValidators.filter(isPresent)));
        if (presentValidators.length == 0)
            return null;
        return function (control) {
            /** @type {?} */
            var observables = _executeAsyncValidators(control, presentValidators);
            return forkJoin(observables).pipe(map(_mergeErrors));
        };
    };
    /** @internal */
    /**
     * \@internal
     * @param {?} validator_configs
     * @return {?}
     */
    Validators.prototype._isBoxedValue = /**
     * \@internal
     * @param {?} validator_configs
     * @return {?}
     */
    function (validator_configs) {
        return _.isPlainObject(validator_configs);
    };
    /**
     * \@description
     * Validator that requires the control have a non-empty value.
     *
     * \@usageNotes
     *
     * ### Validate that the field is non-empty
     *
     * ```typescript
     * const control = new FormControl('', Validators.required);
     *
     * console.log(control.errors); // {required: true}
     * ```
     *
     * @return An error map with the `required` property
     * if the validation check fails, otherwise `null`.
     *
     */
    Validators.required = function (c) {
        return isEmptyInputValue(c.value) ? { 'required': true } : null;
    };
    /**
     * \@description
     * Validator that requires the control's value pass an email validation test.
     *
     * \@usageNotes
     *
     * ### Validate that the field matches a valid email pattern
     *
     * ```typescript
     * const control = new FormControl('bad\@', Validators.email);
     *
     * console.log(control.errors); // {email: true}
     * ```
     *
     * @return An error map with the `email` property
     * if the validation check fails, otherwise `null`.
     *
     */
    Validators.email = function (control) {
        if (isEmptyInputValue(control.value)) {
            return null; // don't validate empty values to allow optional controls
        }
        return EMAIL_REGEXP.test(control.value) ? null : { 'email': true };
    };
    /**
     * \@description
     * Validator that requires the length of the control's value to be greater than or equal
     * to the provided minimum length. This validator is also provided by default if you use the
     * the HTML5 `minlength` attribute.
     *
     * \@usageNotes
     *
     * ### Validate that the field has a minimum of 3 characters
     *
     * ```typescript
     * const control = new FormControl('ng', Validators.minLength(3));
     *
     * console.log(control.errors); // {minlength: {requiredLength: 3, actualLength: 2}}
     * ```
     *
     * ```html
     * <input minlength="5">
     * ```
     *
     * @return A validator function that returns an error map with the
     * `minlength` if the validation check fails, otherwise `null`.
     */
    Validators.stringLength = function (control) {
        /** @type {?} */
        var controlConfig = (/** @type {?} */ (control.configuration));
        if (isEmptyInputValue(control.value)) {
            return null; // don't validate empty values to allow optional controls
        }
        if (controlConfig.type !== ('input')) {
            throw new Error("'stringLength' validator can only be used with control type 'input' or 'textarea'");
        }
        /** @type {?} */
        var min = controlConfig.validators['stringLength'].min;
        /** @type {?} */
        var max = controlConfig.validators['stringLength'].max;
        /** @type {?} */
        var length = control.value ? control.value.length : 0;
        if (length < min) {
            return {
                'stringLength': {
                    'minLength': min,
                    'actualLength': length
                }
            };
        }
        if (length > max) {
            return {
                'stringLength': {
                    'maxLength': max,
                    'actualLength': length
                }
            };
        }
        return null;
    };
    Validators.equalTo = function (control) {
        if (isEmptyInputValue(control.value)) {
            return null; // don't validate empty values to allow optional controls
        }
        /** @type {?} */
        var controlConfig = (/** @type {?} */ (control.configuration));
        /** @type {?} */
        var compareWith = _.isString(controlConfig.validators['equalTo']) ? controlConfig.validators['equalTo'] : controlConfig.validators['equalTo'].compare;
        /** @type {?} */
        var compared_control = control.parent.controls[compareWith];
        return (JSON.stringify(control.value) === JSON.stringify(compared_control.value))
            ? null : { equalTo: controlConfig.validators['equalTo'] };
    };
    /**
     * \@description
     * Compose multiple validators into a single function that returns the union
     * of the individual error maps for the provided control.
     *
     * @return A validator function that returns an error map with the
     * merged error maps of the validators if the validation check fails, otherwise `null`.
     */
    Validators.compose = function (validators) {
        if (!validators)
            return null;
        /** @type {?} */
        var presentValidators = (/** @type {?} */ (validators.filter(isPresent)));
        if (presentValidators.length === 0)
            return null;
        return function (control) {
            return _mergeErrors(_executeValidators(control, presentValidators));
        };
    };
    return Validators;
}());
/** @type {?} */
var EMAIL_REGEXP = /^(?=.{1,254}$)(?=.{1,64}@)[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+(\.[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+)*@[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?(\.[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?)*$/;
/**
 * @param {?} value
 * @return {?}
 */
function isEmptyInputValue(value) {
    // we don't check for string here so it also works with arrays
    return value == null || value.length === 0;
}
/**
 * @param {?} o
 * @return {?}
 */
function isPresent(o) {
    return o != null;
}
/**
 * @param {?} control
 * @param {?} validators
 * @return {?}
 */
function _executeValidators(control, validators) {
    return validators.map(function (v) { return v(control); });
}
/**
 * @param {?} control
 * @param {?} validators
 * @return {?}
 */
function _executeAsyncValidators(control, validators) {
    return validators.map(function (v) { return v(control); });
}
/**
 * @param {?} arrayOfErrors
 * @return {?}
 */
function _mergeErrors(arrayOfErrors) {
    /** @type {?} */
    var errors = _.reduce(arrayOfErrors, function (result, err) {
        return err ? __assign({}, result, err) : result;
    }, {});
    return Object.keys(errors).length === 0 ? null : errors;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
var  /**
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
    __extends(FormControl, _super);
    /**
     * Creates a new `FormControl` instance.
     *
     * @param configs Initializes the control with an object that defines the initial state.
     *
     */
    function FormControl(configs) {
        var _this = _super.call(this) || this;
        _this._runAsyncValidator = _.debounce(function (emitEvent) {
            if (_this.asyncValidator) {
                ((/** @type {?} */ (_this))).status = PENDING;
                /** @type {?} */
                var obs = _this.asyncValidator(_this);
                _this._asyncValidationSubscription =
                    obs.subscribe(function (errors) {
                        if ((_this.touched || _this.dirty) && _this.value) {
                            ((/** @type {?} */ (_this))).status = INVALID;
                            _this.setErrors(errors, { emitEvent: emitEvent });
                        }
                    });
            }
        }, 500);
        /**
         * Sets the synchronous validators that are active on this control.  Calling
         * this overwrites any existing sync validators.
         */
        _this._setValidators = function (validators) {
            ((/** @type {?} */ (_this))).validator = coerceToValidator(validators);
        };
        /**
         * Sets the async validators that are active on this control. Calling this
         * overwrites any existing async validators.
         */
        _this._setAsyncValidators = function (asyncValidators) {
            ((/** @type {?} */ (_this))).asyncValidator = coerceToAsyncValidator(asyncValidators);
        };
        _this._applyControlState = function () {
            ((/** @type {?} */ (_this))).value = ((/** @type {?} */ (_this.configuration))).value || null;
            // state.disabled ? this.disable({onlySelf: true, emitEvent: false}) :
            //         this.enable({onlySelf: true, emitEvent: false});
        };
        _this.storeConfig((/** @type {?} */ (configs)));
        _this._setValidators(configs.validators);
        _this._setAsyncValidators(configs.asyncValidator);
        _this._initObservables();
        _this._applyControlState();
        _this.updateValueAndValidity({ onlySelf: true, emitEvent: false });
        return _this;
    }
    /**
     * Sets a new value for the form control.
     *
     * @param value The new value for the control.
     * @param options Configuration options that determine how the control proopagates changes
     * and emits events when the value changes.
     * The configuration options are passed to the {@link IonarAbstractControl#updateValueAndValidity
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
     * @param {?=} options Configuration options that determine how the control proopagates changes
     * and emits events when the value changes.
     * The configuration options are passed to the {\@link IonarAbstractControl#updateValueAndValidity
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
     * @param {?=} options Configuration options that determine how the control proopagates changes
     * and emits events when the value changes.
     * The configuration options are passed to the {\@link IonarAbstractControl#updateValueAndValidity
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
        if (_.has(((/** @type {?} */ (this.configuration))).props, ['submitOnChange']) || _.has((/** @type {?} */ (this.parent.configuration)), ['submitOnChange'])) {
            this.parent.submit(true);
        }
    };
    /**
     * Resets the form control, marking it `pristine` and `untouched`, and setting
     * the value to null.
     *
     * @param formState Resets the control with an initial value,
     * or an object that defines the initial value and disabled state.
     *
     * @param options Configuration options that determine how the control propagates changes
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
     * @param {?=} options Configuration options that determine how the control propagates changes
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
     * @param {?=} options Configuration options that determine how the control propagates changes
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
    };
    /**
     * Resets the form control, marking it `pristine` and `untouched`, and setting
     * the value to null.
     *
     * @param formState Resets the control with an initial value,
     * or an object that defines the initial value and disabled state.
     *
     * @param options Configuration options that determine how the control propagates changes
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
     * @param {?=} options Configuration options that determine how the control propagates changes
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
     * @param {?=} options Configuration options that determine how the control propagates changes
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
    /**
     * @return {?}
     */
    FormControl.prototype._runValidator = /**
     * @return {?}
     */
    function () {
        return this.validator ? this.validator(this) : null;
    };
    /**
     * @return {?}
     */
    FormControl.prototype._cancelExistingSubscription = /**
     * @return {?}
     */
    function () {
        if (this._asyncValidationSubscription) {
            this._asyncValidationSubscription.unsubscribe();
        }
    };
    /** @internal */
    /**
     * \@internal
     * @return {?}
     */
    FormControl.prototype._calculateStatus = /**
     * \@internal
     * @return {?}
     */
    function () {
        if (this.disabled)
            return DISABLED;
        if (this.errors)
            return INVALID;
        if (this.pending)
            return PENDING;
        return VALID;
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
    /** @internal */
    /**
     * \@internal
     * @param {?=} opts
     * @return {?}
     */
    FormControl.prototype._updateValidity = /**
     * \@internal
     * @param {?=} opts
     * @return {?}
     */
    function (opts) {
        if (opts === void 0) { opts = {}; }
        this._cancelExistingSubscription();
        ((/** @type {?} */ (this))).errors = this._runValidator();
        ((/** @type {?} */ (this))).status = this._calculateStatus();
        if (this.status === VALID || this.status === PENDING) {
            this._runAsyncValidator(opts.emitEvent);
        }
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
    return FormControl;
}(AbstractControl));
/**
 * @param {?} validators
 * @return {?}
 */
function coerceToValidator(validators) {
    return Validators.compose(convertToValidatorFn(validators));
}
/**
 * @param {?} validators
 * @return {?}
 */
function convertToValidatorFn(validators) {
    return _.map(validators, function (value, key) {
        if (!_.has(Validators, key))
            return null;
        return Validators[key];
    });
}
/**
 * @param {?} asyncValidators
 * @return {?}
 */
function coerceToAsyncValidator(asyncValidators) {
    return _.isArray(asyncValidators) ? Validators.composeAsync(_.map(asyncValidators, function (value, key) { return value; })) : asyncValidators || null;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
var  /**
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
    __extends(FormGroup, _super);
    /**
     * Creates a new `FormGroup` instance.
     *
     * @param formState A collection of child controls. The key for each child is the name
     * under which it is registered.
     *
     */
    function FormGroup(formState, formConfigs) {
        var _this = _super.call(this) || this;
        _this.formState = formState;
        _this.formConfigs = formConfigs;
        _this._readonly = false;
        /**
         * \@description
         * Reports whether the form submission has been triggered.
         */
        _this.submitted = false;
        /**
         *
         * @param controls A collection of child controls. The key for each child is the name
         * under which it is registered.
         *
         */
        _this.controls = {};
        _this._applyFormState = function () {
            _this.readonly = _.has(_this.formConfigs, ['readonly']);
        };
        _this._isNotExcluded = function (c) {
            return !_.get(c.configuration, 'props.exclude') && !(_.has(_this.formConfigs, ['nullExclusion']) && !c.value);
        };
        _this.storeConfig((/** @type {?} */ (formConfigs)));
        _this._setUpControls();
        _this._initObservables();
        _this.updateValueAndValidity({ onlySelf: true, emitEvent: false });
        _this._applyFormState();
        return _this;
    }
    Object.defineProperty(FormGroup.prototype, "readonly", {
        get: /**
         * @return {?}
         */
        function () {
            return this._readonly;
        },
        set: /**
         * @param {?} status
         * @return {?}
         */
        function (status) {
            this._readonly = status;
            this.updateValueAndValidity({ emitEvent: true });
        },
        enumerable: true,
        configurable: true
    });
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
     * @param options Configuration options that determine how the control propagates changes
     * and emits events after the value changes.
     * The configuration options are passed to the {@link IonarAbstractControl#updateValueAndValidity
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
     * @param {?} value The new value for the control that matches the structure of the group.
     * @param {?=} options Configuration options that determine how the control propagates changes
     * and emits events after the value changes.
     * The configuration options are passed to the {\@link IonarAbstractControl#updateValueAndValidity
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
     * @param {?} value The new value for the control that matches the structure of the group.
     * @param {?=} options Configuration options that determine how the control propagates changes
     * and emits events after the value changes.
     * The configuration options are passed to the {\@link IonarAbstractControl#updateValueAndValidity
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
    function (value, options) {
        var _this = this;
        if (options === void 0) { options = {}; }
        _.forOwn(value, function (value, name) {
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
     * @param options Configuration options that determine how the control propagates changes
     * and emits events when the group is reset.
     * * `onlySelf`: When true, each change only affects this control, and not its parent. Default is
     * false.
     * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
     * `valueChanges`
     * observables emit events with the latest status and value when the control is reset.
     * When false, no events are emitted.
     * The configuration options are passed to the {@link AbstractControl#updateValueAndValidity
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
     * @param {?=} options Configuration options that determine how the control propagates changes
     * and emits events when the group is reset.
     * * `onlySelf`: When true, each change only affects this control, and not its parent. Default is
     * false.
     * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
     * `valueChanges`
     * observables emit events with the latest status and value when the control is reset.
     * When false, no events are emitted.
     * The configuration options are passed to the {\@link AbstractControl#updateValueAndValidity
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
     * @param {?=} options Configuration options that determine how the control propagates changes
     * and emits events when the group is reset.
     * * `onlySelf`: When true, each change only affects this control, and not its parent. Default is
     * false.
     * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
     * `valueChanges`
     * observables emit events with the latest status and value when the control is reset.
     * When false, no events are emitted.
     * The configuration options are passed to the {\@link AbstractControl#updateValueAndValidity
     * updateValueAndValidity} method.
     *
     * @return {?}
     */
    function (value, options) {
        var _this = this;
        if (value === void 0) { value = {}; }
        if (options === void 0) { options = {}; }
        _.each(_.keys(this.controls), function (name) {
            _this.controls[name].reset(value[name], { onlySelf: true, emitEvent: options.emitEvent });
        });
        ((/** @type {?} */ (this))).submitted = false;
        this.updateValueAndValidity(options);
        if (_.has((/** @type {?} */ (this.configuration)), ['submitOnChange']))
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
     * @param options Configuration options that determine how the control propagates changes
     * and emits events when the group is reset.
     * * `onlySelf`: When true, each change only affects this control, and not its parent. Default is
     * false.
     * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
     * `valueChanges`
     * observables emit events with the latest status and value when the control is reset.
     * When false, no events are emitted.
     * The configuration options are passed to the {@link AbstractControl#updateValueAndValidity
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
     * @param {?=} options Configuration options that determine how the control propagates changes
     * and emits events when the group is reset.
     * * `onlySelf`: When true, each change only affects this control, and not its parent. Default is
     * false.
     * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
     * `valueChanges`
     * observables emit events with the latest status and value when the control is reset.
     * When false, no events are emitted.
     * The configuration options are passed to the {\@link AbstractControl#updateValueAndValidity
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
     * @param {?=} options Configuration options that determine how the control propagates changes
     * and emits events when the group is reset.
     * * `onlySelf`: When true, each change only affects this control, and not its parent. Default is
     * false.
     * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
     * `valueChanges`
     * observables emit events with the latest status and value when the control is reset.
     * When false, no events are emitted.
     * The configuration options are passed to the {\@link AbstractControl#updateValueAndValidity
     * updateValueAndValidity} method.
     *
     * @return {?}
     */
    function (options) {
        var _this = this;
        if (options === void 0) { options = {}; }
        _.each(_.keys(this.controls), function (name) {
            _this.controls[name].clear({ onlySelf: true, emitEvent: options.emitEvent });
        });
        ((/** @type {?} */ (this))).submitted = false;
        this.updateValueAndValidity(options);
        if (_.has((/** @type {?} */ (this.configuration)), ['submitOnChange']))
            this.submit(true);
    };
    /**
     * Retrieves a child control given the control's name or path.
     *
     * @param name A dot-delimited string or array of string/number values that define the path to the
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
     * @param {?=} name A dot-delimited string or array of string/number values that define the path to the
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
     * @param {?=} name A dot-delimited string or array of string/number values that define the path to the
     * control.
     *
     * @return {?}
     */
    function (name) {
        if (name === void 0) { name = null; }
        if (name == null)
            return null;
        return this.controls.hasOwnProperty((/** @type {?} */ (name))) ? this.controls[name] : null;
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
        ((/** @type {?} */ (this))).submitted = true;
        this.updateValueAndValidity();
        ((/** @type {?} */ (this))).ngSubmit.emit({
            value: this.value, instant: instant
        });
    };
    /** @internal */
    /**
     * \@internal
     * @return {?}
     */
    FormGroup.prototype._calculateStatus = /**
     * \@internal
     * @return {?}
     */
    function () {
        // // if (this._allControlsDisabled()) return DISABLED;
        if (this._anyControlsHaveStatus(INVALID))
            return INVALID;
        if (this._anyControlsHaveStatus(PENDING))
            return PENDING;
        return VALID;
    };
    /** @internal */
    /**
     * \@internal
     * @return {?}
     */
    FormGroup.prototype._setUpControls = /**
     * \@internal
     * @return {?}
     */
    function () {
        var _this = this;
        _.each(this.formState, function (c) {
            _this.controls[c.name] = new FormControl(c);
            _this.controls[c.name].setParent(_this);
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
        ((/** @type {?} */ (this))).valueChanges = new EventEmitter();
        ((/** @type {?} */ (this))).statusChanges = new EventEmitter();
        ((/** @type {?} */ (this))).ngSubmit = new EventEmitter();
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
     * @param {?=} opts
     * @return {?}
     */
    FormGroup.prototype._updateValidity = /**
     * \@internal
     * @param {?=} opts
     * @return {?}
     */
    function (opts) {
        if (opts === void 0) { opts = {}; }
        ((/** @type {?} */ (this))).status = this._calculateStatus();
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
        _.each(_.keys(this.controls), function (k) {
            if (_this._isNotExcluded(_this.controls[k])) {
                form_value[k] = _this.controls[k].value;
            }
        });
        return form_value;
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
        return _.every(this.controls, function (c) { return c.disabled; });
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
        return !!_.find(this.controls, ['status', status]);
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
        if (!_.keys(this.controls).length) {
            throw new Error("\n        There are no form controls registered with this group yet.  If you're using ngModel,\n        you may want to check next tick (e.g. use setTimeout).\n      ");
        }
        if (!this.controls[name]) {
            throw new Error("Cannot find form control with name: " + name + ".");
        }
    };
    return FormGroup;
}(AbstractControl));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FieldTemplateDirective = /** @class */ (function () {
    function FieldTemplateDirective(_vcRef, _tplRef) {
        this._vcRef = _vcRef;
        this._tplRef = _tplRef;
        this.name = '';
    }
    /**
     * @return {?}
     */
    FieldTemplateDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    FieldTemplateDirective.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this._vcRef.clear();
    };
    FieldTemplateDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[fieldTemplate]'
                },] }
    ];
    /** @nocollapse */
    FieldTemplateDirective.ctorParameters = function () { return [
        { type: ViewContainerRef },
        { type: TemplateRef }
    ]; };
    FieldTemplateDirective.propDecorators = {
        name: [{ type: Input }]
    };
    return FieldTemplateDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FormComponent = /** @class */ (function () {
    function FormComponent(_formSvs, cd) {
        var _this = this;
        this._formSvs = _formSvs;
        this.cd = cd;
        this.submit = new EventEmitter();
        this.viewInitialized = false;
        this.parseContext = function () {
            _this._formSvs.initialize(_this.formGroup);
            _this.controlRoster = _.keys(_this.formGroup.controls);
            _this.controls = _.values(_this.formGroup.controls);
            if (_this._subscription)
                _this._subscription.unsubscribe();
            _this._subscription = _this.formGroup.ngSubmit.pipe(untilDestroyed(_this), distinctUntilChanged()).subscribe(function (data) {
                if (_this.formGroup.valid || data.instant) {
                    _this.submit.emit(_this._formSvs.convertToMediaType(data.value, _this.mediaType));
                }
            });
        };
    }
    /**
     * @return {?}
     */
    FormComponent.prototype.ngAfterViewChecked = /**
     * @return {?}
     */
    function () {
        if (this.formGroup) {
            this.parseContext();
            this.viewInitialized = true;
            this.cd.detectChanges();
            if (!this.default_template) {
                this.default_template = this._contentVcRef.nativeElement.parentElement.children.length === 0;
            }
            this.cd.detectChanges();
        }
    };
    /**
     * @return {?}
     */
    FormComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
    };
    FormComponent.decorators = [
        { type: Component, args: [{
                    selector: 'io-form',
                    template: "\n      <ng-container>\n          <ng-template #contentVc>\n              <ng-content></ng-content>\n          </ng-template>\n\n          <ng-container *ngIf=\"viewInitialized\">\n\n              <ng-container *ngIf=\"!default_template\">\n                  <ng-container [ngTemplateOutlet]=\"contentVc\"></ng-container>\n              </ng-container>\n\n              <ng-container *ngIf=\"default_template\">\n                  <ng-container *ngFor=\"let name of controlRoster\">\n                      <form-control\n                              [name]=\"name\"\n                              [formGroup]=\"formGroup\"\n                      >\n                      </form-control>\n                  </ng-container>\n              </ng-container>\n\n          </ng-container>\n\n      </ng-container>\n\n\n\n  ",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [FormService],
                    styles: ["\n\n  "]
                }] }
    ];
    /** @nocollapse */
    FormComponent.ctorParameters = function () { return [
        { type: FormService },
        { type: ChangeDetectorRef }
    ]; };
    FormComponent.propDecorators = {
        formGroup: [{ type: Input }],
        mediaType: [{ type: Input }],
        submit: [{ type: Output }],
        _contentVcRef: [{ type: ViewChild, args: ['contentVc', { read: ElementRef },] }],
        _fieldTemplateDirList: [{ type: ContentChildren, args: [FieldTemplateDirective,] }]
    };
    return FormComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ControlComponent$1 = /** @class */ (function () {
    ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///
    function ControlComponent(_formSvs, cd, _renderer, _elRef, _parent) {
        var _this = this;
        this._formSvs = _formSvs;
        this.cd = cd;
        this._renderer = _renderer;
        this._elRef = _elRef;
        this._parent = _parent;
        ///-----------------------------------------------  Variables   -----------------------------------------------///
        this.name = '';
        this.show_feedback = true;
        this.show_label = true;
        this.parseContext = function () {
            _this._checkTemplate();
            _this._control = _this.formGroup.get(_this.name);
            _this._renderer.setAttribute(_this._elRef.nativeElement, 'id', _this.name);
            /** @type {?} */
            var props = ((/** @type {?} */ (_this._control.configuration))).props;
            if (_.has(props, ['hidden'])) {
                _this._renderer.addClass(_this._elRef.nativeElement, 'hidden');
            }
            if (_.has(props, ['hideLabel'])) {
                _this.show_label = false;
                _this._renderer.addClass(_this._elRef.nativeElement, 'hide-label');
            }
            if (_.has(props, ['hideFeedback'])) {
                _this.show_feedback = false;
                _this._renderer.addClass(_this._elRef.nativeElement, 'hide-feedback');
            }
            _this.cd.detectChanges();
        };
        this._checkTemplate = function () {
            /** @type {?} */
            var templateData = _this._fieldTemplateDir ? _this._fieldTemplateDir : _.find(_this._parent._fieldTemplateDirList.toArray(), ['name', _this.name]);
            if (templateData) {
                _this.fieldTemplate = templateData._tplRef;
            }
        };
    }
    /**
     * @return {?}
     */
    ControlComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    ControlComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    ControlComponent.prototype.ngAfterViewChecked = /**
     * @return {?}
     */
    function () {
        if (this._parent.formGroup) {
            this.formGroup = this._parent.formGroup;
            this.parseContext();
        }
    };
    /**
     * @return {?}
     */
    ControlComponent.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    ControlComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
    };
    ControlComponent.decorators = [
        { type: Component, args: [{
                    selector: 'form-control',
                    template: "\n\n      <ng-container *ngIf=\"formGroup\">\n          <form-label *ngIf=\"show_label\"></form-label>\n\n          <form-field></form-field>\n\n          <form-feedback *ngIf=\"show_feedback\"></form-feedback>\n      </ng-container>\n\n  ",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ["\n      :host {\n          display: grid;\n          grid-template-areas: \"label   field\" \". feedback\";\n          grid-template-columns: 3fr 7fr;\n          grid-template-rows: 1fr auto;\n          margin-bottom: 1rem;\n          height: auto;\n          visibility: visible;\n          z-index: 50;\n      }\n\n      :host-context(.hide-label) {\n          grid-template-areas: \"field\" \"feedback\";\n          grid-template-columns: 1fr;\n      }\n\n      :host-context(.hide-feedback) {\n          grid-template-areas: \"label   field\";\n          grid-template-columns: 3fr 7fr;\n      }\n\n      :host-context(.hide-label.hide-feedback) {\n          grid-template-areas: \"field\";\n      }\n\n      :host-context(.hidden) {\n          display: none !important;\n      }\n\n      form-label {\n          grid-area: label;\n      }\n\n      form-field {\n          grid-area: field;\n      }\n\n      form-feedback {\n          grid-area: feedback;\n      }\n  "]
                }] }
    ];
    /** @nocollapse */
    ControlComponent.ctorParameters = function () { return [
        { type: FormService },
        { type: ChangeDetectorRef },
        { type: Renderer2 },
        { type: ElementRef },
        { type: FormComponent, decorators: [{ type: Host }] }
    ]; };
    ControlComponent.propDecorators = {
        name: [{ type: Input }],
        formGroup: [{ type: Input }],
        _fieldTemplateDir: [{ type: ContentChild, args: [FieldTemplateDirective,] }]
    };
    return ControlComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FieldComponent = /** @class */ (function () {
    ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///
    function FieldComponent(_formSvs, cd, _parent) {
        var _this = this;
        this._formSvs = _formSvs;
        this.cd = cd;
        this._parent = _parent;
        this.invalid = false;
        ///-----------------------------------------------  Main Functions   -----------------------------------------------///
        this.onChanged = function (e) {
            _this._formSvs.getControl(_this._parent.name).setValue(e);
        };
        this.onTouched = function () {
            _this._formSvs.getControl(_this._parent.name).markAsTouched();
        };
        this.onEntered = function () {
            // this.formSvs._onEntered()
            // if (this.name === 'password') this.focus = true;
        };
        this.parseContext = function () {
            _this.control = _this.formGroup.get(_this._parent.name);
            _this.controlConfig = (/** @type {?} */ (_this.control.configuration));
            _this.template = _this._parent.fieldTemplate;
            _this.invalid = _this.control.invalid && (_this.control.dirty || _this.control.touched || _this.formGroup.submitted);
            _this.cd.detectChanges();
        };
    }
    /**
     * @return {?}
     */
    FieldComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        // this.parseContext();
        //
    };
    /**
     * @return {?}
     */
    FieldComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    FieldComponent.prototype.ngAfterViewChecked = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this._parent.formGroup) {
            this.formGroup = this._parent.formGroup;
            if (this._statusSubscription)
                this._statusSubscription.unsubscribe();
            if (this._submitSubscription)
                this._submitSubscription.unsubscribe();
            this._statusSubscription = this.formGroup.statusChanges.pipe(untilDestroyed(this)).subscribe(function (status) {
                _this.parseContext();
            });
            this._submitSubscription = this.formGroup.ngSubmit.pipe(untilDestroyed(this)).subscribe(function (data) {
                _this.parseContext();
            });
            this.parseContext();
        }
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    FieldComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
    };
    /**
     * @return {?}
     */
    FieldComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.cd.detach();
    };
    FieldComponent.decorators = [
        { type: Component, args: [{
                    selector: 'form-field',
                    template: "\n      <ng-container *ngIf=\"formGroup\">\n          <ng-container\n                  dynamic_field\n                  [controlConfig]=\"controlConfig\"\n\n                  [events]=\"{\n                            change: onChanged,\n                            blur: onTouched,\n                            enter: onEntered\n                    }\"\n                  [template]=\"template\"\n\n                  [value]=\"control.value\"\n                  [options]=\"controlConfig.options\"\n                  [invalid]=\"invalid\"\n                  [readonly]=\"formGroup.readonly\"\n          >\n          </ng-container>\n      </ng-container>\n  ",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ["\n      :host {\n          display: flex;\n          width: 100%;\n          height: 100%;\n      }\n  "]
                }] }
    ];
    /** @nocollapse */
    FieldComponent.ctorParameters = function () { return [
        { type: FormService },
        { type: ChangeDetectorRef },
        { type: ControlComponent$1, decorators: [{ type: Host }] }
    ]; };
    return FieldComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
        { type: Directive, args: [{
                    selector: '[submitForm]'
                },] }
    ];
    /** @nocollapse */
    SubmitDirective.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    SubmitDirective.propDecorators = {
        _formGr: [{ type: Input, args: ['submitForm',] }],
        disabled: [{ type: Input }],
        onClick: [{ type: HostListener, args: ['click', ['$event'],] }]
    };
    return SubmitDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var LabelComponent = /** @class */ (function () {
    function LabelComponent(_formSvs, cd, _parent) {
        var _this = this;
        this._formSvs = _formSvs;
        this.cd = cd;
        this._parent = _parent;
        this.parseContext = function () {
            _this.control = _this.formGroup.get(_this._parent.name);
            _this.controlConfig = (/** @type {?} */ (_this.control.configuration));
            _this.label = _this.controlConfig.label || _.startCase(_this._parent.name);
            _this.cd.detectChanges();
        };
    }
    /**
     * @return {?}
     */
    LabelComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    LabelComponent.prototype.ngAfterViewChecked = /**
     * @return {?}
     */
    function () {
        if (this._parent.formGroup) {
            this.formGroup = this._parent.formGroup;
            this.parseContext();
        }
    };
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
        { type: Component, args: [{
                    selector: 'form-label',
                    template: "\n      {{label}}\n  ",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ["\n      :host {\n          display: flex;\n          align-items: center;\n          color: rgba(0, 0, 0, 0.85);\n          font-size: 1.6rem;\n          font-weight: 700;\n          position: relative\n      }\n  "]
                }] }
    ];
    /** @nocollapse */
    LabelComponent.ctorParameters = function () { return [
        { type: FormService },
        { type: ChangeDetectorRef },
        { type: ControlComponent$1, decorators: [{ type: Host }] }
    ]; };
    return LabelComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FeedbackComponent = /** @class */ (function () {
    ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///
    function FeedbackComponent(_formSvs, cd, _parent) {
        var _this = this;
        this._formSvs = _formSvs;
        this.cd = cd;
        this._parent = _parent;
        this.invalid = false;
        this.show_feedback = true;
        this.generate_feedback = function (validator, value) {
            // console.log(_.values(this._control.configuration.validators))
            // _.mapValues(this._control.configuration.validators, (value: any) => {
            //   feedback[validator] = _.isString(value) ? value : value.message || null;
            // });
            if (!validator)
                return null;
            switch (validator) {
                case 'required':
                    if (_this._parent.name === 'confirm_password') {
                        return "You need to confirm password";
                    }
                    return _.startCase(_this._parent.name) + "  is required";
                case 'agreement':
                    return "You must agree to the terms and conditions before continuing!";
                case 'email':
                    return "Invalid email address. Valid e-mail can contain only latin letters, numbers, '@' and '.'";
                case 'email_existed':
                    return _.startCase(_this._parent.name) + " is existed! Please use another one";
                case 'stringLength':
                    return value.minLength ? _.startCase(_this._parent.name) + " cannot be shorter than " + value.minLength : _.startCase(_this._parent.name) + " cannot be longer than " + value.maxLength;
                case 'equalTo':
                    return "Confirm password is not equal to password";
                default:
                    return value;
            }
        };
        ///-----------------------------------------------  Main Functions   -----------------------------------------------///
        this.parseContext = function () {
            _this._control = _this.formGroup.get(_this._parent.name);
            _this.invalid = _this._control.invalid && (_this._control.dirty || _this._control.touched || _this.formGroup.submitted);
            _this.error_list = _.map(_this._control.errors, function (value, key) { return _this.generate_feedback(key, value); });
            _this.cd.detectChanges();
        };
    }
    /**
     * @return {?}
     */
    FeedbackComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    FeedbackComponent.prototype.ngAfterViewChecked = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this._parent.formGroup) {
            this.formGroup = this._parent.formGroup;
            if (this._statusSubscription)
                this._statusSubscription.unsubscribe();
            if (this._submitSubscription)
                this._submitSubscription.unsubscribe();
            this._statusSubscription = this.formGroup.statusChanges.pipe(untilDestroyed(this)).subscribe(function (status) {
                _this.parseContext();
            });
            this._submitSubscription = this.formGroup.ngSubmit.pipe(untilDestroyed(this)).subscribe(function (data) {
                _this.parseContext();
            });
            this.parseContext();
        }
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
        { type: Component, args: [{
                    selector: 'form-feedback',
                    template: "\n      <ng-container *ngIf=\"show_feedback\">\n          <ng-container *ngIf=\"invalid\">\n              <ng-container *ngFor=\"let err of error_list\">\n                  <div class=\"feedback\">{{err}}</div>\n              </ng-container>\n\n          </ng-container>\n      </ng-container>\n  ",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ["\n      :host {\n          display: flex;\n          flex-direction: column;\n          justify-content: flex-start;\n          width: 100%;\n          color: #f5222d;\n          font-size: 1.2rem;\n          margin-top: 0.5rem;\n      }\n  "]
                }] }
    ];
    /** @nocollapse */
    FeedbackComponent.ctorParameters = function () { return [
        { type: FormService },
        { type: ChangeDetectorRef },
        { type: ControlComponent$1, decorators: [{ type: Host }] }
    ]; };
    return FeedbackComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CoreModule = /** @class */ (function () {
    function CoreModule() {
    }
    CoreModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        FormComponent,
                        FieldComponent, ControlComponent$1, LabelComponent, FeedbackComponent, FieldTemplateDirective,
                        DynamicFieldDirective, SubmitDirective
                    ],
                    imports: [CommonModule],
                    exports: [
                        FormComponent,
                        FieldComponent,
                        SubmitDirective,
                        ControlComponent$1,
                        LabelComponent, FeedbackComponent, FieldTemplateDirective
                    ]
                },] }
    ];
    return CoreModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var IonarFormModule = /** @class */ (function () {
    function IonarFormModule() {
    }
    IonarFormModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [],
                    imports: [
                        CommonModule,
                        CoreModule,
                        UIModule
                    ],
                    exports: [
                        CoreModule,
                        UIModule
                    ]
                },] }
    ];
    return IonarFormModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var IonarFormBuilder = /** @class */ (function () {
    function IonarFormBuilder() {
        this.group = function (formState, formConfigs) {
            return new FormGroup(formState, formConfigs);
        };
    }
    IonarFormBuilder.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */ IonarFormBuilder.ngInjectableDef = defineInjectable({ factory: function IonarFormBuilder_Factory() { return new IonarFormBuilder(); }, token: IonarFormBuilder, providedIn: "root" });
    return IonarFormBuilder;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { FormControl, FormGroup, IonarFormBuilder, IonarFormModule, Validators, ControlComponent$1 as ɵf, FeedbackComponent as ɵh, FieldComponent as ɵe, LabelComponent as ɵg, FormComponent as ɵb, CoreModule as ɵa, DynamicFieldDirective as ɵi, FieldTemplateDirective as ɵd, SubmitDirective as ɵj, AbstractControl as ɵbd, FormService as ɵc, CheckboxComponent as ɵo, CheckboxModule as ɵn, InputComponent as ɵm, InputModule as ɵl, MenuComponent$1 as ɵbc, MenuModule as ɵbb, ControlComponent as ɵw, MenuComponent as ɵx, OptionComponent as ɵy, SelectComponent as ɵv, SelectModule as ɵu, TextareaComponent as ɵba, TextareaModule as ɵz, FileComponent as ɵt, ClickComponent as ɵr, DropComponent as ɵs, UploadComponent as ɵq, UploadModule as ɵp, UIModule as ɵk };

//# sourceMappingURL=ionar-form.js.map