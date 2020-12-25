import { Component, Injector, OnInit } from "@angular/core";
import { ControlValueAccessor, NgControl } from "@angular/forms";

@Component({
  selector: "app-custom-input",
  templateUrl: "./custom-input.component.html",
  styleUrls: ["./custom-input.component.css"]
})
export class CustomInputComponent implements OnInit, ControlValueAccessor {
  public value = "";

  public onChanged = value => {};
  public onTouched = () => {};

  private ngControl: NgControl;

  constructor(private inj: Injector) {}

  ngOnInit() {
    this.ngControl = this.inj.get(NgControl);
    this.ngControl.valueAccessor = this;
  }

  registerOnChange(fn) {
    this.onChanged = fn;
  }

  registerOnTouched(fn) {
    this.onTouched = fn;
  }

  writeValue(value: any): void {
    this.value = value;
  }

  onInput() {
    this.onChanged(this.value);
  }
}
