import { Button, Divider, Grid, TextField } from "@mui/material";
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
            <Grid justifyContent="center" container spacing={2}>
                <Grid item xs={12}>
                    <Divider>Información personal</Divider>
                </Grid>
                <Grid item xs={6}>
                    <TextField id="firstName" label="First Name" variant="outlined" value={clientDetails.firstName} onChange={handleChange} fullWidth />
                </Grid>
                <Grid item xs={6}>
                    <TextField id="lastName" label="Last Name" variant="outlined" value={clientDetails.lastName} onChange={handleChange} fullWidth />
                </Grid>
                <Grid item xs={12}>
                    <Divider>Datos de contacto</Divider>
                </Grid>
                <Grid item xs={6}>
                    <TextField id="contactEmail" label="Contact Email" variant="outlined" value={clientDetails.contactEmail} onChange={handleChange} fullWidth />
                </Grid>
                <Grid item xs={6}>
                    <TextField id="contactPhoneNumber" label="Contact Phone Number" variant="outlined" value={clientDetails.contactPhoneNumber} onChange={handleChange} fullWidth />
                </Grid>
                <Grid item xs={12}>
                </Grid>
                <Grid item xs={12}>
                    <Button onClick={handleSubmit} type="submit" variant="contained">Siguiente paso</Button>
                </Grid>
            </Grid>
    );
}
