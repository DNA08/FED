import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EmployeeListComponent} from './employee-list/employee-list.component';
import { AddEmployeeComponent} from './add-employee/add-employee.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { DeleteEmployeeComponent} from './delete-employee/delete-employee.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
const routes: Routes = [
  {path: 'employees' , component: EmployeeListComponent },
  {path: 'addEmployee', component: AddEmployeeComponent},
  {path: 'editEmployee/:id', component: EditEmployeeComponent},
  {path: 'deleteEmployee/:id', component:DeleteEmployeeComponent},
  {path: 'details/:id',component: EmployeeDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule{}