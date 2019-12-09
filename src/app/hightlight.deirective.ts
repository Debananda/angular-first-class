import { Directive, ElementRef, HostListener } from "@angular/core";

@Directive({
  selector: "[app-highlight]"
})
export class HighlightDirective {
  @HostListener("mouseenter")
  onmouseEnter() {
    this.el.nativeElement.style.backgroundColor = "red";
  }
  @HostListener("mouseleave")
  onmouseLeave() {
    this.el.nativeElement.style.backgroundColor = "white";
  }
  constructor(private el: ElementRef) {}
}
