import { Pipe, PipeTransform } from '@angular/core';
import { Employee } from './employee';

@Pipe({
  name: 'sorting'
})
export class SortingPipe implements PipeTransform {

  transform( employee: Employee[], sequence: string): Employee[] {
    if(!employee) return [];
    if(!sequence) return employee ;
    var search= sequence.toLowerCase();
    return employee.filter((singleEmployee=>{
                  return singleEmployee.name.toLowerCase().startsWith(search);
                            })
                          )    
  }

}