import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { DailyMealsDTO } from './daily-meals.dto';

export const GETS_ONE_DAILY_MEALS_DTO = new InjectionToken<GetsOneDailyMealsDtoPort>('GETS_ONE_DAILY_MEALS_DTO');

export interface GetsOneDailyMealsDtoPort {
  getOne(date: string): Observable<DailyMealsDTO>;
}
