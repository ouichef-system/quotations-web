import { Dayjs } from "dayjs";

export interface IRequestForQuotation {
    requestedBy?: string;
    firstName?: string;
    lastName?: string;
    mealType?: string;
    numberOfPeople?: string;
    cuisinePreferences?: string[];
    location?: string;
    reservationDate?: Dayjs;
    stoveType?: string;
    numberOfBurners?: number;
    hasWorkingOven?: boolean;
    chefPreference?: string;
    dietaryRestrictions?: string;
    additionalComments?: string;
    contactEmail?: string;
    contactPhoneNumber?: string;
}
