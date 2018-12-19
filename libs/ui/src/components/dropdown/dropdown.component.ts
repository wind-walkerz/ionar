import {
  AfterViewInit,
  ChangeDetectionStrategy,
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
import { untilDestroyed } from '@ionar/utility';

@Component({
  selector: 'io-dropdown',
  template: `
      <ng-content select="dropdown-toggle"></ng-content>

      <ng-container *ngIf="showDropdownMenu && visible">
          <ng-content select="dropdown-menu"></ng-content>
      </ng-container>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DropdownComponent implements OnInit, AfterViewInit, OnChanges, OnDestroy {

  ///-----------------------------------------------  Variables   -----------------------------------------------///
  viewInitialized: Boolean = false;

  visible: Boolean = false;

  showDropdownMenu: Boolean = false;

  @ContentChild(MenuComponent) private _menuComp;

  @ContentChild(ToggleComponent) private _toggleComp;

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
    this._menuComp.visibilityChange$.pipe(untilDestroyed(this)).subscribe(visible => {
      this.visible = visible;

      this.cd.markForCheck();
    });
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
