import * as _                   from 'lodash';
import { Component, OnInit }    from '@angular/core';
import { Location,
         LocationStrategy,
         PathLocationStrategy } from '@angular/common';
import { RouteParams }          from '../_core/route-params.service';
import { NotificationService }  from '../_core/notification.service';
import { UserService }          from './service';
import { RoleService }          from '../roles/service';
import { User }                 from './model';

class UserEx extends User {
  rolesStr: string;
}

@Component({
  selector: 'am-user-details',
  templateUrl: './details.component.pug',
  providers: [
    Location, { provide: LocationStrategy, useClass: PathLocationStrategy }
  ]
})
export class UserDetailsComponent implements OnInit {
  isLoading: boolean;
  isSaving: boolean;
  userId: number;
  user: UserEx;

  constructor(
    routeParams: RouteParams,
    private locationSrvc: Location,
    private ntfsSrvc: NotificationService,
    private userSrvc: UserService,
    private roleSrvc: RoleService) {
      this.userId = +routeParams.id;
  }

  ngOnInit(): void {
    this._loadUser();
  }

  _loadUser(): void {
    this.isLoading = true;
    Promise
      .all([
        this.roleSrvc.getRoles(),
        this.userSrvc.getUser(this.userId)
      ])
      .then(([roles, user]) => {
        this.user = (user as UserEx);
        this.user.rolesStr = _.chain(user.roles)
          .map(userRoleId => _.find(roles, { id: +userRoleId }))
          .map(role => role ? role.name : '')
          .compact()
          .join(',')
          .value();
        // TODO:
        this.isLoading = false;
      })
      .catch(err => {
        this.ntfsSrvc.error('Unable to load user');
        this.locationSrvc.go('#/users');
      });
      // TODO: .finally() => this.isLoading = false);
  }
}
