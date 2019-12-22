import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { EmployeeRoutingModule } from './employee.routing';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppComponent } from './app.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeDBService } from './employee-db.service';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { EmployeeOperationsService } from './employee-operations.service';
import { SortingPipe } from './sorting.pipe';
import { DeleteEmployeeComponent } from './delete-employee/delete-employee.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule, EmployeeRoutingModule,HttpClientModule,
  HttpClientInMemoryWebApiModule.forRoot(
      EmployeeDBService, { dataEncapsulation: false }
    ) ],
  declarations: [ AppComponent, EmployeeListComponent, AddEmployeeComponent, EditEmployeeComponent, EmployeeDetailsComponent, SortingPipe, DeleteEmployeeComponent],
  bootstrap:    [ AppComponent ],
  providers: [EmployeeDBService, EmployeeOperationsService],
  // exports : [EmployeeOperationsService]
})
export class AppModule { }
