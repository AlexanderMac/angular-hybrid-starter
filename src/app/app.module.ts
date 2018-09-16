import { BrowserModule } from '@angular/platform-browser';
import { UpgradeModule } from '@angular/upgrade/static';
import { NgModule }      from '@angular/core';
import { AppComponent }  from './app.component';
import { UsersModule }   from './users/module';

@NgModule({
  imports: [
    BrowserModule,
    UpgradeModule,
    UsersModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
