import { OnInit, OnDestroy, EventEmitter, OnChanges, SimpleChanges, AfterViewInit, TemplateRef, ChangeDetectorRef } from '@angular/core';
export declare class PaginationComponent implements OnInit, AfterViewInit, OnChanges, OnDestroy {
    private cd;
    /**
     * Whether to disable buttons from user input
     */
    disabled: boolean;
    /**
     *  Whether to show the "First" and "Last" page links
     */
    boundary: boolean;
    /**
     *  Whether to show the "Next" and "Previous" page links
     */
    direction: boolean;
    /**
     *  Whether to show ellipsis symbols and first/last page numbers when maxSize > number of pages
     */
    ellipses: boolean;
    /**
     *  Whether to rotate pages when maxPage > number of pages.
     *  Current page will be in the middle
     */
    rotate: boolean;
    /**
     *  Number of items in collection.
     */
    total: number;
    /**
     *  Maximum number of pages to display.
     */
    maxSize: number;
    /**
     *  Current page. Page numbers start with 1
     */
    page: number;
    change: EventEmitter<{}>;
    boundary_first: TemplateRef<any>;
    boundary_last: TemplateRef<any>;
    direction_prev: TemplateRef<any>;
    direction_next: TemplateRef<any>;
    pages: (any)[];
    private _pageLinkCompList;
    private _boundaryFirstDefault;
    private _boundaryLastDefault;
    private _directionPrevDefault;
    private _directionNexDefault;
    constructor(cd: ChangeDetectorRef);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    selectPage(pageNumber: number): void;
    private _updatePages;
    /**
     * Rotates page numbers based on maxSize items visible.
     * Currently selected page stays in the middle:
     *
     * Ex. for selected page = 6:
     * [5,*6*,7] for maxSize = 3
     * [4,5,*6*,7] for maxSize = 4
     */
    private _applyRotation;
    private _setPageInRange;
    /**
     * Appends ellipses and first/last page number to the displayed pages
     */
    private _applyEllipses;
    private _getTemplate;
    private _getDefaultTemplate;
}
