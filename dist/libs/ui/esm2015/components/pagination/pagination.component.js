/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter, ContentChildren, TemplateRef, QueryList, ChangeDetectorRef, ViewChild } from '@angular/core';
import _ from 'lodash';
import { PageLinkComponent } from './components/page-link/page-link.component';
export class PaginationComponent {
    /**
     * @param {?} cd
     */
    constructor(cd) {
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
        this._getTemplate = (key, value) => {
            /** @type {?} */
            let pageLinkComp;
            _.each(this._pageLinkCompList.toArray(), (item) => {
                if (_.has(item, [key]) && _.get(item, [key]) === value) {
                    pageLinkComp = item;
                }
            });
            return pageLinkComp ? pageLinkComp.tpl : this._getDefaultTemplate(key, value);
        };
        this._getDefaultTemplate = (key, value) => {
            switch (`${key},${value}`) {
                case 'boundaryLinks,first':
                    return this._boundaryFirstDefault;
                case 'boundaryLinks,last':
                    return this._boundaryLastDefault;
                case 'directionLinks,prev':
                    return this._directionPrevDefault;
                case 'directionLinks,next':
                    return this._directionNexDefault;
            }
        };
    }
    ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///
    /**
     * @return {?}
     */
    ngOnInit() {
        // this.controlArray = _.times(this.total, n => n + 1);
        //
        //
        // if (this.maxSize) {
        // }
        // console.log(this.visibleControls);
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        this._updatePages(this.page);
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.boundary_first = this._getTemplate('boundaryLinks', 'first');
        this.boundary_last = this._getTemplate('boundaryLinks', 'last');
        this.direction_prev = this._getTemplate('directionLinks', 'prev');
        this.direction_next = this._getTemplate('directionLinks', 'next');
        this.cd.detectChanges();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
    }
    ///-----------------------------------------------  Main Functions  -----------------------------------------------///
    /**
     * @param {?} pageNumber
     * @return {?}
     */
    selectPage(pageNumber) {
        this._updatePages(pageNumber);
    }
    /**
     * @private
     * @param {?} newPage
     * @return {?}
     */
    _updatePages(newPage) {
        // fill-in model needed to render pages
        this.pages.length = 0;
        this.pages = _.times(this.total, n => n + 1);
        // set page within 1..max range
        this._setPageInRange(newPage);
        // apply maxSize if necessary
        if (this.maxSize > 0 && this.total > this.maxSize) {
            /** @type {?} */
            let start = 0;
            /** @type {?} */
            let end = this.total;
            // either paginating or rotating page numbers
            if (this.rotate) {
                [start, end] = this._applyRotation();
            }
            this.pages = this.pages.slice(start, end).concat();
            // adding ellipses
            this._applyEllipses(start, end);
        }
    }
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
    _applyRotation() {
        /** @type {?} */
        let start = 0;
        /** @type {?} */
        let end = this.total;
        /** @type {?} */
        let leftOffset = Math.floor(this.maxSize / 2);
        /** @type {?} */
        let rightOffset = this.maxSize % 2 === 0 ? leftOffset - 1 : leftOffset;
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
    }
    /**
     * @private
     * @param {?} newPageNo
     * @return {?}
     */
    _setPageInRange(newPageNo) {
        if (newPageNo !== this.page && this.total) {
            this.page = Math.max(Math.min(newPageNo, this.total), 1);
            this.change.emit(newPageNo);
        }
    }
    /**
     * Appends ellipses and first/last page number to the displayed pages
     * @private
     * @param {?} start
     * @param {?} end
     * @return {?}
     */
    _applyEllipses(start, end) {
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
    }
}
PaginationComponent.decorators = [
    { type: Component, args: [{
                selector: 'io-pagination',
                template: "<ng-container>\r\n    <page-link\r\n            [template]=\"boundary_first\"\r\n            [disabled]=\"page===1\"\r\n            (change)=\"selectPage(1)\"\r\n            *ngIf=\"boundary\"\r\n    ></page-link>\r\n    <page-link\r\n            [template]=\"direction_prev\"\r\n            [disabled]=\"page===1\"\r\n            (change)=\"selectPage(page - 1)\"\r\n            *ngIf=\"direction\"\r\n    ></page-link>\r\n\r\n    <ng-container *ngFor=\"let pageNumber of pages\">\r\n        <page-number\r\n                [number]=\"pageNumber\"\r\n                [currentPage]=\"this.page\"\r\n                (change)=\"selectPage($event)\"\r\n        ></page-number>\r\n    </ng-container>\r\n\r\n    <page-link\r\n            [template]=\"direction_next\"\r\n            [disabled]=\"page===total\"\r\n            (change)=\"selectPage(page + 1)\"\r\n            *ngIf=\"direction\"\r\n    ></page-link>\r\n    <page-link\r\n            [template]=\"boundary_last\"\r\n            [disabled]=\"page===total\"\r\n            (change)=\"selectPage(total)\"\r\n            *ngIf=\"boundary\"\r\n    ></page-link>\r\n</ng-container>\r\n\r\n\r\n<ng-template #boundaryFirstDefault>\r\n    <<\r\n</ng-template>\r\n<ng-template #boundaryLastDefault>\r\n    >>\r\n</ng-template>\r\n<ng-template #directionPrevDefault>\r\n    <\r\n</ng-template>\r\n<ng-template #directionNexDefault>\r\n    >\r\n</ng-template>",
                styles: [`
      :host {
          display: flex;
          justify-content: center;
          height: auto;
          flex-shrink: 0;
      }
  `]
            }] }
];
/** @nocollapse */
PaginationComponent.ctorParameters = () => [
    { type: ChangeDetectorRef }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5hdGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AaW9uYXIvdWkvIiwic291cmNlcyI6WyJjb21wb25lbnRzL3BhZ2luYXRpb24vcGFnaW5hdGlvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBR1QsS0FBSyxFQUNMLE1BQU0sRUFDTixZQUFZLEVBR1osZUFBZSxFQUFpQixXQUFXLEVBQUUsU0FBUyxFQUFFLGlCQUFpQixFQUFFLFNBQVMsRUFDckYsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxDQUFDLE1BQU0sUUFBUSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBYy9FLE1BQU0sT0FBTyxtQkFBbUI7Ozs7SUEyRDlCLFlBQW9CLEVBQXFCO1FBQXJCLE9BQUUsR0FBRixFQUFFLENBQW1COzs7OztRQXJEaEMsYUFBUSxHQUFZLEtBQUssQ0FBQzs7OztRQUsxQixhQUFRLEdBQVksS0FBSyxDQUFDOzs7O1FBSzFCLGNBQVMsR0FBWSxJQUFJLENBQUM7Ozs7UUFLMUIsYUFBUSxHQUFZLElBQUksQ0FBQzs7Ozs7UUFNekIsV0FBTSxHQUFZLElBQUksQ0FBQzs7OztRQUt2QixVQUFLLEdBQVcsQ0FBQyxDQUFDOzs7O1FBVWxCLFNBQUksR0FBVyxDQUFDLENBQUM7UUFFaEIsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFNdEMsVUFBSyxHQUFZLEVBQUUsQ0FBQztRQWlKWixpQkFBWSxHQUFHLENBQUMsR0FBRyxFQUFFLEtBQUssRUFBRSxFQUFFOztnQkFFaEMsWUFBK0I7WUFFbkMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxJQUF1QixFQUFFLEVBQUU7Z0JBQ25FLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxHQUFH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QUMsc0JBQXNCO21DQUNoQyxTQUFTLFNBQUMscUJBQXFCO29DQUMvQixTQUFTLFNBQUMsc0JBQXNCO21DQUNoQyxTQUFTLFNBQUMscUJBQXFCOzs7Ozs7O0lBbkRoQyx1Q0FBbUM7Ozs7O0lBS25DLHVDQUFtQzs7Ozs7SUFLbkMsd0NBQW1DOzs7OztJQUtuQyx1Q0FBa0M7Ozs7OztJQU1sQyxxQ0FBZ0M7Ozs7O0lBS2hDLG9DQUEyQjs7Ozs7SUFLM0Isc0NBQXlCOzs7OztJQUt6QixtQ0FBMEI7O0lBRTFCLHFDQUFzQzs7SUFFdEMsNkNBQWlDOztJQUNqQyw0Q0FBZ0M7O0lBQ2hDLDZDQUFpQzs7SUFDakMsNkNBQWlDOztJQUNqQyxvQ0FBb0I7Ozs7O0lBRXBCLGdEQUE0Rjs7Ozs7SUFFNUYsb0RBQW1GOzs7OztJQUNuRixtREFBaUY7Ozs7O0lBQ2pGLG9EQUFtRjs7Ozs7SUFDbkYsbURBQWlGOzs7OztJQTBJakYsMkNBWUU7Ozs7O0lBRUYsa0RBWUU7Ozs7O0lBbEtVLGlDQUE2QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgT25Jbml0LFxuICBPbkRlc3Ryb3ksXG4gIElucHV0LFxuICBPdXRwdXQsXG4gIEV2ZW50RW1pdHRlcixcbiAgT25DaGFuZ2VzLFxuICBTaW1wbGVDaGFuZ2VzLFxuICBDb250ZW50Q2hpbGRyZW4sIEFmdGVyVmlld0luaXQsIFRlbXBsYXRlUmVmLCBRdWVyeUxpc3QsIENoYW5nZURldGVjdG9yUmVmLCBWaWV3Q2hpbGRcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IHsgUGFnZUxpbmtDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvcGFnZS1saW5rL3BhZ2UtbGluay5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdpby1wYWdpbmF0aW9uJyxcbiAgdGVtcGxhdGVVcmw6IGAuL3BhZ2luYXRpb24uY29tcG9uZW50Lmh0bWxgLFxuICBzdHlsZXM6IFtgXG4gICAgICA6aG9zdCB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgICAgZmxleC1zaHJpbms6IDA7XG4gICAgICB9XG4gIGBdXG59KVxuZXhwb3J0IGNsYXNzIFBhZ2luYXRpb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcblxuICAvLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAgVmFyaWFibGVzICAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0vLy9cbiAgLyoqXG4gICAqIFdoZXRoZXIgdG8gZGlzYWJsZSBidXR0b25zIGZyb20gdXNlciBpbnB1dFxuICAgKi9cbiAgQElucHV0KCkgZGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAvKipcbiAgICogIFdoZXRoZXIgdG8gc2hvdyB0aGUgXCJGaXJzdFwiIGFuZCBcIkxhc3RcIiBwYWdlIGxpbmtzXG4gICAqL1xuICBASW5wdXQoKSBib3VuZGFyeTogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiAgV2hldGhlciB0byBzaG93IHRoZSBcIk5leHRcIiBhbmQgXCJQcmV2aW91c1wiIHBhZ2UgbGlua3NcbiAgICovXG4gIEBJbnB1dCgpIGRpcmVjdGlvbjogYm9vbGVhbiA9IHRydWU7XG5cbiAgLyoqXG4gICAqICBXaGV0aGVyIHRvIHNob3cgZWxsaXBzaXMgc3ltYm9scyBhbmQgZmlyc3QvbGFzdCBwYWdlIG51bWJlcnMgd2hlbiBtYXhTaXplID4gbnVtYmVyIG9mIHBhZ2VzXG4gICAqL1xuICBASW5wdXQoKSBlbGxpcHNlczogYm9vbGVhbiA9IHRydWU7XG5cbiAgLyoqXG4gICAqICBXaGV0aGVyIHRvIHJvdGF0ZSBwYWdlcyB3aGVuIG1heFBhZ2UgPiBudW1iZXIgb2YgcGFnZXMuXG4gICAqICBDdXJyZW50IHBhZ2Ugd2lsbCBiZSBpbiB0aGUgbWlkZGxlXG4gICAqL1xuICBASW5wdXQoKSByb3RhdGU6IGJvb2xlYW4gPSB0cnVlO1xuXG4gIC8qKlxuICAgKiAgTnVtYmVyIG9mIGl0ZW1zIGluIGNvbGxlY3Rpb24uXG4gICAqL1xuICBASW5wdXQoKSB0b3RhbDogbnVtYmVyID0gMDtcblxuICAvKipcbiAgICogIE1heGltdW0gbnVtYmVyIG9mIHBhZ2VzIHRvIGRpc3BsYXkuXG4gICAqL1xuICBASW5wdXQoKSBtYXhTaXplOiBudW1iZXI7XG5cbiAgLyoqXG4gICAqICBDdXJyZW50IHBhZ2UuIFBhZ2UgbnVtYmVycyBzdGFydCB3aXRoIDFcbiAgICovXG4gIEBJbnB1dCgpIHBhZ2U6IG51bWJlciA9IDE7XG5cbiAgQE91dHB1dCgpIGNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBib3VuZGFyeV9maXJzdDogVGVtcGxhdGVSZWY8YW55PjtcbiAgYm91bmRhcnlfbGFzdDogVGVtcGxhdGVSZWY8YW55PjtcbiAgZGlyZWN0aW9uX3ByZXY6IFRlbXBsYXRlUmVmPGFueT47XG4gIGRpcmVjdGlvbl9uZXh0OiBUZW1wbGF0ZVJlZjxhbnk+O1xuICBwYWdlczogKGFueSlbXSA9IFtdO1xuXG4gIEBDb250ZW50Q2hpbGRyZW4oUGFnZUxpbmtDb21wb25lbnQpIHByaXZhdGUgX3BhZ2VMaW5rQ29tcExpc3Q6IFF1ZXJ5TGlzdDxQYWdlTGlua0NvbXBvbmVudD47XG5cbiAgQFZpZXdDaGlsZCgnYm91bmRhcnlGaXJzdERlZmF1bHQnKSBwcml2YXRlIF9ib3VuZGFyeUZpcnN0RGVmYXVsdDogVGVtcGxhdGVSZWY8YW55PjtcbiAgQFZpZXdDaGlsZCgnYm91bmRhcnlMYXN0RGVmYXVsdCcpIHByaXZhdGUgX2JvdW5kYXJ5TGFzdERlZmF1bHQ6IFRlbXBsYXRlUmVmPGFueT47XG4gIEBWaWV3Q2hpbGQoJ2RpcmVjdGlvblByZXZEZWZhdWx0JykgcHJpdmF0ZSBfZGlyZWN0aW9uUHJldkRlZmF1bHQ6IFRlbXBsYXRlUmVmPGFueT47XG4gIEBWaWV3Q2hpbGQoJ2RpcmVjdGlvbk5leERlZmF1bHQnKSBwcml2YXRlIF9kaXJlY3Rpb25OZXhEZWZhdWx0OiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY2Q6IENoYW5nZURldGVjdG9yUmVmKSB7XG4gIH1cblxuICAvLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAgTGlmZSBDeWNsZSBIb29rICAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0vLy9cblxuICBuZ09uSW5pdCgpIHtcbiAgICAvLyB0aGlzLmNvbnRyb2xBcnJheSA9IF8udGltZXModGhpcy50b3RhbCwgbiA9PiBuICsgMSk7XG4gICAgLy9cbiAgICAvL1xuICAgIC8vIGlmICh0aGlzLm1heFNpemUpIHtcblxuXG4gICAgLy8gfVxuICAgIC8vIGNvbnNvbGUubG9nKHRoaXMudmlzaWJsZUNvbnRyb2xzKTtcblxuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIHRoaXMuX3VwZGF0ZVBhZ2VzKHRoaXMucGFnZSk7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG5cblxuICAgIHRoaXMuYm91bmRhcnlfZmlyc3QgPSB0aGlzLl9nZXRUZW1wbGF0ZSgnYm91bmRhcnlMaW5rcycsICdmaXJzdCcpO1xuICAgIHRoaXMuYm91bmRhcnlfbGFzdCA9IHRoaXMuX2dldFRlbXBsYXRlKCdib3VuZGFyeUxpbmtzJywgJ2xhc3QnKTtcblxuXG4gICAgdGhpcy5kaXJlY3Rpb25fcHJldiA9IHRoaXMuX2dldFRlbXBsYXRlKCdkaXJlY3Rpb25MaW5rcycsICdwcmV2Jyk7XG4gICAgdGhpcy5kaXJlY3Rpb25fbmV4dCA9IHRoaXMuX2dldFRlbXBsYXRlKCdkaXJlY3Rpb25MaW5rcycsICduZXh0Jyk7XG5cblxuICAgIHRoaXMuY2QuZGV0ZWN0Q2hhbmdlcygpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gIH1cblxuXG4gIC8vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICBNYWluIEZ1bmN0aW9ucyAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0vLy9cblxuICBzZWxlY3RQYWdlKHBhZ2VOdW1iZXI6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMuX3VwZGF0ZVBhZ2VzKHBhZ2VOdW1iZXIpO1xuICB9XG5cbiAgcHJpdmF0ZSBfdXBkYXRlUGFnZXMobmV3UGFnZTogbnVtYmVyKSB7XG5cbiAgICAvLyBmaWxsLWluIG1vZGVsIG5lZWRlZCB0byByZW5kZXIgcGFnZXNcbiAgICB0aGlzLnBhZ2VzLmxlbmd0aCA9IDA7XG4gICAgdGhpcy5wYWdlcyA9IF8udGltZXModGhpcy50b3RhbCwgbiA9PiBuICsgMSk7XG5cbiAgICAvLyBzZXQgcGFnZSB3aXRoaW4gMS4ubWF4IHJhbmdlXG4gICAgdGhpcy5fc2V0UGFnZUluUmFuZ2UobmV3UGFnZSk7XG5cbiAgICAvLyBhcHBseSBtYXhTaXplIGlmIG5lY2Vzc2FyeVxuICAgIGlmICh0aGlzLm1heFNpemUgPiAwICYmIHRoaXMudG90YWwgPiB0aGlzLm1heFNpemUpIHtcbiAgICAgIGxldCBzdGFydCA9IDA7XG4gICAgICBsZXQgZW5kID0gdGhpcy50b3RhbDtcblxuICAgICAgLy8gZWl0aGVyIHBhZ2luYXRpbmcgb3Igcm90YXRpbmcgcGFnZSBudW1iZXJzXG4gICAgICBpZiAodGhpcy5yb3RhdGUpIHtcbiAgICAgICAgW3N0YXJ0LCBlbmRdID0gdGhpcy5fYXBwbHlSb3RhdGlvbigpO1xuICAgICAgfVxuXG5cbiAgICAgIHRoaXMucGFnZXMgPSB0aGlzLnBhZ2VzLnNsaWNlKHN0YXJ0LCBlbmQpLmNvbmNhdCgpO1xuXG4gICAgICAvLyBhZGRpbmcgZWxsaXBzZXNcbiAgICAgIHRoaXMuX2FwcGx5RWxsaXBzZXMoc3RhcnQsIGVuZCk7XG4gICAgfVxuICB9XG5cblxuICAvKipcbiAgICogUm90YXRlcyBwYWdlIG51bWJlcnMgYmFzZWQgb24gbWF4U2l6ZSBpdGVtcyB2aXNpYmxlLlxuICAgKiBDdXJyZW50bHkgc2VsZWN0ZWQgcGFnZSBzdGF5cyBpbiB0aGUgbWlkZGxlOlxuICAgKlxuICAgKiBFeC4gZm9yIHNlbGVjdGVkIHBhZ2UgPSA2OlxuICAgKiBbNSwqNiosN10gZm9yIG1heFNpemUgPSAzXG4gICAqIFs0LDUsKjYqLDddIGZvciBtYXhTaXplID0gNFxuICAgKi9cbiAgcHJpdmF0ZSBfYXBwbHlSb3RhdGlvbigpOiBbbnVtYmVyLCBudW1iZXJdIHtcbiAgICBsZXQgc3RhcnQgPSAwO1xuICAgIGxldCBlbmQgPSB0aGlzLnRvdGFsO1xuICAgIGxldCBsZWZ0T2Zmc2V0ID0gTWF0aC5mbG9vcih0aGlzLm1heFNpemUgLyAyKTtcbiAgICBsZXQgcmlnaHRPZmZzZXQgPSB0aGlzLm1heFNpemUgJSAyID09PSAwID8gbGVmdE9mZnNldCAtIDEgOiBsZWZ0T2Zmc2V0O1xuICAgIC8vXG4gICAgaWYgKHRoaXMucGFnZSA8PSBsZWZ0T2Zmc2V0KSB7XG4gICAgICAvLyB2ZXJ5IGJlZ2lubmluZywgbm8gcm90YXRpb24gLT4gWzAuLm1heFNpemVdXG4gICAgICBlbmQgPSB0aGlzLm1heFNpemU7XG4gICAgfSBlbHNlIGlmICh0aGlzLnRvdGFsIC0gdGhpcy5wYWdlIDwgbGVmdE9mZnNldCkge1xuICAgICAgLy8gdmVyeSBlbmQsIG5vIHJvdGF0aW9uIC0+IFtsZW4tbWF4U2l6ZS4ubGVuXVxuICAgICAgc3RhcnQgPSB0aGlzLnRvdGFsIC0gdGhpcy5tYXhTaXplO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyByb3RhdGVcbiAgICAgIHN0YXJ0ID0gdGhpcy5wYWdlIC0gbGVmdE9mZnNldCAtIDE7XG4gICAgICBlbmQgPSB0aGlzLnBhZ2UgKyByaWdodE9mZnNldDtcbiAgICB9XG4gICAgLy9cbiAgICByZXR1cm4gW3N0YXJ0LCBlbmRdO1xuXG4gICAgLy8gXy5lYWNoKF8udGltZXModGhpcy5wYWdlIC0gMSArIHRoaXMubWF4U2l6ZSksIHBhZ2UgPT4ge1xuICAgIC8vICAgdGhpcy52aXNpYmxlQ29udHJvbHMucHVzaCh0aGlzLmNvbnRyb2xBcnJheVtwYWdlXSk7XG4gICAgLy8gfSk7XG4gIH1cblxuXG4gIHByaXZhdGUgX3NldFBhZ2VJblJhbmdlKG5ld1BhZ2VObykge1xuXG4gICAgaWYgKG5ld1BhZ2VObyAhPT0gdGhpcy5wYWdlICYmIHRoaXMudG90YWwpIHtcbiAgICAgIHRoaXMucGFnZSA9IE1hdGgubWF4KE1hdGgubWluKG5ld1BhZ2VObywgdGhpcy50b3RhbCksIDEpO1xuICAgICAgdGhpcy5jaGFuZ2UuZW1pdChuZXdQYWdlTm8pO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBBcHBlbmRzIGVsbGlwc2VzIGFuZCBmaXJzdC9sYXN0IHBhZ2UgbnVtYmVyIHRvIHRoZSBkaXNwbGF5ZWQgcGFnZXNcbiAgICovXG4gIHByaXZhdGUgX2FwcGx5RWxsaXBzZXMoc3RhcnQ6IG51bWJlciwgZW5kOiBudW1iZXIpIHtcbiAgICBpZiAodGhpcy5lbGxpcHNlcykge1xuICAgICAgaWYgKHN0YXJ0ID4gMCkge1xuICAgICAgICBpZiAoc3RhcnQgPiAxKSB7XG4gICAgICAgICAgdGhpcy5wYWdlcy51bnNoaWZ0KCcuLi4nKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnBhZ2VzLnVuc2hpZnQoMSk7XG4gICAgICB9XG4gICAgICBpZiAoZW5kIDwgdGhpcy50b3RhbCkge1xuICAgICAgICBpZiAoZW5kIDwgKHRoaXMudG90YWwgLSAxKSkge1xuICAgICAgICAgIHRoaXMucGFnZXMucHVzaCgnLi4uJyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wYWdlcy5wdXNoKHRoaXMudG90YWwpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG5cbiAgcHJpdmF0ZSBfZ2V0VGVtcGxhdGUgPSAoa2V5LCB2YWx1ZSkgPT4ge1xuXG4gICAgbGV0IHBhZ2VMaW5rQ29tcDogUGFnZUxpbmtDb21wb25lbnQ7XG5cbiAgICBfLmVhY2godGhpcy5fcGFnZUxpbmtDb21wTGlzdC50b0FycmF5KCksIChpdGVtOiBQYWdlTGlua0NvbXBvbmVudCkgPT4ge1xuICAgICAgaWYgKF8uaGFzKGl0ZW0sIFtrZXldKSAmJiBfLmdldChpdGVtLCBba2V5XSkgPT09IHZhbHVlKSB7XG4gICAgICAgIHBhZ2VMaW5rQ29tcCA9IGl0ZW07XG4gICAgICB9XG4gICAgfSk7XG5cblxuICAgIHJldHVybiBwYWdlTGlua0NvbXAgPyBwYWdlTGlua0NvbXAudHBsIDogdGhpcy5fZ2V0RGVmYXVsdFRlbXBsYXRlKGtleSwgdmFsdWUpO1xuICB9O1xuXG4gIHByaXZhdGUgX2dldERlZmF1bHRUZW1wbGF0ZSA9IChrZXksIHZhbHVlKSA9PiB7XG5cbiAgICBzd2l0Y2ggKGAke2tleX0sJHt2YWx1ZX1gKSB7XG4gICAgICBjYXNlICdib3VuZGFyeUxpbmtzLGZpcnN0JzpcbiAgICAgICAgcmV0dXJuIHRoaXMuX2JvdW5kYXJ5Rmlyc3REZWZhdWx0O1xuICAgICAgY2FzZSAnYm91bmRhcnlMaW5rcyxsYXN0JzpcbiAgICAgICAgcmV0dXJuIHRoaXMuX2JvdW5kYXJ5TGFzdERlZmF1bHQ7XG4gICAgICBjYXNlICdkaXJlY3Rpb25MaW5rcyxwcmV2JzpcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RpcmVjdGlvblByZXZEZWZhdWx0O1xuICAgICAgY2FzZSAnZGlyZWN0aW9uTGlua3MsbmV4dCc6XG4gICAgICAgIHJldHVybiB0aGlzLl9kaXJlY3Rpb25OZXhEZWZhdWx0O1xuICAgIH1cbiAgfTtcbn1cbiJdfQ==