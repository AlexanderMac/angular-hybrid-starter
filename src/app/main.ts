import './vendor';

import { enableProdMode }         from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { UpgradeModule }          from '@angular/upgrade/static';
import { AppModule }              from './app.module';

import './ajs/app';

if (process.env.APP_ENV === 'production') {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .then(platformRef => {
    const upgrade = platformRef.injector.get(UpgradeModule) as UpgradeModule;
    upgrade.bootstrap(document.body, ['app']);
  })
  .catch(err => console.log(err));
