import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DailyMealsComponent } from './daily-meals.component';

@NgModule({ imports: [CommonModule],
  	declarations: [DailyMealsComponent],
  	providers: [],
  	exports: [DailyMealsComponent] })
export class DailyMealsComponentModule {
}
