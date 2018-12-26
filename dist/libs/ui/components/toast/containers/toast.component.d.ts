import { OnInit, OnDestroy, OnChanges, SimpleChanges } from '@angular/core';
import { IonarToastService } from '../toast.service';
export declare class ToastComponent implements OnInit, OnChanges, OnDestroy {
    private _toast;
    message_list: any[];
    readonly _showToastContainer: boolean;
    constructor(_toast: IonarToastService);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
    deleteMessage: (index: any) => void;
}
