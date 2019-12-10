import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { HighlightDirective } from "./hightlight.deirective";
import { UnitPipe } from "./unit.pipe";

@NgModule({
  declarations: [HighlightDirective, UnitPipe],
  imports: [CommonModule],
  exports: [HighlightDirective, UnitPipe]
})
export class CoreModule {}
