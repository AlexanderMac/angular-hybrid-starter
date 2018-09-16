import { NgModule }                  from '@angular/core';
import { CommonModule }              from '@angular/common';
import { RouterModule }              from '@angular/router';
import { FormsModule }               from '@angular/forms';
import { UpgradeModule }             from '@angular/upgrade/static';
import { NavbarComponentDirective }  from './navbar.component';
import { SpinnerComponentDirective } from './spinner.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    UpgradeModule
  ],
  declarations: [
    NavbarComponentDirective,
    SpinnerComponentDirective
  ],
  exports: [
    CommonModule,
    RouterModule,
    FormsModule,
    UpgradeModule,
    NavbarComponentDirective,
    SpinnerComponentDirective
  ]
})
export class SharedModule { }
