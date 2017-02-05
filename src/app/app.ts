import {Component} from '@angular/core';
import {DialogFactory} from "./utils/dialog-factory";

@Component({
  selector: 'app-root',
  templateUrl: 'app.html',
  styleUrls: ['app.css']
})

export class App {

  constructor(private dialogFactory: DialogFactory){}

  private addEvent(){
    this.dialogFactory.newEventDialog().afterClosed().subscribe(result => {
      console.log(result);
    });
  }
}
