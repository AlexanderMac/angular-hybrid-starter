import { Component, OnInit }   from '@angular/core';
import { NotificationService } from '../ajs/_core/notification.service';

@Component({
  selector: 'test',
  templateUrl: './test.component.pug'
})
export class TestComponent implements OnInit {
  isLoading: boolean;

  constructor(private ntfsSrvc: NotificationService) { }

  ngOnInit(): void {
    this.isLoading = true;
    setTimeout(() => {
      this.ntfsSrvc.info('TestComponent - onInit');
      this.isLoading = false;
    }, 1000);
  }
}
