import { Injectable, Output, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class SideBarService {
    private toggleClientMenuSource = new Subject<boolean>();

    isOpen = false;
    toggleClientMenu$ = this.toggleClientMenuSource.asObservable();

    openClientMenu() {
        this.toggleClientMenuSource.next(true);
    }

    closeClientMenu() {
        this.toggleClientMenuSource.next(false);
    }

    toggleClientMenu() {
        this.isOpen = !this.isOpen;
        this.toggleClientMenuSource.next(this.isOpen);
    }

}
