import { BrowserModule }       from '@angular/platform-browser';
import { UpgradeModule }       from '@angular/upgrade/static';
import { NgModule }            from '@angular/core';
/* TODO:
import { RouterModule,
         UrlHandlingStrategy } from '@angular/router';
*/
import { AppComponent } from './app.component';
import { UsersModule }  from './users/module';

/* TODO:
class Ng1Ng2UrlHandlingStrategy implements UrlHandlingStrategy {
  shouldProcessUrl(url) {
    return url.toString().startsWith('/users');
  }

  extract(url) {
    return url;
  }

  merge(url) {
    return url;
  }
}
*/

@NgModule({
  imports: [
    BrowserModule,
    UpgradeModule,
    UsersModule,
    // TODO: RouterModule.forRoot([], { useHash: true, initialNavigation: false })
  ],
  declarations: [
    AppComponent
  ],
  providers: [
    // TODO: { provide: UrlHandlingStrategy, useClass: Ng1Ng2UrlHandlingStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
