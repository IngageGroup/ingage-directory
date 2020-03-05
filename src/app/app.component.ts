// import 'rxjs/add/operator/filter';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/mergeMap';

import { Component, OnInit, AfterViewInit, AfterContentChecked } from '@angular/core';
import { LoginService } from './auth/login.service';
import { Router, NavigationEnd, ActivatedRoute, NavigationStart, ChildrenOutletContexts } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { filter, map, mergeMap } from 'rxjs/operators';
import { AppTitleService } from './app.service';
import { SearchBarService } from './search-bar/search-bar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterContentChecked {
  // private loggedIn: boolean;
  public pageTitle: string;
  // private someString: string;
  private showSearchBar = true;
  private searchText = 'foo';

  constructor(
    public loginService: LoginService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private titleService: Title,
    private appTitleService: AppTitleService,
    private searchBarService: SearchBarService
  ) { }

  ngOnInit() {
    const appDefaultTitle = 'Ingagers';
    this.searchBarService.showSearchBar.subscribe(toggle => this.showSearchBar = toggle);
    this.searchBarService.searchText.subscribe(text => this.searchText = text);

    this.router
      .events.pipe(
        filter(event => event instanceof NavigationEnd),
        map(() => {
          let child = this.activatedRoute.firstChild;
          while (child.firstChild) {
            child = child.firstChild;
          }
          if (child.snapshot.url) {
            if (child.snapshot.url[0]) {
              if (child.snapshot.url[0].path === 'employee') {
                this.searchBarService.setShowSearchBar(false);
              } else {
                this.searchBarService.setShowSearchBar(true);
              }
            } else {
              this.searchBarService.setShowSearchBar(false);
            }
          }
          if (child.snapshot.params.client) {
            return child.snapshot.params.client;
          }
          if (child.snapshot.params.area) {
            let practiceArea = child.snapshot.params.area;
            if (practiceArea === 'dev') {
              practiceArea = 'Build: Dev';
            }
            if (practiceArea === 'qa') {
              practiceArea = 'Build: QA';
            }
            return practiceArea;
          }
          if (child.snapshot.data.title) {
            return child.snapshot.data.title;
          }
          return appDefaultTitle;
        })
      ).subscribe((title: string) => {
        if (title !== 'none') {
          this.appTitleService.setAppTitle(title);
          this.titleService.setTitle(title);
        }
      });
  }

  ngAfterContentChecked() {
    this.appTitleService.appHeaderTitle.subscribe(message => this.pageTitle = message);
  }

  onActivate(event) {
    const scrollToTop = window.setInterval(() => {
      const pos = window.pageYOffset;
      if (pos > 0) {
        window.scrollTo(0, pos - 20); // how far to scroll on each step
      } else {
        window.clearInterval(scrollToTop);
      }
    }, 16);
  }
}
