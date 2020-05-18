import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Employee } from '../employees/employee';
import { DataService } from '../employees/data.service';
import { ActivatedRoute } from '@angular/router'; 

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {
  employee: Employee;
  employeeId = '';
  firstName = '';
  
  profileForm: FormGroup;
  /*
  ({
      firstname: new FormControl('test name '),
      });*/
  //console.log(employee.firstname);

  
  constructor(
    private route: ActivatedRoute,
    private dataService: DataService
  ) { }


  ngOnInit() {
    const empId = this.route.snapshot.params.id;
    this.employee = this.dataService.getEmployees().filter(f => f.employeeid === +empId)[0];    
  }

  ngAfterContentInit() {
    this.profileForm = new FormGroup({
      firstname: new FormControl(this.employee.firstname)}
    );
  }

  acceptChanges() {
    console.log(this.profileForm.value);
    console.log("testing submit button");
    console.log(this.employee.firstname);
    this.employee.firstname = this.profileForm.value.firstname;

  }

}
