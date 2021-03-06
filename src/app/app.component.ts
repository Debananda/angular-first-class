import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "angular-first-class";
  list: string[] = ["one", "two", "three"];
  price: number = 250.2;
  showEdit = true;
  changeTitle(value: string) {
    this.title = value;
  }
  toggleShowEdit() {
    this.showEdit = !this.showEdit;
  }
}
