import { Component } from '@angular/core';

@Component({
  selector: 'am-app-cmp',
  template: `
    <router-outlet></router-outlet>
    <div ng-view></div>
  `,
})
export class AppComponent { }
