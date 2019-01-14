import { AfterViewInit, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { AbstractControl } from '../models/AbstractControl';
import { FormGroupState } from '../interfaces/Form';
export declare class FormService implements OnInit, AfterViewInit, OnChanges, OnDestroy {
    ngAfterViewInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
    ngOnInit(): void;
    mergeControls: (controls: FormGroupState | AbstractControl[], parent_name?: string) => any[];
    convertToFormData: (data: any) => FormData;
    convertToMediaType: (value: any, media_type: any) => any;
}
