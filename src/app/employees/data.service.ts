import { Injectable } from '@angular/core';
import { Employee } from 'src/app/employees/employee';
import { Client } from 'src/app/employees/client';
// import Employees from 'src/assets/employee.json';
import Employees from 'src/assets/employee.test.json';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  employees: Employee[];
  clients: Client[];

  constructor() {
    this.employees = this.sortEmployeesByName(Employees);

    // loop over each employee, summarize clients
    let clients: Client[];
    this.employees.forEach((element, index) => {
      const thisClient = element.client;
      if (thisClient === 'n/a') {
        return;
      }
      const employeeClient = clients ? clients.find(e => e.name === thisClient) : { name: thisClient, consultantCount: 0 };
      if (employeeClient) {
        employeeClient.consultantCount = employeeClient.consultantCount + 1;
        if (!clients) {
          clients = [employeeClient];
        }
      } else {
        const accumulator: Client = { name: thisClient, consultantCount: 1 };
        clients.push(accumulator);
      }
    });
    this.clients = this.sortObjectByProperty(clients, 'name');
  }

  getEmployees() {
    return this.employees;
  }

  getClients() {
    return this.clients;
  }

  // list - array to be sorted
  // property - property to be sorted by
  private sortObjectByProperty(list, property) {
    const sorted = list.sort((a, b) => {
      const nameA = a[property].toUpperCase();
      const nameB = b[property].toUpperCase();
      // const nameA = a.firstname.toUpperCase() + a.lastname.toUpperCase();
      // const nameB = b.firstname.toUpperCase() + b.lastname.toUpperCase();
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

  private sortEmployeesByName(list) {
    const sorted = list.sort((a, b) => {
      const nameA = a.firstname.toUpperCase() + a.lastname.toUpperCase();
      const nameB = b.firstname.toUpperCase() + b.lastname.toUpperCase();
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
