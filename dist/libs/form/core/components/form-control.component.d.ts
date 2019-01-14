import { AfterViewChecked, ChangeDetectorRef, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { IoControl } from '../interfaces/IoControl';
import { ControlContainer } from '../interfaces/ControlContainer';
import { IonarTemplateDirective } from '@ionar/ui';
export declare const controlNameBinding: any;
export declare class FormControlComponent extends IoControl implements OnInit, OnChanges, AfterViewChecked {
    readonly controlTemplateDir: IonarTemplateDirective;
    private _ioTemplateDir;
    readonly attribute: string;
    readonly hiddenStyle: Boolean;
    readonly isHideLabel: Boolean;
    readonly isHideFeedback: Boolean;
    constructor(parent: ControlContainer, cd: ChangeDetectorRef);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngAfterViewChecked(): void;
}
