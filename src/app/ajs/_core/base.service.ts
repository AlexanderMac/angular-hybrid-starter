import * as _ from 'lodash';

interface IObject {
  id: any;
}

export class BaseService {
  private ngQPromise: any;
  protected objects: IObject[];
  protected nextId: number;

  static $inject = ['$q'];
  constructor($q) {
    this.ngQPromise = $q;
    this.objects = [];
    this.nextId = 0;
  }

  getOne(id: any) {
    let obj = _.chain(this.objects)
      .find({ id: parseInt(id) })
      .cloneDeep()
      .value();
    return this.ngQPromise.resolve(obj);
  }

  getList() {
    let objects = _.cloneDeep(this.objects);
    return this.ngQPromise.resolve(objects);
  }

  create(obj: any) {
    obj.id = ++this.nextId;
    this.objects.push(_.cloneDeep(obj));
    return this.ngQPromise.resolve(obj);
  }

  update(objData: any) {
    let obj = _.find(this.objects, { id: parseInt(objData.id) });
    _.extend(obj, objData);
    return this.ngQPromise.resolve(_.cloneDeep(obj));
  }

  delete(id: any) {
    _.remove(this.objects, obj => obj.id === parseInt(id));
    return this.ngQPromise.resolve();
  }
}
