import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';
import { AngularFireAnalytics } from '@angular/fire/analytics';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  userData: any;

  constructor(

    public firebaseAuth: AngularFireAuth,
    private router: Router,
    private http: HttpClient,
    private analytics: AngularFireAnalytics,
  ) {

    this.firebaseAuth.authState.subscribe(user => {
      if (user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
        this.analytics.setUserId(user.uid);
        JSON.parse(localStorage.getItem('user'));
      } else {
        localStorage.setItem('user', null);
        JSON.parse(localStorage.getItem('user'));
      }
    });


  }

  signInWithGoogle(): void {
    this.analytics.logEvent('signInWithGoogle');
    localStorage.setItem('authenticating', JSON.stringify(true));
    const provider = new firebase.auth.GoogleAuthProvider();
    provider.setCustomParameters({
      hd: 'ingagepartners.com',
      access_type: 'online',
      prompt: 'select_account',
    });
    this.firebaseAuth.auth.signInWithRedirect(provider)
      .catch(reason => {
        localStorage.setItem('authenticating', null);
        console.log('signInWithRedirect error', reason);
      });
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
