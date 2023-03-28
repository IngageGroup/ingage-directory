import { Component, ViewEncapsulation } from '@angular/core';
import { LoginService } from 'src/app/auth/login.service';
import { ActivatedRoute } from '@angular/router';
import { Employee } from 'src/app/employees/employee';
import { AppTitleService } from 'src/app/app.service';

import { Title } from '@angular/platform-browser';
import { DataService } from 'src/app/employees/data.service';
import { PracticeArea } from '../practicearea';
import { Observable } from 'rxjs';
import { FocusArea } from '../focusarea';
import { FocusAreaMemberViewModel } from './FocusAreaMemberViewModel';
import { FocusAreaViewModel } from './FocusAreaViewModel';
import { PracticeAreaViewModel } from './practice-area.component.vm';

@Component({
  encapsulation: ViewEncapsulation.Emulated,
  selector: 'app-practice-area',
  templateUrl: './practice-area.component.html',
  styleUrls: ['./practice-area.component.css']
})
export class PracticeAreaComponent {

  practiceArea: PracticeArea;
  practiceManager: Employee;
  routeParm$: Observable<string>;

  vm: PracticeAreaViewModel;

  constructor(
    private route: ActivatedRoute,
    private appTitleService: AppTitleService,
    private titleService: Title,
    public loginService: LoginService,
    private dataService: DataService

  ) {

    this.route.url.subscribe(params => {
      const practiceKey = params[1].path;
      this.practiceArea = this.dataService.getPracticeAreaByName(practiceKey);
      let mgr = this.dataService.getEmployees().filter(f => f.email === this.practiceArea.practicemanageremail)[0];

      let focusAreas = this.dataService.getFocusAreaByPractice(this.practiceArea.practicearea);
      var focusAreasVm: FocusAreaViewModel[] = [];

      focusAreas.forEach((element: FocusArea, index: any) => {
        const membersVm2 = this.dataService
          .getEmployees()
          .filter(f => f.focusarea === element.focusarea).map((emp) => {
            return {
              memberName: emp.firstname + " " + emp.lastname,
              avatarUrl: emp.tileimageurl,
              isLead: (emp.email === element.practiceleademail),
              employeeId: emp.employeeid
            }
          }) as FocusAreaMemberViewModel[];

        const focusArea: FocusAreaViewModel = {
          focusAreaName: element.focusarea,
          lead: membersVm2.filter(f => f.isLead)[0],
          members: membersVm2.filter(f => !f.isLead)
        };
        focusAreasVm.push(focusArea);
      });

      this.vm = {
        practiceAreaName: this.practiceArea.practiceareaname,
        practiceManagerEmail: mgr.email,
        practiceManagerName: mgr.firstname + " " + mgr.lastname,
        focusAreas: focusAreasVm,
      } as PracticeAreaViewModel;

      this.titleService.setTitle(this.practiceArea.practiceareaname);
      setTimeout(_ => this.appTitleService.setAppTitle(this.practiceArea.practiceareaname));
    });
  }

  private sortObjectByProperty(list, property) {
    const sorted = list.sort((a, b) => {
      const nameA = a[property].toUpperCase();
      const nameB = b[property].toUpperCase();
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    });
    return sorted;
  }
}
