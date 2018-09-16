import * as ng                  from 'angular';
import { downgradeComponent }   from '@angular/upgrade/static';
import { UserListComponent }    from '../../users/list.component';
import { UserFormComponent }    from '../../users/form.component';
import { UserDetailsComponent } from '../../users/details.component';

export default ng
  .module('app.users', ['ngRoute'])
  .config(($routeProvider) => {
    $routeProvider
      .when('/users', {
        template: '<user-list></user-list>'
      })
      .when('/users/new', {
        template: '<user-form></user-form>'
      })
      .when('/users/:id/edit', {
        template: '<user-form></user-form>'
      })
      .when('/users/:id', {
        template: '<user-details></user-details>'
      });
  })
  .directive('userList', downgradeComponent({ component: UserListComponent }) as angular.IDirectiveFactory)
  .directive('userForm', downgradeComponent({ component: UserFormComponent }) as angular.IDirectiveFactory)
  .directive('userDetails', downgradeComponent({ component: UserDetailsComponent }) as angular.IDirectiveFactory)
  .name;
