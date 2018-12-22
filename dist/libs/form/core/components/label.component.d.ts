import { ChangeDetectorRef, OnDestroy, OnInit } from '@angular/core';
import { FormService } from '../providers/form.service';
import { FormControl } from '../models/FormControl';
import { ControlConfig } from '../models/ControlConfig';
import { FormGroup } from '../models/FormGroup';
export declare class LabelComponent implements OnInit, OnDestroy {
    private _formSvs;
    private cd;
    name: string;
    formGroup: FormGroup;
    _controlConfig: ControlConfig;
    _control: FormControl;
    label: any;
    constructor(_formSvs: FormService, cd: ChangeDetectorRef);
    ngOnInit(): void;
    ngOnDestroy(): void;
    parseContext: () => void;
}
