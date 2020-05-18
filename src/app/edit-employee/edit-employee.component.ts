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
      firstname: new FormControl(this.employee.firstname),
      lastname: new FormControl(this.employee.lastname),

    });
  }

  acceptChanges() {
    //this will iterate through the fields and update only the fields that changed
    for (const field in this.employee) {
      if (this.profileForm.controls[field] !== undefined &&
        this.profileForm.controls[field].pristine === false) {
      this.employee[field] = this.profileForm.value[field];
      console.log('value changed for the ' + field);
      }
    } 

  }

}
