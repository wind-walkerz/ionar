import { NodeComponent } from '../components/node/node.component';
import { TreeComponent } from '../containers/tree.component';

export interface TreeNode {
  label: any,
  value: any,
  checkbox?: Boolean,
  children?: TreeNode[],
  disable?: Boolean,
  selected: Boolean,
  path: string,
  id: any,
  parent: NodeComponent | TreeComponent;
}
