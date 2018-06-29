import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UpgradeModule } from '@angular/upgrade/static';

@NgModule({
  imports: [
    BrowserModule,
    UpgradeModule
  ]
})
export class AppModule {
  constructor(private ngUpgrade: UpgradeModule) { }

  ngDoBootstrap() {
    this.ngUpgrade.bootstrap(document.body, ['app'], { strictDi: true });
  }
}
