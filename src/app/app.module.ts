import { BrowserModule } from '@angular/platform-browser';
import { NgModule  } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { PolymerElement } from '@vaadin/angular2-polymer';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    PolymerElement('paper-drawer-panel')
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
