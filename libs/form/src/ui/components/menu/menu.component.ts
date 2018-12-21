import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'io-menu',
  template: `
      <ng-container *ngFor="let option of options">
          <div
                  class="option"
                  [class.active]="option.value === value"
                  (click)="onSelectOption(option)"
          >
              {{option.label}}
          </div>
      </ng-container>
  `,
  styleUrls: [`./menu.component.scss`]
})
export class MenuComponent implements OnInit, OnChanges {
  @Input() options: ({ label: any, value: any, disable?: boolean })[] = [];
  @Input() name = '';
  @Input() value: any = null;
  @Output() change = new EventEmitter();
  @Output() blur = new EventEmitter();
  @Output() enter = new EventEmitter();
  @Input() invalid: Boolean = false;

  constructor() {
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
  }

  onSelectOption = option => {
    this.change.emit(option.value);
    this.blur.emit();
  };

}
