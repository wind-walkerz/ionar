import { ChangeDetectorRef, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { FormService } from '../providers/form.service';
import { FormControl } from '../models/FormControl';
import { FormGroup } from '../models/FormGroup';
export declare class FeedbackComponent implements OnInit, OnChanges, OnDestroy {
    private _formSvs;
    private cd;
    name: string;
    _control: FormControl;
    formGroup: FormGroup;
    invalid: Boolean;
    error_list: string[] | null;
    show_feedback: Boolean;
    constructor(_formSvs: FormService, cd: ChangeDetectorRef);
    ngOnInit(): void;
    generate_feedback: (validator: any, value: any) => any;
    ngOnChanges(changes: any): void;
    ngOnDestroy(): void;
    parseContext: () => void;
}
