import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import 'hammerjs';

import {App} from './app';
import {SafeStylePipe} from './safe-style.pipe'
import {EventWheel} from './event-wheel/event-wheel'
import {EventWheelSector} from './event-wheel/event-wheel-sector'
import {DateToDegreesPipe} from "./utils/date-to-degrees";
import {Draggable} from "./utils/draggable";
import {NewEventDialog} from "./event/new-event-dialog";
import {DialogFactory} from "./utils/dialog-factory";

@NgModule({
  declarations: [
    App,
    SafeStylePipe,
    DateToDegreesPipe,
    EventWheel,
    EventWheelSector,
    NewEventDialog,
    Draggable
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    FlexLayoutModule.forRoot()
  ],
  providers: [
    DialogFactory
  ],
  entryComponents: [
    NewEventDialog
  ],
  schemas: [],
  bootstrap: [App]
})
export class AppModule {
}
