import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable, from, of, throwError } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { GetsOneUserDtoPort } from '../../../application/ports/secondary/dto/gets-one-user.dto-port';
import { SetsUserDtoPort } from '../../../application/ports/secondary/dto/sets-user.dto-port';
import { UserDTO } from '../../../application/ports/secondary/dto/user.dto';

@Injectable()
export class FirebaseAccountService implements GetsOneUserDtoPort, SetsUserDtoPort {
  constructor(private _client: AngularFirestore) {
  }

  getOne(id: string): Observable<UserDTO> {
    return this._client.doc<UserDTO>('users/'+id).valueChanges({idField: 'id'}).pipe(switchMap((item) => (item ? of(item) : throwError(new Error('Item does not exist in firebase')))));
  }

  set(user: Partial<UserDTO>): Observable<void> {
    return from(this._client.doc('users/'+user.id).update(user)).pipe(map(() => void 0));
  }
}
