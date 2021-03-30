import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/services/employee.service';
import { Employee } from '../employee/employee';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees: Employee[] = [];

  constructor(
    private employeeService: EmployeeService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.getEmployees();
  }

  // Get All Employees
  private getEmployees() {
    this.employeeService.getEmployeesList().subscribe(data => {
      this.employees = data
    })
  }

  // Send you to update-employee component with router
  updateEmployee(id: number) {
    this.router.navigate(['update-employee', id])
  }

  // Delete Employee by id
  deleteEmployee(id: number) {
    this.employeeService.deleteEmployee(id).subscribe(data => {
      console.log(data)
      this.getEmployees;
      // to refresh the page
      window.location.reload();
    })
  }
}
