import * as _ from 'lodash';

class RoleListController {
  private ngLocationSrvc: any;
  private roleSrvc: any;
  private ntfsSrvc: any;

  roleId: any;
  isLoading: boolean;
  roles: any;
  isSaving: boolean;

  static $inject = ['$location', '$routeParams', 'NotificationService', 'RoleService'];
  constructor($location, $routeParams, NotificationService, RoleService) {
    this.ngLocationSrvc = $location;
    this.roleSrvc = RoleService;
    this.ntfsSrvc = NotificationService;
    this.roleId = $routeParams.id;
  }

  $onInit(): void {
    this._loadRoles();
  }

  _loadRoles(): void {
    this.isLoading = true;
    this.roleSrvc
      .getRoles()
      .then(roles => this.roles = roles)
      .catch(err => this.ntfsSrvc.error(err, 'Unable to load roles'))
      .finally(() => this.isLoading = false);
  }

  roleDetails(role): void {
    this.ngLocationSrvc.path(`/roles/${role.id}`);
  }

  editRole(role): void {
    this.ngLocationSrvc.path(`/roles/${role.id}/edit`);
  }

  deleteRole(role): void {
    let res = confirm(`Delete ${role.name}? The role will be permanently deleted.`);
    if (!res) {
      return;
    }

    this.isSaving = true;
    this.roleSrvc
      .deleteRole(role.id)
      .then(() => {
        _.remove(this.roles, role);
        this.ntfsSrvc.info('Role deleted successfully');
      })
      .catch(err => this.ntfsSrvc.error(err, 'Unable to delete role'))
      .finally(() => this.isSaving = false);
  }
}

export const RoleListComponent = {
  template: require('./list.component.pug'),
  controller: RoleListController
};
