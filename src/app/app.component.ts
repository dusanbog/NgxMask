import { Component, VERSION } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular " + VERSION.major;
  percentValue: string = "126.23";
  currencyValue = "1251615.25";
  currencyNoDecimalsValue = "1251615.25";
  customMask = "-1251615.25";
}
