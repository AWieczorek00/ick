import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  ViewEncapsulation,
} from '@angular/core';
import { map, Observable } from 'rxjs';
import { ImageMealDTO } from '../../../application/ports/secondary/image-meal.dto';
import {
  GETS_ALL_IMAGE_MEAL_DTO,
  GetsAllImageMealDtoPort,
} from '../../../application/ports/secondary/gets-all-image-meal.dto-port';

@Component({
  selector: 'lib-image-meals',
  templateUrl: './image-meals.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ImageMealsComponent {
  meals$: Observable<ImageMealDTO[]> = this._getsAllImageMealDto
    .getAll()
    .pipe(map((items) => items.filter((item) => item.position === 'right')));

  constructor(
    @Inject(GETS_ALL_IMAGE_MEAL_DTO)
    private _getsAllImageMealDto: GetsAllImageMealDtoPort
  ) {}
}
