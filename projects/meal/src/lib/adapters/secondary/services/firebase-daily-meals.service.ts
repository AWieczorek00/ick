import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable, from, of, throwError } from 'rxjs';
import { filter, map, switchMap } from 'rxjs/operators';
import { AddsDailyMealsDtoPort } from '../../../application/ports/secondary/daily-meals-dto-port/adds-daily-meals.dto-port';
import { GetsAllDailyMealsDtoPort } from '../../../application/ports/secondary/daily-meals-dto-port/gets-all-daily-meals.dto-port';
import { SetsDailyMealsDtoPort } from '../../../application/ports/secondary/daily-meals-dto-port/sets-daily-meals.dto-port';
import { GetsOneDailyMealsDtoPort } from '../../../application/ports/secondary/dto/gets-one-daily-meals.dto-port';
import { GetsAllMealDtoPort } from '../../../application/ports/secondary/meal-dto-port/gets-all-meal.dto-port';
import { DailyMealsDTO } from '../../../application/ports/secondary/dto/daily-meals.dto';
import { MealDTO } from '../../../application/ports/secondary/dto/meal.dto';
import { formatDate } from '@angular/common';

@Injectable()
export class FirebaseDailyMealsService
  implements
    AddsDailyMealsDtoPort,
    GetsAllDailyMealsDtoPort,
    SetsDailyMealsDtoPort,
    GetsOneDailyMealsDtoPort,
    GetsAllMealDtoPort
{
  myDate = formatDate(new Date(), 'dd-MM-yyyy', 'en');
  constructor(private _client: AngularFirestore) {}

  add(dailyMeals: Partial<DailyMealsDTO>): Observable<void> {
    return from(this._client.collection('daily-meals').add(dailyMeals)).pipe(
      map(() => void 0)
    );
  }

  getAll2(): Observable<DailyMealsDTO[]> {
    return this._client
      .collection<DailyMealsDTO>('daily-meals')
      .valueChanges({ idField: 'id' })
      .pipe(map((items) => items.filter((item) => item.date == this.myDate)));
  }

  set(dailyMeals: Partial<DailyMealsDTO>): Observable<void> {
    return from(
      this._client.doc('daily-meals/' + dailyMeals.id).update(dailyMeals)
    ).pipe(map(() => void 0));
  }

  getOne(date: string): Observable<DailyMealsDTO> {
    return this._client
      .doc<DailyMealsDTO>('daily-meals/' + date)
      .valueChanges({ dateField: 'date' })
      .pipe(
        switchMap((item) =>
          item
            ? of(item)
            : throwError(new Error('Item does not exist in firebase'))
        )
      );
  }

  getAll(): Observable<MealDTO[]> {
    return this._client
      .collection<MealDTO>('meals')
      .valueChanges({ idField: 'id' });
  }

  
}
