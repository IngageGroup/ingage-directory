import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AngularFireAuthGuard } from '@angular/fire/auth-guard';
import { EmployeeDetailComponent } from './employees/employee-detail/employee-detail.component';
import { EmployeeHomeComponent } from './employees/employee-home/employee-home.component';
import { EmployeeListComponent } from './employees/employee-list/employee-list.component';
import { LoginComponent } from './auth/login/login.component';
import { ChampionACauseComponent } from './champion-a-cause/champion-a-cause.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent, },
  {
    path: 'employees',
    canActivate: [AngularFireAuthGuard],
    children: [
      { path: 'all', component: EmployeeListComponent },
      { path: 'client/:client', component: EmployeeListComponent, data: { title: 'Client Team' } },
      { path: 'champion-a-cause', component: ChampionACauseComponent, data: { title: 'Champion a Cause' } },
      { path: 'hometeam', component: EmployeeListComponent, data: { title: 'Home Team' } },
      { path: 'leadership', component: EmployeeListComponent, data: { title: 'Leadership Team' } },
      { path: 'management', component: EmployeeListComponent, data: { title: 'Management Team' } },
      { path: 'pa/:area', component: EmployeeListComponent, data: { title: 'Practice Area' } },
      { path: '', redirectTo: 'all', pathMatch: 'full' },
    ]
  },
  { path: 'employee/:id', component: EmployeeDetailComponent, canActivate: [AngularFireAuthGuard], data: { title: 'none', } },
  { path: '', component: EmployeeHomeComponent, canActivate: [AngularFireAuthGuard], data: { title: 'Recently Joined' } },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
