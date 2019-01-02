import {
  Component,
  OnInit,
  OnDestroy,
  ViewContainerRef,
  AfterViewChecked,
  Input,
  TemplateRef,
  AfterViewInit, ElementRef
} from '@angular/core';

@Component({
  selector: 'test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit, AfterViewInit, OnDestroy {

  ///-----------------------------------------------  Variables   -----------------------------------------------///

  @Input() template: TemplateRef<any> = null;

  constructor(
    private _vcRef: ViewContainerRef,
    private _elRef: ElementRef
  ) {
  }


  ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///


  ngOnInit() {

  }

  ngAfterViewInit(): void {


    console.log(this._elRef);
    // this._vcRef.createEmbeddedView(this.template);

    // this._vcRef.clear()
  }

  ngOnDestroy(): void {
  }


  ///-----------------------------------------------  Main Functions  -----------------------------------------------///

}
