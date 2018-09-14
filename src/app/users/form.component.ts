import * as _                     from 'lodash';
import { Component, OnInit }      from '@angular/core';
// TODO: import { ActivatedRoute, Router } from '@angular/router';
import { NotificationService }    from '../ajs/_core/notification.service';
import { UserService }            from './service';
import { User }                   from './model';

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
    /*TODO: private router: Router,
    private activatedRoute: ActivatedRoute,*/
    private ntfsSrvc: NotificationService,
    private userSrvc: UserService) {
    // TODO: this.userId = +this.activatedRoute.snapshot.params.id;
  }

  ngOnInit(): void {
    if (!this.userId) {
      this.user = new User();
      this.user.roles = [1]; // TODO
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
        .catch(err => {
          this.ntfsSrvc.error('Unable to load user');
          this.router.navigate(['/users']);
        })
        // TODO: .finally(() => this.isLoading = false)
  }

  rolesChange(roles: number[]) {
    this.user.roles = roles;
  }

  saveUser(): void {
    this.isSaving = true;
    let fn = this.userId ? 'updateUser' : 'createUser';
    this
      .userSrvc[fn](this.user)
      .then(() => {
        this.ntfsSrvc.info(`User ${this.userId ? 'updated' : 'created'} successfully`);
        // TODO: this.router.navigate(['/users']);
      })
      .catch(() => this.ntfsSrvc.error('Unable to save user'))
      .finally(() => this.isSaving = false);
  }
}
