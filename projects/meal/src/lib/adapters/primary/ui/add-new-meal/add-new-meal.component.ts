import { ChangeDetectionStrategy, Component, Inject, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ADDS_MEAL_DTO, AddsMealDtoPort } from '../../../../application/ports/secondary/meal-dto-port/adds-meal.dto-port';

@Component({
  selector: 'lib-add-new-meal',
  templateUrl: './add-new-meal.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddNewMealComponent {
  readonly newMeal: FormGroup = new FormGroup({
    name: new FormControl(),
    kcal: new FormControl(),
    proteins: new FormControl(),
    fats: new FormControl(),
    carbohydrates: new FormControl(),
  });

  constructor(@Inject(ADDS_MEAL_DTO) private _addsMealDto: AddsMealDtoPort) {}

  onNewMealSubmited(form: FormGroup): void {
    this._addsMealDto.add({
      name: form.get('name')?.value,
      kcal: form.get('kcal')?.value,
      proteins: form.get('proteins')?.value,
      fats: form.get('fats')?.value,
      carbohydrates: form.get('carbohydrates')?.value,
      weight: 100,
    });
    form.reset();
  }

}
