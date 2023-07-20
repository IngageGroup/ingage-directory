import { Component, OnInit, Input } from "@angular/core";
import { AccountManager } from "src/app/account-managers/accountmanager";
import { DataService } from "src/app/employees/data.service";
import { Employee } from "src/app/employees/employee";

@Component({
  selector: "app-client-header",
  templateUrl: "./client-header.component.html",
  styleUrls: ["./client-header.component.css"],
})
export class ClientHeaderComponent implements OnInit {
  @Input("clientName") clientName = "";

  private client: AccountManager;
  private accountManager: Employee;
  private bdContact: Employee;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.client = this.dataService.getAccountManagerByClient(this.clientName);

    this.accountManager = this.dataService.getEmployeeById(
      this.client.accountManagerEmpId
    );

    this.bdContact = this.dataService.getEmployeeById(
      this.client.businessDevelopmentContactEmpId
    );
  }
}
