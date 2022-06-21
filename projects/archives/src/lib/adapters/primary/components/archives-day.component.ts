import { formatDate } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  ViewEncapsulation,
} from '@angular/core';
import { map, Observable } from 'rxjs';
import { DailyMealsDTO } from '../../../application/ports/secondary/dto/daily-meals.dto';
import {
  GETS_ALL_DAILY_MEALS_DTO,
  GetsAllDailyMealsDtoPort,
} from '../../../application/ports/secondary/dto/gets-all-daily-meals.dto-port';

@Component({
  selector: 'lib-archives-day',
  templateUrl: './archives-day.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
    styleUrls: ['./archives-day.component.css']
  })
export class ArchivesDayComponent {
  daily$: Observable<DailyMealsDTO[]> = this._getsAllDailyMealsDto
    .getAll()
    .pipe(
      map((items) =>
        items.filter(
          (item) => item.date == formatDate(this.myDate, 'dd-MM-yyyy', 'en')
        )
      )
    );

  myDate: Date = new Date();
  constructor(
    @Inject(GETS_ALL_DAILY_MEALS_DTO)
    private _getsAllDailyMealsDto: GetsAllDailyMealsDtoPort
  ) {
    console.log(this.myDate);
  }

  test() {
    console.log(formatDate(this.myDate, 'dd-MM-yyyy', 'en'));
  }
}
