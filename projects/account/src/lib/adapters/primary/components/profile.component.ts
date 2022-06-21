import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  OnInit,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { UserDTO } from '../../../application/ports/secondary/dto/user.dto';
import {
  GETS_ONE_USER_DTO,
  GetsOneUserDtoPort,
} from '../../../application/ports/secondary/dto/gets-one-user.dto-port';
import {
  SETS_USER_DTO,
  SetsUserDtoPort,
} from '../../../application/ports/secondary/dto/sets-user.dto-port';

@Component({
  selector: 'lib-profile',
  templateUrl: './profile.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent {
  user$: Observable<UserDTO> = this._getsOneUserDto.getOne(
    'kTFyQ4TbaQ9XjSXDVirM'
  );
  num: number | undefined;

  constructor(
    @Inject(GETS_ONE_USER_DTO) private _getsOneUserDto: GetsOneUserDtoPort,
    @Inject(SETS_USER_DTO) private _setsUserDto: SetsUserDtoPort
  ) {}

  inputActive: boolean = true;
  weights: number[] = [];

  onUserDataSubmited(
    weightList: number[],
    name: string,
    weight1: string,
    height: string
  ) {
    weightList?.push(parseFloat(weight1));
    this.num = (parseFloat(weight1) / Math.pow(parseFloat(height), 2)) * 10000;
    this._setsUserDto.set({
      id: 'kTFyQ4TbaQ9XjSXDVirM',
      name: name,
      weight: weightList,
      height: parseFloat(height),
      bmi: Math.round(this.num * 100 + Number.EPSILON) / 100,
    });
    this.inputActive = true;
  }

  setEnableClick() {
    this.inputActive = false;
  }
}
