import { NgModule }                    from '@angular/core';
import { notificationServiceProvider } from './notification.service';

@NgModule({
  providers: [
    notificationServiceProvider
  ]
})
export class CoreModule { }
