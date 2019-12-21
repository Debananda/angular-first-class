import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { EditComponent } from "./edit.component";
import { CoreModule } from "./core/core.module";
import { SkillsComponent } from "./skills/skills.component";

@NgModule({
  declarations: [AppComponent, EditComponent, SkillsComponent],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, CoreModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
