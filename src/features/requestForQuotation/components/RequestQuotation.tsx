import React, { useState } from "react";
import ".././RequestQuotation.css";
import { IRequestForQuotation } from "../interfaces/IRequestForQuotation";
import { HorizontalNonLinearStepper } from "./Stepper";
import { Question } from "../interfaces/Question";
import { ClientInformation } from "./ClientInformationInput";
import { ClientPreferences } from "./ClientPreferences";
import { EventDetails } from "./EventDetails";
import { useNavigate } from "react-router-dom";
import api from "../../../commons/api/api";

export interface QuestionsTitle {
    stepName: string;
    questions: Question<any>[];
};

export interface QuestionsTitlesArray extends Array<QuestionsTitle> {
    [index: number]: QuestionsTitle;
}

export const RequestQuotation = () => {

    const navigate = useNavigate();
    
    const [requestForQuotation, setRequestForQuotation] = useState<IRequestForQuotation>({
    });

    const handleSelectMealType = (value: EventDetails) => {

        setRequestForQuotation(requestForQuotation =>
        ({
            ...requestForQuotation,
            mealType: value.mealType,
            numberOfPeople: value.numberOfPeople,
            location: value.location,
            additionalComments: value.additionalComments,
            reservationDate: value.reservationDate
        }));
    };

    const handleClientInformation = (value: ClientInformation | string) => {

        let clientInfo: ClientInformation;

        if (typeof value === 'string') {
            clientInfo = { firstName: '', lastName: '', contactEmail: '', contactPhoneNumber: '' };
        } else {
            clientInfo = value;
        }

        setRequestForQuotation(requestForQuotation =>
        ({
            ...requestForQuotation,
            firstName: clientInfo.firstName,
            lastName: clientInfo.lastName,
            contactEmail: clientInfo.contactEmail,
            contactPhoneNumber: clientInfo.contactPhoneNumber
        }));
    };

    const handleClientPreferences = (value: ClientPreferences) => {

        const cusinePreferences = (value.cuisinePreferences ?? [])
            .filter(cuisine => cuisine !== undefined && cuisine.isChecked)
            .map(cuisine => cuisine.cuisinePreference!);

        setRequestForQuotation(requestForQuotation =>
        ({
            ...requestForQuotation,
            cuisinePreferences: cusinePreferences,
            dietaryRestrictions: value.dietaryRestrictions,
            chefPreference: value.chefPreference,
            otherCuisinePrefereces: value.otherPreferences
        }));
    };

    const questionTitles: QuestionsTitlesArray = [
        {
            stepName: "Datos personales",
            questions:
                [{ id: 1, questionTitle: "Empecemos con algo sencillo", handler: handleClientInformation }]
        },
        {
            stepName: "Detalles de la cena",
            questions:
                [
                    { id: 2, questionTitle: "Necesitamos algunos detalles", handler: handleSelectMealType }
                ]
        },
        {
            stepName: "Preferencias",
            questions:
                [
                    { id: 4, questionTitle: "¿Qué tipo de cocina te gustaría que prepare el Chef?", handler: handleClientPreferences }
                ]
        },
        {
            stepName: "Detalles finales",
            questions:
                [
                    { id: 5, questionTitle: "Valida los datos de la cotización", handler: handleClientPreferences }
                ]
        }
    ];


    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

    console.log(requestForQuotation);

    try {
        const response = await api.post<IRequestForQuotation>("/request-for-quotations", requestForQuotation);

        console.log(response);

        if (response.status === 200) {
            console.log("Request for quotation submitted successfully!");
        } else {
            console.error("Failed to submit request for quotation.");
        }

        navigate('/thank-you');
    } catch (error) {
        console.error("Error submitting request for quotation:", error);
    }
    };

    return (
        <form style={{ justifyContent: 'center' }} onSubmit={handleSubmit}>
            <HorizontalNonLinearStepper requestForQuotation={requestForQuotation} steps={questionTitles} />
        </form>
    );
};
