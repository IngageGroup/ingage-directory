import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { AppTitleService } from 'src/app/app.service';
import { Title } from '@angular/platform-browser';
import { DataService } from '../data.service';
import { Employee } from '../employee';


@Component({
  encapsulation: ViewEncapsulation.Emulated,
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit, AfterViewInit {
  employeeId = '';
  employee: Employee;
  loggedInEmployee: Employee;
  public managerLabel: string;
  public showChampion = false;
  public showHBDI = false;
  public hbdiPreference: string;
  thisIsMe: boolean = false;
  isAdmin: boolean = false;
  empId: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private appTitleService: AppTitleService,
    private titleService: Title,
    private dataService: DataService,
  ) { }

  ngOnInit() {
    this.empId = this.route.snapshot.params.id;
    this.employee = this.dataService.getEmployees().filter(f => f.employeeid === +this.empId)[0];
    this.managerLabel = (this.employee.title === 'Apprentice') ? 'Mentor' : 'Coach';
    this.showChampion = (this.employee.title !== 'Apprentice');
    this.showHBDI = (this.employee.hbdipreference != null);
    this.hbdiPreference = this.getPreferenceCss(this.employee.hbdipreference);
    let user = JSON.parse(localStorage.getItem('user'));
    
    let loggedInUserEmail = user['email'];
    this.loggedInEmployee = this.dataService.getEmployees().filter(f => f.email === loggedInUserEmail)[0];
    this.isAdmin = this.loggedInEmployee.admin === "true";
    this.thisIsMe = (loggedInUserEmail === this.employee.email) || this.isAdmin;
    console.log(this.thisIsMe);
  }

  ngAfterViewInit() {
    const title = this.employee.firstname + ' ' + this.employee.lastname;
    this.titleService.setTitle(title);
    setTimeout(_ => this.appTitleService.setAppTitle(title));
  }

  private getPreferenceCss(preference): string {
    let pref = '';
    switch (this.employee.hbdipreference) {
      case 'blue': {
        pref = 'hbdi-blue';
        break;
      }
      case 'green': {
        pref = 'hbdi-green';
        break;
      }
      case 'red': {
        pref = 'hbdi-red';
        break;
      }
      case 'yellow': {
        pref = 'hbdi-yellow';
        break;
      }
      default: {
        break;
      }
    }
    return pref;
  }
//  this.router.navigate([`/editemployee/${this.empId}`]);
  openForm() {
    this.router.navigate([`/editemployee/${this.empId}`]);
  }
}
