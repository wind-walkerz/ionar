/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { FormGroup } from '../models/FormGroup';
import { AfterViewInit, ChangeDetectorRef, OnChanges, OnInit, SimpleChanges } from '@angular/core';
/**
 * @description
 * A base class for directives that contain multiple registered instances of `IoControl`.
 * Only used by the forms module.
 *
 * @publicApi
 */
export declare abstract class ControlContainer implements OnInit, OnChanges, AfterViewInit {
    cd: ChangeDetectorRef;
    /**
     * @description
     * The parent form for the control.
     *
     * @internal
     */
    private _parent;
    parent: ControlContainer | null;
    /**
     * @description
     * Tracks the name of the Control bound to the components. The name corresponds
     * to a key in the parent `FormGroup` or `FormArray`.
     */
    private _name;
    name: string | null;
    /**
     * @description
     * The top-level FormGroup for this group if present, otherwise null.
     */
    readonly root: FormGroup | null;
    /**
     * @description
     * Returns an array that represents the path from the top-level form to this control.
     * Each index is the string name of the control on that level.
     */
    readonly path: string[];
    constructor(cd: ChangeDetectorRef);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngAfterViewInit(): void;
}
