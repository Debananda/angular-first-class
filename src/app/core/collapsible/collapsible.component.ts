import {
  Component,
  OnInit,
  Input,
  ContentChild,
  ElementRef,
  AfterContentInit
} from "@angular/core";

@Component({
  selector: "app-collapsible",
  templateUrl: "./collapsible.component.html",
  styleUrls: ["./collapsible.component.css"]
})
export class CollapsibleComponent implements OnInit, AfterContentInit {
  @Input() header: string;
  @ContentChild("dummyContent", { static: true }) dummyContent: ElementRef;

  showBody = true;
  constructor() {}

  ngOnInit() {
    console.log(this.dummyContent.nativeElement);
  }
  toggleShow() {
    this.showBody = !this.showBody;
  }
  ngAfterContentInit() {
    console.log("After COntent Init");
  }
}
