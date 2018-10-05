import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MdDialogModule } from '@angular/material';
import { MdCardModule } from '@angular/material';
import { MdButtonModule } from '@angular/material';
import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { DataService } from "./data.service";
import { DialogComponent } from './dialog/dialog.component';
import { MyDialogComponent } from './my-dialog/my-dialog.component';
//import {ViewportRuler} from "@angular/material/typings/core/overlay/position/viewport-ruler";


@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    DialogComponent,
    MyDialogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MdDialogModule,
    MdCardModule,
    MdButtonModule,
    HttpModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
