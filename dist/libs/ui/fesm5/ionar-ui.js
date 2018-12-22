import { Subject } from 'rxjs';
import { untilDestroyed } from '@ionar/utility';
import { __extends, __read } from 'tslib';
import _ from 'lodash';
import { CommonModule } from '@angular/common';
import { AnimationBuilder, useAnimation } from '@angular/animations';
import { slide_in_left, slide_in_right, slide_out_left, slide_out_right } from '@aurora-ngx/animations';
import { Component, HostBinding, HostListener, Input, NgModule, ElementRef, EventEmitter, Output, ViewChild, Directive, ContentChild, TemplateRef, ViewContainerRef, ChangeDetectorRef, ContentChildren, ChangeDetectionStrategy, Injectable, Renderer2, ComponentFactoryResolver } from '@angular/core';

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
                        ButtonModule
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
var CollapseToggleDirective = /** @class */ (function () {
    function CollapseToggleDirective() {
        this.toggle = new EventEmitter();
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    CollapseToggleDirective.prototype.onClick = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        this.toggle.emit();
    };
    CollapseToggleDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[collapse-toggle]'
                },] }
    ];
    /** @nocollapse */
    CollapseToggleDirective.ctorParameters = function () { return []; };
    CollapseToggleDirective.propDecorators = {
        toggle: [{ type: Output }],
        onClick: [{ type: HostListener, args: ['click',] }]
    };
    return CollapseToggleDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
        ///-----------------------------------------------  Variables   -----------------------------------------------///
        this.toggle = new EventEmitter();
        this.collapsed = false;
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    HeaderComponent.prototype.onClick = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        if (!this._toggleDir) {
            this.toggle.emit();
            this.collapsed = !this.collapsed;
        }
    };
    ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///
    ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///
    /**
     * @return {?}
     */
    HeaderComponent.prototype.ngOnInit = 
    ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///
    /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this._toggleDir) {
            this._toggleDir.toggle.pipe(untilDestroyed(this)).subscribe(function () {
                _this.toggle.emit();
                _this.collapsed = !_this.collapsed;
            });
        }
    };
    /**
     * @return {?}
     */
    HeaderComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
    };
    HeaderComponent.decorators = [
        { type: Component, args: [{
                    selector: 'collapse-header',
                    exportAs: 'collapse-header',
                    template: "    \n          <ng-content></ng-content>\n  "
                }] }
    ];
    /** @nocollapse */
    HeaderComponent.ctorParameters = function () { return []; };
    HeaderComponent.propDecorators = {
        toggle: [{ type: Output }],
        onClick: [{ type: HostListener, args: ['click', ['$event'],] }],
        collapsed: [{ type: HostBinding, args: ['class.collapsed',] }],
        _toggleDir: [{ type: ContentChild, args: [CollapseToggleDirective,] }]
    };
    return HeaderComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ContentComponent = /** @class */ (function () {
    function ContentComponent() {
        ///-----------------------------------------------  Variables   -----------------------------------------------///
        ///-----------------------------------------------  Variables   -----------------------------------------------///
        this.collapsed = false;
        ///-----------------------------------------------  Main Functions  -----------------------------------------------///
    }
    ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///
    ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///
    /**
     * @return {?}
     */
    ContentComponent.prototype.ngOnInit = 
    ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///
    /**
     * @return {?}
     */
    function () {
        this.display = this.collapsed ? 'none' : 'flex';
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    ContentComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        this.display = this.collapsed ? 'none' : 'flex';
    };
    /**
     * @return {?}
     */
    ContentComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
    };
    ContentComponent.decorators = [
        { type: Component, args: [{
                    selector: 'collapse-content',
                    template: "\n      <ng-content></ng-content>"
                }] }
    ];
    ContentComponent.propDecorators = {
        display: [{ type: HostBinding, args: ['style.display',] }]
    };
    return ContentComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var PanelComponent = /** @class */ (function () {
    function PanelComponent() {
    }
    ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///
    ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///
    /**
     * @return {?}
     */
    PanelComponent.prototype.ngOnInit = 
    ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///
    /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (!this._headerComp || !this._contentComp) {
            throw new Error("'collapse-header' or 'collapse-content'  cannot be found!");
        }
        this._headerComp.toggle.pipe(untilDestroyed(this)).subscribe(function () {
            _this._contentComp.collapsed = !_this._contentComp.collapsed;
            _this._contentComp.ngOnChanges();
        });
    };
    /**
     * @return {?}
     */
    PanelComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    PanelComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
    };
    PanelComponent.decorators = [
        { type: Component, args: [{
                    selector: 'collapse-panel',
                    template: "\n      <ng-content select=\"collapse-header\"></ng-content>\n\n      <ng-content select=\"collapse-content\"></ng-content>\n\n  "
                }] }
    ];
    /** @nocollapse */
    PanelComponent.ctorParameters = function () { return []; };
    PanelComponent.propDecorators = {
        _headerComp: [{ type: ContentChild, args: [HeaderComponent,] }],
        _contentComp: [{ type: ContentChild, args: [ContentComponent,] }]
    };
    return PanelComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CollapsibleComponent = /** @class */ (function () {
    function CollapsibleComponent() {
        this.single = false;
    }
    ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///
    ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///
    /**
     * @return {?}
     */
    CollapsibleComponent.prototype.ngOnInit = 
    ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///
    /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (!this._panelComp && (!this._headerComp || !this._contentComp)) {
            throw new Error("'collapse-header' or 'collapse-content'  cannot be found!");
        }
        if (!this._panelComp) {
            this.single = true;
            this._headerComp.toggle.pipe(untilDestroyed(this)).subscribe(function () {
                _this._contentComp.collapsed = !_this._contentComp.collapsed;
                _this._contentComp.ngOnChanges();
            });
        }
    };
    /**
     * @return {?}
     */
    CollapsibleComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
    };
    CollapsibleComponent.decorators = [
        { type: Component, args: [{
                    selector: 'io-collapsible',
                    template: "\n      <ng-container *ngIf=\"!single\">\n          <ng-content select=\"collapse-panel\"></ng-content>\n      </ng-container>\n\n      <ng-container *ngIf=\"single\">\n          <ng-content select=\"collapse-header\"></ng-content>\n\n          <ng-content select=\"collapse-content\"></ng-content>\n      </ng-container>\n  ",
                    styles: [":host{display:flex;flex-direction:column}:host ::ng-deep collapse-panel{background-color:#fff;border:1px solid rgba(0,0,0,.16);border-radius:.4rem;box-shadow:0 .3rem .6rem rgba(0,0,0,.16)}:host ::ng-deep collapse-header{border-bottom:1px solid rgba(0,0,0,.16);cursor:pointer;display:flex;align-items:center;font-size:2rem;font-weight:600;margin:.1rem 0;padding:.6rem 1rem}:host ::ng-deep collapse-header.collapsed{border-bottom:0}:host ::ng-deep collapse-content{padding:2rem}"]
                }] }
    ];
    /** @nocollapse */
    CollapsibleComponent.ctorParameters = function () { return []; };
    CollapsibleComponent.propDecorators = {
        _panelComp: [{ type: ContentChild, args: [PanelComponent,] }],
        _headerComp: [{ type: ContentChild, args: [HeaderComponent,] }],
        _contentComp: [{ type: ContentChild, args: [ContentComponent,] }]
    };
    return CollapsibleComponent;
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
                        CollapsibleComponent,
                        HeaderComponent,
                        ContentComponent,
                        PanelComponent,
                        CollapseToggleDirective
                    ],
                    exports: [
                        CollapsibleComponent,
                        HeaderComponent,
                        ContentComponent,
                        PanelComponent,
                        CollapseToggleDirective
                    ],
                    entryComponents: [
                        CollapsibleComponent,
                        HeaderComponent,
                        ContentComponent,
                        PanelComponent
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
                    template: "\n      <ng-template>\n          <ng-content></ng-content>\n      </ng-template>\n\n      <div class=\"label_container\">\n          <ng-container *ngFor=\"let tab of contentList; let i =index\">\n              <tab-label\n                      [ngClass]=\"tab.active && 'active'\"\n                      (click)=\"selectTab(i)\"\n                      [text]=\"tab.label\"\n                      [template]=\"tab._labelComp?._templateRef\"\n              >\n              </tab-label>\n          </ng-container>\n      </div>\n      <tab-content\n              *ngIf=\"activeTab\"\n              [template]=\"activeTab._contentComp ? activeTab._contentComp._templateRef : activeTab._tabTemplateRef\"\n      >\n      </tab-content>\n\n  ",
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
    }
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
        vcRef: [{ type: ViewChild, args: ['vc', { read: ViewContainerRef },] }]
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
var ComponentModule = /** @class */ (function () {
    function ComponentModule() {
    }
    ComponentModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        ModalModule, CollapsibleModule, TabsModule, DropdownModule, LoadingModule, PaginationModule
                    ],
                    exports: [
                        ModalModule, CollapsibleModule, TabsModule, DropdownModule, LoadingModule, PaginationModule
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
var DirectiveModule = /** @class */ (function () {
    function DirectiveModule() {
    }
    DirectiveModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        SquareDirective, ScrollDownDirective
                    ],
                    exports: [
                        SquareDirective, ScrollDownDirective
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
                ? (direction === 'next') ? useAnimation(slide_in_right, { params: { timing: 500 } }) : useAnimation(slide_in_left, { params: { timing: 500 } })
                : (direction === 'next') ? useAnimation(slide_out_left, { params: { timing: 500 } }) : useAnimation(slide_out_right, { params: { timing: 500 } });
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
var IonarUI = /** @class */ (function () {
    function IonarUI() {
    }
    IonarUI.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        ComponentModule,
                        ElementModule,
                        PackagesModule,
                        DirectiveModule
                    ],
                    exports: [
                        ComponentModule,
                        ElementModule,
                        PackagesModule,
                        DirectiveModule
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

export { IonarUI, IonarLoadingService, CollapsibleComponent as ɵe, CollapsibleModule as ɵd, ContentComponent as ɵi, HeaderComponent as ɵg, PanelComponent as ɵf, CollapseToggleDirective as ɵh, ComponentModule as ɵa, MenuComponent as ɵq, ToggleComponent as ɵr, DropdownComponent as ɵp, DropdownModule as ɵo, LoadingComponent as ɵt, LoadingModule as ɵs, IonarLoadingService as ɵu, CircleComponent as ɵx, SpinnerComponent as ɵv, SpinnerTemplate as ɵw, ModalComponent as ɵc, ModalModule as ɵb, PageLinkComponent as ɵba, PageNumberComponent as ɵbb, PaginationComponent as ɵz, PaginationModule as ɵy, TabContentComponent as ɵn, TabLabelComponent as ɵm, TabComponent as ɵl, TabsComponent as ɵk, TabsModule as ɵj, DirectiveModule as ɵbl, ScrollDownDirective as ɵbn, SquareDirective as ɵbm, ButtonComponent as ɵbf, ButtonModule as ɵbe, ElementModule as ɵbc, FlexElement as ɵbd, CarouselComponent as ɵbi, CarouselModule as ɵbh, SlideComponent as ɵbk, SlideDirective as ɵbj, PackagesModule as ɵbg };

//# sourceMappingURL=ionar-ui.js.map