import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef, EventEmitter,
  Input, OnChanges,
  OnDestroy,
  OnInit, Output, SimpleChanges, TemplateRef
} from '@angular/core';
import { IoFormFieldUI } from '../../../interfaces/IoFormFieldUI';
import { TreeNode } from '../interfaces/TreeNode';


@Component({
  selector: 'io-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TreeComponent {

  ///-----------------------------------------------  Variables   -----------------------------------------------///

  @Input() options: TreeNode[];
  @Input() name = '';
  @Input() value: any = null;
  @Input() template: TemplateRef<any>;
  @Output() change = new EventEmitter();

  selected: TreeNode;

  constructor(
    private cd: ChangeDetectorRef
  ) {

  }


  onChange = (node: TreeNode) => {

    this.selected = node;
    this.change.emit(node.value);
    this.cd.detectChanges();
  };


}
