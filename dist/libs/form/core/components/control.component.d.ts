import { AfterViewChecked, AfterViewInit, ChangeDetectorRef, ElementRef, OnChanges, OnDestroy, OnInit, Renderer2, TemplateRef } from '@angular/core';
import { FormGroup } from '../models/FormGroup';
import { FormControl } from '../models/FormControl';
import { FormService } from '../providers/form.service';
import { FormComponent } from '../core.component';
export declare class ControlComponent implements OnInit, AfterViewInit, AfterViewChecked, OnChanges, OnDestroy {
    private _formSvs;
    cd: ChangeDetectorRef;
    private _renderer;
    private _elRef;
    private _parent;
    name: any;
    formGroup: FormGroup;
    _control: FormControl;
    fieldTemplate: TemplateRef<any>;
    show_feedback: Boolean;
    show_label: Boolean;
    private _fieldTemplateDir;
    constructor(_formSvs: FormService, cd: ChangeDetectorRef, _renderer: Renderer2, _elRef: ElementRef, _parent: FormComponent);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngAfterViewChecked(): void;
    ngOnChanges(): void;
    ngOnDestroy(): void;
    parseContext: () => void;
    private _checkTemplate;
}
