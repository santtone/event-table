import {Component} from '@angular/core';
import {MdDialogRef} from "@angular/material";

@Component({
  selector: 'new-event-dialog',
  templateUrl: 'new-event-dialog.html',
})

export class NewEventDialog {
  constructor(public dialogRef: MdDialogRef<NewEventDialog>) {}
}
