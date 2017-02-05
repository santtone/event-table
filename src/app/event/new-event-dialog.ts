import {Component} from '@angular/core';
import {MdDialogRef} from "@angular/material";
import {Event} from "../domain/event";

@Component({
  selector: 'new-event-dialog',
  templateUrl: 'new-event-dialog.html',
})

export class NewEventDialog {

  private startDate;
  private endDate;
  private name;

  constructor(public dialogRef: MdDialogRef<NewEventDialog>) {
    this.startDate = this.dateToString(new Date());
    this.endDate = this.dateToString(new Date());
  }

  private dateToString(date: Date){
    return date.toISOString().substring(0, 10);
  }

  private add(): void {
    let event = new Event(this.name, new Date(this.startDate), new Date(this.endDate));
    this.dialogRef.close(event);
  }

  private close(): void{
    this.dialogRef.close();
  }

}
