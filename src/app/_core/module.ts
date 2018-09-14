import { NgModule }                        from '@angular/core';
import { localStorageRepoServiceProvider } from './localstorage-repo.service';
import { notificationServiceProvider }     from './notification.service';

@NgModule({
  providers: [
    localStorageRepoServiceProvider,
    notificationServiceProvider
  ]
})
export class CoreModule { }
