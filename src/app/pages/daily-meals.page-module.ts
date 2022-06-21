import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FirebaseImageMealServiceModule, ImageMealsComponentModule, ImageMealsLeftComponentModule, NavbarComponentModule } from '@static-element';
import { DailyMealsComponentModule, FirebaseDailyMealsServiceModule } from '@meal';
import { DailyMealsPage } from './daily-meals.page';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: DailyMealsPage,
      },
    ]),
    NavbarComponentModule,
    ImageMealsComponentModule,
    DailyMealsComponentModule,
    FirebaseImageMealServiceModule,
    FirebaseDailyMealsServiceModule,
    ImageMealsLeftComponentModule
  ],
  declarations: [DailyMealsPage],
  providers: [],
  exports: [],
})
export class DailyMealsPageModule {}
