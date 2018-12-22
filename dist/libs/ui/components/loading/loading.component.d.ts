import { AfterViewChecked, ChangeDetectorRef, OnDestroy, OnInit } from '@angular/core';
import { IonarLoadingService } from './loading.service';
export declare class LoadingComponent implements OnInit, AfterViewChecked, OnDestroy {
    private _loadingSvs;
    private cd;
    visible: Boolean;
    private _subscription;
    constructor(_loadingSvs: IonarLoadingService, cd: ChangeDetectorRef);
    ngOnInit(): void;
    ngAfterViewChecked(): void;
    ngOnDestroy(): void;
}
