import * as ng from 'angular';

export default ng
  .module('app.users', ['ngRoute'])
  .config(($routeProvider) => {
    $routeProvider
      .when('/users', {
        template: ''
      })
      .when('/users/new', {
        template: ''
      })
      .when('/users/:id/edit', {
        template: ''
      })
      .when('/users/:id', {
        template: ''
      });
  })
  .name;
