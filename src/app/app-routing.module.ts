import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AngularFireAuthGuard, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import { EmployeeDetailComponent } from './employees/employee-detail/employee-detail.component';
import { EmployeeHomeComponent } from './employees/employee-home/employee-home.component';
import { EmployeeListComponent } from './employees/employee-list/employee-list.component';
import { LoginComponent } from './auth/login/login.component';
import { ChampionACauseComponent } from './champion-a-cause/champion-a-cause.component';
import { PracticeAreaComponent } from './practice-areas/practice-area/practice-area.component';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);

const routes: Routes = [
  { path: 'login', component: LoginComponent, },
  {
    path: 'employees',
    canActivate: [AngularFireAuthGuard],
    children: [
      { path: 'all', component: EmployeeListComponent },
      { path: 'client/:client', component: EmployeeListComponent, data: { title: 'Client Team', authGuardPipe: redirectUnauthorizedToLogin } },
      { path: 'champion-a-cause', component: ChampionACauseComponent, data: { title: 'Champion a Cause', authGuardPipe: redirectUnauthorizedToLogin } },
      { path: 'hometeam', component: EmployeeListComponent, data: { title: 'Home Team', authGuardPipe: redirectUnauthorizedToLogin } },
      { path: 'leadership', component: EmployeeListComponent, data: { title: 'Leadership Team', authGuardPipe: redirectUnauthorizedToLogin } },
      { path: 'management', component: EmployeeListComponent, data: { title: 'Management Team', authGuardPipe: redirectUnauthorizedToLogin } },
      { path: 'pa/:area', component: EmployeeListComponent, data: { title: 'Practice Area', authGuardPipe: redirectUnauthorizedToLogin } },
      { path: '', redirectTo: 'all', pathMatch: 'full' },
    ]
  },
  { path: 'practice-area/:practice', component: PracticeAreaComponent, canActivate: [AngularFireAuthGuard], data: { title: 'Practice Area', authGuardPipe: redirectUnauthorizedToLogin } },
  { path: 'employee/:id', component: EmployeeDetailComponent, canActivate: [AngularFireAuthGuard], data: { title: 'none', authGuardPipe: redirectUnauthorizedToLogin } },
  { path: '', component: EmployeeHomeComponent, canActivate: [AngularFireAuthGuard], data: { title: 'Recently Joined', authGuardPipe: redirectUnauthorizedToLogin } },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
