import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { DailyMealsDTO } from './daily-meals.dto';

export const GETS_ALL_DAILY_MEALS_DTO = new InjectionToken<GetsAllDailyMealsDtoPort>('GETS_ALL_DAILY_MEALS_DTO');

export interface GetsAllDailyMealsDtoPort {
  getAll(): Observable<DailyMealsDTO[]>;
}
