import { Component, VERSION } from "@angular/core";
import { FormControl } from "@angular/forms";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  control1 = new FormControl("");
  control2 = new FormControl("", { updateOn: "blur" });

  changeValues = [];
  blurValues = [];

  constructor() {
    this.control1.valueChanges.subscribe((value: string) => {
      this.changeValues.push(value);
    });

    this.control2.valueChanges.subscribe((value: string) => {
      this.blurValues.push(value);
    });
  }
}
