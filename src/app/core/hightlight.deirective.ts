import {
  Directive,
  ElementRef,
  HostListener,
  Renderer2,
  HostBinding
} from "@angular/core";

@Directive({
  selector: "[app-highlight]"
})
export class HighlightDirective {
  @HostBinding("style.backgroundColor") bgColor;
  @HostListener("mouseenter")
  onmouseEnter() {
    // this.el.nativeElement.style.backgroundColor = "red";
    this.bgColor = "red";
  }
  @HostListener("mouseleave")
  onmouseLeave() {
    // this.el.nativeElement.style.backgroundColor = "white";
    // this.renderer.setStyle(this.el.nativeElement, "background-color", "white");
    this.bgColor = "white";
  }
  constructor(private el: ElementRef, private renderer: Renderer2) {}
}
