import { Component, OnInit, Input } from '@angular/core';
import { Employee } from '../employee';
import {ActivatedRoute } from '@angular/router';
import { EmployeeOperationsService} from '../employee-operations.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {

 @Input() employee: Employee;
 
  constructor(private route: ActivatedRoute,
    private empService: EmployeeOperationsService,
    private location: Location) { }

  ngOnInit(): void {
    this.getEmployee();
  }

  getEmployee(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.empService.getEmployeeById(id)
      .subscribe(employee => this.employee = employee);
  }
  
  save(): void {
    this.empService.updateEmployee(this.employee)
      .subscribe(() => this.location.back() );
    
  }

}