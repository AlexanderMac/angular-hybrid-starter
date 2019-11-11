import { Directive, ElementRef, Injector } from '@angular/core';
import { UpgradeComponent } from '@angular/upgrade/static';

@Directive({
  selector: 'am-navbar'
})
export class NavbarComponentDirective extends UpgradeComponent {
  constructor(elementRef: ElementRef, injector: Injector) {
    super('navbar', elementRef, injector);
  }
}
