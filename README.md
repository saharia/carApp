# AngularElectron

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.7.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


Using Electron with Native Packages (gdal)
====

Reason: Electron is distributed prebuilt with a specific node version. Native packages, like gdal, aren't written in javascript and are compiled against a version of node that may be different than electron. `electron-rebuilt` rebuilds any native packages from source to match the electron version.

Steps:
======
1. Install lastest Node.js (7.2.0) from https://nodejs.org/en/
2. Update NPM to latest `npm install -g npm@latest`
3. Make sure you have the latest `rtmdx` repository commit
4. If you don't have it, install Visual Studio 2015 Community Edition
5. In VS2015, create a new C++ project. It will prompt you to install the C++ build tools. Install them. It will take some time and afterwards you will not have to actually create a C++ project, you just need to trigger the build tools installation.
6. Open a command prompt, go to the `rtmdx` directory
7. Install `node-gyp`, `npm install -g node-gyp`
8. Enter `set GYP_MSVS_VERSION=2015"
9. Run `npm install` (this will take a while)
10. Run `./node_modules/.bin/electron-rebuild.cmd -p` (this will take a while)
11. Run the app `npm start`