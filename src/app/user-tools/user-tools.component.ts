import { Component, ViewEncapsulation, OnInit, ɵCompiler_compileModuleSync__POST_R3__ } from '@angular/core';
import { LoginService } from '../auth/login.service';
// import { AuthService, SocialUser } from 'angularx-social-login';
import { Router } from '@angular/router';

@Component({
    encapsulation: ViewEncapsulation.Emulated,
    selector: 'app-user-tools',
    templateUrl: './user-tools.component.html',
    styleUrls: ['./user-tools.component.css']
})
export class UserToolsComponent {
    showTools = false;

    constructor(
        // private authService: AuthService,
        private router: Router,
        public loginService: LoginService,
    ) { }

    toggleTools() {
        this.showTools = !this.showTools;
    }

    logout() {
        this.loginService.signOut();
    }
}
