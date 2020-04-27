import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { NavigationStart, Router } from '@angular/router';
import { filter, map, mergeMap } from 'rxjs/operators';
import { Employee } from '../employees/employee';
import { LoginService } from '../auth/login.service';
import { DataService } from '../employees/data.service';
import { Client } from '../employees/client';

@Component({
  selector: '-menu',
  templateUrl: './mobile-menu.component.html',
  styleUrls: ['./mobile-menu.component.css'],
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
export class MobileMenuComponent implements OnInit {

  constructor(
    private router: Router,
    public loginService: LoginService,
    private dataService: DataService,
  ) { }

  private employees: Employee[];
  public clients: Client[];
  showMobileMenu = false;
  showTopMenu = false;
  showPracticeMenu = false;
  showClientMenu = false;

  ngOnInit() {
    this.router
      .events.pipe(
        filter(event => event instanceof NavigationStart)
      ).subscribe(() => {
        this.showMobileMenu = false;
      });

    this.employees = this.dataService.getEmployees();
    this.clients = this.dataService.getClients();
  }

  toggleMobileMenu() {
    this.showMobileMenu = !this.showMobileMenu;
    this.resetMobileMenu();
  }

  toggleOnPracticeMenu() {
    this.showTopMenu = false;
    this.showPracticeMenu = true;
    this.showClientMenu = false;
  }

  toggleOnClientMenu() {
    this.showTopMenu = false;
    this.showPracticeMenu = false;
    this.showClientMenu = true;
  }

  resetMobileMenu() {
    this.showTopMenu = true;
    this.showPracticeMenu = false;
    this.showClientMenu = false;
  }

  logout() {
    this.loginService.signOut();
  }
}
