import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import { Subject } from "rxjs/Subject";
import "rxjs/add/operator/map";

@Injectable()
export class DataService {
  private baseURI: string = 'http://localhost:3000';
  public data$: Subject<any>;

  constructor(private _http: Http) {
    this.data$ = new Subject<any>();
  }

  public getData() {
    return this._http.get(`${this.baseURI}/api/docs`).map((data:Response) => {
      return data.json();
    })
  }

  public getLast(id?) {
    this._http.get(`${this.baseURI}/api/docs/${id}`,).map((data:Response) => {
      return data.json()
    }).subscribe(data => this.data$.next(data))
  }

  public addData(body) {
    return this._http.post(`${this.baseURI}/api/docs`, body)
  }

  public putData(body, id) {
    return this._http.put(`${this.baseURI}/api/docs/${id}`, body)
  }

  public deleteData(id) {
    return this._http.delete(`${this.baseURI}/api/docs/${id}`).map((data:Response) => {
      return data.statusText
    })

  }
}
