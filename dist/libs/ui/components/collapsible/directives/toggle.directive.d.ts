import { ChangeDetectorRef, OnInit } from '@angular/core';
import { CollapsibleDirective } from './collapsible.directive';
export declare class ToggleDirective implements OnInit {
    private cd;
    private _parent;
    onClick($event: any): void;
    constructor(parent: CollapsibleDirective, cd: ChangeDetectorRef);
    ngOnInit(): void;
}
