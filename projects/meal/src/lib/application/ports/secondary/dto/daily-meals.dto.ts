import { MealDTO } from './meal.dto';

export interface DailyMealsDTO {
    readonly id : string;
    readonly date: string;
    readonly breakfast: MealDTO[];
    readonly dinner :MealDTO[];
    readonly lunch :MealDTO[];
    readonly supper: MealDTO[];
}
