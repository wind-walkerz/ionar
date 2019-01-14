import { OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
export declare class CollapsibleDirective implements OnInit, OnDestroy {
    ioCollapsible: any;
    change$: Subject<{}>;
    collapsed: Boolean;
    customToggler: Boolean;
    ngOnInit(): void;
    ngOnDestroy(): void;
}
