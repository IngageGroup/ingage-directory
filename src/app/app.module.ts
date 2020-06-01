import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { EmployeeListComponent } from './employees/employee-list/employee-list.component';
import { EmployeeDetailComponent } from './employees/employee-detail/employee-detail.component';
import { EmployeeHomeComponent } from './employees/employee-home/employee-home.component';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
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
import { NgxSpinnerModule, NgxSpinnerService } from 'ngx-spinner';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAnalyticsModule, ScreenTrackingService } from '@angular/fire/analytics';
import { environment } from 'src/environments/environment';
import { AngularFireAuthModule } from '@angular/fire/auth';
<<<<<<< HEAD
import {
  AngularFireAuthGuard,
  AngularFireAuthGuardModule,
  redirectUnauthorizedTo,
  redirectLoggedInTo
} from '@angular/fire/auth-guard';
import { ChampionACauseComponent } from './champion-a-cause/champion-a-cause.component';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);
const redirectLoggedInToItems = () => redirectLoggedInTo(['/']);
=======
import { AngularFireAuthGuardModule } from '@angular/fire/auth-guard';
import { AppRoutingModule } from './app-routing.module';
>>>>>>> aaaf91d9d3463124a96dcf87457518cd0dd3072d

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAnalyticsModule,
    AngularFireAuthModule,
    AngularFireAuthGuardModule,
    FormsModule,
    BrowserAnimationsModule,
    MatIconModule,
    FilterPipeModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxSpinnerModule,
<<<<<<< HEAD
    RouterModule.forRoot([
      {
        path: '',
        component: EmployeeHomeComponent,
        canActivate: [AngularFireAuthGuard],
        data: { title: 'Recently Joined', authGuardPipe: redirectUnauthorizedToLogin }
      },
      {
        path: 'employees',
        canActivate: [AngularFireAuthGuard],
        children: [
          { path: '', redirectTo: 'all', pathMatch: 'full' },
          { path: 'all', component: EmployeeListComponent },
          {
            path: 'leadership',
            canActivate: [AngularFireAuthGuard],
            component: EmployeeListComponent,
            data: {
              title: 'Leadership Team'
            }
          },
          { path: 'management', component: EmployeeListComponent, data: { title: 'Management Team' } },
          { path: 'hometeam', component: EmployeeListComponent, data: { title: 'Home Team' } },
          { path: 'pa/:area', component: EmployeeListComponent, data: { title: 'Practice Area' } },
          { path: 'client/:client', component: EmployeeListComponent, data: { title: 'Client Team' } },
          { path: 'champion-a-cause', component: ChampionACauseComponent, data: { title: 'Champion a Cause' } },
        ]
      },
      {
        path: 'employee/:id',
        component: EmployeeDetailComponent,
        canActivate: [AngularFireAuthGuard],
        data: { title: 'none', }
      },
      { path: 'login', component: LoginComponent, },
    ])
=======
    AppRoutingModule,
>>>>>>> aaaf91d9d3463124a96dcf87457518cd0dd3072d
  ],
  providers: [
    SideBarService,
    AppTitleService,
    SearchBarService,
    DataService,
    ScreenTrackingService,
    NgxSpinnerService,
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
    ChampionACauseComponent,
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
