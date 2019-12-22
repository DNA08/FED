import { Component, OnInit, Input } from '@angular/core';
import { EmployeeOperationsService } from '../employee-operations.service';
import { Observable , of } from 'rxjs';
import { Employee } from '../employee';
import { ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-delete-employee',
  templateUrl: './delete-employee.component.html',
  styleUrls: ['./delete-employee.component.css']
})
export class DeleteEmployeeComponent implements OnInit {

  constructor(private empService:EmployeeOperationsService,
  private route:ActivatedRoute, private router:Router) { }
  
  ngOnInit() {
    this.delete();
    setTimeout(() => {
      this.router.navigate(['/employees']);
  }, 500); 
  }
  delete(){
    const id = +this.route.snapshot.paramMap.get('id');
    this.empService.deleteEmployee(id).subscribe(
       );
  }
  
}