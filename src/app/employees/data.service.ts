import { Injectable } from '@angular/core';
import { Employee } from 'src/app/employees/employee';
import { ChampionCauses } from 'src/app/employees/championcauses';
import { Client } from 'src/app/employees/client';
import Employees from 'src/assets/data-files/employee.json';
import Causes from 'src/assets/data-files/championcauses.json';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  employees: Employee[];
  causes: ChampionCauses[];
  clients: Client[];

  constructor() {
    this.employees = this.sortEmployeesByName(Employees);
    this.causes = Causes;

    // loop over each employee, add meta data
    let clients: Client[];
    this.employees.forEach((element, index) => {
      // add champ-a-cause info
      element.championurl = this.findChampionUrl(element);

      //sum clients
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

  private findChampionUrl(employee: Employee) {
    const defaultUrl = 'https://photos.smugmug.com/photos/i-6gQtsGT/0/4102babb/Ti/i-6gQtsGT-Ti.png';

    if (employee.champion === 'TBD') {
      return defaultUrl;
    }
    else {
      let cause = this.causes.find(c => c.title === employee.champion);
      if (cause == undefined) {
        return defaultUrl;
      }
      else if (cause.causeimageurl == '') {
        return defaultUrl;
      }
      else {
        return cause.causeimageurl;
      }
    }
  }

  getEmployees() {
    return this.employees;
  }

  getCauses() {
    return this.causes;
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
