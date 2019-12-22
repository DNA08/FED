import { Component, OnInit, Input } from '@angular/core';
import { Employee } from '../employee';
import {ActivatedRoute } from '@angular/router';
import { EmployeeOperationsService} from '../employee-operations.service';
import { Location } from '@angular/common';


@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  @Input() employee: Employee; 

  constructor(private route: ActivatedRoute,
    private employeeService: EmployeeOperationsService,
    private location: Location) {
   }

  ngOnInit() {
    this.getEmployee();
  }

  getEmployee(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.employeeService.getEmployeeById(id)
      .subscribe(employee => this.employee = employee);
  }

  goBack(): void {
    this.location.back();
  }


}