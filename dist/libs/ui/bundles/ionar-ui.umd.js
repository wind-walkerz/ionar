(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('rxjs'), require('uuid/v1'), require('@ionar/utility'), require('@angular/common'), require('@angular/animations'), require('@ionar/animations'), require('lodash'), require('@angular/core')) :
	typeof define === 'function' && define.amd ? define('@ionar/ui', ['exports', 'rxjs', 'uuid/v1', '@ionar/utility', '@angular/common', '@angular/animations', '@ionar/animations', 'lodash', '@angular/core'], factory) :
	(factory((global.ionar = global.ionar || {}, global.ionar.ui = {}),global.rxjs,global.v1,global.utility,global.ng.common,global.ng.animations,global.animations$1,global.lodash,global.ng.core));
}(this, (function (exports,rxjs,v1,utility,common,animations,animations$1,lodash,core) { 'use strict';

	rxjs = rxjs && rxjs.hasOwnProperty('default') ? rxjs['default'] : rxjs;
	v1 = v1 && v1.hasOwnProperty('default') ? v1['default'] : v1;
	utility = utility && utility.hasOwnProperty('default') ? utility['default'] : utility;
	common = common && common.hasOwnProperty('default') ? common['default'] : common;
	animations = animations && animations.hasOwnProperty('default') ? animations['default'] : animations;
	animations$1 = animations$1 && animations$1.hasOwnProperty('default') ? animations$1['default'] : animations$1;
	lodash = lodash && lodash.hasOwnProperty('default') ? lodash['default'] : lodash;
	core = core && core.hasOwnProperty('default') ? core['default'] : core;

	function unwrapExports(x) {
	    return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x.default : x;
	}
	function createCommonjsModule(fn, module) {
	    return module = { exports: {} }, fn(module, module.exports), module.exports;
	}

	var flex_element = createCommonjsModule(function (module, exports) {
	    /**
	     * @fileoverview added by tsickle
	     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
	     */
	    Object.defineProperty(exports, "__esModule", { value: true });
	    var FlexElement = /** @class */ (function () {
	        function FlexElement() {
	        }
	        FlexElement.decorators = [
	            { type: core.Component, args: [{
	                        selector: 'flex',
	                        template: "\n      <ng-content></ng-content>\n  ",
	                        styles: ["\n      :host {\n          display: flex;\n      }\n  "]
	                    }] }
	        ];
	        return FlexElement;
	    }());
	    exports.FlexElement = FlexElement;
	    
	});
	unwrapExports(flex_element);
	var flex_element_1 = flex_element.FlexElement;

	var button_component = createCommonjsModule(function (module, exports) {
	    /**
	     * @fileoverview added by tsickle
	     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
	     */
	    Object.defineProperty(exports, "__esModule", { value: true });
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
	            { type: core.Component, args: [{
	                        selector: 'io-btn',
	                        template: "\n      <ng-content></ng-content>\n  ",
	                        styles: [":host{background-color:#fff;border:1px solid #d9d9d9;border-radius:.4rem;box-shadow:0 .2rem 0 rgba(0,0,0,.015);color:rgba(0,0,0,.65);cursor:pointer;display:flex;align-items:center;justify-content:center;flex:0;font-size:1.4rem;font-weight:400;margin:0 auto;outline:0;padding:.5rem 1.5rem;position:relative;text-align:center;touch-action:manipulation;transition:.3s cubic-bezier(.645,.045,.355,1);text-shadow:0 -1px 0 rgba(0,0,0,.12);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;white-space:nowrap;height:3.2rem}:host:hover{border-color:#40a9ff;color:#40a9ff}:host:active{border-color:#096dd9;color:#096dd9}:host.disabled{cursor:not-allowed}:host-context(.primary){background-color:#1890ff;border-color:#1890ff;box-shadow:0 .2rem 0 rgba(0,0,0,.015);color:#fff}:host-context(.primary):hover{background-color:#40a9ff;border-color:#40a9ff}:host-context(.primary):active{background-color:#096dd9;border-color:#096dd9}:host-context(.danger){background-color:#f5222d;border-color:#f5222d;box-shadow:0 .2rem 0 rgba(0,0,0,.015);color:#fff}:host-context(.danger):hover{background-color:#ff5654;border-color:#ff5654}:host-context(.danger):active{background-color:#cb2d35;border-color:#cb2d35}"]
	                    }] }
	        ];
	        /** @nocollapse */
	        ButtonComponent.ctorParameters = function () { return []; };
	        ButtonComponent.propDecorators = {
	            disabled: [{ type: core.Input }],
	            type: [{ type: core.Input }],
	            primary_style: [{ type: core.HostBinding, args: ['class.primary',] }],
	            danger_style: [{ type: core.HostBinding, args: ['class.danger',] }],
	            isDisabled: [{ type: core.HostBinding, args: ['class.disabled',] }],
	            onClick: [{ type: core.HostListener, args: ['click',] }]
	        };
	        return ButtonComponent;
	    }());
	    exports.ButtonComponent = ButtonComponent;
	    
	});
	unwrapExports(button_component);
	var button_component_1 = button_component.ButtonComponent;

	var button_module = createCommonjsModule(function (module, exports) {
	    /**
	     * @fileoverview added by tsickle
	     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
	     */
	    Object.defineProperty(exports, "__esModule", { value: true });
	    var ButtonModule = /** @class */ (function () {
	        function ButtonModule() {
	        }
	        ButtonModule.decorators = [
	            { type: core.NgModule, args: [{
	                        declarations: [
	                            button_component.ButtonComponent
	                        ],
	                        exports: [
	                            button_component.ButtonComponent
	                        ],
	                        entryComponents: [button_component.ButtonComponent]
	                    },] }
	        ];
	        return ButtonModule;
	    }());
	    exports.ButtonModule = ButtonModule;
	    
	});
	unwrapExports(button_module);
	var button_module_1 = button_module.ButtonModule;

	var element_module = createCommonjsModule(function (module, exports) {
	    /**
	     * @fileoverview added by tsickle
	     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
	     */
	    Object.defineProperty(exports, "__esModule", { value: true });
	    var ElementModule = /** @class */ (function () {
	        function ElementModule() {
	        }
	        ElementModule.decorators = [
	            { type: core.NgModule, args: [{
	                        declarations: [
	                            flex_element.FlexElement
	                        ],
	                        imports: [
	                            button_module.ButtonModule,
	                        ],
	                        exports: [
	                            flex_element.FlexElement,
	                            button_module.ButtonModule
	                        ]
	                    },] }
	        ];
	        return ElementModule;
	    }());
	    exports.ElementModule = ElementModule;
	    
	});
	unwrapExports(element_module);
	var element_module_1 = element_module.ElementModule;

	var modal_component = createCommonjsModule(function (module, exports) {
	    /**
	     * @fileoverview added by tsickle
	     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
	     */
	    Object.defineProperty(exports, "__esModule", { value: true });
	    var ModalComponent = /** @class */ (function () {
	        ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///
	        function ModalComponent(eRef) {
	            var _this = this;
	            this.eRef = eRef;
	            this.onCancel = new core.EventEmitter();
	            this.onOk = new core.EventEmitter();
	            this.close = new core.EventEmitter();
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
	            { type: core.Component, args: [{
	                        selector: 'io-modal',
	                        template: "<div class=\"mask\" *ngIf=\"visible\" (click)=\"onClose()\">\r\n\r\n</div>\r\n\r\n<div class=\"content\" *ngIf=\"visible\">\r\n    <ng-content></ng-content>\r\n</div>\r\n\r\n",
	                        styles: [".mask{display:flex;align-items:center;justify-content:center;position:fixed;top:0;right:0;left:0;bottom:0;background-color:rgba(0,0,0,.65);height:100%;z-index:399}:host{display:flex;justify-content:center}:host .content{display:flex;flex-direction:column;position:relative;background-color:#fff;border:0;border-radius:4px;background-clip:padding-box;box-shadow:0 4px 12px rgba(0,0,0,.15);width:52rem;height:52rem;z-index:400}"]
	                    }] }
	        ];
	        /** @nocollapse */
	        ModalComponent.ctorParameters = function () {
	            return [
	                { type: core.ElementRef }
	            ];
	        };
	        ModalComponent.propDecorators = {
	            visible: [{ type: core.Input }],
	            onCancel: [{ type: core.Output }],
	            onOk: [{ type: core.Output }],
	            close: [{ type: core.Output }],
	            _maskElRef: [{ type: core.ViewChild, args: ['mask', { read: core.ElementRef },] }],
	            onKeydownHandler: [{ type: core.HostListener, args: ['document:keydown.escape', ['$event'],] }]
	        };
	        return ModalComponent;
	    }());
	    exports.ModalComponent = ModalComponent;
	    
	});
	unwrapExports(modal_component);
	var modal_component_1 = modal_component.ModalComponent;

	var modal_module = createCommonjsModule(function (module, exports) {
	    /**
	     * @fileoverview added by tsickle
	     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
	     */
	    Object.defineProperty(exports, "__esModule", { value: true });
	    var ModalModule = /** @class */ (function () {
	        function ModalModule() {
	        }
	        ModalModule.decorators = [
	            { type: core.NgModule, args: [{
	                        declarations: [
	                            modal_component.ModalComponent
	                        ],
	                        imports: [common.CommonModule],
	                        exports: [
	                            modal_component.ModalComponent
	                        ]
	                    },] }
	        ];
	        return ModalModule;
	    }());
	    exports.ModalModule = ModalModule;
	    
	});
	unwrapExports(modal_module);
	var modal_module_1 = modal_module.ModalModule;

	var collapsible_directive = createCommonjsModule(function (module, exports) {
	    /**
	     * @fileoverview added by tsickle
	     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
	     */
	    Object.defineProperty(exports, "__esModule", { value: true });
	    var CollapsibleDirective = /** @class */ (function () {
	        function CollapsibleDirective() {
	            this.change$ = new rxjs.Subject();
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
	                this.change$.pipe(utility.untilDestroyed(this)).subscribe(function (collapsed) {
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
	            { type: core.Directive, args: [{
	                        selector: '[ioCollapsible]'
	                    },] }
	        ];
	        CollapsibleDirective.propDecorators = {
	            ioCollapsible: [{ type: core.Input }]
	        };
	        return CollapsibleDirective;
	    }());
	    exports.CollapsibleDirective = CollapsibleDirective;
	    
	});
	unwrapExports(collapsible_directive);
	var collapsible_directive_1 = collapsible_directive.CollapsibleDirective;

	var content_directive = createCommonjsModule(function (module, exports) {
	    /**
	     * @fileoverview added by tsickle
	     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
	     */
	    Object.defineProperty(exports, "__esModule", { value: true });
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
	                this._parent.change$.pipe(utility.untilDestroyed(this)).subscribe(function (collapsed) {
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
	            { type: core.Directive, args: [{
	                        selector: '[collapseContent]'
	                    },] }
	        ];
	        /** @nocollapse */
	        ContentDirective.ctorParameters = function () {
	            return [
	                { type: collapsible_directive.CollapsibleDirective, decorators: [{ type: core.Optional }, { type: core.Host }, { type: core.SkipSelf }] },
	                { type: core.ChangeDetectorRef },
	                { type: core.ViewContainerRef },
	                { type: core.TemplateRef }
	            ];
	        };
	        return ContentDirective;
	    }());
	    exports.ContentDirective = ContentDirective;
	    
	});
	unwrapExports(content_directive);
	var content_directive_1 = content_directive.ContentDirective;

	var toggle_directive = createCommonjsModule(function (module, exports) {
	    /**
	     * @fileoverview added by tsickle
	     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
	     */
	    Object.defineProperty(exports, "__esModule", { value: true });
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
	            { type: core.Directive, args: [{
	                        selector: '[collapseToggle]'
	                    },] }
	        ];
	        /** @nocollapse */
	        ToggleDirective.ctorParameters = function () {
	            return [
	                { type: collapsible_directive.CollapsibleDirective, decorators: [{ type: core.Optional }, { type: core.Host }, { type: core.SkipSelf }] },
	                { type: core.ChangeDetectorRef }
	            ];
	        };
	        ToggleDirective.propDecorators = {
	            onClick: [{ type: core.HostListener, args: ['click', ['$event'],] }]
	        };
	        return ToggleDirective;
	    }());
	    exports.ToggleDirective = ToggleDirective;
	    
	});
	unwrapExports(toggle_directive);
	var toggle_directive_1 = toggle_directive.ToggleDirective;

	var collapsible_module = createCommonjsModule(function (module, exports) {
	    /**
	     * @fileoverview added by tsickle
	     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
	     */
	    Object.defineProperty(exports, "__esModule", { value: true });
	    var CollapsibleModule = /** @class */ (function () {
	        function CollapsibleModule() {
	        }
	        CollapsibleModule.decorators = [
	            { type: core.NgModule, args: [{
	                        imports: [
	                            common.CommonModule
	                        ],
	                        declarations: [
	                            collapsible_directive.CollapsibleDirective,
	                            content_directive.ContentDirective,
	                            toggle_directive.ToggleDirective
	                        ],
	                        exports: [
	                            collapsible_directive.CollapsibleDirective,
	                            content_directive.ContentDirective,
	                            toggle_directive.ToggleDirective
	                        ]
	                    },] }
	        ];
	        return CollapsibleModule;
	    }());
	    exports.CollapsibleModule = CollapsibleModule;
	    
	});
	unwrapExports(collapsible_module);
	var collapsible_module_1 = collapsible_module.CollapsibleModule;

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
	/* global Reflect, Promise */
	var extendStatics = function (d, b) {
	    extendStatics = Object.setPrototypeOf ||
	        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
	        function (d, b) { for (var p in b)
	            if (b.hasOwnProperty(p))
	                d[p] = b[p]; };
	    return extendStatics(d, b);
	};
	function __extends(d, b) {
	    extendStatics(d, b);
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	}
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
	function __rest(s, e) {
	    var t = {};
	    for (var p in s)
	        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
	            t[p] = s[p];
	    if (s != null && typeof Object.getOwnPropertySymbols === "function")
	        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++)
	            if (e.indexOf(p[i]) < 0)
	                t[p[i]] = s[p[i]];
	    return t;
	}
	function __decorate(decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
	        r = Reflect.decorate(decorators, target, key, desc);
	    else
	        for (var i = decorators.length - 1; i >= 0; i--)
	            if (d = decorators[i])
	                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	}
	function __param(paramIndex, decorator) {
	    return function (target, key) { decorator(target, key, paramIndex); };
	}
	function __metadata(metadataKey, metadataValue) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
	        return Reflect.metadata(metadataKey, metadataValue);
	}
	function __awaiter(thisArg, _arguments, P, generator) {
	    return new (P || (P = Promise))(function (resolve, reject) {
	        function fulfilled(value) { try {
	            step(generator.next(value));
	        }
	        catch (e) {
	            reject(e);
	        } }
	        function rejected(value) { try {
	            step(generator["throw"](value));
	        }
	        catch (e) {
	            reject(e);
	        } }
	        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
	        step((generator = generator.apply(thisArg, _arguments || [])).next());
	    });
	}
	function __generator(thisArg, body) {
	    var _ = { label: 0, sent: function () { if (t[0] & 1)
	            throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
	    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
	    function verb(n) { return function (v) { return step([n, v]); }; }
	    function step(op) {
	        if (f)
	            throw new TypeError("Generator is already executing.");
	        while (_)
	            try {
	                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
	                    return t;
	                if (y = 0, t)
	                    op = [op[0] & 2, t.value];
	                switch (op[0]) {
	                    case 0:
	                    case 1:
	                        t = op;
	                        break;
	                    case 4:
	                        _.label++;
	                        return { value: op[1], done: false };
	                    case 5:
	                        _.label++;
	                        y = op[1];
	                        op = [0];
	                        continue;
	                    case 7:
	                        op = _.ops.pop();
	                        _.trys.pop();
	                        continue;
	                    default:
	                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
	                            _ = 0;
	                            continue;
	                        }
	                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
	                            _.label = op[1];
	                            break;
	                        }
	                        if (op[0] === 6 && _.label < t[1]) {
	                            _.label = t[1];
	                            t = op;
	                            break;
	                        }
	                        if (t && _.label < t[2]) {
	                            _.label = t[2];
	                            _.ops.push(op);
	                            break;
	                        }
	                        if (t[2])
	                            _.ops.pop();
	                        _.trys.pop();
	                        continue;
	                }
	                op = body.call(thisArg, _);
	            }
	            catch (e) {
	                op = [6, e];
	                y = 0;
	            }
	            finally {
	                f = t = 0;
	            }
	        if (op[0] & 5)
	            throw op[1];
	        return { value: op[0] ? op[1] : void 0, done: true };
	    }
	}
	function __exportStar(m, exports) {
	    for (var p in m)
	        if (!exports.hasOwnProperty(p))
	            exports[p] = m[p];
	}
	function __values(o) {
	    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
	    if (m)
	        return m.call(o);
	    return {
	        next: function () {
	            if (o && i >= o.length)
	                o = void 0;
	            return { value: o && o[i++], done: !o };
	        }
	    };
	}
	function __read(o, n) {
	    var m = typeof Symbol === "function" && o[Symbol.iterator];
	    if (!m)
	        return o;
	    var i = m.call(o), r, ar = [], e;
	    try {
	        while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
	            ar.push(r.value);
	    }
	    catch (error) {
	        e = { error: error };
	    }
	    finally {
	        try {
	            if (r && !r.done && (m = i["return"]))
	                m.call(i);
	        }
	        finally {
	            if (e)
	                throw e.error;
	        }
	    }
	    return ar;
	}
	function __spread() {
	    for (var ar = [], i = 0; i < arguments.length; i++)
	        ar = ar.concat(__read(arguments[i]));
	    return ar;
	}
	function __await(v) {
	    return this instanceof __await ? (this.v = v, this) : new __await(v);
	}
	function __asyncGenerator(thisArg, _arguments, generator) {
	    if (!Symbol.asyncIterator)
	        throw new TypeError("Symbol.asyncIterator is not defined.");
	    var g = generator.apply(thisArg, _arguments || []), i, q = [];
	    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
	    function verb(n) { if (g[n])
	        i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
	    function resume(n, v) { try {
	        step(g[n](v));
	    }
	    catch (e) {
	        settle(q[0][3], e);
	    } }
	    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
	    function fulfill(value) { resume("next", value); }
	    function reject(value) { resume("throw", value); }
	    function settle(f, v) { if (f(v), q.shift(), q.length)
	        resume(q[0][0], q[0][1]); }
	}
	function __asyncDelegator(o) {
	    var i, p;
	    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
	    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
	}
	function __asyncValues(o) {
	    if (!Symbol.asyncIterator)
	        throw new TypeError("Symbol.asyncIterator is not defined.");
	    var m = o[Symbol.asyncIterator], i;
	    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
	    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
	    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
	}
	function __makeTemplateObject(cooked, raw) {
	    if (Object.defineProperty) {
	        Object.defineProperty(cooked, "raw", { value: raw });
	    }
	    else {
	        cooked.raw = raw;
	    }
	    return cooked;
	}
	function __importStar(mod) {
	    if (mod && mod.__esModule)
	        return mod;
	    var result = {};
	    if (mod != null)
	        for (var k in mod)
	            if (Object.hasOwnProperty.call(mod, k))
	                result[k] = mod[k];
	    result.default = mod;
	    return result;
	}
	function __importDefault(mod) {
	    return (mod && mod.__esModule) ? mod : { default: mod };
	}

	var tslib_es6 = /*#__PURE__*/Object.freeze({
		__extends: __extends,
		get __assign () { return __assign; },
		__rest: __rest,
		__decorate: __decorate,
		__param: __param,
		__metadata: __metadata,
		__awaiter: __awaiter,
		__generator: __generator,
		__exportStar: __exportStar,
		__values: __values,
		__read: __read,
		__spread: __spread,
		__await: __await,
		__asyncGenerator: __asyncGenerator,
		__asyncDelegator: __asyncDelegator,
		__asyncValues: __asyncValues,
		__makeTemplateObject: __makeTemplateObject,
		__importStar: __importStar,
		__importDefault: __importDefault
	});

	var label_component = createCommonjsModule(function (module, exports) {
	    /**
	     * @fileoverview added by tsickle
	     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
	     */
	    Object.defineProperty(exports, "__esModule", { value: true });
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
	            { type: core.Component, args: [{
	                        selector: 'tab-label',
	                        template: "\n      <ng-template #tpl>\n          <ng-content></ng-content>\n      </ng-template>\n\n      <ng-container *ngIf=\"text\">\n          {{text}}\n      </ng-container>\n      <ng-container #vcRef></ng-container>\n  "
	                    }] }
	        ];
	        /** @nocollapse */
	        TabLabelComponent.ctorParameters = function () { return []; };
	        TabLabelComponent.propDecorators = {
	            text: [{ type: core.Input }],
	            template: [{ type: core.Input }],
	            _templateRef: [{ type: core.ViewChild, args: ['tpl', { read: core.TemplateRef },] }],
	            _vcRef: [{ type: core.ViewChild, args: ['vcRef', { read: core.ViewContainerRef },] }]
	        };
	        return TabLabelComponent;
	    }());
	    exports.TabLabelComponent = TabLabelComponent;
	    
	});
	unwrapExports(label_component);
	var label_component_1 = label_component.TabLabelComponent;

	var content_component = createCommonjsModule(function (module, exports) {
	    /**
	     * @fileoverview added by tsickle
	     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
	     */
	    Object.defineProperty(exports, "__esModule", { value: true });
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
	            { type: core.Component, args: [{
	                        selector: 'tab-content',
	                        template: "\n      <ng-template #content>\n          <ng-content></ng-content>\n      </ng-template>\n    \n    <ng-container #vcRef>\n        \n    </ng-container>\n  "
	                    }] }
	        ];
	        /** @nocollapse */
	        TabContentComponent.ctorParameters = function () { return []; };
	        TabContentComponent.propDecorators = {
	            template: [{ type: core.Input }],
	            _templateRef: [{ type: core.ViewChild, args: ['content', { read: core.TemplateRef },] }],
	            _vcRef: [{ type: core.ViewChild, args: ['vcRef', { read: core.ViewContainerRef },] }]
	        };
	        return TabContentComponent;
	    }());
	    exports.TabContentComponent = TabContentComponent;
	    
	});
	unwrapExports(content_component);
	var content_component_1 = content_component.TabContentComponent;

	var tab_component = createCommonjsModule(function (module, exports) {
	    /**
	     * @fileoverview added by tsickle
	     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
	     */
	    Object.defineProperty(exports, "__esModule", { value: true });
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
	            { type: core.Component, args: [{
	                        selector: 'tab',
	                        template: "\n      <ng-template #tab>\n          <ng-content></ng-content>\n      </ng-template>\n  "
	                    }] }
	        ];
	        /** @nocollapse */
	        TabComponent.ctorParameters = function () { return []; };
	        TabComponent.propDecorators = {
	            label: [{ type: core.Input }],
	            _tabTemplateRef: [{ type: core.ViewChild, args: ['tab', { read: core.TemplateRef },] }],
	            _labelComp: [{ type: core.ContentChild, args: [label_component.TabLabelComponent,] }],
	            _contentComp: [{ type: core.ContentChild, args: [content_component.TabContentComponent,] }]
	        };
	        return TabComponent;
	    }());
	    exports.TabComponent = TabComponent;
	    
	});
	unwrapExports(tab_component);
	var tab_component_1 = tab_component.TabComponent;

	var tabs_component = createCommonjsModule(function (module, exports) {
	    /**
	     * @fileoverview added by tsickle
	     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
	     */
	    Object.defineProperty(exports, "__esModule", { value: true });
	    var lodash_1 = tslib_es6.__importDefault(lodash);
	    var TabsComponent = /** @class */ (function () {
	        function TabsComponent(cd) {
	            var _this = this;
	            this.cd = cd;
	            this.selectTab = function (selected_index) {
	                lodash_1.default.each(_this.contentList.toArray(), function (tab, i) {
	                    tab.active = i === selected_index;
	                });
	                _this.activeTab = lodash_1.default.find(_this.contentList.toArray(), ['active', true]);
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
	            { type: core.Component, args: [{
	                        selector: 'io-tabs',
	                        template: "\n      <ng-template>\n          <ng-content></ng-content>\n      </ng-template>\n\n      <div class=\"label_container\">\n          <ng-container *ngFor=\"let tab of contentList; let i =index\">\n              <tab-label\n                      [ngClass]=\"tab.active && 'active'\"\n                      (click)=\"selectTab(i)\"\n                      [text]=\"tab.label\"\n                      [template]=\"tab._labelComp?._templateRef\"\n              >\n              </tab-label>\n          </ng-container>\n      </div>\n      \n      <tab-content\n              *ngIf=\"activeTab\"\n              [template]=\"activeTab._contentComp ? activeTab._contentComp._templateRef : activeTab._tabTemplateRef\"\n      >\n      </tab-content>\n    \n\n  ",
	                        styles: [":host{display:flex;flex-direction:column;position:relative}:host ::ng-deep .label_container{display:flex}:host ::ng-deep .label_container tab-label{cursor:pointer}"]
	                    }] }
	        ];
	        /** @nocollapse */
	        TabsComponent.ctorParameters = function () {
	            return [
	                { type: core.ChangeDetectorRef }
	            ];
	        };
	        TabsComponent.propDecorators = {
	            contentList: [{ type: core.ContentChildren, args: [tab_component.TabComponent,] }]
	        };
	        return TabsComponent;
	    }());
	    exports.TabsComponent = TabsComponent;
	    
	});
	unwrapExports(tabs_component);
	var tabs_component_1 = tabs_component.TabsComponent;

	var tabs_module = createCommonjsModule(function (module, exports) {
	    /**
	     * @fileoverview added by tsickle
	     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
	     */
	    Object.defineProperty(exports, "__esModule", { value: true });
	    var TabsModule = /** @class */ (function () {
	        function TabsModule() {
	        }
	        TabsModule.decorators = [
	            { type: core.NgModule, args: [{
	                        imports: [common.CommonModule],
	                        declarations: [tabs_component.TabsComponent, tab_component.TabComponent, label_component.TabLabelComponent, content_component.TabContentComponent
	                        ],
	                        exports: [tabs_component.TabsComponent, tab_component.TabComponent, label_component.TabLabelComponent, content_component.TabContentComponent
	                        ]
	                    },] }
	        ];
	        return TabsModule;
	    }());
	    exports.TabsModule = TabsModule;
	    
	});
	unwrapExports(tabs_module);
	var tabs_module_1 = tabs_module.TabsModule;

	var menu_component = createCommonjsModule(function (module, exports) {
	    /**
	     * @fileoverview added by tsickle
	     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
	     */
	    Object.defineProperty(exports, "__esModule", { value: true });
	    var MenuComponent = /** @class */ (function () {
	        function MenuComponent(elRef) {
	            this.elRef = elRef;
	            ///-----------------------------------------------  Variables   -----------------------------------------------///
	            this.visible = false;
	            this.visibilityChange$ = new rxjs.Subject();
	            this.change = new core.EventEmitter();
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
	            { type: core.Component, args: [{
	                        selector: 'dropdown-menu',
	                        template: "\n      <ng-content></ng-content>",
	                        changeDetection: core.ChangeDetectionStrategy.OnPush,
	                        styles: ["\n      :host {\n          display: flex;\n          flex-shrink: 0;\n      }\n  "]
	                    }] }
	        ];
	        /** @nocollapse */
	        MenuComponent.ctorParameters = function () {
	            return [
	                { type: core.ElementRef }
	            ];
	        };
	        MenuComponent.propDecorators = {
	            visible: [{ type: core.Input }],
	            template: [{ type: core.Input }],
	            tplRef: [{ type: core.ViewChild, args: ['tpl',] }],
	            vcRef: [{ type: core.ViewChild, args: ['vc', { read: core.ViewContainerRef },] }],
	            change: [{ type: core.Output }],
	            onClick: [{ type: core.HostListener, args: ['click', ['$event'],] }]
	        };
	        return MenuComponent;
	    }());
	    exports.MenuComponent = MenuComponent;
	    
	});
	unwrapExports(menu_component);
	var menu_component_1 = menu_component.MenuComponent;

	var toggle_component = createCommonjsModule(function (module, exports) {
	    /**
	     * @fileoverview added by tsickle
	     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
	     */
	    Object.defineProperty(exports, "__esModule", { value: true });
	    var ToggleComponent = /** @class */ (function () {
	        function ToggleComponent() {
	            ///-----------------------------------------------  Variables   -----------------------------------------------///
	            this.change = new core.EventEmitter();
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
	            { type: core.Component, args: [{
	                        selector: 'dropdown-toggle',
	                        template: "\n      <ng-content></ng-content>",
	                        styles: ["\n      :host {\n          display: flex;\n          flex-shrink: 0;\n      }\n  "]
	                    }] }
	        ];
	        /** @nocollapse */
	        ToggleComponent.ctorParameters = function () { return []; };
	        ToggleComponent.propDecorators = {
	            change: [{ type: core.Output }],
	            onClick: [{ type: core.HostListener, args: ['click', ['$event'],] }]
	        };
	        return ToggleComponent;
	    }());
	    exports.ToggleComponent = ToggleComponent;
	    
	});
	unwrapExports(toggle_component);
	var toggle_component_1 = toggle_component.ToggleComponent;

	var dropdown_component = createCommonjsModule(function (module, exports) {
	    /**
	     * @fileoverview added by tsickle
	     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
	     */
	    Object.defineProperty(exports, "__esModule", { value: true });
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
	                this._menuComp.visibilityChange$.pipe(utility.untilDestroyed(this)).subscribe(function (visible) {
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
	            { type: core.Component, args: [{
	                        selector: 'io-dropdown',
	                        template: "\n      <ng-content select=\"dropdown-toggle\"></ng-content>\n\n      <ng-container *ngIf=\"showDropdownMenu && visible\">\n          <ng-content select=\"dropdown-menu\"></ng-content>\n      </ng-container>\n  ",
	                        changeDetection: core.ChangeDetectionStrategy.OnPush
	                    }] }
	        ];
	        /** @nocollapse */
	        DropdownComponent.ctorParameters = function () {
	            return [
	                { type: core.ElementRef },
	                { type: core.ChangeDetectorRef }
	            ];
	        };
	        DropdownComponent.propDecorators = {
	            _menuComp: [{ type: core.ContentChild, args: [menu_component.MenuComponent,] }],
	            _toggleComp: [{ type: core.ContentChild, args: [toggle_component.ToggleComponent,] }],
	            onClickOutside: [{ type: core.HostListener, args: ['document:click', ['$event'],] }]
	        };
	        return DropdownComponent;
	    }());
	    exports.DropdownComponent = DropdownComponent;
	    
	});
	unwrapExports(dropdown_component);
	var dropdown_component_1 = dropdown_component.DropdownComponent;

	var dropdown_module = createCommonjsModule(function (module, exports) {
	    /**
	     * @fileoverview added by tsickle
	     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
	     */
	    Object.defineProperty(exports, "__esModule", { value: true });
	    var DropdownModule = /** @class */ (function () {
	        function DropdownModule() {
	        }
	        DropdownModule.decorators = [
	            { type: core.NgModule, args: [{
	                        imports: [
	                            common.CommonModule
	                        ],
	                        declarations: [
	                            dropdown_component.DropdownComponent,
	                            dropdown_component.DropdownComponent,
	                            toggle_component.ToggleComponent, menu_component.MenuComponent
	                        ],
	                        exports: [dropdown_component.DropdownComponent, toggle_component.ToggleComponent, menu_component.MenuComponent]
	                    },] }
	        ];
	        return DropdownModule;
	    }());
	    exports.DropdownModule = DropdownModule;
	    
	});
	unwrapExports(dropdown_module);
	var dropdown_module_1 = dropdown_module.DropdownModule;

	var loading_service = createCommonjsModule(function (module, exports) {
	    /**
	     * @fileoverview added by tsickle
	     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
	     */
	    Object.defineProperty(exports, "__esModule", { value: true });
	    var IonarLoadingService = /** @class */ (function () {
	        function IonarLoadingService() {
	            var _this = this;
	            this.visibilityChange$ = new rxjs.Subject();
	            this.isDisabled = false;
	            this.show = function () { return !_this.isDisabled && _this.visibilityChange$.next(true); };
	            this.hide = function () { return !_this.isDisabled && _this.visibilityChange$.next(false); };
	            this.disabled = function () { return _this.isDisabled = true; };
	            this.enabled = function () { return _this.isDisabled = false; };
	        }
	        IonarLoadingService.decorators = [
	            { type: core.Injectable }
	        ];
	        return IonarLoadingService;
	    }());
	    exports.IonarLoadingService = IonarLoadingService;
	    
	});
	unwrapExports(loading_service);
	var loading_service_1 = loading_service.IonarLoadingService;

	var loading_component = createCommonjsModule(function (module, exports) {
	    /**
	     * @fileoverview added by tsickle
	     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
	     */
	    Object.defineProperty(exports, "__esModule", { value: true });
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
	                this._subscription = this._loadingSvs.visibilityChange$.pipe(utility.untilDestroyed(this)).subscribe(function (visible) {
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
	            { type: core.Component, args: [{
	                        selector: 'io-loading',
	                        template: "<div class=\"content\" *ngIf=\"visible\">\r\n    <sk-circle></sk-circle>\r\n</div>",
	                        changeDetection: core.ChangeDetectionStrategy.OnPush,
	                        styles: [":host .content{background-color:rgba(51,51,51,.8);display:flex;align-items:center;justify-content:center;position:fixed;top:0;left:0;right:0;bottom:0;z-index:100!important}"]
	                    }] }
	        ];
	        /** @nocollapse */
	        LoadingComponent.ctorParameters = function () {
	            return [
	                { type: loading_service.IonarLoadingService },
	                { type: core.ChangeDetectorRef }
	            ];
	        };
	        return LoadingComponent;
	    }());
	    exports.LoadingComponent = LoadingComponent;
	    
	});
	unwrapExports(loading_component);
	var loading_component_1 = loading_component.LoadingComponent;

	var spinner_component = createCommonjsModule(function (module, exports) {
	    /**
	     * @fileoverview added by tsickle
	     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
	     */
	    Object.defineProperty(exports, "__esModule", { value: true });
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
	             */ function (value) {
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
	             */ function () {
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
	            { type: core.Component, args: [{
	                        selector: 'spinner',
	                        template: ''
	                    }] }
	        ];
	        SpinnerComponent.propDecorators = {
	            delay: [{ type: core.Input }],
	            color: [{ type: core.Input }],
	            isRunning: [{ type: core.Input }]
	        };
	        return SpinnerComponent;
	    }());
	    exports.SpinnerComponent = SpinnerComponent;
	    /** @type {?} */
	    exports.SpinnerTemplate = "\n  <div [hidden]=\"!visible\" [ngClass]=\"baseClass\">\n      <div *ngFor=\"let item of items; let i = index\" [ngClass]=\"childClass + (i+1)\" [style.backgroundColor]=\"color\"></div>\n  </div>\n";
	    
	});
	unwrapExports(spinner_component);
	var spinner_component_1 = spinner_component.SpinnerComponent;
	var spinner_component_2 = spinner_component.SpinnerTemplate;

	var circle_component = createCommonjsModule(function (module, exports) {
	    /**
	     * @fileoverview added by tsickle
	     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
	     */
	    Object.defineProperty(exports, "__esModule", { value: true });
	    var CircleComponent = /** @class */ (function (_super) {
	        tslib_es6.__extends(CircleComponent, _super);
	        function CircleComponent() {
	            var _this = _super !== null && _super.apply(this, arguments) || this;
	            _this.baseClass = 'circle-spinner';
	            _this.childClass = 'circle';
	            _this.numItems = 12;
	            return _this;
	        }
	        CircleComponent.decorators = [
	            { type: core.Component, args: [{
	                        selector: 'sk-circle',
	                        template: spinner_component.SpinnerTemplate,
	                        styles: ["\n      .circle-spinner {\n          position: relative;\n          margin: 25px auto;\n          width: 5rem;\n          height: 5rem;\n      }\n\n      .circle-spinner > div {\n          position: absolute;\n          top: 0;\n          left: 0;\n          width: 100%;\n          height: 100%;\n          background-color: transparent !important;\n      }\n\n      .circle-spinner div:before {\n          display: block;\n          margin: 0 auto;\n          width: 15%;\n          height: 15%;\n          border-radius: 100%;\n          background-color: white;\n          content: '';\n          -webkit-animation: sk-circleBounceDelay 1.2s infinite ease-in-out both;\n          animation: sk-circleBounceDelay 1.2s infinite ease-in-out both;\n      }\n\n      .circle-spinner .circle2 {\n          -webkit-transform: rotate(30deg);\n          -ms-transform: rotate(30deg);\n          transform: rotate(30deg);\n      }\n\n      .circle-spinner .circle3 {\n          -webkit-transform: rotate(60deg);\n          -ms-transform: rotate(60deg);\n          transform: rotate(60deg);\n      }\n\n      .circle-spinner .circle4 {\n          -webkit-transform: rotate(90deg);\n          -ms-transform: rotate(90deg);\n          transform: rotate(90deg);\n      }\n\n      .circle-spinner .circle5 {\n          -webkit-transform: rotate(120deg);\n          -ms-transform: rotate(120deg);\n          transform: rotate(120deg);\n      }\n\n      .circle-spinner .circle6 {\n          -webkit-transform: rotate(150deg);\n          -ms-transform: rotate(150deg);\n          transform: rotate(150deg);\n      }\n\n      .circle-spinner .circle7 {\n          -webkit-transform: rotate(180deg);\n          -ms-transform: rotate(180deg);\n          transform: rotate(180deg);\n      }\n\n      .circle-spinner .circle8 {\n          -webkit-transform: rotate(210deg);\n          -ms-transform: rotate(210deg);\n          transform: rotate(210deg);\n      }\n\n      .circle-spinner .circle9 {\n          -webkit-transform: rotate(240deg);\n          -ms-transform: rotate(240deg);\n          transform: rotate(240deg);\n      }\n\n      .circle-spinner .circle10 {\n          -webkit-transform: rotate(270deg);\n          -ms-transform: rotate(270deg);\n          transform: rotate(270deg);\n      }\n\n      .circle-spinner .circle11 {\n          -webkit-transform: rotate(300deg);\n          -ms-transform: rotate(300deg);\n          transform: rotate(300deg);\n      }\n\n      .circle-spinner .circle12 {\n          -webkit-transform: rotate(330deg);\n          -ms-transform: rotate(330deg);\n          transform: rotate(330deg);\n      }\n\n      .circle-spinner .circle2:before {\n          -webkit-animation-delay: -1.1s;\n          animation-delay: -1.1s;\n      }\n\n      .circle-spinner .circle3:before {\n          -webkit-animation-delay: -1s;\n          animation-delay: -1s;\n      }\n\n      .circle-spinner .circle4:before {\n          -webkit-animation-delay: -0.9s;\n          animation-delay: -0.9s;\n      }\n\n      .circle-spinner .circle5:before {\n          -webkit-animation-delay: -0.8s;\n          animation-delay: -0.8s;\n      }\n\n      .circle-spinner .circle6:before {\n          -webkit-animation-delay: -0.7s;\n          animation-delay: -0.7s;\n      }\n\n      .circle-spinner .circle7:before {\n          -webkit-animation-delay: -0.6s;\n          animation-delay: -0.6s;\n      }\n\n      .circle-spinner .circle8:before {\n          -webkit-animation-delay: -0.5s;\n          animation-delay: -0.5s;\n      }\n\n      .circle-spinner .circle9:before {\n          -webkit-animation-delay: -0.4s;\n          animation-delay: -0.4s;\n      }\n\n      .circle-spinner .circle10:before {\n          -webkit-animation-delay: -0.3s;\n          animation-delay: -0.3s;\n      }\n\n      .circle-spinner .circle11:before {\n          -webkit-animation-delay: -0.2s;\n          animation-delay: -0.2s;\n      }\n\n      .circle-spinner .circle12:before {\n          -webkit-animation-delay: -0.1s;\n          animation-delay: -0.1s;\n      }\n\n      @-webkit-keyframes sk-circleBounceDelay {\n          0%, 80%, 100% {\n              -webkit-transform: scale(0);\n              transform: scale(0);\n          }\n          40% {\n              -webkit-transform: scale(1);\n              transform: scale(1);\n          }\n      }\n\n      @keyframes sk-circleBounceDelay {\n          0%, 80%, 100% {\n              -webkit-transform: scale(0);\n              transform: scale(0);\n          }\n          40% {\n              -webkit-transform: scale(1);\n              transform: scale(1);\n          }\n      }\n  "]
	                    }] }
	        ];
	        return CircleComponent;
	    }(spinner_component.SpinnerComponent));
	    exports.CircleComponent = CircleComponent;
	    
	});
	unwrapExports(circle_component);
	var circle_component_1 = circle_component.CircleComponent;

	var loading_module = createCommonjsModule(function (module, exports) {
	    /**
	     * @fileoverview added by tsickle
	     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
	     */
	    Object.defineProperty(exports, "__esModule", { value: true });
	    var LoadingModule = /** @class */ (function () {
	        function LoadingModule() {
	        }
	        LoadingModule.decorators = [
	            { type: core.NgModule, args: [{
	                        imports: [
	                            common.CommonModule
	                        ],
	                        declarations: [
	                            loading_component.LoadingComponent,
	                            spinner_component.SpinnerComponent,
	                            circle_component.CircleComponent
	                        ],
	                        exports: [loading_component.LoadingComponent]
	                    },] }
	        ];
	        return LoadingModule;
	    }());
	    exports.LoadingModule = LoadingModule;
	    
	});
	unwrapExports(loading_module);
	var loading_module_1 = loading_module.LoadingModule;

	var pageLink_component = createCommonjsModule(function (module, exports) {
	    /**
	     * @fileoverview added by tsickle
	     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
	     */
	    Object.defineProperty(exports, "__esModule", { value: true });
	    var PageLinkComponent = /** @class */ (function () {
	        function PageLinkComponent() {
	            var _this = this;
	            this.disabled = false;
	            this.change = new core.EventEmitter();
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
	            { type: core.Component, args: [{
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
	            directionLinks: [{ type: core.Input }],
	            boundaryLinks: [{ type: core.Input }],
	            disabled: [{ type: core.Input }],
	            change: [{ type: core.Output }],
	            template: [{ type: core.Input }],
	            tpl: [{ type: core.ViewChild, args: ['tpl',] }],
	            onClick: [{ type: core.HostListener, args: ['click', ['$event'],] }]
	        };
	        return PageLinkComponent;
	    }());
	    exports.PageLinkComponent = PageLinkComponent;
	    
	});
	unwrapExports(pageLink_component);
	var pageLink_component_1 = pageLink_component.PageLinkComponent;

	var pagination_component = createCommonjsModule(function (module, exports) {
	    /**
	     * @fileoverview added by tsickle
	     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
	     */
	    Object.defineProperty(exports, "__esModule", { value: true });
	    var lodash_1 = tslib_es6.__importDefault(lodash);
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
	            this.change = new core.EventEmitter();
	            this.pages = [];
	            this._getTemplate = function (key, value) {
	                /** @type {?} */
	                var pageLinkComp;
	                lodash_1.default.each(_this._pageLinkCompList.toArray(), function (item) {
	                    if (lodash_1.default.has(item, [key]) && lodash_1.default.get(item, [key]) === value) {
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
	                this.pages = lodash_1.default.times(this.total, function (n) { return n + 1; });
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
	                        _a = tslib_es6.__read(this._applyRotation(), 2), start = _a[0], end = _a[1];
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
	            { type: core.Component, args: [{
	                        selector: 'io-pagination',
	                        template: "<ng-container>\r\n    <page-link\r\n            [template]=\"boundary_first\"\r\n            [disabled]=\"page===1\"\r\n            (change)=\"selectPage(1)\"\r\n            *ngIf=\"boundary\"\r\n    ></page-link>\r\n    <page-link\r\n            [template]=\"direction_prev\"\r\n            [disabled]=\"page===1\"\r\n            (change)=\"selectPage(page - 1)\"\r\n            *ngIf=\"direction\"\r\n    ></page-link>\r\n\r\n    <ng-container *ngFor=\"let pageNumber of pages\">\r\n        <page-number\r\n                [number]=\"pageNumber\"\r\n                [currentPage]=\"this.page\"\r\n                (change)=\"selectPage($event)\"\r\n        ></page-number>\r\n    </ng-container>\r\n\r\n    <page-link\r\n            [template]=\"direction_next\"\r\n            [disabled]=\"page===total\"\r\n            (change)=\"selectPage(page + 1)\"\r\n            *ngIf=\"direction\"\r\n    ></page-link>\r\n    <page-link\r\n            [template]=\"boundary_last\"\r\n            [disabled]=\"page===total\"\r\n            (change)=\"selectPage(total)\"\r\n            *ngIf=\"boundary\"\r\n    ></page-link>\r\n</ng-container>\r\n\r\n\r\n<ng-template #boundaryFirstDefault>\r\n    <<\r\n</ng-template>\r\n<ng-template #boundaryLastDefault>\r\n    >>\r\n</ng-template>\r\n<ng-template #directionPrevDefault>\r\n    <\r\n</ng-template>\r\n<ng-template #directionNexDefault>\r\n    >\r\n</ng-template>",
	                        styles: ["\n      :host {\n          display: flex;\n          justify-content: center;\n          height: auto;\n          flex-shrink: 0;\n      }\n  "]
	                    }] }
	        ];
	        /** @nocollapse */
	        PaginationComponent.ctorParameters = function () {
	            return [
	                { type: core.ChangeDetectorRef }
	            ];
	        };
	        PaginationComponent.propDecorators = {
	            disabled: [{ type: core.Input }],
	            boundary: [{ type: core.Input }],
	            direction: [{ type: core.Input }],
	            ellipses: [{ type: core.Input }],
	            rotate: [{ type: core.Input }],
	            total: [{ type: core.Input }],
	            maxSize: [{ type: core.Input }],
	            page: [{ type: core.Input }],
	            change: [{ type: core.Output }],
	            _pageLinkCompList: [{ type: core.ContentChildren, args: [pageLink_component.PageLinkComponent,] }],
	            _boundaryFirstDefault: [{ type: core.ViewChild, args: ['boundaryFirstDefault',] }],
	            _boundaryLastDefault: [{ type: core.ViewChild, args: ['boundaryLastDefault',] }],
	            _directionPrevDefault: [{ type: core.ViewChild, args: ['directionPrevDefault',] }],
	            _directionNexDefault: [{ type: core.ViewChild, args: ['directionNexDefault',] }]
	        };
	        return PaginationComponent;
	    }());
	    exports.PaginationComponent = PaginationComponent;
	    
	});
	unwrapExports(pagination_component);
	var pagination_component_1 = pagination_component.PaginationComponent;

	var pageNumber_component = createCommonjsModule(function (module, exports) {
	    /**
	     * @fileoverview added by tsickle
	     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
	     */
	    Object.defineProperty(exports, "__esModule", { value: true });
	    var PageNumberComponent = /** @class */ (function () {
	        function PageNumberComponent() {
	            var _this = this;
	            this.number = 0;
	            this.currentPage = 0;
	            this.change = new core.EventEmitter();
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
	            { type: core.Component, args: [{
	                        selector: 'page-number',
	                        template: "\n      {{number}}\n  ",
	                        styles: [":host{background-color:#fff;border:1px solid #dee2e6;color:#007bff;cursor:pointer;display:flex;justify-content:center;align-items:center;margin-left:-1px;padding:1rem;transition:.3s;z-index:1}:host:hover{background-color:#e9ecef;color:#0056b3}:host.active{background-color:#007bff;border-color:#007bff;color:#fff}:host.focus{outline:0;box-shadow:0 0 0 .2rem rgba(0,123,255,.25);z-index:3}"]
	                    }] }
	        ];
	        PageNumberComponent.propDecorators = {
	            number: [{ type: core.Input }],
	            currentPage: [{ type: core.Input }],
	            change: [{ type: core.Output }],
	            onClick: [{ type: core.HostListener, args: ['click', ['$event'],] }],
	            onMouseDown: [{ type: core.HostListener, args: ['mousedown', ['$event'],] }],
	            onMouseUp: [{ type: core.HostListener, args: ['mouseup', ['$event'],] }],
	            _activeStyle: [{ type: core.HostBinding, args: ['class.active',] }],
	            _focusStyle: [{ type: core.HostBinding, args: ['class.focus',] }]
	        };
	        return PageNumberComponent;
	    }());
	    exports.PageNumberComponent = PageNumberComponent;
	    
	});
	unwrapExports(pageNumber_component);
	var pageNumber_component_1 = pageNumber_component.PageNumberComponent;

	var pagination_module = createCommonjsModule(function (module, exports) {
	    /**
	     * @fileoverview added by tsickle
	     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
	     */
	    Object.defineProperty(exports, "__esModule", { value: true });
	    var PaginationModule = /** @class */ (function () {
	        function PaginationModule() {
	        }
	        PaginationModule.decorators = [
	            { type: core.NgModule, args: [{
	                        imports: [
	                            common.CommonModule
	                        ],
	                        declarations: [
	                            pagination_component.PaginationComponent,
	                            pageNumber_component.PageNumberComponent,
	                            pageLink_component.PageLinkComponent
	                        ],
	                        exports: [pagination_component.PaginationComponent, pageLink_component.PageLinkComponent]
	                    },] }
	        ];
	        return PaginationModule;
	    }());
	    exports.PaginationModule = PaginationModule;
	    
	});
	unwrapExports(pagination_module);
	var pagination_module_1 = pagination_module.PaginationModule;

	var toast_service = createCommonjsModule(function (module, exports) {
	    /**
	     * @fileoverview added by tsickle
	     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
	     */
	    Object.defineProperty(exports, "__esModule", { value: true });
	    var lodash_1 = tslib_es6.__importDefault(lodash);
	    var v1_1 = tslib_es6.__importDefault(v1);
	    var i0 = tslib_es6.__importStar(core);
	    var IonarToastService = /** @class */ (function () {
	        function IonarToastService() {
	            var _this = this;
	            this._messageList = [];
	            this.newMessage$ = new rxjs.Subject();
	            this._duration = 2000;
	            this.info = function (message, duration) {
	                if (duration === void 0) {
	                    duration = _this._duration;
	                }
	                return _this.sendMessage({
	                    id: v1_1.default(),
	                    text: message,
	                    type: 'info'
	                }, duration);
	            };
	            this.success = function (message, duration) {
	                if (duration === void 0) {
	                    duration = _this._duration;
	                }
	                return _this.sendMessage({
	                    id: v1_1.default(),
	                    text: message,
	                    type: 'success'
	                }, duration);
	            };
	            this.danger = function (message, duration) {
	                if (duration === void 0) {
	                    duration = _this._duration;
	                }
	                return _this.sendMessage({
	                    id: v1_1.default(),
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
	                this._messageList = lodash_1.default.reject(this._messageList, ['id', id]);
	                this.newMessage$.next(this._messageList);
	            };
	        IonarToastService.decorators = [
	            { type: core.Injectable, args: [{
	                        providedIn: 'root'
	                    },] }
	        ];
	        /** @nocollapse */ IonarToastService.ngInjectableDef = i0.defineInjectable({ factory: function IonarToastService_Factory() { return new IonarToastService(); }, token: IonarToastService, providedIn: "root" });
	        return IonarToastService;
	    }());
	    exports.IonarToastService = IonarToastService;
	    
	});
	unwrapExports(toast_service);
	var toast_service_1 = toast_service.IonarToastService;

	var toast_component = createCommonjsModule(function (module, exports) {
	    /**
	     * @fileoverview added by tsickle
	     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
	     */
	    Object.defineProperty(exports, "__esModule", { value: true });
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
	             */ function () {
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
	                this._toast.newMessage$.pipe(utility.untilDestroyed(this)).subscribe(function (message_list) {
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
	            { type: core.Component, args: [{
	                        selector: 'io-toast',
	                        template: "<ng-container *ngFor=\"let message of message_list\">\r\n    <div class=\"toast-message\" [ngClass]=\"message.type\">\r\n        {{message.text}}\r\n\r\n        <div class=\"delete\" (click)=\"deleteMessage(message.id)\">x</div>\r\n    </div>\r\n\r\n</ng-container>",
	                        styles: [":host{display:none;position:fixed;top:0;right:0;padding:1.6rem 1.6rem 0 0;width:25%;z-index:90}:host .toast-message{color:#fff;padding:1rem 1.6rem;border-radius:.4rem;box-shadow:0 .4rem 1.2rem rgba(0,0,0,.15);background:#fff;line-height:1.5;position:relative;margin-bottom:1.3rem;overflow:hidden}:host .toast-message.success{background-color:#23d160}:host .toast-message.info{background-color:#209cee}:host .toast-message.danger{background-color:#ff3860}:host .toast-message .delete{background-color:rgba(10,10,10,.2);border-radius:100%;cursor:pointer;display:flex;justify-content:center;align-items:center;font-size:.7rem;pointer-events:auto;position:absolute;top:.4rem;right:.4rem;flex-shrink:0;height:1.4rem;width:1.4rem}:host .toast-message .delete:hover{background-color:rgba(10,10,10,.5)}:host-context(.show){display:block}"]
	                    }] }
	        ];
	        /** @nocollapse */
	        ToastComponent.ctorParameters = function () {
	            return [
	                { type: toast_service.IonarToastService }
	            ];
	        };
	        ToastComponent.propDecorators = {
	            _showToastContainer: [{ type: core.HostBinding, args: ['class.show',] }]
	        };
	        return ToastComponent;
	    }());
	    exports.ToastComponent = ToastComponent;
	    
	});
	unwrapExports(toast_component);
	var toast_component_1 = toast_component.ToastComponent;

	var toast_module = createCommonjsModule(function (module, exports) {
	    /**
	     * @fileoverview added by tsickle
	     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
	     */
	    Object.defineProperty(exports, "__esModule", { value: true });
	    var ToastModule = /** @class */ (function () {
	        function ToastModule() {
	        }
	        ToastModule.decorators = [
	            { type: core.NgModule, args: [{
	                        declarations: [
	                            toast_component.ToastComponent
	                        ],
	                        imports: [
	                            common.CommonModule
	                        ],
	                        exports: [toast_component.ToastComponent]
	                    },] }
	        ];
	        return ToastModule;
	    }());
	    exports.ToastModule = ToastModule;
	    
	});
	unwrapExports(toast_module);
	var toast_module_1 = toast_module.ToastModule;

	var component_module = createCommonjsModule(function (module, exports) {
	    /**
	     * @fileoverview added by tsickle
	     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
	     */
	    Object.defineProperty(exports, "__esModule", { value: true });
	    var ComponentModule = /** @class */ (function () {
	        function ComponentModule() {
	        }
	        ComponentModule.decorators = [
	            { type: core.NgModule, args: [{
	                        imports: [
	                            modal_module.ModalModule, collapsible_module.CollapsibleModule, tabs_module.TabsModule, dropdown_module.DropdownModule, loading_module.LoadingModule, pagination_module.PaginationModule, toast_module.ToastModule
	                        ],
	                        exports: [
	                            modal_module.ModalModule, collapsible_module.CollapsibleModule, tabs_module.TabsModule, dropdown_module.DropdownModule, loading_module.LoadingModule, pagination_module.PaginationModule, toast_module.ToastModule
	                        ]
	                    },] }
	        ];
	        return ComponentModule;
	    }());
	    exports.ComponentModule = ComponentModule;
	    
	});
	unwrapExports(component_module);
	var component_module_1 = component_module.ComponentModule;

	var square_directive = createCommonjsModule(function (module, exports) {
	    /**
	     * @fileoverview added by tsickle
	     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
	     */
	    Object.defineProperty(exports, "__esModule", { value: true });
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
	            { type: core.Directive, args: [{
	                        selector: '[square]'
	                    },] }
	        ];
	        /** @nocollapse */
	        SquareDirective.ctorParameters = function () {
	            return [
	                { type: core.ElementRef },
	                { type: core.Renderer2 }
	            ];
	        };
	        SquareDirective.propDecorators = {
	            onResize: [{ type: core.HostListener, args: ['window:resize',] }]
	        };
	        return SquareDirective;
	    }());
	    exports.SquareDirective = SquareDirective;
	    
	});
	unwrapExports(square_directive);
	var square_directive_1 = square_directive.SquareDirective;

	var scrollDown = createCommonjsModule(function (module, exports) {
	    /**
	     * @fileoverview added by tsickle
	     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
	     */
	    Object.defineProperty(exports, "__esModule", { value: true });
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
	            { type: core.Directive, args: [{
	                        selector: '[scroll-down]'
	                    },] }
	        ];
	        /** @nocollapse */
	        ScrollDownDirective.ctorParameters = function () {
	            return [
	                { type: core.ElementRef },
	                { type: core.Renderer2 }
	            ];
	        };
	        ScrollDownDirective.propDecorators = {
	            active: [{ type: core.Input }]
	        };
	        return ScrollDownDirective;
	    }());
	    exports.ScrollDownDirective = ScrollDownDirective;
	    
	});
	unwrapExports(scrollDown);
	var scrollDown_1 = scrollDown.ScrollDownDirective;

	var spread_directive = createCommonjsModule(function (module, exports) {
	    /**
	     * @fileoverview added by tsickle
	     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
	     */
	    Object.defineProperty(exports, "__esModule", { value: true });
	    var lodash_1 = tslib_es6.__importDefault(lodash);
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
	                    lodash_1.default.forOwn(this._context, function (value, key) {
	                        if (!_this._elRef.nativeElement[key] || key === 'type')
	                            (value instanceof Function)
	                                ? _this._renderer.listen(_this._elRef.nativeElement, key, value)
	                                : _this._renderer.setAttribute(_this._elRef.nativeElement, key, value);
	                    });
	                }
	            };
	        SpreadDirective.decorators = [
	            { type: core.Directive, args: [{
	                        selector: '[spread]'
	                    },] }
	        ];
	        /** @nocollapse */
	        SpreadDirective.ctorParameters = function () {
	            return [
	                { type: core.ViewContainerRef },
	                { type: core.Renderer2 },
	                { type: core.ElementRef }
	            ];
	        };
	        SpreadDirective.propDecorators = {
	            _context: [{ type: core.Input, args: ['spread',] }]
	        };
	        return SpreadDirective;
	    }());
	    exports.SpreadDirective = SpreadDirective;
	    
	});
	unwrapExports(spread_directive);
	var spread_directive_1 = spread_directive.SpreadDirective;

	var removeHostElement_directive = createCommonjsModule(function (module, exports) {
	    /**
	     * @fileoverview added by tsickle
	     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
	     */
	    Object.defineProperty(exports, "__esModule", { value: true });
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
	            { type: core.Directive, args: [{
	                        selector: '[removeHostElement]'
	                    },] }
	        ];
	        /** @nocollapse */
	        RemoveHostElementDirective.ctorParameters = function () {
	            return [
	                { type: core.ViewContainerRef }
	            ];
	        };
	        return RemoveHostElementDirective;
	    }());
	    exports.RemoveHostElementDirective = RemoveHostElementDirective;
	    
	});
	unwrapExports(removeHostElement_directive);
	var removeHostElement_directive_1 = removeHostElement_directive.RemoveHostElementDirective;

	var template_directive = createCommonjsModule(function (module, exports) {
	    /**
	     * @fileoverview added by tsickle
	     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
	     */
	    Object.defineProperty(exports, "__esModule", { value: true });
	    var IonarTemplateDirective = /** @class */ (function () {
	        function IonarTemplateDirective(templateRef) {
	            this.templateRef = templateRef;
	            this.name = '';
	        }
	        IonarTemplateDirective.decorators = [
	            { type: core.Directive, args: [{
	                        selector: '[ioTemplate]'
	                    },] }
	        ];
	        /** @nocollapse */
	        IonarTemplateDirective.ctorParameters = function () {
	            return [
	                { type: core.TemplateRef }
	            ];
	        };
	        IonarTemplateDirective.propDecorators = {
	            name: [{ type: core.Input }],
	            component: [{ type: core.Input }]
	        };
	        return IonarTemplateDirective;
	    }());
	    exports.IonarTemplateDirective = IonarTemplateDirective;
	    
	});
	unwrapExports(template_directive);
	var template_directive_1 = template_directive.IonarTemplateDirective;

	var directive_module = createCommonjsModule(function (module, exports) {
	    /**
	     * @fileoverview added by tsickle
	     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
	     */
	    Object.defineProperty(exports, "__esModule", { value: true });
	    var DirectiveModule = /** @class */ (function () {
	        function DirectiveModule() {
	        }
	        DirectiveModule.decorators = [
	            { type: core.NgModule, args: [{
	                        declarations: [
	                            square_directive.SquareDirective, scrollDown.ScrollDownDirective, spread_directive.SpreadDirective, removeHostElement_directive.RemoveHostElementDirective, template_directive.IonarTemplateDirective
	                        ],
	                        exports: [
	                            square_directive.SquareDirective, scrollDown.ScrollDownDirective, spread_directive.SpreadDirective, removeHostElement_directive.RemoveHostElementDirective, template_directive.IonarTemplateDirective
	                        ]
	                    },] }
	        ];
	        return DirectiveModule;
	    }());
	    exports.DirectiveModule = DirectiveModule;
	    
	});
	unwrapExports(directive_module);
	var directive_module_1 = directive_module.DirectiveModule;

	var slide_directive = createCommonjsModule(function (module, exports) {
	    /**
	     * @fileoverview added by tsickle
	     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
	     */
	    Object.defineProperty(exports, "__esModule", { value: true });
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
	            { type: core.Directive, args: [{
	                        selector: '[slide]'
	                    },] }
	        ];
	        /** @nocollapse */
	        SlideDirective.ctorParameters = function () {
	            return [
	                { type: core.TemplateRef }
	            ];
	        };
	        return SlideDirective;
	    }());
	    exports.SlideDirective = SlideDirective;
	    
	});
	unwrapExports(slide_directive);
	var slide_directive_1 = slide_directive.SlideDirective;

	var slide_component = createCommonjsModule(function (module, exports) {
	    /**
	     * @fileoverview added by tsickle
	     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
	     */
	    Object.defineProperty(exports, "__esModule", { value: true });
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
	            { type: core.Component, args: [{
	                        selector: 'slide',
	                        template: "\n      <ng-container *ngTemplateOutlet=\"template\"></ng-container>\n  ",
	                        styles: ["\n      :host {\n          display: flex;\n          position: absolute;\n          flex: 1;\n          width: 100%;\n          height: 100%;\n\n      }\n  "]
	                    }] }
	        ];
	        /** @nocollapse */
	        SlideComponent.ctorParameters = function () {
	            return [
	                { type: core.ElementRef },
	                { type: core.ChangeDetectorRef }
	            ];
	        };
	        SlideComponent.propDecorators = {
	            template: [{ type: core.Input }]
	        };
	        return SlideComponent;
	    }());
	    exports.SlideComponent = SlideComponent;
	    
	});
	unwrapExports(slide_component);
	var slide_component_1 = slide_component.SlideComponent;

	var carousel_component = createCommonjsModule(function (module, exports) {
	    /**
	     * @fileoverview added by tsickle
	     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
	     */
	    Object.defineProperty(exports, "__esModule", { value: true });
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
	                var factory = _this.resolver.resolveComponentFactory(slide_component.SlideComponent);
	                /** @type {?} */
	                var compRef = _this.carousel.createComponent(factory);
	                compRef.instance.template = _this.item_dir_list.toArray()[i].tplRef;
	                compRef.instance.ngOnInit();
	                return compRef;
	            };
	            this.createAni = function (compRef, entrance, direction) {
	                if (entrance === void 0) {
	                    entrance = 'entrance';
	                }
	                if (direction === void 0) {
	                    direction = 'next';
	                }
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
	                if (entrance === void 0) {
	                    entrance = 'entrance';
	                }
	                if (direction === void 0) {
	                    direction = 'next';
	                }
	                return (entrance === 'entrance')
	                    ? (direction === 'next') ? animations.useAnimation(animations$1.slideInRightAnimation, { params: { timing: 500 } }) : animations.useAnimation(animations$1.slideInLeftAnimation, { params: { timing: 500 } })
	                    : (direction === 'next') ? animations.useAnimation(animations$1.slideOutLeftAnimation, { params: { timing: 500 } }) : animations.useAnimation(animations$1.slideOutRightAnimation, { params: { timing: 500 } });
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
	            { type: core.Component, args: [{
	                        selector: 'io-carousel',
	                        template: "<div class=\"arrow-left\" (click)=\"previousSlide()\">\r\n   <\r\n</div>\r\n\r\n<ng-container  #carousel>\r\n\r\n</ng-container>\r\n\r\n\r\n\r\n<div class=\"arrow-right\" (click)=\"nextSlide()\">\r\n    >\r\n</div>\r\n\r\n",
	                        styles: [":host{background-color:transparent;display:flex;position:relative;min-height:300px;min-width:700px}.arrow-left,.arrow-right{cursor:pointer;display:flex;align-items:center;font-size:2.5rem;position:absolute;height:100%;z-index:2;width:10rem}.arrow-left .fa-chevron-left,.arrow-left fa-chevron-right,.arrow-right .fa-chevron-left,.arrow-right fa-chevron-right{color:#000}.arrow-left{left:0}.arrow-right{right:0}"]
	                    }] }
	        ];
	        /** @nocollapse */
	        CarouselComponent.ctorParameters = function () {
	            return [
	                { type: core.ChangeDetectorRef },
	                { type: core.ViewContainerRef },
	                { type: animations.AnimationBuilder },
	                { type: core.ComponentFactoryResolver }
	            ];
	        };
	        CarouselComponent.propDecorators = {
	            item_dir_list: [{ type: core.ContentChildren, args: [slide_directive.SlideDirective,] }],
	            carousel: [{ type: core.ViewChild, args: ['carousel', { read: core.ViewContainerRef },] }]
	        };
	        return CarouselComponent;
	    }());
	    exports.CarouselComponent = CarouselComponent;
	    
	});
	unwrapExports(carousel_component);
	var carousel_component_1 = carousel_component.CarouselComponent;

	var carousel_module = createCommonjsModule(function (module, exports) {
	    /**
	     * @fileoverview added by tsickle
	     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
	     */
	    Object.defineProperty(exports, "__esModule", { value: true });
	    var CarouselModule = /** @class */ (function () {
	        function CarouselModule() {
	        }
	        CarouselModule.decorators = [
	            { type: core.NgModule, args: [{
	                        imports: [
	                            common.CommonModule
	                        ],
	                        declarations: [
	                            carousel_component.CarouselComponent, slide_directive.SlideDirective, slide_component.SlideComponent
	                        ],
	                        exports: [
	                            carousel_component.CarouselComponent, slide_directive.SlideDirective
	                        ],
	                        entryComponents: [slide_component.SlideComponent]
	                    },] }
	        ];
	        return CarouselModule;
	    }());
	    exports.CarouselModule = CarouselModule;
	    
	});
	unwrapExports(carousel_module);
	var carousel_module_1 = carousel_module.CarouselModule;

	var packages_module = createCommonjsModule(function (module, exports) {
	    /**
	     * @fileoverview added by tsickle
	     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
	     */
	    Object.defineProperty(exports, "__esModule", { value: true });
	    var PackagesModule = /** @class */ (function () {
	        function PackagesModule() {
	        }
	        PackagesModule.decorators = [
	            { type: core.NgModule, args: [{
	                        imports: [
	                            carousel_module.CarouselModule
	                        ],
	                        exports: [
	                            carousel_module.CarouselModule
	                        ]
	                    },] }
	        ];
	        return PackagesModule;
	    }());
	    exports.PackagesModule = PackagesModule;
	    
	});
	unwrapExports(packages_module);
	var packages_module_1 = packages_module.PackagesModule;

	var isEmptyTemplate = createCommonjsModule(function (module, exports) {
	    /**
	     * @fileoverview added by tsickle
	     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
	     */
	    Object.defineProperty(exports, "__esModule", { value: true });
	    var lodash_1 = tslib_es6.__importDefault(lodash);
	    /** @type {?} */
	    exports.isEmptyTemplate = function (element) {
	        /** @type {?} */
	        var nodes = element.nativeElement.childNodes;
	        return lodash_1.default.every(nodes, function (node) {
	            return (node.nodeType === 8);
	        });
	    };
	    
	});
	unwrapExports(isEmptyTemplate);
	var isEmptyTemplate_1 = isEmptyTemplate.isEmptyTemplate;

	var removeHost = createCommonjsModule(function (module, exports) {
	    /**
	     * @fileoverview added by tsickle
	     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
	     */
	    Object.defineProperty(exports, "__esModule", { value: true });
	    /** @type {?} */
	    exports.removeHost = function (element) {
	        /** @type {?} */
	        var nativeElement = element.nativeElement;
	        /** @type {?} */
	        var parentElement = nativeElement.parentElement;
	        if (parentElement) {
	            parentElement.removeChild(nativeElement);
	        }
	    };
	    
	});
	unwrapExports(removeHost);
	var removeHost_1 = removeHost.removeHost;

	var utils = createCommonjsModule(function (module, exports) {
	    /**
	     * @fileoverview added by tsickle
	     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
	     */
	    Object.defineProperty(exports, "__esModule", { value: true });
	    exports.isEmptyTemplate = isEmptyTemplate.isEmptyTemplate;
	    exports.removeHost = removeHost.removeHost;
	    
	});
	unwrapExports(utils);
	var utils_1 = utils.isEmptyTemplate;
	var utils_2 = utils.removeHost;

	var defaultContent_component = createCommonjsModule(function (module, exports) {
	    /**
	     * @fileoverview added by tsickle
	     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
	     */
	    Object.defineProperty(exports, "__esModule", { value: true });
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
	             */ function (view) {
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
	                        utils.removeHost(this._elRef);
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
	            { type: core.Component, args: [{
	                        selector: 'default-content',
	                        template: ""
	                    }] }
	        ];
	        /** @nocollapse */
	        DefaultContentComponent.ctorParameters = function () {
	            return [
	                { type: core.ElementRef },
	                { type: core.ViewContainerRef },
	                { type: core.ChangeDetectorRef }
	            ];
	        };
	        DefaultContentComponent.propDecorators = {
	            context: [{ type: core.Input }]
	        };
	        return DefaultContentComponent;
	    }());
	    exports.DefaultContentComponent = DefaultContentComponent;
	    
	});
	unwrapExports(defaultContent_component);
	var defaultContent_component_1 = defaultContent_component.DefaultContentComponent;

	var defaultContent_module = createCommonjsModule(function (module, exports) {
	    /**
	     * @fileoverview added by tsickle
	     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
	     */
	    Object.defineProperty(exports, "__esModule", { value: true });
	    var DefaultContentModule = /** @class */ (function () {
	        function DefaultContentModule() {
	        }
	        DefaultContentModule.decorators = [
	            { type: core.NgModule, args: [{
	                        declarations: [
	                            defaultContent_component.DefaultContentComponent
	                        ],
	                        exports: [
	                            defaultContent_component.DefaultContentComponent
	                        ]
	                    },] }
	        ];
	        return DefaultContentModule;
	    }());
	    exports.DefaultContentModule = DefaultContentModule;
	    
	});
	unwrapExports(defaultContent_module);
	var defaultContent_module_1 = defaultContent_module.DefaultContentModule;

	var ui_module = createCommonjsModule(function (module, exports) {
	    /**
	     * @fileoverview added by tsickle
	     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
	     */
	    Object.defineProperty(exports, "__esModule", { value: true });
	    var IonarUI = /** @class */ (function () {
	        function IonarUI() {
	        }
	        IonarUI.decorators = [
	            { type: core.NgModule, args: [{
	                        imports: [
	                            component_module.ComponentModule,
	                            element_module.ElementModule,
	                            packages_module.PackagesModule,
	                            directive_module.DirectiveModule,
	                            defaultContent_module.DefaultContentModule
	                        ],
	                        exports: [
	                            component_module.ComponentModule,
	                            element_module.ElementModule,
	                            packages_module.PackagesModule,
	                            directive_module.DirectiveModule,
	                            defaultContent_module.DefaultContentModule
	                        ]
	                    },] }
	        ];
	        return IonarUI;
	    }());
	    exports.IonarUI = IonarUI;
	    
	});
	unwrapExports(ui_module);
	var ui_module_1 = ui_module.IonarUI;

	var components = createCommonjsModule(function (module, exports) {
	    /**
	     * @fileoverview added by tsickle
	     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
	     */
	    Object.defineProperty(exports, "__esModule", { value: true });
	    exports.IonarLoadingService = loading_service.IonarLoadingService;
	    exports.IonarToastService = toast_service.IonarToastService;
	    
	});
	unwrapExports(components);
	var components_1 = components.IonarLoadingService;
	var components_2 = components.IonarToastService;

	var elements = createCommonjsModule(function (module, exports) {
	    /**
	     * @fileoverview added by tsickle
	     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
	     */
	    Object.defineProperty(exports, "__esModule", { value: true });
	    exports.DefaultContentComponent = defaultContent_component.DefaultContentComponent;
	    
	});
	unwrapExports(elements);
	var elements_1 = elements.DefaultContentComponent;

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
	                _this._contextData = tslib_es6.__assign({}, _this._contextData, properties, events);
	                _this.cd.markForCheck();
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
	                    if (utils.isEmptyTemplate(_this._elRef) || !_this._contentTemplate) {
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
	             */ function () {
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
	                console.log(this._defaultContentComp);
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
	            _contentTemplate: [{ type: core.ViewChild, args: ['content_template', { read: core.TemplateRef },] }],
	            _defaultContentComp: [{ type: core.ContentChild, args: [defaultContent_component.DefaultContentComponent,] }]
	        };
	        return IoAbstractUI;
	    }());
	    exports.IoAbstractUI = IoAbstractUI;
	    
	});
	unwrapExports(IoAbstractUI_1);
	var IoAbstractUI_2 = IoAbstractUI_1.ComponentContext;
	var IoAbstractUI_3 = IoAbstractUI_1.IoAbstractUI;

	var interfaces = createCommonjsModule(function (module, exports) {
	    /**
	     * @fileoverview added by tsickle
	     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
	     */
	    Object.defineProperty(exports, "__esModule", { value: true });
	    exports.IoAbstractUI = IoAbstractUI_1.IoAbstractUI;
	    
	});
	unwrapExports(interfaces);
	var interfaces_1 = interfaces.IoAbstractUI;

	var directives = createCommonjsModule(function (module, exports) {
	    /**
	     * @fileoverview added by tsickle
	     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
	     */
	    Object.defineProperty(exports, "__esModule", { value: true });
	    exports.IonarTemplateDirective = template_directive.IonarTemplateDirective;
	    
	});
	unwrapExports(directives);
	var directives_1 = directives.IonarTemplateDirective;

	var esm5 = createCommonjsModule(function (module, exports) {
	    /**
	     * @fileoverview added by tsickle
	     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
	     */
	    Object.defineProperty(exports, "__esModule", { value: true });
	    exports.IonarUI = ui_module.IonarUI;
	    exports.IonarLoadingService = components.IonarLoadingService;
	    exports.IonarToastService = components.IonarToastService;
	    exports.isEmptyTemplate = utils.isEmptyTemplate;
	    exports.removeHost = utils.removeHost;
	    exports.DefaultContentComponent = elements.DefaultContentComponent;
	    exports.IoAbstractUI = interfaces.IoAbstractUI;
	    exports.IonarTemplateDirective = directives.IonarTemplateDirective;
	    
	});
	unwrapExports(esm5);
	var esm5_1 = esm5.IonarUI;
	var esm5_2 = esm5.IonarLoadingService;
	var esm5_3 = esm5.IonarToastService;
	var esm5_4 = esm5.isEmptyTemplate;
	var esm5_5 = esm5.removeHost;
	var esm5_6 = esm5.DefaultContentComponent;
	var esm5_7 = esm5.IoAbstractUI;
	var esm5_8 = esm5.IonarTemplateDirective;

	var ionarUi = createCommonjsModule(function (module, exports) {
	    /**
	     * @fileoverview added by tsickle
	     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
	     */
	    Object.defineProperty(exports, "__esModule", { value: true });
	    /**
	     * Generated bundle index. Do not edit.
	     */
	    exports.IonarUI = esm5.IonarUI;
	    exports.IonarLoadingService = esm5.IonarLoadingService;
	    exports.IonarToastService = esm5.IonarToastService;
	    exports.isEmptyTemplate = esm5.isEmptyTemplate;
	    exports.removeHost = esm5.removeHost;
	    exports.DefaultContentComponent = esm5.DefaultContentComponent;
	    exports.IoAbstractUI = esm5.IoAbstractUI;
	    exports.IonarTemplateDirective = esm5.IonarTemplateDirective;
	    exports.ɵd = collapsible_module.CollapsibleModule;
	    exports.ɵe = collapsible_directive.CollapsibleDirective;
	    exports.ɵf = content_directive.ContentDirective;
	    exports.ɵg = toggle_directive.ToggleDirective;
	    exports.ɵa = component_module.ComponentModule;
	    exports.ɵo = menu_component.MenuComponent;
	    exports.ɵp = toggle_component.ToggleComponent;
	    exports.ɵn = dropdown_component.DropdownComponent;
	    exports.ɵm = dropdown_module.DropdownModule;
	    exports.ɵr = loading_component.LoadingComponent;
	    exports.ɵq = loading_module.LoadingModule;
	    exports.ɵs = loading_service.IonarLoadingService;
	    exports.ɵv = circle_component.CircleComponent;
	    exports.ɵt = spinner_component.SpinnerComponent;
	    exports.ɵu = spinner_component.SpinnerTemplate;
	    exports.ɵc = modal_component.ModalComponent;
	    exports.ɵb = modal_module.ModalModule;
	    exports.ɵy = pageLink_component.PageLinkComponent;
	    exports.ɵz = pageNumber_component.PageNumberComponent;
	    exports.ɵx = pagination_component.PaginationComponent;
	    exports.ɵw = pagination_module.PaginationModule;
	    exports.ɵl = content_component.TabContentComponent;
	    exports.ɵk = label_component.TabLabelComponent;
	    exports.ɵj = tab_component.TabComponent;
	    exports.ɵi = tabs_component.TabsComponent;
	    exports.ɵh = tabs_module.TabsModule;
	    exports.ɵbb = toast_component.ToastComponent;
	    exports.ɵba = toast_module.ToastModule;
	    exports.ɵbc = toast_service.IonarToastService;
	    exports.ɵbm = directive_module.DirectiveModule;
	    exports.ɵbq = removeHostElement_directive.RemoveHostElementDirective;
	    exports.ɵbo = scrollDown.ScrollDownDirective;
	    exports.ɵbp = spread_directive.SpreadDirective;
	    exports.ɵbn = square_directive.SquareDirective;
	    exports.ɵbr = template_directive.IonarTemplateDirective;
	    exports.ɵbg = button_component.ButtonComponent;
	    exports.ɵbf = button_module.ButtonModule;
	    exports.ɵbt = defaultContent_component.DefaultContentComponent;
	    exports.ɵbs = defaultContent_module.DefaultContentModule;
	    exports.ɵbd = element_module.ElementModule;
	    exports.ɵbe = flex_element.FlexElement;
	    exports.ɵbj = carousel_component.CarouselComponent;
	    exports.ɵbi = carousel_module.CarouselModule;
	    exports.ɵbl = slide_component.SlideComponent;
	    exports.ɵbk = slide_directive.SlideDirective;
	    exports.ɵbh = packages_module.PackagesModule;
	    
	});
	var ionarUi$1 = unwrapExports(ionarUi);
	var ionarUi_1 = ionarUi.IonarUI;
	var ionarUi_2 = ionarUi.IonarLoadingService;
	var ionarUi_3 = ionarUi.IonarToastService;
	var ionarUi_4 = ionarUi.isEmptyTemplate;
	var ionarUi_5 = ionarUi.removeHost;
	var ionarUi_6 = ionarUi.DefaultContentComponent;
	var ionarUi_7 = ionarUi.IoAbstractUI;
	var ionarUi_8 = ionarUi.IonarTemplateDirective;

	exports.default = ionarUi$1;
	exports.IonarUI = ionarUi_1;
	exports.IonarLoadingService = ionarUi_2;
	exports.IonarToastService = ionarUi_3;
	exports.isEmptyTemplate = ionarUi_4;
	exports.removeHost = ionarUi_5;
	exports.DefaultContentComponent = ionarUi_6;
	exports.IoAbstractUI = ionarUi_7;
	exports.IonarTemplateDirective = ionarUi_8;

	Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=ionar-ui.umd.js.map