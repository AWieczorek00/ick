import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddNewMealComponent } from './add-new-meal.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({ imports: [CommonModule, ReactiveFormsModule],
  	declarations: [AddNewMealComponent],
  	providers: [],
  	exports: [AddNewMealComponent] })
export class AddNewMealComponentModule {
}
