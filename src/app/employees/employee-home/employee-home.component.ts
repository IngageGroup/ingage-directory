import { Component, ViewEncapsulation, OnInit, HostBinding } from '@angular/core';
import { LoginService } from '../../auth/login.service';
import { DataService } from 'src/app/employees/data.service';

import {
  trigger,
  style,
  animate,
  transition,
} from '@angular/animations';
import { Employee } from '../employee';

@Component({
  encapsulation: ViewEncapsulation.Emulated,
  selector: 'app-employee',
  templateUrl: './employee-home.component.html',
  styleUrls: ['./employee-home.component.css'],
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({ transform: 'translateX(-100%)' }),
        animate('400ms ease-in', style({ transform: 'translateX(0%)' }))
      ]),
      transition(':leave', [
        animate('400ms ease-in', style({ transform: 'translateX(-100%)' }))
      ])
    ]),
    trigger('fadeInOut', [
      transition(':enter', [
        style({ transform: 'translateX(-100%)' }),
        animate('400ms ease-in', style({ transform: 'translateX(0%)' }))
      ]),
      transition(':leave', [
        animate('0ms ease-in', style({ transform: 'translateX(-100%)' }))
      ])
    ]),
  ],
})
export class EmployeeHomeComponent implements OnInit {
  public employees: Employee[];

  constructor(
    public loginService: LoginService,
    private dataService: DataService) {
  }
  message: boolean;
  showMobileMenu = false;
  showTopMenu = false;
  showPracticeMenu = false;
  showClientMenu = false;

  ngOnInit() {
    debugger;
    // let.selectedMembers = this.members.filter(
    //   m => new Date(m.date) >= new Date(startDate) && new Date(m.date) <= new Date(endDate)
    //   );
    var tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() - 180);
    console.log('tomorrow:' + tomorrow);
    this.employees = this.dataService
      .getEmployees()
      .slice()
      .filter(x => new Date(x.anniversary) >= tomorrow)
      .sort((a, b) => {
        const x = new Date(a.anniversary);
        const y = new Date(b.anniversary);
        return y.getTime() - x.getTime();
      });
  }
}
