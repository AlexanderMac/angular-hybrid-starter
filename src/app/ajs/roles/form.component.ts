class RoleFormController {
  private ngLocationSrvc: any;
  private ntfsSrvc: any;
  private roleSrvc: any;

  roleId: number;
  role: {};
  isLoading: boolean;
  isSaving: boolean;

  static $inject = ['$location', '$routeParams', 'NotificationService', 'RoleService'];
  constructor($location, $routeParams, NotificationService, RoleService) {
    this.ngLocationSrvc = $location;
    this.ntfsSrvc = NotificationService;
    this.roleSrvc = RoleService;
    this.roleId = +$routeParams.id;
  }

  $onInit(): void {
    if (!this.roleId) {
      this.role = {};
      return;
    }
    this._loadRole();
  }

  _loadRole(): void {
    this.isLoading = true;
    this.roleSrvc
      .getRole(this.roleId)
      .then(role => this.role = role)
      .catch(err => {
        this.ntfsSrvc.error(err, 'Unable to load role');
        this.ngLocationSrvc.path('/roles');
      })
      .finally(() => this.isLoading = false);
  }

  saveRole(): void {
    this.isSaving = true;
    let fn = this.roleId ? 'updateRole' : 'createRole';
    this.roleSrvc[fn](this.role)
      .then(() => {
        this.ntfsSrvc.info(`Role ${this.roleId ? 'updated' : 'created'} successfully`);
        this.ngLocationSrvc.path('/roles');
      })
      .catch(err => this.ntfsSrvc.error(err, 'Unable to save role'))
      .finally(() => this.isSaving = false);
  }
}

export const RoleFormComponent = {
  template: require('./form.component.pug'),
  controller: RoleFormController
};
