import { ChangeDetectorRef, EventEmitter, TemplateRef } from '@angular/core';
import { TreeNode } from '../interfaces/TreeNode';
export declare class TreeComponent {
    private cd;
    options: TreeNode[];
    name: string;
    value: any;
    template: TemplateRef<any>;
    change: EventEmitter<{}>;
    selected: TreeNode;
    constructor(cd: ChangeDetectorRef);
    onChange: (node: TreeNode) => void;
}
