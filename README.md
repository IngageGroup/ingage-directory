# Ingage Directory

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.21.

## Data/Environments

This project uses a static json file for it's data source.  There are three environment configurations

### default configuration

The default configuation uses the `employee.mock.json` file for employee data.  This is fictional data, and the related images are stored in the 'assets/test-profiles` folder for local testing.  All of the files needed to run the default configuation are part of this repo.

### test configuration
The test configuation uses the `employee.test.json` file for employee data.  This is a subset of the production data, isn't normally updated.  The `employee.test.json` file is not part of this repo, see Tony Maddox for a copy.

### production configuration
The production configuation uses the `employee.prod.json` file for employee data.  This file is generated regularly from a Google Sheet that is maintained by Tony Maddox.  The `employee.prod.json` file is not part of this repo.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Firebase

This app is hosted on Firebase.  Use `npm run deploy` to build & deploy to Firebase.  See Tony Maddox for access to the firebase project. 

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## setup prod/stagging in firebase
https://dev.to/valentinprgnd/multiple-environments-with-firebase-hosting-1ao4

https://scotch.io/tutorials/deploying-an-angular-cli-app-to-production-with-firebase


## feature requests
- [ ] search on mobile (from Andrea)
- [x] employee service (read from static json file)
- [ ] employee service (read from "live" data source, TBD)
- [x] add a count of consultants at each client to left menu
- [x] add coach to profile (from Andrea)
- [x] look at https://www.npmjs.com/package/@angular/fire for implementing anayltics
- [x] use firebase authentication
- [ ] tighten up authentication, are there better practices?
- [ ] if viewing yourself, show your Munoz coupon code
- [ ] document configuration, how to build locally, how to push to firebase, etc.
- [ ] show "champion a cause" per Elena on detail page.  we may even want a list of people and cause???
