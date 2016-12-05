import {Component, AfterViewInit, NgModule} from '@angular/core';

import { EventWheel } from './event-wheel/event-wheel.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class App implements AfterViewInit {
  ngAfterViewInit(): void {
  }
}
