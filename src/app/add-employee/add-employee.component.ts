import { Component, OnInit } from '@angular/core';
import { Employee } from '../employees/employee';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  submitForm() {
    console.log("testing submit button")
  }
}
