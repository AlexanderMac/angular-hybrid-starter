import * as _                  from 'lodash';
import { Component, OnInit }   from '@angular/core';
// TODO: import { Router }              from '@angular/router';
import { NotificationService } from '../ajs/_core/notification.service';
import { UserService }         from './service';
// import { RoleService }         from '../roles/service';
import { User }                from './model';

class UserEx extends User {
  rolesStr: string;
}

@Component({
  selector: 'am-user-list',
  template: require('./list.component.pug')
})
export class UserListComponent implements OnInit {
  isLoading: boolean;
  isSaving: boolean;
  users: UserEx[] = [];

  constructor(
    // TODO: private router: Router,
    private ntfsSrvc: NotificationService,
    private userSrvc: UserService,
    // private roleSrvc: RoleService
  ) {
  }

  ngOnInit(): void {
    this._loadUsers();
  }

  _loadUsers(): void {
    this.isLoading = true;
    Promise
      .all([
        [], // TODO: => this.roleSrvc.getRoles(),
        this.userSrvc.getUsers()
      ])
      .then(([roles, users]) => {
        this.users = _.map(users, user => {
          let userEx = user as UserEx;
          /*userEx.rolesStr = _.chain(user.roles)
            .map(userRoleId => _.find(roles, { id: +userRoleId }))
            .map(role => role ? role.name : '')
            .compact()
            .join(',')
            .value();*/
          // TODO:
          this.isLoading = false;
          return userEx;
        });
      })
      .catch(() => this.ntfsSrvc.error('Unable to load users'))
      // TODO: .finally(() => this.isLoading = false);
  }

  userDetails(user: User): void {
    location.href = `#/users/${user.id}`;
    // TODO: this.router.navigate(['/users', user.id]);
  }

  editUser(user: User): void {
    location.href = `#/users/${user.id}/edit`;
    // TODO: this.router.navigate(['/users/:id/edit', { id: user.id }]);
  }

  deleteUser(user: User): void {
    let res = confirm(`Delete ${user.name}? The user will be permanently deleted.`);
    if (!res) {
      return;
    }

    this.isSaving = true;
    this.userSrvc
      .deleteUser(user.id)
      .subscribe(
        () => {
          _.remove(this.users, user);
          this.ntfsSrvc.info('User deleted successfully');
        },
        () => this.ntfsSrvc.error('Unable to delete user'),
        () => this.isSaving = false);
  }
}
