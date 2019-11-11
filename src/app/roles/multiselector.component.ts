import { Directive, ElementRef, Injector } from '@angular/core';
import { UpgradeComponent } from '@angular/upgrade/static';

export const RoleMultiselectorComponent = {};
@Directive({
  selector: 'am-role-multiselector',
  inputs: ['initialRoles'],
  outputs: ['onChange']
})
export class RoleMultiselectorDirective extends UpgradeComponent {
  constructor(elementRef: ElementRef, injector: Injector) {
    super('roleMultiselector', elementRef, injector);
  }
}
