import {
  ComponentFactoryResolver,
  ComponentRef,
  Directive,
  EventEmitter, forwardRef,
  Input,
  OnChanges,
  OnDestroy,
  OnInit, TemplateRef,
  ViewContainerRef
} from '@angular/core';

import { ControlContainer } from '../interfaces/ControlContainer';



@Directive({
  selector: '[formGroupTestName]',
})
export class FormGroupTestName extends ControlContainer {

}
