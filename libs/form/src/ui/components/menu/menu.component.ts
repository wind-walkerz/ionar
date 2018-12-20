import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'io-menu',
  template: `
      <ng-container *ngFor="let option of options">
          <div
                  class="option"
                  [class.selected]="option.value === value"
                  (click)="onSelectOption(option)"
          >
              {{option.label}}
          </div>
      </ng-container>
  `,
  styleUrls: [`./menu.component.scss`]
})
export class MenuComponent implements OnInit {
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

  onSelectOption = option => {
    this.change.emit(option.value);
    this.blur.emit();
  };

}
