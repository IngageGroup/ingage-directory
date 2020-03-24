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

  constructor(
    public router: Router,
    public loginService: LoginService,
    private spinner: NgxSpinnerService
  ) {
  }

  public loadingMessage: string;

  ngOnInit() {
    const isAuthenticating = JSON.parse(localStorage.getItem('authenticating'));
    if (isAuthenticating === true) {
      this.loadingMessage = loadingMessages[Math.floor(Math.random() * loadingMessages.length)];
      this.spinner.show();
      console.log('show spinner');
    } else {
      this.spinner.hide();
      if (this.loginService.isLoggedIn) {
        this.router.navigate(['/']);
      }
    }
  }

  login() {
    this.loginService.signInWithGoogle();
  }

  logout() {
    this.loginService.signOut();
  }
}
