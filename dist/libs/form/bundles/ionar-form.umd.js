(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@aurora-ngx/animations'), require('@angular/common'), require('rxjs'), require('rxjs/operators'), require('@angular/core'), require('lodash'), require('@ionar/utility')) :
    typeof define === 'function' && define.amd ? define('@ionar/form', ['exports', '@aurora-ngx/animations', '@angular/common', 'rxjs', 'rxjs/operators', '@angular/core', 'lodash', '@ionar/utility'], factory) :
    (factory((global.ionar = global.ionar || {}, global.ionar.form = {}),global.animations,global.ng.common,global.rxjs,global.rxjs.operators,global.ng.core,global._,global.utility));
}(this, (function (exports,animations,common,rxjs,operators,core,_,utility) { 'use strict';

    _ = _ && _.hasOwnProperty('default') ? _['default'] : _;

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
            this.change = new core.EventEmitter();
            this.blur = new core.EventEmitter();
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
            { type: core.Component, args: [{
                        selector: 'io-select',
                        template: "<control\r\n        [label]=\"selected_option?.label\"\r\n        [show_menu]=\"show_menu\"\r\n        (click)=\"onToggleMenu()\"\r\n></control>\r\n\r\n<menu\r\n        [options]=\"options\"\r\n        (onSelectOption)=\"onChange($event)\"\r\n        *ngIf=\"show_menu\"\r\n></menu>",
                        styles: [":host{display:flex;position:relative;flex:1}"]
                    }] }
        ];
        /** @nocollapse */
        SelectComponent.ctorParameters = function () {
            return [
                { type: core.ElementRef }
            ];
        };
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
            { type: core.Component, args: [{
                        selector: 'control',
                        template: "<div id=\"value\">\r\n    <span *ngIf=\"!label\">Please select</span>\r\n    <span *ngIf=\"label\">{{label}}</span>\r\n</div>\r\n\r\n<div id=\"icon\" [@rotate]=\"{\r\n    value: show_menu ? 'animated' : 'default',\r\n    params: { deg: 90 }\r\n    }\">\r\n    <i class=\"fas fa-angle-right\"></i>\r\n</div>\r\n",
                        animations: [animations.rotate_trigger],
                        styles: [":host{background-color:#fff;border-radius:5px;box-sizing:border-box;border:1px solid #d9d9d9;cursor:pointer;display:flex;align-items:center;justify-content:space-between;font-size:1.5rem;outline:0;padding:0 1rem;transition:.3s cubic-bezier(.645,.045,.355,1);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;width:100%;height:40px;z-index:1}:host:focus{border-color:#40a9ff;outline:0;box-shadow:0 0 0 2px rgba(24,144,255,.2);border-right-width:1px!important}:host:hover{border-color:#40a9ff}:host .fa-angle-right{font-size:2rem}"]
                    }] }
        ];
        /** @nocollapse */
        ControlComponent.ctorParameters = function () {
            return [
                { type: core.ElementRef }
            ];
        };
        ControlComponent.propDecorators = {
            show_menu: [{ type: core.Input }],
            label: [{ type: core.Input }],
            tabindex: [{ type: core.HostBinding }]
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

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SelectModule = /** @class */ (function () {
        function SelectModule() {
        }
        SelectModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [
                            SelectComponent,
                            ControlComponent,
                            MenuComponent,
                            OptionComponent
                        ],
                        imports: [
                            common.CommonModule
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
            this.change = new core.EventEmitter();
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
            { type: core.Component, args: [{
                        selector: 'io-upload',
                        template: "<ng-container *ngIf=\"type === 'dropzone'\">\r\n    <ng-container *ngTemplateOutlet=\"dropzone\"></ng-container>\r\n</ng-container>\r\n\r\n<ng-container *ngIf=\"type === 'input'\">\r\n    <ng-container *ngTemplateOutlet=\"click\"></ng-container>\r\n</ng-container>\r\n\r\n<ng-template #click>\r\n    <click\r\n            (change)=\"onFileChanged($event)\"\r\n            [template]=\"template\"\r\n            [multiple]=\"multiple\"\r\n    >\r\n    </click>\r\n\r\n</ng-template>\r\n\r\n<ng-template #dropzone>\r\n    <drop\r\n            (change)=\"onFileChanged($event)\"\r\n            [template]=\"template\"\r\n    >\r\n    </drop>\r\n</ng-template>\r\n\r\n\r\n<ng-template #default>\r\n    <ng-content></ng-content>\r\n</ng-template>\r\n",
                        styles: [":host{display:flex;flex-direction:column;align-items:flex-start;width:100%;height:100%}"]
                    }] }
        ];
        /** @nocollapse */
        UploadComponent.ctorParameters = function () {
            return [
                { type: core.ElementRef }
            ];
        };
        UploadComponent.propDecorators = {
            change: [{ type: core.Output }],
            invalid: [{ type: core.Input }],
            type: [{ type: core.Input }],
            template: [{ type: core.Input }],
            multiple: [{ type: core.Input }],
            _defaultTempRef: [{ type: core.ViewChild, args: ['default',] }]
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
            this.change = new core.EventEmitter();
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
            { type: core.Component, args: [{
                        selector: 'click',
                        template: "<ng-container *ngTemplateOutlet=\"template\"></ng-container>\r\n\r\n\r\n<input\r\n        type=\"file\"\r\n        [multiple]=\"multiple\"\r\n        (change)=\"$event.stopPropagation();change.emit($event.target.files)\"\r\n>",
                        styles: [":host{background-color:#fff;border-radius:.4rem;color:rgba(0,0,0,.65);cursor:pointer;display:flex;align-items:center;justify-content:center;outline:0;position:relative;transition:.3s cubic-bezier(.645,.045,.355,1);width:100%;height:4rem;max-width:20rem;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}:host:focus{border-color:#40a9ff;outline:0;box-shadow:0 0 0 2px rgba(24,144,255,.2);border-right-width:1px!important}:host:hover{border-color:#40a9ff;color:#40a9ff}:host.invalid{border-color:#f5222d}:host.invalid:focus{border-color:#ff4d4f;outline:0;box-shadow:0 0 0 2px rgba(245,34,45,.2)}input{display:flex;outline:0;opacity:0;position:absolute;width:100%;height:100%;z-index:1}"]
                    }] }
        ];
        /** @nocollapse */
        ClickComponent.ctorParameters = function () { return []; };
        ClickComponent.propDecorators = {
            change: [{ type: core.Output }],
            template: [{ type: core.Input }],
            multiple: [{ type: core.Input }]
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
            { type: core.Component, args: [{
                        selector: 'file',
                        template: "<img [src]=\"image\" alt=\"\">\r\n\r\n<p>{{name}}</p>\r\n\r\n<i class=\"fas fa-times remove-icon\"></i>",
                        styles: [":host{border:1px dashed #d9d9d9;border-radius:.4rem;display:flex;margin-top:1rem;padding:.8rem;width:100%;height:6.6rem}:host img{width:5rem;height:5rem}:host p{margin-left:2rem}:host .remove-icon{color:#f5222d;font-size:1.2rem;margin-left:auto}"]
                    }] }
        ];
        /** @nocollapse */
        FileComponent.ctorParameters = function () {
            return [
                { type: core.ChangeDetectorRef }
            ];
        };
        FileComponent.propDecorators = {
            data: [{ type: core.Input }]
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
            { type: core.NgModule, args: [{
                        declarations: [
                            UploadComponent,
                            ClickComponent,
                            DropComponent,
                            FileComponent
                        ],
                        imports: [common.CommonModule],
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
            this.change = new core.EventEmitter();
            this.blur = new core.EventEmitter();
            this.enter = new core.EventEmitter();
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
            this.onChange = function (e) {
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
            };
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
            { type: core.Component, args: [{
                        selector: 'io-input',
                        template: "<ng-container *ngIf=\"!template\">\r\n    <input\r\n            [type]=\"type\"\r\n            [name]=\"name\"\r\n            [placeholder]=\"placeholder\"\r\n            [value]=\"value\"\r\n            (input)=\"onChange($event)\"\r\n            (blur)=\"onBlur()\"\r\n            (focus)=\"onFocus()\"\r\n            (keydown)=\"onKeyDown($event)\"\r\n            (paste)=\"onPaste($event)\"\r\n            (keypress)=\"onKeyPress($event)\"\r\n\r\n            *ngIf=\"!(readonly || disabled)\"\r\n    >\r\n\r\n</ng-container>\r\n\r\n\r\n<ng-container *ngIf=\"template\">\r\n    <ng-container *ngTemplateOutlet=\"template; context:templateContext\"></ng-container>\r\n</ng-container>\r\n\r\n<span *ngIf=\"readonly || disabled\">\r\n          {{value}}\r\n      </span>\r\n<!--<ng-container-->\r\n<!--*ngIf=\"properties?.loading\"-->\r\n<!--&gt;-->\r\n<!--<svg version=\"1.1\"-->\r\n\r\n<!--class=\"loading_icon\"-->\r\n<!--xmlns=\"http://www.w3.org/2000/svg\"-->\r\n<!--x=\"0px\"-->\r\n<!--y=\"0px\"-->\r\n<!--viewBox=\"0 0 80 80\"-->\r\n<!--xml:space=\"preserve\"-->\r\n<!--&gt;-->\r\n<!--<path-->\r\n<!--fill=\"#D43B11\"-->\r\n<!--d=\"M10,40c0,0,0-0.4,0-1.1c0-0.3,0-0.8,0-1.3c0-0.3,0-0.5,0-0.8c0-0.3,0.1-0.6,0.1-0.9c0.1-0.6,0.1-1.4,0.2-2.1-->\r\n<!--c0.2-0.8,0.3-1.6,0.5-2.5c0.2-0.9,0.6-1.8,0.8-2.8c0.3-1,0.8-1.9,1.2-3c0.5-1,1.1-2,1.7-3.1c0.7-1,1.4-2.1,2.2-3.1-->\r\n<!--c1.6-2.1,3.7-3.9,6-5.6c2.3-1.7,5-3,7.9-4.1c0.7-0.2,1.5-0.4,2.2-0.7c0.7-0.3,1.5-0.3,2.3-0.5c0.8-0.2,1.5-0.3,2.3-0.4l1.2-0.1-->\r\n<!--l0.6-0.1l0.3,0l0.1,0l0.1,0l0,0c0.1,0-0.1,0,0.1,0c1.5,0,2.9-0.1,4.5,0.2c0.8,0.1,1.6,0.1,2.4,0.3c0.8,0.2,1.5,0.3,2.3,0.5-->\r\n<!--c3,0.8,5.9,2,8.5,3.6c2.6,1.6,4.9,3.4,6.8,5.4c1,1,1.8,2.1,2.7,3.1c0.8,1.1,1.5,2.1,2.1,3.2c0.6,1.1,1.2,2.1,1.6,3.1-->\r\n<!--c0.4,1,0.9,2,1.2,3c0.3,1,0.6,1.9,0.8,2.7c0.2,0.9,0.3,1.6,0.5,2.4c0.1,0.4,0.1,0.7,0.2,1c0,0.3,0.1,0.6,0.1,0.9-->\r\n<!--c0.1,0.6,0.1,1,0.1,1.4C74,39.6,74,40,74,40c0.2,2.2-1.5,4.1-3.7,4.3s-4.1-1.5-4.3-3.7c0-0.1,0-0.2,0-0.3l0-0.4c0,0,0-0.3,0-0.9-->\r\n<!--c0-0.3,0-0.7,0-1.1c0-0.2,0-0.5,0-0.7c0-0.2-0.1-0.5-0.1-0.8c-0.1-0.6-0.1-1.2-0.2-1.9c-0.1-0.7-0.3-1.4-0.4-2.2-->\r\n<!--c-0.2-0.8-0.5-1.6-0.7-2.4c-0.3-0.8-0.7-1.7-1.1-2.6c-0.5-0.9-0.9-1.8-1.5-2.7c-0.6-0.9-1.2-1.8-1.9-2.7c-1.4-1.8-3.2-3.4-5.2-4.9-->\r\n<!--c-2-1.5-4.4-2.7-6.9-3.6c-0.6-0.2-1.3-0.4-1.9-0.6c-0.7-0.2-1.3-0.3-1.9-0.4c-1.2-0.3-2.8-0.4-4.2-0.5l-2,0c-0.7,0-1.4,0.1-2.1,0.1-->\r\n<!--c-0.7,0.1-1.4,0.1-2,0.3c-0.7,0.1-1.3,0.3-2,0.4c-2.6,0.7-5.2,1.7-7.5,3.1c-2.2,1.4-4.3,2.9-6,4.7c-0.9,0.8-1.6,1.8-2.4,2.7-->\r\n<!--c-0.7,0.9-1.3,1.9-1.9,2.8c-0.5,1-1,1.9-1.4,2.8c-0.4,0.9-0.8,1.8-1,2.6c-0.3,0.9-0.5,1.6-0.7,2.4c-0.2,0.7-0.3,1.4-0.4,2.1-->\r\n<!--c-0.1,0.3-0.1,0.6-0.2,0.9c0,0.3-0.1,0.6-0.1,0.8c0,0.5-0.1,0.9-0.1,1.3C10,39.6,10,40,10,40z\"-->\r\n<!--&gt;-->\r\n<!--<animateTransform-->\r\n<!--attributeType=\"xml\"-->\r\n<!--attributeName=\"transform\"-->\r\n<!--type=\"rotate\"-->\r\n<!--from=\"0 40 40\"-->\r\n<!--to=\"360 40 40\"-->\r\n<!--dur=\"0.8s\"-->\r\n<!--repeatCount=\"indefinite\"-->\r\n<!--/>-->\r\n<!--</path>-->\r\n<!--<path-->\r\n<!--fill=\"#D43B11\"-->\r\n<!--d=\"M62,40.1c0,0,0,0.2-0.1,0.7c0,0.2,0,0.5-0.1,0.8c0,0.2,0,0.3,0,0.5c0,0.2-0.1,0.4-0.1,0.7-->\r\n<!--c-0.1,0.5-0.2,1-0.3,1.6c-0.2,0.5-0.3,1.1-0.5,1.8c-0.2,0.6-0.5,1.3-0.7,1.9c-0.3,0.7-0.7,1.3-1,2.1c-0.4,0.7-0.9,1.4-1.4,2.1-->\r\n<!--c-0.5,0.7-1.1,1.4-1.7,2c-1.2,1.3-2.7,2.5-4.4,3.6c-1.7,1-3.6,1.8-5.5,2.4c-2,0.5-4,0.7-6.2,0.7c-1.9-0.1-4.1-0.4-6-1.1-->\r\n<!--c-1.9-0.7-3.7-1.5-5.2-2.6c-1.5-1.1-2.9-2.3-4-3.7c-0.6-0.6-1-1.4-1.5-2c-0.4-0.7-0.8-1.4-1.2-2c-0.3-0.7-0.6-1.3-0.8-2-->\r\n<!--c-0.2-0.6-0.4-1.2-0.6-1.8c-0.1-0.6-0.3-1.1-0.4-1.6c-0.1-0.5-0.1-1-0.2-1.4c-0.1-0.9-0.1-1.5-0.1-2c0-0.5,0-0.7,0-0.7-->\r\n<!--s0,0.2,0.1,0.7c0.1,0.5,0,1.1,0.2,2c0.1,0.4,0.2,0.9,0.3,1.4c0.1,0.5,0.3,1,0.5,1.6c0.2,0.6,0.4,1.1,0.7,1.8-->\r\n<!--c0.3,0.6,0.6,1.2,0.9,1.9c0.4,0.6,0.8,1.3,1.2,1.9c0.5,0.6,1,1.3,1.6,1.8c1.1,1.2,2.5,2.3,4,3.2c1.5,0.9,3.2,1.6,5,2.1-->\r\n<!--c1.8,0.5,3.6,0.6,5.6,0.6c1.8-0.1,3.7-0.4,5.4-1c1.7-0.6,3.3-1.4,4.7-2.4c1.4-1,2.6-2.1,3.6-3.3c0.5-0.6,0.9-1.2,1.3-1.8-->\r\n<!--c0.4-0.6,0.7-1.2,1-1.8c0.3-0.6,0.6-1.2,0.8-1.8c0.2-0.6,0.4-1.1,0.5-1.7c0.1-0.5,0.2-1,0.3-1.5c0.1-0.4,0.1-0.8,0.1-1.2-->\r\n<!--c0-0.2,0-0.4,0.1-0.5c0-0.2,0-0.4,0-0.5c0-0.3,0-0.6,0-0.8c0-0.5,0-0.7,0-0.7c0-1.1,0.9-2,2-2s2,0.9,2,2C62,40,62,40.1,62,40.1z\"-->\r\n<!--&gt;-->\r\n<!--<animateTransform-->\r\n<!--attributeType=\"xml\"-->\r\n<!--attributeName=\"transform\"-->\r\n<!--type=\"rotate\"-->\r\n<!--from=\"0 40 40\"-->\r\n<!--to=\"-360 40 40\"-->\r\n<!--dur=\"0.6s\"-->\r\n<!--repeatCount=\"indefinite\"-->\r\n<!--/>-->\r\n<!--</path>-->\r\n<!--</svg>-->\r\n<!--</ng-container>-->",
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        host: {
                            '[class.disabled]': 'disabled',
                            '[class.readonly]': 'readonly'
                        },
                        styles: [":host{background-color:transparent;border:1px solid #d9d9d9;border-radius:.4rem;color:#363636;display:flex;align-items:center;justify-content:flex-start;font-size:1.5rem;outline:0;overflow:hidden;padding:0 1rem;position:relative;transition:.3s cubic-bezier(.645,.045,.355,1);width:100%;height:auto;min-height:2.25em;max-height:5rem;max-width:100%}:host.focus{border-color:#40a9ff;outline:0;box-shadow:0 0 0 2px rgba(24,144,255,.2);border-right-width:1px!important}:host:hover{border-color:#40a9ff}:host.invalid{border-color:#f5222d}:host.invalid.focus{border-color:#ff4d4f;outline:0;box-shadow:0 0 0 2px rgba(245,34,45,.2)}:host input{border:none;color:inherit;display:flex;flex:1px;font-size:inherit;font-weight:inherit;text-transform:inherit;text-decoration:inherit;outline:0;height:100%;max-width:100%;z-index:1}:host .loading_icon{width:10%}:host-context(.readonly){border:0}:host-context(.disabled){border:0}"]
                    }] }
        ];
        /** @nocollapse */
        InputComponent.ctorParameters = function () {
            return [
                { type: core.ChangeDetectorRef }
            ];
        };
        InputComponent.propDecorators = {
            type: [{ type: core.Input }],
            name: [{ type: core.Input }],
            placeholder: [{ type: core.Input }],
            value: [{ type: core.Input }],
            invalid: [{ type: core.Input }],
            disabled: [{ type: core.Input }],
            range: [{ type: core.Input }],
            readonly: [{ type: core.Input }],
            change: [{ type: core.Output }],
            blur: [{ type: core.Output }],
            enter: [{ type: core.Output }],
            template: [{ type: core.Input }],
            host_focus: [{ type: core.HostBinding, args: ['class.focus',] }],
            host_invalid: [{ type: core.HostBinding, args: ['class.invalid',] }]
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
            { type: core.NgModule, args: [{
                        declarations: [
                            InputComponent
                        ],
                        imports: [
                            common.CommonModule
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
                        template: "<div class=\"checkbox\" [class.active]=\"value\">\r\n    <i class=\"fas fa-check icon\"></i>\r\n</div>\r\n<p class=\"label\">{{label}}</p>\r\n\r\n\r\n",
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

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CheckboxModule = /** @class */ (function () {
        function CheckboxModule() {
        }
        CheckboxModule.decorators = [
            { type: core.NgModule, args: [{
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
            this.change = new core.EventEmitter();
            this.blur = new core.EventEmitter();
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
            { type: core.Component, args: [{
                        selector: 'io-textarea',
                        template: "\n      <textarea\n              [name]=\"name\"\n              [value]=\"value\"\n              [class.invalid]=\"invalid\"\n              cols=\"1\" rows=\"1\"\n              [placeholder]=\"placeholder\"\n              \n              (change)=\"$event.stopPropagation(); change.emit($event.target.value);\"\n              (blur)=\"blur.emit()\"\n      ></textarea>\n  ",
                        styles: ["\n      :host {\n          display: flex;\n          flex: 1;\n      }\n\n      textarea {\n          border: none;\n          font-size: 1.5rem;\n          padding: 1rem;\n          width: 100%;\n          max-width: 100%;\n          overflow-y: scroll;\n      }\n  "]
                    }] }
        ];
        /** @nocollapse */
        TextareaComponent.ctorParameters = function () { return []; };
        TextareaComponent.propDecorators = {
            name: [{ type: core.Input }],
            value: [{ type: core.Input }],
            placeholder: [{ type: core.Input }],
            change: [{ type: core.Output }],
            blur: [{ type: core.Output }],
            invalid: [{ type: core.Input }]
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
            { type: core.NgModule, args: [{
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

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var MenuModule = /** @class */ (function () {
        function MenuModule() {
        }
        MenuModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [
                            MenuComponent$1
                        ],
                        imports: [
                            common.CommonModule
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
            { type: core.NgModule, args: [{
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

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    var __assign = function () {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p))
                        t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

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
                if (status === void 0) {
                    status = 'initial';
                }
                /** @type {?} */
                var context = __assign({ name: _this._controlConfig.name, invalid: _this._invalid }, _this._controlConfig.props, { value: _this._value, options: _this._options, readonly: _this._readonly, template: _this._template });
                _.forOwn(context, function (value, key) {
                    if (value !== undefined)
                        _this._compRef.instance[key] = value;
                });
                if (status === 'initial') {
                    _.forOwn(_this._events, function (value, key) {
                        if (!_this._compRef.instance[key])
                            _this._compRef.instance[key] = new core.EventEmitter();
                        _this._compRef.instance[key].pipe(utility.untilDestroyed(_this)).subscribe(function (event) {
                            (value instanceof core.EventEmitter)
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
            { type: core.Directive, args: [{
                        selector: '[dynamic_field]'
                    },] }
        ];
        /** @nocollapse */
        DynamicFieldDirective.ctorParameters = function () {
            return [
                { type: core.ComponentFactoryResolver },
                { type: core.ViewContainerRef }
            ];
        };
        DynamicFieldDirective.propDecorators = {
            _readonly: [{ type: core.Input, args: ['readonly',] }],
            _controlConfig: [{ type: core.Input, args: ['controlConfig',] }],
            _events: [{ type: core.Input, args: ['events',] }],
            _invalid: [{ type: core.Input, args: ['invalid',] }],
            _value: [{ type: core.Input, args: ['value',] }],
            _options: [{ type: core.Input, args: ['options',] }],
            _template: [{ type: core.Input, args: ['template',] }]
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
            this.$initialize = new rxjs.Subject();
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
            { type: core.Injectable }
        ];
        return FormService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var FieldComponent = /** @class */ (function () {
        ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///
        function FieldComponent(_formSvs, cd) {
            var _this = this;
            this._formSvs = _formSvs;
            this.cd = cd;
            this.invalid = false;
            ///-----------------------------------------------  Main Functions   -----------------------------------------------///
            this.onChanged = function (e) {
                _this._formSvs.getControl(_this.name).setValue(e);
            };
            this.onTouched = function () {
                _this._formSvs.getControl(_this.name).markAsTouched();
            };
            this.onEntered = function () {
                // this.formSvs._onEntered()
                // if (this.name === 'password') this.focus = true;
            };
            this.parseContext = function () {
                _this.control = _this.formGroup.get(_this.name);
                _this.controlConfig = ( /** @type {?} */(_this.control.configuration));
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
                var _this = this;
                this.parseContext();
                this.formGroup.statusChanges.pipe(utility.untilDestroyed(this)).subscribe(function (status) {
                    _this.parseContext();
                });
                this.formGroup.ngSubmit.pipe(utility.untilDestroyed(this)).subscribe(function (data) {
                    _this.parseContext();
                });
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
                // this.cd.detach();
            };
        FieldComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'form-field',
                        template: "\n      <ng-container *ngIf=\"control&&controlConfig\">\n          <ng-container\n                  dynamic_field\n                  [controlConfig]=\"controlConfig\"\n\n                  [events]=\"{\n                            change: onChanged,\n                            blur: onTouched,\n                            enter: onEntered\n                    }\"\n                  [template]=\"template\"\n\n                  [value]=\"control.value\"\n                  [options]=\"controlConfig.options\"\n                  [invalid]=\"invalid\"\n                  [readonly]=\"formGroup.readonly\"\n          >\n          </ng-container>\n      </ng-container>\n  ",
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        styles: ["\n      :host {\n          display: flex;\n          width: 100%;\n          height: 100%;\n      }\n  "]
                    }] }
        ];
        /** @nocollapse */
        FieldComponent.ctorParameters = function () {
            return [
                { type: FormService },
                { type: core.ChangeDetectorRef }
            ];
        };
        FieldComponent.propDecorators = {
            name: [{ type: core.Input }],
            formGroup: [{ type: core.Input }],
            template: [{ type: core.Input }]
        };
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
            { type: core.Directive, args: [{
                        selector: '[submitForm]'
                    },] }
        ];
        /** @nocollapse */
        SubmitDirective.ctorParameters = function () {
            return [
                { type: core.ElementRef }
            ];
        };
        SubmitDirective.propDecorators = {
            _formGr: [{ type: core.Input, args: ['submitForm',] }],
            disabled: [{ type: core.Input }],
            onClick: [{ type: core.HostListener, args: ['click', ['$event'],] }]
        };
        return SubmitDirective;
    }());

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
            { type: core.Directive, args: [{
                        selector: '[fieldTemplate]'
                    },] }
        ];
        /** @nocollapse */
        FieldTemplateDirective.ctorParameters = function () {
            return [
                { type: core.ViewContainerRef },
                { type: core.TemplateRef }
            ];
        };
        FieldTemplateDirective.propDecorators = {
            name: [{ type: core.Input }]
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
            this.submit = new core.EventEmitter();
            this.viewInitialized = false;
            this.parseContext = function () {
                _this._formSvs.initialize(_this.formGroup);
                _this.controlRoster = _.keys(_this.formGroup.controls);
                _this.controls = _.values(_this.formGroup.controls);
                if (_this._subscription)
                    _this._subscription.unsubscribe();
                _this._subscription = _this.formGroup.ngSubmit.pipe(utility.untilDestroyed(_this), operators.distinctUntilChanged()).subscribe(function (data) {
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
            { type: core.Component, args: [{
                        selector: 'io-form',
                        template: "\n      <ng-container>\n          <ng-template #contentVc>\n              <ng-content></ng-content>\n          </ng-template>\n\n          <ng-container *ngIf=\"viewInitialized\">\n\n              <ng-container *ngIf=\"!default_template\">\n                  <ng-container [ngTemplateOutlet]=\"contentVc\"></ng-container>\n              </ng-container>\n\n              <ng-container *ngIf=\"default_template\">\n                  <ng-container *ngFor=\"let name of controlRoster\">\n                      <form-control\n                              [name]=\"name\"\n                              [formGroup]=\"formGroup\"\n                      >\n                      </form-control>\n                  </ng-container>\n              </ng-container>\n\n          </ng-container>\n\n      </ng-container>\n\n\n\n  ",
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        providers: [FormService],
                        styles: ["\n\n  "]
                    }] }
        ];
        /** @nocollapse */
        FormComponent.ctorParameters = function () {
            return [
                { type: FormService },
                { type: core.ChangeDetectorRef }
            ];
        };
        FormComponent.propDecorators = {
            formGroup: [{ type: core.Input }],
            mediaType: [{ type: core.Input }],
            submit: [{ type: core.Output }],
            _contentVcRef: [{ type: core.ViewChild, args: ['contentVc', { read: core.ElementRef },] }],
            _fieldTemplateDirList: [{ type: core.ContentChildren, args: [FieldTemplateDirective,] }]
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
                var props = (( /** @type {?} */(_this._control.configuration))).props;
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
                    _this.field_template = templateData._tplRef;
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
            { type: core.Component, args: [{
                        selector: 'form-control',
                        template: "\n\n      <ng-container *ngIf=\"formGroup\">\n          <form-label\n                  [name]=\"name\"\n                  [formGroup]=\"formGroup\"\n                  *ngIf=\"show_label\"\n          ></form-label>\n\n          <form-field\n                  [name]=\"name\"\n                  [formGroup]=\"formGroup\"\n                  [template]=\"field_template\"\n          ></form-field>\n\n          <form-feedback\n                  [name]=\"name\"\n                  [formGroup]=\"formGroup\"\n                  *ngIf=\"show_feedback\"\n          ></form-feedback>\n      </ng-container>\n\n  ",
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        styles: ["\n      :host {\n          display: grid;\n          grid-template-areas: \"label   field\" \". feedback\";\n          grid-template-columns: 3fr 7fr;\n          grid-template-rows: 1fr auto;\n          margin-bottom: 1rem;\n          height: auto;\n          visibility: visible;\n          z-index: 50;\n      }\n\n      :host-context(.hide-label) {\n          grid-template-areas: \"field\" \"feedback\";\n          grid-template-columns: 1fr;\n      }\n\n      :host-context(.hide-feedback) {\n          grid-template-areas: \"label   field\";\n          grid-template-columns: 3fr 7fr;\n      }\n\n      :host-context(.hide-label.hide-feedback) {\n          grid-template-areas: \"field\";\n      }\n\n      :host-context(.hidden) {\n          display: none !important;\n      }\n\n      form-label {\n          grid-area: label;\n      }\n\n      form-field {\n          grid-area: field;\n      }\n\n      form-feedback {\n          grid-area: feedback;\n      }\n  "]
                    }] }
        ];
        /** @nocollapse */
        ControlComponent.ctorParameters = function () {
            return [
                { type: FormService },
                { type: core.ChangeDetectorRef },
                { type: core.Renderer2 },
                { type: core.ElementRef },
                { type: FormComponent, decorators: [{ type: core.Host }] }
            ];
        };
        ControlComponent.propDecorators = {
            name: [{ type: core.Input }],
            formGroup: [{ type: core.Input }],
            _fieldTemplateDir: [{ type: core.ContentChild, args: [FieldTemplateDirective,] }]
        };
        return ControlComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var LabelComponent = /** @class */ (function () {
        function LabelComponent(_formSvs, cd) {
            var _this = this;
            this._formSvs = _formSvs;
            this.cd = cd;
            this.parseContext = function () {
                _this._control = _this.formGroup.get(_this.name);
                _this._controlConfig = ( /** @type {?} */(_this._control.configuration));
                _this.label = _this._controlConfig.label || _.startCase(_this.name);
                _this.cd.markForCheck();
            };
        }
        /**
         * @return {?}
         */
        LabelComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this.parseContext();
            };
        /**
         * @return {?}
         */
        LabelComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
            };
        LabelComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'form-label',
                        template: "\n      {{label}}\n  ",
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        styles: ["\n      :host {\n          display: flex;\n          align-items: center;\n          color: rgba(0, 0, 0, 0.85);\n          font-size: 1.6rem;\n          font-weight: 700;\n          position: relative\n      }\n  "]
                    }] }
        ];
        /** @nocollapse */
        LabelComponent.ctorParameters = function () {
            return [
                { type: FormService },
                { type: core.ChangeDetectorRef }
            ];
        };
        LabelComponent.propDecorators = {
            name: [{ type: core.Input }],
            formGroup: [{ type: core.Input }]
        };
        return LabelComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var FeedbackComponent = /** @class */ (function () {
        ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///
        function FeedbackComponent(_formSvs, cd) {
            var _this = this;
            this._formSvs = _formSvs;
            this.cd = cd;
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
                        if (_this.name === 'confirm_password') {
                            return "You need to confirm password";
                        }
                        return _.startCase(_this.name) + "  is required";
                    case 'agreement':
                        return "You must agree to the terms and conditions before continuing!";
                    case 'email':
                        return "Invalid email address. Valid e-mail can contain only latin letters, numbers, '@' and '.'";
                    case 'email_existed':
                        return _.startCase(_this.name) + " is existed! Please use another one";
                    case 'stringLength':
                        return value.minLength ? _.startCase(_this.name) + " cannot be shorter than " + value.minLength : _.startCase(_this.name) + " cannot be longer than " + value.maxLength;
                    case 'equalTo':
                        return "Confirm password is not equal to password";
                    default:
                        return value;
                }
            };
            ///-----------------------------------------------  Main Functions   -----------------------------------------------///
            this.parseContext = function () {
                // this.formGroup = this._formSvs.getFormGroup();
                _this._control = _this.formGroup.get(_this.name);
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
                var _this = this;
                this.parseContext();
                this.formGroup.statusChanges.pipe(utility.untilDestroyed(this)).subscribe(function (status) {
                    _this.parseContext();
                });
                this.formGroup.ngSubmit.pipe(utility.untilDestroyed(this)).subscribe(function (data) {
                    _this.parseContext();
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
                        template: "\n      <ng-container *ngIf=\"show_feedback\">\n          <ng-container *ngIf=\"invalid\">\n              <ng-container *ngFor=\"let err of error_list\">\n                  <div class=\"feedback\">{{err}}</div>\n              </ng-container>\n\n          </ng-container>\n      </ng-container>\n  ",
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        styles: ["\n      :host {\n          display: flex;\n          flex-direction: column;\n          justify-content: flex-start;\n          width: 100%;\n          color: #f5222d;\n          font-size: 1.2rem;\n          margin-top: 0.5rem;\n      }\n  "]
                    }] }
        ];
        /** @nocollapse */
        FeedbackComponent.ctorParameters = function () {
            return [
                { type: FormService },
                { type: core.ChangeDetectorRef }
            ];
        };
        FeedbackComponent.propDecorators = {
            name: [{ type: core.Input }],
            formGroup: [{ type: core.Input }]
        };
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
            { type: core.NgModule, args: [{
                        declarations: [
                            FormComponent,
                            FieldComponent, ControlComponent$1, LabelComponent, FeedbackComponent, FieldTemplateDirective,
                            DynamicFieldDirective, SubmitDirective
                        ],
                        imports: [common.CommonModule],
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
            { type: core.NgModule, args: [{
                        declarations: [],
                        imports: [
                            common.CommonModule,
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

    exports.IonarFormModule = IonarFormModule;
    exports.ɵf = ControlComponent$1;
    exports.ɵh = FeedbackComponent;
    exports.ɵe = FieldComponent;
    exports.ɵg = LabelComponent;
    exports.ɵb = FormComponent;
    exports.ɵa = CoreModule;
    exports.ɵi = DynamicFieldDirective;
    exports.ɵd = FieldTemplateDirective;
    exports.ɵj = SubmitDirective;
    exports.ɵc = FormService;
    exports.ɵo = CheckboxComponent;
    exports.ɵn = CheckboxModule;
    exports.ɵm = InputComponent;
    exports.ɵl = InputModule;
    exports.ɵbc = MenuComponent$1;
    exports.ɵbb = MenuModule;
    exports.ɵw = ControlComponent;
    exports.ɵx = MenuComponent;
    exports.ɵy = OptionComponent;
    exports.ɵv = SelectComponent;
    exports.ɵu = SelectModule;
    exports.ɵba = TextareaComponent;
    exports.ɵz = TextareaModule;
    exports.ɵt = FileComponent;
    exports.ɵr = ClickComponent;
    exports.ɵs = DropComponent;
    exports.ɵq = UploadComponent;
    exports.ɵp = UploadModule;
    exports.ɵk = UIModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=ionar-form.umd.js.map