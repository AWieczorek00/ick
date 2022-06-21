import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BmiChartComponentModule, FirebaseAccountServiceModule, ProfileComponentModule } from '@account';
import { NavbarComponentModule } from '@static-element';
import { AccountPage } from './account.page';

@NgModule({ imports: [CommonModule, 
      RouterModule.forChild([
        {
          path: '',
          component: AccountPage,
        }
      ]),
  ProfileComponentModule,
  FirebaseAccountServiceModule,
  NavbarComponentModule,
  BmiChartComponentModule,
],
  	declarations: [AccountPage],
  	providers: [],
  	exports: [] })
export class AccountPageModule {
}
