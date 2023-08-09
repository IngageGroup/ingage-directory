import {
  Component,
  ViewEncapsulation,
  OnInit,
  AfterContentChecked,
} from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Employee } from "../employee";
import { SideBarService } from "../../sidebar/side-bar.service";
import { AppTitleService } from "src/app/app.service";
import { SearchBarService } from "src/app/search-bar/search-bar.service";
import { DataService } from "../data.service";
import { zip } from "rxjs";

@Component({
  encapsulation: ViewEncapsulation.Emulated,
  selector: "app-employee-list",
  templateUrl: "./employee-list.component.html",
  styleUrls: ["./employee-list.component.css"],
})
export class EmployeeListComponent implements OnInit, AfterContentChecked {
  private category: string;
  private employees: Employee[];
  private clientName: string;
  private practiceArea: string;
  public filtered: Employee[];
  public headerTitle: string;
  searchText = "";
  master = "Master123";
  private showClientHeader: boolean;

  constructor(
    public route: ActivatedRoute,
    private sideBarService: SideBarService,
    private appTitleService: AppTitleService,
    private searchBarService: SearchBarService,
    private dataService: DataService
  ) {
    this.route.url.subscribe((params) => {
      this.category = params[0].path;
      if (this.category === "client") {
        this.clientName = this.route.snapshot.params.client;
        this.showClientHeader = true;
      }
      if (this.category === "pa") {
        this.practiceArea = this.route.snapshot.params.area;
        if (this.practiceArea === "dev") {
          this.practiceArea = "Build: Dev";
        }
        if (this.practiceArea === "qa") {
          this.practiceArea = "Build: QA";
        }
      }
      this.employees = this.dataService.getEmployees();
      this.filterThis();
    });
  }

  ngOnInit() {
    this.searchBarService.searchText.subscribe(
      (message) => (this.searchText = message)
    );
  }

  ngAfterContentChecked() {
    this.appTitleService.appHeaderTitle.subscribe(
      (message) => (this.headerTitle = message)
    );
  }

  private filterThis() {
    switch (this.category) {
      case "all": {
        this.filtered = this.employees;
        this.sideBarService.closeClientMenu();
        break;
      }
      case "leadership": {
        this.filtered = this.employees.filter(
          (x) =>
            x.title === "Director" ||
            x.title === "Vice President" ||
            x.title === "CEO" ||
            x.title === "Strategic Advisor"
        );
        break;
      }
      case "management": {
        this.filtered = this.employees.filter(
          (x) => x.title === "Manager" || x.title === "Managing Consultant"
        );
        break;
      }
      case "hometeam": {
        this.filtered = this.employees.filter(
          (x) =>
            x.practicearea === "Operations" || x.title === "Strategic Advisor"
        );
        break;
      }
      case "pa": {
        this.filtered = this.employees.filter(
          (x) =>
            x.practicearea.toLowerCase() ===
            this.practiceArea.toLocaleLowerCase()
        );
        break;
      }
      case "client": {
        const clientNameParm = this.clientName;

        this.filtered = this.employees.filter((emp) =>
          emp.client.includes(clientNameParm)
        );
        this.sideBarService.openClientMenu(); // this may need to be another method to be "open"
        break;
      }
      default: {
        this.filtered = this.employees;
        break;
      }
    }
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
