import * as ng from 'angular';
import { HomeComponent } from './component';

export default ng
  .module('app.home', ['ngRoute'])
  .config(['$routeProvider', ($routeProvider: ng.route.IRouteProvider): void => {
    $routeProvider
      .when('/', {
        template: '<home></home>'
      });
  }])
  .component('home', HomeComponent)
  .name;
