import {
  Component,
  OnInit,
  OnDestroy,
  Input,
  HostListener,
  ElementRef,
  OnChanges, SimpleChanges, ContentChild, AfterViewInit, ViewChild, ViewContainerRef, TemplateRef, ChangeDetectorRef
} from '@angular/core';
import { untilDestroyed } from '@ionar/utility';
import { MenuComponent } from './components/menu/menu.component';
import { ToggleComponent } from './components/toggle/toggle.component';

@Component({
  selector: 'io-dropdown',
  templateUrl: './dropdown.component.html'
})
export class DropdownComponent implements OnInit, AfterViewInit, OnChanges, OnDestroy {

  ///-----------------------------------------------  Variables   -----------------------------------------------///
  @Input() visible: Boolean = true;
  render: Boolean = false;
  showDropdownMenu: Boolean = false;

  @ContentChild(MenuComponent) _menuComp;

  @ContentChild(ToggleComponent) _toggleComp;

  @ViewChild('vc', { read: ViewContainerRef }) private _vcRef: ViewContainerRef;
  @ViewChild('default', { read: TemplateRef }) private _defaultTplRef: TemplateRef<any>;

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
    this.render = true;
    this.cd.detectChanges();
  }

  ngOnChanges(changes: SimpleChanges): void {

  }

  ngOnDestroy(): void {
  }


  ///-----------------------------------------------  Main Functions  -----------------------------------------------///

}
