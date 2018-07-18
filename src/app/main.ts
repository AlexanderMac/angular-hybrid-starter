import './vendor';

// import { enableProdMode }         from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { UpgradeModule }          from '@angular/upgrade/static';
import { AppModule }              from './app.module';

import './app-ajs';

/* TODO:
if (environment.production) {
  enableProdMode();
}*/

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .then(platformRef => {
    const upgrade = platformRef.injector.get(UpgradeModule) as UpgradeModule;
    upgrade.bootstrap(document.documentElement, ['app']);
  })
  .catch(err => console.log(err));
