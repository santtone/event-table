import {Component, OnInit, ElementRef} from '@angular/core';
import {Event} from '../domain/event';

@Component({
  selector: 'ew-event-wheel',
  templateUrl: './event-wheel.component.html',
  styleUrls: ['./event-wheel.component.css']
})

export class EventWheel implements OnInit {

  element = null;
  center: number[];
  months: any[];
  wheelRotation = 0;
  today = new Date();
  wheelSize;
  events: Event[];

  constructor(el: ElementRef) {
    this.element = el.nativeElement;
    this.months = [
      {id: '1', name: 'January', color: 'rgba(0,0,0,0)'},
      {id: '2', name: 'February', color: 'rgba(0,0,0,0.1)'},
      {id: '3', name: 'March', color: 'rgba(0,0,0,0.2)'},
      {id: '4', name: 'April', color: 'rgba(0,0,0,0.3)'},
      {id: '5', name: 'May', color: 'rgba(0,0,0,0.4)'},
      {id: '6', name: 'June', color: 'rgba(0,0,0,0.5)'},
      {id: '7', name: 'July', color: 'rgba(0,0,0,0.6)'},
      {id: '8', name: 'August', color: 'rgba(0,0,0,0.7)'},
      {id: '9', name: 'September', color: 'rgba(0,0,0,0.8)'},
      {id: '10', name: 'October', color: 'rgba(0,0,0,0.9)'},
      {id: '11', name: 'November', color: 'rgba(0,0,0,0.95)'},
      {id: '12', name: 'December', color: 'rgba(0,0,0,1)'}
    ];

    this.events = [
      new Event('First event', new Date(2017, 0, 1), new Date(2017, 11, 20)),
      new Event('Second event', new Date(2017, 1, 1), new Date(2017, 8, 15)),
      new Event('Third event', new Date(2017, 6, 1), new Date(2017, 6, 30))
    ];

    this.wheelSize = 420 + this.events.length * 100;
  }

  private calculateRotation(): void {
    const d = new Date();
    let daysInCurrentMonth = new Date(d.getFullYear(), d.getMonth() + 1, 0).getDate();
    let monthInDegrees = 365 / 12;
    this.wheelRotation = -(d.getMonth() * monthInDegrees + (d.getDate() / daysInCurrentMonth * monthInDegrees));
  }

  selected(index) {
    console.log('Selected: ' + index);
  }

  ngOnInit() {
    this.calculateRotation();
    let x = this.element.offsetLeft + this.element.offsetWidth / 2;
    let y = this.element.offsetTop + this.element.offsetHeight / 2;
    this.center = [x, y];
  }

}
