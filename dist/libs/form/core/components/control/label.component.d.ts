import { ChangeDetectorRef, OnDestroy } from '@angular/core';
import { FormControlComponent } from '../form-control.component';
export declare class LabelComponent implements OnDestroy {
    private cd;
    /**
     * @description
     * The parent  for the components
     *
     * @internal
     */
    _parent: FormControlComponent | null;
    readonly label: string;
    private readonly _control;
    constructor(cd: ChangeDetectorRef, parent: FormControlComponent);
    ngOnDestroy(): void;
}
