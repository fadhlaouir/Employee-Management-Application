import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from 'src/app/services/employee.service';
import { Employee } from '../employee/employee';

@Component({
  selector: 'app-display-employee',
  templateUrl: './display-employee.component.html',
  styleUrls: ['./display-employee.component.css']
})
export class DisplayEmployeeComponent implements OnInit {

  employee: Employee;

  id: number;

  constructor(
    private employeeService: EmployeeService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.employee = new Employee();

    this.id = this.route.snapshot.params['id'];

    this.employeeService.getEmployeeById(this.id)
      .subscribe(data => {
        this.employee = data
      }, error => console.log(error))
  }

  // Send you to update-employee component with router
  updateEmployee(id: number) {
    this.router.navigate(['update-employee', id])
  }
  // Delete Employee by id
  deleteEmployee(id: number) {
    this.employeeService.deleteEmployee(id).subscribe(x =>
      this.router.navigate(['/employees'])
    )
  }

}
