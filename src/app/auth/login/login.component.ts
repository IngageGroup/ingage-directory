import { Component, OnInit, AfterContentInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    public router: Router,
    public loginService: LoginService) {
  }

  ngOnInit() {
    if (this.loginService.isLoggedIn) {
      this.router.navigate(['/']);
    }
  }

  login() {
    this.loginService.signInWithGoogle();
  }

  logout() {
    this.loginService.signOut();
  }
}
