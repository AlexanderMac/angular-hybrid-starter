import { NgModule }                  from '@angular/core';
import { CommonModule }              from '@angular/common';
// TODO: import { RouterModule }              from '@angular/router';
import { FormsModule }               from '@angular/forms';
import { UpgradeModule }             from '@angular/upgrade/static';
import { NavbarComponentDirective }  from './navbar.component';
import { SpinnerComponentDirective } from './spinner.component';

@NgModule({
  imports: [
    CommonModule,
    // TODO: RouterModule,
    FormsModule,
    UpgradeModule
  ],
  declarations: [
    NavbarComponentDirective,
    SpinnerComponentDirective
  ],
  exports: [
    CommonModule,
    // TODO: RouterModule,
    FormsModule,
    UpgradeModule,
    NavbarComponentDirective,
    SpinnerComponentDirective
  ]
})
export class SharedModule { }
