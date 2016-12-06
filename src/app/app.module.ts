import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { PolymerElement } from '@vaadin/angular2-polymer';

import { App } from './app.component';
import {SafeStylePipe} from './safe-style.pipe'
import {EventWheel} from './event-wheel/event-wheel.component'

@NgModule({
  declarations: [
    App,
    PolymerElement('paper-drawer-panel'),
    PolymerElement('paper-input'),
    SafeStylePipe,
    EventWheel
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  bootstrap: [App]
})
export class AppModule { }
