import {Component} from '@angular/core';
import {MdDialogRef} from "@angular/material";

@Component({
  selector: 'new-event-dialog',
  templateUrl: './new-event.component.html',
})

export class NewEventDialog {
  constructor(public dialogRef: MdDialogRef<NewEventDialog>) {}
}
