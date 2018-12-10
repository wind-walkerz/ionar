import {
  Component,
  OnInit,
  OnDestroy,
  ViewContainerRef,
  ContentChild,
  ComponentFactoryResolver,
  ComponentRef, TemplateRef, AfterViewInit
} from '@angular/core';
import { PanelComponent } from './components/panel.component';
import { HeaderComponent } from './components/header.component';
import { ContentComponent } from './components/content.component';
import { untilDestroyed } from '@ionar/utility';
import { Content } from '@angular/compiler/src/render3/r3_ast';

@Component({
  selector: 'io-collapsible',
  template: `
      <ng-container *ngIf="!single">
          <ng-content select="collapse-panel"></ng-content>
      </ng-container>

      <ng-container *ngIf="single">
          <ng-content select="collapse-header"></ng-content>

          <ng-content select="collapse-content"></ng-content>
      </ng-container>
  `,
  styleUrls: ['./collapsible.component.scss']
})
export class CollapsibleComponent implements OnInit, OnDestroy {

  ///-----------------------------------------------  Variables   -----------------------------------------------///

  @ContentChild(PanelComponent) private _panelComp;

  @ContentChild(HeaderComponent) private _headerComp;
  @ContentChild(ContentComponent) private _contentComp;

  single: Boolean = false;

  constructor() {
  }

  ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///

  ngOnInit() {
    if (!this._panelComp && (!this._headerComp || !this._contentComp)) {
      throw new Error(`'collapse-header' or 'collapse-content'  cannot be found!`);
    }

    if (!this._panelComp) {
      this.single = true;
      this._headerComp.toggle.pipe(untilDestroyed(this)).subscribe(() => {
        this._contentComp.collapsed = !this._contentComp.collapsed;
        this._contentComp.ngOnChanges();
      });
    }

  }

  ngOnDestroy(): void {
  }


  ///-----------------------------------------------  Main Functions  -----------------------------------------------///

}
