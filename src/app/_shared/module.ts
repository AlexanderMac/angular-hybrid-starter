import { NgModule }                  from '@angular/core';
import { CommonModule }              from '@angular/common';
import { FormsModule }               from '@angular/forms';
import { UpgradeModule }             from '@angular/upgrade/static';
import { NavbarComponentDirective }  from './navbar.component';
import { SpinnerComponentDirective } from './spinner.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    UpgradeModule
  ],
  declarations: [
    NavbarComponentDirective,
    SpinnerComponentDirective
  ],
  exports: [
    CommonModule,
    FormsModule,
    UpgradeModule,
    NavbarComponentDirective,
    SpinnerComponentDirective
  ]
})
export class SharedModule { }
