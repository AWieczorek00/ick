import { NgModule } from '@angular/core';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { FirebaseMealService } from './firebase-meal.service';
import { ADDS_MEAL_DTO } from '../../../application/ports/secondary/meal-dto-port/adds-meal.dto-port';

@NgModule({
  imports: [AngularFirestoreModule],
  declarations: [],
  providers: [FirebaseMealService, { provide: ADDS_MEAL_DTO, useExisting: FirebaseMealService }],
  exports: [],
})
export class FirebaseMealServiceModule {}
