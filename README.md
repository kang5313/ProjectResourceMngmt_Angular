# ProjectResourceMngmt

## Features
### Project Check In
1. User can select the role, grace period for project and duration of resource usage calculation session when the user checks in the project to the system.

### Project Check Out
1. User check out the project and the system return the calculated resource used for the project.
2. User can query the resource used for the project up to now without check out the project.

### Calculation of Resource Usage
1. time used for the project * role's rate = resource used
2. A grace period is given when user check in the project, the resource used is set to 0 if the user check out the project before the grace period end.
3. Sessions count : 
**Eg:** 
15 minutes per session, 10 minutes grace period are set. If the time used for the project is 26 minutes.
Resource = 2 session * rate

26minutes - 10minutes grace period = 16minutes <br>
16minutes - 15minutes = 1 session. <br> 
The remainder 1 minute is counted in another session.<br>
Total = 2 session

### CRUD for User's role 
1. User can create a new role and set the rate for new role
2. User can update the role's rate.
3. User can delete the role.
4. User can view all the role and rate.

## Future Work
1. Add-in user management module so that the user have to check in their account before access to the tool.
2. Seperate the user into 2 categories: Normal User and Admin.
3. Only Admin can access the CRUD for User's role.
4. Resource Analytics module for the admin to use.

## Angular Info

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.1.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

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
