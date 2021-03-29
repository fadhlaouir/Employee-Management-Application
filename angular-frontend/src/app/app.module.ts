import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { EmployeeService } from './services/employee.service';
import { CreateEmployeeComponent } from './components/create-employee/create-employee.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    CreateEmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    EmployeeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
