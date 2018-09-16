import * as _                   from 'lodash';
import { Component, OnInit }    from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NotificationService }  from '../_core/notification.service';
import { UserService }          from './service';
import { User }                 from './model';

@Component({
  selector: 'am-user-form',
  templateUrl: './form.component.pug'
})
export class UserFormComponent implements OnInit {
  isLoading: boolean;
  isSaving: boolean;
  userId: number;
  user: User;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private ntfsSrvc: NotificationService,
    private userSrvc: UserService) {
      this.userId = +this.activatedRoute.snapshot.params.id;
  }

  ngOnInit(): void {
    if (!this.userId) {
      this.user = new User();
      this.user.roles = [];
    } else {
      this._loadUser();
    }
  }

  _loadUser(): void {
    this.isLoading = true;
    this.userSrvc
      .getUser(this.userId)
      .then(user => {
          user.roles = _.map(user.roles, r => +r);
          this.user = user;
        })
        .catch(() => {
          this.ntfsSrvc.error('Unable to load user');
          this.router.navigate(['/users']);
        })
        .finally(() => this.isLoading = false);
  }

  rolesChange(data) {
    this.user.roles = data.roles;
  }

  saveUser(): void {
    this.isSaving = true;
    let fn = this.userId ? 'updateUser' : 'createUser';
    this
      .userSrvc[fn](this.user)
      .then(() => {
        this.ntfsSrvc.info(`User ${this.userId ? 'updated' : 'created'} successfully`);
        this.router.navigate(['/users']);
      })
      .catch(() => this.ntfsSrvc.error('Unable to save user'))
      .finally(() => this.isSaving = false);
  }
}
