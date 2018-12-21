import {
  Component,
  OnInit,
  OnDestroy,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges,
  ContentChildren, AfterViewInit, TemplateRef, QueryList, ChangeDetectorRef, ViewChild
} from '@angular/core';
import _ from 'lodash';
import { PageLinkComponent } from './components/page-link/page-link.component';

@Component({
  selector: 'io-pagination',
  templateUrl: `./pagination.component.html`,
  styles: [`
      :host {
          display: flex;
          justify-content: center;
          height: auto;
          flex-shrink: 0;
      }
  `]
})
export class PaginationComponent implements OnInit, AfterViewInit, OnChanges, OnDestroy {

  ///-----------------------------------------------  Variables   -----------------------------------------------///
  /**
   * Whether to disable buttons from user input
   */
  @Input() disabled: boolean = false;

  /**
   *  Whether to show the "First" and "Last" page links
   */
  @Input() boundary: boolean = false;

  /**
   *  Whether to show the "Next" and "Previous" page links
   */
  @Input() direction: boolean = true;

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

  boundary_first: TemplateRef<any>;
  boundary_last: TemplateRef<any>;
  direction_prev: TemplateRef<any>;
  direction_next: TemplateRef<any>;
  pages: (any)[] = [];

  @ContentChildren(PageLinkComponent) private _pageLinkCompList: QueryList<PageLinkComponent>;

  @ViewChild('boundaryFirstDefault') private _boundaryFirstDefault: TemplateRef<any>;
  @ViewChild('boundaryLastDefault') private _boundaryLastDefault: TemplateRef<any>;
  @ViewChild('directionPrevDefault') private _directionPrevDefault: TemplateRef<any>;
  @ViewChild('directionNexDefault') private _directionNexDefault: TemplateRef<any>;

  constructor(private cd: ChangeDetectorRef) {
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

  ngAfterViewInit(): void {


    this.boundary_first = this._getTemplate('boundaryLinks', 'first');
    this.boundary_last = this._getTemplate('boundaryLinks', 'last');


    this.direction_prev = this._getTemplate('directionLinks', 'prev');
    this.direction_next = this._getTemplate('directionLinks', 'next');


    this.cd.detectChanges();
  }

  ngOnDestroy(): void {
  }


  ///-----------------------------------------------  Main Functions  -----------------------------------------------///

  selectPage(pageNumber: number): void {
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
      this.page = Math.max(Math.min(newPageNo, this.total), 1);
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


  private _getTemplate = (key, value) => {

    let pageLinkComp: PageLinkComponent;

    _.each(this._pageLinkCompList.toArray(), (item: PageLinkComponent) => {
      if (_.has(item, [key]) && _.get(item, [key]) === value) {
        pageLinkComp = item;
      }
    });


    return pageLinkComp ? pageLinkComp.tpl : this._getDefaultTemplate(key, value);
  };

  private _getDefaultTemplate = (key, value) => {

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
