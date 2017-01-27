import {BrowserModule} from '@angular/platform-browser';
import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {App} from './app.component';
import {SafeStylePipe} from './safe-style.pipe'
import {EventWheel} from './event-wheel/event-wheel.component'
import {EventWheelSector} from './event-wheel/event-wheel-sector.component'

@NgModule({
  declarations: [
    App,
    SafeStylePipe,
    EventWheel,
    EventWheelSector
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [App]
})
export class AppModule {
}
