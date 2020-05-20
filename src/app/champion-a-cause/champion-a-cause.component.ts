import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { FilterPipe} from './filter.pipe';
import { FormsModule }   from '@angular/forms';
import { Pipe, PipeTransform } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { LoginService } from './../auth/login.service';
import { DataService } from 'src/app/employees/data.service';
import { Employee } from '../employees/employee';



@Component({
  selector: 'app-champion-a-cause',
  templateUrl: './champion-a-cause.component.html',
  styleUrls: ['./champion-a-cause.component.css']
  
})

export class ChampionACauseComponent implements OnInit {
  public employees: Employee[];

  constructor(
    public loginService: LoginService,
    private dataService: DataService) {
  }



  ngOnInit() {
    this.employees = this.dataService
    .getEmployees()
  }

}
