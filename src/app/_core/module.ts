import { NgModule }                               from '@angular/core';
import { localStorageRepoServiceFactoryProvider } from './localstorage-repo.service';
import { notificationServiceProvider }            from './notification.service';

@NgModule({
  providers: [
    localStorageRepoServiceFactoryProvider,
    notificationServiceProvider
  ]
})
export class CoreModule { }
