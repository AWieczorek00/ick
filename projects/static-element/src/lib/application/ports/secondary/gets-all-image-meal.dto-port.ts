import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { ImageMealDTO } from './image-meal.dto';

export const GETS_ALL_IMAGE_MEAL_DTO = new InjectionToken<GetsAllImageMealDtoPort>('GETS_ALL_IMAGE_MEAL_DTO');

export interface GetsAllImageMealDtoPort {
  getAll(criterion?: Partial<ImageMealDTO>): Observable<ImageMealDTO[]>;
}
