import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeOperationsService } from '../employee-operations.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  title="Employee List";
   e1:Employee[]=[];
     constructor(private empService:EmployeeOperationsService) { }

  ngOnInit() {
    this.getEmployees();
  }
  getEmployees():void{
 this.empService.getEmployees()
        .subscribe(e1=> 
        {this.e1= e1});
    console.log(this.e1);
  }

 

}