import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { EmployeeListComponent } from './employees/employee-list/employee-list.component';
import { EmployeeDetailComponent } from './employees/employee-detail/employee-detail.component';
import { EmployeeHomeComponent } from './employees/employee-home/employee-home.component';
import { MatIconModule } from '@angular/material/icon';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
// import { BackendService } from './backend.service';
import { HttpClientModule } from '@angular/common/http';
import { SocialLoginModule } from 'angularx-social-login';
import { AuthServiceConfig, GoogleLoginProvider } from 'angularx-social-login';
import { AuthGuard } from './auth/auth.guard';
import { LoginComponent } from './auth/login/login.component';
import { UserToolsComponent } from './user-tools/user-tools.component';
import { CustomDatePipe } from './helpers/custom.datepipe';
import { MonthDayOnlyPipe } from './helpers/month-day-only.datepipe';
import { SearchEmployeesPipe } from './helpers/employee-filter.pipe';
import { FilterPipeModule } from 'ngx-filter-pipe';
import { SideBarComponent } from './sidebar/side-bar.component';
import { SideBarService } from './sidebar/side-bar.service';
import { MobileMenuComponent } from './mobile-menu/mobile-menu.component';
import { AppTitleService } from './app.service';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { SearchBarService } from './search-bar/search-bar.service';
import { DataService } from './employees/data.service';

const config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider('176769310679-t71a2k2il0ji1lm35srbrdieu6fnuoh5.apps.googleusercontent.com')
  }
]);

export function provideConfig() {
  return config;
}

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatIconModule,
    FilterPipeModule,
    ReactiveFormsModule,
    HttpClientModule,
    // InMemoryWebApiModule.forRoot(BackendService),
    SocialLoginModule,
    RouterModule.forRoot([
      { path: '', component: EmployeeHomeComponent, canActivate: [AuthGuard], data: { title: 'Recently Joined' } },
      {
        path: 'employees',
        canActivate: [AuthGuard],
        children: [
          { path: '', redirectTo: 'all', pathMatch: 'full' },
          { path: 'all', component: EmployeeListComponent },
          {
            path: 'leadership',
            component: EmployeeListComponent,
            data: {
              title: 'Leadership Team'
            }
          },
          { path: 'management', component: EmployeeListComponent, data: { title: 'Management Team' } },
          { path: 'hometeam', component: EmployeeListComponent, data: { title: 'Home Team' } },
          { path: 'pa/:area', component: EmployeeListComponent, data: { title: 'Practice Area' } },
          { path: 'client/:client', component: EmployeeListComponent, data: { title: 'Client Team' } },
        ]
      },
      { path: 'employee/:id', component: EmployeeDetailComponent, canActivate: [AuthGuard], data: { title: 'none' } },
      { path: 'login', component: LoginComponent },
    ])
  ],
  providers: [
    {
      provide: AuthServiceConfig,
      useFactory: provideConfig
    },
    SideBarService,
    AppTitleService,
    SearchBarService,
    DataService,
  ],
  declarations: [
    AppComponent,
    CustomDatePipe,
    MonthDayOnlyPipe,
    SearchEmployeesPipe,
    EmployeeListComponent,
    EmployeeDetailComponent,
    EmployeeHomeComponent,
    LoginComponent,
    SideBarComponent,
    UserToolsComponent,
    MobileMenuComponent,
    SearchBarComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
