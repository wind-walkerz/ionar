import Joi from '@ionar/joi';
import { untilDestroyed } from '@ionar/utility';
import { distinctUntilChanged } from 'rxjs/operators';
import { CommonModule } from '@angular/common';
import { IoAbstractUI, IonarTemplateDirective, isEmptyTemplate, IonarUI } from '@ionar/ui';
import { EventEmitter, HostBinding, Input, Output, ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, ComponentFactoryResolver, Directive, ViewContainerRef, ContentChild, forwardRef, Host, Optional, SkipSelf, HostListener, Injectable, ContentChildren, ViewChild, NgModule, defineInjectable } from '@angular/core';
import _, { trim } from 'lodash';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
class IoFormFieldUI extends IoAbstractUI {
    constructor() {
        super(...arguments);
        this.invalid = false;
        this.disabled = false;
        this.focused = false;
        this.readonly = false;
        this.change = new EventEmitter();
        this.blur = new EventEmitter();
        this.enter = new EventEmitter();
    }
    /**
     * @return {?}
     */
    get _isFocused() {
        return this.focused;
    }
    /**
     * @return {?}
     */
    get _isInvalid() {
        return this.invalid;
    }
    /**
     * @return {?}
     */
    get _isDisabled() {
        return this.disabled;
    }
    /**
     * @return {?}
     */
    get _isReadonly() {
        return this.readonly;
    }
}
IoFormFieldUI.propDecorators = {
    invalid: [{ type: Input }],
    disabled: [{ type: Input }],
    focused: [{ type: Input }],
    readonly: [{ type: Input }],
    change: [{ type: Output }],
    blur: [{ type: Output }],
    enter: [{ type: Output }],
    _isFocused: [{ type: HostBinding, args: ['class.focus',] }],
    _isInvalid: [{ type: HostBinding, args: ['class.invalid',] }],
    _isDisabled: [{ type: HostBinding, args: ['class.disabled',] }],
    _isReadonly: [{ type: HostBinding, args: ['class.readonly',] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class InputComponent extends IoFormFieldUI {
    /**
     * @param {?} cd
     * @param {?} _elRef
     */
    constructor(cd, _elRef) {
        super(cd, _elRef);
        ///-----------------------------------------------  Variables   -----------------------------------------------///
        this.type = '';
        this.name = '';
        this.placeholder = '';
        this.value = '';
        this.range = [];
        ///-----------------------------------------------  Main Functions   -----------------------------------------------///
        this.onFocus = () => {
            // this.focused = true;
        };
        this.onBlur = () => {
            this.blur.emit();
            this.focused = false;
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
        super.ngOnInit();
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
    }
}
InputComponent.decorators = [
    { type: Component, args: [{
                selector: 'io-input',
                template: "<ng-container [ngTemplateOutlet]=\"template\" [ngTemplateOutletContext]=\"context\"></ng-container>\r\n\r\n<ng-template #default_template let-context>\r\n    <input\r\n            [spread]=\"context\"\r\n            *ngIf=\"!(context?.readonly || context?.disabled)\"\r\n    >\r\n\r\n    <span *ngIf=\"context?.readonly || context?.disabled\">\r\n          {{value}}\r\n      </span>\r\n</ng-template>\r\n\r\n<ng-template #content_template>\r\n    <ng-content></ng-content>\r\n</ng-template>\r\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [":host{background-color:transparent;border:1px solid #d9d9d9;border-radius:.4rem;color:#363636;display:flex;align-items:center;justify-content:flex-start;font-size:1.5rem;outline:0;overflow:hidden;padding:0 1rem;position:relative;transition:.3s cubic-bezier(.645,.045,.355,1);width:100%;height:auto;min-height:2.25em;max-height:5rem;max-width:100%}:host.focus{border-color:#40a9ff;outline:0;box-shadow:0 0 0 2px rgba(24,144,255,.2);border-right-width:1px!important}:host:hover{border-color:#40a9ff}:host.invalid{border-color:#f5222d}:host.invalid.focus{border-color:#ff4d4f;outline:0;box-shadow:0 0 0 2px rgba(245,34,45,.2)}:host ::ng-deep input{border:none;color:inherit;display:flex;flex:1px;font-size:inherit;font-weight:inherit;text-transform:inherit;text-decoration:inherit;outline:0;height:100%;max-width:100%;z-index:1}:host .loading_icon{width:10%}:host-context(.readonly){border:0}:host-context(.disabled){border:0}"]
            }] }
];
/** @nocollapse */
InputComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef }
];
InputComponent.propDecorators = {
    type: [{ type: Input }],
    name: [{ type: Input }],
    placeholder: [{ type: Input }],
    value: [{ type: Input }],
    range: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TextareaComponent extends IoFormFieldUI {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class UploadComponent extends IoFormFieldUI {
    ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///
    /**
     * @param {?} cd
     * @param {?} el
     */
    constructor(cd, el) {
        super(cd, el);
        ///-----------------------------------------------  Variables   -----------------------------------------------///
        this.file_list = [];
        this.change = new EventEmitter();
        this.invalid = false;
        this.type = 'input';
        this.multiple = false;
        this.title = '';
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
                template: "<ng-container *ngIf=\"type === 'dropzone'\">\r\n    <ng-container *ngTemplateOutlet=\"dropzone\"></ng-container>\r\n</ng-container>\r\n\r\n<ng-container *ngIf=\"type === 'input'\">\r\n    <ng-container *ngTemplateOutlet=\"click\"></ng-container>\r\n</ng-container>\r\n\r\n<ng-template #click>\r\n    <click\r\n            (change)=\"onFileChanged($event)\"\r\n            [template]=\"template\"\r\n            [multiple]=\"multiple\"\r\n            [title]=\"title\"\r\n    >\r\n    </click>\r\n\r\n</ng-template>\r\n\r\n<ng-template #dropzone>\r\n    <drop\r\n            (change)=\"onFileChanged($event)\"\r\n            [template]=\"template\"\r\n    >\r\n    </drop>\r\n</ng-template>\r\n\r\n\r\n<ng-template #default_template>\r\n    <ng-content></ng-content>\r\n</ng-template>\r\n",
                styles: [":host{display:flex;flex-direction:column;align-items:flex-start;width:100%;height:100%}"]
            }] }
];
/** @nocollapse */
UploadComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef }
];
UploadComponent.propDecorators = {
    change: [{ type: Output }],
    invalid: [{ type: Input }],
    type: [{ type: Input }],
    template: [{ type: Input }],
    multiple: [{ type: Input }],
    title: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MenuComponent {
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
MenuComponent.decorators = [
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
MenuComponent.ctorParameters = () => [];
MenuComponent.propDecorators = {
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
    /**
     * Initialize the AbstractControl instance.
     *
     * @param {?} state
     * @param {?} _options
     */
    constructor(state, _options) {
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
        this._getControlSchema = () => {
            return null;
        };
        /**
         * \@internal
         */
        this._updateChildError = (errors) => {
        };
        this._storeInitialOptions = (options) => {
            this._initialOptions = options;
        };
        /**
         * \@internal
         */
        this._isNotExcluded = (c) => {
            return !_.get(c.options, 'excluded') && !(_.has(this.options, ['nullExclusion']) && !c.value);
        };
        this._storeInitialOptions(_options);
        this.runAsyncValidator = () => {
        };
    }
    /**
     * @return {?}
     */
    get schema() {
        if (this.parent && this.parent.schema) {
            /** @type {?} */
            const extractChild = _.find(this.parent.schema['_inner'].children, ['key', this.name]);
            return extractChild ? extractChild.schema : null;
        }
        return this._getControlSchema();
    }
    /**
     * \@internal
     * @return {?}
     */
    _mergeSchema() {
        // const parentSchema = (<FormGroup>this.parent).schema
        // if (parentSchema && this.schema) {
        //   const currentTest = this.schema['_tests']
        //   const parentTest = this.sh
        //   _.each(currentTest, test => {
        //     const index = _.findIndex(testObject1['_tests'], ['name', test.name]);
        //     testObject1['_tests'].splice(index, 1, test);
        //
        //   });
        // }
        // (<AbstractControlOptions>this.options).schema
    }
    /**
     * @return {?}
     */
    get path() {
        return this.parent ? [...this.parent.path, this.name] : [];
    }
    /**
     * @return {?}
     */
    get name() {
        return this._name;
    }
    /**
     * @param {?} name
     * @return {?}
     */
    set name(name) {
        this._name = name;
    }
    /**
     * The parent control.
     * @return {?}
     */
    get parent() {
        return this._parent;
    }
    /**
     * @return {?}
     */
    get root() {
        return this._root;
    }
    /**
     * @return {?}
     */
    get options() {
        /** @type {?} */
        let parentConfig;
        if (this.parent && this.parent.options)
            parentConfig = Object.assign({}, this.parent.options);
        return Object.assign({}, parentConfig, this._initialOptions) || null;
    }
    /**
     * @param {?} newConfig
     * @return {?}
     */
    set options(newConfig) {
        this._options = Object.assign({}, this._options, newConfig);
        this.updateValueAndValidity({ emitEvent: true });
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
     * @param {?=} opts options options that determine how the control propagates changes
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
     * @param {?=} opts options options that determine how the control propagates changes
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
     * @param {?=} opts options options that determine how the control emits events after
     * marking is applied.
     * * `onlySelf`: When true, mark only this control. When false or not supplied,
     * marks all direct ancestors. Default is false..
     * @return {?}
     */
    markAsPristine(opts = {}) {
        ((/** @type {?} */ (this))).pristine = true;
    }
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
    setOptions(options, opts = {}) {
        this._initialOptions = options;
        this._updateControlsOptions(opts.emitEvent !== false);
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
    //
    /**
     * @param {?} parent Sets the parent of the control
     * @return {?}
     */
    setParent(parent) {
        this._parent = parent;
    }
    /**
     * @param {?} root Sets the root of the form
     * @return {?}
     */
    setRoot(root) {
        this._root = root;
    }
    /**
     * @param {?} options
     * @param {?=} opts
     * @return {?}
     */
    updateOptions(options, opts = {}) {
        this._initialOptions = Object.assign({}, this._initialOptions, options);
        this._updateControlsOptions(opts.emitEvent !== false);
    }
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
    updateValueAndValidity(opts = {}) {
        this._setInitialStatus();
        this._updateValue();
        if (this.enabled) {
            this._cancelExistingSubscription();
            ((/** @type {?} */ (this))).errors = this._runJoiValidation();
            ((/** @type {?} */ (this))).status = this._calculateStatus();
            if (this.status === VALID || this.status === PENDING) {
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
    }
    /**
     * \@internal
     * @private
     * @return {?}
     */
    _calculateStatus() {
        if (this._allControlsDisabled())
            return DISABLED;
        if (this.errors)
            return INVALID;
        if (this._anyControlsHaveStatus(INVALID))
            return INVALID;
        if (this._anyControlsHaveStatus(PENDING))
            return PENDING;
        return VALID;
    }
    /**
     * @private
     * @return {?}
     */
    _runJoiValidation() {
        if (this.schema) {
            /** @type {?} */
            const validateObject = (this.schema['_type'] !== 'object') ? { [this.name]: this.value } : this.value;
            /** @type {?} */
            const validateSchema = (this.schema['_type'] !== 'object') ? { [this.name]: this.schema } : this.schema;
            /** @type {?} */
            const result = Joi.validate(validateObject, validateSchema, {
                abortEarly: false,
                stripUnknown: true
            });
            if (!result.error)
                return null;
            return (/** @type {?} */ (result.error.details));
        }
        return null;
    }
    /**
     * @private
     * @return {?}
     */
    _cancelExistingSubscription() {
        if (this._asyncValidationSubscription) {
            this._asyncValidationSubscription.unsubscribe();
        }
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
    _coerceToJoiSchema() {
        ((/** @type {?} */ (this))).schema = ((/** @type {?} */ (this.options))).schema;
    }
    ;
    /**
     * \@internal
     * @return {?}
     */
    _updateValue() {
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
     * \@internal
     * @return {?}
     */
    _initValidators() {
        ((/** @type {?} */ (this))).runAsyncValidator = _.debounce((emitEvent) => {
            if (this.asyncValidator) {
                ((/** @type {?} */ (this))).status = PENDING;
                /** @type {?} */
                const obs = this.asyncValidator(this);
                // this._asyncValidationSubscription =
                // obs.subscribe((errors: JoiError[] | null) => {
                //   if ((this.touched || this.dirty) && this.value) {
                //     (this as { status: string }).status = INVALID;
                //     this.setErrors(errors, { emitEvent });
                //   }
                // });
            }
        }, 500);
    }
    /**
     * \@internal
     * @param {?} emitEvent
     * @return {?}
     */
    _updateControlsOptions(emitEvent) {
        ((/** @type {?} */ (this))).status = this._calculateStatus();
        if (emitEvent) {
            ((/** @type {?} */ (this.statusChanges))).emit(this.status);
        }
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
        if (this._parent) {
            this._parent._updateControlsErrors(emitEvent);
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
     * @param {?} state
     */
    constructor(state) {
        super((/** @type {?} */ (state)), (/** @type {?} */ (state.options)));
        /**
         * \@internal
         */
        this._getControlSchema = () => {
            if (((/** @type {?} */ (this.state))).schema)
                return ((/** @type {?} */ (this.state))).schema;
        };
        /**
         * Sets the async validators that are active on this control. Calling this
         * overwrites any existing async validators.
         */
        this._setAsyncValidators = (asyncValidators) => {
            // (this as { asyncValidator: ValidatorFn | null }).asyncValidator = coerceToAsyncValidator(asyncValidators);
        };
        this._applyControlState = () => {
            ((/** @type {?} */ (this.value))) = null;
            /** @type {?} */
            const properties = ((/** @type {?} */ (this.state))).props;
            if (properties) {
                ((/** @type {?} */ (this.value))) = properties.value;
            }
            // state.disabled ? this.disable({onlySelf: true, emitEvent: false}) :
            //         this.enable({onlySelf: true, emitEvent: false});
        };
        // this._coerceToJoiSchema();
        this._setAsyncValidators(state.asyncValidator);
        this._initObservables();
        this._initValidators();
        this._applyControlState();
        this.updateValueAndValidity({ onlySelf: true, emitEvent: false });
    }
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
    setValue(value, options = {}) {
        ((/** @type {?} */ (this))).value = value;
        this.markAsDirty();
        this.updateValueAndValidity(options);
        if (_.has(this.options, ['submitOnChange'])) {
            this.root.submit(true);
        }
    }
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
    reset(value = null, options = {}) {
        this.markAsPristine(options);
        this.markAsUntouched(options);
        this._applyControlState();
        this.updateValueAndValidity(options);
        if (_.has(this.options, ['submitOnChange'])) {
            this.root.submit(true);
        }
    }
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
    clear(options = {}) {
        this.markAsPristine(options);
        this.markAsUntouched(options);
        ((/** @type {?} */ (this))).value = null;
        this.updateValueAndValidity(options);
        if (_.has(this.options, ['submitOnChange'])) {
            this.root.submit(true);
        }
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
     * \@internal
     * @return {?}
     */
    _updateValue() {
    }
    /**
     * \@internal
     * @return {?}
     */
    _allControlsDisabled() {
        return this.disabled;
    }
    /**
     * \@internal
     * @param {?} status
     * @return {?}
     */
    _anyControlsHaveStatus(status) {
        return false;
    }
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
     * @param {?} state A collection of child controls. The key for each child is the name
     * under which it is registered.
     *
     * @param {?=} options
     */
    constructor(state, options) {
        super(null, (/** @type {?} */ (options)));
        /**
         * \@description
         * Reports whether the form submission has been triggered.
         */
        this.submitted = false;
        /**
         * \@internal
         */
        this._getControlSchema = () => {
            if (this.options.schema)
                return this.options.schema;
        };
        this._applyFormState = () => {
            if (!this.parent && !this.root) {
                this.setRoot(this);
            }
        };
        this._applyFormState();
        this._setUpControls(state);
        this._coerceToJoiSchema();
        this._initObservables();
        this.updateValueAndValidity({ onlySelf: true, emitEvent: false });
    }
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
    registerControl(name, control) {
        if (this.controls[name])
            return this.controls[name];
        control.setParent(this);
        this.controls[name] = control;
        return control;
    }
    /**
     * Add a control to this group.
     *
     * This method also updates the value and validity of the control.
     *
     * @param {?} name The control name to add to the collection
     * @param {?} control Provides the control for the given name
     * @return {?}
     */
    addControl(name, control) {
        this.registerControl(name, control);
        this.updateValueAndValidity();
    }
    /**
     * Remove a control from this group.
     *
     * @param {?} name The control name to remove from the collection
     * @return {?}
     */
    removeControl(name) {
        ((/** @type {?} */ (this))).controls = (/** @type {?} */ (_.omit(this.controls, [name])));
        this.updateValueAndValidity();
    }
    /**
     * Replace an existing control.
     *
     * @param {?} name The control name to replace in the collection
     * @param {?} control Provides the control for the given name
     * @return {?}
     */
    setControl(name, control) {
        ((/** @type {?} */ (this))).controls = (/** @type {?} */ (_.omit(this.controls, [name])));
        if (control)
            this.registerControl(name, control);
        this.updateValueAndValidity();
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
    setValue(formValue, options = {}) {
        _.forOwn(formValue, (value, name) => {
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
    reset(value = {}, options = {}) {
        _.forOwn(this.controls, (c, name) => {
            c.reset(value[name], { onlySelf: true, emitEvent: options.emitEvent });
        });
        ((/** @type {?} */ (this))).submitted = false;
        this.updateValueAndValidity(options);
        if (_.has(this.options, ['submitOnChange']))
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
    clear(options = {}) {
        _.forOwn(this.controls, (c, name) => {
            c.clear({ onlySelf: true, emitEvent: options.emitEvent });
        });
        ((/** @type {?} */ (this))).submitted = false;
        this.updateValueAndValidity(options);
        if (_.has(this.options, ['submitOnChange']))
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
     * @param {?} path A dot-delimited string or array of string/number values that define the path to the
     * control.
     *
     * @return {?}
     */
    get(path) {
        if (!path)
            return null;
        return _.get(this.controls, path) || null;
    }
    /**
     * @param {?=} instant
     * @return {?}
     */
    submit(instant = false) {
        if (this.root === this) {
            ((/** @type {?} */ (this))).submitted = true;
            this.updateValueAndValidity();
            this.updateChildValidity();
            ((/** @type {?} */ (this))).ngSubmit.emit({
                value: this.value, instant
            });
        }
    }
    /**
     * @return {?}
     */
    _coerceToJoiSchema() {
        // (<{ schema: JoiSchema }>this).schema = this._mergeSchema() || Joi.object().keys(this._reduceSchema());
        // (<{ schema: JoiSchema }>this).schema = this.options.schema || Joi.object().keys(this._reduceSchema());
    }
    ;
    /**
     * @return {?}
     */
    updateChildValidity() {
        _.forOwn(this.controls, (c, name) => {
            if (c instanceof FormControl)
                c.updateValueAndValidity();
            if (c instanceof FormGroup)
                c.updateChildValidity();
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
    // /** @internal */
    // _updateChildError = (errors: JoiError[]) => {
    //   _.each(errors, (err: JoiError) => {
    //     const control: AbstractControl = _.get(this.controls, err.path);
    //     if (control instanceof FormControl) {
    //       control.setErrors([err]);
    //     }
    //     if(control instanceof FormGroup) {
    //       control._r()
    //     }
    //   });
    // };
    /**
     * \@internal
     * @return {?}
     */
    _updateValue() {
        ((/** @type {?} */ (this))).value = this._reduceValue();
    }
    /**
     * \@internal
     * @return {?}
     */
    _reduceValue() {
        /** @type {?} */
        const form_value = {};
        _.forOwn(this.controls, (c, name) => {
            if (this._isNotExcluded(c)) {
                form_value[name] = c.value;
            }
        });
        return form_value;
    }
    /**
     * \@internal
     * @private
     * @param {?} controlConfig
     * @return {?}
     */
    _setUpControls(controlConfig) {
        ((/** @type {?} */ (this.controls))) = {};
        _.forOwn(controlConfig, (c, name) => {
            c.setParent(this);
            c.setRoot(this.root);
            c.name = name;
            this.controls[name] = c;
        });
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
    /**
     * \@internal
     * @return {?}
     */
    _allControlsDisabled() {
        return _.every(_.values(this.controls), (c) => c.disabled);
    }
    /**
     * \@internal
     * @param {?} status
     * @return {?}
     */
    _anyControlsHaveStatus(status) {
        return !!_.find(_.values(this.controls), ['status', status]);
    }
}

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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@description
 * A base class for directives that contain multiple registered instances of `IoControl`.
 * Only used by the forms module.
 *
 * \@publicApi
 * @abstract
 */
class ControlContainer {
    /**
     * @param {?} cd
     */
    constructor(cd) {
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
    /**
     * @return {?}
     */
    get parent() {
        return this._parent;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set parent(value) {
        if (value instanceof ControlContainer)
            this._parent = value;
    }
    /**
     * @return {?}
     */
    get name() {
        return this._name;
    }
    /**
     * @param {?} name
     * @return {?}
     */
    set name(name) {
        this._name = trim(name);
    }
    ;
    /**
     * \@description
     * The top-level FormGroup for this group if present, otherwise null.
     * @return {?}
     */
    get root() {
        return this.parent ? this.parent.root : null;
    }
    /**
     * \@description
     * Returns an array that represents the path from the top-level form to this control.
     * Each index is the string name of the control on that level.
     * @return {?}
     */
    get path() {
        return this.parent ? [...this.parent.path, this.name, 'controls'] : [this.name, 'controls'];
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
    /**
     * @return {?}
     */
    ngAfterViewInit() {
    }
}
ControlContainer.propDecorators = {
    parent: [{ type: Input, args: ['parent',] }],
    name: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@description
 * A base class that all control `FormControl`-based directives extend. It binds a `FormControl`
 * object to a DOM element.
 *
 * \@publicApi
 * @abstract
 */
class IoControl extends ControlContainer {
    /**
     * \@description
     * Tracks the `FormControl` instance bound to the directive.
     * @return {?}
     */
    get control() {
        return (/** @type {?} */ (this.root.get(this.path)));
    }
    ;
    /**
     * \@description
     * Returns an array that represents the path from the top-level form to this control.
     * Each index is the string name of the control on that level.
     * @return {?}
     */
    get path() {
        return this.parent ? [...this.parent.path, this.name] : [];
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const controlNameBinding = {
    provide: IoControl,
    useExisting: forwardRef(() => FormControlComponent)
};
class FormControlComponent extends IoControl {
    ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///
    /**
     * @param {?} parent
     * @param {?} cd
     */
    constructor(parent, cd) {
        super(cd);
        this.parent = parent;
    }
    ///-----------------------------------------------  Variables   -----------------------------------------------///
    /**
     * @return {?}
     */
    get controlTemplateDir() {
        /** @type {?} */
        const parent = (/** @type {?} */ (this.parent));
        /** @type {?} */
        const state = (/** @type {?} */ (this.control.state));
        if (this._ioTemplateDir)
            return this._ioTemplateDir;
        if (parent.ioTemplateDirList)
            return _.find(parent.ioTemplateDirList.toArray(), ['name', this.name])
                || _.find(parent.ioTemplateDirList.toArray(), ['component', state.component]);
    }
    ;
    /**
     * @return {?}
     */
    get attribute() {
        return this.name;
    }
    /**
     * @return {?}
     */
    get hiddenStyle() {
        return _.get(this.control.options, ['hidden']);
    }
    /**
     * @return {?}
     */
    get isHideLabel() {
        return _.get(this.control.options, ['hideLabel']);
    }
    /**
     * @return {?}
     */
    get isHideFeedback() {
        return _.get(this.control.options, ['hideFeedback']);
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
        super.ngOnChanges(changes);
    }
    /**
     * @return {?}
     */
    ngAfterViewChecked() {
    }
}
FormControlComponent.decorators = [
    { type: Component, args: [{
                selector: 'form-control',
                template: `
      <form-label *ngIf="!isHideLabel"></form-label>

      <form-field></form-field>

      <form-feedback *ngIf="!isHideFeedback"></form-feedback>
  `,
                providers: [controlNameBinding],
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
FormControlComponent.ctorParameters = () => [
    { type: ControlContainer, decorators: [{ type: Optional }, { type: Host }, { type: SkipSelf }] },
    { type: ChangeDetectorRef }
];
FormControlComponent.propDecorators = {
    _ioTemplateDir: [{ type: ContentChild, args: [IonarTemplateDirective,] }],
    attribute: [{ type: HostBinding, args: ['attr.id',] }],
    hiddenStyle: [{ type: HostBinding, args: ['class.hidden',] }],
    isHideLabel: [{ type: HostBinding, args: ['class.hideLabel',] }],
    isHideFeedback: [{ type: HostBinding, args: ['class.hideFeedback',] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FieldComponent {
    ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///
    /**
     * @param {?} cd
     * @param {?} parent
     */
    constructor(cd, parent) {
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
        this.onChanged = e => {
            this._parent.control.setValue(e);
        };
        this.onTouched = () => {
            this._parent.control.markAsTouched();
        };
        this.onEntered = () => {
            // this.formSvs._onEntered()
            // if (this.name === 'password') this.focus = true;
        };
        this._parent = parent;
    }
    /**
     * @return {?}
     */
    get template() {
        return this._parent.controlTemplateDir && this._parent.controlTemplateDir.templateRef;
    }
    ;
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
}
FieldComponent.decorators = [
    { type: Component, args: [{
                selector: 'form-field',
                template: `
      <ng-container *ngIf="_parent.control">
          <ng-container
                  dynamic_field
                  [name]="_parent.name"
                  [control]="_parent.control"
                  [root]="_parent.root"
                  [events]="{
                    change: onChanged,
                    blur: onTouched,
                    enter: onEntered
              }"
                  [template]="template"
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
    { type: ChangeDetectorRef },
    { type: FormControlComponent, decorators: [{ type: Optional }, { type: Host }, { type: SkipSelf }] }
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
     * @param {?} cd
     * @param {?} parent
     */
    constructor(cd, parent) {
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
    /**
     * @return {?}
     */
    get label() {
        /** @type {?} */
        const props = ((/** @type {?} */ (this._control.state))).props;
        return (props && props.label) ? props.label : _.startCase(this._parent.name);
    }
    /**
     * @private
     * @return {?}
     */
    get _control() {
        return this._parent.control;
    }
    ;
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
      {{ label}}
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
    { type: ChangeDetectorRef },
    { type: FormControlComponent, decorators: [{ type: Optional }, { type: Host }, { type: SkipSelf }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FeedbackComponent {
    ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///
    /**
     * @param {?} cd
     * @param {?} parent
     */
    constructor(cd, parent) {
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
    /**
     * @return {?}
     */
    get control() {
        return this._parent.control;
    }
    ;
    /**
     * @return {?}
     */
    get invalid() {
        return this.control.invalid && (this.control.dirty || this.control.touched || this._parent.root.submitted);
    }
    ;
    /**
     * @return {?}
     */
    ngOnInit() {
        this._parent.root.statusChanges.pipe(untilDestroyed(this)).subscribe(status => {
            this.cd.markForCheck();
        });
        this._parent.root.ngSubmit.pipe(untilDestroyed(this)).subscribe(data => {
            this.cd.markForCheck();
        });
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

      <ng-container *ngIf="invalid">
          <ng-container *ngFor="let err of control.errors">
              <div class="feedback">{{err.message}}</div>
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
    { type: ChangeDetectorRef },
    { type: FormControlComponent, decorators: [{ type: Optional }, { type: Host }, { type: SkipSelf }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
class FormArray extends AbstractControl {
    /**
     * Creates a new `FormArray` instance.
     *
     * @param {?} state
     * @param {?=} options
     */
    constructor(state, options) {
        super(null, (/** @type {?} */ (options)));
        this._coerceToJoiSchema();
        this._setUpControls(state);
        this._initObservables();
        this.updateValueAndValidity({ onlySelf: true, emitEvent: false });
    }
    /**
     * Get the `AbstractControl` at the given `index` in the array.
     *
     * @param {?} index Index in the array to retrieve the control
     * @return {?}
     */
    at(index) {
        return this.controls[index];
    }
    /**
     * Insert a new `AbstractControl` at the end of the array.
     *
     * @param {?} control Form control to be inserted
     * @return {?}
     */
    push(control) {
        control.setParent(this);
        ((/** @type {?} */ (this.controls))).push(control);
        this.updateValueAndValidity();
    }
    /**
     * Insert a new `AbstractControl` at the given `index` in the array.
     *
     * @param {?} index Index in the array to insert the control
     * @param {?} control Form control to be inserted
     * @return {?}
     */
    insert(index, control) {
        control.setParent(this);
        ((/** @type {?} */ (this.controls))).splice(index, 0, control);
        this.updateValueAndValidity();
    }
    /**
     * Remove the control at the given `index` in the array.
     *
     * @param {?} index Index in the array to remove the control
     * @return {?}
     */
    removeAt(index) {
        ((/** @type {?} */ (this.controls))).splice(index, 1);
        this.updateValueAndValidity();
    }
    /**
     * Replace an existing control.
     *
     * @param {?} index Index in the array to replace the control
     * @param {?} control The `AbstractControl` control to replace the existing control
     * @return {?}
     */
    setControl(index, control) {
        ((/** @type {?} */ (this.controls))).splice(index, 1);
        if (control) {
            control.setParent(this);
            ((/** @type {?} */ (this.controls))).splice(index, 0, control);
        }
        this.updateValueAndValidity();
    }
    /**
     * Length of the control array.
     * @return {?}
     */
    get length() {
        return ((/** @type {?} */ (this.controls))).length;
    }
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
    setValue(value, options = {}) {
        this._checkAllValuesPresent(value);
        value.forEach((newValue, index) => {
            this._throwIfControlMissing(index);
            this.at(index).setValue(newValue, { onlySelf: true, emitEvent: options.emitEvent });
        });
        this.updateValueAndValidity(options);
    }
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
    reset(value = [], options = {}) {
        // this._forEachChild((control: AbstractControl, index: number) => {
        //   control.reset(value[index], { onlySelf: true, emitEvent: options.emitEvent });
        // });
        // this.updateValueAndValidity(options);
        // this._updatePristine(options);
        // this._updateTouched(options);
        if (_.has(this.options, ['submitOnChange'])) {
            this.root.submit(true);
        }
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
    clear(options = {}) {
        _.each(this.controls, (c) => {
            c.clear({ onlySelf: true, emitEvent: options.emitEvent });
        });
        this.updateValueAndValidity(options);
        if (_.has(this.options, ['submitOnChange'])) {
            this.root.submit(true);
        }
    }
    /**
     * The aggregate value of the array, including any disabled controls.
     *
     * Reports all values regardless of disabled status.
     * For enabled controls only, the `value` property is the best way to get the value of the array.
     * @return {?}
     */
    getRawValue() {
        return ((/** @type {?} */ (this.controls))).map((control) => {
            return control instanceof FormControl ? control.value : ((/** @type {?} */ (control))).getRawValue();
        });
    }
    /**
     * \@internal
     * @param {?} controlConfig
     * @return {?}
     */
    _setUpControls(controlConfig) {
        ((/** @type {?} */ (this.controls))) = [];
        _.each(controlConfig, (c, index) => {
            c.setParent(this);
            ((/** @type {?} */ (this.controls))).push(c);
        });
    }
    /**
     * \@internal
     * @param {?} index
     * @return {?}
     */
    _throwIfControlMissing(index) {
        if (!this.controls.length) {
            throw new Error(`
        There are no form controls registered with this array yet.  If you're using ngModel,
        you may want to check next tick (e.g. use setTimeout).
      `);
        }
        if (!this.at(index)) {
            throw new Error(`Cannot find form control at index ${index}`);
        }
    }
    /**
     * \@internal
     * @return {?}
     */
    _updateValue() {
        ((/** @type {?} */ (this))).value =
            // .filter((control) => control.enabled || this.disabled)
            //   .map((control) => control.value);
            _(((/** @type {?} */ (this.controls))))
                .filter((control) => control.enabled || this.disabled)
                .map(control => control.value)
                .compact()
                .value();
    }
    /**
     * \@internal
     * @param {?} value
     * @return {?}
     */
    _checkAllValuesPresent(value) {
        // this._forEachChild((control: AbstractControl, i: number) => {
        //   if (value[i] === undefined) {
        //     throw new Error(`Must supply a value for form control at index: ${i}.`);
        //   }
        // });
    }
    /**
     * \@internal
     * @return {?}
     */
    _allControlsDisabled() {
        return _.every(_.values(this.controls), (c) => c.disabled);
    }
    /**
     * \@internal
     * @param {?} status
     * @return {?}
     */
    _anyControlsHaveStatus(status) {
        return !!_.find(_.values(this.controls), ['status', status]);
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FormService {
    constructor() {
        this.mergeControls = (controls, parent_name = null) => {
            /** @type {?} */
            let result = [];
            //
            if (_.isPlainObject(controls)) {
                _.forOwn(controls, (c, name) => {
                    /** @type {?} */
                    const control_name = parent_name ? `${parent_name}[${name}]` : name;
                    if (c instanceof FormControl)
                        result.push(control_name);
                    if (c instanceof FormGroup)
                        result = result.concat(this.mergeControls(c.controls, control_name));
                    if (c instanceof FormArray)
                        result = result.concat(this.mergeControls(c.controls, control_name));
                });
            }
            if (_.isArray(controls)) {
                _.each(controls, (c, index) => {
                    if (c instanceof FormControl)
                        result.push(`${parent_name}[${index}]`);
                    if (c instanceof FormGroup)
                        result = result.concat(this.mergeControls(c.controls, `${parent_name}[${index}]`));
                    if (c instanceof FormArray)
                        result = result.concat(this.mergeControls(c.controls, `${parent_name}[${index}]`));
                });
            }
            return result;
        };
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
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** @type {?} */
const FormErrorExamples = {
    formControlName: `
    <io-form [formGroup]="myGroup">
      <form-control [name]=" 'firstName' "></form-control>
    </io-form>

    In your class:

    constructor( private _fb: IonarFormBuilder){}

    this.myGroup = this._fb.group({
        firstName: {
            component: 'input',
            props: {
                value: 'YourName'
            },
            validators: {
                required: true
            }
        }
    });`,
    formGroupName: `
    <div [formGroup]="myGroup">
       <div formGroupName="person">
          <input formControlName="firstName">
       </div>
    </div>

    In your class:

    this.myGroup = new FormGroup({
       person: new FormGroup({ firstName: new FormControl() })
    });`,
    formArrayName: `
    <div [formGroup]="myGroup">
      <div formArrayName="cities">
        <div *ngFor="let city of cityArray.controls; index as i">
          <input [formControlName]="i">
        </div>
      </div>
    </div>

    In your class:

    this.cityArray = new FormArray([new FormControl('SF')]);
    this.myGroup = new FormGroup({
      cities: this.cityArray
    });`,
    ngModelGroup: `
    <form>
       <div ngModelGroup="person">
          <input [(ngModel)]="person.name" name="firstName">
       </div>
    </form>`,
    ngModelWithFormGroup: `
    <div [formGroup]="myGroup">
       <input formControlName="firstName">
       <input [(ngModel)]="showMoreControls" [ngModelOptions]="{standalone: true}">
    </div>
  `
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ReactiveErrors {
    /**
     * @return {?}
     */
    static controlParentException() {
        throw new Error(`formControlName must be used with a parent formGroup directive.  You'll want to add a formGroup
       directive and pass it an existing FormGroup instance (you can create one in your class).

      Example:

      ${FormErrorExamples.formControlName}`);
    }
    /**
     * @return {?}
     */
    static ngModelGroupException() {
        throw new Error(`formControlName cannot be used with an ngModelGroup parent. It is only compatible with parents
       that also have a "form" prefix: formGroupName, formArrayName, or formGroup.

       Option 1:  Update the parent to be formGroupName (reactive form strategy)

        ${FormErrorExamples.formGroupName}

        Option 2: Use ngModel instead of formControlName (template-driven strategy)

        ${FormErrorExamples.ngModelGroup}`);
    }
    /**
     * @return {?}
     */
    static missingFormException() {
        throw new Error(`formGroup expects a FormGroup instance. Please pass one in.

       Example:

       ${FormErrorExamples.formControlName}`);
    }
    /**
     * @return {?}
     */
    static groupParentException() {
        throw new Error(`formGroupName must be used with a parent formGroup directive.  You'll want to add a formGroup
      directive and pass it an existing FormGroup instance (you can create one in your class).

      Example:

      ${FormErrorExamples.formGroupName}`);
    }
    /**
     * @return {?}
     */
    static arrayParentException() {
        throw new Error(`formArrayName must be used with a parent formGroup directive.  You'll want to add a formGroup
       directive and pass it an existing FormGroup instance (you can create one in your class).

        Example:

        ${FormErrorExamples.formArrayName}`);
    }
    /**
     * @return {?}
     */
    static disabledAttrWarning() {
        console.warn(`
      It looks like you're using the disabled attribute with a reactive form directive. If you set disabled to true
      when you set up this control in your component class, the disabled attribute will actually be set in the DOM for
      you. We recommend using this approach to avoid 'changed after checked' errors.
       
      Example: 
      form = new FormGroup({
        first: new FormControl({value: 'Nancy', disabled: true}, Validators.required),
        last: new FormControl('Drew', Validators.required)
      });
    `);
    }
    /**
     * @param {?} directiveName
     * @return {?}
     */
    static ngModelWarning(directiveName) {
        console.warn(`
    It looks like you're using ngModel on the same form field as ${directiveName}. 
    Support for using the ngModel input property and ngModelChange event with 
    reactive form directives has been deprecated in Angular v6 and will be removed 
    in Angular v7.
    
    For more information on this, see our API docs here:
    https://angular.io/api/forms/${directiveName === 'formControl' ? 'FormControlDirective'
            : 'FormControlName'}#use-with-ngmodel
    `);
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const isFormControl = (c) => {
    return c instanceof FormControl;
};
/** @type {?} */
const isFormGroup = (c) => {
    return c instanceof FormGroup;
};
/** @type {?} */
const isFormArray = (c) => {
    return c instanceof FormArray;
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const formProvider = {
    provide: ControlContainer,
    useExisting: forwardRef(() => FormComponent)
};
class FormComponent extends ControlContainer {
    /**
     * @param {?} _formSvs
     * @param {?} _elRef
     * @param {?} cd
     */
    constructor(_formSvs, _elRef, cd) {
        super(cd);
        this._formSvs = _formSvs;
        this._elRef = _elRef;
        /**
         * \@description
         * Tracks the `FormGroup` bound to this components.
         */
        this.form = null;
        /**
         * \@description
         * Emits an event when the form submission has been triggered.
         */
        this.submit = new EventEmitter();
        this.isFormControl = isFormControl;
        this.isFormGroup = isFormGroup;
        this.isFormArray = isFormArray;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        super.ngOnInit();
        this._checkFormPresent();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        super.ngOnChanges(changes);
        this._checkFormPresent();
        if (!changes.form.previousValue && changes.form.currentValue) {
            this.form.ngSubmit
                .pipe(untilDestroyed(this), distinctUntilChanged())
                .subscribe((data) => {
                if (this.form.valid || data.instant) {
                    this.submit.emit(this._formSvs.convertToMediaType(data.value, this.mediaType));
                }
            });
        }
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        super.ngAfterViewInit();
        this.default_template = isEmptyTemplate(this._elRef);
        this.cd.detectChanges();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
    }
    /**
     * \@description
     * Returns the `FormGroup` bound to whole module.
     * @return {?}
     */
    get root() {
        return this.form;
    }
    /**
     * \@description
     * Returns an array representing the path to this group. Because this components
     * always lives at the top level of a form, it always an empty array.
     * @return {?}
     */
    get path() {
        return [];
    }
    /**
     * @private
     * @return {?}
     */
    _checkFormPresent() {
        if (!this.form) {
            ReactiveErrors.missingFormException();
        }
    }
}
FormComponent.decorators = [
    { type: Component, args: [{
                selector: 'io-form',
                template: `
      <ng-container>

          <ng-container *ngIf="!default_template">
              <ng-content></ng-content>
          </ng-container>


          <ng-container *ngIf="default_template">
              <ng-container
                      *ngFor="let item of form.controls | keyvalue"
                      [ngTemplateOutlet]="controlTemplate"
                      [ngTemplateOutletContext]="{$implicit: item, parent: this}"
              ></ng-container>
          </ng-container>

          <ng-template #controlTemplate let-data let-parent="parent">
              <ng-container *ngIf="isFormControl(data.value)">
                  <form-control [parent]="parent" [name]="data.key"></form-control>
              </ng-container>

              <ng-container *ngIf="isFormArray(data.value)">
                  <form-array
                          [name]="data.key"
                          [parent]="parent"
                  >

                  </form-array>
              </ng-container>

              <ng-container *ngIf="isFormGroup(data.value)">
                  <form-group
                          [name]="data.key"
                          [parent]="parent"
                  >
                  </form-group>
              </ng-container>
          </ng-template>

      </ng-container>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                providers: [FormService, formProvider],
                styles: [`

  `]
            }] }
];
/** @nocollapse */
FormComponent.ctorParameters = () => [
    { type: FormService },
    { type: ElementRef },
    { type: ChangeDetectorRef }
];
FormComponent.propDecorators = {
    form: [{ type: Input, args: ['formGroup',] }],
    mediaType: [{ type: Input }],
    submit: [{ type: Output }],
    _contentVcRef: [{ type: ViewChild, args: ['contentVc', { read: ViewContainerRef },] }],
    controlTemplate: [{ type: ViewChild, args: ['controlTemplate',] }],
    ioTemplateDirList: [{ type: ContentChildren, args: [IonarTemplateDirective,] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const formArrayProvider = {
    provide: ControlContainer,
    useExisting: forwardRef(() => FormArrayComponent)
};
class FormArrayComponent extends ControlContainer {
    ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///
    /**
     * @param {?} parent
     * @param {?} _elRef
     * @param {?} cd
     */
    constructor(parent, _elRef, cd) {
        super(cd);
        this._elRef = _elRef;
        this.parent = parent;
    }
    /**
     * @return {?}
     */
    get controlTemplate() {
        return ((/** @type {?} */ (this.parent))).controlTemplate;
    }
    /**
     * @return {?}
     */
    get attribute() {
        return this.name;
    }
    /**
     * @return {?}
     */
    get control() {
        return (/** @type {?} */ (this.root.get(this.path)));
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        super.ngAfterViewInit();
        this.isDefaultTemplate = isEmptyTemplate(this._elRef);
        this.cd.detectChanges();
    }
}
FormArrayComponent.decorators = [
    { type: Component, args: [{
                selector: 'form-array',
                exportAs: 'form-array',
                template: `
      <ng-container *ngIf="isDefaultTemplate">
          <ng-container
                  *ngFor="let item of control | keyvalue"
                  [ngTemplateOutlet]="controlTemplate"
                  [ngTemplateOutletContext]="{$implicit: item, parent: this}"
          ></ng-container>
      </ng-container>
      <ng-container *ngIf="!isDefaultTemplate">
          <ng-content></ng-content>
      </ng-container>
  `,
                providers: [formArrayProvider],
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [`

  `]
            }] }
];
/** @nocollapse */
FormArrayComponent.ctorParameters = () => [
    { type: ControlContainer, decorators: [{ type: Optional }, { type: Host }, { type: SkipSelf }] },
    { type: ElementRef },
    { type: ChangeDetectorRef }
];
FormArrayComponent.propDecorators = {
    attribute: [{ type: HostBinding, args: ['attr.id',] }],
    _controlContainers: [{ type: ContentChildren, args: [ControlContainer,] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const formGroupProvider = {
    provide: ControlContainer,
    useExisting: forwardRef(() => FormGroupComponent)
};
class FormGroupComponent extends ControlContainer {
    ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///
    /**
     * @param {?} parent
     * @param {?} _vcRef
     * @param {?} _elRef
     * @param {?} cd
     */
    constructor(parent, _vcRef, _elRef, cd) {
        super(cd);
        this._vcRef = _vcRef;
        this._elRef = _elRef;
        this.parent = parent;
    }
    /**
     * @return {?}
     */
    get controlTemplate() {
        return ((/** @type {?} */ (this.parent))).controlTemplate;
    }
    /**
     * @return {?}
     */
    get attribute() {
        return this.name;
    }
    /**
     * @return {?}
     */
    get control() {
        return (/** @type {?} */ (this.root.get(this.path)));
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        super.ngOnInit();
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        super.ngAfterViewInit();
        this.isDefaultTemplate = isEmptyTemplate(this._elRef);
        this.cd.detectChanges();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
    }
}
FormGroupComponent.decorators = [
    { type: Component, args: [{
                selector: 'form-group',
                exportAs: 'form-group',
                template: `
      <ng-container *ngIf="isDefaultTemplate">
          <ng-container
                  *ngFor="let item of control | keyvalue"
                  [ngTemplateOutlet]="controlTemplate"
                  [ngTemplateOutletContext]="{$implicit: item, parent: this}"
          ></ng-container>
      </ng-container>
      <ng-container *ngIf="!isDefaultTemplate">
          <ng-content></ng-content>
      </ng-container>
  `,
                providers: [formGroupProvider],
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [`

  `]
            }] }
];
/** @nocollapse */
FormGroupComponent.ctorParameters = () => [
    { type: ControlContainer, decorators: [{ type: Optional }, { type: Host }, { type: SkipSelf }] },
    { type: ViewContainerRef },
    { type: ElementRef },
    { type: ChangeDetectorRef }
];
FormGroupComponent.propDecorators = {
    attribute: [{ type: HostBinding, args: ['attr.id',] }],
    _controlContainerList: [{ type: ContentChildren, args: [ControlContainer,] }],
    _ioControlList: [{ type: ContentChildren, args: [IoControl,] }]
};

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
                    FieldComponent, FormControlComponent, LabelComponent, FeedbackComponent,
                    FormArrayComponent,
                    FormGroupComponent,
                    DynamicFieldDirective, SubmitDirective
                ],
                imports: [CommonModule],
                exports: [
                    FormComponent,
                    FieldComponent,
                    FormControlComponent,
                    FormArrayComponent,
                    FormGroupComponent,
                    LabelComponent, FeedbackComponent,
                    SubmitDirective
                ]
            },] }
];

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
class MenuComponent$1 {
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
MenuComponent$1.decorators = [
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
MenuComponent$1.ctorParameters = () => [];
MenuComponent$1.propDecorators = {
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
                    MenuComponent$1,
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
class ClickComponent {
    ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///
    constructor() {
        ///-----------------------------------------------  Variables   -----------------------------------------------///
        this.change = new EventEmitter();
        this.multiple = false;
        this.title = '';
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
                template: "<ng-container *ngTemplateOutlet=\"template\"></ng-container>\n<ng-container *ngIf=\"title\">\n    <p>{{title}}</p>\n</ng-container>\n\n<input\n        type=\"file\"\n        [multiple]=\"multiple\"\n        (change)=\"$event.stopPropagation();change.emit($event.target.files)\"\n>\n",
                styles: [":host{background-color:#fff;border:1px solid #d9d9d9;border-radius:.4rem;color:rgba(0,0,0,.65);cursor:pointer;display:flex;align-items:center;justify-content:center;outline:0;position:relative;transition:.3s cubic-bezier(.645,.045,.355,1);width:100%;height:4rem;max-width:20rem;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}:host:focus{border-color:#40a9ff;outline:0;box-shadow:0 0 0 2px rgba(24,144,255,.2);border-right-width:1px!important}:host:hover{border-color:#40a9ff;color:#40a9ff}:host.invalid{border-color:#f5222d}:host.invalid:focus{border-color:#ff4d4f;outline:0;box-shadow:0 0 0 2px rgba(245,34,45,.2)}input{display:flex;outline:0;opacity:0;position:absolute;width:100%;height:100%;z-index:1}"]
            }] }
];
/** @nocollapse */
ClickComponent.ctorParameters = () => [];
ClickComponent.propDecorators = {
    change: [{ type: Output }],
    template: [{ type: Input }],
    multiple: [{ type: Input }],
    title: [{ type: Input }]
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
class UploadModule {
}
UploadModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    UploadComponent,
                    ClickComponent,
                    DropComponent,
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
class InputModule {
}
InputModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    InputComponent
                ],
                imports: [
                    CommonModule,
                    IonarUI
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
class MenuModule {
}
MenuModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    MenuComponent
                ],
                imports: [
                    CommonModule
                ],
                exports: [
                    MenuComponent
                ],
                entryComponents: [MenuComponent]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TreeComponent {
    /**
     * @param {?} cd
     */
    constructor(cd) {
        this.cd = cd;
        this.name = '';
        this.value = null;
        this.change = new EventEmitter();
        this.onChange = (node) => {
            this.selected = node;
            this.change.emit(node.value);
            this.cd.detectChanges();
        };
    }
}
TreeComponent.decorators = [
    { type: Component, args: [{
                selector: 'io-tree',
                template: "<ng-container *ngFor=\"let node of options; let i = index\">\r\n    <tree-node\r\n            [data]=\"node\"\r\n            [selected]=\"selected\"\r\n            [template]=\"template\"\r\n            (change)=\"onChange($event)\"\r\n    >\r\n        <ng-content></ng-content>\r\n    </tree-node>\r\n</ng-container>\r\n\r\n\r\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [""]
            }] }
];
/** @nocollapse */
TreeComponent.ctorParameters = () => [
    { type: ChangeDetectorRef }
];
TreeComponent.propDecorators = {
    options: [{ type: Input }],
    name: [{ type: Input }],
    value: [{ type: Input }],
    template: [{ type: Input }],
    change: [{ type: Output }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NodeComponent extends IoFormFieldUI {
    /**
     * @param {?} cd
     * @param {?} el
     */
    constructor(cd, el) {
        super(cd, el);
        this.change = new EventEmitter();
        this.onChange = () => {
            if (!this.data.children) {
                this.setContext({
                    children: this.data.children,
                    label: this.data.label,
                    selected: this.data === this.selected
                });
                this.change.emit(this.data);
                this.cd.markForCheck();
            }
        };
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        super.ngOnInit();
        this.setContext({
            children: this.data.children,
            label: this.data.label,
            selected: this.data === this.selected
        });
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        super.ngOnChanges(changes);
    }
}
NodeComponent.decorators = [
    { type: Component, args: [{
                selector: 'tree-node',
                template: "<ng-container [ioCollapsible]=\"data.children ? '' : null\" *ngIf=\"viewInit\">\r\n    <div\r\n            class=\"node-item\"\r\n            collapseToggle\r\n            (click)=\"onChange()\"\r\n    >\r\n        <ng-container [ngTemplateOutlet]=\"template\" [ngTemplateOutletContext]=\"context\"></ng-container>\r\n    </div>\r\n\r\n    <ng-container *ngIf=\"data?.children\">\r\n        <div\r\n                class=\"node-children\"\r\n                *collapseContent\r\n        >\r\n            <ng-container *ngFor=\"let node of data?.children\">\r\n                <tree-node\r\n                        [data]=\"node\"\r\n                        [selected]=\"selected\"\r\n                        [template]=\"template\"\r\n                        (change)=\"change.emit($event)\"></tree-node>\r\n            </ng-container>\r\n        </div>\r\n    </ng-container>\r\n\r\n</ng-container>\r\n\r\n\r\n<ng-template let-context #default_template>\r\n\r\n    <div class=\"icon\" *ngIf=\"context?.children\">\r\n        <i class=\"fas fa-chevron-right\"></i>\r\n    </div>\r\n    <p [class.active]=\"context?.selected\" class=\"label\">{{context?.label}}</p>\r\n</ng-template>\r\n\r\n<ng-template #content_template>\r\n    <ng-content></ng-content>\r\n</ng-template>\r\n",
                styles: [":host ::ng-deep .node-item{display:flex;align-items:center}:host ::ng-deep .node-item .icon{font-size:1.2rem}:host ::ng-deep .node-item .label{margin-left:2rem}:host ::ng-deep .node-item .label.active{font-weight:700}:host ::ng-deep .node-children{margin-left:2rem}"]
            }] }
];
/** @nocollapse */
NodeComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef }
];
NodeComponent.propDecorators = {
    data: [{ type: Input }],
    selected: [{ type: Input }],
    template: [{ type: Input }],
    change: [{ type: Output }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TreeModule {
}
TreeModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    IonarUI,
                    CommonModule
                ],
                declarations: [
                    TreeComponent,
                    NodeComponent
                ],
                exports: [
                    TreeComponent
                ]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FormUiModule {
}
FormUiModule.decorators = [
    { type: NgModule, args: [{
                declarations: [],
                imports: [
                    InputModule, CheckboxModule, UploadModule, SelectModule, TextareaModule, MenuModule, TreeModule
                ],
                exports: [
                    InputModule, CheckboxModule, UploadModule, SelectModule, TextareaModule, MenuModule, TreeModule
                ],
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
                    FormUiModule
                ],
                exports: [
                    CoreModule,
                    FormUiModule
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class IonarFormBuilder {
    constructor() {
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
        this.group = (state, options) => {
            /** @type {?} */
            const controls = (/** @type {?} */ (this._reduceControls(state)));
            return new FormGroup(controls, options);
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
        this.array = (state, options) => {
            /** @type {?} */
            const controls = (/** @type {?} */ (this._reduceControls(state)));
            return new FormArray(controls, options);
        };
    }
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
    control(state) {
        return new FormControl(state);
    }
    /**
     * \@internal
     * @param {?} controlsConfig
     * @return {?}
     */
    _reduceControls(controlsConfig) {
        /** @type {?} */
        let controls;
        if (_.isPlainObject(controlsConfig)) {
            controls = {};
            _.forOwn(controlsConfig, (c, name) => {
                ((/** @type {?} */ (controls)))[name] = this._createControl(c);
            });
        }
        else {
            controls = [];
            _.each(controlsConfig, (c) => {
                ((/** @type {?} */ (controls))).push((/** @type {?} */ (this._createControl(c))));
            });
        }
        return controls;
    }
    /**
     * \@internal
     * @param {?} controlConfig
     * @return {?}
     */
    _createControl(controlConfig) {
        if (controlConfig instanceof FormControl || controlConfig instanceof FormGroup ||
            controlConfig instanceof FormArray) {
            return controlConfig;
        }
        else {
            return this.control(controlConfig);
        }
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

export { FormControl, FormGroup, FormArray, AbstractControl, IonarFormBuilder, IonarFormModule, FeedbackComponent as ɵk, FieldComponent as ɵf, LabelComponent as ɵj, FormArrayComponent as ɵm, formArrayProvider as ɵl, FormControlComponent as ɵh, controlNameBinding as ɵg, FormGroupComponent as ɵo, formGroupProvider as ɵn, FormComponent as ɵc, formProvider as ɵb, CoreModule as ɵa, DynamicFieldDirective as ɵp, SubmitDirective as ɵq, ControlContainer as ɵd, IoControl as ɵi, FormService as ɵe, CheckboxComponent as ɵw, CheckboxModule as ɵv, InputComponent as ɵt, InputModule as ɵs, MenuComponent as ɵbj, MenuModule as ɵbi, ControlComponent as ɵbd, MenuComponent$1 as ɵbe, OptionComponent as ɵbf, SelectComponent as ɵbc, SelectModule as ɵbb, TextareaComponent as ɵbh, TextareaModule as ɵbg, NodeComponent as ɵbm, TreeComponent as ɵbl, TreeModule as ɵbk, ClickComponent as ɵz, DropComponent as ɵba, UploadComponent as ɵy, UploadModule as ɵx, IoFormFieldUI as ɵu, FormUiModule as ɵr };

//# sourceMappingURL=ionar-form.js.map