export class RoleService {
  private repoSrvc: any;

  static $inject = ['LocalStorageRepoServiceFactory'];
  constructor(lsRepoServiceFactory) {
    this.repoSrvc = lsRepoServiceFactory.getInstance();
    this.repoSrvc.init('Roles');
  }

  getRole(id): any {
    return this.repoSrvc.getOne(id);
  }

  getRoles(): any {
    return this.repoSrvc.getList();
  }

  createRole(role): any {
    return this.repoSrvc.create(role);
  }

  updateRole(roleData): any {
    return this.repoSrvc.update(roleData);
  }

  deleteRole(id): any {
    return this.repoSrvc.delete(id);
  }
}
