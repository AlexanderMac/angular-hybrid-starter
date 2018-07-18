import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <div class="view-container">
      <div ng-view class="view-frame"></div>
    </div>
  `,
})
export class AppComponent {
  title = 'app2';
}
