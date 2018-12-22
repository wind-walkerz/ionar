import { AfterViewChecked, AfterViewInit, ChangeDetectorRef, OnChanges, OnDestroy, OnInit, SimpleChanges, TemplateRef } from '@angular/core';
import { FormService } from '../providers/form.service';
import { FormControl } from '../models/FormControl';
import { FormGroup } from '../models/FormGroup';
import { ControlConfig } from '../models/ControlConfig';
export declare class FieldComponent implements OnInit, AfterViewInit, AfterViewChecked, OnChanges, OnDestroy {
    private _formSvs;
    private cd;
    name: string;
    control: FormControl;
    controlConfig: ControlConfig;
    formGroup: FormGroup;
    template: TemplateRef<any>;
    invalid: Boolean;
    constructor(_formSvs: FormService, cd: ChangeDetectorRef);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngAfterViewChecked(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
    onChanged: (e: any) => void;
    onTouched: () => void;
    onEntered: () => void;
    parseContext: () => void;
}
