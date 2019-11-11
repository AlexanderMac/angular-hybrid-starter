import { NgModule } from '@angular/core';
import { routeParamsProvider } from './route-params.service';
import { localStorageRepoServiceFactoryProvider } from './localstorage-repo.service';
import { notificationServiceProvider } from './notification.service';

@NgModule({
  providers: [
    routeParamsProvider,
    localStorageRepoServiceFactoryProvider,
    notificationServiceProvider
  ]
})
export class CoreModule { }
