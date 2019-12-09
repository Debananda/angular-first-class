import {
  Component,
  Input,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef,
  Renderer2
} from "@angular/core";

@Component({
  selector: "app-edit",
  template: `
    <div class="form-group">
      <label #lblText>{{ inputLabel }}</label>
      <input
        name="text"
        type="text"
        class="form-control"
        [ngModel]="inputText"
        (input)="editText($event.target.value)"
      />
    </div>
  `,
  styles: [
    `
      input {
        color: blue;
      }
    `
  ]
})
export class EditComponent {
  @Input() inputText: string;
  @Input() inputLabel: string;
  @ViewChild("lblText", { static: false }) lblText: ElementRef;
  @Output() changeText = new EventEmitter<string>();
  constructor(private renderer: Renderer2) {}
  editText(value: string) {
    this.lblText.nativeElement.style.color = "red";
    this.renderer.setStyle(
      this.lblText.nativeElement,
      "backgroundColor",
      "yellow"
    );
    this.changeText.emit(value);
  }
}
