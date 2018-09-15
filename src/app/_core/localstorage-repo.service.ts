import { LocalStorageRepoServiceFactory } from '../ajs/_core/localstorage-repo.service';

export { LocalStorageRepoServiceFactory };

export function LocalStorageRepoServiceFactoryFactory(i: any) {
  return i.get('LocalStorageRepoServiceFactory');
}

export const localStorageRepoServiceFactoryProvider = {
  provide: LocalStorageRepoServiceFactory,
  useFactory: LocalStorageRepoServiceFactoryFactory,
  deps: ['$injector']
};
