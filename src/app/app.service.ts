import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class AppTitleService {
    private appTitleSource = new BehaviorSubject('');
    appHeaderTitle = this.appTitleSource.asObservable();

    constructor() { }

    setAppTitle(title: string) {
        this.appTitleSource.next(title);
    }
}
