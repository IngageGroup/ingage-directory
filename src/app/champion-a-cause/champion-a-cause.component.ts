import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { FilterPipe } from './filter.pipe';
import { FormsModule } from '@angular/forms';
import { Pipe, PipeTransform } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { LoginService } from './../auth/login.service';
import { DataService } from 'src/app/employees/data.service';
import { Employee } from '../employees/employee';
import { SearchBarService } from '../search-bar/search-bar.service';




@Component({
  selector: 'app-champion-a-cause',
  templateUrl: './champion-a-cause.component.html',
  styleUrls: ['./champion-a-cause.component.css']

})

export class ChampionACauseComponent implements OnInit {
  public employees: Employee[];
  private showSearchBar = true;
  private searchText = 'foo';

  constructor(
    public loginService: LoginService,
    private searchBarService: SearchBarService,
    private dataService: DataService) {
  }

  ngOnInit() {
    this.searchBarService.showSearchBar.subscribe(toggle => this.showSearchBar = toggle);
    this.searchBarService.searchText.subscribe(text => this.searchText = text);
    this.employees = this.dataService.getEmployees().filter(f => f.title.toLowerCase() !== 'apprentice' && f.type.toLowerCase() !== '1099');
  }
  filterChampion(filterVal: any) {
    console.log('HELLO FROM THE FILTER FUNCTION');
    // this.employees = this.employees.filter(f => f.champion == filterVal)
    this.sortByName(this.employees);
    this.sortByCause(this.employees);
  }

  private sortByName(employees) {
    const sorted = this.employees.sort((a, b) => {
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

  private sortByCause(employees) {
    const sorted = this.employees.sort((a, b) => {
      const nameA = a.champion.toUpperCase();
      const nameB = b.champion.toUpperCase();
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
