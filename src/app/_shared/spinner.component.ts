import { Directive, ElementRef, Injector } from '@angular/core';
import { UpgradeComponent }                from '@angular/upgrade/static';

@Directive({
  selector: 'am-spinner'
})
export class SpinnerComponentDirective extends UpgradeComponent {
  constructor(elementRef: ElementRef, injector: Injector) {
    super('spinner', elementRef, injector);
  }
}
