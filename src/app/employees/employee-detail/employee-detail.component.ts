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
  public managerLabel: string;
  public showChampion = false;
  public showHBDI = false;
  public hbdiPreference: string;

  constructor(
    private route: ActivatedRoute,
    private appTitleService: AppTitleService,
    private titleService: Title,
    private dataService: DataService,
  ) { }

  ngOnInit() {
    const empId = this.route.snapshot.params.id;
    this.employee = this.dataService.getEmployees().filter(f => f.employeeid === +empId)[0];
    this.managerLabel = (this.employee.title === 'Apprentice') ? 'Mentor' : 'Coach';
    this.showChampion = (this.employee.title !== 'Apprentice');
    this.showHBDI = (this.employee.hbdipreference != null && this.employee.hbdipreference.toLowerCase() != 'n/a');
    this.hbdiPreference = this.getPreferenceCss(this.employee.hbdipreference);
  }

  ngAfterViewInit() {
    const title = this.employee.firstname + ' ' + this.employee.lastname;
    this.titleService.setTitle(title);
    setTimeout(_ => this.appTitleService.setAppTitle(title));
  }

  private getPreferenceCss(preference): string {
    let pref = '';
    switch (this.employee.hbdipreference.toLowerCase()) {
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
}
