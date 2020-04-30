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
  data2;
  openform = true;

  constructor() { }

  ngOnInit() {


    this.data2 = new FormGroup({
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