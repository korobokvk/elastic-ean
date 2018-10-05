import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { DataService } from "./data.service";
import { DialogComponent } from './dialog/dialog.component';
import { DialogService } from "./dialog.service";

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    DialogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpModule
  ],
  exports: [DialogComponent],
  providers: [DataService, DialogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
