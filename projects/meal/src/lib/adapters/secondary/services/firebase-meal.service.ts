import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable, from } from 'rxjs';
import { map } from 'rxjs/operators';
import { AddsMealDtoPort } from '../../../application/ports/secondary/meal-dto-port/adds-meal.dto-port';
import { MealDTO } from '../../../application/ports/secondary/dto/meal.dto';

@Injectable()
export class FirebaseMealService implements AddsMealDtoPort {
  constructor(private _client: AngularFirestore) {}

  add(meal: Partial<MealDTO>): Observable<void> {
    return from(this._client.collection('meals').add(meal)).pipe(
      map(() => void 0)
    );
  }
}
