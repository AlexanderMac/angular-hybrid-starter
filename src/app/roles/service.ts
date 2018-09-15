import { RoleService } from '../ajs/roles/service';

export { RoleService };

export function RoleServiceFactory(i: any) {
  return i.get('RoleService');
}

export const roleServiceProvider = {
  provide: RoleService,
  useFactory: RoleServiceFactory,
  deps: ['$injector']
};
