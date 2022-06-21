import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { DailyMealsDTO } from '../dto/daily-meals.dto';

export const ADDS_DAILY_MEALS_DTO = new InjectionToken<AddsDailyMealsDtoPort>('ADDS_DAILY_MEALS_DTO');

export interface AddsDailyMealsDtoPort {
  add(dailyMeals: Partial<DailyMealsDTO>): Observable<void>;
}
