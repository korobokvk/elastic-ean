import { Component, OnInit } from '@angular/core';
import { DataService } from "../data.service";
import * as _ from 'lodash';
import {FormGroup, FormBuilder, FormControl} from "@angular/forms"


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
  public userForm: FormGroup;
  public id: string;


  constructor(private _dataService: DataService, private fb: FormBuilder) {
    this.userData = [];

  }

  ngOnInit() {
    this.getData();
    this.userForm = this.fb.group({
      userName: new FormControl(null),
      userSurname: new FormControl(null),
      userEmail: new FormControl(null),
      phone: new FormControl(null),
      dateOfBirth: new FormControl(null),
      id: new FormControl()
    })
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
    this.userForm.controls['id'].setValue(id);

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
}
