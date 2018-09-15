import { NgModule }                   from '@angular/core';
import { roleServiceProvider }        from './service';
import { RoleMultiselectorDirective } from './multiselector.component';

@NgModule({
  providers: [
    roleServiceProvider
  ],
  declarations: [
    RoleMultiselectorDirective
  ],
  exports: [
    RoleMultiselectorDirective
  ]
})
export class RolesModule {}
