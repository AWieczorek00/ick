import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavbarComponentModule } from '@static-element';
import { AddNewMealComponentModule, FirebaseMealServiceModule } from '@meal';
import { NewMealPage } from './new-meal.page';

@NgModule({ imports: [CommonModule, 
      RouterModule.forChild([
        {
          path: '',
          component: NewMealPage,
        }
      ]),
  NavbarComponentModule,
  AddNewMealComponentModule,
  FirebaseMealServiceModule
],
  	declarations: [NewMealPage],
  	providers: [],
  	exports: [] })
export class NewMealPageModule {
}
