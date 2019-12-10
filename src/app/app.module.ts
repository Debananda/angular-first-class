import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { EditComponent } from "./edit.component";
import { CoreModule } from "./core/core.module";

@NgModule({
  declarations: [AppComponent, EditComponent],
  imports: [BrowserModule, FormsModule, CoreModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
