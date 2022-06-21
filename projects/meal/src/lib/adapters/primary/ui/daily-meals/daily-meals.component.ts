import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  ViewEncapsulation,
} from '@angular/core';
import { concatMap, isEmpty, map, Observable, tap } from 'rxjs';
import { DailyMealsDTO } from '../../../../application/ports/secondary/dto/daily-meals.dto';
import { MealDTO } from '../../../../application/ports/secondary/dto/meal.dto';
import {
  ADDS_DAILY_MEALS_DTO,
  AddsDailyMealsDtoPort,
} from '../../../../application/ports/secondary/daily-meals-dto-port/adds-daily-meals.dto-port';
import {
  SETS_DAILY_MEALS_DTO,
  SetsDailyMealsDtoPort,
} from '../../../../application/ports/secondary/daily-meals-dto-port/sets-daily-meals.dto-port';
import {
  GETS_ONE_DAILY_MEALS_DTO,
  GetsOneDailyMealsDtoPort,
} from '../../../../application/ports/secondary/dto/gets-one-daily-meals.dto-port';
import {
  GETS_ALL_DAILY_MEALS_DTO,
  GetsAllDailyMealsDtoPort,
} from '../../../../application/ports/secondary/daily-meals-dto-port/gets-all-daily-meals.dto-port';
import {
  GETS_ALL_MEAL_DTO,
  GetsAllMealDtoPort,
} from '../../../../application/ports/secondary/meal-dto-port/gets-all-meal.dto-port';
import { formatDate } from '@angular/common';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'lib-daily-meals',
  templateUrl: './daily-meals.component.html',
  styleUrls: ['./daily-meals.component.css'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DailyMealsComponent {
  myDate = formatDate(new Date(), 'dd-MM-yyyy', 'en');
  daily$: Observable<DailyMealsDTO[]> = this._getsAllDailyMealsDto
    .getAll2()
    .pipe(
      tap((daily) => {
        if (daily.length === 0) {
          this.onDailySubmited();
        }
      })
    );
  meals$: Observable<MealDTO[]> = this._getsAllMealDto.getAll();

  constructor(
    @Inject(ADDS_DAILY_MEALS_DTO)
    private _addsDailyMealsDto: AddsDailyMealsDtoPort,
    @Inject(SETS_DAILY_MEALS_DTO)
    private _setsDailyMealsDto: SetsDailyMealsDtoPort,
    @Inject(GETS_ONE_DAILY_MEALS_DTO)
    private _getsOneDailyMealsDto: GetsOneDailyMealsDtoPort,
    private modalService: NgbModal,
    @Inject(GETS_ALL_DAILY_MEALS_DTO)
    private _getsAllDailyMealsDto: GetsAllDailyMealsDtoPort,
    @Inject(GETS_ALL_MEAL_DTO) private _getsAllMealDto: GetsAllMealDtoPort
  ) {}

  open(content: any) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' });
  }

  onDailySubmited(): void {
    this._addsDailyMealsDto
      .add({
        date: this.myDate,
        breakfast: [],
        dinner: [],
        lunch: [],
        supper: [],
      })
      .subscribe();
  }

  onBreakfastClicked(meal: MealDTO, daily: DailyMealsDTO): void {
    daily.breakfast.push(meal);
    this._setsDailyMealsDto
      .set({
        id: daily.id,
        breakfast: daily.breakfast,
      })
      .subscribe();
  }

  onDinnerClicked(meal: MealDTO, daily: DailyMealsDTO): void {
    daily.dinner.push(meal);
    this._setsDailyMealsDto
      .set({
        id: daily.id,
        dinner: daily.dinner,
      })
      .subscribe();
  }

  onLunchClicked(meal: MealDTO, daily: DailyMealsDTO): void {
    daily.lunch.push(meal);
    this._setsDailyMealsDto
      .set({
        id: daily.id,
        lunch: daily.lunch,
      })
      .subscribe();
  }

  onSupperClicked(meal: MealDTO, daily: DailyMealsDTO): void {
    daily.supper.push(meal);
    this._setsDailyMealsDto
      .set({
        id: daily.id,
        supper: daily.supper,
      })
      .subscribe();
  }

  onBreakfastDeleteClicked(meal: MealDTO, daily: DailyMealsDTO): void {
    daily.breakfast.forEach((element, index) => {
      if (element.id === meal.id) daily.breakfast.splice(index, 1);
    });
    this._setsDailyMealsDto
      .set({
        id: daily.id,
        breakfast: daily.breakfast,
      })
      .subscribe();
  }

  onDinnerDeleteClicked(meal: MealDTO, daily: DailyMealsDTO): void {
    daily.dinner.forEach((element, index) => {
      if (element.id === meal.id) daily.dinner.splice(index, 1);
    });
    this._setsDailyMealsDto
      .set({
        id: daily.id,
        dinner: daily.dinner,
      })
      .subscribe();
  }

  onLunchDeleteClicked(meal: MealDTO, daily: DailyMealsDTO): void {
    daily.lunch.forEach((element, index) => {
      if (element.id === meal.id) daily.lunch.splice(index, 1);
    });
    this._setsDailyMealsDto
      .set({
        id: daily.id,
        lunch: daily.lunch,
      })
      .subscribe();
  }

  onSupperDeleteClicked(meal: MealDTO, daily: DailyMealsDTO): void {
    daily.supper.forEach((element, index) => {
      if (element.id === meal.id) daily.supper.splice(index, 1);
    });
    this._setsDailyMealsDto
      .set({
        id: daily.id,
        supper: daily.supper,
      })
      .subscribe();
  }
}
