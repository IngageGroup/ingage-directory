import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
import { NgxSpinnerService } from 'ngx-spinner';
import loadingMessages from './loading-messages';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loadingMessage: string;

  constructor(
    public router: Router,
    public loginService: LoginService,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit() {
    this.loadingMessage = loadingMessages[Math.floor(Math.random() * loadingMessages.length)];
    const isAuthenticating = JSON.parse(localStorage.getItem('authenticating'));
    if (isAuthenticating === true) {
      this.spinner.show();
    } else {
      this.spinner.hide();
    }
  }

  login() {
    this.loginService.signInWithGoogle();
  }

  logout() {
    this.loginService.signOut();
  }
}
