import * as ng from 'angular';

import './_core/module-ajs';
import './_shared/module-ajs';
import './home/module-ajs';
import './roles/module-ajs';
import './users/module-ajs';
import './test/module-ajs';

import './app-ajs.styl';

ng
  .module('app', [
    'ngRoute',
    'app.core',
    'app.shared',
    'app.home',
    'app.roles',
    'app.users',
    'app.test'
  ])
  .config(['$routeProvider', '$locationProvider',
    ($routeProvider: ng.route.IRouteProvider, $locationProvider: angular.ILocationProvider) => {
      $locationProvider.hashPrefix('');

      $routeProvider
        .when('/not-found', {
          template: require('./_shared/not-found.pug'),
        })
        .otherwise({
          redirectTo: '/not-found'
        });
    }
  ]);
