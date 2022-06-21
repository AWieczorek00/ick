import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { MealDTO } from '../dto/meal.dto';

export const GETS_ALL_MEAL_DTO = new InjectionToken<GetsAllMealDtoPort>('GETS_ALL_MEAL_DTO');

export interface GetsAllMealDtoPort {
  getAll(): Observable<MealDTO[]>;
}
