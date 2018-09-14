import * as _                     from 'lodash';
import { Component, OnInit }      from '@angular/core';
// TODO: import { ActivatedRoute, Router } from '@angular/router';
import { forkJoin }               from 'rxjs/observable/forkJoin';
import { NotificationService }    from '../ajs/_core/notification.service';
import { UserService }            from './service';
// import { RoleService }            from '../roles/service';
import { User }                   from './model';

class UserEx extends User {
  rolesStr: string;
}

@Component({
  selector: 'am-user-details',
  templateUrl: './details.component.pug'
})
export class UserDetailsComponent implements OnInit {
  isLoading: boolean;
  isSaving: boolean;
  userId: number;
  user: UserEx;

  constructor(
    // TODO: private router: Router,
    // TODO: private activatedRoute: ActivatedRoute,
    private ntfsSrvc: NotificationService,
    private userSrvc: UserService,
    /*private roleSrvc: RoleService*/) {
    // TODO: this.userId = +this.activatedRoute.snapshot.params.id;
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
      })
      .catch(err => {
        this.ntfsSrvc.error('Unable to load user');
        this.router.navigate(['/users']);
      })
      // TODO: .finally() => this.isLoading = false);
  }
}
