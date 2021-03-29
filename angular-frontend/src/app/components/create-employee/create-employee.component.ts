import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee/employee';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  employee: Employee = new Employee();
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit() {
    console.log('added', this.employee)
  }

}
