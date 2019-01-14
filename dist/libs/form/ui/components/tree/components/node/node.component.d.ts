import { OnInit, EventEmitter, OnChanges, SimpleChanges, ChangeDetectorRef, TemplateRef, ElementRef } from '@angular/core';
import { TreeNode } from '../../interfaces/TreeNode';
import { IoFormFieldUI } from '../../../../interfaces/IoFormFieldUI';
export declare class NodeComponent extends IoFormFieldUI implements OnInit, OnChanges {
    data: TreeNode;
    selected: TreeNode;
    template: TemplateRef<any>;
    change: EventEmitter<{}>;
    constructor(cd: ChangeDetectorRef, el: ElementRef);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    onChange: () => void;
}
