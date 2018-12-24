import { AfterViewChecked, ChangeDetectorRef, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { FormService } from '../providers/form.service';
import { FormControl } from '../models/FormControl';
import { FormGroup } from '../models/FormGroup';
import { ControlComponent } from './control.component';
export declare class FeedbackComponent implements OnInit, OnChanges, AfterViewChecked, OnDestroy {
    private _formSvs;
    private cd;
    private _parent;
    _control: FormControl;
    formGroup: FormGroup;
    invalid: Boolean;
    error_list: string[] | null;
    show_feedback: Boolean;
    private _statusSubscription;
    private _submitSubscription;
    constructor(_formSvs: FormService, cd: ChangeDetectorRef, _parent: ControlComponent);
    ngOnInit(): void;
    ngAfterViewChecked(): void;
    generate_feedback: (validator: any, value: any) => any;
    ngOnChanges(changes: any): void;
    ngOnDestroy(): void;
    parseContext: () => void;
}
