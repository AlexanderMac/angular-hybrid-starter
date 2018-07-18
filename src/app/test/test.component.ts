import { Component, OnInit }   from '@angular/core';
import { NotificationService } from '../_core/notification.service';

@Component({
  selector: 'test',
  template: `<h2>Angular-next Component</h2>
    <a href="#">Home</a>
    <br/>
    <a href="#/users">Users</a>
    <br/>
    <a href="#/roles">Roles</a>
  `
})
export class TestComponent implements OnInit {
  constructor(private ntfsSrvc: NotificationService) { }

  ngOnInit(): void {
    this.ntfsSrvc.info('TestComponent - onInit');
  }
}
