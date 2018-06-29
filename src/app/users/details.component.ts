import * as _ from 'lodash';

class UserDetailsController {
  private ngQSrvc: any;
  private ngLocationSrvc: any;
  private ntfsSrvc: any;
  private roleSrvc: any;
  private userSrvc: any;

  userId: number;
  isLoading: boolean;
  user: any;

  static $inject = ['$q', '$location', '$routeParams', 'NotificationService', 'RoleService', 'UserService'];
  constructor($q, $location, $routeParams, NotificationService, RoleService, UserService) {
    this.ngQSrvc = $q;
    this.ngLocationSrvc = $location;
    this.ntfsSrvc = NotificationService;
    this.roleSrvc = RoleService;
    this.userSrvc = UserService;
    this.userId = +$routeParams.id;
  }

  $onInit() {
    this._loadUser();
  }

  _loadUser() {
    this.isLoading = true;
    return this.ngQSrvc
      .all([
        this.roleSrvc.getRoles(),
        this.userSrvc.getUser(this.userId)
      ])
      .then(([roles, user]) => {
        user.roles = _.chain(user.roles)
          .map(userRoleId => _.find(roles, { id: +userRoleId }))
          .map(role => role ? role.name : '')
          .compact()
          .join(',')
          .value();
        this.user = user;
      })
      .catch(err => {
        this.ntfsSrvc.error(err, 'Unable to load user');
        this.ngLocationSrvc.path('/users');
      })
      .finally(() => this.isLoading = false);
  }
}

export const UserDetailsComponent = {
  template: require('./details.component.pug'),
  controller: UserDetailsController
};
