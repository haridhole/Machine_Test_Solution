import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from './models/employee.model';
import { map, retry } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';

import demodata from '../assets/employees.json';
import { Router } from '@angular/router';
import { isNumber } from 'util';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  employees: Employee[];
  filterEmloyees: Employee[];

  constructor(private router: Router) {
    id: { }
    this.getAll();
    this.filterEmloyees = this.employees;
  }

  getAll() {
    this.employees = demodata;
    for (let i = 0; i < this.employees.length; i++) { if (isNaN((this.employees[i].phone) / 1) == true) this.employees[i].phone = NaN; }
    return this.employees;
  }

  filter(query: string) {
    var x = this.employees.filter(p =>
      (p.name.toLocaleLowerCase().includes(query.toLocaleLowerCase())));
    this.employees = (query) ? x : this.filterEmloyees;
  }

  create(emp) {
    emp.id = this.employees.length + 1;
    this.employees.push(emp);
    this.router.navigate(['/employees']);
  }

  get(empId) {
    return this.employees[empId - 1];
  }

  update(id, emp) {
    this.employees[id - 1] = emp;
    this.router.navigate(['/employees']);
  }
}
