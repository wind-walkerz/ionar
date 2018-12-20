import { Component, OnInit, OnDestroy, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import _ from 'lodash';

@Component({
  selector: 'io-pagination',
  template: `
      <ng-container *ngFor="let pageNumber of pages">
          <page-number
                  [number]="pageNumber"
                  [currentPage]="this.page"
                  (change)="selectPage($event)"
          ></page-number>
      </ng-container>
  `,
  styles: [`
      :host {
          display: flex;
          justify-content: center;
          height: auto;
          flex-shrink: 0;
      }
  `]
})
export class PaginationComponent implements OnInit, OnChanges, OnDestroy {

  ///-----------------------------------------------  Variables   -----------------------------------------------///
  /**
   * Whether to disable buttons from user input
   */
  @Input() disabled: boolean = false;

  /**
   *  Whether to show the "First" and "Last" page links
   */
  @Input() boundaryLinks: boolean = false;

  /**
   *  Whether to show the "Next" and "Previous" page links
   */
  @Input() directionLinks: boolean = true;

  /**
   *  Whether to show ellipsis symbols and first/last page numbers when maxSize > number of pages
   */
  @Input() ellipses: boolean = true;

  /**
   *  Whether to rotate pages when maxPage > number of pages.
   *  Current page will be in the middle
   */
  @Input() rotate: boolean = true;

  /**
   *  Number of items in collection.
   */
  @Input() total: number = 0;

  /**
   *  Maximum number of pages to display.
   */
  @Input() maxSize: number;

  /**
   *  Current page. Page numbers start with 1
   */
  @Input() page: number = 1;

  @Output() change = new EventEmitter();


  pages: (any)[] = [];

  constructor() {
  }

  ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///

  ngOnInit() {
    // this.controlArray = _.times(this.total, n => n + 1);
    //
    //
    // if (this.maxSize) {


    // }
    // console.log(this.visibleControls);

  }

  ngOnChanges(changes: SimpleChanges): void {
    this._updatePages(this.page);
  }

  ngOnDestroy(): void {
  }


  ///-----------------------------------------------  Main Functions  -----------------------------------------------///

  selectPage(pageNumber: number): void {
    console.log(pageNumber);
    this._updatePages(pageNumber);
  }

  private _updatePages(newPage: number) {

    // fill-in model needed to render pages
    this.pages.length = 0;
    this.pages = _.times(this.total, n => n + 1);

    // set page within 1..max range
    this._setPageInRange(newPage);

    // apply maxSize if necessary
    if (this.maxSize > 0 && this.total > this.maxSize) {
      let start = 0;
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
   */
  private _applyRotation(): [number, number] {
    let start = 0;
    let end = this.total;
    let leftOffset = Math.floor(this.maxSize / 2);
    let rightOffset = this.maxSize % 2 === 0 ? leftOffset - 1 : leftOffset;
    //
    if (this.page <= leftOffset) {
      // very beginning, no rotation -> [0..maxSize]
      end = this.maxSize;
    } else if (this.total - this.page < leftOffset) {
      // very end, no rotation -> [len-maxSize..len]
      start = this.total - this.maxSize;
    } else {
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


  private _setPageInRange(newPageNo) {

    if (newPageNo !== this.page && this.total) {
      this.page = newPageNo;
      this.change.emit(newPageNo);
    }
  }

  /**
   * Appends ellipses and first/last page number to the displayed pages
   */
  private _applyEllipses(start: number, end: number) {
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
