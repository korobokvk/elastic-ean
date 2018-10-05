import { Component, OnInit, OnDestroy } from '@angular/core';
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
export class TableComponent implements OnInit, OnDestroy {
  private userData: Array<usersDataInterface>;
  public userForm: FormGroup;
  public id: string;


  constructor(private _dataService: DataService, private fb: FormBuilder) {
    this._dataService.data$.asObservable().subscribe(data => {
      console.log(data)
      this.configureData(data)
    });

  }

  ngOnInit() {
    this.userData = [];
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

  ngOnDestroy() {
    this._dataService.data$.unsubscribe()
  }

  private getData() {
    this._dataService.getData().subscribe((data) => {
      this.configureData(data)
    })
  }

  private configureData(data) {
    console.log(data)

    const arr = this.userData.filter(value => {
      return value.id === data._id
    });
    console.log(arr)
    if(arr.length > 0) {
      this.userData.splice(this.userData.indexOf(arr[0]), 1, this.buildDataObject(data));
      console.log(this.userData)
    } else if(Array.isArray(data)) {
      data.forEach(value => {
        this.userData.push(this.buildDataObject(value));
      });
    } else {
      this.userData.push(this.buildDataObject(data));
    }
  }

  private buildDataObject(value) {
     return {
      id: value._id,
      details: {
        userName: value._source.userName,
        userSurname: value._source.userSurname,
        userEmail: value._source.userEmail,
        phone: value._source.phone,
        dateOfBirth: value._source.dateOfBirth,
        lastChanges: value._source.lastChanges
      }
    };
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
