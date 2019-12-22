import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Employee} from './Employee';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeOperationsService {
  private employeeURL='api/employees';
  httpOptions= {
    headers: new HttpHeaders({ 'Content Type': 'application/json'})
  };
  constructor(private http:HttpClient) { 
  }
  getEmployees() : Observable<Employee[]>{
    return this.http.get<Employee[]>(this.employeeURL);
  }
  getEmployeeById(id:number): Observable<Employee>{
    const URL=`${this.employeeURL}/${id}`;
    return this.http.get<Employee>(URL);
  }
  addEmployee(employee: Employee): Observable<Employee> {
    return this.http.post<Employee>(this.employeeURL,employee,this.httpOptions)
  }

  deleteEmployee(id:number):Observable<Employee> {
    const URL= `${this.employeeURL}/${id}`; 
    return this.http.delete<Employee>(URL);
  }

  updateEmployee (employee: Employee): Observable<any> {
    return this.http.put(this.employeeURL, employee, this.httpOptions)
  }
  
}