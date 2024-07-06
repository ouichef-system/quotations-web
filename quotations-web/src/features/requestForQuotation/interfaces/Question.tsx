import { MealTypeItem } from "./MealTypeItem";

export interface Question<T> {
    id: number;
    questionTitle: string;
    mealTypes?: MealTypeItem[]; 
    handler: (value: T) => void;
}