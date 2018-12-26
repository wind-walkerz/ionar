import { CommonModule } from '@angular/common';
import { Subject, forkJoin } from 'rxjs';
import { map, distinctUntilChanged } from 'rxjs/operators';
import _ from 'lodash';
import { untilDestroyed } from '@ionar/utility';
import { Component, ElementRef, EventEmitter, HostListener, Input, Output, HostBinding, NgModule, TemplateRef, ViewChild, ChangeDetectorRef, ChangeDetectionStrategy, ComponentFactoryResolver, Directive, ViewContainerRef, Injectable, ContentChildren, ContentChild, Host, Renderer2, defineInjectable } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SelectComponent {
    ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///
    /**
     * @param {?} eRef
     */
    constructor(eRef) {
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
        this.onToggleMenu = () => {
            this.show_menu = !this.show_menu;
        };
        this.onChange = option => {
            this.options = _.map(this.options, (item) => {
                item.selected = _.isEqual(item, option);
                this.selected_option = item;
                return item;
            });
            this.show_menu = false;
            this.change.emit(this.selected_option.value);
        };
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (this.value) {
            this.selected_option = _.find(this.options, ['value', this.value.toString()]);
        }
    }
    ///-----------------------------------------------  Host   -----------------------------------------------///
    /**
     * @param {?} event
     * @return {?}
     */
    clickout(event) {
        if (!this.eRef.nativeElement.contains(event.target)) {
            this.show_menu = false;
        }
    }
}
SelectComponent.decorators = [
    { type: Component, args: [{
                selector: 'io-select',
                template: "<control\n        [label]=\"selected_option?.label\"\n        [show_menu]=\"show_menu\"\n        (click)=\"onToggleMenu()\"\n></control>\n\n<menu\n        [options]=\"options\"\n        (onSelectOption)=\"onChange($event)\"\n        *ngIf=\"show_menu\"\n></menu>",
                styles: [":host{display:flex;position:relative;flex:1}"]
            }] }
];
/** @nocollapse */
SelectComponent.ctorParameters = () => [
    { type: ElementRef }
];
SelectComponent.propDecorators = {
    options: [{ type: Input }],
    value: [{ type: Input }],
    change: [{ type: Output }],
    blur: [{ type: Output }],
    invalid: [{ type: Input }],
    clickout: [{ type: HostListener, args: ['document:click', ['$event'],] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ControlComponent {
    /**
     * @param {?} eRef
     */
    constructor(eRef) {
        this.eRef = eRef;
        this.show_menu = false;
        this.label = null;
        this.tabindex = 0;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.eRef.nativeElement.focus();
    }
}
ControlComponent.decorators = [
    { type: Component, args: [{
                selector: 'control',
                template: "<div id=\"value\">\n    <span *ngIf=\"!label\">Please select</span>\n    <span *ngIf=\"label\">{{label}}</span>\n</div>\n\n<div id=\"icon\">\n    <i class=\"fas fa-angle-right\"></i>\n</div>\n",
                styles: [":host{background-color:#fff;border-radius:5px;box-sizing:border-box;border:1px solid #d9d9d9;cursor:pointer;display:flex;align-items:center;justify-content:space-between;font-size:1.5rem;outline:0;padding:0 1rem;transition:.3s cubic-bezier(.645,.045,.355,1);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;width:100%;height:40px;z-index:1}:host:focus{border-color:#40a9ff;outline:0;box-shadow:0 0 0 2px rgba(24,144,255,.2);border-right-width:1px!important}:host:hover{border-color:#40a9ff}:host .fa-angle-right{font-size:2rem}"]
            }] }
];
/** @nocollapse */
ControlComponent.ctorParameters = () => [
    { type: ElementRef }
];
ControlComponent.propDecorators = {
    show_menu: [{ type: Input }],
    label: [{ type: Input }],
    tabindex: [{ type: HostBinding }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MenuComponent {
    constructor() {
        this.options = [];
        this.onSelectOption = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
MenuComponent.decorators = [
    { type: Component, args: [{
                selector: 'menu',
                template: `
      <ng-container *ngFor="let option of options">
          <select-option
                  [data]="option"
                  (click)="this.onSelectOption.emit(option)"
          ></select-option>
      </ng-container>
  `,
                styles: [`
      :host {
          background-color: white;
          border-radius: 5px;
          box-sizing: border-box;
          border: 1px solid rgb(196, 202, 212);
          overflow-y: scroll;
          padding: 0 10px;
          position: absolute;
          top: 100%;
          z-index: 9999;
          width: 100%;
          max-height: 20rem;
      }
  `]
            }] }
];
/** @nocollapse */
MenuComponent.ctorParameters = () => [];
MenuComponent.propDecorators = {
    options: [{ type: Input }],
    onSelectOption: [{ type: Output }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class OptionComponent {
    constructor() {
        this.data = null;
        this.selected = false;
        this.disabled = false;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.selected = this.data.selected;
        this.disabled = this.data.disabled;
    }
    /**
     * @param {?} btn
     * @return {?}
     */
    onClick(btn) {
    }
}
OptionComponent.decorators = [
    { type: Component, args: [{
                selector: 'select-option',
                template: `
      <p>
          {{data.label}}
      </p>`,
                styles: [":host{color:rgba(0,0,0,.65);cursor:pointer;display:flex;justify-content:flex-start;font-weight:400;line-height:22px;overflow:hidden;padding:5px 12px;position:relative;text-overflow:ellipsis;transition:background .3s;white-space:nowrap;width:100%}:host:hover{background-color:#e6f7ff}:host.selected{background-color:#fafafa;font-weight:600;color:rgba(0,0,0,.65)}:host.disabled{color:rgba(0,0,0,.25);cursor:not-allowed;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}:host.disabled:hover{background-color:transparent}"]
            }] }
];
/** @nocollapse */
OptionComponent.ctorParameters = () => [];
OptionComponent.propDecorators = {
    data: [{ type: Input }],
    selected: [{ type: HostBinding, args: ['class.selected',] }],
    disabled: [{ type: HostBinding, args: ['class.disabled',] }],
    onClick: [{ type: HostListener, args: ['click', ['$event.target'],] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SelectModule {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class UploadComponent {
    ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///
    /**
     * @param {?} elRef
     */
    constructor(elRef) {
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
    ngOnInit() {
        if (!this.template) {
            this.template = this._defaultTempRef;
        }
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
    }
    ///-----------------------------------------------  Main Functions   -----------------------------------------------///
    /**
     * @param {?} file_list
     * @return {?}
     */
    onFileChanged(file_list) {
        this.file_list = this.file_list.concat(_.map(file_list));
        this.change.emit(this.multiple ? this.file_list : this.file_list[0]);
    }
}
UploadComponent.decorators = [
    { type: Component, args: [{
                selector: 'io-upload',
                template: "<ng-container *ngIf=\"type === 'dropzone'\">\r\n    <ng-container *ngTemplateOutlet=\"dropzone\"></ng-container>\r\n</ng-container>\r\n\r\n<ng-container *ngIf=\"type === 'input'\">\r\n    <ng-container *ngTemplateOutlet=\"click\"></ng-container>\r\n</ng-container>\r\n\r\n<ng-template #click>\r\n    <click\r\n            (change)=\"onFileChanged($event)\"\r\n            [template]=\"template\"\r\n            [multiple]=\"multiple\"\r\n    >\r\n    </click>\r\n\r\n</ng-template>\r\n\r\n<ng-template #dropzone>\r\n    <drop\r\n            (change)=\"onFileChanged($event)\"\r\n            [template]=\"template\"\r\n    >\r\n    </drop>\r\n</ng-template>\r\n\r\n\r\n<ng-template #default>\r\n    <ng-content></ng-content>\r\n</ng-template>\r\n",
                styles: [":host{display:flex;flex-direction:column;align-items:flex-start;width:100%;height:100%}"]
            }] }
];
/** @nocollapse */
UploadComponent.ctorParameters = () => [
    { type: ElementRef }
];
UploadComponent.propDecorators = {
    change: [{ type: Output }],
    invalid: [{ type: Input }],
    type: [{ type: Input }],
    template: [{ type: Input }],
    multiple: [{ type: Input }],
    _defaultTempRef: [{ type: ViewChild, args: ['default',] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ClickComponent {
    ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///
    constructor() {
        ///-----------------------------------------------  Variables   -----------------------------------------------///
        this.change = new EventEmitter();
        this.multiple = false;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
    }
}
ClickComponent.decorators = [
    { type: Component, args: [{
                selector: 'click',
                template: "<ng-container *ngTemplateOutlet=\"template\"></ng-container>\n\n\n<input\n        type=\"file\"\n        [multiple]=\"multiple\"\n        (change)=\"$event.stopPropagation();change.emit($event.target.files)\"\n>",
                styles: [":host{background-color:#fff;border-radius:.4rem;color:rgba(0,0,0,.65);cursor:pointer;display:flex;align-items:center;justify-content:center;outline:0;position:relative;transition:.3s cubic-bezier(.645,.045,.355,1);width:100%;height:4rem;max-width:20rem;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}:host:focus{border-color:#40a9ff;outline:0;box-shadow:0 0 0 2px rgba(24,144,255,.2);border-right-width:1px!important}:host:hover{border-color:#40a9ff;color:#40a9ff}:host.invalid{border-color:#f5222d}:host.invalid:focus{border-color:#ff4d4f;outline:0;box-shadow:0 0 0 2px rgba(245,34,45,.2)}input{display:flex;outline:0;opacity:0;position:absolute;width:100%;height:100%;z-index:1}"]
            }] }
];
/** @nocollapse */
ClickComponent.ctorParameters = () => [];
ClickComponent.propDecorators = {
    change: [{ type: Output }],
    template: [{ type: Input }],
    multiple: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DropComponent {
    ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///
    constructor() {
        ///-----------------------------------------------  Variables   -----------------------------------------------///
        this.change = new EventEmitter();
        this.multiple = false;
        this.drop_hover = false;
        this.onDrop = $event => {
            event.preventDefault();
            this.change.emit($event.dataTransfer.files);
            this.drop_hover = false;
        };
        this.onDragOver = $event => {
            event.preventDefault();
            this.drop_hover = true;
        };
        this.onDragLeave = $event => {
            event.preventDefault();
            this.drop_hover = false;
        };
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
DropComponent.decorators = [
    { type: Component, args: [{
                selector: 'drop',
                template: "<ng-container *ngTemplateOutlet=\"template\"></ng-container>\r\n\r\n\r\n<input\r\n        type=\"file\"\r\n        [multiple]=\"multiple\"\r\n        (change)=\"$event.stopPropagation();change.emit($event.target.files)\"\r\n>",
                styles: [":host{background-color:#fff;border:1px dashed #d9d9d9;border-radius:.4rem;color:rgba(0,0,0,.65);display:flex;align-items:center;justify-content:center;outline:0;position:relative;transition:.3s;width:100%;height:100%;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}:host.drop_hover{border:2px dashed #40a9ff;color:#40a9ff}:host.drop_hover p{color:#40a9ff}:host p{transition:.3s cubic-bezier(.645,.045,.355,1)}:host:focus{border-color:#40a9ff;outline:0;box-shadow:0 0 0 2px rgba(24,144,255,.2);border-right-width:1px!important}:host:hover{border-color:#40a9ff;color:#40a9ff}:host:hover p{color:#40a9ff}:host.invalid{border-color:#f5222d}:host.invalid:focus{border-color:#ff4d4f;outline:0;box-shadow:0 0 0 2px rgba(245,34,45,.2)}input{border:1px solid red;display:flex;outline:0;opacity:0;position:absolute;width:100%;height:100%;z-index:1}"]
            }] }
];
/** @nocollapse */
DropComponent.ctorParameters = () => [];
DropComponent.propDecorators = {
    change: [{ type: Output }],
    multiple: [{ type: Input }],
    template: [{ type: Input }],
    drop_hover: [{ type: HostBinding, args: ['class.drop_hover',] }],
    onDrop: [{ type: HostListener, args: ['drop', ['$event'],] }],
    onDragOver: [{ type: HostListener, args: ['dragover', ['$event'],] }],
    onDragLeave: [{ type: HostListener, args: ['dragleave', ['$event'],] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FileComponent {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class UploadModule {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class InputComponent {
    /**
     * @param {?} cd
     */
    constructor(cd) {
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
        this.onFocus = () => {
            this.host_focus = true;
        };
        this.onBlur = () => {
            this.blur.emit();
            this.host_focus = false;
            this.cd.markForCheck();
        };
        this.onChange = _.debounce(e => {
            e.stopPropagation();
            /** @type {?} */
            let value = e.target.value;
            /** @type {?} */
            const min = parseInt(this.range[0], 10);
            /** @type {?} */
            const max = parseInt(this.range[1], 10);
            if (this.range && this.type === 'number' && !(min <= value && value <= max)) {
                value = e.target.value = this.range[1];
            }
            this.change.emit(value);
        }, 500);
        //  Keyboard & Clipboard Event  //
        this.onKeyPress = (e) => {
            if (e.keyCode === 13)
                this.enter.emit();
        };
        this.onKeyDown = (e) => {
            return (this.type === 'number')
                ? this.onNumberKeyDown(e)
                : (this.type === 'phone')
                    ? this.onPhoneKeyDown(e)
                    : null;
        };
        this.onPaste = (e) => {
            return (this.type === 'number')
                ? this.onNumberPaste(e)
                : (this.type === 'phone')
                    ? this.onPhonePaste(e)
                    : null;
        };
        // Ensure that it is a number from [0-9] no decimal_point
        this.onPhoneKeyDown = (e) => {
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
        this.onPhonePaste = (e) => {
            if (!/^\d+$/.test(e.clipboardData.getData('Text'))) {
                e.preventDefault();
            }
        };
        // Ensure that it is a  number: integer || decimal
        this.onNumberKeyDown = (e) => {
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
        this.onNumberPaste = (e) => {
            if (!/^\d.+$/.test(e.clipboardData.getData('Text'))) {
                e.preventDefault();
            }
        };
    }
    ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///
    /**
     * @return {?}
     */
    ngOnInit() {
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
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        this.host_invalid = this.invalid;
        this.cd.markForCheck();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
    }
}
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
InputComponent.ctorParameters = () => [
    { type: ChangeDetectorRef }
];
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class InputModule {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CheckboxComponent {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CheckboxModule {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TextareaComponent {
    ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///
    constructor() {
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
    ngOnInit() {
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
    }
}
TextareaComponent.decorators = [
    { type: Component, args: [{
                selector: 'io-textarea',
                template: `
      <textarea
              [name]="name"
              [value]="value"
              [class.invalid]="invalid"
              cols="1" rows="1"
              [placeholder]="placeholder"
              
              (change)="$event.stopPropagation(); change.emit($event.target.value);"
              (blur)="blur.emit()"
      ></textarea>
  `,
                styles: [`
      :host {
          display: flex;
          flex: 1;
      }

      textarea {
          border: none;
          font-size: 1.5rem;
          padding: 1rem;
          width: 100%;
          max-width: 100%;
          overflow-y: scroll;
      }
  `]
            }] }
];
/** @nocollapse */
TextareaComponent.ctorParameters = () => [];
TextareaComponent.propDecorators = {
    name: [{ type: Input }],
    value: [{ type: Input }],
    placeholder: [{ type: Input }],
    change: [{ type: Output }],
    blur: [{ type: Output }],
    invalid: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TextareaModule {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MenuComponent$1 {
    constructor() {
        this.options = [];
        this.name = '';
        this.value = null;
        this.change = new EventEmitter();
        this.blur = new EventEmitter();
        this.enter = new EventEmitter();
        this.invalid = false;
        this.onSelectOption = option => {
            this.change.emit(option.value);
            this.blur.emit();
        };
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
    }
}
MenuComponent$1.decorators = [
    { type: Component, args: [{
                selector: 'io-menu',
                template: `
      <ng-container *ngFor="let option of options">
          <div
                  class="option"
                  [class.active]="option.value === value"
                  (click)="onSelectOption(option)"
          >
              {{option.label}}
          </div>
      </ng-container>
  `,
                styles: [":host{display:flex;flex-direction:column;width:100%}:host .option{border:0;cursor:pointer;font-size:1.6rem;margin:.5rem 0}:host .option.active,:host .option:hover{font-weight:700}"]
            }] }
];
/** @nocollapse */
MenuComponent$1.ctorParameters = () => [];
MenuComponent$1.propDecorators = {
    options: [{ type: Input }],
    name: [{ type: Input }],
    value: [{ type: Input }],
    change: [{ type: Output }],
    blur: [{ type: Output }],
    enter: [{ type: Output }],
    invalid: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MenuModule {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class UIModule {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DynamicFieldDirective {
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
            menu: MenuComponent$1
            // radio: AuroraRadioComponent
        };
        this.createComponent = () => {
            /** @type {?} */
            const component = this.components[this._controlConfig.type];
            /** @type {?} */
            const factory = this._resolver.resolveComponentFactory(component);
            this._compRef = this._vcRef.createComponent(factory);
            this.initContext();
        };
        this.initContext = () => {
            this.parseContext();
        };
        this.updateContext = () => {
            this.parseContext('updated');
            if (typeof this._compRef.instance.ngOnChanges === 'function') {
                this._compRef.instance.ngOnChanges();
            }
            else {
                throw new Error(`${this._compRef.componentType.name} doesn't implement 'ngOnChanges'`);
            }
        };
        this.parseContext = (status = 'initial') => {
            /** @type {?} */
            const context = Object.assign({ name: this._controlConfig.name, invalid: this._invalid }, this._controlConfig.props, { value: this._value, options: this._options, readonly: this._readonly, template: this._template });
            _.forOwn(context, (value, key) => {
                if (value !== undefined)
                    this._compRef.instance[key] = value;
            });
            if (status === 'initial') {
                _.forOwn(this._events, (value, key) => {
                    if (!this._compRef.instance[key])
                        this._compRef.instance[key] = new EventEmitter();
                    this._compRef.instance[key].pipe(untilDestroyed(this)).subscribe(event => {
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
    ngOnInit() {
        this.createComponent();
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        if (this._compRef) {
            this.updateContext();
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
    _readonly: [{ type: Input, args: ['readonly',] }],
    _controlConfig: [{ type: Input, args: ['controlConfig',] }],
    _events: [{ type: Input, args: ['events',] }],
    _invalid: [{ type: Input, args: ['invalid',] }],
    _value: [{ type: Input, args: ['value',] }],
    _options: [{ type: Input, args: ['options',] }],
    _template: [{ type: Input, args: ['template',] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FormService {
    constructor() {
        this.$initialize = new Subject();
        this.initialize = (formGroup) => {
            this.formGroup = formGroup;
            this.$initialize.next(formGroup);
        };
        this.getFormGroup = () => this.formGroup;
        this.getControl = (name) => this.formGroup.get(name);
        this.convertToFormData = data => {
            /** @type {?} */
            const form = new FormData();
            _.forOwn(data, (value, key) => {
                if (_.isArray(value)) {
                    _.each(value, file => form.append(`${key}[]`, file, file.name));
                }
                else
                    form.append(key, value);
            });
            return form;
        };
        this.convertToMediaType = (value, media_type) => {
            if (media_type) {
                switch (media_type.toLowerCase()) {
                    case 'json':
                        return JSON.stringify(value);
                    case 'form-data':
                        return this.convertToFormData(value);
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
    ngAfterViewInit() {
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
FormService.decorators = [
    { type: Injectable }
];

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
class AbstractControl {
    constructor() {
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
        this.storeConfig = (config) => {
            ((/** @type {?} */ (this))).configuration = config;
        };
    }
    /**
     * A control is `enabled` as long as its `status` is not `DISABLED`.
     *
     * @see `status`
     *
     * @return {?} True if the control has any status other than 'DISABLED',
     * false if the status is 'DISABLED'.
     *
     */
    get enabled() {
        return this.status !== DISABLED;
    }
    /**
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
    get disabled() {
        return this.status === DISABLED;
    }
    /**
     * A control is `valid` when its `status` is `VALID`.
     *
     * @see `status`
     *
     * @return {?} True if the control has passed all of its validation tests,
     * false otherwise.
     */
    get valid() {
        return this.status === VALID;
    }
    /**
     * A control is `invalid` when its `status` is `INVALID`.
     *
     * @see `status`
     *
     * @return {?} True if this control has failed one or more of its validation checks,
     * false otherwise.
     */
    get invalid() {
        return this.status === INVALID;
    }
    /**
     * A control is `pending` when its `status` is `PENDING`.
     *
     * @see `status`
     *
     * @return {?} True if this control is in the process of conducting a validation check,
     * false otherwise.
     */
    get pending() {
        return this.status === PENDING;
    }
    /**
     * A control is `dirty` if the user has changed the value
     * in the UI.
     *
     * @return {?} True if the user has changed the value of this control in the UI; compare `pristine`.
     * Programmatic changes to a control's value do not mark it dirty.
     */
    get dirty() {
        return !this.pristine;
    }
    /**
     * The parent control.
     * @return {?}
     */
    get parent() {
        return this._parent;
    }
    /**
     * Marks the control as `touched`. A control is touched by focus and
     * blur events that do not change the value; compare `markAsDirty`;
     *
     * @return {?}
     */
    markAsTouched() {
        ((/** @type {?} */ (this))).touched = true;
        this.updateValueAndValidity({ onlySelf: true });
    }
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
    markAsUntouched(opts = {}) {
        ((/** @type {?} */ (this))).touched = false;
    }
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
    markAsDirty(opts = {}) {
        ((/** @type {?} */ (this))).pristine = false;
    }
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
    markAsPristine(opts = {}) {
        ((/** @type {?} */ (this))).pristine = true;
    }
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
    setErrors(errors, opts = {}) {
        ((/** @type {?} */ (this))).errors = errors;
        this._updateControlsErrors(opts.emitEvent !== false);
    }
    /**
     * @param {?} parent Sets the parent of the control
     * @return {?}
     */
    setParent(parent) {
        this._parent = parent;
    }
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
    updateValueAndValidity(opts = {}) {
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
    }
    /**
     * \@internal
     * @return {?}
     */
    _initObservables() {
        ((/** @type {?} */ (this))).valueChanges = new EventEmitter();
        ((/** @type {?} */ (this))).statusChanges = new EventEmitter();
    }
    /**
     * @private
     * @return {?}
     */
    _setInitialStatus() {
        ((/** @type {?} */ (this))).status = this._allControlsDisabled() ? DISABLED : VALID;
    }
    /**
     * \@internal
     * @return {?}
     */
    _updateValue() {
    }
    /**
     * \@internal
     * @param {?=} opts
     * @return {?}
     */
    _updateValidity(opts = {}) {
    }
    /**
     * \@internal
     * @param {?} emitEvent
     * @return {?}
     */
    _updateControlsErrors(emitEvent) {
        ((/** @type {?} */ (this))).status = this._calculateStatus();
        if (emitEvent) {
            ((/** @type {?} */ (this.statusChanges))).emit(this.status);
        }
    }
}
/**
 * Reports that a FormControl is valid, meaning that no errors exist in the input value.
 *
 * @see `status`
 * @type {?}
 */
const VALID = 'VALID';
/**
 * Reports that a FormControl is invalid, meaning that an error exists in the input value.
 *
 * @see `status`
 * @type {?}
 */
const INVALID = 'INVALID';
/**
 * Reports that a FormControl is pending, meaning that that async validation is occurring and
 * errors are not yet available for the input value.
 *
 * @see `markAsPending`
 * @see `status`
 * @type {?}
 */
const PENDING = 'PENDING';
/**
 * Reports that a FormControl is disabled, meaning that the control is exempt from ancestor
 * calculations of validity or value.
 *
 * @see `markAsDisabled`
 * @see `status`
 * @type {?}
 */
const DISABLED = 'DISABLED';

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
class Validators {
    /**
     * \@description
     * Compose multiple async validators into a single function that returns the union
     * of the individual error objects for the provided control.
     *
     * @param {?} asyncValidators
     * @return {?} A validator function that returns an error map with the
     * merged error objects of the async validators if the validation check fails, otherwise `null`.
     */
    static composeAsync(asyncValidators) {
        if (!asyncValidators)
            return null;
        /** @type {?} */
        const presentValidators = (/** @type {?} */ (asyncValidators.filter(isPresent)));
        if (presentValidators.length == 0)
            return null;
        return function (control) {
            /** @type {?} */
            const observables = _executeAsyncValidators(control, presentValidators);
            return forkJoin(observables).pipe(map(_mergeErrors));
        };
    }
    /**
     * \@internal
     * @param {?} validator_configs
     * @return {?}
     */
    _isBoxedValue(validator_configs) {
        return _.isPlainObject(validator_configs);
    }
}
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
Validators.required = (c) => isEmptyInputValue(c.value) ? { 'required': true } : null;
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
Validators.email = (control) => {
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
Validators.stringLength = (control) => {
    /** @type {?} */
    const controlConfig = (/** @type {?} */ (control.configuration));
    if (isEmptyInputValue(control.value)) {
        return null; // don't validate empty values to allow optional controls
    }
    if (controlConfig.type !== ('input')) {
        throw new Error(`'stringLength' validator can only be used with control type 'input' or 'textarea'`);
    }
    /** @type {?} */
    const min = controlConfig.validators['stringLength'].min;
    /** @type {?} */
    const max = controlConfig.validators['stringLength'].max;
    /** @type {?} */
    const length = control.value ? control.value.length : 0;
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
Validators.equalTo = (control) => {
    if (isEmptyInputValue(control.value)) {
        return null; // don't validate empty values to allow optional controls
    }
    /** @type {?} */
    const controlConfig = (/** @type {?} */ (control.configuration));
    /** @type {?} */
    const compareWith = _.isString(controlConfig.validators['equalTo']) ? controlConfig.validators['equalTo'] : controlConfig.validators['equalTo'].compare;
    /** @type {?} */
    const compared_control = control.parent.controls[compareWith];
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
Validators.compose = (validators) => {
    if (!validators)
        return null;
    /** @type {?} */
    const presentValidators = (/** @type {?} */ (validators.filter(isPresent)));
    if (presentValidators.length === 0)
        return null;
    return function (control) {
        return _mergeErrors(_executeValidators(control, presentValidators));
    };
};
/** @type {?} */
const EMAIL_REGEXP = /^(?=.{1,254}$)(?=.{1,64}@)[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+(\.[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+)*@[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?(\.[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?)*$/;
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
    return validators.map(v => v(control));
}
/**
 * @param {?} control
 * @param {?} validators
 * @return {?}
 */
function _executeAsyncValidators(control, validators) {
    return validators.map(v => v(control));
}
/**
 * @param {?} arrayOfErrors
 * @return {?}
 */
function _mergeErrors(arrayOfErrors) {
    /** @type {?} */
    const errors = _.reduce(arrayOfErrors, (result, err) => {
        return err ? Object.assign({}, result, err) : result;
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
class FormControl extends AbstractControl {
    /**
     * Creates a new `FormControl` instance.
     *
     * @param {?} configs Initializes the control with an object that defines the initial state.
     *
     */
    constructor(configs) {
        super();
        this._runAsyncValidator = _.debounce((emitEvent) => {
            if (this.asyncValidator) {
                ((/** @type {?} */ (this))).status = PENDING;
                /** @type {?} */
                const obs = this.asyncValidator(this);
                this._asyncValidationSubscription =
                    obs.subscribe((errors) => {
                        if ((this.touched || this.dirty) && this.value) {
                            ((/** @type {?} */ (this))).status = INVALID;
                            this.setErrors(errors, { emitEvent });
                        }
                    });
            }
        }, 500);
        /**
         * Sets the synchronous validators that are active on this control.  Calling
         * this overwrites any existing sync validators.
         */
        this._setValidators = (validators) => {
            ((/** @type {?} */ (this))).validator = coerceToValidator(validators);
        };
        /**
         * Sets the async validators that are active on this control. Calling this
         * overwrites any existing async validators.
         */
        this._setAsyncValidators = (asyncValidators) => {
            ((/** @type {?} */ (this))).asyncValidator = coerceToAsyncValidator(asyncValidators);
        };
        this._applyControlState = () => {
            ((/** @type {?} */ (this))).value = ((/** @type {?} */ (this.configuration))).value || null;
            // state.disabled ? this.disable({onlySelf: true, emitEvent: false}) :
            //         this.enable({onlySelf: true, emitEvent: false});
        };
        this.storeConfig((/** @type {?} */ (configs)));
        this._setValidators(configs.validators);
        this._setAsyncValidators(configs.asyncValidator);
        this._initObservables();
        this._applyControlState();
        this.updateValueAndValidity({ onlySelf: true, emitEvent: false });
    }
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
    setValue(value, options = {}) {
        ((/** @type {?} */ (this))).value = value;
        this.markAsDirty();
        this.updateValueAndValidity(options);
        if (_.has(((/** @type {?} */ (this.configuration))).props, ['submitOnChange']) || _.has((/** @type {?} */ (this.parent.configuration)), ['submitOnChange'])) {
            this.parent.submit(true);
        }
    }
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
    reset(value = null, options = {}) {
        this.markAsPristine(options);
        this.markAsUntouched(options);
        this._applyControlState();
        this.updateValueAndValidity(options);
    }
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
    clear(options = {}) {
        this.markAsPristine(options);
        this.markAsUntouched(options);
        ((/** @type {?} */ (this))).value = null;
        this.updateValueAndValidity(options);
    }
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
    setErrors(errors, opts = {}) {
        ((/** @type {?} */ (this))).errors = errors;
        this._updateControlsErrors(opts.emitEvent !== false);
    }
    /**
     * @return {?}
     */
    _runValidator() {
        return this.validator ? this.validator(this) : null;
    }
    /**
     * @return {?}
     */
    _cancelExistingSubscription() {
        if (this._asyncValidationSubscription) {
            this._asyncValidationSubscription.unsubscribe();
        }
    }
    /**
     * \@internal
     * @return {?}
     */
    _calculateStatus() {
        if (this.disabled)
            return DISABLED;
        if (this.errors)
            return INVALID;
        if (this.pending)
            return PENDING;
        return VALID;
    }
    /**
     * \@internal
     * @return {?}
     */
    _updateValue() {
    }
    /**
     * \@internal
     * @param {?=} opts
     * @return {?}
     */
    _updateValidity(opts = {}) {
        this._cancelExistingSubscription();
        ((/** @type {?} */ (this))).errors = this._runValidator();
        ((/** @type {?} */ (this))).status = this._calculateStatus();
        if (this.status === VALID || this.status === PENDING) {
            this._runAsyncValidator(opts.emitEvent);
        }
    }
    /**
     * \@internal
     * @return {?}
     */
    _allControlsDisabled() {
        return this.disabled;
    }
}
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
    return _.map(validators, (value, key) => {
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
    return _.isArray(asyncValidators) ? Validators.composeAsync(_.map(asyncValidators, (value, key) => value)) : asyncValidators || null;
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
class FormGroup extends AbstractControl {
    /**
     * Creates a new `FormGroup` instance.
     *
     * @param {?} formState A collection of child controls. The key for each child is the name
     * under which it is registered.
     *
     * @param {?} formConfigs
     */
    constructor(formState, formConfigs) {
        super();
        this.formState = formState;
        this.formConfigs = formConfigs;
        this._readonly = false;
        /**
         * \@description
         * Reports whether the form submission has been triggered.
         */
        this.submitted = false;
        /**
         *
         * @param controls A collection of child controls. The key for each child is the name
         * under which it is registered.
         *
         */
        this.controls = {};
        this._applyFormState = () => {
            this.readonly = _.has(this.formConfigs, ['readonly']);
        };
        this._isNotExcluded = (c) => {
            return !_.get(c.configuration, 'props.excluded') && !(_.has(this.formConfigs, ['nullExclusion']) && !c.value);
        };
        this.storeConfig((/** @type {?} */ (formConfigs)));
        this._setUpControls();
        this._initObservables();
        this.updateValueAndValidity({ onlySelf: true, emitEvent: false });
        this._applyFormState();
    }
    /**
     * @return {?}
     */
    get readonly() {
        return this._readonly;
    }
    /**
     * @param {?} status
     * @return {?}
     */
    set readonly(status) {
        this._readonly = status;
        this.updateValueAndValidity({ emitEvent: true });
    }
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
    setValue(value, options = {}) {
        _.forOwn(value, (value, name) => {
            this._throwIfControlMissing(name);
            this.controls[name].setValue(value, { onlySelf: true, emitEvent: options.emitEvent });
        });
        this.updateValueAndValidity(options);
    }
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
    reset(value = {}, options = {}) {
        _.each(_.keys(this.controls), name => {
            this.controls[name].reset(value[name], { onlySelf: true, emitEvent: options.emitEvent });
        });
        ((/** @type {?} */ (this))).submitted = false;
        this.updateValueAndValidity(options);
        if (_.has((/** @type {?} */ (this.configuration)), ['submitOnChange']))
            this.submit(true);
    }
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
    clear(options = {}) {
        _.each(_.keys(this.controls), name => {
            this.controls[name].clear({ onlySelf: true, emitEvent: options.emitEvent });
        });
        ((/** @type {?} */ (this))).submitted = false;
        this.updateValueAndValidity(options);
        if (_.has((/** @type {?} */ (this.configuration)), ['submitOnChange']))
            this.submit(true);
    }
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
    get(name = null) {
        if (name == null)
            return null;
        return this.controls.hasOwnProperty((/** @type {?} */ (name))) ? this.controls[name] : null;
    }
    /**
     * @param {?=} instant
     * @return {?}
     */
    submit(instant = false) {
        ((/** @type {?} */ (this))).submitted = true;
        this.updateValueAndValidity();
        ((/** @type {?} */ (this))).ngSubmit.emit({
            value: this.value, instant
        });
    }
    /**
     * \@internal
     * @return {?}
     */
    _calculateStatus() {
        // // if (this._allControlsDisabled()) return DISABLED;
        if (this._anyControlsHaveStatus(INVALID))
            return INVALID;
        if (this._anyControlsHaveStatus(PENDING))
            return PENDING;
        return VALID;
    }
    /**
     * \@internal
     * @return {?}
     */
    _setUpControls() {
        _.each(this.formState, (c) => {
            this.controls[c.name] = new FormControl(c);
            this.controls[c.name].setParent(this);
        });
    }
    /**
     * \@internal
     * @return {?}
     */
    _initObservables() {
        ((/** @type {?} */ (this))).valueChanges = new EventEmitter();
        ((/** @type {?} */ (this))).statusChanges = new EventEmitter();
        ((/** @type {?} */ (this))).ngSubmit = new EventEmitter();
    }
    /**
     * \@internal
     * @return {?}
     */
    _updateValue() {
        ((/** @type {?} */ (this))).value = this._reduceValue();
    }
    /**
     * \@internal
     * @param {?=} opts
     * @return {?}
     */
    _updateValidity(opts = {}) {
        ((/** @type {?} */ (this))).status = this._calculateStatus();
    }
    /**
     * \@internal
     * @return {?}
     */
    _reduceValue() {
        /** @type {?} */
        const form_value = {};
        _.each(_.keys(this.controls), k => {
            if (this._isNotExcluded(this.controls[k])) {
                form_value[k] = this.controls[k].value;
            }
        });
        return form_value;
    }
    /**
     * \@internal
     * @return {?}
     */
    _allControlsDisabled() {
        return _.every(this.controls, (c) => c.disabled);
    }
    /**
     * \@internal
     * @param {?} status
     * @return {?}
     */
    _anyControlsHaveStatus(status) {
        return !!_.find(this.controls, ['status', status]);
    }
    /**
     * \@internal
     * @param {?} name
     * @return {?}
     */
    _throwIfControlMissing(name) {
        if (!_.keys(this.controls).length) {
            throw new Error(`
        There are no form controls registered with this group yet.  If you're using ngModel,
        you may want to check next tick (e.g. use setTimeout).
      `);
        }
        if (!this.controls[name]) {
            throw new Error(`Cannot find form control with name: ${name}.`);
        }
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FieldTemplateDirective {
    /**
     * @param {?} _vcRef
     * @param {?} _tplRef
     */
    constructor(_vcRef, _tplRef) {
        this._vcRef = _vcRef;
        this._tplRef = _tplRef;
        this.name = '';
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this._vcRef.clear();
    }
}
FieldTemplateDirective.decorators = [
    { type: Directive, args: [{
                selector: '[fieldTemplate]'
            },] }
];
/** @nocollapse */
FieldTemplateDirective.ctorParameters = () => [
    { type: ViewContainerRef },
    { type: TemplateRef }
];
FieldTemplateDirective.propDecorators = {
    name: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FormComponent {
    /**
     * @param {?} _formSvs
     * @param {?} cd
     */
    constructor(_formSvs, cd) {
        this._formSvs = _formSvs;
        this.cd = cd;
        this.submit = new EventEmitter();
        this.viewInitialized = false;
        this.parseContext = () => {
            this._formSvs.initialize(this.formGroup);
            this.controlRoster = _.keys(this.formGroup.controls);
            this.controls = _.values(this.formGroup.controls);
            if (this._subscription)
                this._subscription.unsubscribe();
            this._subscription = this.formGroup.ngSubmit.pipe(untilDestroyed(this), distinctUntilChanged()).subscribe((data) => {
                if (this.formGroup.valid || data.instant) {
                    this.submit.emit(this._formSvs.convertToMediaType(data.value, this.mediaType));
                }
            });
        };
    }
    /**
     * @return {?}
     */
    ngAfterViewChecked() {
        if (this.formGroup) {
            this.parseContext();
            this.viewInitialized = true;
            this.cd.detectChanges();
            if (!this.default_template) {
                this.default_template = this._contentVcRef.nativeElement.parentElement.children.length === 0;
            }
            this.cd.detectChanges();
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
    }
}
FormComponent.decorators = [
    { type: Component, args: [{
                selector: 'io-form',
                template: `
      <ng-container>
          <ng-template #contentVc>
              <ng-content></ng-content>
          </ng-template>

          <ng-container *ngIf="viewInitialized">

              <ng-container *ngIf="!default_template">
                  <ng-container [ngTemplateOutlet]="contentVc"></ng-container>
              </ng-container>

              <ng-container *ngIf="default_template">
                  <ng-container *ngFor="let name of controlRoster">
                      <form-control
                              [name]="name"
                              [formGroup]="formGroup"
                      >
                      </form-control>
                  </ng-container>
              </ng-container>

          </ng-container>

      </ng-container>



  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                providers: [FormService],
                styles: [`

  `]
            }] }
];
/** @nocollapse */
FormComponent.ctorParameters = () => [
    { type: FormService },
    { type: ChangeDetectorRef }
];
FormComponent.propDecorators = {
    formGroup: [{ type: Input }],
    mediaType: [{ type: Input }],
    submit: [{ type: Output }],
    _contentVcRef: [{ type: ViewChild, args: ['contentVc', { read: ElementRef },] }],
    _fieldTemplateDirList: [{ type: ContentChildren, args: [FieldTemplateDirective,] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ControlComponent$1 {
    ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///
    /**
     * @param {?} _formSvs
     * @param {?} cd
     * @param {?} _renderer
     * @param {?} _elRef
     * @param {?} _parent
     */
    constructor(_formSvs, cd, _renderer, _elRef, _parent) {
        this._formSvs = _formSvs;
        this.cd = cd;
        this._renderer = _renderer;
        this._elRef = _elRef;
        this._parent = _parent;
        ///-----------------------------------------------  Variables   -----------------------------------------------///
        this.name = '';
        this.show_feedback = true;
        this.show_label = true;
        this.parseContext = () => {
            this._checkTemplate();
            this._control = this.formGroup.get(this.name);
            this._renderer.setAttribute(this._elRef.nativeElement, 'id', this.name);
            /** @type {?} */
            const props = ((/** @type {?} */ (this._control.configuration))).props;
            if (_.has(props, ['hidden'])) {
                this._renderer.addClass(this._elRef.nativeElement, 'hidden');
            }
            if (_.has(props, ['hideLabel'])) {
                this.show_label = false;
                this._renderer.addClass(this._elRef.nativeElement, 'hide-label');
            }
            if (_.has(props, ['hideFeedback'])) {
                this.show_feedback = false;
                this._renderer.addClass(this._elRef.nativeElement, 'hide-feedback');
            }
            this.cd.detectChanges();
        };
        this._checkTemplate = () => {
            /** @type {?} */
            const templateData = this._fieldTemplateDir ? this._fieldTemplateDir : _.find(this._parent._fieldTemplateDirList.toArray(), ['name', this.name]);
            if (templateData) {
                this.fieldTemplate = templateData._tplRef;
            }
        };
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
    }
    /**
     * @return {?}
     */
    ngAfterViewChecked() {
        if (this._parent.formGroup) {
            this.formGroup = this._parent.formGroup;
            this.parseContext();
        }
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
    }
}
ControlComponent$1.decorators = [
    { type: Component, args: [{
                selector: 'form-control',
                template: `

      <ng-container *ngIf="formGroup">
          <form-label *ngIf="show_label"></form-label>

          <form-field></form-field>

          <form-feedback *ngIf="show_feedback"></form-feedback>
      </ng-container>

  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [`
      :host {
          display: grid;
          grid-template-areas: "label   field" ". feedback";
          grid-template-columns: 3fr 7fr;
          grid-template-rows: 1fr auto;
          margin-bottom: 1rem;
          height: auto;
          visibility: visible;
          z-index: 50;
      }

      :host-context(.hide-label) {
          grid-template-areas: "field" "feedback";
          grid-template-columns: 1fr;
      }

      :host-context(.hide-feedback) {
          grid-template-areas: "label   field";
          grid-template-columns: 3fr 7fr;
      }

      :host-context(.hide-label.hide-feedback) {
          grid-template-areas: "field";
      }

      :host-context(.hidden) {
          display: none !important;
      }

      form-label {
          grid-area: label;
      }

      form-field {
          grid-area: field;
      }

      form-feedback {
          grid-area: feedback;
      }
  `]
            }] }
];
/** @nocollapse */
ControlComponent$1.ctorParameters = () => [
    { type: FormService },
    { type: ChangeDetectorRef },
    { type: Renderer2 },
    { type: ElementRef },
    { type: FormComponent, decorators: [{ type: Host }] }
];
ControlComponent$1.propDecorators = {
    name: [{ type: Input }],
    formGroup: [{ type: Input }],
    _fieldTemplateDir: [{ type: ContentChild, args: [FieldTemplateDirective,] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FieldComponent {
    ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///
    /**
     * @param {?} _formSvs
     * @param {?} cd
     * @param {?} _parent
     */
    constructor(_formSvs, cd, _parent) {
        this._formSvs = _formSvs;
        this.cd = cd;
        this._parent = _parent;
        this.invalid = false;
        ///-----------------------------------------------  Main Functions   -----------------------------------------------///
        this.onChanged = e => {
            this._formSvs.getControl(this._parent.name).setValue(e);
        };
        this.onTouched = () => {
            this._formSvs.getControl(this._parent.name).markAsTouched();
        };
        this.onEntered = () => {
            // this.formSvs._onEntered()
            // if (this.name === 'password') this.focus = true;
        };
        this.parseContext = () => {
            this.control = this.formGroup.get(this._parent.name);
            this.controlConfig = (/** @type {?} */ (this.control.configuration));
            this.template = this._parent.fieldTemplate;
            this.invalid = this.control.invalid && (this.control.dirty || this.control.touched || this.formGroup.submitted);
            this.cd.detectChanges();
        };
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        // this.parseContext();
        //
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
    }
    /**
     * @return {?}
     */
    ngAfterViewChecked() {
        if (this._parent.formGroup) {
            this.formGroup = this._parent.formGroup;
            if (this._statusSubscription)
                this._statusSubscription.unsubscribe();
            if (this._submitSubscription)
                this._submitSubscription.unsubscribe();
            this._statusSubscription = this.formGroup.statusChanges.pipe(untilDestroyed(this)).subscribe(status => {
                this.parseContext();
            });
            this._submitSubscription = this.formGroup.ngSubmit.pipe(untilDestroyed(this)).subscribe(data => {
                this.parseContext();
            });
            this.parseContext();
        }
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.cd.detach();
    }
}
FieldComponent.decorators = [
    { type: Component, args: [{
                selector: 'form-field',
                template: `
      <ng-container *ngIf="formGroup">
          <ng-container
                  dynamic_field
                  [controlConfig]="controlConfig"

                  [events]="{
                            change: onChanged,
                            blur: onTouched,
                            enter: onEntered
                    }"
                  [template]="template"

                  [value]="control.value"
                  [options]="controlConfig.options"
                  [invalid]="invalid"
                  [readonly]="formGroup.readonly"
          >
          </ng-container>
      </ng-container>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [`
      :host {
          display: flex;
          width: 100%;
          height: 100%;
      }
  `]
            }] }
];
/** @nocollapse */
FieldComponent.ctorParameters = () => [
    { type: FormService },
    { type: ChangeDetectorRef },
    { type: ControlComponent$1, decorators: [{ type: Host }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SubmitDirective {
    /**
     * @param {?} _elRef
     */
    constructor(_elRef) {
        this._elRef = _elRef;
        this.disabled = false;
        this.onClick = (e) => {
            if (!this.disabled) {
                this._formGr.submit();
            }
        };
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        // console.log(this._formGr)
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        // console.log(this._formGr)
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
    }
}
SubmitDirective.decorators = [
    { type: Directive, args: [{
                selector: '[submitForm]'
            },] }
];
/** @nocollapse */
SubmitDirective.ctorParameters = () => [
    { type: ElementRef }
];
SubmitDirective.propDecorators = {
    _formGr: [{ type: Input, args: ['submitForm',] }],
    disabled: [{ type: Input }],
    onClick: [{ type: HostListener, args: ['click', ['$event'],] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class LabelComponent {
    /**
     * @param {?} _formSvs
     * @param {?} cd
     * @param {?} _parent
     */
    constructor(_formSvs, cd, _parent) {
        this._formSvs = _formSvs;
        this.cd = cd;
        this._parent = _parent;
        this.parseContext = () => {
            this.control = this.formGroup.get(this._parent.name);
            this.controlConfig = (/** @type {?} */ (this.control.configuration));
            this.label = this.controlConfig.label || _.startCase(this._parent.name);
            this.cd.detectChanges();
        };
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @return {?}
     */
    ngAfterViewChecked() {
        if (this._parent.formGroup) {
            this.formGroup = this._parent.formGroup;
            this.parseContext();
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.cd.detach();
    }
}
LabelComponent.decorators = [
    { type: Component, args: [{
                selector: 'form-label',
                template: `
      {{label}}
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [`
      :host {
          display: flex;
          align-items: center;
          color: rgba(0, 0, 0, 0.85);
          font-size: 1.6rem;
          font-weight: 700;
          position: relative
      }
  `]
            }] }
];
/** @nocollapse */
LabelComponent.ctorParameters = () => [
    { type: FormService },
    { type: ChangeDetectorRef },
    { type: ControlComponent$1, decorators: [{ type: Host }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FeedbackComponent {
    ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///
    /**
     * @param {?} _formSvs
     * @param {?} cd
     * @param {?} _parent
     */
    constructor(_formSvs, cd, _parent) {
        this._formSvs = _formSvs;
        this.cd = cd;
        this._parent = _parent;
        this.invalid = false;
        this.show_feedback = true;
        this.generate_feedback = (validator, value) => {
            // console.log(_.values(this._control.configuration.validators))
            // _.mapValues(this._control.configuration.validators, (value: any) => {
            //   feedback[validator] = _.isString(value) ? value : value.message || null;
            // });
            if (!validator)
                return null;
            switch (validator) {
                case 'required':
                    if (this._parent.name === 'confirm_password') {
                        return `You need to confirm password`;
                    }
                    return `${_.startCase(this._parent.name)}  is required`;
                case 'agreement':
                    return `You must agree to the terms and conditions before continuing!`;
                case 'email':
                    return `Invalid email address. Valid e-mail can contain only latin letters, numbers, '@' and '.'`;
                case 'email_existed':
                    return `${_.startCase(this._parent.name)} is existed! Please use another one`;
                case 'stringLength':
                    return value.minLength ? `${_.startCase(this._parent.name)} cannot be shorter than ${value.minLength}` : `${_.startCase(this._parent.name)} cannot be longer than ${value.maxLength}`;
                case 'equalTo':
                    return `Confirm password is not equal to password`;
                default:
                    return value;
            }
        };
        ///-----------------------------------------------  Main Functions   -----------------------------------------------///
        this.parseContext = () => {
            this._control = this.formGroup.get(this._parent.name);
            this.invalid = this._control.invalid && (this._control.dirty || this._control.touched || this.formGroup.submitted);
            this.error_list = _.map(this._control.errors, (value, key) => this.generate_feedback(key, value));
            this.cd.detectChanges();
        };
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @return {?}
     */
    ngAfterViewChecked() {
        if (this._parent.formGroup) {
            this.formGroup = this._parent.formGroup;
            if (this._statusSubscription)
                this._statusSubscription.unsubscribe();
            if (this._submitSubscription)
                this._submitSubscription.unsubscribe();
            this._statusSubscription = this.formGroup.statusChanges.pipe(untilDestroyed(this)).subscribe(status => {
                this.parseContext();
            });
            this._submitSubscription = this.formGroup.ngSubmit.pipe(untilDestroyed(this)).subscribe(data => {
                this.parseContext();
            });
            this.parseContext();
        }
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
    }
}
FeedbackComponent.decorators = [
    { type: Component, args: [{
                selector: 'form-feedback',
                template: `
      <ng-container *ngIf="show_feedback">
          <ng-container *ngIf="invalid">
              <ng-container *ngFor="let err of error_list">
                  <div class="feedback">{{err}}</div>
              </ng-container>

          </ng-container>
      </ng-container>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [`
      :host {
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          width: 100%;
          color: #f5222d;
          font-size: 1.2rem;
          margin-top: 0.5rem;
      }
  `]
            }] }
];
/** @nocollapse */
FeedbackComponent.ctorParameters = () => [
    { type: FormService },
    { type: ChangeDetectorRef },
    { type: ControlComponent$1, decorators: [{ type: Host }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CoreModule {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class IonarFormModule {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class IonarFormBuilder {
    constructor() {
        this.group = (formState, formConfigs) => {
            return new FormGroup(formState, formConfigs);
        };
    }
}
IonarFormBuilder.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */ IonarFormBuilder.ngInjectableDef = defineInjectable({ factory: function IonarFormBuilder_Factory() { return new IonarFormBuilder(); }, token: IonarFormBuilder, providedIn: "root" });

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