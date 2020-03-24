import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  userData: any;
  public isLoading = false;

  constructor(

    public firebaseAuth: AngularFireAuth,
    private router: Router,
    private http: HttpClient,
  ) {

    this.firebaseAuth.authState.subscribe(user => {
      console.log('authState.subscribe');
      if (user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user'));
      } else {
        localStorage.setItem('user', null);
        JSON.parse(localStorage.getItem('user'));
      }
    });

    this.firebaseAuth.auth.getRedirectResult().then(result => {
      console.log('getRedirectResult');
      localStorage.setItem('authenticating', null);
      this.router.navigateByUrl('/');
    });
  }

  signInWithGoogle(): void {
    this.isLoading = true;
    localStorage.setItem('authenticating', JSON.stringify(true));
    const provider = new firebase.auth.GoogleAuthProvider();
    provider.setCustomParameters({
      hd: 'ingagepartners.com',
      access_type: 'online',
      prompt: 'select_account',
    });
    this.firebaseAuth.auth.signInWithRedirect(provider);
  }

  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user'));
    return (user !== null && user.emailVerified !== false) ? true : false;
  }

  async signOut() {
    await this.firebaseAuth.auth.signOut()
      .then((res) => {
        localStorage.removeItem('user');
        this.router.navigate(['/login']);
      });
  }
}
