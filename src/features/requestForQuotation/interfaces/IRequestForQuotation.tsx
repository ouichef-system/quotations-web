import { Dayjs } from "dayjs";

export interface IRequestForQuotation {
    requestedBy?: string;
    firstName?: string;
    lastName?: string;
    mealType?: string;
    numberOfPeople?: number;
    cuisinePreferences?: string[];
    otherCuisinePrefereces?: string;
    location?: string;
    reservationDate?: Dayjs;
    chefPreference?: string;
    dietaryRestrictions?: string;
    additionalComments?: string;
    contactEmail?: string;
    contactPhoneNumber?: string;
}
