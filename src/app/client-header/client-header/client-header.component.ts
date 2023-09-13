import { Component, OnInit, Input } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { AccountManager } from "src/app/account-managers/accountmanager";
import { DataService } from "src/app/employees/data.service";
import { Employee } from "src/app/employees/employee";

@Component({
  selector: "app-client-header",
  templateUrl: "./client-header.component.html",
  styleUrls: ["./client-header.component.css"],
})
export class ClientHeaderComponent implements OnInit {
  private client: AccountManager;
  public accountManager: Employee;
  public bdContact: Employee;
  private clientName: string;

  constructor(public route: ActivatedRoute, private dataService: DataService) {
    this.route.url.subscribe((parms) => {
      const path = parms[0].path;
      if (path === "client") {
        this.clientName = this.route.snapshot.params.client;
      }
      this.client = this.dataService.getAccountManagerByClient(this.clientName);

      if (this.client.accountManagerEmpId != 0) {
        this.accountManager = this.dataService.getEmployeeById(
          this.client.accountManagerEmpId
        );
      } else {
        this.accountManager = null;
      }

      if (this.client.businessDevelopmentContactEmpId != 0) {
        this.bdContact = this.dataService.getEmployeeById(
          this.client.businessDevelopmentContactEmpId
        );
      } else {
        this.bdContact = null;
      }
    });
  }

  ngOnInit() {}
}
