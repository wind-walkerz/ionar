import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ContentChild,
  ElementRef,
  HostListener,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges
} from '@angular/core';
import { MenuComponent } from './components/menu.component';
import { ToggleComponent } from './components/toggle.component';

@Component({
  selector: 'io-dropdown',
  template: `
      <ng-content select="dropdown-toggle"></ng-content>

      <ng-container *ngIf="showDropdownMenu">
          <ng-content select="dropdown-menu"></ng-content>
      </ng-container>
  `
})
export class DropdownComponent implements OnInit, AfterViewInit, OnChanges, OnDestroy {

  ///-----------------------------------------------  Variables   -----------------------------------------------///
  viewInitialized: Boolean = false;
  showDropdownMenu: Boolean = false;

  @ContentChild(MenuComponent) _menuComp;

  @ContentChild(ToggleComponent) _toggleComp;

  @HostListener('document:click', ['$event'])
  onClickOutside(e: Event) {
    if (!this._elRef.nativeElement.contains(e.target) && !this._menuComp.elRef.nativeElement.contains(e.target)) {
      this.showDropdownMenu = false;
    }
  }

  constructor(private _elRef: ElementRef, private cd: ChangeDetectorRef) {
  }

  ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///

  ngOnInit() {

  }

  ngAfterViewInit(): void {
    this.viewInitialized = true;
    this._toggleComp.change.subscribe(() => {
      this.showDropdownMenu = !this.showDropdownMenu;
    });
    this.cd.detectChanges();
  }

  ngOnChanges(changes: SimpleChanges): void {

  }

  ngOnDestroy(): void {
  }


}
