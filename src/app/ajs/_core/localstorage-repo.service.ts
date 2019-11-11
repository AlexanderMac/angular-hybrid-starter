import * as _ from 'lodash';
import { BaseService } from './base.service';

export class LocalStorageRepoService extends BaseService {
  private localStorage: any;
  private collectionName: any;

  static $inject = ['$q', '$window'];
  constructor($q, $window) {
    super($q);
    this.localStorage = $window.localStorage;
  }

  init(collectionName): void {
    this.collectionName = collectionName;
    this.load();
  }

  load(): void {
    let objectsStr = this.localStorage.getItem(this.collectionName);
    if (objectsStr) {
      let objects = _.attempt(JSON.parse.bind(null, objectsStr)) as any[];
      this.objects = _.isError(objects) ? [] : objects;
      let nextIdStr = _.chain(this.objects)
        .map('id')
        .max()
        .value();
      this.nextId = +nextIdStr || 0;
    }
  }

  save(): void {
    let objects = _.chain(this.objects)
      .map(obj => _.omit(obj, '$$hashKey'))
      .value();
    let objectsStr = JSON.stringify(objects);
    this.localStorage.setItem(this.collectionName, objectsStr);
  }

  create(obj): any {
    return super
      .create(obj)
      .then(res => {
        this.save();
        return res;
      });
  }

  update(objData): any {
    return super
      .update(objData)
      .then(res => {
        this.save();
        return res;
      });
  }

  delete(id): any {
    return super
      .delete(id)
      .then(res => {
        this.save();
        return res;
      });
  }
}

export class LocalStorageRepoServiceFactory {
  static $inject = ['$q', '$window'];
  constructor(private $q, private $window) {}

  getInstance(): LocalStorageRepoService {
    return new LocalStorageRepoService(this.$q, this.$window);
  }
}
