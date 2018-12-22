import { AfterViewInit, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { FormGroup } from '../models/FormGroup';
import { AbstractControl } from '../models/AbstractControl';
import { Subject } from 'rxjs';
export declare class FormService implements OnInit, AfterViewInit, OnChanges, OnDestroy {
    private formGroup;
    $initialize: Subject<{}>;
    ngAfterViewInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
    ngOnInit(): void;
    initialize: (formGroup: FormGroup) => void;
    getFormGroup: () => FormGroup;
    getControl: (name: any) => AbstractControl;
    convertToFormData: (data: any) => FormData;
    convertToMediaType: (value: any, media_type: any) => any;
}
