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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5hdGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AaW9uYXIvdWkvIiwic291cmNlcyI6WyJjb21wb25lbnRzL3BhZ2luYXRpb24vcGFnaW5hdGlvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUdULEtBQUssRUFDTCxNQUFNLEVBQ04sWUFBWSxFQUdaLGVBQWUsRUFBaUIsV0FBVyxFQUFFLFNBQVMsRUFBRSxpQkFBaUIsRUFBRSxTQUFTLEVBQ3JGLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sQ0FBQyxNQUFNLFFBQVEsQ0FBQztBQUN2QixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUUvRTtJQXVFRSw2QkFBb0IsRUFBcUI7UUFBekMsaUJBQ0M7UUFEbUIsT0FBRSxHQUFGLEVBQUUsQ0FBbUI7Ozs7O1FBckRoQyxhQUFRLEdBQVksS0FBSyxDQUFDOzs7O1FBSzFCLGFBQVEsR0FBWSxLQUFLLENBQUM7Ozs7UUFLMUIsY0FBUyxHQUFZLElBQUksQ0FBQzs7OztRQUsxQixhQUFRLEdBQVksSUFBSSxDQUFDOzs7OztRQU16QixXQUFNLEdBQVksSUFBSSxDQUFDOzs7O1FBS3ZCLFVBQUssR0FBVyxDQUFDLENBQUM7Ozs7UUFVbEIsU0FBSSxHQUFXLENBQUMsQ0FBQztRQUVoQixXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQU10QyxVQUFLLEdBQVksRUFBRSxDQUFDO1FBaUpaLGlCQUFZLEdBQUcsVUFBQyxHQUFHLEVBQUUsS0FBSzs7Z0JBRTVCLFlBQStCO1lBRW5DLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLGlCQUFpQixDQUFDLE9BQU8sRUFBRSxFQUFFLFVBQUMsSUFBdUI7Z0JBQy9ELElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxH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eUJBTUwsS0FBSzt3QkFLTCxLQUFLOzBCQUtMLEtBQUs7dUJBS0wsS0FBSzt5QkFFTCxNQUFNO29DQVFOLGVBQWUsU0FBQyxpQkFBaUI7d0NBRWpDLFNBQVMsU0FBQyxzQkFBc0I7dUNBQ2hDLFNBQVMsU0FBQyxxQkFBcUI7d0NBQy9CLFNBQVMsU0FBQyxzQkFBc0I7dUNBQ2hDLFNBQVMsU0FBQyxxQkFBcUI7O0lBcUtsQywwQkFBQztDQUFBLEFBMU9ELElBME9DO1NBOU5ZLG1CQUFtQjs7Ozs7O0lBTTlCLHVDQUFtQzs7Ozs7SUFLbkMsdUNBQW1DOzs7OztJQUtuQyx3Q0FBbUM7Ozs7O0lBS25DLHVDQUFrQzs7Ozs7O0lBTWxDLHFDQUFnQzs7Ozs7SUFLaEMsb0NBQTJCOzs7OztJQUszQixzQ0FBeUI7Ozs7O0lBS3pCLG1DQUEwQjs7SUFFMUIscUNBQXNDOztJQUV0Qyw2Q0FBaUM7O0lBQ2pDLDRDQUFnQzs7SUFDaEMsNkNBQWlDOztJQUNqQyw2Q0FBaUM7O0lBQ2pDLG9DQUFvQjs7Ozs7SUFFcEIsZ0RBQTRGOzs7OztJQUU1RixvREFBbUY7Ozs7O0lBQ25GLG1EQUFpRjs7Ozs7SUFDakYsb0RBQW1GOzs7OztJQUNuRixtREFBaUY7Ozs7O0lBMElqRiwyQ0FZRTs7Ozs7SUFFRixrREFZRTs7Ozs7SUFsS1UsaUNBQTZCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBPbkluaXQsXG4gIE9uRGVzdHJveSxcbiAgSW5wdXQsXG4gIE91dHB1dCxcbiAgRXZlbnRFbWl0dGVyLFxuICBPbkNoYW5nZXMsXG4gIFNpbXBsZUNoYW5nZXMsXG4gIENvbnRlbnRDaGlsZHJlbiwgQWZ0ZXJWaWV3SW5pdCwgVGVtcGxhdGVSZWYsIFF1ZXJ5TGlzdCwgQ2hhbmdlRGV0ZWN0b3JSZWYsIFZpZXdDaGlsZFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgeyBQYWdlTGlua0NvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9wYWdlLWxpbmsvcGFnZS1saW5rLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2lvLXBhZ2luYXRpb24nLFxuICB0ZW1wbGF0ZVVybDogYC4vcGFnaW5hdGlvbi5jb21wb25lbnQuaHRtbGAsXG4gIHN0eWxlczogW2BcbiAgICAgIDpob3N0IHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgICAgICBmbGV4LXNocmluazogMDtcbiAgICAgIH1cbiAgYF1cbn0pXG5leHBvcnQgY2xhc3MgUGFnaW5hdGlvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xuXG4gIC8vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICBWYXJpYWJsZXMgICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS8vL1xuICAvKipcbiAgICogV2hldGhlciB0byBkaXNhYmxlIGJ1dHRvbnMgZnJvbSB1c2VyIGlucHV0XG4gICAqL1xuICBASW5wdXQoKSBkaXNhYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiAgV2hldGhlciB0byBzaG93IHRoZSBcIkZpcnN0XCIgYW5kIFwiTGFzdFwiIHBhZ2UgbGlua3NcbiAgICovXG4gIEBJbnB1dCgpIGJvdW5kYXJ5OiBib29sZWFuID0gZmFsc2U7XG5cbiAgLyoqXG4gICAqICBXaGV0aGVyIHRvIHNob3cgdGhlIFwiTmV4dFwiIGFuZCBcIlByZXZpb3VzXCIgcGFnZSBsaW5rc1xuICAgKi9cbiAgQElucHV0KCkgZGlyZWN0aW9uOiBib29sZWFuID0gdHJ1ZTtcblxuICAvKipcbiAgICogIFdoZXRoZXIgdG8gc2hvdyBlbGxpcHNpcyBzeW1ib2xzIGFuZCBmaXJzdC9sYXN0IHBhZ2UgbnVtYmVycyB3aGVuIG1heFNpemUgPiBudW1iZXIgb2YgcGFnZXNcbiAgICovXG4gIEBJbnB1dCgpIGVsbGlwc2VzOiBib29sZWFuID0gdHJ1ZTtcblxuICAvKipcbiAgICogIFdoZXRoZXIgdG8gcm90YXRlIHBhZ2VzIHdoZW4gbWF4UGFnZSA+IG51bWJlciBvZiBwYWdlcy5cbiAgICogIEN1cnJlbnQgcGFnZSB3aWxsIGJlIGluIHRoZSBtaWRkbGVcbiAgICovXG4gIEBJbnB1dCgpIHJvdGF0ZTogYm9vbGVhbiA9IHRydWU7XG5cbiAgLyoqXG4gICAqICBOdW1iZXIgb2YgaXRlbXMgaW4gY29sbGVjdGlvbi5cbiAgICovXG4gIEBJbnB1dCgpIHRvdGFsOiBudW1iZXIgPSAwO1xuXG4gIC8qKlxuICAgKiAgTWF4aW11bSBudW1iZXIgb2YgcGFnZXMgdG8gZGlzcGxheS5cbiAgICovXG4gIEBJbnB1dCgpIG1heFNpemU6IG51bWJlcjtcblxuICAvKipcbiAgICogIEN1cnJlbnQgcGFnZS4gUGFnZSBudW1iZXJzIHN0YXJ0IHdpdGggMVxuICAgKi9cbiAgQElucHV0KCkgcGFnZTogbnVtYmVyID0gMTtcblxuICBAT3V0cHV0KCkgY2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIGJvdW5kYXJ5X2ZpcnN0OiBUZW1wbGF0ZVJlZjxhbnk+O1xuICBib3VuZGFyeV9sYXN0OiBUZW1wbGF0ZVJlZjxhbnk+O1xuICBkaXJlY3Rpb25fcHJldjogVGVtcGxhdGVSZWY8YW55PjtcbiAgZGlyZWN0aW9uX25leHQ6IFRlbXBsYXRlUmVmPGFueT47XG4gIHBhZ2VzOiAoYW55KVtdID0gW107XG5cbiAgQENvbnRlbnRDaGlsZHJlbihQYWdlTGlua0NvbXBvbmVudCkgcHJpdmF0ZSBfcGFnZUxpbmtDb21wTGlzdDogUXVlcnlMaXN0PFBhZ2VMaW5rQ29tcG9uZW50PjtcblxuICBAVmlld0NoaWxkKCdib3VuZGFyeUZpcnN0RGVmYXVsdCcpIHByaXZhdGUgX2JvdW5kYXJ5Rmlyc3REZWZhdWx0OiBUZW1wbGF0ZVJlZjxhbnk+O1xuICBAVmlld0NoaWxkKCdib3VuZGFyeUxhc3REZWZhdWx0JykgcHJpdmF0ZSBfYm91bmRhcnlMYXN0RGVmYXVsdDogVGVtcGxhdGVSZWY8YW55PjtcbiAgQFZpZXdDaGlsZCgnZGlyZWN0aW9uUHJldkRlZmF1bHQnKSBwcml2YXRlIF9kaXJlY3Rpb25QcmV2RGVmYXVsdDogVGVtcGxhdGVSZWY8YW55PjtcbiAgQFZpZXdDaGlsZCgnZGlyZWN0aW9uTmV4RGVmYXVsdCcpIHByaXZhdGUgX2RpcmVjdGlvbk5leERlZmF1bHQ6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjZDogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcbiAgfVxuXG4gIC8vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICBMaWZlIEN5Y2xlIEhvb2sgICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS8vL1xuXG4gIG5nT25Jbml0KCkge1xuICAgIC8vIHRoaXMuY29udHJvbEFycmF5ID0gXy50aW1lcyh0aGlzLnRvdGFsLCBuID0+IG4gKyAxKTtcbiAgICAvL1xuICAgIC8vXG4gICAgLy8gaWYgKHRoaXMubWF4U2l6ZSkge1xuXG5cbiAgICAvLyB9XG4gICAgLy8gY29uc29sZS5sb2codGhpcy52aXNpYmxlQ29udHJvbHMpO1xuXG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgdGhpcy5fdXBkYXRlUGFnZXModGhpcy5wYWdlKTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcblxuXG4gICAgdGhpcy5ib3VuZGFyeV9maXJzdCA9IHRoaXMuX2dldFRlbXBsYXRlKCdib3VuZGFyeUxpbmtzJywgJ2ZpcnN0Jyk7XG4gICAgdGhpcy5ib3VuZGFyeV9sYXN0ID0gdGhpcy5fZ2V0VGVtcGxhdGUoJ2JvdW5kYXJ5TGlua3MnLCAnbGFzdCcpO1xuXG5cbiAgICB0aGlzLmRpcmVjdGlvbl9wcmV2ID0gdGhpcy5fZ2V0VGVtcGxhdGUoJ2RpcmVjdGlvbkxpbmtzJywgJ3ByZXYnKTtcbiAgICB0aGlzLmRpcmVjdGlvbl9uZXh0ID0gdGhpcy5fZ2V0VGVtcGxhdGUoJ2RpcmVjdGlvbkxpbmtzJywgJ25leHQnKTtcblxuXG4gICAgdGhpcy5jZC5kZXRlY3RDaGFuZ2VzKCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgfVxuXG5cbiAgLy8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gIE1haW4gRnVuY3Rpb25zICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS8vL1xuXG4gIHNlbGVjdFBhZ2UocGFnZU51bWJlcjogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5fdXBkYXRlUGFnZXMocGFnZU51bWJlcik7XG4gIH1cblxuICBwcml2YXRlIF91cGRhdGVQYWdlcyhuZXdQYWdlOiBudW1iZXIpIHtcblxuICAgIC8vIGZpbGwtaW4gbW9kZWwgbmVlZGVkIHRvIHJlbmRlciBwYWdlc1xuICAgIHRoaXMucGFnZXMubGVuZ3RoID0gMDtcbiAgICB0aGlzLnBhZ2VzID0gXy50aW1lcyh0aGlzLnRvdGFsLCBuID0+IG4gKyAxKTtcblxuICAgIC8vIHNldCBwYWdlIHdpdGhpbiAxLi5tYXggcmFuZ2VcbiAgICB0aGlzLl9zZXRQYWdlSW5SYW5nZShuZXdQYWdlKTtcblxuICAgIC8vIGFwcGx5IG1heFNpemUgaWYgbmVjZXNzYXJ5XG4gICAgaWYgKHRoaXMubWF4U2l6ZSA+IDAgJiYgdGhpcy50b3RhbCA+IHRoaXMubWF4U2l6ZSkge1xuICAgICAgbGV0IHN0YXJ0ID0gMDtcbiAgICAgIGxldCBlbmQgPSB0aGlzLnRvdGFsO1xuXG4gICAgICAvLyBlaXRoZXIgcGFnaW5hdGluZyBvciByb3RhdGluZyBwYWdlIG51bWJlcnNcbiAgICAgIGlmICh0aGlzLnJvdGF0ZSkge1xuICAgICAgICBbc3RhcnQsIGVuZF0gPSB0aGlzLl9hcHBseVJvdGF0aW9uKCk7XG4gICAgICB9XG5cblxuICAgICAgdGhpcy5wYWdlcyA9IHRoaXMucGFnZXMuc2xpY2Uoc3RhcnQsIGVuZCkuY29uY2F0KCk7XG5cbiAgICAgIC8vIGFkZGluZyBlbGxpcHNlc1xuICAgICAgdGhpcy5fYXBwbHlFbGxpcHNlcyhzdGFydCwgZW5kKTtcbiAgICB9XG4gIH1cblxuXG4gIC8qKlxuICAgKiBSb3RhdGVzIHBhZ2UgbnVtYmVycyBiYXNlZCBvbiBtYXhTaXplIGl0ZW1zIHZpc2libGUuXG4gICAqIEN1cnJlbnRseSBzZWxlY3RlZCBwYWdlIHN0YXlzIGluIHRoZSBtaWRkbGU6XG4gICAqXG4gICAqIEV4LiBmb3Igc2VsZWN0ZWQgcGFnZSA9IDY6XG4gICAqIFs1LCo2Kiw3XSBmb3IgbWF4U2l6ZSA9IDNcbiAgICogWzQsNSwqNiosN10gZm9yIG1heFNpemUgPSA0XG4gICAqL1xuICBwcml2YXRlIF9hcHBseVJvdGF0aW9uKCk6IFtudW1iZXIsIG51bWJlcl0ge1xuICAgIGxldCBzdGFydCA9IDA7XG4gICAgbGV0IGVuZCA9IHRoaXMudG90YWw7XG4gICAgbGV0IGxlZnRPZmZzZXQgPSBNYXRoLmZsb29yKHRoaXMubWF4U2l6ZSAvIDIpO1xuICAgIGxldCByaWdodE9mZnNldCA9IHRoaXMubWF4U2l6ZSAlIDIgPT09IDAgPyBsZWZ0T2Zmc2V0IC0gMSA6IGxlZnRPZmZzZXQ7XG4gICAgLy9cbiAgICBpZiAodGhpcy5wYWdlIDw9IGxlZnRPZmZzZXQpIHtcbiAgICAgIC8vIHZlcnkgYmVnaW5uaW5nLCBubyByb3RhdGlvbiAtPiBbMC4ubWF4U2l6ZV1cbiAgICAgIGVuZCA9IHRoaXMubWF4U2l6ZTtcbiAgICB9IGVsc2UgaWYgKHRoaXMudG90YWwgLSB0aGlzLnBhZ2UgPCBsZWZ0T2Zmc2V0KSB7XG4gICAgICAvLyB2ZXJ5IGVuZCwgbm8gcm90YXRpb24gLT4gW2xlbi1tYXhTaXplLi5sZW5dXG4gICAgICBzdGFydCA9IHRoaXMudG90YWwgLSB0aGlzLm1heFNpemU7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIHJvdGF0ZVxuICAgICAgc3RhcnQgPSB0aGlzLnBhZ2UgLSBsZWZ0T2Zmc2V0IC0gMTtcbiAgICAgIGVuZCA9IHRoaXMucGFnZSArIHJpZ2h0T2Zmc2V0O1xuICAgIH1cbiAgICAvL1xuICAgIHJldHVybiBbc3RhcnQsIGVuZF07XG5cbiAgICAvLyBfLmVhY2goXy50aW1lcyh0aGlzLnBhZ2UgLSAxICsgdGhpcy5tYXhTaXplKSwgcGFnZSA9PiB7XG4gICAgLy8gICB0aGlzLnZpc2libGVDb250cm9scy5wdXNoKHRoaXMuY29udHJvbEFycmF5W3BhZ2VdKTtcbiAgICAvLyB9KTtcbiAgfVxuXG5cbiAgcHJpdmF0ZSBfc2V0UGFnZUluUmFuZ2UobmV3UGFnZU5vKSB7XG5cbiAgICBpZiAobmV3UGFnZU5vICE9PSB0aGlzLnBhZ2UgJiYgdGhpcy50b3RhbCkge1xuICAgICAgdGhpcy5wYWdlID0gTWF0aC5tYXgoTWF0aC5taW4obmV3UGFnZU5vLCB0aGlzLnRvdGFsKSwgMSk7XG4gICAgICB0aGlzLmNoYW5nZS5lbWl0KG5ld1BhZ2VObyk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEFwcGVuZHMgZWxsaXBzZXMgYW5kIGZpcnN0L2xhc3QgcGFnZSBudW1iZXIgdG8gdGhlIGRpc3BsYXllZCBwYWdlc1xuICAgKi9cbiAgcHJpdmF0ZSBfYXBwbHlFbGxpcHNlcyhzdGFydDogbnVtYmVyLCBlbmQ6IG51bWJlcikge1xuICAgIGlmICh0aGlzLmVsbGlwc2VzKSB7XG4gICAgICBpZiAoc3RhcnQgPiAwKSB7XG4gICAgICAgIGlmIChzdGFydCA+IDEpIHtcbiAgICAgICAgICB0aGlzLnBhZ2VzLnVuc2hpZnQoJy4uLicpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucGFnZXMudW5zaGlmdCgxKTtcbiAgICAgIH1cbiAgICAgIGlmIChlbmQgPCB0aGlzLnRvdGFsKSB7XG4gICAgICAgIGlmIChlbmQgPCAodGhpcy50b3RhbCAtIDEpKSB7XG4gICAgICAgICAgdGhpcy5wYWdlcy5wdXNoKCcuLi4nKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnBhZ2VzLnB1c2godGhpcy50b3RhbCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cblxuICBwcml2YXRlIF9nZXRUZW1wbGF0ZSA9IChrZXksIHZhbHVlKSA9PiB7XG5cbiAgICBsZXQgcGFnZUxpbmtDb21wOiBQYWdlTGlua0NvbXBvbmVudDtcblxuICAgIF8uZWFjaCh0aGlzLl9wYWdlTGlua0NvbXBMaXN0LnRvQXJyYXkoKSwgKGl0ZW06IFBhZ2VMaW5rQ29tcG9uZW50KSA9PiB7XG4gICAgICBpZiAoXy5oYXMoaXRlbSwgW2tleV0pICYmIF8uZ2V0KGl0ZW0sIFtrZXldKSA9PT0gdmFsdWUpIHtcbiAgICAgICAgcGFnZUxpbmtDb21wID0gaXRlbTtcbiAgICAgIH1cbiAgICB9KTtcblxuXG4gICAgcmV0dXJuIHBhZ2VMaW5rQ29tcCA/IHBhZ2VMaW5rQ29tcC50cGwgOiB0aGlzLl9nZXREZWZhdWx0VGVtcGxhdGUoa2V5LCB2YWx1ZSk7XG4gIH07XG5cbiAgcHJpdmF0ZSBfZ2V0RGVmYXVsdFRlbXBsYXRlID0gKGtleSwgdmFsdWUpID0+IHtcblxuICAgIHN3aXRjaCAoYCR7a2V5fSwke3ZhbHVlfWApIHtcbiAgICAgIGNhc2UgJ2JvdW5kYXJ5TGlua3MsZmlyc3QnOlxuICAgICAgICByZXR1cm4gdGhpcy5fYm91bmRhcnlGaXJzdERlZmF1bHQ7XG4gICAgICBjYXNlICdib3VuZGFyeUxpbmtzLGxhc3QnOlxuICAgICAgICByZXR1cm4gdGhpcy5fYm91bmRhcnlMYXN0RGVmYXVsdDtcbiAgICAgIGNhc2UgJ2RpcmVjdGlvbkxpbmtzLHByZXYnOlxuICAgICAgICByZXR1cm4gdGhpcy5fZGlyZWN0aW9uUHJldkRlZmF1bHQ7XG4gICAgICBjYXNlICdkaXJlY3Rpb25MaW5rcyxuZXh0JzpcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RpcmVjdGlvbk5leERlZmF1bHQ7XG4gICAgfVxuICB9O1xufVxuIl19