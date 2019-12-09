import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { HighlightDirective } from "./hightlight.deirective";
import { EditComponent } from "./edit.component";

@NgModule({
  declarations: [AppComponent, EditComponent, HighlightDirective],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
