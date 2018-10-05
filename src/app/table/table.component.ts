import { Component, OnInit } from '@angular/core';
import { DataService } from "../data.service";
import * as _ from 'lodash';

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

  constructor(private _dataService: DataService) {
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

  private delete(id) {
    this._dataService.deleteData(id).subscribe(status => {
      if(status === 'OK') {
        this.userData = _.cloneDeep(this.userData.filter(item => {
          return item.id !== id
        }))
      }
    })
  }
}
