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
    numberOfPeople?: number;
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
        numberOfPeople: 0,
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
        setEventDetails(prevState => ({ ...prevState, numberOfPeople: convertStringToNumber(qtyPeopleAnswer?.name) }));
    };

    const convertStringToNumber = (str: string | undefined): number => {
        switch (str) {
            case "2 personas":
                return 2;
            case "3 a 6 personas":
                return 6;
            case "Más de 6 personas":
                return 10;
            default:
                return 0;
        }
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
        <Grid justifyContent="flex-start" alignItems="flex-start" container spacing={{ xs: 1, sm: 2, md: 2 }} columns={{ xs: 1, sm: 8, md: 12 }}>
            <Grid item xs={1} sm={4} md={12}>
                <Typography variant="h6" sx={{ marginBottom: 1 }}>¿Qué tipo de comida deseas?</Typography>
                <ButtonList mealItems={mealTypes} onItemSelected={handleSelectMealType} />
            </Grid>
            <Grid item xs={1} sm={4} md={12}>
                <Divider />
            </Grid>
            <Grid item xs={1} sm={4} md={12}>
                <Typography variant="h6" sx={{ marginBottom: 1 }}>¿Cuántas personas estarán presentes?</Typography>
                <ButtonList mealItems={qtyPeople} onItemSelected={handlePeopleNumber} />
            </Grid>
            <Grid item xs={1} sm={4} md={12}>
                <Divider />
            </Grid>
            <Grid item xs={1} sm={4} md={12}>
                <Typography variant="h6" sx={{ marginBottom: 1 }}>¿Dónde será el evento?</Typography>
                <TextField id="location" label="Dirección física" variant="outlined" value={eventDetails.location} onChange={handleChange} fullWidth />
            </Grid>
            <Grid item xs={1} sm={4} md={12}>
                <Divider />
            </Grid>
            <Grid item xs={1} sm={4} md={12}>
                <Typography variant="h6" sx={{ marginBottom: 1 }}>Fecha y hora del evento</Typography>
                <DateTimePicker
                    value={eventDetails.reservationDate}
                    onChange={handleDateTimeChange}
                />
            </Grid>
            <Grid item xs={1} sm={4} md={12}>
                <Divider />
            </Grid>
            <Grid item xs={1} sm={4} md={12}>
                <TextField
                    multiline
                    rows={4}
                    id="additionalComments"
                    label="Algún comentario adicional"
                    variant="outlined"
                    value={eventDetails.additionalComments}
                    onChange={handleChange}
                    fullWidth
                />
            </Grid>
            <Grid item xs={1} sm={4} md={12}>
                <Button onClick={handleSubmit} type="submit" variant="contained" fullWidth>
                    {isSmallScreen ? 'Siguiente' : 'Siguiente paso'}
                </Button>
            </Grid>
        </Grid>
    );
};
