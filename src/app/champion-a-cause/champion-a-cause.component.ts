import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { LoginService } from './../auth/login.service';
import { DataService } from 'src/app/employees/data.service';


@Component({
  selector: 'app-champion-a-cause',
  templateUrl: './champion-a-cause.component.html',
  styleUrls: ['./champion-a-cause.component.css']
})
export class ChampionACauseComponent implements OnInit {

  constructor() { }

  ngOnInit() {
   
      // this.router.navigate([`/championlist`]); 
    
  }

}
