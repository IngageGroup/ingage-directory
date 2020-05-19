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
      title: new FormControl(this.employee.title),
      practicearea: new FormControl(this.employee.practicearea),
      client: new FormControl(this.employee.client),
      coach: new FormControl(this.employee.coach),
      mobilephone: new FormControl(this.employee.mobilephone),
      email: new FormControl(this.employee.email),
      champion: new FormControl(this.employee.champion),
      birthday: new FormControl(this.employee.birthday),
      anniversary: new FormControl(this.employee.anniversary),
      hbdiblue: new FormControl(this.employee.hbdiblue),
      hbdigreen: new FormControl(this.employee.hbdigreen),
      hbdired: new FormControl(this.employee.hbdired),
      hbdiyellow: new FormControl(this.employee.hbdiyellow),
      employeeid: new FormControl(this.employee.employeeid)
    });
  }

  acceptChanges() {
    //this will iterate through the fields and update only the fields that changed
    
      for (const field in this.profileForm.value) {
        if (this.profileForm.controls[field].pristine === false) {
        this.employee[field] = this.profileForm.value[field];
        console.log('value changed for the ' + field);
        }


    } 

  }

}
