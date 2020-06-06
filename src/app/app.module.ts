import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule} from "@angular/http";
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TasksComponent } from './tasks/tasks.component';
import { HttpErrorHandler } from './http-error-handler-service';
import { MessageService} from './message.service';

@NgModule({
  declarations: [
    AppComponent,
TasksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  HttpModule,
    FormsModule
  ],
  providers: [MessageService,HttpErrorHandler],
  bootstrap: [AppComponent]
})
export class AppModule { }
