import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../components/employee/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseURL = "http://localhost:8080/api/v1/employees";

  constructor(private httpClient: HttpClient) { }

  // Get all Employees
  getEmployeesList(): Observable<Employee[]> {
    return this.httpClient.get<Employee[]>(`${this.baseURL}`)
  }

  // Create new Employee
  createEmployee(employee: Employee): Observable<Object> {
    return this.httpClient.post(`${this.baseURL}`, employee)
  }

  // Get Employe By ID
  getEmployeeById(id: number): Observable<Employee> {
    return this.httpClient.get<Employee>(`${this.baseURL}/${id}`)
  }

  // Update Employee By ID
  updateEmployee(id: number, employee: Employee): Observable<Object> {
    return this.httpClient.put(`${this.baseURL}/${id}`, employee)
  }

  // Delete Employee By ID
  deleteEmployee(id: number): Observable<Object> {
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}
