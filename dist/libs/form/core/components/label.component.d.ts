import { AfterViewChecked, ChangeDetectorRef, OnDestroy, OnInit } from '@angular/core';
import { FormService } from '../providers/form.service';
import { FormControl } from '../models/FormControl';
import { ControlConfig } from '../models/ControlConfig';
import { FormGroup } from '../models/FormGroup';
import { ControlComponent } from './control.component';
export declare class LabelComponent implements OnInit, AfterViewChecked, OnDestroy {
    private _formSvs;
    private cd;
    private _parent;
    formGroup: FormGroup;
    controlConfig: ControlConfig;
    control: FormControl;
    label: any;
    constructor(_formSvs: FormService, cd: ChangeDetectorRef, _parent: ControlComponent);
    ngOnInit(): void;
    ngAfterViewChecked(): void;
    ngOnDestroy(): void;
    parseContext: () => void;
}
