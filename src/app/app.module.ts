import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import 'hammerjs';

import {App} from './app.component';
import {SafeStylePipe} from './safe-style.pipe'
import {EventWheel} from './event-wheel/event-wheel.component'
import {EventWheelSector} from './event-wheel/event-wheel-sector.component'
import {DateToDegreesPipe} from "./utils/date-to-degrees";
import {Draggable} from "./utils/draggable";

@NgModule({
  declarations: [
    App,
    SafeStylePipe,
    DateToDegreesPipe,
    EventWheel,
    EventWheelSector,
    Draggable
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    FlexLayoutModule.forRoot()
  ],
  providers: [],
  schemas: [],
  bootstrap: [App]
})
export class AppModule {
}
