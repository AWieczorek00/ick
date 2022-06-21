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
  selector: 'lib-image-meals-left',
  templateUrl: './image-meals-left.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ImageMealsLeftComponent {
  meals$: Observable<ImageMealDTO[]> = this._getsAllImageMealDto
    .getAll()
    .pipe(map((items) => items.filter((item) => item.position === "left")));

  constructor(
    @Inject(GETS_ALL_IMAGE_MEAL_DTO)
    private _getsAllImageMealDto: GetsAllImageMealDtoPort
  ) {}
}
