import { Component, OnInit } from '@angular/core';
import { DataService } from "../data.service";
import * as _ from 'lodash';
import { DialogService } from "../dialog.service";


interface usersDataInterface {
  id: string,
  details: {
    userName: string,
    userSurname: string,
    userEmail: string,
    phone: string,
    dateOfBirth: string,
    lastChanges: string
  }
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.less']
})
export class TableComponent implements OnInit {
  private userData: Array<usersDataInterface>;
  public result: any;


  constructor(private _dataService: DataService, private dialogsService: DialogService) {
    this.userData = [];
  }

  ngOnInit() {
    this.getData();
  }

  private getData() {
    this._dataService.getData().subscribe((data) => {
      data.forEach(value => {
        this.userData.push({
          id: value._id,
          details: {
            userName: value._source.userName,
            userSurname: value._source.userSurname,
            userEmail: value._source.userEmail,
            phone: value._source.phone,
            dateOfBirth: value._source.dateOfBirth,
            lastChanges: value._source.lastChanges
          }
        });
      });
    })
  }

  private editUser(id) {
   // this._dataService
  }
  private deleteUser(id) {
    this._dataService.deleteData(id).subscribe(status => {
      if(status === 'OK') {
        this.userData = _.cloneDeep(this.userData.filter(item => {
          return item.id !== id
        }))
      }
    })
  }

  // public openDialog() {
  //   this.dialogsService
  //     .confirm('Confirm Dialog', 'Are you sure you want to do this?')
  //     .subscribe(res => this.result = res);
  // }
}
