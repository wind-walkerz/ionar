import { ElementRef } from '@angular/core';
import _ from 'lodash';

export const isEmptyTemplate = (element: ElementRef): Boolean => {

  const nodes = element.nativeElement.childNodes;


  return _.every(nodes, node => {
    return (node.nodeType === 8);

  });

};
