import { NgModule }      from '@angular/core';

import { CoreModule }    from '../_core/module';
import { SharedModule }  from '../_shared/module';
import { TestComponent } from './test.component';

@NgModule({
  imports: [
    CoreModule,
    SharedModule
  ],
  declarations: [
    TestComponent
  ],
  entryComponents: [
    TestComponent
  ]
})
export class TestModule { }
