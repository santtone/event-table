import {Injectable} from '@angular/core';
import {NewEventDialog} from "../event/new-event-dialog";
import {MdDialog, MdDialogRef} from "@angular/material";

@Injectable()
export class DialogFactory {

  constructor(public dialog: MdDialog) {
  }

  public newEventDialog() {
    return this.dialog.open(NewEventDialog);
  }
}
