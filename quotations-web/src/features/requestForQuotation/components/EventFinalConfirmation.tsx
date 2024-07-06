import { Checkbox, FormControlLabel, Grid, Typography } from "@mui/material";
import { IRequestForQuotation } from "../interfaces/IRequestForQuotation";

interface EventFinalConfirmationProps {
    requestForQuotation: IRequestForQuotation;
}

export const EventFinalConfirmation = ({ requestForQuotation }: EventFinalConfirmationProps) => {

    console.log(requestForQuotation);
    const renderGridItem = (label: string, value?: string | number | boolean | string[]) => {
        return (
            <Grid item xs={12} md={6} lg={4}>
                <Typography variant="subtitle1">{label}:</Typography>
                <Typography variant="body1">{value ?? 'No especificado'}</Typography>
            </Grid>
        );
    };

    const renderCuisinePreferences = () => {
        if (!requestForQuotation.cuisinePreferences || requestForQuotation.cuisinePreferences.length === 0) {
            return <Typography variant="body1">No cuisine preferences selected</Typography>;
        }

        return requestForQuotation.cuisinePreferences.map((preference, index) => (
            <Grid item xs={12} key={index}>
                <FormControlLabel
                    control={<Checkbox checked={true} />} // Always checked
                    label={preference}
                />
            </Grid>
        ));
    };

    return (
        <>
            <Grid container spacing={2}>
                {renderGridItem('Nombres', requestForQuotation.firstName)}
                {renderGridItem('Apellidos', requestForQuotation.lastName)}
                {renderGridItem('Tipo de comida', requestForQuotation.mealType)}
                {renderGridItem('Cantidad de personas', requestForQuotation.numberOfPeople)}
                <Grid item xs={12} md={6} lg={4}>
                    <Typography variant="subtitle1">Preferencias:</Typography>
                    <Grid container spacing={1}>
                        {renderCuisinePreferences()}
                    </Grid>
                </Grid>
                {renderGridItem('Lugar del evento', requestForQuotation.location)}
                {renderGridItem('Fecha del evento', requestForQuotation.reservationDate?.toDate().toLocaleString('es-PA'))}
                {renderGridItem('Tipo de cocina', requestForQuotation.stoveType)}
                {renderGridItem('Cantidad de ornillas', requestForQuotation.numberOfBurners?.toString())}
                {renderGridItem('¿Tienes horno?', requestForQuotation.hasWorkingOven?.toString())}
                {renderGridItem('Algun chef en particular', requestForQuotation.chefPreference)}
                {renderGridItem('Restricciones alimenticias', requestForQuotation.dietaryRestrictions)}
                {renderGridItem('Comentarios adicionales', requestForQuotation.additionalComments)}
                {renderGridItem('Correo de contacto', requestForQuotation.contactEmail)}
                {renderGridItem('Telefono de contacto', requestForQuotation.contactPhoneNumber)}
            </Grid>
        </>
    );
}
