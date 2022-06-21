import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { filterByCriterion } from '@lowgular/shared';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { GetsAllImageMealDtoPort } from '../../../application/ports/secondary/gets-all-image-meal.dto-port';
import { ImageMealDTO } from '../../../application/ports/secondary/image-meal.dto';

@Injectable()
export class FirebaseImageMealService implements GetsAllImageMealDtoPort {
  constructor(private _client: AngularFirestore) {
  }

  getAll(criterion: Partial<ImageMealDTO>): Observable<ImageMealDTO[]> {
    return this._client.collection<ImageMealDTO>('image-meals').valueChanges(({idField: 'id'})).pipe(map((data: ImageMealDTO[]) => filterByCriterion(data, criterion)));
  }
}

