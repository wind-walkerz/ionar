import { ChangeDetectorRef, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { FormControl } from '../../models/FormControl';
import { FormControlComponent } from '../form-control.component';
export declare class FeedbackComponent implements OnInit, OnChanges, OnDestroy {
    private cd;
    /**
     * @description
     * The parent  for the components
     *
     * @internal
     */
    _parent: FormControlComponent | null;
    readonly control: FormControl;
    readonly invalid: Boolean;
    constructor(cd: ChangeDetectorRef, parent: FormControlComponent);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
}
