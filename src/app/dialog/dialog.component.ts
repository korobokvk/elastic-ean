import { Component, OnInit } from '@angular/core';
import { MdDialog } from "@angular/material"
import { MyDialogComponent} from "../my-dialog/my-dialog.component"

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.less'],
  providers: [MdDialog]
})
export class DialogComponent implements OnInit {
  private dialogResult;
  constructor(public dialog: MdDialog) { }

  ngOnInit() {
  }

  openDialog() {
    let dialogRef = this.dialog.open(MyDialogComponent, {
      width: '600px',
      position: 'top'
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog closed: ${result}`);
      this.dialogResult = result;
    });
  }

}
