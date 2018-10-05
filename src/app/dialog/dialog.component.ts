import { Component, OnInit } from '@angular/core';
import { DataService } from "../data.service";
import { Response } from "@angular/http";
import * as moment from 'moment';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.less'],
})
export class DialogComponent implements OnInit {
  public visible = false;
  public visibleAnimate = false;

  constructor(private _dataService: DataService) { }

  public show(): void {
    this.visible = true;
    setTimeout(() => this.visibleAnimate = true, 100);
  }

  public hide(): void {
    this.visibleAnimate = false;
    setTimeout(() => this.visible = false, 300);
  }
  public submitUser(data) {
    data.value.lastChanges = moment().format('LLL');
    if (data.value.id !== null) {
      let dataObj = {};
      for (let key in data.value) {
        if(key !== 'id') {
         dataObj[key] = data.value[key]
        }
      }
      this._dataService.putData(dataObj, data.value.id).subscribe((val:Response) => {
        this._dataService.getLast(val.json()._id)
      });
    } else {
      this._dataService.addData(data.value).subscribe(val => {
        this._dataService.getLast(val.json()._id)
      })
    }
  this.hide();
  }
  public onContainerClicked(event: MouseEvent): void {
    if ((<HTMLElement>event.target).classList.contains('modal')) {
      this.hide();
    }
  }

  ngOnInit() {
  }

}
