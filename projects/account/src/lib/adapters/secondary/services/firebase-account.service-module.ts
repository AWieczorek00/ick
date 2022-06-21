import { NgModule } from '@angular/core';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { FirebaseAccountService } from './firebase-account.service';
import { GETS_ONE_USER_DTO } from '../../../application/ports/secondary/dto/gets-one-user.dto-port';
import { SETS_USER_DTO } from '../../../application/ports/secondary/dto/sets-user.dto-port';

@NgModule({
  imports: [AngularFirestoreModule],
  declarations: [],
  providers: [
    FirebaseAccountService,
    { provide: GETS_ONE_USER_DTO, useExisting: FirebaseAccountService },
    { provide: SETS_USER_DTO, useExisting: FirebaseAccountService },
  ],
  exports: [],
})
export class FirebaseAccountServiceModule {}
