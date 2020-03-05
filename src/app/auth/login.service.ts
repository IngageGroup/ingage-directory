import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService, SocialUser } from 'angularx-social-login';
import { GoogleLoginProvider } from 'angularx-social-login';
import { GoogleUser } from './googleUser';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  googleUser = new GoogleUser();
  private user: SocialUser;

  constructor(
    private http: HttpClient,
    private authService: AuthService,
    public router: Router,
  ) {
    // Setting logged in user in localstorage else null
    this.authService.authState.subscribe(user => {
      if (user) {
          this.user = user;
          localStorage.setItem('user', JSON.stringify(this.user));
          JSON.parse(localStorage.getItem('user'));
      } else {
        localStorage.setItem('user', null);
        JSON.parse(localStorage.getItem('user'));
      }
    });
  }

  get isLoggedIn(): boolean {
      const user = JSON.parse(localStorage.getItem('user'));
      return (user !== null) ? true : false;
  }

  // store the URL so we can redirect after logging in
  redirectUrl: string;

  signInWithGoogle(): void {
    // this.authService.signIn(GoogleLoginProvider.PROVIDER_ID)
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then(socialusers => {

      // this.googleUser.email = socialusers.email;
      // this.googleUser.id = socialusers.id;
      // this.googleUser.idToken = socialusers.idToken;
      // this.googleUser.image = socialusers.photoUrl;
      // this.googleUser.name = socialusers.name;
      // this.googleUser.provider = socialusers.provider;
      // this.googleUser.token = socialusers.authToken;

      const redirect = this.redirectUrl ? this.router.parseUrl(this.redirectUrl) : '/';
      this.router.navigateByUrl(redirect);
    });
  }

  async signOut() {
    await this.authService.signOut();
    localStorage.removeItem('user');
    this.router.navigate(['/login']);
  }
}
