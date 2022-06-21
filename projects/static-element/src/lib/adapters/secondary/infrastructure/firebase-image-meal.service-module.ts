import { NgModule } from '@angular/core';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { FirebaseImageMealService } from './firebase-image-meal.service';
import { GETS_ALL_IMAGE_MEAL_DTO } from '../../../application/ports/secondary/gets-all-image-meal.dto-port';

@NgModule({ imports: [AngularFirestoreModule],
  	declarations: [],
  	providers: [FirebaseImageMealService, { provide: GETS_ALL_IMAGE_MEAL_DTO, useExisting: FirebaseImageMealService }],
  	exports: [] })
export class FirebaseImageMealServiceModule {
}
