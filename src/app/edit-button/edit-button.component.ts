import { Component, OnInit } from '@angular/core';
//import parts to complete form
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';

// import employee and login data services


@Component({
  selector: 'app-edit-button',
  templateUrl: './edit-button.component.html',
  styleUrls: ['./edit-button.component.css']
})
export class EditButtonComponent implements OnInit {
  firstname;
  lastname;
  practice;
  client;
  mentor;
  mobilenumber;
  email;
  formdata2;
  openform = false;

  constructor() { }

  ngOnInit() {


    this.formdata2 = new FormGroup({
      email: new FormControl("", Validators.compose([
        Validators.required,
        Validators.pattern("[^ @]*@[^ @]*")
      ])),
      firstname: new FormControl("", Validators.compose([
        Validators.required,
        Validators.pattern("[a-z]{1,8}")
      ])),
      lastname: new FormControl("", Validators.compose([
        Validators.required,
        Validators.pattern("[a-z]{1,4}")
      ])),
      practice: new FormControl("", Validators.compose([
        Validators.required,
        Validators.pattern("[a-z]{1,8}")
      ])),
      client: new FormControl("", Validators.compose([
        Validators.required,
        Validators.pattern("[a-z]{1,8}")
      ])),
      mentor: new FormControl("", Validators.compose([
        Validators.required,
        Validators.pattern("[a-z]{1,8}")
      ])),
      mobilenumber: new FormControl("", Validators.compose([
        Validators.required,
        Validators.pattern("[0-9]{10}")
      ])),
    });

  }


  onClickOpenForm() {
    this.openform = true;

  }

  onClickSubmitForm(data2) {
    this.firstname = data2.firstname;
    this.lastname = data2.lastname;
    this.email = data2.email;
    this.practice = data2.practice;
    this.client = data2.client;
    this.mentor = data2.mentor;
    this.mobilenumber = data2.mobilenumber;
  }
}
  
//should identify correct part of authorization data
//  const user = JSON.parse(localStorage.getItem('user'));

//should compare this data to name of current bio page
//  const title = this.employee.firstname + ' ' + this.employee.lastname;

//should have a boolean that is activated when both parts match
//should have a show/hide reactive css button for said boolean 