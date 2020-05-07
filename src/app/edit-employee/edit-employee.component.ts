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
  
  profileForm = new FormGroup({
      firstname: new FormControl('testing name'),
      });
  //console.log(employee.firstname);

  
  constructor(
    private route: ActivatedRoute,
    private dataService: DataService
  ) { }


  ngOnInit() {
    const empId = this.route.snapshot.params.id;

    this.employee = this.dataService.getEmployees().filter(f => f.employeeid === +empId)[0];

  
    //firstname = new FormControl(this.employee.firstname);
    console.log(this.employee);
    
  }

  submitForm() {

    //this.employee.firstname = firstname;    
    this.profileForm.setValue({
      firstname: this.employee.firstname
    });
    console.log("testing submit button");
    console.log(this.employee.firstname); 
  }

}
