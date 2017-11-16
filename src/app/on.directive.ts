import { Directive, ElementRef, OnInit, OnDestroy, Renderer2, Input } from '@angular/core';

@Directive({
  selector: '[appOn]'
})
export class OnDirective implements OnInit, OnDestroy {
  @Input() appOn: string;
  funcionOver: Function;
  funcionOut: Function;

  ngOnDestroy(): void {
    // Destruyo el evento
    this.funcionOut();
    this.funcionOver();
  }
  ngOnInit() {
    this.funcionOver = this.renderer.listen(this.el.nativeElement, 'mouseover', e => {
      this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', 'yellow');
    });
    this.funcionOut = this.renderer.listen(this.el.nativeElement, 'mouseout', e => {
      this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', 'white');
    });
  }
  constructor(private el: ElementRef, private renderer: Renderer2) { }

}
