import { AfterViewChecked, ChangeDetectorRef, EventEmitter, OnDestroy } from '@angular/core';
import { FormService } from './providers/form.service';
import { FormGroup } from './models/FormGroup';
import { FormControl } from './models/FormControl';
import { Subscription } from 'rxjs';
export declare class FormComponent implements AfterViewChecked, OnDestroy {
    protected _formSvs: FormService;
    protected cd: ChangeDetectorRef;
    formGroup: FormGroup;
    mediaType: String;
    submit: EventEmitter<{}>;
    protected _contentVcRef: any;
    _fieldTemplateDirList: any;
    controlRoster: string[];
    controls: FormControl[];
    default_template: Boolean;
    viewInitialized: Boolean;
    protected _subscription: Subscription;
    constructor(_formSvs: FormService, cd: ChangeDetectorRef);
    ngAfterViewChecked(): void;
    ngOnDestroy(): void;
    parseContext: () => void;
}
