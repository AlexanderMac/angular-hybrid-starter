import { LocalStorageRepoService } from '../ajs/_core/localstorage-repo.service';

export function LocalStorageRepoServiceFactory(i: any) {
  return i.get('LocalStorageRepoService');
}

export const localStorageRepoServiceProvider = {
  provide: LocalStorageRepoService,
  useFactory: LocalStorageRepoServiceFactory,
  deps: ['$injector']
};
