import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { GetsAllDailyMealsDtoPort } from '../../../application/ports/secondary/dto/gets-all-daily-meals.dto-port';
import { DailyMealsDTO } from '../../../application/ports/secondary/dto/daily-meals.dto';

@Injectable()
export class FirebaseArchivesService implements GetsAllDailyMealsDtoPort {
  constructor(private _client: AngularFirestore) {
  }

  getAll(): Observable<DailyMealsDTO[]> {
    return this._client.collection<DailyMealsDTO>('daily-meals').valueChanges(({idField: 'id'}));
  }
}
