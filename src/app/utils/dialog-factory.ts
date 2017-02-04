import {Injectable} from '@angular/core';
import {NewEventDialog} from "../event/new-event.component";
import {MdDialog} from "@angular/material";

@Injectable()
export class DialogFactory {

  constructor(public dialog: MdDialog) {
  }

  newEventDialog(): void {
    let dialogRef = this.dialog.open(NewEventDialog);
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  }
}
