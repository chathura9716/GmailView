import { AfterViewInit, Directive, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appAnimatedFab]'
})
export class AnimatedFabDirective implements AfterViewInit{
  @Input('appAnimatedFab') fab:any;
  expanded=true;
  constructor() { }

  ngAfterViewInit(){

  }
  @HostListener('ionScroll',['$event']) onContentScroll($event:any){
    if ($event.detail.deltaY>0  && this.expanded){

      this.expanded=false;
      this.shrinkFab();
    }else if($event.detail.deltaY<0 && !this.expanded){
      this.expanded=true;
      this.expandFab();
    }
  }
  shrinkFab(){

  }

  expandFab(){

  }
}
