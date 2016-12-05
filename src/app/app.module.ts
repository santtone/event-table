import { BrowserModule } from '@angular/platform-browser';
import { NgModule  } from '@angular/core';
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
    SafeStylePipe,
    EventWheel
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [App]
})
export class AppModule { }
