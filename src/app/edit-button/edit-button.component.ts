import { Component, OnInit } from '@angular/core';
// import employee and login data services


@Component({
  selector: 'app-edit-button',
  templateUrl: './edit-button.component.html',
  styleUrls: ['./edit-button.component.css']
})
export class EditButtonComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  

}
//should identify correct part of authorization data
//  const user = JSON.parse(localStorage.getItem('user'));

//should compare this data to name of current bio page
//  const title = this.employee.firstname + ' ' + this.employee.lastname;

//should have a boolean that is activated when both parts match
//should have a show/hide reactive css button for said boolean 