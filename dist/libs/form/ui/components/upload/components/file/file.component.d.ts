import { ChangeDetectorRef, OnChanges, OnInit, SimpleChanges } from '@angular/core';
export declare class FileComponent implements OnInit, OnChanges {
    private cd;
    data: any;
    image: any;
    name: string;
    constructor(cd: ChangeDetectorRef);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
}
