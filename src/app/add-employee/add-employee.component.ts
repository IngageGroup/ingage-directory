import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Employee } from '../employees/employee';
import { DataService } from '../employees/data.service';
import { ActivatedRoute } from '@angular/router';
import { EmployeeDetailComponent } from '../employees/employee-detail/employee-detail.component';
import { DeclareFunctionStmt } from '@angular/compiler';

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

      this.employee = this.dataService.getEmployees().filter(f => f.employeeid === +empId)[0];
    } //1. move below statment into if block. 2. add Else statment to create new employee object
    else {
      this.employee = {
        anniversary: '',
        client: '',
        coach: '',
        admin: '',
        dayssincehire: 0,
        email: '',
        employeeid: 0,  //placeholder--need to figure out someway to assign new number
        firstname: '',
        lastname: '',
        lookupname: '',
        practicearea: ' '
      }
    }
  }

  submitForm() {

    console.log("testing submit button");
  }
}
