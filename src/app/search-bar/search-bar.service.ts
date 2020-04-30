import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class SearchBarService {
    private showSearchBarSource = new BehaviorSubject(true);
    showSearchBar = this.showSearchBarSource.asObservable();

    private searchTextSource = new BehaviorSubject('');
    searchText = this.searchTextSource.asObservable();

    constructor() { }

    setShowSearchBar(display: boolean) {
        this.showSearchBarSource.next(display);
    }

    setSearchText(text: string) {
        this.searchTextSource.next(text);
    }

    resetSearchText() {
        console.log("test");
        this.searchTextSource.next("");
    }
}
