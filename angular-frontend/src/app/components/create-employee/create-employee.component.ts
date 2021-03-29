import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/services/employee.service';
import { Employee } from '../employee/employee';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  employee: Employee = new Employee();
  constructor(
    private employeeService: EmployeeService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  // Create new Employee
  saveEmployee() {
    this.employeeService.createEmployee(this.employee).subscribe(data => {
      console.log(data)
    },
      error => console.log(error)
    )
  }
  // After creating new Employee return to home component
  goToEmployeeList() {
    this.router.navigate(['/employees'])
  }
  // When the user click on the Add Employee Button
  onSubmit() {
    this.saveEmployee()
    this.goToEmployeeList()
  }

}
