import { AfterViewChecked, AfterViewInit, ChangeDetectorRef, OnChanges, OnDestroy, OnInit, SimpleChanges, TemplateRef } from '@angular/core';
import { FormService } from '../providers/form.service';
import { FormControl } from '../models/FormControl';
import { FormGroup } from '../models/FormGroup';
import { ControlConfig } from '../models/ControlConfig';
import { ControlComponent } from './control.component';
export declare class FieldComponent implements OnInit, AfterViewInit, AfterViewChecked, OnChanges, OnDestroy {
    private _formSvs;
    private cd;
    private _parent;
    formGroup: FormGroup;
    control: FormControl;
    controlConfig: ControlConfig;
    invalid: Boolean;
    template: TemplateRef<any>;
    private _statusSubscription;
    private _submitSubscription;
    constructor(_formSvs: FormService, cd: ChangeDetectorRef, _parent: ControlComponent);
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
