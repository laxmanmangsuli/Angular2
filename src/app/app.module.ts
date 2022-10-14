import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Module2Module } from './mode/module2/module2.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,Module2Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
