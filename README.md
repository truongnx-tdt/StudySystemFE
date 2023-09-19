# StudySystem

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.0.

## Toastr Notifications

npm install --save ngx-toastr then
"styles": [
"@angular/material/prebuilt-themes/indigo-pink.css",
"node_modules/bootstrap/dist/css/bootstrap.min.css", // bootstrap
"node_modules/ngx-toastr/toastr.css", // toastr
"src/styles.css"
],
finaly: import to app.module.ts ToastrModule.forRoot()

## Material

create file material.module.ts and add library to exports

## Environments

ng g environments
add base environment to environemnt.development.ts and environemnt.ts

## Bootstrap

npm install bootstrap, as follows:
"styles": [
"@angular/material/prebuilt-themes/indigo-pink.css",
"node_modules/bootstrap/dist/css/bootstrap.min.css", // bootstrap
"node_modules/ngx-toastr/toastr.css", // toastr
"src/styles.css"
],
"scripts": [
"node_modules/bootstrap/dist/js/bootstrap.min.js", // bootstrap
"node_modules/jquery/dist/jquery.min.js"
]


## fxFlex API in Angular flex layout

npm i -s @angular/flex-layout @angular/cdk

<b>app.module.ts</b>

import { FlexLayoutModule } from '@angular/flex-layout';
...

@NgModule({
    ...
    imports: [ FlexLayoutModule ],
    ...
});

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
