import { NgModule } from '@angular/core';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { FirebaseArchivesService } from './firebase-archives.service';
import { GETS_ALL_DAILY_MEALS_DTO } from '../../../application/ports/secondary/dto/gets-all-daily-meals.dto-port';

@NgModule({ imports: [AngularFirestoreModule],
  	declarations: [],
  	providers: [FirebaseArchivesService, { provide: GETS_ALL_DAILY_MEALS_DTO, useExisting: FirebaseArchivesService }],
  	exports: [] })
export class FirebaseArchivesServiceModule {
}
