import { NgModule } from '@angular/core';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { FirebaseDailyMealsService } from './firebase-daily-meals.service';
import { ADDS_DAILY_MEALS_DTO } from '../../../application/ports/secondary/daily-meals-dto-port/adds-daily-meals.dto-port';
import { GETS_ALL_DAILY_MEALS_DTO } from '../../../application/ports/secondary/daily-meals-dto-port/gets-all-daily-meals.dto-port';
import { SETS_DAILY_MEALS_DTO } from '../../../application/ports/secondary/daily-meals-dto-port/sets-daily-meals.dto-port';
import { GETS_ONE_DAILY_MEALS_DTO } from '../../../application/ports/secondary/dto/gets-one-daily-meals.dto-port';
import { GETS_ALL_MEAL_DTO } from '../../../application/ports/secondary/meal-dto-port/gets-all-meal.dto-port';

@NgModule({
  imports: [AngularFirestoreModule],
  declarations: [],
  providers: [
    FirebaseDailyMealsService,
    { provide: ADDS_DAILY_MEALS_DTO, useExisting: FirebaseDailyMealsService },
    {
      provide: GETS_ALL_DAILY_MEALS_DTO,
      useExisting: FirebaseDailyMealsService,
    },
    { provide: SETS_DAILY_MEALS_DTO, useExisting: FirebaseDailyMealsService },
    {
      provide: GETS_ONE_DAILY_MEALS_DTO,
      useExisting: FirebaseDailyMealsService,
    },
    { provide: GETS_ALL_MEAL_DTO, useExisting: FirebaseDailyMealsService },
  ],
  exports: [],
})
export class FirebaseDailyMealsServiceModule {}
