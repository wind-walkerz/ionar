import { Subject } from 'rxjs';
import uuid from 'uuid/v1';
import { untilDestroyed } from '@ionar/utility';
import { CommonModule } from '@angular/common';
import { AnimationBuilder, useAnimation } from '@angular/animations';
import { slideInLeftAnimation, slideInRightAnimation, slideOutLeftAnimation, slideOutRightAnimation } from '@ionar/animations';
import _ from 'lodash';
import { __extends, __read, __assign } from 'tslib';
import { Component, HostBinding, HostListener, Input, NgModule, ElementRef, EventEmitter, Output, ViewChild, Directive, ChangeDetectorRef, Host, Optional, SkipSelf, TemplateRef, ViewContainerRef, ContentChild, ContentChildren, ChangeDetectionStrategy, Injectable, Renderer2, ComponentFactoryResolver, defineInjectable } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FlexElement = /** @class */ (function () {
    function FlexElement() {
    }
    FlexElement.decorators = [
        { type: Component, args: [{
                    selector: 'flex',
                    template: "\n      <ng-content></ng-content>\n  ",
                    styles: ["\n      :host {\n          display: flex;\n      }\n  "]
                }] }
    ];
    return FlexElement;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ButtonComponent = /** @class */ (function () {
    ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///
    function ButtonComponent() {
        var _this = this;
        ///-----------------------------------------------  Variables   -----------------------------------------------///
        this.animated = false;
        this.disabled = false;
        this.type = '';
        this.isDisabled = false;
        this.onClick = function () {
            if (!_this.disabled) {
                _this.animated = true;
                setTimeout(function () { return _this.animated = false; }, 100);
            }
        };
    }
    /**
     * @return {?}
     */
    ButtonComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        switch (this.type) {
            case 'primary':
                this.primary_style = true;
                break;
            case 'danger':
                this.danger_style = true;
                break;
        }
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    ButtonComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        // console.log(this.disabled);
        this.isDisabled = this.disabled;
    };
    ButtonComponent.decorators = [
        { type: Component, args: [{
                    selector: 'io-btn',
                    template: "\n      <ng-content></ng-content>\n  ",
                    styles: [":host{background-color:#fff;border:1px solid #d9d9d9;border-radius:.4rem;box-shadow:0 .2rem 0 rgba(0,0,0,.015);color:rgba(0,0,0,.65);cursor:pointer;display:flex;align-items:center;justify-content:center;flex:0;font-size:1.4rem;font-weight:400;margin:0 auto;outline:0;padding:.5rem 1.5rem;position:relative;text-align:center;touch-action:manipulation;transition:.3s cubic-bezier(.645,.045,.355,1);text-shadow:0 -1px 0 rgba(0,0,0,.12);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;white-space:nowrap;height:3.2rem}:host:hover{border-color:#40a9ff;color:#40a9ff}:host:active{border-color:#096dd9;color:#096dd9}:host.disabled{cursor:not-allowed}:host-context(.primary){background-color:#1890ff;border-color:#1890ff;box-shadow:0 .2rem 0 rgba(0,0,0,.015);color:#fff}:host-context(.primary):hover{background-color:#40a9ff;border-color:#40a9ff}:host-context(.primary):active{background-color:#096dd9;border-color:#096dd9}:host-context(.danger){background-color:#f5222d;border-color:#f5222d;box-shadow:0 .2rem 0 rgba(0,0,0,.015);color:#fff}:host-context(.danger):hover{background-color:#ff5654;border-color:#ff5654}:host-context(.danger):active{background-color:#cb2d35;border-color:#cb2d35}"]
                }] }
    ];
    /** @nocollapse */
    ButtonComponent.ctorParameters = function () { return []; };
    ButtonComponent.propDecorators = {
        disabled: [{ type: Input }],
        type: [{ type: Input }],
        primary_style: [{ type: HostBinding, args: ['class.primary',] }],
        danger_style: [{ type: HostBinding, args: ['class.danger',] }],
        isDisabled: [{ type: HostBinding, args: ['class.disabled',] }],
        onClick: [{ type: HostListener, args: ['click',] }]
    };
    return ButtonComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ButtonModule = /** @class */ (function () {
    function ButtonModule() {
    }
    ButtonModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        ButtonComponent
                    ],
                    exports: [
                        ButtonComponent
                    ],
                    entryComponents: [ButtonComponent]
                },] }
    ];
    return ButtonModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ElementModule = /** @class */ (function () {
    function ElementModule() {
    }
    ElementModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        FlexElement
                    ],
                    imports: [
                        ButtonModule,
                    ],
                    exports: [
                        FlexElement,
                        ButtonModule
                    ]
                },] }
    ];
    return ElementModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ModalComponent = /** @class */ (function () {
    ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///
    function ModalComponent(eRef) {
        var _this = this;
        this.eRef = eRef;
        this.onCancel = new EventEmitter();
        this.onOk = new EventEmitter();
        this.close = new EventEmitter();
        ///-----------------------------------------------  Main Functions   -----------------------------------------------///
        this.onClose = function () {
            _this.close.emit();
        };
    }
    /**
     * @param {?} event
     * @return {?}
     */
    ModalComponent.prototype.onKeydownHandler = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.onClose();
    };
    /**
     * @return {?}
     */
    ModalComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    ModalComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
    };
    ModalComponent.decorators = [
        { type: Component, args: [{
                    selector: 'io-modal',
                    template: "<div class=\"mask\" *ngIf=\"visible\" (click)=\"onClose()\">\r\n\r\n</div>\r\n\r\n<div class=\"content\" *ngIf=\"visible\">\r\n    <ng-content></ng-content>\r\n</div>\r\n\r\n",
                    styles: [".mask{display:flex;align-items:center;justify-content:center;position:fixed;top:0;right:0;left:0;bottom:0;background-color:rgba(0,0,0,.65);height:100%;z-index:399}:host{display:flex;justify-content:center}:host .content{display:flex;flex-direction:column;position:relative;background-color:#fff;border:0;border-radius:4px;background-clip:padding-box;box-shadow:0 4px 12px rgba(0,0,0,.15);width:52rem;height:52rem;z-index:400}"]
                }] }
    ];
    /** @nocollapse */
    ModalComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    ModalComponent.propDecorators = {
        visible: [{ type: Input }],
        onCancel: [{ type: Output }],
        onOk: [{ type: Output }],
        close: [{ type: Output }],
        _maskElRef: [{ type: ViewChild, args: ['mask', { read: ElementRef },] }],
        onKeydownHandler: [{ type: HostListener, args: ['document:keydown.escape', ['$event'],] }]
    };
    return ModalComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ModalModule = /** @class */ (function () {
    function ModalModule() {
    }
    ModalModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        ModalComponent
                    ],
                    imports: [CommonModule],
                    exports: [
                        ModalComponent
                    ]
                },] }
    ];
    return ModalModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CollapsibleDirective = /** @class */ (function () {
    function CollapsibleDirective() {
        this.change$ = new Subject();
        this.collapsed = false;
        this.customToggler = false;
    }
    /**
     * @return {?}
     */
    CollapsibleDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.change$.pipe(untilDestroyed(this)).subscribe(function (collapsed) {
            _this.collapsed = collapsed;
        });
    };
    /**
     * @return {?}
     */
    CollapsibleDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
    };
    CollapsibleDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[ioCollapsible]'
                },] }
    ];
    CollapsibleDirective.propDecorators = {
        ioCollapsible: [{ type: Input }]
    };
    return CollapsibleDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ContentDirective = /** @class */ (function () {
    function ContentDirective(parent, cd, _vcRef, _templateRef) {
        this.cd = cd;
        this._vcRef = _vcRef;
        this._templateRef = _templateRef;
        this._parent = parent;
    }
    Object.defineProperty(ContentDirective.prototype, "collapsed", {
        ///-----------------------------------------------  Variables   -----------------------------------------------///
        set: 
        ///-----------------------------------------------  Variables   -----------------------------------------------///
        /**
         * @param {?} collapsed
         * @return {?}
         */
        function (collapsed) {
            if (collapsed) {
                this._vcRef.clear();
            }
            else {
                this._vcRef.createEmbeddedView(this._templateRef);
            }
        },
        enumerable: true,
        configurable: true
    });
    ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///
    ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///
    /**
     * @return {?}
     */
    ContentDirective.prototype.ngOnInit = 
    ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///
    /**
     * @return {?}
     */
    function () {
        var _this = this;
        this._vcRef.clear();
        this._parent.change$.pipe(untilDestroyed(this)).subscribe(function (collapsed) {
            _this.collapsed = collapsed;
        });
    };
    /**
     * @return {?}
     */
    ContentDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
    };
    ContentDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[collapseContent]'
                },] }
    ];
    /** @nocollapse */
    ContentDirective.ctorParameters = function () { return [
        { type: CollapsibleDirective, decorators: [{ type: Optional }, { type: Host }, { type: SkipSelf }] },
        { type: ChangeDetectorRef },
        { type: ViewContainerRef },
        { type: TemplateRef }
    ]; };
    return ContentDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ToggleDirective = /** @class */ (function () {
    function ToggleDirective(parent, cd) {
        this.cd = cd;
        this._parent = parent;
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    ToggleDirective.prototype.onClick = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        this._parent.change$.next(!this._parent.collapsed);
    };
    /**
     * @return {?}
     */
    ToggleDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this._parent.customToggler = true;
    };
    ToggleDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[collapseToggle]'
                },] }
    ];
    /** @nocollapse */
    ToggleDirective.ctorParameters = function () { return [
        { type: CollapsibleDirective, decorators: [{ type: Optional }, { type: Host }, { type: SkipSelf }] },
        { type: ChangeDetectorRef }
    ]; };
    ToggleDirective.propDecorators = {
        onClick: [{ type: HostListener, args: ['click', ['$event'],] }]
    };
    return ToggleDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CollapsibleModule = /** @class */ (function () {
    function CollapsibleModule() {
    }
    CollapsibleModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule
                    ],
                    declarations: [
                        CollapsibleDirective,
                        ContentDirective,
                        ToggleDirective
                    ],
                    exports: [
                        CollapsibleDirective,
                        ContentDirective,
                        ToggleDirective
                    ]
                },] }
    ];
    return CollapsibleModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var TabLabelComponent = /** @class */ (function () {
    function TabLabelComponent() {
    }
    /**
     * @return {?}
     */
    TabLabelComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (this.template) {
            this._vcRef.clear();
            this._vcRef.createEmbeddedView(this.template);
        }
    };
    /**
     * @return {?}
     */
    TabLabelComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
    };
    TabLabelComponent.decorators = [
        { type: Component, args: [{
                    selector: 'tab-label',
                    template: "\n      <ng-template #tpl>\n          <ng-content></ng-content>\n      </ng-template>\n\n      <ng-container *ngIf=\"text\">\n          {{text}}\n      </ng-container>\n      <ng-container #vcRef></ng-container>\n  "
                }] }
    ];
    /** @nocollapse */
    TabLabelComponent.ctorParameters = function () { return []; };
    TabLabelComponent.propDecorators = {
        text: [{ type: Input }],
        template: [{ type: Input }],
        _templateRef: [{ type: ViewChild, args: ['tpl', { read: TemplateRef },] }],
        _vcRef: [{ type: ViewChild, args: ['vcRef', { read: ViewContainerRef },] }]
    };
    return TabLabelComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var TabContentComponent = /** @class */ (function () {
    function TabContentComponent() {
        var _this = this;
        this.createView = function () {
            if (_this.template) {
                _this._vcRef.clear();
                _this._vcRef.createEmbeddedView(_this.template);
            }
        };
    }
    /**
     * @return {?}
     */
    TabContentComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.createView();
    };
    /**
     * @return {?}
     */
    TabContentComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    TabContentComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        this.createView();
    };
    TabContentComponent.decorators = [
        { type: Component, args: [{
                    selector: 'tab-content',
                    template: "\n      <ng-template #content>\n          <ng-content></ng-content>\n      </ng-template>\n    \n    <ng-container #vcRef>\n        \n    </ng-container>\n  "
                }] }
    ];
    /** @nocollapse */
    TabContentComponent.ctorParameters = function () { return []; };
    TabContentComponent.propDecorators = {
        template: [{ type: Input }],
        _templateRef: [{ type: ViewChild, args: ['content', { read: TemplateRef },] }],
        _vcRef: [{ type: ViewChild, args: ['vcRef', { read: ViewContainerRef },] }]
    };
    return TabContentComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var TabComponent = /** @class */ (function () {
    function TabComponent() {
        this.active = false;
    }
    /**
     * @return {?}
     */
    TabComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (!this.label && !this._labelComp) {
            throw new Error("Missing Tab's label");
        }
        if ((this._labelComp && !this._contentComp) || (!this._labelComp && this._contentComp))
            throw new Error("Missing " + ((!this._labelComp && this._contentComp) ? "<tab-label></tab-label>" : "<tab-content></tab-content>"));
    };
    /**
     * @return {?}
     */
    TabComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
    };
    TabComponent.decorators = [
        { type: Component, args: [{
                    selector: 'tab',
                    template: "\n      <ng-template #tab>\n          <ng-content></ng-content>\n      </ng-template>\n  "
                }] }
    ];
    /** @nocollapse */
    TabComponent.ctorParameters = function () { return []; };
    TabComponent.propDecorators = {
        label: [{ type: Input }],
        _tabTemplateRef: [{ type: ViewChild, args: ['tab', { read: TemplateRef },] }],
        _labelComp: [{ type: ContentChild, args: [TabLabelComponent,] }],
        _contentComp: [{ type: ContentChild, args: [TabContentComponent,] }]
    };
    return TabComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var TabsComponent = /** @class */ (function () {
    function TabsComponent(cd) {
        var _this = this;
        this.cd = cd;
        this.selectTab = function (selected_index) {
            _.each(_this.contentList.toArray(), function (tab, i) {
                tab.active = i === selected_index;
            });
            _this.activeTab = _.find(_this.contentList.toArray(), ['active', true]);
        };
    }
    /**
     * @return {?}
     */
    TabsComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    TabsComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this.activeTab = this.contentList.toArray()[0];
        this.contentList.toArray()[0].active = true;
        this.cd.detectChanges();
    };
    TabsComponent.decorators = [
        { type: Component, args: [{
                    selector: 'io-tabs',
                    template: "\n      <ng-template>\n          <ng-content></ng-content>\n      </ng-template>\n\n      <div class=\"label_container\">\n          <ng-container *ngFor=\"let tab of contentList; let i =index\">\n              <tab-label\n                      [ngClass]=\"tab.active && 'active'\"\n                      (click)=\"selectTab(i)\"\n                      [text]=\"tab.label\"\n                      [template]=\"tab._labelComp?._templateRef\"\n              >\n              </tab-label>\n          </ng-container>\n      </div>\n      \n      <tab-content\n              *ngIf=\"activeTab\"\n              [template]=\"activeTab._contentComp ? activeTab._contentComp._templateRef : activeTab._tabTemplateRef\"\n      >\n      </tab-content>\n    \n\n  ",
                    styles: [":host{display:flex;flex-direction:column;position:relative}:host ::ng-deep .label_container{display:flex}:host ::ng-deep .label_container tab-label{cursor:pointer}"]
                }] }
    ];
    /** @nocollapse */
    TabsComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef }
    ]; };
    TabsComponent.propDecorators = {
        contentList: [{ type: ContentChildren, args: [TabComponent,] }]
    };
    return TabsComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var TabsModule = /** @class */ (function () {
    function TabsModule() {
    }
    TabsModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule],
                    declarations: [TabsComponent, TabComponent, TabLabelComponent, TabContentComponent
                    ],
                    exports: [TabsComponent, TabComponent, TabLabelComponent, TabContentComponent
                    ]
                },] }
    ];
    return TabsModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var MenuComponent = /** @class */ (function () {
    function MenuComponent(elRef) {
        this.elRef = elRef;
        ///-----------------------------------------------  Variables   -----------------------------------------------///
        this.visible = false;
        this.visibilityChange$ = new Subject();
        this.change = new EventEmitter();
    }
    /**
     * @param {?} e
     * @return {?}
     */
    MenuComponent.prototype.onClick = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        if (e.target instanceof HTMLElement)
            this.change.emit();
    };
    ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///
    ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///
    /**
     * @return {?}
     */
    MenuComponent.prototype.ngOnInit = 
    ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///
    /**
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
        this.visibilityChange$.next(this.visible);
    };
    /**
     * @return {?}
     */
    MenuComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
    };
    MenuComponent.decorators = [
        { type: Component, args: [{
                    selector: 'dropdown-menu',
                    template: "\n      <ng-content></ng-content>",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ["\n      :host {\n          display: flex;\n          flex-shrink: 0;\n      }\n  "]
                }] }
    ];
    /** @nocollapse */
    MenuComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    MenuComponent.propDecorators = {
        visible: [{ type: Input }],
        template: [{ type: Input }],
        tplRef: [{ type: ViewChild, args: ['tpl',] }],
        vcRef: [{ type: ViewChild, args: ['vc', { read: ViewContainerRef },] }],
        change: [{ type: Output }],
        onClick: [{ type: HostListener, args: ['click', ['$event'],] }]
    };
    return MenuComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ToggleComponent = /** @class */ (function () {
    function ToggleComponent() {
        ///-----------------------------------------------  Variables   -----------------------------------------------///
        this.change = new EventEmitter();
    }
    /**
     * @param {?} e
     * @return {?}
     */
    ToggleComponent.prototype.onClick = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        this.change.emit();
    };
    ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///
    ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///
    /**
     * @return {?}
     */
    ToggleComponent.prototype.ngOnInit = 
    ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///
    /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    ToggleComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
    };
    ToggleComponent.decorators = [
        { type: Component, args: [{
                    selector: 'dropdown-toggle',
                    template: "\n      <ng-content></ng-content>",
                    styles: ["\n      :host {\n          display: flex;\n          flex-shrink: 0;\n      }\n  "]
                }] }
    ];
    /** @nocollapse */
    ToggleComponent.ctorParameters = function () { return []; };
    ToggleComponent.propDecorators = {
        change: [{ type: Output }],
        onClick: [{ type: HostListener, args: ['click', ['$event'],] }]
    };
    return ToggleComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DropdownComponent = /** @class */ (function () {
    function DropdownComponent(_elRef, cd) {
        this._elRef = _elRef;
        this.cd = cd;
        ///-----------------------------------------------  Variables   -----------------------------------------------///
        this.viewInitialized = false;
        this.visible = false;
        this.showDropdownMenu = false;
    }
    /**
     * @param {?} e
     * @return {?}
     */
    DropdownComponent.prototype.onClickOutside = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        if (!this._elRef.nativeElement.contains(e.target) && !this._menuComp.elRef.nativeElement.contains(e.target)) {
            this.showDropdownMenu = false;
        }
    };
    ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///
    ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///
    /**
     * @return {?}
     */
    DropdownComponent.prototype.ngOnInit = 
    ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///
    /**
     * @return {?}
     */
    function () {
        var _this = this;
        this._menuComp.visibilityChange$.pipe(untilDestroyed(this)).subscribe(function (visible) {
            _this.visible = visible;
            _this.cd.markForCheck();
        });
    };
    /**
     * @return {?}
     */
    DropdownComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.viewInitialized = true;
        this._toggleComp.change.subscribe(function () {
            _this.showDropdownMenu = !_this.showDropdownMenu;
        });
        this._menuComp.change.subscribe(function () {
            _this.showDropdownMenu = !_this.showDropdownMenu;
        });
        this.cd.detectChanges();
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    DropdownComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
    };
    /**
     * @return {?}
     */
    DropdownComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
    };
    DropdownComponent.decorators = [
        { type: Component, args: [{
                    selector: 'io-dropdown',
                    template: "\n      <ng-content select=\"dropdown-toggle\"></ng-content>\n\n      <ng-container *ngIf=\"showDropdownMenu && visible\">\n          <ng-content select=\"dropdown-menu\"></ng-content>\n      </ng-container>\n  ",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    DropdownComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ChangeDetectorRef }
    ]; };
    DropdownComponent.propDecorators = {
        _menuComp: [{ type: ContentChild, args: [MenuComponent,] }],
        _toggleComp: [{ type: ContentChild, args: [ToggleComponent,] }],
        onClickOutside: [{ type: HostListener, args: ['document:click', ['$event'],] }]
    };
    return DropdownComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DropdownModule = /** @class */ (function () {
    function DropdownModule() {
    }
    DropdownModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule
                    ],
                    declarations: [
                        DropdownComponent,
                        DropdownComponent,
                        ToggleComponent, MenuComponent
                    ],
                    exports: [DropdownComponent, ToggleComponent, MenuComponent]
                },] }
    ];
    return DropdownModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var IonarLoadingService = /** @class */ (function () {
    function IonarLoadingService() {
        var _this = this;
        this.visibilityChange$ = new Subject();
        this.isDisabled = false;
        this.show = function () { return !_this.isDisabled && _this.visibilityChange$.next(true); };
        this.hide = function () { return !_this.isDisabled && _this.visibilityChange$.next(false); };
        this.disabled = function () { return _this.isDisabled = true; };
        this.enabled = function () { return _this.isDisabled = false; };
    }
    IonarLoadingService.decorators = [
        { type: Injectable }
    ];
    return IonarLoadingService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var LoadingComponent = /** @class */ (function () {
    function LoadingComponent(_loadingSvs, cd) {
        this._loadingSvs = _loadingSvs;
        this.cd = cd;
        ///-----------------------------------------------  Variables   -----------------------------------------------///
        this.visible = false;
    }
    ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///
    ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///
    /**
     * @return {?}
     */
    LoadingComponent.prototype.ngOnInit = 
    ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///
    /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    LoadingComponent.prototype.ngAfterViewChecked = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this._subscription)
            this._subscription.unsubscribe();
        this._subscription = this._loadingSvs.visibilityChange$.pipe(untilDestroyed(this)).subscribe(function (visible) {
            _this.visible = visible;
            _this.cd.markForCheck();
        });
    };
    /**
     * @return {?}
     */
    LoadingComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
    };
    LoadingComponent.decorators = [
        { type: Component, args: [{
                    selector: 'io-loading',
                    template: "<div class=\"content\" *ngIf=\"visible\">\r\n    <sk-circle></sk-circle>\r\n</div>",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: [":host .content{background-color:rgba(51,51,51,.8);display:flex;align-items:center;justify-content:center;position:fixed;top:0;left:0;right:0;bottom:0;z-index:100!important}"]
                }] }
    ];
    /** @nocollapse */
    LoadingComponent.ctorParameters = function () { return [
        { type: IonarLoadingService },
        { type: ChangeDetectorRef }
    ]; };
    return LoadingComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SpinnerComponent = /** @class */ (function () {
    function SpinnerComponent() {
        this.visible = true;
        this.baseClass = 'chasing-dots-spinner';
        this.childClass = 'dot';
        this.numItems = 2;
        this.delay = 0;
        this.color = '#333';
    }
    Object.defineProperty(SpinnerComponent.prototype, "isRunning", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            var _this = this;
            if (!value) {
                this.cancel();
                this.visible = false;
                return;
            }
            if (this.timeout) {
                return;
            }
            this.timeout = setTimeout(function () {
                _this.visible = true;
                _this.cancel();
            }, this.delay);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @private
     * @return {?}
     */
    SpinnerComponent.prototype.cancel = /**
     * @private
     * @return {?}
     */
    function () {
        clearTimeout(this.timeout);
        this.timeout = undefined;
    };
    Object.defineProperty(SpinnerComponent.prototype, "items", {
        get: /**
         * @return {?}
         */
        function () {
            return Array(this.numItems);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    SpinnerComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.cancel();
    };
    SpinnerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'spinner',
                    template: ''
                }] }
    ];
    SpinnerComponent.propDecorators = {
        delay: [{ type: Input }],
        color: [{ type: Input }],
        isRunning: [{ type: Input }]
    };
    return SpinnerComponent;
}());
/** @type {?} */
var SpinnerTemplate = "\n  <div [hidden]=\"!visible\" [ngClass]=\"baseClass\">\n      <div *ngFor=\"let item of items; let i = index\" [ngClass]=\"childClass + (i+1)\" [style.backgroundColor]=\"color\"></div>\n  </div>\n";

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CircleComponent = /** @class */ (function (_super) {
    __extends(CircleComponent, _super);
    function CircleComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.baseClass = 'circle-spinner';
        _this.childClass = 'circle';
        _this.numItems = 12;
        return _this;
    }
    CircleComponent.decorators = [
        { type: Component, args: [{
                    selector: 'sk-circle',
                    template: SpinnerTemplate,
                    styles: ["\n      .circle-spinner {\n          position: relative;\n          margin: 25px auto;\n          width: 5rem;\n          height: 5rem;\n      }\n\n      .circle-spinner > div {\n          position: absolute;\n          top: 0;\n          left: 0;\n          width: 100%;\n          height: 100%;\n          background-color: transparent !important;\n      }\n\n      .circle-spinner div:before {\n          display: block;\n          margin: 0 auto;\n          width: 15%;\n          height: 15%;\n          border-radius: 100%;\n          background-color: white;\n          content: '';\n          -webkit-animation: sk-circleBounceDelay 1.2s infinite ease-in-out both;\n          animation: sk-circleBounceDelay 1.2s infinite ease-in-out both;\n      }\n\n      .circle-spinner .circle2 {\n          -webkit-transform: rotate(30deg);\n          -ms-transform: rotate(30deg);\n          transform: rotate(30deg);\n      }\n\n      .circle-spinner .circle3 {\n          -webkit-transform: rotate(60deg);\n          -ms-transform: rotate(60deg);\n          transform: rotate(60deg);\n      }\n\n      .circle-spinner .circle4 {\n          -webkit-transform: rotate(90deg);\n          -ms-transform: rotate(90deg);\n          transform: rotate(90deg);\n      }\n\n      .circle-spinner .circle5 {\n          -webkit-transform: rotate(120deg);\n          -ms-transform: rotate(120deg);\n          transform: rotate(120deg);\n      }\n\n      .circle-spinner .circle6 {\n          -webkit-transform: rotate(150deg);\n          -ms-transform: rotate(150deg);\n          transform: rotate(150deg);\n      }\n\n      .circle-spinner .circle7 {\n          -webkit-transform: rotate(180deg);\n          -ms-transform: rotate(180deg);\n          transform: rotate(180deg);\n      }\n\n      .circle-spinner .circle8 {\n          -webkit-transform: rotate(210deg);\n          -ms-transform: rotate(210deg);\n          transform: rotate(210deg);\n      }\n\n      .circle-spinner .circle9 {\n          -webkit-transform: rotate(240deg);\n          -ms-transform: rotate(240deg);\n          transform: rotate(240deg);\n      }\n\n      .circle-spinner .circle10 {\n          -webkit-transform: rotate(270deg);\n          -ms-transform: rotate(270deg);\n          transform: rotate(270deg);\n      }\n\n      .circle-spinner .circle11 {\n          -webkit-transform: rotate(300deg);\n          -ms-transform: rotate(300deg);\n          transform: rotate(300deg);\n      }\n\n      .circle-spinner .circle12 {\n          -webkit-transform: rotate(330deg);\n          -ms-transform: rotate(330deg);\n          transform: rotate(330deg);\n      }\n\n      .circle-spinner .circle2:before {\n          -webkit-animation-delay: -1.1s;\n          animation-delay: -1.1s;\n      }\n\n      .circle-spinner .circle3:before {\n          -webkit-animation-delay: -1s;\n          animation-delay: -1s;\n      }\n\n      .circle-spinner .circle4:before {\n          -webkit-animation-delay: -0.9s;\n          animation-delay: -0.9s;\n      }\n\n      .circle-spinner .circle5:before {\n          -webkit-animation-delay: -0.8s;\n          animation-delay: -0.8s;\n      }\n\n      .circle-spinner .circle6:before {\n          -webkit-animation-delay: -0.7s;\n          animation-delay: -0.7s;\n      }\n\n      .circle-spinner .circle7:before {\n          -webkit-animation-delay: -0.6s;\n          animation-delay: -0.6s;\n      }\n\n      .circle-spinner .circle8:before {\n          -webkit-animation-delay: -0.5s;\n          animation-delay: -0.5s;\n      }\n\n      .circle-spinner .circle9:before {\n          -webkit-animation-delay: -0.4s;\n          animation-delay: -0.4s;\n      }\n\n      .circle-spinner .circle10:before {\n          -webkit-animation-delay: -0.3s;\n          animation-delay: -0.3s;\n      }\n\n      .circle-spinner .circle11:before {\n          -webkit-animation-delay: -0.2s;\n          animation-delay: -0.2s;\n      }\n\n      .circle-spinner .circle12:before {\n          -webkit-animation-delay: -0.1s;\n          animation-delay: -0.1s;\n      }\n\n      @-webkit-keyframes sk-circleBounceDelay {\n          0%, 80%, 100% {\n              -webkit-transform: scale(0);\n              transform: scale(0);\n          }\n          40% {\n              -webkit-transform: scale(1);\n              transform: scale(1);\n          }\n      }\n\n      @keyframes sk-circleBounceDelay {\n          0%, 80%, 100% {\n              -webkit-transform: scale(0);\n              transform: scale(0);\n          }\n          40% {\n              -webkit-transform: scale(1);\n              transform: scale(1);\n          }\n      }\n  "]
                }] }
    ];
    return CircleComponent;
}(SpinnerComponent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var LoadingModule = /** @class */ (function () {
    function LoadingModule() {
    }
    LoadingModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule
                    ],
                    declarations: [
                        LoadingComponent,
                        SpinnerComponent,
                        CircleComponent
                    ],
                    exports: [LoadingComponent]
                },] }
    ];
    return LoadingModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var PageLinkComponent = /** @class */ (function () {
    function PageLinkComponent() {
        var _this = this;
        this.disabled = false;
        this.change = new EventEmitter();
        this.onClick = function (e) {
            if (!_this.disabled) {
                _this.change.emit();
            }
        };
    }
    ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///
    ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///
    /**
     * @return {?}
     */
    PageLinkComponent.prototype.ngOnInit = 
    ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///
    /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    PageLinkComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
    };
    PageLinkComponent.decorators = [
        { type: Component, args: [{
                    selector: 'page-link',
                    template: "<ng-template #tpl>\r\n    <ng-content></ng-content>\r\n</ng-template>\r\n\r\n<ng-container *ngIf=\"template\">\r\n    <ng-container *ngTemplateOutlet=\"template\"></ng-container>\r\n</ng-container>",
                    host: {
                        '[class.disabled]': 'disabled'
                    },
                    styles: [":host{background-color:#fff;border:1px solid #dee2e6;color:#007bff;cursor:pointer;display:flex;justify-content:center;align-items:center;margin-left:-1px;padding:1rem;transition:.3s;z-index:1}:host:hover{background-color:#e9ecef;color:#0056b3}:host.active{background-color:#007bff;border-color:#007bff;color:#fff}:host.focus{outline:0;box-shadow:0 0 0 .2rem rgba(0,123,255,.25);z-index:3}:host.disabled{cursor:not-allowed;opacity:.5}"]
                }] }
    ];
    /** @nocollapse */
    PageLinkComponent.ctorParameters = function () { return []; };
    PageLinkComponent.propDecorators = {
        directionLinks: [{ type: Input }],
        boundaryLinks: [{ type: Input }],
        disabled: [{ type: Input }],
        change: [{ type: Output }],
        template: [{ type: Input }],
        tpl: [{ type: ViewChild, args: ['tpl',] }],
        onClick: [{ type: HostListener, args: ['click', ['$event'],] }]
    };
    return PageLinkComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var PaginationComponent = /** @class */ (function () {
    function PaginationComponent(cd) {
        var _this = this;
        this.cd = cd;
        ///-----------------------------------------------  Variables   -----------------------------------------------///
        /**
         * Whether to disable buttons from user input
         */
        this.disabled = false;
        /**
         *  Whether to show the "First" and "Last" page links
         */
        this.boundary = false;
        /**
         *  Whether to show the "Next" and "Previous" page links
         */
        this.direction = true;
        /**
         *  Whether to show ellipsis symbols and first/last page numbers when maxSize > number of pages
         */
        this.ellipses = true;
        /**
         *  Whether to rotate pages when maxPage > number of pages.
         *  Current page will be in the middle
         */
        this.rotate = true;
        /**
         *  Number of items in collection.
         */
        this.total = 0;
        /**
         *  Current page. Page numbers start with 1
         */
        this.page = 1;
        this.change = new EventEmitter();
        this.pages = [];
        this._getTemplate = function (key, value) {
            /** @type {?} */
            var pageLinkComp;
            _.each(_this._pageLinkCompList.toArray(), function (item) {
                if (_.has(item, [key]) && _.get(item, [key]) === value) {
                    pageLinkComp = item;
                }
            });
            return pageLinkComp ? pageLinkComp.tpl : _this._getDefaultTemplate(key, value);
        };
        this._getDefaultTemplate = function (key, value) {
            switch (key + "," + value) {
                case 'boundaryLinks,first':
                    return _this._boundaryFirstDefault;
                case 'boundaryLinks,last':
                    return _this._boundaryLastDefault;
                case 'directionLinks,prev':
                    return _this._directionPrevDefault;
                case 'directionLinks,next':
                    return _this._directionNexDefault;
            }
        };
    }
    ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///
    ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///
    /**
     * @return {?}
     */
    PaginationComponent.prototype.ngOnInit = 
    ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///
    /**
     * @return {?}
     */
    function () {
        // this.controlArray = _.times(this.total, n => n + 1);
        //
        //
        // if (this.maxSize) {
        // }
        // console.log(this.visibleControls);
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    PaginationComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        this._updatePages(this.page);
    };
    /**
     * @return {?}
     */
    PaginationComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this.boundary_first = this._getTemplate('boundaryLinks', 'first');
        this.boundary_last = this._getTemplate('boundaryLinks', 'last');
        this.direction_prev = this._getTemplate('directionLinks', 'prev');
        this.direction_next = this._getTemplate('directionLinks', 'next');
        this.cd.detectChanges();
    };
    /**
     * @return {?}
     */
    PaginationComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
    };
    ///-----------------------------------------------  Main Functions  -----------------------------------------------///
    ///-----------------------------------------------  Main Functions  -----------------------------------------------///
    /**
     * @param {?} pageNumber
     * @return {?}
     */
    PaginationComponent.prototype.selectPage = 
    ///-----------------------------------------------  Main Functions  -----------------------------------------------///
    /**
     * @param {?} pageNumber
     * @return {?}
     */
    function (pageNumber) {
        this._updatePages(pageNumber);
    };
    /**
     * @private
     * @param {?} newPage
     * @return {?}
     */
    PaginationComponent.prototype._updatePages = /**
     * @private
     * @param {?} newPage
     * @return {?}
     */
    function (newPage) {
        var _a;
        // fill-in model needed to render pages
        this.pages.length = 0;
        this.pages = _.times(this.total, function (n) { return n + 1; });
        // set page within 1..max range
        this._setPageInRange(newPage);
        // apply maxSize if necessary
        if (this.maxSize > 0 && this.total > this.maxSize) {
            /** @type {?} */
            var start = 0;
            /** @type {?} */
            var end = this.total;
            // either paginating or rotating page numbers
            if (this.rotate) {
                _a = __read(this._applyRotation(), 2), start = _a[0], end = _a[1];
            }
            this.pages = this.pages.slice(start, end).concat();
            // adding ellipses
            this._applyEllipses(start, end);
        }
    };
    /**
     * Rotates page numbers based on maxSize items visible.
     * Currently selected page stays in the middle:
     *
     * Ex. for selected page = 6:
     * [5,*6*,7] for maxSize = 3
     * [4,5,*6*,7] for maxSize = 4
     */
    /**
     * Rotates page numbers based on maxSize items visible.
     * Currently selected page stays in the middle:
     *
     * Ex. for selected page = 6:
     * [5,*6*,7] for maxSize = 3
     * [4,5,*6*,7] for maxSize = 4
     * @private
     * @return {?}
     */
    PaginationComponent.prototype._applyRotation = /**
     * Rotates page numbers based on maxSize items visible.
     * Currently selected page stays in the middle:
     *
     * Ex. for selected page = 6:
     * [5,*6*,7] for maxSize = 3
     * [4,5,*6*,7] for maxSize = 4
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var start = 0;
        /** @type {?} */
        var end = this.total;
        /** @type {?} */
        var leftOffset = Math.floor(this.maxSize / 2);
        /** @type {?} */
        var rightOffset = this.maxSize % 2 === 0 ? leftOffset - 1 : leftOffset;
        //
        if (this.page <= leftOffset) {
            // very beginning, no rotation -> [0..maxSize]
            end = this.maxSize;
        }
        else if (this.total - this.page < leftOffset) {
            // very end, no rotation -> [len-maxSize..len]
            start = this.total - this.maxSize;
        }
        else {
            // rotate
            start = this.page - leftOffset - 1;
            end = this.page + rightOffset;
        }
        //
        return [start, end];
        // _.each(_.times(this.page - 1 + this.maxSize), page => {
        //   this.visibleControls.push(this.controlArray[page]);
        // });
    };
    /**
     * @private
     * @param {?} newPageNo
     * @return {?}
     */
    PaginationComponent.prototype._setPageInRange = /**
     * @private
     * @param {?} newPageNo
     * @return {?}
     */
    function (newPageNo) {
        if (newPageNo !== this.page && this.total) {
            this.page = Math.max(Math.min(newPageNo, this.total), 1);
            this.change.emit(newPageNo);
        }
    };
    /**
     * Appends ellipses and first/last page number to the displayed pages
     */
    /**
     * Appends ellipses and first/last page number to the displayed pages
     * @private
     * @param {?} start
     * @param {?} end
     * @return {?}
     */
    PaginationComponent.prototype._applyEllipses = /**
     * Appends ellipses and first/last page number to the displayed pages
     * @private
     * @param {?} start
     * @param {?} end
     * @return {?}
     */
    function (start, end) {
        if (this.ellipses) {
            if (start > 0) {
                if (start > 1) {
                    this.pages.unshift('...');
                }
                this.pages.unshift(1);
            }
            if (end < this.total) {
                if (end < (this.total - 1)) {
                    this.pages.push('...');
                }
                this.pages.push(this.total);
            }
        }
    };
    PaginationComponent.decorators = [
        { type: Component, args: [{
                    selector: 'io-pagination',
                    template: "<ng-container>\r\n    <page-link\r\n            [template]=\"boundary_first\"\r\n            [disabled]=\"page===1\"\r\n            (change)=\"selectPage(1)\"\r\n            *ngIf=\"boundary\"\r\n    ></page-link>\r\n    <page-link\r\n            [template]=\"direction_prev\"\r\n            [disabled]=\"page===1\"\r\n            (change)=\"selectPage(page - 1)\"\r\n            *ngIf=\"direction\"\r\n    ></page-link>\r\n\r\n    <ng-container *ngFor=\"let pageNumber of pages\">\r\n        <page-number\r\n                [number]=\"pageNumber\"\r\n                [currentPage]=\"this.page\"\r\n                (change)=\"selectPage($event)\"\r\n        ></page-number>\r\n    </ng-container>\r\n\r\n    <page-link\r\n            [template]=\"direction_next\"\r\n            [disabled]=\"page===total\"\r\n            (change)=\"selectPage(page + 1)\"\r\n            *ngIf=\"direction\"\r\n    ></page-link>\r\n    <page-link\r\n            [template]=\"boundary_last\"\r\n            [disabled]=\"page===total\"\r\n            (change)=\"selectPage(total)\"\r\n            *ngIf=\"boundary\"\r\n    ></page-link>\r\n</ng-container>\r\n\r\n\r\n<ng-template #boundaryFirstDefault>\r\n    <<\r\n</ng-template>\r\n<ng-template #boundaryLastDefault>\r\n    >>\r\n</ng-template>\r\n<ng-template #directionPrevDefault>\r\n    <\r\n</ng-template>\r\n<ng-template #directionNexDefault>\r\n    >\r\n</ng-template>",
                    styles: ["\n      :host {\n          display: flex;\n          justify-content: center;\n          height: auto;\n          flex-shrink: 0;\n      }\n  "]
                }] }
    ];
    /** @nocollapse */
    PaginationComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef }
    ]; };
    PaginationComponent.propDecorators = {
        disabled: [{ type: Input }],
        boundary: [{ type: Input }],
        direction: [{ type: Input }],
        ellipses: [{ type: Input }],
        rotate: [{ type: Input }],
        total: [{ type: Input }],
        maxSize: [{ type: Input }],
        page: [{ type: Input }],
        change: [{ type: Output }],
        _pageLinkCompList: [{ type: ContentChildren, args: [PageLinkComponent,] }],
        _boundaryFirstDefault: [{ type: ViewChild, args: ['boundaryFirstDefault',] }],
        _boundaryLastDefault: [{ type: ViewChild, args: ['boundaryLastDefault',] }],
        _directionPrevDefault: [{ type: ViewChild, args: ['directionPrevDefault',] }],
        _directionNexDefault: [{ type: ViewChild, args: ['directionNexDefault',] }]
    };
    return PaginationComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var PageNumberComponent = /** @class */ (function () {
    function PageNumberComponent() {
        var _this = this;
        this.number = 0;
        this.currentPage = 0;
        this.change = new EventEmitter();
        this.onClick = function (e) {
            _this.change.emit(_this.number);
        };
        this.onMouseDown = function (e) {
            _this._focusStyle = true;
        };
        this.onMouseUp = function (e) {
            setTimeout(function () {
                _this._focusStyle = false;
            }, 300);
        };
        this._activeStyle = false;
        this._focusStyle = false;
    }
    /**
     * @return {?}
     */
    PageNumberComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    PageNumberComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        this._activeStyle = this.number === this.currentPage;
    };
    PageNumberComponent.decorators = [
        { type: Component, args: [{
                    selector: 'page-number',
                    template: "\n      {{number}}\n  ",
                    styles: [":host{background-color:#fff;border:1px solid #dee2e6;color:#007bff;cursor:pointer;display:flex;justify-content:center;align-items:center;margin-left:-1px;padding:1rem;transition:.3s;z-index:1}:host:hover{background-color:#e9ecef;color:#0056b3}:host.active{background-color:#007bff;border-color:#007bff;color:#fff}:host.focus{outline:0;box-shadow:0 0 0 .2rem rgba(0,123,255,.25);z-index:3}"]
                }] }
    ];
    PageNumberComponent.propDecorators = {
        number: [{ type: Input }],
        currentPage: [{ type: Input }],
        change: [{ type: Output }],
        onClick: [{ type: HostListener, args: ['click', ['$event'],] }],
        onMouseDown: [{ type: HostListener, args: ['mousedown', ['$event'],] }],
        onMouseUp: [{ type: HostListener, args: ['mouseup', ['$event'],] }],
        _activeStyle: [{ type: HostBinding, args: ['class.active',] }],
        _focusStyle: [{ type: HostBinding, args: ['class.focus',] }]
    };
    return PageNumberComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var PaginationModule = /** @class */ (function () {
    function PaginationModule() {
    }
    PaginationModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule
                    ],
                    declarations: [
                        PaginationComponent,
                        PageNumberComponent,
                        PageLinkComponent
                    ],
                    exports: [PaginationComponent, PageLinkComponent]
                },] }
    ];
    return PaginationModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var IonarToastService = /** @class */ (function () {
    function IonarToastService() {
        var _this = this;
        this._messageList = [];
        this.newMessage$ = new Subject();
        this._duration = 2000;
        this.info = function (message, duration) {
            if (duration === void 0) { duration = _this._duration; }
            return _this.sendMessage({
                id: uuid(),
                text: message,
                type: 'info'
            }, duration);
        };
        this.success = function (message, duration) {
            if (duration === void 0) { duration = _this._duration; }
            return _this.sendMessage({
                id: uuid(),
                text: message,
                type: 'success'
            }, duration);
        };
        this.danger = function (message, duration) {
            if (duration === void 0) { duration = _this._duration; }
            return _this.sendMessage({
                id: uuid(),
                text: message,
                type: 'danger'
            }, duration);
        };
    }
    /**
     * @return {?}
     */
    IonarToastService.prototype.getMessages = /**
     * @return {?}
     */
    function () {
        return this._messageList;
    };
    /**
     * @param {?} message
     * @param {?} duration
     * @return {?}
     */
    IonarToastService.prototype.sendMessage = /**
     * @param {?} message
     * @param {?} duration
     * @return {?}
     */
    function (message, duration) {
        var _this = this;
        this._messageList = this._messageList.concat(message);
        this.newMessage$.next(this._messageList);
        setTimeout(function () { return _this.deleteMessage(message.id); }, duration);
    };
    /**
     * @param {?} id
     * @return {?}
     */
    IonarToastService.prototype.deleteMessage = /**
     * @param {?} id
     * @return {?}
     */
    function (id) {
        this._messageList = _.reject(this._messageList, ['id', id]);
        this.newMessage$.next(this._messageList);
    };
    IonarToastService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */ IonarToastService.ngInjectableDef = defineInjectable({ factory: function IonarToastService_Factory() { return new IonarToastService(); }, token: IonarToastService, providedIn: "root" });
    return IonarToastService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ToastComponent = /** @class */ (function () {
    function ToastComponent(_toast) {
        var _this = this;
        this._toast = _toast;
        ///-----------------------------------------------  Variables   -----------------------------------------------///
        this.message_list = [];
        ///-----------------------------------------------  Main Functions  -----------------------------------------------///
        this.deleteMessage = function (index) {
            _this._toast.deleteMessage(index);
        };
    }
    Object.defineProperty(ToastComponent.prototype, "_showToastContainer", {
        get: /**
         * @return {?}
         */
        function () {
            return this.message_list.length > 0;
        },
        enumerable: true,
        configurable: true
    });
    ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///
    ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///
    /**
     * @return {?}
     */
    ToastComponent.prototype.ngOnInit = 
    ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///
    /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.message_list = this._toast.getMessages();
        this._toast.newMessage$.pipe(untilDestroyed(this)).subscribe(function (message_list) {
            _this.message_list = message_list;
            _this.ngOnChanges(null);
        });
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    ToastComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (this.message_list.length > 0) ;
    };
    /**
     * @return {?}
     */
    ToastComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
    };
    ToastComponent.decorators = [
        { type: Component, args: [{
                    selector: 'io-toast',
                    template: "<ng-container *ngFor=\"let message of message_list\">\r\n    <div class=\"toast-message\" [ngClass]=\"message.type\">\r\n        {{message.text}}\r\n\r\n        <div class=\"delete\" (click)=\"deleteMessage(message.id)\">x</div>\r\n    </div>\r\n\r\n</ng-container>",
                    styles: [":host{display:none;position:fixed;top:0;right:0;padding:1.6rem 1.6rem 0 0;width:25%;z-index:90}:host .toast-message{color:#fff;padding:1rem 1.6rem;border-radius:.4rem;box-shadow:0 .4rem 1.2rem rgba(0,0,0,.15);background:#fff;line-height:1.5;position:relative;margin-bottom:1.3rem;overflow:hidden}:host .toast-message.success{background-color:#23d160}:host .toast-message.info{background-color:#209cee}:host .toast-message.danger{background-color:#ff3860}:host .toast-message .delete{background-color:rgba(10,10,10,.2);border-radius:100%;cursor:pointer;display:flex;justify-content:center;align-items:center;font-size:.7rem;pointer-events:auto;position:absolute;top:.4rem;right:.4rem;flex-shrink:0;height:1.4rem;width:1.4rem}:host .toast-message .delete:hover{background-color:rgba(10,10,10,.5)}:host-context(.show){display:block}"]
                }] }
    ];
    /** @nocollapse */
    ToastComponent.ctorParameters = function () { return [
        { type: IonarToastService }
    ]; };
    ToastComponent.propDecorators = {
        _showToastContainer: [{ type: HostBinding, args: ['class.show',] }]
    };
    return ToastComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ToastModule = /** @class */ (function () {
    function ToastModule() {
    }
    ToastModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        ToastComponent
                    ],
                    imports: [
                        CommonModule
                    ],
                    exports: [ToastComponent]
                },] }
    ];
    return ToastModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ComponentModule = /** @class */ (function () {
    function ComponentModule() {
    }
    ComponentModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        ModalModule, CollapsibleModule, TabsModule, DropdownModule, LoadingModule, PaginationModule, ToastModule
                    ],
                    exports: [
                        ModalModule, CollapsibleModule, TabsModule, DropdownModule, LoadingModule, PaginationModule, ToastModule
                    ]
                },] }
    ];
    return ComponentModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SquareDirective = /** @class */ (function () {
    function SquareDirective(_elRef, _renderer) {
        var _this = this;
        this._elRef = _elRef;
        this._renderer = _renderer;
        this.matchHeight = function (parent) {
            if (!parent)
                return;
            setTimeout(function () {
                _this._renderer.setStyle(_this._elRef.nativeElement, 'height', _this._elRef.nativeElement.offsetWidth + "px");
            }, 0);
        };
    }
    /**
     * @return {?}
     */
    SquareDirective.prototype.onResize = /**
     * @return {?}
     */
    function () {
        this.matchHeight(this._elRef.nativeElement);
    };
    /**
     * @return {?}
     */
    SquareDirective.prototype.ngAfterViewChecked = /**
     * @return {?}
     */
    function () {
        this.matchHeight(this._elRef.nativeElement);
    };
    SquareDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[square]'
                },] }
    ];
    /** @nocollapse */
    SquareDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    SquareDirective.propDecorators = {
        onResize: [{ type: HostListener, args: ['window:resize',] }]
    };
    return SquareDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ScrollDownDirective = /** @class */ (function () {
    function ScrollDownDirective(_elRef, _renderer) {
        this._elRef = _elRef;
        this._renderer = _renderer;
    }
    /**
     * @return {?}
     */
    ScrollDownDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this._elRef.nativeElement.scrollTop = this._elRef.nativeElement.scrollHeight;
    };
    /**
     * @return {?}
     */
    ScrollDownDirective.prototype.ngAfterViewChecked = /**
     * @return {?}
     */
    function () {
        this._elRef.nativeElement.scrollTop = this._elRef.nativeElement.scrollHeight;
    };
    ScrollDownDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[scroll-down]'
                },] }
    ];
    /** @nocollapse */
    ScrollDownDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    ScrollDownDirective.propDecorators = {
        active: [{ type: Input }]
    };
    return ScrollDownDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SpreadDirective = /** @class */ (function () {
    function SpreadDirective(_vcRef, _renderer, _elRef) {
        this._vcRef = _vcRef;
        this._renderer = _renderer;
        this._elRef = _elRef;
    }
    /**
     * @return {?}
     */
    SpreadDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    SpreadDirective.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        var _this = this;
        if (!this._vcRef['_data'].componentView) {
            _.forOwn(this._context, function (value, key) {
                if (!_this._elRef.nativeElement[key] || key === 'type')
                    (value instanceof Function)
                        ? _this._renderer.listen(_this._elRef.nativeElement, key, value)
                        : _this._renderer.setAttribute(_this._elRef.nativeElement, key, value);
            });
        }
    };
    SpreadDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[spread]'
                },] }
    ];
    /** @nocollapse */
    SpreadDirective.ctorParameters = function () { return [
        { type: ViewContainerRef },
        { type: Renderer2 },
        { type: ElementRef }
    ]; };
    SpreadDirective.propDecorators = {
        _context: [{ type: Input, args: ['spread',] }]
    };
    return SpreadDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var RemoveHostElementDirective = /** @class */ (function () {
    function RemoveHostElementDirective(_vcRef) {
        this._vcRef = _vcRef;
    }
    /**
     * @return {?}
     */
    RemoveHostElementDirective.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var nativeElement = this._vcRef.element.nativeElement;
        /** @type {?} */
        var parentElement = nativeElement.parentElement;
        if (parentElement) {
            // move all children out of the element
            while (nativeElement.firstChild) {
                parentElement.insertBefore(nativeElement.firstChild, nativeElement);
            }
            // remove the empty element(the host)
            parentElement.removeChild(nativeElement);
        }
    };
    RemoveHostElementDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[removeHostElement]'
                },] }
    ];
    /** @nocollapse */
    RemoveHostElementDirective.ctorParameters = function () { return [
        { type: ViewContainerRef }
    ]; };
    return RemoveHostElementDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var IonarTemplateDirective = /** @class */ (function () {
    function IonarTemplateDirective(templateRef) {
        this.templateRef = templateRef;
        this.name = '';
    }
    IonarTemplateDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[ioTemplate]'
                },] }
    ];
    /** @nocollapse */
    IonarTemplateDirective.ctorParameters = function () { return [
        { type: TemplateRef }
    ]; };
    IonarTemplateDirective.propDecorators = {
        name: [{ type: Input }],
        component: [{ type: Input }]
    };
    return IonarTemplateDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DirectiveModule = /** @class */ (function () {
    function DirectiveModule() {
    }
    DirectiveModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        SquareDirective, ScrollDownDirective, SpreadDirective, RemoveHostElementDirective, IonarTemplateDirective
                    ],
                    exports: [
                        SquareDirective, ScrollDownDirective, SpreadDirective, RemoveHostElementDirective, IonarTemplateDirective
                    ]
                },] }
    ];
    return DirectiveModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SlideDirective = /** @class */ (function () {
    function SlideDirective(tplRef) {
        this.tplRef = tplRef;
    }
    /**
     * @return {?}
     */
    SlideDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    SlideDirective.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    SlideDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
    };
    SlideDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[slide]'
                },] }
    ];
    /** @nocollapse */
    SlideDirective.ctorParameters = function () { return [
        { type: TemplateRef }
    ]; };
    return SlideDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SlideComponent = /** @class */ (function () {
    function SlideComponent(el, cd) {
        this.el = el;
        this.cd = cd;
    }
    /**
     * @return {?}
     */
    SlideComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.cd.detectChanges();
    };
    SlideComponent.decorators = [
        { type: Component, args: [{
                    selector: 'slide',
                    template: "\n      <ng-container *ngTemplateOutlet=\"template\"></ng-container>\n  ",
                    styles: ["\n      :host {\n          display: flex;\n          position: absolute;\n          flex: 1;\n          width: 100%;\n          height: 100%;\n\n      }\n  "]
                }] }
    ];
    /** @nocollapse */
    SlideComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ChangeDetectorRef }
    ]; };
    SlideComponent.propDecorators = {
        template: [{ type: Input }]
    };
    return SlideComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CarouselComponent = /** @class */ (function () {
    ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///
    function CarouselComponent(cd, vcRef, aniBuilder, resolver) {
        var _this = this;
        this.cd = cd;
        this.vcRef = vcRef;
        this.aniBuilder = aniBuilder;
        this.resolver = resolver;
        ///-----------------------------------------------  Variables   -----------------------------------------------///
        this.index = 0;
        ///-----------------------------------------------  Main Functions   -----------------------------------------------///
        this.previousSlide = function () {
            if (_this.index !== 0) {
                _this.index -= 1;
                _this.cd.markForCheck();
                /** @type {?} */
                var current_slide = _this.slideCompRef;
                /** @type {?} */
                var prev_slide = _this.slideCompRef = _this.createSlideComponent(_this.index);
                _this.createAni(prev_slide, 'entrance', 'prev');
                _this.createAni(current_slide, 'exit', 'prev');
            }
        };
        this.nextSlide = function () {
            if (_this.index !== _this.item_dir_list.toArray().length - 1) {
                _this.index += 1;
                _this.cd.markForCheck();
                /** @type {?} */
                var current_slide = _this.slideCompRef;
                /** @type {?} */
                var next_slide = _this.slideCompRef = _this.createSlideComponent(_this.index);
                _this.createAni(current_slide, 'exit', 'next');
                _this.createAni(next_slide, 'entrance', 'next');
            }
        };
        this.createSlideComponent = function (i) {
            /** @type {?} */
            var factory = _this.resolver.resolveComponentFactory(SlideComponent);
            /** @type {?} */
            var compRef = _this.carousel.createComponent(factory);
            compRef.instance.template = _this.item_dir_list.toArray()[i].tplRef;
            compRef.instance.ngOnInit();
            return compRef;
        };
        this.createAni = function (compRef, entrance, direction) {
            if (entrance === void 0) { entrance = 'entrance'; }
            if (direction === void 0) { direction = 'next'; }
            /** @type {?} */
            var ani_factory = _this.aniBuilder.build(_this.getAniType(entrance, direction));
            _this.ani_player = ani_factory.create(compRef.instance.el.nativeElement);
            _this.ani_player.play();
            if (entrance === 'exit') {
                _this.ani_player.onDone(function () {
                    compRef.destroy();
                });
            }
        };
        this.getAniType = function (entrance, direction) {
            if (entrance === void 0) { entrance = 'entrance'; }
            if (direction === void 0) { direction = 'next'; }
            return (entrance === 'entrance')
                ? (direction === 'next') ? useAnimation(slideInRightAnimation, { params: { timing: 500 } }) : useAnimation(slideInLeftAnimation, { params: { timing: 500 } })
                : (direction === 'next') ? useAnimation(slideOutLeftAnimation, { params: { timing: 500 } }) : useAnimation(slideOutRightAnimation, { params: { timing: 500 } });
        };
    }
    /**
     * @return {?}
     */
    CarouselComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    CarouselComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this.slideCompRef = this.createSlideComponent(this.index);
    };
    /**
     * @return {?}
     */
    CarouselComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.slideCompRef.destroy();
    };
    CarouselComponent.decorators = [
        { type: Component, args: [{
                    selector: 'io-carousel',
                    template: "<div class=\"arrow-left\" (click)=\"previousSlide()\">\r\n   <\r\n</div>\r\n\r\n<ng-container  #carousel>\r\n\r\n</ng-container>\r\n\r\n\r\n\r\n<div class=\"arrow-right\" (click)=\"nextSlide()\">\r\n    >\r\n</div>\r\n\r\n",
                    styles: [":host{background-color:transparent;display:flex;position:relative;min-height:300px;min-width:700px}.arrow-left,.arrow-right{cursor:pointer;display:flex;align-items:center;font-size:2.5rem;position:absolute;height:100%;z-index:2;width:10rem}.arrow-left .fa-chevron-left,.arrow-left fa-chevron-right,.arrow-right .fa-chevron-left,.arrow-right fa-chevron-right{color:#000}.arrow-left{left:0}.arrow-right{right:0}"]
                }] }
    ];
    /** @nocollapse */
    CarouselComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ViewContainerRef },
        { type: AnimationBuilder },
        { type: ComponentFactoryResolver }
    ]; };
    CarouselComponent.propDecorators = {
        item_dir_list: [{ type: ContentChildren, args: [SlideDirective,] }],
        carousel: [{ type: ViewChild, args: ['carousel', { read: ViewContainerRef },] }]
    };
    return CarouselComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CarouselModule = /** @class */ (function () {
    function CarouselModule() {
    }
    CarouselModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule
                    ],
                    declarations: [
                        CarouselComponent, SlideDirective, SlideComponent
                    ],
                    exports: [
                        CarouselComponent, SlideDirective
                    ],
                    entryComponents: [SlideComponent]
                },] }
    ];
    return CarouselModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var PackagesModule = /** @class */ (function () {
    function PackagesModule() {
    }
    PackagesModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CarouselModule
                    ],
                    exports: [
                        CarouselModule
                    ]
                },] }
    ];
    return PackagesModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var isEmptyTemplate = function (element) {
    /** @type {?} */
    var nodes = element.nativeElement.childNodes;
    return _.every(nodes, function (node) {
        return (node.nodeType === 8);
    });
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var removeHost = function (element) {
    /** @type {?} */
    var nativeElement = element.nativeElement;
    /** @type {?} */
    var parentElement = nativeElement.parentElement;
    if (parentElement) {
        parentElement.removeChild(nativeElement);
    }
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DefaultContentComponent = /** @class */ (function () {
    function DefaultContentComponent(_elRef, _vcRef, cd) {
        this._elRef = _elRef;
        this._vcRef = _vcRef;
        this.cd = cd;
        this.isHostRemoved = false;
    }
    Object.defineProperty(DefaultContentComponent.prototype, "template", {
        set: /**
         * @param {?} view
         * @return {?}
         */
        function (view) {
            this._vcRef.clear();
            this._vcRef.createEmbeddedView(view.template, view.context);
        },
        enumerable: true,
        configurable: true
    });
    ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///
    ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///
    /**
     * @return {?}
     */
    DefaultContentComponent.prototype.ngOnInit = 
    ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///
    /**
     * @return {?}
     */
    function () {
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    DefaultContentComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (this.context) {
            this.template = {
                template: this._vcRef['_view'].context.defaultContent,
                context: { $implicit: this.context }
            };
            if (!this.isHostRemoved) {
                removeHost(this._elRef);
            }
            this.isHostRemoved = true;
            this.cd.detectChanges();
        }
    };
    /**
     * @return {?}
     */
    DefaultContentComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
    };
    DefaultContentComponent.decorators = [
        { type: Component, args: [{
                    selector: 'default-content',
                    template: ""
                }] }
    ];
    /** @nocollapse */
    DefaultContentComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ViewContainerRef },
        { type: ChangeDetectorRef }
    ]; };
    DefaultContentComponent.propDecorators = {
        context: [{ type: Input }]
    };
    return DefaultContentComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DefaultContentModule = /** @class */ (function () {
    function DefaultContentModule() {
    }
    DefaultContentModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        DefaultContentComponent
                    ],
                    exports: [
                        DefaultContentComponent
                    ]
                },] }
    ];
    return DefaultContentModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var IonarUI = /** @class */ (function () {
    function IonarUI() {
    }
    IonarUI.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        ComponentModule,
                        ElementModule,
                        PackagesModule,
                        DirectiveModule,
                        DefaultContentModule
                    ],
                    exports: [
                        ComponentModule,
                        ElementModule,
                        PackagesModule,
                        DirectiveModule,
                        DefaultContentModule
                    ]
                },] }
    ];
    return IonarUI;
}());

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
            _this._contextData = __assign({}, _this._contextData, properties, events);
            // this.cd.markForCheck();
        };
        this.parseTemplate = function () {
            if (!_this.template) {
                _this.template = _this._contentTemplate;
                if (_this._defaultContentComp) {
                    _this._defaultContentComp.template = {
                        template: _this._defaultTemplate,
                        context: _this.context
                    };
                }
                if (isEmptyTemplate(_this._elRef) || !_this._contentTemplate) {
                    _this.template = _this._defaultTemplate;
                    _this.cd.detectChanges();
                }
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
        template: [{ type: Input }],
        _container: [{ type: ViewChild, args: ['container', { read: ViewContainerRef },] }],
        _defaultTemplate: [{ type: ViewChild, args: ['default_template', { read: TemplateRef },] }],
        _contentTemplate: [{ type: ViewChild, args: ['content_template', { read: TemplateRef },] }],
        _defaultContentComp: [{ type: ContentChild, args: [DefaultContentComponent,] }]
    };
    return IoAbstractUI;
}());

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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { IonarUI, IonarLoadingService, IonarToastService, isEmptyTemplate, removeHost, DefaultContentComponent, IoAbstractUI, IonarTemplateDirective, CollapsibleModule as ɵd, CollapsibleDirective as ɵe, ContentDirective as ɵf, ToggleDirective as ɵg, ComponentModule as ɵa, MenuComponent as ɵo, ToggleComponent as ɵp, DropdownComponent as ɵn, DropdownModule as ɵm, LoadingComponent as ɵr, LoadingModule as ɵq, IonarLoadingService as ɵs, CircleComponent as ɵv, SpinnerComponent as ɵt, SpinnerTemplate as ɵu, ModalComponent as ɵc, ModalModule as ɵb, PageLinkComponent as ɵy, PageNumberComponent as ɵz, PaginationComponent as ɵx, PaginationModule as ɵw, TabContentComponent as ɵl, TabLabelComponent as ɵk, TabComponent as ɵj, TabsComponent as ɵi, TabsModule as ɵh, ToastComponent as ɵbb, ToastModule as ɵba, IonarToastService as ɵbc, DirectiveModule as ɵbm, RemoveHostElementDirective as ɵbq, ScrollDownDirective as ɵbo, SpreadDirective as ɵbp, SquareDirective as ɵbn, IonarTemplateDirective as ɵbr, ButtonComponent as ɵbg, ButtonModule as ɵbf, DefaultContentComponent as ɵbt, DefaultContentModule as ɵbs, ElementModule as ɵbd, FlexElement as ɵbe, CarouselComponent as ɵbj, CarouselModule as ɵbi, SlideComponent as ɵbl, SlideDirective as ɵbk, PackagesModule as ɵbh };

//# sourceMappingURL=ionar-ui.js.map