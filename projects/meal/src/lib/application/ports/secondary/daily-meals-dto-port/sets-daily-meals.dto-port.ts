import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { DailyMealsDTO } from '../dto/daily-meals.dto';

export const SETS_DAILY_MEALS_DTO = new InjectionToken<SetsDailyMealsDtoPort>('SETS_DAILY_MEALS_DTO');

export interface SetsDailyMealsDtoPort {
  set(dailyMeals: Partial<DailyMealsDTO>): Observable<void>;
}
