/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Input, Output, EventEmitter, ContentChildren, TemplateRef, QueryList, ChangeDetectorRef, ViewChild } from '@angular/core';
import _ from 'lodash';
import { PageLinkComponent } from './components/page-link/page-link.component';
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
                _a = tslib_1.__read(this._applyRotation(), 2), start = _a[0], end = _a[1];
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
export { PaginationComponent };
if (false) {
    /**
     * Whether to disable buttons from user input
     * @type {?}
     */
    PaginationComponent.prototype.disabled;
    /**
     *  Whether to show the "First" and "Last" page links
     * @type {?}
     */
    PaginationComponent.prototype.boundary;
    /**
     *  Whether to show the "Next" and "Previous" page links
     * @type {?}
     */
    PaginationComponent.prototype.direction;
    /**
     *  Whether to show ellipsis symbols and first/last page numbers when maxSize > number of pages
     * @type {?}
     */
    PaginationComponent.prototype.ellipses;
    /**
     *  Whether to rotate pages when maxPage > number of pages.
     *  Current page will be in the middle
     * @type {?}
     */
    PaginationComponent.prototype.rotate;
    /**
     *  Number of items in collection.
     * @type {?}
     */
    PaginationComponent.prototype.total;
    /**
     *  Maximum number of pages to display.
     * @type {?}
     */
    PaginationComponent.prototype.maxSize;
    /**
     *  Current page. Page numbers start with 1
     * @type {?}
     */
    PaginationComponent.prototype.page;
    /** @type {?} */
    PaginationComponent.prototype.change;
    /** @type {?} */
    PaginationComponent.prototype.boundary_first;
    /** @type {?} */
    PaginationComponent.prototype.boundary_last;
    /** @type {?} */
    PaginationComponent.prototype.direction_prev;
    /** @type {?} */
    PaginationComponent.prototype.direction_next;
    /** @type {?} */
    PaginationComponent.prototype.pages;
    /**
     * @type {?}
     * @private
     */
    PaginationComponent.prototype._pageLinkCompList;
    /**
     * @type {?}
     * @private
     */
    PaginationComponent.prototype._boundaryFirstDefault;
    /**
     * @type {?}
     * @private
     */
    PaginationComponent.prototype._boundaryLastDefault;
    /**
     * @type {?}
     * @private
     */
    PaginationComponent.prototype._directionPrevDefault;
    /**
     * @type {?}
     * @private
     */
    PaginationComponent.prototype._directionNexDefault;
    /**
     * @type {?}
     * @private
     */
    PaginationComponent.prototype._getTemplate;
    /**
     * @type {?}
     * @private
     */
    PaginationComponent.prototype._getDefaultTemplate;
    /**
     * @type {?}
     * @private
     */
    PaginationComponent.prototype.cd;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5hdGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AaW9uYXIvdWkvIiwic291cmNlcyI6WyJjb21wb25lbnRzL3BhZ2luYXRpb24vcGFnaW5hdGlvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUdULEtBQUssRUFDTCxNQUFNLEVBQ04sWUFBWSxFQUdaLGVBQWUsRUFBaUIsV0FBVyxFQUFFLFNBQVMsRUFBRSxpQkFBaUIsRUFBRSxTQUFTLEVBQ3JGLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sQ0FBQyxNQUFNLFFBQVEsQ0FBQztBQUN2QixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUUvRTtJQXVFRSw2QkFBb0IsRUFBcUI7UUFBekMsaUJBQ0M7UUFEbUIsT0FBRSxHQUFGLEVBQUUsQ0FBbUI7Ozs7O1FBckRoQyxhQUFRLEdBQVksS0FBSyxDQUFDOzs7O1FBSzFCLGFBQVEsR0FBWSxLQUFLLENBQUM7Ozs7UUFLMUIsY0FBUyxHQUFZLElBQUksQ0FBQzs7OztRQUsxQixhQUFRLEdBQVksSUFBSSxDQUFDOzs7OztRQU16QixXQUFNLEdBQVksSUFBSSxDQUFDOzs7O1FBS3ZCLFVBQUssR0FBVyxDQUFDLENBQUM7Ozs7UUFVbEIsU0FBSSxHQUFXLENBQUMsQ0FBQztRQUVoQixXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQU10QyxVQUFLLEdBQVksRUFBRSxDQUFDO1FBaUpaLGlCQUFZLEdBQUcsVUFBQyxHQUFHLEVBQUUsS0FBSzs7Z0JBRTVCLFlBQStCO1lBRW5DLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLGlCQUFpQixDQUFDLE9BQU8sRUFBRSxFQUFFLFVBQUMsSUFBdUI7Z0JBQy9ELElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxH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eUJBTUwsS0FBSzt3QkFLTCxLQUFLOzBCQUtMLEtBQUs7dUJBS0wsS0FBSzt5QkFFTCxNQUFNO29DQVFOLGVBQWUsU0FBQyxpQkFBaUI7d0NBRWpDLFNBQVMsU0FBQyxzQkFBc0I7dUNBQ2hDLFNBQVMsU0FBQyxxQkFBcUI7d0NBQy9CLFNBQVMsU0FBQyxzQkFBc0I7dUNBQ2hDLFNBQVMsU0FBQyxxQkFBcUI7O0lBcUtsQywwQkFBQztDQUFBLEFBMU9ELElBME9DO1NBOU5ZLG1CQUFtQjs7Ozs7O0lBTTlCLHVDQUFtQzs7Ozs7SUFLbkMsdUNBQW1DOzs7OztJQUtuQyx3Q0FBbUM7Ozs7O0lBS25DLHVDQUFrQzs7Ozs7O0lBTWxDLHFDQUFnQzs7Ozs7SUFLaEMsb0NBQTJCOzs7OztJQUszQixzQ0FBeUI7Ozs7O0lBS3pCLG1DQUEwQjs7SUFFMUIscUNBQXNDOztJQUV0Qyw2Q0FBaUM7O0lBQ2pDLDRDQUFnQzs7SUFDaEMsNkNBQWlDOztJQUNqQyw2Q0FBaUM7O0lBQ2pDLG9DQUFvQjs7Ozs7SUFFcEIsZ0RBQTRGOzs7OztJQUU1RixvREFBbUY7Ozs7O0lBQ25GLG1EQUFpRjs7Ozs7SUFDakYsb0RBQW1GOzs7OztJQUNuRixtREFBaUY7Ozs7O0lBMElqRiwyQ0FZRTs7Ozs7SUFFRixrREFZRTs7Ozs7SUFsS1UsaUNBQTZCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBDb21wb25lbnQsXHJcbiAgT25Jbml0LFxyXG4gIE9uRGVzdHJveSxcclxuICBJbnB1dCxcclxuICBPdXRwdXQsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIE9uQ2hhbmdlcyxcclxuICBTaW1wbGVDaGFuZ2VzLFxyXG4gIENvbnRlbnRDaGlsZHJlbiwgQWZ0ZXJWaWV3SW5pdCwgVGVtcGxhdGVSZWYsIFF1ZXJ5TGlzdCwgQ2hhbmdlRGV0ZWN0b3JSZWYsIFZpZXdDaGlsZFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xyXG5pbXBvcnQgeyBQYWdlTGlua0NvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9wYWdlLWxpbmsvcGFnZS1saW5rLmNvbXBvbmVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2lvLXBhZ2luYXRpb24nLFxyXG4gIHRlbXBsYXRlVXJsOiBgLi9wYWdpbmF0aW9uLmNvbXBvbmVudC5odG1sYCxcclxuICBzdHlsZXM6IFtgXHJcbiAgICAgIDpob3N0IHtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICAgIGZsZXgtc2hyaW5rOiAwO1xyXG4gICAgICB9XHJcbiAgYF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFBhZ2luYXRpb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcclxuXHJcbiAgLy8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gIFZhcmlhYmxlcyAgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLy8vXHJcbiAgLyoqXHJcbiAgICogV2hldGhlciB0byBkaXNhYmxlIGJ1dHRvbnMgZnJvbSB1c2VyIGlucHV0XHJcbiAgICovXHJcbiAgQElucHV0KCkgZGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgLyoqXHJcbiAgICogIFdoZXRoZXIgdG8gc2hvdyB0aGUgXCJGaXJzdFwiIGFuZCBcIkxhc3RcIiBwYWdlIGxpbmtzXHJcbiAgICovXHJcbiAgQElucHV0KCkgYm91bmRhcnk6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgLyoqXHJcbiAgICogIFdoZXRoZXIgdG8gc2hvdyB0aGUgXCJOZXh0XCIgYW5kIFwiUHJldmlvdXNcIiBwYWdlIGxpbmtzXHJcbiAgICovXHJcbiAgQElucHV0KCkgZGlyZWN0aW9uOiBib29sZWFuID0gdHJ1ZTtcclxuXHJcbiAgLyoqXHJcbiAgICogIFdoZXRoZXIgdG8gc2hvdyBlbGxpcHNpcyBzeW1ib2xzIGFuZCBmaXJzdC9sYXN0IHBhZ2UgbnVtYmVycyB3aGVuIG1heFNpemUgPiBudW1iZXIgb2YgcGFnZXNcclxuICAgKi9cclxuICBASW5wdXQoKSBlbGxpcHNlczogYm9vbGVhbiA9IHRydWU7XHJcblxyXG4gIC8qKlxyXG4gICAqICBXaGV0aGVyIHRvIHJvdGF0ZSBwYWdlcyB3aGVuIG1heFBhZ2UgPiBudW1iZXIgb2YgcGFnZXMuXHJcbiAgICogIEN1cnJlbnQgcGFnZSB3aWxsIGJlIGluIHRoZSBtaWRkbGVcclxuICAgKi9cclxuICBASW5wdXQoKSByb3RhdGU6IGJvb2xlYW4gPSB0cnVlO1xyXG5cclxuICAvKipcclxuICAgKiAgTnVtYmVyIG9mIGl0ZW1zIGluIGNvbGxlY3Rpb24uXHJcbiAgICovXHJcbiAgQElucHV0KCkgdG90YWw6IG51bWJlciA9IDA7XHJcblxyXG4gIC8qKlxyXG4gICAqICBNYXhpbXVtIG51bWJlciBvZiBwYWdlcyB0byBkaXNwbGF5LlxyXG4gICAqL1xyXG4gIEBJbnB1dCgpIG1heFNpemU6IG51bWJlcjtcclxuXHJcbiAgLyoqXHJcbiAgICogIEN1cnJlbnQgcGFnZS4gUGFnZSBudW1iZXJzIHN0YXJ0IHdpdGggMVxyXG4gICAqL1xyXG4gIEBJbnB1dCgpIHBhZ2U6IG51bWJlciA9IDE7XHJcblxyXG4gIEBPdXRwdXQoKSBjaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gIGJvdW5kYXJ5X2ZpcnN0OiBUZW1wbGF0ZVJlZjxhbnk+O1xyXG4gIGJvdW5kYXJ5X2xhc3Q6IFRlbXBsYXRlUmVmPGFueT47XHJcbiAgZGlyZWN0aW9uX3ByZXY6IFRlbXBsYXRlUmVmPGFueT47XHJcbiAgZGlyZWN0aW9uX25leHQ6IFRlbXBsYXRlUmVmPGFueT47XHJcbiAgcGFnZXM6IChhbnkpW10gPSBbXTtcclxuXHJcbiAgQENvbnRlbnRDaGlsZHJlbihQYWdlTGlua0NvbXBvbmVudCkgcHJpdmF0ZSBfcGFnZUxpbmtDb21wTGlzdDogUXVlcnlMaXN0PFBhZ2VMaW5rQ29tcG9uZW50PjtcclxuXHJcbiAgQFZpZXdDaGlsZCgnYm91bmRhcnlGaXJzdERlZmF1bHQnKSBwcml2YXRlIF9ib3VuZGFyeUZpcnN0RGVmYXVsdDogVGVtcGxhdGVSZWY8YW55PjtcclxuICBAVmlld0NoaWxkKCdib3VuZGFyeUxhc3REZWZhdWx0JykgcHJpdmF0ZSBfYm91bmRhcnlMYXN0RGVmYXVsdDogVGVtcGxhdGVSZWY8YW55PjtcclxuICBAVmlld0NoaWxkKCdkaXJlY3Rpb25QcmV2RGVmYXVsdCcpIHByaXZhdGUgX2RpcmVjdGlvblByZXZEZWZhdWx0OiBUZW1wbGF0ZVJlZjxhbnk+O1xyXG4gIEBWaWV3Q2hpbGQoJ2RpcmVjdGlvbk5leERlZmF1bHQnKSBwcml2YXRlIF9kaXJlY3Rpb25OZXhEZWZhdWx0OiBUZW1wbGF0ZVJlZjxhbnk+O1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNkOiBDaGFuZ2VEZXRlY3RvclJlZikge1xyXG4gIH1cclxuXHJcbiAgLy8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gIExpZmUgQ3ljbGUgSG9vayAgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLy8vXHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgLy8gdGhpcy5jb250cm9sQXJyYXkgPSBfLnRpbWVzKHRoaXMudG90YWwsIG4gPT4gbiArIDEpO1xyXG4gICAgLy9cclxuICAgIC8vXHJcbiAgICAvLyBpZiAodGhpcy5tYXhTaXplKSB7XHJcblxyXG5cclxuICAgIC8vIH1cclxuICAgIC8vIGNvbnNvbGUubG9nKHRoaXMudmlzaWJsZUNvbnRyb2xzKTtcclxuXHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XHJcbiAgICB0aGlzLl91cGRhdGVQYWdlcyh0aGlzLnBhZ2UpO1xyXG4gIH1cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xyXG5cclxuXHJcbiAgICB0aGlzLmJvdW5kYXJ5X2ZpcnN0ID0gdGhpcy5fZ2V0VGVtcGxhdGUoJ2JvdW5kYXJ5TGlua3MnLCAnZmlyc3QnKTtcclxuICAgIHRoaXMuYm91bmRhcnlfbGFzdCA9IHRoaXMuX2dldFRlbXBsYXRlKCdib3VuZGFyeUxpbmtzJywgJ2xhc3QnKTtcclxuXHJcblxyXG4gICAgdGhpcy5kaXJlY3Rpb25fcHJldiA9IHRoaXMuX2dldFRlbXBsYXRlKCdkaXJlY3Rpb25MaW5rcycsICdwcmV2Jyk7XHJcbiAgICB0aGlzLmRpcmVjdGlvbl9uZXh0ID0gdGhpcy5fZ2V0VGVtcGxhdGUoJ2RpcmVjdGlvbkxpbmtzJywgJ25leHQnKTtcclxuXHJcblxyXG4gICAgdGhpcy5jZC5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICB9XHJcblxyXG5cclxuICAvLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAgTWFpbiBGdW5jdGlvbnMgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLy8vXHJcblxyXG4gIHNlbGVjdFBhZ2UocGFnZU51bWJlcjogbnVtYmVyKTogdm9pZCB7XHJcbiAgICB0aGlzLl91cGRhdGVQYWdlcyhwYWdlTnVtYmVyKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgX3VwZGF0ZVBhZ2VzKG5ld1BhZ2U6IG51bWJlcikge1xyXG5cclxuICAgIC8vIGZpbGwtaW4gbW9kZWwgbmVlZGVkIHRvIHJlbmRlciBwYWdlc1xyXG4gICAgdGhpcy5wYWdlcy5sZW5ndGggPSAwO1xyXG4gICAgdGhpcy5wYWdlcyA9IF8udGltZXModGhpcy50b3RhbCwgbiA9PiBuICsgMSk7XHJcblxyXG4gICAgLy8gc2V0IHBhZ2Ugd2l0aGluIDEuLm1heCByYW5nZVxyXG4gICAgdGhpcy5fc2V0UGFnZUluUmFuZ2UobmV3UGFnZSk7XHJcblxyXG4gICAgLy8gYXBwbHkgbWF4U2l6ZSBpZiBuZWNlc3NhcnlcclxuICAgIGlmICh0aGlzLm1heFNpemUgPiAwICYmIHRoaXMudG90YWwgPiB0aGlzLm1heFNpemUpIHtcclxuICAgICAgbGV0IHN0YXJ0ID0gMDtcclxuICAgICAgbGV0IGVuZCA9IHRoaXMudG90YWw7XHJcblxyXG4gICAgICAvLyBlaXRoZXIgcGFnaW5hdGluZyBvciByb3RhdGluZyBwYWdlIG51bWJlcnNcclxuICAgICAgaWYgKHRoaXMucm90YXRlKSB7XHJcbiAgICAgICAgW3N0YXJ0LCBlbmRdID0gdGhpcy5fYXBwbHlSb3RhdGlvbigpO1xyXG4gICAgICB9XHJcblxyXG5cclxuICAgICAgdGhpcy5wYWdlcyA9IHRoaXMucGFnZXMuc2xpY2Uoc3RhcnQsIGVuZCkuY29uY2F0KCk7XHJcblxyXG4gICAgICAvLyBhZGRpbmcgZWxsaXBzZXNcclxuICAgICAgdGhpcy5fYXBwbHlFbGxpcHNlcyhzdGFydCwgZW5kKTtcclxuICAgIH1cclxuICB9XHJcblxyXG5cclxuICAvKipcclxuICAgKiBSb3RhdGVzIHBhZ2UgbnVtYmVycyBiYXNlZCBvbiBtYXhTaXplIGl0ZW1zIHZpc2libGUuXHJcbiAgICogQ3VycmVudGx5IHNlbGVjdGVkIHBhZ2Ugc3RheXMgaW4gdGhlIG1pZGRsZTpcclxuICAgKlxyXG4gICAqIEV4LiBmb3Igc2VsZWN0ZWQgcGFnZSA9IDY6XHJcbiAgICogWzUsKjYqLDddIGZvciBtYXhTaXplID0gM1xyXG4gICAqIFs0LDUsKjYqLDddIGZvciBtYXhTaXplID0gNFxyXG4gICAqL1xyXG4gIHByaXZhdGUgX2FwcGx5Um90YXRpb24oKTogW251bWJlciwgbnVtYmVyXSB7XHJcbiAgICBsZXQgc3RhcnQgPSAwO1xyXG4gICAgbGV0IGVuZCA9IHRoaXMudG90YWw7XHJcbiAgICBsZXQgbGVmdE9mZnNldCA9IE1hdGguZmxvb3IodGhpcy5tYXhTaXplIC8gMik7XHJcbiAgICBsZXQgcmlnaHRPZmZzZXQgPSB0aGlzLm1heFNpemUgJSAyID09PSAwID8gbGVmdE9mZnNldCAtIDEgOiBsZWZ0T2Zmc2V0O1xyXG4gICAgLy9cclxuICAgIGlmICh0aGlzLnBhZ2UgPD0gbGVmdE9mZnNldCkge1xyXG4gICAgICAvLyB2ZXJ5IGJlZ2lubmluZywgbm8gcm90YXRpb24gLT4gWzAuLm1heFNpemVdXHJcbiAgICAgIGVuZCA9IHRoaXMubWF4U2l6ZTtcclxuICAgIH0gZWxzZSBpZiAodGhpcy50b3RhbCAtIHRoaXMucGFnZSA8IGxlZnRPZmZzZXQpIHtcclxuICAgICAgLy8gdmVyeSBlbmQsIG5vIHJvdGF0aW9uIC0+IFtsZW4tbWF4U2l6ZS4ubGVuXVxyXG4gICAgICBzdGFydCA9IHRoaXMudG90YWwgLSB0aGlzLm1heFNpemU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAvLyByb3RhdGVcclxuICAgICAgc3RhcnQgPSB0aGlzLnBhZ2UgLSBsZWZ0T2Zmc2V0IC0gMTtcclxuICAgICAgZW5kID0gdGhpcy5wYWdlICsgcmlnaHRPZmZzZXQ7XHJcbiAgICB9XHJcbiAgICAvL1xyXG4gICAgcmV0dXJuIFtzdGFydCwgZW5kXTtcclxuXHJcbiAgICAvLyBfLmVhY2goXy50aW1lcyh0aGlzLnBhZ2UgLSAxICsgdGhpcy5tYXhTaXplKSwgcGFnZSA9PiB7XHJcbiAgICAvLyAgIHRoaXMudmlzaWJsZUNvbnRyb2xzLnB1c2godGhpcy5jb250cm9sQXJyYXlbcGFnZV0pO1xyXG4gICAgLy8gfSk7XHJcbiAgfVxyXG5cclxuXHJcbiAgcHJpdmF0ZSBfc2V0UGFnZUluUmFuZ2UobmV3UGFnZU5vKSB7XHJcblxyXG4gICAgaWYgKG5ld1BhZ2VObyAhPT0gdGhpcy5wYWdlICYmIHRoaXMudG90YWwpIHtcclxuICAgICAgdGhpcy5wYWdlID0gTWF0aC5tYXgoTWF0aC5taW4obmV3UGFnZU5vLCB0aGlzLnRvdGFsKSwgMSk7XHJcbiAgICAgIHRoaXMuY2hhbmdlLmVtaXQobmV3UGFnZU5vKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEFwcGVuZHMgZWxsaXBzZXMgYW5kIGZpcnN0L2xhc3QgcGFnZSBudW1iZXIgdG8gdGhlIGRpc3BsYXllZCBwYWdlc1xyXG4gICAqL1xyXG4gIHByaXZhdGUgX2FwcGx5RWxsaXBzZXMoc3RhcnQ6IG51bWJlciwgZW5kOiBudW1iZXIpIHtcclxuICAgIGlmICh0aGlzLmVsbGlwc2VzKSB7XHJcbiAgICAgIGlmIChzdGFydCA+IDApIHtcclxuICAgICAgICBpZiAoc3RhcnQgPiAxKSB7XHJcbiAgICAgICAgICB0aGlzLnBhZ2VzLnVuc2hpZnQoJy4uLicpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnBhZ2VzLnVuc2hpZnQoMSk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGVuZCA8IHRoaXMudG90YWwpIHtcclxuICAgICAgICBpZiAoZW5kIDwgKHRoaXMudG90YWwgLSAxKSkge1xyXG4gICAgICAgICAgdGhpcy5wYWdlcy5wdXNoKCcuLi4nKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5wYWdlcy5wdXNoKHRoaXMudG90YWwpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuXHJcbiAgcHJpdmF0ZSBfZ2V0VGVtcGxhdGUgPSAoa2V5LCB2YWx1ZSkgPT4ge1xyXG5cclxuICAgIGxldCBwYWdlTGlua0NvbXA6IFBhZ2VMaW5rQ29tcG9uZW50O1xyXG5cclxuICAgIF8uZWFjaCh0aGlzLl9wYWdlTGlua0NvbXBMaXN0LnRvQXJyYXkoKSwgKGl0ZW06IFBhZ2VMaW5rQ29tcG9uZW50KSA9PiB7XHJcbiAgICAgIGlmIChfLmhhcyhpdGVtLCBba2V5XSkgJiYgXy5nZXQoaXRlbSwgW2tleV0pID09PSB2YWx1ZSkge1xyXG4gICAgICAgIHBhZ2VMaW5rQ29tcCA9IGl0ZW07XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuXHJcbiAgICByZXR1cm4gcGFnZUxpbmtDb21wID8gcGFnZUxpbmtDb21wLnRwbCA6IHRoaXMuX2dldERlZmF1bHRUZW1wbGF0ZShrZXksIHZhbHVlKTtcclxuICB9O1xyXG5cclxuICBwcml2YXRlIF9nZXREZWZhdWx0VGVtcGxhdGUgPSAoa2V5LCB2YWx1ZSkgPT4ge1xyXG5cclxuICAgIHN3aXRjaCAoYCR7a2V5fSwke3ZhbHVlfWApIHtcclxuICAgICAgY2FzZSAnYm91bmRhcnlMaW5rcyxmaXJzdCc6XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2JvdW5kYXJ5Rmlyc3REZWZhdWx0O1xyXG4gICAgICBjYXNlICdib3VuZGFyeUxpbmtzLGxhc3QnOlxyXG4gICAgICAgIHJldHVybiB0aGlzLl9ib3VuZGFyeUxhc3REZWZhdWx0O1xyXG4gICAgICBjYXNlICdkaXJlY3Rpb25MaW5rcyxwcmV2JzpcclxuICAgICAgICByZXR1cm4gdGhpcy5fZGlyZWN0aW9uUHJldkRlZmF1bHQ7XHJcbiAgICAgIGNhc2UgJ2RpcmVjdGlvbkxpbmtzLG5leHQnOlxyXG4gICAgICAgIHJldHVybiB0aGlzLl9kaXJlY3Rpb25OZXhEZWZhdWx0O1xyXG4gICAgfVxyXG4gIH07XHJcbn1cclxuIl19