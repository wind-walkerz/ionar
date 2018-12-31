import {
  AfterViewChecked,
  AfterViewInit,
  ChangeDetectionStrategy,

  Component,
  ContentChild,
  ElementRef, forwardRef,
  Host, HostBinding, Inject,
  Input,
  OnChanges,
  OnDestroy,
  OnInit, Optional, Query, QueryList,
  Renderer2, SimpleChanges, SkipSelf,
  TemplateRef
} from '@angular/core';
import { FormGroup } from '../models/FormGroup';
import { FormControl } from '../models/FormControl';
import { FormService } from '../providers/form.service';

import _ from 'lodash';
import { FormComponent, formProvider } from '../core.component';

import { FormTemplateDirective } from '../directives/field-template.directive';

import { AbstractControl } from '../models/AbstractControl';
import { NgControl } from '../interfaces/NgControl';
import { ControlContainer } from '../interfaces/ControlContainer';
import { untilDestroyed } from '@ionar/utility';
import { FormArrayComponent } from './form-array.component';
import { FormGroupComponent } from './form-group.component';

@Component({
  selector: 'form-template',
  template: `
    <ng-container #vc>
        <ng-content></ng-content>
    </ng-container>
  `,

  styles: [`
    
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})


export class FormTemplateComponent  {

}
