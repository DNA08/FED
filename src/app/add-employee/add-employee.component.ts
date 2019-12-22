import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { RouterLink, Router} from '@angular/router';
import { EmployeeOperationsService} from '../employee-operations.service';

@Component({
  selector: 'add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  search:string;
  employees:Employee[]=[];
  constructor(private empService:EmployeeOperationsService, private router:Router) { }

  ngOnInit() {}

  onAdd(employee):void{
    this.empService.addEmployee(employee as Employee).subscribe(employee => {
      this.employees.push(employee);
     })
     this.router.navigate(['/employees']);
  }
}