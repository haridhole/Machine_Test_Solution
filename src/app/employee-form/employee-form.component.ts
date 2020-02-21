import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/take';
import { Employee } from '../models/employee.model';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent {
  selectedEmployee: Employee;
  id: {};

  constructor(private employeeService: EmployeeService, private route: ActivatedRoute) {

    this.selectedEmployee = { id: null, name: '', phone: null, address: { city: '', address_line1: '', address_line2: '', postal_code: null, } }
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id)
      this.selectedEmployee = this.employeeService.get(this.id);
  }

  save(emp) {
    if (this.id) this.employeeService.update(this.id, this.selectedEmployee);
    else this.employeeService.create(emp);
  }
}
