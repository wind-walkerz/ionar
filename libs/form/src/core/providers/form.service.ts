import { AfterViewInit, Injectable, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { FormGroup } from '../models/FormGroup';
import { AbstractControl } from '../models/AbstractControl';
import { ValidationConfigs } from '../models/Validator';


@Injectable()

export class FormService implements OnInit, AfterViewInit, OnChanges, OnDestroy {

  private formGroup: FormGroup;

  ngAfterViewInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
  }

  ngOnDestroy(): void {
  }

  ngOnInit(): void {
  }


  group = (formGroup: FormGroup) => {
    this.formGroup = formGroup;
  };

  // validateOptions = (options: ValidationOptions | null) => {
  //   this.formGroup._setUpValidationOptions(options);
  // };

  getFormGroup = (): FormGroup => this.formGroup;
  getControl = (name): AbstractControl => this.formGroup.get(name);
}


