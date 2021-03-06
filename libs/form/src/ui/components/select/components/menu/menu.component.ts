import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'menu',
  template: `
      <ng-container *ngFor="let option of options">
          <select-option
                  [data]="option"
                  (click)="this.onSelectOption.emit(option)"
          ></select-option>
      </ng-container>
  `,
  styles: [`
      :host {
          background-color: white;
          border-radius: 5px;
          box-sizing: border-box;
          border: 1px solid rgb(196, 202, 212);
          overflow-y: scroll;
          padding: 0 10px;
          position: absolute;
          top: 100%;
          z-index: 9999;
          width: 100%;
          max-height: 20rem;
      }
  `]
})
export class MenuComponent implements OnInit {
  @Input() options = [];
  @Output() onSelectOption = new EventEmitter<any>();

  constructor() {
  }

  ngOnInit() {
  }

}
