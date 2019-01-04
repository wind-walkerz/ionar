import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TreeComponent } from './containers/tree.component';
import { NodeComponent } from './components/node/node.component';
import { IonarUI } from '@ionar/ui';


@NgModule({
  imports: [
    IonarUI,
    CommonModule
  ],
  declarations: [
    TreeComponent,
    NodeComponent
  ],
  exports: [
    TreeComponent
  ]
})
export class TreeModule {
}
