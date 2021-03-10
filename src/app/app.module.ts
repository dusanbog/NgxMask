import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { NgxMaskModule, IConfig } from "ngx-mask";
export const options: Partial<IConfig> = {};
@NgModule({
  imports: [BrowserModule, FormsModule, NgxMaskModule.forRoot(options)],
  declarations: [AppComponent, HelloComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
