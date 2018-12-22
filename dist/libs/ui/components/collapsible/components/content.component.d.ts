import { OnInit, OnDestroy, OnChanges } from '@angular/core';
export declare class ContentComponent implements OnInit, OnChanges, OnDestroy {
    collapsed: Boolean;
    display: string;
    ngOnInit(): void;
    ngOnChanges(changes: any): void;
    ngOnDestroy(): void;
}
