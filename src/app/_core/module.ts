import { NgModule }                    from '@angular/core';
import { notificationServiceProvider } from '../ajs/_core/notification.service';

@NgModule({
  providers: [
    notificationServiceProvider
  ]
})
export class CoreModule { }
