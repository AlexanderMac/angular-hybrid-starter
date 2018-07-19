import * as ng                from 'angular';
import { downgradeComponent } from '@angular/upgrade/static';
import { TestComponent }      from '../../test/test.component';

export default ng
  .module('app.test', ['ngRoute'])
  .config(['$routeProvider', ($routeProvider: ng.route.IRouteProvider) => {
    $routeProvider
      .when('/test', {
        template: '<test></test>'
      });
  }])
  .directive('test', downgradeComponent({ component: TestComponent }) as angular.IDirectiveFactory)
  .name;
