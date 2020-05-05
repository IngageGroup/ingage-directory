import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms'; 

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {

  firstname = new FormControl('');
  
  constructor() { }

  ngOnInit() {
  }

}
