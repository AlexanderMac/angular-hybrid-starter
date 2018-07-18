import { BrowserModule } from '@angular/platform-browser';
import { UpgradeModule } from '@angular/upgrade/static';
import { NgModule }      from '@angular/core';

import { AppComponent } from './app.component';
import { TestModule }   from './test/module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    UpgradeModule,
    TestModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
