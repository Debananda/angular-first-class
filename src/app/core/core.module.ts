import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { HighlightDirective } from "./hightlight.deirective";
import { UnitPipe } from "./unit.pipe";
import { CollapsibleComponent } from "./collapsible/collapsible.component";

@NgModule({
  declarations: [HighlightDirective, UnitPipe, CollapsibleComponent],
  imports: [CommonModule],
  exports: [HighlightDirective, UnitPipe, CollapsibleComponent]
})
export class CoreModule {}
