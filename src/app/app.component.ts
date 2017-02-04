import {Component} from '@angular/core';
import {DialogFactory} from "./utils/dialog-factory";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class App {

  constructor(private dialogFactory: DialogFactory){}

  addEvent(){
    console.log('Add event');
    this.dialogFactory.newEventDialog();
  }
}
