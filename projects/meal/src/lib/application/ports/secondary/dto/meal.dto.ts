export interface MealDTO {
    readonly id?: string|undefined;
    readonly name: string;
    readonly img: string;
    readonly kcal: number;
    readonly proteins: number;
    readonly fats: number;
    readonly carbohydrates: number;
    readonly weight: number;
}
