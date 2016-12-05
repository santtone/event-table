import {Component, AfterViewInit} from '@angular/core';

@Component({
  selector: 'ew-event-wheel',
  templateUrl: './event-wheel.component.html',
  styleUrls: ['./event-wheel.component.css']
})

export class EventWheel implements AfterViewInit {

  months = [
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

  selected(index) {
    console.log('Selected: ' + index);
  }

  ngAfterViewInit(): void {
  }
}
