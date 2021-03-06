import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { SideBarService } from './side-bar.service';
import { Employee } from '../employees/employee';
import { DataService } from '../employees/data.service';
import { Client } from '../employees/client';

@Component({
    selector: 'app-side-bar',
    templateUrl: './side-bar.component.html',
    styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
    private employees: Employee[];
    public clients: Client[];
    isOpenClient = false;
    isOpenPractice = false;

    constructor(
        private sideBarService: SideBarService,
        private dataService: DataService,
    ) {
        sideBarService.toggleClientMenu$.subscribe(
            menuState => {
                this.isOpenClient = menuState;
            });
    }

    ngOnInit() {
        this.employees = this.dataService.getEmployees();
    }

    toggelPracticeMenu() {
        this.isOpenPractice = !this.isOpenPractice;
    }

    toggleClientMenu() {
        if (this.clients == null) {
            this.clients = this.dataService.getClients();
        }
        this.sideBarService.toggleClientMenu();
    }
}
