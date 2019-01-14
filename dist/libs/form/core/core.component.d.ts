import { AfterViewInit, ChangeDetectorRef, ElementRef, EventEmitter, OnChanges, OnDestroy, OnInit, QueryList, SimpleChanges, TemplateRef } from '@angular/core';
import { FormService } from './providers/form.service';
import { FormGroup } from './models/FormGroup';
import { ControlContainer } from './interfaces/ControlContainer';
import { IonarTemplateDirective } from '@ionar/ui';
export declare const formProvider: any;
export declare class FormComponent extends ControlContainer implements OnInit, OnChanges, AfterViewInit, OnDestroy {
    private _formSvs;
    private _elRef;
    /**
     * @description
     * Tracks the `FormGroup` bound to this components.
     */
    form: FormGroup;
    mediaType: String;
    /**
     * @description
     * Emits an event when the form submission has been triggered.
     */
    submit: EventEmitter<{}>;
    private _contentVcRef;
    controlTemplate: TemplateRef<any>;
    ioTemplateDirList: QueryList<IonarTemplateDirective>;
    default_template: Boolean;
    isFormControl: (c: any) => boolean;
    isFormGroup: (c: any) => boolean;
    isFormArray: (c: any) => boolean;
    constructor(_formSvs: FormService, _elRef: ElementRef, cd: ChangeDetectorRef);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    /**
     * @description
     * Returns the `FormGroup` bound to whole module.
     */
    readonly root: FormGroup;
    /**
     * @description
     * Returns an array representing the path to this group. Because this components
     * always lives at the top level of a form, it always an empty array.
     */
    readonly path: string[];
    private _checkFormPresent;
}
