import { Button, Divider, Grid, TextField, Typography } from "@mui/material";
import { useState } from "react";

interface ClientInformationProps {
    onItemSelected: (value: ClientInformation) => void;
    onHandleComplete: () => void;
}

export interface ClientInformation {
    firstName?: string;
    lastName?: string;
    contactEmail?: string;
    contactPhoneNumber?: string;
}

export const ClientInformationInput = ({ onItemSelected, onHandleComplete }: ClientInformationProps) => {

    const [clientDetails, setClientDetails] = useState<ClientInformation>({
        firstName: "",
        lastName: "",
        contactEmail: "",
        contactPhoneNumber: ""
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = event.target;
        setClientDetails(prevState => ({
            ...prevState,
            [id]: value
        }));
    };

    const handleSubmit = () => {
        onItemSelected(clientDetails);
        onHandleComplete();
    };

    return (
        <Grid justifyContent="flex-start" alignItems="flex-start" container spacing={{ xs: 1, sm: 2, md: 2 }} columns={{ xs: 1, sm: 8, md: 12 }}>
            <Grid item xs={1} sm={4} md={12}>
                <Divider>
                    <Typography variant="subtitle1">Información personal</Typography>
                </Divider>
            </Grid>
            <Grid item xs={1} sm={2} md={6}>
                <TextField id="firstName" label="Primer Nombre" variant="outlined" value={clientDetails.firstName} onChange={handleChange} fullWidth />
            </Grid>
            <Grid item xs={1} sm={2} md={6}>
                <TextField id="lastName" label="Apellidos" variant="outlined" value={clientDetails.lastName} onChange={handleChange} fullWidth />
            </Grid>
            <Grid item xs={1} sm={4} md={12}>
                <Divider>Datos de contacto</Divider>
            </Grid>
            <Grid item xs={1} sm={2} md={6}>
                <TextField id="contactEmail" label="Correo" variant="outlined" value={clientDetails.contactEmail} onChange={handleChange} fullWidth />
            </Grid>
            <Grid item xs={1} sm={2} md={6}>
                <TextField id="contactPhoneNumber" label="Telefono" variant="outlined" value={clientDetails.contactPhoneNumber} onChange={handleChange} fullWidth />
            </Grid>
            <Grid item xs={1} sm={4} md={12}>
            </Grid>
            <Grid item xs={1} sm={4} md={12}>
                <Button onClick={handleSubmit} type="submit" variant="contained">Siguiente</Button>
            </Grid>
        </Grid>
    );
}
