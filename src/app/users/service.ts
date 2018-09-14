import { Injectable }              from '@angular/core';
import { LocalStorageRepoService } from '../ajs/_core/localstorage-repo.service';
import { User }                    from './model';

@Injectable()
export class UserService {
  private repoSrvc: LocalStorageRepoService;

  constructor(repo: LocalStorageRepoService) {
    this.repoSrvc = repo;
    this.repoSrvc.init('Users');
  }

  getUser(id: number): Promise<User> {
    return this.repoSrvc.getOne(id);
  }

  getUsers(): Promise<User[]> {
    return this.repoSrvc.getList();
  }

  createUser(user: User): Promise<User> {
    return this.repoSrvc.create(user);
  }

  updateUser(userData: any): Promise<User> {
    return this.repoSrvc.update(userData);
  }

  deleteUser(id: number): Promise<boolean> {
    return this.repoSrvc.delete(id);
  }
}
