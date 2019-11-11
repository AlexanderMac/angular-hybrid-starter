import { NgModule } from '@angular/core';
import { CoreModule } from '../_core/module';
import { SharedModule } from '../_shared/module';
import { RolesModule } from '../roles/module';
import { UserListComponent } from './list.component';
import { UserFormComponent } from './form.component';
import { UserDetailsComponent } from './details.component';
import { UserService } from './service';

import './styles.styl';

@NgModule({
  declarations: [
    UserListComponent,
    UserFormComponent,
    UserDetailsComponent
  ],
  imports: [
    CoreModule,
    SharedModule,
    RolesModule
  ],
  providers: [
    UserService
  ],
  entryComponents: [
    UserListComponent,
    UserFormComponent,
    UserDetailsComponent
  ]
})
export class UsersModule { }
