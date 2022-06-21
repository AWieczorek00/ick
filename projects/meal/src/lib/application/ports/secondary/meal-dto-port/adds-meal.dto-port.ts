import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { MealDTO } from '../dto/meal.dto';

export const ADDS_MEAL_DTO = new InjectionToken<AddsMealDtoPort>('ADDS_MEAL_DTO');

export interface AddsMealDtoPort {
  add(meal: Partial<MealDTO>): Observable<void>;
}
