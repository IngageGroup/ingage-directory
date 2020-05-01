import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Employee } from '../employees/employee';
import { DataService } from '../employees/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  encapsulation: ViewEncapsulation.Emulated,
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  employeeId = '';
  employee: Employee;
  mode: string = "Add";
  constructor(
    private route: ActivatedRoute,
    private dataService: DataService
  ) { }

  ngOnInit() {
    const empId = this.route.snapshot.params.id;
    if (empId != null) {
      this.mode = "Edit";
    }
    this.employee = this.dataService.getEmployees().filter(f => f.employeeid === +empId)[0];
  }

  submitForm() {
    
    console.log("testing submit button");
  }
}
