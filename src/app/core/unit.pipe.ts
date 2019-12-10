import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "appUnit"
})
export class UnitPipe implements PipeTransform {
  transform(value: number, country: string): string {
    if (country === "IN") {
      return "INR " + value.toFixed(2);
    }
    return value.toFixed(2);
  }
}
