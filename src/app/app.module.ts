import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ColorDirective } from './color.directive';
import { OnDirective } from './on.directive';

@NgModule({
  declarations: [
    AppComponent,
    ColorDirective,
    OnDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
