import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { DataService } from "./data.service";
import { DialogComponent } from './dialog/dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    DialogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    HttpModule
  ],
  exports: [DialogComponent],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
