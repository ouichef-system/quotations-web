import { Button, Divider, Grid, TextField, Typography, useMediaQuery, useTheme } from "@mui/material";
import { useState } from "react";
import { ButtonList } from "./ButtonList";
import { MealTypeItem } from "../interfaces/MealTypeItem";
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import dayjs, { Dayjs } from 'dayjs';

interface EventDetailsProps {
    onItemSelected: (value: EventDetails) => void;
    onHandleComplete: () => void;
}

export interface EventDetails {
    mealType?: string;
    numberOfPeople?: string;
    location?: string;
    additionalComments?: string;
    reservationDate?: Dayjs;
}

export const EventDetails = ({ onItemSelected, onHandleComplete }: EventDetailsProps) => {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

    const [mealTypes] = useState<MealTypeItem[]>([
        { id: "1", name: "Desayuno" },
        { id: "2", name: "Almuerzo" },
        { id: "3", name: "Brunch" },
        { id: "4", name: "Cena" }
    ]);
    const [qtyPeople] = useState<MealTypeItem[]>([
        { id: "5", name: "2 personas" },
        { id: "6", name: "3 a 6 personas" },
        { id: "7", name: "Más de 6 personas" }
    ]);

    const [eventDetails, setEventDetails] = useState<EventDetails>({
        mealType: "",
        numberOfPeople: "",
        location: "",
        additionalComments: "",
        reservationDate: dayjs() // Set initial value to current date and time
    });

    const handleSubmit = () => {
        console.log(eventDetails);
        onItemSelected(eventDetails);
        onHandleComplete();
    };

    const handleSelectMealType = (value: string) => {
        const mealType = mealTypes.find(mealType => mealType.id === value);
        setEventDetails(prevState => ({ ...prevState, mealType: mealType?.name }));
    };

    const handlePeopleNumber = (value: string) => {
        const qtyPeopleAnswer = qtyPeople.find(qty => qty.id === value);
        setEventDetails(prevState => ({ ...prevState, numberOfPeople: qtyPeopleAnswer?.name }));
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = event.target;
        setEventDetails(prevState => ({
            ...prevState,
            [id]: value
        }));
    };

    const handleDateTimeChange = (date: Dayjs | null) => {
        setEventDetails(prevState => ({
            ...prevState,
            reservationDate: date ?? undefined
        }));
    };

    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Typography variant="h6" sx={{ marginBottom: 1 }}>¿Qué tipo de comida deseas?</Typography>
                <ButtonList mealItems={mealTypes} onItemSelected={handleSelectMealType} />
            </Grid>
            <Grid item xs={12}>
                <Divider />
            </Grid>
            <Grid item xs={12}>
                <Typography variant="h6" sx={{ marginBottom: 1 }}>¿Cuántas personas estarán presentes?</Typography>
                <ButtonList mealItems={qtyPeople} onItemSelected={handlePeopleNumber} />
            </Grid>
            <Grid item xs={12}>
                <Divider />
            </Grid>
            <Grid item xs={12}>
                <Typography variant="h6" sx={{ marginBottom: 1 }}>¿Dónde será el evento?</Typography>
                <TextField id="location" label="Dirección física" variant="outlined" value={eventDetails.location} onChange={handleChange} fullWidth />
            </Grid>
            <Grid item xs={12}>
                <Divider />
            </Grid>
            <Grid item xs={12}>
                <Typography variant="h6" sx={{ marginBottom: 1 }}>Fecha y hora del evento</Typography>
                <DateTimePicker
                    value={eventDetails.reservationDate}
                    onChange={handleDateTimeChange}
                />
            </Grid>
            <Grid item xs={12}>
                <Divider />
            </Grid>
            <Grid item xs={12}>
               