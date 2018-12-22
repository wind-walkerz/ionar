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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5hdGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AaW9uYXIvdWkvIiwic291cmNlcyI6WyJjb21wb25lbnRzL3BhZ2luYXRpb24vcGFnaW5hdGlvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBR1QsS0FBSyxFQUNMLE1BQU0sRUFDTixZQUFZLEVBR1osZUFBZSxFQUFpQixXQUFXLEVBQUUsU0FBUyxFQUFFLGlCQUFpQixFQUFFLFNBQVMsRUFDckYsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxDQUFDLE1BQU0sUUFBUSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBYy9FLE1BQU0sT0FBTyxtQkFBbUI7Ozs7SUEyRDlCLFlBQW9CLEVBQXFCO1FBQXJCLE9BQUUsR0FBRixFQUFFLENBQW1COzs7OztRQXJEaEMsYUFBUSxHQUFZLEtBQUssQ0FBQzs7OztRQUsxQixhQUFRLEdBQVksS0FBSyxDQUFDOzs7O1FBSzFCLGNBQVMsR0FBWSxJQUFJLENBQUM7Ozs7UUFLMUIsYUFBUSxHQUFZLElBQUksQ0FBQzs7Ozs7UUFNekIsV0FBTSxHQUFZLElBQUksQ0FBQzs7OztRQUt2QixVQUFLLEdBQVcsQ0FBQyxDQUFDOzs7O1FBVWxCLFNBQUksR0FBVyxDQUFDLENBQUM7UUFFaEIsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFNdEMsVUFBSyxHQUFZLEVBQUUsQ0FBQztRQWlKWixpQkFBWSxHQUFHLENBQUMsR0FBRyxFQUFFLEtBQUssRUFBRSxFQUFFOztnQkFFaEMsWUFBK0I7WUFFbkMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxJQUF1QixFQUFFLEVBQUU7Z0JBQ25FLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxLQUFLLEVBQUU7b0JBQ3RELFlBQVksR0FBRyxJQUFJLENBQUM7aUJBQ3JCO1lBQ0gsQ0FBQyxDQUFDLENBQUM7WUFHSCxPQUFPLFlBQVksQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUNoRixDQUFDLENBQUM7UUFFTSx3QkFBbUIsR0FBRyxDQUFDLEdBQUcsRUFBRSxLQUFLLEVBQUUsRUFBRTtZQUUzQyxRQUFRLEdBQUcsR0FBRyxJQUFJLEtBQUssRUFBRSxFQUFFO2dCQUN6QixLQUFLLHFCQUFxQjtvQkFDeEIsT0FBTyxJQUFJLENBQUMscUJBQXFCLENBQUM7Z0JBQ3BDLEtBQUssb0JBQW9CO29CQUN2QixPQUFPLElBQUksQ0FBQyxvQkFBb0IsQ0FBQztnQkFDbkMsS0FBSyxxQkFBcUI7b0JBQ3hCLE9BQU8sSUFBSSxDQUFDLHFCQUFxQixDQUFDO2dCQUNwQyxLQUFLLHFCQUFxQjtvQkFDeEIsT0FBTyxJQUFJLENBQUMsb0JBQW9CLENBQUM7YUFDcEM7UUFDSCxDQUFDLENBQUM7SUFqS0YsQ0FBQzs7Ozs7SUFJRCxRQUFRO1FBQ04sdURBQXVEO1FBQ3ZELEVBQUU7UUFDRixFQUFFO1FBQ0Ysc0JBQXNCO1FBR3RCLElBQUk7UUFDSixxQ0FBcUM7SUFFdkMsQ0FBQzs7Ozs7SUFFRCxXQUFXLENBQUMsT0FBc0I7UUFDaEMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDL0IsQ0FBQzs7OztJQUVELGVBQWU7UUFHYixJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsZUFBZSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ2xFLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxlQUFlLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFHaEUsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLGdCQUFnQixFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQ2xFLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxnQkFBZ0IsRUFBRSxNQUFNLENBQUMsQ0FBQztRQUdsRSxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQzFCLENBQUM7Ozs7SUFFRCxXQUFXO0lBQ1gsQ0FBQzs7Ozs7O0lBS0QsVUFBVSxDQUFDLFVBQWtCO1FBQzNCLElBQUksQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDaEMsQ0FBQzs7Ozs7O0lBRU8sWUFBWSxDQUFDLE9BQWU7UUFFbEMsdUNBQXVDO1FBQ3ZDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztRQUN0QixJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUU3QywrQkFBK0I7UUFDL0IsSUFBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUU5Qiw2QkFBNkI7UUFDN0IsSUFBSSxJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsSUFBSSxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxPQUFPLEVBQUU7O2dCQUM3QyxLQUFLLEdBQUcsQ0FBQzs7Z0JBQ1QsR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLO1lBRXBCLDZDQUE2QztZQUM3QyxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7Z0JBQ2YsQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO2FBQ3RDO1lBR0QsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUM7WUFFbkQsa0JBQWtCO1lBQ2xCLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1NBQ2pDO0lBQ0gsQ0FBQzs7Ozs7Ozs7Ozs7SUFXTyxjQUFjOztZQUNoQixLQUFLLEdBQUcsQ0FBQzs7WUFDVCxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUs7O1lBQ2hCLFVBQVUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDOztZQUN6QyxXQUFXLEdBQUcsSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVO1FBQ3RFLEVBQUU7UUFDRixJQUFJLElBQUksQ0FBQyxJQUFJLElBQUksVUFBVSxFQUFFO1lBQzNCLDhDQUE4QztZQUM5QyxHQUFHLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztTQUNwQjthQUFNLElBQUksSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxHQUFHLFVBQVUsRUFBRTtZQUM5Qyw4Q0FBOEM7WUFDOUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztTQUNuQzthQUFNO1lBQ0wsU0FBUztZQUNULEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxHQUFHLFVBQVUsR0FBRyxDQUFDLENBQUM7WUFDbkMsR0FBRyxHQUFHLElBQUksQ0FBQyxJQUFJLEdBQUcsV0FBVyxDQUFDO1NBQy9CO1FBQ0QsRUFBRTtRQUNGLE9BQU8sQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFFcEIsMERBQTBEO1FBQzFELHdEQUF3RDtRQUN4RCxNQUFNO0lBQ1IsQ0FBQzs7Ozs7O0lBR08sZUFBZSxDQUFDLFNBQVM7UUFFL0IsSUFBSSxTQUFTLEtBQUssSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ3pDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDekQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7U0FDN0I7SUFDSCxDQUFDOzs7Ozs7OztJQUtPLGNBQWMsQ0FBQyxLQUFhLEVBQUUsR0FBVztRQUMvQyxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDakIsSUFBSSxLQUFLLEdBQUcsQ0FBQyxFQUFFO2dCQUNiLElBQUksS0FBSyxHQUFHLENBQUMsRUFBRTtvQkFDYixJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztpQkFDM0I7Z0JBQ0QsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDdkI7WUFDRCxJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSyxFQUFFO2dCQUNwQixJQUFJLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLEVBQUU7b0JBQzFCLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2lCQUN4QjtnQkFDRCxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDN0I7U0FDRjtJQUNILENBQUM7OztZQTVNRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGVBQWU7Z0JBQ3pCLDQ0Q0FBMEM7eUJBQ2pDOzs7Ozs7O0dBT1I7YUFDRjs7OztZQWhCeUQsaUJBQWlCOzs7dUJBdUJ4RSxLQUFLO3VCQUtMLEtBQUs7d0JBS0wsS0FBSzt1QkFLTCxLQUFLO3FCQU1MLEtBQUs7b0JBS0wsS0FBSztzQkFLTCxLQUFLO21CQUtMLEtBQUs7cUJBRUwsTUFBTTtnQ0FRTixlQUFlLFNBQUMsaUJBQWlCO29DQUVqQyxTQUFTLFNBQUMsc0JBQXNCO21DQUNoQyxTQUFTLFNBQUMscUJBQXFCO29DQUMvQixTQUFTLFNBQUMsc0JBQXNCO21DQUNoQyxTQUFTLFNBQUMscUJBQXFCOzs7Ozs7O0lBbkRoQyx1Q0FBbUM7Ozs7O0lBS25DLHVDQUFtQzs7Ozs7SUFLbkMsd0NBQW1DOzs7OztJQUtuQyx1Q0FBa0M7Ozs7OztJQU1sQyxxQ0FBZ0M7Ozs7O0lBS2hDLG9DQUEyQjs7Ozs7SUFLM0Isc0NBQXlCOzs7OztJQUt6QixtQ0FBMEI7O0lBRTFCLHFDQUFzQzs7SUFFdEMsNkNBQWlDOztJQUNqQyw0Q0FBZ0M7O0lBQ2hDLDZDQUFpQzs7SUFDakMsNkNBQWlDOztJQUNqQyxvQ0FBb0I7Ozs7O0lBRXBCLGdEQUE0Rjs7Ozs7SUFFNUYsb0RBQW1GOzs7OztJQUNuRixtREFBaUY7Ozs7O0lBQ2pGLG9EQUFtRjs7Ozs7SUFDbkYsbURBQWlGOzs7OztJQTBJakYsMkNBWUU7Ozs7O0lBRUYsa0RBWUU7Ozs7O0lBbEtVLGlDQUE2QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQ29tcG9uZW50LFxyXG4gIE9uSW5pdCxcclxuICBPbkRlc3Ryb3ksXHJcbiAgSW5wdXQsXHJcbiAgT3V0cHV0LFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBPbkNoYW5nZXMsXHJcbiAgU2ltcGxlQ2hhbmdlcyxcclxuICBDb250ZW50Q2hpbGRyZW4sIEFmdGVyVmlld0luaXQsIFRlbXBsYXRlUmVmLCBRdWVyeUxpc3QsIENoYW5nZURldGVjdG9yUmVmLCBWaWV3Q2hpbGRcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcclxuaW1wb3J0IHsgUGFnZUxpbmtDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvcGFnZS1saW5rL3BhZ2UtbGluay5jb21wb25lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdpby1wYWdpbmF0aW9uJyxcclxuICB0ZW1wbGF0ZVVybDogYC4vcGFnaW5hdGlvbi5jb21wb25lbnQuaHRtbGAsXHJcbiAgc3R5bGVzOiBbYFxyXG4gICAgICA6aG9zdCB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgICBmbGV4LXNocmluazogMDtcclxuICAgICAgfVxyXG4gIGBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQYWdpbmF0aW9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XHJcblxyXG4gIC8vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICBWYXJpYWJsZXMgICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS8vL1xyXG4gIC8qKlxyXG4gICAqIFdoZXRoZXIgdG8gZGlzYWJsZSBidXR0b25zIGZyb20gdXNlciBpbnB1dFxyXG4gICAqL1xyXG4gIEBJbnB1dCgpIGRpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIC8qKlxyXG4gICAqICBXaGV0aGVyIHRvIHNob3cgdGhlIFwiRmlyc3RcIiBhbmQgXCJMYXN0XCIgcGFnZSBsaW5rc1xyXG4gICAqL1xyXG4gIEBJbnB1dCgpIGJvdW5kYXJ5OiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIC8qKlxyXG4gICAqICBXaGV0aGVyIHRvIHNob3cgdGhlIFwiTmV4dFwiIGFuZCBcIlByZXZpb3VzXCIgcGFnZSBsaW5rc1xyXG4gICAqL1xyXG4gIEBJbnB1dCgpIGRpcmVjdGlvbjogYm9vbGVhbiA9IHRydWU7XHJcblxyXG4gIC8qKlxyXG4gICAqICBXaGV0aGVyIHRvIHNob3cgZWxsaXBzaXMgc3ltYm9scyBhbmQgZmlyc3QvbGFzdCBwYWdlIG51bWJlcnMgd2hlbiBtYXhTaXplID4gbnVtYmVyIG9mIHBhZ2VzXHJcbiAgICovXHJcbiAgQElucHV0KCkgZWxsaXBzZXM6IGJvb2xlYW4gPSB0cnVlO1xyXG5cclxuICAvKipcclxuICAgKiAgV2hldGhlciB0byByb3RhdGUgcGFnZXMgd2hlbiBtYXhQYWdlID4gbnVtYmVyIG9mIHBhZ2VzLlxyXG4gICAqICBDdXJyZW50IHBhZ2Ugd2lsbCBiZSBpbiB0aGUgbWlkZGxlXHJcbiAgICovXHJcbiAgQElucHV0KCkgcm90YXRlOiBib29sZWFuID0gdHJ1ZTtcclxuXHJcbiAgLyoqXHJcbiAgICogIE51bWJlciBvZiBpdGVtcyBpbiBjb2xsZWN0aW9uLlxyXG4gICAqL1xyXG4gIEBJbnB1dCgpIHRvdGFsOiBudW1iZXIgPSAwO1xyXG5cclxuICAvKipcclxuICAgKiAgTWF4aW11bSBudW1iZXIgb2YgcGFnZXMgdG8gZGlzcGxheS5cclxuICAgKi9cclxuICBASW5wdXQoKSBtYXhTaXplOiBudW1iZXI7XHJcblxyXG4gIC8qKlxyXG4gICAqICBDdXJyZW50IHBhZ2UuIFBhZ2UgbnVtYmVycyBzdGFydCB3aXRoIDFcclxuICAgKi9cclxuICBASW5wdXQoKSBwYWdlOiBudW1iZXIgPSAxO1xyXG5cclxuICBAT3V0cHV0KCkgY2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICBib3VuZGFyeV9maXJzdDogVGVtcGxhdGVSZWY8YW55PjtcclxuICBib3VuZGFyeV9sYXN0OiBUZW1wbGF0ZVJlZjxhbnk+O1xyXG4gIGRpcmVjdGlvbl9wcmV2OiBUZW1wbGF0ZVJlZjxhbnk+O1xyXG4gIGRpcmVjdGlvbl9uZXh0OiBUZW1wbGF0ZVJlZjxhbnk+O1xyXG4gIHBhZ2VzOiAoYW55KVtdID0gW107XHJcblxyXG4gIEBDb250ZW50Q2hpbGRyZW4oUGFnZUxpbmtDb21wb25lbnQpIHByaXZhdGUgX3BhZ2VMaW5rQ29tcExpc3Q6IFF1ZXJ5TGlzdDxQYWdlTGlua0NvbXBvbmVudD47XHJcblxyXG4gIEBWaWV3Q2hpbGQoJ2JvdW5kYXJ5Rmlyc3REZWZhdWx0JykgcHJpdmF0ZSBfYm91bmRhcnlGaXJzdERlZmF1bHQ6IFRlbXBsYXRlUmVmPGFueT47XHJcbiAgQFZpZXdDaGlsZCgnYm91bmRhcnlMYXN0RGVmYXVsdCcpIHByaXZhdGUgX2JvdW5kYXJ5TGFzdERlZmF1bHQ6IFRlbXBsYXRlUmVmPGFueT47XHJcbiAgQFZpZXdDaGlsZCgnZGlyZWN0aW9uUHJldkRlZmF1bHQnKSBwcml2YXRlIF9kaXJlY3Rpb25QcmV2RGVmYXVsdDogVGVtcGxhdGVSZWY8YW55PjtcclxuICBAVmlld0NoaWxkKCdkaXJlY3Rpb25OZXhEZWZhdWx0JykgcHJpdmF0ZSBfZGlyZWN0aW9uTmV4RGVmYXVsdDogVGVtcGxhdGVSZWY8YW55PjtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjZDogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcclxuICB9XHJcblxyXG4gIC8vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICBMaWZlIEN5Y2xlIEhvb2sgICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS8vL1xyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIC8vIHRoaXMuY29udHJvbEFycmF5ID0gXy50aW1lcyh0aGlzLnRvdGFsLCBuID0+IG4gKyAxKTtcclxuICAgIC8vXHJcbiAgICAvL1xyXG4gICAgLy8gaWYgKHRoaXMubWF4U2l6ZSkge1xyXG5cclxuXHJcbiAgICAvLyB9XHJcbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnZpc2libGVDb250cm9scyk7XHJcblxyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xyXG4gICAgdGhpcy5fdXBkYXRlUGFnZXModGhpcy5wYWdlKTtcclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcclxuXHJcblxyXG4gICAgdGhpcy5ib3VuZGFyeV9maXJzdCA9IHRoaXMuX2dldFRlbXBsYXRlKCdib3VuZGFyeUxpbmtzJywgJ2ZpcnN0Jyk7XHJcbiAgICB0aGlzLmJvdW5kYXJ5X2xhc3QgPSB0aGlzLl9nZXRUZW1wbGF0ZSgnYm91bmRhcnlMaW5rcycsICdsYXN0Jyk7XHJcblxyXG5cclxuICAgIHRoaXMuZGlyZWN0aW9uX3ByZXYgPSB0aGlzLl9nZXRUZW1wbGF0ZSgnZGlyZWN0aW9uTGlua3MnLCAncHJldicpO1xyXG4gICAgdGhpcy5kaXJlY3Rpb25fbmV4dCA9IHRoaXMuX2dldFRlbXBsYXRlKCdkaXJlY3Rpb25MaW5rcycsICduZXh0Jyk7XHJcblxyXG5cclxuICAgIHRoaXMuY2QuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgfVxyXG5cclxuXHJcbiAgLy8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gIE1haW4gRnVuY3Rpb25zICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS8vL1xyXG5cclxuICBzZWxlY3RQYWdlKHBhZ2VOdW1iZXI6IG51bWJlcik6IHZvaWQge1xyXG4gICAgdGhpcy5fdXBkYXRlUGFnZXMocGFnZU51bWJlcik7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF91cGRhdGVQYWdlcyhuZXdQYWdlOiBudW1iZXIpIHtcclxuXHJcbiAgICAvLyBmaWxsLWluIG1vZGVsIG5lZWRlZCB0byByZW5kZXIgcGFnZXNcclxuICAgIHRoaXMucGFnZXMubGVuZ3RoID0gMDtcclxuICAgIHRoaXMucGFnZXMgPSBfLnRpbWVzKHRoaXMudG90YWwsIG4gPT4gbiArIDEpO1xyXG5cclxuICAgIC8vIHNldCBwYWdlIHdpdGhpbiAxLi5tYXggcmFuZ2VcclxuICAgIHRoaXMuX3NldFBhZ2VJblJhbmdlKG5ld1BhZ2UpO1xyXG5cclxuICAgIC8vIGFwcGx5IG1heFNpemUgaWYgbmVjZXNzYXJ5XHJcbiAgICBpZiAodGhpcy5tYXhTaXplID4gMCAmJiB0aGlzLnRvdGFsID4gdGhpcy5tYXhTaXplKSB7XHJcbiAgICAgIGxldCBzdGFydCA9IDA7XHJcbiAgICAgIGxldCBlbmQgPSB0aGlzLnRvdGFsO1xyXG5cclxuICAgICAgLy8gZWl0aGVyIHBhZ2luYXRpbmcgb3Igcm90YXRpbmcgcGFnZSBudW1iZXJzXHJcbiAgICAgIGlmICh0aGlzLnJvdGF0ZSkge1xyXG4gICAgICAgIFtzdGFydCwgZW5kXSA9IHRoaXMuX2FwcGx5Um90YXRpb24oKTtcclxuICAgICAgfVxyXG5cclxuXHJcbiAgICAgIHRoaXMucGFnZXMgPSB0aGlzLnBhZ2VzLnNsaWNlKHN0YXJ0LCBlbmQpLmNvbmNhdCgpO1xyXG5cclxuICAgICAgLy8gYWRkaW5nIGVsbGlwc2VzXHJcbiAgICAgIHRoaXMuX2FwcGx5RWxsaXBzZXMoc3RhcnQsIGVuZCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuXHJcbiAgLyoqXHJcbiAgICogUm90YXRlcyBwYWdlIG51bWJlcnMgYmFzZWQgb24gbWF4U2l6ZSBpdGVtcyB2aXNpYmxlLlxyXG4gICAqIEN1cnJlbnRseSBzZWxlY3RlZCBwYWdlIHN0YXlzIGluIHRoZSBtaWRkbGU6XHJcbiAgICpcclxuICAgKiBFeC4gZm9yIHNlbGVjdGVkIHBhZ2UgPSA2OlxyXG4gICAqIFs1LCo2Kiw3XSBmb3IgbWF4U2l6ZSA9IDNcclxuICAgKiBbNCw1LCo2Kiw3XSBmb3IgbWF4U2l6ZSA9IDRcclxuICAgKi9cclxuICBwcml2YXRlIF9hcHBseVJvdGF0aW9uKCk6IFtudW1iZXIsIG51bWJlcl0ge1xyXG4gICAgbGV0IHN0YXJ0ID0gMDtcclxuICAgIGxldCBlbmQgPSB0aGlzLnRvdGFsO1xyXG4gICAgbGV0IGxlZnRPZmZzZXQgPSBNYXRoLmZsb29yKHRoaXMubWF4U2l6ZSAvIDIpO1xyXG4gICAgbGV0IHJpZ2h0T2Zmc2V0ID0gdGhpcy5tYXhTaXplICUgMiA9PT0gMCA/IGxlZnRPZmZzZXQgLSAxIDogbGVmdE9mZnNldDtcclxuICAgIC8vXHJcbiAgICBpZiAodGhpcy5wYWdlIDw9IGxlZnRPZmZzZXQpIHtcclxuICAgICAgLy8gdmVyeSBiZWdpbm5pbmcsIG5vIHJvdGF0aW9uIC0+IFswLi5tYXhTaXplXVxyXG4gICAgICBlbmQgPSB0aGlzLm1heFNpemU7XHJcbiAgICB9IGVsc2UgaWYgKHRoaXMudG90YWwgLSB0aGlzLnBhZ2UgPCBsZWZ0T2Zmc2V0KSB7XHJcbiAgICAgIC8vIHZlcnkgZW5kLCBubyByb3RhdGlvbiAtPiBbbGVuLW1heFNpemUuLmxlbl1cclxuICAgICAgc3RhcnQgPSB0aGlzLnRvdGFsIC0gdGhpcy5tYXhTaXplO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy8gcm90YXRlXHJcbiAgICAgIHN0YXJ0ID0gdGhpcy5wYWdlIC0gbGVmdE9mZnNldCAtIDE7XHJcbiAgICAgIGVuZCA9IHRoaXMucGFnZSArIHJpZ2h0T2Zmc2V0O1xyXG4gICAgfVxyXG4gICAgLy9cclxuICAgIHJldHVybiBbc3RhcnQsIGVuZF07XHJcblxyXG4gICAgLy8gXy5lYWNoKF8udGltZXModGhpcy5wYWdlIC0gMSArIHRoaXMubWF4U2l6ZSksIHBhZ2UgPT4ge1xyXG4gICAgLy8gICB0aGlzLnZpc2libGVDb250cm9scy5wdXNoKHRoaXMuY29udHJvbEFycmF5W3BhZ2VdKTtcclxuICAgIC8vIH0pO1xyXG4gIH1cclxuXHJcblxyXG4gIHByaXZhdGUgX3NldFBhZ2VJblJhbmdlKG5ld1BhZ2VObykge1xyXG5cclxuICAgIGlmIChuZXdQYWdlTm8gIT09IHRoaXMucGFnZSAmJiB0aGlzLnRvdGFsKSB7XHJcbiAgICAgIHRoaXMucGFnZSA9IE1hdGgubWF4KE1hdGgubWluKG5ld1BhZ2VObywgdGhpcy50b3RhbCksIDEpO1xyXG4gICAgICB0aGlzLmNoYW5nZS5lbWl0KG5ld1BhZ2VObyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBBcHBlbmRzIGVsbGlwc2VzIGFuZCBmaXJzdC9sYXN0IHBhZ2UgbnVtYmVyIHRvIHRoZSBkaXNwbGF5ZWQgcGFnZXNcclxuICAgKi9cclxuICBwcml2YXRlIF9hcHBseUVsbGlwc2VzKHN0YXJ0OiBudW1iZXIsIGVuZDogbnVtYmVyKSB7XHJcbiAgICBpZiAodGhpcy5lbGxpcHNlcykge1xyXG4gICAgICBpZiAoc3RhcnQgPiAwKSB7XHJcbiAgICAgICAgaWYgKHN0YXJ0ID4gMSkge1xyXG4gICAgICAgICAgdGhpcy5wYWdlcy51bnNoaWZ0KCcuLi4nKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5wYWdlcy51bnNoaWZ0KDEpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChlbmQgPCB0aGlzLnRvdGFsKSB7XHJcbiAgICAgICAgaWYgKGVuZCA8ICh0aGlzLnRvdGFsIC0gMSkpIHtcclxuICAgICAgICAgIHRoaXMucGFnZXMucHVzaCgnLi4uJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMucGFnZXMucHVzaCh0aGlzLnRvdGFsKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcblxyXG4gIHByaXZhdGUgX2dldFRlbXBsYXRlID0gKGtleSwgdmFsdWUpID0+IHtcclxuXHJcbiAgICBsZXQgcGFnZUxpbmtDb21wOiBQYWdlTGlua0NvbXBvbmVudDtcclxuXHJcbiAgICBfLmVhY2godGhpcy5fcGFnZUxpbmtDb21wTGlzdC50b0FycmF5KCksIChpdGVtOiBQYWdlTGlua0NvbXBvbmVudCkgPT4ge1xyXG4gICAgICBpZiAoXy5oYXMoaXRlbSwgW2tleV0pICYmIF8uZ2V0KGl0ZW0sIFtrZXldKSA9PT0gdmFsdWUpIHtcclxuICAgICAgICBwYWdlTGlua0NvbXAgPSBpdGVtO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcblxyXG4gICAgcmV0dXJuIHBhZ2VMaW5rQ29tcCA/IHBhZ2VMaW5rQ29tcC50cGwgOiB0aGlzLl9nZXREZWZhdWx0VGVtcGxhdGUoa2V5LCB2YWx1ZSk7XHJcbiAgfTtcclxuXHJcbiAgcHJpdmF0ZSBfZ2V0RGVmYXVsdFRlbXBsYXRlID0gKGtleSwgdmFsdWUpID0+IHtcclxuXHJcbiAgICBzd2l0Y2ggKGAke2tleX0sJHt2YWx1ZX1gKSB7XHJcbiAgICAgIGNhc2UgJ2JvdW5kYXJ5TGlua3MsZmlyc3QnOlxyXG4gICAgICAgIHJldHVybiB0aGlzLl9ib3VuZGFyeUZpcnN0RGVmYXVsdDtcclxuICAgICAgY2FzZSAnYm91bmRhcnlMaW5rcyxsYXN0JzpcclxuICAgICAgICByZXR1cm4gdGhpcy5fYm91bmRhcnlMYXN0RGVmYXVsdDtcclxuICAgICAgY2FzZSAnZGlyZWN0aW9uTGlua3MscHJldic6XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RpcmVjdGlvblByZXZEZWZhdWx0O1xyXG4gICAgICBjYXNlICdkaXJlY3Rpb25MaW5rcyxuZXh0JzpcclxuICAgICAgICByZXR1cm4gdGhpcy5fZGlyZWN0aW9uTmV4RGVmYXVsdDtcclxuICAgIH1cclxuICB9O1xyXG59XHJcbiJdfQ==